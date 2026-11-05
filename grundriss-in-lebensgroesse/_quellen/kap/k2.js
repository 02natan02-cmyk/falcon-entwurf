// Kapitel 2 „Einrichten“: Schrank rein, verschieben, ändern, löschen
const { scene } = require('./lib.js');
const f = async S => {
  await S.sleep(300);
  S.mark('Schrank antippen – er kommt in die Küche');
  await S.click('[data-pal="p1"]', { ms: 550, post: 1200 });
  S.mark('Verschieben mit den Pfeilen');
  await S.click('.kp-pop [data-p="l"]', { ms: 500, post: 700 });
  await S.click('.kp-pop [data-p="l"]', { ms: 300, post: 900 });
  S.mark('Ändern: Breite und Art');
  await S.click('.kp-pop [data-p="w+"]', { ms: 500, post: 800 });
  await S.click('.kp-pop [data-p="t"]:not(.on)', { ms: 500, post: 1100 });
  S.mark('Löschen – mit Rückgängig');
  await S.click('.kp-pop [data-p="del"]', { ms: 550, post: 1800 });
};
f.setup = async S => {
  await S.ev(() => document.querySelector('[data-kgo="1"]').click()); await S.sleep(1500);
  await S.ev(() => scrollTo(0, 260)); await S.sleep(1200);
  const [x, y] = await S.center('[data-pal="p1"]'); await S.place(x + 60, y - 120); await S.sleep(800);
};
scene('k2_einrichten', true, f, { k: 0.08 });
