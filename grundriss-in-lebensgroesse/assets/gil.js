/* Grundriss in Lebensgröße – Seitenlogik: Vorhang, Menü mit großem Planer-Punkt, Zeiger, Film vor dem Planer, Logo-Rückwand */
(function () {
  var hdr = document.querySelector('.site-header'), nav = document.getElementById('nav'), burger = document.querySelector('.burger');
  var page = document.documentElement.dataset.page, Q = location.search;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, mobile = function () { return innerWidth <= 980; };
  function setOpen(v) { if (!nav || !burger) return; nav.classList.toggle('open', v); burger.setAttribute('aria-expanded', v ? 'true' : 'false'); burger.setAttribute('aria-label', v ? 'Menü schließen' : 'Menü öffnen'); }
  if (burger) burger.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  if (nav) nav.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a && !a.closest('.kpl-pop')) setOpen(false); });
  function onScroll() { if (hdr && page === 'index') hdr.classList.toggle('solid', scrollY > 40); }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  document.querySelectorAll('[data-gb]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }); });

  if (page === 'index') index(); else if (page === 'planer') planer();

  function index() {
    var cur = document.querySelector('[data-curtain]'), pop = document.querySelector('[data-kpl-pop]'), go = document.querySelector('[data-kpl-go]'), item = document.querySelector('[data-kpl]');
    var g = document.querySelector('[data-guide]'), tip = g && g.querySelector('.g-tip');
    var opened = false;
    function curtainOpen(fast) {
      if (opened || !cur) return; opened = true;
      cur.classList.add('open'); document.documentElement.classList.remove('c-lock');
      setTimeout(function () { cur.classList.add('gone'); }, fast ? 300 : 2600);
      setTimeout(showPoint, fast ? 200 : 1500);
    }
    if (cur) {
      if (/[?&]nointro/.test(Q)) { cur.classList.add('gone'); opened = true; setTimeout(showPoint, 300); }
      else {
        document.documentElement.classList.add('c-lock');
        cur.querySelector('[data-curtain-go]').addEventListener('click', function () { curtainOpen(); });
        cur.querySelector('[data-curtain-skip]').addEventListener('click', function () { curtainOpen(true); });
        setTimeout(function () { curtainOpen(); }, 5200);
      }
    }
    // Großer Punkt „3D-Küchenplaner für zu Hause“ – auf jedem Gerät: Menü auf, Punkt auf, Zeiger hin
    function showPoint() {
      scrollTo(0, 0);
      if (mobile()) setOpen(true);
      setTimeout(function () { pop && pop.classList.add('on'); item && item.classList.add('pulse'); }, mobile() ? 420 : 100);
      setTimeout(guide, mobile() ? 1300 : 900);
    }
    if (item && pop) {
      // Desktop: Hover/Fokus zeigt den Punkt auch später wieder
      item.parentNode.addEventListener('mouseenter', function () { pop.classList.add('on'); });
      item.addEventListener('focus', function () { pop.classList.add('on'); });
    }
    if (!g || !go) return;
    var x = innerWidth * .5, y = innerHeight * .7, raf, stopped = false;
    function place(px, py) { g.style.transform = 'translate(' + px + 'px,' + py + 'px)'; }
    function target() { var r = go.getBoundingClientRect(); return [r.left + r.width * .62, r.top + r.height * .6]; }
    function tipPos() { var w = tip.offsetWidth, l = Math.max(12 - x, Math.min(innerWidth - 12 - w - x, 24)), t = y + 30 + tip.offsetHeight > innerHeight - 8 ? -tip.offsetHeight - 14 : 30; tip.style.left = l + 'px'; tip.style.top = t + 'px'; }
    function fly(done) {
      var sx = x, sy = y, t0 = performance.now(), D = reduce ? 1 : 1400;
      (function step(now) {
        var k = Math.min(1, (now - t0) / D), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2, tt = target();
        x = sx + (tt[0] - sx) * e - Math.sin(k * Math.PI) * 50; y = sy + (tt[1] - sy) * e - Math.sin(k * Math.PI) * 30; place(x, y);
        if (k < 1) raf = requestAnimationFrame(step); else done && done();
      })(t0);
    }
    function follow() { if (stopped) return; var t = target(); x = t[0]; y = t[1]; place(x, y); tipPos(); raf = requestAnimationFrame(follow); }
    function guide() {
      if (stopped) return; place(x, y); g.classList.add('on');
      fly(function () { g.classList.add('click'); setTimeout(function () { tipPos(); g.classList.add('tip'); follow(); }, 300); });
    }
    function hideCursor(e) { if (e && e.target && e.target.closest && e.target.closest('[data-kpl-go],[data-curtain]')) return; g.classList.remove('on'); stopped = true; cancelAnimationFrame(raf); removeEventListener('pointerdown', hideCursor); }
    addEventListener('pointerdown', hideCursor);
  }

  function planer() {
    var film = document.querySelector('[data-film]'), v = film && film.querySelector('video');
    var lt = document.querySelector('[data-logo-tip]');
    function logoTip() { if (!lt || sessionStorage.getItem('gil-lt')) return; setTimeout(function () { lt.hidden = false; }, 2500); }
    if (lt) {
      lt.querySelector('[data-logo-x]').addEventListener('click', function () { lt.hidden = true; try { sessionStorage.setItem('gil-lt', '1'); } catch (e) { } });
      lt.querySelector('[data-logo-on]').addEventListener('click', function () {
        lt.hidden = true; try { sessionStorage.setItem('gil-lt', '1'); } catch (e) { }
        var st = document.querySelectorAll('[data-kstep]'); if (st[2]) st[2].click();
        setTimeout(function () {
          var b = document.querySelector('[data-e="back"][data-v="motiv"]'); if (b) b.click();
          var w = document.querySelector('[data-kp-walls]'); if (w) w.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 450);
      });
    }
    var want = /[?&]film=1/.test(Q) && !/[?&]nointro/.test(Q); if (/[?&]nointro/.test(Q)) lt = null;
    if (!film || !v || !want) { logoTip(); return; }
    // Film nur zeigen, wenn er da ist
    fetch('media/film.mp4', { method: 'HEAD' }).then(function (r) {
      if (!r.ok) { logoTip(); return; }
      v.muted = true; v.poster = 'media/film-poster.jpg'; v.src = 'media/film.mp4'; film.hidden = false; document.documentElement.classList.add('c-lock');
      var end = film.querySelector('[data-film-end]');
      function close() { film.classList.add('out'); v.pause(); document.documentElement.classList.remove('c-lock'); setTimeout(function () { film.hidden = true; }, 900); history.replaceState(null, '', location.pathname); logoTip(); }
      function play() { film.classList.add('playing'); var p = v.play(); if (p && p.catch) p.catch(function () { film.classList.remove('playing'); }); }
      film.querySelector('[data-film-play]').addEventListener('click', play);
      v.addEventListener('click', function () { if (v.paused) play(); else v.pause(); });
      film.querySelector('[data-film-skip]').addEventListener('click', close);
      film.querySelector('[data-film-close]').addEventListener('click', close);
      v.addEventListener('ended', function () { end.hidden = false; });
      // Autoplay mit Ton geht nur nach einer Geste: Klick auf der Startseite zählt meist; sonst Play-Knopf
      play();
    }).catch(logoTip);
  }
})();
/* Farbabgleich sichtbar: Ihr Farbton → passender Ballerina- und Nobilia-Ton */
(function () {
  if (document.documentElement.dataset.page !== 'planer') return;
  var box, last = '';
  function put() {
    if (!window.KP || !KP.herstHint) return;
    var w = document.querySelector('[data-kp-worlds]'); if (!w) return;
    if (!box) { box = document.createElement('div'); box.className = 'gil-match'; box.setAttribute('aria-live', 'polite'); w.parentNode.insertBefore(box, w); }
    var h = KP.herstHint() || ''; if (h === last) return; last = h;
    var parts = h.split(' · ').filter(function (x) { return /^(Ballerina|Nobilia)/.test(x); });
    if (!parts.length) { box.hidden = true; return; } box.hidden = false;
    box.innerHTML = '<p class="gm-k">Ihr Farbton bei unseren Marken</p>' + parts.map(function (x) {
      var m = x.match(/^(Ballerina|Nobilia)[: ]+(.*)$/) || [0, '', x];
      return '<div class="gm-r"><b>' + m[1] + '</b><span>' + m[2].replace(/</g, '&lt;') + '</span></div>';
    }).join('') + '<p class="gm-n">Richtwerte – Florian zeigt Ihnen das Originalmuster im Studio.</p>';
  }
  setInterval(put, 700);
})();
