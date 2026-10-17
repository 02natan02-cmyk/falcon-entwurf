/* Küchenstudio Eichenhof – v6: Impulse & Hinweise für alle Mitmach-Elemente, Feinschliff (Entwurf Falcon Eye)
   Jedes Element, das man ziehen, wischen oder antippen kann, bewegt sich beim ersten Erscheinen kurz von selbst
   und zeigt einen klaren Hinweis. Der Hinweis verschwindet, sobald jemand selbst anfasst. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mq = function (q) { return matchMedia(q).matches; };
  var TOUCH = mq('(hover: none), (pointer: coarse)');
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var HAND = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-4 0v0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.83L7 15"/></svg>';
  var SWIPE = TOUCH ? 'wischen' : 'ziehen';

  /* ---------- Werkzeuge ---------- */
  function once(el, th, fn) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(); return; }
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); fn(); } }, { threshold: th });
    io.observe(el);
  }
  function tween(dur, step, done) {
    var t0 = 0, raf = 0, dead = false;
    function f(t) { if (dead) return; if (!t0) t0 = t; var k = Math.min(1, (t - t0) / dur); step(k); if (k < 1) raf = requestAnimationFrame(f); else { dead = true; if (done) done(false); } }
    raf = requestAnimationFrame(f);
    return { stop: function () { if (dead) return; dead = true; cancelAnimationFrame(raf); if (done) done(true); } };
  }
  /* Hinweis-Pille mit Hand: kind = 'swipe' | 'tap' */
  function hint(host, text, kind, cls) {
    if (!host) return null;
    if (getComputedStyle(host).position === 'static') host.classList.add('v6-rel');
    var h = document.createElement('span');
    h.className = 'v6-hint v6-' + (kind || 'swipe') + (cls ? ' ' + cls : '');
    h.setAttribute('aria-hidden', 'true');
    h.innerHTML = '<i>' + HAND + '</i><span>' + text + '</span>';
    host.appendChild(h);
    requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.add('on'); }); });
    return h;
  }
  function unhint(h) { if (!h || h.__gone) return; h.__gone = 1; h.classList.remove('on'); setTimeout(function () { if (h.parentNode) h.parentNode.removeChild(h); }, 450); }
  /* echte Bedienung erkennen (programmatische Klicks zählen nicht). horiz: nur waagerechtes Wischen/Mausrad zählt */
  function onUser(els, fn, horiz) {
    var done = false, tx = 0, ty = 0;
    function go(e) { if (done) return; if (e && e.isTrusted === false) return; done = true; fn(e); }
    els.filter(Boolean).forEach(function (el) {
      el.addEventListener('keydown', go);
      el.addEventListener('wheel', function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) go(e); }, { passive: true });
      el.addEventListener('pointerdown', function (e) { if (horiz && e.pointerType !== 'mouse') return; go(e); }, { passive: true });
      if (!horiz) el.addEventListener('touchstart', go, { passive: true });
      else {
        el.addEventListener('touchstart', function (e) { var t = e.touches[0]; tx = t.clientX; ty = t.clientY; }, { passive: true });
        el.addEventListener('touchmove', function (e) { var t = e.touches[0]; if (Math.abs(t.clientX - tx) > 10 && Math.abs(t.clientX - tx) > Math.abs(t.clientY - ty)) go(e); }, { passive: true });
      }
    });
    return function () { done = true; };
  }
  /* Hinweis über/an ein Element setzen (relativ zum Host) */
  function placeAt(h, host, el, fy, dy, fx) {
    if (!h || !el) return;
    var hr = host.getBoundingClientRect(), r = el.getBoundingClientRect();
    h.style.left = (r.left - hr.left + r.width * (fx == null ? .5 : fx)) + 'px';
    h.style.top = (r.top - hr.top + r.height * (fy == null ? .5 : fy) + (dy || 0)) + 'px';
  }

  /* ---------- Waagerechte Leisten: kurzer Schubs + Hinweis ---------- */
  function nudge(sc, o) {
    if (!sc || sc.__v6n) return; sc.__v6n = 1; o = o || {}; sc.__v6x = 1;
    var used = false, h = null, tw = null;
    var can = function () { return sc.scrollWidth > sc.clientWidth + 12 && (!o.when || o.when()); };
    function place() { placeAt(h, o.host || sc.parentNode, sc, o.y); }
    function user() { if (used) return; used = true; if (tw) tw.stop(); unhint(h); sc.classList.add('v6-used'); }
    onUser([sc], user, true); onUser(o.extra || [], user);
    (o.extra || []).forEach(function (b) { if (b) b.addEventListener('click', function (e) { if (e.isTrusted !== false) user(); }); });
    once(sc, o.th || .5, function () {
      if (!can() || used) return;
      if (!o.noHint) { h = hint(o.host || sc.parentNode, o.text || ('← ' + SWIPE + ' →'), 'swipe', 'v6-acc' + (o.cls ? ' ' + o.cls : '')); place(); window.addEventListener('resize', place); }
      if (RM) return;
      setTimeout(function () {
        if (used || !can()) return;
        var x0 = sc.scrollLeft, max = sc.scrollWidth - sc.clientWidth, d = Math.min(o.dist || Math.max(120, sc.clientWidth * .42), max - x0);
        if (d < 20) return;
        var snap = sc.style.scrollSnapType, beh = sc.style.scrollBehavior;
        sc.style.scrollSnapType = 'none'; sc.style.scrollBehavior = 'auto'; sc.classList.add('v6-nudging');
        tw = tween(o.dur || 1900, function (k) { sc.scrollLeft = x0 + d * Math.sin(Math.PI * ease(k)); }, function (intr) {
          if (!intr) sc.scrollLeft = x0; sc.style.scrollSnapType = snap; sc.style.scrollBehavior = beh; sc.classList.remove('v6-nudging'); tw = null; if (o.after) o.after();
        });
      }, o.delay || 450);
    });
    return { place: place };
  }

  /* ---------- Regler: einmal hin und her + Hinweis ---------- */
  function rangeDemo(r, keys, o) {
    if (!r || r.__v6r) return; r.__v6r = 1; o = o || {};
    var used = false, h = null, tw = null;
    function user() { if (used) return; used = true; if (tw) tw.stop(); unhint(h); }
    onUser([r].concat(o.extra || []), user);
    r.addEventListener('input', function (e) { if (e.isTrusted) user(); });
    once(o.watch || r, o.th || .6, function () {
      if (used) return;
      if (!o.noHint) { var host = o.host || r.parentNode, under = /v6-under/.test(o.cls || ''); h = hint(host, o.text || ('← Regler ' + SWIPE + ' →'), 'swipe', o.cls || 'v6-over'); var pl = function () { if (under) placeAt(h, host, r, 1, 8, 1); else placeAt(h, host, r, 0, -10); }; pl(); window.addEventListener('resize', pl); }
      if (RM || !keys) return;
      setTimeout(function () {
        if (used) return;
        var seg = keys.length - 1;
        tw = tween(o.dur || 2600, function (k) {
          var x = ease(k) * seg, i = Math.min(seg - 1, Math.floor(x)), f = x - i, v = keys[i] + (keys[i + 1] - keys[i]) * (f < .5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2);
          r.value = Math.round(v * (o.dec ? 10 : 1)) / (o.dec ? 10 : 1); r.dispatchEvent(new Event('input', { bubbles: true }));
        }, function () { tw = null; });
      }, o.delay || 500);
    });
  }

  /* ================= Zeitreise ================= */
  (function () {
    var sec = $('[data-zr]'); if (!sec) return;
    var tr = $('[data-ztrack]', sec);
    nudge(tr, { host: sec, y: .42, extra: $$('[data-zprev],[data-znext],[data-zy]', sec), dist: Math.min(520, innerWidth * .55) });
  })();

  /* ================= Schnäppchen (Tablet/Handy), Musterstadt-Karten (Handy) ================= */
  (function () {
    var dl = $('.dl-g'); if (dl) nudge(dl, { host: dl.parentNode, y: .24, when: function () { return mq('(max-width:1000px)'); } });
    var og = $('.ort-g'); if (og) nudge(og, { host: og.parentNode, y: .32, when: function () { return mq('(max-width:560px)'); } });
  })();

  /* ================= Ausstellung: Foto auf dem Handy kurz anschieben, Tabs-Leiste ================= */
  (function () {
    var stage = $('[data-ausst]'), sc = $('[data-auscroll]'); if (!stage || !sc) return;
    nudge(sc, { noHint: true, th: .6, dist: Math.min(220, sc.clientWidth * .5), when: function () { return mq('(max-width:760px)'); }, extra: [$('[data-auswipe]')],
      after: function () { stage.classList.remove('swiped'); } });
    var tabs = $('.au-tabs'); if (tabs) nudge(tabs, { noHint: true, th: .9, dist: 90, delay: 900, when: function () { return mq('(max-width:900px)'); } });
  })();

  /* ================= Geschichte: aktiver Kapitel-Knopf bleibt sichtbar ================= */
  (function () {
    var row = $('.fw-tabs'); if (!row) return;
    var keep = function () { var b = $('button.on', row); if (!b || row.scrollWidth <= row.clientWidth + 4) return; var l = b.offsetLeft - row.clientWidth / 2 + b.clientWidth / 2; row.scrollTo({ left: Math.max(0, l), behavior: RM ? 'auto' : 'smooth' }); };
    if ('MutationObserver' in window) new MutationObserver(keep).observe(row, { subtree: true, attributes: true, attributeFilter: ['class'] });
    var win = $('.fw-win'), h = null;
    once(win, .55, function () { h = hint(win, '', 'tap', 'v6-icon'); h.title = ''; });
    onUser([win, row], function () { unhint(h); });
  })();

  /* ================= Reels: auf dem Handy wischen ================= */
  (function () {
    var st = $('[data-reels]'); if (!st) return;
    var nx = $('[data-rnext]', st), pv = $('[data-rprev]', st), x0 = 0, y0 = 0, h = null;
    st.addEventListener('touchstart', function (e) { var t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; }, { passive: true });
    st.addEventListener('touchend', function (e) { var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) { (dx < 0 ? nx : pv).click(); unhint(h); } }, { passive: true });
    if (TOUCH) once(st, .5, function () { h = hint(st, '← wischen →', 'swipe', 'v6-below'); });
    onUser([nx, pv], function () { unhint(h); });
    [nx, pv].forEach(function (b) { if (b) b.addEventListener('click', function (e) { if (e.isTrusted) unhint(h); }); });
  })();

  /* ================= Budget-Regler: Hinweis (Demo läuft schon in app.js) ================= */
  (function () {
    var r = $('[data-tier]'); if (!r) return;
    rangeDemo(r, null, { th: .6, extra: $$('[data-tierset],[data-kitchen]'), text: '← Regler ' + SWIPE + ' →' });
  })();

  /* ================= Arbeitshöhe: Größe kurz durchspielen ================= */
  (function () {
    var r = $('.ah [data-ah]'); if (!r) return;
    var v = +r.value || 172;
    rangeDemo(r, [v, v - 14, v + 18, v], { th: .7, dur: 3200, delay: 700, watch: $('.ah-vis') || r, extra: [$('[data-ah-two]')], cls: 'v6-under', text: TOUCH ? '← wischen →' : '← Regler ziehen →' });
  })();

  /* ================= Zukunftsblick: Hinweis am Regler (Wisch-Impuls kommt aus ki.js) ================= */
  (function () {
    var ba = $('.ki [data-ba]'); if (!ba) return;
    var h = null;
    once(ba, .5, function () { h = hint(ba, '← ' + SWIPE + ' →', 'swipe', 'v6-knob'); });
    onUser([ba], function () { unhint(h); });
    $$('.ki-lab', ba).forEach(function (l) { l.addEventListener('click', function () { unhint(h); }); });
  })();

  /* ================= 3D-Teaser: Schubladen-Welle + Dreh-Hinweis ================= */
  (function () {
    var vr = $('[data-vr]'); if (!vr) return;
    var host = $('[data-vr3d]', vr), h = null, used = false;
    var stop = onUser([host], function () { used = true; unhint(h); });
    $$('[data-vrv]', vr).forEach(function (b) { b.addEventListener('click', function (e) { if (e.isTrusted) { used = true; unhint(h); } }); });
    function demo() {
      var K = host.__k3; if (!K) return;
      once(host, .55, function () {
        if (!used) h = hint(host, TOUCH ? 'Wischen zum Drehen' : 'Ziehen zum Drehen', 'swipe', 'v6-low');
        if (RM || used || !K.openAll) return;
        setTimeout(function () { if (!used) K.openAll(true); }, 900);
        setTimeout(function () { if (!used) K.openAll(false); }, 3600);
      });
    }
    if (host.__k3) demo(); else vr.addEventListener('v6:3d', demo, { once: true });
  })();

  /* ================= Lift-Hängeschrank: Hinweis zum Antippen ================= */
  (function () {
    var sec = $('[data-lift]'); if (!sec) return;
    var svg = $('[data-liftsvg]', sec), vis = $('.lift-vis', sec), cap = $('.lift-cap', sec), h = null;
    /* Hinweis sitzt an der Stelle der Bildunterschrift – überdeckt nichts */
    once(svg, .5, function () { setTimeout(function () { if (sec.__v6u) return; h = hint(vis, TOUCH ? 'Antippen: Schrank fährt' : 'Klicken: Schrank fährt', 'tap'); if (cap) { cap.classList.add('v6-hid'); var pl = function () { placeAt(h, vis, cap, .5); }; pl(); window.addEventListener('resize', pl); } }, 3400); });
    onUser([svg, $('[data-liftbtn]', sec), $('[data-liftr]', sec)], function () { sec.__v6u = 1; unhint(h); if (cap) setTimeout(function () { cap.classList.remove('v6-hid'); }, 350); });
  })();

  /* ================= Kochfeldabzug: Kochstufe + Vergleich einmal vorführen ================= */
  (function () {
    var sec = $('[data-abz]'); if (!sec) return;
    var lvl = $('[data-abzlvl]', sec), haube = $('[data-abzm="haube"]', sec), bora = $('[data-abzm="bora"]', sec), used = false, timers = [];
    var ctl = $$('.abz-sw,.abz-r,[data-abzshow]', sec);
    onUser(ctl, function () { used = true; timers.forEach(clearTimeout); sec.classList.remove('v6-demo'); });
    rangeDemo(lvl, [6, 9, 3, 6], { th: .45, watch: $('[data-abzc]', sec), dur: 3400, delay: 1400, extra: ctl, cls: 'v6-over v6-dark' });
    once($('[data-abzc]', sec), .45, function () {
      if (RM) return;
      timers.push(setTimeout(function () { if (used) return; sec.classList.add('v6-demo'); haube.click(); }, 6200));
      timers.push(setTimeout(function () { if (used) return; bora.click(); sec.classList.remove('v6-demo'); }, 11400));
    });
  })();

  /* ================= Spüle: Farben einmal durchblättern ================= */
  (function () {
    var row = $('.sp-btns'); if (!row) return;
    var bs = $$('button', row), used = false, i = 0, t = 0, h = null;
    onUser([row, $('.sp-mat')], function () { used = true; clearInterval(t); unhint(h); });
    once(row, .8, function () {
      h = hint(row, TOUCH ? 'Farbe antippen' : 'Farbe anklicken', 'tap', 'v6-inline');
      if (RM) return;
      t = setInterval(function () { if (used) return clearInterval(t); i++; if (i > bs.length) return clearInterval(t); bs[i % bs.length].click(); }, 1500);
    });
  })();

  /* ================= Details-Raster ohne Lücken (Desktop/Tablet) ================= */
  (function () {
    var g = $('[data-dzg]'); if (!g) return;
    /* Blöcke aus 2 Zeilen (T = hoch, W = breit, S = einfach) – füllen das Raster immer vollständig */
    var B4 = { 7: [[0, 0, 1, 2], [1, 0, 1, 1], [2, 0, 1, 1], [3, 0, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1]],
      6: [[0, 0, 1, 2], [1, 0, 2, 1], [3, 0, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1]],
      5: [[0, 0, 1, 2], [1, 0, 2, 1], [3, 0, 1, 2], [1, 1, 1, 1], [2, 1, 1, 1]] };
    var R4 = { 4: [[0, 0, 1, 1], [1, 0, 1, 1], [2, 0, 1, 1], [3, 0, 1, 1]], 3: [[0, 0, 2, 1], [2, 0, 1, 1], [3, 0, 1, 1]], 2: [[0, 0, 2, 1], [2, 0, 2, 1]], 1: [[1, 0, 2, 1]] };
    var B3 = { 5: [[0, 0, 1, 2], [1, 0, 1, 1], [2, 0, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1]], 4: [[0, 0, 1, 2], [1, 0, 2, 1], [1, 1, 1, 1], [2, 1, 1, 1]] };
    var R3 = { 3: [[0, 0, 1, 1], [1, 0, 1, 1], [2, 0, 1, 1]], 2: [[0, 0, 2, 1], [2, 0, 1, 1]], 1: [[0, 0, 2, 1]] };
    var B2 = { 3: [[0, 0, 1, 2], [1, 0, 1, 1], [1, 1, 1, 1]] }, R2 = { 2: [[0, 0, 1, 1], [1, 0, 1, 1]], 1: [[0, 0, 2, 1]] };
    function plan(n, B, R, maxR) {
      // beste Zerlegung: möglichst viele 2-Zeilen-Blöcke, Rest als eine Zeile
      var best = null;
      (function rec(left, parts) {
        if (best && parts.length > 8) return;
        if (left === 0) { var sc = parts.reduce(function (a, p) { return a + (p.b ? 3 : 1); }, 0) - (parts.length && !parts[parts.length - 1].b && parts[parts.length - 1].n < maxR ? 1 : 0); if (!best || sc > best.sc) best = { sc: sc, parts: parts.slice() }; return; }
        Object.keys(B).map(Number).sort(function (a, b) { return b - a; }).forEach(function (k) { if (k <= left) rec(left - k, parts.concat([{ b: 1, n: k }])); });
        if (left <= maxR && R[left]) rec(0, parts.concat([{ b: 0, n: left }]));
      })(n, []);
      return best ? best.parts : [];
    }
    function layout() {
      var tiles = $$('.dz-t', g).filter(function (t) { return !t.hidden; });
      $$('.dz-t', g).forEach(function (t) { t.style.gridRow = ''; t.style.gridColumn = ''; });
      if (mq('(max-width:760px)') || getComputedStyle(g).display !== 'grid') return;
      var C = getComputedStyle(g).gridTemplateColumns.split(' ').filter(Boolean).length;
      var B = C >= 4 ? B4 : C === 3 ? B3 : B2, R = C >= 4 ? R4 : C === 3 ? R3 : R2;
      var parts = plan(tiles.length, B, R, C), row = 1, k = 0, flip = false;
      parts.forEach(function (p) {
        var cells = p.b ? B[p.n] : R[p.n];
        cells.forEach(function (c) {
          var t = tiles[k++]; if (!t) return;
          var col = flip && p.b ? C - c[0] - c[2] : c[0];
          t.style.gridColumn = (col + 1) + ' / span ' + c[2]; t.style.gridRow = (row + c[1]) + ' / span ' + c[3];
        });
        row += p.b ? 2 : 1; if (p.b) flip = !flip;
      });
    }
    layout();
    var rt = 0; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 120); });
    $$('[data-dzc]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(layout, 0); }); });
  })();

  /* ================= Birgit: Zitat-Wechsel ohne Überlagerung ================= */
  (function () {
    var box = $('[data-quotes]'); if (!box) return;
    var qs = $$('blockquote', box), fit = function () { var m = 0; qs.forEach(function (q) { m = Math.max(m, q.scrollHeight); }); box.style.minHeight = (m + 6) + 'px'; };
    fit(); window.addEventListener('resize', fit); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  })();

  /* ================= Galerie: Lupe zeigt, dass man vergrößern kann ================= */
  (function () {
    $$('.g-it').forEach(function (f) { if ($('.v6-zoom', f)) return; var z = document.createElement('span'); z.className = 'v6-zoom'; z.setAttribute('aria-hidden', 'true'); z.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5M11 8v6M8 11h6"/></svg>'; f.appendChild(z); });
  })();


  /* ================= Chip-Leisten: weiche Kante zeigt „da kommt noch mehr“ ================= */
  (function () {
    $$('.fw-tabs,.au-tabs,.zr-rail').forEach(function (row) {
      row.classList.add('v6-fade');
      var upd = function () { var max = row.scrollWidth - row.clientWidth; row.classList.toggle('at-start', row.scrollLeft < 6); row.classList.toggle('at-end', max - row.scrollLeft < 6); };
      row.addEventListener('scroll', function () { requestAnimationFrame(upd); }, { passive: true }); window.addEventListener('resize', upd); upd();
    });
  })();


  /* ================= „Jahre im Ort“ immer aktuell (seit 1981) ================= */
  (function () {
    var y = new Date().getFullYear() - 1981;
    $$('.ba-n [data-count="40"]').forEach(function (b) { if (y > 40 && y < 80) { b.dataset.count = y; b.textContent = y; } });
  })();


  /* ================= Logo-Moment (Kopf nach dem Laden, Fuß beim Erscheinen) ================= */
  (function () {
    if (RM) return;
    var wink = function (l) { if (!l) return; l.classList.remove('v6-wink'); void l.getBoundingClientRect(); l.classList.add('v6-wink'); setTimeout(function () { l.classList.remove('v6-wink'); }, 1600); };
    var hl = $('.hdr .logo'); if (hl) setTimeout(function () { wink(hl); }, document.documentElement.classList.contains('hc-first') ? 3000 : 1200);
    var fl = $('.ftr .logo'); if (fl) once(fl, .8, function () { wink(fl); });
  })();

  /* ================= Antippen: sichtbare Rückmeldung auf Touch-Geräten ================= */
  (function () {
    if (!TOUCH) return;
    var SEL = 'a,button,[role="button"],.g-it,.dz-t,.ort-c,.ref,.ex,.dl,.zr-c a,.tier,label.drop';
    document.addEventListener('touchstart', function (e) { var el = e.target.closest && e.target.closest(SEL); if (!el) return; el.classList.add('v6-pressed'); setTimeout(function () { el.classList.remove('v6-pressed'); }, 260); }, { passive: true });
  })();
})();
