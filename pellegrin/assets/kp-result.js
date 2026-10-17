/* Küchenplaner – Ergebnis-Modul „Ihre Küche ist fertig“ · Entwurf Falcon Eye
   Drei Reiter nach dem Planen: Echtoptik (gerendertes Bild) · Maßplan (Grundriss + Ansichten mit Maßketten) · Übersicht (Stückliste).
   Eigenständig: liest den Planer nur über window.KP (planData/renderHQ, wenn vorhanden – sonst state3d/room/form/walls).
   API: KPResult.open({ tab: 'foto'|'plan'|'liste', dims: true|false, view: 'uebersicht'|'augen'|'detail' }) · KPResult.close()
   Jedes Element mit [data-kpr-open] (optional ="plan"|"liste") öffnet das Ergebnis. */
(function () {
  'use strict';
  if (window.KPResult) return;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RMO = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const KPo = () => window.KP || null;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const r1 = v => Math.round(v * 10) / 10, cm = v => String(Math.round(v)), m2 = v => (v / 100).toFixed(2).replace('.', ',');
  const INK = '#2b2724', MUTE = '#8a7f72', PAPER = '#fffdf9', FONT = 'system-ui,-apple-system,Segoe UI,Roboto,sans-serif';
  const WN0 = { N: 'Rückwand', W: 'Linke Wand', E: 'Rechte Wand', S: 'Gegenüber' };
  const FORMN = { zeile: 'Küchenzeile', l: 'L-Küche', u: 'U-Küche', zwei: 'Zweizeilige Küche', insel: 'Küche mit Insel' };
  const ROOM_H = 260;

  /* =========================================================================
     1) Plandaten: KP.planData() (bevorzugt) oder aus KP.state3d() abgeleitet
     ========================================================================= */
  const APPN = [[/^Spüle/, 'sp'], [/^Kochfeld/, 'kf'], [/^Herd/, 'ko'], [/^Spülmaschine|Geschirrsp/, 'gs'], [/^Kühl/, 'kue'], [/^Backofen/, 'bo'], [/^Geräte-Hochschrank/, 'bm'], [/^Dunstabzug|Haube/, 'dh'], [/^Mikrowelle/, 'mw']];
  function appOf(name, it) {
    for (const [re, k] of APPN) if (re.test(name || '')) return k;
    if (it) { if (it.app === 'sp') return 'sp'; if (it.app === 'kf') return 'kf'; const fr = JSON.stringify(it.fr || it.cols || ''); if (/"dw"/.test(fr)) return 'gs'; if (/fridge/.test(fr)) return 'kue'; if (/"oven"/.test(fr)) return 'bo'; }
    return null;
  }
  const splitLabel = l => { const p = String(l || '').split(' · '); return { name: p[0] || 'Element', sub: p.slice(1).join(' · ') }; };
  const num = (...v) => { for (const x of v) if (x != null && x !== '' && isFinite(+x)) return +x; return null; };

  function fromState(K) {
    const S = K.state3d(), room = K.room ? K.room() : { w: S.room.w, d: S.room.d }, W = room.w, D = room.d;
    const form = K.form ? K.form() : 'l', kw = K.walls ? K.walls() : ['N'];
    const wallOf = r => ({ 0: 'N', 180: 'S', 90: 'W', 270: 'E' })[((Math.round(r) % 360) + 360) % 360] || 'N';
    const along = (w, x, z) => ({ N: x, S: W - x, W: D - z, E: z })[w];
    const walls = {}; ['N', 'W', 'E', 'S'].forEach(k => walls[k] = { key: k, name: (K.wn || WN0)[k] || WN0[k], len: k === 'N' || k === 'S' ? W : D, base: [], up: [], open: [], kitchen: kw.includes(k) });
    let ah = 90, island = null;
    (S.items || []).forEach(it => {
      if (it.t === 'cab') {
        const w = wallOf(it.r), a = along(w, it.x, it.z), L = splitLabel(it.label);
        if (it.ah) ah = it.ah;
        const c = { id: it.id, wall: w, s: r1(a - it.w / 2), w: it.w, name: L.name, sub: L.sub, kind: it.kind, app: appOf(L.name, it), fr: it.fr || null, cols: it.cols || null, corner: it.corner || null, lemans: !!(it.cols && it.cols.some(k => k.lemans)), blind: !!(it.cols && it.cols.some(k => k.blind)) };
        if (it.kind === 'u') { c.h = it.h; c.y0 = it.y0; c.d = 35; walls[w].up.push(c); }
        else if (it.kind === 't') { c.h = it.h || 216; c.y0 = 0; c.d = 60; walls[w].base.push(c); }
        else { c.kind = 'b'; c.h = null; c.y0 = 0; c.d = 60; walls[w].base.push(c); }
      } else if (it.t === 'hb') {
        const w = wallOf(it.r), a = along(w, it.x, it.z);
        walls[w].up.push({ wall: w, s: r1(a - it.w / 2), w: it.w, kind: 'hood', name: 'Dunstabzug', sub: 'Wandhaube', app: 'dh', y0: 160, h: ROOM_H - 160, d: 50 });
      } else if (it.t === 'in') island = { w: it.w, d: it.d || 100, x: it.x, z: it.z, v: it.v || 'frei' };
    });
    (S.open || []).forEach(o => {
      const w = walls[o.wall]; if (!w) return;
      if (o.t === 'tuer') w.open.push({ t: 'tuer', s: o.s, w: o.w, y0: 0, h: 205 });
      else w.open.push({ t: (o.y != null && o.y < 20) ? 'balkon' : 'fenster', s: o.s, w: o.w, y0: o.y != null ? o.y : 105, h: o.h || 115 });
    });
    return { src: 'state3d', room: { w: W, d: D, h: ROOM_H }, form, kw, ah, walls, island };
  }

  // KP.planData() (Format des Planers: raum{breite,tiefe,hoehe}, waende[{wand,name,laenge,kueche,nutzbarVon/Bis,oeffnungen,unten,oben}], insel, arbeitshoehe, sockel)
  // Front-Details (fr/cols/corner) kommen ergänzend aus KP.state3d() über die gemeinsame id.
  function fromPlanData(pd, K) {
    if (!pd || typeof pd !== 'object') return null;
    const R = pd.raum || pd.room || {}, W = num(R.breite, R.w, R.b, R.width), D = num(R.tiefe, R.d, R.t, R.depth);
    const WL = pd.waende || pd.walls; if (!W || !D || !Array.isArray(WL)) return null;
    const spec = {}; try { (K.state3d().items || []).forEach(it => { if (it.id != null) spec[String(it.id)] = it; }); } catch (e) { }
    const walls = {}; ['N', 'W', 'E', 'S'].forEach(k => walls[k] = { key: k, name: WN0[k], len: k === 'N' || k === 'S' ? W : D, base: [], up: [], open: [], kitchen: false });
    const ah = num(pd.arbeitshoehe, pd.ah) || 90; let ok = false;
    WL.forEach(w0 => {
      const k = String(w0.wand || w0.key || w0.wall || '').toUpperCase(), w = walls[k]; if (!w) return;
      w.name = w0.name || w.name; w.len = num(w0.laenge, w0.len, w0.length) || w.len; w.kitchen = !!(w0.kueche || w0.kitchen);
      if (w0.nutzbarVon != null && w0.nutzbarBis != null) w.range = [+w0.nutzbarVon, +w0.nutzbarBis];
      (w0.oeffnungen || w0.openings || []).forEach(o => { const t = /tuer|tür|door/i.test(o.typ || o.t || '') ? 'tuer' : /balkon/i.test(o.typ || o.t || '') ? 'balkon' : 'fenster'; w.open.push({ t, s: num(o.abWand, o.s) || 0, w: num(o.breite, o.w) || 90, y0: num(o.bruestung, o.y0) ?? (t === 'fenster' ? 105 : 0), h: num(o.hoehe, o.h) || (t === 'tuer' ? 205 : t === 'balkon' ? 216 : 115) }); });
      (w0.unten || []).forEach(c0 => {
        const sp = spec[String(c0.id)] || {}, tall = /hoch/.test(c0.art || '') || sp.kind === 't';
        const c = { id: c0.id, wall: k, s: num(c0.abWand) || 0, w: num(c0.breite) || 60, name: c0.name || 'Element', sub: c0.variante || '', kind: tall ? 't' : 'b', d: num(c0.tiefe) || 60, h: tall ? num(c0.hoehe) || 216 : null, y0: 0, fr: sp.fr || null, cols: sp.cols || null, corner: sp.corner || (c0.typ === 'ek' ? { kind: 'kar', side: c0.ecke || 'l' } : null), ecke: c0.ecke || null, typ: c0.typ, hinge: c0.tuerAnschlag || null };
        c.app = ['sp', 'kf', 'ko', 'gs', 'kue', 'bo', 'bm'].includes(c0.typ) ? c0.typ : appOf(c.name, sp);
        w.base.push(c); ok = true;
        if (tall && num(c0.aufsatz)) w.up.push({ wall: k, s: c.s, w: c.w, kind: 'u', name: 'Aufsatzschrank', sub: 'auf ' + c.name, h: num(c0.aufsatz), y0: c.h, d: 58, fr: num(c0.aufsatz) <= 40 ? [{ k: 'flap', p: 1 }] : null, typ: 'ax' });
      });
      (w0.oben || []).forEach(c0 => {
        const sp = spec[String(c0.id)] || {}, hood = c0.typ === 'dh' || /haube/.test(c0.art || '');
        if (hood) { w.up.push({ id: c0.id, wall: k, s: num(c0.abWand) || 0, w: num(c0.breite) || 90, kind: 'hood', name: c0.name || 'Dunstabzug', sub: c0.variante || 'Wandhaube', app: 'dh', y0: num(c0.unterkante) ?? 152, h: num(c0.hoehe) || 108, d: num(c0.tiefe) || 50 }); return; }
        const h = num(c0.hoehe) || 72;
        w.up.push({ id: c0.id, wall: k, s: num(c0.abWand) || 0, w: num(c0.breite) || 60, kind: 'u', name: c0.name || 'Hängeschrank', sub: c0.variante || '', h, y0: num(c0.unterkante) ?? (Math.max(217, 145 + h) - h), d: num(c0.tiefe) || 35, fr: sp.fr || null, cols: sp.cols || null, auto: !!c0.automatisch, typ: c0.typ, hinge: c0.tuerAnschlag || null });
      });
    });
    if (!ok) return null;
    const kw = (K.walls && K.walls()) || ['N', 'W', 'E', 'S'].filter(k => walls[k].kitchen);
    kw.forEach(k => { if (walls[k]) walls[k].kitchen = true; });
    const I = pd.insel || pd.island;
    const island = I && num(I.breite, I.w) ? { w: num(I.breite, I.w), d: num(I.tiefe, I.d) || 100, x: num(I.mitteX, I.x) ?? W / 2, z: num(I.mitteZ, I.z) ?? Math.max(210, Math.min(D - 120, 225)), v: I.variante || I.v || 'frei' } : null;
    return { src: 'planData', room: { w: W, d: D, h: num(R.hoehe, R.h) || ROOM_H }, form: pd.form || (K.form && K.form()) || 'l', formName0: pd.formName, kw, ah, sockel0: num(pd.sockel), walls, island, styleData: pd.stil || null, cx: (pd.anschluesse || []).filter(a => a && a.wand).map(a => ({ t: a.typ, wall: String(a.wand).toUpperCase(), s: num(a.abWand) || 0, h: num(a.hoehe) })) };
  }

  function getPlan() {
    const K = KPo(); let pd = null;
    if (K && typeof K.planData === 'function') { try { pd = fromPlanData(K.planData(), K); } catch (e) { pd = null; } }
    if (!pd && K && typeof K.state3d === 'function') pd = fromState(K);
    if (!pd) return null;
    // Nachbearbeitung: sortieren, Ecken, Positionsnummern
    const { walls, kw } = pd; let pos = 1;
    for (const k in walls) { walls[k].base.sort((a, b) => a.s - b.s); walls[k].up.sort((a, b) => a.s - b.s); }
    const N = walls.N, nb = N.base;
    for (const k of ['W', 'E']) {
      const w = walls[k]; w.corner = null;
      if (w.range && kw.includes(k)) { if (k === 'W' && w.range[1] < w.len - .5) w.corner = [w.range[1], w.len]; if (k === 'E' && w.range[0] > .5) w.corner = [0, w.range[0]]; continue; }
      if (!kw.includes(k) || !kw.includes('N') || !nb.length) continue;
      const kar = k === 'W' ? (nb[0] && nb[0].corner && nb[0].corner.kind === 'kar' && nb[0].corner.side !== 'r') : (nb[nb.length - 1] && nb[nb.length - 1].corner && nb[nb.length - 1].corner.kind === 'kar' && nb[nb.length - 1].corner.side === 'r');
      const z = 60 + (kar ? 30 : 0); w.corner = k === 'W' ? [w.len - z, w.len] : [0, z];
    }
    kw.forEach(k => { const w = walls[k]; if (!w) return; w.base.forEach(c => c.pos = pos++); w.up.forEach(c => c.pos = pos++); });
    if (pd.island) pd.island.pos = pos++;
    pd.sockel = pd.sockel0 != null ? pd.sockel0 : 10 + Math.max(0, pd.ah - 90);
    pd.formName = pd.formName0 || FORMN[pd.form] || 'Küche';
    const K2 = KPo(); pd.studio = (K2 && K2.studio) || 'Küchenstudio';
    return pd;
  }

  /* =========================================================================
     2) Maßplan – SVG-Zeichnungen (alle Einheiten in cm; Stil inline, damit Export/Druck identisch sind)
     ========================================================================= */
  const T = 15; // Wandstärke im Plan
  const DIR = { N: [1, 0], S: [-1, 0], W: [0, -1], E: [0, 1] }, OUT = { N: [0, -1], S: [0, 1], W: [-1, 0], E: [1, 0] };
  function wp(pd, wall, a, o) { const W = pd.room.w, D = pd.room.d, st = { N: [0, 0], S: [W, D], W: [0, D], E: [W, 0] }[wall], d = DIR[wall], n = OUT[wall]; return [st[0] + d[0] * a + n[0] * o, st[1] + d[1] * a + n[1] * o]; }
  function cabR(pd, wall, a, len, dep) { const W = pd.room.w, D = pd.room.d; return { N: [a, 0, len, dep], S: [W - a - len, D - dep, len, dep], W: [0, D - a - len, dep, len], E: [W - dep, a, dep, len] }[wall]; }
  const f1 = v => Math.round(v * 100) / 100;
  const ptxt = (x, y, s, fs, o = {}) => `<text x="${f1(x)}" y="${f1(y)}" font-size="${f1(fs)}" font-family="${o.ff || FONT}" text-anchor="${o.anchor || 'middle'}"${o.w ? ` font-weight="${o.w}"` : ''} fill="${o.fill || INK}"${o.rot ? ` transform="rotate(${o.rot} ${f1(x)} ${f1(y)})"` : ''}${o.cls ? ` class="${o.cls}"` : ''}${o.style ? ` style="${o.style}"` : ''}>${esc(s)}</text>`;
  const pline = (x1, y1, x2, y2, o = {}) => `<path d="M${f1(x1)} ${f1(y1)}L${f1(x2)} ${f1(y2)}" stroke="${o.c || INK}" stroke-width="${o.w || .6}" fill="none"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.pl ? ' pathLength="1"' : ''}${o.cls ? ` class="${o.cls}"` : ''}${o.style ? ` style="${o.style}"` : ''}${o.cap ? ` stroke-linecap="${o.cap}"` : ''}/>`;

  // Maßkette: Punkte entlang einer Achse (P(a, o) → [x,y]), Linie im Abstand off, Texte außen
  let DIMI = 0;
  function chain(Pf, pts, off, u, o = {}) {
    pts = [...new Set(pts.map(p => Math.round(p * 10) / 10))].sort((a, b) => a - b); if (pts.length < 2) return '';
    const idx = DIMI++, dl = `style="--i:${idx}"`, base = o.base != null ? o.base : 0, flip = !!o.flip, rot = o.rot || 0;
    let s = `<g class="kpr-dim" ${dl}>`;
    const [x1, y1] = Pf(pts[0], off), [x2, y2] = Pf(pts[pts.length - 1], off);
    s += pline(x1, y1, x2, y2, { w: .55 * u / 10, pl: 1, cls: 'kpr-dl', c: INK });
    pts.forEach(a => {
      const [ex1, ey1] = Pf(a, base + .25 * u), [ex2, ey2] = Pf(a, off + .55 * u); s += pline(ex1, ey1, ex2, ey2, { w: .3 * u / 10, c: MUTE, pl: 1, cls: 'kpr-dl' });
      const k = .42 * u, [ax, ay] = Pf(a - k, off - k), [bx, by] = Pf(a + k, off + k); s += pline(ax, ay, bx, by, { w: .9 * u / 10, c: INK, pl: 1, cls: 'kpr-dl' });
    });
    for (let i = 0; i < pts.length - 1; i++) {
      const L = pts[i + 1] - pts[i]; if (L < .5) continue; const t = cm(L), tw = t.length * .6 * u + .4 * u;
      let fs = u; if (tw > L) fs = Math.max(.62 * u, u * L / tw);
      const [tx, ty] = Pf((pts[i] + pts[i + 1]) / 2, off + (flip ? 1.22 * u : .42 * u) * (fs / u) + (flip ? 0 : 0));
      s += ptxt(tx, ty, t, fs, { rot, cls: 'kpr-dt', w: o.bold ? 700 : 500, style: `--i:${idx}` });
    }
    return s + '</g>';
  }

  function planSVG(pd, o) {
    const u = o.fs, W = pd.room.w, D = pd.room.d; DIMI = 0;
    const has = k => pd.walls[k].base.length || pd.walls[k].open.length;
    const chainsOf = k => { const w = pd.walls[k], c = []; if (w.base.length) { const p = [0, w.len]; w.base.forEach(b => p.push(b.s, b.s + b.w)); if (w.corner) p.push(...w.corner); c.push(p); } if (w.open.length) { const p = [0, w.len]; w.open.forEach(b => p.push(b.s, b.s + b.w)); c.push(p); } return c; };
    const showTot = { N: has('N') || !has('S'), S: has('S'), W: has('W') || !has('E'), E: has('E') };
    const ch = {}, mg = {}; ['N', 'S', 'W', 'E'].forEach(k => { ch[k] = chainsOf(k); const n = ch[k].length + (showTot[k] ? 1 : 0); mg[k] = T + (n ? (1.7 + 2.05 * n) : 1) * u + 1.6 * u; });
    const vx = -mg.W, vy = -mg.N, vw = W + mg.W + mg.E, vh = D + mg.N + mg.S + 3.2 * u;
    let s = '';
    // Raum + Wände (Poché)
    s += `<rect x="0" y="0" width="${W}" height="${D}" fill="#f7f2ea"/>`;
    s += `<path d="M${-T} ${-T}H${W + T}V${D + T}H${-T}Z M0 0V${D}H${W}V0Z" fill="${INK}" fill-rule="evenodd"/>`;
    // Hängeschränke (gestrichelt) zuerst – liegen „über“ dem Grundriss
    let cabs = '', ups = '', sym = '', nums = '';
    for (const k in pd.walls) {
      const w = pd.walls[k];
      w.up.forEach(c => { const [x, y, cw, chh] = cabR(pd, k, c.s, c.w, c.d || 35); ups += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(cw)}" height="${f1(chh)}" fill="none" stroke="${MUTE}" stroke-width="${.5 * u / 10}" stroke-dasharray="${.6 * u} ${.4 * u}"/>`; if (c.kind === 'hood') ups += pline(x, y, x + cw, y + chh, { c: MUTE, w: .4 * u / 10, dash: `${.6 * u} ${.4 * u}` }) + pline(x + cw, y, x, y + chh, { c: MUTE, w: .4 * u / 10, dash: `${.6 * u} ${.4 * u}` }); });
      w.base.forEach(c => {
        const tall = c.kind === 't', [x, y, cw, chh] = cabR(pd, k, c.s, c.w, 60);
        cabs += `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(cw)}" height="${f1(chh)}" fill="${tall ? '#e3d7c4' : '#f1e9dc'}" stroke="${INK}" stroke-width="${.7 * u / 10}"/>`;
        // Front-Kante (zum Raum) kräftig
        const [fx1, fy1] = wp(pd, k, c.s, -60), [fx2, fy2] = wp(pd, k, c.s + c.w, -60); cabs += pline(fx1, fy1, fx2, fy2, { w: 1.1 * u / 10 });
        if (tall) cabs += pline(x, y, x + cw, y + chh, { c: MUTE, w: .45 * u / 10 }) + pline(x + cw, y, x, y + chh, { c: MUTE, w: .45 * u / 10 });
        if (c.corner && c.corner.kind === 'kar') { const sd = c.corner.side === 'r' ? 'r' : 'l'; cabs += `<rect x="${sd === 'r' ? W - 60 : 0}" y="60" width="60" height="30" fill="#f1e9dc" stroke="${INK}" stroke-width="${.7 * u / 10}"/>`; }
        const [mx, my] = wp(pd, k, c.s + c.w / 2, -28);
        if (c.app === 'sp') sym += `<rect x="${f1(mx - Math.min(19, c.w * .3))}" y="${f1(my - 15)}" width="${f1(Math.min(38, c.w * .6))}" height="30" rx="6" fill="#fff" stroke="${INK}" stroke-width="${.6 * u / 10}" transform="rotate(${k === 'W' || k === 'E' ? 90 : 0} ${f1(mx)} ${f1(my)})"/><circle cx="${f1(mx)}" cy="${f1(my)}" r="2.6" fill="none" stroke="${INK}" stroke-width=".5"/>`;
        else if (c.app === 'kf' || c.app === 'ko') { const q = Math.min(13, c.w * .2); [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => sym += `<circle cx="${f1(mx + a * q)}" cy="${f1(my + b * 11)}" r="${f1(Math.min(8, q * .66))}" fill="none" stroke="${INK}" stroke-width="${.6 * u / 10}"/>`); }
        else if (c.app === 'kue' || c.app === 'gs' || c.app === 'bo' || c.app === 'bm') sym += ptxt(mx, my + .3 * u, { kue: 'KS', gs: 'GS', bo: 'BO', bm: 'BO/MW' }[c.app], .78 * u, { fill: MUTE, w: 700 });
        const [nx, ny] = wp(pd, k, c.s + c.w / 2, -49), r = Math.min(.62 * u, c.w / 2 - 1.2);
        if (r > 2.5) nums += `<g class="kpr-pos"><circle cx="${f1(nx)}" cy="${f1(ny)}" r="${f1(r)}" fill="${PAPER}" stroke="${INK}" stroke-width="${.45 * u / 10}"/>${ptxt(nx, ny + r * .36, c.pos, r * 1.05, { w: 700 })}</g>`;
      });
    }
    if (pd.island) { const I = pd.island, x = I.x - I.w / 2, y = I.z - I.d / 2; cabs += `<rect x="${f1(x)}" y="${f1(y)}" width="${I.w}" height="${I.d}" rx="2" fill="#f1e9dc" stroke="${INK}" stroke-width="${.7 * u / 10}"/>`; if (I.v === 'kochfeld') [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => sym += `<circle cx="${f1(I.x + a * 13)}" cy="${f1(I.z + b * 12)}" r="8" fill="none" stroke="${INK}" stroke-width="${.6 * u / 10}"/>`); if (I.v === 'spuele') sym += `<rect x="${f1(I.x - 20)}" y="${f1(I.z - 15)}" width="40" height="30" rx="6" fill="#fff" stroke="${INK}" stroke-width=".6"/>`; nums += `<g class="kpr-pos"><circle cx="${f1(x + I.w - .9 * u)}" cy="${f1(y + .9 * u)}" r="${f1(.62 * u)}" fill="${PAPER}" stroke="${INK}" stroke-width="${.45 * u / 10}"/>${ptxt(x + I.w - .9 * u, y + .9 * u + .62 * u * .36, I.pos, .65 * u, { w: 700 })}</g>` + ptxt(I.x, y + I.d + 1.3 * u, 'Insel', .8 * u, { fill: MUTE, w: 600 }); }
    s += o.inst ? `<g opacity=".45">${cabs + ups + sym}</g>` : cabs + ups + sym;
    // Öffnungen
    for (const k in pd.walls) pd.walls[k].open.forEach(op => {
      const a1 = op.s, a2 = op.s + op.w, P = (a, o) => wp(pd, k, a, o);
      const q = [P(a1, -.5), P(a2, -.5), P(a2, T + .5), P(a1, T + .5)];
      s += `<path d="M${q.map(p => p.map(f1).join(' ')).join('L')}Z" fill="#f7f2ea"/>`;
      if (op.t === 'tuer') {
        const [hx, hy] = P(a2, 0), [ex, ey] = P(a2, -op.w), [x1, y1] = P(a1, 0);
        const sw = ((ex - hx) * (y1 - hy) - (ey - hy) * (x1 - hx)) > 0 ? 1 : 0;
        s += pline(hx, hy, ex, ey, { w: 1.4 * u / 10 }) + `<path d="M${f1(ex)} ${f1(ey)}A${op.w} ${op.w} 0 0 ${sw} ${f1(x1)} ${f1(y1)}" fill="none" stroke="${INK}" stroke-width="${.45 * u / 10}" stroke-dasharray="${.5 * u} ${.35 * u}"/>`;
        [P(a1, 0), P(a1, T)].forEach(() => { }); s += pline(...P(a1, 0), ...P(a1, T), { w: .8 * u / 10 }) + pline(...P(a2, 0), ...P(a2, T), { w: .8 * u / 10 });
      } else {
        s += pline(...P(a1, 0), ...P(a2, 0), { w: .5 * u / 10 }) + pline(...P(a1, T), ...P(a2, T), { w: .5 * u / 10 }) + pline(...P(a1, T / 2), ...P(a2, T / 2), { w: (op.t === 'balkon' ? 1.6 : 1.1) * u / 10, c: '#4f7fa8' }) + pline(...P(a1, 0), ...P(a1, T), { w: .8 * u / 10 }) + pline(...P(a2, 0), ...P(a2, T), { w: .8 * u / 10 });
      }
      const [lx, ly] = P((a1 + a2) / 2, -(op.t === 'tuer' ? Math.min(op.w * .45, 40) : 1.2 * u) - (k === 'S' || k === 'E' ? 0 : 0)), rot = k === 'W' || k === 'E' ? -90 : 0;
      const isKitchenSide = pd.walls[k].base.length > 0;
      if (!isKitchenSide || op.t === 'tuer') s += ptxt(lx, ly + (rot ? 0 : .3 * u), op.t === 'tuer' ? 'Tür' : op.t === 'balkon' ? 'Balkontür' : 'Fenster', .72 * u, { fill: '#4f6b84', w: 600, rot });
    });
    if (o.inst) s += instPlan(pd, o.inst, u); else s += nums;
    // Maßketten
    let dims = '';
    ['N', 'W', 'E', 'S'].forEach(k => {
      const w = pd.walls[k], list = ch[k].slice(); if (showTot[k]) list.push([0, w.len]);
      const flip = k === 'S' || k === 'E', rot = k === 'W' || k === 'E' ? -90 : 0;
      list.forEach((pts, i) => { dims += chain((a, o) => wp(pd, k, a, o), pts, T + (1.7 + 2.05 * i) * u, u, { base: T, flip, rot, bold: i === list.length - 1 && showTot[k] }); });
      if (list.length || w.base.length) { const o2 = T + (1.7 + 2.05 * list.length) * u - .2 * u, [tx, ty] = wp(pd, k, w.len / 2, o2 + (flip ? .8 * u : 0)); dims += `<g class="kpr-wlab">${ptxt(tx, ty, (w.name || WN0[k]).toUpperCase(), .62 * u, { fill: MUTE, w: 700, rot, style: 'letter-spacing:.12em' })}</g>`; }
    });
    if (pd.island) {
      const I = pd.island, x = I.x - I.w / 2, y = I.z - I.d / 2;
      dims += chain((a, o) => [x + a, y - o], [0, I.w], 1.6 * u, u, { base: 0 });
      dims += chain((a, o) => [x + I.w + o, y + a], [0, I.d], 1.6 * u, u, { base: 0, flip: 1, rot: -90 });
      // Abstand Insel ↔ Rückwand-Schränke (Gangbreite)
      const back = pd.walls.N.base.length ? 60 : 0, gap = y - back; if (gap > 20) dims += chain((a, o) => [x + I.w * .25 + o, a], [back, y], 0, u, { base: 0, rot: -90 });
    }
    s += dims;
    // Ansichtspfeile A, B, C …
    const LET = 'ABCDEFG'; pd.kw.forEach((k, i) => { const w = pd.walls[k], [cx, cy] = wp(pd, k, w.len / 2, -(w.base.length ? 60 : 0) - 2.2 * u), n = OUT[k], r = .9 * u; s += `<g class="kpr-view"><circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" fill="${PAPER}" stroke="${INK}" stroke-width="${.5 * u / 10}"/><path d="M${f1(cx + n[0] * r * 1.75)} ${f1(cy + n[1] * r * 1.75)}L${f1(cx + n[1] * r * .8 + n[0] * r * .55)} ${f1(cy + n[0] * r * .8 + n[1] * r * .55)}L${f1(cx - n[1] * r * .8 + n[0] * r * .55)} ${f1(cy - n[0] * r * .8 + n[1] * r * .55)}Z" fill="${INK}"/>${ptxt(cx, cy + .34 * u, LET[i], .9 * u, { w: 700 })}</g>`; });
    // Maßstabsleiste
    const sbY = D + mg.S + 1.4 * u, sbX = -mg.W + .4 * u, seg = 50; let sb = '';
    for (let i = 0; i < 4; i++) sb += `<rect x="${sbX + i * seg}" y="${f1(sbY)}" width="${seg}" height="${f1(.42 * u)}" fill="${i % 2 ? PAPER : INK}" stroke="${INK}" stroke-width="${.3 * u / 10}"/>`;
    [0, 1, 2].forEach(m => sb += ptxt(sbX + m * 100, sbY - .35 * u, m === 0 ? '0' : m + ' m', .62 * u, { fill: MUTE }));
    sb += ptxt(sbX + 200 + .6 * u, sbY + .42 * u, 'Maße in cm', .62 * u, { fill: MUTE, anchor: 'start' });
    s += `<g class="kpr-sb">${sb}</g>`;
    return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f1(vx)} ${f1(vy)} ${f1(vw)} ${f1(vh)}" class="kpr-svg" role="img" aria-label="Grundriss mit Maßen">${s}</svg>`, vw, vh };
  }

  // Front-Unterteilung (vereinfacht wie im Planer) – Technikzeichnung
  function fronts(list, x, yTop, w, total, u, kind) {
    const fixed = list.reduce((a, f) => a + (f.cm != null ? f.cm : 0), 0), pSum = list.reduce((a, f) => a + (f.cm == null ? (f.p || 1) : 0), 0) || 1, rest = Math.max(0, total - fixed);
    let s = '', y = yTop; const sw = .42 * u / 10;
    list.forEach(f => {
      const hh = f.cm != null ? f.cm : rest * (f.p || 1) / pSum; if (hh < .3) { y += hh; return; }
      const R = (xx, ww) => `<rect x="${f1(xx + .5)}" y="${f1(y + .5)}" width="${f1(Math.max(.2, ww - 1))}" height="${f1(Math.max(.2, hh - 1))}" fill="${f.k === 'oven' || f.k === 'micro' ? '#3a3734' : PAPER}" stroke="${INK}" stroke-width="${sw}"/>`;
      const tri = (xx, ww, a) => { const d = `fill="none" stroke="${MUTE}" stroke-width="${sw * .8}" stroke-dasharray="${.35 * u} ${.25 * u}"`; if (a === 'up') return `<path d="M${f1(xx + 2.5)} ${f1(y + hh - 2.5)}L${f1(xx + ww / 2)} ${f1(y + 2.5)}L${f1(xx + ww - 2.5)} ${f1(y + hh - 2.5)}" ${d}/>`; const hx = a === 'r' ? xx + ww - 2.5 : xx + 2.5, fx = a === 'r' ? xx + 2.5 : xx + ww - 2.5; return `<path d="M${f1(fx)} ${f1(y + 2.5)}L${f1(hx)} ${f1(y + hh / 2)}L${f1(fx)} ${f1(y + hh - 2.5)}" ${d}/>`; };
      switch (f.k) {
        case 'door': case 'glass': s += R(x, w) + tri(x, w, f.a || 'l'); if (f.k === 'glass') s += `<rect x="${f1(x + 4)}" y="${f1(y + 4)}" width="${f1(w - 8)}" height="${f1(hh - 8)}" fill="#dbe7ea" stroke="${MUTE}" stroke-width="${sw * .7}"/>`; break;
        case 'door2': case 'glass2': s += R(x, w / 2) + R(x + w / 2, w / 2) + tri(x, w / 2, 'l') + tri(x + w / 2, w / 2, 'r'); break;
        case 'flap': case 'lift': case 'fold': s += R(x, w) + tri(x, w, 'up'); if (f.k === 'fold') s += pline(x + 1, y + hh / 2, x + w - 1, y + hh / 2, { w: sw, c: INK }); break;
        case 'open': s += `<rect x="${f1(x + .5)}" y="${f1(y + .5)}" width="${f1(w - 1)}" height="${f1(hh - 1)}" fill="#eee7dc" stroke="${INK}" stroke-width="${sw}"/>` + pline(x + 1, y + hh / 2, x + w - 1, y + hh / 2, { w: sw, c: MUTE }); break;
        case 'dw': s += R(x, w) + ptxt(x + w / 2, y + hh / 2 + .3 * u, 'GS', .75 * u, { fill: MUTE, w: 700 }); break;
        case 'blind': s += `<rect x="${f1(x + .5)}" y="${f1(y + .5)}" width="${f1(w - 1)}" height="${f1(hh - 1)}" fill="#efe9df" stroke="${INK}" stroke-width="${sw}"/>`; break;
        case 'oven': case 'micro': s += R(x, w) + `<rect x="${f1(x + 5)}" y="${f1(y + 6)}" width="${f1(w - 10)}" height="${f1(Math.max(2, hh - 12))}" rx="1.5" fill="#55504a"/>`; break;
        default: s += R(x, w) + pline(x + w / 2 - Math.min(9, w * .25), y + 3.2, x + w / 2 + Math.min(9, w * .25), y + 3.2, { w: sw * 2.2, c: INK, cap: 'round' });
      }
      y += hh;
    });
    return s;
  }

  function elevSVG(pd, k, o) {
    const u = o.fs, w = pd.walls[k], L = w.len, ah = pd.ah, so = pd.sockel; DIMI = o.dimBase || 0;
    const Y = h => -h; // Höhe → SVG-y
    const isAx = c => c.typ === 'ax' || /^Aufsatz/.test(c.name || ''), upC = w.up.filter(c => c.kind !== 'hood' && !isAx(c)), hasUp = upC.length > 0, axC = w.up.filter(isAx);
    const tallH = Math.max(0, ...w.base.filter(c => c.kind === 't').map(c => c.h));
    const lvl = [{ h: 0, t: 'OK Fußboden' }, { h: so, t: 'Sockel' }, { h: ah, t: 'Arbeitshöhe' }];
    let uk = null, okU = null; if (hasUp) { uk = Math.min(...upC.map(c => c.y0)); okU = Math.max(...upC.map(c => c.y0 + c.h)); lvl.push({ h: uk, t: 'UK Hängeschrank' }, { h: okU, t: 'OK Hängeschrank' }); }
    if (tallH) lvl.push({ h: tallH, t: 'OK Hochschrank' }); if (axC.length) lvl.push({ h: Math.max(...axC.map(c => c.y0 + c.h)), t: 'OK Aufsatzschrank' });
    const kotW = 10.5 * u, mL = 5.4 * u, mR = kotW + 1.2 * u, top = ROOM_H + (hasUp || w.up.length ? 3.6 * u : 1.4 * u), bot = 5.8 * u;
    let s = '';
    // Wandfläche, Decke, Boden
    s += `<rect x="0" y="${Y(ROOM_H)}" width="${L}" height="${ROOM_H}" fill="#f7f2ea"/>`;
    s += pline(0, Y(ROOM_H), L, Y(ROOM_H), { c: MUTE, w: .4 * u / 10, dash: `${.8 * u} ${.5 * u}` }) + ptxt(L - .4 * u, Y(ROOM_H) + 1.05 * u, 'Decke ca. 260 – bitte messen', .62 * u, { fill: MUTE, anchor: 'end' });
    s += pline(0, Y(ROOM_H), 0, 0, { c: INK, w: 1.2 * u / 10 }) + pline(L, Y(ROOM_H), L, 0, { c: INK, w: 1.2 * u / 10 });
    // Öffnungen
    w.open.forEach(op => {
      const x = op.s, ww = op.w;
      if (op.t === 'tuer') s += `<rect x="${x}" y="${Y(op.h)}" width="${ww}" height="${op.h}" fill="#ece5da" stroke="${MUTE}" stroke-width="${.5 * u / 10}"/>` + ptxt(x + ww / 2, Y(op.h / 2), 'Tür', .7 * u, { fill: MUTE, w: 600 });
      else s += `<rect x="${x}" y="${Y(op.y0 + op.h)}" width="${ww}" height="${op.h}" fill="#e3eef6" stroke="#4f7fa8" stroke-width="${.6 * u / 10}"/>` + (ww > 90 ? pline(x + ww / 2, Y(op.y0 + op.h), x + ww / 2, Y(op.y0), { c: '#4f7fa8', w: .5 * u / 10 }) : '') + ptxt(x + ww / 2, Y(op.y0 + op.h) + 1.2 * u, op.t === 'balkon' ? 'Balkontür' : 'Fenster', .66 * u, { fill: '#4f6b84', w: 600 });
    });
    // Ecke (Platz der Eckschränke der Rückwand)
    if (w.corner) { const [a, b] = w.corner; s += `<rect x="${a}" y="${Y(ah)}" width="${b - a}" height="${ah}" fill="url(#kprHatch)" stroke="${MUTE}" stroke-width="${.4 * u / 10}"/>` + ptxt((a + b) / 2, Y(ah / 2), 'Ecke', .7 * u, { fill: MUTE, w: 600 }); }
    // Unter- und Hochschränke
    let nums = '';
    w.base.forEach(c => {
      const x = c.s, cw = c.w, cols = c.cols || [{ fr: c.fr || [{ k: c.app === 'gs' ? 'dw' : 'drawer', p: 1 }] }];
      if (c.kind === 't') {
        s += `<rect x="${x}" y="${Y(10)}" width="${cw}" height="10" fill="#3a3632"/>`;
        s += fronts(c.fr || [{ k: 'door', p: 1, a: 'l' }], x, Y(c.h), cw, c.h - 10, u, 't');
        s += `<rect x="${x}" y="${Y(c.h)}" width="${cw}" height="${c.h}" fill="none" stroke="${INK}" stroke-width="${.8 * u / 10}"/>`;
      } else {
        s += `<rect x="${x}" y="${Y(so)}" width="${cw}" height="${so}" fill="#3a3632"/>`;
        const fixedW = cols.reduce((a, q) => a + (q.cm || 0), 0), flex = cols.filter(q => !q.cm).length || 1; let cx = x;
        cols.forEach(q => { const qw = q.cm || (cw - fixedW) / flex; s += q.blind ? `<rect x="${f1(cx + .5)}" y="${f1(Y(ah - 4))}" width="${f1(qw - 1)}" height="${f1(ah - 4 - so - .5)}" fill="url(#kprHatch)" stroke="${INK}" stroke-width="${.42 * u / 10}"/>` : fronts(q.fr || [{ k: 'door', p: 1 }], cx, Y(ah - 4), qw, ah - 4 - so, u, 'b'); cx += qw; });
        s += `<rect x="${x - .3}" y="${Y(ah)}" width="${cw + .6}" height="4" fill="#8c8478" stroke="${INK}" stroke-width="${.4 * u / 10}"/>`;
        s += `<rect x="${x}" y="${Y(ah)}" width="${cw}" height="${ah}" fill="none" stroke="${INK}" stroke-width="${.8 * u / 10}"/>`;
        if (c.app === 'sp') { const mx = x + cw / 2; s += `<path d="M${f1(mx - 3)} ${f1(Y(ah))}v-20q0-7 7-7h4q5 0 5 5v4" fill="none" stroke="${INK}" stroke-width="${.8 * u / 10}" stroke-linecap="round"/>`; }
        if (c.app === 'kf' || c.app === 'ko') s += `<rect x="${f1(x + 6)}" y="${f1(Y(ah) - 1.4)}" width="${f1(cw - 12)}" height="1.4" fill="${INK}"/>`;
      }
      const ny = c.kind === 't' ? Y(Math.min(c.h - 14, 150)) : Y(so + 7), r = Math.min(.62 * u, cw / 2 - 1.2);
      if (r > 2.5) nums += `<g class="kpr-pos"><circle cx="${f1(x + cw / 2)}" cy="${f1(ny)}" r="${f1(r)}" fill="${PAPER}" stroke="${INK}" stroke-width="${.45 * u / 10}"/>${ptxt(x + cw / 2, ny + r * .36, c.pos, r * 1.05, { w: 700 })}</g>`;
    });
    // Hängeschränke & Haube
    w.up.forEach(c => {
      const x = c.s, cw = c.w;
      if (c.kind === 'hood') { const cx = x + cw / 2; s += `<path d="M${f1(cx - 13)} ${Y(ROOM_H)}h26v${ROOM_H - 168}h-26z" fill="#e4e1dc" stroke="${INK}" stroke-width="${.5 * u / 10}"/><path d="M${f1(x)} ${Y(160)}h${cw}l-6 -8h${-cw + 12}z" fill="#d2cec8" stroke="${INK}" stroke-width="${.6 * u / 10}"/>`; return; }
      const cols = c.cols || [{ fr: c.fr || [{ k: 'door', p: 1 }] }], fixedW = cols.reduce((a, q) => a + (q.cm || 0), 0), flex = cols.filter(q => !q.cm).length || 1; let cx = x;
      cols.forEach(q => { const qw = q.cm || (cw - fixedW) / flex; s += q.blind ? `<rect x="${f1(cx + .5)}" y="${f1(Y(c.y0 + c.h))}" width="${f1(qw - 1)}" height="${f1(c.h - 1)}" fill="url(#kprHatch)" stroke="${INK}" stroke-width="${.42 * u / 10}"/>` : fronts(q.fr || [{ k: 'door', p: 1 }], cx, Y(c.y0 + c.h), qw, c.h, u, 'u'); cx += qw; });
      s += `<rect x="${x}" y="${Y(c.y0 + c.h)}" width="${cw}" height="${c.h}" fill="none" stroke="${INK}" stroke-width="${.8 * u / 10}"/>`;
      const r = Math.min(.62 * u, cw / 2 - 1.2), ny = Y(c.y0 + Math.min(9, c.h / 2));
      if (r > 2.5) nums += `<g class="kpr-pos"><circle cx="${f1(x + cw / 2)}" cy="${f1(ny)}" r="${f1(r)}" fill="${PAPER}" stroke="${INK}" stroke-width="${.45 * u / 10}"/>${ptxt(x + cw / 2, ny + r * .36, c.pos, r * 1.05, { w: 700 })}</g>`;
    });
    // Boden
    s += `<rect x="${-1.2 * u}" y="0" width="${L + 2.4 * u}" height="${.5 * u}" fill="url(#kprGround)"/>` + pline(-1.2 * u, 0, L + 1.2 * u, 0, { w: 1.3 * u / 10 });
    if (o.inst) {
      const defs0 = `<defs><pattern id="kprHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#efe9df"/><line x1="0" y1="0" x2="0" y2="6" stroke="#cfc5b8" stroke-width="1.6"/></pattern><pattern id="kprGround" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="5" height="5" fill="#fff"/><line x1="0" y1="0" x2="0" y2="5" stroke="#9b9187" stroke-width="1"/></pattern></defs>`;
      const ov = instElev(pd, k, o.inst, u, L), vx = -mL, vy = -top, vw = L + mL + mR + 2 * u, vh = top + bot + 1.6 * u;
      return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f1(vx)} ${f1(vy)} ${f1(vw)} ${f1(vh)}" class="kpr-svg" role="img" aria-label="Installationsplan ${esc(w.name)}">${defs0}<g opacity=".34">${s}</g>${ov}</svg>`, vw, vh, dimEnd: DIMI };
    }
    s += nums;
    // Maßketten unten (Unterschränke + Gesamt), oben (Hängeschränke), links (Höhen)
    let dims = '';
    const bp = [0, L]; w.base.forEach(c => bp.push(c.s, c.s + c.w)); if (w.corner) bp.push(...w.corner);
    const H = (a, o) => [a, o]; // unten: o wächst nach unten
    dims += chain(H, bp, 2 * u, u, { base: 0, flip: 1 });
    dims += chain(H, [0, L], 4.1 * u, u, { base: 0, flip: 1, bold: 1 });
    if (w.up.length) { const up = [0, L]; w.up.forEach(c => up.push(c.s, c.s + c.w)); dims += chain((a, o) => [a, Y(ROOM_H) - o], up, 1.6 * u, u, { base: -ROOM_H + ROOM_H }); }
    const hp = [0, so, ah]; if (hasUp) hp.push(uk, okU);
    dims += chain((a, o) => [-o, -a], hp, 2.2 * u, u, { base: 0, rot: -90 });
    // Höhenkoten rechts
    let kot = ''; const seen = [];
    lvl.slice(1).sort((a, b) => a.h - b.h).forEach(l => {
      let y = Y(l.h); const near = seen.find(v => Math.abs(v - y) < 1.05 * u); if (near != null) y = near - 1.05 * u; seen.push(y);
      const x0 = L + .6 * u; kot += `<g class="kpr-kot">${pline(L, Y(l.h), x0 + .3 * u, y, { c: MUTE, w: .35 * u / 10 })}<path d="M${f1(x0 + .3 * u)} ${f1(y)}l${f1(.5 * u)} ${f1(-.55 * u)}h${f1(-1 * u)}z" fill="${INK}" transform="translate(${f1(.5 * u)} 0)"/>${ptxt(x0 + 1.6 * u, y + .1 * u, `${cm(l.h)}  ${l.t}`, .72 * u, { anchor: 'start', w: 600 })}</g>`;
    });
    dims += `<g class="kpr-dim kpr-kots" style="--i:${DIMI++}">${kot}</g>`;
    s += dims;
    const defs = `<defs><pattern id="kprHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#efe9df"/><line x1="0" y1="0" x2="0" y2="6" stroke="#cfc5b8" stroke-width="1.6"/></pattern><pattern id="kprGround" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="5" height="5" fill="#fff"/><line x1="0" y1="0" x2="0" y2="5" stroke="#9b9187" stroke-width="1"/></pattern></defs>`;
    const vx = -mL, vy = -top, vw = L + mL + mR, vh = top + bot;
    return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f1(vx)} ${f1(vy)} ${f1(vw)} ${f1(vh)}" class="kpr-svg" role="img" aria-label="Ansicht ${esc(w.name)} mit Höhen">${defs}${s}</svg>`, vw, vh, dimEnd: DIMI };
  }

  /* =========================================================================
     2b) Installationsplan – Anschlüsse aus der Planung abgeleitet (Richtwerte) + Bestand aus dem Planer
     ========================================================================= */
  const ICAT = { w: ['#2f7fc1', 'Wasser'], a: ['#86705a', 'Abwasser'], s: ['#d0582a', 'Strom 230 / 400 V'], l: ['#c99a12', 'Licht'] };
  function instPts(pd) {
    const P0 = [], ah = pd.ah, add = o => P0.push(o), adj = (a, b) => Math.abs(a.s + a.w - b.s) < 1.5 || Math.abs(b.s + b.w - a.s) < 1.5;
    const isAx = c => c.typ === 'ax' || /^Aufsatz/.test(c.name || '');
    pd.kw.forEach(k => {
      const w = pd.walls[k]; if (!w) return; const base = w.base, upC = w.up.filter(c => c.kind === 'u' && !isAx(c));
      base.forEach(c => {
        const mx = c.s + c.w / 2;
        if (c.app === 'sp') {
          const dx = Math.max(7, Math.min(12, c.w / 2 - 9)), gs = base.find(b => b.app === 'gs' && adj(b, c));
          add({ k, s: mx - dx, h: 55, cat: 'w', sh: 'Wasser', n: 'Warmwasser · Eckventil ½″', d: 'unter der Spüle, links' });
          add({ k, s: mx + dx, h: 55, cat: 'w', sh: 'Wasser', n: gs ? 'Kaltwasser · Kombi-Eckventil ½″ × ¾″' : 'Kaltwasser · Eckventil ½″', d: gs ? 'mit Geräteanschluss für die Spülmaschine' : 'unter der Spüle, rechts' });
          add({ k, s: mx, h: 42, cat: 'a', sh: 'Abwasser', n: 'Abwasser DN 50', d: gs ? 'Siphon mit Geräteanschluss für die Spülmaschine' : 'mittig unter der Spüle' });
          if (gs) { const r = gs.s > c.s; add({ k, s: r ? c.s + c.w - 9 : c.s + 9, h: 35, cat: 's', sh: 'Spülmaschine', n: 'Steckdose Spülmaschine', d: '230 V · eigener Stromkreis 16 A · im Spülenschrank, gut erreichbar' }); }
        }
        if (c.app === 'gs' && !base.some(b => b.app === 'sp' && adj(b, c))) { const nb = base.find(b => b !== c && b.kind === 'b' && adj(b, c)); add({ k, s: nb ? (nb.s > c.s ? nb.s + 9 : nb.s + nb.w - 9) : mx, h: 35, cat: 's', sh: 'Spülmaschine', n: 'Steckdose Spülmaschine', d: '230 V · eigener Stromkreis 16 A' + (nb ? ' · im Nachbarschrank' : '') }); }
        if (c.app === 'kf' || c.app === 'ko') add({ k, s: mx, h: 50, cat: 's', sh: 'Herd 400 V', n: 'Herdanschlussdose 400 V', d: (c.app === 'ko' ? 'Kochfeld + Backofen' : 'Kochfeld') + ' · 3 × 16 A, eigener Stromkreis' });
        if (c.app === 'bo' || c.app === 'bm') add({ k, s: mx, h: 45, cat: 's', sh: 'Backofen', n: 'Geräteanschluss Backofen', d: '230 V · eigener Stromkreis 16 A · hinter dem Schubkasten unter dem Backofen' });
        if (c.app === 'bm') add({ k, s: mx, h: Math.max(150, Math.min(ROOM_H - 30, (c.h || 216) - 22)), cat: 's', sh: 'Mikrowelle', n: 'Steckdose Mikrowelle', d: '230 V · oberhalb der Mikrowellen-Nische' });
        if (c.app === 'kue') add({ k, s: mx, h: Math.max(100, (c.h || 216) - 22), cat: 's', sh: 'Kühlschrank', n: 'Steckdose Kühlschrank', d: '230 V · oberhalb der Geräte-Nische, im Fach darüber' });
      });
      w.up.filter(c => c.kind === 'hood').forEach(c => add({ k, s: c.s + c.w / 2, h: Math.min(ROOM_H - 30, 225), cat: 's', sh: 'Haube', n: 'Steckdose Dunstabzug', d: '230 V · über der Haube, im Kamin verdeckt' }));
      // Doppelsteckdosen über der Arbeitsplatte – nicht über Spüle und Kochfeld, nicht im Fenster, nicht hinter Hochschränken
      const uk = upC.length ? Math.min(...upC.map(c => c.y0)) : null, hs = uk && uk - ah < 46 ? Math.round(ah + (uk - ah) / 2) : ah + 20;
      const iv = base.filter(c => c.kind === 'b').map(c => [c.s, c.s + c.w]); if (w.corner) iv.push([w.corner[0], w.corner[1]]);
      iv.sort((a, b) => a[0] - b[0]); const mg = []; iv.forEach(x => { const l = mg[mg.length - 1]; if (l && x[0] <= l[1] + 1.5) l[1] = Math.max(l[1], x[1]); else mg.push([...x]); });
      const blk = [];
      base.forEach(c => { if (c.kind === 't') blk.push([c.s - 3, c.s + c.w + 3]); if (c.app === 'sp') blk.push([c.s - 8, c.s + c.w + 8]); if (c.app === 'kf' || c.app === 'ko') blk.push([c.s - 15, c.s + c.w + 15]); });
      w.open.forEach(o2 => { if (o2.t !== 'fenster' || (o2.y0 || 0) < hs + 10) blk.push([o2.s - 10, o2.s + o2.w + 10]); });
      let segs = mg; blk.forEach(([a, b]) => { segs = segs.flatMap(([x, y]) => b <= x || a >= y ? [[x, y]] : [[x, Math.min(y, a)], [Math.max(x, b), y]].filter(([p, q]) => q - p > .5)); });
      segs.forEach(([a, b]) => { const L = b - a; if (L < 30) return; const n = Math.max(1, Math.min(3, Math.round(L / 110))); for (let j = 0; j < n; j++) add({ k, s: a + L * (j + .5) / n, h: hs, cat: 's', sh: 'Steckdosen', n: 'Doppelsteckdose Arbeitsplatte', d: '230 V · 16 A · ' + (uk ? 'zwischen Arbeitsplatte und Hängeschrank' : 'über der Arbeitsplatte') }); });
      if (upC.length) { const a = Math.min(...upC.map(c => c.s)), tp = Math.max(...upC.map(c => c.y0 + c.h)); add({ k, s: a + 15, h: Math.min(ROOM_H - 12, tp + 8), cat: 'l', sh: 'Licht', n: 'Lichtauslass Unterbauleuchten', d: '230 V · geschaltet · Netzteil liegt auf dem Hängeschrank' }); }
    });
    if (pd.island && pd.island.v && pd.island.v !== 'frei') {
      if (pd.island.v === 'spuele') { add({ k: 'I', s: 0, h: 0, cat: 'w', sh: 'Wasser', n: 'Kalt- und Warmwasser aus dem Boden', d: 'unter der Insel-Spüle · Leitungen im Estrich' }); add({ k: 'I', s: 0, h: 0, cat: 'a', sh: 'Abwasser', n: 'Abwasser DN 50 aus dem Boden', d: 'unter der Insel-Spüle · mit Gefälle im Estrich' }); }
      else add({ k: 'I', s: 0, h: 0, cat: 's', sh: 'Herd 400 V', n: 'Herdanschluss 400 V aus dem Boden', d: 'unter dem Insel-Kochfeld · 3 × 16 A' });
      add({ k: 'I', s: 0, h: 0, cat: 's', sh: 'Steckdosen', n: 'Steckdose in der Insel', d: '230 V · Bodenauslass, Steckdose seitlich in der Insel' });
    }
    const order = [...pd.kw, 'I']; P0.sort((p, q) => order.indexOf(p.k) - order.indexOf(q.k) || p.s - q.s || q.h - p.h);
    P0.forEach((p, i) => { p.nr = i + 1; p.s = Math.round(p.s); });
    // Bestand (im Planer eingetragen) – mit Abgleich zum Soll
    const ex = (pd.cx || []).filter(c => pd.walls[c.wall]).map((c, i) => {
      const want = c.t === 'wasser' ? P0.filter(p => p.cat === 'w' && p.k !== 'I') : c.t === 'herd' ? P0.filter(p => /^Herd/.test(p.sh) && p.k !== 'I') : P0.filter(p => p.cat === 's' && p.k !== 'I');
      const same = want.filter(p => p.k === c.wall).sort((p, q) => Math.abs(p.s - c.s) - Math.abs(q.s - c.s)), near = same[0], dd = near ? Math.abs(near.s - c.s) : null;
      const behind = pd.walls[c.wall].base.some(b => b.kind === 't' && c.s > b.s + 2 && c.s < b.s + b.w - 2), h0 = c.h || (c.t === 'dose' ? pd.ah + 20 : c.t === 'wasser' ? 55 : 50);
      const inWin = pd.walls[c.wall].open.some(o2 => c.s > o2.s - 4 && c.s < o2.s + o2.w + 4 && h0 > (o2.y0 || 0) - 4 && h0 < (o2.y0 || 0) + (o2.h || 0) + 4);
      let st;
      if (inWin) st = c.t === 'dose' ? 'liegt im Fenster- bzw. Türbereich – versetzen' : 'liegt im Fenster- bzw. Türbereich – Leitung versetzen';
      else if (c.t === 'dose') st = near && dd <= 25 ? `passt zu Nr. ${near.nr}` : behind ? 'hinter einem Hochschrank – versetzen oder stilllegen' : 'kann bleiben';
      else if (!want.length) st = 'wird für diese Küche nicht gebraucht';
      else if (!near) st = 'an einer anderen Wand – Leitung zur Küche verlegen';
      else st = dd <= 15 ? `passt zu Nr. ${near.nr}` : `${Math.round(dd)} cm zu Nr. ${near.nr} versetzen`;
      const h = c.h || (c.t === 'dose' ? pd.ah + 20 : c.t === 'wasser' ? 55 : 50);
      return { nr: 'B' + (i + 1), k: c.wall, s: Math.round(c.s), h, cat: c.t === 'wasser' ? 'w' : 's', sh: c.t === 'wasser' ? 'Wasser' : c.t === 'herd' ? 'Herd 400 V' : 'Steckdosen', n: { wasser: 'Wasseranschluss · vorhanden', herd: 'Herdanschluss 400 V · vorhanden', dose: 'Steckdose · vorhanden' }[c.t] || 'Anschluss · vorhanden', d: st, ex: true, ok: /^passt|^kann/.test(st) };
    });
    return { pts: P0, ex, all: [...P0, ...ex] };
  }
  function isym(p, x, y, r) {
    const c = ICAT[p.cat][0], lab = String(p.nr);
    return `<g class="kpr-ip" style="--i:${typeof p.nr === 'number' ? p.nr : 40}"><circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="${p.ex ? '#fff' : c}" stroke="${p.ex ? c : '#fff'}" stroke-width="${f1(r * (p.ex ? .2 : .14))}"${p.ex ? ` stroke-dasharray="${f1(r * .42)} ${f1(r * .28)}"` : ''}/>${ptxt(x, y + r * .36, lab, r * (lab.length > 2 ? .78 : lab.length > 1 ? .92 : 1.05), { w: 700, fill: p.ex ? c : '#fff' })}</g>`;
  }
  // Ansicht: Symbole mit Nummern, Laufmaße ab linker Wandecke (unten) und Höhenkoten (rechts)
  function instElev(pd, k, I, u, L) {
    const pts = I.all.filter(p => p.k === k), Y = h => -h, r = .62 * u; let s = '';
    s += pline(-1.2 * u, 0, L + 1.2 * u, 0, { w: 1.3 * u / 10 }) + pline(0, Y(ROOM_H), 0, 0, { w: 1.1 * u / 10 }) + pline(L, Y(ROOM_H), L, 0, { w: 1.1 * u / 10 });
    const by = 2.2 * u;
    s += pline(0, by, L, by, { w: .45 * u / 10 }) + `<circle cx="0" cy="${f1(by)}" r="${f1(.16 * u)}" fill="${INK}"/>` + ptxt(.32 * u, by + .5 * u, '0', .62 * u, { anchor: 'end', rot: -90, fill: MUTE });
    const seenX = [];
    pts.forEach(p => {
      const col = ICAT[p.cat][0];
      s += pline(p.s, Y(p.h) + r, p.s, by, { c: col, w: .32 * u / 10, dash: `${f1(.35 * u)} ${f1(.25 * u)}` });
      if (!seenX.some(x => Math.abs(x - p.s) < .7 * u)) { seenX.push(p.s); s += `<circle cx="${f1(p.s)}" cy="${f1(by)}" r="${f1(.16 * u)}" fill="${INK}"/>` + ptxt(p.s + .24 * u, by + .5 * u, cm(p.s), .62 * u, { anchor: 'end', rot: -90, w: 600 }); }
    });
    pts.forEach(p => { s += isym(p, p.s, Y(p.h), r); });
    s += ptxt(L / 2, by + 3.55 * u, 'Laufmaße ab linker Wandecke · Mitte Anschluss', .56 * u, { fill: MUTE });
    // Höhenkoten
    const hs = {}; pts.forEach(p => { const h = Math.round(p.h); (hs[h] = hs[h] || []).includes(p.sh) || hs[h].push(p.sh); });
    let kot = '', prevY = Infinity;
    Object.keys(hs).map(Number).sort((a, b) => a - b).forEach(h => {
      const y = Math.min(Y(h), prevY - 1.1 * u); prevY = y;
      const x0 = L + .6 * u; kot += `<g>${pline(L, Y(h), x0 + .3 * u, y, { c: MUTE, w: .35 * u / 10 })}<path d="M${f1(x0 + .3 * u)} ${f1(y)}l${f1(.5 * u)} ${f1(-.55 * u)}h${f1(-1 * u)}z" fill="${INK}" transform="translate(${f1(.5 * u)} 0)"/>${ptxt(x0 + 1.6 * u, y + .1 * u, `${h}  ${hs[h].slice(0, 2).join(' · ')}`, .7 * u, { anchor: 'start', w: 600 })}</g>`;
    });
    return s + `<g class="kpr-kots">${kot}</g>` + ptxt(L + .6 * u, Y(ROOM_H) + 1.05 * u, 'Höhe ab Fußboden', .58 * u, { anchor: 'start', fill: MUTE });
  }
  // Grundriss: farbige Punkte an der Wand (Bestand gestrichelt), Insel-Anschlüsse aus dem Boden
  function instPlan(pd, I, u) {
    let s = ''; const r = .5 * u;
    I.all.forEach(p => {
      if (p.k === 'I') return; const [x, y] = wp(pd, p.k, p.s, -9), c = ICAT[p.cat][0];
      s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="${p.ex ? '#fff' : c}" stroke="${p.ex ? c : '#fff'}" stroke-width="${f1(r * .22)}"${p.ex ? ` stroke-dasharray="${f1(r * .45)} ${f1(r * .3)}"` : ''}/>`;
    });
    const isl = I.all.filter(p => p.k === 'I');
    if (isl.length && pd.island) { const X = pd.island.x, Z = pd.island.z; isl.forEach((p, i) => { s += isym(p, X - (isl.length - 1) * .75 * u + i * 1.5 * u, Z, .62 * u); }); }
    return s;
  }

  function islandSVG(pd, o) {
    const u = o.fs, I = pd.island, ah = pd.ah, so = pd.sockel; DIMI = o.dimBase || 0;
    let s = `<rect x="0" y="${-ah}" width="${I.w}" height="${ah}" fill="${PAPER}" stroke="${INK}" stroke-width="${.8 * u / 10}"/><rect x="0" y="${-so}" width="${I.w}" height="${so}" fill="#3a3632"/><rect x="-.3" y="${-ah}" width="${I.w + .6}" height="4" fill="#8c8478"/>`;
    const n = Math.max(2, Math.round(I.w / 60)), cw = I.w / n; for (let i = 0; i < n; i++) s += fronts([{ k: 'drawer', p: .3 }, { k: 'drawer', p: .35 }, { k: 'drawer', p: .35 }], i * cw, -(ah - 4), cw, ah - 4 - so, u, 'b');
    s += `<rect x="${-1.2 * u}" y="0" width="${I.w + 2.4 * u}" height="${.5 * u}" fill="url(#kprGround2)"/>` + pline(-1.2 * u, 0, I.w + 1.2 * u, 0, { w: 1.3 * u / 10 });
    s += chain((a, b) => [a, b], [0, I.w], 2 * u, u, { flip: 1, bold: 1 }) + chain((a, b) => [-b, -a], [0, so, ah], 2.2 * u, u, { rot: -90 });
    const defs = `<defs><pattern id="kprGround2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><rect width="5" height="5" fill="#fff"/><line x1="0" y1="0" x2="0" y2="5" stroke="#9b9187" stroke-width="1"/></pattern></defs>`;
    const vx = -5.4 * u, vy = -(ah + 2 * u), vw = I.w + 7 * u, vh = ah + 2 * u + 4 * u;
    return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f1(vx)} ${f1(vy)} ${f1(vw)} ${f1(vh)}" class="kpr-svg" role="img" aria-label="Ansicht Insel">${defs}${s}</svg>`, vw, vh };
  }

  /* =========================================================================
     3) Echtoptik – eigenes Render (KP.renderHQ, sonst zweite 3D-Instanz mit eigener Kamera) + Nachbearbeitung
     ========================================================================= */
  const VIEWS = [['uebersicht', 'Übersicht'], ['augen', 'Augenhöhe'], ['detail', 'Detail'], ['oben', 'Von oben'], ['hier', 'Ihr Blick']];
  let hereCam = null;   // Kamera des Planers beim Öffnen – „Ihr Blick“ wird genau so berechnet
  let K2 = null, K2key = '', K2host = null, engineP = null; const cache = new Map();
  function ensureEngine() {
    if (window.PelPlanner3D) return Promise.resolve();
    if (engineP) return engineP;
    const ex = $$('script').find(s => /planner3d\.js/.test(s.src));
    return engineP = new Promise((res, rej) => {
      if (ex) { if (window.PelPlanner3D) return res(); ex.addEventListener('load', () => res()); ex.addEventListener('error', rej); setTimeout(() => window.PelPlanner3D ? res() : null, 50); return; }
      const v = (($$('script').find(s => /kp\.js/.test(s.src)) || {}).src || '').split('v=')[1] || '1';
      const s = document.createElement('script'); s.src = 'js/planner3d.js?v=' + v; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  async function settle(k, max = 2600) { const t0 = performance.now(); await wait(60); while (performance.now() - t0 < max) { if (!k.busy || !k.busy()) return; await new Promise(r => requestAnimationFrame(r)); } }
  function camFor(view, pd) {
    const W = pd.room.w / 100, D = pd.room.d / 100, M = Math.max(W, D), ah = pd.ah / 100;
    if (view === 'hier' && hereCam) return { p: hereCam.pos, t: hereCam.target, fov: hereCam.fov };
    if (view === 'oben') { const Hc = M * 1.45 + 2.4, p = [W / 2, Hc, D / 2 + D * .3], t = [W / 2, .6, D / 2 - D * .04], dist = Math.hypot(p[1], p[2] - t[2]); return { p, t, fov: 2 * Math.atan(Math.max(D * .74, W * .72 / 1.6) / dist) * 180 / Math.PI }; }
    if (view === 'augen') { const z = pd.form === 'zwei' ? D - .6 - .38 : D - .3; return { p: [W * .6, 1.6, z], t: [W * .43, 1.18, 0], fov: 58 }; }
    if (view === 'detail') {
      let best = null; const pref = ['kf', 'ko', 'sp'];
      pd.kw.forEach(k => pd.walls[k].base.forEach(c => { const r = pref.indexOf(c.app); if (r >= 0 && (!best || r < best.r)) best = { r, c, k }; }));
      if (!best) { const k = pd.kw.includes('N') ? 'N' : pd.kw[0], c = pd.walls[k].base[Math.floor(pd.walls[k].base.length / 2)]; if (c) best = { c, k }; }
      if (!best) return camFor('uebersicht', pd);
      const k = best.k, a = (best.c.s + best.c.w / 2) / 100, d = DIR[k], n = OUT[k].map(v => -v);
      const wpt = (al, dep) => { const st = { N: [0, 0], S: [W, D], W: [0, D], E: [W, 0] }[k]; return [st[0] + d[0] * al + n[0] * dep, st[1] + d[1] * al + n[1] * dep]; };
      const [tx, tz] = wpt(a, .32), side = a > pd.walls[k].len / 200 ? -1 : 1; let [px, pz] = wpt(a + side * .55, 1.55);
      px = Math.max(.25, Math.min(W - .25, px)); pz = Math.max(.25, Math.min(D - .25, pz));
      return { p: [px, ah + .72, pz], t: [tx, ah - .02, tz], fov: 46 };
    }
    return { p: [W * .66, 1.85 + M * .13, D + .4 + M * .42], t: [W * .46, .92, D * .36], fov: 44 };
  }
  async function renderOwn(view, mood, Wd, Hd, onStep) {
    const K = KPo(); await ensureEngine(); if (!window.PelPlanner3D) throw new Error('engine');
    if (!K2) { K2host.innerHTML = ''; K2 = window.PelPlanner3D(K2host, { acc: (K && K.acc) || '#c0673f' }); K2key = ''; }
    const st = K.state3d(), key = JSON.stringify(st) + '|' + mood;
    onStep && onStep(1);
    if (key !== K2key) { K2.mood(mood, st); K2key = key; await settle(K2, 1600); }
    onStep && onStep(2);
    K2.view('front'); await settle(K2, 2600);
    const c = camFor(view, getPlan());
    onStep && onStep(3);
    K2.lookAt(c.p, c.t, c.fov);
    const mob = isMob();
    if (K2.deko) { try { K2.deko(getPlan(), { lite: mob }); await settle(K2, 300); } catch (e) { } }
    // Engine-eigenes Hochqualitäts-Bild (Überabtastung + feine Schatten), sonst selbst überabtasten
    if (typeof K2.renderHQ === 'function') return { c: K2.renderHQ(Wd, Hd, { lite: mob }), how: 'hq' };
    const ss = innerWidth < 700 ? 1.3 : 1.7, raw = K2.capture(Math.round(Wd * ss), Math.round(Hd * ss));
    const out = document.createElement('canvas'); out.width = Wd; out.height = Hd; const g = out.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; g.drawImage(raw, 0, 0, Wd, Hd);
    return { c: out, how: 'own' };
  }
  // Nachbearbeitung: warmes Licht, sanfte S-Kurve, Glanz (Bloom), Vignette, feines Korn
  function grade(src, strength = 1) {
    const Wd = src.width, Hd = src.height, c = document.createElement('canvas'); c.width = Wd; c.height = Hd; const g = c.getContext('2d'); g.drawImage(src, 0, 0);
    try {
      const id = g.getImageData(0, 0, Wd, Hd), d = id.data, lr = new Uint8ClampedArray(256), lg = new Uint8ClampedArray(256), lb = new Uint8ClampedArray(256), k = .11 * strength;
      for (let i = 0; i < 256; i++) { let v = i / 255; const sm = v * v * (3 - 2 * v); v = v + (sm - v) * k * 2.2; v = Math.max(0, Math.min(1, .014 * strength + v * (1 - .014 * strength))); lr[i] = Math.min(255, v * 255 * (1 + .045 * strength) + 2 * strength); lg[i] = Math.min(255, v * 255 * (1 + .012 * strength)); lb[i] = v * 255 * (1 - .05 * strength); }
      const sat = 1 + .07 * strength;
      for (let i = 0; i < d.length; i += 4) { let r = lr[d[i]], gg = lg[d[i + 1]], b = lb[d[i + 2]]; const L = .3 * r + .59 * gg + .11 * b; d[i] = L + (r - L) * sat; d[i + 1] = L + (gg - L) * sat; d[i + 2] = L + (b - L) * sat; }
      g.putImageData(id, 0, 0);
    } catch (e) { }
    // Bloom: verkleinern/vergrößern = weiches Licht
    const sm = document.createElement('canvas'); sm.width = Math.max(8, Math.round(Wd / 12)); sm.height = Math.max(8, Math.round(Hd / 12)); const sg = sm.getContext('2d'); sg.imageSmoothingQuality = 'high'; sg.drawImage(c, 0, 0, sm.width, sm.height);
    g.save(); g.globalCompositeOperation = 'screen'; g.globalAlpha = .16 * strength; g.imageSmoothingQuality = 'high'; g.drawImage(sm, 0, 0, Wd, Hd); g.restore();
    // warmes Fensterlicht von oben links
    g.save(); g.globalCompositeOperation = 'soft-light'; let gr = g.createRadialGradient(Wd * .22, Hd * .1, 0, Wd * .22, Hd * .1, Wd * .9); gr.addColorStop(0, `rgba(255,214,160,${.35 * strength})`); gr.addColorStop(1, 'rgba(255,214,160,0)'); g.fillStyle = gr; g.fillRect(0, 0, Wd, Hd); g.restore();
    // Vignette
    g.save(); g.globalCompositeOperation = 'multiply'; gr = g.createRadialGradient(Wd / 2, Hd * .52, Math.min(Wd, Hd) * .38, Wd / 2, Hd * .52, Math.hypot(Wd, Hd) * .62); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, `rgba(${Math.round(255 - 95 * strength)},${Math.round(255 - 105 * strength)},${Math.round(255 - 112 * strength)},1)`); g.fillStyle = gr; g.fillRect(0, 0, Wd, Hd); g.restore();
    // Korn
    try { const n = document.createElement('canvas'); n.width = n.height = 128; const ng = n.getContext('2d'), nd = ng.createImageData(128, 128); for (let i = 0; i < nd.data.length; i += 4) { const v = 128 + (Math.random() - .5) * 60; nd.data[i] = nd.data[i + 1] = nd.data[i + 2] = v; nd.data[i + 3] = 255; } ng.putImageData(nd, 0, 0); g.save(); g.globalCompositeOperation = 'overlay'; g.globalAlpha = .05 * strength; g.fillStyle = g.createPattern(n, 'repeat'); g.fillRect(0, 0, Wd, Hd); g.restore(); } catch (e) { }
    return c;
  }
  /* ---------- Echtoptik per Raytracing (rt/kp-rt.js, three-gpu-pathtracer) ---------- */
  // Fotorealistisch: physikalisches Licht (Himmel, Sonne durchs Fenster, LED, Spots), echte Materialien, Deko.
  // Ältere Geräte ohne WebGL2-Gleitkomma-Puffer bekommen die bisherige Darstellung.
  // Freischaltung: bis zur Prüfung auf echten Grafikkarten nur mit ?rt=1 (merkt sich der Tab). RT_DEFAULT = true schaltet es für alle ein.
  const RT_DEFAULT = true;
  const RT_OFF = /[?&]rt=0/.test(location.search) || (!RT_DEFAULT && !(() => { try { if (/[?&]rt=1/.test(location.search)) sessionStorage.setItem('kp-rt', '1'); return sessionStorage.getItem('kp-rt') === '1'; } catch (e) { return /[?&]rt=1/.test(location.search); } })());
  let RTp = null, RTK = null, RThost = null, rtChain = Promise.resolve();
  // Handy/Tablet: wenig Grafikspeicher → leichtes Raytracing, danach alles freigeben
  const isMob = () => innerWidth < 700 || (typeof matchMedia === 'function' && matchMedia('(pointer:coarse)').matches) || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  // Absturz-Schutz: Läuft beim Neuladen noch ein Raytracing-Versuch (Tab ist abgestürzt), bleibt das Gerät bei der Schnellansicht.
  const RT_TRY = 'kp-rt-try', RT_BAD = 'kp-rt-bad';
  let rtBad = false;
  try { const t = +localStorage.getItem(RT_TRY) || 0; if (t && Date.now() - t < 864e5 * 60) localStorage.setItem(RT_BAD, String(Date.now())); localStorage.removeItem(RT_TRY); if (/[?&]rt=1/.test(location.search)) localStorage.removeItem(RT_BAD); rtBad = !!localStorage.getItem(RT_BAD); } catch (e) { }
  const rtGuard = on => { try { if (on) localStorage.setItem(RT_TRY, String(Date.now())); else localStorage.removeItem(RT_TRY); } catch (e) { } };
  addEventListener('pagehide', () => rtGuard(false));
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') rtGuard(false); });
  function rtSupported() { if (RT_OFF || rtBad) return false; try { const c = document.createElement('canvas'), gl = c.getContext('webgl2'); const ok = !!(gl && gl.getExtension('EXT_color_buffer_float')); try { gl && gl.getExtension('WEBGL_lose_context').loseContext(); } catch (e) { } return ok; } catch (e) { return false; } }
  function loadRT() {
    if (window.PelRT) return Promise.resolve(window.PelRT);
    if (RTp) return RTp;
    const v = (($$('script').find(s => /kp-result\.js/.test(s.src)) || {}).src || '').split('v=')[1] || '1';
    return RTp = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'rt/kp-rt.js?v=' + v; s.onload = () => window.PelRT ? res(window.PelRT) : rej(new Error('rt')); s.onerror = () => { RTp = null; rej(new Error('rt-load')); }; document.head.appendChild(s); });
  }
  // Fotografischer Feinschliff: neutral-warmer Weißabgleich, sanfte Kurve, Lichthof an hellen Fenstern, leichte Vignette
  function gradeRT(src) {
    const Wd = src.width, Hd = src.height, c = document.createElement('canvas'); c.width = Wd; c.height = Hd; const g = c.getContext('2d'); g.drawImage(src, 0, 0);
    try {
      const id = g.getImageData(0, 0, Wd, Hd), d = id.data, lr = new Uint8ClampedArray(256), lg = new Uint8ClampedArray(256), lb = new Uint8ClampedArray(256);
      for (let i = 0; i < 256; i++) { const v = i / 255, sm = v * v * (3 - 2 * v), cv = v + (sm - v) * .18; lr[i] = Math.min(255, cv * 255 * 1.025 + 1); lg[i] = Math.min(255, cv * 255 * 1.0); lb[i] = Math.min(255, cv * 255 * .965); }
      for (let i = 0; i < d.length; i += 4) { d[i] = lr[d[i]]; d[i + 1] = lg[d[i + 1]]; d[i + 2] = lb[d[i + 2]]; }
      g.putImageData(id, 0, 0);
    } catch (e) { }
    const sm = document.createElement('canvas'); sm.width = Math.max(8, Math.round(Wd / 16)); sm.height = Math.max(8, Math.round(Hd / 16)); const sg = sm.getContext('2d'); sg.filter = 'brightness(0.9) contrast(2.2)'; sg.drawImage(c, 0, 0, sm.width, sm.height);
    g.save(); g.globalCompositeOperation = 'screen'; g.globalAlpha = .12; g.imageSmoothingQuality = 'high'; g.drawImage(sm, 0, 0, Wd, Hd); g.restore();
    g.save(); g.globalCompositeOperation = 'multiply'; const gr = g.createRadialGradient(Wd / 2, Hd * .5, Math.min(Wd, Hd) * .45, Wd / 2, Hd * .5, Math.hypot(Wd, Hd) * .62); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(214,208,200,1)'); g.fillStyle = gr; g.fillRect(0, 0, Wd, Hd); g.restore();
    return c;
  }
  async function renderRT(view, mood, onProg, isLive) {
    const K = KPo(), PRT = await loadRT();
    // frische Instanz je Bild: keine Einfahr-Animationen, die halb im Bild landen
    if (RTK) { try { RTK.dispose(); } catch (e) { } RTK = null; }
    if (!RThost) { RThost = document.createElement('div'); RThost.style.cssText = 'position:fixed;left:-9999px;top:0;width:320px;height:200px;pointer-events:none'; RThost.setAttribute('aria-hidden', 'true'); document.body.appendChild(RThost); }
    const mob = isMob();
    // Handy: zweite Schnellansicht-Instanz vorher schließen – jeder 3D-Kontext kostet Grafikspeicher
    if (mob && K2) { try { K2.dispose(); } catch (e) { } K2 = null; K2key = ''; }
    RTK = PRT.create(RThost, { acc: (K && K.acc) || '#c0673f' });
    RTK.mood(mood, K.state3d());
    const qs = new URLSearchParams(location.search), qw = +(qs.get('rtw') || 0);   // rtw: Testgröße
    const Wd = qw >= 240 ? qw : mob ? 960 : 1920, Hd = Math.round(Wd * .625);
    let r;
    rtGuard(mob);
    try {
      r = await PRT.render(RTK, { w: Wd, h: Hd, view, camera: view === 'hier' ? hereCam : null, mood, plan: getPlan(), samples: mob ? 160 : 640, minSamples: mob ? 24 : 48, maxMs: mob ? 24000 : 26000, tiles: mob ? 4 : 2, texSize: mob ? 256 : 1024, bounces: mob ? 3 : 5, tBounces: mob ? 3 : 6, lite: mob, envLight: 'apartment', onProgress: onProg, signal: { get aborted() { return !isLive(); } } });
    } finally {
      rtGuard(false);
      if (mob) { try { RTK.dispose(); } catch (e) { } RTK = null; try { PRT.release && PRT.release(); } catch (e) { } }
    }
    if (!isLive()) return null;
    // Plausibilität: schwarzes, leeres oder einfarbiges Bild (z. B. Treiberfehler) → klassische Darstellung
    { const t = document.createElement('canvas'); t.width = 48; t.height = 30; const g = t.getContext('2d'); g.drawImage(r.canvas, 0, 0, 48, 30); const d = g.getImageData(0, 0, 48, 30).data; let s = 0, s2 = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) { const L = (d[i] * .3 + d[i + 1] * .59 + d[i + 2] * .11) / 255; s += L; s2 += L * L; n++; }
      const m = s / n, sd = Math.sqrt(Math.max(0, s2 / n - m * m)); if (!(m > .06 && m < .97 && sd > .03)) throw new Error('rt-implausible ' + m.toFixed(2) + '/' + sd.toFixed(2)); }
    return { canvas: gradeRT(r.canvas), how: 'rt', samples: r.samples };
  }
  async function renderView(view, mood, onStep) {
    const K = KPo(); if (!K) throw new Error('kp');
    const Wd = isMob() ? 1280 : 1920, Hd = Math.round(Wd * .625);
    const key = view + '|' + mood + '|' + Wd + '|' + (view === 'hier' && hereCam ? hereCam.pos.map(v => v.toFixed(2)).join(',') : '') + '|' + JSON.stringify(K.state3d ? K.state3d() : {});
    if (cache.has(key)) return cache.get(key);
    let c = null, how = 'own';
    // 1) eigene Kamera (zweite 3D-Instanz) – nutzt renderHQ der Engine, wenn vorhanden
    try { const r = await renderOwn(view, mood, Wd, Hd, onStep); c = r.c; how = r.how; } catch (e) { c = null; }
    // 2) KP.renderHQ (Hauptansicht, aktuelle Kamera des Planers)
    if (!c && typeof K.renderHQ === 'function') { try { const r = await K.renderHQ(Wd, Hd, { view, mood }); c = r && r.getContext ? r : (r && (r.src || typeof r === 'string')) ? await imgToCanvas(r.src || r) : null; how = 'kp-hq'; } catch (e) { c = null; } }
    // 3) Schnappschuss der Hauptansicht
    if (!c) { const k3 = K.k3d && K.k3d(); if (k3 && k3.capture) { c = k3.capture(Wd, Hd); how = 'main'; } else if (k3 && k3.snapshot) { c = await imgToCanvas(k3.snapshot()); how = 'main'; } }
    if (!c) throw new Error('render');
    onStep && onStep(4);
    const out = grade(c, 1); const res = { canvas: out, how }; cache.set(key, res); if (cache.size > 12) cache.delete(cache.keys().next().value);
    return res;
  }
  const imgToCanvas = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => { const c = document.createElement('canvas'); c.width = i.naturalWidth; c.height = i.naturalHeight; c.getContext('2d').drawImage(i, 0, 0); res(c); }; i.onerror = rej; i.src = src; });

  /* =========================================================================
     4) Overlay
     ========================================================================= */
  let el = null, back = null, pd = null, tab = 'foto', view = 'uebersicht', mood = 'tag', dimsOn = true, mode = 'alles', renderTok = 0, lastFoto = null, rzT = 0;
  const ICO = {
    x: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    foto: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6.5h3l1.4-2h5.2l1.4 2h3v9.5H3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    plan: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3.5h14v13H3z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3 7.5h6v9M12 3.5v5h5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 1.2v1.6M15 1.2v1.6M5 2h10" stroke="currentColor" stroke-width="1.1"/></svg>',
    liste: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5h10M7 10h10M7 15h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="3.6" cy="5" r="1.2" fill="currentColor"/><circle cx="3.6" cy="10" r="1.2" fill="currentColor"/><circle cx="3.6" cy="15" r="1.2" fill="currentColor"/></svg>',
    dl: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9.5M6 9l4 4 4-4M4 16.5h12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    inst: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.2 2.5v3.6M12.8 2.5v3.6M5 6.1h10v3.2a5 5 0 0 1-10 0zM10 14.3v3.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    pr: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 7.5V3h9v4.5M5.5 14H3.5V8h13v6h-2M5.5 11.5h9V17h-9z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    send: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10l14-6.5-4.5 14-2.8-5.2zM9.7 12.3L17 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    moon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.5 12.5A6.5 6.5 0 0 1 7.5 4.5a6.5 6.5 0 1 0 8 8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  };
  function build() {
    el = document.createElement('div'); el.className = 'kpr'; el.hidden = true; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'kpr-t'); el.setAttribute('data-lenis-prevent', '');
    el.innerHTML = `
<div class="kpr-bg" data-x></div>
<div class="kpr-win">
  <header class="kpr-top">
    <div class="kpr-tt"><span class="kpr-ov">Ihr Ergebnis</span><h2 id="kpr-t">Ihre Küche – fertig geplant</h2><p data-sub></p></div>
    <button type="button" class="kpr-x" data-x aria-label="Schließen">${ICO.x}</button>
  </header>
  <nav class="kpr-tabs" role="tablist" aria-label="Ergebnis">
    <button type="button" role="tab" data-tab="foto" id="kpr-tab-foto" aria-controls="kpr-p-foto">${ICO.foto}<span>Echtoptik</span></button>
    <button type="button" role="tab" data-tab="plan" id="kpr-tab-plan" aria-controls="kpr-p-plan">${ICO.plan}<span>Maßplan</span></button>
    <button type="button" role="tab" data-tab="inst" id="kpr-tab-inst" aria-controls="kpr-p-inst">${ICO.inst}<span>Installation</span></button>
    <button type="button" role="tab" data-tab="liste" id="kpr-tab-liste" aria-controls="kpr-p-liste">${ICO.liste}<span>Übersicht</span></button>
    <i class="kpr-ink" aria-hidden="true"></i>
  </nav>
  <div class="kpr-body">
    <section class="kpr-p kpr-foto" id="kpr-p-foto" role="tabpanel" aria-labelledby="kpr-tab-foto" data-p="foto">
      <div class="kpr-stage" data-stage>
        <div class="kpr-r3d" data-r3d aria-hidden="true"></div>
        <canvas class="kpr-live" data-live aria-hidden="true"></canvas>
        <img class="kpr-img" data-img alt="Ihre geplante Küche in Echtoptik">
        <div class="kpr-rtp" data-rtp hidden><span class="kpr-rtl"><b data-rtpt>Licht wird berechnet</b><small data-rtps></small></span><span class="kpr-bar"><i data-rtpb></i></span></div>
        <div class="kpr-load" data-load><div class="kpr-pre" data-pre></div><div class="kpr-lc"><span class="kpr-spin" aria-hidden="true"></span><b>Wird in Echtoptik berechnet …</b><small data-lstep>Licht wird gesetzt</small><span class="kpr-bar"><i data-lbar></i></span></div></div>
        <p class="kpr-err" data-ferr hidden></p>
      </div>
      <div class="kpr-fbar">
        <div class="kpr-seg" role="group" aria-label="Blickwinkel">${VIEWS.map(([k, n]) => `<button type="button" data-view="${k}"${k === 'hier' ? ' title="Genau so, wie Sie die Küche gerade im Planer gedreht haben"' : k === 'oben' ? ' title="Draufsicht wie ein 3D-Grundriss"' : ''}>${n}</button>`).join('')}</div>
        <button type="button" class="kpr-chip" data-mood aria-pressed="false">${ICO.moon}<span>Abendlicht</span></button>
        <span class="kpr-sp"></span>
        <button type="button" class="kpr-btn kpr-ghost" data-save-foto>${ICO.dl}<span>Bild speichern</span></button>
      </div>
    </section>
    <section class="kpr-p kpr-plan" id="kpr-p-plan" role="tabpanel" aria-labelledby="kpr-tab-plan" data-p="plan" hidden>
      <div class="kpr-pbar">
        <label class="kpr-sw"><input type="checkbox" data-dims checked><i aria-hidden="true"></i><span>Maße anzeigen</span></label>
        <div class="kpr-seg" role="group" aria-label="Ansicht">${[['grundriss', 'Nur Grundriss'], ['ansichten', 'Nur Ansichten'], ['alles', 'Alles']].map(([k, n]) => `<button type="button" data-mode="${k}">${n}</button>`).join('')}</div>
        <span class="kpr-sp"></span>
        <button type="button" class="kpr-btn kpr-ghost" data-print>${ICO.pr}<span>Drucken</span></button>
        <button type="button" class="kpr-btn kpr-ghost" data-save-plan>${ICO.dl}<span>Als Bild</span></button>
        <button type="button" class="kpr-btn kpr-pri" data-pdf-plan>${ICO.dl}<span>PDF herunterladen</span></button>
      </div>
      <div class="kpr-sheet" data-sheet></div>
    </section>
    <section class="kpr-p kpr-plan kpr-inst" id="kpr-p-inst" role="tabpanel" aria-labelledby="kpr-tab-inst" data-p="inst" hidden>
      <div class="kpr-pbar">
        <p class="kpr-ihint"><b>Für Elektriker &amp; Installateur</b><span>Wo Steckdosen, Herdanschluss, Wasser und Abfluss hinkommen – passend zu dieser Küche.</span></p>
        <span class="kpr-sp"></span>
        <button type="button" class="kpr-btn kpr-ghost" data-print-inst>${ICO.pr}<span>Drucken</span></button>
        <button type="button" class="kpr-btn kpr-pri" data-pdf-inst>${ICO.dl}<span>PDF herunterladen</span></button>
      </div>
      <div class="kpr-sheet" data-isheet></div>
    </section>
    <section class="kpr-p kpr-liste" id="kpr-p-liste" role="tabpanel" aria-labelledby="kpr-tab-liste" data-p="liste" hidden>
      <div data-liste></div>
    </section>
  </div>
</div>`;
    document.body.appendChild(el);
    K2host = $('[data-r3d]', el);
    el.addEventListener('click', e => {
      if (e.target.closest('[data-x]')) return close();
      const t = e.target.closest('[data-tab]'); if (t) return setTab(t.dataset.tab);
      const v = e.target.closest('[data-view]'); if (v) { view = v.dataset.view; syncChips(); return showFoto(); }
      if (e.target.closest('[data-mood]')) { mood = mood === 'tag' ? 'abend' : 'tag'; syncChips(); return showFoto(); }
      const md = e.target.closest('[data-mode]'); if (md) { mode = md.dataset.mode; syncChips(); return renderSheet(true); }
      if (e.target.closest('[data-save-foto]')) return saveFoto();
      if (e.target.closest('[data-save-plan]')) return savePlan();
      if (e.target.closest('[data-print]')) return printPlan();
      if (e.target.closest('[data-pdf-plan]')) return savePlan('pdf');
      if (e.target.closest('[data-print-inst]')) return printInst();
      if (e.target.closest('[data-pdf-inst]')) return instPDF();
      if (e.target.closest('[data-send]')) return toSend();
      const g = e.target.closest('[data-goto]'); if (g) return setTab(g.dataset.goto);
    });
    $('[data-dims]', el).addEventListener('change', e => { dimsOn = e.target.checked; applyDims(true); });
    el.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'Tab') trap(e);
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && e.target.closest('[role="tab"]')) { const order = ['foto', 'plan', 'inst', 'liste'], i = order.indexOf(tab); setTab(order[(i + (e.key === 'ArrowRight' ? 1 : order.length - 1)) % order.length], true); }
    });
    addEventListener('resize', () => { if (!el || el.hidden) return; clearTimeout(rzT); rzT = setTimeout(() => { moveInk(); if (tab === 'plan') renderSheet(false); if (tab === 'inst') renderInst(false); }, 160); });
    addEventListener('afterprint', () => { document.documentElement.classList.remove('kpr-print', 'kpr-pi'); if (el && !el.hidden) { if (tab === 'inst') renderInst(false); else renderSheet(false); } });
  }
  function trap(e) { const f = $$('button:not([disabled]), input, [tabindex="0"]', el).filter(x => x.offsetParent !== null && !x.closest('[hidden]')); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  function syncChips() {
    $$('[data-view]', el).forEach(b => { const on = b.dataset.view === view; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    const mb = $('[data-mood]', el); mb.classList.toggle('on', mood === 'abend'); mb.setAttribute('aria-pressed', mood === 'abend');
    $$('[data-mode]', el).forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  }
  function moveInk() { const b = $(`[data-tab="${tab}"]`, el), ink = $('.kpr-ink', el); if (!b || !ink) return; ink.style.width = b.offsetWidth + 'px'; ink.style.transform = `translateX(${b.offsetLeft}px)`; }
  function setTab(t, focus) {
    const prev = tab; tab = t;
    $$('[data-tab]', el).forEach(b => { const on = b.dataset.tab === t; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
    $$('[data-p]', el).forEach(p => { const on = p.dataset.p === t; if (on) { p.hidden = false; if (!RMO && prev !== t) { p.classList.remove('kpr-in'); void p.offsetWidth; p.classList.add('kpr-in'); } } else p.hidden = true; });
    moveInk(); $('.kpr-body', el).scrollTop = 0;
    if (t === 'foto') showFoto(); if (t === 'plan') renderSheet(true); if (t === 'inst') renderInst(true); if (t === 'liste') renderList();
  }
  function subLine() { return `${pd.formName} · Raum ${m2(pd.room.w)} × ${m2(pd.room.d)} m · Arbeitshöhe ${pd.ah} cm`; }

  /* ---------- Echtoptik ---------- */
  const STEPS = ['', 'Raum und Materialien werden aufgebaut', 'Licht wird gesetzt', 'Kamera richtet sich aus', 'Feinschliff in Echtoptik'];
  async function showFoto() {
    const tok = ++renderTok, load = $('[data-load]', el), img = $('[data-img]', el), bar = $('[data-lbar]', el), ls = $('[data-lstep]', el), err = $('[data-ferr]', el), pre = $('[data-pre]', el);
    err.hidden = true; load.hidden = false; load.classList.remove('out'); img.classList.remove('on');
    try { const k3 = KPo().k3d && KPo().k3d(); if (k3 && k3.snapshot && !lastFoto) pre.style.backgroundImage = `url(${k3.snapshot()})`; else if (lastFoto) pre.style.backgroundImage = `url(${lastFoto})`; } catch (e) { }
    const step = i => { if (tok !== renderTok) return; ls.textContent = STEPS[i] || STEPS[2]; bar.style.width = (i / 4 * 100) + '%'; };
    step(.4);
    const t0 = performance.now(), live = $('[data-live]', el), rtp = $('[data-rtp]', el), rtpb = $('[data-rtpb]', el), rtpt = $('[data-rtpt]', el), rtps = $('[data-rtps]', el);
    live.classList.remove('on'); rtp.hidden = true;
    try {
      let r = null;
      const key = 'rt|' + view + '|' + mood + '|' + (view === 'hier' && hereCam ? hereCam.pos.map(v => v.toFixed(2)).join(',') : '') + '|' + JSON.stringify(KPo().state3d ? KPo().state3d() : {});
      if (rtSupported()) {
        if (cache.has(key)) r = cache.get(key);
        else {
          const prev = rtChain; let release; rtChain = new Promise(x => release = x);
          try {
            await prev; if (tok !== renderTok) return;
            ls.textContent = 'Raum, Licht und Materialien werden aufgebaut'; bar.style.width = '18%';
            r = await renderRT(view, mood, (f, cv, spp) => {
              if (tok !== renderTok) return;
              if (!live.classList.contains('on')) { live.width = cv.width; live.height = cv.height; live.classList.add('on'); rtp.hidden = false; load.classList.add('out'); setTimeout(() => { if (tok === renderTok) load.hidden = true; }, 600); }
              try { live.getContext('2d').drawImage(cv, 0, 0); } catch (e) { }
              const pc = Math.round(f * 100); rtpb.style.width = pc + '%'; rtpt.textContent = pc < 98 ? `Licht wird berechnet · ${pc} %` : 'Feinschliff …'; rtps.textContent = `${Math.round(spp)} Lichtstrahlen je Bildpunkt`;
            }, () => tok === renderTok);
          } catch (e) { console.warn('Echtoptik-Raytracing nicht möglich – Standard-Darstellung', e); r = null; }
          finally { release(); }
          if (tok !== renderTok) return;
          if (r) { cache.set(key, r); if (cache.size > 12) cache.delete(cache.keys().next().value); }
        }
      }
      if (!r) r = await renderView(view, mood, step);
      if (tok !== renderTok) return;
      const min = RMO ? 0 : 900 - (performance.now() - t0); if (min > 0) await wait(min);
      if (tok !== renderTok) return;
      const url = r.canvas.toDataURL('image/jpeg', .92); img.src = url; lastFoto = url; el.dataset.how = r.how;
      await (img.decode ? img.decode().catch(() => { }) : Promise.resolve());
      if (tok !== renderTok) return;
      img.classList.add('on'); load.classList.add('out'); setTimeout(() => { if (tok === renderTok) { load.hidden = true; live.classList.remove('on'); } }, 700); rtp.hidden = true;
    } catch (e) {
      if (tok !== renderTok) return; load.hidden = true; rtp.hidden = true; live.classList.remove('on'); err.hidden = false; err.textContent = 'Das Bild in Echtoptik konnte auf diesem Gerät nicht berechnet werden. Der Maßplan und die Übersicht stehen trotzdem bereit.';
    }
  }
  async function saveFoto() {
    const img = $('[data-img]', el); if (!img.src || !img.complete) return;
    const K = KPo(), Wd = img.naturalWidth, Hd = img.naturalHeight, bh = Math.round(Hd * .085), c = document.createElement('canvas'); c.width = Wd; c.height = Hd + bh; const g = c.getContext('2d');
    g.drawImage(img, 0, 0); g.fillStyle = '#16130f'; g.fillRect(0, Hd, Wd, bh);
    const acc = (K && K.acc) || '#c0673f'; g.fillStyle = acc; g.fillRect(0, Hd, Wd, Math.max(3, bh * .05));
    const pad = bh * .55, logo = K && K.logo; let x = pad;
    if (logo && logo.naturalWidth) { const lh = bh * .56, lw = lh * logo.naturalWidth / logo.naturalHeight; g.drawImage(logo, x, Hd + (bh - lh) / 2 + bh * .02, lw, lh); x += lw + pad; }
    else { g.fillStyle = '#fff'; g.font = `600 ${Math.round(bh * .32)}px ${cssFont('--serif', 'Georgia, serif')}`; g.textBaseline = 'middle'; g.fillText(pd.studio, x, Hd + bh / 2 + bh * .02); x += g.measureText(pd.studio).width + pad; }
    g.textBaseline = 'middle'; g.textAlign = 'right'; g.fillStyle = '#fff'; g.font = `600 ${Math.round(bh * .27)}px ${cssFont('--serif', 'Georgia, serif')}`; g.fillText('Mein Küchenentwurf · ' + (VIEWS.find(v => v[0] === view) || ['', ''])[1] + (mood === 'abend' ? ' · Abendlicht' : ''), Wd - pad, Hd + bh * .4);
    g.fillStyle = 'rgba(255,255,255,.62)'; g.font = `${Math.round(bh * .2)}px ${FONT}`; g.fillText(`${subLine()} · ${new Date().toLocaleDateString('de-DE')}`, Wd - pad, Hd + bh * .7);
    download(c.toDataURL('image/jpeg', .92), `kuechenentwurf-echtoptik-${view}${mood === 'abend' ? '-abend' : ''}.jpg`);
  }
  function cssFont(v, fb) { try { const s = getComputedStyle(document.documentElement).getPropertyValue(v).trim(); if (s && !s.startsWith('var(')) return s; const d = getComputedStyle(document.documentElement).getPropertyValue('--disp').trim(); return d && !d.startsWith('var(') ? d : fb; } catch (e) { return fb; } }
  function download(url, name) { const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); }

  /* ---------- Maßplan ---------- */
  function fsFor(vbw, px, target) { return Math.max(8, Math.min(26, target * vbw / Math.max(200, px))); }
  function renderSheet(anim, forPrint) {
    const sh = $('[data-sheet]', el); if (!sh) return;
    pd = getPlan(); if (!pd) { sh.innerHTML = '<p class="kpr-err">Der Plan konnte nicht gelesen werden.</p>'; return; }
    const date = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const wide = forPrint || innerWidth >= 1000, sw = forPrint ? 1100 : Math.min(sh.clientWidth || innerWidth - 32, 1400);
    const planPx = wide ? sw * .54 : sw, elevPx = wide ? sw * .44 : sw;
    const planVb = pd.room.w + 2 * (T + 9 * 10);
    const pu = fsFor(planVb, planPx, forPrint ? 9.5 : 11);
    const plan = planSVG(pd, { fs: pu });
    const LET = 'ABCDEFG';
    const elevs = pd.kw.map((k, i) => { const L = pd.walls[k].len, vb = L + 17 * 10; const eu = fsFor(vb, elevPx, forPrint ? 8.5 : 10.5); const r = elevSVG(pd, k, { fs: eu, dimBase: 100 + i * 40 }); return { k, letter: LET[i], name: pd.walls[k].name, L, ...r }; });
    if (pd.island) { const vb = pd.island.w + 70; const r = islandSVG(pd, { fs: fsFor(vb, Math.min(elevPx, 520), forPrint ? 8.5 : 10.5), dimBase: 400 }); elevs.push({ k: 'I', letter: '', name: 'Kochinsel', L: pd.island.w, ...r }); }
    sh.className = 'kpr-sheet kpr-m-' + mode + (dimsOn ? '' : ' kpr-nodims');
    sh.innerHTML = `
<div class="kpr-tb">
  <div class="kpr-tb-l"><span class="kpr-ov">Planungsentwurf</span><b>${esc(pd.studio)}</b></div>
  <dl class="kpr-tb-r"><div><dt>Küche</dt><dd>${esc(pd.formName)}</dd></div><div><dt>Raum</dt><dd>${m2(pd.room.w)} × ${m2(pd.room.d)} m</dd></div><div><dt>Arbeitshöhe</dt><dd>${pd.ah} cm</dd></div><div><dt>Datum</dt><dd>${date}</dd></div></dl>
  <p class="kpr-note">Planungsentwurf – Maße bitte beim Aufmaß bestätigen. Alle Maße in cm.</p>
</div>
<div class="kpr-grid">
  <figure class="kpr-card kpr-gr"><figcaption><b>Grundriss</b><span>von oben · Ansichten ${pd.kw.map((k, i) => LET[i]).join(', ')} markiert</span></figcaption><div class="kpr-svgw">${plan.svg}</div></figure>
  <div class="kpr-elevs">${elevs.map(e => `<figure class="kpr-card kpr-el"><figcaption><b>${e.letter ? `Ansicht ${e.letter} · ` : ''}${esc(e.name)}</b><span>${m2(e.L)} m · von vorn</span></figcaption><div class="kpr-svgw">${e.svg}</div></figure>`).join('')}</div>
</div>`;
    applyDims(anim && dimsOn);
  }
  function applyDims(anim) {
    const sh = $('[data-sheet]', el); if (!sh) return;
    sh.classList.toggle('kpr-nodims', !dimsOn);
    if (dimsOn && anim && !RMO) { sh.classList.remove('kpr-draw'); void sh.offsetWidth; sh.classList.add('kpr-draw'); }
  }
  function printPlan() {
    if (tab !== 'plan') setTab('plan');
    renderSheet(false, true); document.documentElement.classList.add('kpr-print');
    setTimeout(() => { try { window.print(); } finally { setTimeout(() => { document.documentElement.classList.remove('kpr-print'); renderSheet(false); }, 400); } }, 60);
  }
  function svgImg(svgEl, keep) {
    const on = keep != null ? keep : dimsOn;
    return new Promise(res => {
      const c = svgEl.cloneNode(true); if (!on) $$('.kpr-dim', c).forEach(n => n.remove()); $$('.kpr-wlab', c).forEach(n => { if (!on) n.remove(); });
      $$('[class]', c).forEach(n => n.removeAttribute('style'));
      const vb = c.getAttribute('viewBox').split(/\s+/).map(Number); c.setAttribute('width', vb[2] * 3); c.setAttribute('height', vb[3] * 3);
      const s = new XMLSerializer().serializeToString(c), i = new Image(); i.onload = () => res({ img: i, vb }); i.onerror = () => res(null); i.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
    });
  }
  // Blatt als Bild (A4 quer, 300 dpi): Kopf, Zeichnungen aus den SVGs, Fuß
  async function sheetCanvas(sh, o) {
    const K = KPo(), Wd = 3508, Hd = 2480, M = 110, c = document.createElement('canvas'); c.width = Wd; c.height = Hd; const g = c.getContext('2d');
    g.fillStyle = '#fffdf9'; g.fillRect(0, 0, Wd, Hd); g.strokeStyle = INK; g.lineWidth = 4; g.strokeRect(M / 2, M / 2, Wd - M, Hd - M);
    const serif = cssFont('--serif', 'Georgia, serif'), hh = sheetHead(g, o.title, Wd, M, serif);
    const md = o.mode || 'alles', showPlan = md !== 'ansichten', showEl = md !== 'grundriss';
    const svgs = $$('.kpr-card', sh).filter(f => $('svg', f)).map(f => ({ svg: $('svg', f), title: $('figcaption b', f).textContent, sub: $('figcaption span', f).textContent, plan: f.classList.contains('kpr-gr') }));
    const box = { x: M + 20, y: M + hh, w: Wd - 2 * M - 40, h: Hd - 2 * M - hh - 150 };
    const draw = async (it, x, y, w, h) => { if (!it) return; const r = await svgImg(it.svg, o.keepDims); if (!r) return; g.fillStyle = INK; g.font = `600 40px ${serif}`; g.textAlign = 'left'; g.fillText(it.title, x, y + 40); g.fillStyle = MUTE; g.font = `28px ${FONT}`; g.fillText(it.sub, x, y + 80); const sc = Math.min(w / r.vb[2], (h - 100) / r.vb[3]); g.drawImage(r.img, x + (w - r.vb[2] * sc) / 2, y + 100, r.vb[2] * sc, r.vb[3] * sc); };
    const P0 = svgs.find(x => x.plan), E = svgs.filter(x => !x.plan);
    if (showPlan && showEl) { const pw = box.w * .5; await draw(P0, box.x, box.y, pw - 40, box.h); const eh = box.h / Math.max(1, E.length); for (let i = 0; i < E.length; i++) await draw(E[i], box.x + pw + 20, box.y + i * eh, box.w - pw - 20, eh - 20); }
    else if (showPlan) await draw(P0, box.x, box.y, box.w, box.h);
    else { const cols = E.length > 2 ? 2 : 1, rows = Math.ceil(E.length / cols), cw = box.w / cols, rh = box.h / rows; for (let i = 0; i < E.length; i++) await draw(E[i], box.x + (i % cols) * cw, box.y + Math.floor(i / cols) * rh, cw - 30, rh - 20); }
    if (o.legend) { let x = M + 20; const y = Hd - M - 100; g.font = `600 28px ${FONT}`; g.textBaseline = 'middle'; o.legend.forEach(([col, n, ex]) => { g.beginPath(); g.arc(x + 16, y, 16, 0, Math.PI * 2); if (ex) { g.fillStyle = '#fff'; g.fill(); g.setLineDash([8, 6]); g.lineWidth = 5; g.strokeStyle = col; g.stroke(); g.setLineDash([]); } else { g.fillStyle = col; g.fill(); } g.fillStyle = INK; g.fillText(n, x + 44, y + 2); x += 44 + g.measureText(n).width + 50; }); g.textBaseline = 'alphabetic'; }
    g.fillStyle = MUTE; g.font = `30px ${FONT}`; g.textAlign = 'left'; g.fillText(o.foot, M + 20, Hd - M - 40);
    return c;
  }
  function sheetHead(g, title, Wd, M, serif) {
    const K = KPo(), hh = 230; g.fillStyle = INK; g.font = `600 64px ${serif}`; g.textBaseline = 'alphabetic'; g.textAlign = 'left'; g.fillText(title, M + 20, M + 100);
    g.font = `34px ${FONT}`; g.fillStyle = MUTE; g.fillText(`${pd.studio} · ${subLine()} · ${new Date().toLocaleDateString('de-DE')}`, M + 20, M + 160);
    g.fillStyle = (K && K.acc) || '#c0673f'; g.fillRect(M + 20, M + 190, 120, 8);
    if (K && K.logo && K.logo.naturalWidth) { const lh = 120, lw = lh * K.logo.naturalWidth / K.logo.naturalHeight; const t = document.createElement('canvas'); t.width = lw; t.height = lh; const tg = t.getContext('2d'); tg.drawImage(K.logo, 0, 0, lw, lh); tg.globalCompositeOperation = 'source-in'; tg.fillStyle = INK; tg.fillRect(0, 0, lw, lh); g.drawImage(t, Wd - M - 20 - lw, M + 50); }
    else { g.textAlign = 'right'; g.fillStyle = INK; g.font = `600 48px ${serif}`; g.fillText(pd.studio, Wd - M - 20, M + 110); g.textAlign = 'left'; }
    return hh;
  }
  async function savePlan(fmt) {
    renderSheet(false, true);
    const c = await sheetCanvas($('[data-sheet]', el), { title: 'Ihre Küche – Maßplan', mode, keepDims: dimsOn, foot: 'Planungsentwurf – Maße bitte beim Aufmaß bestätigen. Alle Maße in cm. Raumhöhe angenommen 260 cm.' });
    renderSheet(false);
    if (fmt === 'pdf') return pdfSave([c], 'Küchenplan – Maßplan', 'kuechenplan-masse.pdf');
    download(c.toDataURL('image/png'), 'kuechenplan-masse.png');
  }
  // Mehrseitiges PDF (A4 quer) aus Canvas-Seiten – ohne Bibliothek: je Seite ein JPEG, seitenfüllend
  function pdfBlob(pages, title) {
    const enc = str => { const a = new Uint8Array(str.length); for (let i = 0; i < str.length; i++) a[i] = str.charCodeAt(i) & 255; return a; };
    const parts = [], offs = []; let len = 0; const push = u8 => { parts.push(u8); len += u8.length; };
    const obj = (n, body, stream) => { offs[n] = len; push(enc(`${n} 0 obj\n${body}\n`)); if (stream) { push(enc('stream\n')); push(stream); push(enc('\nendstream\n')); } push(enc('endobj\n')); };
    push(enc('%PDF-1.4\n%\xe2\xe3\xcf\xd3\n'));
    const W = 842, H = 595, n = pages.length, d = new Date(), pz = v => String(v).padStart(2, '0');
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, `<< /Type /Pages /Kids [${pages.map((_, i) => `${4 + i * 3} 0 R`).join(' ')}] /Count ${n} >>`);
    const u16 = t => '<FEFF' + [...String(t)].map(ch => { const c = ch.codePointAt(0); return c > 0xffff ? '003F' : c.toString(16).padStart(4, '0'); }).join('').toUpperCase() + '>';
    obj(3, `<< /Title ${u16(title)} /Creator ${u16(pd.studio || 'Küchenplaner')} /CreationDate (D:${d.getFullYear()}${pz(d.getMonth() + 1)}${pz(d.getDate())}${pz(d.getHours())}${pz(d.getMinutes())}) >>`);
    pages.forEach((cv, i) => {
      const p = 4 + i * 3, jpg = enc(atob(cv.toDataURL('image/jpeg', .9).split(',')[1])), cs = enc(`q ${W} 0 0 ${H} 0 0 cm /Im${i} Do Q`);
      obj(p, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im${i} ${p + 1} 0 R >> >> /Contents ${p + 2} 0 R >>`);
      obj(p + 1, `<< /Type /XObject /Subtype /Image /Width ${cv.width} /Height ${cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>`, jpg);
      obj(p + 2, `<< /Length ${cs.length} >>`, cs);
    });
    const N = 4 + n * 3, xref = len; let x = `xref\n0 ${N}\n0000000000 65535 f \n`; for (let i = 1; i < N; i++) x += String(offs[i]).padStart(10, '0') + ' 00000 n \n';
    push(enc(x + `trailer\n<< /Size ${N} /Root 1 0 R /Info 3 0 R >>\nstartxref\n${xref}\n%%EOF\n`));
    return new Blob(parts, { type: 'application/pdf' });
  }
  function pdfSave(pages, title, name) { const url = URL.createObjectURL(pdfBlob(pages, title)); download(url, name); setTimeout(() => URL.revokeObjectURL(url), 60000); }

  /* ---------- Installationsplan ---------- */
  function renderInst(anim, forPrint) {
    const sh = $('[data-isheet]', el); if (!sh) return;
    pd = getPlan(); if (!pd) { sh.innerHTML = '<p class="kpr-err">Der Plan konnte nicht gelesen werden.</p>'; return; }
    const I = instPts(pd), date = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const wide = forPrint || innerWidth >= 1000, sw = forPrint ? 1100 : Math.min(sh.clientWidth || innerWidth - 32, 1400);
    const planPx = wide ? sw * .54 : sw, elevPx = wide ? sw * .44 : sw, LET = 'ABCDEFG';
    const plan = planSVG(pd, { fs: fsFor(pd.room.w + 2 * (T + 9 * 10), planPx, forPrint ? 9.5 : 11), inst: I });
    const elevs = pd.kw.map((k, i) => { const L = pd.walls[k].len, eu = fsFor(L + 19 * 10, elevPx, forPrint ? 8.5 : 10.5); return { k, letter: LET[i], name: pd.walls[k].name, L, ...elevSVG(pd, k, { fs: eu, dimBase: 100 + i * 40, inst: I }) }; });
    const cnt = f => I.pts.filter(f).length, kwI = k => pd.kw.indexOf(k);
    const wallOf = p => p.k === 'I' ? 'Kochinsel' : kwI(p.k) >= 0 ? `Ansicht ${LET[kwI(p.k)]} · ${pd.walls[p.k].name}` : (pd.walls[p.k] ? pd.walls[p.k].name : p.k);
    const row = p => `<tr class="${p.ex ? 'kpr-ex' + (p.ok ? ' ok' : '') : ''}"><td><i class="kpr-ipn${p.ex ? ' ex' : ''}" style="--c:${ICAT[p.cat][0]}">${p.nr}</i></td><td><b>${esc(p.n)}</b><small>${esc(p.d)}</small></td><td class="kpr-hide-s">${esc(wallOf(p))}</td><td class="kpr-num">${p.k === 'I' ? '–' : p.s}</td><td class="kpr-num">${p.k === 'I' ? 'Boden' : p.h}</td></tr>`;
    const groups = [...pd.kw, 'I'].map(k => ({ k, list: I.pts.filter(p => p.k === k) })).filter(g => g.list.length);
    sh.className = 'kpr-sheet kpr-isheet';
    sh.innerHTML = `
<div class="kpr-tb">
  <div class="kpr-tb-l"><span class="kpr-ov">Installationsplan</span><b>${esc(pd.studio)}</b></div>
  <dl class="kpr-tb-r"><div><dt>Küche</dt><dd>${esc(pd.formName)}</dd></div><div><dt>Raum</dt><dd>${m2(pd.room.w)} × ${m2(pd.room.d)} m</dd></div><div><dt>Arbeitshöhe</dt><dd>${pd.ah} cm</dd></div><div><dt>Datum</dt><dd>${date}</dd></div></dl>
  <p class="kpr-note">Richtwerte zur Abstimmung mit Elektriker und Installateur – Ausführung nur durch Fachbetriebe. Maße in cm, Höhen ab fertigem Fußboden.</p>
</div>
<div class="kpr-stats kpr-istats">
  <div><b>${cnt(p => p.cat === 's' && !/^Herd/.test(p.sh))}</b><span>Steckdosen &amp; Geräte 230 V</span></div>
  <div><b>${cnt(p => /^Herd/.test(p.sh))}</b><span>Herdanschluss 400 V</span></div>
  <div><b>${cnt(p => p.cat === 'w' || p.cat === 'a')}</b><span>Wasser &amp; Abwasser</span></div>
  <div><b>${cnt(p => p.cat === 'l')}</b><span>Lichtauslässe</span></div>
</div>
<div class="kpr-ileg">${Object.values(ICAT).map(([c, n]) => `<span><i style="--c:${c}"></i>${n}</span>`).join('')}${I.ex.length ? '<span><i class="ex" style="--c:#6d6459"></i>vorhanden (Bestand)</span>' : ''}</div>
<div class="kpr-grid">
  <figure class="kpr-card kpr-gr"><figcaption><b>Grundriss</b><span>Lage der Anschlüsse · Ansichten ${pd.kw.map((k, i) => LET[i]).join(', ')}</span></figcaption><div class="kpr-svgw">${plan.svg}</div></figure>
  <div class="kpr-elevs">${elevs.map(e => `<figure class="kpr-card kpr-el"><figcaption><b>Ansicht ${e.letter} · ${esc(e.name)}</b><span>${m2(e.L)} m · Blick auf die Wand</span></figcaption><div class="kpr-svgw">${e.svg}</div></figure>`).join('')}</div>
</div>
<section class="kpr-card kpr-wl kpr-itab"><header><b>Anschlussliste</b><span>${I.pts.length} Anschlüsse · Abstand = Mitte ab linker Wandecke (Blick auf die Wand)</span></header>
  <table><thead><tr><th>Nr.</th><th>Anschluss</th><th class="kpr-hide-s">Wand</th><th class="kpr-num">ab links</th><th class="kpr-num">Höhe</th></tr></thead>
  <tbody>${groups.map(g => `<tr class="kpr-sub"><td colspan="5">${esc(g.k === 'I' ? 'Kochinsel – aus dem Boden' : wallOf({ k: g.k }))}</td></tr>${g.list.map(row).join('')}`).join('')}
  ${I.ex.length ? `<tr class="kpr-sub"><td colspan="5">Vorhanden im Raum – Abgleich</td></tr>${I.ex.map(row).join('')}` : ''}</tbody></table>
  ${I.ex.length ? '' : '<p class="kpr-itip">Tipp: Im Planer unter „Form &amp; Raum“ lassen sich die vorhandenen Anschlüsse eintragen – dann zeigt der Plan, was passt und was versetzt werden muss.</p>'}
</section>
<section class="kpr-card kpr-inote"><header><b>Hinweise für die Ausführung</b></header><ul>
  <li>Geräte, Herdanschluss und Spülmaschine jeweils auf eigenem Stromkreis absichern; Ausführung nach VDE 0100 durch einen Elektrofachbetrieb.</li>
  <li>Anschlusswerte und Nischenmaße der gewählten Geräte vor dem Verlegen mit den Datenblättern abgleichen.</li>
  <li>Wasser- und Abwasseranschlüsse hinter dem Spülenschrank; die Spülmaschine schließt an Eckventil und Siphon der Spüle an.</li>
  <li>Steckdosen hinter Schränken müssen erreichbar bleiben – die Positionen liegen deshalb in Fächern bzw. Nachbarschränken.</li>
  <li>Bei Dunstabzug mit Abluft zusätzlich Mauerdurchbruch mit Mauerkasten einplanen.</li>
</ul></section>`;
    if (anim && !RMO) { sh.classList.remove('kpr-in'); void sh.offsetWidth; sh.classList.add('kpr-in'); }
  }
  function printInst() {
    if (tab !== 'inst') setTab('inst');
    renderInst(false, true); document.documentElement.classList.add('kpr-print', 'kpr-pi');
    setTimeout(() => { try { window.print(); } finally { setTimeout(() => { document.documentElement.classList.remove('kpr-print', 'kpr-pi'); renderInst(false); }, 400); } }, 60);
  }
  // Anschlussliste als eigene PDF-Seite(n)
  function instTablePages(I) {
    const rows = []; const LET = 'ABCDEFG';
    [...pd.kw, 'I'].forEach(k => { const l = I.pts.filter(p => p.k === k); if (!l.length) return; rows.push({ sub: k === 'I' ? 'Kochinsel – aus dem Boden' : `Ansicht ${LET[pd.kw.indexOf(k)]} · ${pd.walls[k].name}` }); l.forEach(p => rows.push(p)); });
    if (I.ex.length) { rows.push({ sub: 'Vorhanden im Raum – Abgleich' }); I.ex.forEach(p => rows.push(p)); }
    const Wd = 3508, Hd = 2480, M = 110, serif = cssFont('--serif', 'Georgia, serif'), RH = 82, top0 = M + 230 + 60, maxY = Hd - M - 330;
    const pages = []; let i = 0;
    while (i < rows.length) {
      const c = document.createElement('canvas'); c.width = Wd; c.height = Hd; const g = c.getContext('2d');
      g.fillStyle = '#fffdf9'; g.fillRect(0, 0, Wd, Hd); g.strokeStyle = INK; g.lineWidth = 4; g.strokeRect(M / 2, M / 2, Wd - M, Hd - M);
      sheetHead(g, 'Installationsplan – Anschlussliste' + (pages.length ? ' (Fortsetzung)' : ''), Wd, M, serif);
      const X = [M + 20, M + 150, M + 1700, Wd - M - 560, Wd - M - 300], Xr = Wd - M - 20;
      g.font = `700 26px ${FONT}`; g.fillStyle = MUTE; g.textAlign = 'left'; ['NR.', 'ANSCHLUSS', 'WAND'].forEach((t, j) => g.fillText(t, X[j], top0)); g.textAlign = 'right'; g.fillText('AB LINKS (CM)', X[4] - 40, top0); g.fillText('HÖHE (CM)', Xr, top0); g.textAlign = 'left';
      g.fillStyle = INK; g.fillRect(M + 20, top0 + 18, Wd - 2 * M - 40, 3);
      let y = top0 + 30;
      while (i < rows.length && y + RH <= maxY) {
        const r = rows[i++];
        if (r.sub) { g.fillStyle = (KPo() && KPo().acc) || '#c0673f'; g.font = `700 28px ${FONT}`; g.fillText(r.sub.toUpperCase(), M + 20, y + 58); y += 72; continue; }
        const col = ICAT[r.cat][0]; g.beginPath(); g.arc(X[0] + 34, y + RH / 2, 28, 0, Math.PI * 2);
        if (r.ex) { g.fillStyle = '#fff'; g.fill(); g.setLineDash([9, 6]); g.lineWidth = 5; g.strokeStyle = col; g.stroke(); g.setLineDash([]); } else { g.fillStyle = col; g.fill(); }
        g.fillStyle = r.ex ? col : '#fff'; g.font = `700 ${String(r.nr).length > 2 ? 22 : 26}px ${FONT}`; g.textAlign = 'center'; g.fillText(String(r.nr), X[0] + 34, y + RH / 2 + 9); g.textAlign = 'left';
        g.fillStyle = INK; g.font = `600 34px ${FONT}`; g.fillText(r.n, X[1], y + 36); g.fillStyle = MUTE; g.font = `27px ${FONT}`; g.fillText(r.d, X[1], y + 70);
        g.fillStyle = INK; g.font = `30px ${FONT}`; g.fillText(r.k === 'I' ? 'Kochinsel' : (pd.walls[r.k] ? pd.walls[r.k].name : r.k), X[2], y + 50);
        g.font = `600 36px ${FONT}`; g.textAlign = 'right'; g.fillText(r.k === 'I' ? '–' : String(r.s), X[4] - 40, y + 52); g.fillText(r.k === 'I' ? 'Boden' : String(r.h), Xr, y + 52); g.textAlign = 'left';
        g.fillStyle = 'rgba(28,26,23,.1)'; g.fillRect(M + 20, y + RH + 4, Wd - 2 * M - 40, 2); y += RH + 8;
      }
      if (i >= rows.length) {
        const notes = ['Richtwerte zur Abstimmung – Ausführung nur durch Fachbetriebe (Elektro nach VDE 0100, Sanitär nach DIN 1988 / DIN EN 806).', 'Abstand = Mitte des Anschlusses ab linker Wandecke beim Blick auf die Wand; Höhe ab fertigem Fußboden.', 'Herdanschluss, Backofen und Spülmaschine je auf eigenem Stromkreis. Anschlusswerte mit den Gerätedatenblättern abgleichen.'];
        g.fillStyle = MUTE; g.font = `28px ${FONT}`; notes.forEach((t, j) => g.fillText('·  ' + t, M + 20, Hd - M - 220 + j * 46));
      }
      g.fillStyle = MUTE; g.font = `30px ${FONT}`; g.fillText(`Seite ${pages.length + 2}`, Wd - M - 170, Hd - M - 40);
      pages.push(c);
    }
    return pages;
  }
  async function instPDF() {
    if (tab !== 'inst') setTab('inst');
    renderInst(false, true);
    const I = instPts(pd), leg = Object.values(ICAT).map(([c, n]) => [c, n]); if (I.ex.length) leg.push(['#6d6459', 'vorhanden (Bestand)', 1]);
    const p1 = await sheetCanvas($('[data-isheet]', el), { title: 'Ihre Küche – Installationsplan', mode: 'alles', keepDims: true, legend: leg, foot: 'Richtwerte für Elektriker und Installateur – Ausführung nur durch Fachbetriebe. Maße in cm, Höhen ab fertigem Fußboden. Seite 1' });
    const pages = [p1, ...instTablePages(I)];
    renderInst(false);
    pdfSave(pages, 'Küche – Installationsplan', 'kuechenplan-installation.pdf');
  }

  /* ---------- Übersicht ---------- */
  function renderList() {
    const box = $('[data-liste]', el); pd = getPlan(); if (!pd) { box.innerHTML = ''; return; }
    const all = []; pd.kw.forEach(k => { pd.walls[k].base.forEach(c => all.push(c)); pd.walls[k].up.forEach(c => all.push(c)); });
    const sum = f => all.filter(f).reduce((a, c) => a + c.w, 0);
    const lu = sum(c => c.kind === 'b'), lh = sum(c => c.kind === 'u'), lt = sum(c => c.kind === 't');
    const ap = pd.kw.map(k => [k, pd.walls[k].base.filter(c => c.kind === 'b').reduce((a, c) => a + c.w, 0)]).filter(x => x[1] > 0);
    const apT = ap.reduce((a, x) => a + x[1], 0) + (pd.island ? pd.island.w : 0);
    const GN = { sp: 'Spüle mit Armatur', kf: 'Kochfeld', ko: 'Herd (Kochfeld + Backofen)', gs: 'Spülmaschine, vollintegriert', kue: 'Kühl-Gefrier-Kombination', bo: 'Backofen auf Augenhöhe', bm: 'Backofen + Mikrowelle', dh: 'Dunstabzug (Wandhaube)' };
    const dev = all.filter(c => GN[c.app]).map(c => ({ n: GN[c.app], d: `${c.w} cm${c.kind === 't' ? ' · Hochschrank ' + c.h + ' cm' : ''}`, w: pd.walls[c.wall].name, pos: c.pos }));
    if (pd.island && pd.island.v !== 'frei') dev.push({ n: pd.island.v === 'kochfeld' ? 'Kochfeld in der Insel' : 'Spüle in der Insel', d: `Insel ${pd.island.w} cm`, w: 'Kochinsel', pos: pd.island.pos });
    const K = KPo(); let style = [];
    try { const sm = (K && K.summary && K.summary()) || ''; sm.split('\n').filter(l => /^(Fronten|Frontart):/.test(l)).forEach(l => l.split(' · ').forEach(p => { const m = p.match(/^([^:]+):\s*(.+)$/); if (m) style.push([m[1], m[2]]); })); } catch (e) { }
    let hint = ''; try { const sm = (K && K.summary && K.summary()) || ''; const h = sm.split('\n').find(l => l.startsWith('Hinweise:')); if (h) hint = h.slice(9).trim(); } catch (e) { }
    const dimTxt = c => c.kind === 'hood' ? `${c.w} cm breit` : `${c.w} × ${c.kind === 'b' ? pd.ah : c.h} × ${c.d || 60}`;
    const row = c => `<tr><td><i class="kpr-pn">${c.pos}</i></td><td><b>${esc(c.name)}</b>${c.sub ? `<small>${esc(c.sub)}</small>` : ''}</td><td class="kpr-num">${dimTxt(c)}</td><td class="kpr-num kpr-hide-s">${c.kind === 'u' ? `UK ${cm(c.y0)}` : c.kind === 'hood' ? 'über Kochfeld' : 'ab ' + cm(c.s)}</td></tr>`;
    box.innerHTML = `
<div class="kpr-stats">
  <div><b>${m2(lu)}<small> m</small></b><span>Unterschränke</span></div>
  <div><b>${m2(lh)}<small> m</small></b><span>Hängeschränke</span></div>
  <div><b>${m2(lt)}<small> m</small></b><span>Hochschränke</span></div>
  <div><b>${m2(apT)}<small> m</small></b><span>Arbeitsplatte</span></div>
</div>
<div class="kpr-lgrid">
  <div class="kpr-walls">${pd.kw.map((k, i) => { const w = pd.walls[k]; const list = [...w.base, ...w.up]; return `<section class="kpr-card kpr-wl"><header><b>${esc(w.name)}</b><span>Ansicht ${'ABCDEFG'[i]} · ${m2(w.len)} m · ${list.length} Elemente</span></header><table><thead><tr><th>Pos.</th><th>Element</th><th class="kpr-num">B × H × T (cm)</th><th class="kpr-num kpr-hide-s">Lage</th></tr></thead><tbody>${w.base.map(row).join('')}${w.up.length ? `<tr class="kpr-sub"><td colspan="4">Oben</td></tr>${w.up.map(row).join('')}` : ''}</tbody></table></section>`; }).join('')}
  ${pd.island ? `<section class="kpr-card kpr-wl"><header><b>Kochinsel</b><span>frei im Raum</span></header><table><tbody><tr><td><i class="kpr-pn">${pd.island.pos}</i></td><td><b>Insel</b><small>${pd.island.v === 'kochfeld' ? 'mit Kochfeld' : pd.island.v === 'spuele' ? 'mit Spüle' : 'freie Arbeitsfläche'}</small></td><td class="kpr-num">${pd.island.w} × ${pd.ah} × ${pd.island.d}</td><td class="kpr-num kpr-hide-s">mittig</td></tr></tbody></table></section>` : ''}
  </div>
  <aside class="kpr-side">
    <section class="kpr-card"><header><b>Geräte</b><span>${dev.length} eingeplant</span></header><ul class="kpr-dev">${dev.map(d => `<li><i class="kpr-pn">${d.pos}</i><div><b>${esc(d.n)}</b><small>${esc(d.d)} · ${esc(d.w)}</small></div></li>`).join('') || '<li>Keine Geräte geplant</li>'}</ul></section>
    <section class="kpr-card"><header><b>Arbeitsplatte</b><span>Lauflänge, Zuschnitt beim Aufmaß</span></header><ul class="kpr-ap">${ap.map(([k, v]) => `<li><span>${esc(pd.walls[k].name)}</span><b>${m2(v)} m</b></li>`).join('')}${pd.island ? `<li><span>Kochinsel</span><b>${m2(pd.island.w)} m</b></li>` : ''}<li class="kpr-tot"><span>Gesamt</span><b>${m2(apT)} m</b></li></ul></section>
    ${style.length ? `<section class="kpr-card"><header><b>Farbe & Stil</b></header><dl class="kpr-sty">${style.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl></section>` : ''}
    ${hint ? `<p class="kpr-hint">${esc(hint)}</p>` : ''}
  </aside>
</div>
<div class="kpr-cta">
  <div><b>Gefällt Ihnen der Entwurf?</b><span>Wir prüfen Ihre Planung persönlich und melden uns mit Vorschlägen und einem Termin.</span></div>
  <div class="kpr-cta-b"><button type="button" class="kpr-btn kpr-ghost" data-goto="plan">${ICO.plan}<span>Maßplan ansehen</span></button><button type="button" class="kpr-btn kpr-pri" data-send>${ICO.send}<span>An das Studio senden</span></button></div>
</div>`;
  }
  function toSend() {
    const K = KPo(); close();
    setTimeout(() => {
      if (K && typeof K.toSend === 'function') { K.toSend(); return; }
      const st = $$('[data-kstep]'); if (st[3]) st[3].click();
      const f = $('[data-kp-form]') || $('[data-ksend]'); if (f) f.scrollIntoView({ behavior: RMO ? 'auto' : 'smooth', block: 'center' });
    }, RMO ? 0 : 260);
  }

  /* ---------- Öffnen / Schließen ---------- */
  function open(o = {}) {
    if (!KPo()) { console.warn('KPResult: Planer (window.KP) nicht gefunden'); return; }
    if (!el) build();
    pd = getPlan(); if (!pd) return;
    const K = KPo(), acc = (K && K.acc) || getComputedStyle(document.documentElement).getPropertyValue('--acc').trim() || '#c0673f';
    el.style.setProperty('--kpr-acc', acc);
    $('[data-sub]', el).textContent = subLine();
    try { const k3 = K.k3d && K.k3d(); hereCam = k3 && k3.camInfo ? k3.camInfo() : null; } catch (e) { hereCam = null; }
    $$('[data-view="hier"]', el).forEach(b => { b.hidden = !hereCam; });
    if (o.view && VIEWS.some(v => v[0] === o.view)) view = o.view; if (view === 'hier' && !hereCam) view = 'uebersicht'; if (o.mood === 'abend' || o.mood === 'tag') mood = o.mood; if (typeof o.dims === 'boolean') dimsOn = o.dims; if (o.mode) mode = o.mode;
    $('[data-dims]', el).checked = dimsOn; syncChips(); lastFoto = null;
    back = document.activeElement; el.hidden = false; document.documentElement.classList.add('kpr-on');
    try { window.__lenis && window.__lenis.stop(); } catch (e) { }
    try { K.pause3d && K.pause3d(true); } catch (e) { }
    if (!RMO) { el.classList.remove('kpr-open'); void el.offsetWidth; } el.classList.add('kpr-open');
    const t = { foto: 'foto', echt: 'foto', echtoptik: 'foto', plan: 'plan', mass: 'plan', masse: 'plan', inst: 'inst', installation: 'inst', elektro: 'inst', anschluesse: 'inst', liste: 'liste', uebersicht: 'liste' }[String(o.tab || 'foto').toLowerCase()] || 'foto';
    tab = ''; setTab(t);
    requestAnimationFrame(() => { moveInk(); const x = $('.kpr-x', el); x && x.focus({ preventScroll: true }); });
    return window.KPResult;
  }
  function close() {
    if (!el || el.hidden) return; renderTok++;
    el.classList.remove('kpr-open'); el.classList.add('kpr-closing');
    const done = () => { el.classList.remove('kpr-closing'); el.hidden = true; document.documentElement.classList.remove('kpr-on'); try { window.__lenis && window.__lenis.start(); } catch (e) { } try { KPo().pause3d && KPo().pause3d(false); } catch (e) { } if (K2) { try { K2.dispose(); } catch (e) { } K2 = null; K2key = ''; } if (back && back.focus) try { back.focus({ preventScroll: true }); } catch (e) { } };
    if (RMO) done(); else setTimeout(done, 320);
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-kpr-open]'); if (!b) return; e.preventDefault(); open({ tab: b.getAttribute('data-kpr-open') || undefined }); });
  /* ---------- Aktionsleiste direkt unter der 3D-Bühne: alles Wichtige auf einen Blick ---------- */
  const XI = {
    real: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" fill="currentColor"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z" fill="currentColor" opacity=".7"/></svg>',
    cam: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3.2l1.6-2.4h6.4L16.8 8H20v11H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="13.2" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    top: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7l8-4 8 4-8 4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    plan: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 3.5h17v17h-17zM3.5 10h7v10.5M14 3.5v6.5h6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    inst: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 3v4.2M15.5 3v4.2M6 7.2h12v3.8a6 6 0 0 1-12 0zM12 17v4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    list: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.5h12M8 12h12M8 17.5h12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="4.2" cy="6.5" r="1.2" fill="currentColor"/><circle cx="4.2" cy="12" r="1.2" fill="currentColor"/><circle cx="4.2" cy="17.5" r="1.2" fill="currentColor"/></svg>',
    img: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5M4 17.5v3h16v-3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    save: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  };
  const SKEY = 'kp-meine-kuechen:' + location.pathname;
  const lsGet = () => { try { return JSON.parse(localStorage.getItem(SKEY) || '[]') || []; } catch (e) { return []; } };
  const lsSet = a => { try { localStorage.setItem(SKEY, JSON.stringify(a)); return true; } catch (e) { return false; } };
  function thumb() { try { const k3 = KPo() && KPo().k3d && KPo().k3d(); const src = k3 && k3.capture ? k3.capture(480, 300) : null; if (!src) return null; const c = document.createElement('canvas'); c.width = 240; c.height = 150; c.getContext('2d').drawImage(src, 0, 0, 240, 150); return c.toDataURL('image/jpeg', .72); } catch (e) { return null; } }
  function saveKitchen(btn) {
    const K = KPo(); if (!K || !K.hash) return; const h = K.hash(); if (!/^#k=/.test(h)) return;
    const link = location.href.split('#')[0] + h, list = lsGet().filter(x => x.h !== h);
    const pd0 = getPlan(), name = pd0 ? `${pd0.formName} · ${m2(pd0.room.w)} × ${m2(pd0.room.d)} m` : 'Mein Entwurf';
    list.unshift({ h, t: Date.now(), name, img: thumb() }); while (list.length > 8) list.pop();
    let ok = lsSet(list); if (!ok) { list.forEach(x => { x.img = null; }); ok = lsSet(list); }
    try { navigator.clipboard && navigator.clipboard.writeText(link).catch(() => { }); } catch (e) { }
    if (K.toast) K.toast(ok ? 'Gespeichert ✓ – unter „Meine Küchen“ jederzeit wieder da. Der Link ist kopiert.' : 'Der Link ist kopiert – damit kommen Sie jederzeit zu diesem Entwurf zurück.');
    if (btn) { btn.classList.add('done'); setTimeout(() => btn.classList.remove('done'), 1800); }
    renderMine();
  }
  function renderMine() {
    const box = $('[data-kpx-mine]'); if (!box) return; const list = lsGet();
    box.hidden = !list.length; if (!list.length) return;
    box.querySelector('[data-kpx-mn]').textContent = list.length;
    box.querySelector('[data-kpx-ml]').innerHTML = list.map((x, i) => `<li><button type="button" data-kpx-load="${i}">${x.img ? `<img src="${x.img}" alt="">` : '<i></i>'}<span><b>${esc(x.name)}</b><small>${new Date(x.t).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })} · ${new Date(x.t).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</small></span></button><button type="button" class="x" data-kpx-del="${i}" aria-label="Entwurf löschen">×</button></li>`).join('');
  }
  function addBar() {
    const build = $('.kp-build'), stage = $('.kp-stage'); if (!build || !stage || $('.kpx')) return;
    const bar = document.createElement('div'); bar.className = 'kpx'; bar.setAttribute('role', 'toolbar'); bar.setAttribute('aria-label', 'Ihre Küche ansehen und speichern');
    bar.innerHTML = `<button type="button" class="kpx-hero" data-kpx="real">${XI.real}<span><b>In echt ansehen</b><small>Fotorealistisch berechnet</small></span></button>
<div class="kpx-row">
  <button type="button" data-kpx="here">${XI.cam}<span>Foto von hier</span></button>
  <button type="button" data-kpx="top">${XI.top}<span>Draufsicht</span></button>
  <button type="button" data-kpx="plan">${XI.plan}<span>Grundriss &amp; Wände</span></button>
  <button type="button" data-kpx="inst">${XI.inst}<span>Installationsplan</span></button>
  <button type="button" data-kpx="list">${XI.list}<span>Details</span></button>
  <button type="button" data-kpx="img">${XI.img}<span>Bild speichern</span></button>
  <button type="button" data-kpx="save">${XI.save}<span>Küche speichern</span></button>
</div>
<div class="kpx-mine" data-kpx-mine hidden><button type="button" class="kpx-mt" data-kpx-mt aria-expanded="false">Meine Küchen <i data-kpx-mn>0</i></button><ul data-kpx-ml></ul></div>`;
    build.insertBefore(bar, build.firstChild);
    bar.addEventListener('click', e => {
      const b = e.target.closest('[data-kpx]');
      if (b) {
        const k = b.dataset.kpx;
        if (k === 'real') return open({ tab: 'foto', view: 'uebersicht' });
        if (k === 'here') return open({ tab: 'foto', view: 'hier' });
        if (k === 'top') return open({ tab: 'foto', view: 'oben' });
        if (k === 'plan' || k === 'inst' || k === 'list') return open({ tab: k === 'list' ? 'liste' : k });
        if (k === 'img') { const s2 = $('[data-ksend="img"]'); if (s2) s2.click(); return; }
        if (k === 'save') return saveKitchen(b);
      }
      const mt = e.target.closest('[data-kpx-mt]'); if (mt) { const box = mt.parentNode, on = !box.classList.contains('open'); box.classList.toggle('open', on); mt.setAttribute('aria-expanded', on); return; }
      const ld = e.target.closest('[data-kpx-load]'); if (ld) { const x = lsGet()[+ld.dataset.kpxLoad]; const K = KPo(); if (x && K && K.applyPlan) { try { K.applyPlan(decodeURIComponent(escape(atob(x.h.slice(3).replace(/-/g, '+').replace(/_/g, '/'))))); if (K.toast) K.toast(`„${x.name}“ ist wieder da.`); } catch (er) { } } $('[data-kpx-mine]').classList.remove('open'); return; }
      const dl = e.target.closest('[data-kpx-del]'); if (dl) { const list = lsGet(); list.splice(+dl.dataset.kpxDel, 1); lsSet(list); renderMine(); return; }
    });
    renderMine();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(addBar, 0)); else setTimeout(addBar, 0);

  window.KPResult = { open, close, plan: () => getPlan(), version: '1.1' };
})();
