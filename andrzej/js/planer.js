/* GardenBruk – planer: zdjęcie podwórka + kostka w perspektywie (homografia, wszystko lokalnie w przeglądarce) */
(function () {
  'use strict';
  const cv = document.getElementById('plCv'); if (!cv) return;
  const x = cv.getContext('2d'); const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, D = 1, foto = null, przyklad = true, tex = null, wz = 'herring', kol = 'grafit', suwak = .55, rogi = null, chw = -1, ruszony = false, impuls = null, widac = false;

  const PRZ = new Image(); PRZ.decoding = 'async'; PRZ.src = 'img/real/przyklad.webp'; const ROGI_P = [[.43, .235], [1.0, .235], [1.0, 1.0], [.72, 1.0]];
  PRZ.onload = () => { if (przyklad) { foto = PRZ; rogi = ROGI_P.map(r => r.slice()); if (W) rysuj(); } };
  const przykladFoto = () => (PRZ.complete && PRZ.naturalWidth ? PRZ : scenaPrzyklad());
  function rozmiar() { const r = cv.getBoundingClientRect(); if (!r.width) return; D = Math.min(devicePixelRatio || 1, 2); const old = W; W = r.width; H = r.width * .75; cv.width = W * D; cv.height = H * D;
    if (!foto) foto = przykladFoto(); if (!rogi || !old) rogi = foto === PRZ ? ROGI_P.map(r => r.slice()) : [[.18, .55], [.82, .55], [1.02, .98], [-.02, .98]]; tekstura(); rysuj(); }
  /* przykładowe podwórko (rysowane) */
  function scenaPrzyklad() {
    const c = document.createElement('canvas'); c.width = 1200; c.height = 900; const g = c.getContext('2d');
    let gr = g.createLinearGradient(0, 0, 0, 420); gr.addColorStop(0, '#8fb7d9'); gr.addColorStop(1, '#dce9f1'); g.fillStyle = gr; g.fillRect(0, 0, 1200, 420);
    g.fillStyle = '#6f8f5a'; g.beginPath(); g.moveTo(0, 360); for (let i = 0; i <= 12; i++) g.lineTo(i * 100, 330 + Math.sin(i * 1.7) * 26); g.lineTo(1200, 430); g.lineTo(0, 430); g.fill();
    // dom
    g.fillStyle = '#ebe6dc'; g.fillRect(170, 150, 860, 330); g.fillStyle = '#3e3f44'; g.beginPath(); g.moveTo(130, 160); g.lineTo(600, 40); g.lineTo(1070, 160); g.fill();
    g.fillStyle = '#5a5c61'; g.fillRect(230, 290, 300, 190); for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#64666b' : '#55575c'; g.fillRect(230, 290 + i * 24, 300, 24); }
    g.fillStyle = '#4a3427'; g.fillRect(640, 300, 110, 180); g.fillStyle = '#d9b15f'; g.fillRect(728, 380, 8, 8);
    g.fillStyle = '#9fb7c6'; [[800, 250], [910, 250], [640, 200]].forEach(([a, b]) => { g.fillRect(a, b, 80, 70); g.strokeStyle = '#fff'; g.lineWidth = 6; g.strokeRect(a, b, 80, 70); });
    // ziemia + trawa
    gr = g.createLinearGradient(0, 470, 0, 900); gr.addColorStop(0, '#5e7f45'); gr.addColorStop(1, '#3d5a2c'); g.fillStyle = gr; g.fillRect(0, 470, 1200, 430);
    g.fillStyle = '#8a7457'; g.beginPath(); g.moveTo(210, 480); g.lineTo(990, 480); g.lineTo(1230, 900); g.lineTo(-30, 900); g.fill();
    for (let i = 0; i < 5000; i++) { const yy = 480 + Math.random() * 420; g.fillStyle = `rgba(${Math.random() < .5 ? '60,45,30' : '160,140,110'},.25)`; g.fillRect(Math.random() * 1200, yy, 2 + (yy - 480) / 120, 2 + (yy - 480) / 160); }
    g.fillStyle = 'rgba(0,0,0,.18)'; g.beginPath(); g.moveTo(170, 480); g.lineTo(1030, 480); g.lineTo(1080, 520); g.lineTo(120, 520); g.fill();
    const im = new Image(); im.src = c.toDataURL('image/jpeg', .9); im.w = 1200; im.h = 900; return im;
  }
  function tekstura() { if (!window.Swiat) return; tex = document.createElement('canvas'); tex.width = tex.height = W < 600 ? 1100 : 1500;
    const pal = wz === 'cobble' ? (kol === 'grafit' ? 'granit' : kol === 'braz' ? 'rozowy' : kol) : kol; Swiat.swatch(tex, wz, pal, { dpr: 1, k: tex.width / 6500, light: false }); }

  /* homografia kwadrat → czworokąt */
  function homo(q) { const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q; const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
    let g = 0, h = 0; if (Math.abs(sx) > 1e-9 || Math.abs(sy) > 1e-9) { const den = dx1 * dy2 - dx2 * dy1; g = (sx * dy2 - dx2 * sy) / den; h = (dx1 * sy - sx * dy1) / den; }
    const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, c = x0, d = y1 - y0 + g * y1, e = y3 - y0 + h * y3, f = y0;
    return (u, v) => { const w = g * u + h * v + 1; return [(a * u + b * v + c) / w, (d * u + e * v + f) / w]; }; }
  function tri(img, s0, s1, s2, d0, d1, d2) {
    x.save(); x.beginPath(); const cx = (d0[0] + d1[0] + d2[0]) / 3, cy = (d0[1] + d1[1] + d2[1]) / 3; const ex = p => [p[0] + (p[0] - cx) * .02, p[1] + (p[1] - cy) * .02];
    const e0 = ex(d0), e1 = ex(d1), e2 = ex(d2); x.moveTo(e0[0], e0[1]); x.lineTo(e1[0], e1[1]); x.lineTo(e2[0], e2[1]); x.closePath(); x.clip();
    const den = s0[0] * (s1[1] - s2[1]) + s1[0] * (s2[1] - s0[1]) + s2[0] * (s0[1] - s1[1]);
    const a = (d0[0] * (s1[1] - s2[1]) + d1[0] * (s2[1] - s0[1]) + d2[0] * (s0[1] - s1[1])) / den, b = (d0[1] * (s1[1] - s2[1]) + d1[1] * (s2[1] - s0[1]) + d2[1] * (s0[1] - s1[1])) / den;
    const c = (d0[0] * (s2[0] - s1[0]) + d1[0] * (s0[0] - s2[0]) + d2[0] * (s1[0] - s0[0])) / den, d = (d0[1] * (s2[0] - s1[0]) + d1[1] * (s0[0] - s2[0]) + d2[1] * (s1[0] - s0[0])) / den;
    const e = (d0[0] * (s1[0] * s2[1] - s2[0] * s1[1]) + d1[0] * (s2[0] * s0[1] - s0[0] * s2[1]) + d2[0] * (s0[0] * s1[1] - s1[0] * s0[1])) / den;
    const f = (d0[1] * (s1[0] * s2[1] - s2[0] * s1[1]) + d1[1] * (s2[0] * s0[1] - s0[0] * s2[1]) + d2[1] * (s0[0] * s1[1] - s1[0] * s0[1])) / den;
    x.transform(a, b, c, d, e, f); x.drawImage(img, 0, 0); x.restore(); }
  function rysujFoto() { const im = foto, iw = im.naturalWidth || im.w, ih = im.naturalHeight || im.h; const s = Math.max(W / iw, H / ih); x.drawImage(im, (W - iw * s) / 2, (H - ih * s) / 2, iw * s, ih * s); }
  function q() { return rogi.map(([a, b]) => [a * W, b * H]); }
  function rysuj() {
    if (!W || !foto) return; x.setTransform(D, 0, 0, D, 0, 0); x.clearRect(0, 0, W, H); rysujFoto();
    if (!tex) { return; }
    const Q = q(), Hm = homo(Q), N = 14, T = tex.width;
    x.save(); x.beginPath(); x.rect(W * suwak, 0, W, H); x.clip();
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const u0 = i / N, u1 = (i + 1) / N, v0 = j / N, v1 = (j + 1) / N;
      const p00 = Hm(u0, v0), p10 = Hm(u1, v0), p11 = Hm(u1, v1), p01 = Hm(u0, v1);
      tri(tex, [u0 * T, v0 * T], [u1 * T, v0 * T], [u1 * T, v1 * T], p00, p10, p11); tri(tex, [u0 * T, v0 * T], [u1 * T, v1 * T], [u0 * T, v1 * T], p00, p11, p01); }
    // cieniowanie ze zdjęcia: zachowuje cienie i światło
    x.save(); x.beginPath(); Q.forEach((p, i) => i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1])); x.closePath(); x.clip();
    x.globalCompositeOperation = 'multiply'; x.globalAlpha = .38; x.filter = 'grayscale(1) contrast(1.25) brightness(1.25)'; rysujFoto(); x.filter = 'none'; x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
    const gr = x.createLinearGradient(0, Math.min(Q[0][1], Q[1][1]), 0, Math.max(Q[2][1], Q[3][1])); gr.addColorStop(0, 'rgba(0,0,0,.18)'); gr.addColorStop(1, 'rgba(255,255,255,.06)'); x.fillStyle = gr; x.fillRect(0, 0, W, H); x.restore();
    // obrzeże
    x.strokeStyle = '#b9b4aa'; x.lineJoin = 'round'; for (let i = 0; i < 4; i++) { const a = Q[i], b = Q[(i + 1) % 4]; x.lineWidth = 3 + ((a[1] + b[1]) / 2 / H) * 9; x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); }
    x.restore();
    // suwak przed/po
    const sx = W * suwak; x.fillStyle = 'rgba(255,255,255,.95)'; x.fillRect(sx - 1.5, 0, 3, H); x.beginPath(); x.arc(sx, H / 2, 20, 0, 7); x.fill();
    x.fillStyle = '#16181b'; x.beginPath(); x.moveTo(sx - 12, H / 2); x.lineTo(sx - 5, H / 2 - 7); x.lineTo(sx - 5, H / 2 + 7); x.fill(); x.beginPath(); x.moveTo(sx + 12, H / 2); x.lineTo(sx + 5, H / 2 - 7); x.lineTo(sx + 5, H / 2 + 7); x.fill();
    x.font = '800 13px Manrope,sans-serif'; x.textAlign = 'left'; lab('PRZED', 12, 24); x.textAlign = 'right'; lab('PO', W - 12, 24);
    // rogi
    Q.forEach(([a, b], i) => { x.beginPath(); x.arc(a, b, chw === i ? 15 : 12, 0, 7); x.fillStyle = 'rgba(217,177,95,.95)'; x.fill(); x.lineWidth = 3; x.strokeStyle = '#16181b'; x.stroke(); });
    if (przyklad) { x.textAlign = 'left'; lab('Przykład: prawdziwy podjazd · wgraj swoje zdjęcie', 12, H - 14); }
  }
  function lab(t, a, b) { const w = x.measureText(t).width; const al = x.textAlign; x.fillStyle = 'rgba(10,10,10,.6)'; const l = al === 'right' ? a - w - 8 : a - 8; x.fillRect(l, b - 16, w + 16, 24); x.fillStyle = '#fff'; x.fillText(t, a, b); }

  /* sterowanie */
  function pos(e) { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left), (e.clientY - r.top)]; }
  let tryb = null;
  cv.addEventListener('pointerdown', e => { const [a, b] = pos(e); ruszony = true; impuls = null; $('#plImpuls').classList.add('znika'); const Q = q();
    chw = Q.findIndex(([u, v]) => Math.hypot(u - a, v - b) < 26); tryb = chw >= 0 ? 'rog' : 'suwak'; cv.setPointerCapture(e.pointerId); if (tryb === 'suwak') { suwak = Math.min(1, Math.max(0, a / W)); } rysuj(); });
  cv.addEventListener('pointermove', e => { if (!tryb) return; const [a, b] = pos(e);
    if (tryb === 'rog') rogi[chw] = [Math.min(1.1, Math.max(-.1, a / W)), Math.min(1.1, Math.max(-.1, b / H))]; else suwak = Math.min(1, Math.max(0, a / W)); rysuj(); });
  cv.addEventListener('pointerup', () => { tryb = null; chw = -1; rysuj(); });
  const wczytaj = e => { const f = e.target.files[0]; if (!f) return; const url = URL.createObjectURL(f); const im = new Image(); im.onload = () => { foto = im; przyklad = false; suwak = .5; rogi = [[.2, .58], [.8, .58], [.98, .97], [.02, .97]]; rysuj(); window.GBtoast && GBtoast('Przeciągnij żółte punkty na rogi podjazdu albo tarasu.'); }; im.src = url; };
  $('#plPlik').addEventListener('change', wczytaj); const ap = $('#plAparat'); if (ap) ap.addEventListener('change', wczytaj);
  $('#plPrzyklad').addEventListener('click', () => { foto = przykladFoto(); przyklad = true; rogi = foto === PRZ ? ROGI_P.map(r => r.slice()) : [[.18, .55], [.82, .55], [1.02, .98], [-.02, .98]]; setTimeout(rysuj, 60); });
  $$('[data-plw]').forEach(b => b.addEventListener('click', () => { wz = b.dataset.plw; $$('[data-plw]').forEach(c => { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); tekstura(); rysuj(); }));
  $$('[data-plk]').forEach(b => b.addEventListener('click', () => { kol = b.dataset.plk; $$('[data-plk]').forEach(c => { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); tekstura(); rysuj(); }));
  function opis() { return $('[data-plw].on').textContent + ', ' + $('[data-plk].on').textContent.trim().toLowerCase(); }
  function blob(cb) { const s = suwak; suwak = 0; rysuj(); cv.toBlob(b => { suwak = s; rysuj(); cb(b); }, 'image/jpeg', .9); }
  $('#plZapisz').addEventListener('click', () => blob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'GardenBruk_wizualizacja.jpg'; document.body.appendChild(a); a.click(); a.remove(); }));
  $('#plWyslij').addEventListener('click', () => blob(async b => {
    window.GBdodaj && GBdodaj({ id: 'planer-' + wz + '-' + kol, nazwa: 'Wizualizacja z planera: ' + opis(), ile: null, jedn: 'm²', pat: wz, pal: kol });
    const file = new File([b], 'GardenBruk_wizualizacja.jpg', { type: 'image/jpeg' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: 'Moja wizualizacja – GardenBruk', text: 'Wizualizacja z planera GardenBruk: ' + opis() }); return; } catch (e) { } }
    window.GBtoast && GBtoast('Dodano do zapytania. Obraz zapiszesz przyciskiem „Zapisz obraz” i dołączysz w WhatsApp.');
  }));
  // impuls: suwak sam się przesuwa przy pierwszym widoku
  function anim(ts) { if (!impuls) return; const t = (ts - impuls) / 1000; suwak = .55 + Math.sin(t * 2.2) * .3 * Math.max(0, 1 - t / 3.2); rysuj(); if (t < 3.2) requestAnimationFrame(anim); else { suwak = .55; rysuj(); } }
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !widac) { widac = true; if (!RM && !ruszony) { impuls = performance.now(); requestAnimationFrame(anim); } } }), { threshold: .5 }).observe(cv);
  new ResizeObserver(rozmiar).observe(cv);
  addEventListener('swiat', () => { rozmiar(); }, { once: true });
})();
