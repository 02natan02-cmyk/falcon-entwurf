/* Z&H Aufbereitung – Seite „Fahrzeuge“: Hof-Scan, Suche, Filter, Merkliste, Detailansicht (Vorschau mit Beispielbestand) */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  if (root.dataset.page !== 'fahrzeuge') return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let DATA = [];
  try { DATA = JSON.parse($('#fz-data').textContent); } catch (e) { DATA = []; }
  const byId = id => DATA.find(d => String(d.id) === String(id));
  const num = v => Number(v).toLocaleString('de-DE');
  const eur = v => num(v) + ' €';
  const dmy = iso => iso.split('-').reverse().join('.');
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const WA = t => 'https://wa.me/4917624401827?text=' + encodeURIComponent(t);
  const TEL = 'tel:+496841890200';
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const onView = (el, fn, thr = .3) => {
    if (!el) return;
    let done = false;
    const go = () => { if (done) return; done = true; io.disconnect(); removeEventListener('scroll', chk); fn(); };
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) go(); }, { threshold: thr });
    const chk = () => { const r = el.getBoundingClientRect(); if (r.height && r.top < innerHeight * (1 - thr * .5) && r.bottom > 0) go(); };
    io.observe(el); addEventListener('scroll', chk, { passive: true }); setTimeout(chk, 400);
  };
  const ICON_WA = ($('.fz-srcchip.wa svg') || {}).outerHTML || '';
  const ICON_SYNC = ($('.fz-srcchip.mob svg') || {}).outerHTML || '';

  const grid = $('[data-grid]');
  const cards = $$('.fz-card', grid);
  const cardOf = id => cards.find(c => c.dataset.id === String(id));

  /* ---------- Fahrzeug fährt ein (Räder drehen, Glanzlicht) ---------- */
  const drive = (el, delay = 0) => {
    if (reduce) return;
    setTimeout(() => { el.classList.remove('pre', 'drive'); void el.offsetWidth; el.classList.add('drive'); }, delay);
  };
  if (!reduce) cards.forEach(c => c.classList.add('pre'));
  cards.forEach((c, i) => onView(c, () => drive(c, (i % 2) * 140), .25));

  /* ---------- Hof-Scan: Pins erscheinen mit der Scan-Linie, dann Selbst-Impuls ---------- */
  const mon = $('[data-mon]'), frame = $('.fz-mon-v'), pins = $$('.fz-pin'), hint = $('[data-mon-hint]'), found = $('[data-found]');
  let pinTouched = false;
  if (hint && matchMedia('(hover:hover) and (pointer:fine)').matches) { const t = $('span', hint); if (t) t.textContent = 'Markiertes Auto anklicken'; }
  const placeLabel = p => {
    const fr = frame.getBoundingClientRect(), pr = p.getBoundingClientRect();
    const fx = (pr.left + pr.width / 2 - fr.left) / fr.width, fy = (pr.top + pr.height / 2 - fr.top) / fr.height;
    p.classList.toggle('al-l', fx < .24); p.classList.toggle('al-r', fx > .76); p.classList.toggle('v-b', fy < .34);
  };
  const stopCycle = () => { pinTouched = true; pins.forEach(p => p.classList.remove('show')); hint && hint.classList.add('on'); };
  pins.forEach(p => {
    p.addEventListener('click', () => { stopCycle(); open(p.dataset.pin, p); });
    p.addEventListener('mouseenter', () => { placeLabel(p); const c = cardOf(p.dataset.pin); c && c.classList.add('hl'); });
    p.addEventListener('mouseleave', () => { const c = cardOf(p.dataset.pin); c && c.classList.remove('hl'); });
    p.addEventListener('focus', () => placeLabel(p));
  });
  if (frame) frame.addEventListener('pointerdown', () => { pinTouched = true; }, { passive: true });
  const runScan = () => {
    const fr = frame.getBoundingClientRect();
    const items = pins.map(p => { const r = p.getBoundingClientRect(); return { p, y: Math.min(1, Math.max(0, (r.top + r.height / 2 - fr.top) / fr.height)), x: r.left }; });
    let n = 0;
    items.forEach(it => setTimeout(() => { it.p.classList.add('on'); n++; if (found) found.textContent = n; }, reduce ? 0 : 300 + it.y * 2250));
    if (reduce) { hint && hint.classList.add('on'); return; }
    const order = items.slice().sort((a, b) => a.x - b.x).map(it => it.p);
    let i = 0;
    const step = () => {
      if (pinTouched) return;
      pins.forEach(p => p.classList.remove('show'));
      if (i >= order.length) { hint && hint.classList.add('on'); return; }
      placeLabel(order[i]); order[i].classList.add('show'); i++;
      setTimeout(step, 1400);
    };
    setTimeout(step, 3000);
  };
  if (mon && frame && pins.length) onView(mon, () => { mon.classList.add('go'); runScan(); }, .35);

  /* ---------- Suche und Filter ---------- */
  const q = $('[data-q]');
  if (q && innerWidth >= 600) q.placeholder = 'Marke, Modell oder Ausstattung – z. B. Automatik';
  const slider = $('[data-max]'), maxv = $('[data-maxv]'), maxhint = $('[data-maxhint]');
  const countEl = $('[data-fz-n]'), countL = $('[data-countl]'), empty = $('[data-empty]'), wish = $('[data-wish]');
  const chips = $$('.fz-chips [data-body]'), favChip = $('[data-favonly]'), sorts = $$('[data-sort]');
  const MAX = slider ? +slider.max : Infinity;
  const st = { q: '', body: '', max: MAX, sort: 'neu', fav: false };
  let favs = new Set();
  try { favs = new Set(JSON.parse(store.get('zh-fz-merk') || '[]').map(String)); } catch (e) { favs = new Set(); }

  const GEAR = { automatik: 'Automatik', automatic: 'Automatik', automat: 'Automatik', schaltgetriebe: 'Schaltgetriebe', schalter: 'Schaltgetriebe', handschalter: 'Schaltgetriebe', manuell: 'Schaltgetriebe' };
  const matches = c => {
    if (st.body && c.dataset.kind !== st.body) return false;
    if (+c.dataset.price > st.max) return false;
    if (st.fav && !favs.has(c.dataset.id)) return false;
    if (st.q) {
      // „Automatik“ meint das Getriebe – nicht die Klimaautomatik
      const d = byId(c.dataset.id), hay = norm(c.dataset.q + ' ' + c.dataset.price);
      return norm(st.q).split(/\s+/).filter(Boolean).every(w => GEAR[w] ? !!d && d.gear === GEAR[w] : hay.includes(w));
    }
    return true;
  };
  const sorter = (a, b) => st.sort === 'preis' ? a.dataset.price - b.dataset.price : st.sort === 'km' ? a.dataset.km - b.dataset.km : (a.dataset.added < b.dataset.added ? 1 : -1);
  const visibleOrder = () => cards.filter(matches).sort(sorter);
  const setCount = n => {
    if (countEl) countEl.textContent = n;
    if (countL) countL.textContent = n === cards.length ? (n === 1 ? 'Fahrzeug' : 'Fahrzeuge') : `von ${cards.length} Fahrzeugen`;
  };
  const updateWish = () => {
    if (!wish) return;
    const parts = [];
    const chip = chips.find(c => c.dataset.body === st.body && st.body);
    if (chip) parts.push(chip.textContent.replace(/\d+/g, '').trim());
    if (st.q) parts.push(st.q.trim());
    if (st.max < MAX) parts.push('bis ' + eur(st.max));
    wish.href = WA('Hallo Z&H, ich suche ein Auto' + (parts.length ? ': ' + parts.join(', ') : '') + '. Bitte melden Sie sich, wenn etwas Passendes auf den Hof kommt.');
  };
  let busy = false, pending = false, lastSig = '';
  const apply = () => {
    if (busy) { pending = true; return; }
    const vis = visibleOrder();
    const shown = cards.filter(c => !c.hidden);
    const leaving = shown.filter(c => !vis.includes(c));
    const finish = () => {
      const staying = vis.filter(c => !c.hidden);
      const first = new Map(staying.map(c => [c, c.getBoundingClientRect()]));
      leaving.forEach(c => { c.hidden = true; c.style.opacity = ''; });
      vis.forEach(c => grid.appendChild(c));
      const entering = vis.filter(c => c.hidden);
      entering.forEach(c => { c.hidden = false; });
      if (!reduce) {
        staying.forEach(c => {
          const f = first.get(c), l = c.getBoundingClientRect(), dx = f.left - l.left, dy = f.top - l.top;
          if (Math.abs(dx) + Math.abs(dy) > 1) c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 560, easing: 'cubic-bezier(.2,.7,.1,1)' });
        });
        entering.forEach((c, i) => { c.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: i * 80, easing: 'ease-out', fill: 'backwards' }); drive(c, i * 80); });
      }
      setCount(vis.length);
      if (empty) empty.hidden = vis.length > 0;
      updateWish();
      lastSig = vis.map(c => c.dataset.id).join(',');
      busy = false;
      if (pending) { pending = false; apply(); }
    };
    if (leaving.length && !reduce) {
      busy = true;
      leaving.forEach(c => { c.classList.remove('drive', 'pre'); c.classList.add('away'); c.animate([{ opacity: 1 }, { opacity: 0, transform: 'scale(.97)' }], { duration: 380, delay: 60, easing: 'ease-in', fill: 'forwards' }); });
      setTimeout(() => { leaving.forEach(c => { c.classList.remove('away'); c.getAnimations().forEach(a => a.cancel()); }); finish(); }, 460);
    } else finish();
  };
  const applyIfChanged = () => { const sig = visibleOrder().map(c => c.dataset.id).join(','); if (sig !== lastSig) apply(); };

  let qT;
  if (q) q.addEventListener('input', () => { clearTimeout(qT); qT = setTimeout(() => { st.q = q.value; apply(); }, 160); });
  if (q) q.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); q.blur(); } });
  chips.forEach(b => b.addEventListener('click', () => {
    chips.forEach(x => x.classList.toggle('on', x === b)); st.body = b.dataset.body; apply();
  }));
  sorts.forEach(b => b.addEventListener('click', () => { sorts.forEach(x => x.classList.toggle('on', x === b)); st.sort = b.dataset.sort; apply(); }));

  // Preisregler mit Selbst-Impuls (fährt einmal herunter und zurück, die Autos fahren live raus und wieder rein)
  let sliderTouched = false;
  const showMax = v => { if (maxv) maxv.textContent = v >= MAX ? eur(MAX) : eur(v); };
  const touchSlider = () => { if (sliderTouched) return; sliderTouched = true; maxhint && maxhint.classList.remove('on'); };
  if (slider) {
    ['pointerdown', 'touchstart', 'keydown'].forEach(ev => slider.addEventListener(ev, touchSlider, { passive: true }));
    slider.addEventListener('input', () => { st.max = +slider.value; showMax(st.max); applyIfChanged(); });
    onView($('.fz-bar'), () => {
      if (reduce) { maxhint && maxhint.classList.add('on'); return; }
      setTimeout(() => {
        if (sliderTouched) return;
        const lo = Math.max(+slider.min, 15000), t0 = performance.now(), dur = 2800;
        const tick = now => {
          if (sliderTouched) return;
          const p = Math.min(1, (now - t0) / dur), e = Math.sin(p * Math.PI);
          const v = Math.round((MAX - (MAX - lo) * (e * e * (3 - 2 * e))) / 500) * 500;
          slider.value = v; st.max = v; showMax(v); applyIfChanged();
          if (p < 1) requestAnimationFrame(tick); else { slider.value = MAX; st.max = MAX; showMax(MAX); applyIfChanged(); maxhint && maxhint.classList.add('on'); }
        };
        requestAnimationFrame(tick);
      }, 1500);
    }, .6);
  }

  // Merkliste
  const saveFav = () => store.set('zh-fz-merk', JSON.stringify([...favs]));
  const syncFav = () => {
    cards.forEach(c => { const b = $('.fz-fav', c); if (b) b.setAttribute('aria-pressed', favs.has(c.dataset.id)); });
    if (favChip) { favChip.hidden = favs.size === 0; $('i', favChip).textContent = favs.size; if (!favs.size && st.fav) { st.fav = false; favChip.classList.remove('on'); apply(); } }
  };
  cards.forEach(c => { const b = $('.fz-fav', c); if (!b) return; b.addEventListener('click', () => {
    const id = c.dataset.id; favs.has(id) ? favs.delete(id) : favs.add(id); saveFav(); syncFav();
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    if (st.fav) apply();
  }); });
  if (favChip) favChip.addEventListener('click', () => { st.fav = !st.fav; favChip.classList.toggle('on', st.fav); apply(); });
  const reset = $('[data-reset]');
  if (reset) reset.addEventListener('click', () => {
    st.q = ''; st.body = ''; st.max = MAX; st.fav = false;
    if (q) q.value = ''; if (slider) { slider.value = MAX; showMax(MAX); }
    chips.forEach(x => x.classList.toggle('on', x.dataset.body === '')); favChip && favChip.classList.remove('on');
    apply();
  });
  syncFav(); lastSig = visibleOrder().map(c => c.dataset.id).join(','); updateWish();

  /* ---------- Ankauf: Schritte erscheinen ---------- */
  const steps = $('[data-steps]');
  onView(steps, () => steps.classList.add('in'), .2);

  /* ---------- Detailansicht ---------- */
  const sheet = $('[data-sheet]'), box = $('.fz-sheet-box');
  const S = k => $(`[data-s-${k}]`, sheet);
  let isOpen = false, curId = null, opener = null, pushed = false, hideT;
  const order = () => { const v = visibleOrder().map(c => c.dataset.id); return v.includes(String(curId)) ? v : DATA.map(d => String(d.id)); };
  const odo = (el, value) => {
    const s = num(value);
    el.innerHTML = [...s].map(ch => /\d/.test(ch) ? `<span class="od"><span>${'0123456789'.split('').map(n => `<i>${n}</i>`).join('')}</span></span>` : `<span class="sep">${ch}</span>`).join('');
    el.setAttribute('aria-label', s + ' Kilometer');
    const ds = $$('.od>span', el), digits = s.replace(/\D/g, '');
    if (reduce) { ds.forEach((d, i) => { d.style.transition = 'none'; d.style.transform = `translateY(-${+digits[i] * 1.1}em)`; }); return; }
    void el.offsetWidth;
    requestAnimationFrame(() => ds.forEach((d, i) => { d.style.transitionDelay = (i * 90) + 'ms'; d.style.transform = `translateY(-${+digits[i] * 1.1}em)`; }));
  };
  const fill = id => {
    const d = byId(id), c = cardOf(id);
    if (!d || !c) return;
    curId = d.id;
    const svg = $('.fz-car', c).outerHTML.replace(/id="([a-z])(\d+)"/g, 'id="$1$2s"').replace(/url\(#([a-z])(\d+)\)/g, 'url(#$1$2s)');
    const stage = S('stage'); stage.innerHTML = svg; stage.classList.remove('drive'); void stage.offsetWidth; if (!reduce) stage.classList.add('drive');
    const ord = order(); S('pos').textContent = `${ord.indexOf(String(d.id)) + 1} / ${ord.length}`;
    S('src').className = 'fz-src ' + d.src;
    S('src').innerHTML = (d.src === 'wa' ? ICON_WA + '<span>Per WhatsApp eingestellt · ' : ICON_SYNC + '<span>Automatisch aus mobile.de · ') + dmy(d.added) + '</span>';
    S('t').innerHTML = `<span>${esc(d.make)}</span> ${esc(d.model)}`;
    S('v').textContent = d.variant;
    S('res').hidden = d.status !== 'reserviert';
    S('p').textContent = eur(d.price);
    S('facts').innerHTML = [['Erstzulassung', d.ez], ['Kilometer', num(d.km) + ' km'], ['Leistung', `${d.kw} kW (${d.ps} PS)`], ['Kraftstoff', d.fuel], ['Getriebe', d.gear_l], ['Farbe', d.color], ['HU bis', d.hu], ['Vorbesitzer', d.owners], ['Karosserie', d.body], ['Fahrzeug-Nr.', d.id]]
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    S('eq').innerHTML = d.equip.map(e => `<li>${e}</li>`).join('');
    S('prep').innerHTML = d.prep.map((p, i) => `<li><a href="leistungen.html#${d.prepLinks[i]}">${p}</a></li>`).join('');
    S('txt').textContent = d.text;
    const name = `${d.make} ${d.model}`;
    S('cta').innerHTML = `<a class="btn btn-wa wide" href="${WA(`Hallo Z&H, ich interessiere mich für den ${name} (Nr. ${d.id}, ${eur(d.price)}). Ist er noch zu haben?`)}" target="_blank" rel="noopener">${ICON_WA}Per WhatsApp anfragen</a>`
      + `<a class="btn btn-aqua" href="${TEL}">Anrufen</a>`
      + `<a class="btn btn-line" href="${WA(`Hallo Z&H, ich würde den ${name} (Nr. ${d.id}) gern Probe fahren. Wann passt es Ihnen?`)}" target="_blank" rel="noopener">Probefahrt</a>`
      + `<a class="fzs-trade" href="${WA(`Hallo Z&H, ich interessiere mich für den ${name} (Nr. ${d.id}) und möchte mein jetziges Auto in Zahlung geben.\nMarke und Modell: \nBaujahr: \nKilometer: `)}" target="_blank" rel="noopener">Eigenes Auto in Zahlung geben <span aria-hidden="true">→</span></a>`;
    odo(S('odo'), d.km);
    box.scrollTop = 0;
  };
  const open = (id, from, { push = true } = {}) => {
    if (!byId(id)) return;
    clearTimeout(hideT);
    opener = from || document.activeElement;
    fill(id);
    if (!isOpen) {
      sheet.hidden = false; void sheet.offsetWidth; sheet.classList.add('open');
      root.classList.add('fz-lock'); isOpen = true;
      setTimeout(() => { const x = $('.fz-x', sheet); x && x.focus({ preventScroll: true }); }, 60);
    }
    try {
      if (push) { history.pushState({ fz: String(id) }, '', '#fz-' + id); pushed = true; }
      else history.replaceState({ fz: String(id) }, '', '#fz-' + id);
    } catch (e) {}
  };
  const hide = () => {
    if (!isOpen) return;
    isOpen = false; sheet.classList.remove('open'); root.classList.remove('fz-lock');
    hideT = setTimeout(() => { sheet.hidden = true; S('stage').innerHTML = ''; }, 560);
    if (opener && document.contains(opener)) { try { opener.focus({ preventScroll: true }); } catch (e) {} }
  };
  const close = () => {
    if (!isOpen) return;
    hide();
    try {
      if (pushed) { pushed = false; history.back(); }
      else history.replaceState(null, '', location.pathname + location.search);
    } catch (e) {}
  };
  const go = dir => {
    const ord = order(); if (!ord.length) return;
    const i = ord.indexOf(String(curId)), nid = ord[(i + dir + ord.length) % ord.length];
    fill(nid);
    try { history.replaceState({ fz: nid }, '', '#fz-' + nid); } catch (e) {}
  };
  addEventListener('popstate', e => {
    const s = e.state;
    if (s && s.fz) { if (isOpen) fill(s.fz); else open(s.fz, null, { push: false }); }
    else if (isOpen) { pushed = false; hide(); }
  });
  cards.forEach(c => $$('[data-open]', c).forEach(b => b.addEventListener('click', () => open(c.dataset.id, b))));
  $$('[data-close]', sheet).forEach(b => b.addEventListener('click', close));
  $('[data-prev]', sheet).addEventListener('click', () => go(-1));
  $('[data-next]', sheet).addEventListener('click', () => go(1));
  addEventListener('keydown', e => {
    if (!isOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'Tab') {
      const f = $$('a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])', box).filter(x => x.offsetParent !== null);
      if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });
  // Wischen über das Auto: nächstes / vorheriges Fahrzeug
  let tx = null, ty = null;
  const stageEl = S('stage');
  stageEl.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  stageEl.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 60) go(dx < 0 ? 1 : -1);
  }, { passive: true });

  // Direktlink #fz-1048 öffnet das Fahrzeug
  const m = location.hash.match(/^#fz-(\d+)$/);
  if (m && byId(m[1])) setTimeout(() => open(m[1], null, { push: false }), 650);
})();
