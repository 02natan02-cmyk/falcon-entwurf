/* Z&H Aufbereitung – Geschichten aus Alis Fotos (31.10.2026, Falcon Eye)
   Rundgang ums Auto (ziehen, Pfeiltasten) · Vorher/Nachher: einschäumen und abziehen (tippen, Beispiele wählen) */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // sichtbar? (frac = Anteil der Fensterhöhe, der schon im Bild sein muss)
  const onView = (el, fn, frac = .25) => { if (!el) return; let done = false;
    const chk = () => { if (done) return; const r = el.getBoundingClientRect(); if (!r.width && !r.height) return;
      if (r.top < innerHeight * (1 - frac) && r.bottom > innerHeight * frac * .5) { done = true; io.disconnect(); removeEventListener('scroll', chk); fn(); } };
    const io = new IntersectionObserver(chk, { threshold: [0, .1, .25, .5, .75, 1] }); io.observe(el); addEventListener('scroll', chk, { passive: true }); setTimeout(chk, 400); };
  const setSrc = (im, b) => { im.srcset = `${b}-m.webp 800w, ${b}.webp 1400w`; im.sizes = '(max-width:900px) 100vw, 46vw'; im.src = `${b}.webp`; };

  /* ---------- Rundgang ums Auto: ziehen = um das Auto gehen ---------- */
  $$('[data-rg]').forEach(m => {
    const F = JSON.parse(m.dataset.fr), ims = $$('.rg-i', m), inp = $('input', m), lab = $('[data-rg-lab]', m), cam = $('.rg-cam', m), num = $('[data-rg-n]', m.parentElement);
    const n = F.length; let cur = 0, want = 0, user = false, tms = [], ready = null;
    // alle Blickwinkel laden und dekodieren; erst dann läuft der Rundgang von selbst
    const load = () => ready || (ready = Promise.all(ims.map(im => { if (im.dataset.b) { setSrc(im, im.dataset.b); delete im.dataset.b; }
      return im.complete && im.naturalWidth ? 0 : (im.decode ? im.decode().catch(() => {}) : new Promise(r => { im.onload = im.onerror = r; })); })));
    const set = i => { i = ((i % n) + n) % n; if (i === cur) return; const im = ims[i]; load();
      want = i; if (!(im.complete && im.naturalWidth)) { im.addEventListener('load', () => { if (want === i) set(i); }, { once: true }); return; }
      ims[cur].classList.remove('on'); im.classList.add('on'); cur = i;
      lab.textContent = F[i].l; cam.style.transform = `rotate(${F[i].a}deg)`; inp.value = i; inp.setAttribute('aria-valuetext', F[i].l); if (num) num.textContent = `${i + 1} / ${n}`;
      // Alternativtext folgt dem sichtbaren Bild
      ims.forEach((x, j) => { if (j === i) { x.alt = `Weißer Audi Q5 nach der Aufbereitung in der Halle von Z&H, Blick: ${F[j].l}`; x.removeAttribute('aria-hidden'); } else { x.alt = ''; x.setAttribute('aria-hidden', 'true'); } }); };
    const touch = () => { user = true; tms.forEach(clearTimeout); tms = []; m.classList.add('touched'); };
    inp.addEventListener('input', () => { touch(); set(+inp.value); });
    // Ziehen: ein Schritt je ~11 % der Breite, rundherum ohne Ende
    // Ziehen: ein Schritt je 11 % (Maus) bzw. 16 % (Finger) der Breite, rundherum ohne Ende; senkrechtes Wischen scrollt nur die Seite
    let down = false, drag = false, sx = 0, sy = 0, base = 0, pt = 'mouse';
    m.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button !== 0) return; load(); down = true; drag = false; sx = e.clientX; sy = e.clientY; base = want; pt = e.pointerType;
      if (pt === 'mouse') { touch(); drag = true; m.classList.add('drag'); m.setPointerCapture(e.pointerId); } });
    m.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx;
      if (!drag) { if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - sy)) { touch(); drag = true; m.classList.add('drag'); try { m.setPointerCapture(e.pointerId); } catch (_) {} } else return; }
      const step = Math.max(34, m.clientWidth * (pt === 'mouse' ? .11 : .16)); set(base - Math.round(dx / step)); });
    const up = () => { down = false; drag = false; m.classList.remove('drag'); };
    m.addEventListener('pointerup', up); m.addEventListener('pointercancel', up);
    // Selbst-Impuls: einmal langsam ums Auto, dann zurück nach vorne
    // schon vorab laden, sobald der Abschnitt in die Nähe kommt
    const pio = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { pio.disconnect(); load(); } }, { rootMargin: '100% 0px' }); pio.observe(m);
    onView(m, () => { load().then(() => { if (reduce || user) return;
      let t = 600; for (let i = 1; i <= n; i++) { tms.push(setTimeout(() => { if (!user) set(i); }, t)); t += i === n ? 0 : 520; } }); }, .3);
  });

  /* ---------- Vorher/Nachher: einschäumen, Bild wechselt unter dem Schaum, Abzieher zieht ab ---------- */
  $$('[data-vn]').forEach(m => {
    const P = JSON.parse(m.dataset.pairs), w = m.closest('.sv-mw'), iv = $('.vn-i.v', m), inn = $('.vn-i.n', m), foam = $('.vn-foam', m), sq = $('.vn-sq', m), tag = $('[data-vn-tag]', m);
    const q = $('[data-vn-q]', w), an = $('[data-vn-a]', w), sws = $$('[data-vn-s]', w), ps = $$('[data-vn-p]', w);
    let cur = 0, state = 'v', target = 'v', busy = false, user = false, queued = null, tms = [], seq = 0;
    const press = s => sws.forEach(b => b.setAttribute('aria-pressed', b.dataset.vnS === s ? 'true' : 'false'));
    const show = s => { state = s; iv.classList.toggle('on', s === 'v'); inn.classList.toggle('on', s === 'n'); m.classList.toggle('is-n', s === 'n');
      tag.textContent = s === 'v' ? 'Vorher' : 'Nachher'; press(target); };
    const E = 'cubic-bezier(.6,.05,.25,1)';
    const go = s => { target = s; press(s); if (busy) { queued = s; return; } if (s === state) return;
      if (reduce || !foam.animate) { show(s); return; }
      busy = true; m.classList.add('wash'); m.classList.remove('hint');
      const a = foam.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }], { duration: 480, easing: 'cubic-bezier(.3,.7,.3,1)', fill: 'forwards' });
      a.onfinish = () => { show(s);
        foam.animate([{ clipPath: 'inset(0 0 0 0%)' }, { clipPath: 'inset(0 0 0 100%)' }], { duration: 1050, easing: E, fill: 'forwards' });
        sq.animate([{ left: '0%', opacity: 1 }, { left: '100%', opacity: 1, offset: .88 }, { left: '100%', opacity: 0 }], { duration: 1190, easing: E, fill: 'forwards' })
          .onfinish = () => { busy = false; m.classList.remove('wash'); const nx = queued; queued = null; if (nx && nx !== state) go(nx); else press(state); }; }; };
    const touch = () => { user = true; tms.forEach(clearTimeout); tms = []; m.classList.remove('hint'); };
    const pair = j => { if (j === cur && state === 'v') return; cur = j; const p = P[j], my = ++seq;
      tms.forEach(clearTimeout); tms = [];
      ps.forEach((b, k) => b.setAttribute('aria-pressed', k === j ? 'true' : 'false')); q.textContent = p.q; if (an) an.textContent = p.a || '';
      // beide Bilder in der passenden Größe laden (Handy: kleine Datei), dann tauschen: erst vorher, kurz darauf einschäumen und abziehen
      const pre = ['v', 'n'].map(k => { const x = new Image(); x.sizes = iv.sizes || '(max-width:900px) 100vw, 46vw'; x.srcset = `${p.b}${k}-m.webp 800w, ${p.b}${k}.webp 1400w`; x.src = `${p.b}${k}.webp`; return x; });
      Promise.all(pre.map(x => x.decode ? x.decode().catch(() => {}) : 0)).then(() => { if (my !== seq) return;
        setSrc(iv, `${p.b}v`); setSrc(inn, `${p.b}n`); iv.alt = p.av; inn.alt = p.an; target = 'v'; if (!busy) show('v'); else queued = null;
        tms.push(setTimeout(() => { if (my === seq) go('n'); }, reduce ? 0 : 650)); }); };
    $('[data-vn-tog]', m).addEventListener('click', () => { touch(); go(state === 'v' ? 'n' : 'v'); });
    sws.forEach(b => b.addEventListener('click', () => { touch(); go(b.dataset.vnS); }));
    ps.forEach((b, j) => b.addEventListener('click', () => { touch(); pair(j); }));
    // Selbst-Impuls: einmal vorher zeigen, dann von selbst einschäumen und abziehen; danach Hinweis zum Selbermachen
    onView(m, () => { if (reduce) { m.classList.add('hint'); return; }
      tms.push(setTimeout(() => { if (user) return; go('n'); tms.push(setTimeout(() => { if (!user) m.classList.add('hint'); }, 1900)); }, 1300)); }, .3);
  });

  /* ---------- Polizei und Feuerwehr: Fotostapel zum Durchwischen, Blaulicht bei jedem Wechsel ---------- */
  $$('[data-bh]').forEach(m => {
    const w = m.closest('.sv-mw'), cs = $$('.bh-c', m), n = cs.length, num = $('[data-bh-n]', w);
    let top = 0, user = false, busy = false, tms = [];
    const lay = () => { cs.forEach((c, i) => { const p = (i - top + n) % n; c.dataset.pos = p < 3 ? p : 'h'; if (p === 0) c.removeAttribute('aria-hidden'); else c.setAttribute('aria-hidden', 'true'); });
      if (num) num.textContent = `${top + 1} / ${n}`; };
    const blink = () => { if (reduce) return; m.classList.remove('blink'); void m.offsetWidth; m.classList.add('blink'); };
    const touch = () => { user = true; tms.forEach(clearTimeout); tms = []; m.classList.add('touched'); };
    // Wechsel: oberste Karte fliegt zur Seite und legt sich hinten an; zurück holt die letzte Karte wieder nach oben
    const go = (d, dir = -1) => { if (busy) return;
      if (reduce || d < 0) { top = (top + d + n) % n; lay(); blink(); return; }
      busy = true; const c = cs[top]; c.classList.add('fly'); c.style.transform = `translate(${dir * 115}%, -4%) rotate(${dir * 16}deg)`;
      setTimeout(() => { c.classList.add('snap'); c.classList.remove('fly'); c.style.transform = ''; top = (top + 1) % n; lay(); void c.offsetWidth; c.classList.remove('snap'); busy = false; blink(); }, 420); };
    $('[data-bh-next]', w).addEventListener('click', () => { touch(); go(1); });
    $('[data-bh-prev]', w).addEventListener('click', () => { touch(); go(-1); });
    // Ziehen mit Maus oder Finger (senkrechtes Wischen scrollt nur die Seite), Klick ohne Ziehen = nächstes Foto
    let down = false, drag = false, sx = 0, sy = 0, dx = 0, pt = 'mouse';
    m.addEventListener('pointerdown', e => { if (busy || (e.pointerType === 'mouse' && e.button !== 0)) return; down = true; drag = false; sx = e.clientX; sy = e.clientY; dx = 0; pt = e.pointerType;
      if (pt === 'mouse') { drag = true; try { m.setPointerCapture(e.pointerId); } catch (_) {} } });
    m.addEventListener('pointermove', e => { if (!down) return; dx = e.clientX - sx;
      if (!drag) { if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - sy)) { drag = true; try { m.setPointerCapture(e.pointerId); } catch (_) {} } else return; }
      if (Math.abs(dx) > 4) { touch(); m.classList.add('drag'); }
      const c = cs[top]; c.classList.add('snap'); c.style.transform = `translateX(${dx}px) rotate(${dx * .04}deg)`; });
    const up = () => { if (!down) return; down = false; m.classList.remove('drag'); const c = cs[top]; c.classList.remove('snap');
      if (drag && Math.abs(dx) > m.clientWidth * .22) go(1, Math.sign(dx));
      else { c.style.transform = ''; if (drag && Math.abs(dx) < 5 && pt === 'mouse') { touch(); go(1); } }
      drag = false; };
    m.addEventListener('pointerup', up); m.addEventListener('pointercancel', () => { down = false; drag = false; m.classList.remove('drag'); cs[top].classList.remove('snap'); cs[top].style.transform = ''; });
    // Finger: Antippen ohne Wischen = nächstes Foto
    m.addEventListener('click', e => { if (pt !== 'mouse' && Math.abs(dx) < 5 && !e.target.closest('button')) { touch(); go(1); } });
    lay();
    // Selbst-Impuls: Blaulicht, dann zuckt die oberste Karte zur Seite und legt sich zurück
    onView(m, () => { blink(); if (reduce) return; tms.push(setTimeout(() => { if (user) return; m.classList.add('nudge'); tms.push(setTimeout(() => m.classList.remove('nudge'), 1300)); }, 1100)); }, .3);
  });

  /* ---------- 4K-Element: Scrollen = Kamera fährt an den Lack, Politur, Keramik (04.11.2026) ---------- */
  $$('.hdl').forEach(sec => {
    const cv = $('.hdl-cv', sec), ctx = cv.getContext('2d'), N = 121, poster = $('.hdl-poster', sec);
    const portrait = () => innerHeight > innerWidth * 1.05;
    let dir = portrait() ? 'm' : 'd';
    const src = i => `seq/hd/${dir}/h${String(i + 1).padStart(3, '0')}.webp`;
    if (dir === 'm') poster.src = src(0);
    let frames = new Array(N), cur = 0, shown = -1, started = false, oi = 0;
    const order = []; for (const st of [8, 4, 2, 1]) for (let i = 0; i < N; i += st) if (!order.includes(i)) order.push(i);
    const load = i => { if (frames[i]) return; const im = new Image(); im.decoding = 'async'; im.src = src(i); frames[i] = im; im.onload = () => { if (i === 0) sec.classList.add('ready'); if (Math.abs(i - cur) < 5) draw(cur, true); }; };
    const pump = () => { for (let k = 0; k < 4 && oi < order.length; k++, oi++) load(order[oi]); if (oi < order.length) setTimeout(pump, 90); };
    const start = () => { if (started) return; started = true; load(0); pump(); };
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { start(); io.disconnect(); } }, { rootMargin: '1200px 0px' }); io.observe(sec);
    const nearest = i => { for (let k = 0; k < N; k++) for (const j of [i - k, i + k]) if (j >= 0 && j < N && frames[j] && frames[j].complete && frames[j].naturalWidth) return frames[j]; return null; };
    function draw(i, force) { if (!force && i === shown) return; const im = nearest(i); if (!im) return; shown = i; const W = cv.width, H = cv.height, s = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * s, h = im.naturalHeight * s; ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h); }
    let lw = 0, lh = 0;
    const size = () => { const d = Math.min(devicePixelRatio || 1, 2), w = Math.round(cv.clientWidth * d), h = Math.round(cv.clientHeight * d); if (w === lw && Math.abs(h - lh) < 160 * d && lw) return; lw = w; lh = h; cv.width = w; cv.height = h;
      const nd = portrait() ? 'm' : 'd'; if (nd !== dir) { dir = nd; poster.src = src(0); if (started) { frames = new Array(N); oi = 0; load(cur); pump(); } } draw(cur, true); };
    addEventListener('resize', size); size();
    const hcs = $$('.hc', sec), steps = $$('.hdl-steps li', sec), bar = $('.hdl-bar i', sec);
    const vis = [[0, .3], [.36, .66], [.72, 1.02]];
    const phase = p => {
      hcs.forEach((f, i) => { const [a, b] = vis[i]; const o = p < a - .04 || p > b + .04 ? 0 : Math.min(1, (p - a + .04) / .05, (b + .04 - p) / .05); const v = i === 0 && p < .03 ? 1 : Math.max(0, o); f.style.opacity = v; f.style.transform = `translateY(${(1 - v) * 30}px)`; f.style.visibility = v > .02 ? 'visible' : 'hidden'; });
      const st = p < .34 ? 0 : p < .7 ? 1 : 2; steps.forEach((l, i) => l.classList.toggle('on', i === st)); bar.style.transform = `scaleX(${p})`;
      if (p > .02) sec.classList.add('moved');
    };
    let tgt = 0, fpos = 0, raf = 0;
    const tick = () => { raf = 0; fpos += (tgt - fpos) * .2; if (Math.abs(tgt - fpos) < .05) fpos = tgt; cur = Math.round(fpos); draw(cur); if (fpos !== tgt) raf = requestAnimationFrame(tick); };
    const prog = () => { const r = sec.getBoundingClientRect(); return Math.min(1, Math.max(0, -r.top / (sec.offsetHeight - innerHeight))); };
    const onScroll = () => { const p = prog(); tgt = p * (N - 1); if (!raf) raf = requestAnimationFrame(tick); phase(p); };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    // Abspielen: fährt den Abschnitt von selbst ab; jede eigene Bewegung übernimmt
    const pb = $('[data-hdl-play]', sec), pl = $('span', pb); let flying = false, fr = 0;
    const evs = ['wheel', 'touchstart', 'keydown'];
    const stop = txt => { if (!flying) return; flying = false; cancelAnimationFrame(fr); pb.classList.remove('on'); pl.textContent = txt || 'Weiter abspielen'; evs.forEach(ev => removeEventListener(ev, onUser)); };
    const onUser = e => { if (e.target && e.target.closest && e.target.closest('[data-hdl-play]')) return; stop(); };
    pb.addEventListener('click', () => {
      if (flying) return stop();
      pb.classList.add('used'); start();
      const top = sec.getBoundingClientRect().top + scrollY, end = top + sec.offsetHeight - innerHeight;
      const jump = y => window.feLenis ? window.feLenis.scrollTo(y, { immediate: true, force: true }) : scrollTo(0, y);
      let y0 = scrollY; if (y0 >= end - 6 || y0 < top - 2) { y0 = top; jump(top); }
      const D = Math.max(1500, (end - y0) / Math.max(1, end - top) * 15000), t0 = performance.now();
      flying = true; pb.classList.add('on'); pl.textContent = 'Anhalten';
      const st = now => { if (!flying) return; const q = Math.min(1, (now - t0) / D); jump(y0 + (end - y0) * q); if (q < 1) fr = requestAnimationFrame(st); else stop('Nochmal abspielen'); };
      fr = requestAnimationFrame(st);
      setTimeout(() => { if (flying) evs.forEach(ev => addEventListener(ev, onUser, { passive: true })); }, 60);
    });
    // Selbst-Impuls: kommt der Abschnitt ins Bild und niemand scrollt, zeigt der Lack kurz, was passiert (ein paar Bilder vor und zurück)
    let nudged = false;
    onView(sec, () => { if (reduce || nudged) return; nudged = true; setTimeout(() => { if (prog() > .02 || flying) return; let k = 0; const fw = () => { if (prog() > .02 || flying) return; k++; tgt = Math.min(14, k); if (!raf) raf = requestAnimationFrame(tick); if (k < 14) setTimeout(fw, 70); else setTimeout(() => { if (prog() <= .02 && !flying) { tgt = 0; if (!raf) raf = requestAnimationFrame(tick); } }, 900); }; fw(); }, 900); }, .5);
  });
})();
