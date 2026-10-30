/* GardenBruk – Strefa gier: zakładki, „Zgadnij wzór” (na czas) i „Memory z kostki”. „Ułóż sam” jest w gra.js. */
(function () {
  'use strict';
  const sek = document.getElementById('gry'); if (!sek) return;
  const $ = s => sek.querySelector(s), $$ = s => [...sek.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const czytaj = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const pisz = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bez zapisu */ } };
  const tasuj = a => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  let S = null;

  const WZ = { herring: 'Jodełka', rows: 'Cegiełka', basket: 'Koszyk', slabs: 'Płyty na mijankę', cobble: 'Kostka granitowa', arcs: 'Łuki', wild: 'Kamień łupany', grid: 'Kostka 10×10' };
  const FAKT = { herring: 'Najmocniejszy układ na podjazd: kostki klinują się nawzajem.', rows: 'Klasyka na ścieżki i place, łatwa do ułożenia.', basket: 'Pary kostek na przemian. Spokojny wzór na taras.',
    slabs: 'Duże formaty, mało fug. Nowocześnie przed domem.', cobble: 'Kamień naturalny w rzędach. Na lata, na pokolenia.', arcs: 'Łuki segmentowe, jak na starym rynku.',
    wild: 'Każdy kamień inny. Ścieżki w ogrodzie i tarasy.', grid: 'Małe kwadraty, z których układa się mozaiki i wzory.' };
  const KOL = ['grafit', 'szary', 'melanz', 'piaskowy', 'bianco', 'granit', 'braz', 'lupek'];

  /* ---------- zakładki ---------- */
  const zakl = $$('.gry-zakl [role="tab"]');
  function pokaz(g) { zakl.forEach(t => { const on = t.dataset.g === g; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; document.getElementById(t.getAttribute('aria-controls')).hidden = !on; });
    if (g === 'zgad') zg.rozmiar(); if (g === 'mem') mem.widac(); }
  zakl.forEach(t => t.addEventListener('click', () => pokaz(t.dataset.g)));
  $('.gry-zakl').addEventListener('keydown', e => { const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) return; const i = zakl.findIndex(t => t.getAttribute('aria-selected') === 'true'); const n = zakl[(i + d + zakl.length) % zakl.length]; pokaz(n.dataset.g); n.focus(); });
  function rekordy() { const u = (document.getElementById('graRekord') || {}).textContent || ''; $('#rekUloz').textContent = u && u !== 'brak' ? 'Rekord: ' + u : 'Nowa gra';
    const z = czytaj('gb-zg'); $('#rekZgad').textContent = z ? 'Rekord: ' + z + ' pkt' : 'Nowa gra'; const m = czytaj('gb-mem'); $('#rekMem').textContent = m ? 'Rekord: ' + m + ' ruchów' : 'Nowa gra'; }
  function miniatury() { /* obrazki w HTML */ }

  /* ---------- Zgadnij wzór ---------- */
  const zg = (function () {
    const cv = $('#zgCv'), x = cv.getContext('2d'); let W = 0, H = 0, D = 1, k = .3, lista = [], t0 = 0, stan = 'demo', runda = 0, pkt = 0, seria = 0, rundy = [], czasStart = 0, widac = false, rafOn = false, demoT = 0, demoI = 0, odp = false;
    const LIMIT = 6;
    function rozmiar() { const r = cv.getBoundingClientRect(); if (!r.width) return; D = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.round(W * D); cv.height = Math.round(H * D); k = W < 560 ? W / 1250 : W / 2100; uloz(stan === 'gra' && rundy[runda] ? rundy[runda] : { pat: 'herring', pal: 'grafit' }, !lista.length); }
    function uloz(r, anim) { if (!S) return; const saveK = S.k; S.k = k; lista = []; S.genPattern(r.pat, r.pal, -40, -40, W + 40, H + 40, () => true, lista, { cell: r.pat === 'wild' ? 330 : 0 }); S.k = saveK;
      const ox = Math.random() < .5 ? 0 : W, oy = Math.random() < .5 ? 0 : H, R = Math.hypot(W, H); lista.forEach(s => { s.d = Math.hypot(s.x - ox, s.y - oy) / R; if (s.kind === 'dome') s.kind = 'block'; }); t0 = performance.now() - (anim && !RM ? 0 : 9e3); start(); }
    function klatka(now) {
      rafOn = false; if (!widac || !W) return; const t = (now - t0) / 1000; const saveK = S.k; S.k = k;
      x.setTransform(D, 0, 0, D, 0, 0); x.fillStyle = S.bedPattern || '#c9b48d'; x.fillRect(0, 0, W, H); let dalej = false;
      for (const s of lista) { const ts = clamp((t - s.d * .55) / .32, 0, 2); if (ts <= 0) { dalej = true; continue; } if (ts < 2) dalej = true; S.drawOne(x, s, D, ts); }
      x.setTransform(D, 0, 0, D, 0, 0); const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgba(0,0,0,.12)'); g.addColorStop(.55, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.35)'); x.fillStyle = g; x.fillRect(0, 0, W, H); S.k = saveK;
      if (stan === 'gra' && !odp) { const ile = clamp(1 - (now - czasStart) / 1000 / LIMIT, 0, 1); $('#zgPasek').style.transform = `scaleX(${ile})`; if (ile <= 0) wybierz(null); dalej = true; }
      if (stan === 'demo' && !RM) { if (now - demoT > 2400) { demoT = now; demoI = (demoI + 1) % 6; uloz({ pat: Object.keys(WZ).filter(w => w !== 'wild')[demoI], pal: KOL[(demoI * 3) % KOL.length] }, true); } dalej = true; }
      if (dalej) start();
    }
    function start() { if (!rafOn && widac) { rafOn = true; requestAnimationFrame(klatka); } }
    function nowaGra() { const p = tasuj(Object.keys(WZ).filter(w => w !== 'wild')); p.push(p[(Math.random() * 3) | 0]); rundy = p.slice(0, 8).map(pat => ({ pat, pal: KOL[(Math.random() * KOL.length) | 0] }));
      runda = 0; pkt = 0; seria = 0; stan = 'gra'; $('#zgStart').hidden = true; $('#zgPkt').textContent = '0 pkt'; nastepna(); }
    function nastepna() { odp = false; const r = rundy[runda]; $('#zgRunda').textContent = `Runda ${runda + 1} z ${rundy.length}`; $('#zgSeria').textContent = seria > 1 ? `Seria ×${seria}` : ''; $('#zgInfo').textContent = '';
      const inne = tasuj(Object.keys(WZ).filter(w => w !== r.pat && w !== 'wild')).slice(0, 2); const opcje = tasuj([r.pat, ...inne]);
      $('#zgOdp').innerHTML = opcje.map(o => `<button type="button" class="btn jasny" data-o="${o}">${WZ[o]}</button>`).join(''); uloz(r, true); czasStart = performance.now() + 450; $('#zgPasek').style.transform = 'scaleX(1)'; }
    function wybierz(o) { if (odp || stan !== 'gra') return; odp = true; const r = rundy[runda], dobrze = o === r.pat, zost = clamp(1 - (performance.now() - czasStart) / 1000 / LIMIT, 0, 1);
      if (dobrze) { seria++; pkt += 50 + Math.round(zost * 100) + (seria > 1 ? seria * 10 : 0); } else seria = 0;
      $$('#zgOdp [data-o]').forEach(b => { b.disabled = true; if (b.dataset.o === r.pat) b.classList.add('dobrze'); else if (b.dataset.o === o) b.classList.add('zle'); });
      $('#zgPkt').textContent = pkt + ' pkt'; $('#zgInfo').innerHTML = `<b>${dobrze ? 'Dobrze!' : (o ? 'To nie to.' : 'Czas minął.')}</b> ${WZ[r.pat]}: ${FAKT[r.pat]}`;
      setTimeout(() => { runda++; if (runda < rundy.length) nastepna(); else koniec(); }, dobrze ? 1500 : 2300); }
    function koniec() { stan = 'demo'; const rek = czytaj('gb-zg') || 0, nowy = pkt > rek; if (nowy) pisz('gb-zg', pkt); $('#zgOdp').innerHTML = ''; $('#zgInfo').textContent = '';
      $('#zgStart').hidden = false; $('#zgStart').querySelector('span').innerHTML = `${nowy ? '<b>Nowy rekord!</b> ' : ''}Wynik: <b>${pkt} pkt</b>. Rekord: <b>${Math.max(pkt, rek)} pkt</b>. <a href="#projektant">Zobacz wzory na swoim zdjęciu</a>`;
      $('#zgGraj').textContent = 'Zagraj jeszcze raz'; rekordy(); demoT = performance.now(); start(); }
    $('#zgOdp').addEventListener('click', e => { const b = e.target.closest('[data-o]'); if (b) wybierz(b.dataset.o); });
    $('#zgGraj').addEventListener('click', nowaGra);
    new IntersectionObserver(es => es.forEach(e => { widac = e.isIntersecting; if (widac) { if (!W) rozmiar(); start(); } }), { rootMargin: '80px' }).observe(cv);
    new ResizeObserver(() => { const r = cv.getBoundingClientRect(); if (r.width && Math.abs(r.width - W) > 1) rozmiar(); }).observe(cv);
    return { rozmiar, init() { const z = czytaj('gb-zg'); $('#zgRekord').textContent = z ? z + ' pkt' : 'brak'; rozmiar(); uloz({ pat: 'herring', pal: 'grafit' }, true); demoT = performance.now(); }, test: () => ({ stan, runda, pkt, n: lista.length, W, H }) };
  })();

  /* ---------- Memory z kostki ---------- */
  const mem = (function () {
    const box = $('#mem'); const PARY = [['herring', 'grafit'], ['rows', 'piaskowy'], ['basket', 'melanz'], ['slabs', 'bianco'], ['cobble', 'granit'], ['arcs', 'lupek']];
    const NAZ = { grafit: 'grafit', piaskowy: 'piaskowa', melanz: 'melanż', bianco: 'bianco', granit: 'granit', lupek: 'łupek' };
    let karty = [], odkryte = [], ruchy = 0, pary = 0, t0 = 0, stan = 'start', zegar = 0, obrazy = null, pokazano = false;
    function twarze() { if (!obrazy) obrazy = PARY.map(([p, c]) => `img/wz/mem-${p}-${c}.webp`); }
    function rozdaj(potasuj) { twarze(); const ids = []; PARY.forEach((_, i) => ids.push(i, i)); if (potasuj) tasuj(ids); karty = ids.map(id => ({ id, odkr: false, para: false }));
      box.innerHTML = karty.map((k, i) => `<button type="button" class="karta" data-i="${i}" aria-label="Karta ${i + 1}, zakryta"><span class="tyl" aria-hidden="true"><b>GB</b></span><span class="przod" aria-hidden="true"><img src="${obrazy[k.id]}" alt=""><em>${WZ[PARY[k.id][0]]}<br>${NAZ[PARY[k.id][1]]}</em></span></button>`).join(''); }
    function odwroc(i, on) { const k = karty[i], b = box.children[i]; k.odkr = on; b.classList.toggle('odkr', on); b.setAttribute('aria-label', `Karta ${i + 1}, ${on ? WZ[PARY[k.id][0]] + ' ' + NAZ[PARY[k.id][1]] : 'zakryta'}`); }
    function klik(i) { if (stan !== 'gra') return; const k = karty[i]; if (k.odkr || k.para || odkryte.length >= 2) return; odwroc(i, true); odkryte.push(i);
      if (odkryte.length === 2) { ruchy++; $('#memRuchy').textContent = ruchy + (ruchy === 1 ? ' ruch' : ruchy < 5 ? ' ruchy' : ' ruchów'); const [a, b] = odkryte;
        if (karty[a].id === karty[b].id) { karty[a].para = karty[b].para = true; box.children[a].classList.add('para'); box.children[b].classList.add('para'); odkryte = []; pary++; $('#memPary').textContent = `${pary} z 6 par`; if (pary === 6) setTimeout(koniec, 600); }
        else setTimeout(() => { odwroc(a, false); odwroc(b, false); odkryte = []; }, 850); } }
    function graj() { rozdaj(true); ruchy = 0; pary = 0; odkryte = []; stan = 'gra'; t0 = performance.now(); $('#memStart').hidden = true; $('#memRuchy').textContent = '0 ruchów'; $('#memPary').textContent = '0 z 6 par';
      clearInterval(zegar); zegar = setInterval(() => { $('#memCzas').textContent = ((performance.now() - t0) / 1000).toFixed(1).replace('.', ',') + ' s'; }, 100); }
    function koniec() { stan = 'koniec'; clearInterval(zegar); const s = ((performance.now() - t0) / 1000).toFixed(1).replace('.', ','); const rek = czytaj('gb-mem'), nowy = !rek || ruchy < rek; if (nowy) pisz('gb-mem', ruchy);
      $('#memStart').hidden = false; $('#memStart').querySelector('span').innerHTML = `${nowy ? '<b>Nowy rekord!</b> ' : ''}Wszystkie pary w <b>${ruchy} ruchach</b> i ${s} s. Rekord: <b>${nowy ? ruchy : rek} ruchów</b>.`; $('#memGraj').textContent = 'Zagraj jeszcze raz'; rekordy(); }
    box.addEventListener('click', e => { const b = e.target.closest('.karta'); if (b) klik(+b.dataset.i); });
    $('#memGraj').addEventListener('click', graj);
    function widac() { if (!karty.length) rozdaj(false); if (pokazano || RM || stan !== 'start') return; pokazano = true; // podgląd: dwie karty mrugną same
      setTimeout(() => { if (stan !== 'start') return; odwroc(0, true); odwroc(7, true); setTimeout(() => { if (stan !== 'start') return; odwroc(0, false); odwroc(7, false); }, 1300); }, 500); }
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !$('#gMem').hidden) widac(); }), { threshold: .4 }).observe(box);
    return { widac, init() { const m = czytaj('gb-mem'); $('#memRekord').textContent = m ? m + ' ruchów' : 'brak'; }, test: () => ({ stan, ruchy, pary, n: karty.length }) };
  })();

  function start() { S = window.Swiat; miniatury(); rekordy(); zg.init(); mem.init(); window.GBgry = { zg: zg.test, mem: mem.test, pokaz }; }
  function gotowy() { let ok = false; const go = () => { if (ok) return; ok = true; io.disconnect(); removeEventListener('scroll', blisko); start(); };
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) go(); }, { rootMargin: '700px 0px' }); io.observe(sek);
    const blisko = () => { const r = sek.getBoundingClientRect(); if (r.top < innerHeight + 900 && r.bottom > -900) go(); }; addEventListener('scroll', blisko, { passive: true }); setTimeout(blisko, 1500); }
  if (window.Swiat && window.Swiat.bedPattern) gotowy(); else addEventListener('swiat', gotowy, { once: true });
})();
