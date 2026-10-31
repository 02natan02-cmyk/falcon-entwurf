/* GardenBruk – „Kostris”: kostka spada, Ty układasz. Czwarta gra w Strefie gier.
   Prawdziwe kostki z placu: tekstury ze zdjęć (img/tex), faza, światło z lewej góry, cień i jasna fuga z piasku,
   podsypka w obrzeżach. Pełny rząd: błysk, zagęszczarka, kurz – i rząd znika.
   Wydajność: sprite'y kostek renderowane raz na rozmiar pola (offscreen canvas), tło i ułożone kostki w osobnych
   warstwach, requestAnimationFrame tylko podczas gry i tylko wtedy, gdy plansza jest widoczna. */
(function () {
  'use strict';
  const pole = document.getElementById('gKos'); if (!pole) return;
  const $ = s => pole.querySelector(s), $$ = s => [...pole.querySelectorAll(s)];
  const cv = $('#kosCv'), plansza = $('#kosPlansza'), nCv = $('#kosNastCv');
  if (!cv || !plansza) return;
  const x = cv.getContext('2d');
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WASKI = matchMedia('(max-width: 820px)');
  const COLS = 10, ROWS = 18, HID = 2, RR = ROWS + HID; // dwa ukryte rzędy nad planszą
  const KLUCZ = 'gb-kostris';

  /* ---------- pomocnicze ---------- */
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const teraz = () => performance.now();
  const fmt = n => Math.round(n).toLocaleString('pl-PL');
  const rz = n => { if (n === 1) return '1 rząd'; const d = n % 10, s = n % 100; return n + (d >= 2 && d <= 4 && (s < 12 || s > 14) ? ' rzędy' : ' rzędów'); };
  function rng(seed) { let s = (Math.imul(seed | 0, 2654435761) >>> 0) || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
  const czytajRek = () => { try { const v = JSON.parse(localStorage.getItem(KLUCZ)); return typeof v === 'number' && isFinite(v) ? v : 0; } catch (e) { return 0; } };
  const piszRek = v => { try { localStorage.setItem(KLUCZ, JSON.stringify(v)); } catch (e) { /* bez zapisu */ } };
  const wibruj = w => { try { if (navigator.vibrate) navigator.vibrate(w); } catch (e) { /* brak */ } };
  const mk = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
  function rr(g, a, b, w, h, r) { g.moveTo(a + r, b); g.arcTo(a + w, b, a + w, b + h, r); g.arcTo(a + w, b + h, a, b + h, r); g.arcTo(a, b + h, a, b, r); g.arcTo(a, b, a + w, b, r); g.closePath(); }
  function poly(g, pts, fill) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]); g.closePath(); g.fillStyle = fill; g.fill(); }

  /* ---------- klocki i kolory z placu ---------- */
  // foto: zdjęcie powierzchni wprost; detal: zdjęcie jako mapa szczegółów na kolorze (barwiona kostka)
  const KOL = [
    { id: 'grafit', naz: 'grafit', tex: 'grafit', tryb: 'detal', baza: '#4a4b50', sila: .95 },
    { id: 'piaskowy', naz: 'piaskowy', tex: 'jasny', tryb: 'detal', baza: '#d3bd92', sila: .85 },
    { id: 'czerwony', naz: 'czerwony', tex: 'jasny', tryb: 'detal', baza: '#8c4232', sila: .95 },
    { id: 'melanz', naz: 'melanż', tex: 'melanz', tryb: 'foto', baza: '#a07d5c', melanz: true },
    { id: 'granit', naz: 'granit', tex: 'granit', tryb: 'foto', baza: '#8e8c87' },
    { id: 'kwarcyt', naz: 'kwarcyt', tex: 'kwarcyt', tryb: 'foto', baza: '#c9b796' },
    { id: 'jasny', naz: 'jasny', tex: 'jasny', tryb: 'foto', baza: '#cfccc5' },
    { id: 'zloty', naz: 'złota kostka', tex: 'jasny', tryb: 'detal', baza: '#d9aa3a', sila: .6, zloto: true } // bonus
  ];
  const ZLOTA = 7, ZL = 9; // indeks koloru i znacznik w macierzy klocka
  const TYPY = 'IOTSZLJ';
  const KSZ = { I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], O: [[1, 1], [1, 1]], T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]], Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]], L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]], J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]] };
  const KOLOR = { I: 0, O: 1, T: 2, S: 3, Z: 4, L: 5, J: 6 };
  // obrót SRS z odbiciami od ścian (x w prawo, y w górę – w siatce odwracamy y)
  const KICK = { '01': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]], '10': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]], '12': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]], '21': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    '23': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]], '32': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]], '30': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]], '03': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]] };
  const KICK_I = { '01': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]], '10': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]], '12': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]], '21': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    '23': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]], '32': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]], '30': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]], '03': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]] };
  const PUNKTY = [0, 100, 300, 500, 800];
  const interwalDla = poz => Math.max(90, Math.round(800 * Math.pow(0.82, poz - 1))); // 800 ms → … → 90 ms

  /* ---------- tekstury ze zdjęć ---------- */
  const TEX = {}; let texObietnica = null, gotowe = false;
  function laduj() {
    if (texObietnica) return texObietnica;
    const src = { grafit: 'img/tex/grafit.webp', jasny: 'img/tex/jasny.webp', melanz: 'img/tex/melanz.webp', granit: 'img/tex/granit.webp', kwarcyt: 'img/tex/kwarcyt.webp', piasek: 'img/tex/piasek.webp' };
    const fonty = document.fonts && document.fonts.load ? document.fonts.load('900 40px "Big Shoulders Display"').catch(() => { }) : Promise.resolve();
    texObietnica = Promise.all(Object.entries(src).map(([k, s]) => new Promise(res => {
      const im = new Image(); im.decoding = 'async';
      im.onload = () => { try { const c = mk(im.naturalWidth, im.naturalHeight), g = c.getContext('2d', { willReadFrequently: k === 'grafit' || k === 'jasny' }); g.drawImage(im, 0, 0);
        const t = { img: c, w: c.width, h: c.height }; if (k === 'grafit' || k === 'jasny') t.det = detal(c, g); TEX[k] = t; } catch (e) { /* bez tekstury: kolor */ } res(); };
      im.onerror = () => res(); im.src = s; })).concat(fonty)).then(() => { gotowe = true; });
    return texObietnica;
  }
  function detal(c, g) { // mapa szczegółów: jasność wokół 50 % do nakładania na dowolny kolor (overlay)
    const d = g.getImageData(0, 0, c.width, c.height), a = d.data; let sum = 0;
    for (let i = 0; i < a.length; i += 4) sum += a[i] * .3 + a[i + 1] * .59 + a[i + 2] * .11;
    const mean = sum / (a.length / 4);
    for (let i = 0; i < a.length; i += 4) { const l = a[i] * .3 + a[i + 1] * .59 + a[i + 2] * .11, v = clamp(128 + (l - mean) * 1.25, 0, 255); a[i] = a[i + 1] = a[i + 2] = v; }
    const o = mk(c.width, c.height); o.getContext('2d').putImageData(d, 0, 0); return o;
  }

  /* ---------- sprite'y: kostka, cień w powietrzu, odcisk w piasku, fuga, kurz, zagęszczarka ---------- */
  function sprite(k, v, c, Dp) { // c = bok pola w px CSS
    const K = KOL[k], cd = c * Dp, j = Math.max(1.4 * Dp, cd * .075), pad = Math.ceil(cd * .16), S = Math.ceil(cd + pad * 2);
    const o = mk(S, S), g = o.getContext('2d'), s = cd - j, x0 = pad + j / 2, y0 = pad + j / 2, rad = s * .1, R = rng(k * 131 + v * 17 + 7);
    // cień kontaktowy na piasku (widać go w fudze)
    g.save(); g.shadowColor = 'rgba(30,18,6,.6)'; g.shadowBlur = cd * .07; g.shadowOffsetX = cd * .03; g.shadowOffsetY = cd * .05;
    g.fillStyle = '#3a3026'; g.beginPath(); rr(g, x0, y0, s, s, rad); g.fill(); g.restore();
    g.save(); g.beginPath(); rr(g, x0, y0, s, s, rad); g.clip();
    // powierzchnia ze zdjęcia: ok. 16 cm kamienia na jedną kostkę, losowy wycinek i obrót
    const T = TEX[K.tex];
    if (T) { const src = Math.min(T.h * .7, T.w * .38), sx = R() * (T.w - src), sy = R() * (T.h - src);
      g.save(); g.translate(x0 + s / 2, y0 + s / 2); g.rotate((v % 4) * Math.PI / 2); g.translate(-s / 2, -s / 2);
      if (K.tryb === 'foto') g.drawImage(T.img, sx, sy, src, src, 0, 0, s, s);
      else { g.fillStyle = K.baza; g.fillRect(0, 0, s, s); g.globalCompositeOperation = 'overlay'; g.globalAlpha = K.sila; g.drawImage(T.det, sx, sy, src, src, 0, 0, s, s); g.globalAlpha = 1; g.globalCompositeOperation = 'source-over'; }
      g.restore();
    } else { g.fillStyle = K.baza; g.fillRect(x0, y0, s, s); for (let i = 0; i < s * s / 30; i++) { g.fillStyle = R() < .5 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.1)'; g.fillRect(x0 + R() * s, y0 + R() * s, Dp, Dp); } }
    // każda kostka z partii trochę inna; melanż wyraźnie
    if (K.melanz) { g.fillStyle = ['rgba(0,0,0,0)', 'rgba(96,58,32,.26)', 'rgba(236,214,180,.22)', 'rgba(84,76,70,.28)'][v]; g.fillRect(x0, y0, s, s); }
    const f = [0, -.06, .05, -.025][v] + (R() - .5) * .04;
    g.fillStyle = f > 0 ? `rgba(255,248,236,${f * 1.6})` : `rgba(20,14,8,${-f * 1.6})`; g.fillRect(x0, y0, s, s);
    // beton żyje: łagodne plamy, pory i drobne obicia na krawędziach
    for (let i = 0; i < 2; i++) { const px = x0 + R() * s, py = y0 + R() * s, rd = s * (.3 + R() * .4), gp = g.createRadialGradient(px, py, 0, px, py, rd);
      gp.addColorStop(0, R() < .5 ? 'rgba(30,20,10,.1)' : 'rgba(255,246,230,.08)'); gp.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gp; g.fillRect(x0, y0, s, s); }
    const nP = K.tryb === 'detal' ? Math.round(s * s / (90 * Dp * Dp)) + 4 : 3;
    for (let i = 0; i < nP; i++) { const r0 = (.35 + R() * .6) * Dp; g.fillStyle = R() < .75 ? 'rgba(18,12,6,.32)' : 'rgba(255,250,240,.3)'; g.beginPath(); g.arc(x0 + R() * s, y0 + R() * s, r0, 0, 7); g.fill(); }
    for (let i = 0; i < 3; i++) { const bok = (R() * 4) | 0, t = .15 + R() * .7, r0 = (.8 + R() * 1.1) * Dp, px = bok === 0 ? x0 + t * s : bok === 1 ? x0 + s : bok === 2 ? x0 + t * s : x0, py = bok === 0 ? y0 : bok === 1 ? y0 + t * s : bok === 2 ? y0 + s : y0 + t * s;
      g.fillStyle = 'rgba(20,14,8,.35)'; g.beginPath(); g.ellipse(px, py, r0 * 1.6, r0, bok % 2 ? Math.PI / 2 : 0, 0, 7); g.fill(); }
    // światło z lewej góry
    const gr = g.createLinearGradient(x0, y0, x0 + s, y0 + s); gr.addColorStop(0, 'rgba(255,246,228,.2)'); gr.addColorStop(.45, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.2)'); g.fillStyle = gr; g.fillRect(x0, y0, s, s);
    // faza: cztery skośne ścianki, jasne od słońca, ciemne po drugiej stronie
    const b = Math.max(1.6 * Dp, s * .12), X0 = x0, Y0 = y0, X1 = x0 + s, Y1 = y0 + s;
    poly(g, [[X0, Y0], [X1, Y0], [X1 - b, Y0 + b], [X0 + b, Y0 + b]], 'rgba(255,250,236,.36)');
    poly(g, [[X0, Y0], [X0 + b, Y0 + b], [X0 + b, Y1 - b], [X0, Y1]], 'rgba(255,250,236,.2)');
    poly(g, [[X0, Y1], [X0 + b, Y1 - b], [X1 - b, Y1 - b], [X1, Y1]], 'rgba(18,11,4,.38)');
    poly(g, [[X1, Y0], [X1, Y1], [X1 - b, Y1 - b], [X1 - b, Y0 + b]], 'rgba(18,11,4,.26)');
    if (K.zloto) { const gz = g.createLinearGradient(x0, y0, x0 + s, y0 + s); gz.addColorStop(0, 'rgba(255,255,255,0)'); gz.addColorStop(.42, 'rgba(255,250,210,0)'); gz.addColorStop(.5, 'rgba(255,252,225,.65)'); gz.addColorStop(.58, 'rgba(255,250,210,0)'); g.fillStyle = gz; g.fillRect(x0, y0, s, s);
      const cx = x0 + s * .5, cy = y0 + s * .5, a = s * .2; g.fillStyle = 'rgba(255,255,240,.9)'; g.beginPath(); g.moveTo(cx, cy - a); g.lineTo(cx + a * .22, cy - a * .22); g.lineTo(cx + a, cy); g.lineTo(cx + a * .22, cy + a * .22); g.lineTo(cx, cy + a); g.lineTo(cx - a * .22, cy + a * .22); g.lineTo(cx - a, cy); g.lineTo(cx - a * .22, cy - a * .22); g.closePath(); g.fill(); }
    g.restore();
    g.strokeStyle = K.zloto ? 'rgba(90,60,0,.7)' : 'rgba(0,0,0,.4)'; g.lineWidth = Math.max(1, Dp * .7); g.beginPath(); rr(g, x0 + .5, y0 + .5, s - 1, s - 1, rad); g.stroke();
    return { c: o, pad: pad / Dp, w: S / Dp };
  }
  function cienSprite(c, Dp) { // miękki cień kostki w powietrzu
    const cd = c * Dp, pad = Math.ceil(cd * .35), S = Math.ceil(cd + pad * 2), o = mk(S, S), g = o.getContext('2d');
    g.shadowColor = 'rgba(24,14,4,.42)'; g.shadowBlur = cd * .22; g.shadowOffsetX = 10000; g.fillStyle = '#000';
    g.beginPath(); rr(g, pad + cd * .06 - 10000, pad + cd * .06, cd * .88, cd * .88, cd * .12); g.fill();
    return { c: o, pad: pad / Dp, w: S / Dp };
  }
  function duchSprite(c, Dp) { // odcisk w piasku: tu kostka wyląduje
    const cd = c * Dp, o = mk(cd, cd), g = o.getContext('2d'), j = Math.max(1.4 * Dp, cd * .075), s = cd - j, x0 = j / 2, b = s * .14;
    g.beginPath(); rr(g, x0, x0, s, s, s * .1); g.fillStyle = 'rgba(40,26,10,.2)'; g.fill();
    g.save(); g.clip();
    poly(g, [[x0, x0], [x0 + s, x0], [x0 + s - b, x0 + b], [x0 + b, x0 + b]], 'rgba(30,18,6,.26)');
    poly(g, [[x0, x0], [x0 + b, x0 + b], [x0 + b, x0 + s - b], [x0, x0 + s]], 'rgba(30,18,6,.18)');
    poly(g, [[x0, x0 + s], [x0 + b, x0 + s - b], [x0 + s - b, x0 + s - b], [x0 + s, x0 + s]], 'rgba(255,240,210,.2)');
    poly(g, [[x0 + s, x0], [x0 + s, x0 + s], [x0 + s - b, x0 + s - b], [x0 + s - b, x0 + b]], 'rgba(255,240,210,.14)');
    g.restore();
    g.setLineDash([3 * Dp, 3 * Dp]); g.strokeStyle = 'rgba(255,246,224,.42)'; g.lineWidth = Math.max(1, Dp); g.beginPath(); rr(g, x0 + 1, x0 + 1, s - 2, s - 2, s * .1); g.stroke();
    return o;
  }
  function piasekWzor(g, skala, Dp, jasniej) { // powtarzalny wzór podsypki w px urządzenia
    const P = TEX.piasek; if (!P) return jasniej ? '#ddcca8' : '#ad966f';
    const t = mk(P.w * skala * Dp, P.h * skala * Dp), tg = t.getContext('2d'); tg.drawImage(P.img, 0, 0, t.width, t.height);
    if (jasniej) { tg.fillStyle = 'rgba(255,246,226,.42)'; tg.fillRect(0, 0, t.width, t.height); }
    return g.createPattern(t, 'repeat');
  }
  function fugaSprite(c, Dp) { // suchy, jasny piasek w fugach
    const cd = Math.ceil(c * Dp), o = mk(cd, cd), g = o.getContext('2d'); g.fillStyle = piasekWzor(g, .45, Dp, true); g.fillRect(0, 0, cd, cd);
    const R = rng(5); for (let i = 0; i < cd * 1.2; i++) { g.fillStyle = R() < .5 ? 'rgba(255,252,240,.5)' : 'rgba(150,122,82,.35)'; g.fillRect(R() * cd, R() * cd, Dp * .9, Dp * .9); }
    return o;
  }
  function pylSprite() { const o = mk(64, 64), g = o.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(240,226,194,.95)'); gr.addColorStop(.45, 'rgba(226,208,170,.55)'); gr.addColorStop(1, 'rgba(220,200,160,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return o; }
  function zagSprite(u, Dp) { // zagęszczarka (płyta wibracyjna) z góry, jedzie w prawo, operator z tyłu
    const w = u * 3.3, h = u * 1.5, o = mk(w * Dp, h * Dp), g = o.getContext('2d'); g.setTransform(Dp, 0, 0, Dp, 0, 0);
    const cx = u * 2.4, cy = h / 2;
    g.fillStyle = 'rgba(16,10,4,.35)'; g.beginPath(); rr(g, cx - u * .7 + u * .08, cy - u * .5 + u * .12, u * 1.5, u * 1.05, u * .1); g.fill();
    g.lineCap = 'round'; g.strokeStyle = '#2a2c2f'; g.lineWidth = u * .085;
    g.beginPath(); g.moveTo(cx - u * .5, cy - u * .24); g.lineTo(cx - u * 1.75, cy - u * .33); g.moveTo(cx - u * .5, cy + u * .24); g.lineTo(cx - u * 1.75, cy + u * .33); g.stroke();
    g.strokeStyle = '#141414'; g.lineWidth = u * .16; g.beginPath(); g.moveTo(cx - u * 1.82, cy - u * .44); g.lineTo(cx - u * 1.82, cy + u * .44); g.stroke();
    g.fillStyle = '#3c3f43'; g.beginPath(); rr(g, cx - u * .75, cy - u * .55, u * 1.5, u * 1.1, u * .08); g.fill();
    g.fillStyle = '#5b5f64'; g.fillRect(cx + u * .62, cy - u * .52, u * .1, u * 1.04);
    const gr = g.createLinearGradient(cx - u * .5, cy - u * .4, cx + u * .45, cy + u * .4); gr.addColorStop(0, '#ffc93c'); gr.addColorStop(.55, '#e8a419'); gr.addColorStop(1, '#b57d0e');
    g.fillStyle = gr; g.beginPath(); rr(g, cx - u * .56, cy - u * .39, u * 1.02, u * .78, u * .14); g.fill();
    g.fillStyle = '#1f2022'; g.beginPath(); rr(g, cx - u * .14, cy - u * .2, u * .34, u * .4, u * .06); g.fill();
    g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(cx - u * .48, cy - u * .33, u * .3, u * .06);
    g.fillStyle = '#1f2022'; for (let i = 0; i < 3; i++) g.fillRect(cx - u * .46 + i * u * .1, cy + u * .08, u * .05, u * .22);
    return { c: o, cx, cy, w, h };
  }

  /* ---------- stan ---------- */
  let cell = 30, curb = 12, D = 1, W = 0, H = 0, OX = 0, OY = 0;
  let SPR = [], CIEN = null, DUCH = null, FUGA = null, PYL = null, ZAG = null, TLO = null, WAR = null;
  let siatka = pusta(), p = null, nast = 'T', worek = [], ghostY = 0, vis = { x: 0, y: 0 };
  let stan = 'start', pkt = 0, rzedy = 0, poziom = 1, interwal = 800;
  let combo = 0, grawT = 0, lockT = 0, resets = 0, najnizej = 0, czysc = null, obrAnim = null, slad = null, koniecT = 0, konT = 0, ciemno = false;
  let kurzL = [], napisy = [], wstrzas = 0, podskok = 0, styl = '';
  let widac = false, laska = 0, raf = 0, last = 0, ukladKey = '';
  const trzym = { l: false, r: false, d: false }; let dasDir = 0, dasT = 0, arrT = 0, ostKlaw = 0;

  function pusta() { const s = []; for (let r = 0; r < RR; r++) s.push(new Array(COLS).fill(null)); return s; }
  function obrM(m, dir) { const n = m.length, r = []; for (let i = 0; i < n; i++) { const w = []; for (let j = 0; j < n; j++) w.push(dir > 0 ? m[n - 1 - j][i] : m[j][n - 1 - i]); r.push(w); } return r; }
  function kolizja(m, px, py, s) { s = s || siatka; for (let i = 0; i < m.length; i++) for (let j = 0; j < m.length; j++) { if (!m[i][j]) continue; const gx = px + j, gy = py + i;
    if (gx < 0 || gx >= COLS || gy < 0 || gy >= RR || s[gy][gx]) return true; } return false; }
  function zWorka() { if (!worek.length) { worek = TYPY.split(''); for (let i = worek.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [worek[i], worek[j]] = [worek[j], worek[i]]; } } return worek.pop(); }
  function nowyKlocek(t) { return { t, k: KOLOR[t], m: KSZ[t].map(r => r.map(v => v ? 1 + ((Math.random() * 4) | 0) : 0)), r: 0, x: t === 'O' ? 4 : 3, y: 1 }; }
  function wpisz(s, m, px, py, k) { for (let i = 0; i < m.length; i++) for (let j = 0; j < m.length; j++) if (m[i][j]) s[py + i][px + j] = { k, v: m[i][j] - 1 }; }
  function usunPelne(s) { let n = 0; for (let r = RR - 1; r >= 0; r--) if (s[r].every(Boolean)) { s.splice(r, 1); n++; } for (let i = 0; i < n; i++) s.unshift(new Array(COLS).fill(null)); return n; }

  /* ---------- prosty „majster”: ocenia ułożenie (do pokazu na starcie i do testów) ---------- */
  function ocena(s, linie) { const h = []; let dziury = 0;
    for (let c = 0; c < COLS; c++) { let top = RR; for (let r = 0; r < RR; r++) if (s[r][c]) { top = r; break; } h.push(RR - top); for (let r = top + 1; r < RR; r++) if (!s[r][c]) dziury++; }
    let bump = 0; for (let c = 0; c < COLS - 1; c++) bump += Math.abs(h[c] - h[c + 1]);
    return -.51 * h.reduce((a, b) => a + b, 0) + .76 * linie - .36 * dziury - .18 * bump; }
  function najlepszy(s, t, mStart) { let best = null, m = mStart || KSZ[t].map(r => r.map(v => v ? 1 + ((Math.random() * 4) | 0) : 0)); const ile = t === 'O' ? 1 : 4;
    for (let r = 0; r < ile; r++) { for (let px = -3; px <= COLS; px++) { if (kolizja(m, px, 0, s)) continue; let py = 0; while (!kolizja(m, px, py + 1, s)) py++;
        const k = s.map(w => w.slice()); wpisz(k, m, px, py, 0); const sc = ocena(k, usunPelne(k)) + Math.random() * .02; if (!best || sc > best.sc) best = { sc, m, r, x: px, y: py }; }
      m = obrM(m, 1); }
    return best; }

  /* ---------- układ: rozmiar pola liczony z szerokości i wysokości ekranu ---------- */
  const pasekH = () => { const e = document.getElementById('pasek'); return e ? e.getBoundingClientRect().height : 64; };
  function uklad(wymus) {
    const pw = pole.clientWidth; if (!pw || !gotowe) return false;
    const st = getComputedStyle(pole), pad = parseFloat(st.paddingLeft) || 0, padV = (parseFloat(st.paddingTop) || 0) + (parseFloat(st.paddingBottom) || 0), gap = parseFloat(st.columnGap) || 0, rgap = parseFloat(st.rowGap) || 0;
    const waski = WASKI.matches, wew = pw - pad * 2;
    const vh = innerHeight, dostH = vh - pasekH() - (waski ? 14 : 24) - padV;
    let maxW, maxH;
    if (waski) { const hud = $('.kos-hud'), na = $('.kos-nast'), ster = $('.kos-ster'); const g1 = Math.max(hud ? hud.offsetHeight : 0, na ? na.offsetHeight : 0);
      maxW = wew; maxH = dostH - g1 - (ster ? ster.offsetHeight : 0) - rgap * 2; }
    else { const bok = clamp(wew * .24, 200, 320); maxW = wew - 2 * (bok + gap); maxH = dostH; }
    let c = Math.floor(Math.min((maxW - 24) / COLS, (maxH - 24) / ROWS)); c = clamp(c, 14, 40);
    const cb = Math.round(clamp(c * (waski ? .34 : .4), 8, 15));
    c = clamp(Math.floor(Math.min((maxW - 2 * cb) / COLS, (maxH - 2 * cb) / ROWS)), 14, 40);
    const Dn = Math.min(devicePixelRatio || 1, 2), key = c + '|' + cb + '|' + Dn;
    if (key === ukladKey && !wymus) return true;
    ukladKey = key; cell = c; curb = cb; D = Dn; OX = curb; OY = curb; W = COLS * cell + 2 * curb; H = ROWS * cell + 2 * curb;
    cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.width = Math.round(W * D); cv.height = Math.round(H * D);
    SPR = KOL.map((_, k) => [0, 1, 2, 3].map(v => sprite(k, v, cell, D)));
    CIEN = cienSprite(cell, D); DUCH = duchSprite(cell, D); FUGA = fugaSprite(cell, D); PYL = PYL || pylSprite(); ZAG = zagSprite(cell, D);
    TLO = zrobTlo(); WAR = mk(cv.width, cv.height); kurzL = []; napisy = [];
    rysujWarstwe(czysc && !czysc.spad ? new Set(czysc.rows) : null); rysujNast();
    return true;
  }
  const PX = v => Math.round(v * D) / D; // do pikseli urządzenia: ostre kostki
  const kolX = c => PX(OX + c * cell), wierszY = r => PX(OY + (r - HID) * cell);

  function zrobTlo() {
    const c = mk(W * D, H * D), g = c.getContext('2d'), R = rng(11);
    g.fillStyle = '#2d2b26'; g.fillRect(0, 0, c.width, c.height);
    g.fillStyle = piasekWzor(g, .5, D, false); g.fillRect(OX * D, OY * D, COLS * cell * D, ROWS * cell * D);
    g.setTransform(D, 0, 0, D, 0, 0);
    const bw = COLS * cell, bh = ROWS * cell;
    g.fillStyle = 'rgba(66,46,22,.24)'; g.fillRect(OX, OY, bw, bh); // wilgotna, zagęszczona podsypka
    for (let i = 0; i < 16; i++) { const px = OX + R() * bw, py = OY + R() * bh, rad = cell * (1 + R() * 2.5), gr = g.createRadialGradient(px, py, 0, px, py, rad);
      gr.addColorStop(0, R() < .5 ? 'rgba(40,26,10,.09)' : 'rgba(255,240,210,.07)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(px - rad, py - rad, rad * 2, rad * 2); }
    // bruzdy po ściąganiu podsypki łatą: pomagają celować w kolumnę
    for (let i = 1; i < COLS; i++) { const xx = PX(OX + i * cell); g.fillStyle = 'rgba(255,238,205,.09)'; g.fillRect(xx - 1, OY, 1, bh); g.fillStyle = 'rgba(38,24,10,.11)'; g.fillRect(xx, OY, 1, bh); }
    // cień obrzeży na podsypce
    const e = cell * .55; let gr;
    gr = g.createLinearGradient(0, OY, 0, OY + e); gr.addColorStop(0, 'rgba(20,12,4,.42)'); gr.addColorStop(1, 'rgba(20,12,4,0)'); g.fillStyle = gr; g.fillRect(OX, OY, bw, e);
    gr = g.createLinearGradient(OX, 0, OX + e, 0); gr.addColorStop(0, 'rgba(20,12,4,.34)'); gr.addColorStop(1, 'rgba(20,12,4,0)'); g.fillStyle = gr; g.fillRect(OX, OY, e, bh);
    gr = g.createLinearGradient(OX + bw, 0, OX + bw - e * .6, 0); gr.addColorStop(0, 'rgba(20,12,4,.18)'); gr.addColorStop(1, 'rgba(20,12,4,0)'); g.fillStyle = gr; g.fillRect(OX + bw - e * .6, OY, e * .6, bh);
    // obrzeża betonowe: góra i dół na całą szerokość, boki pomiędzy
    const dl = cell * 2.5;
    for (const y0 of [0, H - curb]) { const n = Math.max(2, Math.round(W / dl)), w = W / n; for (let i = 0; i < n; i++) obrzeze(g, i * w, y0, w, curb, i + (y0 ? 40 : 0)); }
    for (const x0 of [0, W - curb]) { const hh = H - 2 * curb, n = Math.max(2, Math.round(hh / dl)), h = hh / n; for (let i = 0; i < n; i++) obrzeze(g, x0, curb + i * h, curb, h, i + (x0 ? 80 : 20)); }
    return c;
  }
  function obrzeze(g, x0, y0, w, h, seed) {
    const R = rng(seed * 7 + 3), j = .9, a = x0 + j / 2, b = y0 + j / 2, ww = w - j, hh = h - j, T = TEX.grafit;
    g.save(); g.beginPath(); rr(g, a, b, ww, hh, 1.6); g.clip();
    g.fillStyle = '#8a8983'; g.fillRect(a, b, ww, hh);
    if (T) { const sw = Math.min(T.w, ww * 5), sh = Math.min(T.h, hh * 5); g.globalCompositeOperation = 'overlay'; g.globalAlpha = .9; g.drawImage(T.det, R() * (T.w - sw), R() * (T.h - sh), sw, sh, a, b, ww, hh); g.globalAlpha = 1; g.globalCompositeOperation = 'source-over'; }
    const f = (R() - .5) * .12; g.fillStyle = f > 0 ? `rgba(255,255,255,${f})` : `rgba(0,0,0,${-f})`; g.fillRect(a, b, ww, hh);
    const e = Math.min(ww, hh) * .24, X1 = a + ww, Y1 = b + hh;
    poly(g, [[a, b], [X1, b], [X1 - e, b + e], [a + e, b + e]], 'rgba(255,252,240,.34)');
    poly(g, [[a, b], [a + e, b + e], [a + e, Y1 - e], [a, Y1]], 'rgba(255,252,240,.2)');
    poly(g, [[a, Y1], [a + e, Y1 - e], [X1 - e, Y1 - e], [X1, Y1]], 'rgba(0,0,0,.32)');
    poly(g, [[X1, b], [X1, Y1], [X1 - e, Y1 - e], [X1 - e, b + e]], 'rgba(0,0,0,.24)');
    g.restore(); g.strokeStyle = 'rgba(0,0,0,.45)'; g.lineWidth = 1 / D; g.beginPath(); rr(g, a, b, ww, hh, 1.6); g.stroke();
  }

  /* ---------- warstwa ułożonych kostek ---------- */
  function rysujKamien(g, k, v, px, py, alfa, skala) {
    const s = SPR[k] && SPR[k][v]; if (!s) return;
    if (alfa != null && alfa < 1) g.globalAlpha = Math.max(0, alfa);
    if (skala && skala !== 1) { const c = cell / 2, w = s.w * skala; g.drawImage(s.c, px + c - w / 2, py + c - w / 2, w, w); }
    else g.drawImage(s.c, px - s.pad, py - s.pad, s.w, s.w);
    g.globalAlpha = 1;
  }
  function rysujSiatke(g, pomin, dyRzad) { // najpierw jasna fuga pod wszystkimi kostkami, potem kostki
    for (let r = HID; r < RR; r++) { if (pomin && pomin.has(r)) continue; const dy = dyRzad ? dyRzad(r) : 0; for (let c = 0; c < COLS; c++) if (siatka[r][c]) g.drawImage(FUGA, kolX(c), wierszY(r) + dy, cell, cell); }
    for (let r = HID; r < RR; r++) { if (pomin && pomin.has(r)) continue; const dy = dyRzad ? dyRzad(r) : 0; for (let c = 0; c < COLS; c++) { const st = siatka[r][c]; if (st) rysujKamien(g, st.k, st.v, kolX(c), wierszY(r) + dy); } }
  }
  // warstwa = tło (podsypka, obrzeża) + ułożone kostki: jedno kopiowanie na klatkę
  function rysujWarstwe(pomin) { if (!WAR || !TLO) return; const g = WAR.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(TLO, 0, 0); g.setTransform(D, 0, 0, D, 0, 0); rysujSiatke(g, pomin); }

  /* ---------- rysowanie klatki ---------- */
  function rysujKlocek(g, m, k, px, py, kat, alfa) {
    const n = m.length;
    g.save(); if (kat) { const c = n * cell / 2; g.translate(px + c, py + c); g.rotate(kat); g.translate(-px - c, -py - c); }
    const dx = cell * .14, dy = cell * .26; // cień: kostka wisi nad podsypką
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (m[i][j]) g.drawImage(CIEN.c, px + j * cell - CIEN.pad + dx, py + i * cell - CIEN.pad + dy, CIEN.w, CIEN.w);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (m[i][j]) { const z = m[i][j] === ZL; rysujKamien(g, z ? ZLOTA : k, z ? 0 : m[i][j] - 1, px + j * cell, py + i * cell, alfa); }
    g.restore();
  }
  function rysuj() {
    if (!TLO || !W) return;
    x.setTransform(1, 0, 0, 1, 0, 0);
    if (czysc && czysc.spad) { x.drawImage(TLO, 0, 0); x.setTransform(D, 0, 0, D, 0, 0); const e = czysc.e; rysujSiatke(x, null, r => -czysc.spad[r] * cell * (1 - e)); }
    else { x.drawImage(WAR, 0, 0); x.setTransform(D, 0, 0, D, 0, 0); }
    if (czysc && !czysc.spad) rysujCzysc();
    if (ciemno || stan === 'konczy') { const k = ciemno ? ROWS : clamp(konT / 650, 0, 1) * ROWS; x.fillStyle = 'rgba(16,14,10,.5)'; x.fillRect(OX, OY, COLS * cell, k * cell); }
    if (p && !czysc) {
      if (ghostY > p.y + 0) for (let i = 0; i < p.m.length; i++) for (let j = 0; j < p.m.length; j++) if (p.m[i][j] && ghostY + i >= HID) x.drawImage(DUCH, PX(OX + (vis.x + j) * cell), wierszY(ghostY + i), cell, cell);
      if (slad) { const a = 1 - slad.t / 180; if (a > 0) { for (let j = 0; j < slad.m.length; j++) { let top = -1, bot = -1; for (let i = 0; i < slad.m.length; i++) if (slad.m[i][j]) { if (top < 0) top = i; bot = i; } if (top < 0) continue;
          const xx = OX + (slad.x + j) * cell + cell * .12, y0 = OY + (slad.y0 + top - HID) * cell, y1 = OY + (slad.y1 + top - HID) * cell; if (y1 <= y0) continue;
          const gr = x.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, 'rgba(255,246,222,0)'); gr.addColorStop(1, `rgba(255,246,222,${.42 * a})`); x.fillStyle = gr; x.fillRect(xx, y0, cell * .76, y1 - y0); } } }
      const kat = obrAnim ? obrAnim.od * Math.pow(1 - clamp(obrAnim.t / 110, 0, 1), 3) : 0;
      rysujKlocek(x, p.m, p.k, PX(OX + vis.x * cell), PX(OY + (vis.y - HID) * cell), kat);
    }
    for (const f of kurzL) { const u = f.t / f.d, s = f.r * (1 + u * 1.7); x.globalAlpha = .6 * (1 - u) * (u < .1 ? u / .1 : 1);
      if (f.zl) { x.globalAlpha = 1 - u; x.fillStyle = '#ffd25a'; x.save(); x.translate(f.x, f.y); x.rotate(u * 3); x.fillRect(-f.r / 2, -f.r / 2, f.r, f.r); x.restore(); } else x.drawImage(PYL, f.x - s, f.y - s, s * 2, s * 2); }
    x.globalAlpha = 1;
    for (const n of napisy) { const u = n.t / n.d, a = u < .12 ? u / .12 : 1 - clamp((u - .62) / .38, 0, 1), fs = n.w ? Math.round(cell * 1.45) : Math.round(cell * .82);
      x.globalAlpha = a; x.font = `900 ${fs}px "Big Shoulders Display","Arial Narrow",sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round';
      const yy = n.y - u * cell * (n.ruch != null ? n.ruch : n.w ? .6 : 1.3), sc = n.w ? 1 + .25 * Math.pow(1 - clamp(u / .18, 0, 1), 2) : 1;
      if (n.stempel) { const k = 1 + .7 * Math.pow(1 - clamp(u / .14, 0, 1), 2), tw = x.measureText(n.txt).width + fs * .8, th = fs * 1.25;
        x.save(); x.translate(n.x, n.y); x.rotate(-.12); x.scale(k, k); x.strokeStyle = n.kol; x.lineWidth = Math.max(3, fs * .09); x.fillStyle = 'rgba(14,30,18,.55)'; x.beginPath(); rr(x, -tw / 2, -th / 2, tw, th, fs * .16); x.fill(); x.stroke();
        x.lineWidth = Math.max(1.5, fs * .035); x.beginPath(); rr(x, -tw / 2 + fs * .14, -th / 2 + fs * .14, tw - fs * .28, th - fs * .28, fs * .1); x.stroke(); x.fillStyle = n.kol; x.fillText(n.txt, 0, fs * .04); x.restore(); continue; }
      x.save(); x.translate(n.x, yy); x.scale(sc, sc); x.lineWidth = Math.max(3, fs * .14); x.strokeStyle = 'rgba(20,16,10,.85)'; x.strokeText(n.txt, 0, 0); x.fillStyle = n.kol || '#fff'; x.fillText(n.txt, 0, 0); x.restore(); }
    x.globalAlpha = 1;
  }
  // zagęszczarka przejeżdża po pełnym rzędzie, kostki „siadają” i znikają w kurzu
  const T_BLYSK = RM ? 170 : 130, T_ZAG0 = RM ? 170 : 100, T_ZAG = RM ? 150 : 300, STAG = 40, T_SIAD = 90, T_SPAD = RM ? 1 : 150;
  const czasZag = c => RM ? T_ZAG0 + T_ZAG : T_ZAG0 + T_ZAG + (c.rows.length - 1) * STAG + T_SIAD;
  const zagX = u => OX - cell * 1.3 + (COLS * cell + cell * 2.6) * u;
  function przejazd(c, i, cc) { const cx = OX + (cc + .5) * cell; return RM ? T_ZAG0 : T_ZAG0 + i * STAG + T_ZAG * (cx - (OX - cell * 1.3)) / (COLS * cell + cell * 2.6); }
  function rysujCzysc() {
    const c = czysc, t = c.t;
    c.rows.forEach((r, i) => { const yy = wierszY(r);
      for (let cc = 0; cc < COLS; cc++) { const st = c.kopia[i][cc]; if (!st) continue; const s = clamp((t - przejazd(c, i, cc)) / (RM ? T_ZAG : T_SIAD), 0, 1); if (s >= 1) continue;
        x.drawImage(FUGA, kolX(cc), yy, cell, cell); rysujKamien(x, st.k, st.v, kolX(cc), yy + s * cell * .06, 1 - s, 1 - .18 * s); }
      if (t < T_BLYSK) { x.globalCompositeOperation = 'lighter'; x.fillStyle = `rgba(255,236,190,${.55 * (1 - t / T_BLYSK)})`; x.fillRect(OX, yy, COLS * cell, cell); x.globalCompositeOperation = 'source-over'; }
      if (!RM) { const u = (t - T_ZAG0 - i * STAG) / T_ZAG; if (u > 0 && u < 1) { const jx = (Math.random() - .5) * 1.6, jy = (Math.random() - .5) * 1.6; x.drawImage(ZAG.c, zagX(u) - ZAG.cx + jx, yy + cell / 2 - ZAG.cy + jy, ZAG.w, ZAG.h); } }
    });
  }

  /* ---------- logika gry ---------- */
  function duch() { if (!p) return; let y = p.y; while (!kolizja(p.m, p.x, y + 1)) y++; ghostY = y; }
  function wejdz() {
    p = nowyKlocek(nast); nast = zWorka();
    if (Math.random() < .2) { const pola = []; p.m.forEach((w, i) => w.forEach((v, j) => { if (v) pola.push([i, j]); })); const [i, j] = pola[(Math.random() * pola.length) | 0]; p.m[i][j] = ZL; }
    if (kolizja(p.m, p.x, p.y)) { p.y = 0; if (kolizja(p.m, p.x, p.y)) { koniecGry(); return false; } }
    else if (!kolizja(p.m, p.x, p.y + 1)) p.y++;
    vis.x = p.x; vis.y = p.y - (RM ? 0 : 1.1); obrAnim = null; slad = null; lockT = 0; resets = 0; najnizej = p.y; grawT = 0;
    duch(); rysujNast(); return true;
  }
  function poruszony() { if (lockT > 0 && resets < 15) { lockT = 0; resets++; } }
  function rusz(dx, dy) { if (!p || czysc || stan !== 'gra') return false; if (kolizja(p.m, p.x + dx, p.y + dy)) return false;
    p.x += dx; p.y += dy; if (dy > 0) { if (p.y > najnizej) { najnizej = p.y; resets = 0; } lockT = 0; } else poruszony(); duch(); return true; }
  function miekko() { if (rusz(0, 1)) { pkt += 1; grawT = 0; hud(); return true; } return false; }
  function obroc(dir) {
    if (!p || czysc || stan !== 'gra' || p.t === 'O') return false;
    const m = obrM(p.m, dir), r1 = (p.r + (dir > 0 ? 1 : 3)) % 4, tab = (p.t === 'I' ? KICK_I : KICK)['' + p.r + r1];
    for (const [kx, ky] of tab) if (!kolizja(m, p.x + kx, p.y - ky)) { p.m = m; p.r = r1; p.x += kx; p.y -= ky; if (!RM) obrAnim = { t: 0, od: -dir * Math.PI / 2 }; poruszony(); duch(); return true; }
    return false;
  }
  function zrzut() {
    if (!p || czysc || stan !== 'gra') return; const y0 = vis.y; let n = 0; while (!kolizja(p.m, p.x, p.y + 1)) { p.y++; n++; }
    pkt += 2 * n; if (n > 0 && !RM) slad = { x: p.x, y0, y1: p.y, m: p.m, t: 0 }; vis.y = p.y; vis.x = p.x; obrAnim = null; zablokuj(true);
  }
  function zablokuj(twardo) {
    let nadGora = false;
    for (let i = 0; i < p.m.length; i++) for (let j = 0; j < p.m.length; j++) if (p.m[i][j]) { const gy = p.y + i, gx = p.x + j; siatka[gy][gx] = p.m[i][j] === ZL ? { k: ZLOTA, v: 0 } : { k: p.k, v: p.m[i][j] - 1 }; if (gy < HID) nadGora = true;
      if (!(i + 1 < p.m.length && p.m[i + 1][j])) kurz(OX + (gx + .5) * cell, OY + (gy - HID + 1) * cell, twardo ? 4 : 2, twardo ? 1.4 : .8); }
    if (twardo && !RM) podskok = 1;
    wibruj(twardo ? 14 : 8);
    p = null;
    const pelne = []; for (let r = HID; r < RR; r++) if (siatka[r].every(Boolean)) pelne.push(r);
    combo = pelne.length ? combo + 1 : 0;
    if (pelne.length) startCzysc(pelne);
    else if (nadGora) { rysujWarstwe(); koniecGry(); return; }
    else { rysujWarstwe(); wejdz(); }
    hud();
  }
  function startCzysc(rows) {
    czysc = { rows, t: 0, e: 0, kopia: rows.map(r => siatka[r].slice()), ost: rows.map(() => -1), spad: null };
    rysujWarstwe(new Set(rows));
    const n = rows.length, zl = czysc.kopia.reduce((a, w) => a + w.filter(c => c && c.k === ZLOTA).length, 0);
    const bZl = zl * 250 * poziom, bCo = combo > 1 ? 50 * (combo - 1) * poziom : 0, dodaj = PUNKTY[n] * poziom + bZl + bCo; pkt += dodaj; rzedy += n;
    const sy = Math.min(OY + ((rows[0] + rows[n - 1]) / 2 - HID + .5) * cell, OY + (ROWS - 2.4) * cell), sx = OX + COLS * cell / 2; // napisy zawsze w polu
    const tytul = ['', '', 'PODWÓJNIE!', 'POTRÓJNIE!', 'KOSTRIS!'][n];
    if (tytul) { napis(tytul, sx, sy - cell * .7, true, n === 4 ? '#ffd25a' : '#fff1c9'); napis('+' + fmt(dodaj), sx, sy + cell * 1.05, false, '#fff'); napisy[napisy.length - 1].ruch = .6; napisy[napisy.length - 1].d = 1300; }
    else napis('+' + fmt(dodaj), sx, sy, false, '#fff');
    if (bZl) { napis('Złota kostka! +' + fmt(bZl), sx, sy - cell * (tytul ? 2.1 : 1.3), false, '#ffd25a'); napisy[napisy.length - 1].d = 1500; for (let i = 0; i < 14; i++) kurzL.push({ x: OX + Math.random() * COLS * cell, y: sy + (Math.random() - .5) * cell, vx: (Math.random() - .5) * .12, vy: -.03 - Math.random() * .06, r: cell * .14, t: 0, d: 700, zl: true }); }
    if (bCo) { napis('Seria ×' + combo + '  +' + fmt(bCo), sx, sy + cell * (tytul ? 2.1 : 1.2), false, '#9ff0b4'); napisy[napisy.length - 1].d = 1200; }
    let ogl = (n === 1 ? 'Rząd ułożony' : n === 4 ? 'Kostris! Cztery rzędy naraz' : rz(n) + ' naraz') + (bZl ? ', złota kostka' : '') + (bCo ? ', seria ' + combo : '') + ', plus ' + fmt(dodaj) + ' punktów.';
    const nowy = 1 + Math.floor(rzedy / 8);
    if (nowy > poziom) { poziom = nowy; interwal = interwalDla(poziom); napisy = napisy.filter(q => !q.poz); napis('POZIOM ' + poziom, sx, OY + ROWS * cell * .3, true, '#9ff0b4'); Object.assign(napisy[napisy.length - 1], { poz: true, stempel: true, d: 1600 }); ogl += ' Poziom ' + poziom + '.'; }
    mow(ogl); wibruj(n === 4 ? [30, 40, 30, 40, 70] : 16 + n * 10);
    if (!RM) wstrzas = Math.max(wstrzas, .8 + n * .35);
  }
  function koniecCzysc() {
    const c = czysc, n = c.rows.length, zost = []; for (let r = 0; r < RR; r++) if (!c.rows.includes(r)) zost.push(r);
    const nowa = [], spad = new Array(RR).fill(0); for (let i = 0; i < n; i++) nowa.push(new Array(COLS).fill(null));
    zost.forEach((r, i) => { const nr = i + n; nowa.push(siatka[r]); spad[nr] = nr - r; });
    siatka = nowa; c.spad = spad; c.t2 = 0; c.e = 0;
  }
  function kurz(px, py, n, sila) { if (RM) n = Math.ceil(n / 2); for (let i = 0; i < n; i++) kurzL.push({ x: px + (Math.random() - .5) * cell * .7, y: py + (Math.random() - .5) * cell * .3, vx: (Math.random() - .5) * .07 * sila, vy: (Math.random() - .75) * .05 * sila, r: cell * (.16 + Math.random() * .2), t: 0, d: 360 + Math.random() * 340 });
    if (kurzL.length > 180) kurzL.splice(0, kurzL.length - 180); }
  function napis(txt, px, py, w, kol) { napisy.push({ txt, x: px, y: py, t: 0, d: w ? 1300 : 900, w, kol }); }

  function aktualizuj(dt) {
    for (const f of kurzL) { f.t += dt; f.x += f.vx * dt; f.y += f.vy * dt; f.vx *= .985; f.vy *= .985; } kurzL = kurzL.filter(f => f.t < f.d);
    for (const n of napisy) n.t += dt; napisy = napisy.filter(n => n.t < n.d);
    if (obrAnim) { obrAnim.t += dt; if (obrAnim.t > 110) obrAnim = null; }
    if (slad) { slad.t += dt; if (slad.t > 180) slad = null; }
    // wstrząs (zagęszczarka) i podskok (zrzut) – tylko transform CSS, bez przerysowania tła
    wstrzas = Math.max(0, wstrzas - dt / 420); podskok = Math.max(0, podskok - dt / 140);
    const sx = wstrzas > 0 && czysc && !czysc.spad ? (Math.random() - .5) * 2.4 * wstrzas : 0, sy = (wstrzas > 0 && czysc && !czysc.spad ? (Math.random() - .5) * 2.4 * wstrzas : 0) + podskok * 2.2;
    const ns = sx || sy ? `translate(${sx.toFixed(2)}px,${sy.toFixed(2)}px)` : ''; if (ns !== styl) { styl = ns; cv.style.transform = ns; }
    if (stan === 'konczy') { konT += dt; if (konT > 900) pokazKoniec(); return; }
    if (stan !== 'gra') return;
    if (czysc) { const c = czysc; c.t += dt;
      if (!c.spad) { if (!RM) c.rows.forEach((r, i) => { for (let cc = c.ost[i] + 1; cc < COLS; cc++) { if (c.t < przejazd(c, i, cc)) break; c.ost[i] = cc; if (c.kopia[i][cc]) kurz(OX + (cc + .5) * cell, wierszY(r) + cell * .5, 3, 1.2); } });
        if (c.t >= czasZag(c)) koniecCzysc(); }
      if (c.spad) { c.t2 += dt; const u = clamp(c.t2 / T_SPAD, 0, 1); c.e = 1 - Math.pow(1 - u, 3);
        if (u >= 1) { czysc = null; rysujWarstwe(); if (siatka.slice(0, HID).some(w => w.some(Boolean))) { koniecGry(); return; } wejdz(); hud(); } }
      return;
    }
    if (!p) return;
    // przytrzymane kierunki: opóźnienie 170 ms, potem co 50 ms
    if (dasDir) { const held = dasDir < 0 ? trzym.l : trzym.r; if (!held) dasDir = 0; else { dasT += dt; if (dasT > 170) { arrT += dt; while (arrT >= 50) { arrT -= 50; if (!rusz(dasDir, 0)) { arrT = 0; break; } } } } }
    // grawitacja
    const iv = trzym.d ? Math.min(interwal, 38) : interwal; grawT += dt;
    while (p && grawT >= iv) { grawT -= iv; if (!kolizja(p.m, p.x, p.y + 1)) { p.y++; if (p.y > najnizej) { najnizej = p.y; resets = 0; } lockT = 0; if (trzym.d) pkt += 1; } else { grawT = 0; break; } }
    if (p && kolizja(p.m, p.x, p.y + 1)) { lockT += dt; if (lockT >= 500 || resets >= 15) { zablokuj(false); return; } }
    // płynny ruch na ekranie
    if (p) { const kx = 1 - Math.exp(-dt / 26), ky = 1 - Math.exp(-dt / 38); vis.x += (p.x - vis.x) * kx; vis.y += (p.y - vis.y) * ky; if (Math.abs(p.x - vis.x) < .01) vis.x = p.x; if (Math.abs(p.y - vis.y) < .01) vis.y = p.y; }
    if (trzym.d) hud();
  }

  /* ---------- pętla: tylko w grze i gdy widać planszę ---------- */
  const moznaPetla = () => (stan === 'gra' || stan === 'konczy') && (widac || teraz() < laska) && !document.hidden;
  function petlaStart() { if (!raf && moznaPetla()) { last = teraz(); raf = requestAnimationFrame(petla); } }
  function petla(now) { raf = 0; if (!moznaPetla()) { if (stan === 'konczy') pokazKoniec(); return; }
    const dt = Math.min(50, now - last); last = now; const t0 = teraz(); aktualizuj(dt); rysuj(); pomiar.ms += teraz() - t0; pomiar.n++; raf = requestAnimationFrame(petla); }
  const pomiar = { ms: 0, n: 0 };

  /* ---------- HUD, podgląd, komunikaty ---------- */
  const hudEl = { poz: $('#kosPoziom'), pkt: $('#kosPkt'), rz: $('#kosRzedy') }; const hudOst = {};
  function ustaw(el, k, v) { if (el && hudOst[k] !== v) { hudOst[k] = v; el.textContent = v; } }
  function hud() { ustaw(hudEl.poz, 'poz', 'Poziom ' + poziom); ustaw(hudEl.pkt, 'pkt', fmt(pkt) + ' pkt'); ustaw(hudEl.rz, 'rz', rz(rzedy)); }
  const live = $('#kosLive'); let liveT = 0;
  function mow(t) { if (!live) return; clearTimeout(liveT); live.textContent = ''; liveT = setTimeout(() => { live.textContent = t; }, 60); }
  function rysujNast() {
    if (!nCv || !SPR.length) return; const w = nCv.clientWidth, h = nCv.clientHeight; if (!w || !h) return;
    const Dn = Math.min(devicePixelRatio || 1, 2); if (nCv.width !== Math.round(w * Dn)) { nCv.width = Math.round(w * Dn); nCv.height = Math.round(h * Dn); }
    const g = nCv.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, nCv.width, nCv.height); g.setTransform(Dn, 0, 0, Dn, 0, 0);
    // paleta z desek
    const pw = w * .94, ph = h * .86, px0 = (w - pw) / 2, py0 = (h - ph) / 2, n = h > 60 ? 6 : 4, dh = ph / n;
    g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(px0 + 3, py0 + 4, pw, ph);
    g.fillStyle = '#5a4128'; g.fillRect(px0, py0, pw, ph);
    const R = rng(3); for (let i = 0; i < n; i++) { const yy = py0 + i * dh; g.fillStyle = ['#b98c58', '#c49763', '#ad8250', '#bf935f'][i % 4]; g.fillRect(px0, yy + dh * .08, pw, dh * .78);
      g.fillStyle = 'rgba(90,60,30,.25)'; for (let k = 0; k < 3; k++) g.fillRect(px0 + R() * pw * .8, yy + dh * (.2 + R() * .5), pw * (.1 + R() * .2), 1); }
    g.fillStyle = '#4b3826'; for (const fx of [0, .5, 1]) g.fillRect(px0 + fx * (pw - 4), py0, 4, ph);
    // klocek na palecie
    const m = KSZ[nast], K = KOLOR[nast]; let a = 9, b = 9, c = -1, d = -1;
    m.forEach((row, i) => row.forEach((v, j) => { if (v) { a = Math.min(a, j); b = Math.min(b, i); c = Math.max(c, j); d = Math.max(d, i); } }));
    const bw = c - a + 1, bh = d - b + 1, cs = Math.min(pw * .86 / bw, ph * .86 / bh, cell * 1.1), ox = w / 2 - bw * cs / 2, oy = h / 2 - bh * cs / 2;
    m.forEach((row, i) => row.forEach((v, j) => { if (!v) return; const s = SPR[K][(i + j) % 4], sc = cs / cell, X = ox + (j - a) * cs, Y = oy + (i - b) * cs;
      g.drawImage(s.c, X - s.pad * sc, Y - s.pad * sc, s.w * sc, s.w * sc); }));
    const nz = $('#kosNastNaz'); if (nz) nz.textContent = KOL[K].naz;
  }
  function ikona() { // miniatura na zakładce: kawałek planszy
    const ic = document.querySelector('#tKos .kos-ikona'); if (!ic) return; const w = ic.clientWidth || 88, h = ic.clientHeight || 64, Dn = Math.min(devicePixelRatio || 1, 2);
    ic.width = Math.round(w * Dn); ic.height = Math.round(h * Dn); const g = ic.getContext('2d'); const cs = Math.round(h / 4.4), sp = KOL.map((_, k) => [0, 1, 2, 3].map(v => sprite(k, v, cs, Dn)));
    g.fillStyle = piasekWzor(g, .35, Dn, false); g.fillRect(0, 0, ic.width, ic.height); g.setTransform(Dn, 0, 0, Dn, 0, 0); g.fillStyle = 'rgba(66,46,22,.22)'; g.fillRect(0, 0, w, h);
    const uk = ['.TTT..', '..T...', 'JL..OO', 'JLLSOO'], cols = uk[0].length, ox = Math.round((w - cols * cs) / 2), cien = cienSprite(cs, Dn);
    uk.forEach((row, i) => [...row].forEach((ch, j) => { if (KOLOR[ch] == null) return; const s = sp[KOLOR[ch]][(i * 3 + j) % 4], X = ox + j * cs, Y = h - (uk.length - i) * cs - (i < 2 ? cs * .45 : 0);
      if (i < 2) g.drawImage(cien.c, X - cien.pad + cs * .14, Y - cien.pad + cs * .3, cien.w, cien.w); g.drawImage(s.c, X - s.pad, Y - s.pad, s.w, s.w); }));
  }
  function legenda() { // „Kolory w grze”: próbki z tych samych sprite'ów
    const ul = $('#kosKolory'); if (!ul || ul.childElementCount) return;
    ul.innerHTML = KOL.map((k, i) => { let u = ''; try { const s = sprite(i, 0, 22, 2), c = mk(44, 44); c.getContext('2d').drawImage(s.c, s.pad * 2, s.pad * 2, 44, 44, 0, 0, 44, 44); u = c.toDataURL(); } catch (e) { }
      return `<li${k.zloto ? ' class="kos-zl"' : ''}><i${u ? ` style="background-image:url(${u})"` : ''}></i>${k.zloto ? 'złota kostka: bonus' : k.naz}</li>`; }).join('');
  }

  /* ---------- pokaz na starcie: prawdziwa partia ułożona przez „majstra” ---------- */
  function partia() { // jedna krótka partia; zwraca liczbę dziur (do wyboru najładniejszej)
    siatka = pusta(); worek = []; let n = 0, h = 0;
    while (n < 40) { const t = zWorka(), b = najlepszy(siatka, t); if (!b) break; wpisz(siatka, b.m, b.x, b.y, KOLOR[t]); usunPelne(siatka); n++;
      h = 0; for (let r = 0; r < RR; r++) if (siatka[r].some(Boolean)) { h = RR - r; break; } if (n >= 10 && h >= 5) break; }
    let d = 0; for (let c = 0; c < COLS; c++) { let pod = false; for (let r = 0; r < RR; r++) { if (siatka[r][c]) pod = true; else if (pod) d++; } }
    return d + (h < 4 || h > 7 ? 5 : 0);
  }
  function pokaz() {
    let best = null; for (let i = 0; i < 8; i++) { const d = partia(); if (!best || d < best.d) best = { d, s: siatka, w: worek.slice() }; if (d === 0) break; }
    siatka = best.s; worek = best.w;
    nast = zWorka(); const t = zWorka(), b = najlepszy(siatka, t); p = nowyKlocek(t);
    if (b) { p.m = b.m; p.r = b.r; p.x = b.x; p.y = clamp(b.y - 6, HID, b.y); } vis.x = p.x; vis.y = p.y; duch();
    pkt = 0; rzedy = 0; poziom = 1; hud(); rysujWarstwe(); rysujNast();
  }

  /* ---------- przebieg gry ---------- */
  const ov = { start: $('#kosStart'), pauza: $('#kosPauza'), koniec: $('#kosKoniec') };
  function nakladka(k) { Object.entries(ov).forEach(([n, el]) => { if (el) el.hidden = n !== k; }); }
  function grajKlasy(on) { cv.classList.toggle('gram', on); pole.classList.toggle('gra-trwa', on); document.documentElement.classList.toggle('kos-gram', on); }
  function przewin() { // całe pole gry w kadrze (HUD, plansza, przyciski)
    const a = WASKI.matches ? ($('.kos-hud') || plansza) : pole, b = WASKI.matches ? ($('.kos-ster') || plansza) : pole;
    const top = Math.min(a.getBoundingClientRect().top, plansza.getBoundingClientRect().top), dol = Math.max(b.getBoundingClientRect().bottom, plansza.getBoundingClientRect().bottom), ph = pasekH();
    if (top >= ph - 2 && dol <= innerHeight + 2) return; const cel = scrollY + top - ph - (WASKI.matches ? 6 : 12);
    try { scrollTo({ top: cel, behavior: RM ? 'auto' : 'smooth' }); } catch (e) { scrollTo(0, cel); }
  }
  function puscWszystko() { trzym.l = trzym.r = trzym.d = false; dasDir = 0; $$('.kos-k.wcisniety').forEach(b => b.classList.remove('wcisniety')); }
  function graj() {
    if (!gotowe) { laduj().then(() => { uklad(true); graj(); }); return; }
    if (!W) uklad(true);
    siatka = pusta(); worek = []; pkt = 0; rzedy = 0; poziom = 1; interwal = interwalDla(1); czysc = null; kurzL = []; napisy = []; ciemno = false; konT = 0; combo = 0; puscWszystko();
    stan = 'gra'; nakladka(null); grajKlasy(true); nast = zWorka(); rysujWarstwe(); wejdz(); hud();
    laska = teraz() + 1300; przewin(); setTimeout(sprawdzWidok, 1350);
    try { plansza.focus({ preventScroll: true }); } catch (e) { /* stare przeglądarki */ }
    mow('Gra rozpoczęta. Poziom 1. Strzałki przesuwają i obracają, spacja zrzuca kostkę.'); petlaStart();
  }
  function pauza(powod) {
    if (stan !== 'gra') return; stan = 'pauza'; puscWszystko(); grajKlasy(false); if (styl) { styl = ''; cv.style.transform = ''; }
    nakladka('pauza'); rysuj(); mow('Pauza.');
    if (powod === 'klawisz') { const b = $('#kosDalej'); if (b) try { b.focus({ preventScroll: true }); } catch (e) { } }
  }
  function wznow() {
    if (stan !== 'pauza') return; stan = 'gra'; nakladka(null); grajKlasy(true); laska = teraz() + 900; przewin(); setTimeout(sprawdzWidok, 950);
    try { plansza.focus({ preventScroll: true }); } catch (e) { } mow('Gramy dalej.'); petlaStart();
  }
  function koniecGry() {
    p = null; czysc = null; puscWszystko(); stan = 'konczy'; konT = 0; wibruj([40, 60, 80]);
    if (RM || !moznaPetla()) { pokazKoniec(); return; } petlaStart();
  }
  function pokazKoniec() {
    if (stan !== 'konczy') return; stan = 'koniec'; ciemno = true; koniecT = teraz(); grajKlasy(false); if (styl) { styl = ''; cv.style.transform = ''; }
    const stary = czytajRek(), nowy = pkt > stary; if (nowy) piszRek(pkt); const rek = Math.max(pkt, stary);
    const t = $('#kosKTyt'), wy = $('#kosKWynik'), re = $('#kosKRek');
    if (t) t.textContent = nowy && pkt > 0 ? 'Nowy rekord!' : 'Koniec gry';
    if (wy) wy.innerHTML = `Punkty: <b>${fmt(pkt)}</b> · Poziom: <b>${poziom}</b> · Rzędy: <b>${rzedy}</b>`;
    if (re) re.innerHTML = `Rekord na tym urządzeniu: <b>${rek ? fmt(rek) + ' pkt' : 'brak'}</b>`;
    rekordy(); nakladka('koniec'); rysuj();
    mow(`Koniec gry. ${fmt(pkt)} punktów, poziom ${poziom}, ${rz(rzedy)}. ${nowy && pkt > 0 ? 'Nowy rekord!' : 'Rekord: ' + fmt(rek) + ' punktów.'}`);
    const b = $('#kosZnowu'); if (b && document.activeElement && pole.contains(document.activeElement)) try { b.focus({ preventScroll: true }); } catch (e) { }
  }
  function rekordy() { const r = czytajRek(), t = r ? fmt(r) + ' pkt' : 'brak'; const a = $('#kosRekord'); if (a) a.textContent = t; const hr = $('#kosRekordHud'); if (hr) hr.textContent = t; const e = document.getElementById('rekKos'); if (e) e.textContent = r ? 'Rekord: ' + t : 'Nowa gra'; }

  /* ---------- widoczność: pauza poza kadrem i w ukrytej karcie ---------- */
  function sprawdzWidok() { if (stan === 'gra' && !widac && teraz() >= laska) { const r = cv.getBoundingClientRect(), vis2 = Math.min(r.bottom, innerHeight) - Math.max(r.top, 0);
      if (!(r.width && vis2 >= Math.min(r.height, innerHeight) * .5)) { pauza('widok'); return; } widac = true; }
    petlaStart(); }
  new IntersectionObserver(es => { for (const e of es) { const ih = e.intersectionRect.height, bh = e.boundingClientRect.height; widac = e.isIntersecting && bh > 0 && ih >= Math.min(bh, innerHeight) * .5; } sprawdzWidok(); },
    { threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1] }).observe(cv);
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauza('karta'); });
  addEventListener('blur', () => pauza('okno'));

  /* ---------- klawiatura: tylko gdy gra trwa (inaczej strona przewija się normalnie) ---------- */
  const poza = t => t && t.closest && t.closest('input,textarea,select,[contenteditable="true"],[role="tablist"]');
  document.addEventListener('keydown', e => {
    if (stan === 'pauza' && (e.key === 'p' || e.key === 'P') && !poza(e.target)) { e.preventDefault(); wznow(); return; }
    if (stan !== 'gra' || poza(e.target) || e.metaKey || e.altKey || e.ctrlKey) return;
    const k = e.key; let ok = true;
    if (k === 'ArrowLeft') { if (!e.repeat) { trzym.l = true; rusz(-1, 0); dasDir = -1; dasT = 0; arrT = 0; } }
    else if (k === 'ArrowRight') { if (!e.repeat) { trzym.r = true; rusz(1, 0); dasDir = 1; dasT = 0; arrT = 0; } }
    else if (k === 'ArrowDown') trzym.d = true;
    else if (k === 'ArrowUp' || k === 'x' || k === 'X') { if (!e.repeat) obroc(1); }
    else if (k === 'z' || k === 'Z') { if (!e.repeat) obroc(-1); }
    else if (k === ' ' || k === 'Spacebar') { if (!e.repeat) zrzut(); }
    else if (k === 'p' || k === 'P' || k === 'Escape') pauza('klawisz');
    else ok = false;
    if (ok) { e.preventDefault(); ostKlaw = teraz(); }
  });
  document.addEventListener('keyup', e => {
    const k = e.key;
    if (k === 'ArrowLeft') { trzym.l = false; if (dasDir < 0) { dasDir = trzym.r ? 1 : 0; dasT = 0; arrT = 0; } }
    else if (k === 'ArrowRight') { trzym.r = false; if (dasDir > 0) { dasDir = trzym.l ? -1 : 0; dasT = 0; arrT = 0; } }
    else if (k === 'ArrowDown') trzym.d = false;
    else if ((k === ' ' || k === 'Spacebar') && stan === 'gra' && !poza(e.target)) e.preventDefault();
  });

  /* ---------- przyciski pod planszą ---------- */
  $$('.kos-k').forEach(b => {
    const k = b.dataset.k; let ptr = 0;
    const akcja = () => { if (stan === 'pauza') { wznow(); return; } if (stan !== 'gra') { if (stan === 'start' || (stan === 'koniec' && teraz() - koniecT > 700)) graj(); return; }
      if (k === 'lewo') { trzym.l = true; rusz(-1, 0); dasDir = -1; dasT = 0; arrT = 0; } else if (k === 'prawo') { trzym.r = true; rusz(1, 0); dasDir = 1; dasT = 0; arrT = 0; }
      else if (k === 'obrot') obroc(1); else if (k === 'zrzut') zrzut(); };
    const pusc = () => { b.classList.remove('wcisniety'); if (k === 'lewo') { trzym.l = false; if (dasDir < 0) dasDir = trzym.r ? 1 : 0; } if (k === 'prawo') { trzym.r = false; if (dasDir > 0) dasDir = trzym.l ? -1 : 0; } };
    b.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button !== 0) return; e.preventDefault(); ptr = teraz(); b.classList.add('wcisniety'); try { b.setPointerCapture(e.pointerId); } catch (er) { } akcja(); });
    b.addEventListener('pointerup', pusc); b.addEventListener('pointercancel', pusc); b.addEventListener('lostpointercapture', pusc);
    b.addEventListener('click', () => { if (teraz() - ptr < 700 || teraz() - ostKlaw < 300) return; akcja(); if (k === 'lewo' || k === 'prawo') pusc(); }); // Enter/spacja na przycisku
    b.addEventListener('contextmenu', e => e.preventDefault());
  });

  /* ---------- dotyk i mysz na planszy: stuknij = obróć, w bok = przesuń, w dół = zrzuć ---------- */
  let gest = null;
  cv.addEventListener('pointerdown', e => {
    if (gest || (e.pointerType === 'mouse' && e.button !== 0)) return;
    const ts = e.timeStamp || teraz(); gest = { id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: ts, tryb: null, kx: 0, ky: 0, hist: [[ts, e.clientY]] };
    if (stan === 'gra') { try { cv.setPointerCapture(e.pointerId); } catch (er) { } e.preventDefault(); }
  });
  cv.addEventListener('pointermove', e => {
    if (!gest || e.pointerId !== gest.id) return;
    const dx = e.clientX - gest.x0, dy = e.clientY - gest.y0;
    if (stan !== 'gra') { if (Math.abs(dx) > 26 && Math.abs(dx) > Math.abs(dy) * 1.3 && (stan === 'start' || (stan === 'koniec' && teraz() - koniecT > 900))) { gest = null; graj(); } return; }
    gest.hist.push([e.timeStamp || teraz(), e.clientY]); if (gest.hist.length > 8) gest.hist.shift();
    if (!gest.tryb) { if (Math.abs(dx) > 10 && Math.abs(dx) >= Math.abs(dy)) gest.tryb = 'x'; else if (dy > 10 && dy > Math.abs(dx)) gest.tryb = 'y'; else if (dy < -16) gest.tryb = 'gora'; }
    const krok = Math.max(16, cell * .9);
    if (gest.tryb === 'x') { const n = Math.trunc(dx / krok); while (gest.kx < n) { gest.kx++; rusz(1, 0); } while (gest.kx > n) { gest.kx--; rusz(-1, 0); } }
    else if (gest.tryb === 'y') { const n = Math.floor(dy / krok); while (gest.ky < n) { gest.ky++; if (!miekko()) { gest.ky = n; break; } } }
  });
  cv.addEventListener('pointerup', e => {
    if (!gest || e.pointerId !== gest.id) return; const g = gest; gest = null;
    const t1 = e.timeStamp || teraz(), dx = e.clientX - g.x0, dy = e.clientY - g.y0, dt = t1 - g.t0, tap = Math.hypot(dx, dy) < 12 && dt < 500;
    if (stan !== 'gra') { if (tap && (stan === 'start' || (stan === 'koniec' && teraz() - koniecT > 900))) graj(); return; }
    // szybki ruch bywa zgłoszony bez żadnego pointermove: kierunek ustalamy wtedy z całego gestu
    if (!g.tryb && !tap) { if (Math.abs(dx) > 10 && Math.abs(dx) >= Math.abs(dy)) g.tryb = 'x'; else if (dy > 10 && dy > Math.abs(dx)) g.tryb = 'y'; }
    const krok = Math.max(16, cell * .9);
    if (!g.tryb && tap) obroc(1);
    else if (g.tryb === 'x') { const n = Math.trunc(dx / krok); while (g.kx < n) { g.kx++; rusz(1, 0); } while (g.kx > n) { g.kx--; rusz(-1, 0); } }
    else if (g.tryb === 'y') { const h = g.hist; let i = h.length - 1; while (i > 0 && t1 - h[i][0] < 100) i--; const v = (e.clientY - h[i][1]) / Math.max(16, t1 - h[i][0]);
      if (v > .55 && dy > cell) zrzut(); else { const n = Math.floor(dy / krok); while (g.ky < n) { g.ky++; if (!miekko()) break; } } }
  });
  cv.addEventListener('pointercancel', () => { gest = null; });
  cv.addEventListener('contextmenu', e => { if (stan === 'gra') e.preventDefault(); });

  /* ---------- nakładki ---------- */
  const graj0 = $('#kosGraj'); if (graj0) graj0.addEventListener('click', graj);
  const dalej = $('#kosDalej'); if (dalej) dalej.addEventListener('click', e => { e.stopPropagation(); wznow(); });
  const nowa = $('#kosNowa'); if (nowa) nowa.addEventListener('click', e => { e.stopPropagation(); stan = 'koniec'; koniecT = 0; graj(); });
  const znowu = $('#kosZnowu'); if (znowu) znowu.addEventListener('click', e => { e.stopPropagation(); graj(); });
  if (ov.pauza) ov.pauza.addEventListener('click', e => { if (!e.target.closest('a,button')) wznow(); });
  if (ov.koniec) ov.koniec.addEventListener('click', e => { if (!e.target.closest('a,button') && teraz() - koniecT > 900) graj(); });

  /* ---------- start leniwy: tekstury dopiero, gdy Strefa gier jest blisko ---------- */
  let przygotowano = false;
  function przygotuj() { if (przygotowano) return; przygotowano = true; laduj().then(() => { ikona(); legenda(); if (uklad(true)) { if (stan === 'start') pokaz(); rysuj(); } }); }
  const sek = document.getElementById('gry') || pole;
  const ioS = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { ioS.disconnect(); przygotuj(); } }, { rootMargin: '900px 0px' }); ioS.observe(sek);
  const zakl = document.getElementById('tKos'); if (zakl) zakl.addEventListener('click', przygotuj, { once: true });
  let ostW = 0, ostH = 0;
  new ResizeObserver(() => { const w = pole.clientWidth; if (!w || !gotowe) return; if (Math.abs(w - ostW) < 1 && W) return; ostW = w;
    const by = W; if (uklad()) { if (!by && stan === 'start') pokaz(); rysuj(); } }).observe(pole);
  addEventListener('resize', () => { if (!gotowe || !pole.clientWidth) return; if (Math.abs(innerHeight - ostH) < 100 && Math.abs(pole.clientWidth - ostW) < 1) return; ostH = innerHeight; if (uklad()) rysuj(); });
  ostH = innerHeight;
  rekordy();

  /* ---------- dla testów ---------- */
  window.GBkostris = {
    stan: () => ({ stan, pkt, poziom, rzedy, interwal, klocek: p && p.t, x: p && p.x, y: p && p.y, r: p && p.r, nast, cell, curb, W, H, widac, czysc: !!czysc, zajete: siatka.reduce((a, w) => a + w.filter(Boolean).length, 0) }),
    graj, pauza: () => pauza('test'), wznow,
    uloz(wiersze) { // wiersze od góry do dołu, „#” = kostka, „.” = puste; dosunięte do dna
      const s = pusta(); wiersze.forEach((w, i) => { const r = RR - wiersze.length + i; [...w].forEach((ch, c) => { if (ch !== '.') s[r][c] = { k: (c + r) % 7, v: (c * 3 + r) % 4 }; }); }); siatka = s; rysujWarstwe(); duch(); if (stan !== 'gra') rysuj(); },
    klocek(t, obr, kol) { if (stan !== 'gra') return false; p = nowyKlocek(t); for (let i = 0; i < (obr || 0); i++) { p.m = obrM(p.m, 1); p.r = (p.r + 1) % 4; } if (kol != null) p.x = kol; p.y = 1; vis.x = p.x; vis.y = p.y; lockT = 0; duch(); return !kolizja(p.m, p.x, p.y); },
    zloto() { if (!p) return false; for (let i = p.m.length - 1; i >= 0; i--) for (let j = 0; j < p.m.length; j++) if (p.m[i][j]) { p.m[i][j] = ZL; return true; } return false; },
    rzedy(n) { rzedy = n; poziom = 1 + Math.floor(n / 8); interwal = interwalDla(poziom); hud(); },
    majster() { if (!p) return null; const b = najlepszy(siatka, p.t, KSZ[p.t].map(r => r.slice())); return b && { obr: b.r, x: b.x }; },
    zakoncz() { if (stan === 'gra') koniecGry(); },
    pomiar: () => ({ klatki: pomiar.n, msNaKlatke: pomiar.n ? +(pomiar.ms / pomiar.n).toFixed(2) : 0, petla: !!raf }),
    tekst: () => siatka.map(w => w.map(c => c ? '#' : '.').join('')).join('\n')
  };
})();
