// Kapitel 4 „Pläne & Anfrage“: Pläne ansehen, Daten eintragen, abschicken (es wird nichts gesendet)
const { scene } = require('./lib.js');
const F = '[data-kp-form] ';
const f = async S => {
  await S.sleep(300);
  S.mark('Pläne ansehen');
  await S.click('.kpx [data-kpx="plan"]', { ms: 550, post: 1600 });
  await S.click('.kpr [data-tab="inst"]', { ms: 550, post: 1500 });
  await S.click('.kpr .kpr-x', { ms: 550, post: 900 });
  S.mark('Name und E-Mail eintragen');
  await S.scrollToEl(F + '[name="Name"]', 380, 800);
  await S.click(F + '[name="Name"]', { ms: 500, post: 150 }); await S.type('Anna Beispiel', 42);
  await S.click(F + '[name="email"]', { ms: 500, post: 150 }); await S.type('anna@beispiel.de', 38);
  S.mark('Abschicken – fertig');
  await S.scrollToEl(F + 'button[type="submit"]', 520, 800);
  await S.hover(F + 'button[type="submit"]', { ms: 550, post: 1400 });
};
f.setup = async S => {
  await S.ev(() => document.querySelector('[data-kgo="3"]').click()); await S.sleep(1500);
  await S.ev(() => scrollTo(0, 0)); await S.sleep(800);
  const [x, y] = await S.center('.kpx [data-kpx="plan"]'); await S.place(x - 60, y + 90); await S.sleep(800);
};
scene('k4_senden', true, f, { k: 0.08 });
