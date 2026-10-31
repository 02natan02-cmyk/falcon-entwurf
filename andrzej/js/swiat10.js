/* GardenBruk v10 – tło strony.
   Każda sekcja ma własny, nieruchomy plac z kostki, który przewija się razem ze stroną (zwykły element w sekcji).
   Plac rysuje raz karta graficzna (WebGL2, te same shadery co v9) w niewidocznym płótnie i kopiuje go do kawałków
   (płótna po 1024 px) wewnątrz sekcji. Przy przewijaniu nic się nie liczy i nic się nie przebudowuje.
   Historia (przyklejony etap) ma własne płótno i buduje podjazd tylko do przodu – nic nie odlatuje. */
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
precision highp float; in vec2 vP; out vec4 o; uniform float uNoc; uniform vec2 uRes;
uniform vec4 uLamp[24]; uniform int uNL; uniform float uScroll; uniform float uTryb;
void main(){ vec3 m = mix(vec3(1.), vec3(.2, .24, .36), uNoc); vec3 add = vec3(0.); vec3 zar = vec3(0.);
  for (int i = 0; i < 24; i++) { if (i >= uNL) break; vec4 L = uLamp[i]; vec2 p = vec2(L.x, L.y - uScroll); float d = length(vP - p) / L.z; add += vec3(1., .8, .46) * (exp(-d * d * 2.4) + .55 * exp(-d * d * 16.)) * L.w; float q = length(vP - p) / 30.; zar += vec3(1., .86, .6) * exp(-q * q) * L.w; }
  vec3 c = m + add * uNoc * 1.05; o = uTryb < .5 ? vec4(min(c, vec3(1.)), 1.) : uTryb < 1.5 ? vec4(max(c - 1., vec3(0.)), 1.) : vec4(zar * uNoc * .9, 1.); }`;

  /* ---------- renderer: jedno płótno WebGL2 z programami, teksturami i grupami instancji ---------- */
  function Renderer(cv, zachowaj) {
    const gl = cv.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: true, preserveDrawingBuffer: !!zachowaj, powerPreference: 'high-performance' });
    if (!gl) return null;
    function prog(vs, fs) { const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; };
      const p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      const u = {}; const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); for (let i = 0; i < n; i++) { const a = gl.getActiveUniform(p, i); u[a.name.replace('[0]', '')] = gl.getUniformLocation(p, a.name); } return { p, u }; }
    let PK, PG, PO, PN;
    try { PK = prog(VS_K, FS_K); PG = prog(VS_Q, FS_GRUNT); PO = prog(VS_O, FS_O); PN = prog(VS_Q, FS_NOC); } catch (e) { console.warn('Swiat10', e.message); return null; }
    // tekstury (każde płótno ma własne)
    const PLIKI = [['B', 'img/hd/beton.webp', 0, true], ['G', 'img/hd/granit.webp', 1, true], ['E', 'img/hd/erde.webp', 2, true], ['S', 'img/hd/sand.webp', 3, true], ['L', 'img/hd/trawa.webp', 4, true], ['O', 'img/hd/obiekty.webp', 5, false]];
    const an = gl.getExtension('EXT_texture_filter_anisotropic');
    const gotowe = Promise.all(PLIKI.map(([name, src, unit, wrap]) => new Promise(res => { const t = gl.createTexture(), im = new Image(); im.decoding = 'async';
      im.onload = () => { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im); gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        const w = wrap ? gl.REPEAT : gl.CLAMP_TO_EDGE; gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, w); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, w);
        if (an && (name === 'B' || name === 'G')) gl.texParameterf(gl.TEXTURE_2D, an.TEXTURE_MAX_ANISOTROPY_EXT, 4); res(); };
      im.onerror = () => res(); im.src = src; })));
    const quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const qVao = gl.createVertexArray(); gl.bindVertexArray(qVao); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0); gl.bindVertexArray(null);
    // grupa instancji: kamienie (16 liczb) albo obiekty (8 liczb); trig = czas startu (0 = już leży)
    function grupa(list, stride, toRow, trig0) {
      const g = { vao: gl.createVertexArray(), buf: gl.createBuffer(), tb: gl.createBuffer(), n: list.length, stride, ptr: 0 };
      const d = new Float32Array(Math.max(1, list.length) * stride); list.forEach((s, i) => toRow(s, d, i * stride)); g.data = d;
      g.keys = new Float32Array(list.map(s => s.key)); g.trig = new Float32Array(Math.max(1, list.length)).fill(trig0);
      gl.bindVertexArray(g.vao); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); gl.bufferData(gl.ARRAY_BUFFER, d, gl.STATIC_DRAW);
      const locs = stride === 16 ? [[1, 0], [2, 4], [3, 8], [4, 12]] : [[1, 0], [2, 4]];
      for (const [l, o] of locs) { gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 4, gl.FLOAT, false, stride * 4, o * 4); gl.vertexAttribDivisor(l, 1); }
      gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferData(gl.ARRAY_BUFFER, g.trig, gl.DYNAMIC_DRAW); gl.enableVertexAttribArray(5); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, 0); gl.vertexAttribDivisor(5, 1);
      gl.bindVertexArray(null); return g; }
    function usun(g) { if (!g) return; gl.deleteBuffer(g.buf); gl.deleteBuffer(g.tb); gl.deleteVertexArray(g.vao); }
    // wyzwól: kamienie z kluczem ≤ k dostają czas startu t (tylko do przodu)
    function wyzwol(g, k, t, rozrzut) { if (!g || !g.n) return false; let i = g.ptr; if (i >= g.n || g.keys[i] > k) return false; const s = i;
      while (i < g.n && g.keys[i] <= k) { g.trig[i] = t + (RM ? 0 : hash(i, 3) * (rozrzut || .18)); i++; }
      g.ptr = i; gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.bufferSubData(gl.ARRAY_BUFFER, s * 4, g.trig.subarray(s, i)); return true; }
    const R = new Float32Array(160), RB = new Float32Array(160), H = new Float32Array(96).fill(0), L = new Float32Array(96);
    for (let i = 0; i < 24; i++) H[i * 4] = 1e9;
    function rysujGrupe(g, y0, y1) { if (!g || !g.n) return; let a = 0, b = g.n;
      if (y1 != null) { const k = g.keys; let lo = 0, hi = g.n; while (lo < hi) { const m = (lo + hi) >> 1; if (k[m] < y0 - 420) lo = m + 1; else hi = m; } a = lo; lo = a; hi = g.n; while (lo < hi) { const m = (lo + hi) >> 1; if (k[m] < y1 + 420) lo = m + 1; else hi = m; } b = lo; if (b <= a) return; }
      gl.bindVertexArray(g.vao); const st = g.stride * 4; const locs = g.stride === 16 ? [[1, 0], [2, 16], [3, 32], [4, 48]] : [[1, 0], [2, 16]];
      gl.bindBuffer(gl.ARRAY_BUFFER, g.buf); for (const [l, o] of locs) gl.vertexAttribPointer(l, 4, gl.FLOAT, false, st, a * st + o);
      gl.bindBuffer(gl.ARRAY_BUFFER, g.tb); gl.vertexAttribPointer(5, 1, gl.FLOAT, false, 4, a * 4);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, b - a); }
    // jedna klatka: sc = { w, h, scroll, stageOy, t, reg, clip, kamienie, obiekty, lampy, noc, vig, sz, szb, vp:[x,y,w,h], cul }
    function rysuj(sc) {
      const vp = sc.vp || [0, 0, cv.width, cv.height]; gl.viewport(vp[0], vp[1], vp[2], vp[3]); gl.disable(gl.DEPTH_TEST);
      const ust = P => { gl.uniform2f(P.u.uRes, sc.w, sc.h); if (P.u.uScroll) gl.uniform1f(P.u.uScroll, sc.scroll); if (P.u.uStageOy) gl.uniform1f(P.u.uStageOy, sc.stageOy); if (P.u.uTime) gl.uniform1f(P.u.uTime, sc.t); if (P.u.uPersp) gl.uniform1f(P.u.uPersp, sc.persp || 0); };
      gl.disable(gl.BLEND); gl.useProgram(PG.p); ust(PG); gl.uniform1i(PG.u.uTE, 2); gl.uniform1i(PG.u.uTS, 3); gl.uniform1i(PG.u.uTL, 4); gl.uniform1f(PG.u.uVig, sc.vig || 0); gl.uniform1f(PG.u.uTexOff, sc.texOff || 0);
      let nr = 0; R.fill(0); RB.fill(0);
      for (const g of sc.reg) { const top = g[7] > .5 ? sc.stageOy + g[1] - g[3] / 2 : g[1] - g[3] / 2 - sc.scroll; if (top + g[3] < -40 || top > sc.h + 40 || nr >= 40) continue; R.set(g.slice(0, 4), nr * 4); RB.set([g[4], g[5], g[6], g[7]], nr * 4); nr++; }
      gl.uniform4fv(PG.u.uR, R); gl.uniform4fv(PG.u.uRB, RB); gl.uniform1i(PG.u.uNR, nr);
      if (sc.sz) { gl.uniform4f(PG.u.uSz, sc.sz[0], sc.sz[1], sc.sz[2], sc.sz[3]); gl.uniform4f(PG.u.uSzB, sc.szb[0], sc.szb[1], sc.szb[2], 0); } else gl.uniform4f(PG.u.uSzB, 0, 0, 0, 0);
      gl.bindVertexArray(qVao); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      const noc = sc.noc || 0, sun = 1 - noc * .7, y0 = sc.cul ? sc.scroll : null, y1 = sc.cul ? sc.scroll + sc.h : null;
      gl.useProgram(PK.p); ust(PK); gl.uniform1i(PK.u.uTB, 0); gl.uniform1i(PK.u.uTG, 1); gl.uniform4fv(PK.u.uHole, H); gl.uniform4fv(PK.u.uClip, sc.clip);
      gl.uniform1f(PK.u.uAmb, .44 - noc * .18); gl.uniform1f(PK.u.uSun, sun); gl.uniform3f(PK.u.uLd, -.42, -.55, .72);
      for (const sh of [1, 0]) { gl.uniform1f(PK.u.uShadow, sh); for (const g of sc.kamienie) rysujGrupe(g, y0, y1); }
      gl.useProgram(PO.p); ust(PO); gl.uniform1i(PO.u.uTO, 5); gl.uniform1f(PO.u.uAmb, .44 - noc * .18); gl.uniform1f(PO.u.uSun, sun);
      for (const sh of [1, 0]) { gl.uniform1f(PO.u.uShadow, sh); for (const g of sc.obiekty) rysujGrupe(g, y0, y1); }
      if (noc > .001) { gl.blendFunc(gl.DST_COLOR, gl.ZERO); gl.useProgram(PN.p); gl.uniform2f(PN.u.uRes, sc.w, sc.h); gl.uniform1f(PN.u.uScroll, sc.scroll); gl.uniform1f(PN.u.uNoc, noc);
        L.fill(0); const lm = (sc.lampy || []).slice(0, 24); lm.forEach((l, i) => L.set([l[0], l[1], l[2], 1], i * 4));
        gl.uniform4fv(PN.u.uLamp, L); gl.uniform1i(PN.u.uNL, lm.length); gl.bindVertexArray(qVao); gl.uniform1f(PN.u.uTryb, 0); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (lm.length) { gl.blendFunc(gl.DST_COLOR, gl.ONE); gl.uniform1f(PN.u.uTryb, 1); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); gl.blendFunc(gl.ONE, gl.ONE); gl.uniform1f(PN.u.uTryb, 2); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); } }
      gl.bindVertexArray(null); }
    return { gl, cv, gotowe, grupa, usun, wyzwol, rysuj };
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

  /* ---------- plan jednej sekcji we własnych współrzędnych (góra sekcji = 0) ---------- */
  function planSekcji(el, w, h, idx) {
    const marg = MOB() ? 14 : Math.max(60, w * .07), pat = el.dataset.wzor || 'herring', pal = el.dataset.kolor || 'grafit', ob = el.dataset.obrzeze || 'grafit';
    const x0 = marg, x1 = w - marg, ix0 = x0 + 102 * K, iy0 = 102 * K, ix1 = x1 - 102 * K;
    const reg = [[w / 2, h / 2, w + 4, h + 8, 0, 1, -1e9, 0], [(x0 + x1) / 2, h / 2, x1 - x0 + 24, h + 8, 4, 0, -1e9, 0]];
    const clip = new Float32Array(64); clip.set([ix0, iy0, ix1, h + 2], 4);
    const kw = [...wzdluz([[x0, 50 * K], [x1, 50 * K]], ob), ...wzdluz([[x0 + 50 * K, 0], [x0 + 50 * K, h]], ob), ...wzdluz([[x1 - 50 * K, 0], [x1 - 50 * K, h]], ob)];
    const pole = wzor(pat, pal, [ix0 - 60, iy0 - 60, ix1 + 60, h + 40], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < h + 30); pole.forEach(s => { s.clip = 1; });
    kw.push(...pole); kw.forEach(s => { s.key = s.y; s.jit = hash(s.y | 0, s.x | 0); }); kw.sort((a, b) => a.key - b.key);
    const ow = [], lampy = [];
    if (!MOB()) { for (let i = 0, yy = 240; yy < h - 120 || i === 0; i++, yy += 520) { const hz = hash(idx * 13 + i, 7), hz2 = hash(idx * 7 + i, 11);
        ow.push({ x: marg * .5 + (hz - .5) * marg * .3, y: yy, size: marg * (hz > .5 ? 2.6 : 1.4), idx: hz > .7 ? 2 : hz > .35 ? 0 : 4, h: hz > .35 ? 4 : 1.2 });
        ow.push({ x: w - marg * .5 + (hz2 - .5) * marg * .3, y: yy + 180, size: marg * (hz2 > .5 ? 2.4 : 1.3), idx: hz2 > .6 ? 1 : hz2 > .3 ? 3 : 7, h: hz2 > .3 ? 3.5 : .6 }); }
      if (el.dataset.lampy) for (let yy = 140; yy < h - 60; yy += 380) { ow.push({ x: marg * .62, y: yy, size: 58, idx: 5, h: .9 }, { x: w - marg * .62, y: yy + 190, size: 58, idx: 5, h: .9 }); lampy.push([marg * .62, yy, 250], [w - marg * .62, yy + 190, 250]); } }
    else if (el.dataset.lampy) for (let yy = 120; yy < h - 60; yy += 320) lampy.push([(yy / 320 | 0) % 2 ? w - 6 : 6, yy, 170]);
    ow.forEach(o => { o.key = o.y; }); ow.sort((a, b) => a.key - b.key);
    const noc = el.classList.contains('ciemna') ? 1 : el.dataset.lampy ? .7 : 0;
    return { reg, clip, kw, ow, lampy, noc };
  }

  /* ---------- kawałki tła w sekcjach ---------- */
  const HC = 1024, SEK = [], KOL = new Set();
  let R0 = null, offCv = null, Dc = 1, szer = 0, pracuje = false;
  function przygotujSekcje(el, idx) {
    const box = document.createElement('div'); box.className = 'tlo-sek'; box.setAttribute('aria-hidden', 'true'); el.prepend(box);
    const P = PAL[el.dataset.kolor] || PAL.grafit; box.style.backgroundColor = P[0];
    const s = { el, box, idx, w: 0, h: 0, plan: null, kw: null, ow: null, kaw: [], wzor: el.dataset.wzor };
    new ResizeObserver(() => { clearTimeout(s.rT); s.rT = setTimeout(() => zmierz(s), 160); }).observe(el);
    SEK.push(s); return s; }
  function zmierz(s, wymus) {
    const w = document.documentElement.clientWidth, h = Math.ceil(s.el.offsetHeight); if (!wymus && w === s.w && Math.abs(h - s.h) < 2) return;
    s.w = w; s.h = h; s.plan = planSekcji(s.el, w, h, s.idx); s.top = Math.round(s.el.getBoundingClientRect().top + scrollY);
    R0.usun(s.kw); R0.usun(s.ow); s.kw = R0.grupa(s.plan.kw, 16, rowK, 0); s.ow = R0.grupa(s.plan.ow, 8, rowO, 0);
    const n = Math.max(1, Math.ceil(h / HC));
    while (s.kaw.length > n) { const c = s.kaw.pop(); IO1.unobserve(c.cv); IO2.unobserve(c.cv); c.cv.remove(); KOL.delete(c); }
    for (let i = 0; i < n; i++) { let c = s.kaw[i];
      if (!c) { const cv = document.createElement('canvas'); cv.width = 0; cv.height = 0; s.box.appendChild(cv); c = { s, i, cv, ctx: null, gotowy: false, blisko: false }; cv._k = c; s.kaw.push(c); IO1.observe(cv); IO2.observe(cv); }
      c.y = i * HC; c.h = Math.min(HC, h - i * HC); c.cv.style.top = c.y + 'px'; if (!c.gotowy) c.cv.style.height = c.h + 'px'; c.brudny = true; if (c.blisko) KOL.add(c); }
    plan(); }
  // blisko ekranu (1,5 ekranu przed i za): rysuj; daleko (2,5 ekranu): zwolnij pamięć
  const IO1 = new IntersectionObserver(es => es.forEach(e => { const c = e.target._k; c.blisko = e.isIntersecting; if (c.blisko && (c.brudny || !c.gotowy)) { KOL.add(c); plan(); } }), { rootMargin: '150% 0px 150% 0px' });
  const IO2 = new IntersectionObserver(es => es.forEach(e => { const c = e.target._k; if (!e.isIntersecting && c.gotowy) { c.cv.width = 0; c.cv.height = 0; c.ctx = null; c.gotowy = false; c.cv.classList.remove('ok'); } }), { rootMargin: '250% 0px 250% 0px' });
  function plan() { if (!pracuje && KOL.size) { pracuje = true; requestAnimationFrame(pracuj); } }
  function pracuj() {
    pracuje = false; if (!G.ready || !KOL.size) return;
    // najpierw kawałek najbliżej środka ekranu; jeden na klatkę, żeby przewijanie zostało płynne
    const sr = innerHeight / 2; let best = null, bd = 1e9;
    for (const c of KOL) { if (!c.blisko) { KOL.delete(c); continue; } const r = c.cv.getBoundingClientRect(); const d = r.bottom < 0 ? -r.bottom : r.top > innerHeight ? r.top - innerHeight : 0; const dd = d * 10 + Math.abs(r.top + r.height / 2 - sr) * .01; if (dd < bd) { bd = dd; best = c; } }
    if (best) { KOL.delete(best); renderuj(best); }
    plan(); }
  const STAT = { n: 0, ms: 0, max: 0 };
  function renderuj(c) {
    const t0 = performance.now(); rysujKawalek(c); const d = performance.now() - t0; STAT.n++; STAT.ms += d; STAT.max = Math.max(STAT.max, d); }
  function rysujKawalek(c) {
    const s = c.s, wp = Math.round(s.w * Dc), hp = Math.round(c.h * Dc); if (!wp || !hp) return;
    if (offCv.width < wp || offCv.height < hp) { offCv.width = Math.max(offCv.width, wp); offCv.height = Math.max(offCv.height, Math.round(HC * Dc)); }
    R0.rysuj({ w: s.w, h: c.h, scroll: c.y, texOff: s.top, stageOy: -1e5, t: 1000, reg: s.plan.reg, clip: s.plan.clip, kamienie: [s.kw], obiekty: [s.ow], lampy: s.plan.lampy, noc: s.plan.noc, vig: 0, vp: [0, offCv.height - hp, wp, hp], cul: true });
    if (c.cv.width !== wp || c.cv.height !== hp) { c.cv.width = wp; c.cv.height = hp; c.ctx = null; } c.cv.style.height = c.h + 'px';
    const x = c.ctx || (c.ctx = c.cv.getContext('2d', { alpha: false })); x.drawImage(offCv, 0, 0, wp, hp, 0, 0, wp, hp);
    // tło lekko przygaszone, żeby treść z przodu była wyraźniejsza (noc już jest ciemna)
    const a = s.plan.noc ? .4 : 1, gr = x.createLinearGradient(0, 0, wp, 0); gr.addColorStop(0, `rgba(16,13,9,${.12 * a})`); gr.addColorStop(.28, `rgba(16,13,9,${.3 * a})`); gr.addColorStop(.72, `rgba(16,13,9,${.3 * a})`); gr.addColorStop(1, `rgba(16,13,9,${.12 * a})`);
    x.fillStyle = gr; x.fillRect(0, 0, wp, hp);
    c.gotowy = true; c.brudny = false; c.cv.classList.add('ok'); }

  /* ---------- Historia: przyklejony etap, buduje się tylko do przodu ---------- */
  let E = null;
  function przygotujEtap(el) {
    const inner = el.querySelector('.etap-wnetrze'); if (!inner) return;
    const cv = document.createElement('canvas'); cv.className = 'etap-tlo'; cv.setAttribute('aria-hidden', 'true'); inner.prepend(cv);
    const R1 = Renderer(cv, false); if (!R1) { cv.remove(); return; }
    E = { el, inner, cv, R: R1, kadry: [...el.querySelectorAll('[data-od]')].map(k => ({ el: k, od: +k.dataset.od, do: +k.dataset.do })), faza: -1, t: [], p: 0, widac: false, aktywny: 0, w: 0, h: 0 };
    new IntersectionObserver(es => { E.widac = es[0].isIntersecting; if (E.widac) { postep(); petla(); } }, { rootMargin: '20% 0px' }).observe(el);
    addEventListener('scroll', () => { if (E.widac) { postep(); petla(); } }, { passive: true });
    R1.gotowe.then(() => { E.ok = true; planEtapu(); postep(); petla(); }); }
  function planEtapu() {
    const w = E.inner.clientWidth, h = E.inner.clientHeight; if (!w || !h) return; E.w = w; E.h = h;
    const D = Math.min(devicePixelRatio || 1, MOB() ? 1.5 : 1.5); E.cv.width = Math.round(w * D); E.cv.height = Math.round(h * D);
    const marg = MOB() ? 14 : Math.max(60, w * .07), x0 = marg + (MOB() ? 0 : w * .06), x1 = w - x0, y0 = h * .16, y1 = h + 40;
    E.x0 = x0; E.x1 = x1; E.y0 = y0; E.y1 = y1;
    E.reg = [[w / 2, h / 2, w + 4, h + 4, 0, 1, -1e9, 1], [(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 40, y1 - y0 + 40, 10, 3, -1e9, 1], [(x0 + x1) / 2, (y0 + y1) / 2, x1 - x0 + 30, y1 - y0 + 30, 8, 2, 1e9, 1]];
    E.clip = new Float32Array(64); const ix0 = x0 + 52 * K, iy0 = y0 + 52 * K, ix1 = x1 - 52 * K; E.clip.set([ix0, iy0, ix1, 1e6], 15 * 4);
    const ks = wzdluz([[x0, y1], [x0, y0], [x1, y0], [x1, y1]], 'bianco', { L: 200, W: 100 }); ks.forEach((s, i) => { s.key = .32 + .12 * i / ks.length; s.grp = 1; s.jit = 0; });
    const pole = wzor('herring', 'grafit', [ix0 - 60, iy0 - 60, ix1 + 60, y1], (x, y) => x > ix0 - 70 * K && x < ix1 + 70 * K && y > iy0 - 70 * K && y < y1 + 30), cx = (x0 + x1) / 2;
    pole.forEach(s => { s.clip = 15; const dd = (s.y - y0) / (y1 - y0) * .8 + Math.abs(s.x - cx) / (x1 - x0) * .4; s.key = .46 + .38 * clamp(dd, 0, 1) + hash(s.x | 0, s.y | 0) * .02; s.grp = 1; s.jit = hash(s.y | 0, s.x | 0); });
    ks.push(...pole); ks.sort((a, b) => a.key - b.key);
    const os = [];
    [[x0 - 40, y0 + (y1 - y0) * .35], [x1 + 40, y0 + (y1 - y0) * .35]].forEach(([x, y], i) => os.push({ x, y, size: 70, idx: 5, h: .9, grp: 1, key: .9 + i * .01 }));
    [[x0 - 90, y0 + 60, 2], [x1 + 90, y0 + 50, 0], [x0 - 120, y1 - 120, 3], [x1 + 110, y1 - 160, 3]].forEach(([x, y, k], i) => os.push({ x, y, size: k === 3 ? 150 : 330, idx: k, h: k === 3 ? .8 : 3.6, grp: 1, key: .05 + i * .02 }));
    os.sort((a, b) => a.key - b.key);
    const R1 = E.R; R1.usun(E.ks); R1.usun(E.os); E.ks = R1.grupa(ks, 16, rowK, 1e9); E.os = R1.grupa(os, 8, rowO, 1e9);
    // to, co już zbudowane, zostaje (bez animacji)
    const t0 = performance.now() / 1000 - 10; if (E.klucz > 0) R1.wyzwol(E.ks, E.klucz, t0); if (E.pOb > 0) R1.wyzwol(E.os, E.pOb, t0); if (E.faza >= 1) E.reg[2][6] = E.t[1];
    E.rysuj = true; }
  function postep() {
    if (!E || !E.ok) return; const r = E.el.getBoundingClientRect(), vh = innerHeight, p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1); E.p = p;
    E.kadry.forEach(k => k.el.classList.toggle('on', p >= k.od && p < k.do)); document.documentElement.style.setProperty('--etap', p.toFixed(3));
    const t = performance.now() / 1000, fz = p < .02 ? -1 : p < .16 ? 0 : p < .32 ? 1 : p < .46 ? 2 : p < .86 ? 3 : 4;
    if (fz > E.faza) { for (let f = E.faza + 1; f <= fz; f++) E.t[f] = t + (f - E.faza - 1) * .25; E.faza = fz; if (fz >= 1) E.reg[2][6] = E.t[1]; E.aktywny = t; }
    // tylko do przodu: zbudowane kamienie zostają, gdy przewijasz w górę
    const kl = E.faza >= 2 ? (E.faza >= 3 ? Math.min(.87, .46 + (p - .46) / .4 * .4 + .02) : Math.max(.45, p + .01)) : -1;
    if (kl > (E.klucz || -1)) { E.klucz = kl; if (E.R.wyzwol(E.ks, kl, t)) E.aktywny = t; }
    if (p + .02 > (E.pOb || 0)) { E.pOb = p + .02; if (E.R.wyzwol(E.os, E.pOb, t)) E.aktywny = t; } }
  let eRaf = 0;
  function petla() { if (!E || !E.ok || eRaf) return; eRaf = requestAnimationFrame(klatkaEtapu); }
  function klatkaEtapu(now) {
    eRaf = 0; if (!E.widac) return; const t = now / 1000;
    if (E.inner.clientWidth !== E.w || Math.abs(E.inner.clientHeight - E.h) > 120) planEtapu();
    const szb = [E.t[0] || 1e9, 1.6, E.faza >= 0 && E.faza < 3 ? 1 : E.faza >= 3 ? Math.max(0, 1 - (t - (E.t[3] || t)) / 1.2) : 0];
    E.R.rysuj({ w: E.w, h: E.h, scroll: 0, stageOy: 0, t, reg: E.reg, clip: E.clip, kamienie: [E.ks], obiekty: [E.os], lampy: [], noc: 0, vig: 1, persp: .055,
      sz: [(E.x0 + E.x1) / 2, (E.y0 + E.y1) / 2, E.x1 - E.x0, E.y1 - E.y0], szb });
    if (t - E.aktywny < 1.6 || szb[2] > 0 && szb[2] < 1) eRaf = requestAnimationFrame(klatkaEtapu); }

  /* ---------- „wyrasta”: kafle i płyty podnoszą się z bruku, gdy wjeżdżają w ekran ---------- */
  function wyrastanie() { const els = document.querySelectorAll('[data-dziura], .kafel'); if (RM) { els.forEach(e => e.classList.add('wyrasta')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('wyrasta'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -4% 0px' });
    els.forEach(e => io.observe(e));
    let cz = 0; new MutationObserver(() => { if (cz) return; cz = requestAnimationFrame(() => { cz = 0; document.querySelectorAll('[data-dziura]:not(.wyrasta), .kafel:not(.wyrasta)').forEach(e => io.observe(e)); }); }).observe(document.querySelector('main') || document.body, { childList: true, subtree: true }); }

  /* ---------- start ---------- */
  function start() {
    offCv = document.createElement('canvas'); R0 = Renderer(offCv, true);
    if (!R0) { document.documentElement.classList.add('bez-gl'); document.querySelectorAll('.kafel, [data-dziura]').forEach(e => e.classList.add('wyrasta')); return; }
    G.ok = true; wyrastanie();
    Dc = Math.min(devicePixelRatio || 1, MOB() ? 1.5 : 1.25); K = MOB() ? .2 : innerWidth > 1700 ? .34 : .3;
    offCv.width = Math.round(innerWidth * Dc); offCv.height = Math.round(HC * Dc);
    const sekcje = [...document.querySelectorAll('[data-strefa="plac"]')].map(przygotujSekcje);
    const et = document.querySelector('[data-strefa="etap"]'); if (et) przygotujEtap(et);
    R0.gotowe.then(() => { G.ready = true; sekcje.forEach(s => zmierz(s, true)); dispatchEvent(new Event('swiat9')); });
    let lw = innerWidth;
    addEventListener('resize', () => { if (Math.abs(innerWidth - lw) < 2) return; lw = innerWidth; clearTimeout(G.rT); G.rT = setTimeout(() => {
      Dc = Math.min(devicePixelRatio || 1, MOB() ? 1.5 : 1.25); K = MOB() ? .2 : innerWidth > 1700 ? .34 : .3; offCv.width = Math.round(innerWidth * Dc); offCv.height = Math.round(HC * Dc);
      SEK.forEach(s => zmierz(s, true)); if (E && E.ok) { planEtapu(); petla(); } }, 220); });
  }
  // Wzory: nowy wzór kładzie się na placu – nowe płótna przenikają się ze starymi
  G.ustawWzor = (id, pat, pal) => { const s = SEK.find(q => q.el.id === id); if (!s || !G.ready) return; s.el.dataset.wzor = pat; if (pal) s.el.dataset.kolor = pal;
    const stare = s.kaw.filter(c => c.gotowy).map(c => { const k = c.cv.cloneNode(false); k.width = c.cv.width; k.height = c.cv.height; k.getContext('2d').drawImage(c.cv, 0, 0); k.classList.add('ok', 'stary'); s.box.appendChild(k); return k; });
    zmierz(s, true); s.kaw.forEach(c => { if (c.blisko) { KOL.delete(c); renderuj(c); } });
    void s.box.offsetWidth; stare.forEach(k => { k.style.opacity = 0; setTimeout(() => k.remove(), 800); }); };
  G.przebuduj = () => { SEK.forEach(s => zmierz(s, true)); };
  G.info = () => ({ stat: { n: STAT.n, sr: +(STAT.ms / Math.max(1, STAT.n)).toFixed(1), max: +STAT.max.toFixed(1) }, sekcje: SEK.length, kawalki: SEK.reduce((a, s) => a + s.kaw.length, 0), gotowe: SEK.reduce((a, s) => a + s.kaw.filter(c => c.gotowy).length, 0), kolejka: KOL.size, Dc, K, etap: E && { p: E.p, faza: E.faza } });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
