// Erklärmodus Kapitel 1 „Form & Raum“ – ein durchgehender Handy-Clip mit Markern (Natan 05.11.: Schritt für Schritt, Handy oben, darunter kurz erklärt)
const { scene } = require('./lib.js');
const thumb = (S, sel, v) => S.ev(([sel, v]) => { const e = document.querySelector(sel), b = e.getBoundingClientRect(), mn = +e.min, mx = +e.max, val = v == null ? +e.value : v; return [b.left + 8 + (b.width - 16) * (val - mn) / (mx - mn), b.top + b.height / 2]; }, [sel, v]);
const cxp = (S, t) => S.ev(t => { const g = [...document.querySelectorAll('[data-kp-plan] [data-cxp]')].find(g => { const c = KP.edit.cxs().find(x => String(x.id) === g.dataset.cxp); return c && c.t === t; }); if (!g) return null; const b = g.getBoundingClientRect(); return [b.x + b.width / 2, b.y + b.height / 2]; }, t);
const win = S => S.ev(() => { const g = [...document.querySelectorAll('[data-kp-plan] [data-pop]')].find(g => /Fenster/.test(g.textContent)); const b = g.getBoundingClientRect(); return [b.x + b.width / 2, b.y + b.height / 2]; });
const f = async S => {
  await S.sleep(300);
  S.mark('Form wählen');
  await S.click('[data-form="l"]', { post: 1700 });
  S.mark('Raumgröße einstellen');
  await S.scrollToEl('[data-kp-rw]', 420, 900); await S.sleep(200);
  let [x0, y0] = await thumb(S, '[data-kp-rw]'); let [x1] = await thumb(S, '[data-kp-rw]', 560);
  await S.drag(x0, y0, x1, y0, 1400, { post: 900, steps: 9 });
  S.mark('Wasser und Strom eintragen');
  await S.scrollToEl('[data-addcx="wasser"]', 470, 900); await S.sleep(200);
  await S.click('[data-addcx="wasser"]', { ms: 550, post: 500 });
  await S.scrollToEl('[data-kp-plan]', 345, 700);
  const w = await cxp(S, 'wasser');
  await S.drag(w[0], w[1], w[0] + 70, w[1], 1100, { ms0: 520, post: 800, steps: 12 });
  S.mark('Fenster an die richtige Stelle');
  const [fx, fy] = await win(S);
  await S.drag(fx, fy, fx + 60, fy, 1500, { ms0: 600, post: 1400, steps: 16 });
};
f.setup = async S => {
  await S.ev(() => document.querySelector('[data-form="zeile"]').click()); await S.sleep(1500);
  await S.jumpEl('[data-kp-forms]', 330);
  const [x, y] = await S.center('[data-form="zeile"]'); await S.place(x + 60, y + 120); await S.sleep(1000);
};
scene('k1_raum', true, f, { k: 0.08 });
