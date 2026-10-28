/* GardenBruk – interfejs: menu, wzory, skład z zapytaniem, WhatsApp / e-mail, galeria, mapa */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const WA = '48500250936';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } } };
  function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('pokaz'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('pokaz'), 2600); }
  window.GBtoast = toast;

  /* ---------- menu ---------- */
  const pasek = $('#pasek'), burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', () => { const o = burger.getAttribute('aria-expanded') !== 'true'; burger.setAttribute('aria-expanded', o); menu.classList.toggle('otw', o); burger.setAttribute('aria-label', o ? 'Zamknij menu' : 'Otwórz menu'); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('otw'); } });
  let lastY = scrollY;
  addEventListener('scroll', () => { const y = scrollY; if (y > 240 && y > lastY + 6 && !menu.classList.contains('otw')) pasek.classList.add('schowany'); else if (y < lastY - 6 || y < 240) pasek.classList.remove('schowany'); lastY = y; }, { passive: true });
  const linki = $$('.menu a'); const sek = linki.map(a => $(a.getAttribute('href')));
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { linki.forEach(a => a.classList.toggle('akt', a.getAttribute('href') === '#' + e.target.id)); } }), { rootMargin: '-45% 0px -50% 0px' }).observe && sek.forEach(s => s && new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) linki.forEach(a => a.classList.toggle('akt', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' }).observe(s));

  /* ---------- wejście ---------- */
  const hero = $('#start');
  setTimeout(() => hero.classList.add('pokaz'), RM ? 0 : 900);
  $('#pomin').addEventListener('click', () => { window.Swiat && Swiat.skipIntro(); hero.classList.add('pokaz'); });
  addEventListener('scroll', function f() { if (scrollY > 30) { window.Swiat && Swiat.skipIntro(); hero.classList.add('pokaz'); removeEventListener('scroll', f); } }, { passive: true });

  /* ---------- odsłanianie ---------- */
  $$('.tx > h2, .tx > p, .tx > .kroki, .tx > .btn, .tx > .lista, .wz-gora, .gra-gora, .kt h2, .towar, .opinie blockquote').forEach(el => el.classList.add('odslon'));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('widac'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
  const watch = () => $$('.odslon:not(.widac), .wynurz:not(.widac)').forEach(el => io.observe(el)); watch();

  /* ---------- wzory na placu ---------- */
  const OPISY = {
    flower: 'Kwiat z jasnej kostki w grafitowym podjeździe. Takie wzory układamy pod Kłodzkiem, kamień po kamieniu.',
    circle: 'Koło z kostki granitowej. Pierścień za pierścieniem, środek zaznaczony jednym kamieniem.',
    arcs: 'Łuki segmentowe, jak na starym rynku. Każdy rząd zachodzi na następny.',
    herring: 'Jodełka pod kątem 45°. Najmocniejszy układ na podjazd, bo kostki klinują się nawzajem.',
    basket: 'Koszyk: pary kostek na przemian wzdłuż i w poprzek. Spokojny wzór na tarasy i ścieżki.',
    wild: 'Kamień łupany na dziko. Każda płyta inna, fugi szerokie, natura w czystej postaci.'
  };
  let wz = 'flower', wzKol = 'grafit', wzDotkniety = false;
  function ustawWzor(p, kol) { wz = p || wz; wzKol = kol || wzKol;
    $$('[data-wz]').forEach(b => { const on = b.dataset.wz === wz; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    $$('[data-kol]').forEach(b => { const on = b.dataset.kol === wzKol; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    $('#wzOpis').textContent = OPISY[wz] || '';
    const pal = wz === 'circle' || wz === 'arcs' ? (wzKol === 'rozowy' ? 'rozowy' : wzKol === 'grafit' ? 'granit' : wzKol) : wz === 'wild' ? (wzKol === 'grafit' ? 'lupek' : 'kwarcyt') : wzKol;
    window.Swiat && Swiat.setPlaza('wzory', wz, pal); }
  $$('[data-wz]').forEach(b => b.addEventListener('click', () => { wzDotkniety = true; $('#wzImpuls').classList.add('znika'); ustawWzor(b.dataset.wz); }));
  $$('[data-kol]').forEach(b => b.addEventListener('click', () => { wzDotkniety = true; $('#wzImpuls').classList.add('znika'); ustawWzor(null, b.dataset.kol); }));
  // impuls: plac sam pokazuje dwa inne wzory, potem wraca
  const wzSek = $('#wzory'); let wzImp = false;
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !wzImp && !RM) { wzImp = true;
    setTimeout(() => { if (!wzDotkniety) ustawWzor('circle'); }, 2200); setTimeout(() => { if (!wzDotkniety) ustawWzor('arcs'); }, 4600); setTimeout(() => { if (!wzDotkniety) ustawWzor('flower'); }, 7000); } }), { threshold: .45 }).observe(wzSek);
  $('#wzDoZapytania').addEventListener('click', () => { const nazwa = $('[data-wz].on').textContent + ', ' + $('[data-kol].on').textContent.trim().toLowerCase();
    dodaj({ id: 'wzor-' + wz + '-' + wzKol, nazwa: 'Wzór na placu: ' + nazwa, ile: 1, jedn: 'projekt', pat: wz === 'flower' ? 'grid' : wz, pal: wzKol }); });

  /* ---------- skład ---------- */
  const TOWARY = [
    { id: 'kostka', nazwa: 'Kostka brukowa', opis: 'Na podjazdy, ścieżki i place. Różne formaty, grubości i kolory.', jedn: 'm²', pat: 'herring', pal: 'melanz',
      opcje: { Wzór: ['Jodełka', 'Cegiełka', 'Koszyk', 'Łuki'], Kolor: ['Grafit', 'Szary', 'Melanż', 'Piaskowy', 'Brąz'], Grubość: ['6 cm', '8 cm'] } },
    { id: 'plyty', nazwa: 'Płyty tarasowe i chodnikowe', opis: 'Na taras, wokół domu i do ogrodu. Gładkie, szczotkowane, postarzane.', jedn: 'm²', pat: 'slabs', pal: 'bianco', opcje: { Kolor: ['Biały', 'Szary', 'Grafit', 'Piaskowy'] } },
    { id: 'wielko', nazwa: 'Płyty wielkoformatowe', opis: 'Duże formaty, mało fug. Nowoczesny podjazd i taras jak z katalogu.', jedn: 'm²', pat: 'slabs', pal: 'grafit', k: .17, opcje: { Kolor: ['Grafit', 'Szary', 'Biały'] } },
    { id: 'obrzeza', nazwa: 'Obrzeża i krawężniki', opis: 'Trzymają kostkę w ryzach i wyznaczają granice ogrodu.', jedn: 'mb', pat: 'curb', pal: 'szary' },
    { id: 'palisady', nazwa: 'Palisady', opis: 'Na skarpy, schody terenowe i rabaty. Okrągłe i prostokątne.', jedn: 'szt.', pat: 'palisade', pal: 'szary' },
    { id: 'stopnie', nazwa: 'Stopnie schodowe', opis: 'Bloczki i stopnie do schodów przed domem i w ogrodzie.', jedn: 'szt.', pat: 'steps', pal: 'piaskowy' },
    { id: 'ogrodzenia', nazwa: 'Ogrodzenia i murki', opis: 'Bloczki łupane, słupki, daszki i murki oporowe.', jedn: 'mb', marka: 'Joniec', pat: 'wall', pal: 'piaskowy', opcje: { Kolor: ['Piaskowy', 'Grafit', 'Szary', 'Brąz'] } },
    { id: 'kruszywo', nazwa: 'Kruszywo dekoracyjne', opis: 'Grys, otoczaki, kora kamienna. Na rabaty i ścieżki.', jedn: 't', pat: 'gravel', pal: 'bianco', opcje: { Rodzaj: ['Biały grys', 'Otoczaki', 'Grys grafitowy', 'Żwir'] } },
    { id: 'kamien', nazwa: 'Kamień naturalny', opis: 'Kostka granitowa i płyty łupane. Na lata, na pokolenia.', jedn: 'm²', pat: 'wild', pal: 'kwarcyt', opcje: { Rodzaj: ['Kostka granitowa', 'Kamień łupany'] } },
    { id: 'figury', nazwa: 'Mała architektura i figury', opis: 'Kule, donice i figury, które dopełniają ogród.', jedn: 'szt.', pat: 'sphere', pal: 'granit' },
    { id: 'wynajem', nazwa: 'Wypożyczalnia sprzętu', opis: 'Zagęszczarka i inny sprzęt specjalistyczny na wynajem.', jedn: 'dni', pat: 'compactor', pal: 'szary' }
  ];
  function rysujProbke(c, t, size) {
    const dpr = Math.min(devicePixelRatio || 1, 2), w = size[0], h = size[1]; c.width = w * dpr; c.height = h * dpr; const x = c.getContext('2d');
    const S = window.Swiat; if (!S) return;
    const kk = (t.k || (t.pat === 'slabs' ? .22 : .34)) * (w / 320);
    const special = { curb: 1, palisade: 1, steps: 1, wall: 1, gravel: 1, sphere: 1, compactor: 1 };
    if (!special[t.pat]) { if (t.pat === 'grid') S.swatch(c, 'grid', 'grafit', { dpr, k: kk * .9, size: 100, joint: 5, colorAt: (a, b) => { const dx = a - w / 2, dy = b - h / 2, d = Math.hypot(dx, dy), an = Math.atan2(dy, dx); const e = h * .42 * (0.18 + 0.82 * Math.pow(Math.abs(Math.cos(an * 4)), .75)); return d < e ? (d < h * .08 ? '#ece8df' : '#d9b15f') : null; } });
      else S.swatch(c, t.pat, t.pal, { dpr, k: kk, cell: 300 }); return; }
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    const bed = S.bedPattern; x.fillStyle = bed || '#c9b18a'; x.fillRect(0, 0, w, h);
    const P = S.PAL, rnd = (i) => Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
    const one = (kind, cx, cy, ww, hh, rot, col, v) => S.drawOne(x, { x: cx, y: cy, w: ww, h: hh, rot: rot || 0, col, kind, v: v || 0 }, dpr);
    if (t.pat === 'curb') { x.fillStyle = '#3c5a2c'; x.fillRect(0, 0, w, h * .42); for (let i = 0; i < 5; i++) one('slab', 34 + i * 72, h * .5, 70, 18, 0, P.szary[i % 4], i); for (let i = 0; i < 5; i++) one('slab', 34 + i * 72, h * .62, 70, 28, 0, P.grafit[i % 4], i);
      S.swatch && 0; for (let yy = h * .72; yy < h; yy += 22) for (let xx = 0; xx < w; xx += 42) one('block', xx + ((yy / 22) % 2) * 21, yy, 40, 20, 0, P.grafit[(xx + yy) % 4 | 0], 1); }
    if (t.pat === 'palisade') { x.fillStyle = '#3c5a2c'; x.fillRect(0, 0, w, h); for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) { const cx = 24 + i * 34 + (r % 2) * 17, cy = 60 + r * 70; x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.arc(cx + 5, cy + 7, 15, 0, 7); x.fill(); const gr = x.createRadialGradient(cx - 5, cy - 5, 1, cx, cy, 16); gr.addColorStop(0, '#b3b0a8'); gr.addColorStop(1, '#6e6b64'); x.fillStyle = gr; x.beginPath(); x.arc(cx, cy, 15, 0, 7); x.fill(); } }
    if (t.pat === 'steps') { for (let i = 0; i < 4; i++) { const yy = 30 + i * 62; x.fillStyle = 'rgba(0,0,0,.4)'; x.fillRect(20, yy + 46, w - 40, 14); one('slab', w / 2, yy + 22, w - 40, 46, 0, P.piaskowy[i % 4], i); } }
    if (t.pat === 'wall') { const g2 = x.createLinearGradient(0, 0, 0, h); g2.addColorStop(0, '#8fb6d6'); g2.addColorStop(1, '#d8e6ef'); x.fillStyle = g2; x.fillRect(0, 0, w, h); x.fillStyle = '#3c5a2c'; x.fillRect(0, h * .82, w, h * .18);
      const cols = P[t.pal] || P.piaskowy; for (let r = 0; r < 5; r++) for (let i = -1; i < 8; i++) { const bw = 52, bh = 26; one('block', i * (bw + 3) + (r % 2) * 26 + 20, h * .78 - r * (bh + 3), bw, bh, 0, cols[(i + r + 8) % cols.length], (i + r) & 3); }
      for (let q = 0; q < 2; q++) { const px = q ? w - 40 : 40; for (let r = 0; r < 7; r++) one('block', px, h * .8 - r * 29 - 13, 46, 26, 0, cols[r % cols.length], r & 3); one('slab', px, h * .8 - 7 * 29 - 12, 58, 12, 0, P.grafit[1], 1); }
      x.fillStyle = 'rgba(20,20,20,.8)'; for (let i = 0; i < 9; i++) x.fillRect(80 + i * 18, h * .26, 4, h * .32); x.fillRect(70, h * .26, w - 140, 5); }
    if (t.pat === 'gravel') { for (let i = 0; i < 1400; i++) { const a = rnd(i + 1), b = rnd(i + 7), r = 2 + rnd(i + 3) * 4.5; const cx = Math.abs(a) * w, cy = Math.abs(b) * h; const sh = 200 + (Math.abs(rnd(i + 9)) * 50 | 0);
      x.fillStyle = 'rgba(0,0,0,.25)'; x.beginPath(); x.ellipse(cx + 1.2, cy + 1.6, r, r * .8, 0, 0, 7); x.fill(); x.fillStyle = `rgb(${sh},${sh - 4},${sh - 12})`; x.beginPath(); x.ellipse(cx, cy, r, r * .78, a * 3, 0, 7); x.fill(); } }
    if (t.pat === 'sphere') { for (let i = 0; i < 900; i++) { const a = Math.abs(rnd(i + 1)), b = Math.abs(rnd(i + 7)); x.fillStyle = `rgba(${200 + (a * 40 | 0)},${195 + (b * 40 | 0)},185,.9)`; x.beginPath(); x.arc(a * w, b * h, 2 + a * 3, 0, 7); x.fill(); }
      x.fillStyle = 'rgba(0,0,0,.4)'; x.beginPath(); x.ellipse(w / 2 + 18, h / 2 + 22, 70, 52, .3, 0, 7); x.fill(); const gr = x.createRadialGradient(w / 2 - 22, h / 2 - 24, 4, w / 2, h / 2, 74); gr.addColorStop(0, '#d7d3cb'); gr.addColorStop(.6, '#8f8b84'); gr.addColorStop(1, '#4c4a46'); x.fillStyle = gr; x.beginPath(); x.arc(w / 2, h / 2, 70, 0, 7); x.fill(); }
    if (t.pat === 'compactor') { for (let yy = 0; yy < h; yy += 22) for (let xx = -20; xx < w; xx += 42) one('block', xx + ((yy / 22) % 2) * 21, yy + 11, 40, 20, 0, P.szary[(xx + yy) % 4 | 0], 2);
      x.save(); x.translate(w / 2, h / 2 - 10); x.scale(1.9, 1.9); x.fillStyle = 'rgba(0,0,0,.4)'; x.fillRect(-26, -16, 62, 44); x.fillStyle = '#3b3d40'; x.fillRect(-30, -22, 60, 40); x.fillStyle = '#e8a419'; x.fillRect(-24, -18, 48, 26); x.fillStyle = '#c4870f'; x.fillRect(-24, 2, 48, 6); x.fillStyle = '#1e1f21'; x.fillRect(-8, -14, 16, 12); x.strokeStyle = '#222'; x.lineWidth = 3; x.beginPath(); x.moveTo(-14, 18); x.lineTo(-10, 46); x.lineTo(10, 46); x.lineTo(14, 18); x.stroke(); x.restore(); }
    const gr = x.createLinearGradient(0, 0, w, h); gr.addColorStop(0, 'rgba(255,240,210,.14)'); gr.addColorStop(1, 'rgba(0,0,0,.2)'); x.fillStyle = gr; x.fillRect(0, 0, w, h);
  }
  window.GBprobka = rysujProbke;
  const towaryEl = $('#towary');
  function budujSklad() {
    towaryEl.innerHTML = '';
    TOWARY.forEach(t => { const b = document.createElement('button'); b.type = 'button'; b.className = 'towar odslon'; b.dataset.id = t.id; b.setAttribute('aria-expanded', 'false');
      b.innerHTML = `<canvas aria-hidden="true"></canvas>${t.marka ? `<span class="marka-t">${t.marka}</span>` : ''}<h3>${t.nazwa}</h3><p>${t.opis}</p><span class="dodaj">${wKoszyku(t.id) ? 'W zapytaniu' : 'Dodaj do zapytania'}</span>`;
      if (wKoszyku(t.id)) b.classList.add('w-koszyku');
      towaryEl.appendChild(b); requestAnimationFrame(() => rysujProbke(b.querySelector('canvas'), t, [320, 240]));
      b.addEventListener('click', () => otworzTowar(t, b)); });
    watch();
  }
  let panel = null;
  function otworzTowar(t, b) {
    if (panel) { const was = panel.dataset.id; panel.remove(); panel = null; $$('.towar').forEach(x => x.setAttribute('aria-expanded', 'false')); if (was === t.id) return; }
    panel = document.createElement('div'); panel.className = 'towar-panel'; panel.dataset.id = t.id;
    const wyb = {}; let html = `<h4>${t.nazwa}</h4>`;
    Object.entries(t.opcje || {}).forEach(([k, arr]) => { wyb[k] = arr[0]; html += `<div class="opcje" role="group" aria-label="${k}">${arr.map((v, i) => `<button type="button" class="chip${i ? '' : ' on'}" data-k="${k}" data-v="${v}" aria-pressed="${!i}">${v}</button>`).join('')}</div>`; });
    html += `<div class="ilosc"><label for="ile-${t.id}" class="jedn">Ilość</label><input id="ile-${t.id}" type="number" inputmode="decimal" min="0" step="any" placeholder="np. ${t.jedn === 'm²' ? '60' : t.jedn === 't' ? '2' : t.jedn === 'dni' ? '2' : '20'}"><span class="jedn">${t.jedn}</span><button type="button" class="btn" data-dodaj>Dodaj do zapytania</button></div>`;
    panel.innerHTML = html;
    // wstaw za wierszem (2 kolumny na komputerze)
    const items = $$('.towar'), i = items.indexOf(b), cols = getComputedStyle(towaryEl).gridTemplateColumns.split(' ').length, last = items[Math.min(items.length - 1, Math.floor(i / cols) * cols + cols - 1)];
    last.after(panel); b.setAttribute('aria-expanded', 'true');
    panel.addEventListener('click', e => { const c = e.target.closest('[data-k]'); if (c) { wyb[c.dataset.k] = c.dataset.v; $$(`[data-k="${c.dataset.k}"]`, panel).forEach(x => { const on = x === c; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); }); }
      if (e.target.closest('[data-dodaj]')) { const v = parseFloat(($('input', panel).value || '').replace(',', '.')); const opis = Object.entries(wyb).map(([k, v2]) => v2).join(', ');
        dodaj({ id: t.id + '|' + opis, typ: t.id, nazwa: t.nazwa + (opis ? ' (' + opis + ')' : ''), ile: isFinite(v) && v > 0 ? v : null, jedn: t.jedn, pat: t.pat, pal: t.pal });
        panel.remove(); panel = null; b.setAttribute('aria-expanded', 'false'); } });
    setTimeout(() => $('input', panel) && $('input', panel).focus({ preventScroll: true }), 50);
  }

  /* ---------- zapytanie (koszyk) ---------- */
  let kosz = store.get('gb-zapytanie', []);
  const wKoszyku = id => kosz.some(p => p.typ === id || p.id === id);
  function zapisz() { store.set('gb-zapytanie', kosz); odswiez(); }
  function dodaj(p) { const e = kosz.find(x => x.id === p.id); if (e) { if (p.ile) e.ile = (e.ile || 0) + p.ile; } else kosz.push(p); zapisz();
    const btn = $('#koszykBtn'); btn.classList.remove('skok'); void btn.offsetWidth; btn.classList.add('skok'); toast('Dodano do zapytania: ' + p.nazwa); budujSklad(); }
  window.GBdodaj = dodaj;
  function fmt(n) { return String(Math.round(n * 10) / 10).replace('.', ','); }
  function odswiez() {
    $('#koszykIle').textContent = kosz.length; $('#koszykBtn').classList.toggle('pusty', !kosz.length);
    const L = $('#ksLista'); L.innerHTML = kosz.length ? '' : '<p class="ks-pusty">Nic tu jeszcze nie ma. Dodaj kostkę, płyty albo wzór z placu.</p>';
    kosz.forEach((p, i) => { const r = document.createElement('div'); r.className = 'ks-poz'; r.innerHTML = `<canvas aria-hidden="true"></canvas><div><b>${p.nazwa}</b><small>${p.ile ? fmt(p.ile) + ' ' + p.jedn : 'ilość do ustalenia'}</small></div><button type="button" aria-label="Usuń: ${p.nazwa}">${X}</button>`;
      $('button', r).addEventListener('click', () => { kosz.splice(i, 1); zapisz(); budujSklad(); }); L.appendChild(r);
      const t = TOWARY.find(t => t.id === p.typ) || { pat: p.pat || 'rows', pal: p.pal || 'grafit' }; requestAnimationFrame(() => rysujProbke($('canvas', r), t, [104, 104])); });
    // kalkulator: podsypka i zapas
    const m2 = kosz.filter(p => p.jedn === 'm²' && p.ile).reduce((a, p) => a + p.ile, 0);
    $('#ksKalk').innerHTML = m2 ? `Na <b>${fmt(m2)} m²</b> warto doliczyć ok. <b>${fmt(m2 * 1.05)} m²</b> z zapasem na docinki (5%) i ok. <b>${fmt(m2 * 0.04 * 1.6)} t</b> piasku na podsypkę (4 cm). Dokładnie policzymy przy pomiarze.` : '';
    const fk = $('#fKoszyk'); fk.hidden = !kosz.length; fk.innerHTML = kosz.length ? '<b>W zapytaniu:</b>' + kosz.map(p => '• ' + p.nazwa + (p.ile ? ' – ' + fmt(p.ile) + ' ' + p.jedn : '')).join('<br>') : '';
    $('#fZapytanie').value = tekstKoszyka();
  }
  function tekstKoszyka() { return kosz.map(p => '- ' + p.nazwa + (p.ile ? ': ' + fmt(p.ile) + ' ' + p.jedn : '')).join('\n'); }
  const ks = $('#koszyk'), ksBtn = $('#koszykBtn');
  function koszyk(o) { ks.hidden = !o; ksBtn.setAttribute('aria-expanded', o); if (o) $('#koszykZamknij').focus({ preventScroll: true }); }
  ksBtn.addEventListener('click', () => koszyk(ks.hidden)); $('#koszykZamknij').innerHTML = X; $('#koszykZamknij').addEventListener('click', () => koszyk(false));
  addEventListener('keydown', e => { if (e.key === 'Escape') { koszyk(false); const l = $('.lupa'); l && l.remove(); } });
  $('#ksForm').addEventListener('click', () => koszyk(false));
  function waLink(extra) { let t = 'Dzień dobry, piszę ze strony GardenBruk.'; if (kosz.length) t += '\n\nMoje zapytanie:\n' + tekstKoszyka(); if (extra) t += '\n\n' + extra; return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); }
  $('#ksWa').addEventListener('click', () => { open(waLink(), '_blank', 'noopener'); });
  $('#waTop').addEventListener('click', e => { if (kosz.length) { e.preventDefault(); open(waLink(), '_blank', 'noopener'); } });

  /* ---------- formularz ---------- */
  const form = $('#form'), info = $('#fInfo');
  $$('[data-temat]').forEach(a => a.addEventListener('click', () => { const w = $('#fWiad'); if (!w.value) w.value = a.dataset.temat + ': '; }));
  function sprawdz() { let ok = true; [['#fImie', v => v.trim().length > 1], ['#fTel', v => v.replace(/\D/g, '').length >= 9]].forEach(([s, f]) => { const el = $(s), g = f(el.value); el.classList.toggle('bledne', !g); el.setAttribute('aria-invalid', !g); if (!g) ok = false; });
    if (!$('#fZgoda').checked) { ok = false; info.textContent = 'Zaznacz zgodę na kontakt, żebyśmy mogli odpisać.'; info.classList.add('blad'); return false; }
    if (!ok) { info.textContent = 'Podaj imię i numer telefonu (min. 9 cyfr).'; info.classList.add('blad'); } return ok; }
  function opisForm() { return ['Imię: ' + $('#fImie').value, 'Telefon: ' + $('#fTel').value, $('#fMiejsce').value ? 'Miejscowość: ' + $('#fMiejsce').value : '', $('#fWiad').value ? 'Wiadomość: ' + $('#fWiad').value : ''].filter(Boolean).join('\n'); }
  $('#fWa').addEventListener('click', () => { info.classList.remove('blad'); if (!sprawdz()) return; open(waLink(opisForm()), '_blank', 'noopener'); info.textContent = 'Otworzyliśmy WhatsApp z gotową wiadomością. Wystarczy ją wysłać.'; });
  let wysylam = false;
  form.addEventListener('submit', async e => { e.preventDefault(); info.classList.remove('blad'); if (wysylam || !sprawdz()) return; wysylam = true; const btn = $('#fMail'); btn.disabled = true; info.textContent = 'Wysyłam…';
    $('#fZapytanie').value = tekstKoszyka();
    try { const r = await fetch('https://formsubmit.co/ajax/info@falcon-eye.de', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) }); const j = await r.json().catch(() => ({}));
      if (r.ok && (j.success === 'true' || j.success === true)) { info.textContent = 'Dziękujemy! Zapytanie dotarło. Odezwiemy się najszybciej, jak to możliwe.'; form.reset(); kosz = []; zapisz(); budujSklad(); }
      else throw new Error('odp'); }
    catch (err) { info.classList.add('blad'); info.innerHTML = 'Nie udało się wysłać. Napisz do nas na <a href="' + waLink(opisForm()) + '" target="_blank" rel="noopener">WhatsApp</a> albo na <a href="mailto:biuro@gardenbruk.net?subject=Zapytanie&body=' + encodeURIComponent(opisForm() + '\n\n' + tekstKoszyka()) + '">biuro@gardenbruk.net</a>. Twoje dane są już w wiadomości.'; }
    wysylam = false; btn.disabled = false; });

  /* ---------- mapa: dwa kliknięcia ---------- */
  $('#mapaBtn').addEventListener('click', () => { const m = $('#mapa'); m.innerHTML = '<iframe title="Mapa dojazdu: Mikowice 16, Kłodzko" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=16.60%2C50.40%2C16.72%2C50.47&layer=mapnik&marker=50.435%2C16.66"></iframe><a href="https://www.openstreetmap.org/search?query=Mikowice%2016%2C%2057-300%20K%C5%82odzko" target="_blank" rel="noopener">Otwórz w OpenStreetMap</a>'; });

  /* ---------- galeria ---------- */
  const GAL = window.GB_GALERIA || [];
  const gal = $('#galeria');
  if (!GAL.length) { $('#realizacje .tx > p').textContent = 'Zdjęcia z naszych realizacji dodamy tutaj wkrótce. Do tego czasu zapraszamy na Facebooka i na plac w Mikowicach.'; }
  GAL.forEach(g => { const f = document.createElement('figure'); f.className = 'wynurz'; f.innerHTML = `<img src="${g.src}" alt="${g.alt}" width="${g.w}" height="${g.h}" loading="lazy" decoding="async">${g.opis ? `<figcaption>${g.opis}</figcaption>` : ''}`;
    f.addEventListener('click', () => { const l = document.createElement('div'); l.className = 'lupa'; l.innerHTML = `<img src="${g.duze || g.src}" alt="${g.alt}">`; l.addEventListener('click', () => l.remove()); document.body.appendChild(l); }); gal.appendChild(f); });
  watch();

  /* ---------- start ---------- */
  addEventListener('swiat', () => { budujSklad(); odswiez(); }, { once: true });
  odswiez();
})();
