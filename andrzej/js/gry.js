const lpR = n => n === 1 ? 'ruch' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'ruchy' : 'ruchów';
/* GardenBruk – Strefa gier v9.6: zakładki, „Co Andrzej układa?” (Zgadnij wzór), „Memory z kostki” (trzy poziomy)
   i „trzymanie ekranu” w trakcie gry (dotyczy wszystkich gier w #gry). „Ułóż sam” jest w gra.js. */
(function () {
  'use strict';
  const sek = document.getElementById('gry'); if (!sek) return;
  const $ = s => sek.querySelector(s), $$ = s => [...sek.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, DOTYK = matchMedia('(pointer: coarse)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const czytaj = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const pisz = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bez zapisu */ } };
  const tasuj = a => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const los = a => a[(Math.random() * a.length) | 0];
  const zegarTxt = s => { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const wibruj = ms => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* brak */ } };
  const gw = n => '<span class="gs-gw" aria-label="' + n + ' z 3 gwiazdek">' + [0, 1, 2].map(i => `<i class="${i < n ? 'on' : ''}" style="--d:${i * .18}s">★</i>`).join('') + '</span>';
  const RANGA = ['Uczeń brukarza', 'Pomocnik brukarza', 'Brukarz', 'Mistrz bruku!'];
  let S = null;

  const WZ = { herring: 'Jodełka', rows: 'Cegiełka', basket: 'Koszyk', slabs: 'Płyty na mijankę', cobble: 'Kostka granitowa', arcs: 'Łuki', wild: 'Kamień łupany', grid: 'Kostka 10×10' };
  const FAKT = { herring: 'Najmocniejszy układ na podjazd: kostki klinują się nawzajem.', rows: 'Klasyka na ścieżki i place, łatwa do ułożenia.', basket: 'Pary kostek na przemian. Spokojny wzór na taras.',
    slabs: 'Duże formaty, mało fug. Nowocześnie przed domem.', cobble: 'Kamień naturalny w rzędach. Na lata, na pokolenia.', arcs: 'Łuki segmentowe, jak na starym rynku.',
    wild: 'Każdy kamień inny. Ścieżki w ogrodzie i tarasy.', grid: 'Małe kwadraty, z których układa się mozaiki i wzory.' };
  const KOL = ['grafit', 'szary', 'melanz', 'piaskowy', 'bianco', 'granit', 'braz', 'lupek'];

  /* ---------- wspólne: udostępnianie, stempel, konfetti z kamieni ---------- */
  async function udostepnij(tekst) { const url = location.origin + location.pathname + '#gry', t = tekst + ' ' + url;
    if (navigator.share) { try { await navigator.share({ text: t }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
    open('https://wa.me/?text=' + encodeURIComponent(t), '_blank', 'noopener'); }
  const KONF = ['#3c3d42', '#878681', '#cbb48c', '#dbd7ce', '#d9b15f', '#9a3a2c', '#5c4535'];
  function konfetti(el, ile, x0, y0) { if (RM || !el) return; const r = el.getBoundingClientRect(); const f = document.createDocumentFragment();
    for (let i = 0; i < (ile || 18); i++) { const s = document.createElement('i'); s.className = 'gs-konf'; const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 120;
      s.style.cssText = `left:${x0 != null ? x0 : r.width / 2}px;top:${y0 != null ? y0 : r.height / 2}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 40}px;--r:${(Math.random() - .5) * 540}deg;background:${los(KONF)};width:${7 + Math.random() * 7}px;height:${7 + Math.random() * 7}px`;
      f.appendChild(s); }
    el.appendChild(f); setTimeout(() => el.querySelectorAll('.gs-konf').forEach(n => n.remove()), 1300); }
  function baner(el, html, ms, kl) { el.innerHTML = html; el.className = el.className.replace(/\s?(on|stempel|zly|bonus)\b/g, '') + ' on' + (kl ? ' ' + kl : ''); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), ms || 1400); }

  /* ---------- zakładki ---------- */
  const zakl = $$('.gry-zakl [role="tab"]');
  function pokaz(g) { zakl.forEach(t => { const on = t.dataset.g === g; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; const p = document.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on; });
    if (g === 'zgad') zg.rozmiar(); if (g === 'mem') mem.widac(); }
  zakl.forEach(t => t.addEventListener('click', () => pokaz(t.dataset.g)));
  $('.gry-zakl').addEventListener('keydown', e => { const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) return; const i = zakl.findIndex(t => t.getAttribute('aria-selected') === 'true'); const n = zakl[(i + d + zakl.length) % zakl.length]; pokaz(n.dataset.g); n.focus(); });
  function rekordy() { const u = (document.getElementById('graRekord') || {}).textContent || ''; $('#rekUloz').textContent = u && u !== 'brak' ? 'Rekord: ' + u : 'Nowa gra';
    const z = czytaj('gb-zg2'); $('#rekZgad').textContent = z ? 'Rekord: ' + z + ' pkt' : 'Nowa gra'; const m = czytaj('gb-mem3'); $('#rekMem').textContent = m ? 'Rekord: ' + m + ' pkt' : 'Nowa gra'; }

  /* =====================================================================
     „Co Andrzej układa?” – Andrzej układa obrazek z kostki, kamień po kamieniu.
     Zgadnij jak najwcześniej: mniej kostek = więcej punktów. Seria mnoży punkty.
     Bonusy: złota kostka (+50), kawa dla Andrzeja (3 s przerwy), raz na grę „pół na pół”.
     Na koniec zlecenie specjalne: trzy prawdziwe wzory układania, punkty razy dwa.
     ===================================================================== */
  const zg = (function () {
  const MOT = {
      slonce: '.......o.......|.o.....o.....o.|..o.........o..|.....zzzzz.....|....zzzzzzz....|...zzzzzzzzz...|...zzzzzzzzz...|oo.zzzzzzzzz.oo|...zzzzzzzzz...|...zzzzzzzzz...|....zzzzzzz....|.....zzzzz.....|..o.........o..|.o.....o.....o.|.......o.......',
      serce: '...............|...............|..ccc.....ccc..|.cbccc...ccccc.|cbccccc.ccccccc|ccccccccccccccc|ccccccccccccccc|.ccccccccccccc.|..ccccccccccc..|...ccccccccc...|....ccccccc....|.....ccccc.....|......ccc......|.......c.......|...............',
      dom: '...............|...............|.......c..gg...|......ccc.gg...|.....cccccgg...|....cccccccg...|...ccccccccc...|..ccccccccccc..|.ccccccccccccc.|..ppppppppppp..|..pbbprrrpbbp..|..pbbprrrpbbp..|..pppprrrpppp..|..pppprrrpppp..|...............',
      choinka: '.......z.......|.......n.......|......nnn......|.....nnnnn.....|......nnn......|.....nnnnn.....|....nnncnnn....|...nnnnnnnnn...|.....nnnnn.....|....nnnnnnn....|...nnnnnnncn...|..ncnnnnnnnnn..|.nnnnnnnnnnnnn.|......rrr......|......rrr......',
      drzewo: '...............|.....nnnnn.....|...nnnnnnnnn...|..nnnnnnnnnnn..|.nnnnnnnnnnnnn.|.nnnnnnnnnnnnn.|.nnnnnnnnnnnnn.|..nnnnnnnnnnn..|...nnnnnnnnn...|.....nnrnn.....|......rrr......|......rrr......|......rrr......|....rrrrrrr....|...............',
      grzyb: '...............|...............|.....ccccc.....|...ccbcccbcc...|..cbccccccbcc..|.cccccbccccccc.|.ccbccccccccbc.|.ccccccccccccc.|.....bbbbb.....|.....bbbbb.....|.....bbbbb.....|.....bbbbb.....|....bbbbbbb....|...............|...............',
      gwiazda: '.......z.......|.......z.......|......zzz......|......zzz......|.....zzzzz.....|zzzzzzzzzzzzzzz|.zzzzzzzzzzzzz.|...zzzzzzzzz...|....zzzzzzz....|....zzzzzzz....|...zzzzzzzzz...|...zzzz.zzzz...|..zzz.....zzz..|..zz.......zz..|.z...........z.',
      kwiat: '......ccc......|.....ccccc.....|.cc..ccccc..cc.|ccccc.zzz.ccccc|cccccczzzcccccc|ccccc.zzz.ccccc|.cc..ccccc..cc.|.....ccccc.....|......ccc......|.......n.......|...nn..n..nn...|....nn.n.nn....|......nnn......|.......n.......|...............',
      logo: '...............|...............|...............|..eeee..eeeee..|.ee..ee.ee..ee.|.ee.....ee..ee.|.ee.....ee..ee.|.ee.eee.eeeee..|.ee..ee.ee..ee.|.ee..ee.ee..ee.|.ee..ee.ee..ee.|..eeee..eeeee..|...............|...............|...............',
      ksiezyc: '...............|...............|....z..........|...zz..........|..zzz..........|..zzz..........|.zzzz..........|.zzzz..........|.zzzz..........|..zzzz.........|..zzzzz........|...zzzzzzzzz...|....zzzzzzz....|......zzz......|...............',
      usmiech: '...............|....zzzzzzz....|...zzzzzzzzz...|..zzzzzzzzzzz..|.zzzggzzzggzzz.|.zzzggzzzggzzz.|.zzzggzzzggzzz.|.zzzzzzzzzzzzz.|.zzzzzzzzzzzzz.|.zzggzzzzzggzz.|.zzzgggggggzzz.|..zzzgggggzzz..|...zzzzzzzzz...|....zzzzzzz....|...............',
      jablko: '...............|.......r..nnn..|.......r.nnn...|.......r.......|...ccc.r.ccc...|..ccccccccccc..|.ccbbccccccccc.|.ccbbccccccccc.|.ccbbccccccccc.|.ccccccccccccc.|.ccccccccccccc.|.ccccccccccccc.|..ccccccccccc..|...ccc...ccc...|...............',
      samochod: '...............|...............|...............|....ccccccc....|....cbbcbbc....|...ccbbcbbbc...|.ccccccccccccc.|ccccccccccccccz|ccccccccccccccc|ccgggcccccgggcc|.cggggcccggggc.|..gggg...gggg..|...gg.....gg...|...............|...............',
      zaglowka: '...............|.......rr......|......brr......|......brr......|.....bbrrb.....|....bbbrrbb....|....bbbrrbb....|...bbbbrrbbb...|..bbbbbrrbbb...|..bbbbbrrbbbb..|.......rr......|.rrrrrrrrrrrrr.|..rrrrrrrrrrr..|...............|...............',
      parasol: '...............|.......c.......|....ccccccc....|...cbcccccbc...|..ccbcccccbcc..|.cccbbccccbbcc.|.cccbbccccbbcc.|.ccbbbcccbbbcc.|cccbbbcgcbbbccc|.......g.......|.......g.......|.......g.......|.......g.......|.....ggg.......|...............',
      lisc: '.......n.......|......nnn......|.....nnpnn.....|...nnnnpnnnn...|..nnnnnpnnnnn..|..nnppnpnppnn..|..nnnnpppnnnn..|..nnnnnpnnnnn..|..nnppnpnppnn..|...nnnpppnnn...|...nnnnpnnnn...|....nnnpnnn....|.....nnpnn.....|.......p.......|.......p.......',
      motyl: '.....g...g.....|......g.g......|..oooo.g.oooo..|.oobboogoobboo.|.oobboogoobboo.|.oobboogoobboo.|.oooooogoooooo.|..oooo.g.oooo..|..oooo.g.oooo..|..ooooogooooo..|..ooooogooooo..|..ooooogooooo..|...ooo.g.ooo...|...............|...............',
      kubek: '...ss.s.ss.....|...s..s.s......|......s........|...s..s.s......|...............|..brrrrrrr.....|..bbbbbbbbbb...|..bbbbbbbbb.bb.|..bbbbbbbbb..b.|..bbbbbbbbb..b.|..bbbbbbbbb.bb.|..bbbbbbbbbb...|..bbbbbbbbb....|..bbbbbbbb.....|...............',
      rakieta: '.......b.......|......bbb......|......bbb......|.....bbbbb.....|.....bbgbb.....|.....bgggb.....|.....bbgbb.....|.....bbbbb.....|....cbbcbbc....|....cbbcbbc....|...ccbbcbbcc...|..c...ooo...c..|......ooo......|.......o.......|.......o.......',
      ryba: '...............|.........o.....|........oo.....|.......ooo.....|o....oooooooo..|oo..oooozoogoo.|ooooooooozggoo.|ooooooooozooooo|ooooooooozoooo.|oo..oooozooooo.|o....oooooooo..|........oo.....|...............|...............|...............',
      strzalka: '...............|.......g.......|......ggg......|.....ggggg.....|....ggggggg....|...ggggggggg...|..ggggggggggg..|.....ggggg.....|.....ggggg.....|.....ggggg.....|.....ggggg.....|.....ggggg.....|.....ggggg.....|.....ggggg.....|...............',
      kolo: '...............|....sssssss....|...sssssssss...|..sssssssssss..|.ssss.....ssss.|.sss.......sss.|.sss..ccc..sss.|.sss..ccc..sss.|.sss..ccc..sss.|.sss.......sss.|.ssss.....ssss.|..sssssssssss..|...sssssssss...|....sssssss....|...............',
      klucz: '...............|...............|...............|...zz..........|..zzzzz........|.zzz.zz........|.zz..zzzzzzzzz.|.zz..zzzzzzzzz.|.zzzzzz....z.z.|..zzzz.....z...|...............|...............|...............|...............|...............'
    };
    const NAZ = { slonce: 'Słońce', serce: 'Serce', dom: 'Dom', choinka: 'Choinka', drzewo: 'Drzewo', grzyb: 'Grzyb', gwiazda: 'Gwiazda', kwiat: 'Kwiat', logo: 'Logo GardenBruk', ksiezyc: 'Księżyc', usmiech: 'Uśmiech',
      jablko: 'Jabłko', samochod: 'Samochód', zaglowka: 'Żaglówka', parasol: 'Parasol', lisc: 'Liść', motyl: 'Motyl', kubek: 'Kubek', rakieta: 'Rakieta', ryba: 'Ryba', strzalka: 'Strzałka', kolo: 'Koło', klucz: 'Klucz' };
    const GRUPY = [['slonce', 'kwiat', 'usmiech', 'kolo', 'gwiazda', 'ksiezyc'], ['choinka', 'drzewo', 'rakieta', 'strzalka', 'grzyb', 'lisc'], ['serce', 'jablko', 'lisc', 'motyl', 'kwiat', 'grzyb'],
      ['samochod', 'zaglowka', 'ryba', 'klucz', 'kubek'], ['dom', 'parasol', 'kubek', 'grzyb', 'zaglowka', 'rakieta'], ['logo', 'klucz', 'kolo', 'strzalka']];
    const LATWE = ['slonce', 'serce', 'dom', 'choinka', 'gwiazda', 'grzyb', 'samochod', 'ryba', 'kubek', 'parasol', 'jablko'];
    const N = 15, SPAD = RM ? .001 : .3;
    const PLAN = [
      { dur: 9, ord: 'losowo', op: 'latwe' }, { dur: 8.5, ord: 'losowo', op: 'latwe', zloto: 1 },
      { dur: 8, ord: 'srodek', op: 'mieszane', tw: 'Od środka', kawa: 1 }, { dur: 7.5, ord: 'rzedami', op: 'mieszane', tw: 'Rząd po rzędzie', zloto: 1 },
      { dur: 7, ord: 'losowo', op: 'podobne', tw: 'Lustrzane odbicie', lustro: 1, kawa: 1 }, { dur: 6.5, ord: 'spirala', op: 'podobne', tw: 'Dookoła', zloto: 1 },
      { dur: 6, ord: 'losowo', op: 'podobne', tw: 'Do góry nogami!', obrot: 1, kawa: 1 }, { dur: 5.5, ord: 'losowo', op: 'podobne', tw: 'Wszystko w grafitach', mono: 1, zloto: 1 },
      { wzor: 1, dur: 5 }, { wzor: 1, dur: 4.6, zloto: 1 }, { wzor: 1, dur: 4.2 }];
    const MOTYWOW = 8;
    const pole = $('#gZgad'), cv = $('#zgCv'), x = cv.getContext('2d'), pl = $('#zgPlansza'), odpBox = $('#zgOdp'), banEl = $('#zgBaner');
    let W = 0, H = 0, D = 1, bx = 0, by = 0, B = 0, c = 0, baza = null, uloz = null, ux = null, trawa = null, trawaPat = null;
    let stan = 'demo', widac = false, raf = 0, last = 0, R = null, rundy = [], ri = 0, pkt = 0, seria = 0, maxSeria = 0, traf = 0, zlote = 0, joker = 1, pauza = 0, demoT = 0, ostSt = -1;
    const leca = [], czast = Array.from({ length: 80 }, () => ({ z: 0 })), napisy = [];
    let KP = null;
    function palety() { if (KP) return KP; const P = S.PAL; KP = { g: P.grafit, s: P.szary, b: P.bianco, p: P.piaskowy, z: P.zolty, o: ['#c8742f', '#d07d35', '#bd6a2b', '#c97a3a'], c: ['#9a3a2c', '#a8432f', '#8e3427', '#a33f2e'],
      r: P.braz, n: ['#4d6b3a', '#56743f', '#46623a', '#5a7745'], e: ['#2f8f45', '#36a04f', '#2a7f3d'], m: P.melanz, Z: ['#e2b43c', '#d9a92f', '#ebc04f'] }; return KP; }
    const kurzSpr = (() => { const c2 = document.createElement('canvas'); c2.width = c2.height = 32; const g = c2.getContext('2d'), gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
      gr.addColorStop(0, 'rgba(232,214,178,.85)'); gr.addColorStop(1, 'rgba(232,214,178,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); return c2; })();
    const iskraSpr = (() => { const c2 = document.createElement('canvas'); c2.width = c2.height = 32; const g = c2.getContext('2d'); g.translate(16, 16); g.fillStyle = '#fff6c8';
      g.beginPath(); for (let i = 0; i < 8; i++) { const r = i % 2 ? 3 : 15, a = i * Math.PI / 4; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.shadowColor = '#ffd23f'; g.shadowBlur = 8; g.fill(); return c2; })();
    (() => { const im = new Image(); im.onload = () => { trawa = im; trawaPat = null; if (W) budujBaze(); }; im.src = 'img/tex/trawa.webp'; })();

    /* --- geometria planszy --- */
    function rozmiar() { const r = cv.getBoundingClientRect(); if (!r.width || !S) return; D = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.round(W * D); cv.height = Math.round(H * D);
      const p = pl.getBoundingClientRect(); const full = Math.max(120, Math.min(p.width, p.height)); c = full / (N + 1.7); B = c * N;
      bx = p.left - r.left + (p.width - B) / 2; by = p.top - r.top + (p.height - B) / 2; budujBaze(); if (R) { pozycje(R.lista); if (R.tlo) pozycje(R.tlo); przepiecz(); } else if (stan === 'demo') { demo(); if (RM) R.t = 99; } start(); }
    function budujBaze() { if (!W || !S) return; baza = baza || document.createElement('canvas'); baza.width = cv.width; baza.height = cv.height; const b = baza.getContext('2d');
      b.setTransform(D, 0, 0, D, 0, 0); if (trawa && !trawaPat) trawaPat = b.createPattern(trawa, 'repeat'); b.fillStyle = trawaPat || '#34452a'; b.fillRect(0, 0, W, H); b.fillStyle = 'rgba(12,16,8,.55)'; b.fillRect(0, 0, W, H);
      const saveK = S.k; S.k = c / 104; const e = c * .82, P = S.PAL.granit; let i = 0; // obrzeże z kostki granitowej
      for (let t = -e / 2; t < B + e / 2; t += e) for (const [px, py] of [[bx + t + e / 2 - e / 2, by - e * .62], [bx + t, by + B + e * .62], [bx - e * .62, by + t], [bx + B + e * .62, by + t]])
        S.drawOne(b, { x: px, y: py, w: e * .9, h: e * .9, rot: ((i * 37) % 10 - 5) * .01, col: P[(i++ * 7) % P.length], kind: 'dome', v: i % 6 }, D, 2);
      b.setTransform(D, 0, 0, D, 0, 0); b.fillStyle = S.bedPattern || '#c9b48d'; b.fillRect(bx, by, B, B); b.fillStyle = 'rgba(52,36,20,.36)'; b.fillRect(bx, by, B, B);
      b.strokeStyle = 'rgba(0,0,0,.09)'; b.lineWidth = 1; b.beginPath(); for (let k = 1; k < N; k++) { b.moveTo(bx + k * c, by); b.lineTo(bx + k * c, by + B); b.moveTo(bx, by + k * c); b.lineTo(bx + B, by + k * c); } b.stroke();
      const g = b.createLinearGradient(bx, by, bx + B, by + B); g.addColorStop(0, 'rgba(255,240,210,.08)'); g.addColorStop(1, 'rgba(0,0,0,.14)'); b.fillStyle = g; b.fillRect(bx, by, B, B);
      S.k = saveK; uloz = uloz || document.createElement('canvas'); uloz.width = cv.width; uloz.height = cv.height; ux = uloz.getContext('2d'); przepiecz(); }
    function przepiecz() { if (!uloz || !baza) return; ux.setTransform(1, 0, 0, 1, 0, 0); ux.drawImage(baza, 0, 0); if (!R) return; const saveK = S.k; S.k = R.wzor ? B / 1500 : c / 104;
      if (R.wzor) { ux.save(); ux.setTransform(D, 0, 0, D, 0, 0); ux.beginPath(); ux.rect(bx, by, B, B); ux.clip(); }
      for (let i = 0; i < R.i; i++) { const s = R.lista[i]; if (!leca.includes(s)) S.drawOne(ux, s, D, 2); }
      if (R.wzor) ux.restore(); S.k = saveK; }
    function pozycje(l) { for (const s of l) { s.x = bx + s.u * B; s.y = by + s.q * B; s.w = s.uw * B; s.h = s.uh * B; if (s.up) { s.poly = s.up.map(([a, b]) => [bx + a * B, by + b * B]); s.spr = null; } } }

    /* --- budowa rundy --- */
    function opcje(id, rodz, pula) { if (rodz === 'wzor') return tasuj([id, ...tasuj(Object.keys(WZ).filter(k => k !== id)).slice(0, 3)]);
      let kand = []; if (rodz === 'podobne' || rodz === 'mieszane') { GRUPY.forEach(g => { if (g.includes(id)) kand.push(...g); }); kand = tasuj([...new Set(kand)].filter(k => k !== id)); if (rodz === 'mieszane') kand = kand.slice(0, 1); }
      else { const moje = new Set(); GRUPY.forEach(g => { if (g.includes(id)) g.forEach(k => moje.add(k)); }); kand = tasuj(pula.filter(k => !moje.has(k))); }
      const reszta = tasuj(Object.keys(MOT).filter(k => k !== id && !kand.includes(k))); return tasuj([id, ...kand.concat(reszta).slice(0, 3)]); }
    function runda(cfg, id) { const P = palety(); const r = { cfg, id, wzor: !!cfg.wzor, lista: [], i: 0, t: -.55, zle: new Set(), dur: cfg.dur };
      if (r.wzor) { const pal = los(['grafit', 'szary', 'melanz', 'piaskowy', 'bianco', 'granit']); const saveK = S.k; S.k = 1000 / 1500; const l = [];
        S.genPattern(id, pal, -80, -80, 1080, 1080, (px, py, rr) => px > -rr * .6 && py > -rr * .6 && px < 1000 + rr * .6 && py < 1000 + rr * .6, l, { cell: id === 'wild' ? 330 : 0 }); S.k = saveK;
        const kx = Math.random() < .5 ? 0 : 1000, ky = Math.random() < .5 ? 0 : 1000;
        l.forEach(s => { s.u = s.x / 1000; s.q = s.y / 1000; s.uw = s.w / 1000; s.uh = s.h / 1000; if (s.poly) s.up = s.poly.map(([a, b]) => [a / 1000, b / 1000]); s.o = Math.hypot(s.x - kx, s.y - ky) + Math.random() * 90; });
        l.sort((a, b) => a.o - b.o); r.lista = l; r.n = l.length; r.nazwa = WZ[id]; r.opcje = opcje(id, 'wzor'); r.pal = pal; }
      else { const rows = MOT[id].split('|'), kom = [], tlo = [];
        let ileCiem = 0, ile = 0; rows.forEach(rw => { for (const ch of rw) if (ch !== '.') { ile++; if (ch === 'g' || ch === 'r') ileCiem++; } });
        const tloKol = cfg.mono ? 'b' : ileCiem / ile > .3 ? 's' : 'g';
        for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { let ii = i, jj = j; if (cfg.lustro) ii = N - 1 - ii; if (cfg.obrot) { ii = N - 1 - ii; jj = N - 1 - jj; } if (cfg.lustro && cfg.obrot) ii = N - 1 - ii;
          const ch = rows[j][i], k = ch === '.' ? tloKol : cfg.mono ? 'g' : ch, pal = P[k], h = Math.abs(Math.sin(ii * 12.9898 + jj * 78.233) * 43758.5453) % 1;
          const s = { u: (ii + .5) / N, q: (jj + .5) / N, uw: .9 / N, uh: .9 / N, rot: (h - .5) * .05, col: pal[(h * pal.length) | 0], kind: 'block', v: (h * 6) | 0, key: 0, poly: null, gi: ii, gj: jj };
          (ch === '.' ? tlo : kom).push(s); }
        const sc = .5 * (N - 1); kom.forEach(s => { const dx = s.gi - sc, dy = s.gj - sc, rnd = Math.random();
          s.o = cfg.ord === 'srodek' ? Math.hypot(dx, dy) + rnd * 1.6 : cfg.ord === 'rzedami' ? s.gj * 100 + (s.gj % 2 ? N - s.gi : s.gi) : cfg.ord === 'spirala' ? ((Math.atan2(dy, dx) + Math.PI * 2.5) % (Math.PI * 2)) * 10 + Math.hypot(dx, dy) * .4 : rnd; });
        kom.sort((a, b) => a.o - b.o); r.lista = kom; r.tlo = tlo; r.n = kom.length; r.nazwa = NAZ[id]; r.opcje = opcje(id, cfg.op, LATWE); }
      const krok = r.dur / r.n; r.lista.forEach((s, k) => { s.tl = k * krok; }); r.krok = krok;
      if (cfg.zloto && r.n > 8) { const k = Math.floor(r.n * (.25 + Math.random() * .4)); r.zloto = { s: r.lista[k], od: 0, do: 0, zl: false }; }
      if (cfg.kawa) { r.kawa = { u: .15 + Math.random() * .7, q: .15 + Math.random() * .7, tl: r.dur * (.18 + Math.random() * .25), od: 0, do: 0, zl: false }; }
      pozycje(r.lista); if (r.tlo) pozycje(r.tlo); return r; }

    /* --- pętla i rysowanie --- */
    function start() { if (!raf && widac && W) raf = requestAnimationFrame(klatka); }
    function pyl(px, py, n, iskra) { if (RM) return; for (let k = 0, i = 0; k < czast.length && i < n; k++) { const p = czast[k]; if (p.z > 0) continue; i++;
      const a = Math.random() * Math.PI * 2, v = (iskra ? 40 + Math.random() * 90 : 10 + Math.random() * 26); p.x = px; p.y = py; p.vx = Math.cos(a) * v; p.vy = Math.sin(a) * v - (iskra ? 30 : 0); p.z = 1; p.d = iskra ? .7 : .55 + Math.random() * .3; p.r = iskra ? 6 + Math.random() * 6 : c * (.35 + Math.random() * .35); p.i = !!iskra; } }
    function napis(txt, px, py, kol) { napisy.push({ txt, x: px, y: py, t: 0, kol: kol || '#fff' }); if (napisy.length > 6) napisy.shift(); }
    function stawka() { if (!R) return 0; const lay = Math.min(R.i, R.n); return R.i >= R.n ? 20 : Math.round(20 + 80 * (1 - lay / R.n)); }
    function mnoz() { return seria >= 4 ? 3 : seria >= 2 ? 2 : 1; }
    function klatka(now) {
      raf = 0; if (!widac || !W || !S) return; const dt = Math.min(.05, (now - (last || now)) / 1000); last = now; let dalej = !RM || leca.length > 0;
      if (R) {
        if (stan === 'gra') { if (pauza > 0) pauza = Math.max(0, pauza - dt); else R.t += dt; } else R.t += dt;
        while (R.i < R.lista.length && R.lista[R.i].tl <= R.t) { const s = R.lista[R.i++]; s.ts = now; leca.push(s); }
        if (R.kawa && !R.kawa.od && stan === 'gra' && R.t >= R.kawa.tl) { R.kawa.od = now; R.kawa.do = now + 3200; }
        if (stan === 'gra') { const st = stawka(); if (st !== ostSt) { ostSt = st; $('#zgStawka').textContent = st * mnoz() * (R.wzor ? 2 : 1); $('#zgPasek').style.transform = `scaleX(${R.i >= R.n ? 1 : (st - 20) / 80})`; }
          if (R.i >= R.n) { if (!R.koniec) { R.koniec = now + 4000; pole.classList.add('ostatnie'); } const zost = (R.koniec - now) / 4000; $('#zgPasek').style.transform = `scaleX(${clamp(zost, 0, 1)})`; if (now >= R.koniec) przegrana(); }
          dalej = true; }
        if (stan === 'demo' && R.i >= R.lista.length && !leca.length) { if (!demoT) demoT = now; if (now - demoT > 2600 && !RM) { demoT = 0; demo(); } }
      }
      const saveK = S.k; S.k = R && R.wzor ? B / 1500 : c / 104;
      x.setTransform(1, 0, 0, 1, 0, 0); if (uloz) x.drawImage(uloz, 0, 0);
      if (R && R.wzor) { x.save(); x.setTransform(D, 0, 0, D, 0, 0); x.beginPath(); x.rect(bx, by, B, B); x.clip(); }
      for (let k = 0; k < leca.length; k++) { const s = leca[k], t = (now - s.ts) / 1000 / SPAD;
        if (t >= 1) { if (R && R.wzor) { ux.save(); ux.setTransform(D, 0, 0, D, 0, 0); ux.beginPath(); ux.rect(bx, by, B, B); ux.clip(); } S.drawOne(ux, s, D, 2); if (R && R.wzor) ux.restore();
          leca.splice(k--, 1); pyl(s.x, s.y + s.h * .3, 3); if (R && R.zloto && R.zloto.s === s && stan === 'gra') { R.zloto.od = now; R.zloto.do = now + 2600; } }
        else S.drawOne(x, s, D, Math.max(.001, t)); }
      if (R && R.wzor) x.restore();
      x.setTransform(D, 0, 0, D, 0, 0);
      if (R && R.zloto && R.zloto.od && !R.zloto.zl && now < R.zloto.do) { const s = R.zloto.s, P = palety().Z, pul = .5 + .5 * Math.sin(now / 120);
        S.drawOne(x, { x: s.x, y: s.y, w: s.w * 1.04, h: s.h * 1.04, rot: s.rot, col: P[0], kind: 'block', v: 1 }, D, 2); x.setTransform(D, 0, 0, D, 0, 0);
        x.strokeStyle = `rgba(255,222,110,${.45 + pul * .5})`; x.lineWidth = 2.5; x.beginPath(); x.arc(s.x, s.y, c * (.9 + pul * .5), 0, 7); x.stroke();
        x.globalAlpha = .6 + pul * .4; x.drawImage(iskraSpr, s.x + c * .1, s.y - c * .75, c * .7, c * .7); x.globalAlpha = 1; dalej = true; }
      if (R && R.kawa && R.kawa.od && !R.kawa.zl && now < R.kawa.do) { const k2 = R.kawa, px = bx + k2.u * B, py = by + k2.q * B, f = clamp((now - k2.od) / 300, 0, 1), r = c * 1.05 * (RM ? 1 : .6 + .4 * f), pul = .5 + .5 * Math.sin(now / 140);
        x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.arc(px + 3, py + 5, r, 0, 7); x.fill(); x.fillStyle = '#f6f1e7'; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill();
        x.strokeStyle = `rgba(90,210,124,${.5 + pul * .5})`; x.lineWidth = 3; x.beginPath(); x.arc(px, py, r + 3 + pul * 3, 0, 7); x.stroke(); kubek(px, py, r * .62); dalej = true; }
      for (const p of czast) { if (p.z <= 0) continue; p.z -= dt / p.d; p.x += p.vx * dt; p.y += p.vy * dt; if (p.i) p.vy += 160 * dt; p.vx *= .96; p.vy *= .96; if (p.z <= 0) continue;
        x.globalAlpha = p.i ? p.z : p.z * .7; const r = p.i ? p.r : p.r * (1.6 - p.z * .6); x.drawImage(p.i ? iskraSpr : kurzSpr, p.x - r, p.y - r, r * 2, r * 2); dalej = true; }
      x.globalAlpha = 1;
      for (let k = 0; k < napisy.length; k++) { const n = napisy[k]; n.t += dt; if (n.t > 1.2) { napisy.splice(k--, 1); continue; } const a = n.t < .9 ? 1 : 1 - (n.t - .9) / .3;
        x.globalAlpha = a; x.font = `900 ${Math.round(c * 1.25 + 8)}px "Big Shoulders Display",Impact,sans-serif`; x.textAlign = 'center'; x.lineWidth = 4; x.strokeStyle = 'rgba(0,0,0,.55)';
        const yy = n.y - n.t * 46; x.strokeText(n.txt, n.x, yy); x.fillStyle = n.kol; x.fillText(n.txt, n.x, yy); dalej = true; }
      x.globalAlpha = 1; S.k = saveK;
      if (pauza > 0 && stan === 'gra') { x.fillStyle = 'rgba(10,10,10,.55)'; x.fillRect(bx, by + B / 2 - c * 1.2, B, c * 2.4); x.fillStyle = '#fff'; x.font = `800 ${Math.round(c * .8 + 6)}px Manrope,sans-serif`; x.textAlign = 'center';
        x.fillText('Andrzej pije kawę… ' + pauza.toFixed(1).replace('.', ',') + ' s', bx + B / 2, by + B / 2 + c * .3); }
      if (dalej || leca.length || (stan === 'demo' && !RM)) start();
    }
    function kubek(px, py, r) { x.save(); x.translate(px, py); x.fillStyle = '#2b2b2b'; x.strokeStyle = '#2b2b2b'; x.lineWidth = r * .16; x.lineCap = 'round';
      x.beginPath(); x.moveTo(-r * .6, -r * .15); x.lineTo(r * .4, -r * .15); x.lineTo(r * .3, r * .75); x.lineTo(-r * .5, r * .75); x.closePath(); x.fill();
      x.beginPath(); x.arc(r * .48, r * .25, r * .26, -1.4, 1.4); x.stroke(); x.fillStyle = '#8a5a35'; x.fillRect(-r * .48, -r * .1, r * .78, r * .18);
      x.beginPath(); for (const sx of [-.3, .05]) { x.moveTo(r * sx, -r * .35); x.quadraticCurveTo(r * (sx + .2), -r * .6, r * sx, -r * .85); } x.stroke(); x.restore(); }

    /* --- przebieg gry --- */
    function demo() { leca.length = 0; R = runda({ dur: 6, ord: los(['losowo', 'srodek', 'spirala']), op: 'latwe' }, los(LATWE)); R.t = 0; przepiecz(); R.lista = R.lista.concat(tloFala(R.dur + .6)); start(); }
    function tloFala(t0) { const l = R.tlo.slice(); const sc = (N - 1) / 2; l.forEach(s => { s.tl = t0 + Math.hypot(s.gi - sc, s.gj - sc) / (N * .7) * .8 + Math.random() * .12; }); return l.sort((a, b) => a.tl - b.tl); }
    function nowaGra() { const pula = tasuj(Object.keys(MOT)); const latwe = tasuj(LATWE.slice()).slice(0, 2); const resz = pula.filter(k => !latwe.includes(k)); rundy = latwe.concat(resz.slice(0, MOTYWOW - 2));
      const wz = tasuj(['herring', 'rows', 'basket', 'slabs', 'cobble', 'arcs', 'wild']).slice(0, 3); rundy = rundy.concat(wz);
      ri = 0; pkt = 0; seria = 0; maxSeria = 0; traf = 0; zlote = 0; joker = 1; stan = 'start'; pole.classList.add('gra-aktywna'); $('#zgStart').hidden = true; pole.classList.remove('koniec');
      $('#zgPkt').textContent = '0 pkt'; $('#zgJoker').disabled = false; $('#zgJoker').hidden = false; nastepna(); }
    function nastepna() { const cfg = PLAN[ri]; leca.length = 0; R = runda(cfg, rundy[ri]); ostSt = -1; pauza = 0; pole.classList.remove('ostatnie');
      przepiecz(); stan = 'gra'; const bon = cfg.wzor; $('#zgRunda').textContent = bon ? `Zlecenie ${ri - MOTYWOW + 1} z 3` : `Runda ${ri + 1} z ${MOTYWOW}`; hud();
      odpBox.innerHTML = R.opcje.map(o => `<button type="button" class="btn jasny" data-o="${o}">${bon ? WZ[o] : NAZ[o]}</button>`).join('');
      $('#zgJoker').disabled = joker < 1; $('#zgPytanie').textContent = bon ? 'Jaki to wzór układania?' : 'Co Andrzej układa?';
      baner(banEl, `<small>${bon ? 'Zlecenie specjalne · punkty ×2' : 'Runda ' + (ri + 1)}</small>${cfg.tw ? '<b>' + cfg.tw + '</b>' : bon ? '<b>Wzór ' + (ri - MOTYWOW + 1) + ' z 3</b>' : ''}`, 1300); start(); }
    function hud() { const m = mnoz(); $('#zgSeria').textContent = seria >= 2 ? `Seria ${seria} · ×${m}` : seria === 1 ? 'Seria 1' : ''; $('#zgSeria').classList.toggle('goraco', m > 1); $('#zgPkt').textContent = pkt + ' pkt'; }
    function wybierz(o) { if (stan !== 'gra' || !R || R.zle.has(o)) return; const btn = odpBox.querySelector(`[data-o="${o}"]`);
      if (o === R.id) { const zysk = stawka() * mnoz() * (R.wzor ? 2 : 1); pkt += zysk; seria++; maxSeria = Math.max(maxSeria, seria); traf++; btn.classList.add('dobrze');
        napis('+' + zysk, bx + B / 2, by + B * .45, '#ffe28a'); for (let k = 0; k < 3; k++) pyl(bx + B * (.25 + k * .25), by + B * .45, 6, true); wibruj(18);
        baner(banEl, `<b>${R.nazwa}!</b><small>+${zysk} pkt${mnoz() > 1 && seria > 2 ? ' · seria ' + seria : ''}${R.wzor ? ' · ' + FAKT[R.id] : ''}</small>`, R.wzor ? 2400 : 1700, 'dobrze'); hud(); odkryj(R.wzor ? 2500 : 1900); }
      else { R.zle.add(o); btn.classList.add('zle'); btn.disabled = true; const kara = Math.min(30, pkt); pkt -= kara; seria = 0; hud(); R.t += R.n * R.krok * .14; ostSt = -1;
        napis(kara ? '−' + kara : 'Pudło', bx + B / 2, by + B * .5, '#ff9b8f'); pole.classList.remove('trzes'); void pole.offsetWidth; pole.classList.add('trzes'); wibruj([30, 40, 30]); } }
    function przegrana() { if (stan !== 'gra') return; seria = 0; hud(); baner(banEl, `<small>Czas minął. To był${R.wzor ? ' wzór' : 'o'}:</small><b>${R.nazwa}</b>`, 2200, 'zly'); odkryj(2400); }
    function odkryj(ms) { stan = 'odkrywa'; pauza = 0; pole.classList.remove('ostatnie'); $$('#zgOdp [data-o]').forEach(b => { b.disabled = true; if (b.dataset.o === R.id) b.classList.add('dobrze'); });
      const rest = R.lista.slice(R.i); const t0 = R.t; rest.forEach((s, k) => { s.tl = t0 + k * Math.min(.012, .45 / Math.max(1, rest.length)); });
      if (R.tlo) R.lista = R.lista.concat(tloFala(t0 + .35 + rest.length * .006)); $('#zgPasek').style.transform = 'scaleX(0)'; $('#zgStawka').textContent = '0'; start();
      setTimeout(() => { ri++; if (ri === MOTYWOW) zlecenie(); else if (ri < rundy.length) nastepna(); else koniec(); }, ms); }
    function zlecenie() { stan = 'zlecenie'; odpBox.innerHTML = ''; const z = $('#zgZlec'); z.hidden = false; const go = () => { if (z.hidden) return; z.hidden = true; nastepna(); };
      $('#zgZlecOk').onclick = go; clearTimeout(z._t); z._t = setTimeout(go, 4200); }
    function koniec() { stan = 'koniec'; pole.classList.remove('gra-aktywna'); odpBox.innerHTML = ''; $('#zgJoker').hidden = true; const rek = czytaj('gb-zg2') || 0, nowy = pkt > rek; if (nowy) pisz('gb-zg2', pkt);
      const g = pkt >= 1700 ? 3 : pkt >= 1000 ? 2 : pkt >= 400 ? 1 : 0; ostatni = { pkt, g };
      $('#zgTresc').innerHTML = `<div class="gs-stempel${g === 3 ? ' zloty' : ''}">${RANGA[g]}</div>${gw(g)}<p class="gs-pkt"><b>${pkt}</b> pkt</p>
        <p class="gs-staty">Odgadnięte: <b>${traf} z ${rundy.length}</b> · najdłuższa seria: <b>${maxSeria}</b> · złote kostki: <b>${zlote}</b></p>
        <p class="gs-rek">${nowy ? '<b>Nowy rekord!</b>' : 'Rekord: <b>' + rek + ' pkt</b>'}</p><p class="gs-dalej"><button type="button" class="btn jasny" data-dziel>Wyzwij znajomych</button> <a href="#projektant">Zobacz wzory na swoim zdjęciu</a></p>`;
      $('#zgGraj').textContent = 'Zagraj jeszcze raz'; pole.classList.add('koniec'); $('#zgStart').hidden = false; if (g >= 2 || nowy) konfetti($('#zgStart'), 26); rekordy(); demoT = performance.now(); }
    let ostatni = null;
    odpBox.addEventListener('click', e => { const b = e.target.closest('[data-o]'); if (b) wybierz(b.dataset.o); });
    $('#zgJoker').addEventListener('click', () => { if (stan !== 'gra' || joker < 1) return; joker--; $('#zgJoker').disabled = true;
      tasuj(R.opcje.filter(o => o !== R.id && !R.zle.has(o))).slice(0, 2).forEach(o => { R.zle.add(o); const b = odpBox.querySelector(`[data-o="${o}"]`); if (b) { b.disabled = true; b.classList.add('skreslone'); } });
      baner(banEl, '<b>Pół na pół</b><small>Dwie złe odpowiedzi znikają</small>', 1100, 'bonus'); });
    $('#zgGraj').addEventListener('click', nowaGra);
    $('#zgStart').addEventListener('click', e => { const b = e.target.closest('[data-dziel]'); if (b && ostatni) udostepnij(`Mam ${ostatni.pkt} pkt w grze „Co Andrzej układa?” na stronie GardenBruk (${RANGA[ostatni.g].replace('!', '')}). Pobijesz?`); });
    cv.addEventListener('pointerdown', e => { if (stan !== 'gra' || !R) return; const r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top, now = performance.now(), zas = Math.max(c * 1.7, 26);
      if (R.zloto && R.zloto.od && !R.zloto.zl && now < R.zloto.do && Math.hypot(px - R.zloto.s.x, py - R.zloto.s.y) < zas) { R.zloto.zl = true; pkt += 50; zlote++; hud(); napis('+50', R.zloto.s.x, R.zloto.s.y - c, '#ffe28a'); pyl(R.zloto.s.x, R.zloto.s.y, 14, true); wibruj(15);
        baner(banEl, '<b>Złota kostka!</b><small>+50 pkt</small>', 1000, 'bonus'); start(); return; }
      const k2 = R.kawa; if (k2 && k2.od && !k2.zl && now < k2.do && Math.hypot(px - (bx + k2.u * B), py - (by + k2.q * B)) < zas) { k2.zl = true; pauza = 3; wibruj(15); pyl(bx + k2.u * B, by + k2.q * B, 8, true);
        baner(banEl, '<b>Kawa dla Andrzeja!</b><small>3 sekundy przerwy w układaniu</small>', 1300, 'bonus'); start(); } });
    new IntersectionObserver(es => es.forEach(e => { widac = e.isIntersecting; if (widac) { if (!W) rozmiar(); start(); } }), { rootMargin: '80px' }).observe(cv);
    let plW = 0, plH = 0; const ro = new ResizeObserver(() => { const r = cv.getBoundingClientRect(), q = pl.getBoundingClientRect(); if (r.width && (Math.abs(r.width - W) > 1 || Math.abs(r.height - H) > 1 || Math.abs(q.width - plW) > 1 || Math.abs(q.height - plH) > 1)) { plW = q.width; plH = q.height; rozmiar(); } });
    ro.observe(cv); ro.observe(pl);
    return { rozmiar, init() { const z = czytaj('gb-zg2'); $('#zgRekord').textContent = z ? z + ' pkt' : 'brak'; rozmiar(); },
      test: () => ({ stan, ri, pkt, seria, joker, zlote, n: R ? R.n : 0, i: R ? R.i : 0, id: R ? R.id : null, opcje: R ? R.opcje : [], zle: R ? [...R.zle] : [], W, H, B, bx, by, c,
        zloto: R && R.zloto && R.zloto.od && !R.zloto.zl && performance.now() < R.zloto.do ? { x: R.zloto.s.x, y: R.zloto.s.y } : null,
        kawa: R && R.kawa && R.kawa.od && !R.kawa.zl && performance.now() < R.kawa.do ? { x: bx + R.kawa.u * B, y: by + R.kawa.q * B } : null, pauza }) };
  })();

  /* =====================================================================
     Memory z kostki – trzy poziomy, odliczanie, kombo, karty bonusowe i ukryty szef placu.
     ===================================================================== */
  const mem = (function () {
    const pole = $('#gMem'), box = $('#mem'), banEl = $('#memBaner');
    const PROD = { latarnia: 'Latarnia ogrodowa', tuja: 'Tuja', klon_jesien: 'Klon jesienią', donica: 'Donica', slupek: 'Słupek świetlny', trawa: 'Trawa ozdobna', bukszpan: 'Bukszpan', brzoza: 'Brzoza' };
    const NK = { grafit: 'grafit', piaskowy: 'piaskowa', bianco: 'bianco', melanz: 'melanż', szary: 'szara', granit: 'granit', lupek: 'łupek' };
    const CHIP = { grafit: '#46474c', piaskowy: '#cbb48c', bianco: '#dbd7ce', melanz: 'linear-gradient(135deg,#8a6a50,#b29a78 50%,#6b5444)', szary: '#878681', granit: '#96938d', lupek: '#5e6062' };
    const MEMWZ = [['herring', 'grafit'], ['rows', 'piaskowy'], ['basket', 'melanz'], ['slabs', 'bianco'], ['cobble', 'granit'], ['arcs', 'lupek']];
    const BON = { zloto: { t: 'Złota kostka', b: '+100 pkt' }, klepsydra: { t: 'Klepsydra', b: '+15 s' }, lupa: { t: 'Lupa', b: 'Podgląd' } };
    const POZ = [
      { n: 'Na placu', opis: 'Siedem par. Wszystko łatwo odróżnić – rozgrzewka.', czas: 80, bon: ['zloto', 'klepsydra'], m: [4, 4], d: [8, 2], cof: 850 },
      { n: 'W hurtowni', opis: 'Dziewięć par. Te same wzory w różnych kolorach – patrz uważnie.', czas: 110, bon: ['lupa', 'zloto'], m: [4, 5], d: [5, 4], cof: 750 },
      { n: 'Mistrz bruku', opis: 'Para to zdjęcie wzoru i jego nazwa. Gdzieś ukrywa się szef placu.', czas: 150, bon: ['klepsydra', 'lupa'], m: [4, 6], d: [8, 3], cof: 750 }];
    let karty = [], odkryte = [], ruchy = 0, pary = 0, parWsz = 0, pkt = 0, pktStart = 0, kombo = 0, poz = 0, stan = 'start', czas = 0, ost = 0, zegar = 0, cofT = 0, gwiazdy = [0, 0, 0], dalej = null, wynik = null, pokazano = false, blok = false;
    const v = (t, b) => `<span class="przod${t}">${b}</span>`;
    function talia(n) { const L = [];
      if (n === 0) { tasuj(MEMWZ.slice()).slice(0, 4).forEach(([p, k]) => L.push({ p: p + k, f: v('', `<img src="img/wz/mem-${p}-${k}.webp" alt=""><em>${WZ[p]} · ${NK[k]}</em>`), a: WZ[p] + ', ' + NK[k] }));
        tasuj(Object.keys(PROD)).slice(0, 3).forEach(k => L.push({ p: k, f: v(' prod', `<img src="img/pk/${k}.webp" alt=""><em>${PROD[k]}</em>`), a: PROD[k] })); }
      else { const pats = tasuj(['herring', 'rows', 'basket', 'cobble', 'arcs', 'slabs', 'grid']).slice(0, n === 1 ? 3 : 4), kols = tasuj(['grafit', 'piaskowy', 'bianco', 'melanz', 'szary']).slice(0, 3);
        const combos = tasuj(pats.flatMap(p => kols.map(k => [p, k]))).slice(0, n === 1 ? 9 : 10);
        combos.forEach(([p, k]) => { const id = p + k, src = `img/wz/wz-${p}-${k}.webp`;
          if (n === 1) L.push({ p: id, f: v('', `<img src="${src}" alt=""><em>${WZ[p]} · ${NK[k]}</em>`), a: WZ[p] + ', ' + NK[k] });
          else { L.push({ p: id, f: v('', `<img src="${src}" alt="">`), a: 'zdjęcie: ' + WZ[p] + ', ' + NK[k], para: { p: id, f: v(' nazwa', `<b>${WZ[p]}</b><small><i style="background:${CHIP[k]}"></i>${NK[k]}</small>`), a: 'napis: ' + WZ[p] + ', ' + NK[k] } }); } });
        if (n === 2) L.push({ p: 'andrzej', f: v(' andrzej', '<img src="img/andrzej-twarz.webp" alt=""><em>Andrzej</em>'), a: 'Andrzej, szef placu' }); }
      const d = []; L.forEach(k => { d.push({ p: k.p, f: k.f, a: k.a }); const b = k.para || k; d.push({ p: b.p, f: b.f, a: b.a }); });
      POZ[n].bon.forEach(b => d.push({ p: '#' + b, bon: b, f: v(' bonus ' + b, ikona(b) + `<b>${BON[b].b}</b><small>${BON[b].t}</small>`), a: 'bonus: ' + BON[b].t }));
      return tasuj(d).map(k => ({ ...k, odkr: false, para: false, uzyta: false })); }
    function ikona(b) { return b === 'zloto' ? '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 18 24 10l16 8v12l-16 8-16-8z" fill="#f4cd55"/><path d="M8 18l16 8 16-8M24 26v12" fill="none" stroke="#a87b12" stroke-width="2"/></svg>'
      : b === 'klepsydra' ? '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 8h20M14 40h20M16 8c0 10 16 10 16 16s-16 6-16 16M32 8c0 10-16 10-16 16s16 6 16 16" fill="none" stroke="#2b2b2b" stroke-width="3" stroke-linecap="round"/><path d="M19 37c2-5 8-5 10 0z" fill="#d9a92f"/></svg>'
      : '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="20" cy="20" r="11" fill="#dff1e5" stroke="#2b2b2b" stroke-width="3.5"/><path d="M28 28l11 11" stroke="#2b2b2b" stroke-width="5" stroke-linecap="round"/></svg>'; }
    function siatka() { const L = POZ[poz], mob = innerWidth <= 820, [kol, rz] = mob ? L.m : L.d; const gap = mob ? 6 : 10;
      const pasek = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pasek')) || 64, dok = document.getElementById('dok'), dh = dok && getComputedStyle(dok).display !== 'none' ? dok.offsetHeight + 12 : 0;
      const cs = getComputedStyle(pole), aw = (pole.clientWidth || 346) - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), ah = Math.max(260, innerHeight - pasek - dh - (mob ? 92 : 104));
      const s = Math.floor(Math.min((aw - gap * (kol - 1)) / kol, (ah - gap * (rz - 1)) / rz, 190)); box.style.setProperty('--kw', s + 'px'); box.style.setProperty('--kol', kol); box.style.gap = gap + 'px'; }
    function rozdaj() { karty = talia(poz); box.dataset.poz = poz + 1; siatka();
      box.innerHTML = karty.map((k, i) => `<button type="button" class="karta${k.bon ? ' bon' : ''}" data-i="${i}" style="--i:${i}" aria-label="Karta ${i + 1}, zakryta"><span class="tyl" aria-hidden="true"><b>GB</b></span>${k.f.replace('<span class="przod', '<span aria-hidden="true" class="przod')}</button>`).join(''); }
    function odwroc(i, on) { const k = karty[i], b = box.children[i]; k.odkr = on; b.classList.toggle('odkr', on); b.setAttribute('aria-label', `Karta ${i + 1}, ${on ? k.a : 'zakryta'}`); }
    function hud() { $('#memPoziom').textContent = `Poziom ${poz + 1} z 3`; $('#memRuchy').textContent = ruchy + ' ' + lpR(ruchy); $('#memPkt').textContent = pkt + ' pkt'; }
    function tik() { const now = performance.now(), dt = (now - ost) / 1000; ost = now; if (stan !== 'gra' || document.hidden || pole.hidden) return; if (!blok) czas -= dt;
      $('#memCzas').textContent = zegarTxt(czas); $('#memPasek').style.transform = `scaleX(${clamp(czas / POZ[poz].czas, 0, 1)})`; pole.classList.toggle('ostatnie', czas < 10); if (czas <= 0) przegrana(); }
    function zaKarte(i) { if (stan !== 'gra' || blok) return; const k = karty[i]; if (k.odkr || k.para || k.uzyta) return;
      if (odkryte.length >= 2) { clearTimeout(cofT); const [a, b] = odkryte; odwroc(a, false); odwroc(b, false); odkryte = []; }
      if (k.bon) { odwroc(i, true); k.uzyta = true; const el = box.children[i]; el.classList.add('uzyta'); bonus(k.bon, el); return; }
      odwroc(i, true); odkryte.push(i); if (odkryte.length < 2) return; ruchy++; hud(); const [a, b] = odkryte;
      if (karty[a].p === karty[b].p) { karty[a].para = karty[b].para = true; odkryte = []; pary++; kombo++; const m = Math.min(4, kombo), zysk = 50 * m; pkt += zysk;
        [a, b].forEach(j => box.children[j].classList.add('para')); const el = box.children[b];
        if (karty[a].p === 'andrzej') { pkt += 500; baner(banEl, '<b>Andrzej! +500</b><small>Szef placu znaleziony!</small>', 2400, 'stempel'); konfetti(pole, 34); wibruj([20, 40, 20]); }
        else if (m > 1) baner(banEl, `<b>Kombo ×${m}</b><small>+${zysk} pkt</small>`, 900, 'bonus'); else wibruj(12);
        konfKarta(el, 10); hud(); if (pary === parWsz) setTimeout(wygrana, 650); }
      else { kombo = 0; cofT = setTimeout(() => { odwroc(a, false); odwroc(b, false); odkryte = []; }, POZ[poz].cof); } }
    function konfKarta(el, n) { const a = pole.getBoundingClientRect(), r = el.getBoundingClientRect(); konfetti(pole, n, r.left - a.left + r.width / 2, r.top - a.top + r.height / 2); } // konfetti poza kartą 3D
    function bonus(b, el) { wibruj(15); konfKarta(el, 12);
      if (b === 'zloto') { pkt += 100; hud(); baner(banEl, '<b>Złota kostka!</b><small>+100 pkt</small>', 1200, 'bonus'); }
      if (b === 'klepsydra') { czas += 15; baner(banEl, '<b>Klepsydra!</b><small>+15 sekund</small>', 1200, 'bonus'); }
      if (b === 'lupa') { blok = true; baner(banEl, '<b>Lupa!</b><small>Zapamiętaj karty – podgląd 1,5 s</small>', 1500, 'bonus');
        setTimeout(() => { karty.forEach((k, i) => { if (!k.para && !k.uzyta && !k.odkr) box.children[i].classList.add('podglad'); }); }, 350);
        setTimeout(() => { $$('#mem .podglad').forEach(n => n.classList.remove('podglad')); blok = false; }, 1850); } }
    function graj(n) { poz = n || 0; if (!n) { pkt = 0; gwiazdy = [0, 0, 0]; } pktStart = pkt; rozdaj(); ruchy = 0; pary = 0; parWsz = karty.filter(k => !k.bon).length / 2; kombo = 0; odkryte = []; blok = false;
      czas = POZ[poz].czas; stan = 'gra'; pole.classList.add('gra-aktywna'); pole.classList.remove('ostatnie'); $('#memStart').hidden = true; hud(); $('#memCzas').textContent = zegarTxt(czas); $('#memPasek').style.transform = 'scaleX(1)';
      baner(banEl, `<small>Poziom ${poz + 1} z 3</small><b>${POZ[poz].n}</b>`, 1500); if (poz && window.GBekran && GBekran.dopasuj) requestAnimationFrame(() => GBekran.dopasuj()); ost = performance.now(); clearInterval(zegar); zegar = setInterval(tik, 100); }
    function wygrana() { stan = 'przerwa'; clearInterval(zegar); const L = POZ[poz], prem = Math.max(0, Math.round(czas)) * 5; pkt += prem; const g = ruchy <= parWsz * 1.7 ? 3 : ruchy <= parWsz * 2.5 ? 2 : 1; gwiazdy[poz] = g; hud();
      const naj = czytaj('gb-mem3g') || [0, 0, 0]; if (g > (naj[poz] || 0)) { naj[poz] = g; pisz('gb-mem3g', naj); }
      if (poz < 2) { const N2 = POZ[poz + 1]; dalej = () => graj(poz + 1);
        tresc(`<p class="gs-tytul">Poziom ${poz + 1} ukończony!</p>${gw(g)}<p class="gs-staty"><b>${ruchy}</b> ${lpR(ruchy)} · zostało <b>${zegarTxt(czas)}</b> · premia za czas <b>+${prem} pkt</b></p><p class="gs-pkt"><b>${pkt}</b> pkt</p>
          <p class="gs-nast">Dalej: <b>Poziom ${poz + 2} · ${N2.n}</b><br>${N2.opis}</p>`, `▶ Poziom ${poz + 2}`); if (g === 3) konfetti($('#memStart'), 20); }
      else final(); }
    function przegrana() { stan = 'przerwa'; clearInterval(zegar); pkt = pktStart; hud(); dalej = () => graj(poz);
      tresc(`<p class="gs-tytul">Czas minął!</p><p class="gs-staty">Znalezione pary: <b>${pary} z ${parWsz}</b>. Spróbuj jeszcze raz – karty zostaną przetasowane.</p><p class="gs-dalej"><button type="button" class="btn jasny" data-konczy>Zakończ grę</button></p>`, `▶ Powtórz poziom ${poz + 1}`); }
    function final() { stan = 'koniec'; pole.classList.remove('gra-aktywna', 'ostatnie'); clearInterval(zegar); const suma = gwiazdy.reduce((a, b) => a + b, 0), r = suma >= 8 ? 3 : suma >= 5 ? 2 : suma >= 1 ? 1 : 0;
      const rek = czytaj('gb-mem3') || 0, nowy = pkt > rek; if (nowy) pisz('gb-mem3', pkt); wynik = { pkt, r }; dalej = () => graj(0);
      tresc(`<div class="gs-stempel${r === 3 ? ' zloty' : ''}">${RANGA[r]}</div><p class="gs-pkt"><b>${pkt}</b> pkt</p><ul class="gs-poz">${POZ.map((L, i) => `<li><span>Poziom ${i + 1} · ${L.n}</span>${gw(gwiazdy[i])}</li>`).join('')}</ul>
        <p class="gs-rek">${nowy ? '<b>Nowy rekord!</b>' : 'Rekord: <b>' + rek + ' pkt</b>'}</p><p class="gs-dalej"><button type="button" class="btn jasny" data-dziel>Wyzwij znajomych</button></p>`, 'Zagraj jeszcze raz');
      if (suma >= 5 || nowy) konfetti($('#memStart'), 26); rekordy(); }
    function tresc(html, btn) { $('#memTresc').innerHTML = html; $('#memGraj').textContent = btn; $('#memStart').hidden = false; pole.classList.add('wynik'); }
    function poczatek() { const naj = czytaj('gb-mem3g') || [0, 0, 0], rek = czytaj('gb-mem3');
      $('#memTresc').innerHTML = `<p class="gs-tytul">Memory z kostki</p><p class="gs-hint">Odkrywaj po dwie karty i szukaj par. Trzy poziomy, coraz trudniej, a zegar tyka.</p>
        <ul class="gs-poz">${POZ.map((L, i) => `<li><span>Poziom ${i + 1} · ${L.n}</span>${gw(naj[i] || 0)}</li>`).join('')}</ul>
        <p class="gs-leg"><span>${ikona('zloto')} +100 pkt</span><span>${ikona('klepsydra')} +15 s</span><span>${ikona('lupa')} podgląd</span></p><p class="gs-rek">Rekord: <b id="memRekord">${rek ? rek + ' pkt' : 'brak'}</b></p>`; }
    box.addEventListener('click', e => { const b = e.target.closest('.karta'); if (b) zaKarte(+b.dataset.i); });
    $('#memGraj').addEventListener('click', () => { pole.classList.remove('wynik'); (dalej || (() => graj(0)))(); dalej = null; });
    $('#memStart').addEventListener('click', e => { if (e.target.closest('[data-konczy]')) { e.stopPropagation(); final(); return; }
      if (e.target.closest('[data-dziel]') && wynik) { e.stopPropagation(); udostepnij(`Mam ${wynik.pkt} pkt w Memory z kostki na stronie GardenBruk (${RANGA[wynik.r].replace('!', '')}). Pobijesz?`); } });
    addEventListener('resize', () => { if (karty.length) siatka(); });
    function widac() { if (!karty.length) { rozdaj(); } if (pokazano || RM || stan !== 'start') return; pokazano = true;
      setTimeout(() => { if (stan !== 'start' || !box.children[5]) return; odwroc(0, true); odwroc(5, true); setTimeout(() => { if (stan !== 'start') return; odwroc(0, false); odwroc(5, false); }, 1300); }, 500); }
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !pole.hidden) widac(); }), { threshold: .3 }).observe(pole);
    return { widac, init() { poczatek(); },
      test: () => ({ stan, poz, ruchy, pary, parWsz, pkt, czas, n: karty.length, blok, karty: karty.map(k => ({ p: k.p, bon: k.bon || null, para: k.para, uzyta: k.uzyta })), gwiazdy }) };
  })();

  /* =====================================================================
     Gra trzyma ekran: gdy gra trwa, strona raz łagodnie się dopasowuje (całe pole widać między paskiem a dokiem),
     a krótkie przesunięcia palcem po polu gry nie przewijają strony. Długi, zdecydowany ruch (ponad 90 px albo dwa razy z rzędu)
     przewija dalej, z rozpędem. Każda gra w #gry: klasa „gra-aktywna” na .gra-pole albo płótno z klasą „gram” (gra.js).
     Gra, która sama przeciąga coś palcem, ustawia window.GBekran.zajete = true w pointerdown.
     ===================================================================== */
  const ekran = (function () {
    let akt = null, podp = false, dot = null, ped = 0, pedRaf = 0, ostZwolnij = 0, kolo = { suma: 0, t: 0 };
    const API = window.GBekran = { zajete: false, get aktywne() { return akt; } };
    const PROG = 90;
    const pasekH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--pasek')) || 64;
    const dokH = () => { const d = document.getElementById('dok'); return d && getComputedStyle(d).display !== 'none' ? innerHeight - d.getBoundingClientRect().top : 0; };
    const czyGra = p => !p.hidden && (p.classList.contains('gra-aktywna') || !!p.querySelector('canvas.gram'));
    function sprawdz() { const a = (innerWidth < 821 || DOTYK) ? null : $$('.gra-pole').find(czyGra) || null; /* telefon/tablet: gry grają w osobnym oknie, strona nigdy nie jest „trzymana” */ if (a === akt) return; if (akt) akt.classList.remove('trzyma'); akt = a; if (a) { a.classList.add('trzyma'); zaczep(a); } }
    function zaczep(p) { const r = p.getBoundingClientRect(), top = pasekH() + 8, dol = innerHeight - dokH() - 8; let dy = 0;
      if (r.height <= dol - top) { if (r.top < top) dy = r.top - top; else if (r.bottom > dol) dy = r.bottom - dol; } else dy = r.top - top;
      if (Math.abs(dy) > 3) scrollBy({ top: dy, behavior: RM ? 'instant' : 'smooth' });
      if (!podp) { podp = true; const h = document.createElement('div'); h.className = 'gs-trzyma'; h.setAttribute('role', 'status');
        h.textContent = DOTYK ? 'Gra trzyma ekran · przesuń mocniej, aby przewinąć stronę' : 'Gra trzyma ekran · przewiń mocniej, aby wyjść'; p.appendChild(h); setTimeout(() => h.remove(), 3200); } }
    function przewin(d) { scrollBy({ top: d, behavior: 'instant' }); }
    function rozped() { cancelAnimationFrame(pedRaf); let t0 = performance.now(); const krok = now => { const dt = now - t0; t0 = now; if (Math.abs(ped) < .03) return; przewin(ped * dt); ped *= Math.pow(.94, dt / 16); pedRaf = requestAnimationFrame(krok); }; pedRaf = requestAnimationFrame(krok); }
    API.dopasuj = () => { if (akt) zaczep(akt); }; // np. nowy poziom memory ma większą planszę
    sek.addEventListener('touchstart', e => { cancelAnimationFrame(pedRaf); const p = e.target.closest('.gra-pole.trzyma'); if (!p || e.touches.length !== 1) { dot = null; return; }
      const t = e.touches[0]; dot = { x: t.clientX, y: t.clientY, ly: t.clientY, lt: performance.now(), v: 0, max: 0, jedzie: false, prog: performance.now() - ostZwolnij < 1600 ? 24 : PROG }; }, { passive: true });
    sek.addEventListener('touchmove', e => { if (!dot || e.touches.length !== 1) return; const t = e.touches[0], now = performance.now(), dy = t.clientY - dot.y, dx = t.clientX - dot.x;
      if (!dot.jedzie) { if (API.zajete) return; dot.max = Math.max(dot.max, Math.abs(dy)); if (Math.abs(dy) > dot.prog && Math.abs(dy) > Math.abs(dx) * 1.2) { dot.jedzie = true; dot.ly = t.clientY - Math.sign(dy) * 24; } else return; }
      const d = dot.ly - t.clientY, dt = Math.max(1, now - dot.lt); przewin(d); dot.v = .7 * (d / dt) + .3 * dot.v; dot.ly = t.clientY; dot.lt = now; }, { passive: true });
    sek.addEventListener('touchend', () => { if (dot) { if (dot.jedzie) { ped = dot.v; rozped(); } else if (Math.abs(dot.ly - dot.y) > 0) { /* krótki ruch zignorowany */ } }
      if (dot && !dot.jedzie && !API.zajete && dot.max > 30) { ostZwolnij = performance.now(); } dot = null; API.zajete = false; }, { passive: true });
    sek.addEventListener('touchcancel', () => { dot = null; API.zajete = false; }, { passive: true });
    sek.addEventListener('wheel', e => { const p = e.target.closest('.gra-pole.trzyma'); if (!p) return; const now = performance.now(); if (now - kolo.t > 700) kolo.suma = 0; kolo.t = now;
      kolo.suma += Math.abs(e.deltaY * (e.deltaMode === 1 ? 16 : 1)); if (kolo.suma < 160) e.preventDefault(); }, { passive: false });
    new MutationObserver(sprawdz).observe(sek, { subtree: true, attributes: true, attributeFilter: ['class', 'hidden'] });
    return { sprawdz };
  })();

  function start() { S = window.Swiat; rekordy(); zg.init(); mem.init(); window.GBgry = { zg: zg.test, mem: mem.test, pokaz, ekran: () => ({ aktywne: ekran && window.GBekran.aktywne ? window.GBekran.aktywne.id : null }) }; }
  function gotowy() { let ok = false; const go = () => { if (ok) return; ok = true; io.disconnect(); removeEventListener('scroll', blisko); start(); };
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) go(); }, { rootMargin: '700px 0px' }); io.observe(sek);
    const blisko = () => { const r = sek.getBoundingClientRect(); if (r.top < innerHeight + 900 && r.bottom > -900) go(); }; addEventListener('scroll', blisko, { passive: true }); setTimeout(blisko, 1500); }
  if (window.Swiat && window.Swiat.bedPattern) gotowy(); else addEventListener('swiat', gotowy, { once: true });
})();
// v9.2/v9.6: całą nakładkę startową można dotknąć, żeby zacząć (nie na ekranie wyniku – tam są osobne przyciski)
['zg', 'mem'].forEach(k => { const box = document.getElementById(k + 'Start'), b = document.getElementById(k + 'Graj'); if (box && b) box.addEventListener('click', e => { if (!e.target.closest('a,button') && !box.querySelector('.gs-stempel')) b.click(); }); });
