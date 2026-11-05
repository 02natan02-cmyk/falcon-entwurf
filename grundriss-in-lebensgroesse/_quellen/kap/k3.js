// Kapitel 3 „Design“: Farbwelt, Fronten und Griffe, eigenes Foto als Rückwand
const { scene } = require('./lib.js');
const IMG = '/tmp/claude-0/-home-claude/633ed5eb-13e7-570d-b0a7-c0736854e344/scratchpad/kap/motiv.jpg';
const f = async S => {
  await S.sleep(300);
  S.mark('Farbwelt wählen');
  await S.click('[data-kp-worlds] button:nth-child(5)', { ms: 550, post: 2200 });
  S.mark('Fronten und Griffe');
  await S.scrollToEl('[data-kp-fronts]', 380, 800);
  await S.click('[data-kp-fronts] button:nth-child(3)', { ms: 500, post: 700 });
  await S.scrollToEl('[data-kp-handles]', 380, 700);
  await S.click('[data-kp-handles] button:nth-child(4)', { ms: 500, post: 900 });
  S.mark('Eigenes Foto als Rückwand');
  await S.scrollToEl('[data-kp-backs]', 380, 800);
  await S.click('[data-kp-backs] [data-e="back"][data-v="motiv"]', { ms: 600, post: 700 });
  await S.upload('[data-e="motif"]', IMG, { ms: 550, post: 2400 });
};
f.setup = async S => {
  await S.ev(() => document.querySelector('[data-kgo="2"]').click()); await S.sleep(1500);
  await S.ev(() => KP.k3d().view && KP.k3d().view('perspektive')); await S.sleep(1500);
  await S.jumpEl('[data-kp-worlds]', 345);
  const [x, y] = await S.center('[data-kp-worlds] button:nth-child(5)'); await S.place(x + 60, y - 120); await S.sleep(800);
};
scene('k3_design', true, f, { k: 0.08 });
