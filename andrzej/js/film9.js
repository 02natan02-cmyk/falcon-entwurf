/* GardenBruk v9.4 · „Film“: die Geschichte startet von selbst.
   Natan 31.10. 11:05: „… das muss von alleine anfangen mitzulaufen … wie bei Apple … die Geschichte, Punkte 1 und 2 von sich aus aufbaut,
   wie ein Film … und dann man selbst weiter scrollen muss … jetzt bist du dran.“
   Ablauf: nach dem Intro 3 s Ruhe → die Seite fährt sanft in die Historia (Ziemia → Podsypka). Wer selbst anfängt zu scrollen und loslässt,
   bekommt dieselbe Fahrt bis zum Ende von Punkt 2. Danach „Teraz Ty!“. Wer dann nichts tut, dem zeigt die Seite zweimal kurz die Richtung.
   Jede eigene Berührung, Rad- oder Tastenbewegung beendet die Fahrt sofort. */
(() => {
  const H = document.getElementById('historia'); if (!H) return;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  let auto = null, gefahren = false, tipp = null, ostScroll = 0, ostEingabe = 0, bereit = false, stupsT = 0, gestupst = 0;
  const ziel = () => H.offsetTop + .30 * Math.max(0, H.offsetHeight - innerHeight);   // Ende von Punkt 2 (Podsypka)
  const e3 = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
  function stop() { if (auto) { cancelAnimationFrame(auto.raf); auto = null; root.classList.remove('film'); } }
  function fahr(y1, ms, fertig) {
    stop(); const y0 = scrollY, t0 = performance.now(); root.classList.add('film'); auto = { raf: 0 };
    const f = n => { if (!auto) return; const k = Math.min(1, (n - t0) / ms); scrollTo(0, y0 + (y1 - y0) * e3(k));
      if (k < 1) auto.raf = requestAnimationFrame(f); else { auto = null; root.classList.remove('film'); fertig && fertig(); } };
    auto.raf = requestAnimationFrame(f);
  }
  const eingabe = () => { ostEingabe = performance.now(); if (auto) stop(); weg(); clearTimeout(stupsT); };
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(ev => addEventListener(ev, eingabe, { passive: true }));
  addEventListener('scroll', () => { ostScroll = performance.now(); if (tipp && !auto && performance.now() - ostEingabe < 1500) weg(); }, { passive: true });

  function film() {
    if (gefahren || RM) return; const y1 = ziel(); if (scrollY >= y1 - 20) { gefahren = true; return; }
    gefahren = true; const ms = Math.min(7200, Math.max(2600, (y1 - scrollY) * 4.6));
    fahr(y1, ms, terazTy);
  }
  function terazTy() {
    weg(); tipp = document.createElement('div'); tipp.className = 'teraz-ty'; tipp.setAttribute('aria-hidden', 'true');
    tipp.innerHTML = '<b>Teraz Ty!</b><span>Przewiń dalej. Podjazd buduje się razem z Tobą.</span><i></i>';
    document.body.appendChild(tipp); requestAnimationFrame(() => tipp && tipp.classList.add('on'));
    clearTimeout(stupsT); stupsT = setTimeout(stups, 3800);
  }
  function weg() { if (!tipp) return; const t = tipp; tipp = null; t.classList.remove('on'); setTimeout(() => t.remove(), 450); }
  // zweimal kurz nach unten „stupsen“ (die Seite zeigt die Richtung), höchstens zweimal pro Besuch
  function stups() {
    if (!tipp || auto || gestupst >= 2 || RM) return; gestupst++; const y = scrollY;
    fahr(y + 46, 230, () => fahr(y, 260, () => fahr(y + 30, 200, () => fahr(y, 240, () => { stupsT = setTimeout(stups, 5000); }))));
  }
  // Start: 3 s nach dem Intro, wenn noch ganz oben und niemand etwas getan hat
  function start() {
    if (bereit) return; bereit = true;
    if (location.hash.length > 1 || scrollY > 40) { gefahren = scrollY > ziel(); return; }
    setTimeout(() => { if (!gefahren && scrollY < 40 && performance.now() - ostEingabe > 1800) film(); }, 2000);
  }
  addEventListener('intro-koniec', start);
  const warte = setInterval(() => { if (document.body.classList.contains('odslona')) { clearInterval(warte); setTimeout(start, 400); } }, 300);
  // Wer selbst losscrollt: sobald das Scrollen zur Ruhe kommt (auch nach Schwung) und man zwischen Start und Punkt 2 steht, fährt die Seite weiter
  setInterval(() => {
    if (gefahren || auto || !bereit) return; const now = performance.now();
    if (now - ostScroll < 380 || now - ostEingabe < 380) return;
    const y = scrollY, y1 = ziel();
    if (y > 60 && y < y1 - 40) film(); else if (y >= y1 - 40) gefahren = true;
  }, 200);
})();
