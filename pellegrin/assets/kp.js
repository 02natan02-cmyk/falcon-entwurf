/* Küchenplaner „Ziehen & Planen" – Entwurf Falcon Eye
   Form wählen, Schränke in die Wand ziehen, Stil antippen, absenden. Live in 3D – mit beweglichen Türen und eigenem Raumfoto. */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = $('[data-kp]'); if (!root) return;
  const RMO = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const D_ = root.dataset, LOGO = D_.logo ? Object.assign(new Image(), { src: D_.logo }) : null, MAIL = D_.mail, WA = D_.wa, STUDIO = D_.studio || 'Küchenstudio', GREET = D_.greet || 'Hallo', ACC = D_.acc || '#c0673f', PERSON = D_.person || 'Wir';
  const VER = (((document.currentScript && document.currentScript.src) || '').split('v=')[1] || '6').replace(/[^\w.-]/g, '');

  /* ---------------- Bausteine ---------------- */
  // h: b = Unterschrank, t = Hochschrank, u = Hängeschrank · hs: wählbare Höhen (cm) · hinge: Türanschlag wählbar · corner: sitzt in der Ecke
  const HT = [145, 195, 216, 230], HU = [36, 54, 72, 90, 108], W30 = [30, 40, 45, 50, 60], WALL = [30, 40, 45, 50, 60, 80, 90, 100, 120];
  // Aufsatzschrank auf Hochschränken (Höhe in cm) – nur was unter die Decke passt (Raumhöhe 260)
  const AX = [36, 54, 72], AXMAX = 258;
  const M = {
    us: { n: 'Unterschrank', s: 'Schubladen', v: '3 Schubladen', w: 60, ws: WALL, h: 'b' },
    ut: { n: 'Unterschrank', s: 'mit Tür', v: 'Schublade + Tür', w: 60, ws: W30, h: 'b', hinge: 1 },
    u1: { n: 'Unterschrank', s: 'Tür', v: 'Tür', w: 50, ws: W30, h: 'b', hinge: 1 },
    u2: { n: 'Unterschrank', s: '2 Türen', v: '2 Türen', w: 80, ws: [60, 70, 80, 90, 100, 120], h: 'b' },
    s2: { n: 'Unterschrank', s: '2 große Auszüge', v: '2 große Auszüge', w: 60, ws: WALL, h: 'b' },
    s4: { n: 'Unterschrank', s: '4 Schubladen', v: '4 Schubladen', w: 60, ws: WALL, h: 'b' },
    ui: { n: 'Unterschrank', s: 'Auszüge mit Innenschubladen', v: 'Innenschubladen', w: 80, ws: [30, 40, 45, 50, 60, 80, 90, 100, 120], h: 'b' },
    ur: { n: 'Offenes Regal', s: 'unten, ohne Front', w: 30, ws: [15, 20, 30, 40, 45, 50, 60], h: 'b' },
    fa: { n: 'Flaschenauszug', s: 'schmal, für Öl & Flaschen', w: 20, ws: [15, 20, 30], h: 'b' },
    ap: { n: 'Apothekerschrank klein', s: 'Unterschrank-Auszug', w: 30, ws: [15, 20, 30, 40], h: 'b' },
    mt: { n: 'Mülltrenner', s: 'Auszug mit Eimern', w: 60, ws: [30, 40, 45, 50, 60, 80, 90], h: 'b' },
    sp: { n: 'Spüle', s: 'mit Armatur', w: 80, ws: [40, 45, 50, 60, 80, 90, 100, 120], h: 'b' },
    kf: { n: 'Kochfeld', s: 'Auszüge darunter', w: 80, ws: [60, 80, 90, 100, 120], h: 'b' },
    ko: { n: 'Herd', s: 'Kochfeld + Backofen', w: 60, ws: [60, 90], h: 'b' },
    gs: { n: 'Spülmaschine', s: 'vollintegriert', w: 60, ws: [45, 60], h: 'b' },
    ek: { n: 'Eckschrank', s: 'mit Karussell', w: 90, ws: [90], h: 'b', corner: 1 },
    el: { n: 'Eckschrank', s: 'Le-Mans-Auszug', w: 110, ws: [100, 110, 120], h: 'b', corner: 1, hinge: 1 },
    eb: { n: 'Eckschrank', s: 'Blindecke', w: 100, ws: [90, 100, 110, 120], h: 'b', corner: 1, hinge: 1 },
    bo: { n: 'Backofen', s: 'auf Augenhöhe', w: 60, ws: [60], h: 't', hs: HT },
    bm: { n: 'Geräte-Hochschrank', s: 'Backofen + Mikrowelle', w: 60, ws: [60], h: 't', hs: [195, 216, 230] },
    kue: { n: 'Kühlschrank', s: 'Kühl-Gefrier-Kombi', w: 60, ws: [60], h: 't', hs: [195, 216, 230], hinge: 1, a: 'r' },
    vo: { n: 'Hochschrank', s: 'Vorrat', w: 60, ws: W30, h: 't', hs: HT, hinge: 1 },
    ah: { n: 'Apothekerschrank groß', s: 'Hochschrank-Auszug', w: 30, ws: [15, 20, 30, 40, 45], h: 't', hs: HT },
    bs: { n: 'Besenschrank', s: 'für Staubsauger & Co.', w: 50, ws: W30, h: 't', hs: [195, 216, 230], hinge: 1 },
    vg: { n: 'Vitrinenschrank', s: 'hoch, oben mit Glastür', v: 'Glastür oben', w: 60, ws: [40, 45, 50, 60], h: 't', hs: HT, hinge: 1 },
    h1: { n: 'Hängeschrank', s: 'Tür', v: 'Tür', w: 60, ws: W30, h: 'u', hs: HU, hinge: 1 },
    h2: { n: 'Hängeschrank', s: '2 Türen', v: '2 Türen', w: 80, ws: [60, 80, 90, 100, 120], h: 'u', hs: HU },
    hk: { n: 'Hängeschrank', s: 'Klappe kippt nach oben', v: 'Klappe kippt nach oben', w: 60, ws: [40, 45, 50, 60, 80, 90, 100, 120], h: 'u', hs: [36, 54, 72, 90] },
    hs: { n: 'Hängeschrank', s: 'Klappe schwenkt ganz hoch', v: 'Klappe schwenkt ganz hoch', w: 60, ws: [40, 45, 50, 60, 80, 90, 100, 120], h: 'u', hs: [36, 54, 72] },
    hf: { n: 'Hängeschrank', s: 'Klappe knickt in der Mitte', v: 'Faltklappe – knickt in der Mitte', w: 80, ws: [60, 80, 90, 100, 120], h: 'u', hs: [72, 90] },
    hg: { n: 'Glasvitrine', s: 'Hängeschrank mit Glastür', v: 'Glastür', w: 50, ws: [40, 45, 50, 60, 80, 90, 100, 120], h: 'u', hs: HU, hinge: 1 },
    ho: { n: 'Wandregal', s: 'offen', v: 'offen', w: 60, ws: WALL, h: 'u', hs: HU },
    he: { n: 'Eck-Hängeschrank', s: 'mit Drehboden', w: 65, ws: [55, 60, 65, 70, 80], h: 'u', hs: HU, hinge: 1, a: 'r' },
    dh: { n: 'Dunstabzug', s: 'Wandhaube', w: 90, ws: [60, 90, 120], h: 'u' },
  };
  const CATS = [['unten', 'Unten'], ['geraete', 'Spüle & Herd'], ['ecke', 'Ecke'], ['oben', 'Oben'], ['hoch', 'Hoch']];
  const CATH = { unten: 'Unterschränke unter der Arbeitsplatte. Antippen oder in die Wand ziehen – Breite und Türanschlag danach in der Wand antippen.', geraete: 'Spüle, Kochfeld, Herd und Spülmaschine – mit passenden Schränken darunter.', ecke: 'Eckschränke setzen sich automatisch in die Ecke einer L- oder U-Küche und nutzen den Platz hinter der Ecke.', oben: 'Hängeschränke hängen über der Arbeitsplatte. Antippen oder genau an die Stelle ziehen – Höhe 36 bis 90 cm, mit Tür, Klappe, Glas oder als Eckschrank.', hoch: 'Hochschränke vom Boden bis oben. Nach dem Einsetzen antippen: Höhe 145 bis 230 cm, Türanschlag und ein Aufsatzschrank obendrauf – bis unter die Decke.' };
  const PAL = [
    ['unten', 'us', 0, '3 Schubladen', 'Unterschrank'], ['unten', 's2', 0, '2 Auszüge', 'Unterschrank'], ['unten', 's4', 0, '4 Schubladen', 'Unterschrank'], ['unten', 'ut', 0, 'Schublade + Tür', 'Unterschrank'],
    ['unten', 'u1', { a: 'l' }, 'Tür links', 'öffnet nach links'], ['unten', 'u1', { a: 'r' }, 'Tür rechts', 'öffnet nach rechts'], ['unten', 'u2', 0, '2 Türen', 'Unterschrank'], ['unten', 'ui', 0, 'Innen\u00adschubladen', 'Auszüge mit Innenschub'],
    ['unten', 'mt', 0, 'Mülltrenner', 'Auszug mit Eimern'], ['unten', 'ap', 0, 'Apotheker klein', 'schmaler Auszug'], ['unten', 'fa', 0, 'Flaschen\u00adauszug', '15–30 cm schmal'], ['unten', 'ur', 0, 'Offenes Regal', 'ohne Front'],
    ['geraete', 'sp'], ['geraete', 'kf'], ['geraete', 'ko'], ['geraete', 'gs'],
    ['ecke', 'ek', 0, 'Karussell', 'Eckschrank 90 × 90'], ['ecke', 'el', 0, 'Le-Mans', 'Eckschrank-Auszug'], ['ecke', 'eb', 0, 'Blindecke', 'Eckschrank mit Boden'],
    ['oben', 'h1', { a: 'l' }, 'Tür links', 'öffnet nach links'], ['oben', 'h1', { a: 'r' }, 'Tür rechts', 'öffnet nach rechts'], ['oben', 'hk', 0, 'Klappe – kippt nach oben', 'oben angeschlagen'], ['oben', 'hs', 0, 'Klappe – schwenkt ganz hoch', 'hebt sich über den Schrank'], ['oben', 'hf', 0, 'Klappe – knickt in der Mitte', 'Faltklappe, 72 oder 90 cm hoch'], ['oben', 'h2', 0, '2 Türen', 'Hängeschrank'], ['oben', 'he', 0, 'Eck-Hänge\u00adschrank', 'mit Drehboden'], ['oben', 'hg', 0, 'Glasvitrine', 'mit Glastür'], ['oben', 'ho', 0, 'Wandregal', 'offen'], ['oben', 'dh', 0, 'Dunstabzug', 'Wandhaube'],
    ['hoch', 'kue'], ['hoch', 'bo'], ['hoch', 'bm', 0, 'Backofen + Mikro', 'Geräte-Hochschrank'], ['hoch', 'vo'], ['hoch', 'vg', 0, 'Vitrine hoch', 'oben Glastür'], ['hoch', 'ah', 0, 'Apotheker groß', 'Hochschrank-Auszug'], ['hoch', 'bs', 0, 'Besen\u00adschrank'],
  ].map(([c, t, o, n, s], i) => ({ k: 'p' + i, c, t, o: o || null, n: n || M[t].n, s: s || M[t].s }));
  const PLAIN = ['us', 's2', 's4', 'ut', 'u1', 'u2', 'ui'];
  const PLK = [['us', '3 Schubl.'], ['s2', '2 Auszüge'], ['s4', '4 Schubl.'], ['ut', 'Schubl. + Tür'], ['u1', 'Tür'], ['u2', '2 Türen'], ['ui', 'Innenschubl.']];
  const UPK = [['h1', 'Tür'], ['h2', '2 Türen'], ['hk', 'Klappe kippt'], ['hs', 'Klappe ganz hoch'], ['hf', 'Klappe knickt'], ['hg', 'Glas'], ['ho', 'Offen'], ['he', 'Ecke']];
  const TLK = [['vo', 'Vorrat'], ['vg', 'Vitrine'], ['ah', 'Apotheker'], ['bs', 'Besen']];
  const FORMS = {
    zeile: { n: 'Küchenzeile', walls: ['N'], d: 'Alles an einer Wand', p: 'M6 6h52v10H6z' },
    l: { n: 'L-Küche', walls: ['W', 'N'], d: 'Über Eck', p: 'M6 6h52v10H16v28H6z' },
    u: { n: 'U-Küche', walls: ['W', 'N', 'E'], d: 'Drei Seiten', p: 'M6 6h52v28H48V16H16v18H6z' },
    zwei: { n: 'Zweizeilig', walls: ['N', 'S'], d: 'Zwei gegenüber', p: 'M6 6h52v10H6zM6 30h52v10H6z' },
    insel: { n: 'Mit Insel', walls: ['N'], island: 1, d: 'Zeile + Kochinsel', p: 'M6 6h52v10H6zM18 26h28v10H18z' },
  };
  const WN = { N: 'Rückwand', W: 'Linke Wand', E: 'Rechte Wand', S: 'Gegenüber' };
  const FRONTS = [['Weiß', '#f1eee8'], ['Creme', '#ece3cf'], ['Kaschmir', '#d9cfbf'], ['Sandgrau', '#cfc8bc'], ['Salbei', '#7f8e77'], ['Nachtblau', '#22304a'], ['Graphit', '#45474b'], ['Schwarz', '#232426'], ['Eiche', 'wood:eiche'], ['Nussbaum', 'wood:nuss']];
  const HANDLES = [['grifflos', 'Grifflos'], ['bar', 'Edelstahl'], ['schwarz', 'Schwarz'], ['gold', 'Messing'], ['knopf', 'Knopf']];
  const TOPS = [['eiche', 'Eiche', '#b98a5c'], ['keramik', 'Stein hell', '#e7e4de'], ['beton', 'Beton', '#9b9893'], ['marmor', 'Marmor dunkel', '#1d1d1f']];
  const WOOD = { eiche: '#c39a6b', nuss: '#76553b' };
  const FINISHES = [['matt', 'Matt'], ['seide', 'Seidenmatt'], ['glanz', 'Hochglanz']];
  const FSTY = [['0', 'Glatt'], ['1', 'Rahmen (Landhaus)']];
  // Ausgangsstile (Schritt 1) – setzen alle Stilwerte auf einmal
  const LOOKS = [
    ['modern', 'Grifflos modern', 'Sandgrau matt, Eiche, ohne Griffe', { front: '#cfc8bc', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', frame: 0, back: 'platte', wall: '#f3efe9', floor: 'hell' }],
    ['landhaus', 'Modernes Landhaus', 'Rahmenfronten Salbei, Messinggriffe, Holzplatte', { front: '#7f8e77', wood: null, handle: 'gold', top: 'eiche', finish: 'matt', frame: 1, back: 'fliese', wall: '#e6dccb', floor: 'eiche' }],
    ['dunkel', 'Elegant dunkel', 'Schwarz matt, dunkle Steinplatte, Eiche-Akzente', { front: '#232426', wood: null, handle: 'grifflos', top: 'marmor', finish: 'matt', frame: 0, back: 'platte', wall: '#e6dccb', floor: 'eiche' }],
    ['skandi', 'Skandinavisch hell', 'Weiß seidenmatt, helles Holz, schwarze Griffe', { front: '#f1eee8', wood: null, handle: 'schwarz', top: 'eiche', finish: 'seide', frame: 0, back: 'wand', wall: '#f3efe9', floor: 'eiche' }],
  ];
  const BACKS = [['wand', 'Wandfarbe'], ['platte', 'Wie Arbeitsplatte'], ['fliese', 'Metro-Fliesen'], ['glas', 'Glas in Frontfarbe']];
  const WALLC = [['Kalkweiß', '#f3efe9'], ['Sand', '#e6dccb'], ['Salbeigrau', '#d3d7cb'], ['Taubenblau', '#cdd5de'], ['Terrakotta', '#e2c2ab'], ['Anthrazit', '#5a5c5f']];
  const FLOORS = [['eiche', 'Eiche hell', '#c9a77f'], ['dunkel', 'Holz dunkel', '#5c4330'], ['hell', 'Fliese hell', '#e8e4dd'], ['grau', 'Fliese grau', '#a7a49f']];
  const OPN = { fenster: 'Fenster', balkon: 'Balkontür', tuer: 'Tür' };
  const OPW = { fenster: [50, 60, 80, 100, 120, 140, 160, 180, 200, 240], balkon: [80, 100, 120, 160, 200, 240], tuer: [80, 90, 100, 110, 125] };
  const HCOL = { bar: '#b9bcbf', schwarz: '#141414', gold: '#b08a4a', knopf: '#a4a8ac' };
  // Ausstattung (antippen in 3D/Wandansicht oder Schritt 3) – Standard jeweils zuerst
  const SINKS = [['edel', 'Edelstahl', '#c9cccf'], ['gschwarz', 'Granit Schwarz', '#1f1f21'], ['ganth', 'Granit Anthrazit', '#56585b'], ['gweiss', 'Granit Creme', '#e6e0d3'], ['kweiss', 'Keramik Weiß', '#f7f6f2']];
  const TAPS = [['chrom', 'Chrom', '#d9dde0'], ['edel', 'Edelstahl gebürstet', '#b4b7b9'], ['schwarz', 'Schwarz matt', '#1b1b1c'], ['gold', 'Messing gebürstet', '#b8925a']];
  const HOBW = [60, 70, 80, 90];
  const HOBV = [['normal', 'Normal'], ['dd', 'Mit Muldenlüfter']];
  const HOODS = [['schraeg', 'Schräghaube', 'kopffrei, schräg'], ['esse', 'Pyramiden-Esse', 'klassisch an der Wand'], ['flach', 'Flachschirm', 'im Hängeschrank versteckt'], ['decke', 'Deckenlüfter', 'flach in der Decke']];
  const IHOODS = [['mulde', 'Muldenlüfter', 'im Kochfeld'], ['insel', 'Inselhaube', 'hängt über der Insel'], ['decke', 'Deckenlüfter', 'flach in der Decke']];
  const BACKS2 = [['wand', 'Keine', 'Wandfarbe'], ['glas', 'Glas', 'glänzend, Farbe frei'], ['dibond', 'Dibond', 'matt, Farbe frei'], ['holz', 'Holz', 'Eiche oder Nuss'], ['fliese', 'Fliese', 'Metro-Fliesen'], ['platte', 'Stein', 'wie die Arbeitsplatte'], ['motiv', 'Eigenes Motiv', 'Ihr Foto auf Glas']];
  const BACKC = [['Frontfarbe', ''], ['Weiß', '#f4f2ee'], ['Sand', '#d8cbb6'], ['Salbei', '#8d9b84'], ['Petrol', '#2f5d62'], ['Nachtblau', '#25324a'], ['Terrakotta', '#b8694a'], ['Anthrazit', '#3b3d40'], ['Schwarz', '#151516']];
  const BACKW = [['eiche', 'Eiche', '#c39a6b'], ['nuss', 'Nussbaum', '#76553b']];
  const eqv = (k, d) => (P && P.style && P.style[k]) || d;
  const nm = (L, k) => (L.find(x => x[0] === k) || L[0])[1];
  const sinkCol = () => (SINKS.find(x => x[0] === eqv('sink', 'edel')) || SINKS[0])[2];
  const tapCol = () => (TAPS.find(x => x[0] === eqv('tap', 'chrom')) || TAPS[0])[2];
  const isDD = () => eqv('hobV', 'normal') === 'dd';
  const backCol = () => P.style.backC || (P.style.wood ? '#2a2420' : P.style.front);
  // eigenes Motiv: bleibt nur im Browser (Speicher + localStorage), wird nie hochgeladen
  let motif = null, motSend = true; // Canvas (max. 1600 px) · motSend: geht mit der Anfrage mit (Schritt 4 abwählbar)
  const motifToSend = () => (P && P.style && P.style.back === 'motiv' && motif && motif._url && motSend) ? motif : null;
  try { const d = localStorage.getItem('kp-motiv'); if (d) { const im = new Image(); im.onload = () => { const c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; c.getContext('2d').drawImage(im, 0, 0); c._url = d; motif = c; if (P && P.style.back === 'motiv') { renderWalls(); schedule3D(); syncUI(); } }; im.src = d; } } catch (e) { }

  /* ---------------- Zustand ---------------- */
  // Modul: {id, t, w, h?, a?} · Hängeschrank (frei platziert): {id, t, s (cm ab Wandanfang), w, h?, a?}
  let P = null, uid = 1;
  const HDEF = t => M[t].h === 't' ? 216 : M[t].h === 'u' ? 72 : 0;
  const mk = (t, w, o) => { const m = { id: uid++, t, w: w || M[t].w }; if (o && o.h && M[t].hs && M[t].hs.includes(+o.h)) m.h = +o.h; if (o && (o.a === 'l' || o.a === 'r') && M[t].hinge) m.a = o.a; if (o && o.ax && M[t].h === 't' && AX.includes(+o.ax)) m.ax = +o.ax; return m; };
  const hOf = m => (M[m.t].hs && m.h) || HDEF(m.t);
  const axOf = m => (M[m.t].h === 't' && m.ax && hOf(m) + m.ax <= AXMAX) ? m.ax : 0;   // Aufsatzschrank (cm), 0 = keiner
  const axFront = (m, ax) => ax <= 40 ? [{ k: 'flap', p: 1 }] : spec({ t: m.w > 60 ? 'h2' : 'h1', w: m.w, a: m.a || 'r', h: ax }).fr;
  const isUp = t => M[t].h === 'u';
  function fresh(form, keep) {
    const f = FORMS[form], old = keep || {};
    const room = old.room || { w: 480, d: form === 'insel' ? 420 : form === 'zwei' ? 300 : 380 };
    if (form === 'insel' && room.d < 380) room.d = 420;
    const p = { ah: (old && old.ah) || (P && P.ah) || 90, form, room, rows: {}, up: {}, top: {}, op: [], island: { w: 180, v: 'kochfeld' }, style: old.style || { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', wall: '#f3efe9', floor: 'eiche' } };
    f.walls.forEach(w => { p.rows[w] = []; p.top[w] = w === 'N' || form === 'zwei' ? 1 : 0; });
    const seq = {
      zeile: { N: [['kue'], ['bo'], ['us'], ['kf'], ['us', 80], ['sp'], ['gs']] },
      l: { W: [['kue'], ['bo'], ['us']], N: [['el', 110], ['kf'], ['us'], ['sp'], ['gs']] },
      u: { W: [['kue'], ['bo'], ['us']], N: [['ek', 90], ['sp'], ['gs'], ['us', 60], ['eb', 100]], E: [['us'], ['kf'], ['us']] },
      zwei: { N: [['kue'], ['bo'], ['us'], ['sp'], ['gs']], S: [['us'], ['kf'], ['us', 80]] },
      insel: { N: [['kue'], ['bo'], ['vo'], ['us'], ['sp'], ['gs']] },
    }[form];
    P = p;
    for (const w in seq) seq[w].forEach(([t, wd]) => P.rows[w].push(mk(t, wd)));
    if (P.rows.N) { fillRest('N'); normCorners(); }
    for (const w in seq) if (w !== 'N') fillRest(w);
    const sp = locate('N', P.rows.N.findIndex(m => m.t === 'sp'));
    const L = wallLen('N'), win = { id: uid++, t: 'fenster', wall: 'N', w: 120, s: 0 }; win.s = clampOp(win, sp ? sp.x0 + sp.w / 2 - 60 : L / 2 - 60);
    P.op = [win, defaultDoor()];
    return P;
  }
  const wallLen = w => (w === 'N' || w === 'S') ? P.room.w : P.room.d;
  const hasCornerSlot = side => !!P.rows.N && FORMS[P.form].walls.includes(side === 'l' ? 'W' : 'E');
  function range(w) {
    const L = wallLen(w), N = P.rows.N || [], hasN = !!P.rows.N;
    if (w === 'W') return [0, L - (hasN ? 60 + (N[0] && N[0].t === 'ek' ? 30 : 0) : 0)];
    if (w === 'E') return [hasN ? 60 + (N.length && N[N.length - 1].t === 'ek' && hasCornerSlot('r') ? 30 : 0) : 0, L];
    return [0, L];
  }
  const used = w => P.rows[w].reduce((a, m) => a + m.w, 0);
  const free = w => { const [a, b] = range(w); return b - a - used(w); };
  function fillRest(w) { let f = free(w); const R = [120, 100, 90, 80, 60, 50, 45, 40, 30]; while (f >= 30) { const x = R.find(v => v <= f); P.rows[w].push(mk('us', x)); f -= x; } }
  // Ecken: Die Zeile liegt immer an der Ecke an – freier Platz wandert ans offene Ende (bzw. vor den Eckschrank, wenn beide Enden Ecken sind)
  const cornerAt = (w, end) => end ? (w === 'N' && !!P.rows.E && hasCornerSlot('r')) || (w === 'W' && !!P.rows.N) : (w === 'N' && !!P.rows.W && hasCornerSlot('l')) || (w === 'E' && !!P.rows.N);
  function layout(w, skipId) {
    const rows = P.rows[w] || [], [a, b] = range(w), list = rows.filter(m => m.id !== skipId), n = list.length, fr = b - a - list.reduce((t, m) => t + m.w, 0);
    let gi = n; if (fr > .5) { const cs = cornerAt(w, 0), ce = cornerAt(w, 1); if (ce && !cs) gi = 0; else if (ce && cs && n) gi = n - 1; }
    const X = new Map(); let x = a, gx = null; list.forEach((m, i) => { if (i === gi && fr > .5) { gx = x; x += fr; } X.set(m, x); x += m.w; }); if (gx == null && fr > .5) gx = x;
    return { X, gi, n, fr, gx, inner: fr > .5 && ((gi > 0 && gi < n) || (gi === n && cornerAt(w, 1)) || (gi === 0 && cornerAt(w, 0))) };
  }
  // Passstücke & Wangen (automatisch): Restmaß unter 30 cm am Wandende / zwischen den Ecken → Passstück (Höhe wie der Nachbar);
  // freistehendes Zeilenende (≥ 30 cm frei) → Seitenwange, 2 cm vor der Front
  function trims(w) {
    const LY = layout(w), rows = P.rows[w] || [], out = { pf: [], wg: [] }; if (!rows.length || LY.fr <= .5) return out;
    const n = rows.length, at0 = LY.gi === 0, nb = LY.inner ? rows[Math.min(n - 1, LY.gi)] : at0 ? rows[0] : rows[n - 1], tall = M[nb.t].h === 't' && !LY.inner;
    if (LY.fr < 30 || LY.inner) out.pf.push({ x: LY.gx, w: LY.fr, tall, h: tall ? hOf(nb) : 0, where: LY.inner ? 'zwischen den Ecken' : 'am Wandende' });
    else if (M[nb.t].h !== 't') out.wg.push({ x: at0 ? LY.X.get(nb) - 2.5 : LY.X.get(nb) + nb.w, side: at0 ? 'links' : 'rechts' });
    return out;
  }
  const xs = w => { const L = layout(w); return (P.rows[w] || []).map(m => L.X.get(m)); };
  function locate(w, i) { if (!P.rows[w] || i < 0 || i >= P.rows[w].length) return null; return { x0: xs(w)[i], w: P.rows[w][i].w }; }
  const clampOp = (o, s) => { const m = o.t === 'fenster' ? 10 : 5; return Math.round(Math.max(m, Math.min(wallLen(o.wall) - o.w - m, s)) / 5) * 5; };
  const opById = id => P.op.find(o => o.id === id);
  function defaultDoor() { const dw = ['E', 'S', 'W'].find(w => !P.rows[w]) || 'S'; return { id: uid++, t: 'tuer', wall: dw, w: 90, s: Math.max(20, Math.round(wallLen(dw) / 2 - 45)) }; }
  const opOver = (o, x0, w, pad = 2) => x0 + w > o.s + pad && x0 < o.s + o.w - pad;
  const ov = (s1, w1, s2, w2) => s1 + w1 > s2 + .5 && s2 + w2 > s1 + .5;
  // Ecke: auf welcher Seite sitzt das Modul in der Ecke? (nur Rückwand bei L/U)
  function cornerSide(w, i) { if (w !== 'N' || !P.rows.N) return null; const n = P.rows.N.length; if (i === 0 && hasCornerSlot('l')) return 'l'; if (i === n - 1 && hasCornerSlot('r')) return 'r'; return null; }
  const aOf = (m, cs) => m.a || M[m.t].a || (M[m.t].corner ? (cs === 'r' ? 'l' : 'r') : 'l');
  // Eckschränke bleiben in der Ecke
  function normCorners() {
    const N = P.rows.N; if (!N) return [];
    const drop = [];
    for (const w in P.rows) if (w !== 'N') { const c = P.rows[w].filter(m => M[m.t].corner); if (c.length) { P.rows[w] = P.rows[w].filter(m => !M[m.t].corner); N.push(...c); } }
    const cs = P.rows.N.filter(m => M[m.t].corner); if (!cs.length) return drop;
    const rest = P.rows.N.filter(m => !M[m.t].corner), slot = { l: null, r: null }, n = P.rows.N.length;
    cs.forEach(m => { const i = P.rows.N.indexOf(m), pref = (i === n - 1 && n > 1 && hasCornerSlot('r')) || !hasCornerSlot('l') ? 'r' : 'l', alt = pref === 'l' ? 'r' : 'l'; if (!slot[pref] && hasCornerSlot(pref)) slot[pref] = m; else if (!slot[alt] && hasCornerSlot(alt)) slot[alt] = m; else drop.push(m); });
    P.rows.N = [...(slot.l ? [slot.l] : []), ...rest, ...(slot.r ? [slot.r] : [])];
    return drop;
  }
  // Hängeschränke über Eck: Lücke zwischen Seitenwand-Hängeschrank und dem Hängeschrank der Rückwand mit Passblende schließen
  function upCornerFill(w) {
    if ((w !== 'W' && w !== 'E') || !P.rows.N || !P.rows[w]) return null;
    const L = wallLen(w), [a, b] = range(w), side = upList(w).filter(u => u.t !== 'dh'), back = upList('N').filter(u => u.t !== 'dh'), WN0 = P.room.w;
    if (w === 'W') { const u = side.find(q => q.s + q.w >= b - 1 && q.s + q.w < L - 35 - 1), n = back.find(q => q.s <= 1); if (!u || !n) return null; const { y, h, bottom } = upY(u), s0 = u.s + u.w; return { s: s0, w: L - 35 - s0, y, h, bottom, sx: L - 35 }; }
    const u = side.find(q => q.s <= a + 1 && q.s > 36), n = back.find(q => q.s + q.w >= WN0 - 1); if (!u || !n) return null; const { y, h, bottom } = upY(u); return { s: 35, w: u.s - 35, y, h, bottom, sx: 0 };
  }
  // Jede Ecke einer L-/U-Küche bekommt einen Eckschrank – auch nach dem Löschen (dann Blindecke)
  function fillCorners() {
    const N = P.rows.N, add = []; if (!N) return add;
    ['l', 'r'].forEach(sd => { if (!hasCornerSlot(sd)) return; const m0 = sd === 'l' ? N[0] : N[N.length - 1]; if (m0 && M[m0.t].corner && cornerSide('N', sd === 'l' ? 0 : N.length - 1) === sd) return; const m = mk('eb', 90); if (sd === 'l') N.unshift(m); else N.push(m); add.push(m); });
    if (add.length) { makeRoom('N', add[0]); ['W', 'E'].forEach(w => P.rows[w] && makeRoom(w)); }
    return add;
  }
  function clampIdx(w, idx) { if (w !== 'N') return idx; const N = P.rows.N, n = N.length; if (n && M[N[0].t].corner && cornerSide('N', 0) === 'l') idx = Math.max(1, idx); if (n && M[N[n - 1].t].corner && cornerSide('N', n - 1) === 'r') idx = Math.min(n - 1, idx); return idx; }

  /* ---------------- Hängeschränke ---------------- */
  // Automatisch (wie bisher) oder individuell je Wand (P.up[w])
  function overKind(w, m, x0) {
    if (M[m.t].h === 't') return null;
    if (m.t === 'kf' || m.t === 'ko') return 'hood';
    if (!P.top[w]) return null;
    if (P.op.some(o => o.wall === w && opOver(o, x0, m.w))) return null;
    return 'cab';
  }
  function autoUp(w) {
    const out = [], X = xs(w);
    const L = wallLen(w); P.rows[w].forEach((m, i) => { const x = X[i]; const k = x + m.w > L + .5 ? null : overKind(w, m, x); if (k === 'hood' && isDD()) { /* Muldenlüfter: keine Haube */ } else if (k === 'hood') { const hw = eqv('hood') === 'flach' ? m.w : Math.min(90, Math.max(60, m.w)); out.push({ id: 'a' + m.id, t: 'dh', s: x + m.w / 2 - hw / 2, w: hw, auto: 1 }); } else if (k === 'cab') out.push({ id: 'a' + m.id, t: m.w > 60 ? 'h2' : 'h1', s: x, w: m.w, auto: 1 }); });
    return out;
  }
  const upList = w => P.up[w] || (P.rows[w] ? autoUp(w) : []);
  function materialize(w) { if (P.up[w]) return {}; const map = {}; P.up[w] = autoUp(w).map(u => { const n = { id: uid++, t: u.t, s: u.s, w: u.w }; map[u.id] = n.id; return n; }); return map; }
  function upY(u) { const h = hOf(u), top = Math.max(217, 145 + h); return { y: FL - top, h, bottom: top - h }; }
  function upConflict(w, u) {
    if (u.t === 'dh') return null; const { bottom } = upY(u), X = xs(w); let r = null;
    P.rows[w].forEach((m, i) => { if (M[m.t].h === 't' && ov(X[i], m.w, u.s, u.w) && hOf(m) > bottom + 1) r = 'tall'; });
    if (!r && P.op.some(o => o.wall === w && ov(o.s, o.w, u.s, u.w))) r = 'win';
    return r;
  }
  function upEdges(w, u) { const L = wallLen(w), e = [0, L]; const X = xs(w); P.rows[w].forEach((m, i) => { e.push(X[i], X[i] + m.w); }); (P.up[w] || []).forEach(o => { if (o !== u) e.push(o.s, o.s + o.w); }); P.op.filter(o => o.wall === w).forEach(o => e.push(o.s, o.s + o.w)); if (u && u.t === 'dh') hobsOf(w).forEach(h => e.push(Math.round(h.c - u.w / 2))); return e; }
  function resolveUp(w, u, ds, noSnap) {
    const L = wallLen(w), others = (P.up[w] || []).filter(o => o !== u);
    let s = Math.max(0, Math.min(L - u.w, ds));
    if (!noSnap) { let best = null; upEdges(w, u).forEach(e => [e, e - u.w].forEach(c => { const d = Math.abs(c - s); if (c >= 0 && c + u.w <= L && d < 9 && (!best || d < best.d)) best = { c, d }; })); if (best) s = best.c; }
    s = Math.round(s);
    if (others.some(o => ov(o.s, o.w, s, u.w))) {
      const c = []; others.forEach(o => c.push(o.s - u.w, o.s + o.w)); const ok = c.filter(v => v >= 0 && v + u.w <= L && !others.some(o => ov(o.s, o.w, v, u.w))).sort((p, q) => Math.abs(p - s) - Math.abs(q - s));
      if (!ok.length || Math.abs(ok[0] - s) > Math.max(60, u.w)) return null; s = ok[0];
    }
    return s;
  }
  function freeUpSpot(w, t, width) {
    const L = wallLen(w), ups = P.up[w] || [], tmp = { t, w: width, h: HDEF(t) }, cand = new Set(), X = xs(w);
    P.rows[w].forEach((m, i) => { const x = X[i]; if (M[m.t].h !== 't') { cand.add(x); cand.add(x + m.w - width); } }); ups.forEach(u => { cand.add(u.s + u.w); cand.add(u.s - width); }); cand.add(range(w)[0]); cand.add(range(w)[1] - width);
    const ok = [...cand].filter(s => s >= 0 && s + width <= L && !ups.some(u => ov(u.s, u.w, s, width)) && !upConflict(w, { ...tmp, s })).sort((p, q) => p - q);
    // Bevorzugt über normalen Unterschränken, nicht über dem Kochfeld
    const good = ok.filter(s => { let bad = false; P.rows[w].forEach((m, i) => { if (ov(X[i], m.w, s, width) && (m.t === 'kf' || m.t === 'ko')) bad = true; }); return !bad; });
    return (good.length ? good : ok)[0];
  }
  // Haube ↔ Kochfeld: Haube rastet mittig über dem Kochfeld ein (Fangbereich HSNAP cm) und wandert mit, wenn das Kochfeld verschoben wird
  const HSNAP = 30;
  function hobsOf(w) { if (!P.rows[w]) return []; const X = xs(w); return P.rows[w].map((m, i) => (m.t === 'kf' || m.t === 'ko') ? { id: m.id, c: X[i] + m.w / 2 } : null).filter(Boolean); }
  function hoodSnap(w, u, s) {
    if (!u || u.t !== 'dh' || s == null) return s; const L = wallLen(w), others = (P.up[w] || []).filter(o => o !== u && o.id !== u.id);
    let best = null; hobsOf(w).forEach(h => { const c = Math.round(h.c - u.w / 2), d = Math.abs(s - c); if (d <= HSNAP && c >= 0 && c + u.w <= L && !others.some(o => ov(o.s, o.w, c, u.w)) && (!best || d < best.d)) best = { c, d }; });
    return best ? best.c : s;
  }
  function relinkHood(w, u) { if (!u || u.t !== 'dh') return; const h = hobsOf(w).find(q => Math.abs(q.c - (u.s + u.w / 2)) < 1); if (h) u.hob = h.id; else delete u.hob; }
  function linkHoods() { for (const w in P.up) P.up[w].forEach(u => relinkHood(w, u)); }
  // Hängeschrank, der einer mitgewanderten Haube im Weg ist: an die nächste freie Stelle rücken, sonst entfernen
  function clearAround(w, u) {
    const L = wallLen(w); let gone = 0;
    [...(P.up[w] || [])].forEach(o => {
      if (o === u || !ov(o.s, o.w, u.s, u.w)) return;
      const rest = P.up[w].filter(x => x !== o), cand = new Set([0, L - o.w]); rest.forEach(x => { cand.add(x.s - o.w); cand.add(x.s + x.w); }); const X = xs(w); (P.rows[w] || []).forEach((m, i) => { cand.add(X[i]); cand.add(X[i] + m.w - o.w); });
      const ok = [...cand].map(Math.round).filter(s => s >= 0 && s + o.w <= L && !rest.some(x => ov(x.s, x.w, s, o.w)) && (o.t === 'dh' || !upConflict(w, { ...o, s }))).sort((p, q) => Math.abs(p - o.s) - Math.abs(q - o.s));
      if (ok.length) o.s = ok[0]; else { P.up[w] = rest; gone++; }
    });
    if (P.up[w]) P.up[w].sort((a, b) => a.s - b.s);
    return gone;
  }
  function followHoods() {
    let gone = 0;
    for (const w of Object.keys(P.up)) {
      [...P.up[w]].forEach(u => {
        if (u.t !== 'dh' || u.hob == null || !P.up[w].includes(u)) return;
        let ww = null, c = 0; for (const w2 in P.rows) { const i = P.rows[w2].findIndex(m => m.id === u.hob); if (i >= 0) { ww = w2; c = xs(w2)[i] + P.rows[w2][i].w / 2; break; } }
        if (ww == null) { delete u.hob; return; } // Kochfeld entfernt – Haube bleibt, wo sie ist
        if (ww !== w) { // Kochfeld an eine andere Wand gezogen: Haube geht mit (automatische Wand bekommt ihre Haube ohnehin)
          P.up[w] = P.up[w].filter(x => x !== u);
          if (P.up[ww] && !P.up[ww].some(x => x.t === 'dh' && ov(x.s, x.w, c - u.w / 2, u.w))) { u.s = Math.round(Math.max(0, Math.min(wallLen(ww) - u.w, c - u.w / 2))); P.up[ww].push(u); gone += clearAround(ww, u); }
          return;
        }
        const ns = Math.round(Math.max(0, Math.min(wallLen(w) - u.w, c - u.w / 2)));
        if (Math.abs(ns - u.s) < .5) return;
        u.s = ns; gone += clearAround(w, u);
      });
    }
    return gone;
  }

  /* ---------------- Front-Beschreibung (gemeinsam für Zeichnung und 3D) ---------------- */
  function spec(m, cs) {
    const t = m.t, w = m.w, a = aOf(m, cs), H = hOf(m);
    switch (t) {
      case 'us': return { fr: w < 40 ? [{ k: 'drawer', p: 1, in: 'plates' }] : [{ k: 'drawer', p: .24, in: 'cutlery' }, { k: 'drawer', p: .38 }, { k: 'drawer', p: .38, in: 'plates' }] };
      case 'ut': return { fr: [{ k: 'drawer', p: .2, in: 'cutlery' }, { k: 'door', p: .8, a }] };
      case 'u1': return { fr: [{ k: 'door', p: 1, a }] };
      case 'u2': return { fr: [{ k: 'door2', p: 1 }] };
      case 's2': return { fr: [{ k: 'drawer', p: .5, in: 'pots' }, { k: 'drawer', p: .5, in: 'plates' }] };
      case 's4': return { fr: [{ k: 'drawer', p: .19, in: 'cutlery' }, { k: 'drawer', p: .19 }, { k: 'drawer', p: .27 }, { k: 'drawer', p: .35, in: 'pots' }] };
      case 'ui': return { fr: [{ k: 'drawer', p: .5, in: 'id' }, { k: 'drawer', p: .5, in: 'id' }] };
      case 'ur': return { fr: [{ k: 'open', p: 1 }] };
      case 'fa': return { fr: [{ k: 'pull', p: 1, in: 'bottles' }] };
      case 'ap': return { fr: [{ k: 'pull', p: 1, in: 'baskets' }] };
      case 'mt': return { fr: [{ k: 'pull', p: 1, in: 'bins' }] };
      case 'sp': return { fr: [w >= 80 ? { k: 'door2', p: 1, in: 'none' } : { k: 'door', p: 1, a, in: 'none' }], app: 'sp' };
      case 'kf': return { fr: [{ k: 'drawer', p: .3, in: 'cutlery' }, { k: 'drawer', p: .35 }, { k: 'drawer', p: .35, in: 'pots' }], app: 'kf' };
      case 'ko': return { fr: [{ k: 'drawer', p: .18 }, { k: 'oven', p: .82 }], app: 'kf' };
      case 'gs': return { fr: [{ k: 'dw', p: 1 }] };
      case 'ek': { const s = cs || 'l', bl = { cm: 60, blind: 1, fr: [{ k: 'blind', p: 1 }] }, dr = { cm: 30, fr: [{ k: 'door', p: 1, a: s === 'l' ? 'r' : 'l', in: 'none' }] }; return { corner: { kind: 'kar', side: s }, cols: s === 'l' ? [bl, dr] : [dr, bl] }; }
      case 'el': case 'eb': { const s = cs || 'l', bl = { cm: 60, blind: 1, fr: [{ k: 'blind', p: 1 }] }, dr = { fr: [{ k: 'door', p: 1, a, in: t === 'el' ? 'none' : 'shelf' }], lemans: t === 'el' ? (s === 'l' ? -1 : 1) : 0 }; return { cols: s === 'l' ? [bl, dr] : [dr, bl] }; }
      case 'kue': return { fr: H >= 190 ? [{ k: 'door', p: .6, a, hp: 'bottom', in: 'fridge' }, { k: 'door', p: .4, a, hp: 'top', in: 'fridge' }] : [{ k: 'door', p: 1, a, hp: 'mid', in: 'fridge' }] };
      case 'vo': return { fr: H >= 190 ? [{ k: 'door', p: .5, a, hp: 'bottom' }, { k: 'door', p: .5, a, hp: 'top' }] : [{ k: 'door', p: 1, a, hp: 'mid' }] };
      case 'bo': { const r = H - 10 - 130; return { fr: [r >= 15 ? { k: 'door', cm: r, a, hp: 'bottom', hl: .26 } : { k: 'blind', cm: Math.max(0, r) }, { k: 'oven', cm: 60 }, { k: 'drawer', cm: 35 }, { k: 'drawer', cm: 35 }] }; }
      case 'bm': { const r = H - 10 - 175; return { fr: [r >= 15 ? { k: 'door', cm: r, a, hp: 'bottom', hl: .2 } : { k: 'blind', cm: Math.max(0, r) }, { k: 'micro', cm: 45 }, { k: 'oven', cm: 60 }, { k: 'drawer', cm: 35 }, { k: 'drawer', cm: 35 }] }; }
      case 'ah': return { fr: [{ k: 'pull', p: 1, in: 'baskets' }] };
      case 'bs': return { fr: [{ k: 'door', p: 1, a, hp: 'mid', in: 'broom' }] };
      case 'vg': return { fr: H >= 190 ? [{ k: 'glass', p: .56, a, hp: 'bottom', dec: 'mix' }, { k: 'door', p: .44, a, hp: 'top' }] : [{ k: 'glass', p: 1, a, hp: 'mid', dec: 'mix' }] };
      case 'he': { const bl = { cm: 25, blind: 1, fr: [{ k: 'blind', p: 1 }] }, dr = { fr: [{ k: 'door', p: 1, a, in: 'lazy' }] }; return { cols: a === 'r' ? [bl, dr] : [dr, bl] }; }
      case 'h1': return { fr: [{ k: 'door', p: 1, a }] };
      case 'h2': return { fr: [{ k: 'door2', p: 1 }] };
      case 'hk': return { fr: [{ k: 'flap', p: 1 }] };
      case 'hs': return { fr: [{ k: 'lift', p: 1 }] };
      case 'hf': return { fr: [{ k: 'fold', p: 1 }] };
      case 'hg': return { fr: [w > 60 ? { k: 'glass2', p: 1 } : { k: 'glass', p: 1, a }] };
      case 'ho': return { fr: [{ k: 'open', p: 1 }] };
    }
    return { fr: [{ k: 'door', p: 1, a }] };
  }
  const hasHinge = m => m.t === 'hg' ? m.w <= 60 : !!M[m.t].hinge;
  const openable = m => !['dh', 'ur', 'ho'].includes(m.t);
  function variant(m, cs) {
    const c = M[m.t], a = aOf(m, cs), dir = a === 'l' ? 'öffnet nach links' : 'öffnet nach rechts';
    if (m.t === 'u1' || m.t === 'h1') return 'Tür ' + dir;
    if (m.t === 'hg' && m.w <= 60) return 'Glastür ' + dir; if (m.t === 'hg') return '2 Glastüren';
    if (m.t === 'he') return 'Ecke ' + (a === 'r' ? 'links' : 'rechts') + ', Drehboden';
    return c.v || c.s;
  }
  const label = (m, cs) => `${M[m.t].n} · ${variant(m, cs)}`;

  /* ---------------- Ansichtszeichnung (SVG, cm) ---------------- */
  const H = 260, FL = 260; // Raumhöhe, Boden-y
  const fcol = () => P.style.wood ? WOOD[P.style.wood] : P.style.front;
  function lum(hex) { const n = parseInt(hex.slice(1), 16); return ((n >> 16) * .3 + ((n >> 8) & 255) * .59 + (n & 255) * .11) / 255; }
  function shade(hex, a) { const n = parseInt(hex.slice(1), 16); const f = v => Math.max(0, Math.min(255, Math.round(v + a * (a < 0 ? v : 255 - v)))); return '#' + ((1 << 24) + (f(n >> 16) << 16) + (f((n >> 8) & 255) << 8) + f(n & 255)).toString(16).slice(1); }
  const topCol = () => TOPS.find(t => t[0] === P.style.top)[2];
  const xr = F => lum(F) > .5 ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,.4)';
  // eine Front (x, y oben, Breite, Höhe), Griff je nach Stil; v = senkrechter Griff
  function front(x, y, w, h, o = {}) {
    const F = o.fill || fcol(), str = lum(F) > .5 ? 'rgba(0,0,0,.28)' : 'rgba(255,255,255,.16)';
    let s = `<rect x="${x + .4}" y="${y + .4}" width="${Math.max(.2, w - .8)}" height="${Math.max(.2, h - .8)}" rx=".8" fill="${F}" stroke="${str}" stroke-width=".5"${P.style.wood && !o.fill ? ' filter="url(#kpgrain)"' : ''}/>`;
    if (P.style.frame && w > 9 && h > 8) { const f = Math.min(5, w * .15, h * .2); s += `<rect x="${x + f}" y="${y + f}" width="${w - 2 * f}" height="${h - 2 * f}" rx=".6" fill="none" stroke="${str}" stroke-width=".55"/><rect x="${x + f + .7}" y="${y + f + .7}" width="${w - 2 * f - 1.4}" height="${h - 2 * f - 1.4}" rx=".5" fill="none" stroke="${lum(F) > .5 ? 'rgba(255,255,255,.6)' : 'rgba(255,255,255,.12)'}" stroke-width=".4"/>`; }
    if (o.noH) return s;
    const hs = P.style.handle;
    if (hs === 'grifflos') s += `<rect x="${x + .4}" y="${o.gripB ? y + h - 2 : y + .4}" width="${Math.max(.2, w - .8)}" height="1.6" fill="${shade(F, -.35)}" opacity=".85"/>`;
    else if (o.v) { const hl = Math.min(o.hl || 34, h * .42), hy = o.hc != null ? Math.max(y + 6, Math.min(y + h - 6 - hl, o.hc - hl / 2)) : o.vpos === 'top' ? y + 6 : o.vpos === 'mid' ? y + h / 2 - hl / 2 : y + h - 6 - hl; s += hs === 'knopf' ? `<circle cx="${o.side < 0 ? x + 5 : x + w - 5}" cy="${hy + (o.vpos === 'top' && o.hc == null ? 2 : o.vpos === 'mid' || o.hc != null ? hl / 2 : hl - 2)}" r="1.8" fill="${HCOL[hs]}" stroke="rgba(0,0,0,.25)" stroke-width=".3"/>` : `<rect x="${o.side < 0 ? x + 4 : x + w - 6}" y="${hy}" width="2" height="${hl}" rx="1" fill="${HCOL[hs]}"/>`; }
    else { const hy = o.hc != null ? Math.max(y + 3, Math.min(y + h - 5, o.hc - .9)) : o.hb ? y + h - 5.8 : y + 4; s += hs === 'knopf' ? `<circle cx="${x + w / 2}" cy="${hy + .9}" r="1.8" fill="${HCOL[hs]}" stroke="rgba(0,0,0,.25)" stroke-width=".3"/>` : `<rect x="${x + w / 2 - Math.min(16, w * .3)}" y="${hy}" width="${Math.min(32, w * .6)}" height="1.8" rx=".9" fill="${HCOL[hs]}"/>`; }
    return s;
  }
  // Öffnungsdreieck (Spitze zeigt zum Scharnier) – wie in jeder Küchenplanung
  function tri(x, y, w, h, a, F) {
    const st = `fill="none" stroke="${xr(F)}" stroke-width=".55" stroke-dasharray="2.2 1.6" class="kp-tri"`;
    if (a === 'up') return `<path d="M${x + 2.5} ${y + h - 2.5}L${x + w / 2} ${y + 2.5}L${x + w - 2.5} ${y + h - 2.5}" ${st}/>`;
    const hx = a === 'r' ? x + w - 2.5 : x + 2.5, fx = a === 'r' ? x + 2.5 : x + w - 2.5;
    return `<path d="M${fx} ${y + 2.5}L${hx} ${y + h / 2}L${fx} ${y + h - 2.5}" ${st}/>`;
  }
  function xray(kind, x, y, w, h, F) {
    const c = xr(F), d = `fill="none" stroke="${c}" stroke-width=".5" stroke-dasharray="1.8 1.4"`;
    if (kind === 'baskets') { let s = ''; const n = Math.max(2, Math.round(h / 18)); for (let i = 1; i <= n; i++) s += `<line x1="${x + 4}" x2="${x + w - 4}" y1="${y + h * i / (n + 1) + 2}" y2="${y + h * i / (n + 1) + 2}" ${d}/>`; return s; }
    if (kind === 'bottles') { let s = ''; const n = Math.max(1, Math.floor((w - 4) / 7)); for (let i = 0; i < n; i++) { const bx = x + 2 + (i + .5) * (w - 4) / n; s += `<path d="M${bx - 2.2} ${y + h - 6}v-14q0-3 1.6-4v-5h1.2v5q1.6 1 1.6 4v14z" ${d}/>`; } return s; }
    if (kind === 'bins') { let s = ''; const n = w > 50 ? 3 : 2, bw = (w - 8) / n; for (let i = 0; i < n; i++) s += `<rect x="${x + 4 + i * bw + 1}" y="${y + h * .35}" width="${bw - 2}" height="${h * .55}" rx="1.5" ${d}/>`; return s + `<text x="${x + w / 2}" y="${y + h * .28}" font-size="7" text-anchor="middle" fill="${c}" font-family="system-ui">♻</text>`; }
    return '';
  }
  function hatch(x, y, w, h, txt) { return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#kphatch)"/><text x="${x + w / 2}" y="${y + h / 2 + 2}" font-size="6.5" text-anchor="middle" fill="#8a7f72" font-family="system-ui">${txt || 'Ecke'}</text></g>`; }
  function openBox(x, y, w, h, n) {
    let s = `<rect x="${x + .4}" y="${y + .4}" width="${w - .8}" height="${h - .8}" fill="#e6dfd3" stroke="${shade(fcol(), -.25)}" stroke-width="1.2"/>`;
    for (let i = 1; i <= n; i++) { const yy = y + h * i / (n + 1); s += `<rect x="${x + 1}" y="${yy}" width="${w - 2}" height="1.8" fill="${fcol()}"/>`; }
    for (let i = 0; i <= n; i++) { const yy = i === n ? y + h - 1 : y + h * (i + 1) / (n + 1); for (let k = 0; k < Math.floor((w - 6) / 12); k++) s += `<rect x="${x + 5 + k * 12}" y="${yy - 7}" width="6" height="7" rx="1.2" fill="${k % 2 ? '#c9b89a' : '#f6f3ee'}" stroke="rgba(0,0,0,.18)" stroke-width=".3"/>`; }
    return s;
  }
  function f2d(f, x, y, w, h, kind) {
    const F = fcol(), gb = kind === 'u';
    switch (f.k) {
      case 'drawer': case 'pull': { let s = front(x, y, w, h, kind === 't' && h > 70 ? { hc: FL - 105 } : {}); if (f.in === 'id') s += `<rect x="${x + 5}" y="${y + 6}" width="${w - 10}" height="${Math.min(9, h * .3)}" rx="1" fill="none" stroke="${xr(F)}" stroke-width=".5" stroke-dasharray="2 1.5"/>`; if (f.k === 'pull') s += xray(f.in, x, y, w, h, F); return s; }
      case 'door': return front(x, y, w, h, { v: 1, side: f.a === 'r' ? -1 : 1, vpos: kind === 't' ? 'bottom' : f.hp || (kind === 'b' ? 'top' : 'bottom'), hc: kind === 't' && FL - (y + h) < 95 ? FL - 105 : null, hl: kind === 'b' ? 14 : kind === 'u' ? 20 : (f.hl ? f.hl * 100 : 34), gripB: gb }) + tri(x, y, w, h, f.a || 'l', F);
      case 'door2': { const hw = w / 2, o = { v: 1, vpos: kind === 'b' ? 'top' : 'bottom', hl: kind === 'b' ? 14 : 20, gripB: gb }; return front(x, y, hw, h, { ...o, side: 1 }) + front(x + hw, y, hw, h, { ...o, side: -1 }) + tri(x, y, hw, h, 'l', F) + tri(x + hw, y, hw, h, 'r', F); }
      case 'glass': case 'glass2': { const parts = f.k === 'glass2' ? [[x, w / 2, 'l'], [x + w / 2, w / 2, 'r']] : [[x, w, f.a || 'l']]; let s = ''; parts.forEach(([px, pw, a]) => { s += front(px, y, pw, h, { v: 1, side: a === 'r' ? -1 : 1, vpos: 'bottom', hc: kind === 't' && FL - (y + h) < 95 ? FL - 105 : null, hl: 20, gripB: gb }); s += `<rect x="${px + 4}" y="${y + 4}" width="${pw - 8}" height="${h - 8}" fill="rgba(208,226,231,.82)" stroke="rgba(0,0,0,.14)" stroke-width=".4"/>`; for (let i = 1; i < (h > 60 ? 3 : 2); i++) { const yy = y + h * i / (h > 60 ? 3 : 2); s += `<rect x="${px + 4}" y="${yy}" width="${pw - 8}" height="1" fill="rgba(255,255,255,.7)"/><rect x="${px + 7}" y="${yy - 7}" width="5" height="7" rx="1" fill="rgba(120,110,95,.35)"/><rect x="${px + 14}" y="${yy - 5}" width="5" height="5" rx="1" fill="rgba(120,110,95,.3)"/>`; } s += tri(px, y, pw, h, a, '#ffffff'); }); return s; }
      case 'flap': return front(x, y, w, h, { hb: 1, gripB: gb }) + tri(x, y, w, h, 'up', F);
      case 'lift': { const cx = x + w / 2, a = Math.min(h * .55, 24), y0 = y + h / 2 - a / 2, c = xr(F); return front(x, y, w, h, { hb: 1, gripB: gb }) + `<path d="M${cx} ${y0 + a}V${y0 + .8}M${cx - 3.4} ${y0 + 4.2}L${cx} ${y0 + .6}L${cx + 3.4} ${y0 + 4.2}" fill="none" stroke="${c}" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round"/><path d="M${x + 3} ${y + 3}h${w - 6}" stroke="${c}" stroke-width=".5" stroke-dasharray="2 1.6"/>`; }
      case 'fold': { const h2 = h / 2, cx = x + w / 2, ym = y + h2, a = Math.min(h * .22, 9), c = xr(F); return front(x, y, w, h2, { noH: 1 }) + front(x, ym, w, h2, { hb: 1, gripB: gb }) + `<path d="M${x + 1.6} ${ym - 2.6}L${x + 4.2} ${ym}L${x + 1.6} ${ym + 2.6}M${x + w - 1.6} ${ym - 2.6}L${x + w - 4.2} ${ym}L${x + w - 1.6} ${ym + 2.6}" fill="none" stroke="${c}" stroke-width=".7" stroke-linejoin="round"/><path d="M${cx} ${ym - a}V${ym + a}M${cx - 3} ${ym - a + 3.2}L${cx} ${ym - a}L${cx + 3} ${ym - a + 3.2}M${cx - 3} ${ym + a - 3.2}L${cx} ${ym + a}L${cx + 3} ${ym + a - 3.2}" fill="none" stroke="${c}" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round"/>`; }
      case 'dw': return front(x, y, w, h, { noH: P.style.handle === 'grifflos' }) + `<text x="${x + w / 2}" y="${y + h / 2 + 2}" font-size="6" text-anchor="middle" fill="${lum(F) > .5 ? 'rgba(0,0,0,.22)' : 'rgba(255,255,255,.22)'}" font-family="system-ui">GS</text>`;
      case 'oven': case 'micro': return `<rect x="${x + 1}" y="${y + 1}" width="${w - 2}" height="${h - 2}" rx="2" fill="#141516"/><rect x="${x + 5}" y="${y + (f.k === 'oven' ? 9 : 7)}" width="${w - 10}" height="${Math.max(2, h - (f.k === 'oven' ? 15 : 12))}" rx="1.5" fill="#26292c"/><rect x="${x + 7}" y="${y + 3.5}" width="${w - 14}" height="2" rx="1" fill="#b9bcbf"/>`;
      case 'open': return openBox(x, y, w, h, kind === 'u' ? (h > 60 ? 2 : 1) : 1);
      case 'blind': return front(x, y, w, h, { noH: 1 });
    }
    return front(x, y, w, h);
  }
  function stack2d(x, y, w, total, list, kind) {
    const fixed = list.reduce((a, f) => a + (f.cm != null ? f.cm : 0), 0), pSum = list.reduce((a, f) => a + (f.cm == null ? (f.p || 1) : 0), 0) || 1, rest = Math.max(0, total - fixed);
    let s = '', yy = y; list.forEach(f => { const hh = f.cm != null ? f.cm : rest * (f.p || 1) / pSum; if (hh > .3) s += f2d(f, x, yy, w, hh, kind); yy += hh; }); return s;
  }
  const CNAME = { ek: 'Karussell', el: 'Le Mans', eb: 'Blindecke' };
  function elev(m, x) {
    if (M[m.t].h === 'b') { const dh = (P && P.ah || 90) - 90; if (dh) return `<g transform="translate(0 ${-dh})">${elevRaw(m, x)}</g>`; }
    return elevRaw(m, x);
  }
  function elevRaw(m, x) {
    const w = m.w, c = M[m.t], sp = spec(m, m._cs);
    if (c.h === 'b') {
      const dh = (P.ah || 90) - 90; let s = `<rect x="${x}" y="${FL - 10}" width="${w}" height="${10 + dh}" fill="#2b2b2b"/>`;
      const cols = sp.cols || [{ fr: sp.fr }], fixedW = cols.reduce((a, k) => a + (k.cm || 0), 0), flex = cols.filter(k => !k.cm).length || 1;
      let cx = x; cols.forEach(k => { const cw = k.cm || (w - fixedW) / flex; s += k.blind ? hatch(cx, FL - 86, cw, 76, CNAME[m.t] || 'Ecke') : stack2d(cx, FL - 86, cw, 76, k.fr, 'b'); cx += cw; });
      s += `<rect x="${x - .3}" y="${FL - 90}" width="${w + .6}" height="4" fill="${topCol()}" stroke="rgba(0,0,0,.25)" stroke-width=".4"/>`;
      if (sp.app === 'sp') { const cx2 = x + w / 2, sc = sinkCol(), tc = tapCol(); s += `<g data-eq="sp"><rect x="${cx2 - Math.min(22, w / 2 - 3)}" y="${FL - 91.6}" width="${Math.min(44, w - 6)}" height="2" rx=".8" fill="${sc}" stroke="rgba(0,0,0,.3)" stroke-width=".3"/><path d="M${cx2 - 3} ${FL - 90}v-20q0-7 7-7h4q5 0 5 5v4" fill="none" stroke="${tc}" stroke-width="2.4" stroke-linecap="round"/><path d="M${cx2 - 3.6} ${FL - 108}q0-3 2-4.5" fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".6" stroke-linecap="round"/><rect x="${cx2 - 6}" y="${FL - 93.2}" width="6" height="2.2" rx=".6" fill="${tc}"/></g>`; }
      if (sp.app === 'kf') { const hw = m.t === 'kf' ? Math.min(eqv('hobW', 80), w) - 2 : w - 4, hx = x + w / 2 - hw / 2; s += `<rect x="${hx}" y="${FL - 91.2}" width="${hw}" height="1.6" fill="#0d0d0e"/>${isDD() ? `<rect x="${x + w / 2 - 5}" y="${FL - 91.6}" width="10" height="1.2" fill="#6a6e72"/>` : ''}`; }
      return s;
    }
    if (c.h === 't') { const Ht = hOf(m), top = FL - Ht, ax = axOf(m); return `<rect x="${x}" y="${FL - 10}" width="${w}" height="10" fill="#2b2b2b"/>` + stack2d(x, top, w, Ht - 10, sp.fr, 't') + (ax ? stack2d(x, top - ax, w, ax - .6, axFront(m, ax), 'u') : ''); }
    return upElev({ ...m, s: x }, x);
  }
  // Dunstabzug in der Ansicht – je nach gewählter Bauform
  function hoodSvg(x, w, v) {
    const cx = x + w / 2, st = 'stroke="rgba(0,0,0,.22)" stroke-width=".5"';
    if (v === 'esse') return `<path d="M${cx - 10} ${FL - 260}h20v${260 - 178}h-20z" fill="#c7cacd" ${st}/><path d="M${cx - 13} ${FL - 178}h26l${w / 2 - 13} 20h${-w}z" fill="#b8bcbf" ${st}/><rect x="${x}" y="${FL - 158}" width="${w}" height="5" rx="1" fill="#a3a7aa" ${st}/>`;
    if (v === 'flach') { const F = fcol(); return front(x, FL - 217, w, 70, { noH: 1 }) + `<rect x="${x + 1}" y="${FL - 147}" width="${w - 2}" height="4" rx="1" fill="#b3b7ba" ${st}/><rect x="${x + 4}" y="${FL - 145.4}" width="${w - 8}" height=".9" fill="#5b5f63"/><text x="${cx}" y="${FL - 180}" font-size="5.5" text-anchor="middle" fill="${xr(F)}" font-family="system-ui">Haube</text>`; }
    if (v === 'decke') return `<rect x="${x - 5}" y="${FL - 260}" width="${w + 10}" height="5" fill="#e9ebec" ${st}/><rect x="${x + 6}" y="${FL - 255.4}" width="${w - 12}" height="1.2" fill="#6a6e72"/><path d="M${cx - 18} ${FL - 248}q4 6 0 12M${cx} ${FL - 248}q4 6 0 12M${cx + 18} ${FL - 248}q4 6 0 12" fill="none" stroke="#9aa0a5" stroke-width=".7" stroke-dasharray="2 1.6"/>`;
    // Schräghaube (Standard): Kamin + schräg nach vorn geneigte Glasfront, kopffrei
    return `<path d="M${cx - 9} ${FL - 260}h18v${260 - 196}h-18z" fill="#c7cacd" ${st}/><rect x="${x + 2}" y="${FL - 198}" width="${w - 4}" height="10" rx="1" fill="#a9adb0" ${st}/><path d="M${x + 2} ${FL - 188}h${w - 4}l3 36h${-w - 2}z" fill="#1c1d1f" ${st}/><path d="M${x + 6} ${FL - 185}h${w - 12}" stroke="rgba(255,255,255,.28)" stroke-width="1"/>`;
  }
  const hoodHit = (x, w) => { const v = eqv('hood', 'schraeg'); return v === 'flach' ? [x, FL - 217, w, 76] : v === 'decke' ? [x - 5, FL - 260, w + 10, 26] : [x, FL - 260, w, 108]; };
  function upElev(u, x) {
    if (u.t === 'dh') return hoodSvg(x, u.w, eqv('hood', 'schraeg'));
    const { y, h } = upY(u), sp = spec(u); let s = '';
    if (sp.cols) { const fixedW = sp.cols.reduce((a, k) => a + (k.cm || 0), 0), flex = sp.cols.filter(k => !k.cm).length || 1; let cx = x; sp.cols.forEach(k => { const cw = k.cm || (u.w - fixedW) / flex; s += k.blind ? front(cx, y, cw, h, { noH: 1 }) + `<path d="M${cx + 3} ${y + h - 3}L${cx + cw - 3} ${y + 3}" stroke="${xr(fcol())}" stroke-width=".5" stroke-dasharray="2 1.6"/><text x="${cx + cw / 2}" y="${y + h / 2 + 2}" font-size="5.5" text-anchor="middle" fill="${xr(fcol())}" font-family="system-ui">Ecke</text>` : stack2d(cx, y, cw, h, k.fr, 'u'); cx += cw; }); }
    else s = stack2d(x, y, u.w, h, sp.fr, 'u');
    if (u.t !== 'ho') s += `<rect x="${x + 2}" y="${y + h - .5}" width="${u.w - 4}" height="1.2" fill="#fff3d0" opacity=".9"/>`;
    return s;
  }
  function upHit(u, x) { if (u.t === 'dh') return hoodHit(x, u.w); const { y, h } = upY(u); return [x, y, u.w, h]; }
  function drawWall(w, opt = {}) {
    const L = wallLen(w), [a, b] = range(w), rowsW = P.rows[w];
    const flc = (FLOORS.find(f => f[0] === P.style.floor) || FLOORS[0])[2];
    let s = `<rect x="0" y="0" width="${L}" height="${H}" fill="${P.style.wall || '#f3efe9'}"/><rect x="0" y="${FL}" width="${L}" height="6" fill="${flc}"/>`;
    P.op.filter(o => o.wall === w).forEach(o => { s += opElev(o, opt.selOp === o.id); });
    s += backsplash(w);
    // Ecken (Seitenwände an der Rückwand) – beim Karussell mit seiner zweiten Tür
    const N = P.rows.N || [];
    if (a > 0) s += (w === 'E' && N.length && N[N.length - 1].t === 'ek') ? hatch(0, FL - 90, 60, 90, 'Karussell') + `<g transform="translate(0 ${-((P.ah || 90) - 90)})"><rect x="60" y="${FL - 10}" width="30" height="${10 + (P.ah || 90) - 90}" fill="#2b2b2b"/>${stack2d(60, FL - 86, 30, 76, [{ k: 'door', p: 1, a: 'r' }], 'b')}<rect x="59.7" y="${FL - 90}" width="30.6" height="4" fill="${topCol()}"/></g>` : hatch(0, FL - 90, a, 90);
    if (b < L) s += (w === 'W' && N[0] && N[0].t === 'ek') ? `<g transform="translate(0 ${-((P.ah || 90) - 90)})"><rect x="${b}" y="${FL - 10}" width="30" height="${10 + (P.ah || 90) - 90}" fill="#2b2b2b"/>${stack2d(b, FL - 86, 30, 76, [{ k: 'door', p: 1, a: 'l' }], 'b')}<rect x="${b - .3}" y="${FL - 90}" width="30.6" height="4" fill="${topCol()}"/></g>` + hatch(b + 30, FL - 90, L - b - 30, 90, 'Karussell') : hatch(b, FL - 90, L - b, 90);
    const LY = layout(w), sel = opt.sel; let x = a;
    rowsW.forEach((m, i) => {
      m._cs = cornerSide(w, i); x = LY.X.get(m);
      const tall = M[m.t].h === 't', hy = tall ? FL - hOf(m) - axOf(m) : FL - 92, hh = tall ? hOf(m) + axOf(m) : 92;
      s += `<g data-m="${m.id}" class="kp-m${sel === m.id ? ' on' : ''}"${opt.ghost === m.id ? ' opacity=".25"' : ''}>${elev(m, x)}<rect class="kp-hit" x="${x}" y="${hy}" width="${m.w}" height="${hh}" fill="transparent"/></g>`;
      x += m.w;
    });
    const fr = LY.fr, gx = LY.gx;
    const TR = trims(w), dk = k => (P.style[k] === 'top' ? topCol() : P.style[k] === 'front' ? fcol() : k === 'wgDek' ? topCol() : fcol()), dhh = (P.ah || 90) - 90;
    TR.pf.forEach(q => { s += `<g data-pf="${w}" class="kp-trim">${q.tall ? `<rect x="${q.x}" y="${FL - 10}" width="${q.w}" height="10" fill="#2b2b2b"/>${front(q.x, FL - q.h, q.w, q.h - 10, { noH: 1, fill: dk('pfDek') })}` : `<g transform="translate(0 ${-dhh})"><rect x="${q.x}" y="${FL - 10}" width="${q.w}" height="${10 + dhh}" fill="#2b2b2b"/>${front(q.x, FL - 86, q.w, 76, { noH: 1, fill: dk('pfDek') })}<rect x="${q.x - .3}" y="${FL - 90}" width="${q.w + .6}" height="4" fill="${topCol()}"/></g>`}${q.w >= 9 ? `<text x="${q.x + q.w / 2}" y="${FL - 46 - dhh}" font-size="${Math.min(5.5, q.w / 3)}" text-anchor="middle" fill="${xr(dk('pfDek'))}" font-family="system-ui" transform="rotate(-90 ${q.x + q.w / 2} ${FL - 46 - dhh})">Passstück ${Math.round(q.w)}</text>` : ''}<rect class="kp-hit" x="${q.x}" y="${FL - (q.tall ? q.h : 92 + dhh)}" width="${Math.max(q.w, 6)}" height="${q.tall ? q.h : 92 + dhh}" fill="transparent"/></g>`; });
    TR.wg.forEach(q => { s += `<g data-wg="${w}" class="kp-trim"><rect x="${q.x}" y="${FL - 90 - dhh}" width="2.5" height="${90 + dhh}" fill="${dk('wgDek')}" stroke="rgba(0,0,0,.3)" stroke-width=".4"/><rect class="kp-hit" x="${q.x - 3}" y="${FL - 92 - dhh}" width="8.5" height="${92 + dhh}" fill="transparent"/></g>`; });
    if (fr >= 30 && !LY.inner) s += `<g class="kp-free">${LY.inner ? `<g transform="translate(0 ${-((P.ah || 90) - 90)})"><rect x="${gx}" y="${FL - 10}" width="${fr}" height="${10 + (P.ah || 90) - 90}" fill="#2b2b2b"/>${front(gx, FL - 86, fr, 76, { noH: 1 })}<rect x="${gx - .3}" y="${FL - 90}" width="${fr + .6}" height="4" fill="${topCol()}"/></g>` : ''}<rect x="${gx + 1}" y="${FL - 89}" width="${fr - 2}" height="88" rx="2" fill="rgba(255,255,255,${LY.inner ? .25 : .4})" stroke="${ACC}" stroke-dasharray="3 2.4" stroke-width=".8"/>${fr >= 28 ? `<text x="${gx + fr / 2}" y="${FL - 42}" font-size="${Math.min(8, fr / 5)}" text-anchor="middle" fill="${ACC}" font-family="system-ui" font-weight="700">${LY.inner ? 'Blende' : 'frei'} ${Math.round(fr)}</text>` : ''}</g>`;
    if (fr < -0.5) s += `<rect x="${b}" y="${FL - 92}" width="${Math.min(-fr, 400)}" height="92" fill="rgba(208,40,40,.25)" stroke="#d02828" stroke-width=".8"/>`;
    { const cf = upCornerFill(w); if (cf) s += `<g pointer-events="none">${front(cf.s, cf.y, cf.w, cf.h, { noH: 1 })}<rect x="${cf.sx}" y="${cf.y}" width="35" height="${cf.h}" fill="${shade(fcol(), -.1)}" stroke="rgba(0,0,0,.18)" stroke-width=".4"/></g>`; }
    // Hängeschränke und Hauben
    upList(w).forEach(u => {
      const [hx, hy, hw, hh] = upHit(u, u.s), bad = upConflict(w, u);
      s += `<g data-u="${u.id}" class="kp-m kp-u${sel === u.id ? ' on' : ''}${bad ? ' bad' : ''}"${opt.ghost === u.id ? ' opacity=".25"' : ''}>${upElev(u, u.s)}${bad ? `<rect x="${hx}" y="${hy}" width="${hw}" height="${hh}" fill="rgba(208,40,40,.18)" stroke="#d02828" stroke-width=".8"/>` : ''}<rect class="kp-hit" x="${hx}" y="${hy}" width="${hw}" height="${hh}" fill="transparent"/></g>`;
    });
    if (opt.prev && opt.prev.w === w) { const p = opt.prev, u = { t: p.t, s: p.s, w: p.width, h: HDEF(p.t), a: p.a }, [hx, hy, hw, hh] = upHit(u, p.s); s += `<g opacity="${p.ok ? .78 : .45}" pointer-events="none">${upElev(u, p.s)}<rect x="${hx}" y="${hy}" width="${hw}" height="${hh}" fill="none" stroke="${p.ok ? ACC : '#d02828'}" stroke-width="1.4" stroke-dasharray="4 3"/></g>`; }
    // Maßlinie
    s += `<g font-family="system-ui" font-size="7" fill="#6e655b" text-anchor="middle"><line x1="0" y1="${FL + 12}" x2="${L}" y2="${FL + 12}" stroke="#a99d8f" stroke-width=".5"/><text x="${L / 2}" y="${FL + 21}">${WN[w]} · ${L} cm</text></g>`;
    return s;
  }
  function opElev(o, on) {
    const x = o.s, w = o.w, hi = on ? `<rect x="${x - 6}" y="${FL - 226}" width="${w + 12}" height="${o.t === 'fenster' ? 127 : 226}" rx="3" fill="none" stroke="${ACC}" stroke-width="1.6" stroke-dasharray="4 3"/>` : '';
    let g = '';
    if (o.t === 'fenster') g = `<rect x="${x - 3}" y="${FL - 223}" width="${w + 6}" height="121" fill="#fff" stroke="rgba(0,0,0,.15)" stroke-width=".6"/><rect x="${x}" y="${FL - 220}" width="${w}" height="115" fill="url(#kpsky)"/>${w > 90 ? `<line x1="${x + w / 2}" y1="${FL - 220}" x2="${x + w / 2}" y2="${FL - 105}" stroke="#fff" stroke-width="2.4"/>` : ''}<rect x="${x - 5}" y="${FL - 106}" width="${w + 10}" height="3" fill="#e6e1d9"/>`;
    else if (o.t === 'balkon') g = `<rect x="${x - 3}" y="${FL - 223}" width="${w + 6}" height="223" fill="#fff" stroke="rgba(0,0,0,.15)" stroke-width=".6"/><rect x="${x}" y="${FL - 220}" width="${w}" height="217" fill="url(#kpsky)"/>${w > 90 ? `<line x1="${x + w / 2}" y1="${FL - 220}" x2="${x + w / 2}" y2="${FL - 3}" stroke="#fff" stroke-width="2.4"/>` : ''}<rect x="${x + w - 9}" y="${FL - 110}" width="2" height="12" rx="1" fill="#9aa0a5"/>`;
    else g = `<rect x="${x - 4}" y="${FL - 209}" width="${w + 8}" height="209" fill="#fff" stroke="rgba(0,0,0,.18)" stroke-width=".6"/><rect x="${x}" y="${FL - 205}" width="${w}" height="205" fill="#ddd6cb" stroke="rgba(0,0,0,.12)" stroke-width=".5"/><rect x="${x + w - 13}" y="${FL - 106}" width="9" height="2.2" rx="1" fill="#8d9296"/>`;
    return `<g data-op="${o.id}" class="kp-op" style="cursor:ew-resize">${g}${hi}</g>`;
  }
  // Nischenrückwand zwischen Arbeitsplatte und Hängeschrank
  function backsplash(w) {
    if (!P.rows[w]) return '';
    const b = P.style.back || 'wand', dh = (P.ah || 90) - 90, led = !!P.style.backLed, y1 = FL - 90 - dh;
    const fill = b === 'platte' ? topCol() : b === 'fliese' ? 'url(#kptile)' : b === 'holz' ? (BACKW.find(x => x[0] === (P.style.backWood || 'eiche')) || BACKW[0])[2] : b === 'motiv' ? '#d9d4cc' : b === 'dibond' ? backCol() : shade(backCol(), P.style.backC ? 0 : -.12);
    let s = '', rects = '', x0 = null, x1 = 0, tops = '';
    nsSegs(w).forEach(([x, sw, h]) => { rects += `<rect x="${x}" y="${y1 - h}" width="${sw}" height="${h}"/>`; if (h >= 40) tops += `<rect x="${x}" y="${y1 - h}" width="${sw}" height="1.2"/>`; if (x0 == null || x < x0) x0 = x; x1 = Math.max(x1, x + sw); });
    if (x0 == null) return '';
    if (b !== 'wand') {
      if (b === 'motiv' && motif) s += `<clipPath id="kpbs${w}">${rects}</clipPath><image href="${motif._url}" x="${x0}" y="${y1 - 55}" width="${x1 - x0}" height="55" preserveAspectRatio="xMidYMid slice" clip-path="url(#kpbs${w})"/>`;
      else s += `<g fill="${fill}"${b === 'holz' ? ' filter="url(#kpgrain)"' : ''}>${rects}</g>`;
      if (b === 'motiv' && !motif) s += `<text x="${(x0 + x1) / 2}" y="${y1 - 24}" font-size="7" text-anchor="middle" fill="#8a7f72" font-family="system-ui">Ihr Motiv – Foto in Schritt 3 hochladen</text>`;
      if (b === 'glas' || b === 'motiv') s += `<g fill="#fff" opacity=".1" clip-path="url(#kpbsg${w})"><clipPath id="kpbsg${w}">${rects}</clipPath><path d="M${x0} ${y1 - 55}h${(x1 - x0) * .35}l-30 55h${-(x1 - x0) * .35 + 30}z"/></g>`;
    }
    if (led) s += `<linearGradient id="kpled${w}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe2a8" stop-opacity=".75"/><stop offset="1" stop-color="#ffe2a8" stop-opacity="0"/></linearGradient><g fill="url(#kpled${w})">${rects}</g><g fill="#fff6dc">${tops}</g>`;
    s += `<g data-bs="${w}" class="kp-bs" fill="transparent">${rects}</g>`;
    return s;
  }
  // Nischen-Abschnitte einer Wand: über jedem Unterschrank + über der Ecke (Eckschrank der Rückwand) – damit die Rückwand über Eck durchläuft
  function nsSegs(w) {
    const out = [], X = xs(w), [a, b] = range(w), L = wallLen(w), seg = (x, sw) => { const h = nsH(w, { w: sw }, x); if (h > 0 && sw > .5) out.push([x, sw, h]); };
    if (cornerAt(w, 0) && w !== 'N') seg(1.6, a - 1.6);
    P.rows[w].forEach((m, i) => { if (M[m.t].h === 'b') seg(X[i], m.w); });
    if (cornerAt(w, 1) && w !== 'N') seg(b, L - b - 1.6);
    return out.sort((p, q) => p[0] - q[0]);
  }
  function nsH(w, m, x0) { const ops = P.op.filter(o => o.wall === w && opOver(o, x0, m.w)); if (ops.some(o => o.t !== 'fenster')) return 0; return ops.length ? Math.max(0, 15 - ((P.ah || 90) - 90)) : 55; }
  const DEFS = `<defs><linearGradient id="kpsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcdcf5"/><stop offset="1" stop-color="#eaf5fc"/></linearGradient><pattern id="kptile" width="20" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#d9d4cc"/><rect x=".6" y=".6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/><rect x="-9.4" y="5.6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/><rect x="10.6" y="5.6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/></pattern><pattern id="kphatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#e9e3da"/><line x1="0" y1="0" x2="0" y2="6" stroke="#cfc5b8" stroke-width="2"/></pattern><filter id="kpgrain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".02 .5" numOctaves="2" seed="4" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -.9 .55" result="a"/><feComposite in="a" in2="SourceGraphic" operator="in" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>`;

  (function () { const d = document.createElement('div'); d.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'; d.setAttribute('aria-hidden', 'true'); d.innerHTML = `<svg width="0" height="0">${DEFS}</svg>`; document.body.appendChild(d); })();
  /* ---------------- Rendering Wände ---------------- */
  const wallsEl = $('[data-kp-walls]'), tabsEl = $('[data-kp-walltabs]');
  let sel = null, selOp = null, curWall = 'N', ghostId = null, prev = null;
  const VB0 = 18;
  function renderWalls() {
    const walls = FORMS[P.form].walls;
    if (!walls.includes(curWall)) curWall = walls.includes('N') ? 'N' : walls[0];
    tabsEl.innerHTML = walls.length > 1 ? walls.map(w => `<button type="button" data-wt="${w}" class="${w === curWall ? 'on' : ''}">${WN[w]}${free(w) < -0.5 || upList(w).some(u => upConflict(w, u)) ? ' <i>!</i>' : ''}</button>`).join('') : '';
    wallsEl.innerHTML = walls.map(w => { const L = wallLen(w); return `<div class="kp-wall${w === curWall ? ' on' : ''}" data-wall="${w}" style="--L:${L}"><svg viewBox="-4 ${VB0} ${L + 8} ${H - VB0 + 24}" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${drawWall(w, { sel, ghost: ghostId, selOp, prev })}</svg></div>`; }).join('');
    if (P.form === 'insel') wallsEl.insertAdjacentHTML('beforeend', islandCard());
    renderPlan(); renderPop();
  }
  function islandCard() {
    const I = P.island; return `<div class="kp-isl" data-isl><b>Kochinsel</b><div class="kp-step"><button type="button" data-isw="-">−</button><span>${I.w} cm breit</span><button type="button" data-isw="+">+</button></div><div class="kp-seg">${[['kochfeld', 'Mit Kochfeld'], ['spuele', 'Mit Spüle'], ['frei', 'Nur Arbeitsfläche']].map(([k, n]) => `<button type="button" data-isv="${k}" class="${I.v === k ? 'on' : ''}">${n}</button>`).join('')}</div>${I.v === 'kochfeld' ? `<div class="kp-eqs kp-eqs-isl">${IHOODS.map(([v, n, d]) => chip('ihood', v, eqv('ihood', 'mulde') === v, IC.hood(v), n)).join('')}</div>` : ''}</div>`;
  }
  tabsEl.addEventListener('click', e => { const b = e.target.closest('[data-wt]'); if (!b) return; curWall = b.dataset.wt; sel = null; renderWalls(); });
  wallsEl.addEventListener('click', e => {
    const a = e.target.closest('[data-isw]'), v = e.target.closest('[data-isv]');
    if (a) { const ws = [120, 150, 180, 210, 240, 270]; let i = ws.indexOf(P.island.w); i = Math.max(0, Math.min(ws.length - 1, i + (a.dataset.isw === '+' ? 1 : -1))); P.island.w = ws[i]; change(); }
    if (v) { P.island.v = v.dataset.isv; change(); }
  });

  /* ---------------- Ziehen & Ablegen ---------------- */
  let drag = null; const ghost = $('[data-kp-ghost]'), caret = $('[data-kp-caret]'), trash = $('[data-kp-trash]');
  function wallAt(cx, cy) { for (const el of $$('.kp-wall', wallsEl)) { if (getComputedStyle(el).display === 'none') continue; const r = el.getBoundingClientRect(); if (cx >= r.left - 10 && cx <= r.right + 10 && cy >= r.top - 40 && cy <= r.bottom + 30) return el; } return null; }
  function sAt(el, cx) { const svg = $('svg', el), p = svg.createSVGPoint(); p.x = cx; p.y = 0; return p.matrixTransform(svg.getScreenCTM().inverse()).x; }
  function insIndex(w, s, skipId) { const L = layout(w, skipId); let i = 0; for (const m of P.rows[w]) { if (m.id === skipId) { i++; continue; } if (s < L.X.get(m) + m.w / 2) return i; i++; } return P.rows[w].length; }
  function caretX(w, idx, skipId) { const L = layout(w, skipId), r = P.rows[w]; for (let j = idx; j < r.length; j++) if (r[j].id !== skipId) return L.X.get(r[j]); let e = range(w)[0]; for (let j = r.length - 1; j >= 0; j--) if (r[j].id !== skipId) { e = L.X.get(r[j]) + r[j].w; break; } return e; }
  const palById = k => PAL.find(p => p.k === k);
  function startDrag(e, kind, payload) { drag = { kind, ...payload, x0: e.clientX, y0: e.clientY, on: false, pid: e.pointerId }; }
  function tileSvg(t, w, o = {}) {
    const c = M[t], m = { t, w, ...o, _cs: c.corner ? 'l' : null };
    if (c.h === 'u') { const u = { ...m, s: 0, h: o.h || HDEF(t) }, [hx, hy, hw, hh] = upHit(u, 0); return { vb: `-3 ${hy - 3} ${w + 6} ${hh + 6}`, cls: 'u', svg: upElev(u, 0) }; }
    if (c.h === 't') { const Ht = hOf(m); return { vb: `-3 ${FL - Ht - 4} ${w + 6} ${Ht + 8}`, cls: 't', svg: elev(m, 0) }; }
    return { vb: `-3 ${FL - 128} ${w + 6} 132`, cls: 'b', svg: elev(m, 0) };
  }
  function upTarget(e, el) {
    const w = el.dataset.wall, pe = drag.pe, t = pe.t, width = M[t].w, sx = sAt(el, e.clientX);
    // auf vorhandenen Hängeschrank gezogen → tauschen
    const hit = upList(w).find(u => sx >= u.s && sx <= u.s + u.w);
    if (hit && !(t === 'dh') !== !(hit.t === 'dh')) { /* Haube nur gegen Haube tauschen */ }
    else if (hit) return { w, s: hit.s, width: hit.w, rep: hit.id, ok: true, t, a: pe.o && pe.o.a };
    const tmp = { t, w: width, h: HDEF(t) }, saved = P.up[w]; if (!P.up[w]) P.up[w] = autoUp(w).map(u => ({ ...u }));
    const s = hoodSnap(w, tmp, resolveUp(w, tmp, sx - width / 2)); const ok = s != null && !upConflict(w, { ...tmp, s });
    if (!saved) delete P.up[w];
    return { w, s: s == null ? Math.round(sx - width / 2) : s, width, ok: s != null, warn: !ok, t, a: pe.o && pe.o.a };
  }
  function dragMove(e) {
    if (!drag) return;
    if (!drag.on) { const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0; if (Math.hypot(dx, dy) < 7) return; if (drag.kind === 'pal' && drag.touch && Math.abs(dx) > Math.abs(dy) * 1.2) { drag = null; return; } drag.on = true; beginGhost(); }
    e.preventDefault();
    ghost.style.transform = `translate(${e.clientX - drag.gw / 2}px,${e.clientY - drag.gh * .7}px)`;
    const el = wallAt(e.clientX, e.clientY);
    if (drag.kind === 'op') { const o = opById(drag.oid); if (o && el && el.dataset.wall === o.wall) { o.s = clampOp(o, drag.ws + (sAt(el, e.clientX) - drag.s0)); renderWalls(); schedule3D(); } return; }
    if (drag.kind === 'plan') { planMove(e); return; }
    if (drag.kind === 'up') {
      const u = (P.up[drag.wall] || []).find(x => x.id === drag.uid); if (!u) return;
      if (el && el.dataset.wall === drag.wall) { trash.classList.remove('hot'); drag.raw = drag.us + (sAt(el, e.clientX) - drag.s0); const s = hoodSnap(drag.wall, u, resolveUp(drag.wall, u, drag.raw)); if (s != null) u.s = s; ghostId = null; renderWalls(); schedule3D(); }
      else if (!el) { trash.classList.add('hot'); ghostId = u.id; renderWalls(); }
      return;
    }
    if (drag.kind === 'pal' && isUp(drag.t)) {
      if (el) { const tg = upTarget(e, el); drag.target = tg; prev = { w: tg.w, s: tg.s, width: tg.width, t: tg.t, a: tg.a, ok: tg.ok && !tg.warn }; caret.hidden = true; el.classList.add('hov'); $$('.kp-wall.hov', wallsEl).forEach(x => x !== el && x.classList.remove('hov')); }
      else { drag.target = null; prev = null; $$('.kp-wall.hov', wallsEl).forEach(x => x.classList.remove('hov')); }
      renderWalls(); return;
    }
    if (el) {
      const w = el.dataset.wall, idx = clampIdx(w, insIndex(w, sAt(el, e.clientX), drag.id));
      drag.target = { w, idx }; const svg = $('svg', el), m = svg.getScreenCTM();
      const px = m.a * caretX(w, idx, drag.id) + m.e; caret.hidden = false; caret.style.left = px + 'px'; caret.style.top = (m.f + m.d * (FL - 120)) + 'px'; caret.style.height = (m.d * 120) + 'px';
      trash.classList.remove('hot'); el.classList.add('hov'); $$('.kp-wall.hov', wallsEl).forEach(x => x !== el && x.classList.remove('hov'));
    } else { drag.target = null; caret.hidden = true; $$('.kp-wall.hov', wallsEl).forEach(x => x.classList.remove('hov')); if (drag.kind === 'mod') trash.classList.add('hot'); }
  }
  function beginGhost() {
    pop.hidden = true;
    if (drag.kind === 'op' || drag.kind === 'plan') { ghost.innerHTML = ''; drag.gw = drag.gh = 0; selOp = drag.oid; sel = null; return; }
    if (drag.kind === 'up') { ghost.innerHTML = ''; drag.gw = drag.gh = 0; if (drag.auto) { const map = materialize(drag.wall); drag.uid = map[drag.uid]; } const u = P.up[drag.wall].find(x => x.id === drag.uid); if (u) drag.us = u.s; sel = drag.uid; selOp = null; trash.hidden = false; root.classList.add('dragging'); return; }
    const t = drag.t, tl = tileSvg(t, drag.w || M[t].w, drag.o || {}), sc = 1.35, [vx, vy, vw, vh] = tl.vb.split(' ').map(Number);
    ghost.innerHTML = `<svg viewBox="${tl.vb}" width="${vw * sc}" height="${vh * sc}">${tl.svg}</svg><span>${drag.pe ? drag.pe.n : M[t].n}</span>`;
    drag.gw = vw * sc; drag.gh = vh * sc; ghost.hidden = false; root.classList.add('dragging');
    if (drag.kind === 'mod') { ghostId = drag.id; trash.hidden = false; renderWalls(); }
    if (navigator.vibrate) try { navigator.vibrate(8); } catch (e) { }
  }
  function dragEnd(e) {
    if (!drag) return; const d = drag; drag = null; const hadPrev = !!prev; prev = null;
    ghost.hidden = true; caret.hidden = true; trash.hidden = true; trash.classList.remove('hot'); root.classList.remove('dragging'); $$('.kp-wall.hov', wallsEl).forEach(x => x.classList.remove('hov'));
    if (d.kind === 'op' || d.kind === 'plan') { if (d.on) change(); else { selOp = selOp === d.oid ? null : d.oid; sel = null; renderWalls(); } return; }
    if (d.kind === 'up') {
      if (!d.on) {
        let id = d.uid; if (d.auto) { const map = materialize(d.wall); id = map[d.uid]; }
        if (armed) { const u = P.up[d.wall].find(x => x.id === id); if (u) { const old = { ...u }; setUpType(u, armed.t, armed.o); const s2 = resolveUp(d.wall, u, u.s, true); if (s2 == null) Object.assign(u, old); else u.s = s2; } disarm(); sel = id; change(); pulse(id, 1); return; }
        if (d.auto) { sel = id; change(); return; } sel = sel === id ? null : id; selOp = null; renderWalls(); return; }
      ghostId = null; const list = P.up[d.wall] || [], u = list.find(x => x.id === d.uid);
      if (u && !wallAt(e.clientX, e.clientY)) { const i = list.indexOf(u); list.splice(i, 1); sel = null; toast(`${M[u.t].n} entfernt`, undo); }
      else if (u && u.t === 'dh') {
        // Haube nah am Kochfeld losgelassen, aber ein Hängeschrank sitzt dort: Haube nimmt den Platz über dem Kochfeld, der Schrank rückt zur Seite
        const h = d.raw == null ? null : hobsOf(d.wall).find(q => Math.abs(q.c - (d.raw + u.w / 2)) <= HSNAP), L = wallLen(d.wall);
        if (h && Math.abs(h.c - (u.s + u.w / 2)) >= 1) { const c = Math.round(h.c - u.w / 2); if (c >= 0 && c + u.w <= L && !list.some(o => o !== u && o.t === 'dh' && ov(o.s, o.w, c, u.w))) { u.s = c; const g = clearAround(d.wall, u); toast(g ? 'Die Haube sitzt über dem Kochfeld – ein Hängeschrank hatte daneben keinen Platz mehr.' : 'Die Haube sitzt über dem Kochfeld – der Hängeschrank ist zur Seite gerückt.', undo); } }
        relinkHood(d.wall, u);
      }
      change(); return;
    }
    if (!d.on) { // Tippen
      if (d.kind === 'pal') addEntry(d.pe);
      else if (d.kind === 'mod') { disarm(); sel = sel === d.id ? null : d.id; selOp = null; renderWalls(); }
      return;
    }
    ghostId = null;
    if (d.kind === 'pal') {
      if (isUp(d.t)) { if (d.target) placeUp(d.target, d.pe); else if (hadPrev) renderWalls(); else renderWalls(); return; }
      if (M[d.t].corner) { if (d.target) addCorner(d.t); else renderWalls(); return; }
      if (d.target && d.t === 'sp' && sinkCount()) { const tg = d.target; renderWalls(); askSink(() => insert(tg.w, tg.idx, mk(d.t, 0, d.pe && d.pe.o))); }
      else if (d.target) insert(d.target.w, d.target.idx, mk(d.t, 0, d.pe && d.pe.o)); else renderWalls();
    }
    if (d.kind === 'mod') {
      const fromW = d.from, m = P.rows[fromW].find(x => x.id === d.id);
      if (!d.target) { P.rows[fromW] = P.rows[fromW].filter(x => x.id !== d.id); sel = null; toast(`${M[m.t].n} entfernt`, undo); change(); return; }
      let idx = d.target.idx; const oldIdx = P.rows[fromW].indexOf(m);
      P.rows[fromW].splice(oldIdx, 1); if (d.target.w === fromW && idx > oldIdx) idx--;
      insert(d.target.w, idx, m, true);
    }
  }
  function insert(w, idx, m) {
    P.rows[w].splice(idx, 0, m); curWall = w;
    makeRoom(w, m);
    sel = m.id; change(); pulse(m.id);
  }
  function makeRoom(w, keep) {
    let over = -free(w); if (over <= 0.5) return;
    const R = [...P.rows[w]].reverse().filter(x => x.t === 'us' && x !== keep);
    for (const x of R) { if (over <= 0.5) break; const nw = Math.max(0, x.w - over); const fit = M.us.ws.filter(v => v <= nw).pop(); if (fit) { over -= x.w - fit; x.w = fit; } else { over -= x.w; P.rows[w] = P.rows[w].filter(y => y !== x); } }
    if (over > 0.5) toast(`${WN[w]}: ${Math.round(over)} cm zu lang – nehmen Sie etwas heraus oder machen Sie es schmaler.`);
  }
  function addTo(w, t, o) {
    const m = mk(t, 0, o); const rowsW = P.rows[w];
    let idx = rowsW.length;
    const spI = rowsW.findIndex(x => x.t === 'sp');
    if (t === 'gs' && spI >= 0) idx = spI + 1; else if (t === 'sp') { const gI = rowsW.findIndex(x => x.t === 'gs'); if (gI >= 0) idx = gI; }
    else if (M[t].h === 't') idx = 0;
    else { const u = rowsW.map((x, i) => [x, i]).filter(([x]) => x.t === 'us').pop(); if (u) idx = u[1]; }
    insert(w, clampIdx(w, idx), m);
  }
  function addCorner(t) {
    if (!hasCornerSlot('l') && !hasCornerSlot('r')) { toast('Eckschränke gibt es in L- und U-Küchen – Form bei „1 Form & Raum“ umstellen.'); return; }
    const N = P.rows.N, m = mk(t), isC = x => x && M[x.t].corner;
    const side = hasCornerSlot('l') && !isC(N[0]) ? 'l' : hasCornerSlot('r') && !isC(N[N.length - 1]) ? 'r' : hasCornerSlot('l') ? 'l' : 'r';
    const idx = side === 'l' ? 0 : N.length - 1, old = N[idx];
    if (old && (isC(old) || PLAIN.includes(old.t))) N.splice(idx, 1, m); else if (side === 'l') N.unshift(m); else N.push(m);
    curWall = 'N'; makeRoom('N', m); ['W', 'E'].forEach(w => P.rows[w] && makeRoom(w));
    sel = m.id; change(); pulse(m.id);
    toast(old && (isC(old) || PLAIN.includes(old.t)) ? `${M[t].n} ${M[t].s} sitzt jetzt in der Ecke (statt ${M[old.t].n.toLowerCase() === 'eckschrank' ? 'des alten Eckschranks' : 'des Unterschranks'}).` : `${M[t].n} ${M[t].s} sitzt jetzt in der Ecke.`, undo);
  }
  function addUp(w, t, o) {
    if (!P.rows[w]) return; materialize(w);
    const f = sel != null && findSel();
    const width = M[t].w, hs = t === 'dh' ? hobsOf(w).map(h => Math.round(h.c - width / 2)).find(x => x >= 0 && x + width <= wallLen(w) && !P.up[w].some(o => ov(o.s, o.w, x, width))) : null, s = hs != null ? hs : freeUpSpot(w, t, width);
    if (s == null) {
      if (f && f.up && f.w === w) { const u = f.m; setUpType(u, t, o); change(); toast(`Hängeschrank getauscht: ${M[t].n} · ${variant(u)}`, undo); return; }
      armed = { t, o }; root.classList.add('kp-arm'); toast(`Oben ist alles belegt – tippen Sie jetzt den Hängeschrank an, der zu „${M[t].n} · ${variant({ t, w: M[t].w, a: o && o.a })}“ werden soll.`); return;
    }
    const u = { id: uid++, t, s, w: width }; if (o && o.a) u.a = o.a; if (t === 'he' && !u.a) u.a = s + width / 2 < wallLen(w) / 2 ? 'r' : 'l'; P.up[w].push(u); P.up[w].sort((a, b) => a.s - b.s); curWall = w; sel = u.id; change(); pulse(u.id, 1);
  }
  let armed = null;
  function disarm() { armed = null; root.classList.remove('kp-arm'); }
  function setUpType(u, t, o) {
    u.t = t; const c = M[t]; if (!c.ws.includes(u.w)) u.w = c.ws.reduce((a, v) => Math.abs(v - u.w) < Math.abs(a - u.w) ? v : a, c.ws[0]);
    if (!c.hs) delete u.h; else if (u.h && !c.hs.includes(u.h)) delete u.h; if (o && o.a) u.a = o.a; if (!c.hinge) delete u.a;
  }
  function placeUp(tg, pe) {
    const w = tg.w; materialize(w); const list = P.up[w];
    if (tg.rep != null) { const u = list.find(x => x.id === tg.rep) || list.find(x => Math.abs(x.s - tg.s) < 1); if (u) { const old = u.w; setUpType(u, pe.t, pe.o); const s = resolveUp(w, u, u.s, true); if (s == null) { u.w = old; } else u.s = s; sel = u.id; curWall = w; change(); pulse(u.id, 1); return; } }
    if (!tg.ok) { toast('Dort ist kein Platz – ein anderer Hängeschrank ist im Weg.'); renderWalls(); return; }
    const u = { id: uid++, t: pe.t, s: tg.s, w: tg.width }; if (pe.o && pe.o.a) u.a = pe.o.a; if (u.t === 'he' && !u.a) u.a = u.s + u.w / 2 < wallLen(w) / 2 ? 'r' : 'l'; list.push(u); list.sort((a, b) => a.s - b.s); sel = u.id; curWall = w; change(); pulse(u.id, 1);
    if (upConflict(w, u)) toast(upConflict(w, u) === 'win' ? 'Achtung: Der Hängeschrank hängt vor einem Fenster oder einer Tür.' : 'Achtung: Der Hängeschrank stößt an einen Hochschrank.');
  }
  function addEntry(pe) { const c = M[pe.t]; if (c.corner) return addCorner(pe.t); if (c.h === 'u') return addUp(curWall, pe.t, pe.o); if (pe.t === 'sp') return askSink(() => addTo(curWall, pe.t, pe.o)); addTo(curWall, pe.t, pe.o); }
  const sinkCount = () => Object.values(P.rows).reduce((a, r) => a + r.filter(m => m.t === 'sp').length, 0) + (P.form === 'insel' && P.island.v === 'spuele' ? 1 : 0);
  function askSink(go) { if (sinkCount() < 1) return go(); ask('Sie haben schon eine Spüle geplant – trotzdem eine zweite?', 'Ja, zweite Spüle', go); }
  function pulse(id, up) { requestAnimationFrame(() => { const g = $(`[data-${up ? 'u' : 'm'}="${id}"]`, wallsEl); if (g && g.animate) g.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 420 }); }); }
  // Palette mit Gruppen
  const palEl = $('[data-kp-pal]'), catsEl = $('[data-kp-cats]'), cathEl = $('[data-kp-cath]'); let cat = 'unten';
  function renderPal() {
    if (catsEl) catsEl.innerHTML = CATS.map(([k, n]) => `<button type="button" data-cat="${k}" class="${k === cat ? 'on' : ''}" aria-pressed="${k === cat}">${n}<small>${PAL.filter(p => p.c === k).length}</small></button>`).join('');
    if (cathEl) cathEl.textContent = CATH[cat] || '';
    palEl.innerHTML = PAL.filter(p => !catsEl || p.c === cat).map(p => { const tl = tileSvg(p.t, M[p.t].w, p.o || {}); return `<button type="button" class="kp-tile" data-pal="${p.k}" title="${M[p.t].n} – ${M[p.t].s}"><svg viewBox="${tl.vb}" class="${tl.cls}" aria-hidden="true">${tl.svg}</svg><b>${p.n}</b><small>${p.s}</small></button>`; }).join('');
    syncPalFx();
  }
  if (catsEl) catsEl.addEventListener('click', e => { const b = e.target.closest('[data-cat]'); if (!b) return; cat = b.dataset.cat; renderPal(); palEl.scrollLeft = 0; });
  palEl.addEventListener('pointerdown', e => { const b = e.target.closest('[data-pal]'); if (!b) return; disarm(); const pe = palById(b.dataset.pal); startDrag(e, 'pal', { t: pe.t, pe, o: pe.o, touch: e.pointerType !== 'mouse' }); });

  /* ---------------- v7: Schrankleiste am Handy – weicher Rand, einmaliger Anstupser, Wisch-Hinweis ---------------- */
  // Nur unter 1000 px (dort ist die Leiste in Schritt 2 ein waagrechter Streifen) – am Desktop passiert hier nichts.
  // Streifen: weicher Rand rechts (links, sobald gescrollt); beim ersten Sehen rollt er einmal ~76 px nach rechts und zurück,
  // dazu „← wischen · antippen zum Einsetzen →“, bis die Leiste zum ersten Mal berührt oder gescrollt wird.
  // Gruppen-Reiter darüber: gleicher Rand + ein Anstupser – nur, wenn sie wirklich überlaufen. Reduzierte Bewegung: nur Hinweis.
  const MOBQ = typeof matchMedia === 'function' ? matchMedia('(max-width: 999px)') : { matches: false };
  const palFx = { seen: false, done: false, chip: null, run: null, catsDone: false };
  const ovX = el => !!el && el.clientWidth > 0 && el.scrollWidth - el.clientWidth > 4;
  function edgeFx(el) {
    if (!el) return; const on = MOBQ.matches && ovX(el), max = el.scrollWidth - el.clientWidth;
    el.classList.toggle('kp-ov', on); el.classList.toggle('kp-fl', on && el.scrollLeft > 2); el.classList.toggle('kp-fr', on && el.scrollLeft < max - 2);
  }
  function syncPalFx() { edgeFx(palEl); edgeFx(catsEl); if (palFx.chip) palFx.chip.classList.toggle('on', !palFx.done && MOBQ.matches && ovX(palEl)); }
  [palEl, catsEl].forEach(el => { if (!el) return; let q = 0; el.addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(() => { q = 0; edgeFx(el); }); }, { passive: true }); });
  // Einmal kurz nach rechts und zurück – echtes Scrollen (Rasten solange aus); ein Fingertipp übernimmt sofort
  function nudgeX(el, dist, then) {
    const s0 = el.scrollLeft, d = Math.min(dist, el.scrollWidth - el.clientWidth - s0); if (d < 8) { if (then) then(); return null; }
    const T1 = 560, TH = 160, T2 = 640, ez = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; let t0 = 0, raf = 0, end = false;
    const stop = fin => { if (end) return; end = true; cancelAnimationFrame(raf); if (fin) el.scrollLeft = s0; el.classList.remove('kp-nudge'); if (then) then(fin); };
    const f = now => { if (end) return; if (!t0) t0 = now; const t = now - t0; if (t >= T1 + TH + T2) return stop(true); el.scrollLeft = s0 + d * (t < T1 ? ez(t / T1) : t < T1 + TH ? 1 : 1 - ez((t - T1 - TH) / T2)); raf = requestAnimationFrame(f); };
    el.classList.add('kp-nudge'); raf = requestAnimationFrame(f); return { stop: () => stop(false) };
  }
  function palChip() {
    if (palFx.chip || palFx.done) return;
    const c = document.createElement('div'); c.className = 'kp-palhint'; c.setAttribute('aria-hidden', 'true'); c.innerHTML = '<i>←</i>wischen · antippen zum Einsetzen<i>→</i>';
    palEl.parentNode.insertBefore(c, palEl); palFx.chip = c; requestAnimationFrame(() => requestAnimationFrame(syncPalFx));
  }
  function catsNudge() { if (palFx.catsDone || RMO || drag || !MOBQ.matches || !ovX(catsEl)) return; palFx.catsDone = true; nudgeX(catsEl, 48); }
  function palFirstView() {
    if (palFx.seen || palFx.done || !MOBQ.matches || !ovX(palEl)) return; palFx.seen = true;
    const t0 = Date.now();
    // erst wenn die 3D-Ansicht steht (sonst ruckelt es am Handy) – spätestens ~2,6 s nach dem ersten Sehen
    const wait = () => { if (palFx.done) return; if (document.hidden || (!K && Date.now() - t0 < 2600)) { setTimeout(wait, 200); return; } setTimeout(go2, K ? 450 : 0); };
    const go2 = () => {
      if (palFx.done || drag) return; palChip();
      if (RMO || !ovX(palEl)) { setTimeout(catsNudge, 300); return; }
      palFx.run = nudgeX(palEl, 76, fin => { palFx.run = null; setTimeout(catsNudge, fin ? 300 : 1600); });
    };
    setTimeout(wait, 1100);
  }
  // Erste echte Berührung / Scroll-Geste an der Leiste: Anstupser sofort beenden, Hinweis ausblenden – für den Rest des Besuchs
  const palTouched = () => {
    if (palFx.run) palFx.run.stop(); if (palFx.done) return; palFx.done = true;
    const c = palFx.chip; if (c) { c.classList.remove('on'); setTimeout(() => { c.remove(); if (palFx.chip === c) palFx.chip = null; }, 450); }
  };
  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(ev => palEl.addEventListener(ev, palTouched, { passive: true }));
  if (catsEl) catsEl.addEventListener('pointerdown', () => { palFx.catsDone = true; }, { passive: true });
  if (typeof IntersectionObserver === 'function') new IntersectionObserver(es => { if (es.some(x => x.isIntersecting)) { syncPalFx(); palFirstView(); } }, { threshold: .5 }).observe(palEl);
  { let q = 0; addEventListener('resize', () => { if (!q) q = requestAnimationFrame(() => { q = 0; syncPalFx(); const r = palEl.getBoundingClientRect(); if (r.width && r.top < innerHeight && r.bottom > 0) palFirstView(); }); }); }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncPalFx).catch(() => { });
  wallsEl.addEventListener('pointerdown', e => {
    const gu = e.target.closest('[data-u]'), g = e.target.closest('[data-m]'), wn = e.target.closest('[data-op]'), bs = e.target.closest('[data-bs]');
    const wallEl = e.target.closest('.kp-wall'), hadEq = !!eqSel; eqSel = null;
    const tr = e.target.closest('[data-pf],[data-wg]');
    if (tr && wallEl && !gu && !g) { disarm(); const k = tr.dataset.pf ? 'pf' : 'wg', wv = tr.dataset.pf || tr.dataset.wg; openEq({ k, wall: wv, q: `[data-${k}="${wv}"]` }); e.preventDefault(); return; }
    if (bs && wallEl && !gu && !g) { disarm(); openEq({ k: 'bs', wall: bs.dataset.bs, q: `[data-bs="${bs.dataset.bs}"]` }); e.preventDefault(); return; }
    if (hadEq && !gu && !g && !wn) { renderWalls(); }
    if (gu && wallEl) { const w = wallEl.dataset.wall, id = gu.dataset.u, auto = id[0] === 'a', u = upList(w).find(x => String(x.id) === id); if (!u) return; startDrag(e, 'up', { wall: w, uid: auto ? id : +id, auto, s0: sAt(wallEl, e.clientX), us: u.s }); e.preventDefault(); return; }
    if (g && wallEl) { const w = wallEl.dataset.wall, id = +g.dataset.m, m = P.rows[w].find(x => x.id === id); startDrag(e, 'mod', { id, t: m.t, w: m.w, o: { h: m.h, a: m.a }, from: w, idx0: P.rows[w].indexOf(m) }); e.preventDefault(); return; }
    if (wn && wallEl) { const o = opById(+wn.dataset.op); startDrag(e, 'op', { oid: o.id, s0: sAt(wallEl, e.clientX), ws: o.s }); e.preventDefault(); return; }
    if (armed) disarm();
    if (wallEl && (sel || selOp)) { sel = null; selOp = null; renderWalls(); }
  });
  addEventListener('pointermove', dragMove, { passive: false });
  addEventListener('pointerup', dragEnd); addEventListener('pointercancel', () => { if (drag) { drag.target = null; drag.on = false; drag = null; prev = null; ghost.hidden = true; caret.hidden = true; trash.hidden = true; ghostId = null; root.classList.remove('dragging'); renderWalls(); } });
  addEventListener('touchmove', e => { if (drag && drag.on) e.preventDefault(); }, { passive: false });

  /* ---------------- Auswahl-Popup ---------------- */
  const pop = $('[data-kp-pop]'); const openNow = new Set();
  function findSel() {
    for (const w in P.rows) { const i = P.rows[w].findIndex(x => x.id === sel); if (i >= 0) return { w, i, m: P.rows[w][i], up: false, cs: cornerSide(w, i) }; }
    for (const w in P.up) { const i = P.up[w].findIndex(x => x.id === sel); if (i >= 0) return { w, i, m: P.up[w][i], up: true, cs: null }; }
    return null;
  }
  const ICON_L = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M15 4.5L4.5 10L15 15.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 1.4"/></svg>';
  const ICON_R = ICON_L.replace('M15 4.5L4.5 10L15 15.5', 'M5 4.5L15.5 10L5 15.5');
  function stepW(ws, cur, dir) { if (dir > 0) return ws.find(v => v > cur) ?? cur; const lo = ws.filter(v => v < cur); return lo.length ? lo[lo.length - 1] : cur; }
  function renderPop() {
    if (eqSel) return renderEqPop();
    pop.classList.remove('kp-pop-eq');
    if (selOp && opById(selOp)) return renderOpPop();
    const f = sel != null && findSel(); if (!f) { pop.hidden = true; return; }
    const { w, i, m, up, cs } = f, c = M[m.t], ws = c.ws, n = P.rows[w].length;
    const canL = up ? true : i > 0 && !c.corner && !(i === 1 && M[P.rows[w][0].t].corner && cs !== 'r' && cornerSide(w, 0) === 'l');
    const canR = up ? true : i < n - 1 && !c.corner && !(i === n - 2 && M[P.rows[w][n - 1].t].corner && cornerSide(w, n - 1) === 'r');
    const kinds = up ? (m.t !== 'dh' ? UPK : null) : PLAIN.includes(m.t) ? PLK : ['vo', 'vg', 'ah', 'bs'].includes(m.t) ? TLK : null;
    let h = `<div class="kp-pt"><b>${c.n} <small>${variant(m, cs)}</small></b><button type="button" class="kp-px" data-p="x" aria-label="Auswahl schließen">×</button></div>`;
    h += `<div class="kp-prow"><span class="kp-pl">Breite</span><div class="kp-step"><button type="button" data-p="w-"${stepW(ws, m.w, -1) === m.w ? ' disabled' : ''} aria-label="schmaler">−</button><span>${m.w} cm</span><button type="button" data-p="w+"${stepW(ws, m.w, 1) === m.w ? ' disabled' : ''} aria-label="breiter">+</button></div></div>`;
    if (c.hs) h += `<div class="kp-prow"><span class="kp-pl">Höhe</span><div class="kp-chips" role="group" aria-label="Höhe">${c.hs.map(v => `<button type="button" data-p="h" data-v="${v}" class="${hOf(m) === v ? 'on' : ''}" aria-pressed="${hOf(m) === v}">${v}</button>`).join('')}<em>cm</em></div></div>`;
    if (c.h === 't') { const fits = AX.filter(v => hOf(m) + v <= AXMAX); if (fits.length) h += `<div class="kp-prow"><span class="kp-pl">Aufsatz</span><div class="kp-chips" role="group" aria-label="Aufsatzschrank">${[0, ...fits].map(v => `<button type="button" data-p="ax" data-v="${v}" class="${axOf(m) === v ? 'on' : ''}" aria-pressed="${axOf(m) === v}">${v ? v : 'ohne'}</button>`).join('')}<em>cm</em></div></div>`; }
    if (hasHinge(m, cs)) { const a = aOf(m, cs); h += `<div class="kp-prow"><span class="kp-pl">Tür öffnet</span><div class="kp-chips" role="group" aria-label="Türanschlag">${[['l', 'nach links', ICON_L], ['r', 'nach rechts', ICON_R]].map(([k, nm, ic]) => `<button type="button" data-p="a" data-v="${k}" class="${a === k ? 'on' : ''}" aria-pressed="${a === k}">${ic}${nm}</button>`).join('')}</div></div>`; }
    if (kinds) h += `<div class="kp-prow kp-kinds"><span class="kp-pl">Art</span><div class="kp-chips" role="group" aria-label="Art">${kinds.map(([t, nm]) => `<button type="button" data-p="t" data-v="${t}" class="${m.t === t ? 'on' : ''}" aria-pressed="${m.t === t}">${nm}</button>`).join('')}</div></div>`;
    if (m.t === 'sp') h += eqRows('sp', m); if (m.t === 'kf' || m.t === 'ko') h += eqRows('kf', m); if (m.t === 'dh') h += eqRows('dh', m);
    const isO = openNow.has(String(m.id)) || (K && K.isAllOpen && K.isAllOpen());
    h += `<div class="kp-pb">${canL || canR ? `<button type="button" data-p="l"${canL ? '' : ' disabled'} aria-label="nach links">←</button><button type="button" data-p="r"${canR ? '' : ' disabled'} aria-label="nach rechts">→</button>` : ''}${openable(m) && K ? `<button type="button" data-p="o" class="kp-ob">${isO ? 'In 3D schließen' : 'In 3D öffnen'}</button>` : ''}<button type="button" data-p="del" class="kp-del">Entfernen</button></div>`;
    pop.innerHTML = h; pop.hidden = false;
    const g = $(`[data-${up ? 'u' : 'm'}="${m.id}"]`, wallsEl); if (!g || !g.getBoundingClientRect().width) { pop.hidden = true; return; } const r = g.getBoundingClientRect(); if (offView(r)) { pop.hidden = true; return; }
    const pw = pop.offsetWidth, ph = pop.offsetHeight; let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(innerWidth - pw - 8, left));
    let top = r.top - ph - 10; if (top < 70) top = Math.min(innerHeight - ph - 8, r.bottom + 10); pop.style.left = left + 'px'; pop.style.top = Math.max(64, top) + 'px';
  }
  const offView = r => r.bottom < 60 || r.top > innerHeight - 8;
  function renderOpPop() {
    const o = opById(selOp), ws = OPW[o.t];
    pop.innerHTML = `<div class="kp-pt"><b>${OPN[o.t]} <small>${WN[o.wall]}</small></b><button type="button" class="kp-px" data-o="x" aria-label="Auswahl schließen">×</button></div><div class="kp-step"><button type="button" data-o="w-"${o.w <= ws[0] ? ' disabled' : ''} aria-label="schmaler">−</button><span>${o.w} cm</span><button type="button" data-o="w+"${o.w >= ws[ws.length - 1] ? ' disabled' : ''} aria-label="breiter">+</button></div><div class="kp-pb"><button type="button" data-o="l" aria-label="nach links">←</button><button type="button" data-o="r" aria-label="nach rechts">→</button><button type="button" data-o="del" class="kp-del">Entfernen</button></div>`;
    pop.hidden = false;
    const cands = [$(`[data-pop="${o.id}"]`), $(`[data-op="${o.id}"]`, wallsEl)].filter(el => el && el.getBoundingClientRect().width > 0);
    const r = cands.length ? cands[0].getBoundingClientRect() : null; if (!r || offView(r)) { pop.hidden = true; return; }
    const pw = pop.offsetWidth; let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(innerWidth - pw - 8, left));
    pop.style.left = left + 'px'; pop.style.top = (r.top - pop.offsetHeight - 10 < 70 ? r.bottom + 10 : r.top - pop.offsetHeight - 10) + 'px';
  }
  /* ---------------- Ausstattung: kleine Auswahl mit Mini-Vorschau ---------------- */
  let eqSel = null; // {k: 'sp'|'kf'|'dh'|'bs'|'isl', id?, wall?, rx/ry (Tipp-Punkt in 3D) oder q (Element in der Wandansicht)}
  const IC = {
    sink: c => `<svg viewBox="0 0 30 22" aria-hidden="true"><rect x="1" y="1" width="28" height="20" rx="4" fill="${c}" stroke="rgba(0,0,0,.28)" stroke-width=".8"/><rect x="5" y="4.5" width="20" height="13" rx="3.4" fill="${shade(c, lum(c) > .5 ? -.16 : .14)}"/><circle cx="15" cy="11" r="1.7" fill="${shade(c, lum(c) > .5 ? -.45 : .35)}"/><path d="M4 3.5h9" stroke="#fff" stroke-opacity=".45" stroke-width="1" stroke-linecap="round"/></svg>`,
    tap: c => `<svg viewBox="0 0 30 22" aria-hidden="true"><path d="M11 21V8q0-5 5-5h3q5 0 5 4.5v2.5" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M11 21V8q0-5 5-5" fill="none" stroke="#fff" stroke-opacity="${lum(c) > .5 ? .5 : .22}" stroke-width=".9" stroke-linecap="round"/><rect x="6" y="18.5" width="11" height="3" rx="1" fill="${c}" stroke="rgba(0,0,0,.25)" stroke-width=".5"/><path d="M8 12h3" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
    hob: (dd, w) => { const k = (w || 80) / 90; return `<svg viewBox="0 0 30 22" aria-hidden="true"><rect x="${15 - 13 * k}" y="2" width="${26 * k}" height="18" rx="2.4" fill="#151617"/>${[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b2]) => `<circle cx="${15 + a * (dd ? 7.5 : 6) * k}" cy="${11 + b2 * 4.4}" r="${3 * Math.min(1, k + .1)}" fill="none" stroke="#7b7f83" stroke-width=".9"/>`).join('')}${dd ? `<rect x="13" y="3.5" width="4" height="15" rx="1" fill="#5d6166"/><path d="M13.6 6h2.8M13.6 8.5h2.8M13.6 11h2.8M13.6 13.5h2.8M13.6 16h2.8" stroke="#202224" stroke-width=".8"/>` : ''}</svg>`; },
    hood: v => { const g = '#b9bdc0', d = '#1d1e20'; return `<svg viewBox="0 0 30 22" aria-hidden="true">${v === 'esse' ? `<rect x="12" y="0" width="6" height="11" fill="${g}"/><path d="M11 11h8l7 7H4z" fill="${g}" stroke="rgba(0,0,0,.25)" stroke-width=".5"/><rect x="4" y="18" width="22" height="2" fill="#8f9396"/>` : v === 'flach' ? `<rect x="4" y="2" width="22" height="14" rx="1" fill="var(--kp-fc,#e9e4dc)" stroke="rgba(0,0,0,.25)" stroke-width=".6"/><rect x="4.5" y="16" width="21" height="2.4" rx="1" fill="#9a9ea2"/>` : v === 'decke' ? `<path d="M0 1.5h30" stroke="#cfc6b9" stroke-width="2"/><rect x="5" y="2.5" width="20" height="3" rx="1" fill="#eef0f1" stroke="rgba(0,0,0,.3)" stroke-width=".5"/><path d="M9 8q2 3 0 6M15 8q2 3 0 6M21 8q2 3 0 6" fill="none" stroke="#9aa0a5" stroke-width=".9" stroke-dasharray="1.6 1.2"/><rect x="8" y="18" width="14" height="2.4" rx="1" fill="#151617"/>` : v === 'insel' ? `<rect x="13" y="0" width="4" height="9" fill="${g}"/><rect x="6" y="9" width="18" height="5" rx="1" fill="${g}" stroke="rgba(0,0,0,.25)" stroke-width=".5"/><rect x="6" y="18" width="18" height="3" rx="1" fill="#c9b79c"/>` : v === 'mulde' ? `<rect x="3" y="12" width="24" height="9" rx="1.5" fill="#151617"/><rect x="13" y="13" width="4" height="7" fill="#6a6e72"/><path d="M15 10V3M12.5 5.5L15 3l2.5 2.5" fill="none" stroke="#9aa0a5" stroke-width="1" stroke-linecap="round"/>` : `<rect x="12" y="0" width="6" height="7" fill="${g}"/><rect x="5" y="7" width="20" height="3" fill="${g}"/><path d="M5 10h20l3 9H2z" fill="${d}"/><path d="M6 12h18" stroke="#fff" stroke-opacity=".3" stroke-width=".8"/>`}</svg>`; },
    back: k => { const c = k === 'glas' || k === 'dibond' ? backCol() : k === 'holz' ? (BACKW.find(x => x[0] === (P.style.backWood || 'eiche')) || BACKW[0])[2] : k === 'platte' ? topCol() : k === 'fliese' ? '#f2efe9' : P.style.wall || '#f3efe9';
      let s2 = `<svg viewBox="0 0 30 22" aria-hidden="true"><rect x="1" y="1" width="28" height="20" rx="2.5" fill="${c}" stroke="rgba(0,0,0,.22)" stroke-width=".7"${k === 'wand' ? ' stroke-dasharray="2 1.5"' : ''}/>`;
      if (k === 'glas') s2 += `<path d="M3 3h9l-6 16H3z" fill="#fff" opacity=".28"/>`;
      if (k === 'holz') s2 += `<path d="M2 6q14 -2 26 1M2 11q12 2 26 -1M2 16q15 -2 26 1" fill="none" stroke="rgba(60,35,15,.35)" stroke-width=".8"/>`;
      if (k === 'fliese') s2 += `<path d="M1 7.7h28M1 14.3h28M10 1v6.7M20 1v6.7M5 7.7v6.6M15 7.7v6.6M25 7.7v6.6M10 14.3V21M20 14.3V21" stroke="#cfc8bd" stroke-width=".8"/>`;
      if (k === 'platte') s2 += `<path d="M4 18q8-9 12-6t11-9" fill="none" stroke="${lum(c) > .5 ? 'rgba(0,0,0,.18)' : 'rgba(255,255,255,.35)'}" stroke-width=".7"/>`;
      if (k === 'motiv') s2 += motif ? `<image href="${motif._url}" x="1" y="1" width="28" height="20" preserveAspectRatio="xMidYMid slice"/><path d="M3 3h8l-5 16H3z" fill="#fff" opacity=".25"/>` : `<rect x="1" y="1" width="28" height="20" rx="2.5" fill="#dfe8ee"/><path d="M3 19l7-8 5 5 4-4 8 7z" fill="#7b9a7e"/><circle cx="21" cy="6.5" r="2.3" fill="#f2c46b"/>`;
      return s2 + '</svg>'; },
    dot: c => `<svg viewBox="0 0 30 22" aria-hidden="true"><rect x="1" y="1" width="28" height="20" rx="2.5" fill="${c}" stroke="rgba(0,0,0,.22)" stroke-width=".7"/></svg>`,
    led: on => `<svg viewBox="0 0 30 22" aria-hidden="true"><rect x="1" y="1" width="28" height="20" rx="2.5" fill="${on ? '#2a2622' : '#e9e4dc'}"/><rect x="3" y="3" width="24" height="2" rx="1" fill="${on ? '#ffe7b0' : '#bdb4a6'}"/>${on ? '<path d="M3 5h24l-3 14H6z" fill="#ffe2a8" opacity=".35"/>' : ''}</svg>`,
  };
  const chip = (e, v, on, icon, label, sub) => `<button type="button" class="kp-eq${on ? ' on' : ''}" data-e="${e}" data-v="${v}" aria-pressed="${!!on}">${icon}<span>${label}${sub ? `<small>${sub}</small>` : ''}</span></button>`;
  const eqRow = (lab, html, blk) => blk ? `<div class="kp-eqblk"><span class="kp-pl">${lab}</span><div class="kp-eqs">${html}</div></div>` : `<div class="kp-prow kp-eqrow"><span class="kp-pl">${lab}</span><div class="kp-eqs">${html}</div></div>`;
  function eqRows(k, m, blk) {
    let h = '';
    if (k === 'sp') {
      h += eqRow('Becken', SINKS.map(([v, n, c]) => chip('sink', v, eqv('sink', 'edel') === v, IC.sink(c), n)).join(''), blk);
      h += eqRow('Armatur', TAPS.map(([v, n, c]) => chip('tap', v, eqv('tap', 'chrom') === v, IC.tap(c), n)).join(''), blk);
    }
    if (k === 'kf' || k === 'isl') {
      if (!m || m.t !== 'ko') h += eqRow('Kochfeld', HOBW.map(v => chip('hobW', v, eqv('hobW', 80) === v, IC.hob(k === 'kf' && isDD(), v), v + ' cm')).join(''), blk);
      if (k === 'kf') { h += eqRow('Art', HOBV.map(([v, n]) => chip('hobV', v, eqv('hobV', 'normal') === v, IC.hob(v === 'dd', 80), n)).join(''), blk); if (isDD()) h += `<p class="kp-eqhint">Der Muldenlüfter saugt den Dampf direkt am Kochfeld nach unten ab – eine Haube braucht es nicht.</p>`; }
      if (k === 'isl') h += eqRow('Abzug', IHOODS.map(([v, n, d]) => chip('ihood', v, eqv('ihood', 'mulde') === v, IC.hood(v), n, d)).join(''), blk);
    }
    if (k === 'dh') { h += eqRow('Haube', HOODS.map(([v, n, d]) => chip('hood', v, eqv('hood', 'schraeg') === v, IC.hood(v), n, d)).join(''), blk); if (!blk) h += `<p class="kp-eqhint">Lieber ohne Haube? Beim Kochfeld „Mit Muldenlüfter“ wählen.</p>`; }
    if (k === 'pf' || k === 'wg') { const f = k === 'pf' ? 'pfDek' : 'wgDek', cur = P.style[f] || (k === 'pf' ? 'front' : 'top'); h += eqRow('Dekor', chip(f, 'front', cur === 'front', IC.dot(fcol()), 'Frontfarbe') + chip(f, 'top', cur === 'top', IC.dot(topCol()), 'Arbeitsplatte'), blk); if (!blk) h += `<p class="kp-eqhint">${k === 'pf' ? 'Das Passstück schließt das Restmaß automatisch – ohne Lücke zur Wand oder zum Hochschrank.' : 'Die Seitenwange schließt das offene Zeilenende sauber ab und steht 2 cm über die Front.'}</p>`; }
    if (k === 'bs') {
      const b = P.style.back || 'wand';
      h += eqRow(blk ? 'Material' : 'Rückwand', BACKS2.map(([v, n, d]) => chip('back', v, b === v, IC.back(v), n, blk ? d : '')).join(''), blk);
      if (b === 'glas' || b === 'dibond') h += eqRow('Farbe', BACKC.map(([n, c]) => chip('backC', c, (P.style.backC || '') === c, IC.dot(c || (P.style.wood ? WOOD[P.style.wood] : P.style.front)), n)).join(''), blk);
      if (b === 'holz') h += eqRow('Holz', BACKW.map(([v, n, c]) => chip('backWood', v, (P.style.backWood || 'eiche') === v, IC.back('holz').replace(/fill="#[0-9a-f]{6}"/, `fill="${c}"`), n)).join(''), blk);
      if (b === 'motiv') h += eqRow('Motiv', `<button type="button" class="kp-eq kp-equp" data-e="motif" data-v="1">${IC.back('motiv')}<span>${motif ? 'Anderes Foto wählen' : 'Foto hochladen'}<small>bleibt auf Ihrem Gerät, bis Sie anfragen</small></span></button>`, blk);
      h += eqRow('Licht', chip('backLed', P.style.backLed ? 0 : 1, !!P.style.backLed, IC.led(!!P.style.backLed), 'LED beleuchtet', 'leuchtet im Abendmodus'), blk);
    }
    return h;
  }
  function renderEqPop() {
    const q = eqSel, T = { sp: ['Spüle', 'Becken und Armatur wählen'], kf: ['Kochfeld', 'Breite und Abzug'], dh: ['Dunstabzug', 'Bauform wählen'], bs: ['Küchenrückwand', 'zwischen Arbeitsplatte und Hängeschrank'], isl: ['Kochinsel', 'Kochfeld und Abzug'], pf: ['Passstück', (() => { const t = q.wall && trims(q.wall).pf[0]; return t ? `${Math.round(t.w)} cm ${t.where}` : 'schließt das Restmaß'; })()], wg: ['Seitenwange', 'Abschluss am Zeilenende'] }[q.k];
    let m = null; if (q.id != null) for (const w in P.rows) { const x = P.rows[w].find(y => String(y.id) === String(q.id)); if (x) m = x; }
    pop.innerHTML = `<div class="kp-pt"><b>${T[0]} <small>${T[1]}</small></b><button type="button" class="kp-px" data-e="close" data-v="1" aria-label="Auswahl schließen">×</button></div>` + eqRows(q.k, m);
    pop.hidden = false; pop.classList.add('kp-pop-eq');
    let r; if (q.rx != null) { const hr = host3.getBoundingClientRect(); const x = hr.left + q.rx, y = hr.top + q.ry; r = { left: x, right: x, top: y - 8, bottom: y + 8, width: 0 }; } else { const el = q.q && $(q.q, wallsEl); if (!el || !el.getBoundingClientRect().width) { pop.hidden = true; return; } r = el.getBoundingClientRect(); }
    if (offView(r)) { pop.hidden = true; return; }
    const pw = pop.offsetWidth, ph = pop.offsetHeight; let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(innerWidth - pw - 8, left));
    let top = r.top - ph - 10; if (top < 70) top = Math.min(innerHeight - ph - 8, r.bottom + 10); pop.style.left = left + 'px'; pop.style.top = Math.max(64, top) + 'px';
  }
  function openEq(o) { eqSel = o; sel = null; selOp = null; renderWalls(); }
  const motifIn = Object.assign(document.createElement('input'), { type: 'file', accept: 'image/*', hidden: true }); document.body.appendChild(motifIn);
  motifIn.addEventListener('change', () => {
    const f = motifIn.files && motifIn.files[0]; motifIn.value = ''; if (!f) return;
    const url = URL.createObjectURL(f), im = new Image();
    im.onload = () => { const sc = Math.min(1, 1600 / Math.max(im.naturalWidth, im.naturalHeight)), c = document.createElement('canvas'); c.width = Math.round(im.naturalWidth * sc); c.height = Math.round(im.naturalHeight * sc); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); URL.revokeObjectURL(url); c._url = c.toDataURL('image/jpeg', .86); motif = c; motSend = true; try { localStorage.setItem('kp-motiv', c._url); } catch (e) { } P.style.back = 'motiv'; xfade(); change(); toast('Ihr Motiv ist jetzt die Glasrückwand – das Foto bleibt auf Ihrem Gerät, bis Sie Ihre Anfrage absenden.'); };
    im.onerror = () => { URL.revokeObjectURL(url); toast('Dieses Bild kann der Browser nicht öffnen – bitte ein JPG oder PNG wählen.'); };
    im.src = url;
  });
  function setEq(k, v) {
    if (k === 'close') { eqSel = null; pop.hidden = true; renderWalls(); return; }
    if (k === 'motif') { motifIn.click(); return; }
    if (k === 'sink' || k === 'tap' || k === 'hood' || k === 'ihood' || k === 'backWood' || k === 'pfDek' || k === 'wgDek') P.style[k] = v;
    if (k === 'backC') { if (v) P.style.backC = v; else delete P.style.backC; }
    if (k === 'backLed') P.style.backLed = +v ? 1 : 0;
    if (k === 'back') { P.style.back = v; if (v === 'motiv' && !motif) { motifIn.click(); } }
    if (k === 'hobW') { P.style.hobW = +v; let grown = 0; for (const w in P.rows) P.rows[w].forEach(m => { if (m.t === 'kf' && m.w < +v) { m.w = M.kf.ws.find(x => x >= +v) || m.w; makeRoom(w, m); grown = m.w; } }); if (grown) toast(`Der Kochfeldschrank ist jetzt ${grown} cm breit, damit das ${v}er Kochfeld hineinpasst.`); }
    if (k === 'hobV') {
      P.style.hobV = v;
      for (const w in P.up) { const hobs = [], X = xs(w); (P.rows[w] || []).forEach((m, i) => { if (m.t === 'kf' || m.t === 'ko') hobs.push([X[i], m.w]); });
        if (v === 'dd') P.up[w] = P.up[w].filter(u => !(u.t === 'dh' && hobs.some(([a, b]) => ov(a, b, u.s, u.w))));
        else hobs.forEach(([a, b]) => { if (!P.up[w].some(u => u.t === 'dh' && ov(a, b, u.s, u.w))) { const hw = Math.min(90, Math.max(60, b)); P.up[w].push({ id: uid++, t: 'dh', s: a + b / 2 - hw / 2, w: hw }); } }); }
      toast(v === 'dd' ? 'Muldenlüfter gewählt – er saugt direkt am Kochfeld ab, die Haube entfällt.' : 'Normales Kochfeld – die Haube hängt wieder darüber.');
    }
    if (eqSel && eqSel.k === 'dh' && k === 'hobV' && v === 'dd') eqSel = null;
    if (['back', 'backC', 'backWood', 'backLed', 'sink', 'tap', 'hood', 'pfDek', 'wgDek'].includes(k)) xfade();
    change();
  }
  root.addEventListener('click', e => { const b = e.target.closest('[data-e]'); if (!b) return; e.preventDefault(); setEq(b.dataset.e, b.dataset.v); });

  pop.addEventListener('click', e => {
    const ob = e.target.closest('[data-o]');
    if (ob) { const o = opById(selOp); if (!o) return; const k = ob.dataset.o, ws = OPW[o.t];
      if (k === 'x') { selOp = null; renderWalls(); return; }
      if (k === 'w-' || k === 'w+') { let i = ws.indexOf(o.w); if (i < 0) i = ws.findIndex(v => v >= o.w); const c = o.s + o.w / 2; o.w = ws[Math.max(0, Math.min(ws.length - 1, i + (k === 'w+' ? 1 : -1)))]; o.s = clampOp(o, c - o.w / 2); }
      if (k === 'l') o.s = clampOp(o, o.s - 10); if (k === 'r') o.s = clampOp(o, o.s + 10);
      if (k === 'del') { const i = P.op.indexOf(o); P.op.splice(i, 1); selOp = null; toast(`${OPN[o.t]} entfernt`, undo); }
      change(); return; }
    const b = e.target.closest('[data-p]'); if (!b) return; const f = findSel(); if (!f) return; const { w, i, m, up } = f, c = M[m.t];
    const k = b.dataset.p, v = b.dataset.v;
    if (k === 'x') { sel = null; renderWalls(); return; }
    if (k === 'o') { const on = K.toggle(m.id); if (on && K.focus) K.focus(m.id); if (on) openNow.add(String(m.id)); else openNow.delete(String(m.id)); renderPop(); if (innerWidth < 1000) $('.kp-stage').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
    if (k === 'w-' || k === 'w+') {
      const old = m.w; m.w = stepW(c.ws, m.w, k === 'w+' ? 1 : -1);
      if (up) { const s = resolveUp(w, m, m.s - (m.w - old) / 2, true); if (s == null) { m.w = old; toast('Daneben hängt schon etwas – erst verschieben oder schmaler machen.'); } else m.s = s; }
      else { if (k === 'w+') makeRoom(w, m); if (c.corner) ['W', 'E'].forEach(x => P.rows[x] && makeRoom(x)); }
    }
    if (k === 'h') { m.h = +v; if (m.ax && hOf(m) + m.ax > AXMAX) { delete m.ax; toast('Der Aufsatzschrank passt bei dieser Höhe nicht mehr unter die Decke – entfernt.'); } }
    if (k === 'ax') { if (+v) m.ax = +v; else delete m.ax; }
    if (k === 'a') m.a = v;
    if (k === 't' && v !== m.t) {
      if (up) { const old = { ...m }; setUpType(m, v); const s = resolveUp(w, m, m.s, true); if (s == null) { Object.assign(m, old); toast('Der neue Schrank ist breiter – daneben ist kein Platz.'); } else m.s = s; }
      else { m.t = v; if (!M[v].ws.includes(m.w)) { m.w = M[v].ws.reduce((a, x) => Math.abs(x - m.w) < Math.abs(a - m.w) ? x : a, M[v].ws[0]); makeRoom(w, m); } if (!M[v].hinge) delete m.a; if (!M[v].hs || (m.h && !M[v].hs.includes(m.h))) delete m.h; }
    }
    if (k === 'l' || k === 'r') {
      if (up) { const ed = upEdges(w, m).flatMap(e2 => [e2, e2 - m.w]).filter(x => x >= 0 && x + m.w <= wallLen(w)); const cand = [...new Set(ed.map(Math.round))].filter(x => k === 'l' ? x < m.s - .5 : x > m.s + .5).sort((p, q) => k === 'l' ? q - p : p - q); const nx = cand.find(x => !P.up[w].some(o => o !== m && ov(o.s, o.w, x, m.w))); if (nx != null) m.s = nx; else toast('Weiter geht es nicht – dort hängt schon etwas.'); }
      else if (k === 'l' && i > 0) { P.rows[w].splice(i, 1); P.rows[w].splice(i - 1, 0, m); }
      else if (k === 'r' && i < P.rows[w].length - 1) { P.rows[w].splice(i, 1); P.rows[w].splice(i + 1, 0, m); }
    }
    if (k === 'del') { const list = up ? P.up[w] : P.rows[w]; list.splice(i, 1); sel = null; toast(`${c.n} entfernt`, undo); }
    else if (up && m.t === 'dh') relinkHood(w, m);
    change();
  });
  addEventListener('resize', () => renderPop());
  // Auswahl-Popup folgt seinem Element; ist es aus dem Bild gescrollt, verschwindet das Popup (und kommt beim Zurückscrollen wieder)
  addEventListener('scroll', () => { if (!pop.hidden || sel != null || selOp != null || eqSel) renderPop(); }, { passive: true });
  addEventListener('keydown', e => {
    if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) || document.querySelector('.kpf:not([hidden])')) return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && selOp) { P.op = P.op.filter(o => o.id !== selOp); selOp = null; change(); e.preventDefault(); return; }
    if ((e.key === 'Delete' || e.key === 'Backspace') && sel != null) { const f = findSel(); if (f) { (f.up ? P.up[f.w] : P.rows[f.w]).splice(f.i, 1); sel = null; change(); } e.preventDefault(); }
    if (e.key === 'Escape') { sel = null; selOp = null; renderWalls(); }
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') { undo(); e.preventDefault(); }
  });

  /* ---------------- Grundriss: Fenster & Türen ---------------- */
  const planEl = $('[data-kp-plan]');
  // Wand-Laufrichtung wie in 3D: N links→rechts, E oben→unten, S rechts→links, W unten→oben
  function seg(wall, a, len) { const W = P.room.w, D = P.room.d; return { N: [a, 0, a + len, 0], S: [W - a, D, W - a - len, D], W: [0, D - a, 0, D - a - len], E: [W, a, W, a + len] }[wall]; }
  function cabR(wall, a, len, dep) { const W = P.room.w, D = P.room.d; return { N: [a, 0, len, dep], S: [W - a - len, D - dep, len, dep], W: [0, D - a - len, dep, len], E: [W - dep, a, dep, len] }[wall]; }
  const INW = { N: [0, 1], S: [0, -1], W: [1, 0], E: [-1, 0] };
  function renderPlan() {
    if (!planEl) return;
    const W = P.room.w, D = P.room.d; let s = `<rect x="0" y="0" width="${W}" height="${D}" fill="#f7f2ea"/>`;
    for (const w in P.rows) { const X = xs(w); P.rows[w].forEach((m, i) => { const x = X[i]; const [cx, cy, cw, ch] = cabR(w, x, m.w, 60), tall = M[m.t].h === 't'; s += `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" fill="${tall ? '#cdbfab' : '#e6dccd'}" stroke="#a89880" stroke-width="1.2"/>`; if (m.t === 'ek') { const cs = cornerSide(w, i); s += `<rect x="${cs === 'r' ? W - 60 : 0}" y="60" width="60" height="30" fill="#e6dccd" stroke="#a89880" stroke-width="1.2"/>`; } const mx = cx + cw / 2, my = cy + ch / 2; if (m.t === 'sp') s += `<rect x="${mx - 17}" y="${my - 14}" width="34" height="28" rx="6" fill="#fff" stroke="#8d9296" stroke-width="1.5"/>`; if (m.t === 'kf' || m.t === 'ko') [[-11, -11], [11, -11], [-11, 11], [11, 11]].forEach(([a, b]) => s += `<circle cx="${mx + a}" cy="${my + b}" r="7" fill="none" stroke="#45474b" stroke-width="1.6"/>`); if (m.t === 'kue') s += `<text x="${mx}" y="${my + 5}" font-size="15" text-anchor="middle" fill="#6e655b" font-family="system-ui">❄</text>`;  }); }
    if (P.form === 'insel') { const z = Math.max(210, Math.min(D - 120, 225)); s += `<rect x="${W / 2 - P.island.w / 2}" y="${z - 50}" width="${P.island.w}" height="100" rx="4" fill="#e6dccd" stroke="#a89880" stroke-width="1.2"/>`; }
    s += `<rect x="-6" y="-6" width="${W + 12}" height="${D + 12}" fill="none" stroke="#2b2724" stroke-width="12"/>`;
    P.op.forEach(o => {
      const [x1, y1, x2, y2] = seg(o.wall, o.s, o.w), [nx, ny] = INW[o.wall], on = selOp === o.id, c = on ? ACC : '#4f8fc6';
      let g = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f7f2ea" stroke-width="13"/>`;
      if (o.t === 'tuer') { const r = o.w, hx = x2, hy = y2, ex = hx + nx * r, ey = hy + ny * r; g += `<line x1="${hx}" y1="${hy}" x2="${ex}" y2="${ey}" stroke="${on ? ACC : '#2b2724'}" stroke-width="4"/><path d="M${ex} ${ey}A${r} ${r} 0 0 ${((ex - hx) * (y1 - hy) - (ey - hy) * (x1 - hx)) > 0 ? 1 : 0} ${x1} ${y1}" fill="none" stroke="${on ? ACC : '#2b2724'}" stroke-width="1.4" stroke-dasharray="6 5"/>`; }
      else { const o2 = 4; g += `<line x1="${x1 - nx * o2}" y1="${y1 - ny * o2}" x2="${x2 - nx * o2}" y2="${y2 - ny * o2}" stroke="${c}" stroke-width="2.6"/><line x1="${x1 + nx * o2}" y1="${y1 + ny * o2}" x2="${x2 + nx * o2}" y2="${y2 + ny * o2}" stroke="${c}" stroke-width="2.6"/>`; if (o.t === 'balkon') g += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="7" opacity=".35"/>`; }
      const mx = (x1 + x2) / 2 + nx * 26, my = (y1 + y2) / 2 + ny * 26;
      g += `<text x="${mx}" y="${my + 5}" font-size="15" font-weight="700" text-anchor="middle" fill="${on ? ACC : '#4f6b84'}" font-family="system-ui">${o.t === 'tuer' ? 'Tür' : o.t === 'balkon' ? 'Balkon' : 'Fenster'}</text>`;
      const hx0 = Math.min(x1, x2) - 14 + (nx ? -8 : 0), hy0 = Math.min(y1, y2) - 14 + (ny ? -8 : 0), hw = Math.abs(x2 - x1) + 28 + (nx ? 40 : 0), hh = Math.abs(y2 - y1) + 28 + (ny ? 40 : 0);
      s += `<g data-pop="${o.id}" class="kp-pop-op${on ? ' on' : ''}">${g}<rect x="${nx < 0 ? hx0 - 32 : hx0}" y="${ny < 0 ? hy0 - 32 : hy0}" width="${hw}" height="${hh}" fill="transparent"/></g>`;
    });
    s += `<g font-family="system-ui" font-size="15" fill="#8a7f72" text-anchor="middle"><text x="${W / 2}" y="${-22}">${(W / 100).toFixed(2).replace('.', ',')} m</text><text transform="translate(${-22} ${D / 2}) rotate(-90)">${(D / 100).toFixed(2).replace('.', ',')} m</text></g>`;
    planEl.innerHTML = `<svg viewBox="-44 -44 ${W + 88} ${D + 80}" xmlns="http://www.w3.org/2000/svg" aria-label="Grundriss mit Fenstern und Türen">${s}</svg>`;
  }
  function planPt(e) { const svg = $('svg', planEl), p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  function planMove(e) {
    const o = opById(drag.oid); if (!o) return; const W = P.room.w, D = P.room.d, p = planPt(e);
    const d = { N: Math.abs(p.y), S: Math.abs(p.y - D), W: Math.abs(p.x), E: Math.abs(p.x - W) };
    const wall = Object.keys(d).sort((a, b) => d[a] - d[b])[0], along = { N: p.x, S: W - p.x, W: D - p.y, E: p.y }[wall];
    if (o.wall !== wall) { o.wall = wall; if (o.w > wallLen(wall) - 20) o.w = OPW[o.t].filter(v => v <= wallLen(wall) - 20).pop() || o.w; }
    o.s = clampOp(o, along - o.w / 2); renderWalls(); renderTips(); schedule3D();
  }
  if (planEl) planEl.addEventListener('pointerdown', e => { const g = e.target.closest('[data-pop]'); if (!g) { if (selOp) { selOp = null; renderWalls(); } return; } startDrag(e, 'plan', { oid: +g.dataset.pop }); e.preventDefault(); });
  function addOp(t) {
    if (P.op.length >= 8) { toast('Mehr als 8 Fenster und Türen passen nicht in den Plan.'); return; }
    const w0 = t === 'tuer' ? 90 : t === 'balkon' ? 120 : 100, kitchen = Object.keys(P.rows), others = ['N', 'E', 'S', 'W'].filter(w => !kitchen.includes(w));
    const order = t === 'fenster' ? ['N', ...kitchen.filter(w => w !== 'N'), ...others] : [...others, ...kitchen];
    for (const wall of order) {
      const L = wallLen(wall), o = { id: uid++, t, wall, w: Math.min(w0, L - 40), s: 0 }, ok = [];
      for (let s0 = 10; s0 <= L - o.w - 10; s0 += 5) {
        if (P.op.some(q => q.wall === wall && s0 + o.w > q.s - 20 && s0 < q.s + q.w + 20)) continue;
        if (P.rows[wall]) { const X = xs(wall); let bad = false; P.rows[wall].forEach((m, i) => { const x = X[i]; if (s0 + o.w > x + 2 && s0 < x + m.w - 2 && (t !== 'fenster' || M[m.t].h === 't' || m.t === 'kf' || m.t === 'ko')) bad = true; }); if (bad) continue; }
        ok.push(s0);
      }
      if (ok.length) { o.s = ok.sort((a, b) => Math.abs(a + o.w / 2 - L / 2) - Math.abs(b + o.w / 2 - L / 2))[0]; P.op.push(o); selOp = o.id; sel = null; change(); toast(`${OPN[t]} eingesetzt – zum Verschieben anfassen.`); return; }
    }
    toast(`Kein freier Platz für ${t === 'tuer' ? 'eine Tür' : t === 'balkon' ? 'eine Balkontür' : 'ein Fenster'} – erst etwas verschieben oder entfernen.`);
  }
  $$('[data-addop]').forEach(b => b.addEventListener('click', () => addOp(b.dataset.addop)));

  /* ---------------- Toast ---------------- */
  const tst = $('[data-kp-toast]'); let tT = 0;
  function toast(msg, und) { tst.classList.remove('kp-ask'); tst.innerHTML = `<span>${msg}</span>${und ? '<button type="button">Rückgängig</button>' : ''}`; placeToast(); tst.hidden = false; tst.classList.add('on'); clearTimeout(tT); tT = setTimeout(() => { tst.classList.remove('on'); }, und ? 5200 : 4200); const b = $('button', tst); if (b) b.onclick = () => { und(); tst.classList.remove('on'); }; }
  // Rückfrage im Toast: nichts passiert, solange nicht „Ja“ getippt wird
  function ask(msg, yes, fn) { tst.classList.add('kp-ask'); tst.innerHTML = `<span>${msg}</span><span class="kp-askb"><button type="button" data-a="1">${yes}</button><button type="button" data-a="0">Nein</button></span>`; placeToast(); tst.hidden = false; tst.classList.add('on'); clearTimeout(tT); tT = setTimeout(() => tst.classList.remove('on'), 9000); $$('[data-a]', tst).forEach(b => b.onclick = () => { tst.classList.remove('on'); if (b.dataset.a === '1') fn(); }); }
  // Handy: Toast unten mittig über den Kamera-Knöpfen der 3D-Bühne (verdeckt nie die „live in 3D“-Pille); sonst über dem Weiter-Knopf
  function placeToast() {
    tst.style.bottom = ''; if (innerWidth >= 1000) return;
    const st = $('.kp-stage'), cams = st && $('.kp-cams', st), r = st && st.getBoundingClientRect(), cr = cams && cams.getBoundingClientRect();
    if (r && cr && cr.top > 110 && cr.bottom < innerHeight - 4) { tst.style.bottom = Math.round(innerHeight - cr.top + 8) + 'px'; return; }
    const nx = $('[data-kpane].on .kp-next'), nr = nx && nx.getBoundingClientRect(); tst.style.bottom = (nr && nr.height && nr.top < innerHeight && nr.top > innerHeight - 140 ? Math.round(innerHeight - nr.top + 10) : 16) + 'px';
  }

  /* ---------------- Tipps (live) ---------------- */
  function tips() {
    const out = [], all = []; for (const w in P.rows) P.rows[w].forEach((m, i) => all.push({ w, i, m }));
    const has = t => all.some(x => x.m.t === t);
    const ok = (t) => out.push(['ok', t]), warn = (t) => { if (!out.some(x => x[1] === t)) out.push(['warn', t]); };
    const isl = P.form === 'insel';
    has('sp') || (isl && P.island.v === 'spuele') ? ok('Spüle') : warn('Noch keine Spüle – einfach reinziehen');
    has('kf') || has('ko') || (isl && P.island.v === 'kochfeld') ? ok('Kochfeld') : warn('Noch kein Kochfeld oder Herd');
    has('kue') ? ok('Kühlschrank') : warn('Noch kein Kühlschrank');
    for (const w in P.rows) { const f = free(w); if (f < -0.5) warn(`${WN[w]} ist ${Math.round(-f)} cm zu lang`); }
    const gs = all.filter(x => x.m.t === 'gs');
    if (gs.length && has('sp')) { const adj = gs.some(g => { const r = P.rows[g.w]; return (r[g.i - 1] && r[g.i - 1].t === 'sp') || (r[g.i + 1] && r[g.i + 1].t === 'sp'); }); adj ? ok('Spülmaschine neben der Spüle') : warn('Spülmaschine gehört direkt neben die Spüle'); }
    for (const w in P.rows) { const r = P.rows[w], a = r.findIndex(x => x.t === 'sp'), b = r.findIndex(x => x.t === 'kf' || x.t === 'ko'); if (a >= 0 && b >= 0) { const [lo, hi] = a < b ? [a, b] : [b, a]; const mid = r.slice(lo + 1, hi); const wd = mid.filter(x => M[x.t].h === 'b').reduce((s, x) => s + x.w, 0); if (mid.some(x => M[x.t].h === 't')) warn('Hochschrank zwischen Spüle und Kochfeld'); else wd >= 60 ? ok(`${wd} cm Arbeitsfläche zum Schnippeln`) : warn(`Nur ${wd} cm Platz zwischen Spüle und Kochfeld – 60 bis 120 cm sind ideal`); } }
    for (const w in P.rows) { const r = P.rows[w]; r.forEach((m, i) => { if (m.t !== 'kf' && m.t !== 'ko') return; const [a, b] = range(w); const L = locate(w, i); const nb = [r[i - 1], r[i + 1]]; if (nb.some(x => x && M[x.t].h === 't') || L.x0 - a < 1 && a === 0 || (i === r.length - 1 && L.x0 + L.w >= b - 1 && b === wallLen(w))) warn('Neben dem Kochfeld etwas Ablage lassen (min. 30 cm)'); }); }
    P.op.forEach(o => { const r = P.rows[o.wall]; if (!r) return; r.forEach((m, i) => { const L = locate(o.wall, i); if (!opOver(o, L.x0, L.w)) return; if (o.t === 'fenster') { if (M[m.t].h === 't' && hOf(m) > 105) warn('Ein Hochschrank steht vor dem Fenster'); } else warn(o.t === 'tuer' ? 'Vor der Tür stehen Schränke – Tür im Grundriss verschieben' : 'Vor der Balkontür stehen Schränke'); }); });
    for (const w in P.rows) upList(w).forEach(u => { const c = upConflict(w, u); if (c === 'tall') warn('Ein Hängeschrank stößt an einen Hochschrank – verschieben oder Hochschrank niedriger'); if (c === 'win') warn('Ein Hängeschrank hängt vor einem Fenster oder einer Tür'); });
    if (!isDD()) for (const w in P.up) { const X = xs(w); P.rows[w] && P.rows[w].forEach((m, i) => { if ((m.t === 'kf' || m.t === 'ko') && !P.up[w].some(u => u.t === 'dh' && ov(u.s, u.w, X[i], m.w))) warn('Über dem Kochfeld fehlt die Dunstabzugshaube'); }); }
    if (P.rows.N && (hasCornerSlot('l') || hasCornerSlot('r'))) { const N = P.rows.N; if ((hasCornerSlot('l') && M[N[0].t].corner) || (hasCornerSlot('r') && M[N[N.length - 1].t].corner)) ok('Ecke clever genutzt'); }
    if (!P.op.some(o => o.t === 'tuer' || o.t === 'balkon')) warn('Noch keine Tür – wie kommt man in die Küche?');
    if (isl && P.room.d < 380) warn('Für eine Insel sollte der Raum mind. 3,80 m tief sein');
    return out;
  }
  function renderTips() {
    const t = tips(), w = t.filter(x => x[0] === 'warn');
    $('[data-kp-tips]').innerHTML = (w.length ? w : [['ok', 'Alles im grünen Bereich – so würde ' + PERSON + ' das auch planen.']]).slice(0, 3).map(([k, s]) => `<li class="${k}"><i>${k === 'ok' ? '✓' : '!'}</i>${s}</li>`).join('');
    $$('[data-kp-score]').forEach(el => { el.textContent = w.length ? `${w.length} Tipp${w.length > 1 ? 's' : ''}` : 'Passt ✓'; el.classList.toggle('ok', !w.length); });
  }

  /* ---------------- 3D ---------------- */
  function toState() {
    const W = P.room.w, D = P.room.d, items = [], open = [], ah = P.ah || 90;
    const pos = (w, along, d) => ({ N: { x: along, z: d / 2, r: 0 }, S: { x: W - along, z: D - d / 2, r: 180 }, W: { x: d / 2, z: D - along, r: 90 }, E: { x: W - d / 2, z: along, r: 270 } })[w];
    const bk = P.style.back || 'wand', withNs = true; // auch ohne Rückwand: unsichtbare Fläche zum Antippen
    for (const w in P.rows) {
      const LY = layout(w), [ra, rb] = range(w), N0 = P.rows.N || [], segs = nsSegs(w), nx0 = segs.length ? segs[0][0] : 0, nx1 = segs.length ? Math.max(...segs.map(q => q[0] + q[1])) : 0;
      // Stoßfuge über Eck: Arbeitsplatte der Seitenwand endet an der Platte der Rückwand (2 cm Überstand), Sockel läuft in die Ecke
      const ekL = N0[0] && N0[0].t === 'ek', ekR = N0.length && N0[N0.length - 1].t === 'ek' && hasCornerSlot('r');
      P.rows[w].forEach((m, i) => {
        const x = LY.X.get(m), cs = cornerSide(w, i), c = M[m.t], sp = spec(m, cs);
        const cutR = w === 'W' && cornerAt(w, 1) && Math.abs(x + m.w - rb) < .6 && !ekL ? 1 : 0, cutL = w === 'E' && cornerAt(w, 0) && Math.abs(x - ra) < .6 && !ekR ? 1 : 0;
        if (axOf(m)) items.push({ t: 'cab', label: 'Aufsatzschrank · ' + axOf(m) + ' cm', kind: 'u', w: m.w, h: axOf(m) - .4, y0: hOf(m) + .4, d: 58, led: false, fr: axFront(m, axOf(m)), ...pos(w, x + m.w / 2, 58) });
        items.push({ t: 'cab', id: m.id, label: label(m, cs), kind: c.h, w: m.w, h: c.h === 't' ? hOf(m) : undefined, ah, ...sp, ...(m.t === 'kf' ? { hob: Math.min(eqv('hobW', 80), m.w) - 2 } : {}), ...(cutL || cutR ? { topCut: [cutL * 2, cutR * 2], plExt: [cutL * 6, cutR * 6] } : {}), ...pos(w, x + m.w / 2, 60) });
      });
      // freier Platz zwischen zwei Ecken: Passblende mit durchlaufender Arbeitsplatte – keine offene Lücke
      { const TR = trims(w), pd = P.style.pfDek || 'front'; TR.pf.forEach(q => { if (q.w >= .8) items.push({ t: 'cab', kind: q.tall ? 't' : 'b', w: q.w, h: q.tall ? q.h : undefined, ah, fr: [{ k: 'blind', p: 1 }], noGrip: 1, eqk: 'pf', eqw: w, dekor: pd, ...pos(w, q.x + q.w / 2, 60) }); });
        TR.wg.forEach(q => items.push({ t: 'wg', wall: w, h: 90 + ah - 90, dekor: P.style.wgDek || 'top', ...pos(w, q.x + 1.25, 62) })); }
      if (withNs) segs.forEach(([x, sw, h]) => items.push({ t: 'ns', wall: w, w: sw, h, ah, nx: x - nx0, nW: nx1 - nx0, ...pos(w, x + sw / 2, 2) }));
      { const cf = upCornerFill(w); if (cf) items.push({ t: 'cab', kind: 'u', w: cf.w, h: cf.h, y0: cf.bottom, fr: [{ k: 'blind', p: 1 }], led: false, ...pos(w, cf.s + cf.w / 2, 35) }); }
      upList(w).forEach(u => {
        if (u.t === 'dh') items.push({ t: 'hb', id: u.id, wall: w, v: eqv('hood', 'schraeg'), w: u.w, ...pos(w, u.s + u.w / 2, 50) });
        else { const { bottom, h } = upY(u); items.push({ t: 'cab', id: u.id, label: label(u), kind: 'u', w: u.w, h, y0: bottom, led: u.t !== 'ho', ...spec(u), ...pos(w, u.s + u.w / 2, 35) }); }
      });
    }
    if (P.form === 'insel') { const z = Math.max(60 + 100 + 50, Math.min(D - 120, 60 + 115 + 50)); items.push({ t: 'in', w: P.island.w, d: 100, v: P.island.v, dekor: P.style.wgDek || 'top', ih: eqv('ihood', 'mulde'), hob: eqv('hobW', 80) - 2, x: W / 2, z, r: 0 }); }
    P.op.forEach(o => open.push(o.t === 'fenster' ? { t: 'fenster', wall: o.wall, s: o.s, w: o.w, y: 105, h: 115 } : o.t === 'balkon' ? { t: 'fenster', wall: o.wall, s: o.s, w: o.w, y: 2, h: 216 } : { t: 'tuer', wall: o.wall, s: o.s, w: o.w }));
    return { room: { w: W, d: D, walls: { N: 1, E: 1, S: 1, W: 1 } }, open, items, motif: bk === 'motiv' ? motif : null, style: { ...P.style, front: P.style.wood ? '#ffffff' : P.style.front, backC: bk === 'glas' || bk === 'dibond' ? backCol() : null, sink: sinkCol(), tap: eqv('tap', 'chrom'), hobDD: isDD() } };
  }
  let K = null, t3 = 0, p3 = null;
  const host3 = $('[data-kp-3d]');
  function schedule3D() { if (t3) return; t3 = setTimeout(() => { t3 = 0; K && K.set(toState()); }, 60); }
  function loadEngine() { return p3 || (p3 = new Promise((res, rej) => { if (window.PelPlanner3D) return res(); const s = document.createElement('script'); s.src = 'js/planner3d.js?v=' + VER; s.onload = res; s.onerror = rej; document.head.appendChild(s); })); }
  let l3 = null;
  function load3D() {
    return l3 || (l3 = loadEngine()
      .then(() => { const l = $('.kp-load', host3); if (l) l.remove(); K = PelPlanner3D(host3, { acc: ACC, onHover: hl2d, onEq: (q, cx, cy) => { const hr = host3.getBoundingClientRect(); openEq({ k: q.k, id: q.id, wall: q.wall, rx: cx - hr.left, ry: cy - hr.top }); }, onPick: (id, on) => { if (on) openNow.add(String(id)); else openNow.delete(String(id)); syncDoors(); if (!pop.hidden) renderPop(); } }); K.set(toState()); syncDoors(); })
      .catch(() => { l3 = null; const l = $('.kp-load', host3); if (l) l.textContent = '3D-Ansicht konnte nicht geladen werden.'; }));
  }
  // Hover-Kopplung: Wandansicht ↔ 3D (Maus)
  function hl2d(id) { $$('.hl3', wallsEl).forEach(x => x.classList.remove('hl3')); if (id == null) return; const g = $(`[data-m="${id}"],[data-u="${id}"]`, wallsEl); if (g) g.classList.add('hl3'); }
  let hov3 = null; const hover3 = id => { if (id === hov3) return; hov3 = id; if (K && K.highlight) K.highlight(id); };
  wallsEl.addEventListener('pointerover', e => { if (e.pointerType !== 'mouse' || drag) return; const g = e.target.closest('[data-m],[data-u]'); hover3(g ? (g.dataset.m || g.dataset.u) : null); });
  wallsEl.addEventListener('pointerleave', () => hover3(null));
  let night = false;
  $$('[data-mood]').forEach(b => b.addEventListener('click', () => { night = !night; $$('[data-mood]').forEach(x => { x.classList.toggle('on', night); x.setAttribute('aria-pressed', night); x.innerHTML = night ? '☀︎ Tag' : '☾ Abend'; }); root.classList.toggle('kp-night', night); K && K.mood && K.mood(night ? 'abend' : 'tag', toState()); }));
  $$('[data-cam]').forEach(b => b.addEventListener('click', () => { $$('[data-cam]').forEach(x => x.classList.toggle('on', x === b)); K && K.view(b.dataset.cam); }));
  function syncDoors() { const on = !!(K && K.isAllOpen()); $$('[data-kp-doors]').forEach(b => { b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); const sp = $('span', b); if (sp) sp.textContent = on ? 'Türen schließen' : 'Türen öffnen'; }); }
  $$('[data-kp-doors]').forEach(b => b.addEventListener('click', () => { if (!K) return; const on = K.openAll(!K.isAllOpen()); openNow.clear(); syncDoors(); if (!pop.hidden) renderPop(); toast(on ? 'Alle Türen, Klappen und Auszüge sind offen – einzelne Schränke in 3D antippen.' : 'Alles wieder zu.'); }));

  /* ---------------- Verlauf / Link ---------------- */
  const hist = [];
  const opt = m => { const o = {}; if (m.h && M[m.t].hs && m.h !== HDEF(m.t)) o.h = m.h; if (m.a) o.a = m.a; if (m.ax) o.ax = m.ax; return Object.keys(o).length ? o : null; };
  const ser = () => { const o = { f: P.form, r: P.room, rw: Object.fromEntries(Object.entries(P.rows).map(([k, v]) => [k, v.map(m => { const q = opt(m); return q ? [m.t, m.w, q] : [m.t, m.w]; })])), tp: P.top, op: P.op.map(o2 => [o2.t, o2.wall, o2.s, o2.w]), is: P.island, s: P.style, ah: P.ah || 90 }; const up = Object.entries(P.up || {}); if (up.length) o.up = Object.fromEntries(up.map(([k, v]) => [k, v.map(u => { const q = opt(u); return q ? [u.t, u.s, u.w, q] : [u.t, u.s, u.w]; })])); return JSON.stringify(o); };
  function des(j) {
    const o = JSON.parse(j); P = { form: FORMS[o.f] ? o.f : 'l', room: o.r, rows: {}, up: {}, top: o.tp || {}, op: [], island: o.is || { w: 180, v: 'kochfeld' }, style: o.s, ah: o.ah || 90 };
    for (const k in o.rw) P.rows[k] = o.rw[k].filter(([t]) => M[t]).map(([t, w, q]) => mk(t, w, q));
    if (o.up) for (const k in o.up) if (P.rows[k]) P.up[k] = o.up[k].filter(([t]) => M[t] && isUp(t)).map(([t, s, w, q]) => { const u = mk(t, w, q); u.s = s; return u; });
    sel = null; selOp = null;
    if (o.op) P.op = o.op.map(([t, wall, s, w]) => ({ id: uid++, t, wall, s, w }));
    else { if (o.wi) P.op.push({ id: uid++, t: 'fenster', wall: o.wi.wall, s: o.wi.s, w: o.wi.w }); P.op.push(defaultDoor()); } // ältere Links
  }
  const b64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unb64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
  let lastHash = '';
  function change(noHist) {
    const dropped = normCorners(); if (dropped.length) toast('Eckschränke passen nur in die Ecken einer L- oder U-Küche.');
    const filled = fillCorners(); if (filled.length && !dropped.length) toast('Die Ecke bleibt nicht offen: Blindeckschrank eingesetzt – in „Ecke“ können Sie Karussell oder Le-Mans wählen.');
    const goneUp = followHoods(); linkHoods(); if (goneUp) toast(`Die Haube ist mit dem Kochfeld mitgewandert – ${goneUp > 1 ? goneUp + ' Hängeschränke hatten' : 'ein Hängeschrank hatte'} daneben keinen Platz mehr.`, undo);
    const j = ser(); if (!noHist && hist[hist.length - 1] !== j) { hist.push(j); if (hist.length > 60) hist.shift(); }
    lastHash = '#k=' + b64(j); history.replaceState(null, '', lastHash);
    renderWalls(); renderTips(); syncUI(); schedule3D(); $$('[data-undo]').forEach(b => b.disabled = hist.length < 2);
  }
  function undo() { if (hist.length < 2) return; hist.pop(); des(hist[hist.length - 1]); change(true); }
  $$('[data-undo]').forEach(b => b.addEventListener('click', undo));
  function fromHash() {
    let h = location.hash.slice(1); if (!h && /[?&]gesendet=1/.test(location.search)) { try { h = (sessionStorage.getItem('kp-last') || '').slice(1); } catch (er) { } } if (!h) return false;
    try {
      if (h.startsWith('k=')) { des(unb64(h.slice(2))); return true; }
      const p = h.split('|'); const fm = { zeile: 'zeile', zwei: 'zwei', l: 'l', u: 'u', insel: 'insel', theke: 'l' }[p[0]];
      if (fm) { fresh(fm); if (p[1]) { P.style.front = '#' + p[1]; } if (p[3] && TOPS.some(t => t[0] === p[3])) P.style.top = p[3]; if (p[4]) P.style.handle = p[4]; P.style.wood = p[5] || null; if (p[2]) P.style.finish = p[2]; return true; }
    } catch (e) { }
    return false;
  }

  /* ---------------- Schritte & Bedienfelder ---------------- */
  const steps = $$('[data-kstep]'), panes = $$('[data-kpane]');
  function go(i) { steps.forEach((b, j) => { b.classList.toggle('on', j === i); b.classList.toggle('done', j < i); }); panes.forEach((p, j) => p.classList.toggle('on', j === i)); root.dataset.step = i; if (innerWidth < 1000) { const t = i === 3 ? $('[data-kpane].on') : $('.kp-stage'); if (t && i !== 1) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); } renderPop(); }
  steps.forEach((b, i) => b.addEventListener('click', () => go(i)));
  $$('[data-kgo]').forEach(b => b.addEventListener('click', () => go(+b.dataset.kgo)));
  root.addEventListener('click', e => { const b = e.target.closest('[data-kp-lookinfo] [data-kgo]'); if (b) go(+b.dataset.kgo); });
  $('[data-kp-forms]').innerHTML = Object.entries(FORMS).map(([k, f]) => `<button type="button" data-form="${k}"><svg viewBox="0 0 64 46" aria-hidden="true"><rect x="2" y="2" width="60" height="42" rx="3" fill="none" stroke="currentColor" stroke-opacity=".25"/><path d="${f.p}"/></svg><b>${f.n}</b><small>${f.d}</small></button>`).join('');
  $('[data-kp-forms]').addEventListener('click', e => { const b = e.target.closest('[data-form]'); if (!b) return; const st = P.style, room = { ...P.room }; fresh(b.dataset.form, { style: st, room }); sel = null; change(); K && K.view('perspektive'); });
  const rw = $('[data-kp-rw]'), rd = $('[data-kp-rd]');
  function roomIn() { P.room.w = +rw.value; P.room.d = +rd.value; for (const w in P.rows) makeRoomQuiet(w); for (const w in P.up) { const L = wallLen(w); P.up[w] = P.up[w].filter(u => u.w <= L); P.up[w].forEach(u => { u.s = Math.max(0, Math.min(L - u.w, u.s)); }); } P.op.forEach(o => { if (o.w > wallLen(o.wall) - 20) o.w = OPW[o.t].filter(v => v <= wallLen(o.wall) - 20).pop() || o.w; o.s = clampOp(o, o.s); }); followHoods(); syncRoomOut(); renderWalls(); renderTips(); schedule3D(); }
  function makeRoomQuiet(w) { let over = -free(w); if (over <= 0) { fillGap(w); return; } const R = [...P.rows[w]].reverse().filter(x => x.t === 'us'); for (const x of R) { if (over <= 0.5) break; const fit = M.us.ws.filter(v => v <= x.w - over).pop(); if (fit) { over -= x.w - fit; x.w = fit; } else { over -= x.w; P.rows[w] = P.rows[w].filter(y => y !== x); } } }
  function fillGap(w) { const f = free(w); if (f >= 30) { const last = [...P.rows[w]].reverse().find(x => x.t === 'us'); const grow = last && M.us.ws.filter(v => v <= last.w + f).pop(); if (last && grow > last.w) last.w = grow; else fillRest(w); } }
  [rw, rd].forEach(el => { el.addEventListener('input', roomIn); el.addEventListener('change', () => change()); });
  const ahIn = $('[data-kp-ah]');
  if (ahIn) { ahIn.addEventListener('input', () => { P.ah = +ahIn.value; $('[data-kp-aho]').textContent = P.ah + ' cm'; renderWalls(); schedule3D(); }); ahIn.addEventListener('change', () => change()); }
  function syncRoomOut() { if (ahIn) { ahIn.value = P.ah || 90; $('[data-kp-aho]').textContent = (P.ah || 90) + ' cm'; } $('[data-kp-rwo]').textContent = (P.room.w / 100).toFixed(2).replace('.', ',') + ' m'; $('[data-kp-rdo]').textContent = (P.room.d / 100).toFixed(2).replace('.', ',') + ' m'; }
  const anyTop = () => Object.values(P.top).some(Boolean) || Object.values(P.up || {}).some(l => l.some(u => u.t !== 'dh'));
  $$('[data-kp-top]').forEach(b => b.addEventListener('click', () => { const on = !anyTop(); const had = Object.keys(P.up).length; for (const k in P.top) P.top[k] = on ? 1 : 0; P.up = {}; change(); if (had) toast(on ? 'Hängeschränke wieder automatisch über allen Unterschränken.' : 'Alle Hängeschränke entfernt.', undo); }));
  // Stil
  $('[data-kp-fronts]').innerHTML = FRONTS.map(([n, c]) => `<button type="button" class="kp-sw" data-front="${c}" style="--c:${c.startsWith('wood') ? WOOD[c.slice(5)] : c}"><i></i><span>${n}</span></button>`).join('');
  $('[data-kp-handles]').innerHTML = HANDLES.map(([k, n]) => `<button type="button" data-handle="${k}"><svg viewBox="0 0 40 26" aria-hidden="true"><rect x="1" y="1" width="38" height="24" rx="2" fill="#e9e4dc" stroke="#cfc6b9"/>${k === 'grifflos' ? '<rect x="1" y="1" width="38" height="3" fill="#8b8379"/>' : k === 'knopf' ? `<circle cx="20" cy="7.4" r="2.4" fill="${HCOL[k]}" stroke="rgba(0,0,0,.25)" stroke-width=".4"/>` : `<rect x="12" y="6" width="16" height="2.4" rx="1.2" fill="${HCOL[k]}"/>`}</svg>${n}</button>`).join('');
  const sw = (s2, html) => { const el = $(s2); if (el) el.innerHTML = html; };
  sw('[data-kp-finish]', FINISHES.map(([k, n]) => `<button type="button" data-finish="${k}">${n}</button>`).join(''));
  sw('[data-kp-fstyle]', FSTY.map(([k, n]) => `<button type="button" data-fstyle="${k}">${n}</button>`).join(''));
  function lookSvg(st) {
    const F = st.wood ? WOOD[st.wood] : st.front, T = TOPS.find(t => t[0] === st.top)[2], Fl = (FLOORS.find(f => f[0] === st.floor) || FLOORS[0])[2], str = lum(F) > .5 ? 'rgba(0,0,0,.22)' : 'rgba(255,255,255,.18)';
    const fr = (x, y, w, h, hb) => { let r = `<rect x="${x + .3}" y="${y + .3}" width="${w - .6}" height="${h - .6}" rx=".6" fill="${F}" stroke="${str}" stroke-width=".4"/>`; if (st.frame) r += `<rect x="${x + 2.2}" y="${y + 2.2}" width="${w - 4.4}" height="${h - 4.4}" rx=".4" fill="none" stroke="${str}" stroke-width=".5"/>`; r += st.handle === 'grifflos' ? `<rect x="${x + .4}" y="${hb ? y + h - 1.4 : y + .4}" width="${w - .8}" height="1" fill="${shade(F, -.35)}"/>` : st.handle === 'knopf' ? `<circle cx="${x + w / 2}" cy="${hb ? y + h - 2.8 : y + 3}" r="1" fill="${HCOL.knopf}"/>` : `<rect x="${x + w / 2 - 3.5}" y="${hb ? y + h - 3.4 : y + 2.4}" width="7" height="1.1" rx=".5" fill="${HCOL[st.handle]}"/>`; return r; };
    let s = `<rect width="120" height="72" fill="${st.wall}"/><rect y="64" width="120" height="8" fill="${Fl}"/><rect x="54" y="7" width="12" height="20" rx="1" fill="#cfe4f3" stroke="#fff" stroke-width="1"/>`;
    if (st.back && st.back !== 'wand') s += `<rect x="6" y="31" width="108" height="9" fill="${st.back === 'platte' ? T : st.back === 'fliese' ? '#ece8e1' : shade(F, -.1)}"/>`;
    [[6, 23], [29, 23], [74, 20], [94, 20]].forEach(([x, w]) => s += fr(x, 6, w, 21, 1));
    s += `<rect x="5" y="40" width="110" height="3" fill="${T}"/>`;
    [[6, 27], [33, 27], [60, 27], [87, 27]].forEach(([x, w], i) => { s += i === 2 ? fr(x, 43, w, 19) : fr(x, 43, w, 6) + fr(x, 49, w, 6.5) + fr(x, 55.5, w, 6.5); });
    return s + `<rect x="5" y="62" width="110" height="2" fill="#2b2b2b"/>`;
  }
  sw('[data-kp-looks]', LOOKS.map(([k, n, d, st]) => `<button type="button" class="kp-look" data-look="${k}" aria-pressed="false"><svg viewBox="0 0 120 72" aria-hidden="true">${lookSvg(st)}</svg><b>${n}</b><small>${d}</small></button>`).join(''));
  // weicher Übergang beim Stilwechsel: altes 3D-Bild blendet aus, Wandansicht blendet ein
  function xfade() {
    if (RMO) return;
    try { if (K && K.snapshot) { $$('.kp-xf', host3).forEach(x => x.remove()); const im = new Image(); im.className = 'kp-xf'; im.alt = ''; im.src = K.snapshot(); host3.appendChild(im); setTimeout(() => { im.classList.add('out'); setTimeout(() => im.remove(), 800); }, 160); } } catch (e) { }
    requestAnimationFrame(() => { if (wallsEl.animate) wallsEl.animate([{ opacity: .35, filter: 'blur(1.5px)' }, { opacity: 1, filter: 'none' }], { duration: 520, easing: 'ease-out' }); });
  }
  (function () { const bk = $('[data-kp-backs]'); if (bk) { bk.classList.remove('kp-sws'); bk.classList.add('kp-eq3'); if (!$('[data-kp-eq3]')) bk.insertAdjacentHTML('afterend', '<p class="kp-l">Spüle, Kochfeld & Haube</p><div class="kp-eq3" data-kp-eq3></div>'); } })();
  function renderEq3() {
    const bk = $('[data-kp-backs]'); if (bk) bk.innerHTML = eqRows('bs', null, 1);
    const e3 = $('[data-kp-eq3]'); if (!e3) return; const q = eqData();
    let h = ''; if (q.spuele) h += eqRows('sp', null, 1); if (Object.values(P.rows).flat().some(m => m.t === 'kf' || m.t === 'ko')) h += eqRows('kf', null, 1); if (q.dunstabzug && !isDD()) h += eqRows('dh', null, 1); if (q.inselAbzug) h += eqRows('isl', null, 1);
    e3.innerHTML = h || '<p class="kp-p sm">Noch keine Spüle und kein Kochfeld geplant – in Schritt 2 hineinziehen.</p>';
  }
  sw('[data-kp-wallc]', WALLC.map(([n, c]) => `<button type="button" class="kp-sw" data-wallc="${c}" style="--c:${c}"><i></i><span>${n}</span></button>`).join(''));
  sw('[data-kp-floors]', FLOORS.map(([k, n, c]) => `<button type="button" class="kp-sw" data-floor="${k}" style="--c:${c}"><i></i><span>${n}</span></button>`).join(''));
  $('[data-kp-tops]').innerHTML = TOPS.map(([k, n, c]) => `<button type="button" class="kp-sw" data-top="${k}" style="--c:${c}"><i></i><span>${n}</span></button>`).join('');
  root.addEventListener('click', e => {
    const f = e.target.closest('[data-front]'), h = e.target.closest('[data-handle]'), t = e.target.closest('[data-top]'), st = e.target.closest('[data-style]');
    const fi = e.target.closest('[data-finish]'), bk = e.target.closest('[data-back]'), wc = e.target.closest('[data-wallc]'), fl = e.target.closest('[data-floor]'), fs = e.target.closest('[data-fstyle]'), lk = e.target.closest('[data-look]');
    if (lk) { const L = LOOKS.find(x => x[0] === lk.dataset.look); if (!L) return; xfade(); Object.assign(P.style, L[3], { look: L[0] }); change(); renderPal(); toast(`Stil „${L[1]}“ übernommen – in Schritt 3 können Sie alles fein anpassen.`); return; }
    if (fs) { xfade(); P.style.frame = +fs.dataset.fstyle; change(); renderPal(); return; }
    if (fi || bk || wc || fl) { xfade(); if (fi) P.style.finish = fi.dataset.finish; if (bk) P.style.back = bk.dataset.back; if (wc) P.style.wall = wc.dataset.wallc; if (fl) P.style.floor = fl.dataset.floor; change(); return; }
    if (f) { const v = f.dataset.front; if (v.startsWith('wood:')) P.style.wood = v.slice(5); else { P.style.front = v; P.style.wood = null; } }
    else if (h) P.style.handle = h.dataset.handle; else if (t) P.style.top = t.dataset.top;
    else if (st) { const S = STY[st.dataset.style]; Object.assign(P.style, S); }
    else return;
    xfade(); change(); renderPal();
  });
  const STY = { hell: { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche' }, dunkel: { front: '#232426', wood: null, handle: 'grifflos', top: 'eiche' }, natur: { front: '#d9cfbf', wood: null, handle: 'gold', top: 'keramik' }, holz: { wood: 'eiche', handle: 'schwarz', top: 'marmor' }, farbe: { front: '#7f8e77', wood: null, handle: 'gold', top: 'keramik' }, blau: { front: '#22304a', wood: null, handle: 'gold', top: 'keramik' } };
  function syncUI() {
    const s = P.style;
    $$('[data-front]').forEach(b => b.classList.toggle('on', s.wood ? b.dataset.front === 'wood:' + s.wood : b.dataset.front === s.front));
    $$('[data-handle]').forEach(b => b.classList.toggle('on', b.dataset.handle === s.handle));
    $$('[data-top]').forEach(b => b.classList.toggle('on', b.dataset.top === s.top));
    $$('[data-finish]').forEach(b => b.classList.toggle('on', b.dataset.finish === (s.finish || 'matt')));
    $$('[data-fstyle]').forEach(b => b.classList.toggle('on', b.dataset.fstyle === String(s.frame ? 1 : 0)));
    $$('[data-look]').forEach(b => { const on = b.dataset.look === s.look; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    const LK = LOOKS.find(x => x[0] === s.look);
    $$('[data-kp-lookinfo]').forEach(el => { el.innerHTML = LK ? `Ausgangsstil: <b>${LK[1]}</b> – hier alle Details anpassen. <button type="button" data-kgo="0">Stil ändern</button>` : `Tipp: In Schritt 1 einen fertigen Stil wählen – oder hier alles einzeln einstellen. <button type="button" data-kgo="0">Stile ansehen</button>`; });
    renderEq3();
    $$('[data-wallc]').forEach(b => b.classList.toggle('on', b.dataset.wallc === (s.wall || '#f3efe9')));
    $$('[data-floor]').forEach(b => b.classList.toggle('on', b.dataset.floor === (s.floor || 'eiche')));
    $$('.kp-bk').forEach(i => { i.style.setProperty('--tc', topCol()); i.style.setProperty('--fc', s.wood ? '#2a2420' : s.front); });
    $$('[data-form]').forEach(b => b.classList.toggle('on', b.dataset.form === P.form));
    $$('[data-kp-top]').forEach(b => { const on = anyTop(); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    rw.value = P.room.w; rd.value = P.room.d; syncRoomOut();
    const n = Object.values(P.rows).reduce((a, r) => a + r.length, 0) + Object.keys(P.rows).reduce((a, w) => a + upList(w).length, 0) + (P.form === 'insel' ? 1 : 0);
    $$('[data-kp-count]').forEach(el => el.textContent = n + ' Elemente');
    try { syncAttach(); } catch (e) { }
  }

  /* ---------------- Senden ---------------- */
  function descr(m, cs, up) {
    const c = M[m.t], hng = hasHinge(m) ? `, Tür öffnet nach ${aOf(m, cs) === 'l' ? 'links' : 'rechts'}` : '';
    if (up) return m.t === 'dh' ? `Dunstabzug ${nm(HOODS, eqv('hood', 'schraeg'))} ${m.w} cm breit (ab ${Math.round(m.s)} cm)` : `${c.n} ${variant(m).replace(/ öffnet nach (links|rechts)/, '')} ${m.w} × ${hOf(m)} cm${hng} (ab ${Math.round(m.s)} cm)`;
    if (c.h === 't') return `${c.n} (${c.s}) ${m.w} × ${hOf(m)} cm${hng}${axOf(m) ? ` + Aufsatzschrank ${axOf(m)} cm (gesamt ${hOf(m) + axOf(m)} cm)` : ''}`;
    if (c.corner) return `${c.n} ${c.s} ${m.w} cm in der ${cs === 'r' ? 'rechten' : 'linken'} Ecke${hng}`;
    if (c.n === 'Unterschrank') return `Unterschrank ${variant(m).replace(/ öffnet nach (links|rechts)/, '')} ${m.w} cm${hng}`;
    return `${c.n} ${m.w} cm`;
  }
  function planData() {
    const W = P.room.w, D = P.room.d, ah = P.ah || 90, OPH = { fenster: [105, 115], balkon: [2, 216], tuer: [0, 205] };
    const opOf = o => ({ id: o.id, typ: o.t, name: OPN[o.t], wand: o.wall, abWand: o.s, breite: o.w, bruestung: OPH[o.t][0], hoehe: OPH[o.t][1] });
    const waende = ['N', 'E', 'S', 'W'].map(w => {
      const L = wallLen(w), rowsW = P.rows[w], o = { wand: w, name: WN[w], laenge: L, kueche: !!rowsW, oeffnungen: P.op.filter(q => q.wall === w).map(opOf) };
      if (!rowsW) return o;
      const [a, b] = range(w), X = xs(w), LY = layout(w);
      o.nutzbarVon = a; o.nutzbarBis = b; o.frei = Math.round(free(w)); if (LY.fr > .5) o.freiAb = Math.round(LY.gx);
      { const TR = trims(w); o.passstuecke = TR.pf.map(q => ({ name: 'Passstück', abWand: Math.round(q.x), breite: Math.round(q.w), hoehe: q.tall ? q.h : ah, dekor: (P.style.pfDek || 'front') === 'top' ? 'Arbeitsplatte' : 'Frontfarbe' })); o.wangen = TR.wg.map(q => ({ name: 'Seitenwange', seite: q.side, abWand: Math.round(q.x), breite: 2.5, hoehe: ah, tiefe: 62, dekor: (P.style.wgDek || 'top') === 'top' ? 'Arbeitsplatte' : 'Frontfarbe' })); }
      o.unten = rowsW.map((m, i) => { const cs = cornerSide(w, i), c = M[m.t], tall = c.h === 't', r = { id: m.id, typ: m.t, name: c.n, variante: variant(m, cs), art: tall ? 'hoch' : 'unter', breite: m.w, hoehe: tall ? hOf(m) : ah, ...(tall && axOf(m) ? { aufsatz: axOf(m), gesamthoehe: hOf(m) + axOf(m) } : {}), tiefe: 60, abWand: X[i], ecke: cs || null, tuerAnschlag: hasHinge(m, cs) ? (aOf(m, cs) === 'l' ? 'links' : 'rechts') : null }; return r; });
      o.oben = [...upList(w)].sort((p, q) => p.s - q.s).map(u => u.t === 'dh' ? { id: u.id, typ: 'dh', name: 'Dunstabzug', variante: nm(HOODS, eqv('hood', 'schraeg')), art: 'haube', breite: u.w, hoehe: 108, tiefe: 50, abWand: Math.round(u.s), unterkante: 152 } : { id: u.id, typ: u.t, name: M[u.t].n, variante: variant(u), art: 'haenge', breite: u.w, hoehe: hOf(u), tiefe: 35, abWand: Math.round(u.s), unterkante: upY(u).bottom, oberkante: upY(u).bottom + hOf(u), tuerAnschlag: hasHinge(u) ? (aOf(u) === 'l' ? 'links' : 'rechts') : null, automatisch: !!u.auto });
      return o;
    });
    const LK = LOOKS.find(x => x[0] === P.style.look);
    return {
      einheit: 'cm', hinweis: 'abWand = Abstand von der linken Wandkante, Blick von innen auf die Wand. Wände: N = Rückwand, W = links, E = rechts, S = gegenüber.',
      form: P.form, formName: FORMS[P.form].n, raum: { breite: W, tiefe: D, hoehe: H },
      arbeitshoehe: ah, sockel: 10 + ah - 90, arbeitsplatte: 4, waende, oeffnungen: P.op.map(opOf),
      insel: P.form === 'insel' ? { breite: P.island.w, tiefe: 100, hoehe: 90, variante: P.island.v, mitteX: W / 2, mitteZ: Math.max(210, Math.min(D - 120, 225)) } : null,
      stil: { ...P.style, ausgangsstil: LK ? LK[1] : null, front: (FRONTS.find(f => P.style.wood ? f[1] === 'wood:' + P.style.wood : f[1] === P.style.front) || [P.style.front])[0], griffe: (HANDLES.find(h => h[0] === P.style.handle) || ['', ''])[1], arbeitsplatteName: (TOPS.find(t => t[0] === P.style.top) || ['', ''])[1] },
      ausstattung: eqData(),
      zusammenfassung: summary(),
    };
  }
  function backName(att) {
    const b = P.style.back || 'wand', cn = (BACKC.find(c => c[1] === (P.style.backC || '')) || ['eigene Farbe'])[0];
    const mt = !motif ? 'Glas bedruckt mit eigenem Motiv (Foto noch nicht gewählt)' : att ? 'Glas bedruckt mit eigenem Motiv (Motiv-Foto hängt an: „Rueckwand-Motiv“)' : 'Glas bedruckt mit eigenem Motiv (Foto bitte separat mitschicken)';
    const t = { wand: 'keine (Wandfarbe)', glas: `Glas ${cn} glänzend`, dibond: `Dibond ${cn} matt`, holz: `Holz ${nm(BACKW, P.style.backWood || 'eiche')}`, fliese: 'Metro-Fliesen', platte: 'Stein wie Arbeitsplatte', motiv: mt }[b] || b;
    return t + (P.style.backLed ? ', mit LED beleuchtet' : '');
  }
  function eqData() {
    const all = Object.values(P.rows).flat(), sp = all.some(m => m.t === 'sp') || (P.form === 'insel' && P.island.v === 'spuele'), wh = all.some(m => m.t === 'kf' || m.t === 'ko'), ih = P.form === 'insel' && P.island.v === 'kochfeld';
    return { spuele: sp ? nm(SINKS, eqv('sink', 'edel')) : null, armatur: sp ? nm(TAPS, eqv('tap', 'chrom')) : null, kochfeldBreite: wh || ih ? eqv('hobW', 80) : null, kochfeldArt: wh ? (isDD() ? 'mit Muldenlüfter' : 'normal') : null, dunstabzug: wh ? (isDD() ? 'Muldenlüfter im Kochfeld' : nm(HOODS, eqv('hood', 'schraeg'))) : null, inselAbzug: ih ? nm(IHOODS, eqv('ihood', 'mulde')) : null, rueckwand: backName(), rueckwandTyp: P.style.back || 'wand', rueckwandBeleuchtet: !!P.style.backLed, eigenesMotiv: (P.style.back === 'motiv') };
  }
  function summary(motAtt) {
    const s = P.style, fr = FRONTS.find(f => s.wood ? f[1] === 'wood:' + s.wood : f[1] === s.front);
    const L = [`Form: ${FORMS[P.form].n} · Raum ${P.room.w} × ${P.room.d} cm`];
    for (const w in P.rows) {
      { const TR = trims(w); L.push(`${WN[w]} unten: ` + ([...P.rows[w].map((m, i) => descr(m, cornerSide(w, i))), ...TR.pf.map(q => `Passstück ${Math.round(q.w)} cm ${q.where}${q.tall ? ' (hoch)' : ''}`), ...TR.wg.map(q => `Seitenwange ${q.side} (${(P.style.wgDek || 'top') === 'top' ? 'Arbeitsplattendekor' : 'Frontfarbe'})`)].join(' · ') || '–')); }
      const ups = upList(w); L.push(`${WN[w]} oben${P.up[w] ? '' : ' (automatisch)'}: ` + (ups.length ? [...ups].sort((a, b) => a.s - b.s).map(u => descr(u, null, true)).join(' · ') : 'keine Hängeschränke'));
    }
    if (P.form === 'insel') L.push(`Insel: ${P.island.w} cm, ${({ kochfeld: 'mit Kochfeld', spuele: 'mit Spüle', frei: 'freie Arbeitsfläche' })[P.island.v]}`);
    L.push(`Arbeitshöhe: ${P.ah || 90} cm`);
    if (P.op.length) L.push('Fenster & Türen: ' + P.op.map(o => `${OPN[o.t]} ${o.w} cm (${WN[o.wall]}, ab ${o.s} cm)`).join(' · '));
    L.push(`Fronten: ${fr ? fr[0] : s.front} · Griffe: ${HANDLES.find(h => h[0] === s.handle)[1]} · Arbeitsplatte: ${TOPS.find(t => t[0] === s.top)[1]} · Hängeschränke: ${Object.keys(P.up).length ? 'individuell geplant' : anyTop() ? 'automatisch' : 'keine'}`);
    const LK = LOOKS.find(x => x[0] === s.look); if (LK) L.push(`Ausgangsstil: ${LK[1]}`);
    { const q = eqData(), A = []; if (q.spuele) A.push(`Spüle ${q.spuele}`, `Armatur ${q.armatur}`); if (q.kochfeldBreite) A.push(`Kochfeld ${q.kochfeldBreite} cm${q.kochfeldArt === 'mit Muldenlüfter' ? ' mit Muldenlüfter' : ''}`); if (q.dunstabzug && q.kochfeldArt !== 'mit Muldenlüfter') A.push(`Dunstabzug: ${q.dunstabzug}`); if (q.inselAbzug) A.push(`Abzug an der Insel: ${q.inselAbzug}`); if (A.length) L.push('Ausstattung: ' + A.join(' · ')); }
    L.push(`Frontart: ${s.frame ? 'Rahmenfront (Landhaus)' : 'glatt'} · Oberfläche: ${(FINISHES.find(f => f[0] === (s.finish || 'matt')) || FINISHES[0])[1]} · Küchenrückwand: ${backName(motAtt)} · Wand: ${(WALLC.find(c => c[1] === s.wall) || ['eigene Farbe'])[0]} · Boden: ${(FLOORS.find(f => f[0] === s.floor) || FLOORS[0])[1]}`);
    if (attach) L.push('Raumfoto: eigenes Foto mit eingesetzter Küche angehängt (Vorher und Nachher).');
    const w = tips().filter(x => x[0] === 'warn').map(x => x[1]); if (w.length) L.push('Hinweise: ' + w.join('; '));
    return L.join('\n');
  }
  function elevImg(w) { return new Promise(res => { const L = wallLen(w); const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 ${VB0} ${L + 8} ${H - VB0 + 22}" width="${(L + 8) * 2}" height="${(H - VB0 + 22) * 2}">${DEFS}${drawWall(w, {})}</svg>`; const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }); }
  async function composite() {
    const c = document.createElement('canvas'); c.width = 1800; c.height = 1100; const g = c.getContext('2d');
    g.fillStyle = '#f7f3ec'; g.fillRect(0, 0, 1800, 1100);
    if (K) { const im = await new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = K.snapshot(); }); const s = Math.max(640 / im.height, 1800 / im.width); g.save(); g.beginPath(); g.rect(0, 0, 1800, 640); g.clip(); g.drawImage(im, (1800 - im.width * s) / 2, (640 - im.height * s) / 2, im.width * s, im.height * s); g.restore(); }
    const ws = Object.keys(P.rows); const imgs = await Promise.all(ws.map(elevImg)); let x = 40; const tot = ws.reduce((a, w) => a + wallLen(w) + 8, 0), sc = Math.min(1.25, (1720 - 30 * (ws.length - 1)) / tot);
    imgs.forEach((im, i) => { if (!im) return; const w = (wallLen(ws[i]) + 8) * sc, h = (H - VB0 + 22) * sc; g.drawImage(im, x, 1070 - h, w, h); x += w + 30; });
    g.fillStyle = 'rgba(20,18,16,.72)'; g.fillRect(0, 0, 1800, 84); g.fillStyle = '#fff'; g.font = '600 34px Georgia, serif'; g.fillText('Mein Küchenentwurf', 40, 54); g.font = '19px system-ui, sans-serif'; if (LOGO && LOGO.naturalWidth) { const lh = 70, lw = lh * LOGO.naturalWidth / LOGO.naturalHeight; g.drawImage(LOGO, 1800 - lw - 30, 7, lw, lh); } else g.fillText(STUDIO, 420, 54);
    return c;
  }
  $$('[data-ksend]').forEach(b => b.addEventListener('click', async () => {
    const k = b.dataset.ksend, name = ($('[name="Name"]') || {}).value || '';
    const link = location.href.split('#')[0] + lastHash;
    const text = `${GREET},\n\nich habe meine Küche online geplant:\n\n${summary()}\n\nEntwurf ansehen: ${link}${name ? '\n\n' + name : ''}`;
    if (k === 'wa') window.open(WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    if (k === 'img') { const c = await composite(); const a = document.createElement('a'); a.download = 'mein-kuechenentwurf.jpg'; a.href = c.toDataURL('image/jpeg', .9); a.click(); }
    if (k === 'link') { try { await navigator.clipboard.writeText(link); b.textContent = 'Link kopiert ✓'; } catch (e) { prompt('Link zum Entwurf:', link); } }
  }));
  // Raumfoto als Anhang (kommt aus der Foto-Projektion)
  let attach = null; // {files: [File, File], thumb: dataURL}
  function syncAttach() {
    const mot = motifToSend(); $$('[data-kp-motatt]').forEach(el => { el.hidden = !mot; }); $$('[data-kp-motimg]').forEach(im => { if (mot && im.getAttribute('src') !== mot._url) im.src = mot._url; });
    $$('[data-kpf-att]').forEach(el => { el.hidden = !attach; }); $$('[data-kpf-thumb]').forEach(im => { if (attach) im.src = attach.thumb; });
    $$('[data-kpf-cta]').forEach(el => { el.textContent = attach ? 'Raumfoto ändern' : 'Raumfoto hochladen'; });
  }
  $$('[data-kpf-drop]').forEach(b => b.addEventListener('click', () => { attach = null; syncAttach(); toast('Raumfoto wird nicht mitgeschickt.'); }));
  $$('[data-kp-motdrop]').forEach(b => b.addEventListener('click', () => { motSend = false; syncAttach(); toast('Das Motiv-Foto wird nicht mitgeschickt – im Entwurf steht trotzdem „eigenes Motiv“.'); }));
  const form = $('[data-kp-form]');
  if (form) {
    const b0 = $('[type="submit"]', form);
    form.addEventListener('submit', async e => {
      const fi = $('[data-files]', form), files = fi ? fi.files : []; let total = 0; for (const f of files) total += f.size; if (attach) attach.files.forEach(f => total += f.size);
      const mot = motifToSend(); if (mot) total += Math.round((mot._url || '').length * .75);
      if (total > 9.5e6) { e.preventDefault(); $('[data-form-msg]', form).textContent = 'Die Dateien sind zusammen größer als 10 MB' + (attach ? ' – entfernen Sie ein Foto oder das Raumfoto.' : mot ? ' – entfernen Sie ein Foto oder schicken Sie das Rückwand-Motiv nicht mit.' : '.'); return; }
      $('[name="Entwurf"]', form).value = summary() + '\n\nLink: ' + location.href.split('#')[0] + lastHash;
      $('[name="_next"]', form).value = location.href.split('#')[0].split('?')[0] + '?gesendet=1'; try { sessionStorage.setItem('kp-last', lastHash); } catch (er) { }
      if (window.DataTransfer) {
        e.preventDefault(); b0.disabled = true; b0.textContent = 'Wird gesendet …';
        try { const c = await composite(); const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .85)); const dt = new DataTransfer(); dt.items.add(new File([blob], 'kuechenentwurf.jpg', { type: 'image/jpeg' })); $('[name="Entwurf-Bild"]', form).files = dt.files; } catch (err) { }
        if (attach) [['Raumfoto', 0], ['Raumfoto-mit-Kueche', 1]].forEach(([n, i]) => { const inp = $(`[name="${n}"]`, form); if (!inp || !attach.files[i]) return; try { const dt = new DataTransfer(); dt.items.add(attach.files[i]); inp.files = dt.files; } catch (err) { } });
        // Eigenes Rückwand-Motiv (bereits auf max. 1600 px verkleinert) als JPEG anhängen
        if (mot) { let ok = false; try { let inp = $('[name="Rueckwand-Motiv"]', form); if (!inp) { inp = Object.assign(document.createElement('input'), { type: 'file', name: 'Rueckwand-Motiv', className: 'hp', tabIndex: -1 }); inp.setAttribute('aria-hidden', 'true'); form.appendChild(inp); }
          let blob = await new Promise(r => { try { mot.toBlob(r, 'image/jpeg', .86); } catch (err) { r(null); } }); if (!blob && mot._url) blob = await (await fetch(mot._url)).blob();
          if (blob) { const dt = new DataTransfer(); dt.items.add(new File([blob], 'rueckwand-motiv.jpg', { type: 'image/jpeg' })); inp.files = dt.files; ok = inp.files.length > 0; } } catch (err) { ok = false; }
          if (ok) $('[name="Entwurf"]', form).value = summary(true) + '\n\nLink: ' + location.href.split('#')[0] + lastHash; }
        HTMLFormElement.prototype.submit.call(form);
      }
    });
    const fi = $('[data-files]', form); if (fi) fi.addEventListener('change', e => { $('[data-filelist]', form).innerHTML = [...e.target.files].map(f => `<li>${f.name} <em>${(f.size / 1e6).toFixed(1).replace('.', ',')} MB</em></li>`).join(''); });
  }

  /* ---------------- Ihre Küche in Ihrem Raum (Foto-Projektion, wird bei Bedarf geladen) ---------------- */
  let pf = null;
  function loadFoto() { return pf || (pf = Promise.all([loadEngine(), new Promise((res, rej) => { if (window.KPF) return res(); const s = document.createElement('script'); s.src = 'assets/kp-foto.js?v=' + VER; s.onload = res; s.onerror = rej; document.head.appendChild(s); })])); }
  function openFoto(o) { loadFoto().then(() => window.KPF && window.KPF.open(o || {})).catch(() => { pf = null; toast('Die Foto-Ansicht konnte nicht geladen werden – bitte Seite neu laden.'); }); }
  window.KP = {
    state3d: () => toState(), room: () => ({ ...P.room }),
    stateOf: j => { const keep = P, ks = sel, ko = selOp; try { des(typeof j === 'string' ? j : JSON.stringify(j)); return { state: toState(), room: { ...P.room } }; } finally { P = keep; sel = ks; selOp = ko; } }, form: () => P.form,
    // Live-Tipps (Warnungen) für einen Plan im Hash-Format – ohne den aktuellen Entwurf zu verändern
    tipsOf: j => { const keep = P, ks = sel, ko = selOp; try { des(typeof j === 'string' ? j : JSON.stringify(j)); return tips().filter(x => x[0] === 'warn').map(x => x[1]); } finally { P = keep; sel = ks; selOp = ko; } }, walls: () => FORMS[P.form].walls.slice(), wn: WN, person: PERSON, studio: STUDIO, acc: ACC, logo: LOGO, summary: () => summary(),
    pause3d: b => { if (K) K.pause(b); }, toast: (m) => toast(m), k3d: () => K,
    // Hochwertiges Standbild der aktuellen 3D-Ansicht → Promise<Canvas>
    renderHQ: (w = 1600, h = 1000) => load3D().then(() => { if (!K || !K.renderHQ) throw new Error('3D-Ansicht nicht verfügbar'); return K.renderHQ(w, h); }),
    // Maße der geplanten Küche (alles in cm) – für Maßstabsplan / Ergebnis-Ansicht
    planData: () => planData(),
    setAttach: a => { attach = a; syncAttach(); }, getAttach: () => attach,
    toSend: () => { go(3); setTimeout(() => { const c = $('[data-kpf-card]'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 120); },
    // Fertigen Plan (Hash-Format) übernehmen – ohne Neuladen, mit Rückgängig; bei Fehler bleibt der alte Entwurf
    applyPlan: j => { const keep = P; try { des(typeof j === 'string' ? j : JSON.stringify(j)); if (!P || !P.room || !FORMS[P.form]) throw new Error('Plan ungültig'); } catch (e) { P = keep; throw e; } sel = null; selOp = null; eqSel = null; disarm(); pop.hidden = true; openNow.clear(); xfade(); change(); renderPal(); if (K && K.view) { K.view('perspektive'); $$('[data-cam]').forEach(x => x.classList.toggle('on', x.dataset.cam === 'perspektive')); } return lastHash; },
    hash: () => lastHash,
  };
  document.addEventListener('click', e => { const b = e.target.closest('[data-kpf-open]'); if (!b) return; e.preventDefault(); openFoto({ sample: b.hasAttribute('data-kpf-sample') }); });

  /* ---------------- Start ---------------- */
  if (!fromHash()) fresh('l');
  const qAh = +(new URLSearchParams(location.search).get('ah') || 0);
  if (qAh >= 80 && qAh <= 110) { P.ah = qAh; setTimeout(() => toast(`Ihre Arbeitshöhe ${qAh} cm ist übernommen – sehen Sie den höheren Sockel?`), 2600); }
  renderPal(); change(); go(/[?&]gesendet=1/.test(location.search) ? 3 : 1); syncAttach();
  if (/[?&]gesendet=1/.test(location.search)) { const n = $('[data-sent]'); if (n) n.hidden = false; }
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { io.disconnect(); load3D(); } }); io.observe(host3);
  if (/[?&]foto=1/.test(location.search)) setTimeout(() => openFoto({}), 400);
  // Einmaliger Hinweis
  setTimeout(() => toast(innerWidth < 1000 ? 'Tipp: Schrank unten antippen oder nach oben in die Wand ziehen.' : 'Tipp: Schränke links anfassen und in die Wand ziehen.'), 900);
})();
