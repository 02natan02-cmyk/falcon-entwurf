/* GardenBruk v9 – intro „Kamienie lecą”, wejście w świat, łagodne pojawianie się treści, most do strona9.js */
(function () {
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  const MOB = () => innerWidth < 821;
  let S = null;
  const G = window.Scena = { gotowe: false, introDone: false, zamroz: false };

  /* ---------- intro „Kamienie lecą”: jodełka układa się, kamienie wzbijają się, lecą przez ekran i lądują jako kostki,
     z których składa się zdjęcie placu z drona; na końcu fugi znikają i zostaje plac ---------- */
  const icv = document.getElementById('intro'); const ix = icv.getContext('2d');
  let iStones = [], iTiles = [], iT0 = 0, iR = 1, iD = 1, iW = 0, iH = 0, iOdslona = false, iRun = false, shadowTile = null, iImg = null, iGeo = null;
  const T_LOT = 1.45, T_LAD = 3.55, T_ZLEW = 3.55, T_KONIEC = 4.75; // start lotu, koniec lądowania, zlewanie fug, koniec intro
  const easeIO = u => u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
  const easeOutB = u => { const c = 1.4; return 1 + (c + 1) * Math.pow(u - 1, 3) + c * Math.pow(u - 1, 2); };
  function cien() { const c = document.createElement('canvas'); c.width = c.height = 96; const g = c.getContext('2d'); g.shadowColor = 'rgba(0,0,0,1)'; g.shadowBlur = 18; g.fillStyle = 'rgba(0,0,0,.9)'; g.beginPath(); g.roundRect(18, 18, 60, 60, 10); g.fill(); return c; }
  function geoCover(Z) { // jak object-fit: cover + object-position bohatera, powiększone Z-krotnie wokół środka
    const iw = iImg.naturalWidth || 1600, ih = iImg.naturalHeight || 900, px = .5, py = MOB() ? 1 : .58;
    const s0 = Math.max(iW / iw, iH / ih), dw0 = iw * s0, dh0 = ih * s0, dx0 = (iW - dw0) * px, dy0 = (iH - dh0) * py;
    const dw = dw0 * Z, dh = dh0 * Z; return { s: s0 * Z, dx: iW / 2 - (iW / 2 - dx0) * Z, dy: iH / 2 - (iH / 2 - dy0) * Z, dw, dh };
  }
  function kafelek(tx, ty, tw, th, g) { // kostka z kawałkiem zdjęcia: faza jak u prawdziwej kostki
    const c = document.createElement('canvas'); const W = Math.ceil(tw * iD), H = Math.ceil(th * iD); c.width = W; c.height = H; const x = c.getContext('2d');
    const sx = (tx - g.dx) / g.s, sy = (ty - g.dy) / g.s, sw = tw / g.s, sh = th / g.s;
    x.beginPath(); x.roundRect(0, 0, W, H, Math.min(W, H) * .1); x.clip(); x.drawImage(iImg, sx, sy, sw, sh, 0, 0, W, H);
    const e = Math.max(1.4, Math.min(W, H) * .14); let gr = x.createLinearGradient(0, 0, 0, e); gr.addColorStop(0, 'rgba(255,250,240,.24)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, W, e);
    gr = x.createLinearGradient(0, 0, e, 0); gr.addColorStop(0, 'rgba(255,250,240,.16)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, e, H);
    gr = x.createLinearGradient(0, H - e * 1.2, 0, H); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(10,8,6,.42)'); x.fillStyle = gr; x.fillRect(0, H - e * 1.2, W, e * 1.2);
    gr = x.createLinearGradient(W - e * 1.2, 0, W, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(10,8,6,.34)'); x.fillStyle = gr; x.fillRect(W - e * 1.2, 0, e * 1.2, H);
    x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = Math.max(1, iD * .7); x.strokeRect(.5, .5, W - 1, H - 1); return c;
  }
  function introStart() {
    iW = innerWidth; iH = innerHeight; iD = Math.min(devicePixelRatio || 1, 2, Math.sqrt(4.5e6 / (iW * iH)));
    icv.width = Math.ceil(iW * iD); icv.height = Math.ceil(iH * iD); icv.style.width = iW + 'px'; icv.style.height = iH + 'px';
    iImg = document.querySelector('#start img');
    S.k = MOB() ? .27 : .34; iStones = []; S.genPattern('herring', 'grafit', -40, -40, iW + 40, iH + 40, () => true, iStones, {});
    const cx = iW / 2, cy = iH / 2; iR = Math.hypot(iW, iH) * .55;
    iStones.forEach(s => { s.d = Math.hypot(s.x - cx, s.y - cy) / iR; s.h1 = hash(s.v + 3, (s.x * 7) | 0); s.uz = false; });
    // kostki ze zdjęcia: cegiełka na całym ekranie, zdjęcie powiększone 1,18×; każda zaczyna lot z najbliższej wolnej kostki jodełki
    iGeo = geoCover(1.18); iTiles = [];
    const TW = MOB() ? Math.ceil(iW / 6) : Math.ceil(iW / 15), TH = Math.round(TW / 2), J = Math.max(2, Math.round(TW * .035));
    for (let r = 0, y = 0; y < iH; y += TH, r++) { const off = r % 2 ? TW / 2 : 0;
      for (let x = -off; x < iW; x += TW) { const tx = x + J / 2, ty = y + J / 2, tw = TW - J, th = TH - J; if (tx + tw < 0) continue;
        const mx = tx + tw / 2, my = ty + th / 2; const d = Math.hypot(mx - cx, my - cy) / iR, h1 = hash((mx * 13) | 0, (my * 7) | 0), h2 = hash((my * 11) | 0, (mx * 5) | 0);
        let best = null, bd = 1e9; for (const s of iStones) { if (s.uz) continue; const dd = (s.x - mx) ** 2 + (s.y - my) ** 2; if (dd < bd) { bd = dd; best = s; } }
        if (best) best.uz = true;
        const t0 = T_LOT + (d * .62 + h2 * .3) * .85; if (best) best.t0lot = t0;
        const dir = h1 < .5 ? -1 : 1, ang = Math.atan2(my - cy, mx - cx);
        const px = mx + Math.cos(ang) * (iR * .35 + h2 * iR * .4) + Math.cos(ang + Math.PI / 2) * dir * (iW * .18 + h1 * iW * .25);
        const py = my + Math.sin(ang) * (iR * .35 + h2 * iR * .4) + Math.sin(ang + Math.PI / 2) * dir * (iH * .18 + h1 * iH * .25);
        iTiles.push({ x: tx, y: ty, w: tw, h: th, mx, my, spr: kafelek(tx, ty, tw, th, iGeo), src: best, cxp: px, cyp: py, dir, t0, dur: 1.15 + h1 * .25, z: 0 }); }
    }
    shadowTile = cien(); iT0 = performance.now(); iRun = true; document.body.classList.add('intro-leci'); requestAnimationFrame(introFrame);
  }
  function rysujKostke(spr, x, y, w, h, rot, sc, al) { const c = Math.cos(rot) * iD * sc, si = Math.sin(rot) * iD * sc; ix.globalAlpha = al; ix.setTransform(c, si, -si, c, iD * x, iD * y); ix.drawImage(spr, -w / 2, -h / 2, w, h); }
  function rysujCien(x, y, w, h, rot, g, al) { if (al < .01) return; ix.globalAlpha = al; const c = Math.cos(rot) * iD, si = Math.sin(rot) * iD; ix.setTransform(c, si, -si, c, iD * x, iD * y); ix.drawImage(shadowTile, -w * g / 2 - 6, -h * g / 2 - 6, w * g + 12, h * g + 12); }
  function introFrame(now) {
    if (!iRun) return; const t = (now - iT0) / 1000, cx = iW / 2, cy = iH / 2;
    ix.setTransform(1, 0, 0, 1, 0, 0); ix.clearRect(0, 0, icv.width, icv.height);
    const zlew = clamp((t - T_ZLEW) / .5, 0, 1), Z = 1.18 - .18 * sstep(0, 1, (t - T_ZLEW) / 1.0);
    if (!iOdslona && t > T_ZLEW + .3) { iOdslona = true; document.body.classList.add('odslona'); }
    // podsypka
    ix.setTransform(iD, 0, 0, iD, 0, 0); ix.globalAlpha = 1 - zlew; ix.fillStyle = S.bedPattern || '#c9b48d'; ix.fillRect(0, 0, iW, iH);
    const vg = ix.createRadialGradient(cx, cy, 0, cx, cy, iR * 1.3); vg.addColorStop(0, 'rgba(0,0,0,.1)'); vg.addColorStop(1, 'rgba(0,0,0,.6)'); ix.fillStyle = vg; ix.fillRect(0, 0, iW, iH); ix.globalAlpha = 1;
    if (zlew < 1) {
      // 1) jodełka: układa się; kamienie bez przydziału unoszą się i odlatują
      const u = clamp((t - T_LOT - .1) / 1.1, 0, 1);
      for (const s of iStones) {
        const ts = clamp((t - s.d * .8 - s.h1 * .08) / .38, 0, 2); if (ts <= 0) continue;
        if (s.uz) { if (t >= s.t0lot) continue; S.drawOne(ix, s, iD, ts); continue; }
        // fala: kamienie bez przydziału podskakują, gdy przechodzi przez nie wstrząs, i opadają z powrotem
        const L = u > 0 ? Math.sin(Math.PI * clamp((u - s.d * .55) / .45, 0, 1)) : 0;
        if (L > .001) { const sp = S.sprite(s.kind, s.w, s.h, s.col, s.v), h1 = s.h1;
          const dy = -L * (iH * .06 + h1 * iH * .08), dx = ((s.x - cx) / (iW / 2)) * L * 18, sc = 1 + L * .22, rot = s.rot + (h1 - .5) * .5 * L;
          rysujCien(s.x + dx * .4 + L * 10, s.y + L * 16, s.w, s.h, s.rot, 1 + L * .8, .45 * L);
          rysujKostke(sp.c, s.x + dx, s.y + dy, s.w, s.h, rot, sc, 1); }
        else S.drawOne(ix, s, iD, ts);
      }
      // 2) kostki ze zdjęcia: wylatują z jodełki, zataczają łuk, obracają się i lądują w swoim miejscu
      const lot = []; let wyladowane = 0;
      for (const k of iTiles) { const uu = (t - k.t0) / k.dur; if (uu <= 0) continue; if (uu >= 1) { wyladowane++; rysujKostke(k.spr, k.mx, k.my, k.w, k.h, 0, 1, 1); continue; } k.u = uu; lot.push(k); }
      lot.sort((a, b) => Math.sin(Math.PI * a.u) - Math.sin(Math.PI * b.u));
      for (const k of lot) { const u = k.u, e = easeIO(u), s = k.src, z = Math.sin(Math.PI * u);
        const x0 = s ? s.x : k.cxp, y0 = s ? s.y : k.cyp, x1 = k.mx, y1 = k.my; const mt = 1 - e;
        const x = mt * mt * x0 + 2 * mt * e * k.cxp + e * e * x1, y = mt * mt * y0 + 2 * mt * e * k.cyp + e * e * y1;
        const sc = 1 + z * (MOB() ? .7 : .95), rot = (s ? s.rot : 0) * (1 - e) + k.dir * Math.PI * 2 * e;
        const w = (s ? s.w : k.w) * (1 - e) + k.w * e, h = (s ? s.h : k.h) * (1 - e) + k.h * e, f = sstep(.3, .7, u);
        rysujCien(x + z * 26, y + z * 60, w, h, rot, 1 + z * 1.4, .5 * sstep(0, .15, u) * (1 - sstep(.85, 1, u)));
        if (s && f < 1) rysujKostke(S.sprite(s.kind, s.w, s.h, s.col, s.v).c, x, y, w, h, rot, sc, 1 - f);
        if (f > 0) rysujKostke(k.spr, x, y, w, h, rot, sc, f); }
    }
    // 3) zlewanie: całe zdjęcie na wierzch, fugi znikają, plac oddala się do skali strony
    if (zlew > 0 && iImg) { const g = geoCover(Z); ix.setTransform(iD, 0, 0, iD, 0, 0); ix.globalAlpha = zlew; ix.drawImage(iImg, g.dx, g.dy, g.dw, g.dh); ix.globalAlpha = 1; }
    ix.setTransform(1, 0, 0, 1, 0, 0);
    if (G.zamroz) return;
    if (t > T_KONIEC) { introKoniec(); return; }
    requestAnimationFrame(introFrame);
  }
  function introKoniec() { iRun = false; G.introDone = true; iStones = []; iTiles = []; document.body.classList.add('odslona'); document.body.classList.remove('intro', 'intro-leci'); icv.classList.add('znika'); setTimeout(() => icv.remove(), 700); dispatchEvent(new Event('intro-koniec')); }
  G.skipIntro = () => { if (iRun) iT0 = Math.min(iT0, performance.now() - T_ZLEW * 1000); };
  G.introTest = t => { G.zamroz = true; if (!iRun) introStart(); iRun = true; iT0 = performance.now() - t * 1000; iOdslona = t > T_ZLEW + .3; document.body.classList.toggle('odslona', iOdslona); introFrame(performance.now()); };


  /* ---------- Wzory: plac w świecie układa się na nowo ---------- */
  G.ustawWzor = (pat, pal) => { if (window.Swiat9 && Swiat9.ustawWzor) Swiat9.ustawWzor('wzory', pat, pal); };
  G.wzInfo = () => ({});
  const wz = document.getElementById('wzory'); if (wz) new IntersectionObserver(es => { if (es[0].isIntersecting) { dispatchEvent(new Event('wzory-widac')); } }, { threshold: .35 }).observe(wz);

  /* ---------- treść pojawia się do końca (transform/opacity) ---------- */
  function pojawianie() {
    if (RM || !('IntersectionObserver' in window)) return;
    const sel = '.tablica, .sek .lead, .opinie, .sek .cta, .katalogi, .maly, .kt-dane > *, .formularz, .wz-ster, .kroki li, .gry-zakl, .gry-pola, .pk, .stopka > *';
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const el = e.target; io.unobserve(el); el.classList.add('on'); setTimeout(() => el.classList.remove('rv', 'on'), 1400); }), { rootMargin: '0px 0px 8% 0px' });
    document.querySelectorAll(sel).forEach(el => { if (el.closest('#start') || el.closest('.etap')) return; el.classList.add('rv'); io.observe(el); });
    setTimeout(() => document.querySelectorAll('.rv:not(.on)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('on'); }), 6000);
  }
  /* bohater: zdjęcie lekko odjeżdża przy przewijaniu */
  const hImg = document.querySelector('#heroFoto img'); let hTik = false;
  addEventListener('scroll', () => { if (hTik || RM) return; hTik = true; requestAnimationFrame(() => { hTik = false; const y = scrollY, h = innerHeight; if (y < h * 1.2 && hImg) hImg.style.transform = `translate3d(0,${(y * .35).toFixed(1)}px,0) scale(${(1 + y / h * .08).toFixed(4)})`; }); }, { passive: true });

  /* ---------- start ---------- */
  function start() {
    S = window.Swiat; G.gotowe = true; pojawianie();
    const skip = RM || location.hash.length > 1;
    if (skip) { document.body.classList.add('odslona'); document.body.classList.remove('intro'); icv.remove(); G.introDone = true; dispatchEvent(new Event('intro-koniec')); return; }
    const img = document.querySelector('#start img'); const gotowe = img && !img.complete ? new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); setTimeout(r, 3500); }) : Promise.resolve();
    gotowe.then(introStart);
  }
  if (window.Swiat && window.Swiat.bedPattern) start(); else addEventListener('swiat', start, { once: true });
  setTimeout(() => { if (!G.gotowe) { document.body.classList.add('odslona'); document.body.classList.remove('intro'); } }, 6000);
})();
