/* GardenBruk – Grunt: cała strona leży na prawdziwej kostce.
   Intro: kostka układa się na ekranie, potem unosi się i odsłania plac z drona.
   Strona: kostka układa się przy przewijaniu; pod każdą płytą treści kamienie unoszą się
   i odsłaniają informacje; na dole zapada wieczór i zapalają się latarnie. Canvas 2D, zdjęciowe tekstury. */
(function () {
  'use strict';
  const cv = document.getElementById('grunt'); if (!cv) return;
  const x = cv.getContext('2d');
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  let S = null, D = 1, vw = 0, vh = 0, K = .34, MOB = false;
  let stones = [], bands = [], BAND = 320, cache = new Map(), zones = [], plyty = [], groundTop = 0, pageH = 0, laidTo = 0, li = 0;
  let mode = 'czeka', introT0 = 0, introStones = [], introR = 1, introDone = false, odslona = false;
  let nightY = Infinity, lamps = [], shadowTile = null;
  let needs = true, running = false, lastT = 0, lastY = -1, lifted = [];
  const ZONY = { // wzór i kolor kostki pod kolejnymi częściami strony
    oferta: ['herring', 'grafit'], wzory: ['herring', 'grafit'], realizacje: ['basket', 'szary'], 'o-nas': ['rows', 'melanz'],
    producenci: ['slabs', 'bianco'], jak: ['herring', 'piaskowy'], planer: ['rows', 'szary'], 'dla-firm': ['cobble', 'granit'], kontakt: ['herring', 'grafit']
  };
  const G = window.Grunt = {
    get mode() { return mode; }, get introDone() { return introDone; },
    skipIntro() { if (mode === 'intro' && !introDone) { introT0 = performance.now() - 2300; } },
    setZone(id, pat, pal) { const z = zones.find(z => z.id === id); if (!z || (z.pat === pat && z.pal === pal)) return; z.pat = pat; z.pal = pal; przebuduj(true, z); },
    remeasure() { zmierz(); needs = true; schedule(); },
    zamroz: false, // testy: zatrzymana pętla, klatki rysowane na żądanie
    introTest(t) { G.zamroz = true; if (mode !== 'intro') { mode = 'intro'; if (!introStones.length) startIntro(); } introT0 = performance.now() - t * 1000; odslona = t > 2.15; document.body.classList.toggle('odslona', odslona); drawIntro(performance.now()); },
    klatkaTest() { G.zamroz = true; lastY = -1; needs = true; drawGrunt(performance.now(), .016); },
    get info() { return { stones: stones.length, cache: cache.size, D, K, introT0, mode }; }
  };

  /* ---------- przygotowanie ---------- */
  function cien() { const c = document.createElement('canvas'); c.width = c.height = 96; const g = c.getContext('2d'); g.shadowColor = 'rgba(0,0,0,1)'; g.shadowBlur = 18; g.fillStyle = 'rgba(0,0,0,.9)'; g.beginPath(); g.roundRect(18, 18, 60, 60, 10); g.fill(); return c; }
  function rozmiar() {
    vw = innerWidth; vh = innerHeight; MOB = vw < 820; D = Math.min(devicePixelRatio || 1, 2, Math.sqrt(5.5e6 / (vw * vh))); K = MOB ? .27 : .34;
    cv.width = Math.ceil(vw * D); cv.height = Math.ceil(vh * D); cv.style.width = vw + 'px'; cv.style.height = vh + 'px';
    cache.clear(); S.k = K;
  }
  function kamienie(pat, pal, x0, y0, x1, y1, accept, opt) { S.k = K; const L = []; S.genPattern(pat, pal, x0, y0, x1, y1, accept, L, opt || {}); return L; }

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
    x.globalAlpha = 1 - sstep(.05, .75, u); const vg = x.createRadialGradient(cx, cy, 0, cx, cy, introR * 1.3); vg.addColorStop(0, 'rgba(0,0,0,.1)'); vg.addColorStop(1, 'rgba(0,0,0,.62)'); x.fillStyle = vg; x.fillRect(0, 0, vw, vh); x.globalAlpha = 1;
    for (const s of introStones) {
      const ts = clamp((t - s.d * 1.0 - s.h1 * .1) / .42, 0, 2); if (ts <= 0) continue;
      const L = u > 0 ? sstep(s.d * .45, s.d * .45 + .5, u) : 0;
      if (L > .001) drawLifted(s, L, 0, cx, vw * .5, vh); else S.drawOne(x, s, D, ts);
    }
    if (t > 3.7 && !G.zamroz) { introDone = true; mode = 'grunt'; document.body.classList.remove('intro-leci'); dispatchEvent(new Event('grunt-intro-koniec')); zmierz(); lastY = -1; needs = true; }
  }

  /* ---------- kamień unoszony (intro i płyty) ---------- */
  function drawLifted(s, L, oy, cx, hw, lvh) {
    const sp = S.sprite(s.kind, s.w, s.h, s.col, s.v), h1 = s.h1 == null ? (s.h1 = hash(s.v + 3, (s.x * 7) | 0)) : s.h1;
    const dy = -Math.pow(L, 1.15) * (lvh * .22 + h1 * lvh * .2), dx = ((s.x - cx) / hw) * L * 46 + (h1 - .5) * L * 34;
    const sc = 1 + L * .24, al = 1 - sstep(.55, .97, L), rot = s.rot + (h1 - .5) * .55 * L, sy = s.y - oy;
    const sa = .45 * sstep(0, .22, L) * (1 - sstep(.5, .9, L));
    if (sa > .01) { x.globalAlpha = sa; const g = 1 + L * 1.1, c = Math.cos(s.rot) * D, si = Math.sin(s.rot) * D; x.setTransform(c, si, -si, c, D * (s.x + dx * .4 + L * 14), D * (sy + L * 22)); x.drawImage(shadowTile, -s.w * g / 2 - 6, -s.h * g / 2 - 6, s.w * g + 12, s.h * g + 12); }
    if (al > .01) { x.globalAlpha = al; const c = Math.cos(rot) * D * sc, si = Math.sin(rot) * D * sc; x.setTransform(c, si, -si, c, D * (s.x + dx), D * (sy + dy)); x.drawImage(sp.c, -s.w / 2, -s.h / 2, s.w, s.h); }
    x.globalAlpha = 1;
  }

  /* ---------- pomiar strony: płyty treści, strefy wzorów, latarnie ---------- */
  function zmierz() {
    const hero = document.getElementById('start'); groundTop = hero ? hero.offsetTop + hero.offsetHeight : 0;
    pageH = document.documentElement.scrollHeight;
    const y0 = scrollY;
    plyty = [...document.querySelectorAll('.plyta')].map((el, i) => { const r = el.getBoundingClientRect(); return { el, id: el.id, i, x0: r.left + scrollX - 6, y0: r.top + y0 - 6, x1: r.right + scrollX + 6, y1: r.bottom + y0 + 6, lift: 0, stones: [] }; });
    // strefy: od środka między płytami do następnego środka
    zones = []; let prev = groundTop;
    plyty.forEach((p, i) => { const next = plyty[i + 1] ? (p.y1 + plyty[i + 1].y0) / 2 : pageH + 40; const [pat, pal] = ZONY[p.id] || ['herring', 'grafit']; const z = zones.find(z => z.id === p.id); zones.push({ id: p.id, y0: prev, y1: next, pat: z ? z.pat : pat, pal: z ? z.pal : pal }); prev = next; });
    const nf = plyty.find(p => p.id === 'dla-firm'); nightY = nf ? nf.y0 - vh * .7 : Infinity;
    lamps = []; if (nf) for (let yy = nf.y0 - vh * .1, i = 0; yy < pageH - 80; yy += Math.max(380, vh * .55), i++) lamps.push({ x: i % 2 ? vw - 30 : 30, y: yy, seed: hash(i, 9) });
    przebuduj(false);
  }
  function przebuduj(tylkoStrefa, strefa) {
    const now = performance.now(); const stare = new Map(); if (tylkoStrefa) stones.forEach(s => { if (s.z !== strefa.id) stare.set(s, s.ts); });
    const out = [];
    for (const z of zones) {
      const B = K * 110; // obrzeże z jasnych kostek na granicy pól
      const field = kamienie(z.pat, z.pal, -K * 220, z.y0 + B, vw + K * 220, z.y1 - K * 6, (cx, cy, r) => cy - r * .8 >= z.y0 + B && cy + r * .8 <= z.y1 - K * 6);
      field.forEach(s => { s.z = z.id; out.push(s); });
      const br = kamienie('rows', 'bianco', -K * 220, z.y0, vw + K * 220, z.y0 + B, (cx, cy) => cy >= z.y0 && cy < z.y0 + B); br.forEach(s => { s.z = z.id; s.h = Math.min(s.h, B - K * 6); out.push(s); });
    }
    out.sort((a, b) => a.y - b.y); stones = out; bands = [];
    stones.forEach((s, i) => { s.h1 = hash(s.v + 3, (s.x * 7) | 0); const b = Math.max(0, (s.y / BAND) | 0); (bands[b] = bands[b] || []).push(i); if (tylkoStrefa) { if (s.z === strefa.id) { s.ts = s.y < laidTo ? now + s.h1 * 500 : 0; } else s.ts = stare.get(s) || (s.y < laidTo ? now - 5000 : 0); } });
    if (!tylkoStrefa) { const y = scrollY; laidTo = Math.max(laidTo, y + vh * .3); stones.forEach(s => { if (s.y < laidTo) s.ts = now - 5000; }); }
    li = 0; while (li < stones.length && stones[li].y < laidTo) li++;
    plyty.forEach(p => { p.stones = []; stones.forEach((s, i) => { if (s.y > p.y0 - 40 && s.y < p.y1 + 40 && s.x > p.x0 - 40 && s.x < p.x1 + 40) p.stones.push(i); }); });
    cache.clear(); needs = true;
  }

  /* ---------- rysowanie strony ---------- */
  function pas(b, now, y) { // czy pasmo trzeba rysować na żywo
    const list = bands[b]; if (!list) return false;
    for (const p of plyty) if (p.lift > .001 && p.y1 > b * BAND && p.y0 < (b + 1) * BAND) return true;
    for (const i of list) { const s = stones[i]; if (!s.ts || now - s.ts < 700) return true; }
    return false;
  }
  function rysujPasmo(b, now, y, live) {
    const list = bands[b]; if (!list) return;
    if (!live) {
      let c = cache.get(b);
      if (!c) { c = document.createElement('canvas'); c.width = cv.width; c.height = Math.ceil(BAND * D); const g = c.getContext('2d'); const oy = b * BAND; for (const i of list) { const s = stones[i]; s.y -= oy; S.drawOne(g, s, D, 2); s.y += oy; } cache.set(b, c);
        if (cache.size > 8) { let far = null, fd = -1; for (const k of cache.keys()) { const d = Math.abs(k * BAND - y); if (d > fd) { fd = d; far = k; } } cache.delete(far); } }
      x.setTransform(1, 0, 0, 1, 0, 0); x.drawImage(c, 0, Math.round((b * BAND - y) * D)); return;
    }
    for (const i of list) { const s = stones[i]; if (s.L > .001 || !s.ts) continue; const t = clamp((now - s.ts) / 480, 0, 2); if (t <= 0) continue; s.y -= y; S.drawOne(x, s, D, t); s.y += y; }
  }
  function drawGrunt(now, dt) {
    const y = scrollY;
    // układanie: kamienie poniżej frontu spadają na miejsce
    const front = y + vh * .8; let laying = false;
    if (front > laidTo) { while (li < stones.length && stones[li].y < front) { const s = stones[li]; if (!s.ts) s.ts = now + s.h1 * 240; li++; } laidTo = front; }
    // płyty: unoszenie
    let anim = false;
    for (const p of plyty) { const enter = (y + vh - p.y0) / (vh * .55), leave = (y + vh * .25 - p.y1) / (vh * .3); const cel = sstep(0, 1, enter) * (1 - sstep(0, 1, leave));
      const prev = p.lift; p.lift = RM ? cel : prev + (cel - prev) * (1 - Math.pow(.0005, dt)); if (Math.abs(cel - p.lift) < .002) p.lift = cel; if (p.lift !== prev) { anim = anim || Math.abs(cel - p.lift) > .001; p.el.style.setProperty('--lift', p.lift.toFixed(3)); } }
    for (const s of lifted) s.L = 0; lifted = [];
    for (const p of plyty) { if (p.lift <= .001) continue; const hp = p.y1 - p.y0; for (const i of p.stones) { const s = stones[i]; const d = clamp((s.y - p.y0) / hp, 0, 1) * .42 + s.h1 * .14; const L = sstep(d, d + .5, p.lift * 1.06); if (L > .001) { s.L = L; lifted.push(s); } } }
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    const gTop = groundTop - y; if (gTop > vh) return anim;
    // podsypka
    x.setTransform(D, 0, 0, D, 0, -y); x.fillStyle = S.bedPattern || '#c9b48d'; x.fillRect(0, groundTop, vw, Math.min(pageH, y + vh + 2) - groundTop);
    // wykopy pod płytami
    for (const p of plyty) { if (p.lift <= .01) continue; const a = sstep(.08, .55, p.lift), w = p.x1 - p.x0, h = p.y1 - p.y0;
      x.globalAlpha = a; x.fillStyle = 'rgba(16,13,10,.86)'; x.beginPath(); x.roundRect(p.x0, p.y0, w, h, 18); x.fill();
      const e = 70; let g = x.createLinearGradient(0, p.y0, 0, p.y0 + e); g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(p.x0, p.y0, w, e);
      g = x.createLinearGradient(0, p.y1 - e, 0, p.y1); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.45)'); x.fillStyle = g; x.fillRect(p.x0, p.y1 - e, w, e);
      g = x.createLinearGradient(p.x0, 0, p.x0 + e, 0); g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(p.x0, p.y0, e, h);
      g = x.createLinearGradient(p.x1 - e, 0, p.x1, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.45)'); x.fillStyle = g; x.fillRect(p.x1 - e, p.y0, e, h); x.globalAlpha = 1; }
    // kostka pasmami
    const b0 = Math.max(0, Math.floor(Math.max(y, groundTop) / BAND)), b1 = Math.floor((y + vh) / BAND);
    for (let b = b0; b <= b1; b++) { const live = pas(b, now, y); if (live) laying = true; rysujPasmo(b, now, y, live); }
    // uniesione kamienie
    for (const p of plyty) { if (p.lift <= .001) continue; const cx = (p.x0 + p.x1) / 2, hw = Math.max(1, (p.x1 - p.x0) / 2); for (const i of p.stones) { const s = stones[i]; if (s.L > .001) drawLifted(s, s.L, y, cx, hw, vh); } }
    // wieczór: niebieski mrok i latarnie
    if (nightY < Infinity && y + vh > nightY) {
      x.setTransform(D, 0, 0, D, 0, -y); x.globalCompositeOperation = 'multiply'; const g = x.createLinearGradient(0, nightY, 0, nightY + vh * 1.3); g.addColorStop(0, 'rgba(14,20,44,0)'); g.addColorStop(1, 'rgba(14,20,44,.66)'); x.fillStyle = g; x.fillRect(0, Math.max(groundTop, nightY), vw, pageH);
      x.globalCompositeOperation = 'lighter';
      for (const l of lamps) { if (l.y < y - vh * .6 || l.y > y + vh * 1.6) continue; const on = sstep(0, 1, (y + vh * .9 - l.y) / (vh * .18)); if (on <= 0) continue; const fl = on < 1 && !RM ? (hash((now / 70) | 0, l.seed * 1e4) > .35 ? 1 : .35) : 1; const a = on * fl;
        const r = Math.min(vw, vh) * (MOB ? .62 : .5); const rg = x.createRadialGradient(l.x, l.y, 0, l.x, l.y, r); rg.addColorStop(0, `rgba(255,176,86,${.5 * a})`); rg.addColorStop(.35, `rgba(255,150,60,${.18 * a})`); rg.addColorStop(1, 'rgba(255,140,50,0)'); x.fillStyle = rg; x.fillRect(l.x - r, l.y - r, r * 2, r * 2);
        x.fillStyle = `rgba(255,236,190,${.95 * a})`; x.beginPath(); x.arc(l.x, l.y, 7, 0, 6.3); x.fill(); x.fillStyle = `rgba(255,220,150,${.35 * a})`; x.beginPath(); x.arc(l.x, l.y, 16, 0, 6.3); x.fill(); if (on < 1) anim = true; }
      x.globalCompositeOperation = 'source-over';
    }
    x.setTransform(1, 0, 0, 1, 0, 0);
    return anim || laying;
  }

  /* ---------- pętla ---------- */
  function frame(now) {
    running = false; if (G.zamroz) return; const dt = Math.min(.05, (now - (lastT || now)) / 1000); lastT = now;
    if (mode === 'intro') { drawIntro(now); schedule(); return; }
    if (mode !== 'grunt' || !S) return;
    const y = scrollY; if (!needs && y === lastY) return; lastY = y; needs = false;
    const dalej = drawGrunt(now, dt); if (dalej) { needs = true; schedule(); }
  }
  function schedule() { if (!running) { running = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', () => { needs = true; schedule(); }, { passive: true });
  let rT = 0, lw = 0, lh = 0;
  addEventListener('resize', () => { if (Math.abs(innerWidth - lw) < 2 && Math.abs(innerHeight - lh) < 120) return; clearTimeout(rT); rT = setTimeout(() => { lw = innerWidth; lh = innerHeight; rozmiar(); if (mode === 'grunt') zmierz(); needs = true; lastY = -1; schedule(); }, 150); });
  new ResizeObserver(() => { if (mode !== 'grunt') return; const h = document.documentElement.scrollHeight; if (Math.abs(h - pageH) > 24) { zmierz(); needs = true; lastY = -1; schedule(); } }).observe(document.body);

  function start() {
    S = window.Swiat; shadowTile = cien(); lw = innerWidth; lh = innerHeight; rozmiar();
    const skip = RM || location.hash.length > 1;
    if (skip) { introDone = true; mode = 'grunt'; odslona = true; dispatchEvent(new Event('grunt-odslona')); dispatchEvent(new Event('grunt-intro-koniec')); zmierz(); }
    else { const img = document.querySelector('#start img'); const gotowe = img && !img.complete ? new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); setTimeout(r, 4000); }) : Promise.resolve();
      gotowe.then(() => { startIntro(); needs = true; schedule(); }); return; }
    needs = true; schedule();
  }
  if (window.Swiat && window.Swiat.bedPattern) start(); else addEventListener('swiat', start, { once: true });
})();
