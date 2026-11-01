/* GardenBruk v12 – tło strony.
   Każda sekcja ma własny plac z kostki w zwykłych płótnach (po 1024 px) wewnątrz sekcji – przewija się razem ze stroną, nic nie skacze.
   Kamienie układają się, gdy linia budowy (78 % ekranu na telefonie, 88 % na PC) je mija: spadają raz i zostają (nigdy nie wracają). Tylko kawałek, w którym coś
   właśnie spada, malowany jest co klatkę; potem zamarza. Historia i przerywniki „Koło” mają własne przyklejone sceny.
   Wszystko maluje jedno płótno WebGL; po utracie kontekstu (np. przełączenie aplikacji na telefonie) odbudowuje się samo. */
(function () {
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOB = () => innerWidth < 821;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  const hex = c => { const n = parseInt(c.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };
  const G = window.Swiat9 = { ok: false, ready: false };
  const PAL = {
    grafit: ['#3a3b40', '#43444a', '#4c4d52', '#56575b'], szary: ['#8a8984', '#7e7d78', '#96948e', '#8f8d87'], bianco: ['#d9d5cc', '#ccc7bc', '#e2dfd7', '#d2cec4'],
    piaskowy: ['#cdb48b', '#bfa57a', '#d6c39f', '#c5ad85'], melanz: ['#8a6a50', '#b29a78', '#6b5444', '#8d8a82', '#a07d5c', '#9c8b74'], granit: ['#8c8a85', '#a19e98', '#7b7975', '#96938d'],
    lupek: ['#5e6062', '#6d6963', '#55575a', '#77736b'], zolty: ['#d4ac5a', '#c9a04f', '#dcb869'], czarny: ['#2c2d30', '#313236', '#28292c']
  };

  /* ---------- shadery ---------- */
  const PROJ = `uniform vec2 uRes; uniform float uScroll, uPersp, uStageOy; uniform vec2 uC;
vec2 proj(vec2 w, float h, float grp){ vec2 s = grp > .5 ? vec2(w.x, uStageOy + w.y) : vec2(w.x, w.y - uScroll); vec2 c = uC; return c + (s - c) / (1. - h * uPersp); }
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
uniform vec4 uSz; uniform vec4 uSzB; uniform float uVig, uTexOff; // sznurek: prostokąt etapu (x,y,w,h), (start, koniec rysowania, widoczność, -)
float sdB(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }
void main(){
  vec2 w = vec2(vP.x, vP.y + uScroll); vec2 ws = vec2(vP.x, vP.y - uStageOy);
  vec2 T = vec2(0., uTexOff); vec3 c = texture(uTE, (w + T) / 420.).rgb * .96;
  for (int i = 0; i < 40; i++) { if (i >= uNR) break; vec4 R = uR[i], B = uRB[i]; vec2 pp = B.w > .5 ? ws : w;
    float rev = clamp((uTime - B.z) / 1.5, 0., 1.); if (rev <= 0.) continue;
    float lim = R.y - R.w * .5 + R.w * (rev * 1.25 - .125); if (B.y > 1.5 && pp.y > lim) continue; // piasek rozsypuje się z góry
    float d = sdB(pp - R.xy, R.zw * .5, B.x); float f = 1. - smoothstep(-3., 3., d); if (f <= 0.) continue;
    vec2 tp = B.w > .5 ? pp : pp + T; vec3 s = B.y > 2.5 ? texture(uTE, tp / 420.).rgb * .82 : (B.y < .5 || B.y > 1.5 ? texture(uTS, tp / 380.).rgb : texture(uTL, tp / 360.).rgb * vec3(.96, 1.02, .92));
    float rim = 1. - smoothstep(-26., 0., d); s *= 1. - rim * (B.y > .5 && B.y < 1.5 ? .18 : .1);
    c = mix(c, s, f * (B.y > 1.5 ? smoothstep(lim, lim - 30., pp.y) : 1.) * (B.y > .5 && B.y < 1.5 ? 1. : smoothstep(0., .3, rev)));
  }
  if (uSzB.z > 0.) { vec2 p = ws - uSz.xy; vec2 hb = uSz.zw * .5; float d = abs(sdB(p, hb, 2.)); float per = 2. * (uSz.z + uSz.w);
    vec2 a = p + hb; float u = p.y < -hb.y + 3. ? a.x : p.x > hb.x - 3. ? uSz.z + a.y : p.y > hb.y - 3. ? uSz.z + uSz.w + (uSz.z - a.x) : 2. * uSz.z + uSz.w + (uSz.w - a.y);
    float pr = clamp((uTime - uSzB.x) / max(uSzB.y, .1), 0., 1.); float on = step(u / per, pr) * uSzB.z;
    c = mix(c, vec3(.97, .96, .92), (1. - smoothstep(.6, 1.6, d)) * on * .95);
    if (length(abs(p) - hb) < 7.) c = mix(c, vec3(.45, .3, .16), uSzB.z);
  }
  vec2 v = vP / uRes - .5; c *= 1. - dot(v, v) * .22 * uVig;
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
precision highp float; in vec2 vP; out vec4 o; uniform vec4 uNocR; uniform vec2 uRes;
uniform vec4 uLamp[24]; uniform int uNL; uniform float uScroll; uniform float uTryb;
void main(){ float n = mix(uNocR.x, uNocR.y, smoothstep(uNocR.z, uNocR.w, vP.y + uScroll)); vec3 m = mix(vec3(1.), vec3(.2, .24, .36), n); vec3 add = vec3(0.); vec3 zar = vec3(0.);
  for (int i = 0; i < 24; i++) { if (i >= uNL) break; vec4 L = uLamp[i]; vec2 p = vec2(L.x, L.y - uScroll); float d = length(vP - p) / L.z; add += vec3(1., .8, .46) * (exp(-d * d * 2.4) + .55 * exp(-d * d * 16.)) * L.w; float q = length(vP - p) / 30.; zar += vec3(1., .86, .6) * exp(-q * q) * L.w; }
  vec3 c = m + add * n * 1.05; o = uTryb < .5 ? vec4(min(c, vec3(1.)), 1.) : uTryb < 1.5 ? vec4(max(c - 1., vec3(0.)), 1.) : vec4(zar * n * .9, 1.); }`;

  const FS_DIM = `#version 300 es
precision highp float; in vec2 vP; out vec4 o; uniform vec2 uRes; uniform vec4 uDim; uniform vec2 uRamp; uniform float uScroll;
void main(){ float x = vP.x / uRes.x; float b = smoothstep(0., .3, x) * smoothstep(1., .7, x), r = smoothstep(uRamp.x, uRamp.y, vP.y + uScroll);
  o = vec4(.063, .051, .035, mix(mix(uDim.y, uDim.x, b), mix(uDim.w, uDim.z, b), r)); }`;

  /* ---------- renderer: jedno płótno WebGL2 (zwykłe albo OffscreenCanvas) z programami, teksturami i grupami instancji ---------- */
  function Renderer(cv, tylko) {
    let gl = null;
    try { gl = cv.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    if (!gl) return null;
    function prog(vs, fs) { const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
      const p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      const u = {}; const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); for (let i = 0; i < n; i++) { const a = gl.getActiveUniform(p, i); u[a.name.replace('[0]', '')] = gl.getUniformLocation(p, a.name); } return { p, u }; }
    let PK, PG, PO, PN, PD;
    try { PK = prog(VS_K, FS_K); PG = prog(VS_Q, FS_GRUNT); PO = prog(VS_O, FS_O); PN = prog(VS_Q, FS_NOC); PD = prog(VS_Q, FS_DIM); } catch (e) { console.warn('Swiat', e.message); return null; }
    const PLIKI = [['B', 'img/hd/beton.webp', 0, true], ['G', 'img/hd/granit.webp', 1, true], ['E', 'img/hd/erde.webp', 2, true], ['S', 'img/hd/sand.webp', 3, true], ['L', 'img/hd/trawa.webp', 4, true], ['O', 'img/hd/obiekty.webp', 5, false]].filter(p => !tylko || tylko.includes(p[0]));
    const an = gl.getExtension('EXT_texture_filter_anisotropic');
    const gotowe = Promise.all(PLIKI.map(([name, src, unit, wrap]) => new Promise(res => { const t = gl.createTexture(), im = new Image(); im.decoding = 'async';
      im.onload = async () => { let zr = im; try { if (window.createImageBitmap) zr = await createImageBitmap(im, { premultiplyAlpha: 'none' }); } catch (e) { zr = im; }
        gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, zr); gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        const w = wrap ? gl.REPEAT : gl.CLAMP_TO_EDGE; gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, w); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, w);
        if (an && (name === 'B' || name === 'G')) gl.texParameterf(gl.TEXTURE_2D, an.TEXTURE_MAX_ANISOTROPY_EXT, 4); if (zr !== im && zr.close) zr.close(); res(); };
      im.onerror = () => res(); im.src = src; })));
    const quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const qVao = gl.createVertexArray(); gl.bindVertexArray(qVao); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.bindVertexArray(null);
    // grupa instancji: kamienie (16 liczb) albo obiekty (8 liczb); trig = czas, w którym kamień zaczyna spadać (1e9 = jeszcze nie)
    function grupa(list, stride, toRow, trig0) {
      const g = { vao: gl.createVertexArray(), buf: gl.createBuffer(), tb: gl.createBuffer(), n: list.length, stride, ptr: 0 };
      const d = new Float32Array(Math.max(1, list.length) * stride); list.forEach((s, i) => toRow(s, d, i * stride));
      g.keys = new Float32Array(list.map(s => s.key)); g.trig = new Float32Array(Math.max(1, list.length)).fill(trig0);
      gl.bindVertexArray(g.vao); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); gl.bufferData(gl.ARRAY_BUFFER, d, gl.STATIC_DRAW);
      const locs = stride === 16 ? [[1, 0], [2, 4], [3, 8], [4, 12]] : [[1, 0], [2, 4]];
      for (const [l, o] of locs) { gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 4, gl.FLOAT, false, stride * 4, o * 4); gl.vertexAttribDivisor(l, 1); }
      gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferData(gl.ARRAY_BUFFER, g.trig, gl.DYNAMIC_DRAW); gl.enableVertexAttribArray(5); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, 0); gl.vertexAttribDivisor(5, 1);
      gl.bindVertexArray(null); return g; }
    function usun(g) { if (!g) return; gl.deleteBuffer(g.buf); gl.deleteBuffer(g.tb); gl.deleteVertexArray(g.vao); }
    // wyzwól: kamienie z kluczem ≤ k zaczynają spadać w chwili t (tylko do przodu – nic nie wraca)
    function wyzwol(g, k, t, rozrzut) { if (!g || !g.n) return false; let i = g.ptr; if (i >= g.n || g.keys[i] > k) return false; const s = i, rz = RM ? 0 : rozrzut == null ? .18 : rozrzut;
      while (i < g.n && g.keys[i] <= k) { g.trig[i] = t + hash(i, 3) * rz; i++; }
      g.ptr = i; gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferSubData(gl.ARRAY_BUFFER, s * 4, g.trig.subarray(s, i)); return true; }
    function wgrajTrig(g) { gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferSubData(gl.ARRAY_BUFFER, 0, g.trig); }
    const R = new Float32Array(160), RB = new Float32Array(160), H = new Float32Array(96).fill(0), L = new Float32Array(96);
    for (let i = 0; i < 24; i++) H[i * 4] = 1e9;
    function rysujGrupe(g, y0, y1) { if (!g || !g.n) return; let a = 0, b = g.n;
      if (y1 != null) { const k = g.keys; let lo = 0, hi = g.n; while (lo < hi) { const m = (lo + hi) >> 1; if (k[m] < y0 - 420) lo = m + 1; else hi = m; } a = lo; lo = a; hi = g.n; while (lo < hi) { const m = (lo + hi) >> 1; if (k[m] < y1 + 420) lo = m + 1; else hi = m; } b = lo; if (b <= a) return; }
      gl.bindVertexArray(g.vao); const st = g.stride * 4; const locs = g.stride === 16 ? [[1, 0], [2, 16], [3, 32], [4, 48]] : [[1, 0], [2, 16]];
      gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); for (const [l, o] of locs) gl.vertexAttribPointer(l, 4, gl.FLOAT, false, st, a * st + o);
      gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, a * 4);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, b - a); }
    // jedna klatka: sc = { w, h, scroll, stageOy, t, reg, clip, kamienie, obiekty, lampy, noc, vig, persp, perspO, c, sz, szb, cul, texOff, dim }
    function rysuj(sc) {
      const vp = sc.vp || [0, 0, cv.width, cv.height]; gl.viewport(vp[0], vp[1], vp[2], vp[3]); gl.disable(gl.DEPTH_TEST);
      const N = Array.isArray(sc.noc) ? sc.noc : [sc.noc || 0, sc.noc || 0, 0, 1];
      const cx = sc.c ? sc.c[0] : sc.w / 2, cy = sc.c ? sc.c[1] : sc.h / 2;
      const ust = (P, persp) => { gl.uniform2f(P.u.uRes, sc.w, sc.h); if (P.u.uScroll) gl.uniform1f(P.u.uScroll, sc.scroll); if (P.u.uStageOy) gl.uniform1f(P.u.uStageOy, sc.stageOy); if (P.u.uTime) gl.uniform1f(P.u.uTime, sc.t); if (P.u.uPersp) gl.uniform1f(P.u.uPersp, persp); if (P.u.uC) gl.uniform2f(P.u.uC, cx, cy); };
      gl.disable(gl.BLEND); gl.useProgram(PG.p); ust(PG, 0); gl.uniform1i(PG.u.uTE, 2); gl.uniform1i(PG.u.uTS, 3); gl.uniform1i(PG.u.uTL, 4); gl.uniform1f(PG.u.uVig, sc.vig || 0); gl.uniform1f(PG.u.uTexOff, sc.texOff || 0);
      let nr = 0; R.fill(0); RB.fill(0);
      for (const g of sc.reg) { const top = g[7] > .5 ? sc.stageOy + g[1] - g[3] / 2 : g[1] - g[3] / 2 - sc.scroll; if (top + g[3] < -40 || top > sc.h + 40 || nr >= 40) continue; R.set(g.slice(0, 4), nr * 4); RB.set([g[4], g[5], g[6], g[7]], nr * 4); nr++; }
      gl.uniform4fv(PG.u.uR, R); gl.uniform4fv(PG.u.uRB, RB); gl.uniform1i(PG.u.uNR, nr);
      if (sc.sz) { gl.uniform4f(PG.u.uSz, sc.sz[0], sc.sz[1], sc.sz[2], sc.sz[3]); gl.uniform4f(PG.u.uSzB, sc.szb[0], sc.szb[1], sc.szb[2], 0); } else gl.uniform4f(PG.u.uSzB, 0, 0, 0, 0);
      gl.bindVertexArray(qVao); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      const noc = Math.min(N[0], N[1]), sun = 1 - noc * .7, y0 = sc.cul ? sc.scroll : null, y1 = sc.cul ? sc.scroll + sc.h : null;
      gl.useProgram(PK.p); ust(PK, sc.persp || 0); gl.uniform1i(PK.u.uTB, 0); gl.uniform1i(PK.u.uTG, 1); gl.uniform4fv(PK.u.uHole, H); gl.uniform4fv(PK.u.uClip, sc.clip);
      gl.uniform1f(PK.u.uAmb, .44 - noc * .18); gl.uniform1f(PK.u.uSun, sun); gl.uniform3f(PK.u.uLd, -.42, -.55, .72);
      for (const sh of [1, 0]) { gl.uniform1f(PK.u.uShadow, sh); for (const g of sc.kamienie) rysujGrupe(g, y0, y1); }
      if (sc.obiekty && sc.obiekty.length) { gl.useProgram(PO.p); ust(PO, sc.perspO != null ? sc.perspO : sc.persp || 0); gl.uniform1i(PO.u.uTO, 5); gl.uniform1f(PO.u.uAmb, .44 - noc * .18); gl.uniform1f(PO.u.uSun, sun);
        for (const sh of [1, 0]) { gl.uniform1f(PO.u.uShadow, sh); for (const g of sc.obiekty) rysujGrupe(g, y0, y1); } }
      if (Math.max(N[0], N[1]) > .001) { gl.blendFunc(gl.DST_COLOR, gl.ZERO); gl.useProgram(PN.p); gl.uniform2f(PN.u.uRes, sc.w, sc.h); gl.uniform1f(PN.u.uScroll, sc.scroll); gl.uniform4f(PN.u.uNocR, N[0], N[1], N[2], N[3]);
        L.fill(0); const lm = (sc.lampy || []).slice(0, 24); lm.forEach((l, i) => L.set([l[0], l[1], l[2], 1], i * 4));
        gl.uniform4fv(PN.u.uLamp, L); gl.uniform1i(PN.u.uNL, lm.length); gl.bindVertexArray(qVao); gl.uniform1f(PN.u.uTryb, 0); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (lm.length) { gl.blendFunc(gl.DST_COLOR, gl.ONE); gl.uniform1f(PN.u.uTryb, 1); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.blendFunc(gl.ONE, gl.ONE); gl.uniform1f(PN.u.uTryb, 2); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
      // równe przygaszenie tła (środek mocniej, brzegi z trawą lżej) – tak samo w każdej sekcji
      if (sc.dim) { const D = sc.dim; gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); gl.useProgram(PD.p); gl.uniform2f(PD.u.uRes, sc.w, sc.h); gl.uniform1f(PD.u.uScroll, sc.scroll); gl.uniform4f(PD.u.uDim, D[0], D[1], D[2] == null ? D[0] : D[2], D[3] == null ? D[1] : D[3]); gl.uniform2f(PD.u.uRamp, D[4] || 0, D[5] || 1); gl.bindVertexArray(qVao); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
      gl.bindVertexArray(null); }
    return { gl, cv, gotowe, grupa, usun, wyzwol, wgrajTrig, rysuj, zgubiony: () => gl.isContextLost() };
  }
  const rowK = (s, d, o) => { const c = hex(s.col); d.set([s.x, s.y, s.w, s.h, s.rot || 0, (s.kind || 0) + (s.clip || 0) * 2, s.tx || 0, s.ty || 0, s.jit || 0, -1, s.shape || 0, s.mel || 0, c[0], c[1], c[2], s.grp || 0], o); };
  const rowO = (s, d, o) => d.set([s.x, s.y, s.size, s.rot || 0, s.idx, s.h, 0, s.grp || 0], o);
  /* ---------- geometria kostki (milimetry → piksele), jak w v9 ---------- */
  let K = .3;
  function wzor(pat, pal, box, accept, opt) { opt = opt || {}; const out = [], J = 4 * K, P = PAL[pal] || PAL.grafit; const pick = (x, y) => P[(hash(x | 0, y | 0) * P.length) | 0];
    const add = (x, y, w, h, rot, shape) => { if (accept(x, y)) out.push({ x, y, w, h, rot, col: pick(x * 3.1, y * 1.7), shape: shape || 0, kind: opt.kind || 0, tx: hash(x | 0, 9) * 900, ty: hash(y | 0, 5) * 900, mel: pal === 'melanz' ? 1 : 0 }); };
    const [x0, y0, x1, y1] = box;
    if (pat === 'rows' || pat === 'slabs' || pat === 'plyty') { const Lg = (pat === 'rows' ? 200 : pat === 'slabs' ? 600 : 400) * K, W = (pat === 'rows' ? 100 : pat === 'slabs' ? 300 : 400) * K;
      for (let y = y0, r = 0; y < y1 + W; y += W + J, r++) { const off = pat === 'plyty' ? 0 : (r % 2) * (Lg + J) / 2; for (let x = x0 - Lg - off; x < x1 + Lg; x += Lg + J) add(x + Lg / 2, y + W / 2, Lg, W, 0, pat === 'rows' ? 0 : 1); } }
    else if (pat === 'herring') { const Lg = 200 * K, Wd = 100 * K, u = Wd + J * .7, cs = Math.SQRT1_2, ox = (x0 + x1) / 2, oy = y0; const ext = Math.hypot(x1 - x0, y1 - y0) + Lg * 2, N = Math.ceil(ext / u);
      for (let a = -N; a <= N; a++) for (let b = -Math.ceil(N / 4) - 1; b <= Math.ceil(N / 4) + 1; b++) { const bx = a * u + b * 2 * u, by = a * u - b * 2 * u;
        for (const [lx, ly, w, h] of [[bx + u, by + u / 2, 2 * u - J * .7, u - J * .7], [bx + u / 2, by + 2 * u, u - J * .7, 2 * u - J * .7]]) { const x = ox + (lx - ly) * cs, y = oy + (lx + ly) * cs; if (y < y0 - Lg || y > y1 + Lg || x < x0 - Lg || x > x1 + Lg) continue; add(x, y, w, h, Math.PI / 4); } } }
    else if (pat === 'basket') { const Lg = 200 * K, W = 100 * K, S = Lg + J; for (let y = y0, r = 0; y < y1 + S; y += S, r++) for (let x = x0 - S, c = 0; x < x1 + S; x += S, c++) { const hor = (r + c) % 2 === 0;
      for (let q = 0; q < 2; q++) add(hor ? x + Lg / 2 : x + W / 2 + q * (W + J), hor ? y + W / 2 + q * (W + J) : y + Lg / 2, hor ? Lg : W, hor ? W : Lg, 0); } }
    else if (pat === 'cobble') { let s = 17; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; for (let y = y0; y < y1 + 130 * K;) { const rh = (95 + r() * 25) * K; let x = x0 - 60 * K - r() * 80 * K;
      while (x < x1 + 130 * K) { const w = (85 + r() * 40) * K; add(x + w / 2, y + rh / 2 + (r() - .5) * 6 * K, w - 9 * K, rh - 9 * K, (r() - .5) * .07, 2); x += w; } y += rh; } opt.kind = 1; }
    else if (pat === 'arcs') { const R0 = 90 * K, step = 112 * K, aw = (x1 - x0) / 5; for (let y = y0 - aw; y < y1 + aw; y += step) for (let a = 0; a < 5 + 2; a++) { const acx = x0 + (a - .5) * aw;
      for (let rr = R0; rr < aw * .55; rr += step) { const n = Math.max(3, Math.round(Math.PI * rr / (110 * K))); for (let k = 0; k <= n; k++) { const ang = Math.PI + Math.PI * k / n; add(acx + Math.cos(ang) * rr, y - Math.sin(ang) * rr, 100 * K, 92 * K, ang, 2); } } } opt.kind = 1; }
    else if (pat === 'wielkie') { const S2 = 800 * K; for (let y = y0; y < y1 + S2; y += S2 + 6 * K) for (let x = x0 - S2; x < x1 + S2; x += S2 + 6 * K) add(x + S2 / 2, y + S2 / 2, S2, S2, 0, 1); }
    if (opt.kind) out.forEach(s => { s.kind = opt.kind; }); return out; }
  function wzdluz(pts, pal, opt) { opt = opt || {}; const out = [], P = PAL[pal] || PAL.grafit, Lg = (opt.L || 200) * K, W = (opt.W || 100) * K, J = 4 * K;
    for (let i = 0; i < pts.length - 1; i++) { const [ax, ay] = pts[i], [bx, by] = pts[i + 1]; const len = Math.hypot(bx - ax, by - ay); if (len < 1) continue; const ux = (bx - ax) / len, uy = (by - ay) / len, ang = Math.atan2(uy, ux);
      for (let s = 0; s < len - Lg * .3; s += Lg + J) { const l = Math.min(Lg, len - s); const cx = ax + ux * (s + l / 2), cy = ay + uy * (s + l / 2);
        out.push({ x: cx, y: cy, w: l, h: W, rot: ang, col: P[(hash(cx | 0, cy | 0) * P.length) | 0], shape: 1, kind: opt.kind || 0, tx: hash(cx | 0, 1) * 900, ty: hash(cy | 0, 2) * 900 }); } }
    return out; }

  /* ---------- plan jednej sekcji we własnych współrzędnych (góra sekcji = 0) ----------
     Każda sekcja to zamknięte pole ekspozycyjne: pas trawy u góry i u dołu, krawężnik dookoła, wzór w środku.
     Dzięki temu sekcje nie są „ucięte” – między nimi zawsze leży trawa. */
  const dimNoc = n => [.36 - .22 * n, .17 - .1 * n];
  function planSekcji(el, w, h, idx) {
    const marg = MOB() ? 14 : Math.max(60, w * .07), G = MOB() ? 18 : 30, pat = el.dataset.wzor || 'herring', pal = el.dataset.kolor || 'grafit', ob = el.dataset.obrzeze || 'grafit';
    const x0 = marg, x1 = w - marg, ix0 = x0 + 102 * K, iy0 = G + 102 * K, ix1 = x1 - 102 * K, iy1 = h - G - 102 * K;
    const reg = [[w / 2, h / 2, w + 400, h + 400, 0, 1, -1e9, 0], [(x0 + x1) / 2, h / 2, x1 - x0 + 24, h - 2 * G + 12, 4, 0, -1e9, 0]];
    const clip = new Float32Array(64); clip.set([ix0, iy0, ix1, iy1], 4);
    const ty = G + 50 * K, by = h - G - 50 * K;
    const kraw = [...wzdluz([[x0, ty], [x1, ty]], ob), ...wzdluz([[x0 + 50 * K, G + 100 * K], [x0 + 50 * K, h - G - 100 * K]], ob), ...wzdluz([[x1 - 50 * K, G + 100 * K], [x1 - 50 * K, h - G - 100 * K]], ob), ...wzdluz([[x0, by], [x1, by]], ob)];
    kraw.forEach(s => { s.key = s.y - 60; s.jit = hash(s.x | 0, 2); });
    const pole = wzor(pat, pal, [ix0 - 60, iy0 - 60, ix1 + 60, iy1 + 60], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < iy1 + 70 * K);
    pole.forEach(s => { s.clip = 1; s.key = s.y + hash(s.x | 0, s.y | 0) * 50; s.jit = hash(s.y | 0, s.x | 0); });
    const kw = kraw.concat(pole); kw.sort((a, b) => a.key - b.key);
    const ow = [], lampy = [];
    if (!MOB()) { for (let i = 0, yy = 240; yy < h - 120 || i === 0; i++, yy += 520) { const hz = hash(idx * 13 + i, 7), hz2 = hash(idx * 7 + i, 11);
        ow.push({ x: marg * .5 + (hz - .5) * marg * .3, y: yy, size: marg * (hz > .5 ? 2.6 : 1.4), idx: hz > .7 ? 2 : hz > .35 ? 0 : 4, h: hz > .35 ? 4 : 1.2 });
        ow.push({ x: w - marg * .5 + (hz2 - .5) * marg * .3, y: yy + 180, size: marg * (hz2 > .5 ? 2.4 : 1.3), idx: hz2 > .6 ? 1 : hz2 > .3 ? 3 : 7, h: hz2 > .3 ? 3.5 : .6 }); }
      if (el.dataset.lampy) for (let yy = 140; yy < h - 60; yy += 380) { ow.push({ x: marg * .62, y: yy, size: 58, idx: 5, h: .9 }, { x: w - marg * .62, y: yy + 190, size: 58, idx: 5, h: .9 }); lampy.push([marg * .62, yy, 250], [w - marg * .62, yy + 190, 250]); } }
    else if (el.dataset.lampy) for (let yy = 120; yy < h - 60; yy += 320) lampy.push([(yy / 320 | 0) % 2 ? w - 6 : 6, yy, 170]);
    ow.forEach(o => { o.key = o.y - 160; }); ow.sort((a, b) => a.key - b.key);
    // noc: data-noc="0>1" – od dnia u góry do nocy po ok. 600 px (bez twardej granicy między sekcjami)
    const nd = (el.dataset.noc || '0>0').split('>').map(Number), r1 = Math.min(650, h * .45), a = dimNoc(nd[0]), b = dimNoc(nd[1]);
    return { reg, clip, kw, ow, lampy, noc: [nd[0], nd[1], 0, r1], dim: [a[0], a[1], b[0], b[1], 0, r1] };
  }

  /* ---------- jedno płótno WebGL (R0) maluje wszystko: kawałki sekcji, Historię i przerywniki ----------
     Obraz trafia do zwykłych płócien na stronie (bitmaprenderer bez kopiowania, inaczej drawImage). */
  let HC = 1024, R0 = null, off = null, TRYB = 'bitmap', Dc = 1, raf = 0, ostScroll = 0;
  const SEK = [], KOL = new Set(), STAT = { n: 0, ms: 0, max: 0 };
  const teraz = () => performance.now() / 1000;
  const zywy = () => G.ready && R0 && !R0.zgubiony();
  function rysujDo(cel, sc, wCss) {
    const wp = Math.round(wCss * Dc), hp = Math.round(HC * Dc), h = Math.round(sc.h * Dc);
    if (off.width !== wp || off.height !== hp) { off.width = wp; off.height = hp; }
    sc.vp = [0, hp - h, wp, h]; R0.rysuj(sc);
    if (cel.cv.width !== wp || cel.cv.height !== hp) { cel.cv.width = wp; cel.cv.height = hp; if (TRYB !== 'bitmap') cel.ctx = null; }
    if (cel.cv.style.height !== HC + 'px') cel.cv.style.height = HC + 'px';
    if (TRYB === 'bitmap') (cel.ctx || (cel.ctx = cel.cv.getContext('bitmaprenderer'))).transferFromImageBitmap(off.transferToImageBitmap());
    else (cel.ctx || (cel.ctx = cel.cv.getContext('2d', { alpha: false }))).drawImage(off, 0, 0); }
  function wyczysc(cel) { cel.cv.width = 1; cel.cv.height = 1; if (TRYB === 'bitmap' && cel.ctx) cel.ctx.transferFromImageBitmap(null); else cel.ctx = null; }

  /* ---------- kawałki tła w sekcjach (po HC px, przewijają się ze stroną) ---------- */
  const IOS = new IntersectionObserver(es => es.forEach(e => { e.target._s.widac = e.isIntersecting; if (e.isIntersecting) budz(); }), { rootMargin: '100% 0px 100% 0px' });
  // blisko ekranu (1,5 ekranu): malować; daleko (2,5 ekranu): zwolnić pamięć
  const IO1 = new IntersectionObserver(es => es.forEach(e => { const c = e.target._k; c.blisko = e.isIntersecting; if (c.blisko && (c.brudny || !c.gotowy)) { KOL.add(c); budz(); } }), { rootMargin: '150% 0px 150% 0px' });
  const IO2 = new IntersectionObserver(es => es.forEach(e => { const c = e.target._k; if (e.isIntersecting || !c.gotowy) return; wyczysc(c); c.gotowy = false; }), { rootMargin: '250% 0px 250% 0px' });
  function przygotujSekcje(el, idx) {
    const box = document.createElement('div'); box.className = 'tlo-sek'; box.setAttribute('aria-hidden', 'true'); el.prepend(box);
    const s = { el, box, idx, w: 0, h: 0, top: 0, plan: null, kw: null, ow: null, kaw: [], lf: null, widac: false };
    new ResizeObserver(() => { clearTimeout(s.rT); s.rT = setTimeout(() => zmierz(s), 160); }).observe(el);
    el._s = s; IOS.observe(el); SEK.push(s); return s; }
  function zmierz(s, wymus) {
    if (!zywy()) return;
    const w = document.documentElement.clientWidth, h = Math.ceil(s.el.offsetHeight); if (!wymus && w === s.w && Math.abs(h - s.h) < 2) return;
    s.w = w; s.h = h; s.plan = planSekcji(s.el, w, h, s.idx); s.top = Math.round(s.el.getBoundingClientRect().top + scrollY);
    R0.usun(s.kw); R0.usun(s.ow); s.kw = R0.grupa(s.plan.kw, 16, rowK, 1e9); s.ow = R0.grupa(s.plan.ow, 8, rowO, 1e9);
    // to, co już było ułożone, leży od razu – bez ponownej animacji
    if (s.lf != null) { const t0 = teraz() - 10; R0.wyzwol(s.kw, s.lf, t0, 0); R0.wyzwol(s.ow, s.lf, t0, 0); }
    const n = Math.max(1, Math.ceil(h / HC));
    while (s.kaw.length > n) { const c = s.kaw.pop(); IO1.unobserve(c.cv); IO2.unobserve(c.cv); c.cv.remove(); KOL.delete(c); }
    for (let i = 0; i < n; i++) { let c = s.kaw[i];
      if (!c) { const cv = document.createElement('canvas'); cv.width = 1; cv.height = 1; s.box.appendChild(cv);
        c = { s, i, cv, ctx: null, gotowy: false, blisko: false, brudny: true, anim: 0 }; cv._k = c; s.kaw.push(c); IO1.observe(cv); IO2.observe(cv); }
      c.y = i * HC; c.cv.style.top = c.y + 'px'; c.cv.style.height = HC + 'px'; c.brudny = true; if (c.blisko) KOL.add(c); }
    budz(); }
  // czoło budowy: linia na 78 % (telefon, nad dolnym paskiem) albo 88 % (PC) wysokości ekranu – co ją minie, to się układa (nigdy z powrotem)
  function czolo(t) {
    const vh = innerHeight, FR = MOB() ? .78 : .88;
    for (const s of SEK) { if (!s.widac || !s.kw) continue;
      const lf = vh * FR - s.el.getBoundingClientRect().top;
      if (s.lf == null) { s.lf = lf; if (lf > 0) { const t0 = t - 10; R0.wyzwol(s.kw, lf, t0, 0); R0.wyzwol(s.ow, lf, t0, 0); } continue; }
      if (lf <= s.lf + .5) continue; s.lf = lf;
      let a = s.kw.ptr; if (R0.wyzwol(s.kw, lf, t, .22)) oznacz(s, s.kw.keys[a], s.kw.keys[s.kw.ptr - 1], t + .8);
      a = s.ow.ptr; if (R0.wyzwol(s.ow, lf, t, .15)) oznacz(s, s.ow.keys[a] + 160, s.ow.keys[s.ow.ptr - 1] + 160, t + .95); } }
  function oznacz(s, a, b, az) { for (const c of s.kaw) if (c.y < b + 420 && c.y + HC > a - 420) c.anim = Math.max(c.anim, az); }
  function budz() { if (!raf && G.ready) raf = requestAnimationFrame(klatka); }
  function klatka(now) {
    raf = 0; if (!zywy()) return; const t = now / 1000; czolo(t); let dalej = false, ile = 0;
    // kawałki, w których właśnie spadają kamienie: co klatkę
    for (const s of SEK) { if (!s.widac) continue; for (const c of s.kaw) if (c.anim > t) { dalej = true; if (c.blisko) { maluj(c, t); ile++; KOL.delete(c); } } }
    // reszta: jeden kawałek na klatkę, najpierw najbliższy ekranu
    if (KOL.size) { dalej = true; if (ile < 2) { const c = najblizszy(); if (c) { KOL.delete(c); maluj(c, t); } } }
    if (dalej || now - ostScroll < 300) raf = requestAnimationFrame(klatka); }
  function najblizszy() { const sr = innerHeight / 2; let best = null, bd = 1e12;
    for (const c of KOL) { if (!c.blisko) { KOL.delete(c); continue; } const r = c.cv.getBoundingClientRect(), d = r.bottom < 0 ? -r.bottom : r.top > innerHeight ? r.top - innerHeight : 0, dd = d * 10 + Math.abs(r.top + r.height / 2 - sr) * .01; if (dd < bd) { bd = dd; best = c; } }
    return best; }
  function maluj(c, t) {
    const s = c.s; if (!s.plan) return; const t1 = performance.now(), top = c.cv.getBoundingClientRect().top;
    rysujDo(c, { w: s.w, h: HC, scroll: c.y, texOff: s.top, stageOy: -1e5, t, reg: s.plan.reg, clip: s.plan.clip, kamienie: [s.kw], obiekty: [s.ow], lampy: s.plan.lampy, noc: s.plan.noc, vig: 0,
      persp: .055, perspO: 0, c: [s.w / 2, innerHeight / 2 - top], cul: true, dim: s.plan.dim }, s.w);
    c.gotowy = true; c.brudny = false; const d = performance.now() - t1; STAT.n++; STAT.ms += d; STAT.max = Math.max(STAT.max, d); }

  /* ---------- Historia: przyklejony etap, buduje się tylko do przodu ---------- */
  let E = null;
  function scena(inner, klasa) { const box = document.createElement('div'); box.className = klasa; box.setAttribute('aria-hidden', 'true'); const cv = document.createElement('canvas'); box.appendChild(cv); inner.prepend(box); return cv; }
  function przygotujEtap(el) {
    const inner = el.querySelector('.etap-wnetrze'); if (!inner) return;
    E = { el, inner, cv: scena(inner, 'etap-scena'), ctx: null, kadry: [...el.querySelectorAll('[data-od]')].map(k => ({ el: k, od: +k.dataset.od, do: +k.dataset.do })), faza: -1, t: [], p: 0, widac: false, aktywny: 0, w: 0, h: 0, ok: false };
    new IntersectionObserver(es => { E.widac = es[0].isIntersecting; if (E.widac) { postep(); petla(); } }, { rootMargin: '20% 0px' }).observe(el);
    addEventListener('scroll', () => { if (E.widac) { postep(); petla(); } }, { passive: true }); }
  function planEtapu() {
    const w = E.inner.clientWidth, h = E.inner.clientHeight; if (!w || !h || !zywy()) return; E.w = w; E.h = h;
    const marg = MOB() ? 14 : Math.max(60, w * .07), x0 = marg + (MOB() ? 0 : w * .06), x1 = w - x0, y0 = h * .16, y1 = h + 40;
    E.x0 = x0; E.x1 = x1; E.y0 = y0; E.y1 = y1;
    E.reg = [[w / 2, h / 2, w + 400, h + 400, 0, 1, -1e9, 1], [(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 40, y1 - y0 + 40, 10, 3, -1e9, 1], [(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 30, y1 - y0 + 30, 8, 2, 1e9, 1]];
    E.clip = new Float32Array(64); const ix0 = x0 + 52 * K, iy0 = y0 + 52 * K, ix1 = x1 - 52 * K; E.clip.set([ix0, iy0, ix1, 1e6], 15 * 4);
    const ks = wzdluz([[x0, y1], [x0, y0], [x1, y0], [x1, y1]], 'bianco', { L: 200, W: 100 }); ks.forEach((s, i) => { s.key = .32 + .12 * i / ks.length; s.grp = 1; s.jit = 0; });
    const pole = wzor('herring', 'grafit', [ix0 - 60, iy0 - 60, ix1 + 60, y1], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < y1 + 30), cx = (x0 + x1) / 2;
    pole.forEach(s => { s.clip = 15; const dd = (s.y - y0) / (y1 - y0) * .8 + Math.abs(s.x - cx) / (x1 - x0) * .4; s.key = .46 + .38 * clamp(dd, 0, 1) + hash(s.x | 0, s.y | 0) * .02; s.grp = 1; s.jit = hash(s.y | 0, s.x | 0); });
    ks.push(...pole); ks.sort((a, b) => a.key - b.key);
    const os = [];
    [[x0 - 40, y0 + (y1 - y0) * .35], [x1 + 40, y0 + (y1 - y0) * .35]].forEach(([x, y], i) => os.push({ x, y, size: 70, idx: 5, h: .9, grp: 1, key: .9 + i * .01 }));
    [[x0 - 90, y0 + 60, 2], [x1 + 90, y0 + 50, 0], [x0 - 120, y1 - 120, 3], [x1 + 110, y1 - 160, 3]].forEach(([x, y, k], i) => os.push({ x, y, size: k === 3 ? 150 : 330, idx: k, h: k === 3 ? .8 : 3.6, grp: 1, key: .05 + i * .02 }));
    os.sort((a, b) => a.key - b.key);
    R0.usun(E.ks); R0.usun(E.os); E.ks = R0.grupa(ks, 16, rowK, 1e9); E.os = R0.grupa(os, 8, rowO, 1e9);
    // to, co już zbudowane, zostaje (bez animacji)
    const t0 = teraz() - 10; if (E.klucz > 0) R0.wyzwol(E.ks, E.klucz, t0); if (E.pOb > 0) R0.wyzwol(E.os, E.pOb, t0); if (E.faza >= 1) E.reg[2][6] = E.t[1];
    E.ok = true; E.aktywny = teraz(); }
  function postep() {
    if (!E || !E.ok || !zywy()) return; const r = E.el.getBoundingClientRect(), vh = innerHeight, p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1); E.p = p;
    E.kadry.forEach(k => k.el.classList.toggle('on', p >= k.od && p < k.do)); document.documentElement.style.setProperty('--etap', p.toFixed(3));
    const t = teraz(), fz = p < .02 ? -1 : p < .16 ? 0 : p < .32 ? 1 : p < .46 ? 2 : p < .86 ? 3 : 4;
    if (fz > E.faza) { for (let f = E.faza + 1; f <= fz; f++) E.t[f] = t + (f - E.faza - 1) * .25; E.faza = fz; if (fz >= 1) E.reg[2][6] = E.t[1]; E.aktywny = t; }
    // tylko do przodu: zbudowane kamienie zostają, gdy przewijasz w górę
    const kl = E.faza >= 2 ? (E.faza >= 3 ? Math.min(.87, .46 + (p - .46) / .4 * .4 + .02) : Math.max(.45, p + .01)) : -1;
    if (kl > (E.klucz || -1)) { E.klucz = kl; if (R0.wyzwol(E.ks, kl, t)) E.aktywny = t; }
    if (p + .02 > (E.pOb || 0)) { E.pOb = p + .02; if (R0.wyzwol(E.os, E.pOb, t)) E.aktywny = t; } }
  let eRaf = 0;
  function petla() { if (!E || !E.ok || eRaf) return; eRaf = requestAnimationFrame(klatkaEtapu); }
  function klatkaEtapu(now) {
    eRaf = 0; if (!E.widac || !zywy()) return; const t = now / 1000;
    if (E.inner.clientWidth !== E.w || Math.abs(E.inner.clientHeight - E.h) > 120) planEtapu();
    const szb = [E.t[0] || 1e9, 1.6, E.faza >= 0 && E.faza < 3 ? 1 : E.faza >= 3 ? Math.max(0, 1 - (t - (E.t[3] || t)) / 1.2) : 0];
    rysujDo(E, { w: E.w, h: E.h, scroll: 0, stageOy: 0, t, reg: E.reg, clip: E.clip, kamienie: [E.ks], obiekty: [E.os], lampy: [], noc: 0, vig: 1, persp: .055,
      sz: [(E.x0 + E.x1) / 2, (E.y0 + E.y1) / 2, E.x1 - E.x0, E.y1 - E.y0], szb }, E.w);
    if (t - E.aktywny < 1.6 || szb[2] > 0 && szb[2] < 1) eRaf = requestAnimationFrame(klatkaEtapu); }

  /* ---------- Przerywnik „Koło”: strona na chwilę staje, kamienie układają się w koło wokół znaku GardenBruk ---------- */
  const KOLA = [];
  function przygotujKolo(el) {
    const inner = el.querySelector('.kolo-wnetrze'); if (!inner) return;
    const Q = { el, inner, cv: scena(inner, 'kolo-scena'), ctx: null, ok: false, widac: false, kl: -1, t0: 0, aktywny: 0, raf: 0, w: 0, h: 0, znak: inner.querySelector('.kolo-znak'), napis: inner.querySelector('.kolo-napis') };
    new IntersectionObserver(es => { Q.widac = es[0].isIntersecting; if (Q.widac) { if (!Q.ok && zywy()) planKola(Q); ruchKola(Q); } }, { rootMargin: '120% 0px 120% 0px' }).observe(el);
    addEventListener('scroll', () => { if (Q.widac && Q.ok) ruchKola(Q); }, { passive: true });
    KOLA.push(Q); }
  function planKola(Q) {
    const w = Q.inner.clientWidth, h = Q.inner.clientHeight; if (!w || !h || !zywy()) return; Q.w = w; Q.h = h;
    const cx = w / 2, cy = h / 2, kk = MOB() ? .24 : .32, J = 4 * kk, step = 100 * kk + J;
    const rz = (Q.znak ? Q.znak.offsetWidth / 2 : 60) + 12, rmax = Math.hypot(w, h) / 2 * .93, N = Math.max(4, Math.ceil((rmax - rz) / step));
    const kol = (Q.el.dataset.kolory || 'grafit,bianco,piaskowy').split(','), kind = +(Q.el.dataset.granit || 0), list = [];
    for (let i = 0; i < N; i++) { const r = rz + (i + .5) * step, n = Math.max(8, Math.round(2 * Math.PI * r / (step * 1.45))), da = 2 * Math.PI / n, a0 = i * .37;
      const pal = i === 0 || i % 5 === 3 ? kol[1] : i >= N - 2 ? kol[2] : kol[0], P = PAL[pal] || PAL.grafit, sz = 2 * Math.PI * r / n - J;
      for (let k = 0; k < n; k++) { const a = a0 + k * da, x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
        if (x < -step || x > w + step || y < -step || y > h + step) continue;
        list.push({ x, y, w: sz, h: step - J, rot: a + Math.PI / 2, col: P[(hash(i * 131 + k, 7) * P.length) | 0], shape: kind ? 2 : 0, kind, tx: hash(i, k) * 900, ty: hash(k, i) * 900, jit: hash(k, i * 3), grp: 1, key: (i + k / n) / N }); } }
    list.sort((a, b) => a.key - b.key);
    R0.usun(Q.ks); Q.ks = R0.grupa(list, 16, rowK, 1e9);
    if (Q.kl > 0) R0.wyzwol(Q.ks, Q.kl, teraz() - 10, 0);
    Q.reg = [[w / 2, h / 2, w + 400, h + 400, 0, 1, -1e9, 1], [cx, cy, 2 * rmax, 2 * rmax, rmax, 0, -1e9, 1]]; Q.clip = new Float32Array(64);
    // trawa w tle sekcji leży w tym samym rastrze co trawa na placach (bez szwu)
    const top = Math.round(Q.el.getBoundingClientRect().top + scrollY); Q.el.style.setProperty('--trawa-y', (-(top % 360)) + 'px');
    Q.ok = true; Q.aktywny = teraz(); }
  function krokKola(Q, t) {
    const r = Q.el.getBoundingClientRect(), vh = innerHeight, p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
    if (!Q.t0 && r.top < vh * .7) Q.t0 = t;   // zaczyna się układać, gdy koło wjeżdża na ekran
    // koło układa się samo w ok. 2 s, przewijanie może je przyspieszyć; raz ułożone zostaje
    const kl = Math.min(1.2, Math.max(Q.kl, p * 1.3, Q.t0 ? (t - Q.t0) / 2 : -1));
    if (kl > Q.kl) { Q.kl = kl; if (R0.wyzwol(Q.ks, kl, RM ? t - 10 : t, .1)) Q.aktywny = t; }
    if (Q.kl > .03 && Q.znak) Q.znak.classList.add('on'); if (Q.kl > .7 && Q.napis) Q.napis.classList.add('on'); }
  function ruchKola(Q) { if (Q.ok && !Q.raf) Q.raf = requestAnimationFrame(n => klatkaKola(Q, n)); }
  function klatkaKola(Q, now) {
    Q.raf = 0; if (!Q.widac || !Q.ok || !zywy()) return; const t = now / 1000;
    if (Q.inner.clientWidth !== Q.w || Math.abs(Q.inner.clientHeight - Q.h) > 120) planKola(Q);
    krokKola(Q, t);
    rysujDo(Q, { w: Q.w, h: Q.h, scroll: 0, stageOy: 0, t, reg: Q.reg, clip: Q.clip, kamienie: [Q.ks], obiekty: [], lampy: [], noc: 0, vig: 1, persp: .055 }, Q.w);
    if ((Q.t0 && Q.kl < 1.2) || t - Q.aktywny < .8) Q.raf = requestAnimationFrame(n => klatkaKola(Q, n)); }

  /* ---------- „wyrasta”: kafle i płyty pojawiają się, gdy wjeżdżają w ekran ---------- */
  function wyrastanie() { const els = document.querySelectorAll('[data-dziura], .kafel'); if (RM) { els.forEach(e => e.classList.add('wyrasta')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('wyrasta'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -4% 0px' });
    els.forEach(e => io.observe(e));
    let cz = 0; new MutationObserver(() => { if (cz) return; cz = requestAnimationFrame(() => { cz = 0; document.querySelectorAll('[data-dziura]:not(.wyrasta), .kafel:not(.wyrasta)').forEach(e => io.observe(e)); }); }).observe(document.querySelector('main') || document.body, { childList: true, subtree: true }); }

  /* ---------- karta graficzna: zakładanie, utrata kontekstu (np. po przełączeniu aplikacji na telefonie), odbudowa ---------- */
  function noweGL() {
    R0 = null; TRYB = 'bitmap';
    try { if (typeof OffscreenCanvas === 'function' && !/[?&]gl2d\b/.test(location.search) && document.createElement('canvas').getContext('bitmaprenderer')) { off = new OffscreenCanvas(16, 16); if (typeof off.transferToImageBitmap === 'function') R0 = Renderer(off); } } catch (e) { R0 = null; }
    if (!R0) { TRYB = '2d'; off = document.createElement('canvas'); R0 = Renderer(off); }
    if (!R0) return false;
    const zgub = e => { e.preventDefault && e.preventDefault(); G.ready = false; clearTimeout(G.lT); G.lT = setTimeout(() => { if (!R0 || R0.zgubiony()) odbuduj(true); }, 2500); };
    const wroc = () => { clearTimeout(G.lT); odbuduj(false); };
    ['webglcontextlost', 'contextlost'].forEach(n => off.addEventListener(n, zgub, false)); ['webglcontextrestored', 'contextrestored'].forEach(n => off.addEventListener(n, wroc, false));
    return true; }
  function odbuduj(nowy) {
    G.ready = false; clearTimeout(G.lT); G.lT = 0;
    if (nowy) { if (!noweGL()) return; } else { const r = Renderer(off); if (!r) { if (!noweGL()) return; } else R0 = r; }
    R0.gotowe.then(() => { G.ready = true; odswiez(true); }); }
  // po powrocie do karty albo po odbudowie: wszystko, co jest blisko, maluje się od nowa
  function odswiez(nowe) {
    if (!zywy()) return;
    SEK.forEach(s => { if (nowe) { s.kw = s.ow = null; zmierz(s, true); } else s.kaw.forEach(c => { c.brudny = true; if (c.blisko) KOL.add(c); }); });
    if (E) { if (nowe || !E.ok) { E.ks = E.os = null; planEtapu(); } E.aktywny = teraz(); petla(); }
    KOLA.forEach(Q => { if (nowe && Q.ok) { Q.ks = null; planKola(Q); } Q.aktywny = teraz(); ruchKola(Q); });
    budz(); }

  /* ---------- start ---------- */
  const skala = () => { Dc = Math.min(devicePixelRatio || 1, MOB() ? 1.5 : 1.25); K = MOB() ? .2 : innerWidth > 1700 ? .34 : .3; HC = Math.max(1024, Math.ceil(innerHeight / 64) * 64); };
  function start() {
    if (!noweGL()) { document.documentElement.classList.add('bez-gl'); document.querySelectorAll('.kafel, [data-dziura]').forEach(e => e.classList.add('wyrasta')); document.querySelectorAll('.kolo-znak, .kolo-napis').forEach(e => e.classList.add('on')); return; }
    G.ok = true; wyrastanie(); skala();
    const sekcje = [...document.querySelectorAll('[data-strefa="plac"]')].map(przygotujSekcje);
    const et = document.querySelector('[data-strefa="etap"]'); if (et) przygotujEtap(et);
    document.querySelectorAll('[data-strefa="kolo"]').forEach(przygotujKolo);
    addEventListener('scroll', () => { ostScroll = performance.now(); budz(); }, { passive: true });
    R0.gotowe.then(() => { G.ready = true; sekcje.forEach(s => zmierz(s, true)); if (E) { planEtapu(); postep(); petla(); } KOLA.forEach(Q => { if (Q.widac) { planKola(Q); ruchKola(Q); } }); budz(); dispatchEvent(new Event('swiat9')); });
    let ukryta = 0;
    document.addEventListener('visibilitychange', () => { if (document.visibilityState !== 'visible') { ukryta = performance.now(); return; }
      setTimeout(() => { if (!R0 || R0.zgubiony()) { if (!G.lT) odbuduj(true); } else if (performance.now() - ukryta > 800) odswiez(false); }, 250); });
    let lw = innerWidth;
    addEventListener('resize', () => { if (Math.abs(innerWidth - lw) < 2) return; lw = innerWidth; clearTimeout(G.rT); G.rT = setTimeout(() => { skala(); SEK.forEach(s => zmierz(s, true)); if (E && E.ok) { planEtapu(); petla(); } KOLA.forEach(Q => { if (Q.ok) { planKola(Q); ruchKola(Q); } }); }, 220); });
  }
  // Wzory: nowy wzór kładzie się falą od środka ekranu (stary znika, nowe kamienie spadają)
  G.ustawWzor = (id, pat, pal) => { const s = SEK.find(q => q.el.id === id); if (!s || !zywy() || !s.plan) return; s.el.dataset.wzor = pat; if (pal) s.el.dataset.kolor = pal;
    const lf = s.lf; s.lf = null; zmierz(s, true); s.lf = lf; if (lf == null) return;
    const t = teraz(), g = s.kw, L = s.plan.kw, top = s.el.getBoundingClientRect().top, cx = s.w / 2, cy = clamp(innerHeight / 2 - top, 0, s.h), R = Math.hypot(s.w, Math.min(s.h, innerHeight * 1.4)) * .5;
    let n = 0; for (let i = 0; i < g.n && g.keys[i] <= lf; i++) { const q = L[i]; g.trig[i] = RM ? t - 10 : t + Math.min(1.1, Math.hypot(q.x - cx, q.y - cy) / R) + hash(i, 5) * .12; n = i + 1; }
    g.ptr = n; R0.wgrajTrig(g); R0.wyzwol(s.ow, lf, t - 10, 0);
    s.kaw.forEach(c => { c.anim = t + 1.8; }); budz(); };
  G.przebuduj = () => { SEK.forEach(s => zmierz(s, true)); };
  G.test = { zgub: () => { const x = R0 && R0.gl.getExtension('WEBGL_lose_context'); x && x.loseContext(); return !!x; }, wroc: () => { const x = R0 && R0.gl.getExtension('WEBGL_lose_context'); x && x.restoreContext(); } };
  G.info = () => ({ tryb: TRYB, gotowy: G.ready, zgubiony: R0 ? R0.zgubiony() : null, HC, stat: { n: STAT.n, sr: +(STAT.ms / Math.max(1, STAT.n)).toFixed(2), max: +STAT.max.toFixed(1) }, sekcje: SEK.length, kawalki: SEK.reduce((a, s) => a + s.kaw.length, 0), gotowe: SEK.reduce((a, s) => a + s.kaw.filter(c => c.gotowy).length, 0),
    kolejka: KOL.size, anim: SEK.reduce((a, s) => a + s.kaw.filter(c => c.anim > teraz()).length, 0), ulozone: SEK.map(s => s.kw ? s.kw.ptr + '/' + s.kw.n : '-').join(' '), Dc, K, etap: E && { p: E.p, faza: E.faza }, kola: KOLA.map(Q => +Q.kl.toFixed(2)) });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
