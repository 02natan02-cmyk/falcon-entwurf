/* GardenBruk v9.8 – gry w osobnym oknie (telefon/tablet): pierwsze dotknięcie gry otwiera ją na całym ekranie, „✕ Wyjdź z gry” zamyka */
(function () {
  const pola = document.querySelector('.gry-pola'); if (!pola) return;
  const MOBI = () => innerWidth < 821 || matchMedia('(pointer: coarse)').matches;
  const znak = () => document.documentElement.classList.toggle('gry-mobi', MOBI()); znak(); addEventListener('resize', znak);
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
  // v12: na telefonie gra otwiera się tylko przyciskiem („▶ Zagraj”); plansza na stronie nie reaguje na dotyk, więc strona zawsze się przewija
  pola.addEventListener('click', e => { if (akt || !MOBI()) return; const pole = e.target.closest('.gra-pole'); if (pole && e.target.closest('button')) otworz(pole); }, true);
  window.GBoknoGry = { otworz: id => otworz(document.getElementById(id)), zamknij: () => zamknij(false), stan: () => (akt ? akt.id : '') };
})();
