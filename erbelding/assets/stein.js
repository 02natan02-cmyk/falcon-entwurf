/* Steinwand-Lupe und Hotspots in der Terrakotta-Küche (19.10.) */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var w = document.querySelector('[data-stwall]');
  if (w) {
    var img = w.querySelector('img'), L = w.querySelector('.st-lens'), Z = 2.6, user = false, run = false, raf = 0, vis = false;
    var path = [[.12, .29], [.30, .29], [.48, .29], [.66, .29], [.84, .29], [.80, .62], [.58, .66], [.36, .62], [.16, .64]];
    function set(x, y) {
      var r = w.getBoundingClientRect(), ls = L.offsetWidth || 150;
      x = Math.max(0, Math.min(r.width, x)); y = Math.max(0, Math.min(r.height, y));
      L.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
      L.style.backgroundSize = (r.width * Z) + 'px ' + (r.height * Z) + 'px';
      L.style.backgroundPosition = (ls / 2 - x * Z) + 'px ' + (ls / 2 - y * Z) + 'px';
      L.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }
    function rel(e) { var r = w.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
    function take(e) {
      if (!user) { user = true; run = false; cancelAnimationFrame(raf); w.classList.add('used'); }
      w.classList.add('on'); var p = rel(e); set(p[0], p[1]);
    }
    w.addEventListener('pointerdown', take);
    w.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse' || e.buttons || user) take(e); });
    w.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') w.classList.remove('on'); });
    function tour() {
      if (user || run || !vis) return;
      run = true; w.classList.add('on');
      var seg = 1300, t0 = performance.now();
      (function f(now) {
        if (!run) return;
        var r = w.getBoundingClientRect(), k = (now - t0) / seg, i = Math.floor(k) % path.length, j = (i + 1) % path.length, u = k - Math.floor(k);
        u = u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
        set((path[i][0] + (path[j][0] - path[i][0]) * u) * r.width, (path[i][1] + (path[j][1] - path[i][1]) * u) * r.height);
        raf = requestAnimationFrame(f);
      })(t0);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          vis = e.isIntersecting;
          if (vis && !user) {
            if (reduce) { var r = w.getBoundingClientRect(); w.classList.add('on'); set(.48 * r.width, .29 * r.height); }
            else if (img.complete) tour(); else img.addEventListener('load', tour, { once: true });
          } else if (!vis && run) { run = false; cancelAnimationFrame(raf); if (!user) w.classList.remove('on'); }
        });
      }, { threshold: .45 }).observe(w);
    }
  }
  var k = document.querySelector('[data-stk]');
  if (k) {
    var hs = [].slice.call(k.querySelectorAll('[data-sths]')), touched = false;
    function open(b, on) { hs.forEach(function (x) { var o = x === b && on; x.classList.toggle('open', o); x.setAttribute('aria-expanded', o ? 'true' : 'false'); }); }
    hs.forEach(function (b) {
      b.addEventListener('click', function (e) { if (e.target.closest('a')) return; touched = true; open(b, !b.classList.contains('open')); });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('[data-sths]')) open(null, false); });
    if ('IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); setTimeout(function () { if (!touched) { open(hs[0], true); setTimeout(function () { if (!touched) open(null, false); }, 3200); } }, 700); }
      }, { threshold: .6 });
      io.observe(k);
    }
  }
})();
