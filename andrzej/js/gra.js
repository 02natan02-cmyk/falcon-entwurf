/* GardenBruk – gra „Ułóż brakujący kawałek drogi”
   Poziom 1 cegiełka, 2 jodełka (obracanie dotknięciem), 3 kwiat (kolory). Potem piasek i zagęszczarka. */
(function () {
  'use strict';
  const cv = document.getElementById('graCv'); if (!cv) return;
  const x = cv.getContext('2d');
  const $ = s => document.querySelector(s);
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const POZ = [{ n: 'Cegiełka', pat: 'rows', pal: 'szary' }, { n: 'Jodełka', pat: 'herring', pal: 'melanz' }, { n: 'Kwiat', pat: 'flower', pal: 'grafit' }];
  let W = 0, H = 0, D = 1, bg = null, gap = null, slots = [], lvl = 0, stan = 'demo', t0 = 0, czas = 0, pkt = 0, pudla = 0;
  let reka = null, nast = null, drag = null, fx = [], cover = null, coverN = 0, zag = null, demoT = 0, last = 0, widoczna = false, podpowiedz = null, idle = 0;
  const rek = () => { try { return +localStorage.getItem('gb-gra-rekord') || 0; } catch (e) { return 0; } };
  const setRek = v => { try { localStorage.setItem('gb-gra-rekord', v); } catch (e) { } };
  const P = () => window.Swiat && Swiat.PAL;

  function rozmiar() {
    const r = cv.getBoundingClientRect(); D = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = W * D; cv.height = H * D;
    przygotuj(lvl);
  }
  function przygotuj(n) {
    if (!window.Swiat || !W) return; lvl = n; const L = POZ[n]; const mob = W < 520;
    const gx0 = W * .1, gx1 = W * .9, gy0 = H * (mob ? .2 : .24), gy1 = H * (mob ? .62 : .66); gap = { x0: gx0, y0: gy0, x1: gx1, y1: gy1 };
    // tło: cały kawałek drogi w danym wzorze + krawężniki + trawa
    bg = document.createElement('canvas'); bg.width = W * D; bg.height = H * D;
    const area = (gx1 - gx0) * (gy1 - gy0); const KK = n === 0 ? (gy1 - gy0) / 3.1 / 100 : n === 1 ? Math.sqrt(area / 34) / 100 : Math.sqrt(area / 30) / 100;
    Swiat.swatch(bg, L.pat === 'flower' ? 'grid' : L.pat, L.pal, { dpr: D, k: KK, size: 100, joint: 4, light: false,
      colorAt: L.pat === 'flower' ? (a, b) => kwiat(a, b) ? '#d9b15f' : null : null });
    const b = bg.getContext('2d'); b.setTransform(D, 0, 0, D, 0, 0);
    const lw = W * .05; b.fillStyle = '#35512a'; b.fillRect(0, 0, lw, H); b.fillRect(W - lw, 0, lw, H);
    b.fillStyle = '#a7a39b'; b.fillRect(lw, 0, W * .012, H); b.fillRect(W - lw - W * .012, 0, W * .012, H);
    // sloty w luce
    slots = []; const k2 = Swiat.k; const pat = L.pat === 'flower' ? 'grid' : L.pat;
    const list = Swiat.stonesIn(pat, L.pal, W, H, KK, { size: 100, joint: 4 });
    for (const s of list) { const r = Math.max(s.w, s.h) / 2; const c = Math.cos(s.rot), si = Math.sin(s.rot);
      const ex = Math.abs(c) * s.w / 2 + Math.abs(si) * s.h / 2, ey = Math.abs(si) * s.w / 2 + Math.abs(c) * s.h / 2;
      if (s.x - ex >= gx0 && s.x + ex <= gx1 && s.y - ey >= gy0 && s.y + ey <= gy1) {
        const kol = L.pat === 'flower' ? (kwiat(s.x, s.y) ? 'z' : 'g') : null;
        slots.push({ x: s.x, y: s.y, w: s.w, h: s.h, rot: s.rot, kind: s.kind, col: kol === 'z' ? '#d9b15f' : s.col, kolor: kol, zaj: false, v: s.v, ori: orient(s) }); } }
    // luka: podsypka w miejscu slotów
    b.save(); b.beginPath(); slots.forEach(s => { b.save(); b.translate(s.x, s.y); b.rotate(s.rot); b.rect(-s.w / 2 - 2, -s.h / 2 - 2, s.w + 4, s.h + 4); b.restore(); }); b.restore();
    b.save(); b.beginPath(); slots.forEach(s => { const c = Math.cos(s.rot), si = Math.sin(s.rot), hw = s.w / 2 + 2, hh = s.h / 2 + 2; const pts = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map(([a, d]) => [s.x + a * c - d * si, s.y + a * si + d * c]); b.moveTo(...pts[0]); pts.slice(1).forEach(p => b.lineTo(...p)); b.closePath(); });
    b.clip(); b.fillStyle = Swiat.bedPattern || '#c9b18a'; b.fillRect(0, 0, W, H); b.restore();
    b.strokeStyle = 'rgba(70,50,30,.7)'; b.setLineDash([6, 5]); b.lineWidth = 1.6;
    slots.forEach(s => { b.save(); b.translate(s.x, s.y); b.rotate(s.rot); b.strokeRect(-s.w / 2 + 2, -s.h / 2 + 2, s.w - 4, s.h - 4); if (s.kolor === 'z') { b.fillStyle = 'rgba(217,177,95,.35)'; b.fillRect(-s.w / 2 + 3, -s.h / 2 + 3, s.w - 6, s.h - 6); } b.restore(); });
    b.setLineDash([]);
    reka = { x: W * (mob ? .5 : .5), y: H * (mob ? .82 : .84) }; nast = nowy(); cover = null; zag = null; fx = [];
    $('#graPoziom').textContent = 'Poziom ' + (n + 1) + ' · ' + L.n;
  }
  function kwiat(a, b) { const cx = W / 2, cy = (gap ? (gap.y0 + gap.y1) / 2 : H * .45), R = Math.min(W * .4, (gap ? gap.y1 - gap.y0 : H * .4) * .62);
    const dx = a - cx, dy = b - cy, d = Math.hypot(dx, dy), an = Math.atan2(dy, dx); return d < R * (0.2 + 0.8 * Math.pow(Math.abs(Math.cos(an * 3)), .8)); }
  function orient(s) { const r = ((s.rot % Math.PI) + Math.PI) % Math.PI; return (s.w > s.h) === (Math.abs(r - Math.PI / 2) > Math.PI / 4) ? 0 : 1; }
  function wolne() { return slots.filter(s => !s.zaj); }
  function nowy() { const f = wolne(); if (!f.length) return null; const L = POZ[lvl];
    let s = f[(Math.random() * f.length) | 0]; if (L.pat === 'flower') { const z = f.filter(q => q.kolor === 'z').length, g = f.length - z; const chc = Math.random() < z / (z + g) ? 'z' : 'g'; s = f.find(q => q.kolor === chc) || s; }
    const st = { w: s.w, h: s.h, rot: s.rot, kind: s.kind, col: s.kolor === 'z' ? '#d9b15f' : s.col, kolor: s.kolor, v: s.v };
    if (L.pat === 'herring' && Math.random() < .5) st.rot += Math.PI / 2;
    st.x = reka.x; st.y = reka.y; st.ori = orient(st); return st; }
  function dopasuj(st) { let best = null, bd = 1e9; const L = POZ[lvl];
    for (const s of slots) { if (s.zaj) continue; if (L.pat === 'herring' && s.ori !== st.ori) continue; if (L.pat === 'flower' && s.kolor !== st.kolor) continue;
      const d = Math.hypot(s.x - st.x, s.y - st.y); if (d < bd) { bd = d; best = s; } }
    return bd < Math.max(st.w, st.h) * .75 ? best : null; }

  /* ---------- rysowanie ---------- */
  function kamien(s, t, alpha) { x.globalAlpha = alpha == null ? 1 : alpha; Swiat.drawOne(x, { x: s.x, y: s.y, w: s.w, h: s.h, rot: s.rot, col: s.col, kind: s.kind, v: s.v }, D, t); x.globalAlpha = 1; }
  function rysuj(ts) {
    if (!bg) return; x.setTransform(1, 0, 0, 1, 0, 0); x.drawImage(bg, 0, 0); x.setTransform(D, 0, 0, D, 0, 0);
    slots.forEach(s => { if (s.zaj) kamien(s, s.t != null ? Math.min(2, s.t) : 2); });
    // paleta
    const pr = reka; x.fillStyle = 'rgba(0,0,0,.35)'; x.fillRect(pr.x - 52 + 6, pr.y - 34 + 8, 104, 68);
    x.fillStyle = '#9b7a4f'; x.fillRect(pr.x - 52, pr.y - 34, 104, 68); x.fillStyle = '#7d6040'; for (let i = 0; i < 5; i++) x.fillRect(pr.x - 52, pr.y - 34 + i * 15, 104, 4);
    if (stan === 'gra') { x.fillStyle = '#fff'; x.font = '800 12px Manrope,sans-serif'; x.textAlign = 'center'; x.fillText('zostało ' + wolne().length, pr.x, pr.y + 50); }
    if (nast && !(drag && drag.st === nast)) kamien(nast, 2);
    if (podpowiedz && stan === 'gra') { const p = podpowiedz; x.strokeStyle = `rgba(255,235,170,${.5 + Math.sin(ts / 180) * .4})`; x.lineWidth = 3; x.save(); x.translate(p.x, p.y); x.rotate(p.rot); x.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h); x.restore(); }
    if (drag) { x.globalAlpha = .3; x.fillStyle = '#000'; x.fillRect(drag.st.x - drag.st.w / 2 + 10, drag.st.y - drag.st.h / 2 + 14, drag.st.w, drag.st.h); x.globalAlpha = 1; kamien({ ...drag.st, w: drag.st.w * 1.12, h: drag.st.h * 1.12 }, 2); }
    // piasek do zamiatania
    if (cover) { const g = cover; for (let j = 0; j < g.ny; j++) for (let i = 0; i < g.nx; i++) { const v = g.c[j * g.nx + i]; if (v >= 1) continue;
      x.fillStyle = g.ukryj ? `rgba(110,90,60,${(1 - v) * .3})` : `rgba(214,190,145,${(1 - v) * .85})`; x.fillRect(g.x0 + i * g.cw, g.y0 + j * g.ch, g.cw + .5, g.ch + .5); } }
    if (zag) { const z = zag; const jx = (Math.random() - .5) * 2, jy = (Math.random() - .5) * 2; x.save(); x.translate(z.x + jx, z.y + jy); const s = W < 520 ? .8 : 1.1; x.scale(s, s);
      x.fillStyle = 'rgba(0,0,0,.38)'; x.fillRect(-26, -16, 62, 44); x.fillStyle = '#3b3d40'; x.fillRect(-30, -22, 60, 40); x.fillStyle = '#e8a419'; x.fillRect(-24, -18, 48, 26); x.fillStyle = '#1e1f21'; x.fillRect(-8, -14, 16, 12);
      x.strokeStyle = '#222'; x.lineWidth = 3; x.beginPath(); x.moveTo(-14, 18); x.lineTo(-10, 46); x.lineTo(10, 46); x.lineTo(14, 18); x.stroke(); x.restore(); }
    // efekty: kurz
    fx = fx.filter(f => (f.t += 1 / 60) < f.d); fx.forEach(f => { const a = 1 - f.t / f.d; x.fillStyle = `rgba(222,204,168,${a * .7})`; x.beginPath(); x.arc(f.x + f.vx * f.t * 60, f.y + f.vy * f.t * 60, f.r * (1 + f.t * 2), 0, 7); x.fill(); });
    // podpis fazy
    let msg = ''; if (stan === 'demo') msg = ''; else if (stan === 'gra') msg = POZ[lvl].pat === 'herring' ? 'Dotknij kamienia na palecie, żeby go obrócić' : POZ[lvl].pat === 'flower' ? 'Żółte do kwiatu, grafit dookoła' : ''; else if (stan === 'piasek') msg = 'Zasyp fugi piaskiem: przesuwaj palcem po kostce'; else if (stan === 'zag') msg = 'Przeciągnij zagęszczarkę po całej powierzchni';
    if (msg) { x.font = `800 ${W < 520 ? 13 : 15}px Manrope,sans-serif`; const tw = x.measureText(msg).width + 26; x.fillStyle = 'rgba(10,10,10,.62)'; const yy = gap.y1 + (W < 520 ? 26 : 30); rr(W / 2 - tw / 2, yy - 15, tw, 30, 15); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'center'; x.fillText(msg, W / 2, yy + 5); }
    if (stan === 'demo' && demoHand) { const h = demoHand; x.save(); x.translate(h.x, h.y); x.fillStyle = 'rgba(255,255,255,.92)'; x.beginPath(); x.arc(0, 0, 13, 0, 7); x.fill(); x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 2; x.stroke(); x.restore(); }
  }
  function rr(a, b, w, h, r) { x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }
  function kurz(px, py) { for (let i = 0; i < 10; i++) fx.push({ x: px, y: py, vx: (Math.random() - .5) * 1.6, vy: (Math.random() - .5) * 1.6, r: 2 + Math.random() * 3, t: 0, d: .5 + Math.random() * .3 }); }

  /* ---------- pętla ---------- */
  let demoHand = null, demoStep = 0;
  function petla(ts) {
    const dt = Math.min(.05, (ts - (last || ts)) / 1000); last = ts;
    if (!widoczna) { requestAnimationFrame(petla); return; }
    slots.forEach(s => { if (s.t != null && s.t < 2) s.t += dt * 2.2; });
    if (stan === 'gra') { czas = (ts - t0) / 1000; $('#graCzas').textContent = czas.toFixed(1).replace('.', ',') + ' s'; idle += dt; if (idle > 6 && !podpowiedz && nast) podpowiedz = slots.find(s => !s.zaj && (POZ[lvl].pat !== 'herring' || s.ori === nast.ori) && (POZ[lvl].pat !== 'flower' || s.kolor === nast.kolor)); }
    if (stan === 'demo' && !RM) demo(dt);
    rysuj(ts); requestAnimationFrame(petla);
  }
  function demo(dt) { // samoczynny pokaz: ręka przenosi kamienie, póki ktoś nie dotknie
    demoT += dt; if (!nast) { if (demoT > 2) { przygotuj(0); demoT = 0; } return; }
    const cel = slots.find(s => !s.zaj && (POZ[lvl].pat !== 'herring' || s.ori === nast.ori)); if (!cel) return;
    const T = 1.4, u = Math.min(1, demoT / T), e = u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
    const st = nast; st.x = reka.x + (cel.x - reka.x) * e; st.y = reka.y + (cel.y - reka.y) * e - Math.sin(u * Math.PI) * 30; demoHand = { x: st.x + 10, y: st.y + 12 };
    if (u >= 1) { cel.zaj = true; cel.t = 0; kurz(cel.x, cel.y); nast = nowy(); demoT = 0; if (wolne().length < slots.length * .45) { przygotuj(0); } }
  }

  /* ---------- sterowanie ---------- */
  function pos(e) { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  cv.addEventListener('pointerdown', e => { const p = pos(e);
    if (stan === 'demo') { // od razu łap kamień: start gry i przeciąganie jednym ruchem
      const blisko = (nast && Math.hypot(p.x - nast.x, p.y - nast.y) < Math.max(nast.w, nast.h) + 28) || Math.hypot(p.x - reka.x, p.y - reka.y) < 80;
      if (!blisko) return; start(); if (nast) { nast.x = p.x; nast.y = p.y; } }
    if (stan === 'gra' && nast) { const d = Math.hypot(p.x - nast.x, p.y - nast.y); if (d < Math.max(nast.w, nast.h) * .9 + 14) { drag = { st: nast, dx: nast.x - p.x, dy: nast.y - p.y, sx: p.x, sy: p.y, t: performance.now() }; cv.setPointerCapture(e.pointerId); } }
    if (stan === 'piasek') { cv.setPointerCapture(e.pointerId); zamiataj(p); }
    if (stan === 'zag') { cv.setPointerCapture(e.pointerId); zag.x = p.x; zag.y = p.y; zageszczaj(p); }
  });
  cv.addEventListener('click', () => { if (stan === 'demo') start(); });
  cv.addEventListener('pointercancel', () => { if (drag) { drag.st.x = reka.x; drag.st.y = reka.y; drag = null; } });
  cv.addEventListener('pointermove', e => { const p = pos(e);
    if (drag) { drag.st.x = p.x + drag.dx; drag.st.y = p.y + drag.dy; }
    if (stan === 'piasek' && e.buttons) zamiataj(p);
    if (stan === 'zag' && e.buttons) { zag.x = p.x; zag.y = p.y; zageszczaj(p); } });
  cv.addEventListener('pointerup', e => { if (!drag) return; const p = pos(e), st = drag.st;
    const tap = Math.hypot(p.x - drag.sx, p.y - drag.sy) < 8 && performance.now() - drag.t < 350; drag = null;
    if (tap && POZ[lvl].pat === 'herring') { st.rot += Math.PI / 2; st.ori = orient(st); st.x = reka.x; st.y = reka.y; podpowiedz = null; return; }
    const s = dopasuj(st); idle = 0; podpowiedz = null;
    if (s) { s.zaj = true; s.t = .6; kurz(s.x, s.y); pkt += 10; if (navigator.vibrate) try { navigator.vibrate(12); } catch (er) { }
      nast = nowy(); if (!nast) faza('piasek'); }
    else { pudla++; st.x = reka.x; st.y = reka.y; }
    $('#graPkt').textContent = pkt + ' pkt'; });

  function siatka() { return { x0: gap.x0, y0: gap.y0, nx: 14, ny: 8, cw: (gap.x1 - gap.x0) / 14, ch: (gap.y1 - gap.y0) / 8, c: new Float32Array(14 * 8) }; }
  function maluj(p, rad, ile) { const g = cover; let suma = 0; for (let j = 0; j < g.ny; j++) for (let i = 0; i < g.nx; i++) { const cx = g.x0 + (i + .5) * g.cw, cy = g.y0 + (j + .5) * g.ch;
      const d = Math.hypot(cx - p.x, cy - p.y); if (d < rad) g.c[j * g.nx + i] = Math.min(1, g.c[j * g.nx + i] + ile * (1 - d / rad)); suma += g.c[j * g.nx + i] >= 1 ? 1 : 0; }
    return suma / (g.nx * g.ny); }
  function zamiataj(p) { if (maluj(p, Math.max(50, W * .09), .7) > .86) { cover = null; pkt += 50; faza('zag'); } }
  function zageszczaj(p) { kurz(p.x + (Math.random() - .5) * 30, p.y + 30); if (maluj(p, Math.max(48, W * .08), .55) > .86) { pkt += 50; koniec(); } }
  function faza(f) { stan = f; if (f === 'piasek') { cover = siatka(); }
    if (f === 'zag') { cover = siatka(); cover.c.fill(0); cover.ukryj = true; zag = { x: reka.x, y: reka.y }; } }
  function start() { cv.classList.add('gram'); stan = 'gra'; demoHand = null; przygotuj(lvl); t0 = performance.now(); pkt = lvl === 0 ? 0 : pkt; pudla = 0; idle = 0; $('#graStart').classList.add('ukryj'); $('#graPkt').textContent = pkt + ' pkt'; }
  function koniec() { cv.classList.remove('gram'); if (lvl === POZ.length - 1) dispatchEvent(new Event('gra-koniec'));
    zag = null; cover = null; const bonus = Math.max(0, Math.round(300 - czas * 6)) - pudla * 5; pkt += bonus; $('#graPkt').textContent = pkt + ' pkt';
    const box = $('#graStart'); box.classList.remove('ukryj'); stan = 'koniec';
    const r = rek(), nowy2 = lvl === POZ.length - 1 && pkt > r; if (nowy2) setRek(pkt);
    if (lvl < POZ.length - 1) { box.innerHTML = `<button type="button" class="btn" id="graDalej">Poziom ${lvl + 2}: ${POZ[lvl + 1].n}</button><span>Ułożone w ${czas.toFixed(1).replace('.', ',')} s · ${pkt} pkt</span>`;
      $('#graDalej').addEventListener('click', () => { przygotuj(lvl + 1); start(); }); }
    else { box.innerHTML = `<button type="button" class="btn" id="graZnowu">Zagraj jeszcze raz</button><span>${nowy2 ? 'Nowy rekord na tym urządzeniu: ' : 'Wynik: '}<b>${pkt} pkt</b>. Prawdziwy podjazd ułożymy za Ciebie.</span><a class="btn jasny" href="#kontakt">Zamów pomiar</a>`;
      $('#graZnowu').addEventListener('click', () => { pkt = 0; przygotuj(0); start(); }); }
    $('#graRekord') && ($('#graRekord').textContent = rek() ? rek() + ' pkt' : 'brak');
  }
  window.__gb_test = () => { if (!nast && stan === 'gra') return { stan }; const L = POZ[lvl];
    if (stan !== 'gra') return { stan, pkt, gap, rx: reka.x, ry: reka.y };
    const cel = slots.find(s => !s.zaj && (L.pat !== 'herring' || s.ori === nast.ori) && (L.pat !== 'flower' || s.kolor === nast.kolor));
    if (!cel) return { stan, rot: true, sx: nast.x, sy: nast.y };
    return { stan, sx: nast.x, sy: nast.y, tx: cel.x, ty: cel.y, pkt }; };
  $('#graGraj').addEventListener('click', start);
  $('#graRekord').textContent = rek() ? rek() + ' pkt' : 'brak';

  new IntersectionObserver(es => es.forEach(e => { widoczna = e.isIntersecting; }), { rootMargin: '100px' }).observe(cv);
  new ResizeObserver(() => rozmiar()).observe(cv);
  addEventListener('swiat', () => { rozmiar(); requestAnimationFrame(petla); }, { once: true });
})();
