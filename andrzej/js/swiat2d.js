/* GardenBruk – Świat: jedna ścieżka z kostki przez całą stronę.
   Widok z drona, kostka układa się przy przewijaniu, wzory zmieniają się co rozdział,
   dzień → wieczór → noc, latarnie zapalają się po obu stronach. Canvas 2D, bez bibliotek. */
(function () {
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LIB = !document.getElementById('swiat');
  const cv = document.getElementById('swiat') || document.createElement('canvas');
  const g = cv.getContext('2d', { alpha: false });
  let DPR = 1, vw = 0, vh = 0, mobile = false, docH = 0, k = 0.16;
  let sy = 0, front = 0, tNow = 0, introT0 = 0, introDone = false, dirty = true;
  const STEP = 4;               // krok próbkowania ścieżki (px)
  let PX, PW, PS;               // środek, połowa szerokości (poziomo), nachylenie
  let pathY0 = 0, pathY1 = 0;
  let secs = [], plazas = [], lamps = [], deco = [], clouds = [];
  let stones = [], buckets = [], BUCK = 128;
  let bands = new Map(), bandOrder = [];
  const BAND = 160;
  const FALL = 120, SAND = 190;
  let LT = 512, BT = 256; let zwirPat = null; let lawnPat = null, bedPat = null, bedDarkPat = null, sandSpeck = null;
  const sprites = new Map();

  /* ---------- losowość powtarzalna ---------- */
  function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; }; }
  function hash(x, y) { let h = (x * 374761393 + y * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const mix = (a, b, t) => a + (b - a) * t;

  /* ---------- palety (nazwy jak w katalogach) ---------- */
  const PAL = {
    grafit: ['#3c3d42', '#46474c', '#505156', '#5a5a5e'],
    szary: ['#878681', '#7b7a76', '#93918c', '#8d8b85'],
    melanz: ['#9a5d38', '#bd8e5a', '#6e4a33', '#8b877a', '#b0744a', '#a37a55'],
    piaskowy: ['#cbb48c', '#bea57b', '#d5c29f', '#c4ad86'],
    bianco: ['#dbd7ce', '#cdc8bd', '#e3e0d8', '#d3cfc5'],
    granit: ['#8e8c87', '#a19e98', '#7b7975', '#96938d', '#86847f'],
    rozowy: ['#a8897f', '#b59c92', '#9a7d73', '#ad948a'],
    braz: ['#5c4535', '#6a5140', '#4f3b2e', '#735a47'],
    kwarcyt: ['#c9b796', '#a89878', '#d8cdb4', '#8c7d63', '#b5a78a', '#9d8f74'],
    lupek: ['#5e6062', '#6d6963', '#55575a', '#77736b'],
    zolty: ['#d9b15f', '#cfa452', '#e2bd6e'],
    zielony: ['#2f8f45', '#36a04f', '#2a7f3d'],
    bialy: ['#ece8df', '#e3dfd5']
  };

  /* ---------- tekstury ---------- */
  function tile(size, paint) { const c = document.createElement('canvas'); c.width = c.height = size; paint(c.getContext('2d'), size); return c; }
  function makeTextures() {
    const L = tile(512, (x, n) => {
      const r = rng(7); const gr = x.createLinearGradient(0, 0, n, n); gr.addColorStop(0, '#36522a'); gr.addColorStop(1, '#2f4a25');
      x.fillStyle = gr; x.fillRect(0, 0, n, n);
      for (let i = 0; i < 9000; i++) { const px = r() * n, py = r() * n, l = 2 + r() * 5, a = r() * 6.28;
        x.strokeStyle = `hsla(${88 + r() * 30},${35 + r() * 25}%,${16 + r() * 22}%,${0.35 + r() * 0.4})`; x.lineWidth = 0.7 + r() * 0.8;
        x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke(); }
      for (let i = 0; i < 60; i++) { x.fillStyle = r() < .5 ? 'rgba(240,235,200,.55)' : 'rgba(250,210,90,.5)'; x.beginPath(); x.arc(r() * n, r() * n, 0.9 + r(), 0, 7); x.fill(); }
    });
    lawnPat = g.createPattern(MAT.trawa ? MAT.trawa.img : L, 'repeat'); LT = MAT.trawa ? MAT.trawa.h : 512;
    const B = (dark) => tile(256, (x, n) => {
      const r = rng(dark ? 11 : 13); x.fillStyle = dark ? '#57493a' : '#c9b18a'; x.fillRect(0, 0, n, n);
      for (let i = 0; i < 7000; i++) { const v = r(); x.fillStyle = dark ? `rgba(${v < .5 ? '30,24,18' : '120,104,84'},${0.2 + r() * 0.35})` : `rgba(${v < .5 ? '140,118,84' : '232,218,190'},${0.25 + r() * 0.4})`;
        x.fillRect(r() * n, r() * n, 1 + r() * 1.4, 1 + r() * 1.4); }
    });
    bedPat = g.createPattern(MAT.piasek ? MAT.piasek.img : B(false), 'repeat'); BT = MAT.piasek ? MAT.piasek.h : 256;
    if (MAT.zwir) zwirPat = g.createPattern(MAT.zwir.img, 'repeat');
    bedDarkPat = g.createPattern(B(true), 'repeat');
    sandSpeck = tile(128, (x, n) => { const r = rng(5); for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(${r() < .5 ? '214,196,160' : '190,168,128'},${0.5 + r() * 0.5})`; x.fillRect(r() * n, r() * n, 1.2 + r(), 1.2 + r()); } });
  }

  /* ---------- materiały ze zdjęć (fotorealizm) ---------- */
  const MAT = {}; let matReady = false;
  const DEKO = {}; const DEKOS = ['drzewo1', 'drzewo2', 'krzew1', 'krzew2'];
  const MATS = { grafit: 'img/tex/grafit.webp', jasny: 'img/tex/jasny.webp', melanz: 'img/tex/melanz.webp', granit: 'img/tex/granit.webp', kwarcyt: 'img/tex/kwarcyt.webp', trawa: 'img/tex/trawa.webp', piasek: 'img/tex/piasek.webp', zwir: 'img/tex/zwir.webp' };
  const MATOF = { grafit: 'grafit', lupek: 'grafit', melanz: 'melanz', granit: 'granit', rozowy: 'granit', kwarcyt: 'kwarcyt' };
  function loadMats() {
    return Promise.all(Object.entries(MATS).map(([k, src]) => new Promise(res => { const im = new Image(); im.decoding = 'async'; im.onload = () => {
      const c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0);
      const m = { img: c, w: c.width, h: c.height };
      if (k === 'grafit' || k === 'jasny') { // mapa szczegółów: jasność wokół 50 % do nakładania na dowolny kolor
        const d = x.getImageData(0, 0, c.width, c.height), a = d.data; let sum = 0; for (let i = 0; i < a.length; i += 4) sum += a[i] * .3 + a[i + 1] * .59 + a[i + 2] * .11; const mean = sum / (a.length / 4);
        for (let i = 0; i < a.length; i += 4) { const l = a[i] * .3 + a[i + 1] * .59 + a[i + 2] * .11; const v = clamp(128 + (l - mean) * 1.15, 0, 255); a[i] = a[i + 1] = a[i + 2] = v; }
        const dc = document.createElement('canvas'); dc.width = c.width; dc.height = c.height; dc.getContext('2d').putImageData(d, 0, 0); m.detail = dc; }
      MAT[k] = m; res(); }; im.onerror = () => res(); im.src = src; }))
      .concat(DEKOS.map(n => new Promise(res => { const im = new Image(); im.onload = () => { DEKO[n] = im; res(); }; im.onerror = () => res(); im.src = 'img/deko/' + n + '.webp'; }))))
      .then(() => { matReady = !!MAT.grafit; });
  }
  function mirrorTile(src, size) { // płytka bez szwów: 2×2 lustrzane odbicie
    const c = document.createElement('canvas'); c.width = c.height = size * 2; const x = c.getContext('2d');
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { x.save(); x.translate(i ? size * 2 : 0, j ? size * 2 : 0); x.scale(i ? -1 : 1, j ? -1 : 1); x.drawImage(src, 0, 0, size, size); x.restore(); }
    return c; }

  /* ---------- sprite kamienia ---------- */
  function hexToRgb(h) { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function shade(rgb, f) { return `rgb(${clamp(rgb[0] * f, 0, 255) | 0},${clamp(rgb[1] * f, 0, 255) | 0},${clamp(rgb[2] * f, 0, 255) | 0})`; }
  function sprite(kind, w, h, col, vari) {
    if (kind === 'dome') { w = Math.max(4, Math.round(w / 2) * 2); h = Math.max(4, Math.round(h / 2) * 2); }
    const key = kind + '|' + (w * 2 | 0) + '|' + (h * 2 | 0) + '|' + col + '|' + vari + '|' + DPR;
    let s = sprites.get(key); if (s) return s;
    const W = Math.max(2, Math.ceil(w * DPR)), H = Math.max(2, Math.ceil(h * DPR));
    const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
    const rgb = hexToRgb(col), r = rng(vari * 977 + W * 31 + H), f = 0.92 + r() * 0.16;
    const rad = kind === 'dome' ? Math.min(W, H) * 0.32 : kind === 'slab' ? Math.min(W, H) * 0.04 : Math.min(W, H) * 0.12;
    x.beginPath(); rr(x, 0, 0, W, H, rad);
    const palName = Object.keys(PAL).find(n => PAL[n].includes(col)) || 'grafit', mk = MATOF[palName], mm = matReady && (MAT[mk || 'jasny']);
    if (mm) { // fotorealistyczna powierzchnia
      x.save(); x.clip(); const sc = (mm.w / 650) / (k || .16) / DPR; // 650 mm tekstury na całą szerokość
      const cw = W * sc, ch = H * sc, ox = r() * Math.max(1, mm.w - cw), oy = r() * Math.max(1, mm.h - ch);
      if (mm.detail) { x.fillStyle = shade(rgb, f); x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'overlay'; x.globalAlpha = palName === 'grafit' || palName === 'lupek' ? .95 : .8; x.drawImage(mm.detail, ox, oy, cw, ch, 0, 0, W, H); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over'; }
      else { x.drawImage(mm.img, ox, oy, cw, ch, 0, 0, W, H); if (palName === 'rozowy') { x.globalCompositeOperation = 'color'; x.globalAlpha = .45; x.fillStyle = col; x.fillRect(0, 0, W, H); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over'; }
        x.fillStyle = f > 1 ? `rgba(255,255,255,${(f - 1) * 1.2})` : `rgba(0,0,0,${(1 - f) * 1.4})`; x.fillRect(0, 0, W, H); }
      if (kind === 'dome') { const gr = x.createRadialGradient(W * .36, H * .32, 0, W * .5, H * .5, Math.max(W, H) * .74); gr.addColorStop(0, 'rgba(255,255,255,.28)'); gr.addColorStop(.5, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.5)'); x.fillStyle = gr; x.fillRect(0, 0, W, H); }
      else bevel(x, W, H, kind);
      x.restore(); s = { c, w, h }; sprites.set(key, s); return s; }
    if (kind === 'dome') { const gr = x.createRadialGradient(W * .38, H * .34, 0, W * .5, H * .5, Math.max(W, H) * .72);
      gr.addColorStop(0, shade(rgb, f * 1.28)); gr.addColorStop(.55, shade(rgb, f)); gr.addColorStop(1, shade(rgb, f * .62)); x.fillStyle = gr; }
    else x.fillStyle = shade(rgb, f);
    x.fill(); x.save(); x.clip();
    const n = (W * H) / (kind === 'slab' ? 9 : 5);
    for (let i = 0; i < n; i++) { const v = r(); x.fillStyle = v < .5 ? `rgba(255,255,255,${0.05 + r() * 0.1})` : `rgba(0,0,0,${0.06 + r() * 0.12})`; x.fillRect(r() * W, r() * H, 0.6 * DPR + r() * DPR, 0.6 * DPR + r() * DPR); }
    if (col === PAL.granit[0] || kind === 'dome') for (let i = 0; i < n / 6; i++) { x.fillStyle = r() < .5 ? 'rgba(20,20,20,.35)' : 'rgba(250,245,240,.3)'; x.fillRect(r() * W, r() * H, DPR * 1.2, DPR * 1.2); }
    if (kind !== 'dome') { // faza: jasna krawędź góra-lewo, cień dół-prawo
      const e = Math.max(1.2, Math.min(W, H) * 0.14);
      let gr = x.createLinearGradient(0, 0, 0, e); gr.addColorStop(0, 'rgba(255,255,255,.32)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, W, e);
      gr = x.createLinearGradient(0, 0, e, 0); gr.addColorStop(0, 'rgba(255,255,255,.2)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, e, H);
      gr = x.createLinearGradient(0, H - e, 0, H); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.42)'); x.fillStyle = gr; x.fillRect(0, H - e, W, e);
      gr = x.createLinearGradient(W - e, 0, W, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.32)'); x.fillStyle = gr; x.fillRect(W - e, 0, e, H);
      if (kind === 'slab') { x.strokeStyle = 'rgba(0,0,0,.05)'; x.lineWidth = DPR; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(r() * W, 0); x.bezierCurveTo(r() * W, H * .3, r() * W, H * .7, r() * W, H); x.stroke(); } }
    }
    x.restore();
    s = { c, w, h }; sprites.set(key, s); return s;
  }
  function bevel(x, W, H, kind) { // faza 3–5 mm: jasna krawędź od słońca, cień po drugiej stronie, lekkie zaokrąglenie
    const e = Math.max(1.4, Math.min(W, H) * (kind === 'slab' ? .06 : .16));
    let gr = x.createLinearGradient(0, 0, 0, e); gr.addColorStop(0, 'rgba(255,250,240,.38)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, W, e);
    gr = x.createLinearGradient(0, 0, e, 0); gr.addColorStop(0, 'rgba(255,250,240,.24)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, e, H);
    gr = x.createLinearGradient(0, H - e * 1.2, 0, H); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(10,8,6,.5)'); x.fillStyle = gr; x.fillRect(0, H - e * 1.2, W, e * 1.2);
    gr = x.createLinearGradient(W - e * 1.2, 0, W, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(10,8,6,.4)'); x.fillStyle = gr; x.fillRect(W - e * 1.2, 0, e * 1.2, H);
    x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = Math.max(1, DPR * .7); x.strokeRect(.5, .5, W - 1, H - 1); }
  function rr(x, a, b, w, h, r) { x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r); x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath(); }

  /* ---------- geometria ścieżki ---------- */
  function sideX(side, w) {
    if (side === 'c') return vw / 2;
    if (mobile) return side === 'l' ? vw * 0.07 : vw * 0.93;
    const m = Math.max(w / 2 + vw * 0.035, vw * 0.22);
    return side === 'l' ? m : vw - m;
  }
  function widthFor(side, wf) {
    if (mobile) return side === 'c' ? vw * (wf || 0.62) : vw * 0.34;
    return side === 'c' ? Math.min(vw * (wf || 0.42), 760) : clamp(vw * 0.27, 300, 520);
  }
  function measure() {
    secs = [...document.querySelectorAll('[data-pat]')].map((el, i) => {
      const r = el.getBoundingClientRect(), y0 = r.top + scrollY, y1 = y0 + r.height;
      return { el, i, y0, y1, h: r.height, side: el.dataset.side || 'c', pat: el.dataset.pat, pal: el.dataset.pal || 'grafit', wf: parseFloat(el.dataset.w || '0'), lamps: el.hasAttribute('data-lamps'), gap: el.hasAttribute('data-gap'), id: el.id };
    });
  }
  function buildPath() {
    const n = Math.ceil(docH / STEP) + 2; PX = new Float32Array(n); PW = new Float32Array(n); PS = new Float32Array(n);
    const kf = [];
    secs.forEach(s => { const w = widthFor(s.side, s.wf); let x = sideX(s.side, w); const ov = s.el.dataset[mobile ? 'pxm' : 'pxd']; if (ov) x = vw * parseFloat(ov); const hold = HOLD(s);
      kf.push({ y: s.y0 + s.h * hold, x, w }); kf.push({ y: s.y1 - s.h * hold, x, w }); });
    pathY0 = plazas.length ? plazas[0].y : kf[0].y; pathY1 = secs.length ? secs[secs.length - 1].y1 - (mobile ? vh * .2 : vh * .28) : docH;
    let j = 0;
    for (let i = 0; i < n; i++) { const y = i * STEP;
      while (j < kf.length - 2 && kf[j + 1].y < y) j++;
      const a = kf[j], b = kf[Math.min(j + 1, kf.length - 1)];
      let t = b.y > a.y ? clamp((y - a.y) / (b.y - a.y), 0, 1) : 0; t = t * t * t * (t * (t * 6 - 15) + 10);
      if (y < kf[0].y) t = 0;
      PX[i] = mix(a.x, b.x, t); PW[i] = mix(a.w, b.w, t) / 2; }
    for (let i = 1; i < n - 1; i++) PS[i] = (PX[i + 1] - PX[i - 1]) / (2 * STEP);
    for (let i = 0; i < n; i++) PW[i] *= Math.sqrt(1 + PS[i] * PS[i]);
  }
  function HOLD(s) { return s.side === 'c' ? 0.2 : 0.33; }
  const idx = y => clamp((y / STEP) | 0, 0, PX.length - 1);
  const cxAt = y => PX[idx(y)], hwAt = y => PW[idx(y)], slAt = y => PS[idx(y)];
  function inStrip(x, y, r) { if (y < pathY0 - r || y > pathY1 + r) return false; return Math.abs(x - cxAt(y)) < hwAt(y) + r; }
  function inPlaza(x, y, pad) { for (const p of plazas) { const dx = x - p.x, dy = y - p.y; if (dx * dx + dy * dy < (p.R + pad) * (p.R + pad)) return p; } return null; }

  /* ---------- wzory ---------- */
  function pick(pal, r) { const a = PAL[pal] || PAL.grafit; return a[(r * a.length) | 0]; }
  function add(list, x, y, w, h, rot, col, kind, key) { list.push({ x, y, w, h, rot, col, kind: kind || 'block', v: (hash(x | 0, y | 0) * 6) | 0, key: key == null ? y : key, poly: null }); }
  const MM = v => v * k;
  function genPattern(pat, pal, bx0, by0, bx1, by1, accept, out, opt) {
    opt = opt || {};
    const J = MM(opt.joint || 4);
    if (pat === 'rows' || pat === 'slabs') { // cegiełka / płyty na mijankę
      const L = MM(pat === 'slabs' ? 600 : 200), W = MM(pat === 'slabs' ? 300 : 100);
      for (let y = by0, row = 0; y < by1 + W; y += W + J, row++) { const off = (row % 2) * (L + J) / 2 + hash(row, 3) * 0;
        for (let x = bx0 - L - off; x < bx1 + L; x += L + J) { const cx = x + L / 2, cy = y + W / 2; if (accept(cx, cy, L / 2)) add(out, cx, cy, L, W, 0, pick(pal, hash(cx | 0, cy | 0)), pat === 'slabs' ? 'slab' : 'block'); } }
    } else if (pat === 'herring') { // jodełka 45°
      const L = MM(200), Wd = MM(100), u = Wd + J * 0.7, cs = Math.SQRT1_2, ox = (bx0 + bx1) / 2, oy = by0;
      const ext = Math.hypot(bx1 - bx0, by1 - by0) + L * 2, N = Math.ceil(ext / u);
      for (let a = -N; a <= N; a++) for (let b = -Math.ceil(N / 4) - 1; b <= Math.ceil(N / 4) + 1; b++) {
        // H: [0,2u]x[0,u], V: [0,u]x[u,3u] w siatce (u,u),(2u,-2u)
        const bx = a * u + b * 2 * u, byy = a * u - b * 2 * u;
        const P = [[bx + u, byy + u / 2, 2 * u - J * .7, u - J * .7], [bx + u / 2, byy + 2 * u, u - J * .7, 2 * u - J * .7]];
        for (const [lx, ly, w, h] of P) { const x = ox + (lx - ly) * cs, y = oy + (lx + ly) * cs; if (y < by0 - L || y > by1 + L) continue;
          if (accept(x, y, L / 2)) add(out, x, y, w, h, Math.PI / 4, pick(pal, hash(x | 0, y | 0))); }
      }
    } else if (pat === 'basket') { // koszyk
      const L = MM(200), W = MM(100), S = L + J;
      for (let y = by0, r = 0; y < by1 + S; y += S, r++) for (let x = bx0 - S, c = 0; x < bx1 + S; x += S, c++) {
        const hor = (r + c) % 2 === 0;
        for (let q = 0; q < 2; q++) { const cx = hor ? x + L / 2 : x + W / 2 + q * (W + J), cy = hor ? y + W / 2 + q * (W + J) : y + L / 2;
          if (accept(cx, cy, L / 2)) add(out, cx, cy, hor ? L : W, hor ? W : L, 0, pick(pal, hash(cx | 0, cy | 0))); }
      }
    } else if (pat === 'cobble') { // kostka granitowa rzędowa
      const r = rng((by0 | 0) + 17);
      for (let y = by0; y < by1 + MM(120);) { const rowH = MM(90 + r() * 25); let x = bx0 - MM(60) - r() * MM(80);
        while (x < bx1 + MM(120)) { const w = MM(85 + r() * 40); const cx = x + w / 2, cy = y + rowH / 2 + (r() - .5) * MM(6);
          if (accept(cx, cy, w / 2)) add(out, cx, cy, w - MM(10), rowH - MM(10), (r() - .5) * 0.08, pick(pal, r()), 'dome'); x += w; }
        y += rowH; }
    } else if (pat === 'arcs') { // łuki segmentowe
      const s = MM(95), P = MM(1500), sag = MM(380), r = rng(5);
      for (let y0 = by0 - sag; y0 < by1 + s; y0 += s) {
        for (let base = bx0 - P - ((bx0 % P) + P) % P; base < bx1 + P; base += P) {
          // łuk paraboliczny od base do base+P
          let x = base, prev = null;
          while (x < base + P) { const t = (x - base) / P - .5, y = y0 + sag * (1 - 4 * t * t), dydx = -8 * sag * t / P;
            const ds = s / Math.sqrt(1 + dydx * dydx); const cx = x + ds / 2, tt = (cx - base) / P - .5, cy = y0 + sag * (1 - 4 * tt * tt);
            if (cy >= by0 && cy < by1 && accept(cx, cy, s)) add(out, cx, cy, s - MM(12), s - MM(12), Math.atan(-8 * sag * tt / P), pick(pal, r()), 'dome');
            x += ds; }
        }
      }
    } else if (pat === 'wild') { // kamień łupany – wieloboki Voronoi
      const cell = MM(opt.cell || 330), r = rng((by0 | 0) + 3), pts = [];
      const nx = Math.ceil((bx1 - bx0) / cell) + 3, ny = Math.ceil((by1 - by0) / cell) + 3;
      for (let j = -1; j < ny; j++) for (let i = -1; i < nx; i++) pts.push([bx0 + (i + .15 + r() * .7) * cell, by0 + (j + .15 + r() * .7) * cell]);
      const gi = (i, j) => (j + 1) * (nx + 1) + (i + 1);
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
        const p = pts[gi(i, j)]; if (!p) continue; if (!accept(p[0], p[1], cell)) continue;
        let poly = [[p[0] - cell * 2, p[1] - cell * 2], [p[0] + cell * 2, p[1] - cell * 2], [p[0] + cell * 2, p[1] + cell * 2], [p[0] - cell * 2, p[1] + cell * 2]];
        for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) { if (!di && !dj) continue; const q = pts[gi(i + di, j + dj)]; if (!q) continue;
          const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, nxv = q[0] - p[0], nyv = q[1] - p[1]; poly = clipHalf(poly, mx, my, nxv, nyv); if (poly.length < 3) break; }
        if (poly.length < 3) continue;
        // fuga: ściągnięcie do środka
        const sh = MM(opt.joint || 14) / 2; poly = poly.map(([a, b]) => { const dx = a - p[0], dy = b - p[1], d = Math.hypot(dx, dy) || 1; return [a - dx / d * sh, b - dy / d * sh]; });
        add(out, p[0], p[1], cell, cell, 0, pick(pal, r()), 'poly'); out[out.length - 1].poly = poly;
      }
    } else if (pat === 'grid') { // kostka 10x10 prosto (do mozaik)
      const s = MM(opt.size || 100);
      for (let y = by0; y < by1 + s; y += s + J) for (let x = bx0 - s; x < bx1 + s; x += s + J) { const cx = x + s / 2, cy = y + s / 2;
        const c = opt.colorAt ? opt.colorAt(cx, cy) : null; if (accept(cx, cy, s / 2)) add(out, cx, cy, s, s, 0, c || pick(pal, hash(cx | 0, cy | 0))); }
    }
  }
  function clipHalf(poly, mx, my, nx, ny) { const out = []; const f = p => (p[0] - mx) * nx + (p[1] - my) * ny;
    for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b);
      if (fa <= 0) out.push(a); if ((fa <= 0) !== (fb <= 0)) { const t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } }
    return out; }

  /* ---------- place (koła) ---------- */
  function genPlaza(p, out) {
    const t0 = out.length, cub = MM(p.cube || 95), J = MM(10);
    const pat = p.pat, pal = p.pal;
    const accept = (x, y, r) => { const dx = x - p.x, dy = y - p.y; return dx * dx + dy * dy < (p.R - MM(40)) * (p.R - MM(40)); };
    if (pat === 'circle' || pat === 'logo') {
      const inner = pat === 'logo' ? p.R * 0.62 : cub * 1.2;
      if (pat === 'logo') { // mozaika logo w środku
        const m = logoMask(); const s = MM(46), sz = inner * 2;
        genPattern('grid', pal, p.x - inner, p.y - inner, p.x + inner, p.y + inner, (x, y) => (x - p.x) ** 2 + (y - p.y) ** 2 < (inner - s) * (inner - s), out,
          { size: 46, joint: 4, colorAt: (x, y) => { const u = ((x - p.x) / sz + .5), v = ((y - p.y) / sz + .5); const a = m(u, v); return a === 2 ? pick('zielony', hash(x | 0, y | 0)) : a === 1 ? pick('bialy', hash(x | 0, y | 0)) : pick('grafit', hash(x | 0, y | 0)); } });
      } else add(out, p.x, p.y, cub * 1.6, cub * 1.6, 0.2, pick('zolty', .3), 'dome');
      for (let r = inner + cub * .8; r < p.R - cub * .6; r += cub + J) { const n = Math.floor(2 * Math.PI * r / (cub + J * 1.2)); const ring = Math.round((r - inner) / (cub + J));
        const rp = pat === 'logo' && ring % 4 === 0 ? 'szary' : p.pal;
        for (let i = 0; i < n; i++) { const a = (i + (ring % 2) * .5) / n * Math.PI * 2; add(out, p.x + Math.cos(a) * r, p.y + Math.sin(a) * r, cub - J * .3, cub - J * .3, a, pick(rp, hash(i, ring)), 'dome'); } }
    } else if (pat === 'flower') { // podpis Andrzeja: kwiat w grafitowej kostce
      const petals = p.petals || 8, Rf = p.R * 0.78;
      const inFlower = (x, y) => { const dx = x - p.x, dy = y - p.y, d = Math.hypot(dx, dy), a = Math.atan2(dy, dx);
        const f = Math.abs(Math.cos(a * petals / 2)); const edge = Rf * (0.18 + 0.82 * Math.pow(f, 0.75)); return d < edge ? (d < Rf * .17 ? 3 : (d > edge - MM(70) ? 1 : 2)) : 0; };
      genPattern('grid', 'grafit', p.x - p.R, p.y - p.R, p.x + p.R, p.y + p.R, accept, out, { size: 100, joint: 5,
        colorAt: (x, y) => { const v = inFlower(x, y); return v === 3 ? pick('bialy', hash(x | 0, y | 0)) : v === 2 ? pick('zolty', hash(x | 0, y | 0)) : v === 1 ? pick('bialy', .2) : pick('grafit', hash(x | 0, y | 0)); } });
    } else {
      genPattern(pat, pal, p.x - p.R, p.y - p.R, p.x + p.R, p.y + p.R, accept, out, p.opt);
    }
    // obwódka: podwójny pierścień kostki granitowej
    for (let q = 0; q < 2; q++) { const r = p.R - MM(40) + q * (cub + J) + cub / 2; const n = Math.floor(2 * Math.PI * r / (cub + J));
      for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; add(out, p.x + Math.cos(a) * r, p.y + Math.sin(a) * r, cub, cub, a, pick(q ? 'szary' : 'granit', hash(i, q + 9)), 'dome'); } }
    // kolejność układania na placu: od środka na zewnątrz
    for (let i = t0; i < out.length; i++) { const s = out[i]; const d = Math.hypot(s.x - p.x, s.y - p.y) / p.R; s.key = p.y - p.R * .55 + d * p.R * 1.2 + hash(i, 1) * 18; s.plaza = p; }
    return out.length - t0;
  }
  let maskCache = null;
  function logoMask() {
    if (maskCache) return maskCache;
    const N = 220, c = document.createElement('canvas'); c.width = c.height = N; const x = c.getContext('2d');
    x.fillStyle = '#000'; x.fillRect(0, 0, N, N);
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 150px "Big Shoulders Display", Impact, sans-serif'; x.lineJoin = 'round'; x.strokeStyle = '#fff'; x.lineWidth = 14; x.strokeText('GB', N / 2, N * .53); x.fillStyle = '#0f0'; x.fillText('GB', N / 2, N * .53);
    const d = x.getImageData(0, 0, N, N).data;
    maskCache = (u, v) => { if (u < 0 || v < 0 || u >= 1 || v >= 1) return 0; const i = ((v * N | 0) * N + (u * N | 0)) * 4; return d[i + 1] > 128 ? (d[i] > 128 ? 1 : 2) : 0; };
    return maskCache;
  }

  /* ---------- budowa świata ---------- */
  function buildPlazas() {
    plazas = [];
    document.querySelectorAll('[data-plaza]').forEach(el => {
      const r = el.getBoundingClientRect(); const anchor = el.querySelector('[data-plaza-anchor]') || el; const ar = anchor.getBoundingClientRect();
      const R = mobile ? vw * parseFloat(el.dataset.rm || '0.46') : Math.min(vw * parseFloat(el.dataset.rd || '0.26'), parseFloat(el.dataset.rmax || '420'));
      const p = { el, id: el.dataset.plaza, x: ar.left + ar.width / 2, y: ar.top + scrollY + ar.height / 2, R, pat: el.dataset.ppat || 'circle', pal: el.dataset.ppal || 'granit', petals: 8 };
      if (mobile && el.dataset.pxm) p.x = vw * parseFloat(el.dataset.pxm);
      if (!mobile && el.dataset.pxd) p.x = vw * parseFloat(el.dataset.pxd);
      plazas.push(p);
    });
  }
  function buildStones() {
    stones = [];
    // place
    plazas.forEach(p => { p.i0 = stones.length; genPlaza(p, stones); p.i1 = stones.length; });
    // odcinki ścieżki
    secs.forEach((s, si) => {
      if (s.gap) return; // gra – luka w ścieżce
      const ya = si === 0 ? pathY0 : s.y0 + s.h * HOLD(s), next = secs[si + 1];
      const yb = next ? next.y0 + next.h * HOLD(next) : pathY1 + 40;
      if (yb <= pathY0) return;
      let xa = 1e9, xb = -1e9; for (let y = ya; y < yb; y += 16) { xa = Math.min(xa, cxAt(y) - hwAt(y)); xb = Math.max(xb, cxAt(y) + hwAt(y)); }
      const acc = (x, y, r) => y >= ya + MM(70) && y < yb - MM(70) && inStrip(x, y, r * .2) && !inPlaza(x, y, -MM(60)) && !gapAt(y);
      genPattern(s.pat, s.pal, xa - 20, ya, xb + 20, yb, acc, stones, { cell: s.pat === 'wild' ? 360 : 0 });
      // rząd poprzeczny (granit) na granicy wzorów
      if (si > 0) { const c = MM(95); for (let q = 0; q < 2; q++) { const y = ya + c * (q + .5) - MM(10); const cx = cxAt(y), hw = hwAt(y);
        for (let x = cx - hw; x < cx + hw + c; x += c + MM(10)) if (inStrip(x, y, 0) && !inPlaza(x, y, 0)) add(stones, x, y, c - MM(8), c - MM(8), 0, pick('granit', hash(x | 0, q)), 'dome'); } }
    });
    // klucz kolejności z drganiem
    for (let i = 0; i < stones.length; i++) { const s = stones[i]; if (!s.plaza) s.key = s.y + (hash(i, 7) - .5) * 26 + (s.x - cxAt(s.y)) * 0.06; }
    buckets = []; const nb = Math.ceil(docH / BUCK) + 2; for (let i = 0; i < nb; i++) buckets.push([]);
    stones.forEach((s, i) => { const b = clamp((s.y / BUCK) | 0, 0, nb - 1); buckets[b].push(i); });
  }
  function gapAt(y) { for (const s of secs) if (s.gap) { const g0 = s.y0 + s.h * 0.08, g1 = s.y1 - s.h * 0.08; if (y > g0 && y < g1) return true; } return false; }
  function buildLamps() {
    lamps = []; let started = false; let side = 0;
    for (const s of secs) { if (!s.lamps) continue; const sp = mobile ? 300 : 360;
      for (let y = s.y0; y < Math.min(s.y1, pathY1 - 60); y += sp / 2) { side ^= 1; const cx = cxAt(y), hw = hwAt(y);
        const x = side ? cx + hw + (mobile ? 16 : 26) : cx - hw - (mobile ? 16 : 26); if (inPlaza(x, y, 30)) continue;
        lamps.push({ x, y, side, seed: hash(y | 0, side) }); started = true; } }
    // przy placach wieczornych – latarnie na obwodzie
    plazas.forEach(p => { if (p.el.hasAttribute('data-lamps')) for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + .5; lamps.push({ x: p.x + Math.cos(a) * (p.R + 30), y: p.y + Math.sin(a) * (p.R + 30), side: 2, seed: i / 6 }); } });
    lamps.sort((a, b) => a.y - b.y);
  }
  function buildDeco() {
    deco = []; const r = rng(41);
    for (let y = 0; y < docH; y += mobile ? 260 : 300) {
      for (let q = 0; q < (mobile ? 2 : 3); q++) {
        const x = r() * vw, yy = y + r() * 300; const kind = r();
        const cx = cxAt(yy), hw = hwAt(yy);
        const size = kind < .25 ? (mobile ? 70 : 110) + r() * 90 : 22 + r() * 34;
        if (Math.abs(x - cx) < hw + size + 30 && yy > pathY0 - 100) continue;
        if (inPlaza(x, yy, size + 30)) continue;
        deco.push({ x, y: yy, s: size, k: kind < .25 ? 'tree' : kind < .6 ? 'shrub' : kind < .78 ? 'boulder' : 'flowers', seed: r() });
      }
    }
    clouds = []; for (let i = 0; i < 5; i++) clouds.push({ x: r() * vw, y: r() * vh, s: 260 + r() * 340, v: 6 + r() * 8 });
  }

  /* ---------- rysowanie: tło (trawa + dekoracje) w pasmach ---------- */
  function drawTree(x, d) { const r = rng(d.seed * 1e5 | 0); const R = d.s;
    x.save(); x.translate(d.x, d.y);
    x.fillStyle = 'rgba(6,14,5,.42)'; x.beginPath(); for (let i = 0; i < 18; i++) { const a = i / 18 * 6.28, rr2 = R * (.9 + r() * .2); x.lineTo(R * .3 + Math.cos(a) * rr2, R * .36 + Math.sin(a) * rr2 * .9); } x.fill();
    const hue = 85 + r() * 40;
    for (let layer = 0; layer < 3; layer++) { const n = 38 - layer * 8;
      for (let i = 0; i < n; i++) { const a = r() * 6.28, dd = Math.sqrt(r()) * R * (.78 - layer * .2), rr2 = R * (.16 + r() * .12) * (1 - layer * .15);
        const px = Math.cos(a) * dd - layer * R * .05, py = Math.sin(a) * dd - layer * R * .06;
        const gr = x.createRadialGradient(px - rr2 * .35, py - rr2 * .4, 0, px, py, rr2);
        gr.addColorStop(0, `hsl(${hue + r() * 12},${38 + layer * 6}%,${24 + layer * 8 + r() * 6}%)`); gr.addColorStop(1, `hsla(${hue},45%,${9 + layer * 3}%,.95)`);
        x.fillStyle = gr; x.beginPath(); x.arc(px, py, rr2, 0, 7); x.fill(); } }
    x.fillStyle = 'rgba(210,240,150,.12)'; for (let i = 0; i < 120; i++) { const a = r() * 6.28, dd = Math.sqrt(r()) * R * .7; x.fillRect(Math.cos(a) * dd - R * .1, Math.sin(a) * dd - R * .12, 2, 2); }
    x.restore(); }
  function drawPhoto(x, d) { const im = DEKO[d.k === 'tree' ? (d.seed < .5 ? 'drzewo1' : 'drzewo2') : (d.seed < .7 ? 'krzew1' : 'krzew2')]; if (!im) return;
    const sz = d.k === 'tree' ? d.s * 2.1 : d.s * 2.2, w = sz, h = sz * im.naturalHeight / im.naturalWidth;
    x.save(); x.translate(d.x, d.y); x.rotate(d.seed * 6.28);
    x.save(); x.translate(sz * .16, sz * .2); x.filter = `blur(${Math.max(2, sz * .05)}px) brightness(0)`; x.globalAlpha = .5; x.drawImage(im, -w / 2, -h / 2, w, h); x.restore();
    x.filter = 'none'; x.globalAlpha = 1; x.rotate(-d.seed * 6.28); x.drawImage(im, -w / 2, -h / 2, w, h); x.restore(); }
  function drawShrub(x, d) { const r = rng(d.seed * 1e5 | 0); x.save(); x.translate(d.x, d.y);
    x.fillStyle = 'rgba(8,16,6,.35)'; x.beginPath(); x.ellipse(d.s * .25, d.s * .3, d.s, d.s * .85, 0, 0, 7); x.fill();
    for (let i = 0; i < 12; i++) { const a = r() * 6.28, dd = r() * d.s * .5, rr2 = d.s * (.35 + r() * .3); const gr = x.createRadialGradient(Math.cos(a) * dd - rr2 * .3, Math.sin(a) * dd - rr2 * .3, 0, Math.cos(a) * dd, Math.sin(a) * dd, rr2);
      gr.addColorStop(0, `hsl(${100 + r() * 30},40%,${30 + r() * 12}%)`); gr.addColorStop(1, 'hsl(110,45%,12%)'); x.fillStyle = gr; x.beginPath(); x.arc(Math.cos(a) * dd, Math.sin(a) * dd, rr2, 0, 7); x.fill(); }
    if (d.seed > .6) for (let i = 0; i < 14; i++) { x.fillStyle = d.seed > .8 ? '#e9c4d8' : '#f4f0e6'; x.beginPath(); x.arc((r() - .5) * d.s * 1.2, (r() - .5) * d.s * 1.2, 1.6 + r() * 1.6, 0, 7); x.fill(); }
    x.restore(); }
  function drawBoulder(x, d) { const r = rng(d.seed * 1e5 | 0); x.save(); x.translate(d.x, d.y); x.rotate(r() * 6);
    x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.ellipse(d.s * .2, d.s * .25, d.s * .62, d.s * .48, 0, 0, 7); x.fill();
    x.beginPath(); for (let i = 0; i < 9; i++) { const a = i / 9 * 6.28, rr2 = d.s * (.42 + r() * .16); x.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2 * .8); } x.closePath();
    const gr = x.createRadialGradient(-d.s * .15, -d.s * .15, 0, 0, 0, d.s * .6); gr.addColorStop(0, '#b9b4aa'); gr.addColorStop(1, '#5c5850'); x.fillStyle = gr; x.fill(); x.restore(); }
  function drawFlowers(x, d) { const r = rng(d.seed * 1e5 | 0); const cols = ['#f2d14a', '#e8e4da', '#c84b6b', '#9b7fd1'];
    for (let i = 0; i < 26; i++) { x.fillStyle = cols[(d.seed * 4) | 0]; x.globalAlpha = .9; x.beginPath(); x.arc(d.x + (r() - .5) * d.s * 2.2, d.y + (r() - .5) * d.s * 1.4, 1.5 + r() * 2.2, 0, 7); x.fill(); } x.globalAlpha = 1; }
  function renderBase(x, y0, y1) {
    x.fillStyle = lawnPat; x.save(); x.translate(0, -y0 % LT); x.fillRect(0, 0, vw, (y1 - y0) + LT); x.restore();
    // pasy po koszeniu
    x.save(); x.translate(0, -y0); for (let s = -8; s < 40; s++) { const yy = Math.floor(y0 / 180) * 180 + s * 180; x.fillStyle = s % 2 ? 'rgba(255,255,220,.035)' : 'rgba(0,0,0,.05)';
      x.beginPath(); x.moveTo(-200, yy); x.lineTo(vw + 200, yy - vw * .35); x.lineTo(vw + 200, yy - vw * .35 + 90); x.lineTo(-200, yy + 90); x.fill(); }
    for (const d of deco) { if (d.y + d.s * 1.5 < y0 || d.y - d.s * 1.5 > y1) continue;
      if ((d.k === 'tree' || d.k === 'shrub') && DEKO.drzewo1) { drawPhoto(x, d); continue; }
      if (d.k === 'tree') drawTree(x, d); else if (d.k === 'shrub') drawShrub(x, d); else if (d.k === 'boulder') drawBoulder(x, d); else drawFlowers(x, d); }
    x.restore();
  }

  /* ---------- rysowanie ścieżki ---------- */
  function stripPath(x, y0, y1, oy) {
    const a = Math.max(y0, pathY0), b = Math.min(y1, pathY1); x.beginPath();
    if (b > a) { for (let y = a; y <= b; y += 8) x.lineTo(cxAt(y) - hwAt(y), y - oy); x.lineTo(cxAt(b) - hwAt(b), b - oy);
      for (let y = b; y >= a; y -= 8) x.lineTo(cxAt(y) + hwAt(y), y - oy); x.lineTo(cxAt(a) + hwAt(a), a - oy); x.closePath(); }
  }
  function plazaPath(x, y0, y1, oy, pad) { x.beginPath(); let any = false;
    for (const p of plazas) if (p.y + p.R + 60 > y0 && p.y - p.R - 60 < y1) { x.moveTo(p.x + p.R + pad, p.y - oy); x.arc(p.x, p.y - oy, p.R + pad, 0, Math.PI * 2); any = true; }
    return any; }
  function drawBed(x, y0, y1, oy, sanded) {
    for (let pass = 0; pass < 2; pass++) { x.save();
      if (pass === 0) stripPath(x, y0, y1, oy); else if (!plazaPath(x, y0, y1, oy, MM(200))) { x.restore(); continue; }
      x.clip(); drawBedInner(x, y0, y1, oy, sanded || pass === 1); x.restore(); }
  }
  function drawBedInner(x, y0, y1, oy, sanded) {
    // ciemna podsypka pod całością, jasny piasek tam gdzie już zasypane
    x.fillStyle = bedDarkPat; x.save(); x.translate(0, -oy % 256); x.fillRect(0, y0 - oy - 256, vw, y1 - y0 + 512); x.restore();
    const sandTo = sanded ? 1e9 : front - FALL - SAND * .5;
    if (sandTo > y0) { x.save(); x.beginPath(); x.rect(0, y0 - oy, vw, Math.min(y1, sandTo) - y0); x.clip(); x.fillStyle = bedPat; x.translate(0, -oy % BT); x.fillRect(0, y0 - oy - BT, vw, y1 - y0 + BT * 2); x.restore(); }
    // nieułożona część: równo ściągnięta podsypka z liniami ściągacza i sznurkiem
    if (!sanded && front < y1) { const a = Math.max(front, y0); x.fillStyle = bedPat; x.save(); x.beginPath(); x.rect(0, a - oy, vw, y1 - a); x.clip(); x.translate(0, -oy % BT); x.fillRect(0, a - oy - BT, vw, y1 - a + BT * 2);
      x.restore(); x.strokeStyle = 'rgba(120,98,68,.25)'; x.lineWidth = 1; for (let y = Math.ceil(a / 26) * 26; y < y1; y += 26) { x.beginPath(); x.moveTo(cxAt(y) - hwAt(y), y - oy); x.lineTo(cxAt(y) + hwAt(y), y - oy); x.stroke(); } }
  }
  let curbs = [];
  function buildCurbs() { // łańcuch obrzeży dokładnie po krawędzi ścieżki
    curbs = []; const L = MM(1000), H = MM(80);
    for (let side = -1; side <= 1; side += 2) {
      const edge = y => [cxAt(y) + side * (hwAt(y) + H / 2), y];
      let y = pathY0, p0 = edge(y);
      while (y < pathY1 - 4) { let yb = y + 2, p1 = edge(yb);
        while (yb < pathY1 && Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) < L) { yb += 2; p1 = edge(yb); }
        const mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2, len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
        if (!inPlaza(mx, my, MM(120)) && len > MM(150)) curbs.push({ x: mx, y: my, a: Math.atan2(p1[0] - p0[0], p1[1] - p0[1]), len, v: curbs.length % 6 });
        y = yb; p0 = p1; } }
  }
  function drawCurbs(x, y0, y1, oy) {
    const H = MM(80);
    for (const c of curbs) { if (c.y < y0 - 120 || c.y > y1 + 120) continue;
      const sp = sprite('slab', H, Math.max(4, c.len - MM(5)), '#a7a39b', c.v); const ca = Math.cos(-c.a), sa = Math.sin(-c.a);
      x.setTransform(DPR * ca, DPR * sa, -DPR * sa, DPR * ca, DPR * c.x, DPR * (c.y - oy)); x.drawImage(sp.c, -H / 2, -sp.h / 2, H, sp.h); }
    x.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function drawStone(x, s, oy, t) {
    const lift = t < 1 ? (1 - easeOut(t)) : 0;
    if (s.kind === 'poly') {
      if (!s.spr || s.sprD !== DPR) polySprite(s);
      const dy = -lift * 34, sc = 1 + lift * .35, sp = s.spr;
      x.setTransform(DPR * sc, 0, 0, DPR * sc, DPR * s.x, DPR * (s.y - oy + dy));
      if (lift > 0.01) { x.globalAlpha = .3 * lift; x.drawImage(sp.sh, sp.x0 + lift * 18 / sc, sp.y0 + lift * 26 / sc, sp.w, sp.h); }
      x.globalAlpha = Math.min(1, t * 6); x.drawImage(sp.c, sp.x0, sp.y0, sp.w, sp.h); x.globalAlpha = 1; return; }
    const sp = sprite(s.kind, s.w, s.h, s.col, s.v); const sc = 1 + lift * .42, dy = -lift * 38;
    const c = Math.cos(s.rot) * DPR * sc, si = Math.sin(s.rot) * DPR * sc;
    if (lift > 0.01) { x.globalAlpha = .32 * lift * Math.min(1, t * 4); x.setTransform(c, si, -si, c, DPR * (s.x + lift * 22), DPR * (s.y - oy + lift * 30)); x.fillStyle = '#000'; x.fillRect(-s.w / 2, -s.h / 2, s.w, s.h); x.globalAlpha = Math.min(1, t * 6); }
    x.setTransform(c, si, -si, c, DPR * s.x, DPR * (s.y - oy + dy)); x.drawImage(sp.c, -s.w / 2, -s.h / 2, s.w, s.h); x.globalAlpha = 1;
  }
  function polySprite(s) { let a = 1e9, b = 1e9, c = -1e9, d = -1e9; s.poly.forEach(([p, q]) => { a = Math.min(a, p); b = Math.min(b, q); c = Math.max(c, p); d = Math.max(d, q); });
    const w = c - a + 4, h = d - b + 4, W = Math.ceil(w * DPR), H = Math.ceil(h * DPR); const mk = (shadow) => { const cv2 = document.createElement('canvas'); cv2.width = W; cv2.height = H; const x = cv2.getContext('2d'); x.setTransform(DPR, 0, 0, DPR, (2 - a) * DPR, (2 - b) * DPR);
      x.beginPath(); s.poly.forEach(([p, q]) => x.lineTo(p, q)); x.closePath();
      if (shadow) { x.fillStyle = '#000'; x.fill(); return cv2; }
      const gr = x.createLinearGradient(a, b, c, d); const rgb = hexToRgb(s.col); gr.addColorStop(0, shade(rgb, 1.18)); gr.addColorStop(.6, shade(rgb, .98)); gr.addColorStop(1, shade(rgb, .78)); x.fillStyle = gr; x.fill();
      x.save(); x.clip(); const r = rng((s.x * 7 + s.y) | 0); for (let i = 0; i < w * h / 6; i++) { x.fillStyle = r() < .5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.08)'; x.fillRect(a + r() * w, b + r() * h, 1.2, 1.2); } x.restore();
      x.strokeStyle = 'rgba(255,255,255,.16)'; x.lineWidth = 1.2; x.stroke(); return cv2; };
    s.spr = { c: mk(false), sh: mk(true), x0: a - 2 - s.x, y0: b - 2 - s.y, w, h }; s.sprD = DPR; }
  const easeOut = t => { // lekkie odbicie przy lądowaniu
    if (t < .78) { const u = t / .78; return 1 - Math.pow(1 - u, 3); } const u = (t - .78) / .22; return 1 - Math.sin(u * Math.PI) * .06; };
  function stoneT(s) {
    if (s.plaza && s.plaza.anim) { const a = s.plaza.anim; const tt = (tNow - a.t0) / 1000 - (s.key - (s.plaza.y - s.plaza.R)) / (s.plaza.R * 2) * a.dur; return clamp(tt / .55, 0, 1.5) + (front > s.key ? 0 : 0); }
    if (s.plaza && s.plaza.intro && !introDone) { const d = Math.hypot(s.x - s.plaza.x, s.y - s.plaza.y) / s.plaza.R; const tt = (tNow - introT0) / 1000 - d * 1.6 - hash(s.x | 0, s.y | 0) * .25; return clamp(tt / .5, 0, 1.5); }
    if (s.plaza && s.plaza.intro) return 2;
    return (front - s.key) / FALL;
  }
  function renderStones(x, y0, y1, oy, live) {
    const b0 = clamp(((y0 - 60) / BUCK) | 0, 0, buckets.length - 1), b1 = clamp(((y1 + 60) / BUCK) | 0, 0, buckets.length - 1);
    x.save(); stripPath(x, y0, y1, oy); x.clip();
    for (let b = b0; b <= b1; b++) for (const i of buckets[b]) { const s = stones[i]; if (s.plaza) continue; const t = live ? stoneT(s) : 2; if (t <= 0) continue; drawStone(x, s, oy, t); }
    x.setTransform(DPR, 0, 0, DPR, 0, 0); x.restore(); x.save();
    for (let b = b0; b <= b1; b++) for (const i of buckets[b]) { const s = stones[i]; if (!s.plaza) continue; const t = live ? stoneT(s) : 2; if (t <= 0) continue; drawStone(x, s, oy, t); }
    x.setTransform(DPR, 0, 0, DPR, 0, 0);
    // piasek rozsypany na świeżo ułożonych kamieniach
    if (live) { const a = front - FALL - SAND, bb = front - FALL; if (bb > y0 && a < y1) { const gr = x.createLinearGradient(0, a - oy, 0, bb - oy); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,1)');
      x.save(); x.beginPath(); x.rect(0, a - oy, vw, bb - a); x.clip(); x.globalAlpha = .55; x.fillStyle = x.createPattern(sandSpeck, 'repeat'); x.translate(0, -oy % 128); x.fillRect(0, a - oy - 128, vw, bb - a + 256); x.restore(); } }
    x.restore();
  }
  function drawLampPost(x, L, oy, on) {
    x.save(); x.translate(L.x, L.y - oy);
    x.fillStyle = 'rgba(0,0,0,.4)'; x.beginPath(); x.ellipse(9, 12, 15, 9, .6, 0, 7); x.fill();
    x.fillStyle = '#1d1f22'; x.beginPath(); x.arc(0, 0, 9, 0, 7); x.fill();
    x.fillStyle = on > .05 ? `rgba(255,${200 + on * 30},${130 + on * 60},${.4 + on * .6})` : '#3a3d42'; x.beginPath(); x.arc(0, 0, 5.2, 0, 7); x.fill();
    x.strokeStyle = '#4a4d52'; x.lineWidth = 1.5; x.beginPath(); x.arc(0, 0, 9, 0, 7); x.stroke(); x.restore();
  }

  /* ---------- pasma: pamięć podręczna ---------- */
  function bandCanvas(i, settled) {
    const key = i + (settled ? 's' : 'b'); let b = bands.get(key);
    if (b) { bandOrder.splice(bandOrder.indexOf(key), 1); bandOrder.push(key); return b.c; }
    const c = document.createElement('canvas'); c.width = Math.ceil(vw * DPR); c.height = Math.ceil(BAND * DPR); const x = c.getContext('2d', { alpha: false });
    x.setTransform(DPR, 0, 0, DPR, 0, 0); const y0 = i * BAND, y1 = y0 + BAND;
    renderBase(x, y0, y1);
    if (settled) { drawBed(x, y0, y1, y0, true); renderStones(x, y0, y1, y0, false); drawCurbs(x, y0, y1, y0); }
    bands.set(key, { c }); bandOrder.push(key);
    const max = mobile ? 14 : 12; while (bandOrder.length > max) bands.delete(bandOrder.shift());
    return c;
  }
  function bandSettled(i) { const y1 = (i + 1) * BAND; if (y1 < pathY0 - 400) return true;
    for (const p of plazas) if ((p.anim || (p.intro && !introDone)) && p.y + p.R + 80 > i * BAND && p.y - p.R - 80 < y1) return false;
    for (const p of plazas) if (p.y + p.R + 80 > i * BAND && p.y - p.R - 80 < y1 && !p.intro) { const k0 = p.y + p.R * .8; if (front - FALL - SAND - 40 < k0) return false; }
    return y1 + 40 < front - FALL - SAND - 30; }

  /* ---------- światło: pora dnia, latarnie, chmury ---------- */
  function dayPhase() { // 0 dzień … 1 noc, wg położenia w dokumencie
    const ev = document.querySelector('[data-evening]'), nt = document.querySelector('[data-night]');
    const e = ev ? ev.getBoundingClientRect().top + scrollY : docH * .55, n = nt ? nt.getBoundingClientRect().top + scrollY : docH * .82;
    return { e, n };
  }
  let PH = { e: 1e9, n: 1e9 };
  function lightPass() {
    const mid = sy + vh * .5; const dusk = sstep(PH.e - vh * .9, PH.e + vh * .3, mid), night = sstep(PH.n - vh * 1.1, PH.n + vh * .2, mid);
    const dark = dusk * .42 + night * .4;
    // chmury – cienie wędrujące po ogrodzie (w dzień)
    if (dark < .5 && !RM) { g.globalCompositeOperation = 'multiply';
      for (const c of clouds) { const x = ((c.x + tNow / 1000 * c.v) % (vw + c.s * 2)) - c.s, y = ((c.y - sy * .15) % (vh + c.s * 2) + vh + c.s * 2) % (vh + c.s * 2) - c.s;
        const gr = g.createRadialGradient(x, y, 0, x, y, c.s); gr.addColorStop(0, `rgba(70,80,95,${.22 * (1 - dark * 2)})`); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(x - c.s, y - c.s, c.s * 2, c.s * 2); }
      g.globalCompositeOperation = 'source-over'; }
    // złota godzina
    const gold = sstep(PH.e - vh * 1.6, PH.e - vh * .4, mid) * (1 - night);
    if (gold > 0) { g.globalCompositeOperation = 'soft-light'; g.fillStyle = `rgba(255,150,60,${gold * .55})`; g.fillRect(0, 0, vw, vh); g.globalCompositeOperation = 'source-over'; }
    if (dark > 0) { g.globalCompositeOperation = 'multiply'; const b = 1 - dark; g.fillStyle = `rgb(${(255 * b * .78 + 30) | 0},${(255 * b * .84 + 34) | 0},${(255 * b + 60) | 0})`; g.fillRect(0, 0, vw, vh); g.globalCompositeOperation = 'source-over'; }
    // latarnie
    if (lamps.length) { g.globalCompositeOperation = 'lighter';
      for (const L of lamps) { if (L.y < sy - 320 || L.y > sy + vh + 320) continue; const on = lampOn(L); if (on <= 0) continue;
        const R = (mobile ? 200 : 290) * (0.9 + L.seed * .2), x = L.x, y = L.y - sy;
        let gr = g.createRadialGradient(x, y, 0, x, y, R); gr.addColorStop(0, `rgba(255,190,110,${.55 * on})`); gr.addColorStop(.35, `rgba(255,150,70,${.22 * on})`); gr.addColorStop(1, 'rgba(255,120,40,0)');
        g.fillStyle = gr; g.fillRect(x - R, y - R, R * 2, R * 2);
        gr = g.createRadialGradient(x, y, 0, x, y, 26); gr.addColorStop(0, `rgba(255,240,210,${.9 * on})`); gr.addColorStop(1, 'rgba(255,200,120,0)'); g.fillStyle = gr; g.fillRect(x - 26, y - 26, 52, 52); }
      g.globalCompositeOperation = 'source-over'; }
    // świetliki nocą
    if (night > .3 && !RM) { g.fillStyle = 'rgba(255,240,160,.85)'; for (let i = 0; i < 26; i++) { const a = tNow / 1000 * (0.3 + hash(i, 2) * .4) + i; const x = (hash(i, 5) * vw + Math.sin(a) * 40), y = (hash(i, 6) * vh + Math.cos(a * 1.3) * 30);
      const f = (Math.sin(tNow / 300 + i * 2.1) + 1) / 2; g.globalAlpha = f * night; g.beginPath(); g.arc(x, y, 1.6, 0, 7); g.fill(); } g.globalAlpha = 1; }
    document.documentElement.style.setProperty('--noc', dark.toFixed(3));
  }
  function lampOn(L) { const d = (front - FALL - L.y) / 140; if (d <= 0) return 0; const t = clamp(d, 0, 1);
    if (t < 1 && !RM) { const fl = hash((tNow / 70) | 0, (L.seed * 1000) | 0); return t * (fl > .35 ? 1 : .25); } return 1; }

  /* ---------- zagęszczarka ---------- */
  function drawCompactor() {
    if (RM) return; const y = front - FALL - SAND * .55; if (y < pathY0 + 60 || y > pathY1 - 60 || y < sy - 80 || y > sy + vh + 80 || inPlaza(cxAt(y), y, 0) || gapAt(y)) return;
    const cx = cxAt(y), hw = hwAt(y) - 46; const x = cx + Math.sin(tNow / 1300) * Math.max(0, hw); const jx = (hash(tNow | 0, 1) - .5) * 1.6, jy = (hash(tNow | 0, 2) - .5) * 1.6;
    const s = mobile ? .72 : 1; g.save(); g.translate(x + jx, y - sy + jy); g.scale(s, s); g.rotate(Math.cos(tNow / 1300) * .25);
    g.fillStyle = 'rgba(0,0,0,.38)'; g.fillRect(-26, -16, 62, 44);
    g.fillStyle = '#3b3d40'; g.fillRect(-30, -22, 60, 40); g.fillStyle = '#e8a419'; g.fillRect(-24, -18, 48, 26); g.fillStyle = '#c4870f'; g.fillRect(-24, 2, 48, 6);
    g.fillStyle = '#1e1f21'; g.fillRect(-8, -14, 16, 12); g.strokeStyle = '#222'; g.lineWidth = 3; g.beginPath(); g.moveTo(-14, 18); g.lineTo(-10, 46); g.lineTo(10, 46); g.lineTo(14, 18); g.stroke();
    g.restore();
    // kurz
    g.fillStyle = 'rgba(214,196,160,.35)'; for (let i = 0; i < 8; i++) { const a = hash(i, (tNow / 90) | 0); g.beginPath(); g.arc(x + (a - .5) * 70, y - sy + 30 + hash(i, 3) * 20, 2 + a * 5, 0, 7); g.fill(); }
  }
  function drawDoor() { // koniec drogi: wycieraczka i drzwi
    const y = pathY1, x = cxAt(y - 10); if (y < sy - 300 || y > sy + vh + 300) return; const w = Math.min(hwAt(y - 10) * 1.6, 260), oy = y - sy;
    g.fillStyle = '#2b2018'; g.fillRect(x - w / 2 - 14, oy, w + 28, 26); g.fillStyle = '#5a4030'; g.fillRect(x - w / 2, oy + 4, w, 16);
    g.fillStyle = '#6b5a45'; g.fillRect(x - w * .28, oy - 46, w * .56, 34); g.fillStyle = 'rgba(255,255,255,.75)'; g.font = `800 ${mobile ? 11 : 13}px "Big Shoulders Display",sans-serif`; g.textAlign = 'center'; g.fillText('WITAMY', x, oy - 24);
    const n = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--noc')) || 0;
    if (n > .2) { g.globalCompositeOperation = 'lighter'; const gr = g.createRadialGradient(x, oy, 0, x, oy, w * 1.4); gr.addColorStop(0, `rgba(255,190,120,${.5 * n})`); gr.addColorStop(1, 'rgba(255,160,80,0)'); g.fillStyle = gr; g.fillRect(x - w * 1.4, oy - w * 1.4, w * 2.8, w * 1.4); g.globalCompositeOperation = 'source-over'; }
  }

  /* ---------- klatka ---------- */
  function frame(ts, once) {
    tNow = ts || performance.now();
    sy = scrollY; front = sy + vh * (mobile ? .8 : .74);
    if (!introDone && (tNow - introT0) / 1000 > 3.2) finishIntro();
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    const i0 = Math.floor(sy / BAND), i1 = Math.floor((sy + vh) / BAND);
    const PR = window.__P, T = () => performance.now(); let q = PR ? T() : 0;
    for (let i = i0; i <= i1; i++) { const st = bandSettled(i); const had = bands.has(i + (st ? 's' : 'b')); const c = bandCanvas(i, st); if (PR && !had) { PR.band = (PR.band || 0) + T() - q; q = T(); } g.drawImage(c, 0, (i * BAND - sy), vw, BAND);
      if (!st) { const y0 = i * BAND, y1 = y0 + BAND; g.save(); g.beginPath(); g.rect(0, y0 - sy, vw, BAND); g.clip(); drawBed(g, y0, y1, sy, false); if (PR) { PR.bed = (PR.bed || 0) + T() - q; q = T(); } renderStones(g, y0, y1, sy, true); if (PR) { PR.stones = (PR.stones || 0) + T() - q; q = T(); } drawCurbs(g, y0, y1, sy); g.restore(); } }
    if (PR) { PR.blit = (PR.blit || 0) + T() - q; q = T(); }
    for (const L of lamps) if (L.y > sy - 30 && L.y < sy + vh + 30) drawLampPost(g, L, sy, lampOn(L));
    drawDoor(); drawCompactor(); if (PR) { q = T(); } lightPass(); if (PR) { PR.light = (PR.light || 0) + T() - q; PR.n = (PR.n || 0) + 1; }
    if (W.onFrame) W.onFrame(sy, front);
    if (once) return; if (!RM || !introDone) requestAnimationFrame(frame);
  }
  function finishIntro() { introDone = true; plazas.forEach(p => { if (p.intro) { for (const k2 of [...bands.keys()]) bands.delete(k2); bandOrder = []; } }); document.documentElement.classList.add('intro-gotowe'); }

  /* ---------- przebudowa ---------- */
  function rebuild() {
    vw = innerWidth; vh = innerHeight; mobile = vw < 820; k = mobile ? 0.118 : 0.165;
    DPR = Math.min(devicePixelRatio || 1, mobile ? 1.75 : 2);
    cv.width = Math.ceil(vw * DPR); cv.height = Math.ceil(vh * DPR); cv.style.width = vw + 'px'; cv.style.height = vh + 'px';
    docH = document.documentElement.scrollHeight;
    sprites.clear(); bands.clear(); bandOrder = []; maskCache = null;
    measure(); buildPlazas(); if (plazas[0]) plazas[0].intro = true;
    buildPath(); buildStones(); buildCurbs(); buildLamps(); buildDeco(); PH = dayPhase();
    if (!lawnPat) makeTextures();
    dispatchEvent(new Event('swiat'));
  }
  let rT = 0, lastW = 0, lastH = 0;
  function onResize() { if (Math.abs(innerWidth - lastW) < 2 && Math.abs(innerHeight - lastH) < 140) return; clearTimeout(rT); rT = setTimeout(() => { lastW = innerWidth; lastH = innerHeight; rebuild(); if (RM) frame(); }, 180); }

  /* ---------- API dla aplikacji ---------- */
  const W = window.Swiat = {
    PAL, sprite: (kind, w, h, col, v) => sprite(kind, w, h, col, v), genPattern: (...a) => genPattern(...a), get k() { return k; }, set k(v) { k = v; },
    plaza(id) { return plazas.find(p => p.id === id); },
    setPlaza(id, pat, pal) { const p = this.plaza(id); if (!p) return; p.pat = pat; if (pal) p.pal = pal;
      const keep = stones.slice(0, p.i0).concat(stones.slice(p.i1)); const fresh = []; genPlaza(p, fresh);
      stones = stones.slice(0, p.i0).concat(fresh, stones.slice(p.i1)); const d = fresh.length - (p.i1 - p.i0); p.i1 = p.i0 + fresh.length;
      plazas.forEach(q => { if (q.i0 > p.i0) { q.i0 += d; q.i1 += d; } });
      buckets = buckets.map(() => []); stones.forEach((s, i) => { const b = clamp((s.y / BUCK) | 0, 0, buckets.length - 1); buckets[b].push(i); });
      p.anim = { t0: performance.now(), dur: 1.1 }; clearTimeout(p.animT); p.animT = setTimeout(() => { p.anim = null; bands.clear(); bandOrder = []; }, 2400);
      bands.clear(); bandOrder = []; if (RM) { p.anim = null; frame(); } },
    skipIntro() { introT0 = -1e6; },
    bench(step) { const H = document.documentElement.scrollHeight - innerHeight, ts = []; const px = g.getImageData ? () => g.getImageData(0, 0, 1, 1) : () => 0; scrollTo(0, 0);
      for (let y = 0; y < H; y += step || 20) { scrollTo(0, y); const t0 = performance.now(); frame(t0, true); px(); ts.push(performance.now() - t0); }
      ts.sort((a, b) => a - b); return { n: ts.length, avg: +(ts.reduce((a, b) => a + b, 0) / ts.length).toFixed(1), p50: +ts[ts.length / 2 | 0].toFixed(1), p90: +ts[ts.length * .9 | 0].toFixed(1), p99: +ts[ts.length * .99 | 0].toFixed(1), max: +ts[ts.length - 1].toFixed(1) }; },
    swatch(c, pat, pal, opt) { // próbka wzoru w osobnym płótnie (skład, gra, planer)
      opt = opt || {}; const saveD = DPR, saveK = k; const W2 = c.width, H2 = c.height; DPR = opt.dpr || 1; k = opt.k || 0.3;
      const x = c.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.fillStyle = bedPat || '#c9b18a'; x.fillRect(0, 0, W2, H2);
      const w = W2 / DPR, h = H2 / DPR, list = []; genPattern(pat, pal, -40, -40, w + 40, h + 40, () => true, list, opt);
      if (opt.colorAt) list.forEach(s => { const cc = opt.colorAt(s.x, s.y); if (cc) s.col = cc; });
      for (const s of list) drawStone(x, s, 0, 2);
      x.setTransform(1, 0, 0, 1, 0, 0);
      if (opt.light !== false) { const gr = x.createLinearGradient(0, 0, W2, H2); gr.addColorStop(0, 'rgba(255,240,210,.16)'); gr.addColorStop(1, 'rgba(0,0,0,.22)'); x.fillStyle = gr; x.fillRect(0, 0, W2, H2); }
      DPR = saveD; k = saveK; return list; },
    stonesIn(pat, pal, w, h, kk, opt) { const saveK = k; k = kk; const list = []; genPattern(pat, pal, -40, -40, w + 40, h + 40, (x, y) => x > 0 && y > 0 && x < w && y < h, list, opt || {}); k = saveK; return list; },
    drawOne(ctx, s, dpr, t) { const saveD = DPR; DPR = dpr; drawStone(ctx, s, 0, t == null ? 2 : t); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); DPR = saveD; },
    get bedPattern() { return bedPat; },
    rebuild, get front() { return front; }, get mobile() { return mobile; }, get dpr() { return DPR; }
  };
  if (!LIB) addEventListener('resize', onResize);
  function start() { loadMats().then(start2); }
  function start2() { if (LIB) { vw = innerWidth; vh = innerHeight; mobile = vw < 820; k = mobile ? .118 : .165; DPR = Math.min(devicePixelRatio || 1, 2); makeTextures(); dispatchEvent(new Event('swiat')); return; }
    lastW = innerWidth; lastH = innerHeight; rebuild(); introT0 = performance.now(); if (RM) introT0 = -1e6; requestAnimationFrame(frame);
    // ponowny pomiar, gdy obrazy/fonty zmienią wysokość
    new ResizeObserver(() => { const h = document.documentElement.scrollHeight; if (Math.abs(h - docH) > 40) { rebuild(); } }).observe(document.body); }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(start); else addEventListener('load', start);
})();
