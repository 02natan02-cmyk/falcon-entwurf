/* GardenBruk v9 – „Droga”: cała strona to jedna działka z lotu ptaka, która buduje się kamień po kamieniu.
   WebGL2, instancje: każdy kamień to jeden czworokąt; kształt, faza, światło, cień i lot liczy karta graficzna.
   Kamień rusza, gdy czoło budowy (przewijanie) do niego dojdzie, i zawsze ląduje do końca (czas, nie przewijanie). */
(function () {
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cv = document.getElementById('swiat9'); if (!cv) return;
  const gl = cv.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: true, powerPreference: 'high-performance' });
  const G = window.Swiat9 = { ok: !!gl, ready: false };
  if (!gl) { document.documentElement.classList.add('bez-gl'); return; }
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  const MOB = () => innerWidth < 821;
  const hex = c => { const n = parseInt(c.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
  const PAL = {
    grafit: ['#3a3b40', '#43444a', '#4c4d52', '#56575b'], szary: ['#8a8984', '#7e7d78', '#96948e', '#8f8d87'], bianco: ['#d9d5cc', '#ccc7bc', '#e2dfd7', '#d2cec4'],
    piaskowy: ['#cdb48b', '#bfa57a', '#d6c39f', '#c5ad85'], melanz: ['#8a6a50', '#b29a78', '#6b5444', '#8d8a82', '#a07d5c', '#9c8b74'], granit: ['#8c8a85', '#a19e98', '#7b7975', '#96938d'],
    lupek: ['#5e6062', '#6d6963', '#55575a', '#77736b'], zolty: ['#d4ac5a', '#c9a04f', '#dcb869'], czarny: ['#2c2d30', '#313236', '#28292c']
  };

  /* ---------- shadery ---------- */
  const PROJ = `uniform vec2 uRes; uniform float uScroll, uPersp, uStageOy;
vec2 proj(vec2 w, float h, float grp){ vec2 s = grp > .5 ? vec2(w.x, uStageOy + w.y) : vec2(w.x, w.y - uScroll); vec2 c = uRes * .5; return c + (s - c) / (1. - h * uPersp); }
vec4 clip(vec2 p){ vec2 q = p / uRes * 2. - 1.; return vec4(q.x, -q.y, 0., 1.); }`;
  const VS_K = `#version 300 es
precision highp float;
layout(location=0) in vec2 aC; layout(location=1) in vec4 aA; layout(location=2) in vec4 aB; layout(location=3) in vec4 aD; layout(location=4) in vec4 aE; layout(location=5) in float aT;
${PROJ}
uniform float uTime, uShadow; uniform vec4 uHole[24]; uniform vec4 uClip[16];
out vec2 vL; out vec2 vH; out vec3 vCol; out vec2 vUv; out float vA, vZ, vRot, vShape, vKind, vMel; out vec2 vW; out vec4 vClip;
void main(){
  float p = aT < 0. ? 1. - clamp((uTime + aT) / .4, 0., 1.) : clamp((uTime - aT) / .46, 0., 1.); float e = 1. - pow(1. - p, 3.);
  float z = (1. - e) * 1.9 + sin(clamp((p - .78) / .22, 0., 1.) * 3.14159) * .05;
  float lift = 0.; vec2 drift = vec2(0.);
  int hi = int(aD.y);
  if (hi >= 0) { vec4 H = uHole[hi]; float q = clamp((uTime - H.x - aD.x * .25) / .6, 0., 1.); lift = q; z += q * q * 2.6; drift = normalize(aA.xy - H.yz + vec2(.001)) * q * q * 90.; }
  vA = smoothstep(0., .1, p) * (1. - smoothstep(.45, .95, lift));
  vec2 hf = aA.zw * .5; vec2 loc = aC * (hf + 3.);
  float r = aB.x + (1. - e) * (fract(aD.x * 7.31) - .5) * .7 + lift * (fract(aD.x * 3.17) - .5) * 1.6;
  mat2 R = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 w = aA.xy + R * loc + drift;
  vec2 sp = uShadow > .5 ? proj(w + vec2(.9, 1.3) * (z * 22. + 2.5), 0., aE.w) : proj(w, z, aE.w);
  gl_Position = clip(sp);
  vL = loc; vH = hf; vCol = aE.rgb; vUv = (loc + aB.zw) / 360.; vZ = z; vRot = r; vShape = aD.z; vKind = mod(aB.y, 2.); vMel = aD.w;
  int zi = int(floor(aB.y / 2.)); vClip = zi > 0 ? uClip[zi] : vec4(-1e6, -1e6, 1e6, 1e6); vW = w; if (z > .02 || lift > 0.) vClip = vec4(-1e6, -1e6, 1e6, 1e6);
}`;
  const FS_K = `#version 300 es
precision highp float;
in vec2 vL; in vec2 vH; in vec3 vCol; in vec2 vUv; in float vA, vZ, vRot, vShape, vKind, vMel; in vec2 vW; in vec4 vClip;
uniform sampler2D uTB, uTG; uniform float uShadow, uAmb, uSun; uniform vec3 uLd;
out vec4 o;
float sdB(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }
void main(){
  float m = min(vH.x, vH.y); float r = vShape < .5 ? m * .16 : vShape < 1.5 ? m * .07 : vShape < 2.5 ? m * .42 : m * .3;
  float d = sdB(vL, vH, r);
  // przycięcie do krawężnika: kamień jest docięty jak na budowie
  float dc = max(max(vClip.x - vW.x, vW.x - vClip.z), max(vClip.y - vW.y, vW.y - vClip.w)); d = max(d, dc);
  if (uShadow > .5) { float bl = 2.2 + vZ * 9.; float s = 1. - smoothstep(-bl, bl * 1.3, d); o = vec4(0., 0., 0., 1.) * s * (.46 - min(vZ, 2.) * .1) * vA; return; }
  float aa = max(fwidth(d), .001); float cov = clamp(.5 - d / aa, 0., 1.) * vA; if (cov < .004) discard;
  float bev = max(2., m * (vShape < .5 ? .2 : vShape < 1.5 ? .09 : .34)); float tt = clamp(-d / bev, 0., 1.);
  vec2 q = abs(vL) - vH + r; vec2 g = (q.x > 0. || q.y > 0.) ? normalize(max(q, 0.) + 1e-4) : (q.x > q.y ? vec2(1., 0.) : vec2(0., 1.)); g *= sign(vL);
  vec2 gs = mat2(cos(vRot), sin(vRot), -sin(vRot), cos(vRot)) * g;
  vec4 tb = texture(uTB, vUv), tg = texture(uTG, vUv); vec4 tx = mix(tb, tg, vKind);
  float h = tx.g; vec2 dh = vec2(dFdx(h), dFdy(h));
  float sl = (1. - tt) * (1. - tt) * 2.1;
  vec3 n = normalize(vec3(-gs * sl - dh * 3.2, 1.));
  vec3 alb = vCol * (tx.r / .6);
  alb = mix(alb, alb * vec3(1.18, 1.02, .82), smoothstep(.55, .8, tx.b) * vMel);
  float dif = max(dot(n, uLd), 0.); float ao = mix(.7, 1., smoothstep(0., .7, tt));
  vec3 c = alb * (uAmb + uSun * dif * 1.05) * ao + pow(max(dot(reflect(-uLd, n), vec3(0., 0., 1.)), 0.), 18.) * .045 * uSun;
  c *= 1. + vZ * .06;
  o = vec4(c * cov, cov);
}`;
  const VS_Q = `#version 300 es
precision highp float; layout(location=0) in vec2 aC; out vec2 vP; uniform vec2 uRes; void main(){ vP = (aC * .5 + .5) * uRes; vP.y = uRes.y - vP.y; gl_Position = vec4(aC, 0., 1.); }`;
  const FS_GRUNT = `#version 300 es
precision highp float; in vec2 vP; out vec4 o;
uniform sampler2D uTE, uTS, uTL; uniform float uScroll, uStageOy, uTime; uniform vec2 uRes;
uniform vec4 uR[40]; uniform vec4 uRB[40]; uniform int uNR;
uniform vec4 uSz; uniform vec4 uSzB; // sznurek: prostokąt etapu (x,y,w,h), (start, koniec rysowania, widoczność, -)
float sdB(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }
void main(){
  vec2 w = vec2(vP.x, vP.y + uScroll); vec2 ws = vec2(vP.x, vP.y - uStageOy);
  vec3 c = texture(uTE, w / 420.).rgb * .96;
  for (int i = 0; i < 40; i++) { if (i >= uNR) break; vec4 R = uR[i], B = uRB[i]; vec2 pp = B.w > .5 ? ws : w;
    float rev = clamp((uTime - B.z) / 1.5, 0., 1.); if (rev <= 0.) continue;
    float lim = R.y - R.w * .5 + R.w * (rev * 1.25 - .125); if (B.y > 1.5 && pp.y > lim) continue; // piasek rozsypuje się z góry
    float d = sdB(pp - R.xy, R.zw * .5, B.x); float f = 1. - smoothstep(-3., 3., d); if (f <= 0.) continue;
    vec3 s = B.y > 2.5 ? texture(uTE, pp / 420.).rgb * .82 : (B.y < .5 || B.y > 1.5 ? texture(uTS, pp / 380.).rgb : texture(uTL, pp / 360.).rgb * vec3(.96, 1.02, .92));
    float rim = 1. - smoothstep(-26., 0., d); s *= 1. - rim * (B.y > .5 && B.y < 1.5 ? .18 : .1);
    c = mix(c, s, f * (B.y > 1.5 ? smoothstep(lim, lim - 30., pp.y) : 1.) * (B.y > .5 && B.y < 1.5 ? 1. : smoothstep(0., .3, rev)));
  }
  if (uSzB.z > 0.) { vec2 p = ws - uSz.xy; vec2 hb = uSz.zw * .5; float d = abs(sdB(p, hb, 2.)); float per = 2. * (uSz.z + uSz.w);
    vec2 a = p + hb; float u = p.y < -hb.y + 3. ? a.x : p.x > hb.x - 3. ? uSz.z + a.y : p.y > hb.y - 3. ? uSz.z + uSz.w + (uSz.z - a.x) : 2. * uSz.z + uSz.w + (uSz.w - a.y);
    float pr = clamp((uTime - uSzB.x) / max(uSzB.y, .1), 0., 1.); float on = step(u / per, pr) * uSzB.z;
    c = mix(c, vec3(.97, .96, .92), (1. - smoothstep(.6, 1.6, d)) * on * .95);
    if (length(abs(p) - hb) < 7.) c = mix(c, vec3(.45, .3, .16), uSzB.z);
  }
  vec2 v = vP / uRes - .5; c *= 1. - dot(v, v) * .22;
  o = vec4(c, 1.);
}`;
  const VS_O = `#version 300 es
precision highp float; layout(location=0) in vec2 aC; layout(location=1) in vec4 aA; layout(location=2) in vec4 aB; layout(location=5) in float aT;
${PROJ}
uniform float uTime, uShadow; out vec2 vUv; out float vA;
void main(){ float p = aT < 0. ? 1. - clamp((uTime + aT) / .36, 0., 1.) : clamp((uTime - aT) / .7, 0., 1.); float e = p < 1. ? 1. - pow(1. - p, 3.) * cos(p * 9.) : 1.; float sc = mix(.2, 1., clamp(e, 0., 1.15));
  float h = aB.y; vec2 hf = vec2(aA.z * .5) * sc; vec2 w = aA.xy + aC * hf; float r = aA.w; mat2 R = mat2(cos(r), sin(r), -sin(r), cos(r)); w = aA.xy + R * (aC * hf);
  vec2 sp = uShadow > .5 ? proj(w + vec2(.9, 1.3) * h * 26., 0., aB.w) : proj(w, h, aB.w);
  gl_Position = clip(sp); vec2 t = aC * .5 + .5; float idx = aB.x; vUv = vec2((mod(idx, 4.) + t.x) / 4., (floor(idx / 4.) + t.y) / 2.); vA = smoothstep(0., .25, p); }`;
  const FS_O = `#version 300 es
precision highp float; in vec2 vUv; in float vA; uniform sampler2D uTO; uniform float uShadow, uAmb, uSun; out vec4 o;
void main(){ vec4 t = texture(uTO, vUv, uShadow > .5 ? 2.5 : 0.); if (uShadow > .5) { o = vec4(0., 0., 0., 1.) * t.a * .42 * vA; return; } vec3 c = t.rgb * (uAmb * .9 + uSun * .62); o = vec4(c * t.a * vA, t.a * vA); }`;
  const FS_NOC = `#version 300 es
precision highp float; in vec2 vP; out vec4 o; uniform float uNoc; uniform vec2 uRes;
uniform vec4 uLamp[24]; uniform int uNL; uniform float uScroll; uniform float uTryb;
void main(){ vec3 m = mix(vec3(1.), vec3(.2, .24, .36), uNoc); vec3 add = vec3(0.); vec3 zar = vec3(0.);
  for (int i = 0; i < 24; i++) { if (i >= uNL) break; vec4 L = uLamp[i]; vec2 p = vec2(L.x, L.y - uScroll); float d = length(vP - p) / L.z; add += vec3(1., .8, .46) * (exp(-d * d * 2.4) + .55 * exp(-d * d * 16.)) * L.w; vec2 cc = uRes * .5; float q = length(vP - (cc + (p - cc) * 1.052)) / 30.; zar += vec3(1., .86, .6) * exp(-q * q) * L.w; }
  vec3 c = m + add * uNoc * 1.05; o = uTryb < .5 ? vec4(min(c, vec3(1.)), 1.) : uTryb < 1.5 ? vec4(max(c - 1., vec3(0.)), 1.) : vec4(zar * uNoc * .9, 1.); }`;

  function prog(vs, fs) { const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
    const p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const u = {}; const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); for (let i = 0; i < n; i++) { const a = gl.getActiveUniform(p, i); u[a.name.replace('[0]', '')] = gl.getUniformLocation(p, a.name); } return { p, u }; }
  let PK, PG, PO, PN;
  try { PK = prog(VS_K, FS_K); PG = prog(VS_Q, FS_GRUNT); PO = prog(VS_O, FS_O); PN = prog(VS_Q, FS_NOC); }
  catch (e) { console.warn('Swiat9', e.message); G.ok = false; document.documentElement.classList.add('bez-gl'); return; }

  /* ---------- tekstury ---------- */
  const TEX = {}; let texN = 0, texOk = 0;
  function tex(name, src, unit, wrap) { texN++; const t = gl.createTexture(); TEX[name] = { t, unit }; const im = new Image(); im.decoding = 'async';
    im.onload = () => { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
      gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      const w = wrap ? gl.REPEAT : gl.CLAMP_TO_EDGE; gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, w); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, w);
      const an = gl.getExtension('EXT_texture_filter_anisotropic'); if (an && (name === 'B' || name === 'G')) gl.texParameterf(gl.TEXTURE_2D, an.TEXTURE_MAX_ANISOTROPY_EXT, 4);
      texOk++; if (texOk === texN) { G.ready = true; buduj(); plan(); dispatchEvent(new Event('swiat9')); } };
    im.src = src; }
  tex('B', 'img/hd/beton.webp', 0, true); tex('G', 'img/hd/granit.webp', 1, true); tex('E', 'img/hd/erde.webp', 2, true); tex('S', 'img/hd/sand.webp', 3, true); tex('L', 'img/hd/trawa.webp', 4, true); tex('O', 'img/hd/obiekty.webp', 5, false);

  /* ---------- bufory instancji ---------- */
  const quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const qVao = gl.createVertexArray(); gl.bindVertexArray(qVao); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.bindVertexArray(null);
  function grupa(stride) { const g = { vao: gl.createVertexArray(), buf: gl.createBuffer(), tb: gl.createBuffer(), n: 0, data: null, trig: null, ptr: 0, keys: null, ys: null, stride };
    gl.bindVertexArray(g.vao); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.bindVertexArray(null); return g; }
  function wgraj(g, list, toRow) { // list posortowany po kluczu
    const st = g.stride, d = new Float32Array(list.length * st); list.forEach((s, i) => toRow(s, d, i * st)); g.data = d; g.n = list.length;
    g.keys = new Float32Array(list.map(s => s.key)); g.ys = new Float32Array(list.map(s => s.y)); g.zone = new Int16Array(list.map(s => s.zid == null ? -1 : s.zid)); g.xs = new Float32Array(list.map(s => s.x)); g.trig = new Float32Array(list.length).fill(1e9); g.ptr = 0;
    gl.bindVertexArray(g.vao); gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); gl.bufferData(gl.ARRAY_BUFFER, d, gl.STATIC_DRAW);
    const F = 4; const locs = st === 16 ? [[1, 0], [2, 4], [3, 8], [4, 12]] : [[1, 0], [2, 4]];
    for (const [l, o] of locs) { gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 4, gl.FLOAT, false, st * F, o * F); gl.vertexAttribDivisor(l, 1); }
    gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferData(gl.ARRAY_BUFFER, g.trig, gl.DYNAMIC_DRAW); gl.enableVertexAttribArray(5); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, 0); gl.vertexAttribDivisor(5, 1);
    gl.bindVertexArray(null); }
  function wyzwol(g, ileKlucz, t) { // wszystkie kamienie z kluczem < ileKlucz dostają czas startu (tylko nowe – rosnąco)
    if (!g.n) return false; let i = g.ptr; if (i >= g.n || g.keys[i] > ileKlucz) return false; const s = i;
    const K1 = g.stride === 16 ? .46 : .7, K0 = g.stride === 16 ? .4 : .36;
    while (i < g.n && g.keys[i] <= ileKlucz) { const o = g.trig[i]; if (t >= 0 && o < 0) { const pd = 1 - clamp((t + o) / K0, 0, 1); g.trig[i] = t - pd * K1; } else g.trig[i] = t < 0 ? t : t + (g.stride === 16 ? g.data[i * 16 + 8] * .15 : hash(i, 3) * .18) * (RM ? 0 : 1); i++; }
    g.ptr = i; gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferSubData(gl.ARRAY_BUFFER, s * 4, g.trig.subarray(s, i)); return true; }
  function cofnij(g, ileKlucz, t) { // przewijanie w górę: kamienie ponad czołem odlatują (najdalsze pierwsze), płynnie z bieżącego stanu
    if (!g.n || g.ptr <= 0 || g.keys[g.ptr - 1] <= ileKlucz) return false; const e = g.ptr; let i = g.ptr; const K1 = g.stride === 16 ? .46 : .7, K0 = g.stride === 16 ? .4 : .36;
    while (i > 0 && g.keys[i - 1] > ileKlucz) { i--; const o = g.trig[i]; let st0 = t + (RM ? 0 : hash(i, 7) * .12); if (o >= 0 && o < 1e8) { const pl = clamp((t - o) / K1, 0, 1); if (pl < 1) st0 = t - (1 - pl) * K0; } g.trig[i] = RM ? -(t - 1) : -st0; }
    g.ptr = i; gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferSubData(gl.ARRAY_BUFFER, i * 4, g.trig.subarray(i, e)); return true; }
  const KW = grupa(16), KS = grupa(16), OB = grupa(8), OS = grupa(8); // kamienie świat/etap, obiekty świat/etap
  const rowK = (s, d, o) => { const c = hex(s.col); d.set([s.x, s.y, s.w, s.h, s.rot || 0, (s.kind || 0) + (s.clip || 0) * 2, s.tx || 0, s.ty || 0, s.jit || 0, s.hole == null ? -1 : s.hole, s.shape || 0, s.mel || 0, c[0], c[1], c[2], s.grp || 0], o); };
  const rowO = (s, d, o) => d.set([s.x, s.y, s.size, s.rot || 0, s.idx, s.h, 0, s.grp || 0], o);

  /* ---------- geometria: wzory w milimetrach → piksele ---------- */
  let K = .32; // px na mm (kostka 200 mm ≈ 64 px)
  function wzor(pat, pal, box, accept, opt) { opt = opt || {}; const out = [], J = 4 * K, P = PAL[pal] || PAL.grafit; const pick = (x, y) => P[(hash(x | 0, y | 0) * P.length) | 0];
    const add = (x, y, w, h, rot, shape) => { if (accept(x, y)) out.push({ x, y, w, h, rot, col: pick(x * 3.1, y * 1.7), shape: shape || 0, kind: opt.kind || 0, tx: hash(x | 0, 9) * 900, ty: hash(y | 0, 5) * 900, mel: pal === 'melanz' ? 1 : 0 }); };
    const [x0, y0, x1, y1] = box;
    if (pat === 'rows' || pat === 'slabs' || pat === 'plyty') { const L = (pat === 'rows' ? 200 : pat === 'slabs' ? 600 : 400) * K, W = (pat === 'rows' ? 100 : pat === 'slabs' ? 300 : 400) * K;
      for (let y = y0, r = 0; y < y1 + W; y += W + J, r++) { const off = pat === 'plyty' ? 0 : (r % 2) * (L + J) / 2; for (let x = x0 - L - off; x < x1 + L; x += L + J) add(x + L / 2, y + W / 2, L, W, 0, pat === 'rows' ? 0 : 1); } }
    else if (pat === 'herring') { const L = 200 * K, Wd = 100 * K, u = Wd + J * .7, cs = Math.SQRT1_2, ox = (x0 + x1) / 2, oy = y0; const ext = Math.hypot(x1 - x0, y1 - y0) + L * 2, N = Math.ceil(ext / u);
      for (let a = -N; a <= N; a++) for (let b = -Math.ceil(N / 4) - 1; b <= Math.ceil(N / 4) + 1; b++) { const bx = a * u + b * 2 * u, by = a * u - b * 2 * u;
        for (const [lx, ly, w, h] of [[bx + u, by + u / 2, 2 * u - J * .7, u - J * .7], [bx + u / 2, by + 2 * u, u - J * .7, 2 * u - J * .7]]) { const x = ox + (lx - ly) * cs, y = oy + (lx + ly) * cs; if (y < y0 - L || y > y1 + L || x < x0 - L || x > x1 + L) continue; add(x, y, w, h, Math.PI / 4); } } }
    else if (pat === 'basket') { const L = 200 * K, W = 100 * K, S = L + J; for (let y = y0, r = 0; y < y1 + S; y += S, r++) for (let x = x0 - S, c = 0; x < x1 + S; x += S, c++) { const hor = (r + c) % 2 === 0;
      for (let q = 0; q < 2; q++) add(hor ? x + L / 2 : x + W / 2 + q * (W + J), hor ? y + W / 2 + q * (W + J) : y + L / 2, hor ? L : W, hor ? W : L, 0); } }
    else if (pat === 'cobble') { let s = 17; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; for (let y = y0; y < y1 + 130 * K;) { const rh = (95 + r() * 25) * K; let x = x0 - 60 * K - r() * 80 * K;
      while (x < x1 + 130 * K) { const w = (85 + r() * 40) * K; add(x + w / 2, y + rh / 2 + (r() - .5) * 6 * K, w - 9 * K, rh - 9 * K, (r() - .5) * .07, 2); x += w; } y += rh; } opt.kind = 1; }
    else if (pat === 'arcs') { const R0 = 90 * K, cx = (x0 + x1) / 2, step = 112 * K, aw = (x1 - x0) / 5; for (let y = y0 - aw; y < y1 + aw; y += step) for (let a = 0; a < 5 + 2; a++) { const acx = x0 + (a - .5) * aw;
      for (let rr = R0; rr < aw * .55; rr += step) { const n = Math.max(3, Math.round(Math.PI * rr / (110 * K))); for (let k = 0; k <= n; k++) { const ang = Math.PI + Math.PI * k / n; const x = acx + Math.cos(ang) * rr, yy = y + Math.sin(ang) * rr * -1; add(x, yy, 100 * K, 92 * K, ang, 2); } } } opt.kind = 1; }
    else if (pat === 'wielkie') { const S2 = 800 * K; for (let y = y0; y < y1 + S2; y += S2 + 6 * K) for (let x = x0 - S2; x < x1 + S2; x += S2 + 6 * K) add(x + S2 / 2, y + S2 / 2, S2, S2, 0, 1); }
    if (opt.kind) out.forEach(s => { s.kind = opt.kind; }); return out; }
  function wzdluz(pts, pal, opt) { // krawężnik / obrzeże wzdłuż łamanej
    opt = opt || {}; const out = [], P = PAL[pal] || PAL.grafit, L = (opt.L || 200) * K, W = (opt.W || 100) * K, J = 4 * K;
    for (let i = 0; i < pts.length - 1; i++) { const [ax, ay] = pts[i], [bx, by] = pts[i + 1]; const len = Math.hypot(bx - ax, by - ay); if (len < 1) continue; const ux = (bx - ax) / len, uy = (by - ay) / len, ang = Math.atan2(uy, ux);
      for (let s = 0; s < len - L * .3; s += L + J) { const l = Math.min(L, len - s); const cx = ax + ux * (s + l / 2) + (-uy) * (opt.off || 0), cy = ay + uy * (s + l / 2) + ux * (opt.off || 0);
        out.push({ x: cx, y: cy, w: l, h: W, rot: ang, col: P[(hash(cx | 0, cy | 0) * P.length) | 0], shape: 1, kind: opt.kind || 0, tx: hash(cx | 0, 1) * 900, ty: hash(cy | 0, 2) * 900 }); } }
    return out; }

  /* ---------- plan świata z sekcji strony ---------- */
  let REG = [], LAMPY = [], DZIURY = [], ETAP = null, KADRY = [], STREFY = {}, CLIP = new Float32Array(64), pageH = 0, vw = 0, vh = 0, D = 1;
  function buduj() {
    const stary = { front, etap: ETAP ? ETAP.klucz || 0 : 0, faza: ETAP ? ETAP.faza : -1, t: ETAP ? ETAP.t.map(() => -100) : [] };
    vw = innerWidth; vh = innerHeight; pageH = document.documentElement.scrollHeight; K = MOB() ? .2 : vw > 1700 ? .34 : .3;
    REG = []; LAMPY = []; DZIURY = []; CLIP = new Float32Array(64); let nClip = 1;
    const sy = scrollY, rect = el => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top + sy, w: r.width, h: r.height }; };
    const marg = MOB() ? 14 : Math.max(60, vw * .07); // trawnik po bokach
    const kw = [], ks = [], ow = [], os = [];
    // dziury: elementy, które wyrastają z bruku
    document.querySelectorAll('[data-dziura], .kafel').forEach((el, i) => { if (i >= 24) return; const r = rect(el); DZIURY.push({ el, x: r.x, y: r.y, w: r.w, h: r.h, cx: r.x + r.w / 2, cy: r.y + r.h / 2, t: 1e9 }); });
    const wDziurze = (x, y) => { for (let i = 0; i < DZIURY.length; i++) { const d = DZIURY[i]; if (x > d.x - 10 && x < d.x + d.w + 10 && y > d.y - 10 && y < d.y + d.h + 10) return i; } return -1; };
    // trawnik wzdłuż całej strony pod bohaterem
    const hero = document.getElementById('start'); const yStart = hero ? hero.offsetTop + hero.offsetHeight : 0;
    REG.push([vw / 2, (yStart + pageH) / 2, vw, pageH - yStart, 0, 1, -1e9, 0]); // trawnik: x,y,w,h | r, rodzaj(0 piasek,1 trawa,2 piasek-rozsyp), start, etap
    // strefy brukowane
    document.querySelectorAll('[data-strefa]').forEach((el, si) => {
      const r = rect(el), typ = el.dataset.strefa, pat = el.dataset.wzor || 'herring', pal = el.dataset.kolor || 'grafit', ob = el.dataset.obrzeze || 'grafit';
      if (typ === 'etap') { // przyklejony etap: podjazd buduje się w fazach
        const x0 = marg + (MOB() ? 0 : vw * .06), x1 = vw - x0, y0 = vh * .16, y1 = vh + 40; ETAP = { el, inner: el.querySelector('.etap-wnetrze'), x0, x1, y0, y1, faza: -1, t: [] };
        REG.push([(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 40, y1 - y0 + 40, 10, 3, -1e9, 1]); REG.push([(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 30, y1 - y0 + 30, 8, 2, 1e9, 1]); ETAP.reg = REG.length - 1;
        const ob1 = wzdluz([[x0, y1], [x0, y0], [x1, y0], [x1, y1]], 'bianco', { L: 200, W: 100 }); ob1.forEach((s, i) => { s.key = .32 + .12 * i / ob1.length; s.grp = 1; s.jit = 0; }); ks.push(...ob1);
        const ix0 = x0 + 52 * K, iy0 = y0 + 52 * K, ix1 = x1 - 52 * K; CLIP.set([ix0, iy0, ix1, 1e6], 15 * 4);
        const pole = wzor('herring', 'grafit', [ix0 - 60, iy0 - 60, ix1 + 60, y1], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < y1 + 30); pole.forEach(s => { s.clip = 15; });
        const cx = (x0 + x1) / 2; pole.forEach(s => { const dd = (s.y - y0) / (y1 - y0) * .8 + Math.abs(s.x - cx) / (x1 - x0) * .4; s.key = .46 + .38 * clamp(dd, 0, 1) + hash(s.x | 0, s.y | 0) * .02; s.grp = 1; s.jit = hash(s.y | 0, s.x | 0); }); ks.push(...pole);
        // dwie lampy przy wjeździe i krzewy
        [[x0 - 40, y0 + (y1 - y0) * .35], [x1 + 40, y0 + (y1 - y0) * .35]].forEach(([x, y], i) => os.push({ x, y, size: 70, idx: 5, h: .9, grp: 1, key: .9 + i * .01 }));
        [[x0 - 90, y0 + 60, 2], [x1 + 90, y0 + 50, 0], [x0 - 120, y1 - 120, 3], [x1 + 110, y1 - 160, 3]].forEach(([x, y, k], i) => os.push({ x, y, size: k === 3 ? 150 : 330, idx: k, h: k === 3 ? .8 : 3.6, grp: 1, key: .05 + i * .02 }));
        KADRY = [...el.querySelectorAll('[data-od]')].map(k => ({ el: k, od: +k.dataset.od, do: +k.dataset.do }));
        return;
      }
      // zwykła strefa: plac na całą szerokość sekcji, z krawężnikiem góra/dół
      const x0 = marg, x1 = vw - marg, y0 = r.y, y1 = r.y + r.h;
      REG.push([(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 24, y1 - y0, 4, 0, -1e9, 0]);
      const kraw = [...wzdluz([[x0, y0 + 50 * K], [x1, y0 + 50 * K]], ob, { L: 200, W: 100 }), ...wzdluz([[x0 + 50 * K, y0], [x0 + 50 * K, y1]], ob), ...wzdluz([[x1 - 50 * K, y0], [x1 - 50 * K, y1]], ob)];
      kraw.forEach(s => { s.key = s.y - 80; s.jit = hash(s.x | 0, 2); s.zid = si; }); kw.push(...kraw);
      const cz = Math.min(14, nClip++); const ix0 = x0 + 102 * K, iy0 = y0 + 102 * K, ix1 = x1 - 102 * K; CLIP.set([ix0, iy0, ix1, y1], cz * 4);
      const pole = wzor(pat, pal, [ix0 - 60, iy0 - 60, ix1 + 60, y1 + 40], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < y1 + 30); pole.forEach(s => { s.clip = cz; });
      pole.forEach(s => { s.hole = wDziurze(s.x, s.y); if (s.hole < 0) s.hole = null; s.key = s.y + hash(s.x | 0, s.y | 0) * 60; s.jit = hash(s.y | 0, s.x | 0); s.zid = si; }); kw.push(...pole);
      STREFY[el.id] = { si, x0, x1, y0, y1 };
      // zieleń i lampy na trawniku po bokach
      if (!MOB()) { const n = Math.max(1, Math.round(r.h / 520)); for (let i = 0; i < n; i++) { const yy = y0 + (i + .5) * r.h / n; const hz = hash(si * 13 + i, 7);
        ow.push({ x: marg * .5 + (hz - .5) * marg * .3, y: yy, size: marg * (hz > .5 ? 2.6 : 1.4), idx: hz > .7 ? 2 : hz > .35 ? 0 : 4, h: hz > .35 ? 4 : 1.2, key: yy - 200 });
        const hz2 = hash(si * 7 + i, 11); ow.push({ x: vw - marg * .5 + (hz2 - .5) * marg * .3, y: yy + 180, size: marg * (hz2 > .5 ? 2.4 : 1.3), idx: hz2 > .6 ? 1 : hz2 > .3 ? 3 : 7, h: hz2 > .3 ? 3.5 : .6, key: yy - 20 }); }
        if (el.dataset.lampy) for (let yy = y0 + 140; yy < y1 - 60; yy += 380) { const lx = marg * .62, rx = vw - marg * .62; ow.push({ x: lx, y: yy, size: 58, idx: 5, h: .9, key: yy - 40 }); ow.push({ x: rx, y: yy + 190, size: 58, idx: 5, h: .9, key: yy + 170 }); LAMPY.push([lx, yy, 250, 0], [rx, yy + 190, 250, 0]); } }
      else if (el.dataset.lampy) for (let yy = y0 + 120; yy < y1 - 60; yy += 320) LAMPY.push([(yy / 320 | 0) % 2 ? vw - 6 : 6, yy, 170, 0]);
    });
    kw.sort((a, b) => a.key - b.key); ks.sort((a, b) => a.key - b.key); ow.sort((a, b) => a.key - b.key); os.sort((a, b) => a.key - b.key);
    wgraj(KW, kw, rowK); wgraj(KS, ks, rowK); wgraj(OB, ow, rowO); wgraj(OS, os, rowO);
    G.n = { kw: kw.length, ks: ks.length, ow: ow.length, os: os.length, reg: REG.length };
    rozmiar();
    if (stary.front > 0) { wyzwol(KW, stary.front, -100); wyzwol(OB, stary.front, -100); front = stary.front; } else front = -1;
    if (stary.etap > 0) { wyzwol(KS, stary.etap, -100); wyzwol(OS, stary.etap, -100); }
    DZIURY.forEach(d => { if (d.el.classList.contains('wyrasta')) d.t = -100; });
    if (ETAP && stary.faza >= 0) { ETAP.faza = stary.faza; ETAP.t = stary.t; if (ETAP.faza >= 1) REG[ETAP.reg][6] = -100; }
  }

  /* ---------- klatka ---------- */
  let front = -1, run = false, lastActive = 0, nocTrg = 0;
  function rozmiar() { D = Math.min(devicePixelRatio || 1, 2, Math.sqrt(2.6e6 / (innerWidth * innerHeight))); cv.width = Math.round(innerWidth * D); cv.height = Math.round(innerHeight * D); cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px'; }
  function plan() { if (!run) { run = true; requestAnimationFrame(klatka); } }
  const ust = (P, t) => { gl.uniform2f(P.u.uRes, innerWidth, innerHeight); gl.uniform1f(P.u.uScroll, scrollY); if (P.u.uStageOy) gl.uniform1f(P.u.uStageOy, ETAP ? ETAP.oy : -1e5); if (P.u.uTime) gl.uniform1f(P.u.uTime, t); if (P.u.uPersp) gl.uniform1f(P.u.uPersp, .055); };
  function klatka(now) {
    run = false; if (!G.ready) return; const t = now / 1000, y = scrollY; let aktywne = false;
    // etap: postęp przyklejonej sekcji
    if (ETAP) { const r = ETAP.el.getBoundingClientRect(); ETAP.oy = ETAP.inner.getBoundingClientRect().top; const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1); ETAP.p = p;
      const fz = p < .02 ? -1 : p < .16 ? 0 : p < .32 ? 1 : p < .46 ? 2 : p < .86 ? 3 : 4; if (fz > ETAP.faza) { for (let f = ETAP.faza + 1; f <= fz; f++) ETAP.t[f] = t; ETAP.faza = fz; if (fz >= 1) REG[ETAP.reg][6] = ETAP.t[1]; } else if (fz < ETAP.faza) { ETAP.faza = fz; if (fz < 1) REG[ETAP.reg][6] = 1e9; if (fz < 0) ETAP.t[0] = 1e9; aktywne = true; }
      const kl = ETAP.faza >= 2 ? (ETAP.faza >= 3 ? Math.min(.87, .46 + (p - .46) / .4 * .4 + .02) : p + .01) : -1; ETAP.klucz = kl; if (wyzwol(KS, kl, t)) aktywne = true; if (cofnij(KS, kl, t)) aktywne = true;
      if (OB && wyzwol(OS, p + .02, t)) aktywne = true; if (cofnij(OS, p + .02, t)) aktywne = true;
      KADRY.forEach(k => k.el.classList.toggle('on', p >= k.od && p < k.do)); document.documentElement.style.setProperty('--etap', p.toFixed(3)); }
    // czoło budowy: 85 % wysokości ekranu (widać, jak kamienie lądują)
    const f = y + vh * .95; if (f > front) { front = f; if (wyzwol(KW, f, t)) aktywne = true; if (wyzwol(OB, f, t)) aktywne = true; }
    else if (f < front - 36) { front = f; if (cofnij(KW, f, t)) aktywne = true; if (cofnij(OB, f, t)) aktywne = true; }
    // dziury: kamienie podnoszą się, gdy element wjeżdża w ekran; element pojawia się w zwolnionym miejscu
    DZIURY.forEach(d => { if (d.t > 1e8 && d.y - y < vh * .88) { d.t = t + .45; d.el.classList.add('wyrasta'); aktywne = true; } });
    // noc na końcu strony: ostatnie dwa ekrany
    const noc = clamp((y + vh - (pageH - vh * 2.2)) / (vh * 1.6), 0, 1);
    if (t - lastActive < 1.3) aktywne = true;
    if (aktywne) lastActive = Math.max(lastActive, t);
    rysuj(t, noc);
    if (aktywne || t - lastActive < 1.3) plan();
  }
  function rysuj(t, noc) {
    gl.viewport(0, 0, cv.width, cv.height); gl.disable(gl.DEPTH_TEST); const PZ = G.pasy || 15;
    // 1) grunt
    gl.disable(gl.BLEND); gl.useProgram(PG.p); ust(PG, t); gl.uniform1i(PG.u.uTE, 2); gl.uniform1i(PG.u.uTS, 3); gl.uniform1i(PG.u.uTL, 4);
    // tylko obszary widoczne na ekranie (zwykle 2–4) – reszta nie kosztuje nic
    const R = new Float32Array(160), RB = new Float32Array(160); let nr = 0; const sy = scrollY, VH = innerHeight, so = ETAP ? ETAP.oy : -1e5;
    for (const g of REG) { const top = g[7] > .5 ? so + g[1] - g[3] / 2 : g[1] - g[3] / 2 - sy, bot = top + g[3]; if (bot < -40 || top > VH + 40 || nr >= 40) continue;
      if (g[5] === 1 && g[2] >= innerWidth && nr === 0) { R.set(g.slice(0, 4), nr * 4); RB.set([g[4], g[5], g[6], g[7]], nr * 4); nr++; continue; }
      R.set(g.slice(0, 4), nr * 4); RB.set([g[4], g[5], g[6], g[7]], nr * 4); nr++; }
    gl.uniform4fv(PG.u.uR, R); gl.uniform4fv(PG.u.uRB, RB); gl.uniform1i(PG.u.uNR, G.bezReg ? 0 : nr);
    if (ETAP) { gl.uniform4f(PG.u.uSz, (ETAP.x0 + ETAP.x1) / 2, (ETAP.y0 + ETAP.y1) / 2, ETAP.x1 - ETAP.x0, ETAP.y1 - ETAP.y0); gl.uniform4f(PG.u.uSzB, ETAP.t[0] || 1e9, 1.6, ETAP.faza >= 0 && ETAP.faza < 3 ? 1 : ETAP.faza >= 3 ? Math.max(0, 1 - (t - (ETAP.t[3] || t)) / 1.2) : 0, 0); }
    else gl.uniform4f(PG.u.uSzB, 0, 0, 0, 0);
    gl.bindVertexArray(qVao); if (PZ & 1) gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    // 2) kamienie: cień, potem kamień
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(PK.p); ust(PK, t); gl.uniform1i(PK.u.uTB, 0); gl.uniform1i(PK.u.uTG, 1);
    const H = new Float32Array(96); DZIURY.forEach((d, i) => H.set([d.t, d.cx, d.cy, 0], i * 4)); gl.uniform4fv(PK.u.uHole, H); gl.uniform4fv(PK.u.uClip, CLIP);
    const sun = 1 - noc * .7; gl.uniform1f(PK.u.uAmb, .44 - noc * .18); gl.uniform1f(PK.u.uSun, sun); gl.uniform3f(PK.u.uLd, -.42, -.55, .72);
    for (const sh of [1, 0]) { if (!(PZ & (sh ? 2 : 4))) continue; gl.uniform1f(PK.u.uShadow, sh); for (const g of [KW, KS]) rysujGrupe(g, g === KS); }
    // 3) zieleń i lampy
    gl.useProgram(PO.p); ust(PO, t); gl.uniform1i(PO.u.uTO, 5); gl.uniform1f(PO.u.uAmb, .44 - noc * .18); gl.uniform1f(PO.u.uSun, sun);
    if (PZ & 8) for (const sh of [1, 0]) { gl.uniform1f(PO.u.uShadow, sh); for (const g of [OB, OS]) rysujGrupe(g, g === OS); }
    // 4) noc i światło lamp
    if (noc > .001) { gl.blendFunc(gl.DST_COLOR, gl.ZERO); gl.useProgram(PN.p); gl.uniform2f(PN.u.uRes, innerWidth, innerHeight); gl.uniform1f(PN.u.uScroll, scrollY); gl.uniform1f(PN.u.uNoc, noc);
      const L = new Float32Array(96); LAMPY.slice(0, 24).forEach((l, i) => { const on = clamp((noc - .25 - (i % 6) * .05) / .2, 0, 1); L.set([l[0], l[1], l[2], on], i * 4); });
      gl.uniform4fv(PN.u.uLamp, L); gl.uniform1i(PN.u.uNL, Math.min(24, LAMPY.length)); gl.bindVertexArray(qVao); gl.uniform1f(PN.u.uTryb, 0); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (LAMPY.length) { gl.blendFunc(gl.DST_COLOR, gl.ONE); gl.uniform1f(PN.u.uTryb, 1); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.blendFunc(gl.ONE, gl.ONE); gl.uniform1f(PN.u.uTryb, 2); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
    gl.bindVertexArray(null);
  }
  function rysujGrupe(g, etap) { if (!g.n) return; let a = 0, b = g.n;
    if (!etap) { const y0 = scrollY - 400, y1 = scrollY + innerHeight + 400; a = lb(g.ys, y0, g); b = Math.min(g.n, lb(g.ys, y1, g) + 1); if (b <= a) return; }
    else if (!ETAP || ETAP.oy > innerHeight + 200 || ETAP.oy < -innerHeight - 200) return;
    gl.bindVertexArray(g.vao); const st = g.stride * 4;
    const locs = g.stride === 16 ? [[1, 0], [2, 16], [3, 32], [4, 48]] : [[1, 0], [2, 16]]; gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); for (const [l, o] of locs) gl.vertexAttribPointer(l, 4, gl.FLOAT, false, st, a * st + o);
    gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, a * 4);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, b - a); }
  function lb(ys, v, g) { // klucze są posortowane, y w przybliżeniu też (klucz = y + szum) – szukamy po kluczu z zapasem
    const k = g.keys; let lo = 0, hi = g.n; while (lo < hi) { const m = (lo + hi) >> 1; if (k[m] < v - 200) lo = m + 1; else hi = m; } return lo; }

  /* ---------- zdarzenia ---------- */
  addEventListener('scroll', plan, { passive: true });
  let rT = 0, lw = innerWidth, lh = innerHeight;
  addEventListener('resize', () => { if (Math.abs(innerWidth - lw) < 2 && Math.abs(innerHeight - lh) < 120) { rozmiar(); plan(); return; } clearTimeout(rT); rT = setTimeout(() => { lw = innerWidth; lh = innerHeight; if (G.ready) { buduj(); plan(); } }, 200); });
  new ResizeObserver(() => { const h = document.documentElement.scrollHeight; if (G.ready && Math.abs(h - pageH) > 60) { clearTimeout(rT); rT = setTimeout(() => { buduj(); plan(); }, 250); } }).observe(document.body);
  G.przebuduj = () => { if (G.ready) { buduj(); plan(); } };
  // Wzory: plac w świecie przekłada się na nowo – nowe kamienie spadają falą od środka
  G.ustawWzor = (id, pat, pal) => { const el = document.getElementById(id); if (!el || !G.ready) return; el.dataset.wzor = pat; if (pal) el.dataset.kolor = pal; buduj();
    const z = STREFY[id]; if (!z) return; const t = performance.now() / 1000, cx = (z.x0 + z.x1) / 2, cy = Math.min(z.y1, Math.max(z.y0, scrollY + innerHeight / 2)), R = Math.hypot(z.x1 - z.x0, z.y1 - z.y0) * .5;
    for (let i = 0; i < KW.n; i++) if (KW.zone[i] === z.si && KW.trig[i] >= 0 && KW.trig[i] < 1e8) KW.trig[i] = t + Math.hypot(KW.xs[i] - cx, KW.ys[i] - cy) / R * 1.1 + hash(i, 5) * .12;
    gl.bindBuffer(gl.ARRAY_BUFFER, KW.tb); gl.bufferSubData(gl.ARRAY_BUFFER, 0, KW.trig); lastActive = t + 2; plan(); };
  G.info = () => ({ ...G.n, nl: LAMPY.length, l0: LAMPY[0], pageH, front, etap: ETAP && ETAP.p, faza: ETAP && ETAP.faza, D, K });
  G.klatka = () => klatka(performance.now());
})();
