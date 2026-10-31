/* GardenBruk – Projektant ogrodu 2.0
   Zdjęcie działki → perspektywa z czterech rogów i wymiarów → obszary rysowane palcem (punkty albo obrys) →
   każdy obszar z własnym wzorem, kolorem i obrzeżem → drzewa, krzewy, lampy w prawdziwej skali → dzień, wieczór, noc →
   porównanie, warianty, obraz, zapytanie, WhatsApp. Wszystko lokalnie (WebGL2 + płótno), zdjęcie nigdzie nie wychodzi. */
(function () {
  'use strict';
  const root = document.getElementById('p2'); if (!root) return;
  const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, MOB = () => innerWidth < 821, DOTYK = () => MOB() || matchMedia('(pointer: coarse)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v)), toast = m => window.GBtoast && GBtoast(m);
  const scena = $('#p2Scena'), cv = $('#p2Gl'), nak = $('#p2Nak'), nx = nak.getContext('2d'), lupa = $('#p2Lupa'), lx = lupa.getContext('2d');

  /* ---------- katalog ---------- */
  const PRZYKLADY = [
    { src: 'img/real/przyklad.webp', nazwa: 'Podjazd przed garażem', w: 7, l: 9, rogi: [[.43, .228], [1, .228], [1, 1], [.3, 1]],
      strefy: [{ nazwa: 'Podjazd', pts: [[.432, .226], [1, .226], [1, 1], [.736, 1], [.665, .86], [.585, .7], [.515, .54], [.462, .4], [.437, .3]], pat: 'herring', pal: 'grafit', obrz: 'bianco' }] },
    { src: 'img/real/podjazd-grafit-zolty.webp', nazwa: 'Podjazd z góry', w: 6, l: 14, rogi: [[.305, .035], [.585, .035], [.6, .97], [.07, .97]],
      strefy: [{ nazwa: 'Podjazd', pts: [[.31, .04], [.583, .04], [.583, .69], [.56, .77], [.5, .84], [.42, .88], [.32, .91], [.2, .94], [.1, .965], [.07, .93], [.14, .83], [.19, .72], [.22, .6], [.24, .47], [.27, .33], [.29, .2]], pat: 'basket', pal: 'piaskowy', obrz: 'grafit' }] }
  ];
  const WZORY = [['herring', 'Jodełka'], ['rows', 'Cegiełka'], ['basket', 'Koszyk'], ['slabs', 'Płyty 60×30'], ['cobble', 'Kostka granitowa'], ['arcs', 'Łuki'], ['grid', 'Kostka 10×10']];
  const KOLORY = [['grafit', 'Grafit'], ['szary', 'Szary'], ['bianco', 'Bianco'], ['piaskowy', 'Piaskowy'], ['melanz', 'Melanż'], ['granit', 'Granit'], ['lupek', 'Łupek']];
  const OBRZEZA = [['', 'Bez'], ['grafit', 'Grafit'], ['bianco', 'Bianco'], ['zolty', 'Żółte'], ['melanz', 'Melanż']];
  const NAZWY = ['Podjazd', 'Ścieżka', 'Taras', 'Opaska', 'Plac', 'Dojście'];
  const OBIEKTY = {
    klon: { n: 'Klon', g: 'Drzewa', h: 4.6, src: 'klon' }, klon_jesien: { n: 'Klon jesienią', g: 'Drzewa', h: 4.4, src: 'klon_jesien' }, brzoza: { n: 'Brzoza', g: 'Drzewa', h: 6, src: 'brzoza' },
    tuja: { n: 'Tuja', g: 'Krzewy', h: 2.4, src: 'tuja' }, bukszpan: { n: 'Kula bukszpanu', g: 'Krzewy', h: .7, src: 'bukszpan' }, trawa: { n: 'Trawa ozdobna', g: 'Krzewy', h: .9, src: 'trawa' },
    donica: { n: 'Donica', g: 'Krzewy', h: 1, src: 'donica' },
    slupek: { n: 'Słupek LED', g: 'Światło', h: .8, src: 'slupek', lampa: { y: .1, r: 2.2, moc: .9 } }, latarnia: { n: 'Latarnia', g: 'Światło', h: 2.3, src: 'latarnia', lampa: { y: .1, r: 4, moc: 1.15 } },
    najazdowa: { n: 'Oprawa w kostce', g: 'Światło', h: .06, src: 'najazdowa', lampa: { y: .5, r: 1.1, moc: .75, dol: true } }
  };
  const IMG = {}; Object.values(OBIEKTY).forEach(o => { if (!IMG[o.src]) { const im = new Image(); im.decoding = 'async'; im.src = `img/pk/${o.src}.webp`; im.onload = () => rysuj(); IMG[o.src] = im; } });
  const nazwa = (L, id) => (L.find(x => x[0] === id) || ['', id])[1];

  /* ---------- stan ---------- */
  const st = { foto: null, fW: 0, fH: 0, rogi: null, wm: 7, lm: 9, strefy: [], akt: -1, obiekty: [], wyb: -1, pora: 'dzien', split: 1, porownaj: false, krok: 1,
    narz: 'rogi', rysowane: null, obiektTyp: null, pedzel: 6, ruszony: false };
  let S = null, gl = null, P = null, T = {}, kamC = null, box = [0, 0, 1, 1], maska = null, mx = null, Wd = 0, Hd = 0, D = 1, view = { z: 1, ox: 0, oy: 0 };
  const hist = [], przod = [];

  /* ---------- geometria ---------- */
  function homografia(q) { const [x0, y0] = q[0], [x1, y1] = q[1], [x2, y2] = q[2], [x3, y3] = q[3]; const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    let g = 0, h = 0; const den = dx1 * dy2 - dx2 * dy1; if (Math.abs(dx3) > 1e-9 || Math.abs(dy3) > 1e-9) { g = (dx3 * dy2 - dx2 * dy3) / den; h = (dx1 * dy3 - dx3 * dy1) / den; }
    return [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h, 1]; }
  function odwroc(m) { const [a, b, c, d, e, f, g, h, i] = m; const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, det = a * A + b * B + c * C || 1e-12;
    return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det]; }
  const zast = (M, x, y) => { const w = M[6] * x + M[7] * y + M[8]; return [(M[0] * x + M[1] * y + M[2]) / w, (M[3] * x + M[4] * y + M[5]) / w]; };
  const Hm = () => homografia(st.rogi), Hi = () => odwroc(Hm());
  const doPlaszczyzny = (x, y) => { const [u, v] = zast(Hi(), x, y); return [u * st.wm, v * st.lm]; }; // metry
  const zPlaszczyzny = (mx2, my2) => zast(Hm(), mx2 / st.wm, my2 / st.lm);
  function poleM2(pts) { const m = pts.map(([x, y]) => doPlaszczyzny(x, y)); let a = 0; for (let i = 0; i < m.length; i++) { const [x1, y1] = m[i], [x2, y2] = m[(i + 1) % m.length]; a += x1 * y2 - x2 * y1; } return Math.abs(a / 2); }
  function pxNaMetr(x, y) { // ile pikseli zdjęcia (0..1 × szer.) przypada na metr w tym miejscu (poziomo)
    const [u, v] = doPlaszczyzny(x, y), [ax, ay] = zPlaszczyzny(u - .5, v), [bx, by] = zPlaszczyzny(u + .5, v); return Math.hypot((bx - ax) * st.fW, (by - ay) * st.fH); }
  function wypukly(q) { let z0 = 0; for (let i = 0; i < 4; i++) { const a = q[i], b = q[(i + 1) % 4], c = q[(i + 2) % 4]; const z = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]); if (Math.abs(z) < 1e-4) return false; if (z0 && Math.sign(z) !== z0) return false; z0 = Math.sign(z); } return true; }
  function rdp(pts, eps) { if (pts.length < 3) return pts; let dm = 0, idx = 0; const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1];
    for (let i = 1; i < pts.length - 1; i++) { const [px, py] = pts[i]; const d = Math.abs((by - ay) * px - (bx - ax) * py + bx * ay - by * ax) / (Math.hypot(bx - ax, by - ay) || 1); if (d > dm) { dm = d; idx = i; } }
    return dm > eps ? rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps)) : [pts[0], pts[pts.length - 1]]; }
  function wSrodku(pts, x, y) { let c = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const [xi, yi] = pts[i], [xj, yj] = pts[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }

  /* ---------- tekstura kostki: wszystkie obszary w jednej płaszczyźnie (metry → piksele) ---------- */
  let budT = 0;
  function budujKamien() {
    if (!S || !st.foto) return; const N = 2048, saveK = S.k;
    const zony = st.strefy.filter(z => z.pts.length >= 3).map(z => ({ z, m: z.pts.map(([x, y]) => doPlaszczyzny(x, y)) }));
    if (!zony.length) { kamC = null; if (gl) wgraj('k', pusty(), true); rysuj(); return; }
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; zony.forEach(o => o.m.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }));
    x0 -= .4; y0 -= .4; x1 += .4; y1 += .4; const bw = Math.min(60, x1 - x0), bh = Math.min(60, y1 - y0); x1 = x0 + bw; y1 = y0 + bh;
    const p = Math.min(N / Math.max(bw, bh), 420); const W = Math.ceil(bw * p), H = Math.ceil(bh * p);
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'); S.k = p / 1000;
    const toT = ([x, y]) => [(x - x0) * p, (y - y0) * p];
    for (const { z, m } of zony) {
      const poly = m.map(toT); const path = () => { g.beginPath(); poly.forEach(([a, b], i) => i ? g.lineTo(a, b) : g.moveTo(a, b)); g.closePath(); };
      let bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9; poly.forEach(([a, b]) => { bx0 = Math.min(bx0, a); by0 = Math.min(by0, b); bx1 = Math.max(bx1, a); by1 = Math.max(by1, b); });
      g.save(); path(); g.clip(); g.fillStyle = '#8d8270'; g.fillRect(bx0 - 4, by0 - 4, bx1 - bx0 + 8, by1 - by0 + 8); if (S.bedPattern) { g.globalAlpha = .5; g.fillStyle = S.bedPattern; g.fillRect(bx0, by0, bx1 - bx0, by1 - by0); g.globalAlpha = 1; }
      const lista = [], cx = (bx0 + bx1) / 2, cy = (by0 + by1) / 2, R = Math.hypot(bx1 - bx0, by1 - by0) / 2 + 300 * S.k;
      S.genPattern(z.pat, z.pal, cx - R, cy - R, cx + R, cy + R, () => true, lista, {}); const rot = (z.obrot || 0) * Math.PI / 180;
      for (const s of lista) { if (rot) { const dx = s.x - cx, dy = s.y - cy; s.x = cx + dx * Math.cos(rot) - dy * Math.sin(rot); s.y = cy + dx * Math.sin(rot) + dy * Math.cos(rot); s.rot += rot; }
        if (s.x < bx0 - 300 * S.k || s.x > bx1 + 300 * S.k || s.y < by0 - 300 * S.k || s.y > by1 + 300 * S.k) continue; if (s.kind === 'dome') s.kind = 'block'; S.drawOne(g, s, 1, 2); }
      g.setTransform(1, 0, 0, 1, 0, 0);
      if (z.obrz) { const pas = (z.obrzR || 1) * 105 * S.k, L = 200 * S.k, Wb = 100 * S.k, J = 5 * S.k, P2 = S.PAL[z.obrz] || S.PAL.grafit;
        g.lineWidth = pas * 2; g.strokeStyle = '#8d8270'; path(); g.stroke(); // pod obrzeże: piasek
        const pole = poly.reduce((a, [x, y], i) => { const [x2, y2] = poly[(i + 1) % poly.length]; return a + x * y2 - x2 * y; }, 0); const sg = pole > 0 ? 1 : -1;
        for (let r = 0; r < (z.obrzR || 1); r++) for (let i = 0; i < poly.length; i++) { const [ax, ay] = poly[i], [bx, by] = poly[(i + 1) % poly.length], len = Math.hypot(bx - ax, by - ay); if (len < 2) continue;
          const ux = (bx - ax) / len, uy = (by - ay) / len, nx2 = -uy * sg, ny2 = ux * sg, off = Wb / 2 + J / 2 + r * (Wb + J), ang = Math.atan2(uy, ux);
          for (let s = (r % 2) * L / 2; s < len; s += L + J) { const l = Math.min(L, len - s); if (l < L * .2) continue; const x = ax + ux * (s + l / 2) + nx2 * off, y = ay + uy * (s + l / 2) + ny2 * off;
            S.drawOne(g, { x, y, w: l, h: Wb, rot: ang, col: P2[(Math.abs(Math.sin(x * 3.1 + y * 7.7)) * 999 | 0) % P2.length], kind: 'block', v: (Math.abs(Math.sin(x + y)) * 6) | 0, key: y, poly: null }, 1, 2); } }
        g.setTransform(1, 0, 0, 1, 0, 0); }
      g.restore();
    }
    S.k = saveK; kamC = c; box = [x0 / st.wm, y0 / st.lm, bw / st.wm, bh / st.lm];
    if (gl) wgraj('k', c, true); rysuj(); zapiszLokalnie();
  }
  function planujKamien(od) { clearTimeout(budT); $('#p2Lad').hidden = false; budT = setTimeout(() => requestAnimationFrame(() => { budujKamien(); $('#p2Lad').hidden = true; panel(); }), od ? 0 : 140); }
  function pusty() { const c = document.createElement('canvas'); c.width = c.height = 4; return c; }

  /* ---------- WebGL2: zdjęcie + kostka w perspektywie + gumka + pora dnia ---------- */
  const VS = `#version 300 es
in vec2 p; out vec2 vS; uniform vec2 uRes; void main(){ vS = (p * .5 + .5) * uRes; vS.y = uRes.y - vS.y; gl_Position = vec4(p, 0., 1.); }`;
  const FS = `#version 300 es
precision highp float; in vec2 vS; out vec4 o;
uniform sampler2D tF, tK, tM, tC; uniform mat3 Hi; uniform vec4 uBox; uniform vec3 uView; uniform vec2 uFoto, uRes; uniform float uSplit, uLref, uNoc, uWiecz; uniform vec3 uTint;
float h12(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 v = (vS - uView.yz) / (uView.x * uFoto); if (v.x < 0. || v.y < 0. || v.x > 1. || v.y > 1.) { o = vec4(.07, .075, .08, 1.); return; }
  vec3 f = texture(tF, v).rgb; vec3 col = f; vec3 q = Hi * vec3(v, 1.);
  if (q.z > 0. && v.x >= uSplit) { vec2 uv = q.xy / q.z; vec2 t = (uv - uBox.xy) / uBox.zw;
    if (t.x > 0. && t.y > 0. && t.x < 1. && t.y < 1.) { vec4 k = texture(tK, t, .5); float m = k.a * texture(tM, v).r;
      float L = texture(tC, v).r; float s = clamp(L / max(uLref, .03), .45, 1.2); s = mix(1., pow(s, .85), .75);
      vec3 n = k.rgb / max(k.a, .001) * uTint * s + (h12(floor(vS)) - .5) * .03; n *= mix(.8, 1., smoothstep(.3, 1., m)); col = mix(f, n, smoothstep(0., .6, m)); } }
  col = mix(col, col * vec3(1.04, .9, .76), uWiecz); col *= mix(1., .82, uWiecz);
  col = mix(col, col * vec3(.24, .28, .42) + vec3(.005, .008, .02), uNoc);
  o = vec4(col, 1.);
}`;
  function initGL() { try { gl = cv.getContext('webgl2', { antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: true }); } catch (e) { gl = null; } if (!gl) return;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
    try { P = gl.createProgram(); gl.attachShader(P, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(P, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(P); if (!gl.getProgramParameter(P, gl.LINK_STATUS)) throw new Error('link'); } catch (e) { console.warn(e); gl = null; return; }
    gl.useProgram(P); const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(P, 'p'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    P.u = {}; ['tF', 'tK', 'tM', 'tC', 'Hi', 'uBox', 'uView', 'uFoto', 'uRes', 'uSplit', 'uLref', 'uNoc', 'uWiecz', 'uTint'].forEach(n => P.u[n] = gl.getUniformLocation(P, n));
    gl.uniform1i(P.u.tF, 0); gl.uniform1i(P.u.tK, 1); gl.uniform1i(P.u.tM, 2); gl.uniform1i(P.u.tC, 3); P.an = gl.getExtension('EXT_texture_filter_anisotropic');
    wgraj('k', pusty(), true); }
  const JED = { f: 0, k: 1, m: 2, c: 3 };
  function wgraj(id, src, mip) { if (!gl) return; const t = T[id] || (T[id] = gl.createTexture()); gl.activeTexture(gl.TEXTURE0 + JED[id]); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, id === 'k'); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    if (mip) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); if (P.an) gl.texParameterf(gl.TEXTURE_2D, P.an.TEXTURE_MAX_ANISOTROPY_EXT, 8); }
    else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); }
  let lref = .6, tint = [1, 1, 1], cien = null, maskaBrudna = false;
  function liczCienie() { const w = 192, h = Math.max(8, Math.round(192 * st.fH / st.fW)); const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(st.foto, 0, 0, w, h);
    const d = g.getImageData(0, 0, w, h); let L = new Float32Array(w * h), sr = 0, sg = 0, sb = 0;
    for (let i = 0; i < w * h; i++) { const r = d.data[i * 4], gg = d.data[i * 4 + 1], b = d.data[i * 4 + 2]; L[i] = (.2126 * r + .7152 * gg + .0722 * b) / 255; sr += r; sg += gg; sb += b; }
    for (let pass = 0; pass < 3; pass++) { const Tm = new Float32Array(w * h), rr = 3; for (let y = 0; y < h; y++) { let a = 0, c2 = 0; for (let x = -rr; x < w + rr; x++) { if (x + rr < w) { a += L[y * w + x + rr]; c2++; } if (x - rr - 1 >= 0) { a -= L[y * w + x - rr - 1]; c2--; } if (x >= 0 && x < w) Tm[y * w + x] = a / c2; } }
      for (let x = 0; x < w; x++) { let a = 0, c2 = 0; for (let y = -rr; y < h + rr; y++) { if (y + rr < h) { a += Tm[(y + rr) * w + x]; c2++; } if (y - rr - 1 >= 0) { a -= Tm[(y - rr - 1) * w + x]; c2--; } if (y >= 0 && y < h) L[y * w + x] = a / c2; } } }
    const n = w * h, ml = (sr + sg + sb) / 3 / n || 1; tint = [Math.pow(sr / n / ml, .3), Math.pow(sg / n / ml, .3), Math.pow(sb / n / ml, .3)];
    for (let i = 0; i < n; i++) { const v = clamp(L[i], 0, 1) * 255; d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v; d.data[i * 4 + 3] = 255; } g.putImageData(d, 0, 0); cien = c; cien._L = L; cien._w = w; cien._h = h; liczLref(); }
  function liczLref() { if (!cien) return; const vals = [], w = cien._w, h = cien._h; for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) { const px = x / w, py = y / h; if (st.strefy.some(z => wSrodku(z.pts, px, py))) vals.push(cien._L[y * w + x]); }
    vals.sort((a, b) => a - b); lref = vals.length ? vals[(vals.length * .55) | 0] : .6; }

  /* ---------- widok: dopasowanie, przybliżenie, przesuwanie ---------- */
  function rozmiar() { if (!st.foto) return; const r = scena.getBoundingClientRect(); if (!r.width) return; const W = r.width, H = r.height;
    D = Math.min(devicePixelRatio || 1, 2, Math.sqrt(3.6e6 / (W * H))); cv.width = Math.round(W * D); cv.height = Math.round(H * D); nak.width = cv.width; nak.height = cv.height;
    const s = Math.min(W / st.fW, H / st.fH); Wd = st.fW * s; Hd = st.fH * s; if (!view.z || view.fit) dopasuj(); rysuj(); }
  function dopasuj() { const r = scena.getBoundingClientRect(); view = { z: 1, ox: (r.width - Wd) / 2, oy: (r.height - Hd) / 2, fit: true }; rysuj(); }
  const naEkran = ([x, y]) => [view.ox + x * Wd * view.z, view.oy + y * Hd * view.z];
  const zEkranu = (sx, sy) => [(sx - view.ox) / (Wd * view.z), (sy - view.oy) / (Hd * view.z)];
  function zoomWokol(f, sx, sy) { const z2 = clamp(view.z * f, 1, 8); const [px, py] = zEkranu(sx, sy); view.z = z2; view.ox = sx - px * Wd * z2; view.oy = sy - py * Hd * z2; view.fit = z2 === 1; ograniczWidok(); rysuj(); }
  function ograniczWidok() { const r = scena.getBoundingClientRect(), w = Wd * view.z, h = Hd * view.z; view.ox = w < r.width ? (r.width - w) / 2 : clamp(view.ox, r.width - w, 0); view.oy = h < r.height ? (r.height - h) / 2 : clamp(view.oy, r.height - h, 0); }

  /* ---------- rysowanie ---------- */
  let plan = false; function rysuj() { if (plan) return; plan = true; requestAnimationFrame(() => { plan = false; teraz(); }); }
  function teraz() {
    if (!st.foto || !Wd) return; const r = scena.getBoundingClientRect();
    if (gl && T.f) { if (maskaBrudna) { wgraj('m', maska, false); maskaBrudna = false; } const M = Hi(); gl.viewport(0, 0, cv.width, cv.height); gl.useProgram(P);
      gl.uniformMatrix3fv(P.u.Hi, false, new Float32Array([M[0], M[3], M[6], M[1], M[4], M[7], M[2], M[5], M[8]])); gl.uniform4f(P.u.uBox, ...box);
      gl.uniform3f(P.u.uView, view.z, view.ox, view.oy); gl.uniform2f(P.u.uFoto, Wd, Hd); gl.uniform2f(P.u.uRes, r.width, r.height);
      gl.uniform1f(P.u.uSplit, st.porownaj ? st.split : 0); gl.uniform1f(P.u.uLref, lref); gl.uniform1f(P.u.uNoc, st.pora === 'noc' ? 1 : 0); gl.uniform1f(P.u.uWiecz, st.pora === 'wieczor' ? 1 : 0); gl.uniform3f(P.u.uTint, ...tint);
      for (const id in JED) { gl.activeTexture(gl.TEXTURE0 + JED[id]); gl.bindTexture(gl.TEXTURE_2D, T[id]); } gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
    nakladka(r);
  }
  function nakladka(r) {
    const g = nx; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, nak.width, nak.height); g.setTransform(D, 0, 0, D, 0, 0);
    const noc = st.pora === 'noc', wiecz = st.pora === 'wieczor';
    // obiekty (od tyłu do przodu) + światło
    const ob = st.obiekty.map((o, i) => ({ o, i })).sort((a, b) => a.o.y - b.o.y);
    if (noc || wiecz) { g.globalCompositeOperation = 'lighter'; for (const { o } of ob) { const T2 = OBIEKTY[o.t]; if (!T2.lampa) continue; plamaSwiatla(g, o, T2, noc ? 1 : .45); } g.globalCompositeOperation = 'source-over'; }
    for (const { o, i } of ob) { const T2 = OBIEKTY[o.t], im = IMG[T2.src]; if (!im || !im.complete || !im.naturalWidth) continue; const hpx = T2.h * pxNaMetr(o.x, o.y) * o.s / st.fW * Wd * view.z, wpx = hpx * im.naturalWidth / im.naturalHeight;
      const [bx, by] = naEkran([o.x, o.y]); if (st.porownaj && o.x < st.split) continue;
      const cg = g.createRadialGradient(bx, by, 0, bx, by, wpx * .55); cg.addColorStop(0, `rgba(0,0,0,${noc ? .25 : .38})`); cg.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(bx, by); g.scale(1, .26); g.translate(-bx, -by); g.fillStyle = cg; g.beginPath(); g.arc(bx, by, wpx * .55, 0, 7); g.fill(); g.restore();
      if (noc || wiecz) g.filter = noc ? 'brightness(.42) saturate(.7) hue-rotate(8deg)' : 'brightness(.84) sepia(.12)'; g.drawImage(im, bx - wpx / 2, by - hpx, wpx, hpx); g.filter = 'none';
      if (T2.lampa && (noc || wiecz)) { g.globalCompositeOperation = 'lighter'; const ly = by - hpx * (1 - T2.lampa.y), rr = Math.max(10, wpx * (T2.lampa.dol ? .9 : 1.6)); const hg = g.createRadialGradient(bx, ly, 0, bx, ly, rr); const a = noc ? .95 : .5;
        hg.addColorStop(0, `rgba(255,236,190,${a})`); hg.addColorStop(.25, `rgba(255,200,120,${a * .45})`); hg.addColorStop(1, 'rgba(255,170,80,0)'); g.fillStyle = hg; g.beginPath(); g.arc(bx, ly, rr, 0, 7); g.fill(); g.globalCompositeOperation = 'source-over'; }
      if (i === st.wyb && st.krok === 4) { g.strokeStyle = '#5ad27c'; g.lineWidth = 2; g.setLineDash([6, 5]); g.strokeRect(bx - wpx / 2 - 4, by - hpx - 4, wpx + 8, hpx + 8); g.setLineDash([]); kolko(g, bx + wpx / 2 + 4, by - hpx - 4, 11, '#5ad27c', '⤢'); } }
    // porównanie: linia
    if (st.porownaj) { const [sx] = naEkran([st.split, 0]); g.fillStyle = '#fff'; g.fillRect(sx - 1.5, 0, 3, r.height); kolko(g, sx, r.height / 2, 20, '#fff', '↔', '#1b1b1a'); etykieta(g, 'Przed', 12, r.height - 46); etykieta(g, 'Po', r.width - 52, r.height - 46); }
    // perspektywa
    if (st.krok === 2) { const M = Hm(); g.strokeStyle = 'rgba(255,214,90,.55)'; g.lineWidth = 1.2; g.beginPath(); const nI = Math.min(40, Math.round(st.wm)), nJ = Math.min(40, Math.round(st.lm));
      for (let i = 0; i <= nI; i++) for (let j = 0; j <= 20; j++) { const [x, y] = naEkran(zast(M, i / nI, j / 20)); j ? g.lineTo(x, y) : g.moveTo(x, y); }
      for (let j = 0; j <= nJ; j++) for (let i = 0; i <= 20; i++) { const [x, y] = naEkran(zast(M, i / 20, j / nJ)); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
      g.strokeStyle = '#ffd65a'; g.lineWidth = 2.6; g.beginPath(); st.rogi.forEach((q, i) => { const [x, y] = naEkran(q); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); g.stroke();
      st.rogi.forEach((q, i) => { const [x, y] = naEkran(q); kolko(g, x, y, 14, '#ffd65a', String(i + 1), '#1b1b1a'); }); }
    // obszary
    if (st.krok === 3) { st.strefy.forEach((z, zi) => { const akt = zi === st.akt; g.strokeStyle = akt ? '#5ad27c' : 'rgba(255,255,255,.7)'; g.lineWidth = akt ? 2.6 : 1.6; g.setLineDash(akt ? [] : [7, 6]); g.beginPath(); z.pts.forEach((q, i) => { const [x, y] = naEkran(q); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); g.stroke(); g.setLineDash([]);
        if (akt && st.narz === 'edytuj') { z.pts.forEach((q, i) => { const [x, y] = naEkran(q); const [x2, y2] = naEkran(z.pts[(i + 1) % z.pts.length]); kolko(g, (x + x2) / 2, (y + y2) / 2, 7, 'rgba(255,255,255,.85)', '+', '#1b1b1a'); }); z.pts.forEach((q, i) => { const [x, y] = naEkran(q); kolko(g, x, y, i === wybPunkt ? 12 : 10, i === wybPunkt ? '#ffd65a' : '#5ad27c'); }); }
        const [cx, cy] = naEkran(srodek(z.pts)); etykieta(g, `${z.nazwa} · ${Math.round(poleM2(z.pts))} m²`, cx, cy, true); });
      if (st.rysowane) { const pts = st.rysowane; g.strokeStyle = '#ffd65a'; g.lineWidth = 2.6; g.beginPath(); pts.forEach((q, i) => { const [x, y] = naEkran(q); i ? g.lineTo(x, y) : g.moveTo(x, y); }); if (kursor && st.narz === 'rysuj') { const [x, y] = naEkran(kursor); g.lineTo(x, y); } g.stroke();
        pts.forEach((q, i) => { const [x, y] = naEkran(q); kolko(g, x, y, i === 0 ? 13 : 8, i === 0 && pts.length > 2 ? '#5ad27c' : '#ffd65a'); }); } }
    if (st.narz === 'gumka' && kursor && st.krok === 4) { const [x, y] = naEkran(kursor); g.strokeStyle = '#ff7a6b'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, st.pedzel / 100 * Wd * view.z, 0, 7); g.stroke(); }
  }
  function plamaSwiatla(g, o, T2, moc) { const M = Hm(); const [u, v] = doPlaszczyzny(o.x, o.y); const R = T2.lampa.r * o.s; const pts = []; for (let k = 0; k < 24; k++) { const a = k / 24 * 6.283; pts.push(naEkran(zPlaszczyzny(u + Math.cos(a) * R, v + Math.sin(a) * R))); }
    let cx = 0, cy = 0; pts.forEach(([x, y]) => { cx += x; cy += y; }); cx /= pts.length; cy /= pts.length; const rx = Math.max(...pts.map(([x]) => Math.abs(x - cx))), ry = Math.max(...pts.map(([, y]) => Math.abs(y - cy)));
    if (!isFinite(rx) || !isFinite(ry) || rx < 1 || ry < 1) return; const a = T2.lampa.moc * moc; g.save(); g.translate(cx, cy); g.scale(1, ry / rx); const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
    gr.addColorStop(0, `rgba(255,214,150,${.6 * a})`); gr.addColorStop(.45, `rgba(255,186,110,${.26 * a})`); gr.addColorStop(1, 'rgba(255,170,90,0)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, rx, 0, 7); g.fill(); g.restore(); }
  function kolko(g, x, y, r, c, t, tc) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fillStyle = c; g.shadowColor = 'rgba(0,0,0,.45)'; g.shadowBlur = 6; g.fill(); g.shadowBlur = 0; g.lineWidth = 2; g.strokeStyle = '#fff'; g.stroke();
    if (t) { g.fillStyle = tc || '#fff'; g.font = `800 ${Math.round(r * 1.1)}px Manrope,sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, x, y + 1); } }
  function etykieta(g, t, x, y, srodkiem) { g.font = '800 12.5px Manrope,sans-serif'; const w = g.measureText(t).width + 18; const X = srodkiem ? x - w / 2 : x, Y = srodkiem ? y - 13 : y;
    g.fillStyle = 'rgba(10,10,10,.72)'; g.beginPath(); g.roundRect(X, Y, w, 26, 13); g.fill(); g.fillStyle = '#fff'; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(t, X + 9, Y + 13.5); }
  const srodek = pts => { let a = 0, cx = 0, cy = 0; for (let i = 0; i < pts.length; i++) { const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length]; const f = x1 * y2 - x2 * y1; a += f; cx += (x1 + x2) * f; cy += (y1 + y2) * f; } return a ? [cx / (3 * a), cy / (3 * a)] : pts[0]; };

  /* ---------- lupa: palec nie zasłania tego, co rysujesz ---------- */
  function pokazLupe(sx, sy) { if (!MOB() && !dotyk) return; const r = 62, Z = 2.6, s = lupa.width / 2; lupa.hidden = false; const left = sx < scena.clientWidth / 2;
    lupa.style.left = (left ? scena.clientWidth - 2 * r - 14 : 14) + 'px'; lupa.style.top = '14px';
    lx.setTransform(1, 0, 0, 1, 0, 0); lx.clearRect(0, 0, lupa.width, lupa.height); lx.save(); lx.beginPath(); lx.arc(s, s, s - 2, 0, 7); lx.clip();
    const w = (r * 2) / Z * D; lx.drawImage(cv, sx * D - w / 2, sy * D - w / 2, w, w, 0, 0, lupa.width, lupa.height); lx.drawImage(nak, sx * D - w / 2, sy * D - w / 2, w, w, 0, 0, lupa.width, lupa.height);
    lx.restore(); lx.strokeStyle = '#fff'; lx.lineWidth = 3; lx.beginPath(); lx.arc(s, s, s - 2, 0, 7); lx.stroke(); lx.strokeStyle = '#5ad27c'; lx.lineWidth = 2; lx.beginPath(); lx.moveTo(s - 10, s); lx.lineTo(s + 10, s); lx.moveTo(s, s - 10); lx.lineTo(s, s + 10); lx.stroke(); }
  const ukryjLupe = () => { lupa.hidden = true; };

  /* ---------- historia (cofnij / ponów) ---------- */
  const zdjecie = () => JSON.stringify({ rogi: st.rogi, wm: st.wm, lm: st.lm, strefy: st.strefy, obiekty: st.obiekty });
  function zapamietaj() { hist.push(zdjecie()); if (hist.length > 60) hist.shift(); przod.length = 0; przyciski(); }
  function przywroc(js) { const o = JSON.parse(js); Object.assign(st, o); st.akt = Math.min(st.akt, st.strefy.length - 1); st.wyb = -1; liczLref(); planujKamien(true); panel(); rysuj(); }
  function cofnij() { if (!hist.length) return; przod.push(zdjecie()); przywroc(hist.pop()); przyciski(); }
  function ponow() { if (!przod.length) return; hist.push(zdjecie()); przywroc(przod.pop()); przyciski(); }
  function przyciski() { $('#p2Cofnij').disabled = !hist.length; $('#p2Ponow').disabled = !przod.length; }
  function zapiszLokalnie() { try { if (st.zrodlo >= 0) localStorage.setItem('gb-p2-' + st.zrodlo, zdjecie()); } catch (e) { /* */ } }

  /* ---------- interakcja na scenie ---------- */
  const wsk = new Map(); let ciag = null, kursor = null, dotyk = false, wybPunkt = -1, pinch = null;
  const pos = e => { const r = scena.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const blisko = (a, b, px) => { const [ax, ay] = naEkran(a), [bx, by] = naEkran(b); return Math.hypot(ax - bx, ay - by) < px; };
  // dotyk poza pełnym ekranem: strona przewija się normalnie, a dotknięcie zdjęcia otwiera projektant na cały ekran
  let tap = null; const wLinii = () => !root.classList.contains('pelny');
  scena.addEventListener('pointerdown', e => { if (!st.foto || e.target.closest('button')) return; if (e.pointerType === 'touch' && wLinii()) return; dotyk = e.pointerType === 'touch'; scena.setPointerCapture(e.pointerId); wsk.set(e.pointerId, pos(e)); ruszony();
    if (wsk.size === 2) { const [a, b] = [...wsk.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), c: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], z: view.z }; ciag = null; ukryjLupe(); return; }
    const [sx, sy] = pos(e), p = zEkranu(sx, sy), R = dotyk ? 30 : 18;
    if (st.porownaj && Math.abs(naEkran([st.split, 0])[0] - sx) < 30) { ciag = { t: 'split' }; return; }
    if (st.krok === 2) { const i = st.rogi.findIndex(q => blisko(q, p, R)); if (i >= 0) { zapamietaj(); ciag = { t: 'rog', i }; return; } ciag = { t: 'pan', s: [sx, sy], o: [view.ox, view.oy] }; return; }
    if (st.krok === 3) {
      if (st.narz === 'rysuj') { if (!st.rysowane) st.rysowane = []; if (st.rysowane.length > 2 && blisko(st.rysowane[0], p, R)) { zamknijObszar(); return; } st.rysowane.push(p); ciag = { t: 'punkt' }; pokazLupe(sx, sy); rysuj(); podpowiedz(); return; }
      if (st.narz === 'lasso') { st.rysowane = [p]; ciag = { t: 'lasso' }; pokazLupe(sx, sy); return; }
      const z = st.strefy[st.akt];
      if (z && st.narz === 'edytuj') { const i = z.pts.findIndex(q => blisko(q, p, R)); if (i >= 0) { zapamietaj(); wybPunkt = i; ciag = { t: 'pkt', i }; pokazLupe(sx, sy); rysuj(); return; }
        for (let k = 0; k < z.pts.length; k++) { const a = z.pts[k], b = z.pts[(k + 1) % z.pts.length]; if (blisko([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], p, R)) { zapamietaj(); z.pts.splice(k + 1, 0, p); wybPunkt = k + 1; ciag = { t: 'pkt', i: k + 1 }; rysuj(); return; } } }
      const hit = st.strefy.findIndex(q => wSrodku(q.pts, p[0], p[1])); if (hit >= 0 && hit !== st.akt) { st.akt = hit; st.narz = 'edytuj'; wybPunkt = -1; panel(); rysuj(); return; }
      ciag = { t: 'pan', s: [sx, sy], o: [view.ox, view.oy] }; return; }
    if (st.krok === 4) {
      if (st.narz === 'gumka' || st.narz === 'pedzel') { ciag = { t: 'maluj', last: null }; maluj(p); pokazLupe(sx, sy); return; }
      const hitO = trafObiekt(sx, sy); if (hitO.i >= 0) { st.wyb = hitO.i; zapamietaj(); ciag = hitO.skala ? { t: 'skala', i: hitO.i, s0: st.obiekty[hitO.i].s, y0: sy } : { t: 'obiekt', i: hitO.i, d: [p[0] - st.obiekty[hitO.i].x, p[1] - st.obiekty[hitO.i].y] }; panel(); rysuj(); return; }
      if (st.obiektTyp) { zapamietaj(); st.obiekty.push({ t: st.obiektTyp, x: p[0], y: p[1], s: 1 }); st.wyb = st.obiekty.length - 1; ciag = { t: 'obiekt', i: st.wyb, d: [0, 0] }; panel(); rysuj(); toast(OBIEKTY[st.obiektTyp].n + ': przeciągnij, aby przesunąć'); return; }
      st.wyb = -1; panel(); ciag = { t: 'pan', s: [sx, sy], o: [view.ox, view.oy] }; rysuj(); return; }
    ciag = { t: 'pan', s: [sx, sy], o: [view.ox, view.oy] };
  });
  scena.addEventListener('pointermove', e => { if (!st.foto) return; if (tap && tap.id === e.pointerId) { if (Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > 12) tap = null; return; } const [sx, sy] = pos(e); kursor = zEkranu(sx, sy); if (wsk.has(e.pointerId)) wsk.set(e.pointerId, [sx, sy]);
    if (pinch && wsk.size === 2) { const [a, b] = [...wsk.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]), c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; const z2 = clamp(pinch.z * d / pinch.d, 1, 8);
      const [px, py] = zEkranu(pinch.c[0], pinch.c[1]); view.z = z2; view.ox = c[0] - px * Wd * z2; view.oy = c[1] - py * Hd * z2; pinch.c = c; view.fit = false; ograniczWidok(); rysuj(); return; }
    if (!ciag) { if (st.narz === 'rysuj' || st.narz === 'gumka') rysuj(); return; } const p = kursor;
    if (ciag.t === 'rog') { const q = st.rogi.map(r => r.slice()); q[ciag.i] = [clamp(p[0], 0, 1), clamp(p[1], 0, 1)]; if (wypukly(q)) st.rogi = q; pokazLupe(sx, sy); rysuj(); }
    else if (ciag.t === 'pkt') { st.strefy[st.akt].pts[ciag.i] = [clamp(p[0], -.02, 1.02), clamp(p[1], -.02, 1.02)]; pokazLupe(sx, sy); rysuj(); }
    else if (ciag.t === 'punkt') { st.rysowane[st.rysowane.length - 1] = p; pokazLupe(sx, sy); rysuj(); }
    else if (ciag.t === 'lasso') { const l = st.rysowane[st.rysowane.length - 1]; if (Math.hypot((p[0] - l[0]) * Wd * view.z, (p[1] - l[1]) * Hd * view.z) > 5) st.rysowane.push(p); pokazLupe(sx, sy); rysuj(); }
    else if (ciag.t === 'obiekt') { const o = st.obiekty[ciag.i]; o.x = clamp(p[0] - ciag.d[0], 0, 1); o.y = clamp(p[1] - ciag.d[1], 0, 1); rysuj(); }
    else if (ciag.t === 'skala') { st.obiekty[ciag.i].s = clamp(ciag.s0 * Math.exp((ciag.y0 - sy) / 140), .3, 3); rysuj(); $('#p2Rozmiar').value = st.obiekty[ciag.i].s; }
    else if (ciag.t === 'maluj') { maluj(p); pokazLupe(sx, sy); }
    else if (ciag.t === 'split') { st.split = clamp(p[0], 0, 1); rysuj(); }
    else if (ciag.t === 'pan' && view.z > 1) { view.ox = ciag.o[0] + sx - ciag.s[0]; view.oy = ciag.o[1] + sy - ciag.s[1]; ograniczWidok(); rysuj(); }
  });
  function koniecCiag(e) { if (tap && tap.id === e.pointerId) { const ok = e.type === 'pointerup' && performance.now() - tap.t < 600; tap = null; if (ok && !e.target.closest('.p2-pasek,button')) { ruszony(); pelny(true); toast('Pełny ekran: rysuj palcem, a dwoma palcami przybliżaj. Przycisk ✕ wraca do strony.'); } return; } wsk.delete(e.pointerId); if (wsk.size < 2) pinch = null; if (!ciag) return; const t = ciag.t; ciag = null; ukryjLupe();
    if (t === 'rog') { liczLref(); planujKamien(); }
    else if (t === 'pkt') { planujKamien(); liczLref(); }
    else if (t === 'lasso') { const eps = 3 / (Wd * view.z); const pts = rdp(st.rysowane, eps); st.rysowane = pts.length > 2 ? pts : null; if (st.rysowane) zamknijObszar(); else rysuj(); }
    else if (t === 'maluj') { liczLref(); }
    else if (t === 'obiekt' || t === 'skala') { zapiszLokalnie(); }
    rysuj(); }
  scena.addEventListener('pointerup', koniecCiag); scena.addEventListener('pointercancel', koniecCiag);
  scena.addEventListener('pointerleave', () => { kursor = null; rysuj(); });
  scena.addEventListener('wheel', e => { if (!st.foto) return; if (!e.ctrlKey && !root.classList.contains('pelny')) return; e.preventDefault(); const [sx, sy] = pos(e); zoomWokol(Math.exp(-e.deltaY * .0016), sx, sy); }, { passive: false });
  function trafObiekt(sx, sy) { for (let k = st.obiekty.length - 1; k >= 0; k--) { const o = st.obiekty[k], T2 = OBIEKTY[o.t], im = IMG[T2.src]; if (!im || !im.naturalWidth) continue;
      const hpx = T2.h * pxNaMetr(o.x, o.y) * o.s / st.fW * Wd * view.z, wpx = hpx * im.naturalWidth / im.naturalHeight, [bx, by] = naEkran([o.x, o.y]);
      if (k === st.wyb && Math.hypot(sx - (bx + wpx / 2 + 4), sy - (by - hpx - 4)) < 18) return { i: k, skala: true };
      if (sx > bx - wpx / 2 - 6 && sx < bx + wpx / 2 + 6 && sy > by - hpx - 6 && sy < by + 10) return { i: k }; } return { i: -1 }; }
  function maluj(p) { const w = maska.width, h = maska.height, r = st.pedzel / 100 * w; const kol = st.narz === 'gumka' ? '0,0,0' : '255,255,255';
    const g = mx.createRadialGradient(p[0] * w, p[1] * h, r * .55, p[0] * w, p[1] * h, r); g.addColorStop(0, `rgba(${kol},1)`); g.addColorStop(1, `rgba(${kol},0)`); mx.fillStyle = g; mx.beginPath(); mx.arc(p[0] * w, p[1] * h, r, 0, 7); mx.fill(); maskaBrudna = true; rysuj(); }
  function zamknijObszar() { const pts = st.rysowane; st.rysowane = null; if (!pts || pts.length < 3) return; zapamietaj(); const n = st.strefy.length; const prev = st.strefy[st.akt];
    st.strefy.push({ nazwa: NAZWY[n % NAZWY.length] + (n >= NAZWY.length ? ' ' + (n + 1) : ''), pts, pat: prev ? prev.pat : 'herring', pal: prev ? prev.pal : 'grafit', obrz: prev ? prev.obrz : 'bianco', obrzR: 1, obrot: 0 });
    st.akt = st.strefy.length - 1; st.narz = 'edytuj'; liczLref(); planujKamien(true); panel(); toast('Obszar gotowy. Wybierz dla niego kostkę.'); }
  document.addEventListener('keydown', e => { if (!root.contains(document.activeElement) && !root.classList.contains('pelny')) return; if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? ponow() : cofnij(); }
    if (e.key === 'Escape') { if (st.rysowane) { st.rysowane = null; rysuj(); } else if (root.classList.contains('pelny')) pelny(false); }
    if ((e.key === 'Delete' || e.key === 'Backspace') && st.krok === 4 && st.wyb >= 0 && document.activeElement.tagName !== 'INPUT') { usunObiekt(); } });

  /* ---------- panel ---------- */
  function krok(k) { st.krok = k; $$('.p2-kroki [data-k]').forEach(b => { const on = +b.dataset.k === k; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; }); $$('.p2-krok').forEach(p => { p.hidden = +p.dataset.k !== k; });
    if (k === 3 && st.narz !== 'rysuj' && st.narz !== 'lasso') st.narz = st.strefy.length ? 'edytuj' : 'rysuj'; if (k === 4 && !['gumka', 'pedzel'].includes(st.narz)) st.narz = 'obiekty'; if (k !== 3) st.rysowane = null;
    if (k === 5 && !st.porownaj) { st.porownaj = true; st.split = .5; } if (k !== 5 && st.porownaj && !st.porRecznie) st.porownaj = false;
    scena.dataset.krok = k; panel(); podpowiedz(); rysuj();
    if (st.ruszony && k >= 2 && k <= 4 && DOTYK() && !root.classList.contains('pelny')) pelny(true); }
  function podpowiedz() { const t = { 1: 'Zrób zdjęcie albo wybierz przykład', 2: 'Przeciągnij 4 żółte punkty na rogi terenu', 3: st.narz === 'rysuj' ? (st.rysowane && st.rysowane.length > 2 ? 'Dotknij zielonego punktu, aby zamknąć obszar' : 'Dotykaj kolejnych rogów obszaru') : st.narz === 'lasso' ? 'Obrysuj obszar palcem' : 'Przeciągaj punkty · „+” dodaje punkt · dotknij obszaru, aby go wybrać',
      4: st.narz === 'gumka' ? 'Zamaluj miejsca bez kostki (np. auto)' : st.obiektTyp ? 'Dotknij zdjęcia, aby postawić: ' + OBIEKTY[st.obiektTyp].n : 'Wybierz roślinę albo lampę i dotknij zdjęcia', 5: 'Przesuń linię: przed i po' }[st.krok]; $('#p2Wsk').textContent = t; }
  function panel() {
    const z = st.strefy[st.akt];
    // lista obszarów
    $('#p2Lista').innerHTML = st.strefy.map((q, i) => `<button type="button" class="p2-strefa${i === st.akt ? ' on' : ''}" data-z="${i}"><img src="img/wz/wz-${q.pat}-${q.pal}.webp" alt="" width="56" height="36"><span><b>${q.nazwa}</b><small>${nazwa(WZORY, q.pat)} · ${nazwa(KOLORY, q.pal)} · ${Math.round(poleM2(q.pts))} m²</small></span></button>`).join('') || '<p class="p2-maly">Jeszcze nie ma obszaru. Narysuj pierwszy.</p>';
    $('#p2Edycja').hidden = !z;
    if (z) { $('#p2Nazwa').value = z.nazwa; $$('#p2Wzory [data-pat]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.pat === z.pat)); const im = b.querySelector('img'); const s = `img/wz/wz-${b.dataset.pat}-${z.pal}.webp`; if (im.getAttribute('src') !== s) im.src = s; });
      $$('#p2Kolory [data-pal]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.pal === z.pal)); const im = b.querySelector('img'); const s = `img/wz/wz-${z.pat}-${b.dataset.pal}.webp`; if (im.getAttribute('src') !== s) im.src = s; });
      $$('#p2Obrz [data-obrz]').forEach(b => { const on = b.dataset.obrz === (z.obrz || ''); b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); }); $('#p2Obrot').textContent = `Obróć wzór: ${z.obrot || 0}°`; }
    $$('[data-n]').forEach(b => { const on = b.dataset.n === st.narz; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
    $('#p2Rysuj').hidden = !st.rysowane || st.narz !== 'rysuj';
    // obiekty
    $$('[data-ob]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ob === st.obiektTyp)));
    const o = st.obiekty[st.wyb]; $('#p2Obiekt').hidden = !o; if (o) { $('#p2ObNazwa').textContent = OBIEKTY[o.t].n; $('#p2Rozmiar').value = o.s; }
    $$('[data-pora]').forEach(b => { const on = b.dataset.pora === st.pora; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
    $('#p2Wym').querySelectorAll('input').forEach(i => { if (document.activeElement !== i) i.value = String(i.id === 'p2W' ? st.wm : st.lm).replace('.', ','); });
    podsumowanie(); przyciski(); podpowiedz();
  }
  function obrzezeM(z) { const br = ([x, y]) => x < .015 || x > .985 || y < .015 || y > .985; const m = z.pts.map(([x, y]) => doPlaszczyzny(x, y)); let L = 0;
    for (let i = 0; i < m.length; i++) { const j = (i + 1) % m.length; if (br(z.pts[i]) && br(z.pts[j])) continue; L += Math.hypot(m[j][0] - m[i][0], m[j][1] - m[i][1]); } return L; }
  function podsumowanie() { const s = st.strefy.map(z => `${z.nazwa}: ${nazwa(WZORY, z.pat).toLowerCase()}, ${nazwa(KOLORY, z.pal).toLowerCase()}${z.obrz ? ', obrzeże ' + nazwa(OBRZEZA, z.obrz).toLowerCase() + ' ok. ' + Math.max(1, Math.round(obrzezeM(z))) + ' mb' : ''}, ok. ${Math.max(1, Math.round(poleM2(z.pts)))} m²`);
    const licz = {}; st.obiekty.forEach(o => { licz[OBIEKTY[o.t].n] = (licz[OBIEKTY[o.t].n] || 0) + 1; }); const ob = Object.entries(licz).map(([n, k]) => `${n} × ${k}`);
    st.opis = s.join('; ') + (ob.length ? '. Dodatki: ' + ob.join(', ') : ''); $('#p2Podsum').innerHTML = (s.length ? s.map(x => `<li>${x}</li>`).join('') : '<li>Narysuj obszar w kroku 3.</li>') + (ob.length ? `<li>${ob.join(', ')}</li>` : '');
    const m2 = st.strefy.reduce((a, z) => a + poleM2(z.pts), 0); const mb = st.strefy.reduce((a, z) => a + (z.obrz ? obrzezeM(z) : 0), 0); $('#p2Razem').textContent = m2 ? `Razem ok. ${Math.round(m2)} m²` + (mb ? ` i ok. ${Math.round(mb)} mb obrzeża` : '') + '. Zapas na docinki (ok. 5%) i dokładne ilości policzymy przy pomiarze.' : ''; }
  // przyciski panelu
  $$('.p2-kroki [data-k]').forEach(b => b.addEventListener('click', () => krok(+b.dataset.k)));
  $('.p2-kroki').addEventListener('keydown', e => { const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) return; const k = clamp(st.krok + d, 1, 5); krok(k); $(`.p2-kroki [data-k="${k}"]`).focus(); });
  $$('[data-dalej]').forEach(b => b.addEventListener('click', () => krok(+b.dataset.dalej)));
  $$('[data-n]').forEach(b => b.addEventListener('click', () => { const n = b.dataset.n; if (n === 'caly') { zapamietaj(); st.rysowane = st.rogi.map(q => q.slice()); zamknijObszar(); return; }
    st.narz = n; if (n === 'rysuj' || n === 'lasso') { st.rysowane = null; wybPunkt = -1; } if (n === 'obiekty') st.obiektTyp = null; panel(); rysuj(); }));
  $('#p2Zamknij').addEventListener('click', zamknijObszar); $('#p2CofnijPkt').addEventListener('click', () => { if (st.rysowane) { st.rysowane.pop(); if (!st.rysowane.length) st.rysowane = null; panel(); rysuj(); } });
  $('#p2Lista').addEventListener('click', e => { const b = e.target.closest('[data-z]'); if (!b) return; st.akt = +b.dataset.z; st.narz = 'edytuj'; panel(); rysuj(); });
  const zmien = f => { const z = st.strefy[st.akt]; if (!z) return; zapamietaj(); f(z); planujKamien(); panel(); };
  $('#p2Wzory').addEventListener('click', e => { const b = e.target.closest('[data-pat]'); if (b) zmien(z => { z.pat = b.dataset.pat; }); });
  $('#p2Kolory').addEventListener('click', e => { const b = e.target.closest('[data-pal]'); if (b) zmien(z => { z.pal = b.dataset.pal; }); });
  $('#p2Obrz').addEventListener('click', e => { const b = e.target.closest('[data-obrz]'); if (b) zmien(z => { z.obrz = b.dataset.obrz; }); if (e.target.closest('#p2ObrzR')) zmien(z => { z.obrzR = z.obrzR === 2 ? 1 : 2; if (!z.obrz) z.obrz = 'grafit'; }); });
  $('#p2Obrot').addEventListener('click', () => zmien(z => { z.obrot = ((z.obrot || 0) + 45) % 180; }));
  $('#p2Nazwa').addEventListener('change', e => { const z = st.strefy[st.akt]; if (z) { zapamietaj(); z.nazwa = e.target.value.slice(0, 24) || z.nazwa; panel(); rysuj(); } });
  $('#p2Usun').addEventListener('click', () => { if (st.akt < 0) return; zapamietaj(); st.strefy.splice(st.akt, 1); st.akt = st.strefy.length - 1; planujKamien(true); panel(); rysuj(); toast('Obszar usunięty · Cofnij przywraca'); });
  $('#p2UsunPkt').addEventListener('click', () => { const z = st.strefy[st.akt]; if (!z || wybPunkt < 0 || z.pts.length <= 3) return; zapamietaj(); z.pts.splice(wybPunkt, 1); wybPunkt = -1; planujKamien(); rysuj(); });
  $('#p2Biblioteka').addEventListener('click', e => { const b = e.target.closest('[data-ob]'); if (!b) return; st.obiektTyp = st.obiektTyp === b.dataset.ob ? null : b.dataset.ob; st.narz = 'obiekty'; panel(); if (MOB() && !root.classList.contains('pelny')) pelny(true); });
  $('#p2Rozmiar').addEventListener('input', e => { const o = st.obiekty[st.wyb]; if (o) { o.s = +e.target.value; rysuj(); } });
  $('#p2Rozmiar').addEventListener('change', zapiszLokalnie);
  function usunObiekt() { if (st.wyb < 0) return; zapamietaj(); st.obiekty.splice(st.wyb, 1); st.wyb = -1; panel(); rysuj(); }
  $('#p2UsunOb').addEventListener('click', usunObiekt);
  $('#p2Duplikat').addEventListener('click', () => { const o = st.obiekty[st.wyb]; if (!o) return; zapamietaj(); st.obiekty.push({ ...o, x: clamp(o.x + .06, 0, 1) }); st.wyb = st.obiekty.length - 1; panel(); rysuj(); });
  $$('[data-pora]').forEach(b => b.addEventListener('click', () => { st.pora = b.dataset.pora; panel(); rysuj(); }));
  /* ---------- „Ułóż za mnie”: gotowe aranżacje na narysowanych obszarach (kostka, obrzeże, rośliny, światło) ---------- */
  const ARANZ = {
    nowoczesny: { n: 'Nowoczesny', pat: 'slabs', pal: 'grafit', obrz: 'bianco', pora: 'wieczor', kraw: ['najazdowa', 2.2, -.35], rogi: ['trawa', .6, 4] },
    klasyczny: { n: 'Klasyczny', pat: 'herring', pal: 'melanz', obrz: 'grafit', pora: 'wieczor', kraw: ['slupek', 3.2, .45], rogi: ['bukszpan', .7, 4] },
    ogrod: { n: 'Ogrodowy', pat: 'rows', pal: 'piaskowy', obrz: 'grafit', pora: 'noc', kraw: ['tuja', 1.1, .8, 1], rogi: ['latarnia', .7, 2] },
    jasny: { n: 'Jasny', pat: 'basket', pal: 'bianco', obrz: 'grafit', pora: 'wieczor', kraw: ['slupek', 3.6, .45], rogi: ['donica', .6, 4] }
  };
  function aranzuj(id) {
    const A = ARANZ[id]; if (!A) return;
    if (!st.foto || !st.strefy.length) { toast('Najpierw zaznacz obszar w kroku 3.'); krok(3); return; }
    zapamietaj(); ruszony(); st.obiekty = st.obiekty.filter(o => !o.auto);
    const brzeg = ([x, y]) => x < .015 || x > .985 || y < .015 || y > .985, wPolu = ([x, y]) => x > .01 && x < .99 && y > .01 && y < .99;
    const nowe = [];
    st.strefy.forEach(z => {
      z.pat = A.pat; z.pal = A.pal; z.obrz = A.obrz;
      const m = z.pts.map(([x, y]) => doPlaszczyzny(x, y)), N = m.length; let pole = 0;
      for (let i = 0; i < N; i++) { const [x1, y1] = m[i], [x2, y2] = m[(i + 1) % N]; pole += x1 * y2 - x2 * y1; }
      const sg = pole > 0 ? 1 : -1, nrm = (a, b) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L; return [uy * sg, -ux * sg, ux, uy, L]; };
      const kraw = [];
      for (let i = 0; i < N; i++) { const j = (i + 1) % N; if (brzeg(z.pts[i]) && brzeg(z.pts[j])) continue; const [nx, ny, ux, uy, L] = nrm(m[i], m[j]); if (L > .6) kraw.push({ a: m[i], nx, ny, ux, uy, L }); }
      const [typ, co, off, naj] = A.kraw, lista = naj ? kraw.sort((a, b) => b.L - a.L).slice(0, 1) : kraw;
      lista.forEach(k => { const n = Math.max(1, Math.floor(k.L / co)); for (let q = 0; q < n; q++) { const t = (q + .5) / n * k.L, p = zPlaszczyzny(k.a[0] + k.ux * t + k.nx * off, k.a[1] + k.uy * t + k.ny * off); if (wPolu(p)) nowe.push({ t: typ, x: p[0], y: p[1], s: 1, auto: 1 }); } });
      const naroza = [];
      for (let i = 0; i < N; i++) { if (brzeg(z.pts[i])) continue; const a = m[(i + N - 1) % N], b = m[i], c = m[(i + 1) % N]; const n1 = nrm(a, b), n2 = nrm(b, c); const skret = Math.acos(clamp(n1[2] * n2[2] + n1[3] * n2[3], -1, 1)); if (skret < .45) continue;
        let bx = n1[0] + n2[0], by = n1[1] + n2[1]; const bl = Math.hypot(bx, by) || 1; naroza.push({ skret, x: b[0] + bx / bl * A.rogi[1], y: b[1] + by / bl * A.rogi[1] }); }
      naroza.sort((a, b) => b.skret - a.skret).slice(0, A.rogi[2]).forEach(r => { const p = zPlaszczyzny(r.x, r.y); if (wPolu(p)) nowe.push({ t: A.rogi[0], x: p[0], y: p[1], s: 1, auto: 1 }); });
    });
    st.obiekty.push(...nowe.slice(0, 48)); st.pora = A.pora; st.wyb = -1;
    $$('[data-ar]').forEach(b => b.classList.toggle('on', b.dataset.ar === id));
    planujKamien(true); panel(); rysuj(); zapiszLokalnie();
    toast(nowe.length ? `Aranżacja „${A.n}” ułożona. Teraz zmieniaj wszystko po swojemu.` : `Aranżacja „${A.n}” ułożona.`);
  }
  function ustawZewn(pat, pal) { const P = WZORY.some(w => w[0] === pat) ? pat : null, K2 = { bialy: 'bianco', jasny: 'bianco', braz: 'melanz' }[pal] || (KOLORY.some(k => k[0] === pal) ? pal : null);
    if (!st.foto) { window.GBprojektantStart = { pat, pal }; return; }
    zapamietaj(); ruszony(); st.strefy.forEach(z => { if (P) z.pat = P; if (K2) z.pal = K2; }); planujKamien(true); krok(3); panel(); rysuj(); zapiszLokalnie();
    toast('Wybrano: ' + (P ? nazwa(WZORY, P).toLowerCase() : '') + (K2 ? ', ' + nazwa(KOLORY, K2).toLowerCase() : '') + '. Narysuj swój obszar albo wgraj własne zdjęcie.'); }
  window.GBprojektant = { ustaw: ustawZewn };
  $('#p2Aranz') && $('#p2Aranz').addEventListener('click', e => { const b = e.target.closest('[data-ar]'); if (b) aranzuj(b.dataset.ar); });
  $('#p2Pedzel').addEventListener('input', e => { st.pedzel = +e.target.value; });
  $('#p2CzyscMaske').addEventListener('click', () => { mx.fillStyle = '#fff'; mx.fillRect(0, 0, maska.width, maska.height); maskaBrudna = true; rysuj(); });
  $('#p2Wym').addEventListener('input', e => { const v = parseFloat(String(e.target.value).replace(',', '.')); if (!isFinite(v) || v < 1 || v > 80) return; if (e.target.id === 'p2W') st.wm = v; else st.lm = v; planujKamien(); rysuj(); });
  $('#p2Wym').addEventListener('change', () => { zapamietaj(); panel(); });
  $('#p2Cofnij').addEventListener('click', cofnij); $('#p2Ponow').addEventListener('click', ponow);
  $('#p2ZoomP').addEventListener('click', () => { const r = scena.getBoundingClientRect(); zoomWokol(1.5, r.width / 2, r.height / 2); });
  $('#p2ZoomM').addEventListener('click', () => { const r = scena.getBoundingClientRect(); zoomWokol(1 / 1.5, r.width / 2, r.height / 2); });
  $('#p2Dopasuj').addEventListener('click', dopasuj);
  $('#p2Porownaj').addEventListener('click', () => { st.porownaj = !st.porownaj; st.porRecznie = st.porownaj; if (st.porownaj) st.split = .5; $('#p2Porownaj').setAttribute('aria-pressed', String(st.porownaj)); rysuj(); });
  let histP = false;
  window.addEventListener('popstate', () => { if (histP) { histP = false; if (root.classList.contains('pelny')) pelny(false, true); } });
  function pelny(on, zHist) { const by = root.classList.contains('pelny');
    if (on && !by) { try { history.pushState({ p2pelny: 1 }, ''); histP = true; } catch (e) {} }
    if (!on && by && histP && !zHist) { histP = false; try { history.back(); } catch (e) {} }
    if (!on && by) requestAnimationFrame(() => { const r = root.getBoundingClientRect(); if (r.bottom < 80 || r.top > innerHeight - 80) root.scrollIntoView({ block: 'start' }); });
    root.classList.toggle('pelny', on); document.documentElement.classList.toggle('p2-pelny', on); $('#p2Pelny').setAttribute('aria-pressed', String(on)); $('#p2Pelny').title = on ? 'Zamknij pełny ekran' : 'Pełny ekran';
    requestAnimationFrame(() => { view.fit = true; rozmiar(); }); }
  $('#p2Pelny').addEventListener('click', () => pelny(!root.classList.contains('pelny')));
  $('#p2Wyjdz').addEventListener('click', () => pelny(false));
  $('#p2Dotknij').addEventListener('click', () => { ruszony(); pelny(true); toast('Rysuj palcem, dwoma palcami przybliżaj. Wyjście: „✕ Wróć do strony” lub przycisk Wstecz.'); });
  addEventListener('pageshow', e => { if (e.persisted && root.classList.contains('pelny')) { histP = false; pelny(false, true); } });

  /* ---------- wynik ---------- */
  function obraz(cb, max) { const s0 = { z: view.z, ox: view.ox, oy: view.oy }, por = st.porownaj, kr = st.krok, wy = st.wyb; st.porownaj = false; st.krok = 0; st.wyb = -1; dopasujBez();
    teraz(); const r = scena.getBoundingClientRect(); const sx = view.ox * D, sy = view.oy * D, sw = Wd * D, sh = Hd * D; const sc = Math.min(1, (max || 2200) / sw);
    const W = Math.round(sw * sc), H = Math.round(sh * sc), pas = Math.round(Math.max(46, W * .045)); const c = document.createElement('canvas'); c.width = W; c.height = H + pas; const g = c.getContext('2d');
    g.drawImage(cv, sx, sy, sw, sh, 0, 0, W, H); g.drawImage(nak, sx, sy, sw, sh, 0, 0, W, H); g.fillStyle = '#1b1b1a'; g.fillRect(0, H, W, pas);
    g.fillStyle = '#5ad27c'; g.font = `900 ${Math.round(pas * .44)}px "Big Shoulders Display",Arial Narrow,sans-serif`; g.textBaseline = 'middle'; g.fillText('GARDENBRUK', pas * .4, H + pas / 2); const lw = g.measureText('GARDENBRUK').width;
    g.fillStyle = '#fff'; g.font = `700 ${Math.round(pas * .28)}px Manrope,system-ui,sans-serif`; const m2 = Math.round(st.strefy.reduce((a, z) => a + poleM2(z.pts), 0)); g.fillText(`Projekt ogrodu${m2 ? ' · ok. ' + m2 + ' m²' : ''} · wizualizacja · Mikowice pod Kłodzkiem`, pas * .8 + lw, H + pas / 2);
    Object.assign(view, s0); st.porownaj = por; st.krok = kr; st.wyb = wy; rysuj(); if (max && max < 500) cb(c.toDataURL('image/jpeg', .72)); else c.toBlob(cb, 'image/jpeg', .9); }
  function dopasujBez() { const r = scena.getBoundingClientRect(); view.z = 1; view.ox = (r.width - Wd) / 2; view.oy = (r.height - Hd) / 2; }
  $('#p2Zapisz').addEventListener('click', () => obraz(b => { if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'GardenBruk_projekt_ogrodu.jpg'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); toast('Obraz zapisany'); }));
  const KOLW = { grafit: 'grafit', szary: 'szary', bianco: 'bialy', piaskowy: 'piaskowy', melanz: 'melanz', granit: 'granit', lupek: 'grafit', zolty: 'piaskowy' };
  $('#p2Dodaj').addEventListener('click', () => obraz(url => { podsumowanie(); if (!window.GBdodaj) return; const t = Date.now();
    if (!st.strefy.length) { GBdodaj({ id: 'projekt-ogrodu-' + t, nazwa: 'Projekt ogrodu (zdjęcie)', ile: undefined, jedn: 'projekt', foto: url }); return; }
    GBdodaj({ id: 'projekt-ogrodu-' + t, nazwa: 'Projekt ogrodu: ' + (st.opis || ''), ile: undefined, jedn: 'projekt', foto: url });
    st.strefy.forEach((z, i) => { const m2 = Math.round(poleM2(z.pts) * 2) / 2, W = nazwa(WZORY, z.pat).toLowerCase(), K2 = nazwa(KOLORY, z.pal).toLowerCase();
      setTimeout(() => { GBdodaj({ id: `p2-${t}-${i}`, typ: 'kostka', nazwa: `${z.nazwa} z projektu: ${W}, ${K2}`, ile: m2 || undefined, jedn: 'm²', foto: 'img/tex/grafit.webp', wk: { rodzaj: z.pat === 'slabs' ? 'plyty' : z.pat === 'cobble' ? 'granit' : 'kostka', kolor: KOLW[z.pal] || 'szary', marka: 'Projekt', linia: z.nazwa } });
        if (z.obrz) GBdodaj({ id: `p2-${t}-${i}-o`, typ: 'obrzeza', nazwa: `Obrzeże ${nazwa(OBRZEZA, z.obrz).toLowerCase()} (obszar: ${z.nazwa})`, ile: Math.max(1, Math.round(obrzezeM(z))), jedn: 'mb', foto: 'img/tex/grafit.webp', wk: { rodzaj: 'obrzeza', kolor: KOLW[z.obrz] || 'grafit', marka: 'Projekt', linia: 'Obrzeże' } }); }, 260 * (i + 1)); });
    setTimeout(() => { const n = st.strefy.length; toast('Dodano do wózka: projekt i ' + n + ' ' + (n === 1 ? 'obszar' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'obszary' : 'obszarów') + ' z metrażem'); }, 260 * (st.strefy.length + 1)); }, 260));
  $('#p2Wa').addEventListener('click', () => { podsumowanie(); const tekst = `Dzień dobry, zrobiłem projekt na stronie GardenBruk. ${st.opis || ''}. Proszę o wycenę i termin pomiaru.`;
    obraz(async b => { const plik = b && new File([b], 'GardenBruk_projekt_ogrodu.jpg', { type: 'image/jpeg' }); if (plik && navigator.canShare && navigator.canShare({ files: [plik] })) { try { await navigator.share({ files: [plik], text: tekst }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
      window.open('https://wa.me/48500250936?text=' + encodeURIComponent(tekst + ' Zdjęcie wyślę w rozmowie.'), '_blank', 'noopener'); }); });
  $('#p2Nowy').addEventListener('click', () => { zapamietaj(); st.strefy = []; st.obiekty = []; st.akt = -1; st.wyb = -1; planujKamien(true); krok(3); st.narz = 'rysuj'; panel(); rysuj(); });

  /* ---------- zdjęcie ---------- */
  let nr = 0;
  function laduj(src, przyk) { const n = ++nr, img = new Image(); img.decoding = 'async'; img.onload = () => { if (n !== nr) return; ustaw(img, przyk); }; img.onerror = () => toast('Nie udało się otworzyć zdjęcia'); img.src = src; }
  function ustaw(img, przyk) { const max = MOB() ? 1600 : 2200, s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight)); const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); st.foto = c; st.fW = c.width; st.fH = c.height; st.zrodlo = przyk; root.style.setProperty('--p2ar', (c.width / c.height).toFixed(3)); const P2 = przyk >= 0 ? PRZYKLADY[przyk] : null;
    st.rogi = P2 ? P2.rogi.map(r => r.slice()) : [[.22, .5], [.78, .5], [.97, .96], [.03, .96]]; st.wm = P2 ? P2.w : 6; st.lm = P2 ? P2.l : 8;
    st.strefy = P2 ? P2.strefy.map(z => ({ ...z, pts: z.pts.map(q => q.slice()), obrzR: 1, obrot: 0 })) : []; st.obiekty = []; st.akt = st.strefy.length - 1; st.wyb = -1; hist.length = 0; przod.length = 0;
    try { const zap = przyk >= 0 && localStorage.getItem('gb-p2-' + przyk); if (zap) Object.assign(st, JSON.parse(zap)); } catch (e) { /* */ }
    maska = document.createElement('canvas'); maska.width = Math.max(64, st.fW >> 1); maska.height = Math.max(64, st.fH >> 1); mx = maska.getContext('2d'); mx.fillStyle = '#fff'; mx.fillRect(0, 0, maska.width, maska.height);
    liczCienie(); view.fit = true; rozmiar(); if (gl) { wgraj('f', c, false); wgraj('m', maska, false); wgraj('c', cien, false); } planujKamien(true); panel(); if (window.GBprojektantStart) { const q = window.GBprojektantStart; window.GBprojektantStart = null; setTimeout(() => ustawZewn(q.pat, q.pal), 80); } $$('.p2-przyk').forEach((b, i) => b.setAttribute('aria-pressed', String(i === przyk)));
    if (przyk < 0) { krok(2); toast('Ustaw perspektywę: 4 żółte punkty na rogi terenu'); } }
  function plik(e) { const f = e.target.files && e.target.files[0]; if (!f) return; ruszony(); e.target.value = ''; const u = URL.createObjectURL(f); if (!S) { czeka = u; return; } laduj(u, -1); if (DOTYK()) pelny(true); }
  let czeka = null; $('#p2Aparat').addEventListener('change', plik); $('#p2Plik').addEventListener('change', plik);
  scena.addEventListener('dragover', e => { e.preventDefault(); scena.classList.add('upusc'); }); scena.addEventListener('dragleave', () => scena.classList.remove('upusc'));
  scena.addEventListener('drop', e => { e.preventDefault(); scena.classList.remove('upusc'); const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f && f.type.startsWith('image/')) { ruszony(); laduj(URL.createObjectURL(f), -1); } });
  $('#p2Przyklady').innerHTML = PRZYKLADY.map((p, i) => `<button type="button" class="p2-przyk" data-i="${i}" aria-pressed="${i === 0}"><img src="${p.src}" alt="" width="96" height="72" loading="lazy" decoding="async"><span>${p.nazwa}</span></button>`).join('');
  $('#p2Przyklady').addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b && S) laduj(PRZYKLADY[+b.dataset.i].src, +b.dataset.i); });
  // biblioteka i wybory
  const grupy = {}; Object.entries(OBIEKTY).forEach(([id, o]) => { (grupy[o.g] = grupy[o.g] || []).push([id, o]); });
  $('#p2Biblioteka').innerHTML = Object.entries(grupy).map(([g, l]) => `<h4 class="p2-h">${g}</h4><div class="p2-siatka ob">${l.map(([id, o]) => `<button type="button" class="p2-ob" data-ob="${id}" aria-pressed="false"><img src="img/pk/${o.src}.webp" alt="" loading="lazy" decoding="async"><span>${o.n}</span></button>`).join('')}</div>`).join('');
  $('#p2Wzory').innerHTML = WZORY.map(([id, n]) => `<button type="button" class="p2-kafel" data-pat="${id}" aria-pressed="false"><img src="img/wz/wz-${id}-grafit.webp" alt="" width="112" height="72"><span>${n}</span></button>`).join('');
  $('#p2Kolory').innerHTML = KOLORY.map(([id, n]) => `<button type="button" class="p2-kafel" data-pal="${id}" aria-pressed="false"><img src="img/wz/wz-herring-${id}.webp" alt="" width="112" height="72"><span>${n}</span></button>`).join('');
  $('#p2Obrz').innerHTML = OBRZEZA.map(([id, n]) => `<button type="button" class="chip" data-obrz="${id}" aria-pressed="false">${n}</button>`).join('') + '<button type="button" class="chip" id="p2ObrzR">Podwójne</button>';

  /* ---------- sam się pokazuje: pierwszy raz rysuje obszar, sadzi drzewo, zapala lampy ---------- */
  let pokaz = false;
  function ruszony() { if (!st.ruszony) { st.ruszony = true; root.classList.remove('p2-demo'); } }
  function demo() { if (pokaz || RM || st.ruszony || !st.foto || st.zrodlo !== 0) return; pokaz = true; root.classList.add('p2-demo'); const kroki = [
      () => { st.porownaj = true; st.split = 1; anim(1300, u => { st.split = 1 - .55 * u; }); },
      () => { if (st.ruszony) return; zapamietaj(); st.obiekty.push({ t: 'klon_jesien', x: .07, y: .64, s: .8 }, { t: 'latarnia', x: .78, y: .55, s: 1 }, { t: 'slupek', x: .97, y: .99, s: 1 }); rysuj(); },
      () => { if (st.ruszony) return; st.pora = 'wieczor'; panel(); rysuj(); }, () => { if (st.ruszony) return; st.pora = 'noc'; panel(); rysuj(); },
      () => { if (st.ruszony) return; st.pora = 'dzien'; st.split = .5; panel(); rysuj(); root.classList.remove('p2-demo'); }];
    kroki.forEach((f, i) => setTimeout(() => { if (!st.ruszony || i === 0) f(); }, i * 1500)); }
  function anim(ms, f) { const t0 = performance.now(); (function k(n) { const u = clamp((n - t0) / ms, 0, 1); f(u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2); rysuj(); if (u < 1 && !st.ruszony) requestAnimationFrame(k); })(t0); }

  /* ---------- start ---------- */
  function start() { S = window.Swiat; initGL(); if (!gl) { root.classList.add('bez-gl'); $('#p2Wsk').textContent = 'Twoja przeglądarka nie obsługuje podglądu 3D. Napisz do nas – przygotujemy wizualizację.'; return; }
    krok(1); if (czeka) laduj(czeka, -1); else laduj(PRZYKLADY[0].src, 0);
    new ResizeObserver(() => { view.fit = view.z === 1; rozmiar(); }).observe(scena);
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setTimeout(demo, 700); }), { threshold: .5 }).observe(scena);
    window.GBp2 = { st, krok, teraz, test: () => ({ gl: !!gl, foto: !!st.foto, strefy: st.strefy.length, obiekty: st.obiekty.length, m2: Math.round(st.strefy.reduce((a, z) => a + poleM2(z.pts), 0)), krok: st.krok, pora: st.pora, kam: !!kamC }), zEkranu, naEkran, view: () => view }; }
  function gotowy() { let ok = false; const go = () => { if (ok) return; ok = true; io.disconnect(); start(); }; const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) go(); }, { rootMargin: '1200px 0px' }); io.observe(root); setTimeout(() => { const r = root.getBoundingClientRect(); if (r.top < innerHeight + 1200) go(); }, 1500); addEventListener('intro-koniec', () => setTimeout(() => (window.requestIdleCallback || (f => setTimeout(f, 1)))(go, { timeout: 3000 }), 3000), { once: true }); }
  if (window.Swiat && window.Swiat.bedPattern) gotowy(); else addEventListener('swiat', gotowy, { once: true });
})();
