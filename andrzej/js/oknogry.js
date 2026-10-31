/* GardenBruk v9.8 – gry w osobnym oknie (telefon/tablet): pierwsze dotknięcie gry otwiera ją na całym ekranie, „✕ Wyjdź z gry” zamyka */
(function () {
  const pola = document.querySelector('.gry-pola'); if (!pola) return;
  const MOBI = () => innerWidth < 821 || matchMedia('(pointer: coarse)').matches;
  const NAZWY = { gUloz: 'Ułóż sam', gZgad: 'Co Andrzej układa?', gMem: 'Memory z kostki', gKos: 'Kostris' };
  const bar = document.createElement('div'); bar.className = 'gry-okno-pasek'; bar.hidden = true;
  bar.innerHTML = '<b id="gryOknoT">Gra</b><button type="button" id="gryOknoX">✕ Wyjdź z gry</button>';
  document.body.appendChild(bar);
  const tyt = bar.querySelector('#gryOknoT'), x = bar.querySelector('#gryOknoX');
  let akt = null, hist = false, y0 = 0;
  const odswiez = () => { dispatchEvent(new Event('resize')); requestAnimationFrame(() => dispatchEvent(new Event('resize'))); };
  function otworz(pole) {
    if (akt || !pole || pole.hidden || !MOBI()) return; akt = pole; y0 = scrollY;
    pole.classList.add('okno'); document.documentElement.classList.add('gra-okno'); bar.hidden = false; tyt.textContent = NAZWY[pole.id] || 'Gra';
    try { history.pushState({ graOkno: 1 }, ''); hist = true; } catch (e) { hist = false; }
    odswiez(); setTimeout(odswiez, 120);
  }
  function zamknij(zHistorii) {
    if (!akt) return; const p = akt; akt = null;
    p.classList.remove('okno'); document.documentElement.classList.remove('gra-okno'); bar.hidden = true;
    if (hist && !zHistorii) { hist = false; try { history.back(); } catch (e) { /* */ } } hist = false;
    scrollTo(0, y0); odswiez(); requestAnimationFrame(() => { const r = p.getBoundingClientRect(); if (r.top < 0 || r.bottom > innerHeight) p.scrollIntoView({ block: 'nearest' }); });
  }
  x.addEventListener('click', () => zamknij(false));
  addEventListener('popstate', () => { if (akt) zamknij(true); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && akt) zamknij(false); });
  // pierwsze dotknięcie gry: przyciski działają od razu (np. „Zagraj”), plansza najpierw otwiera okno
  pola.addEventListener('pointerdown', e => {
    if (akt || !MOBI()) return; const pole = e.target.closest('.gra-pole'); if (!pole) return;
    if (e.target.closest('a')) return;
    if (e.target.closest('button')) return; // przycisk: okno otwiera się przy kliknięciu, gra startuje od razu
    e.preventDefault(); e.stopPropagation(); otworz(pole);
  }, true);
  pola.addEventListener('click', e => { if (akt || !MOBI()) return; const pole = e.target.closest('.gra-pole'); if (pole && e.target.closest('button')) otworz(pole); }, true);
  pola.addEventListener('touchstart', e => { if (!akt && MOBI() && e.target.closest('.gra-pole') && !e.target.closest('button,a')) { e.stopPropagation(); } }, { capture: true, passive: true });
  window.GBoknoGry = { otworz: id => otworz(document.getElementById(id)), zamknij: () => zamknij(false), stan: () => (akt ? akt.id : '') };
})();
/* v9.8 – świat w tle lekko przyciemniony pod treścią (poza ekranem startowym), żeby pola z przodu były wyraźniejsze */
(function () {
  const sw = document.getElementById('swiat9'); if (!sw) return;
  const c = document.createElement('div'); c.className = 'cien-swiat'; c.setAttribute('aria-hidden', 'true'); sw.after(c);
  const hero = document.getElementById('start'); if (!hero) return;
  new IntersectionObserver(es => es.forEach(e => document.documentElement.classList.toggle('cien-on', e.intersectionRatio < .35)), { threshold: [0, .35, .6, 1] }).observe(hero);
})();
