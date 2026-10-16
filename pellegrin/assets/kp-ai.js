/* KI-Planung für den Küchenplaner „Ziehen & Planen" – Entwurf Falcon Eye
   Kunde beschreibt Raum und Wünsche in eigenen Worten → Server-KI (Make) plant, sonst der eingebaute
   Planungs-Assistent → fertiger, regelkonformer Plan im Planer, danach nur noch fein anpassen.
   Hängt sich selbst in den Planer ein (Kopf-Knopf + Karte in Schritt 1), braucht kein eigenes Markup. */
(function () {
  'use strict';
  // Optionaler Webhook (z. B. Make-Szenario mit KI). Standard: leer = nur der eingebaute Planungs-Assistent, keine externen Aufrufe.
  // Setzen über window.KPAI_HOOK = 'https://…' oder data-kpai-hook="https://…" am [data-kp]-Element.
  const HOOK = '';
  const MAXLEN = 1500, MAXREQ = 3, MAXSESS = 8, TIMEOUT = 25000, MINWAIT = 2600;

  /* ================= Katalog (Spiegel von kp.js – nur lesen) ================= */
  const HT = [145, 195, 216, 230], HU = [36, 54, 72, 90], W30 = [30, 40, 45, 50, 60], WALL = [30, 40, 45, 50, 60, 80, 90, 100, 120];
  const M = {
    us: { ws: WALL, h: 'b' }, ut: { ws: W30, h: 'b' }, u1: { ws: W30, h: 'b' }, u2: { ws: [60, 80, 90, 100, 120], h: 'b' },
    s2: { ws: WALL, h: 'b' }, s4: { ws: WALL, h: 'b' }, ui: { ws: [45, 50, 60, 80, 90, 100, 120], h: 'b' }, ur: { ws: [15, 20, 30, 40, 45, 50, 60], h: 'b' },
    fa: { ws: [15, 20, 30], h: 'b' }, ap: { ws: [15, 20, 30, 40], h: 'b' }, mt: { ws: [45, 50, 60], h: 'b' },
    sp: { ws: [60, 80, 90, 100, 120], h: 'b' }, kf: { ws: [60, 80, 90, 120], h: 'b' }, ko: { ws: [60, 90], h: 'b' }, gs: { ws: [45, 60], h: 'b' },
    ek: { ws: [90], h: 'b', c: 1 }, el: { ws: [100, 110, 120], h: 'b', c: 1 }, eb: { ws: [90, 100, 110, 120], h: 'b', c: 1 },
    bo: { ws: [60], h: 't', hs: HT }, bm: { ws: [60], h: 't', hs: [195, 216, 230] }, kue: { ws: [60], h: 't', hs: [195, 216, 230] },
    vo: { ws: W30, h: 't', hs: HT }, ah: { ws: [15, 20, 30, 40, 45], h: 't', hs: HT }, bs: { ws: W30, h: 't', hs: [195, 216, 230] }, vg: { ws: [40, 45, 50, 60], h: 't', hs: HT },
    h1: { ws: W30, h: 'u', hs: HU }, h2: { ws: [60, 80, 90, 100, 120], h: 'u', hs: HU }, hk: { ws: [45, 50, 60, 80, 90, 100, 120], h: 'u', hs: HU },
    hs: { ws: [45, 50, 60, 80, 90, 100, 120], h: 'u', hs: [36, 54, 72] }, hf: { ws: [60, 80, 90, 100, 120], h: 'u', hs: [72, 90] },
    hg: { ws: [40, 45, 50, 60, 80, 90, 100], h: 'u', hs: HU }, ho: { ws: WALL, h: 'u', hs: HU }, he: { ws: [55, 60, 65, 70, 80], h: 'u', hs: HU }, dh: { ws: [60, 90, 120], h: 'u' },
  };
  const NM = { us: 'Schubladen', ut: 'Unterschrank', u1: 'Unterschrank', u2: 'Unterschrank', s2: 'Auszüge', s4: 'Schubladen', ui: 'Innenschubladen', ur: 'Regal', fa: 'Flaschenauszug', ap: 'Apotheker klein', mt: 'Mülltrenner', sp: 'Spüle', kf: 'Kochfeld', ko: 'Herd', gs: 'Spülmaschine', ek: 'Eckschrank', el: 'Eckschrank', eb: 'Eckschrank', bo: 'Backofen', bm: 'Backofen + Mikrowelle', kue: 'Kühlschrank', vo: 'Vorratsschrank', ah: 'Apothekerschrank', bs: 'Besenschrank', vg: 'Vitrine' };
  const FORMS = { zeile: { n: 'Küchenzeile', walls: ['N'] }, l: { n: 'L-Küche', walls: ['W', 'N'] }, u: { n: 'U-Küche', walls: ['W', 'N', 'E'] }, zwei: { n: 'zweizeilige Küche', walls: ['N', 'S'] }, insel: { n: 'Küche mit Kochinsel', walls: ['N'], island: 1 } };
  const FN = { zeile: 'Küchenzeile', l: 'L-Küche', u: 'U-Küche', zwei: 'Zweizeilig', insel: 'Mit Kochinsel' };
  const WAN = { N: 'an der Rückwand', W: 'an der linken Wand', E: 'an der rechten Wand', S: 'an der Wand gegenüber' };
  const FRONTS = [['Weiß', '#f1eee8'], ['Creme', '#ece3cf'], ['Kaschmir', '#d9cfbf'], ['Sandgrau', '#cfc8bc'], ['Salbei', '#7f8e77'], ['Nachtblau', '#22304a'], ['Graphit', '#45474b'], ['Schwarz', '#232426']];
  const HANDLES = { grifflos: 'grifflos', bar: 'mit Edelstahlgriffen', schwarz: 'mit schwarzen Griffen', gold: 'mit Messinggriffen', knopf: 'mit Knopfgriffen' };
  const TOPS = { eiche: 'Eiche', keramik: 'Stein hell', beton: 'Beton', marmor: 'Marmor dunkel' };
  const FINISH = { matt: 'matt', seide: 'seidenmatt', glanz: 'in Hochglanz' };
  const BACKS = ['wand', 'platte', 'fliese', 'glas', 'dibond', 'holz', 'motiv'], WALLC = ['#f3efe9', '#e6dccb', '#d3d7cb', '#cdd5de', '#e2c2ab', '#5a5c5f'], FLOORS = ['eiche', 'dunkel', 'hell', 'grau'];
  const LOOKS = {
    modern: { front: '#cfc8bc', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', frame: 0, back: 'platte', wall: '#f3efe9', floor: 'hell' },
    landhaus: { front: '#7f8e77', wood: null, handle: 'gold', top: 'eiche', finish: 'matt', frame: 1, back: 'fliese', wall: '#e6dccb', floor: 'eiche' },
    dunkel: { front: '#232426', wood: null, handle: 'grifflos', top: 'marmor', finish: 'matt', frame: 0, back: 'platte', wall: '#e6dccb', floor: 'eiche' },
    skandi: { front: '#f1eee8', wood: null, handle: 'schwarz', top: 'eiche', finish: 'seide', frame: 0, back: 'wand', wall: '#f3efe9', floor: 'eiche' },
  };
  const DEF_STYLE = { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', wall: '#f3efe9', floor: 'eiche' };
  const OPW = { fenster: [50, 60, 80, 100, 120, 140, 160, 180, 200, 240], balkon: [80, 100, 120, 160, 200, 240], tuer: [80, 90, 100, 110, 125] };
  const ISW = [120, 150, 180, 210, 240, 270];
  const isTall = t => M[t] && M[t].h === 't', isBase = t => M[t] && M[t].h === 'b';
  const FILL = ['us', 'ut', 'u1', 'u2', 's2', 's4', 'ui', 'ur', 'fa', 'ap'];
  const snap = (ws, v) => ws.reduce((b, x) => Math.abs(x - v) < Math.abs(b - v) ? x : b, ws[0]);
  const r10 = v => Math.round(v / 10) * 10, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const mtr = cm => (cm / 100).toFixed(2).replace('.', ','), mm = (a, b) => `${mtr(a)}\u00a0×\u00a0${mtr(b)}\u00a0m`;

  /* ================= Hash-Format (wie kp.js) ================= */
  const b64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unb64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
  function current() {
    let o = null; try { const h = location.hash.slice(1); if (h.startsWith('k=')) o = JSON.parse(unb64(h.slice(2))); } catch (e) { o = null; }
    const K = window.KP || {};
    let room = (o && o.r) || null; try { if (!room && K.room) room = K.room(); } catch (e) { }
    let form = (o && o.f) || null; try { if (!form && K.form) form = K.form(); } catch (e) { }
    return { form: FORMS[form] ? form : 'l', room: room && room.w ? { w: room.w, d: room.d } : { w: 480, d: 380 }, style: (o && o.s) || null, ah: (o && o.ah) || 90 };
  }

  /* ================= 1) Text verstehen ================= */
  function parse(raw, cur) {
    let t = ' ' + String(raw || '').toLowerCase().replace(/[×*]/g, ' x ').replace(/\bmal\b/g, ' x ').replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ue/g, 'ü').replace(/\s+/g, ' ') + ' ';
    // Millimeter → Zentimeter („3200 x 2400 mm", „3.200 mm")
    t = t.replace(/(\d+(?:[.,]\d+)?)(\s*(?:mm|millimeter)\b)?(\s*x\s*)(\d+(?:[.,]\d+)?)\s*(?:mm|millimeter)\b/g, (a, n1, u1, xx, n2) => mmcm(n1) + ' cm x ' + mmcm(n2) + ' cm').replace(/(\d+(?:[.,]\d+)?)\s*(?:mm|millimeter)\b/g, (a, n) => mmcm(n) + ' cm');
    const has = re => re.test(t);
    const neg = w => new RegExp('(kein\\w*|ohne|nicht|brauche?n? kein\\w*)\\s+(\\S+\\s+){0,2}' + w).test(t);
    const b = { raw: t, budget: null, form: null, formSaid: false, room: null, roomGiven: false, win: { wall: null, w: 120, none: false }, door: { wall: null, w: 90 }, balkon: false, isl: { want: false, v: 'kochfeld', w: null, big: false }, W: {}, style: {}, look: null, ah: null, notes: [], got: [] };
    const N = s => parseFloat(String(s).replace(',', '.'));
    const cm = (v, u) => u === 'cm' ? v : (u && u[0] === 'm') ? v * 100 : (v < 15 ? v * 100 : v);
    const blank = (m) => { t = t.slice(0, m.index) + ' '.repeat(m[0].length) + t.slice(m.index + m[0].length); };
    let m;
    // Budget („Budget 15.000 €", „bis 25000 Euro", „20 Tsd.", „12k €")
    {
      const BU = [[/(\d{1,3}(?:[.\s]\d{3})+|\d{4,6})(?:,-|,00)?\s*(?:€|euro\b|eur\b)/, 1], [/(\d{1,3}(?:[.,]\d)?)\s*(?:tsd\.?|tausend|k(?![a-zäöüß]))\s*(?:€|euro\b|eur\b)?/, 1000], [/(?:budget|preisrahmen|kostenrahmen)\D{0,14}?(\d{1,3}(?:[.\s]\d{3})+|\d{4,6})/, 1]];
      for (const [r, f] of BU) { if (!(m = t.match(r))) continue; const v = f === 1 ? +m[1].replace(/[.\s]/g, '') : parseFloat(m[1].replace(',', '.')) * f; if (v >= 1500 && v <= 250000) { b.budget = Math.round(v / 100) * 100; blank(m); break; } }
    }
    // Körpergröße / Arbeitshöhe
    if ((m = t.match(/(?:ich bin|wir sind|körpergrö(?:ß|ss)e)\D{0,10}?(\d[.,]\d{1,2}|1\d{2})\s*(m|cm)?/)) || (m = t.match(/(\d[.,]\d{1,2}|1\d{2})\s*(m|cm)?\s*gro(?:ß|ss)\b/))) { const v = cm(N(m[1]), m[2]); if (v >= 140 && v <= 215) b.body = v; blank(m); }
    if ((m = t.match(/arbeitshöhe\D{0,14}?(\d{2,3})\s*(cm)?/))) { const v = +m[1]; if (v >= 80 && v <= 110) b.ah = v; blank(m); }
    // Fläche
    if ((m = t.match(/(\d+(?:[.,]\d+)?)\s*(qm|m²|m2|quadratmeter)/))) { const a = N(m[1]); if (a >= 5 && a <= 60) b.area = a; blank(m); }
    // Paar „3,80 x 2,60 m"
    let pair = null;
    if ((m = t.match(/(\d+(?:[.,]\d+)?)\s*(cm|m|meter|metern)?\s*x\s*(\d+(?:[.,]\d+)?)\s*(cm|m|meter|metern)?/))) {
      const u2 = m[4] || m[2], a = cm(N(m[1]), m[2] || u2), c = cm(N(m[3]), u2);
      if (a >= 150 && a <= 1200 && c >= 150 && c <= 1200) pair = [a, c]; blank(m);
    }
    // Einzelmaße mit Bezug
    const lab = { w: null, d: null, l: null, gen: [] };
    const re = /(\d+(?:[.,]\d+)?)\s*(cm|m|meter|metern)(?![a-zäöü²])/g;
    while ((m = re.exec(t))) {
      const v = cm(N(m[1]), m[2]), bef = t.slice(Math.max(0, m.index - 26), m.index), aft = t.slice(m.index + m[0].length, m.index + m[0].length + 16);
      const near = (bef.split(/[,.;:]/).pop() || '') + ' | ' + (aft.split(/[,.;:]/)[0] || '');
      if (/fenster/.test(near) && !/raum|küche|wand/.test(bef.split('fenster').pop())) { if (v >= 40 && v <= 300) b.win.w = snap(OPW.fenster, v); continue; }
      if (/(balkon|terrassen)tür/.test(near)) { b.balkon = true; continue; }
      if (/tür/.test(near)) { if (v >= 60 && v <= 140) b.door.w = snap(OPW.tuer, v); continue; }
      if (/insel/.test(near)) { if (v >= 100 && v <= 320) b.isl.w = v; continue; }
      if (/kochfeld|herd|spüle|spülmaschine|kühlschrank|schrank|backofen|ofen|griff|platte|tief(e)? (der|des) schr/.test(near)) continue;
      if (v < 150 || v > 1200) continue;
      if (/^\s*lang/.test(aft) || /länge\s*(von|:)?\s*$/.test(bef)) lab.l = v;
      else if (/^\s*breit/.test(aft) || /breite\s*(von|:)?\s*$/.test(bef)) lab.w = v;
      else if (/^\s*tief/.test(aft) || /tiefe\s*(von|:)?\s*$/.test(bef)) lab.d = v;
      else lab.gen.push(v);
    }
    let w = null, d = null;
    if (pair) { w = Math.max(...pair); d = Math.min(...pair); }
    else if (lab.gen.length >= 2) { w = Math.max(lab.gen[0], lab.gen[1]); d = Math.min(lab.gen[0], lab.gen[1]); }
    else if (lab.gen.length === 1) w = lab.gen[0];
    if (lab.l) { w = lab.l; d = lab.d || lab.w || d; if (d === w) d = null; } else { if (lab.w) w = lab.w; if (lab.d) d = lab.d; }
    if (!w && !d && b.area) { w = r10(Math.sqrt(b.area) * 115); d = r10(b.area * 10000 / w); }
    b.roomGiven = !!(w || d);
    // Form
    const sayU = has(/\bu[- ]?(küche|form|förmig)|hufeisen|drei (seiten|wänden|wände)/), sayL = has(/\bl[- ]?(küche|form|förmig)|über ?eck|eckküche|winkelküche|winkel\b/);
    const sayZwei = has(/zweizeil|zwei[- ]?zeil|zwei (reihen|zeilen|seiten)|gegenüberliegend|parallel|galley|schlauch|beidseitig/);
    const sayZeile = has(/küchenzeile|einzeil|\bzeile\b|(an )?einer wand|eine wand|gerade küche|nur eine wand/);
    const halb = has(/halbinsel|\btheke|\btresen/);
    b.isl.want = has(/insel/) && !has(/halbinsel/) && !neg('(koch)?insel');
    if (halb && !b.isl.want) b.halb = true;
    b.formSaid = sayU || sayL || sayZwei || sayZeile || b.isl.want;
    let form = b.isl.want ? 'insel' : sayU ? 'u' : sayZwei ? 'zwei' : sayL ? 'l' : sayZeile ? 'zeile' : halb ? 'l' : null;
    b.wantForm = form;
    // Insel-Variante
    if (has(/spüle\s+(auf|in|an)\s+(der|die)\s+insel|insel\s+mit\s+(der\s+|einer\s+)?spüle|spülinsel/)) b.isl.v = 'spuele';
    else if (has(/insel\s+(nur\s+|als\s+|zum\s+)+(arbeits|ablage|theke|tresen|sitzen|frühstück)|frühstücks|sitzplätze|insel zum sitzen|bartheke/) && !has(/koch(en|feld)?\s+(auf|an|in)\s+(der\s+)?insel|kochinsel/)) b.isl.v = 'frei';
    b.isl.big = has(/gro(?:ß|ss)\w*\s+(koch)?insel|insel\s+(gro(?:ß|ss)|lang)/);
    // Wünsche
    const W = b.W;
    W.apo = has(/apotheker/) ? (has(/(klein|schmal|unter)\w*\s+apotheker|apotheker\w*\s+(klein|unten|im unterschrank)/) ? 'small' : 'tall') : null;
    W.micro = has(/mikrowelle|dampfgar|kompaktbackofen|zweiter backofen/);
    W.ovenHigh = has(/backofen\s+(auf|in)\s+(augen|brust|greif)|augenhöhe|hochgebaut|backofen\s+(hoch|oben)|hoh(e|er|en)\s+backofen|ofen\s+(hoch|auf augen)/) || W.micro;
    W.herd = !W.ovenHigh && has(/\bherd\b|backofen\s+(unten|unter dem kochfeld|unterm kochfeld)/);
    W.side = has(/side.?by.?side|amerikanisch|zwei kühl|kühlschrank und (einen )?gefrierschrank|separate\w* gefrier|gefrierschrank (extra|separat|dazu)|extra gefrier/);
    W.bigFridge = W.side || has(/gro(?:ß|ss)\w*\s+(kühl|gefrier)|kühl.?gefrier|gefrierschrank|xxl|viel kühl/);
    W.noDw = neg('(spülmaschine|geschirrspüler|spüler)');
    W.mulde = has(/muldenl|kochfeldabzug|kochfeld mit (integriertem )?abzug|downdraft|nach unten absaug/) || neg('(dunstabzug\\w*|haube|abzugshaube)');
    W.storage = has(/stauraum|vorrat|speisekammer|viel platz|viele schränke|gro(?:ß|ss)\w* familie|viel geschirr/);
    W.besen = has(/besen|staubsauger|putzschrank|putzmittel/);
    W.vitrine = has(/vitrine|glastür|glasschrank/);
    W.noUp = neg('(hängeschr\\w*|oberschr\\w*|hängeschränke|oberschränke)') || has(/offene regale statt|ohne oberschränke|luftig/);
    W.upAll = !W.noUp && has(/viele hängeschr|hängeschränke (überall|rundum|an allen)/);
    W.muell = has(/müll/);
    W.bigSink = has(/gro(?:ß|ss)\w*\s+spüle|doppelspüle|zwei becken|doppelbecken|gro(?:ß|ss)es becken/);
    W.bigHob = has(/(90|120)\s*(cm|er)?\s*kochfeld|kochfeld\s*(mit\s*)?(90|120)|gro(?:ß|ss)\w*\s+kochfeld|viel kochen|koche gern|kochen gern|hobbykoch|5 platten|fünf platten/);
    W.corner = has(/karussell/) ? 'ek' : has(/le.?mans/) ? 'el' : has(/blindeck/) ? 'eb' : null;
    // Fenster / Türen
    const clauses = t.split(/[.;!?\n]| und |, /);
    const wallOf = c => /lang/.test(c) ? 'lang' : /kurz/.test(c) ? 'kurz' : /\blink|\blinks/.test(c) ? 'W' : /\brecht/.test(c) ? 'E' : /gegenüber|vorn|vorne/.test(c) ? 'S' : /hinten|rückwand|hinter/.test(c) ? 'N' : null;
    if (neg('fenster')) b.win.none = true;
    const fc = clauses.find(c => /fenster/.test(c) && wallOf(c)); if (fc) b.win.wall = wallOf(fc);
    if (has(/gro(?:ß|ss)\w*\s+fenster|bodentief|panorama/)) b.win.w = Math.max(b.win.w, 160);
    const dc = clauses.find(c => /(tür|eingang)/.test(c) && !/(balkon|terrass|schrank|glas)tür/.test(c) && wallOf(c)); if (dc) { const x = wallOf(dc); b.door.wall = /lang|kurz/.test(x) ? null : x; }
    if (has(/(balkon|terrass|garten)\w*tür|zum balkon|zur terrass|zum garten|auf die terrass/)) b.balkon = true;
    // Stil
    const st = b.style;
    if ((m = t.match(/grifflos|ohne griff\w*|griffleiste|push.?to.?open|tip.?on/))) { st.handle = 'grifflos'; blank(m); }
    else if ((m = t.match(/(messing|gold\w*|bronze)\w*\s*(griff\w*)?|griff\w*\s+(in|aus)\s+(messing|gold)/))) { st.handle = 'gold'; blank(m); }
    else if ((m = t.match(/schwarz\w*\s+griff\w*|griff\w*\s+(in\s+)?schwarz/))) { st.handle = 'schwarz'; blank(m); }
    else if ((m = t.match(/(edelstahl|chrom|silber\w*)\s*griff\w*|stangengriff\w*|griff\w*\s+(in|aus)\s+edelstahl/))) { st.handle = 'bar'; blank(m); }
    else if ((m = t.match(/knöpfe|knopf\w*|knauf|knäufe/))) { st.handle = 'knopf'; blank(m); }
    if ((m = t.match(/(arbeits)?platte\w*\s+(in\s+|aus\s+)?(\w+\s+)?(eiche|holz|stein|keramik|quarz|granit|beton|marmor|schwarz|dunkel|hell|weiß)\w*|(holz|eichen|stein|keramik|quarz|granit|beton|marmor)(arbeits)?platte/))) {
      const s = m[0]; st.top = /eiche|holz/.test(s) ? 'eiche' : /beton/.test(s) ? 'beton' : /marmor|schwarz|dunkel/.test(s) ? 'marmor' : 'keramik'; blank(m);
    } else if (has(/marmor/)) st.top = 'marmor'; else if (has(/beton/)) st.top = 'beton'; else if (has(/keramik|quarz|naturstein|granit/)) st.top = 'keramik';
    if ((m = t.match(/(parkett|holzboden|dielen|eichenboden|dunkle\w*\s+(holz)?boden|dunkler boden|helle\w*\s+fliesen|weiße\w*\s+fliesen|graue\w*\s+fliesen|grauer boden|betonboden|boden\s+(in\s+)?(eiche|holz|dunkel|grau|hell)\w*)/))) {
      const s = m[0]; st.floor = /dunkel/.test(s) ? 'dunkel' : /grau|beton/.test(s) ? 'grau' : /hell|weiß/.test(s) ? 'hell' : 'eiche'; blank(m);
    }
    if ((m = t.match(/wand\w*\s+(in\s+)?(salbei|grün|blau|terrakotta|anthrazit|sand|beige|weiß)\w*/))) { const s = m[0]; st.wall = /salbei|grün/.test(s) ? '#d3d7cb' : /blau/.test(s) ? '#cdd5de' : /terra/.test(s) ? '#e2c2ab' : /anthrazit/.test(s) ? '#5a5c5f' : /sand|beige/.test(s) ? '#e6dccb' : '#f3efe9'; blank(m); }
    if ((m = t.match(/(granit\w*\s+)?schwarz\w*\s+(granit)?spüle|spüle\w*\s+(in\s+|aus\s+)?(granit\s+)?schwarz/))) { st.sink = 'gschwarz'; blank(m); }
    else if ((m = t.match(/anthrazit\w*\s+spüle|spüle\w*\s+(in\s+|aus\s+)?(granit\s+)?anthrazit/))) { st.sink = 'ganth'; blank(m); }
    else if ((m = t.match(/keramik\w*spüle|keramik\w*\s+spüle|weiße\w*\s+spüle|spüle\w*\s+(in\s+|aus\s+)?(keramik|weiß)/))) { st.sink = 'kweiss'; blank(m); }
    else if ((m = t.match(/edelstahl\w*\s*spüle|spüle\w*\s+(in\s+|aus\s+)?edelstahl/))) { st.sink = 'edel'; blank(m); }
    if ((m = t.match(/schwarz\w*\s+armatur|armatur\w*\s+(in\s+)?schwarz/))) { st.tap = 'schwarz'; blank(m); }
    else if ((m = t.match(/(messing|gold)\w*\s*armatur|armatur\w*\s+(in\s+|aus\s+)?(messing|gold)/))) { st.tap = 'gold'; blank(m); }
    if (has(/inselhaube|haube über der insel/)) st.ihood = 'insel'; else if (has(/deckenlüfter|deckenhaube|abzug in der decke/)) { st.ihood = 'decke'; st.hood = 'decke'; }
    else if (has(/flachschirm|flachhaube/)) st.hood = 'flach'; else if (has(/\besse\b|pyramide/)) st.hood = 'esse';
    if (has(/metro|fliesenspiegel|fliesen an der wand|wandfliesen/)) st.back = 'fliese'; else if (has(/glasrückwand|rückwand aus glas/)) st.back = 'glas';
    if (has(/hochglanz|glänzend|glanz\b/)) st.finish = 'glanz'; else if (has(/seidenmatt|seidig/)) st.finish = 'seide'; else if (has(/\bmatt/)) st.finish = 'matt';
    if (has(/landhaus|rahmenfront|kassette|klassisch|country|cottage/)) { b.look = 'landhaus'; st.frame = 1; }
    else if (has(/skandi|skandinav|nordisch/)) b.look = 'skandi';
    const col = [[/nachtblau|dunkelblau|navy|\bblau/, '#22304a'], [/salbei|grün|olive|mint/, '#7f8e77'], [/sandgrau|greige|sandfarb|\bsand\b|taupe|hellgrau|\bgrau\b|\bgraue/, '#cfc8bc'], [/kaschmir|cashmere|beige/, '#d9cfbf'], [/creme|elfenbein|vanille/, '#ece3cf'], [/graphit|grafit|anthrazit|dunkelgrau/, '#45474b'], [/schwarz/, '#232426'], [/weiß|\bweiße|\bhell\b|hell und|helle küche/, '#f1eee8']];
    const fc2 = col.find(([r]) => r.test(t)); if (fc2) st.front = fc2[1];
    const wood = has(/nussbaum|walnuss|\bnuss/) ? 'nuss' : has(/eiche|holz/) ? 'eiche' : null;
    if (wood) { if (!st.front && !b.look) { st.wood = wood; if (!st.top) st.top = wood === 'nuss' ? 'keramik' : 'marmor'; } else if (!st.top) st.top = 'eiche'; }
    if (!b.look && !st.front && !st.wood && has(/dunkel|elegant/)) b.look = 'dunkel';
    if (!b.look && has(/modern|minimalist|puristisch/) && !st.front) b.look = 'modern';
    if (st.front && st.front !== '#232426' && st.front !== '#45474b' && st.front !== '#22304a' && b.look === 'dunkel') b.look = null;
    // Arbeitshöhe aus Körpergröße
    if (!b.ah && b.body) b.ah = clamp(Math.round(b.body / 2 + 5), 84, 106);

    /* --- Form und Raum festlegen --- */
    const cw = cur.room.w, cd = cur.room.d;
    if (!form) form = cur.form === 'insel' && !b.isl.want ? 'l' : cur.form;
    let room;
    if (b.roomGiven) {
      w = w || cw; d = d || (form === 'zwei' ? 300 : form === 'insel' ? 420 : Math.min(cd, Math.max(240, Math.round(w * 0.8))));
      room = { w: clamp(r10(w), 240, 800), d: clamp(r10(d), 240, 700) };
    } else room = { w: cw, d: cd };
    if (form === 'insel') {
      const hi = Math.max(room.w, room.d), lo = Math.min(room.w, room.d);
      if (!b.roomGiven) { room.d = Math.max(room.d, 420); }
      else if (lo >= 380) room = { w: hi, d: lo };
      else if (hi >= 400 && lo >= 300) room = { w: lo, d: hi };
      else {
        
        form = sayU ? 'u' : sayZwei ? 'zwei' : sayZeile ? 'zeile' : 'l';
        b.notes.push(`Eine Kochinsel braucht rund 4 m Raumtiefe und ringsum gut 1 m Laufweg – bei ${mtr(room.w)} × ${mtr(room.d)} m wäre es zu eng. Darum ${form === 'l' ? 'über Eck' : 'als ' + FORMS[form].n} geplant: Die Arbeitsfläche ist trotzdem großzügig.`);
        b.islDropped = true;
      }
    }
    if (form === 'zwei' && room.d > 420 && b.roomGiven) b.notes.push('Bei zweizeiligen Küchen sind 1,20 bis 1,50 m Gang ideal – die Zeilen stehen an den langen Wänden.');
    b.form = form; b.room = room;
    if (b.halb) b.notes.push('Eine Halbinsel bzw. Theke plant der Online-Planer als L-Schenkel – die genaue Theke zeichnet das Studio danach ein.');
    // Erkanntes für die Chips
    const g = b.got;
    if (b.formSaid || b.halb) g.push(FORMS[form].n.replace(/^k/, 'K')); else g.push(FORMS[form].n.replace(/^k/, 'K') + ' (Vorschlag)');
    if (b.roomGiven) g.push(`Raum ${mm(room.w, room.d)}`);
    if (b.win.none) g.push('Kein Fenster'); else if (b.win.wall) g.push('Fenster ' + ({ lang: 'an der langen Wand', kurz: 'an der kurzen Wand', W: 'links', E: 'rechts', S: 'gegenüber', N: 'an der Rückwand' })[b.win.wall]);
    if (/spüle\s+(unter|am|vor)\s+(dem\s+)?fenster/.test(t)) g.push('Spüle am Fenster');
    if (b.isl.want) g.push(b.islDropped ? 'Insel (zu wenig Platz)' : 'Kochinsel' + (b.isl.v === 'spuele' ? ' mit Spüle' : b.isl.v === 'frei' ? ' als Arbeitsfläche' : ''));
    if (W.apo) g.push(W.apo === 'tall' ? 'Apothekerschrank' : 'Apotheker klein'); if (W.ovenHigh) g.push(W.micro ? 'Backofen + Mikrowelle hoch' : 'Backofen auf Augenhöhe');
    if (W.side) g.push('Kühl- und Gefrierschrank'); else if (W.bigFridge) g.push('Großer Kühlschrank');
    if (W.mulde) g.push('Muldenlüfter'); if (W.storage) g.push('Viel Stauraum'); if (W.noDw) g.push('Ohne Spülmaschine'); if (W.muell) g.push('Mülltrenner');
    if (W.besen) g.push('Besenschrank'); if (W.vitrine) g.push('Vitrine'); if (W.noUp) g.push('Ohne Hängeschränke'); if (W.bigSink) g.push('Große Spüle'); if (W.bigHob) g.push('Großes Kochfeld'); if (W.herd) g.push('Herd mit Backofen unten');
    if (b.balkon) g.push('Balkontür');
    if (b.look) g.push({ landhaus: 'Landhaus', skandi: 'Skandinavisch', dunkel: 'Elegant dunkel', modern: 'Modern' }[b.look]);
    if (st.front) g.push((FRONTS.find(f => f[1] === st.front) || ['Farbe'])[0]); if (st.wood) g.push(st.wood === 'nuss' ? 'Nussbaum' : 'Eiche-Fronten');
    if (st.handle) g.push({ grifflos: 'Grifflos', gold: 'Messinggriffe', schwarz: 'Schwarze Griffe', bar: 'Edelstahlgriffe', knopf: 'Knopfgriffe' }[st.handle]);
    if (st.top) g.push('Platte ' + TOPS[st.top]); if (st.finish) g.push({ matt: 'Matt', seide: 'Seidenmatt', glanz: 'Hochglanz' }[st.finish]);
    if (b.ah) g.push(`Arbeitshöhe ${b.ah} cm`);
    if (b.budget) g.push(`Budget ca. ${eur(b.budget)} €`);
    return b;
  }

  /* ================= 2) Planen (regelbasiert) ================= */
  function decompose(X, fa) {
    if (X === 0) return []; if (X < 0 || X % 5) return null;
    const P = [120, 100, 90, 80, 60, 50, 45, 40, 30].concat(fa ? [20, 15] : []), n = X / 5, best = new Array(n + 1).fill(null);
    const cost = c => c.length * 10 + c.reduce((s, w) => s + (w < 30 ? 30 : 0) + (w === 45 ? 3 : 0) + Math.abs(w - 70) / 25, 0);
    best[0] = [];
    for (let i = 1; i <= n; i++) { let bb = null; for (const p of P) { const k = p / 5; if (k > i || !best[i - k]) continue; const c = best[i - k].concat(p); if (!bb || cost(c) < cost(bb)) bb = c; } best[i] = bb; }
    return best[n] ? best[n].slice().sort((a, b) => b - a) : null;
  }
  const ok30 = v => v === 0 || (v >= 30 && !!decompose(v));
  // Wand füllen: feste Module + flexible Füllstücke (Schubladenschränke) → exakt Wandlänge
  function layWall(seq, L, kind) {
    const fixed = seq.filter(x => !x.F).reduce((s, x) => s + x.w, 0), fl = seq.filter(x => x.F);
    const T = L - fixed, mins = fl.reduce((s, x) => s + x.min, 0);
    if (!fl.length) return T === 0 ? seq.map(x => [x.t, x.w].concat(x.q ? [x.q] : [])) : null;
    if (T < mins) return null;
    fl.forEach(x => x.v = x.min);
    const R = T - mins, ws = fl.reduce((s, x) => s + x.wt, 0) || 1;
    fl.forEach(x => { x.v += Math.floor(R * x.wt / ws / 10) * 10; });
    let left = T - fl.reduce((s, x) => s + x.v, 0);
    fl.forEach(x => { if (x.max && x.v > x.max) { left += x.v - x.max; x.v = x.max; } });
    const sink = fl.filter(x => !x.max).sort((a, b) => b.wt - a.wt)[0] || fl[fl.length - 1]; sink.v += left;
    for (let it = 0; it < 12; it++) {
      const bad = fl.find(x => !ok30(x.v)); if (!bad) break; let fixd = false;
      for (const dl of [10, -10, 20, -20, 5, -5, 15, -15, 30, -30]) {
        for (const o of fl) { if (o === bad) continue; const a = bad.v + dl, c = o.v - dl; if (a >= bad.min && c >= o.min && ok30(a) && ok30(c)) { bad.v = a; o.v = c; fixd = true; break; } }
        if (fixd) break;
      }
      if (!fixd) for (const it2 of seq) { if (!it2.adj) continue; for (const nw of it2.adj.slice().sort((p, q) => Math.abs(p - it2.w) - Math.abs(q - it2.w))) { const a = bad.v + it2.w - nw; if (nw !== it2.w && a >= bad.min && ok30(a)) { bad.v = a; it2.w = nw; fixd = true; break; } } if (fixd) break; }
      if (!fixd) break;
    }
    const out = [];
    for (const x of seq) {
      if (!x.F) { out.push([x.t, x.w].concat(x.q ? [x.q] : [])); continue; }
      const parts = (x.v >= 30 || x.v === 0) && decompose(x.v) || decompose(x.v, true); if (!parts) return null;
      parts.forEach(p => out.push([p < 30 ? 'fa' : (kind === 'store' && p >= 80 ? 'ui' : 'us'), p]));
    }
    return out;
  }
  const F = (min, wt, max) => ({ F: 1, min, wt, max: max || 0 }), C = (t, w, q) => ({ t, w, q });
  function seqs(f, c) {
    const A = (t, w) => Object.assign(C(t, w), { adj: M[t].ws.filter(v => v >= 30 && (t !== 'sp' || v <= 100) && (t !== 'kf' || v <= 90)) });
    const T = c.talls.map(t => ['vo', 'ah', 'bs', 'vg'].includes(t) ? A(t, t === 'ah' ? 30 : 60) : C(t, 60)), cook = c.cook ? [c.cook.t === 'kf' ? A('kf', c.cook.w) : C(c.cook.t, c.cook.w)].concat(c.apS ? [A('ap', c.apS)] : []) : [];
    const sinkB = [].concat(c.mt ? [A('mt', c.mt)] : [], [A('sp', c.sink)], c.dw ? [A('gs', c.dw)] : []);
    const fm = c.fmin, wk = c.work, cl = c.cornerL ? [c.cornerL.t === 'ek' ? C('ek', 90) : A(c.cornerL.t, c.cornerL.w)] : [], cr = c.cornerR ? [A(c.cornerR.t, c.cornerR.w)] : [];
    const split = (n) => [T.slice(0, n), T.slice(n)];
    if (f === 'zeile' || f === 'insel') {
      const [TL, TR] = split(3), tr = TR.length ? [F(0, 1)].concat(TR) : [F(0, 1)];
      if (f === 'insel' && c.islV === 'kochfeld') return { N: [...TL, F(fm, 1), ...sinkB, ...tr] };
      if (f === 'insel' && c.islV === 'spuele') return { N: [...TL, F(fm, 1), ...cook, F(fm, 2), ...TR] };
      return { N: [...TL, F(fm, 1), ...cook, F(wk, 2, 120), ...sinkB, ...tr] };
    }
    if (f === 'l') {
      const capW = c.room.d - 60 - (c.cornerL && c.cornerL.t === 'ek' ? 30 : 0) - (c.sinkWall === 'W' ? c.sink + c.dw + c.mt + fm : 0);
      let n = 0, s = 0; while (n < T.length && s + T[n].w <= capW) { s += T[n].w; n++; }
      const [TW, TN] = split(n);
      if (c.sinkWall === 'W') return { W: [...TW, F(fm, 1), ...sinkB, F(0, 1)], N: [...(cl.length ? cl : [F(fm, 1)]), ...cook, F(fm, 2), ...TN] };
      return { W: [...TW, F(0, 1)], N: [...(cl.length ? cl : [F(fm, 1)]), ...cook, F(wk, 2, 120), ...sinkB, F(0, 1), ...TN] };
    }
    if (f === 'u') {
      const capW = c.room.d - 60 - (c.cornerL && c.cornerL.t === 'ek' ? 30 : 0);
      let n = 0, s = 0; while (n < T.length && s + T[n].w <= capW) { s += T[n].w; n++; }
      const [TW, TE] = split(n);
      return { W: [...TW, F(0, 1)], N: [...(cl.length ? cl : []), F(0, 1), ...sinkB, F(0, 1), ...cr], E: [F(fm, 1), ...cook, F(fm, 2), ...TE] };
    }
    // zweizeilig
    const [TN, TS] = split(2);
    const a = [...TN, F(fm, 1), ...sinkB, F(0, 1)], b2 = [F(fm, 1), ...cook, F(fm, 2), ...TS];
    return c.sinkWall === 'S' ? { N: [...TN, F(fm, 1), ...cook, F(fm, 2)], S: [F(0, 1), ...sinkB, F(fm, 1), ...TS] } : { N: a, S: b2 };
  }
  function usableOf(w, rows, f, room) {
    const N = rows.N || [], L = (w === 'N' || w === 'S') ? room.w : room.d, walls = FORMS[f].walls;
    if (w === 'W') return L - (N.length ? 60 + (N[0] && N[0].t === 'ek' ? 30 : 0) : 0);
    if (w === 'E') return L - (N.length ? 60 + (N.length && N[N.length - 1].t === 'ek' && walls.includes('E') ? 30 : 0) : 0);
    return L;
  }
  function generate(b, cur, opt) {
    opt = opt || {};
    const f = b.form, room = b.room, W = b.W, notes = b.notes.slice();
    // Fensterwand → Spülenwand
    const walls = FORMS[f].walls;
    let ww = b.win.none ? null : b.win.wall;
    if (ww === 'lang') ww = room.w >= room.d ? 'N' : (walls.includes('W') ? 'W' : walls.includes('E') ? 'E' : 'W');
    if (ww === 'kurz') ww = room.w < room.d ? 'N' : (walls.includes('W') ? 'W' : 'W');
    let sinkWall = 'N';
    if (f === 'l' && ww === 'W') sinkWall = 'W';
    if (f === 'zwei' && ww === 'S') sinkWall = 'S';
    if (opt.altSink && f === 'l') sinkWall = sinkWall === 'W' ? 'N' : 'W';
    if (opt.altSink && f === 'zwei') sinkWall = sinkWall === 'S' ? 'N' : 'S';
    const isl = f === 'insel' ? { w: 180, v: b.isl.v } : null;
    if (isl) { const mx = Math.min(b.isl.big ? 270 : 240, room.w - 180); isl.w = b.isl.w ? snap(ISW, b.isl.w) : (ISW.filter(v => v <= mx).pop() || 120); if (isl.w > room.w - 140) isl.w = ISW.filter(v => v <= room.w - 140).pop() || 120; }
    const talls = ['kue'], islCook = !!(isl && isl.v === 'kochfeld'), herd = !islCook && (W.herd || !!opt.herd);
    if (W.side) talls.push('kue');
    if (!herd) talls.push(W.micro ? 'bm' : 'bo');
    if (islCook && W.herd) notes.push('Gekocht wird auf der Insel – der Backofen sitzt darum im Hochschrank, unter dem Kochfeld bleibt Platz für Töpfe.');
    if (W.apo === 'tall') talls.push('ah');
    if (W.storage) talls.push('vo');
    if (W.storage && room.w >= 500) talls.push('vo');
    if (W.besen) talls.push('bs');
    if (W.vitrine) talls.push('vg');
    const ctx = {
      room, talls, sink: W.bigSink ? 100 : 80, dw: W.noDw || opt.noDw ? 0 : 60, mt: W.muell ? 60 : 0, apS: W.apo === 'small' ? 30 : 0,
      cook: islCook ? null : herd ? { t: 'ko', w: W.bigHob ? 90 : 60 } : { t: 'kf', w: W.bigHob ? 90 : 80 },
      cornerL: (f === 'l' || f === 'u') ? (W.corner === 'ek' ? { t: 'ek', w: 90 } : W.corner === 'eb' || (b.budget && b.budget < 10000 && W.corner !== 'el') ? { t: 'eb', w: 100 } : { t: 'el', w: 110 }) : null,
      cornerR: f === 'u' ? { t: 'eb', w: 100 } : null, sinkWall, islV: isl ? isl.v : null, fmin: 30, work: 60,
    };
    const rmT = (c, t) => { const i = c.talls.lastIndexOf(t); if (i < 0 || (t === 'kue' && c.talls.indexOf('kue') === i)) return false; c.talls.splice(i, 1); return true; };
    const RED = [
      c => rmT(c, 'vg'), c => rmT(c, 'bs'), c => c.talls.filter(t => t === 'vo').length > 1 && rmT(c, 'vo'),
      c => c.mt ? (c.mt = 0, true) : false,
      c => c.sink > 80 ? (c.sink = 80, true) : false,
      c => c.cook && c.cook.w > 80 && c.cook.t === 'kf' ? (c.cook.w = 80, true) : false,
      c => c.cornerL && c.cornerL.t === 'el' && c.cornerL.w > 100 ? (c.cornerL.w = 100, true) : false,
      c => c.cornerR && c.cornerR.w > 90 ? (c.cornerR.w = 90, true) : false,
      c => rmT(c, 'vo'),
      c => c.talls.includes('ah') ? (rmT(c, 'ah'), c.apS = 30, true) : false,
      c => c.work > 30 ? (c.work = 30, true) : false,
      c => c.dw === 60 ? (c.dw = 45, true) : false,
      c => c.sink > 60 ? (c.sink = 60, true) : false,
      c => c.cook && c.cook.w > 60 ? (c.cook.w = 60, true) : false,
      c => c.talls.filter(t => t === 'kue').length > 1 ? rmT(c, 'kue') : false,
      c => c.apS ? (c.apS = 0, true) : false,
      c => c.cornerL && c.cornerL.t !== 'eb' && c.cornerL.t !== 'ek' ? (c.cornerL = { t: 'eb', w: 90 }, true) : false,
      c => c.cornerL && c.cornerL.t === 'ek' ? (c.cornerL = { t: 'eb', w: 90 }, true) : false,
      c => { const i = c.talls.findIndex(t => t === 'bo' || t === 'bm'); if (i < 0 || !c.cook || c.cook.t !== 'kf') return false; c.talls.splice(i, 1); c.cook = { t: 'ko', w: 60 }; return true; },
      c => c.fmin > 0 ? (c.fmin = 0, true) : false,
      c => c.work > 0 ? (c.work = 0, true) : false,
      c => c.dw ? (c.dw = 0, true) : false,
      c => rmT(c, 'ah') || rmT(c, 'bs') || rmT(c, 'vg') || rmT(c, 'vo'),
    ];
    // Wie viele cm fehlen (je Wand, aufsummiert)? – Reduktionen nur übernehmen, wenn sie genau dort helfen
    const short = c => { const sq = seqs(f, c); return walls.reduce((a, w) => { const need = sq[w].reduce((s2, x) => s2 + (x.F ? x.min : x.w), 0) - usableOf(w, sq, f, room); return a + Math.max(0, need); }, 0); };
    const tryLay = c => { const out = {}; for (const w of walls) { const sq = seqs(f, c); const r = layWall(sq[w], usableOf(w, sq, f, room), W.storage ? 'store' : ''); if (!r) return null; out[w] = r; } return out; };
    const clone = c => JSON.parse(JSON.stringify(c));
    let rows = null, c0 = ctx;
    for (let g = 0; g < 60; g++) {
      rows = tryLay(c0); if (rows) break;
      if (c0.dw) { const c2 = clone(c0); c2.dw = c0.dw === 60 ? 45 : 60; rows = tryLay(c2); if (rows) { c0 = c2; break; } }
      const sf = short(c0); let next = null;
      for (const red of RED) { const c2 = clone(c0); if (!red(c2)) continue; if (sf <= 0 || short(c2) < sf) { next = c2; break; } }
      if (!next) break; c0 = next;
    }
    Object.assign(ctx, c0);
    if (!rows) return null;
    const plan = { f, r: { w: room.w, d: room.d }, rw: rows, tp: {}, op: [], is: isl || { w: 180, v: 'kochfeld' }, s: null, ah: b.ah || cur.ah || 90 };
    walls.forEach(w => plan.tp[w] = (w === 'N' || f === 'zwei' || W.upAll || (W.storage && f !== 'u')) ? 1 : 0);
    if (W.noUp) walls.forEach(w => plan.tp[w] = 0);
    placeOps(plan, b, ww, sinkWall);
    plan.s = buildStyle(b, cur);
    if (W.mulde && Object.values(plan.rw).some(r => r.some(m => m[0] === 'kf' || m[0] === 'ko'))) plan.s.hobV = 'dd';
    // Ehrliche Hinweise: was gewünscht war, aber nicht hineinpasst
    const all = [].concat(...walls.map(w => rows[w].map(m => m[0]))), cnt = t => all.filter(x => x === t).length;
    if (W.apo === 'tall' && !cnt('ah')) notes.push(cnt('ap') ? 'Für den großen Apothekerschrank reicht die Wand nicht – darum ein schmaler Apotheker-Auszug direkt am Kochfeld.' : 'Für einen Apothekerschrank reicht der Platz leider nicht – im Planer lässt er sich gegen einen anderen Schrank tauschen.');
    if (W.apo === 'small' && !cnt('ap')) notes.push('Der schmale Apotheker-Auszug hat keinen Platz mehr gefunden – im Planer unter „Unten" einfach dazuziehen.');
    if (W.ovenHigh && !cnt('bo') && !cnt('bm')) notes.push('Für einen Backofen auf Augenhöhe ist die Wand zu knapp – darum ein Herd mit Backofen unter dem Kochfeld.');
    if (W.side && cnt('kue') < 2) notes.push('Für Kühl- und Gefrierschrank nebeneinander reicht der Platz nicht – geplant ist eine große Kühl-Gefrier-Kombination.');
    if (W.storage && !cnt('vo')) notes.push('Ein eigener Vorratsschrank passte nicht – Stauraum gibt es dafür in breiten Auszügen und Hängeschränken.');
    if (W.besen && !cnt('bs')) notes.push('Für den Besenschrank reicht die Wand nicht – Tipp: Flur oder Hauswirtschaftsraum.');
    if (W.vitrine && !cnt('vg')) notes.push('Die Vitrine hat keinen Platz mehr gefunden – im Planer gibt es auch Glas-Hängeschränke.');
    if (W.muell && !cnt('mt')) notes.push('Der Mülltrenner sitzt bei dieser Größe am besten im Spülenschrank.');
    if (!W.noDw && !cnt('gs') && !(isl && isl.v === 'spuele')) notes.push('Eine Spülmaschine passt bei dieser Wandlänge leider nicht hinein.');
    if (opt.herd && cnt('ko') && !W.herd) notes.push('Bei dieser Wandlänge sitzt der Backofen im Herd unter dem Kochfeld – so bleibt genug Arbeitsfläche zwischen Kochfeld und Spüle.');
    if (b.budget) notes.push(b.budget < 10000 ? `Für ca. ${eur(b.budget)} € ist alles bewusst schlicht geplant${cnt('eb') && !W.corner ? ' (Blindecke statt Le-Mans-Auszug)' : ''} – Geräte und Fronten stimmt ${person()} mit Ihnen auf das Budget ab.` : `Ihr Budget von ca. ${eur(b.budget)} € geht mit Ihrer Anfrage mit – die genaue Kalkulation macht ${person()} mit Ihnen.`);
    return { plan, notes: notes.filter(Boolean), ctx, sinkWall, ww, opt };
  }
  function mmcm(n) { const s = String(n); const v = /^\d{1,2}\.\d{3}$/.test(s) ? +s.replace('.', '') : parseFloat(s.replace(',', '.')); return Math.round(v / 10); }
  const eur = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const person = () => { const p = (window.KP && KP.person) || ''; return p && p !== 'Wir' ? p : 'das Studio'; };
  // Mehrere sinnvolle Varianten durchrechnen und die mit den wenigsten Kompromissen nehmen – gemessen mit den Live-Tipps des Planers
  function score(res, b) {
    let s = 0; const W = b.W, o = res.opt || {}, p = res.plan;
    let warns = []; try { if (window.KP && KP.tipsOf) warns = KP.tipsOf(p) || []; } catch (e) { warns = []; }
    warns.forEach(t => { const m = /Nur (\d+) cm Platz zwischen Spüle/.exec(t); s += m ? (+m[1] < 30 ? 9 : 4) : 6; });
    s += res.notes.filter(n => !/^Bei dieser Wandlänge sitzt der Backofen/.test(n)).length * 5;
    if (o.noDw) s += 3;
    if (o.herd) s += 3;
    if (o.altSink && (b.win.wall || /spüle\s+(unter|am|vor)\s+(dem\s+)?fenster/.test(b.raw || ''))) s += 3;
    if (!b.win.none && !p.op.some(x => x[0] === 'fenster')) s += 3;
    return s;
  }
  function generateBest(b, cur) {
    const W = b.W, V = [{}];
    if (b.form === 'l' || b.form === 'zwei') V.push({ altSink: 1 });
    if (!W.herd && !W.ovenHigh && !(b.form === 'insel' && b.isl.v === 'kochfeld')) V.slice().forEach(v => V.push(Object.assign({}, v, { herd: 1 })));
    if (!W.noDw) V.slice().forEach(v => V.push(Object.assign({}, v, { noDw: 1 })));
    let best = null, bs = Infinity;
    for (const o of V) {
      let r = null; try { r = generate(JSON.parse(JSON.stringify(b)), cur, o); } catch (e) { r = null; }
      if (!r || !valid(r.plan)) continue;
      const sc = score(r, b); if (sc < bs) { best = r; bs = sc; }
    }
    return best;
  }
  // Positionen entlang einer Wand
  function rangeStart(plan, w) { const N = plan.rw.N || []; if (w === 'E' && N.length) return 60 + (N[N.length - 1][0] === 'ek' && FORMS[plan.f].walls.includes('E') ? 30 : 0); return 0; }
  function spans(plan, w) { const out = []; let x = rangeStart(plan, w); (plan.rw[w] || []).forEach(m => { out.push({ t: m[0], x, w: m[1] }); x += m[1]; }); return out; }
  const wlen = (plan, w) => (w === 'N' || w === 'S') ? plan.r.w : plan.r.d;
  const ov = (a, aw, b, bw, pad = 2) => a + aw > b + pad && a < b + bw - pad;
  function blocked(plan, w, kind) {
    // belegte Bereiche einer Wand: Fenster → nur Hochschränke stören; Türen → jede Küchenzeile, auch die Tiefe der Nachbarwände
    const L = wlen(plan, w), out = [], rw = plan.rw, ws = FORMS[plan.f].walls;
    spans(plan, w).forEach(s => { if (kind !== 'fenster' || isTall(s.t) || s.t === 'kf' || s.t === 'ko') out.push([s.x, s.w]); });
    if (kind !== 'fenster' || !rw[w]) {
      // Ecken: Nachbarzeilen ragen 60 cm in die Wand
      if (w === 'W') { if (rw.N) out.push([L - 60, 60]); if (rw.S) out.push([0, 60]); }
      if (w === 'E') { if (rw.N) out.push([0, 60]); if (rw.S) out.push([L - 60, 60]); }
      if (w === 'S') { if (rw.E) out.push([0, 60]); if (rw.W) out.push([L - 60, 60]); }
      if (w === 'N') { if (rw.W) out.push([0, 60]); if (rw.E) out.push([L - 60, 60]); }
    }
    plan.op.filter(o => o[1] === w).forEach(o => out.push([o[2] - 15, o[3] + 30]));
    return out;
  }
  function fitOp(plan, w, kind, width, want) {
    const L = wlen(plan, w), mg = kind === 'fenster' ? 10 : 5, bl = blocked(plan, w, kind);
    const sizes = OPW[kind].filter(v => v <= width).reverse(); if (!sizes.length) sizes.push(OPW[kind][0]);
    for (const ow of sizes) {
      if (ow > L - 2 * mg) continue;
      const cand = new Set([want - ow / 2]); bl.forEach(([a, bw]) => { cand.add(a + bw); cand.add(a - ow); }); cand.add(mg); cand.add(L - ow - mg);
      const ok = [...cand].map(s => Math.round(clamp(s, mg, L - ow - mg) / 5) * 5).filter(s => !bl.some(([a, bw]) => ov(s, ow, a, bw))).sort((p, q) => Math.abs(p + ow / 2 - want) - Math.abs(q + ow / 2 - want));
      if (ok.length) return [kind, w, ok[0], ow];
      if (kind === 'fenster' && ow <= 60) break;
    }
    return null;
  }
  function placeOps(plan, b, ww, sinkWall) {
    const walls = FORMS[plan.f].walls, free = ['S', 'E', 'W', 'N'].filter(w => !walls.includes(w));
    // Fenster
    if (!b.win.none) {
      let w = ww || sinkWall, want;
      if (plan.rw[w]) { const sp = spans(plan, w).find(s => s.t === 'sp'); want = sp ? sp.x + sp.w / 2 : wlen(plan, w) / 2; }
      else want = wlen(plan, w) / 2;
      const o = fitOp(plan, w, 'fenster', b.win.w || 120, want) || (plan.rw[w] ? null : fitOp(plan, w, 'fenster', 100, want));
      if (o) plan.op.push(o);
    }
    // Tür
    const pref = { zeile: ['S', 'E', 'W'], insel: ['S', 'E', 'W'], l: ['E', 'S'], u: ['S'], zwei: ['W', 'E'] }[plan.f];
    let dw = b.door.wall && !walls.includes(b.door.wall) ? b.door.wall : null;
    const order = (dw ? [dw] : []).concat(pref, free).filter((x, i, a) => a.indexOf(x) === i && !walls.includes(x));
    for (const w of order) { const o = fitOp(plan, w, 'tuer', b.door.w || 90, wlen(plan, w) / 2); if (o) { plan.op.push(o); break; } }
    if (b.balkon) {
      const bo = order.filter(w => !plan.op.some(o => o[1] === w)).concat(order);
      for (const w of bo) { const o = fitOp(plan, w, 'balkon', 120, wlen(plan, w) * (plan.op.some(q => q[1] === w) ? 0.75 : 0.5)); if (o) { plan.op.push(o); break; } }
    }
  }
  function buildStyle(b, cur) {
    // Neue Frontfarbe genannt → frischer, stimmiger Grundstil (Griffe/Platte/Rahmen nicht vom alten Entwurf erben); sonst aktuellen Stil behalten
    const st = b.style, fresh = st.front != null || st.wood != null;
    const base = b.look ? Object.assign({}, LOOKS[b.look], { look: b.look }) : fresh ? Object.assign({}, DEF_STYLE, cur.style || {}, { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', frame: 0, look: null }) : Object.assign({}, DEF_STYLE, cur.style || {});
    const s = Object.assign({}, base);
    if (st.front) { s.front = st.front; s.wood = null; }
    if (st.wood) { s.wood = st.wood; }
    ['handle', 'top', 'finish', 'floor', 'wall', 'back', 'sink', 'tap', 'hood', 'ihood'].forEach(k => { if (st[k] != null) s[k] = st[k]; });
    const extra = {}; if (cur.style) for (const k in cur.style) if (!(k in DEF_STYLE) && !['look', 'frame', 'back', 'hobV'].includes(k) && /^(string|number)$/.test(typeof cur.style[k]) && String(cur.style[k]).length < 24) extra[k] = cur.style[k];
    if (st.frame != null) s.frame = st.frame;
    if (b.look === 'landhaus' && !st.handle && s.front === '#232426') s.handle = 'gold';
    if (s.look && (st.front || st.wood || st.handle || st.top) && JSON.stringify(Object.assign({}, LOOKS[s.look], { look: s.look })) !== JSON.stringify(s)) { /* bleibt Ausgangsstil, Details angepasst */ }
    return Object.assign(extra, cleanStyle(s));
  }
  function cleanStyle(s0) {
    const s = Object.assign({}, DEF_STYLE, s0 || {}), out = {};
    out.front = FRONTS.some(f => f[1] === s.front) ? s.front : '#f1eee8';
    out.wood = s.wood === 'eiche' || s.wood === 'nuss' ? s.wood : null;
    out.handle = HANDLES[s.handle] ? s.handle : 'grifflos';
    out.top = TOPS[s.top] ? s.top : 'eiche';
    out.finish = FINISH[s.finish] ? s.finish : 'matt';
    out.wall = WALLC.includes(s.wall) ? s.wall : '#f3efe9';
    out.floor = FLOORS.includes(s.floor) ? s.floor : 'eiche';
    if (s.frame != null) out.frame = s.frame ? 1 : 0;
    if (BACKS.includes(s.back)) out.back = s.back;
    if (LOOKS[s.look]) out.look = s.look;
    const EQ = { sink: ['edel', 'gschwarz', 'ganth', 'gweiss', 'kweiss'], tap: ['chrom', 'edel', 'schwarz', 'gold'], hood: ['schraeg', 'esse', 'flach', 'decke'], ihood: ['mulde', 'insel', 'decke'], hobV: ['normal', 'dd'] };
    for (const k in EQ) if (EQ[k].includes(s[k])) out[k] = s[k];
    return out;
  }

  /* ================= 3) Begründung (lokal) ================= */
  function whyOf(res, b) {
    const p = res.plan, f = p.f, S = [], all = [];
    for (const w in p.rw) spans(p, w).forEach(s => all.push(Object.assign({ wall: w }, s)));
    const sp = all.find(s => s.t === 'sp'), cook = all.find(s => s.t === 'kf' || s.t === 'ko'), win = p.op.find(o => o[0] === 'fenster');
    S.push(`Für Ihren Raum mit ${mtr(p.r.w)} × ${mtr(p.r.d)} m habe ich eine ${FORMS[f].n} geplant${b.formSaid ? '' : f === 'l' ? ' – über Eck entsteht die meiste Arbeitsfläche' : ''}.`);
    if (sp) {
      const under = win && win[1] === sp.wall && ov(sp.x, sp.w, win[2], win[3], 0);
      S.push(`Die Spüle sitzt ${under ? 'direkt unter dem Fenster' : WAN[sp.wall]}${all.some(s => s.t === 'gs') ? ', die Spülmaschine gleich daneben – kurze Wege beim Abräumen' : ''}.`);
    } else if (f === 'insel' && p.is.v === 'spuele') S.push('Gespült wird auf der Insel, mit Blick in den Raum – die Wand bleibt fürs Kochen frei.');
    if (f === 'insel' && p.is.v === 'kochfeld') S.push(`Gekocht wird auf der ${p.is.w} cm breiten Kochinsel – Sie stehen dabei mit dem Gesicht zum Raum statt zur Wand.`);
    else if (cook && sp && cook.wall === sp.wall) {
      const lo = Math.min(cook.x + cook.w, sp.x + sp.w), hi = Math.max(cook.x, sp.x); const gap = Math.max(0, hi - lo);
      S.push(`Zwischen ${cook.t === 'ko' ? 'Herd' : 'Kochfeld'} und Spüle bleiben ${gap} cm Arbeitsfläche zum Schnippeln${all.some(s => s.t === 'ap') ? ', direkt am Kochfeld ein schmaler Apotheker für Gewürze und Öle' : ''}.`);
    } else if (cook && f === 'insel') S.push(`${cook.t === 'ko' ? 'Der Herd' : 'Das Kochfeld'} sitzt an der Rückwand, die Spüle auf der Insel direkt dahinter – eine Drehung, und Sie sind am Becken.`);
    else if (cook) S.push(`${cook.t === 'ko' ? 'Der Herd' : 'Das Kochfeld'} liegt ${f === 'zwei' ? 'gegenüber der Spüle – ein Schritt zurück, und Sie sind am Spülbecken' : 'über Eck zur Spüle – das klassische Arbeitsdreieck mit kurzen Wegen'}${all.some(s => s.t === 'ap') ? ', daneben ein schmaler Apotheker für Gewürze' : ''}.`);
    const tl = all.filter(s => isTall(s.t)).map(s => NM[s.t]);
    const uniq = tl.filter((x, i) => tl.indexOf(x) === i).map(x => x === 'Kühlschrank' && tl.filter(y => y === x).length > 1 ? 'Kühl- und Gefrierschrank' : x);
    if (uniq.length) S.push(`${list(uniq)} ${uniq.length > 1 ? 'stehen als Hochschrank-Block' : 'steht als Hochschrank'} am Wandende – so bleibt die Arbeitsfläche durchgehend frei${b.W.ovenHigh && tl.includes('Backofen') ? ', und der Backofen ist rückenschonend auf Augenhöhe' : ''}.`);
    const s = p.s, fr = s.wood ? (s.wood === 'nuss' ? 'Nussbaum' : 'Eiche') : (FRONTS.find(x => x[1] === s.front) || ['Weiß'])[0];
    S.push(`Fronten in ${fr} ${FINISH[s.finish]}${s.frame ? ' mit Rahmen im Landhausstil' : ''}, ${HANDLES[s.handle]}, Arbeitsplatte ${TOPS[s.top]}${b.W.mulde ? (s.hobV === 'dd' ? ' – der Muldenlüfter saugt direkt am Kochfeld ab, darum hängt keine Haube darüber' : f === 'insel' ? ' – der Muldenlüfter sitzt direkt im Kochfeld der Insel' : '') : ''}.`);
    return S.slice(0, 5).join(' ');
  }
  const list = a => a.length < 2 ? (a[0] || '') : a.slice(0, -1).join(', ') + ' und ' + a[a.length - 1];

  /* ================= 4) Server-Antwort prüfen und reparieren ================= */
  function extractJSON(tx) { if (!tx) return null; if (typeof tx === 'object') return tx; const a = tx.indexOf('{'), z = tx.lastIndexOf('}'); if (a < 0 || z <= a) return null; try { return JSON.parse(tx.slice(a, z + 1)); } catch (e) { return null; } }
  function fitRow(row, L, keepEnds) {
    let r = row.map(m => m.slice()), sum = () => r.reduce((s, m) => s + m[1], 0), guard = 0;
    const fillIdx = () => { for (let i = r.length - 1; i >= 0; i--) if (FILL.includes(r[i][0])) return i; return -1; };
    while (sum() > L && guard++ < 60) {
      const over = sum() - L, i = fillIdx();
      if (i >= 0) { const x = r[i], fit = M[x[0]].ws.filter(v => v <= x[1] - over && v >= 30).pop(); if (fit) x[1] = fit; else r.splice(i, 1); continue; }
      const j = ['mt', 'vg', 'bs', 'vo', 'ah'].map(t => r.map(m => m[0]).lastIndexOf(t)).find(k => k >= 0);
      if (j != null && j >= 0) { r.splice(j, 1); continue; }
      const k = r.findIndex(m => (m[0] === 'sp' || m[0] === 'kf') && m[1] > 60) ; if (k >= 0) { r[k][1] = 60; continue; }
      const g = r.findIndex(m => m[0] === 'gs' && m[1] > 45); if (g >= 0) { r[g][1] = 45; continue; }
      const ex = r.findIndex(m => M[m[0]].c && m[1] > M[m[0]].ws[0]); if (ex >= 0) { r[ex][1] = M[r[ex][0]].ws[0]; continue; }
      const tt = r.map(m => m[0]).lastIndexOf('bo'); if (tt >= 0) { r.splice(tt, 1); continue; }
      return null;
    }
    let diff = L - sum();
    if (diff > 0) {
      // Füllstücke einsetzen – nicht hinter Hochschränke/Ecke am Wandende, sondern davor
      let pos = r.length; if (keepEnds) while (pos > 0 && (isTall(r[pos - 1][0]) || M[r[pos - 1][0]].c)) pos--;
      if (pos === 0) pos = r.length;
      const grow = r.findIndex(m => FILL.includes(m[0]) && M[m[0]].ws.includes(m[1] + diff));
      if (diff < 30 && grow >= 0) r[grow][1] += diff;
      else {
        let parts = decompose(diff) || null;
        if (!parts) { const sh = r.findIndex(m => m[0] === 'us' && m[1] >= 60); if (sh >= 0) { const nw = M.us.ws.filter(v => v < r[sh][1] && decompose(diff + r[sh][1] - v)).pop(); if (nw) { diff += r[sh][1] - nw; r[sh][1] = nw; parts = decompose(diff); } } }
        if (!parts) parts = decompose(diff, true);
        if (!parts) return null;
        r.splice(pos, 0, ...parts.map(p => [p < 30 ? 'fa' : 'us', p]));
      }
    }
    return sum() === L ? r : null;
  }
  function repair(raw, b, cur) {
    const o = extractJSON(raw); if (!o || typeof o !== 'object') return null;
    let f = FORMS[o.f] ? o.f : FORMS[o.form] ? o.form : b.form;
    const r0 = o.r || o.room || {}, room = { w: clamp(r10(+r0.w || b.room.w), 240, 800), d: clamp(r10(+r0.d || b.room.d), 240, 700) };
    if (f === 'insel' && room.d < 380) f = 'zeile';
    const rw0 = o.rw || o.rows || {}, walls = FORMS[f].walls, plan = { f, r: room, rw: {}, tp: {}, op: [], is: { w: 180, v: 'kochfeld' }, s: null, ah: 90 };
    const norm = it => { if (!Array.isArray(it)) it = it && typeof it === 'object' ? [it.t || it.typ, it.w || it.breite] : []; const t = String(it[0] || '').toLowerCase(), w = +it[1]; if (!M[t] || M[t].h === 'u') return null; const q = it[2] && typeof it[2] === 'object' ? it[2] : null; const m = [t, snap(M[t].ws, w || M[t].ws[0])]; if (q && q.a && (q.a === 'l' || q.a === 'r')) m.push({ a: q.a }); return m; };
    for (const w of walls) {
      let row = (Array.isArray(rw0[w]) ? rw0[w] : []).map(norm).filter(Boolean);
      row = row.map((m, i) => { if (!M[m[0]].c) return m; const okL = w === 'N' && i === 0 && walls.includes('W'), okR = w === 'N' && i === row.length - 1 && walls.includes('E'); return okL || okR ? m : ['us', snap(M.us.ws, m[1])]; });
      if (w === 'N' && walls.includes('W') && !(row[0] && M[row[0][0]].c)) row.unshift(['eb', 90]);
      if (w === 'N' && walls.includes('E') && !(row.length > 1 && M[row[row.length - 1][0]].c)) row.push(['eb', 90]);
      plan.rw[w] = row;
    }
    // Pflicht: Spüle, Kochstelle, Kühlschrank
    const isl0 = o.is || o.island || {}; plan.is = { w: snap(ISW, +isl0.w || 180), v: ['kochfeld', 'spuele', 'frei'].includes(isl0.v) ? isl0.v : 'kochfeld' };
    const all = [].concat(...walls.map(w => plan.rw[w].map(m => m[0])));
    const isl = f === 'insel';
    if (!(all.includes('sp') || (isl && plan.is.v === 'spuele'))) return null;
    if (!(all.includes('kf') || all.includes('ko') || (isl && plan.is.v === 'kochfeld'))) return null;
    if (!all.includes('kue')) return null;
    for (const w of walls) { const L = usableOf(w, { N: (plan.rw.N || []).map(m => ({ t: m[0] })) }, f, room), r = fitRow(plan.rw[w], L, true); if (!r) return null; plan.rw[w] = r; }
    const tp = o.tp || {}; walls.forEach(w => plan.tp[w] = tp[w] != null ? (tp[w] ? 1 : 0) : (w === 'N' || f === 'zwei' ? 1 : 0));
    // Öffnungen
    (Array.isArray(o.op) ? o.op : []).forEach(x => {
      if (!Array.isArray(x)) return; const t = x[0], w = x[1]; if (!OPW[t] || !['N', 'E', 'S', 'W'].includes(w)) return;
      const ow = snap(OPW[t], +x[3] || OPW[t][2]), L = wlen(plan, w), mg = t === 'fenster' ? 10 : 5; if (ow > L - 2 * mg) return;
      const s = Math.round(clamp(+x[2] || 0, mg, L - ow - mg) / 5) * 5;
      const bl = blocked(plan, w, t === 'fenster' ? 'fenster' : 'tuer');
      if (bl.some(([a, bw]) => ov(s, ow, a, bw))) { const alt = fitOp(plan, w, t === 'balkon' ? 'balkon' : t, ow, s + ow / 2); if (alt && (t === 'fenster' || !walls.includes(w))) plan.op.push(alt); return; }
      plan.op.push([t, w, s, ow]);
    });
    if (!plan.op.some(x => x[0] === 'tuer' || x[0] === 'balkon')) placeOps(plan, Object.assign({}, b, { win: { none: true }, balkon: false }), null, 'N');
    plan.s = cleanStyle(Object.assign({}, o.s || o.style || {}));
    // Stilwünsche aus dem Text haben Vorrang, falls die KI sie übersehen hat
    const loc = buildStyle(b, cur); ['front', 'wood', 'handle', 'top', 'finish', 'frame', 'back', 'floor', 'wall', 'sink', 'tap', 'hood', 'ihood'].forEach(k => { if (b.style[k] != null) plan.s[k] = loc[k]; });
    if (b.W.mulde && Object.values(plan.rw).some(r => r.some(m => m[0] === 'kf' || m[0] === 'ko'))) plan.s.hobV = 'dd';
    if (b.style.front) plan.s.wood = null;
    plan.ah = clamp(Math.round(+o.ah || b.ah || cur.ah || 90), 84, 106);
    const why = typeof o.why === 'string' ? o.why.replace(/\s+/g, ' ').trim().slice(0, 900) : '';
    return { plan, why };
  }
  function valid(plan) {
    try { if (window.KP && KP.stateOf) { const r = KP.stateOf(plan); if (!r || !r.state || !r.state.items || !r.state.items.length) return false; } } catch (e) { return false; }
    const N = plan.rw.N || [], ws = FORMS[plan.f].walls;
    if (ws.includes('W') && !(N[0] && M[N[0][0]].c)) return false;
    if (ws.includes('E') && !(N.length > 1 && M[N[N.length - 1][0]].c)) return false;
    for (const w in plan.rw) { const L = usableOf(w, { N: (plan.rw.N || []).map(m => ({ t: m[0] })) }, plan.f, plan.r), s = plan.rw[w].reduce((a, m) => a + m[1], 0); if (s !== L) return false; }
    return true;
  }
  function localPlan(text, cur) {
    const b = parse(text, cur);
    let res = generateBest(b, cur);
    if (!res) { b.form = 'l'; b.room = { w: Math.max(b.room.w, 300), d: Math.max(b.room.d, 300) }; res = generateBest(b, cur); }
    if (!res) return null;
    return { plan: res.plan, why: whyOf(res, b), notes: res.notes, got: b.got, brief: b, src: 'local' };
  }
  async function askServer(text, cur) {
    const el = document.querySelector('[data-kp]'), hook = String((window.KPAI_HOOK != null ? window.KPAI_HOOK : (el && el.dataset.kpaiHook)) || HOOK || '').trim();
    if (!/^https:\/\/[^\s"'<>]+$/i.test(hook)) return null;
    if (srvCount >= MAXREQ) return null; let sc = 0; try { sc = +sessionStorage.getItem('kpai-n') || 0; } catch (e) { }
    if (sc >= MAXSESS) return null; srvCount++; try { sessionStorage.setItem('kpai-n', sc + 1); } catch (e) { }
    const ctl = typeof AbortController === 'function' ? new AbortController() : null, tm = setTimeout(() => ctl && ctl.abort(), TIMEOUT);
    try {
      const body = new URLSearchParams({ text: text.slice(0, MAXLEN), form: cur.form, studio: (window.KP && KP.studio) || 'Küchenstudio', room: cur.room.w + 'x' + cur.room.d });
      const r = await fetch(hook, { method: 'POST', body, signal: ctl ? ctl.signal : undefined, credentials: 'omit', cache: 'no-store' });
      if (!r.ok) return null; return await r.text();
    } catch (e) { return null; } finally { clearTimeout(tm); }
  }
  let srvCount = 0;
  async function plan(text, cur) {
    const loc = localPlan(text, cur);
    const raw = await askServer(text, cur);
    if (raw) {
      const rp = repair(raw, loc ? loc.brief : parse(text, cur), cur);
      if (rp && valid(rp.plan)) return { plan: rp.plan, why: rp.why || (loc ? loc.why : ''), notes: loc && loc.brief.islDropped && rp.plan.f !== 'insel' ? loc.notes : [], got: loc ? loc.got : [], src: 'server' };
    }
    return loc;
  }

  /* ================= 5) Grundriss-Skizze ================= */
  function planSvg(p) {
    const W = p.r.w, D = p.r.d, pad = 34, out = [];
    const fit = (lab, w) => lab.length * 8.8 > w - 6 ? ` textLength="${Math.max(10, w - 8)}" lengthAdjust="spacingAndGlyphs"` : '';
    const rect = (x, y, w, h, cls, i, lab) => out.push(`<g class="kpai-m ${cls}" style="--i:${i}"><rect x="${x + .8}" y="${y + .8}" width="${Math.max(1, w - 1.6)}" height="${Math.max(1, h - 1.6)}" rx="3"/>${lab ? `<text x="${x + w / 2}" y="${y + h / 2}" dy=".35em"${fit(lab, Math.min(w, h > w ? 60 : w))}>${lab}</text>` : ''}</g>`);
    const LB = { sp: 'Spüle', kf: 'Kochfeld', ko: 'Herd', gs: 'SM', kue: 'Kühl', bo: 'Ofen', bm: 'Ofen', vo: 'Vorrat', ah: 'Apo', bs: 'Besen', vg: 'Vitr.', mt: 'Müll', ek: '', el: '', eb: '' };
    const cls = t => isTall(t) ? 'tall' : (t === 'sp' || t === 'kf' || t === 'ko' || t === 'gs') ? 'dev' : M[t].c ? 'cor' : 'base';
    let i = 0;
    for (const w in p.rw) spans(p, w).forEach(s => {
      const lab = s.w >= 50 ? (LB[s.t] != null ? LB[s.t] : '') : '';
      if (w === 'N') rect(s.x, 0, s.w, 60, cls(s.t), i++, lab);
      if (w === 'S') rect(W - s.x - s.w, D - 60, s.w, 60, cls(s.t), i++, lab);
      if (w === 'W') rect(0, D - s.x - s.w, 60, s.w, cls(s.t), i++, s.w >= 60 ? lab : '');
      if (w === 'E') rect(W - 60, s.x, 60, s.w, cls(s.t), i++, s.w >= 60 ? lab : '');
    });
    if (p.f === 'insel') { const zc = Math.max(210, Math.min(D - 120, 225)); rect(W / 2 - p.is.w / 2, zc - 50, p.is.w, 100, 'isl', i++, p.is.v === 'kochfeld' ? 'Insel · Kochfeld' : p.is.v === 'spuele' ? 'Insel · Spüle' : 'Insel'); }
    const ops = p.op.map(o => {
      const [t, w, s, ow] = o; let x1, y1, x2, y2;
      if (w === 'N') { x1 = s; y1 = 0; x2 = s + ow; y2 = 0; } if (w === 'S') { x1 = W - s; y1 = D; x2 = W - s - ow; y2 = D; }
      if (w === 'W') { x1 = 0; y1 = D - s; x2 = 0; y2 = D - s - ow; } if (w === 'E') { x1 = W; y1 = s; x2 = W; y2 = s + ow; }
      return `<line class="kpai-op ${t}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    }).join('');
    const dim = `<g class="kpai-dim"><text x="${W / 2}" y="${-14}">${mtr(W)} m</text><text x="${-14}" y="${D / 2}" transform="rotate(-90 ${-14} ${D / 2})">${mtr(D)} m</text></g>`;
    return `<svg class="kpai-plan" viewBox="${-pad} ${-pad} ${W + 2 * pad} ${D + 2 * pad}" role="img" aria-label="Grundriss des Entwurfs"><rect class="kpai-floor" x="0" y="0" width="${W}" height="${D}"/>${out.join('')}<rect class="kpai-wall" x="0" y="0" width="${W}" height="${D}"/>${ops}${dim}</svg>`;
  }

  /* ================= 6) Oberfläche ================= */
  const ICO = {
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z" opacity=".7"/></svg>',
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const EX = 'L-Küche, Raum 3,80 × 2,60 m, Fenster an der langen Wand, Spüle unter dem Fenster, großer Kühlschrank, Backofen auf Augenhöhe, viel Stauraum, Kochinsel wäre toll, grifflos in Sandgrau mit Eiche';
  const CHIPS_F = [['Küchenzeile', 'Küchenzeile'], ['L-Küche', 'L-Küche'], ['U-Küche', 'U-Küche'], ['Zweizeilig', 'zweizeilig'], ['Kochinsel', 'Kochinsel']];
  const CHIPS_W = [['Apothekerschrank', 'Apothekerschrank'], ['Backofen hoch', 'Backofen auf Augenhöhe'], ['Großer Kühlschrank', 'großer Kühlschrank'], ['Muldenlüfter', 'Muldenlüfter'], ['Viel Stauraum', 'viel Stauraum'], ['Mülltrenner', 'Mülltrenner'], ['Landhaus', 'Landhausstil'], ['Grifflos', 'grifflos'], ['Dunkel & elegant', 'dunkel und elegant'], ['Hell & Holz', 'weiß mit Eiche'], ['Ohne Hängeschränke', 'keine Hängeschränke']];
  const STAT = ['Raum wird vermessen …', 'Fenster und Türen werden eingezeichnet …', 'Spüle an das Fenster …', 'Arbeitsdreieck wird optimiert …', 'Hochschränke werden gebündelt …', 'Stauraum wird verteilt …', 'Farben und Griffe werden abgestimmt …', 'Letzter Feinschliff …'];
  const RMO = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

  let ov_ = null, lastFocus = null, result = null;
  function build() {
    const el = document.createElement('div'); el.className = 'kpai'; el.hidden = true; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'kpai-t');
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    el.innerHTML = `<div class="kpai-bg" data-kpai-x></div>
<div class="kpai-box" data-lenis-prevent>
  <button type="button" class="kpai-x" data-kpai-x aria-label="Schließen">×</button>
  <section class="kpai-s on" data-s="in">
    <p class="kpai-k">${ICO.spark}<span>KI-Planung</span></p>
    <h2 class="kpai-h" id="kpai-t">Erzählen Sie uns von Ihrer Küche.<em>Wir planen sie ein.</em></h2>
    <p class="kpai-p">Raum, Fenster, Wünsche, Farben – ganz in Ihren Worten. Sekunden später steht ein durchdachter Entwurf im Planer, den Sie danach nur noch nach Lust und Laune verfeinern.</p>
    <div class="kpai-ta"><textarea maxlength="${MAXLEN}" rows="5" placeholder="z. B. ${esc(EX)}" aria-label="Ihre Küche in eigenen Worten"></textarea>
      <div class="kpai-tab">${SR ? `<button type="button" class="kpai-mic" aria-pressed="false">${ICO.mic}<span>Einsprechen</span></button>` : ''}<button type="button" class="kpai-ex">Beispiel einsetzen</button><span class="kpai-cnt">0 / ${MAXLEN}</span></div></div>
    <p class="kpai-l">Form</p><div class="kpai-chips" data-g="f">${CHIPS_F.map(([n, s]) => `<button type="button" data-ph="${esc(s)}">${n}</button>`).join('')}</div>
    <p class="kpai-l">Wünsche – einfach antippen</p><div class="kpai-chips">${CHIPS_W.map(([n, s]) => `<button type="button" data-ph="${esc(s)}">${n}</button>`).join('')}</div>
    <div class="kpai-go"><button type="button" class="kpai-btn" data-kpai-run>${ICO.spark}<span>Küche planen lassen</span></button><p class="kpai-fine">Kostenlos und unverbindlich. Ihre Beschreibung wird nur für diesen Entwurf verwendet – bitte keine persönlichen Daten eingeben.</p></div>
    <p class="kpai-err" aria-live="polite"></p>
  </section>
  <section class="kpai-s" data-s="run" aria-live="polite">
    <div class="kpai-sk" aria-hidden="true"><svg viewBox="0 0 320 230"><defs><pattern id="kpai-g" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="currentColor" stroke-opacity=".09"/></pattern></defs>
      <rect x="20" y="20" width="280" height="190" fill="url(#kpai-g)"/>
      <path class="kpai-dr" pathLength="1" d="M20 20H300V210H20Z"/>
      <path class="kpai-dr d2" pathLength="1" d="M20 6H300M6 20V210"/>
      <g class="kpai-bl"><rect style="--i:0" x="22" y="22" width="34" height="34"/><rect style="--i:1" x="56" y="22" width="44" height="34"/><rect class="a" style="--i:2" x="100" y="22" width="48" height="34"/><rect style="--i:3" x="148" y="22" width="38" height="34"/><rect class="a" style="--i:4" x="186" y="22" width="50" height="34"/><rect class="a" style="--i:5" x="236" y="22" width="36" height="34"/><rect style="--i:6" x="272" y="22" width="26" height="34"/>
      <rect class="t" style="--i:7" x="22" y="170" width="34" height="38"/><rect class="t" style="--i:8" x="22" y="132" width="34" height="38"/><rect style="--i:9" x="22" y="56" width="34" height="76"/>
      <rect class="i" style="--i:10" x="120" y="110" width="110" height="52"/></g>
      <path class="kpai-win" d="M186 20H236"/><line class="kpai-scan" x1="20" y1="20" x2="20" y2="210"/></svg></div>
    <p class="kpai-st">Planung läuft …</p><div class="kpai-bar"><i></i></div>
  </section>
  <section class="kpai-s" data-s="res">
    <p class="kpai-k">${ICO.spark}<span>Ihr Entwurf ist fertig</span></p>
    <div class="kpai-rg"><div class="kpai-pv"></div><div class="kpai-rt"><h3 class="kpai-h3"></h3><div class="kpai-got"></div><p class="kpai-why"></p><ul class="kpai-notes"></ul></div></div>
    <div class="kpai-go row"><button type="button" class="kpai-btn" data-kpai-apply>${ICO.spark}<span>Plan übernehmen</span></button><button type="button" class="kpai-ghost" data-kpai-back>Text ändern</button></div>
    <p class="kpai-fine">Im Planer passen Sie danach alles frei an – jeden Schrank, jede Breite, jede Farbe.</p>
  </section>
</div>`;
    document.body.appendChild(el);
    const ta = el.querySelector('textarea'), cnt = el.querySelector('.kpai-cnt');
    const sync = () => { cnt.textContent = `${ta.value.length} / ${MAXLEN}`; el.querySelectorAll('[data-ph]').forEach(b => b.classList.toggle('on', ta.value.toLowerCase().includes(b.dataset.ph.toLowerCase()))); };
    ta.addEventListener('input', sync);
    el.querySelector('.kpai-ex').addEventListener('click', () => { ta.value = EX; sync(); ta.focus(); });
    el.addEventListener('click', e => {
      if (e.target.closest('[data-kpai-x]')) return close();
      const ch = e.target.closest('[data-ph]');
      if (ch) {
        const ph = ch.dataset.ph, v = ta.value; const i = v.toLowerCase().indexOf(ph.toLowerCase());
        if (i >= 0) ta.value = (v.slice(0, i) + v.slice(i + ph.length)).replace(/\s*,\s*,/g, ',').replace(/^\s*,\s*|\s*,\s*$/g, '').trim();
        else {
          let base = v.trim();
          if (ch.closest('[data-g="f"]')) CHIPS_F.forEach(([, s]) => { const k = base.toLowerCase().indexOf(s.toLowerCase()); if (k >= 0) base = (base.slice(0, k) + base.slice(k + s.length)).replace(/\s*,\s*,/g, ',').replace(/^\s*,\s*|\s*,\s*$/g, '').trim(); });
          ta.value = (base ? base.replace(/[,.\s]+$/, '') + ', ' : '') + ph;
        }
        ta.value = ta.value.slice(0, MAXLEN); sync(); return;
      }
      if (e.target.closest('[data-kpai-run]')) return run();
      if (e.target.closest('[data-kpai-back]')) return show('in');
      if (e.target.closest('[data-kpai-apply]')) return apply();
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && el.querySelector('[data-s="in"].on')) run();
      if (e.key === 'Tab') { const f = [...el.querySelectorAll('.kpai-s.on button, .kpai-s.on textarea, .kpai-x')].filter(x => x.offsetParent); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    });
    // Mikrofon
    const mic = el.querySelector('.kpai-mic');
    if (mic && SR) {
      let rec = null, base = '';
      mic.addEventListener('click', () => {
        if (rec) { rec.stop(); return; }
        try { rec = new SR(); } catch (e) { mic.remove(); return; }
        rec.lang = 'de-DE'; rec.interimResults = true; rec.continuous = true; base = ta.value.trim();
        rec.onresult = ev => { let s = ''; for (let i = 0; i < ev.results.length; i++) s += ev.results[i][0].transcript; ta.value = ((base ? base + ' ' : '') + s.trim()).slice(0, MAXLEN); sync(); };
        rec.onend = () => { rec = null; mic.classList.remove('on'); mic.setAttribute('aria-pressed', 'false'); mic.querySelector('span').textContent = 'Einsprechen'; };
        rec.onerror = () => { if (rec) try { rec.stop(); } catch (e) { } };
        try { rec.start(); mic.classList.add('on'); mic.setAttribute('aria-pressed', 'true'); mic.querySelector('span').textContent = 'Hört zu … (tippen zum Beenden)'; } catch (e) { rec = null; }
      });
    }
    return el;
  }
  function accent() {
    const root = document.querySelector('[data-kp]'), a = (window.KP && KP.acc) || (root && root.dataset.acc);
    if (a && /^#[0-9a-f]{3,8}$/i.test(a)) document.documentElement.style.setProperty('--kpai-acc', a);
  }
  function show(s) {
    ov_.querySelectorAll('.kpai-s').forEach(x => x.classList.toggle('on', x.dataset.s === s));
    const box = ov_.querySelector('.kpai-box'); box.scrollTop = 0;
    if (s === 'in') setTimeout(() => ov_.querySelector('textarea').focus(), 30);
    if (s === 'res') setTimeout(() => ov_.querySelector('[data-kpai-apply]').focus(), 30);
  }
  function open(pre) {
    if (!ov_) ov_ = build(); accent();
    lastFocus = document.activeElement; ov_.hidden = false; document.documentElement.classList.add('kpai-lock'); try { window.__lenis && window.__lenis.stop(); } catch (e) { }
    requestAnimationFrame(() => ov_.classList.add('in'));
    if (pre) { const ta = ov_.querySelector('textarea'); ta.value = pre; ta.dispatchEvent(new Event('input')); }
    show('in');
  }
  function close() {
    if (!ov_ || ov_.hidden) return; ov_.classList.remove('in'); document.documentElement.classList.remove('kpai-lock'); try { window.__lenis && window.__lenis.start(); } catch (e) { }
    setTimeout(() => { ov_.hidden = true; }, RMO ? 0 : 260); if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  let busy = false;
  async function run() {
    if (busy) return; const ta = ov_.querySelector('textarea'), err = ov_.querySelector('.kpai-err'); const text = ta.value.trim().slice(0, MAXLEN);
    if (text.length < 4) { err.textContent = 'Beschreiben Sie kurz Ihren Raum oder Ihre Wünsche – oder tippen Sie ein paar Wünsche an.'; ta.focus(); return; }
    err.textContent = ''; busy = true; show('run');
    const st = ov_.querySelector('.kpai-st'), bar = ov_.querySelector('.kpai-bar i'); let k = 0; st.textContent = STAT[0];
    const iv = setInterval(() => { k = Math.min(STAT.length - 1, k + 1); st.textContent = STAT[k]; }, 650);
    const t0 = Date.now(); bar.style.transitionDuration = (RMO ? 0.6 : MINWAIT / 1000 + 1.5) + 's'; requestAnimationFrame(() => bar.style.width = '92%');
    let res = null; const cur = current();
    try { res = await plan(text, cur); } catch (e) { res = null; }
    if (!res) try { res = localPlan(text, cur); } catch (e) { res = null; }
    const wait = (RMO ? 500 : MINWAIT) - (Date.now() - t0); if (wait > 0) await new Promise(r => setTimeout(r, wait));
    clearInterval(iv); bar.style.transitionDuration = '.25s'; bar.style.width = '100%'; busy = false;
    setTimeout(() => { bar.style.transitionDuration = '0s'; bar.style.width = '0'; }, 400);
    if (!res) { show('in'); err.textContent = 'Das hat leider nicht geklappt – bitte etwas anders formulieren.'; return; }
    res.text = text; result = res; renderResult(res);
    show('res');
  }
  function renderResult(r) {
    const p = r.plan;
    ov_.querySelector('[data-s="res"]').dataset.src = r.src;
    ov_.querySelector('.kpai-pv').innerHTML = planSvg(p) + `<p class="kpai-leg"><span><i class="dev"></i>Geräte</span><span><i class="tall"></i>Hochschränke</span><span><i class="base"></i>Unterschränke</span><span><i class="win"></i>Fenster</span><span><i class="door"></i>Tür</span></p>`;
    ov_.querySelector('.kpai-h3').textContent = `${FORMS[p.f].n.replace(/^k/, 'K')} · ${mm(p.r.w, p.r.d)}`;
    ov_.querySelector('.kpai-got').innerHTML = (r.got || []).slice(0, 14).map(g => `<span>${esc(g)}</span>`).join('');
    ov_.querySelector('.kpai-why').textContent = r.why || '';
    ov_.querySelector('.kpai-notes').innerHTML = (r.notes || []).slice(0, 3).map(n => `<li>${esc(n)}</li>`).join('');
  }
  function apply() {
    if (!result) return; const p = result.plan;
    if (window.KP && typeof KP.applyPlan === 'function') {
      let prev = ''; try { prev = (KP.hash && KP.hash()) || location.hash || ''; } catch (e) { prev = ''; }
      let ok = false; try { KP.applyPlan(JSON.parse(JSON.stringify(p))); ok = true; } catch (e) { ok = false; }
      if (ok) {
        toForm(result.text);
        close(); done({ why: result.why, prev: /^#k=/.test(prev) ? prev : '' });
        if (innerWidth < 1000) setTimeout(toStage, 300);
        return;
      }
    }
    try { sessionStorage.setItem('kpai-after', JSON.stringify({ why: result.why, prev: location.hash, t: Date.now(), text: result.text || '' })); } catch (e) { }
    try { history.scrollRestoration = 'manual'; } catch (e) { }
    history.replaceState(null, '', '#k=' + b64(JSON.stringify(p)));
    scrollTo(0, 0); location.reload();
  }
  // Handy: zur 3D-Bühne scrollen – unter dem klebenden Kopf (Seitenkopf + Planer-Schritte)
  function toStage() {
    const st = document.querySelector('.kp-stage'), hd = document.querySelector('.kp-head'); if (!st) return;
    let off = 0; try { off = hd ? (parseFloat(getComputedStyle(hd).top) || 0) + hd.offsetHeight : 0; } catch (e) { off = 0; }
    const y = Math.max(0, st.getBoundingClientRect().top + scrollY - off - 2), L = window.__lenis;
    if (L && typeof L.scrollTo === 'function') { try { L.scrollTo(y, { immediate: RMO }); return; } catch (e) { } }
    scrollTo({ top: y, behavior: RMO ? 'auto' : 'smooth' });
  }
  // Die eigene Beschreibung geht mit der Anfrage mit (FormSubmit-Formular in Schritt 4)
  function toForm(text) {
    try {
      const f = document.querySelector('[data-kp-form]'); if (!f || !text) return;
      let i = f.querySelector('[name="KI-Beschreibung"]'); if (!i) { i = document.createElement('input'); i.type = 'hidden'; i.name = 'KI-Beschreibung'; const e = f.querySelector('[name="Entwurf"]'); if (e && e.parentNode) e.parentNode.insertBefore(i, e.nextSibling); else f.appendChild(i); }
      i.value = String(text).slice(0, MAXLEN);
    } catch (e) { }
  }
  // Nach dem Übernehmen: Hinweis „Jetzt nach Herzenslust anpassen"
  function done(info) {
    const stage = document.querySelector('.kp-stage') || document.querySelector('[data-kp]'); if (!stage) return;
    document.querySelectorAll('.kpai-done').forEach(x => x.remove());
    const d = document.createElement('div'); d.className = 'kpai-done'; d.setAttribute('role', 'status');
    d.innerHTML = `<div class="kpai-dh">${ICO.spark}<div><b>Ihre KI-Küche steht.</b><span>Jetzt nach Herzenslust anpassen – Schränke antippen, ziehen, tauschen.</span></div><button type="button" class="kpai-dx" aria-label="Hinweis schließen">×</button></div>${info.why ? `<details><summary>Warum so geplant?</summary><p>${esc(info.why)}</p></details>` : ''}<div class="kpai-da">${info.prev ? '<button type="button" data-kpai-prev>Alten Entwurf zurück</button>' : ''}<button type="button" data-kpai-again>Neu beschreiben</button></div>`;
    stage.appendChild(d); requestAnimationFrame(() => d.classList.add('in'));
    const rm = () => { d.classList.remove('in'); setTimeout(() => d.remove(), 300); };
    d.querySelector('.kpai-dx').onclick = rm;
    const pv = d.querySelector('[data-kpai-prev]');
    if (pv) pv.onclick = () => {
      if (window.KP && typeof KP.applyPlan === 'function') { try { KP.applyPlan(unb64(info.prev.slice(3))); rm(); if (KP.toast) KP.toast('Ihr vorheriger Entwurf ist wieder da.'); return; } catch (e) { } }
      history.replaceState(null, '', info.prev); location.reload();
    };
    d.querySelector('[data-kpai-again]').onclick = () => { rm(); open(); };
    setTimeout(() => { if (d.isConnected && !d.matches(':hover') && !d.querySelector('details[open]')) d.classList.add('mini'); }, innerWidth < 1000 ? 9000 : 14000);
  }

  /* ================= 7) Einhängen ================= */
  function inject() {
    const root = document.querySelector('[data-kp]'); if (!root || root.dataset.kpai) return; root.dataset.kpai = '1';
    // Knopf im Kopf
    const hr = root.querySelector('.kp-hr');
    if (hr) { const b = document.createElement('button'); b.type = 'button'; b.className = 'kpai-hb'; b.setAttribute('aria-label', 'KI plant Ihre Küche'); b.innerHTML = `${ICO.spark}<span>KI-Planung</span>`; b.addEventListener('click', () => open()); hr.insertBefore(b, hr.firstChild); }
    // Karte in Schritt 1
    const pane = root.querySelectorAll('[data-kpane]')[0];
    if (pane) {
      const c = document.createElement('div'); c.className = 'kpai-card';
      c.innerHTML = `<div class="kpai-ci">${ICO.spark}</div><div class="kpai-ct"><b>KI plant Ihre Küche</b><span>Raum und Wünsche in eigenen Worten beschreiben – oder einfach einsprechen. Sekunden später steht Ihr Entwurf, Sie verfeinern nur noch.</span><button type="button" class="kpai-btn sm">${ICO.spark}<span>Jetzt beschreiben</span></button></div>`;
      c.querySelector('button').addEventListener('click', () => open());
      const forms = pane.querySelector('[data-kp-forms]');
      if (forms && forms.parentNode === pane) pane.insertBefore(c, forms); else pane.insertBefore(c, pane.firstChild);
    }
    document.addEventListener('click', e => { const t = e.target.closest('[data-kpai-open]'); if (t) { e.preventDefault(); open(); } });
    // nach dem Neuladen
    let info = null; try { info = JSON.parse(sessionStorage.getItem('kpai-after') || 'null'); sessionStorage.removeItem('kpai-after'); } catch (e) { }
    if (info && Date.now() - info.t < 120000) {
      const top = () => { const L = window.__lenis || window.lenis; if (L && L.scrollTo) try { L.scrollTo(0, { immediate: true }); } catch (e) { } scrollTo(0, 0); };
      top(); setTimeout(() => { top(); done(info); toForm(info.text); }, 700); setTimeout(() => { try { history.scrollRestoration = 'auto'; } catch (e) { } }, 2500);
    }
    if (/[?&]ki=1/.test(location.search)) setTimeout(() => open(), 500);
  }
  function boot() { let n = 0; (function wait() { if (window.KP || n++ > 60) inject(); else setTimeout(wait, 100); })(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  // Für Tests und Erweiterungen
  window.KPAI = { open, close, parse: (t) => parse(t, current()), local: (t) => localPlan(t, current()), repair: (raw, t) => { const c = current(); return repair(raw, parse(t || '', c), c); }, valid, svg: planSvg, b64, hook: HOOK };
})();
