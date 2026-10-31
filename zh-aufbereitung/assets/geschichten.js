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
    const q = $('[data-vn-q]', w), sws = $$('[data-vn-s]', w), ps = $$('[data-vn-p]', w);
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
      ps.forEach((b, k) => b.setAttribute('aria-pressed', k === j ? 'true' : 'false')); q.textContent = p.q;
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
})();
