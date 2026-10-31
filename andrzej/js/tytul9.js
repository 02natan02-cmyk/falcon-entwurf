/* GardenBruk v9.6 · Tytuł „Kamień po kamieniu.” układa się z kostek.
   Natan 31.10. 12:09: „… der Titel sollte sich aufbauen wie aus Stein. Stein, Boom, für Boom, Stein. So auf die Seite kommen, vielleicht so mit Staub.“
   Każda litera składa się z małych jasnych kostek, które spadają z góry rząd po rzędzie (od dołu), lądują z małym odbiciem i kurzem.
   Gdy słowo jest gotowe: „bum” – wstrząs i chmura pyłu. Prawdziwy tekst h1 zostaje w DOM (czytniki, wyszukiwarki), tylko przezroczysty.
   Na końcu zdarzenie „tytul-gotowy” (film9.js rusza z historią). */
(() => {
  const h1 = document.querySelector('#start h1'), hero = document.getElementById('start');
  if (!h1 || !hero || !HTMLCanvasElement.prototype.getContext) return;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  root.classList.add('tytul-js');
  const cv = document.createElement('canvas'); cv.className = 'tytul-cv'; cv.setAttribute('aria-hidden', 'true'); hero.appendChild(cv);
  const x = cv.getContext('2d');
  const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) ^ 0x9e3779b9; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const KOLORY = ['#efeae0', '#e4ddcf', '#d9d1c2', '#f5f2ea', '#d2c8b6', '#e9e2d4', '#ddd6ca', '#c9bfad'];

  let D = 1, W = 0, H = 0, top = 0, c = 8, stones = [], aktywne = [], slowa = [], litery = [], pyl = [], spr = [], cienSpr = null, pylSpr = null;
  let warstwaC = null, warstwaK = null, t0 = 0, raf = 0, stan = 'czeka', wstrzas = { t: -9, a: 0 }, ostatnie = 0, czasKonca = 0;

  function sprite(s, i) { // jasna kostka z fazą, ziarnem i lekkim cieniem na krawędzi
    const S = Math.max(2, Math.round(s * D)), cnv = document.createElement('canvas'); cnv.width = cnv.height = S; const g = cnv.getContext('2d');
    const r = Math.max(1, S * .18); g.beginPath(); g.roundRect(0, 0, S, S, r); g.fillStyle = KOLORY[i % KOLORY.length]; g.fill(); g.save(); g.clip();
    for (let k = 0; k < S * S * .18; k++) { const a = hash(i * 31 + k, k * 7 + 3), b = hash(k * 13 + 1, i * 17 + k); g.fillStyle = a > .5 ? 'rgba(255,255,255,.22)' : 'rgba(60,50,40,.16)'; g.fillRect((a * 997 % 1) * S, (b * 991 % 1) * S, Math.max(1, S * .06), Math.max(1, S * .06)); }
    const e = Math.max(1, S * .16);
    let gr = g.createLinearGradient(0, 0, 0, e); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, S, e);
    gr = g.createLinearGradient(0, 0, e, 0); gr.addColorStop(0, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, e, S);
    gr = g.createLinearGradient(0, S - e * 1.3, 0, S); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(40,30,20,.42)'); g.fillStyle = gr; g.fillRect(0, S - e * 1.3, S, e * 1.3);
    gr = g.createLinearGradient(S - e * 1.3, 0, S, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(40,30,20,.32)'); g.fillStyle = gr; g.fillRect(S - e * 1.3, 0, e * 1.3, S);
    g.restore(); return cnv;
  }
  function miekki(R, rgb, a) { const S = Math.ceil(R * 2 * D), cnv = document.createElement('canvas'); cnv.width = cnv.height = S; const g = cnv.getContext('2d');
    const gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(.55, `rgba(${rgb},${a * .45})`); gr.addColorStop(1, `rgba(${rgb},0)`); g.fillStyle = gr; g.fillRect(0, 0, S, S); return cnv; }

  /* układ: litery z DOM (Range), maska każdej litery, siatka kostek */
  function uklad() {
    const hr = hero.getBoundingClientRect(), r1 = h1.getBoundingClientRect(), cs = getComputedStyle(h1), fs = parseFloat(cs.fontSize) || 80;
    c = clamp(fs / 19, 3.4, 8); const spad = Math.max(170, fs * 2.2);
    top = Math.round(r1.top - hr.top - spad); W = Math.round(hr.width); H = Math.round(r1.height + spad + Math.max(90, fs));
    D = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.ceil(W * D); cv.height = Math.ceil(H * D); cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.style.top = top + 'px';
    const oy = hr.top + top, ox = hr.left;   // przesunięcie: współrzędne ekranu → płótno
    const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = document.createElement('canvas').getContext('2d', { willReadFrequently: true }); m.font = font; const met = m.measureText('ŃĄ'); const asc = met.fontBoundingBoxAscent || fs * .9;
    stones = []; litery = []; slowa = [];
    const rg = document.createRange(); let li = 0, wi = -1, wNowe = true; const x0 = r1.left;
    const tw = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT); let n;
    while ((n = tw.nextNode())) {
      const tekst = n.nodeValue; wNowe = true;
      for (let i = 0; i < tekst.length; i++) {
        const ch = tekst[i]; if (/\s/.test(ch)) { wNowe = true; continue; }
        if (wNowe) { wi++; slowa.push({ l0: li, l1: li, x0: 1e9, x1: -1e9, y: 0, bum: false }); wNowe = false; }
        rg.setStart(n, i); rg.setEnd(n, i + 1); const r = rg.getBoundingClientRect(); if (!r.width) continue;
        const U = ch.toLocaleUpperCase('pl'), pad = Math.ceil(fs * .25), mw = Math.ceil(r.width + pad * 2), mh = Math.ceil(r.height + pad * 2);
        const mc = document.createElement('canvas'); mc.width = mw; mc.height = mh; const mx = mc.getContext('2d', { willReadFrequently: true }); mx.font = font; mx.fillStyle = '#000'; mx.textBaseline = 'alphabetic';
        mx.fillText(U, pad, pad + asc); const dane = mx.getImageData(0, 0, mw, mh).data;
        const A = (px, py) => { px = Math.round(px); py = Math.round(py); if (px < 0 || py < 0 || px >= mw || py >= mh) return 0; return dane[(py * mw + px) * 4 + 3]; };
        // siatka wspólna dla całego tytułu (kostki z sąsiednich liter trzymają linię)
        const lx = r.left - pad, ly = r.top - pad, gx0 = Math.floor((lx - x0) / c), gx1 = Math.ceil((lx + mw - x0) / c), gy0 = Math.floor((ly - r1.top) / c), gy1 = Math.ceil((ly + mh - r1.top) / c);
        const moje = [];
        for (let gy = gy0; gy < gy1; gy++) for (let gx = gx0; gx < gx1; gx++) {
          const cx = x0 + (gx + .5) * c, cy = r1.top + (gy + .5) * c, q = c * .3; let k = 0;
          if (A(cx - lx, cy - ly) > 110) k++; if (A(cx - lx - q, cy - ly - q) > 110) k++; if (A(cx - lx + q, cy - ly - q) > 110) k++; if (A(cx - lx - q, cy - ly + q) > 110) k++; if (A(cx - lx + q, cy - ly + q) > 110) k++;
          if (k >= 3) moje.push({ x: cx - ox, y: cy - oy, gy, v: (hash(gx + 7, gy + 11) * 64) | 0 });
        }
        if (!moje.length) continue;
        let yMax = -1e9, yMin = 1e9, xa = 1e9, xb = -1e9; for (const s of moje) { yMax = Math.max(yMax, s.y); yMin = Math.min(yMin, s.y); xa = Math.min(xa, s.x); xb = Math.max(xb, s.x); }
        const L = { i: li, w: wi, n: moje.length, gotowe: 0, x0: xa, x1: xb, dol: yMax + c / 2, pyl: false };
        litery.push(L); const S = slowa[wi]; S.l1 = li; S.x0 = Math.min(S.x0, xa); S.x1 = Math.max(S.x1, xb); S.y = Math.max(S.y, yMax + c / 2);
        for (const s of moje) { s.l = li; s.rzad = Math.round((yMax - s.y) / c); stones.push(s); }
        li++;
      }
    }
    // czasy: litery po kolei, słowa z przerwą na „bum”, w literze rzędy od dołu
    const dl = .055, dw = .2, dr = .02, dur = .4; let tl = 0, wPrev = 0;
    for (const L of litery) { if (L.w !== wPrev) { tl += dw; wPrev = L.w; } L.t = tl; tl += dl; }
    for (const s of stones) { const L = litery[s.l], h1r = hash(s.x | 0, s.y | 0);
      s.t0 = L.t + s.rzad * dr + h1r * .05; s.dur = dur + h1r * .08; s.h = spad * (.55 + hash(s.y | 0, s.x | 0) * .45); s.dx = (hash(s.v, s.l) - .5) * c * 5; s.rot = (h1r - .5) * 1.8; s.ok = false; }
    czasKonca = Math.max(0, ...stones.map(s => s.t0 + s.dur));
    // sprite'y
    spr = []; for (let i = 0; i < 8; i++) spr.push(sprite(c - Math.max(1, c * .14), i));
    cienSpr = miekki(c * 1.1, '6,5,4', .55); pylSpr = miekki(32, '224,214,194', .5);
    warstwaC = document.createElement('canvas'); warstwaC.width = cv.width; warstwaC.height = cv.height;
    warstwaK = document.createElement('canvas'); warstwaK.width = cv.width; warstwaK.height = cv.height;
  }
  function polozona(s) { // kostka trafia na stałe warstwy (cień + kamień)
    const wc = warstwaC.getContext('2d'), wk = warstwaK.getContext('2d'), k = c - Math.max(1, c * .14), R = c * 1.1;
    wc.drawImage(cienSpr, (s.x + c * .22 - R) * D, (s.y + c * .45 - R) * D, R * 2 * D, R * 2 * D);
    wk.drawImage(spr[s.v % spr.length], (s.x - k / 2) * D, (s.y - k / 2) * D, k * D, k * D);
  }
  function kurz(xa, xb, y, ile, sila) {
    for (let i = 0; i < ile; i++) { const r = Math.random(), q = Math.random();
      pyl.push({ x: xa + (xb - xa) * r, y: y - c * .2, vx: (r - .5) * 2 * sila * (.6 + q), vy: -(20 + q * 70) * (sila / 140), r0: c * (1.2 + q * 1.5), r1: c * (4 + q * 6) * (sila / 140 + .4), t: 0, life: .7 + q * .7 }); }
  }
  function klatka(now) {
    const t = (now - t0) / 1000, dt = Math.min(.05, (now - ostatnie) / 1000 || .016); ostatnie = now;
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height);
    // wstrząs po „bum”
    const ws = t - wstrzas.t, sh = ws < .32 ? wstrzas.a * Math.exp(-ws * 11) * Math.sin(ws * 70) : 0;
    x.setTransform(1, 0, 0, 1, 0, sh * D);
    // kostki w locie
    const k = c - Math.max(1, c * .14); let wszystkie = true;
    for (const s of stones) {
      if (s.ok) continue; const u = (t - s.t0) / s.dur; if (u < 0) { wszystkie = false; continue; }
      if (u >= 1) { s.ok = true; polozona(s); const L = litery[s.l]; L.gotowe++;
        if (!L.pyl && s.rzad === 0) { L.pyl = true; kurz(L.x0, L.x1, L.dol, 5, 70); }
        if (L.gotowe === L.n) { const S = slowa[L.w]; if (L.i === S.l1 && !S.bum) { S.bum = true; wstrzas = { t, a: Math.min(7, c * .9) }; kurz(S.x0 - c * 2, S.x1 + c * 2, S.y, 26 + (S.l1 - S.l0) * 4, 190); hero.classList.add('tytul-bum'); setTimeout(() => hero.classList.remove('tytul-bum'), 260); } }
        continue; }
      wszystkie = false;
      const p = Math.min(1, u / .78), y = s.y - s.h * (1 - p * p), b = u > .78 ? (u - .78) / .22 : 0, odb = b ? -Math.sin(b * Math.PI) * c * .45 * (1 - b) : 0;
      const sc = 1 + (1 - p) * .9, rot = s.rot * (1 - p), al = Math.min(1, u / .18), xx = s.x + s.dx * (1 - p);
      x.globalAlpha = al; const co = Math.cos(rot) * sc * D, si = Math.sin(rot) * sc * D; x.setTransform(co, si, -si, co, xx * D, (y + odb + sh) * D);
      x.drawImage(spr[s.v % spr.length], -k / 2, -k / 2, k, k);
    }
    x.globalAlpha = 1; x.setTransform(1, 0, 0, 1, 0, sh * D);
    x.drawImage(warstwaC, 0, 0); x.drawImage(warstwaK, 0, 0);
    // kurz
    for (let i = pyl.length - 1; i >= 0; i--) { const q = pyl[i]; q.t += dt; if (q.t >= q.life) { pyl.splice(i, 1); continue; }
      const z = q.t / q.life, d = Math.exp(-3.2 * dt); q.vx *= d; q.vy = q.vy * d - 14 * dt; q.x += q.vx * dt; q.y += q.vy * dt;
      const R = q.r0 + (q.r1 - q.r0) * (1 - Math.pow(1 - z, 2)); x.globalAlpha = .6 * Math.pow(1 - z, 1.6) * Math.min(1, q.t / .08);
      x.drawImage(pylSpr, (q.x - R) * D, (q.y - R) * D, R * 2 * D, R * 2 * D); }
    x.globalAlpha = 1;
    if (wszystkie && !pyl.length && t - wstrzas.t > .35) { koniec(); return; }
    raf = requestAnimationFrame(klatka);
  }
  function statycznie() { // gotowy tytuł bez animacji (ruch ograniczony, zmiana rozmiaru)
    uklad(); for (const s of stones) { s.ok = true; polozona(s); }
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height); x.drawImage(warstwaC, 0, 0); x.drawImage(warstwaK, 0, 0);
  }
  function koniec() { cancelAnimationFrame(raf); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height); x.drawImage(warstwaC, 0, 0); x.drawImage(warstwaK, 0, 0);
    if (stan !== 'gotowe') { stan = 'gotowe'; window.TytulGotowy = true;
      setTimeout(() => { hero.classList.add('tytul-ok'); setTimeout(() => { cv.style.display = 'none'; }, 1100); }, 180);   // fugi się zamykają: z kostek zostaje pełny napis
      dispatchEvent(new Event('tytul-gotowy')); } }
  function start() {
    if (stan !== 'czeka') return; stan = 'leci';
    try {
      if (RM) { hero.classList.add('tytul-ok'); cv.remove(); stan = 'gotowe'; window.TytulGotowy = true; dispatchEvent(new Event('tytul-gotowy')); return; }
      uklad(); if (!stones.length) throw new Error('brak kostek');
      t0 = performance.now(); ostatnie = t0; raf = requestAnimationFrame(klatka);
      setTimeout(() => { if (stan !== 'gotowe') { for (const s of stones) if (!s.ok) { s.ok = true; polozona(s); } koniec(); } }, (czasKonca + 3) * 1000);
    } catch (e) { root.classList.remove('tytul-js'); cv.remove(); stan = 'gotowe'; window.TytulGotowy = true; dispatchEvent(new Event('tytul-gotowy')); }
  }
  // po zmianie szerokości ekranu tytuł układa się od razu na nowo (bez animacji)
  let szer = innerWidth, rt = 0;
  addEventListener('resize', () => { if (stan !== 'leci' || Math.abs(innerWidth - szer) < 2) return; szer = innerWidth; for (const s of stones) s.ok = true; pyl = []; koniec(); });
  const fontyGotowe = () => (document.fonts && document.fonts.load) ? Promise.race([document.fonts.load(`900 100px "Big Shoulders Display"`, 'KAMIEŃ PO'), new Promise(r => setTimeout(r, 1500))]) : Promise.resolve();
  const ruszaj = () => fontyGotowe().then(() => setTimeout(start, 60));
  if (window.Scena && window.Scena.introDone) ruszaj(); else addEventListener('intro-koniec', ruszaj, { once: true });
  setTimeout(() => { if (stan === 'czeka') ruszaj(); }, 9000);
})();
