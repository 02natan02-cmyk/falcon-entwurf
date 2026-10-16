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
    return { src: 'planData', room: { w: W, d: D, h: num(R.hoehe, R.h) || ROOM_H }, form: pd.form || (K.form && K.form()) || 'l', formName0: pd.formName, kw, ah, sockel0: num(pd.sockel), walls, island, styleData: pd.stil || null };
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
    s += cabs + ups + sym;
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
    s += nums;
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
    const upC = w.up.filter(c => c.kind !== 'hood'), hasUp = upC.length > 0;
    const tallH = Math.max(0, ...w.base.filter(c => c.kind === 't').map(c => c.h));
    const lvl = [{ h: 0, t: 'OK Fußboden' }, { h: so, t: 'Sockel' }, { h: ah, t: 'Arbeitshöhe' }];
    let uk = null, okU = null; if (hasUp) { uk = Math.min(...upC.map(c => c.y0)); okU = Math.max(...upC.map(c => c.y0 + c.h)); lvl.push({ h: uk, t: 'UK Hängeschrank' }, { h: okU, t: 'OK Hängeschrank' }); }
    if (tallH) lvl.push({ h: tallH, t: 'OK Hochschrank' });
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
  const VIEWS = [['uebersicht', 'Übersicht'], ['augen', 'Augenhöhe'], ['detail', 'Detail']];
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
    // Engine-eigenes Hochqualitäts-Bild (Überabtastung + feine Schatten), sonst selbst überabtasten
    if (typeof K2.renderHQ === 'function') return { c: K2.renderHQ(Wd, Hd), how: 'hq' };
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
  const RT_DEFAULT = false;
  const RT_OFF = /[?&]rt=0/.test(location.search) || (!RT_DEFAULT && !(() => { try { if (/[?&]rt=1/.test(location.search)) sessionStorage.setItem('kp-rt', '1'); return sessionStorage.getItem('kp-rt') === '1'; } catch (e) { return /[?&]rt=1/.test(location.search); } })());
  let RTp = null, RTK = null, RThost = null, rtChain = Promise.resolve();
  function rtSupported() { if (RT_OFF) return false; try { const c = document.createElement('canvas'), gl = c.getContext('webgl2'); const ok = !!(gl && gl.getExtension('EXT_color_buffer_float')); try { gl && gl.getExtension('WEBGL_lose_context').loseContext(); } catch (e) { } return ok; } catch (e) { return false; } }
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
    RTK = PRT.create(RThost, { acc: (K && K.acc) || '#c0673f' });
    RTK.mood(mood, K.state3d());
    const mob = innerWidth < 700 || matchMedia('(pointer:coarse)').matches;
    const qs = new URLSearchParams(location.search), qw = +(qs.get('rtw') || 0);   // rtw: Testgröße
    const Wd = qw >= 240 ? qw : mob ? 1280 : 1920, Hd = Math.round(Wd * .625);
    const r = await PRT.render(RTK, { w: Wd, h: Hd, view, mood, plan: getPlan(), samples: mob ? 220 : 640, minSamples: mob ? 32 : 48, maxMs: mob ? 30000 : 26000, tiles: mob ? 3 : 2, envLight: 'apartment', onProgress: onProg, signal: { get aborted() { return !isLive(); } } });
    if (!isLive()) return null;
    return { canvas: gradeRT(r.canvas), how: 'rt', samples: r.samples };
  }
  async function renderView(view, mood, onStep) {
    const K = KPo(); if (!K) throw new Error('kp');
    const Wd = innerWidth < 700 ? 1440 : 1920, Hd = Math.round(Wd * .625);
    const key = view + '|' + mood + '|' + Wd + '|' + JSON.stringify(K.state3d ? K.state3d() : {});
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
        <div class="kpr-seg" role="group" aria-label="Blickwinkel">${VIEWS.map(([k, n]) => `<button type="button" data-view="${k}">${n}</button>`).join('')}</div>
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
        <button type="button" class="kpr-btn kpr-ghost" data-print>${ICO.pr}<span>Drucken / PDF</span></button>
        <button type="button" class="kpr-btn kpr-ghost" data-save-plan>${ICO.dl}<span>Als Bild speichern</span></button>
      </div>
      <div class="kpr-sheet" data-sheet></div>
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
      if (e.target.closest('[data-send]')) return toSend();
      const g = e.target.closest('[data-goto]'); if (g) return setTab(g.dataset.goto);
    });
    $('[data-dims]', el).addEventListener('change', e => { dimsOn = e.target.checked; applyDims(true); });
    el.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'Tab') trap(e);
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && e.target.closest('[role="tab"]')) { const order = ['foto', 'plan', 'liste'], i = order.indexOf(tab); setTab(order[(i + (e.key === 'ArrowRight' ? 1 : 2)) % 3], true); }
    });
    addEventListener('resize', () => { if (!el || el.hidden) return; clearTimeout(rzT); rzT = setTimeout(() => { moveInk(); if (tab === 'plan') renderSheet(false); }, 160); });
    addEventListener('afterprint', () => { document.documentElement.classList.remove('kpr-print'); if (el && !el.hidden) renderSheet(false); });
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
    if (t === 'foto') showFoto(); if (t === 'plan') renderSheet(true); if (t === 'liste') renderList();
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
      const key = 'rt|' + view + '|' + mood + '|' + JSON.stringify(KPo().state3d ? KPo().state3d() : {});
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
  function svgImg(svgEl) {
    return new Promise(res => {
      const c = svgEl.cloneNode(true); if (!dimsOn) $$('.kpr-dim', c).forEach(n => n.remove()); $$('.kpr-wlab', c).forEach(n => { if (!dimsOn) n.remove(); });
      $$('[class]', c).forEach(n => n.removeAttribute('style'));
      const vb = c.getAttribute('viewBox').split(/\s+/).map(Number); c.setAttribute('width', vb[2] * 3); c.setAttribute('height', vb[3] * 3);
      const s = new XMLSerializer().serializeToString(c), i = new Image(); i.onload = () => res({ img: i, vb }); i.onerror = () => res(null); i.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s);
    });
  }
  async function savePlan() {
    renderSheet(false, true);
    const sh = $('[data-sheet]', el), K = KPo(), Wd = 3508, Hd = 2480, M = 110, c = document.createElement('canvas'); c.width = Wd; c.height = Hd; const g = c.getContext('2d');
    g.fillStyle = '#fffdf9'; g.fillRect(0, 0, Wd, Hd); g.strokeStyle = INK; g.lineWidth = 4; g.strokeRect(M / 2, M / 2, Wd - M, Hd - M);
    const serif = cssFont('--serif', 'Georgia, serif');
    // Kopf
    const hh = 230; g.fillStyle = INK; g.font = `600 64px ${serif}`; g.textBaseline = 'alphabetic'; g.fillText('Ihre Küche – Maßplan', M + 20, M + 100);
    g.font = `34px ${FONT}`; g.fillStyle = MUTE; g.fillText(`${pd.studio} · ${subLine()} · ${new Date().toLocaleDateString('de-DE')}`, M + 20, M + 160);
    g.fillStyle = (K && K.acc) || '#c0673f'; g.fillRect(M + 20, M + 190, 120, 8);
    if (K && K.logo && K.logo.naturalWidth) { const lh = 120, lw = lh * K.logo.naturalWidth / K.logo.naturalHeight; const t = document.createElement('canvas'); t.width = lw; t.height = lh; const tg = t.getContext('2d'); tg.drawImage(K.logo, 0, 0, lw, lh); tg.globalCompositeOperation = 'source-in'; tg.fillStyle = INK; tg.fillRect(0, 0, lw, lh); g.drawImage(t, Wd - M - 20 - lw, M + 50); }
    else { g.textAlign = 'right'; g.fillStyle = INK; g.font = `600 48px ${serif}`; g.fillText(pd.studio, Wd - M - 20, M + 110); g.textAlign = 'left'; }
    const showPlan = mode !== 'ansichten', showEl = mode !== 'grundriss';
    const svgs = $$('.kpr-card', sh).map(f => ({ svg: $('svg', f), title: $('figcaption b', f).textContent, sub: $('figcaption span', f).textContent, plan: f.classList.contains('kpr-gr') }));
    const box = { x: M + 20, y: M + hh, w: Wd - 2 * M - 40, h: Hd - 2 * M - hh - 150 };
    const draw = async (it, x, y, w, h) => { const r = await svgImg(it.svg); if (!r) return; g.fillStyle = INK; g.font = `600 40px ${serif}`; g.fillText(it.title, x, y + 40); g.fillStyle = MUTE; g.font = `28px ${FONT}`; g.fillText(it.sub, x, y + 80); const s = Math.min(w / r.vb[2], (h - 100) / r.vb[3]); g.drawImage(r.img, x + (w - r.vb[2] * s) / 2, y + 100, r.vb[2] * s, r.vb[3] * s); };
    const P0 = svgs.find(s => s.plan), E = svgs.filter(s => !s.plan);
    if (showPlan && showEl) { const pw = box.w * .5; await draw(P0, box.x, box.y, pw - 40, box.h); const eh = box.h / Math.max(1, E.length); for (let i = 0; i < E.length; i++) await draw(E[i], box.x + pw + 20, box.y + i * eh, box.w - pw - 20, eh - 20); }
    else if (showPlan) await draw(P0, box.x, box.y, box.w, box.h);
    else { const cols = E.length > 2 ? 2 : 1, rows = Math.ceil(E.length / cols), cw = box.w / cols, rh = box.h / rows; for (let i = 0; i < E.length; i++) await draw(E[i], box.x + (i % cols) * cw, box.y + Math.floor(i / cols) * rh, cw - 30, rh - 20); }
    // Fuß
    g.fillStyle = MUTE; g.font = `30px ${FONT}`; g.fillText('Planungsentwurf – Maße bitte beim Aufmaß bestätigen. Alle Maße in cm. Raumhöhe angenommen 260 cm.', M + 20, Hd - M - 50);
    renderSheet(false);
    download(c.toDataURL('image/png'), 'kuechenplan-masse.png');
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
    if (o.view && VIEWS.some(v => v[0] === o.view)) view = o.view; if (o.mood === 'abend' || o.mood === 'tag') mood = o.mood; if (typeof o.dims === 'boolean') dimsOn = o.dims; if (o.mode) mode = o.mode;
    $('[data-dims]', el).checked = dimsOn; syncChips(); lastFoto = null;
    back = document.activeElement; el.hidden = false; document.documentElement.classList.add('kpr-on');
    try { window.__lenis && window.__lenis.stop(); } catch (e) { }
    try { K.pause3d && K.pause3d(true); } catch (e) { }
    if (!RMO) { el.classList.remove('kpr-open'); void el.offsetWidth; } el.classList.add('kpr-open');
    const t = { foto: 'foto', echt: 'foto', echtoptik: 'foto', plan: 'plan', mass: 'plan', masse: 'plan', liste: 'liste', uebersicht: 'liste' }[String(o.tab || 'foto').toLowerCase()] || 'foto';
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
  window.KPResult = { open, close, plan: () => getPlan(), version: '1.0' };
})();
