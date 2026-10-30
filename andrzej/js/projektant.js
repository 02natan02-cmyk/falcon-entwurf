/* GardenBruk – Projektant: zdjęcie terenu → perspektywa z czterech rogów → prawdziwa skala z wymiarów w metrach →
   pędzel i gumka → wzór × kolor × obrzeże → światło i cienie ze zdjęcia → przed/po → warianty → zapis, zapytanie, WhatsApp.
   Wszystko liczy się lokalnie w przeglądarce (WebGL z mipmapami, zapas: zwykłe płótno). Zdjęcie nigdzie nie wychodzi. */
(function () {
  'use strict';
  const root = document.getElementById('pk'); if (!root) return;
  const $ = s => root.querySelector(s), $$ = s => [...root.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOB = () => innerWidth < 821;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const scena = $('#pkScena'), nak = $('#pkNak'), nx = nak.getContext('2d');
  let cv = $('#pkGl'); const E = .25; // tekstura sięga 25 % poza zaznaczony teren (pędzel może malować dalej)

  const PRZYKLADY = [
    { src: 'img/real/przyklad.webp', nazwa: 'Podjazd przed garażem', w: 7, l: 9,
      rogi: [[.43, .228], [1, .228], [1, 1], [.3, 1]],
      maska: [[.432, .226], [1, .226], [1, 1], [.736, 1], [.665, .86], [.585, .7], [.515, .54], [.462, .4], [.437, .3]] },
    { src: 'img/real/podjazd-grafit-zolty.webp', nazwa: 'Podjazd z góry', w: 6, l: 14,
      rogi: [[.305, .035], [.585, .035], [.6, .97], [.07, .97]],
      maska: [[.31, .04], [.583, .04], [.583, .69], [.56, .77], [.5, .84], [.42, .88], [.32, .91], [.2, .94], [.1, .965], [.07, .93], [.14, .83], [.19, .72], [.22, .6], [.24, .47], [.27, .33], [.29, .2]] }
  ];
  const WZORY = [['herring', 'Jodełka'], ['rows', 'Cegiełka'], ['basket', 'Koszyk'], ['slabs', 'Płyty 60×30'], ['cobble', 'Kostka granitowa'], ['arcs', 'Łuki'], ['grid', 'Kostka 10×10']];
  const KOLORY = [['grafit', 'Grafit'], ['szary', 'Szary'], ['bianco', 'Bianco'], ['piaskowy', 'Piaskowy'], ['melanz', 'Melanż'], ['braz', 'Brąz'], ['granit', 'Granit'], ['lupek', 'Łupek']];
  const OBRZEZA = [['', 'Bez obrzeża'], ['grafit', 'Grafit'], ['bianco', 'Bianco'], ['zolty', 'Żółte'], ['melanz', 'Melanż']];
  const nazwa = (lista, id) => (lista.find(x => x[0] === id) || ['', id])[1];

  const st = { foto: null, fW: 0, fH: 0, przyklad: 0, rogi: null, wm: 7, lm: 9, pat: 'herring', pal: 'grafit', obrz: '', obrzR: 1, obrot: 0, cienie: true,
    split: .5, narz: 'rogi', pedzel: 7, krok: 1, maskaWlasna: false, ruszony: false, warianty: [] };
  let S = null, gl = null, P = null, tex = {}, tryb2d = false, Wd = 0, Hd = 0, D = 1, mask = null, mx = null, cien = null, lref = .5, tint = [1, 1, 1];
  let kamienC = null, kamienGotowy = false, potrzeba = 0, budujT = 0;

  /* ---------- homografia: kwadrat jednostkowy (u,v) → czworokąt na zdjęciu (0..1) ---------- */
  function homografia(q) {
    const [x0, y0] = q[0], [x1, y1] = q[1], [x2, y2] = q[2], [x3, y3] = q[3];
    const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    let g = 0, h = 0; const den = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(dx3) > 1e-9 || Math.abs(dy3) > 1e-9) { g = (dx3 * dy2 - dx2 * dy3) / den; h = (dx1 * dy3 - dx3 * dy1) / den; }
    return [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h, 1];
  }
  function odwroc(m) {
    const [a, b, c, d, e, f, g, h, i] = m; const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g; const det = a * A + b * B + c * C || 1e-12;
    return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
  }
  const naZdj = (H, u, v) => { const w = H[6] * u + H[7] * v + H[8]; return [(H[0] * u + H[1] * v + H[2]) / w, (H[3] * u + H[4] * v + H[5]) / w]; };

  /* ---------- tekstura kostki w metrach (prawdziwa skala), z obrzeżem ---------- */
  function budujKamien() {
    if (!S) return; const saveK = S.k; const R = 1 + 2 * E, N = 2048; // potęga dwójki: inaczej WebGL 1 nie zrobi mipmap (czarny obraz)
    const maxM = Math.max(st.wm, st.lm) * R, p = N / maxM; const iw = Math.max(64, Math.round(st.wm * R * p)), ih = Math.max(64, Math.round(st.lm * R * p));
    const c = document.createElement('canvas'); c.width = iw; c.height = ih; const g = c.getContext('2d');
    S.k = p / 1000; // px na mm
    const qx0 = E / R * iw, qy0 = E / R * ih, qx1 = (1 + E) / R * iw, qy1 = (1 + E) / R * ih;
    const pas = st.obrz ? st.obrzR * (100 + 5) * S.k : 0;
    g.fillStyle = '#8d8270'; g.fillRect(0, 0, iw, ih); if (S.bedPattern) { g.globalAlpha = .55; g.fillStyle = S.bedPattern; g.fillRect(0, 0, iw, ih); g.globalAlpha = 1; }
    const lista = []; const R2 = Math.hypot(iw, ih) / 2 + 200 * S.k, cx = iw / 2, cy = ih / 2;
    S.genPattern(st.pat, st.pal, cx - R2, cy - R2, cx + R2, cy + R2, () => true, lista, { cell: st.pat === 'wild' ? 520 : 0 });
    const rot = st.obrot && st.pat !== 'wild' ? Math.PI / 2 : 0;
    g.save(); if (st.obrz) { g.beginPath(); g.rect(qx0 + pas, qy0 + pas, qx1 - qx0 - 2 * pas, qy1 - qy0 - 2 * pas); g.clip(); }
    const m = 260 * S.k;
    for (const s of lista) { if (rot) { const dx = s.x - cx, dy = s.y - cy; s.x = cx - dy; s.y = cy + dx; s.rot += rot; if (s.poly) s.poly = s.poly.map(([a, b]) => [cx - (b - cy), cy + (a - cx)]); }
      if (s.x < -m || s.y < -m || s.x > iw + m || s.y > ih + m) continue; S.drawOne(g, s, 1, 2); }
    g.restore(); g.setTransform(1, 0, 0, 1, 0, 0);
    if (st.obrz) { // poza terenem nic, na brzegu rząd (albo dwa) kostki 20×10 wzdłuż krawędzi
      g.save(); g.globalCompositeOperation = 'destination-in'; g.fillStyle = '#000'; g.fillRect(qx0, qy0, qx1 - qx0, qy1 - qy0); g.restore();
      const ob = [], L = 200 * S.k, W = 100 * S.k, J = 5 * S.k; const pal = S.PAL[st.obrz] || S.PAL.grafit;
      const dodaj = (x, y, w, h) => ob.push({ x, y, w, h, rot: 0, col: pal[(Math.abs(Math.sin(x * 12.9 + y * 78.2)) * 9999 | 0) % pal.length], kind: 'block', v: (Math.abs(Math.sin(x * 3.1 + y * 1.7)) * 6) | 0, key: y, poly: null });
      for (let r = 0; r < st.obrzR; r++) { const o = r * (W + J) + J / 2;
        for (let x = qx0 + J / 2 + (r % 2) * L / 2; x < qx1; x += L + J) { const w = Math.min(L, qx1 - J / 2 - x); if (w < L * .25) continue; dodaj(x + w / 2, qy0 + o + W / 2, w, W); dodaj(x + w / 2, qy1 - o - W / 2, w, W); }
        for (let y = qy0 + pas + J / 2; y < qy1 - pas; y += L + J) { const h = Math.min(L, qy1 - pas - J / 2 - y); if (h < L * .25) continue; dodaj(qx0 + o + W / 2, y + h / 2, W, h); dodaj(qx1 - o - W / 2, y + h / 2, W, h); } }
      for (const s of ob) S.drawOne(g, s, 1, 2); g.setTransform(1, 0, 0, 1, 0, 0);
    }
    // na kwadrat potęgi dwójki (mipmapy), rozciągnięty – mapowanie uv i tak jest liniowe
    const K = document.createElement('canvas'); K.width = K.height = N; const kg = K.getContext('2d'); kg.imageSmoothingQuality = 'high'; kg.drawImage(c, 0, 0, N, N);
    S.k = saveK; kamienC = K; kamienGotowy = true;
    if (gl) { wgrajTex('k', K, true); } else przygotuj2d();
    rysuj();
  }
  function planujKamien(natychmiast) { clearTimeout(budujT); $('#pkLad').hidden = false; budujT = setTimeout(() => requestAnimationFrame(() => { budujKamien(); $('#pkLad').hidden = true; odswiezKafle(); podsumowanie(); }), natychmiast ? 0 : 180); }

  /* ---------- zdjęcie, cienie, maska ---------- */
  function ustawFoto(img, przyk) {
    const max = MOB() ? 1400 : 1800, s = Math.min(1, max / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
    const c = document.createElement('canvas'); c.width = Math.round((img.naturalWidth || img.width) * s); c.height = Math.round((img.naturalHeight || img.height) * s);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); st.foto = c; st.fW = c.width; st.fH = c.height;
    st.przyklad = przyk; const P2 = przyk >= 0 ? PRZYKLADY[przyk] : null;
    st.rogi = P2 ? P2.rogi.map(r => r.slice()) : [[.24, .52], [.76, .52], [.96, .96], [.04, .96]];
    if (P2) { st.wm = P2.w; st.lm = P2.l; $('#pkW').value = String(P2.w).replace('.', ','); $('#pkL').value = String(P2.l).replace('.', ','); }
    mask = document.createElement('canvas'); mask.width = Math.max(64, st.fW >> 1); mask.height = Math.max(64, st.fH >> 1); mx = mask.getContext('2d', { willReadFrequently: true });
    st.maskaWlasna = false; st.maskaPoly = P2 ? P2.maska : null; maskaDomyslna();
    liczCienie(); rozmiar(); if (gl) { wgrajTex('f', c, false); wgrajTex('m', mask, false); wgrajTex('c', cien, false); }
    planujKamien(true); $$('.pk-przyk').forEach((b, i) => b.setAttribute('aria-pressed', String(i === przyk)));
  }
  function maskaDomyslna() { // teren przykładu albo czworokąt z rogów
    const w = mask.width, h = mask.height; mx.setTransform(1, 0, 0, 1, 0, 0); mx.globalCompositeOperation = 'source-over'; mx.fillStyle = '#000'; mx.fillRect(0, 0, w, h);
    const pts = st.maskaPoly || st.rogi; mx.fillStyle = '#fff'; mx.beginPath(); pts.forEach(([a, b], i) => i ? mx.lineTo(a * w, b * h) : mx.moveTo(a * w, b * h)); mx.closePath(); mx.fill();
  }
  function liczCienie() { // rozmyta jasność zdjęcia: cień domu, drzewa, samochodu przechodzi na nową kostkę
    const w = 192, h = Math.max(8, Math.round(192 * st.fH / st.fW)); const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
    g.imageSmoothingQuality = 'high'; g.drawImage(st.foto, 0, 0, w, h);
    const d = g.getImageData(0, 0, w, h); let L = new Float32Array(w * h); let sr = 0, sg = 0, sb = 0;
    for (let i = 0; i < w * h; i++) { const r = d.data[i * 4], gg = d.data[i * 4 + 1], b = d.data[i * 4 + 2]; L[i] = (.2126 * r + .7152 * gg + .0722 * b) / 255; sr += r; sg += gg; sb += b; }
    for (let pass = 0; pass < 3; pass++) { const T = new Float32Array(w * h), rr = 3; // rozmycie: fugi starej nawierzchni nie mogą przejść na nową
      for (let y = 0; y < h; y++) { let acc = 0, c = 0; for (let x = -rr; x < w + rr; x++) { if (x + rr < w) { acc += L[y * w + x + rr]; c++; } if (x - rr - 1 >= 0) { acc -= L[y * w + x - rr - 1]; c--; } if (x >= 0 && x < w) T[y * w + x] = acc / c; } }
      for (let x = 0; x < w; x++) { let acc = 0, c = 0; for (let y = -rr; y < h + rr; y++) { if (y + rr < h) { acc += T[(y + rr) * w + x]; c++; } if (y - rr - 1 >= 0) { acc -= T[(y - rr - 1) * w + x]; c--; } if (y >= 0 && y < h) L[y * w + x] = acc / c; } } }
    const n = w * h, mr = sr / n, mg = sg / n, mb = sb / n, ml = (mr + mg + mb) / 3 || 1; tint = [Math.pow(mr / ml, .3), Math.pow(mg / ml, .3), Math.pow(mb / ml, .3)];
    for (let i = 0; i < w * h; i++) { const v = clamp(L[i], 0, 1) * 255; d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v; d.data[i * 4 + 3] = 255; }
    g.putImageData(d, 0, 0); cien = c; cien._L = L; cien._w = w; cien._h = h; liczLref();
  }
  function liczLref() { // jasność odniesienia = mediana w zaznaczonym terenie
    if (!cien || !mask) return; const w = cien._w, h = cien._h, L = cien._L; const md = mx.getImageData(0, 0, mask.width, mask.height).data; const vals = [];
    for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) { const mxp = (x / w * mask.width) | 0, myp = (y / h * mask.height) | 0; if (md[(myp * mask.width + mxp) * 4] > 127) vals.push(L[y * w + x]); }
    vals.sort((a, b) => a - b); lref = vals.length ? vals[(vals.length * .55) | 0] : .5;
  }
  function powierzchnia() { // próbkowanie w płaszczyźnie terenu (równe metry, nie piksele)
    if (!mask) return 0; const H = homografia(st.rogi), md = mx.getImageData(0, 0, mask.width, mask.height).data; let n = 0, all = 0; const K = 40;
    for (let j = -10; j < K + 10; j++) for (let i = -10; i < K + 10; i++) { const u = (i + .5) / K, v = (j + .5) / K; const [x, y] = naZdj(H, u, v); if (x < 0 || y < 0 || x >= 1 || y >= 1) continue;
      if (st.obrz && (u < 0 || u > 1 || v < 0 || v > 1)) continue; if (md[(((y * mask.height) | 0) * mask.width + ((x * mask.width) | 0)) * 4] > 127) n++; }
    return st.wm * st.lm * n / (K * K);
  }

  /* ---------- WebGL ---------- */
  const VS = 'attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*.5+.5,.5-p.y*.5);gl_Position=vec4(p,0.,1.);}';
  const FS = `precision highp float;varying vec2 v;uniform sampler2D tF,tK,tM,tC;uniform mat3 Hi;uniform float split,lref,cienie,E;uniform vec3 tint;uniform vec2 res;
float h12(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){vec3 f=texture2D(tF,v).rgb;vec3 col=f;vec3 q=Hi*vec3(v,1.);
if(q.z>0.){vec2 uv=q.xy/q.z;vec2 t=(uv+E)/(1.+2.*E);
 if(t.x>0.&&t.x<1.&&t.y>0.&&t.y<1.){vec4 k=texture2D(tK,t);float m=texture2D(tM,v).r*k.a;
  float L=texture2D(tC,v).r;float s=clamp(L/max(lref,.03),.42,1.22);s=mix(1.,pow(s,.85),cienie);
  vec3 n=k.rgb*tint*s+(h12(floor(v*res))-.5)*.035;float e=smoothstep(.0,.55,m);n*=mix(.82,1.,smoothstep(.35,1.,m));
  col=mix(f,n,e);}}
gl_FragColor=vec4(mix(f,col,step(split,v.x)),1.);}`;
  function initGL() {
    try { gl = cv.getContext('webgl', { antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: true }); } catch (e) { gl = null; }
    if (!gl) { tryb2d = true; return; }
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
    try { P = gl.createProgram(); gl.attachShader(P, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(P, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(P); if (!gl.getProgramParameter(P, gl.LINK_STATUS)) throw new Error('link'); }
    catch (e) { gl = null; tryb2d = true; const n = cv.cloneNode(false); cv.replaceWith(n); cv = n; return; }
    gl.useProgram(P); const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(P, 'p'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    P.u = {}; ['tF', 'tK', 'tM', 'tC', 'Hi', 'split', 'lref', 'cienie', 'E', 'tint', 'res', 'pokaz'].forEach(n => P.u[n] = gl.getUniformLocation(P, n));
    gl.uniform1i(P.u.tF, 0); gl.uniform1i(P.u.tK, 1); gl.uniform1i(P.u.tM, 2); gl.uniform1i(P.u.tC, 3);
    P.aniso = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
    cv.addEventListener('webglcontextlost', e => { e.preventDefault(); }, false);
    cv.addEventListener('webglcontextrestored', () => { initGL(); if (st.foto) { wgrajTex('f', st.foto, false); wgrajTex('m', mask, false); wgrajTex('c', cien, false); } if (kamienC) wgrajTex('k', kamienC, true); rysuj(); });
  }
  const JED = { f: 0, k: 1, m: 2, c: 3 };
  function wgrajTex(id, src, mip) {
    if (!gl) return; let t = tex[id]; if (!t) { t = tex[id] = gl.createTexture(); }
    gl.activeTexture(gl.TEXTURE0 + JED[id]); gl.bindTexture(gl.TEXTURE_2D, t); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    if (mip) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); if (P.aniso) gl.texParameterf(gl.TEXTURE_2D, P.aniso.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(8, gl.getParameter(P.aniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT))); }
    else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  }
  let maskaBrudna = false;
  function rysujGL(splitWym, pokaz) {
    if (!gl || !tex.f || !tex.k) return false; if (maskaBrudna) { wgrajTex('m', mask, false); maskaBrudna = false; }
    const Hi = odwroc(homografia(st.rogi)); gl.viewport(0, 0, cv.width, cv.height);
    gl.uniformMatrix3fv(P.u.Hi, false, new Float32Array([Hi[0], Hi[3], Hi[6], Hi[1], Hi[4], Hi[7], Hi[2], Hi[5], Hi[8]]));
    gl.uniform1f(P.u.split, splitWym == null ? st.split : splitWym); gl.uniform1f(P.u.lref, lref); gl.uniform1f(P.u.cienie, st.cienie ? .8 : 0); gl.uniform1f(P.u.E, E);
    gl.uniform1f(P.u.pokaz, pokaz == null ? 1 : pokaz); gl.uniform3f(P.u.tint, tint[0], tint[1], tint[2]); gl.uniform2f(P.u.res, cv.width, cv.height);
    for (const id in JED) { gl.activeTexture(gl.TEXTURE0 + JED[id]); gl.bindTexture(gl.TEXTURE_2D, tex[id]); }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); return true;
  }

  /* ---------- zapas bez WebGL: to samo równanie piksel po pikselu, w mniejszej rozdzielczości ---------- */
  let k2d = null, c2d = null;
  function przygotuj2d() { if (!kamienC) return; const n = 1024; const c = document.createElement('canvas'); c.width = c.height = n; c.getContext('2d').drawImage(kamienC, 0, 0, n, n); k2d = { d: c.getContext('2d').getImageData(0, 0, n, n).data, n }; }
  function rysuj2d(splitWym) {
    if (!st.foto || !k2d) return; if (!c2d) c2d = cv.getContext('2d'); const w = Math.min(cv.width, 900), h = Math.round(w * st.fH / st.fW);
    const tmp = document.createElement('canvas'); tmp.width = w; tmp.height = h; const tg = tmp.getContext('2d'); tg.drawImage(st.foto, 0, 0, w, h);
    const img = tg.getImageData(0, 0, w, h), d = img.data, md = mx.getImageData(0, 0, mask.width, mask.height).data, Hi = odwroc(homografia(st.rogi)); const sp = splitWym == null ? st.split : splitWym, kn = k2d.n, kd = k2d.d, R = 1 + 2 * E;
    for (let y = 0; y < h; y++) for (let x = Math.ceil(sp * w); x < w; x++) { const vx = (x + .5) / w, vy = (y + .5) / h; const qz = Hi[6] * vx + Hi[7] * vy + Hi[8]; if (qz <= 0) continue;
      const u = (Hi[0] * vx + Hi[1] * vy + Hi[2]) / qz, v = (Hi[3] * vx + Hi[4] * vy + Hi[5]) / qz; const tx = (u + E) / R, ty = (v + E) / R; if (tx <= 0 || ty <= 0 || tx >= 1 || ty >= 1) continue;
      const ki = (((ty * kn) | 0) * kn + ((tx * kn) | 0)) * 4; const m = md[(((vy * mask.height) | 0) * mask.width + ((vx * mask.width) | 0)) * 4] / 255 * (kd[ki + 3] / 255); if (m <= 0) continue;
      let s = 1; if (st.cienie && cien) { const L = cien._L[(((vy * cien._h) | 0) * cien._w + ((vx * cien._w) | 0))]; s = 1 + (Math.pow(clamp(L / Math.max(lref, .03), .42, 1.22), .85) - 1) * .8; }
      const i = (y * w + x) * 4; for (let c = 0; c < 3; c++) d[i + c] = d[i + c] * (1 - m) + kd[ki + c] * tint[c] * s * m; }
    tg.putImageData(img, 0, 0); c2d.setTransform(1, 0, 0, 1, 0, 0); c2d.drawImage(tmp, 0, 0, cv.width, cv.height);
  }

  /* ---------- widok ---------- */
  function rozmiar() {
    if (!st.foto) return; const r = scena.parentElement.getBoundingClientRect(); const maxH = Math.min(innerHeight * (MOB() ? .62 : .78), 820);
    let w = r.width, h = w * st.fH / st.fW; if (h > maxH) { h = maxH; w = h * st.fW / st.fH; }
    Wd = Math.round(w); Hd = Math.round(h); scena.style.width = Wd + 'px'; scena.style.height = Hd + 'px';
    D = Math.min(devicePixelRatio || 1, 2, Math.sqrt(3.2e6 / (Wd * Hd))); cv.width = Math.round(Wd * D); cv.height = Math.round(Hd * D); nak.width = cv.width; nak.height = cv.height;
    ustawRogi(); rysuj();
  }
  let rysujPlan = false;
  function rysuj() { if (rysujPlan) return; rysujPlan = true; requestAnimationFrame(() => { rysujPlan = false; rysujTeraz(); }); }
  function rysujTeraz() {
    if (!st.foto || !Wd) return;
    if (gl) rysujGL(); else if (tryb2d) rysuj2d();
    nakladka(); $('#pkCiecie').style.left = (st.split * 100) + '%';
  }
  function nakladka() {
    nx.setTransform(1, 0, 0, 1, 0, 0); nx.clearRect(0, 0, nak.width, nak.height); if (st.krok !== 2) return;
    const W = nak.width, H = nak.height, Hm = homografia(st.rogi); nx.lineWidth = Math.max(1.5, 1.6 * D);
    // siatka perspektywy co metr: od razu widać, czy rogi leżą dobrze
    nx.strokeStyle = 'rgba(255,214,90,.55)'; nx.beginPath(); const nI = Math.min(40, Math.round(st.wm)), nJ = Math.min(40, Math.round(st.lm));
    for (let i = 0; i <= nI; i++) { const u = i / nI; for (let j = 0; j <= 24; j++) { const [x, y] = naZdj(Hm, u, j / 24); j ? nx.lineTo(x * W, y * H) : nx.moveTo(x * W, y * H); } }
    for (let j = 0; j <= nJ; j++) { const v = j / nJ; for (let i = 0; i <= 24; i++) { const [x, y] = naZdj(Hm, i / 24, v); i ? nx.lineTo(x * W, y * H) : nx.moveTo(x * W, y * H); } }
    nx.stroke(); nx.strokeStyle = '#ffd65a'; nx.lineWidth = Math.max(2.5, 2.6 * D); nx.beginPath(); st.rogi.forEach(([a, b], i) => i ? nx.lineTo(a * W, b * H) : nx.moveTo(a * W, b * H)); nx.closePath(); nx.stroke();
    if (kursor && (st.narz === 'pedzel' || st.narz === 'gumka')) { nx.strokeStyle = st.narz === 'pedzel' ? '#5ad27c' : '#ff7a6b'; nx.lineWidth = 2 * D; nx.beginPath(); nx.arc(kursor[0] * W, kursor[1] * H, st.pedzel / 100 * W, 0, 7); nx.stroke(); }
  }
  function ustawRogi() { if (st.rogi) $$('.pk-rog').forEach((b, i) => { const [a, c] = st.rogi[i]; b.style.left = (a * 100) + '%'; b.style.top = (c * 100) + '%'; }); scena.classList.toggle('teren', st.krok === 2); }

  /* ---------- interakcja ---------- */
  let ciagnij = null, kursor = null, ostatniPedzel = null;
  const poz = e => { const r = scena.getBoundingClientRect(); return [clamp((e.clientX - r.left) / r.width, 0, 1), clamp((e.clientY - r.top) / r.height, 0, 1)]; };
  $$('.pk-rog').forEach((b, i) => {
    b.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); ciagnij = { typ: 'rog', i }; b.setPointerCapture(e.pointerId); ruszony(); });
    b.addEventListener('pointermove', e => { if (!ciagnij || ciagnij.typ !== 'rog' || ciagnij.i !== i) return; st.rogi[i] = poz(e); poRogach(); });
    b.addEventListener('pointerup', () => { if (ciagnij) { ciagnij = null; poRogachKoniec(); } });
    b.addEventListener('keydown', e => { const d = e.shiftKey ? .02 : .005, k = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] }[e.key]; if (!k) return; e.preventDefault(); ruszony();
      st.rogi[i] = [clamp(st.rogi[i][0] + k[0], 0, 1), clamp(st.rogi[i][1] + k[1], 0, 1)]; poRogach(); clearTimeout(b._t); b._t = setTimeout(poRogachKoniec, 300); });
  });
  function poRogach() { if (!st.maskaWlasna && !st.maskaPoly) { maskaDomyslna(); maskaBrudna = true; } ustawRogi(); rysuj(); }
  function poRogachKoniec() { liczLref(); podsumowanie(); rysuj(); }
  scena.addEventListener('pointerdown', e => {
    if (e.target.closest('.pk-rog')) return; ruszony(); const p = poz(e);
    if (st.krok === 2 && (st.narz === 'pedzel' || st.narz === 'gumka')) { ciagnij = { typ: 'pedzel' }; st.maskaWlasna = true; ostatniPedzel = null; maluj(p); }
    else { ciagnij = { typ: 'split' }; st.split = p[0]; st.splitRuszony = true; rysuj(); }
    scena.setPointerCapture(e.pointerId);
  });
  scena.addEventListener('pointermove', e => { const p = poz(e); kursor = p; if (!ciagnij) { if (st.krok === 2 && st.narz !== 'rogi') rysuj(); return; }
    if (ciagnij.typ === 'pedzel') maluj(p); else if (ciagnij.typ === 'split') { st.split = p[0]; rysuj(); } });
  scena.addEventListener('pointerup', () => { if (ciagnij && ciagnij.typ === 'pedzel') { liczLref(); podsumowanie(); } ciagnij = null; });
  scena.addEventListener('pointerleave', () => { kursor = null; if (st.krok === 2) rysuj(); });
  function maluj(p) {
    const w = mask.width, h = mask.height, r = st.pedzel / 100 * w; mx.globalCompositeOperation = 'source-over';
    const kol = st.narz === 'pedzel' ? '255,255,255' : '0,0,0'; const kroki = ostatniPedzel ? Math.ceil(Math.hypot((p[0] - ostatniPedzel[0]) * w, (p[1] - ostatniPedzel[1]) * h) / (r * .3)) : 1;
    for (let s = 1; s <= kroki; s++) { const t = s / kroki, x = (ostatniPedzel ? ostatniPedzel[0] + (p[0] - ostatniPedzel[0]) * t : p[0]) * w, y = (ostatniPedzel ? ostatniPedzel[1] + (p[1] - ostatniPedzel[1]) * t : p[1]) * h;
      const g = mx.createRadialGradient(x, y, r * .55, x, y, r); g.addColorStop(0, `rgba(${kol},1)`); g.addColorStop(1, `rgba(${kol},0)`); mx.fillStyle = g; mx.beginPath(); mx.arc(x, y, r, 0, 7); mx.fill(); }
    ostatniPedzel = p; maskaBrudna = true; rysuj();
  }
  const uchwyt = $('#pkUchwyt');
  uchwyt.addEventListener('keydown', e => { const d = { ArrowLeft: -.04, ArrowRight: .04 }[e.key]; if (d == null) return; e.preventDefault(); ruszony(); st.split = clamp(st.split + d, 0, 1); rysuj(); });
  function ruszony() { if (!st.ruszony) { st.ruszony = true; scena.classList.remove('pk-impuls'); } }

  /* ---------- panel: kroki, wybór, wyniki ---------- */
  function krok(k) {
    st.krok = k; $$('.pk-kroki [data-k]').forEach(b => { const on = +b.dataset.k === k; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; });
    $$('.pk-krok').forEach(p => { p.hidden = +p.dataset.k !== k; }); ustawRogi();
    if ((k === 2 || k === 3) && !st.splitRuszony) st.split = 0; if (k === 4 && st.split < .05) st.split = .5;
    wskazowka(); rysuj();
  }
  function wskazowka() { const t = { 1: 'Zrób zdjęcie albo wybierz przykład', 2: st.narz === 'rogi' ? 'Przeciągnij żółte punkty na rogi terenu' : (st.narz === 'pedzel' ? 'Maluj, gdzie ma leżeć kostka' : 'Usuń miejsca bez kostki'), 3: 'Przesuń palcem po zdjęciu: przed i po', 4: 'Przesuń palcem po zdjęciu: przed i po' }[st.krok]; $('#pkWsk').textContent = t; }
  $$('.pk-kroki [data-k]').forEach(b => b.addEventListener('click', () => krok(+b.dataset.k)));
  $('.pk-kroki').addEventListener('keydown', e => { const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) return; const k = clamp(st.krok + d, 1, 4); krok(k); $(`.pk-kroki [data-k="${k}"]`).focus(); });
  $$('[data-dalej]').forEach(b => b.addEventListener('click', () => { krok(+b.dataset.dalej); const t = scena.getBoundingClientRect(); if (MOB() && (t.top < 0 || t.top > innerHeight * .3)) scena.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' }); }));
  $$('[data-n]').forEach(b => b.addEventListener('click', () => { const n = b.dataset.n;
    if (n === 'reset') { st.maskaWlasna = false; st.maskaPoly = null; maskaDomyslna(); maskaBrudna = true; liczLref(); podsumowanie(); rysuj(); return; }
    st.narz = n; $$('[data-n]').forEach(x => { if (x.dataset.n !== 'reset') { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); } }); scena.classList.toggle('maluje', n !== 'rogi'); wskazowka(); rysuj(); }));
  $('#pkRozm').addEventListener('input', e => { st.pedzel = +e.target.value; rysuj(); });
  const liczba = el => { const v = parseFloat(String(el.value).replace(',', '.')); return isFinite(v) ? clamp(v, 1, 80) : null; };
  ['#pkW', '#pkL'].forEach(id => $(id).addEventListener('input', () => { const w = liczba($('#pkW')), l = liczba($('#pkL')); if (!w || !l) return; st.wm = w; st.lm = l; planujKamien(); podsumowanie(); rysuj(); }));
  $('#pkCienie').addEventListener('change', e => { st.cienie = e.target.checked; rysuj(); });
  $('#pkObrot').addEventListener('click', e => { st.obrot = st.obrot ? 0 : 90; e.currentTarget.setAttribute('aria-pressed', String(!!st.obrot)); planujKamien(); });

  function kafelek(pat, pal, el) { // gotowa próbka (obrazek), nic nie liczy się w przeglądarce
    let im = el.querySelector('img'); if (!im) { im = document.createElement('img'); im.alt = ''; im.width = 112; im.height = 72; im.decoding = 'async'; el.insertBefore(im, el.firstChild); }
    const src = `img/wz/wz-${pat}-${pal}.webp`; if (im.getAttribute('src') !== src) im.src = src;
  }
  function zbudujPanel() {
    const wz = $('#pkWzory'), kol = $('#pkKolory'), ob = $('#pkObrz');
    wz.innerHTML = WZORY.map(([id, n]) => `<button type="button" class="pk-kafel" data-pat="${id}" aria-pressed="${id === st.pat}"><span>${n}</span></button>`).join('');
    kol.innerHTML = KOLORY.map(([id, n]) => `<button type="button" class="pk-kafel maly" data-pal="${id}" aria-pressed="${id === st.pal}"><span>${n}</span></button>`).join('');
    ob.innerHTML = OBRZEZA.map(([id, n]) => `<button type="button" class="chip${id === st.obrz ? ' on' : ''}" data-obrz="${id}" aria-pressed="${id === st.obrz}">${n}</button>`).join('') + `<button type="button" class="chip" id="pkObrzR" aria-pressed="false">Podwójne</button>`;
    wz.addEventListener('click', e => { const b = e.target.closest('[data-pat]'); if (!b) return; st.pat = b.dataset.pat; zaznacz(wz, 'pat', st.pat); planujKamien(); ruszony(); });
    kol.addEventListener('click', e => { const b = e.target.closest('[data-pal]'); if (!b) return; st.pal = b.dataset.pal; zaznacz(kol, 'pal', st.pal); planujKamien(); ruszony(); });
    ob.addEventListener('click', e => { const b = e.target.closest('[data-obrz]'); if (b) { st.obrz = b.dataset.obrz; $$('[data-obrz]').forEach(x => { const on = x.dataset.obrz === st.obrz; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on)); }); planujKamien(); return; }
      if (e.target.closest('#pkObrzR')) { st.obrzR = st.obrzR === 1 ? 2 : 1; const r = $('#pkObrzR'); r.classList.toggle('on', st.obrzR === 2); r.setAttribute('aria-pressed', String(st.obrzR === 2)); if (!st.obrz) { st.obrz = 'grafit'; $$('[data-obrz]').forEach(x => { const on = x.dataset.obrz === 'grafit'; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on)); }); } planujKamien(); } });
    $('#pkPrzyklady').innerHTML = PRZYKLADY.map((p, i) => `<button type="button" class="pk-przyk" data-i="${i}" aria-pressed="${i === 0}"><img src="${p.src}" alt="" width="96" height="72" loading="lazy" decoding="async"><span>${p.nazwa}</span></button>`).join('');
    $('#pkPrzyklady').addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (!b) return; laduj(PRZYKLADY[+b.dataset.i].src, +b.dataset.i); });
    odswiezKafle();
  }
  function zaznacz(box, k, v) { box.querySelectorAll(`[data-${k}]`).forEach(b => b.setAttribute('aria-pressed', String(b.dataset[k] === v))); }
  function odswiezKafle() { $$('#pkWzory [data-pat]').forEach(b => kafelek(b.dataset.pat, st.pal, b)); $$('#pkKolory [data-pal]').forEach(b => kafelek(st.pat, b.dataset.pal, b)); }
  const opis = () => `${nazwa(WZORY, st.pat)} · ${nazwa(KOLORY, st.pal)}${st.obrz ? ` · obrzeże ${nazwa(OBRZEZA, st.obrz).toLowerCase()}${st.obrzR === 2 ? ' (2 rzędy)' : ''}` : ''}`;
  const m2 = () => { const a = powierzchnia(); return a > 0 ? Math.max(1, Math.round(a)) : 0; };
  function podsumowanie() { const a = m2(); $('#pkPow').textContent = a ? `ok. ${a} m²` : '–'; $('#pkPodsum').textContent = `${opis()}${a ? ` · ok. ${a} m²` : ''}`; }

  /* obraz wynikowy: całe „po”, z podpisem */
  function obraz(cb, max) {
    rysujTeraz(); if (gl) rysujGL(0); else rysuj2d(0);
    const sw = cv.width, sh = cv.height, s = Math.min(1, (max || 2000) / sw), w = Math.round(sw * s), h = Math.round(sh * s), pas = Math.round(Math.max(44, w * .045));
    const c = document.createElement('canvas'); c.width = w; c.height = h + pas; const g = c.getContext('2d'); g.drawImage(cv, 0, 0, w, h);
    g.fillStyle = '#1b1b1a'; g.fillRect(0, h, w, pas); g.fillStyle = '#5ad27c'; g.font = `900 ${Math.round(pas * .42)}px "Big Shoulders Display",Arial Narrow,sans-serif`; g.textBaseline = 'middle'; g.fillText('GARDENBRUK', pas * .4, h + pas / 2);
    const lw = g.measureText('GARDENBRUK').width; g.fillStyle = '#fff'; g.font = `700 ${Math.round(pas * .3)}px Manrope,system-ui,sans-serif`; const a = m2(); g.fillText(`${opis()}${a ? ` · ok. ${a} m²` : ''} · wizualizacja`, pas * .8 + lw, h + pas / 2);
    rysuj(); if (max && max < 400) cb(c.toDataURL('image/jpeg', .72)); else c.toBlob(cb, 'image/jpeg', .9);
  }
  $('#pkZapisz').addEventListener('click', () => obraz(b => { if (!b) return; const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'GardenBruk_projekt.jpg'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); window.GBtoast && GBtoast('Obraz zapisany'); }));
  $('#pkDodaj').addEventListener('click', () => obraz(url => { const a = m2(); window.GBdodaj && GBdodaj({ id: 'projekt-' + st.pat + '-' + st.pal + '-' + (st.obrz || 'x') + st.obrzR, nazwa: 'Projekt: ' + opis(), ile: a || undefined, jedn: 'm²', foto: url }); }, 240));
  $('#pkWa').addEventListener('click', () => { const a = m2(); const tekst = `Dzień dobry, zrobiłem projekt na stronie GardenBruk: ${opis()}${a ? `, ok. ${a} m² (${String(st.wm).replace('.', ',')} × ${String(st.lm).replace('.', ',')} m)` : ''}. Proszę o wycenę i termin pomiaru.`;
    obraz(async b => { const plik = b && new File([b], 'GardenBruk_projekt.jpg', { type: 'image/jpeg' });
      if (plik && navigator.canShare && navigator.canShare({ files: [plik] })) { try { await navigator.share({ files: [plik], text: tekst }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
      window.open('https://wa.me/48500250936?text=' + encodeURIComponent(tekst + ' Zdjęcie wyślę w rozmowie.'), '_blank', 'noopener'); }); });
  $('#pkZapamietaj').addEventListener('click', () => { if (st.warianty.length >= 4) st.warianty.shift();
    obraz(url => { st.warianty.push({ pat: st.pat, pal: st.pal, obrz: st.obrz, obrzR: st.obrzR, obrot: st.obrot, url, opis: opis() }); warianty(); window.GBtoast && GBtoast('Wariant zapamiętany'); }, 300); });
  function warianty() { const l = $('#pkWar'); l.innerHTML = st.warianty.map((w, i) => `<button type="button" class="pk-war" data-w="${i}" title="${w.opis}"><img src="${w.url}" alt="Wariant: ${w.opis}"><span>${w.opis}</span></button>`).join(''); }
  $('#pkWar').addEventListener('click', e => { const b = e.target.closest('[data-w]'); if (!b) return; const w = st.warianty[+b.dataset.w]; Object.assign(st, { pat: w.pat, pal: w.pal, obrz: w.obrz, obrzR: w.obrzR, obrot: w.obrot });
    zaznacz($('#pkWzory'), 'pat', st.pat); zaznacz($('#pkKolory'), 'pal', st.pal); $$('[data-obrz]').forEach(x => { const on = x.dataset.obrz === st.obrz; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on)); }); planujKamien(true); });

  /* ---------- zdjęcia ---------- */
  let ladujNr = 0;
  function laduj(src, przyk) { const nr = ++ladujNr; const img = new Image(); img.decoding = 'async'; img.onload = () => { if (nr !== ladujNr) return; ustawFoto(img, przyk); if (przyk < 0) krok(2); }; img.onerror = () => window.GBtoast && GBtoast('Nie udało się otworzyć zdjęcia'); img.src = src; }
  let czeka = null;
  function plik(e) { const f = e.target.files && e.target.files[0]; if (!f) return; const u = URL.createObjectURL(f); ruszony(); e.target.value = ''; if (!S) { czeka = u; return; } laduj(u, -1); }
  $('#pkAparat').addEventListener('change', plik); $('#pkPlik').addEventListener('change', plik);

  /* ---------- sam się pokazuje: raz przesuwa przed/po, gdy pierwszy raz widać projektanta ---------- */
  let pokazany = false;
  function impuls() { if (pokazany || RM || st.ruszony) return; pokazany = true; scena.classList.add('pk-impuls'); const t0 = performance.now();
    const ease = u => u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
    (function f(now) { if (st.ruszony) return; const t = (now - t0) / 1000;
      st.split = t < .4 ? 1 : t < 1.9 ? 1 - .72 * ease((t - .4) / 1.5) : t < 3 ? .28 + .22 * ease((t - 1.9) / 1.1) : .5;
      rysujTeraz(); if (t < 3) requestAnimationFrame(f); else scena.classList.remove('pk-impuls'); })(t0); }

  /* ---------- start ---------- */
  function start() {
    S = window.Swiat; initGL(); zbudujPanel(); krok(1);
    const w0 = window.GBprojektantStart; if (w0) { st.pat = w0.pat || st.pat; st.pal = w0.pal || st.pal; zaznacz($('#pkWzory'), 'pat', st.pat); zaznacz($('#pkKolory'), 'pal', st.pal); }
    if (czeka) laduj(czeka, -1); else laduj(PRZYKLADY[0].src, 0);
    new ResizeObserver(() => { if (st.foto) { const w = scena.parentElement.getBoundingClientRect().width; if (Math.abs(w - (rozmiar._w || 0)) > 2) { rozmiar._w = w; rozmiar(); } } }).observe(scena.parentElement);
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && kamienGotowy) setTimeout(impuls, 500); }), { threshold: .55 }).observe(scena);
    window.GBprojektant = { ustaw(pat, pal) { if (pat) st.pat = pat; if (pal) st.pal = pal; zaznacz($('#pkWzory'), 'pat', st.pat); zaznacz($('#pkKolory'), 'pal', st.pal); planujKamien(true); },
      test: () => ({ gl: !!gl, tryb2d, foto: !!st.foto, kamien: kamienGotowy, m2: m2(), opis: opis(), split: st.split, krok: st.krok, w: cv.width, h: cv.height, lref }), st, krok, rysujTeraz, nak: () => nak, D: () => D };
  }
  function gotowy() { const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); start(); } }, { rootMargin: '900px 0px' }); io.observe(root); }
  if (window.Swiat && window.Swiat.bedPattern) gotowy(); else addEventListener('swiat', gotowy, { once: true });
})();
