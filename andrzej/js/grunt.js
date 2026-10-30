/* GardenBruk – Grunt v5: cała strona jest brukiem.
   Intro: kostka układa się na ekranie, potem unosi się i odsłania plac z drona.
   Strona: kostka układa się przy przewijaniu. Każda część treści to wyłożone w bruku pole: jasne obrzeże
   i ciemna kostka z ciemną fugą, układane kamień po kamieniu. Zdjęcia, karty i formularz to płyty (elementy .slab),
   które wpadają w wykopane pod nie otwory, z pyłem przy lądowaniu. Na dole zapada wieczór i zapalają się latarnie.
   Canvas 2D, tekstury ze zdjęć (swiat2d.js). */
(function () {
  'use strict';
  const cv = document.getElementById('grunt'); if (!cv) return;
  const x = cv.getContext('2d');
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  let S = null, D = 1, vw = 0, vh = 0, K = .34, MOB = false;
  let stones = [], bands = [], BAND = 320, cache = new Map(), zones = [], pola = [], slaby = [], wjazdy = [], groundTop = 0, pageH = 0, laidTo = 0, li = 0, kurz = [];
  let mode = 'czeka', introT0 = 0, introStones = [], introR = 1, introDone = false, odslona = false;
  let nightY = Infinity, lamps = [], shadowTile = null;
  let needs = true, running = false, lastT = 0, lastY = -1;
  const FUGA = '#2a2521'; // ciemna fuga wewnątrz pól
  const ZONY = { // wzór i kolor bruku wokół kolejnych części strony
    oferta: ['herring', 'szary'], wzory: ['herring', 'grafit'], realizacje: ['basket', 'granit'], 'o-nas': ['rows', 'melanz'],
    producenci: ['slabs', 'bianco'], jak: ['herring', 'piaskowy'], planer: ['rows', 'szary'], 'dla-firm': ['cobble', 'granit'], kontakt: ['herring', 'grafit']
  };
  const G = window.Grunt = {
    get mode() { return mode; }, get introDone() { return introDone; },
    skipIntro() { if (mode === 'intro' && !introDone) introT0 = performance.now() - 2300; },
    setZone(id, pat, pal) { const z = zones.find(z => z.id === id); if (!z || (z.pat === pat && z.pal === pal)) return; z.pat = pat; z.pal = pal; przebuduj(z); schedule(); },
    remeasure() { if (mode !== 'grunt') return; zmierz(); needs = true; lastY = -1; schedule(); },
    zamroz: false, // testy: zatrzymana pętla, klatki na żądanie
    introTest(t) { G.zamroz = true; if (mode !== 'intro') { mode = 'intro'; if (!introStones.length) startIntro(); } introT0 = performance.now() - t * 1000; odslona = t > 2.15; document.body.classList.toggle('odslona', odslona); drawIntro(performance.now()); },
    klatkaTest() { G.zamroz = true; lastY = -1; needs = true; drawGrunt(performance.now(), .016); },
    get info() { return { stones: stones.length, cache: cache.size, D, K, mode, pola: pola.length, slaby: slaby.length, laidTo }; }
  };

  /* ---------- przygotowanie ---------- */
  function cien() { const c = document.createElement('canvas'); c.width = c.height = 96; const g = c.getContext('2d'); g.shadowColor = 'rgba(0,0,0,1)'; g.shadowBlur = 18; g.fillStyle = 'rgba(0,0,0,.9)'; g.beginPath(); g.roundRect(18, 18, 60, 60, 10); g.fill(); return c; }
  function rozmiar() {
    vw = innerWidth; vh = innerHeight; MOB = vw < 820; D = Math.min(devicePixelRatio || 1, 2, Math.sqrt(5.5e6 / (vw * vh))); K = MOB ? .27 : .34;
    cv.width = Math.ceil(vw * D); cv.height = Math.ceil(vh * D); cv.style.width = vw + 'px'; cv.style.height = vh + 'px';
    cache.clear(); S.k = K;
  }
  function kamienie(pat, pal, x0, y0, x1, y1, accept, opt) { S.k = K; const L = []; S.genPattern(pat, pal, x0, y0, x1, y1, accept, L, opt || {}); return L; }
  function st(cx, cy, w, h, pal, layer, z) { const p = S.PAL[pal]; return { x: cx, y: cy, w, h, rot: 0, col: p[(hash(cx | 0, cy | 0) * p.length) | 0], kind: 'block', v: (hash(cy | 0, cx | 0) * 6) | 0, key: cy, poly: null, w8: layer, z }; }

  /* ---------- intro ---------- */
  function startIntro() {
    mode = 'intro'; introT0 = performance.now();
    const cx = vw * .5, cy = vh * .5; introR = Math.hypot(vw, vh) * .55;
    introStones = kamienie('herring', 'grafit', -40, -40, vw + 40, vh + 40, () => true);
    introStones.forEach(s => { s.d = Math.hypot(s.x - cx, s.y - cy) / introR; s.h1 = hash(s.v + 3, (s.x * 7) | 0); });
    document.body.classList.add('intro-leci');
  }
  function drawIntro(now) {
    const t = (now - introT0) / 1000, cx = vw * .5, cy = vh * .5;
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    const u = clamp((t - 2.3) / 1.15, 0, 1); // unoszenie
    if (!odslona && t > 2.15) { odslona = true; dispatchEvent(new Event('grunt-odslona')); }
    x.setTransform(D, 0, 0, D, 0, 0); x.globalAlpha = 1 - sstep(.05, .75, u); x.fillStyle = S.bedPattern || '#c9b48d'; x.fillRect(0, 0, vw, vh);
    const vg = x.createRadialGradient(cx, cy, 0, cx, cy, introR * 1.3); vg.addColorStop(0, 'rgba(0,0,0,.1)'); vg.addColorStop(1, 'rgba(0,0,0,.62)'); x.fillStyle = vg; x.fillRect(0, 0, vw, vh); x.globalAlpha = 1;
    for (const s of introStones) {
      const ts = clamp((t - s.d * 1.0 - s.h1 * .1) / .42, 0, 2); if (ts <= 0) continue;
      const L = u > 0 ? sstep(s.d * .45, s.d * .45 + .5, u) : 0;
      if (L > .001) drawLifted(s, L, cx, vw * .5, vh); else S.drawOne(x, s, D, ts);
    }
    if (t > 3.7 && !G.zamroz) { introDone = true; mode = 'grunt'; document.body.classList.remove('intro-leci'); dispatchEvent(new Event('grunt-intro-koniec')); zmierz(); lastY = -1; needs = true; }
  }
  function drawLifted(s, L, cx, hw, lvh) {
    const sp = S.sprite(s.kind, s.w, s.h, s.col, s.v), h1 = s.h1;
    const dy = -Math.pow(L, 1.15) * (lvh * .22 + h1 * lvh * .2), dx = ((s.x - cx) / hw) * L * 46 + (h1 - .5) * L * 34;
    const sc = 1 + L * .24, al = 1 - sstep(.55, .97, L), rot = s.rot + (h1 - .5) * .55 * L;
    const sa = .45 * sstep(0, .22, L) * (1 - sstep(.5, .9, L));
    if (sa > .01) { x.globalAlpha = sa; const g = 1 + L * 1.1, c = Math.cos(s.rot) * D, si = Math.sin(s.rot) * D; x.setTransform(c, si, -si, c, D * (s.x + dx * .4 + L * 14), D * (s.y + L * 22)); x.drawImage(shadowTile, -s.w * g / 2 - 6, -s.h * g / 2 - 6, s.w * g + 12, s.h * g + 12); }
    if (al > .01) { x.globalAlpha = al; const c = Math.cos(rot) * D * sc, si = Math.sin(rot) * D * sc; x.setTransform(c, si, -si, c, D * (s.x + dx), D * (s.y + dy)); x.drawImage(sp.c, -s.w / 2, -s.h / 2, s.w, s.h); }
    x.globalAlpha = 1;
  }

  /* ---------- pomiar strony (bez transformacji, więc płyty w locie nie psują pomiaru) ---------- */
  function rectL(el) { let xx = 0, yy = 0, e = el; while (e) { xx += e.offsetLeft; yy += e.offsetTop; e = e.offsetParent; } return { x0: xx, y0: yy, x1: xx + el.offsetWidth, y1: yy + el.offsetHeight }; }
  function zmierz() {
    const hero = document.getElementById('start'); groundTop = hero ? hero.offsetTop + hero.offsetHeight : 0;
    pageH = document.documentElement.scrollHeight;
    const B = K * 108; // obrzeże: kostka 10 cm z fugami
    pola = [...document.querySelectorAll('.pole')].map((el, i) => { const r = rectL(el); return { el, id: el.id, i, ...r, B, ix0: r.x0 + B, iy0: r.y0 + B, ix1: r.x1 - B, iy1: r.y1 - B, holes: [] }; });
    const stare = new Map(slaby.map(s => [s.el, s]));
    slaby = [...document.querySelectorAll('.pole .slab')].map(el => { const r = rectL(el); const p = pola.find(p => p.el.contains(el)); const o = stare.get(el); const s = { el, ...r, lezy: el.classList.contains('lezy'), t0: o ? o.t0 : 0 }; if (p) p.holes.push({ x0: r.x0 - 5, y0: r.y0 - 5, x1: r.x1 + 5, y1: r.y1 + 5 }); return s; });
    wjazdy = [...document.querySelectorAll('.pole .wjazd')].map(el => { const r = rectL(el); return { el, y1: r.y1, jest: el.classList.contains('jest') }; });
    const stareZ = zones; zones = []; let prev = groundTop;
    pola.forEach((p, i) => { const next = pola[i + 1] ? (p.y1 + pola[i + 1].y0) / 2 : pageH + 40; const [pat, pal] = ZONY[p.id] || ['herring', 'grafit']; const z = stareZ.find(z => z.id === p.id); zones.push({ id: p.id, y0: prev, y1: next, pat: z ? z.pat : pat, pal: z ? z.pal : pal }); prev = next; });
    const nf = pola.find(p => p.id === 'dla-firm'); nightY = nf ? nf.y0 - vh * .7 : Infinity;
    lamps = []; if (nf) for (let yy = nf.y0 - vh * .1, i = 0; yy < pageH - 80; yy += Math.max(380, vh * .55), i++) lamps.push({ x: i % 2 ? vw - 30 : 30, y: yy, seed: hash(i, 9) });
    przebuduj(null);
  }
  const wPolu = (cx, cy, p, m) => cx > p.x0 + m && cx < p.x1 - m && cy > p.y0 + m && cy < p.y1 - m; // kamień wokół pola może zachodzić pod obrzeże (docięty)
  function rzad(x0, x1, cy, h, L, J, pal, layer, out, z, polowki) { // rząd dopasowany do szerokości: końcowe kamienie docięte
    const n = Math.max(1, Math.round((x1 - x0 + J) / (L + J)));
    if (!polowki || n < 2) { const w = (x1 - x0 - (n - 1) * J) / n; for (let i = 0; i < n; i++) out.push(st(x0 + i * (w + J) + w / 2, cy, w, h, pal, layer, z)); return; }
    const w = L, pol = (x1 - x0 - (n - 1) * w - n * J) / 2; let xx = x0;
    out.push(st(xx + pol / 2, cy, pol, h, pal, layer, z)); xx += pol + J;
    for (let i = 0; i < n - 1; i++) { out.push(st(xx + w / 2, cy, w, h, pal, layer, z)); xx += w + J; }
    out.push(st(xx + pol / 2, cy, pol, h, pal, layer, z));
  }
  function kolumna(y0, y1, cx, w, L, J, pal, layer, out, z) { const n = Math.max(1, Math.round((y1 - y0 + J) / (L + J))), h = (y1 - y0 - (n - 1) * J) / n; for (let i = 0; i < n; i++) out.push(st(cx, y0 + i * (h + J) + h / 2, w, h, pal, layer, z)); }
  function obrzeze(p, out) { // jasna opaska z kostki 20×10 dookoła pola
    const L = K * 200, W = K * 100, J = K * 4, x0 = p.x0 + J, x1 = p.x1 - J, y0 = p.y0 + J, y1 = p.y1 - J;
    for (const cy of [y0 + W / 2, y1 - W / 2]) rzad(x0, x1, cy, W, L, J, 'bianco', 2, out, p.id, false);
    for (const cx of [x0 + W / 2, x1 - W / 2]) kolumna(y0 + W + J, y1 - W - J, cx, W, L, J, 'bianco', 2, out, p.id);
  }
  function wnetrze(p, out) { // ciemna cegiełka wewnątrz pola, z połówkami co drugi rząd
    const L = K * 200, W = K * 100, J = K * 3, x0 = p.ix0 + J, x1 = p.ix1 - J, y0 = p.iy0 + J, y1 = p.iy1 - J;
    if (x1 - x0 < K * 60 || y1 - y0 < K * 60) return;
    const n = Math.max(1, Math.round((y1 - y0 + J) / (W + J))), h = (y1 - y0 - (n - 1) * J) / n;
    for (let r = 0; r < n; r++) rzad(x0, x1, y0 + r * (h + J) + h / 2, h, L, J, 'grafit', 1, out, p.id, r % 2 === 1);
  }
  function przebuduj(strefa) {
    const now = performance.now(), swieze = strefa ? strefa.id : null; const out = [];
    for (const z of zones) {
      const BZ = K * 110, mv = z.pat === 'rows' || z.pat === 'slabs' ? .49 : z.pat === 'cobble' ? .55 : .7; // pionowy zasięg kamienia względem r
      const pole = kamienie(z.pat, z.pal, -K * 220, z.y0 + BZ, vw + K * 220, z.y1 - K * 6, (cx, cy, r) => cy - r * mv >= z.y0 + BZ && cy + r * mv <= z.y1 - K * 6 && !pola.some(p => wPolu(cx, cy, p, r * .45)));
      pole.forEach(s => { s.z = z.id; s.w8 = 0; out.push(s); });
      const br = kamienie('rows', 'bianco', -K * 220, z.y0, vw + K * 220, z.y0 + BZ, (cx, cy, r) => cy >= z.y0 && cy < z.y0 + BZ && !pola.some(p => wPolu(cx, cy, p, r * .45)));
      br.forEach(s => { s.z = z.id; s.w8 = 0; s.h = Math.min(s.h, BZ - K * 6); out.push(s); });
    }
    for (const p of pola) { wnetrze(p, out); obrzeze(p, out); }
    out.sort((a, b) => a.y - b.y); stones = out; bands = [];
    if (!strefa) laidTo = Math.max(laidTo, scrollY + vh * .3);
    stones.forEach((s, i) => { s.h1 = hash(s.v + 3, (s.x * 7) | 0); const R = Math.hypot(s.w, s.h) / 2 + 3; s.b0 = Math.max(0, ((s.y - R) / BAND) | 0); s.b1 = Math.max(0, ((s.y + R) / BAND) | 0);
      for (let b = s.b0; b <= s.b1; b++) (bands[b] = bands[b] || []).push(i);
      s.ts = s.y < laidTo ? (s.z === swieze && !s.w8 ? now + s.h1 * 500 : now - 5000) : 0; });
    bands.forEach(l => l.sort((i, j) => (stones[i].w8 - stones[j].w8) || (stones[i].y - stones[j].y)));
    li = 0; while (li < stones.length && stones[li].y < laidTo) li++;
    if (!strefa) { // treść, która już leży nad frontem, jest od razu widoczna
      for (const w of wjazdy) if (!w.jest && w.y1 < laidTo) { w.jest = true; w.el.classList.add('od-razu', 'jest'); }
      for (const s of slaby) if (!s.lezy && s.y1 < laidTo) { s.lezy = true; s.el.classList.add('od-razu', 'lezy'); } }
    cache.clear(); needs = true;
  }

  /* ---------- rysowanie strony ---------- */
  function pas(b, now) { const list = bands[b]; if (!list) return false; for (const i of list) { const s = stones[i]; if (s.ts && now - s.ts < 700) return true; } return false; }
  function rysujDo(g, b, now, live, oy) {
    const list = bands[b]; if (!list) return; const J = K * 4;
    for (const i of list) { const s = stones[i];
      if (!s.ts) continue; const t = live ? clamp((now - s.ts) / 480, 0, 2) : 2; if (t <= 0) continue;
      if (s.w8 > 0) { // ciemna fuga pojawia się razem z kostką pola i obrzeża
        g.setTransform(D, 0, 0, D, 0, 0); g.globalAlpha = Math.min(1, t * 1.5); g.fillStyle = FUGA; g.fillRect(s.x - s.w / 2 - J, s.y - s.h / 2 - J - oy, s.w + 2 * J, s.h + 2 * J); g.globalAlpha = 1; }
      s.y -= oy; S.drawOne(g, s, D, t); s.y += oy; }
  }
  function pasmo(b, now, y) {
    if (pas(b, now)) { x.save(); x.setTransform(D, 0, 0, D, 0, 0); x.beginPath(); x.rect(0, b * BAND - y, vw, BAND); x.clip(); rysujDo(x, b, now, true, y); x.restore(); return true; }
    let c = cache.get(b);
    if (!c) { c = document.createElement('canvas'); c.width = cv.width; c.height = Math.ceil(BAND * D); rysujDo(c.getContext('2d'), b, now, false, b * BAND); cache.set(b, c);
      if (cache.size > 8) { let far = null, fd = -1; for (const k of cache.keys()) { const d = Math.abs(k * BAND - y); if (d > fd) { fd = d; far = k; } } cache.delete(far); } }
    x.setTransform(1, 0, 0, 1, 0, 0); x.drawImage(c, 0, Math.round((b * BAND - y) * D)); return false;
  }
  function kurzPlyty(s) { // pył przy lądowaniu płyty
    const n = MOB ? 12 : 20, w = s.x1 - s.x0, h = s.y1 - s.y0;
    for (let i = 0; i < n; i++) { const u = i / (n - 1), bok = i % 2 ? -1 : 1;
      kurz.push({ x: s.x0 + u * w + (Math.random() - .5) * 14, y: s.y1 - 4 + Math.random() * 8, vx: (Math.random() - .5) * 26 + (u - .5) * 44, vy: -16 - Math.random() * 50, t: Math.random() * .12, r: 1.2 + Math.random() * 2.4, zyj: .5 + Math.random() * .35 });
      kurz.push({ x: s.x0 + (bok > 0 ? w : 0), y: s.y0 + Math.random() * h, vx: bok * (18 + Math.random() * 40), vy: -8 - Math.random() * 28, t: 0, r: 1.2 + Math.random() * 2, zyj: .45 + Math.random() * .3 }); }
    needs = true; schedule();
  }
  function otwor(h, doY) { // wykop pod płytę: ciemniejszy piasek i cień wewnętrzny, kopany w miarę układania
    const w = h.x1 - h.x0, hh = Math.min(h.y1, doY) - h.y0; if (hh <= 2) return; const e = Math.min(16, w * .2, hh * .2);
    x.save(); x.beginPath(); x.roundRect(h.x0, h.y0, w, hh, 4); x.clip();
    x.fillStyle = S.bedPattern || '#c9b48d'; x.fillRect(h.x0, h.y0, w, hh); x.fillStyle = 'rgba(30,22,14,.62)'; x.fillRect(h.x0, h.y0, w, hh);
    let g = x.createLinearGradient(0, h.y0, 0, h.y0 + e); g.addColorStop(0, 'rgba(0,0,0,.62)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(h.x0, h.y0, w, e);
    g = x.createLinearGradient(h.x0, 0, h.x0 + e, 0); g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(h.x0, h.y0, e, hh);
    g = x.createLinearGradient(h.x1 - e, 0, h.x1, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.25)'); x.fillStyle = g; x.fillRect(h.x1 - e, h.y0, e, hh);
    x.restore();
  }
  function drawGrunt(now, dt) {
    const y = scrollY, front = y + vh * .8; let anim = false;
    if (front > laidTo) {
      while (li < stones.length && stones[li].y < front) { const s = stones[li]; if (!s.ts) { s.ts = now + s.h1 * 240 + (s.w8 ? 140 : 0); for (let b = s.b0; b <= s.b1; b++) cache.delete(b); } li++; }
      laidTo = front; let n = 0;
      for (const w of wjazdy) if (!w.jest && front > w.y1 + 6) { w.jest = true; w.el.classList.add('jest'); }
      for (const s of slaby) if (!s.lezy && front > s.y1 + 10) { s.lezy = true; const d = 200 + Math.min(n, 6) * 90; n++; s.el.style.setProperty('--opoz', d + 'ms'); s.el.classList.add('lezy'); if (!RM) setTimeout(() => kurzPlyty(s), d + 330); }
    }
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    if (groundTop - y > vh) return anim;
    const T = () => x.setTransform(D, 0, 0, D, 0, -y * D);
    T(); x.fillStyle = S.bedPattern || '#c9b48d'; x.fillRect(0, groundTop, vw, Math.min(pageH, y + vh + 2) - groundTop);
    const b0 = Math.max(0, Math.floor(Math.max(y, groundTop) / BAND)), b1 = Math.floor((y + vh) / BAND);
    for (let b = b0; b <= b1; b++) if (pasmo(b, now, y)) anim = true;
    T();
    for (const p of pola) { if (p.y1 < y - 40 || p.y0 > y + vh + 40) continue; for (const h of p.holes) if (h.y1 > y && h.y0 < y + vh && h.y0 < laidTo - 6) otwor(h, laidTo - 6); }
    if (kurz.length) { anim = true; for (const q of kurz) { q.t += dt; q.x += q.vx * dt; q.y += q.vy * dt; q.vy += 70 * dt; q.vx *= .96; } kurz = kurz.filter(q => q.t < q.zyj);
      for (const q of kurz) { const a = (1 - q.t / q.zyj) * .7; x.fillStyle = `rgba(214,196,160,${a})`; x.beginPath(); x.arc(q.x, q.y, q.r * (1 + q.t * 1.8), 0, 6.3); x.fill(); } }
    if (nightY < Infinity && y + vh > nightY) { // wieczór: niebieski mrok i latarnie
      x.globalCompositeOperation = 'multiply'; const g = x.createLinearGradient(0, nightY, 0, nightY + vh * 1.3); g.addColorStop(0, 'rgba(14,20,44,0)'); g.addColorStop(1, 'rgba(14,20,44,.66)'); x.fillStyle = g; x.fillRect(0, Math.max(groundTop, nightY), vw, pageH);
      x.globalCompositeOperation = 'lighter';
      for (const l of lamps) { if (l.y < y - vh * .6 || l.y > y + vh * 1.6) continue; const on = sstep(0, 1, (y + vh * .9 - l.y) / (vh * .18)); if (on <= 0) continue; const fl = on < 1 && !RM ? (hash((now / 70) | 0, l.seed * 1e4) > .35 ? 1 : .35) : 1; const a = on * fl;
        const r = Math.min(vw, vh) * (MOB ? .62 : .5); const rg = x.createRadialGradient(l.x, l.y, 0, l.x, l.y, r); rg.addColorStop(0, `rgba(255,176,86,${.5 * a})`); rg.addColorStop(.35, `rgba(255,150,60,${.18 * a})`); rg.addColorStop(1, 'rgba(255,140,50,0)'); x.fillStyle = rg; x.fillRect(l.x - r, l.y - r, r * 2, r * 2);
        x.fillStyle = `rgba(255,236,190,${.95 * a})`; x.beginPath(); x.arc(l.x, l.y, 7, 0, 6.3); x.fill(); x.fillStyle = `rgba(255,220,150,${.35 * a})`; x.beginPath(); x.arc(l.x, l.y, 16, 0, 6.3); x.fill(); if (on < 1) anim = true; }
      x.globalCompositeOperation = 'source-over';
    }
    x.setTransform(1, 0, 0, 1, 0, 0);
    return anim;
  }

  /* ---------- pętla ---------- */
  function frame(now) {
    running = false; if (G.zamroz) return; const dt = Math.min(.05, (now - (lastT || now)) / 1000); lastT = now;
    if (mode === 'intro') { drawIntro(now); schedule(); return; }
    if (mode !== 'grunt' || !S) return;
    const y = scrollY; if (!needs && y === lastY) return; lastY = y; needs = false;
    if (drawGrunt(now, dt)) { needs = true; schedule(); }
  }
  function schedule() { if (!running) { running = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', () => { needs = true; schedule(); }, { passive: true });
  let rT = 0, lw = 0, lh = 0;
  addEventListener('resize', () => { if (!S) return; if (Math.abs(innerWidth - lw) < 2 && Math.abs(innerHeight - lh) < 120) return; clearTimeout(rT); rT = setTimeout(() => { lw = innerWidth; lh = innerHeight; rozmiar(); if (mode === 'grunt') zmierz(); needs = true; lastY = -1; schedule(); }, 150); });
  new ResizeObserver(() => { if (!S || mode !== 'grunt') return; const h = document.documentElement.scrollHeight; if (Math.abs(h - pageH) > 24) { zmierz(); needs = true; lastY = -1; schedule(); } }).observe(document.body);

  function start() {
    S = window.Swiat; shadowTile = cien(); lw = innerWidth; lh = innerHeight; rozmiar();
    document.documentElement.classList.add('grunt');
    const skip = RM || location.hash.length > 1;
    if (skip) { introDone = true; mode = 'grunt'; odslona = true; document.body.classList.add('odslona'); dispatchEvent(new Event('grunt-odslona')); dispatchEvent(new Event('grunt-intro-koniec')); zmierz(); needs = true; schedule(); return; }
    const img = document.querySelector('#start img'); const gotowe = img && !img.complete ? new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); setTimeout(r, 4000); }) : Promise.resolve();
    gotowe.then(() => { startIntro(); needs = true; schedule(); });
  }
  if (window.Swiat && window.Swiat.bedPattern) start(); else addEventListener('swiat', start, { once: true });
})();
