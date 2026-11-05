// Aufnahme-Werkzeug für Planer-Clips: Zeiger-Overlay, sanfte Bewegungen, Marker zum exakten Schneiden.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const OUT = '/tmp/claude-0/-home-claude/633ed5eb-13e7-570d-b0a7-c0736854e344/scratchpad/kap/raw';
fs.mkdirSync(OUT, { recursive: true });
const URL0 = 'http://localhost:8840/grundriss-in-lebensgroesse/planer.html?nointro';

const CUR_CSS = `
#__cur{position:fixed;left:0;top:0;width:0;height:0;z-index:2147483647;pointer-events:none;opacity:0;transition:opacity .25s}
#__cur.on{opacity:1}
#__cur i{position:absolute;display:block;border-radius:50%;transition:transform .14s ease-out, background-color .14s}
#__cur.d i{width:20px;height:20px;left:-10px;top:-10px;background:rgba(24,22,20,.9);border:2.5px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.4);box-sizing:border-box}
#__cur.d.dn i{transform:scale(.78)}
#__cur.m i{width:52px;height:52px;left:-26px;top:-26px;background:rgba(255,255,255,.28);border:2.5px solid rgba(24,22,20,.55);box-shadow:0 4px 14px rgba(0,0,0,.28), inset 0 0 0 2px rgba(255,255,255,.55);box-sizing:border-box}
#__cur.m.dn i{transform:scale(.82);background:rgba(24,22,20,.28)}
.__rip{position:fixed;z-index:2147483646;pointer-events:none;width:0;height:0}
.__rip i{position:absolute;display:block;border-radius:50%;box-sizing:border-box;animation:__rip .65s cubic-bezier(.2,.7,.3,1) forwards}
.__rip.d i{width:20px;height:20px;left:-10px;top:-10px;border:3px solid rgba(24,22,20,.7)}
.__rip.m i{width:52px;height:52px;left:-26px;top:-26px;border:3px solid rgba(24,22,20,.55);background:rgba(255,255,255,.15)}
@keyframes __rip{from{transform:scale(.7);opacity:1}to{transform:scale(2.8);opacity:0}}
`;

function curInit(mob) {
  const install = () => {
    if (document.getElementById('__cur')) return;
    const st = document.createElement('style'); st.textContent = window.__CURCSS; document.head.appendChild(st);
    const c = document.createElement('div'); c.id = '__cur'; c.className = mob ? 'm' : 'd'; c.innerHTML = '<i></i>'; document.documentElement.appendChild(c);
    let x = -100, y = -100, anim = 0;
    const set = (nx, ny) => { x = nx; y = ny; c.style.left = x + 'px'; c.style.top = y + 'px'; };
    const rip = () => { const r = document.createElement('div'); r.className = '__rip ' + (mob ? 'm' : 'd'); r.innerHTML = '<i></i>'; r.style.left = x + 'px'; r.style.top = y + 'px'; document.documentElement.appendChild(r); setTimeout(() => r.remove(), 800); };
    window.__cur = {
      set, show() { c.classList.add('on'); }, hide() { c.classList.remove('on'); },
      pos: () => [x, y],
      down() { c.classList.add('dn'); rip(); }, up() { c.classList.remove('dn'); }, rip,
      glide(nx, ny, ms) { cancelAnimationFrame(anim); const x0 = x, y0 = y, t0 = performance.now(); const e = t => -(Math.cos(Math.PI * t) - 1) / 2;
        return new Promise(r => { const f = () => { const k = Math.min(1, (performance.now() - t0) / ms), q = e(k); set(x0 + (nx - x0) * q, y0 + (ny - y0) * q); if (k < 1) anim = requestAnimationFrame(f); else r(); }; anim = requestAnimationFrame(f); }); }
    };
    const fol = e => { if (window.__curLock) return; set(e.clientX, e.clientY); };
    addEventListener('pointermove', fol, { capture: true, passive: true });
    addEventListener('pointerdown', fol, { capture: true, passive: true });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install); else install();
}


function timeInit() {
  const pn = performance.now.bind(performance), dn = Date.now.bind(Date), b0 = pn(), d0 = dn();
  let aR = b0, aV = b0, k = 1;
  const v = () => aV + (pn() - aR) * k;
  window.__TS = { set(n) { aV = v(); aR = pn(); k = n; }, get k() { return k; }, now: v };
  performance.now = () => v();
  Date.now = () => d0 + (v() - b0);
  const raf = window.requestAnimationFrame.bind(window); window.requestAnimationFrame = cb => raf(() => cb(v()));
  const st = window.setTimeout.bind(window); window.setTimeout = (f, d, ...a) => st(f, (+d || 0) / k, ...a);
  const si = window.setInterval.bind(window); window.setInterval = (f, d, ...a) => si(f, (+d || 0) / k, ...a);
}

async function scene(name, mob, fn, opt = {}) {
  const tag = mob ? 'm' : 'd', K = opt.k || +process.env.K || 0.15;
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const ctxo = mob ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
    : { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 };
  const c = await b.newContext(ctxo);
  // Sicherheit: nie etwas senden
  await c.route(/hook\.(eu1|eu2|us1)\.make\.com|formsubmit\.co|web3forms|wa\.me|api\.whatsapp/, r => r.fulfill({ status: 200, body: '{}' }));
  await c.addInitScript(([css, mob]) => { try { sessionStorage.setItem('pel-intro3', '1'); sessionStorage.setItem('pel-oz2', '1'); localStorage.setItem('kp-film', '1'); sessionStorage.setItem('gil-lt', '1'); } catch (e) { } window.__CURCSS = css; }, [CUR_CSS, mob]);
  await c.addInitScript(timeInit);
  await c.addInitScript(curInit, mob);
  const p = await c.newPage(); const errs = [];
  p.on('pageerror', x => errs.push('PE ' + x.message.slice(0, 200))); p.on('console', m => { if (m.type() === 'error') errs.push('CE ' + m.text().slice(0, 160)); });
  const cdp = await c.newCDPSession(p);
  await p.goto(opt.url || URL0, { waitUntil: 'load' });
  await p.waitForFunction(() => document.querySelector('[data-kp-3d] canvas') && window.KP && KP.k3d && KP.k3d(), null, { timeout: 60000 }).catch(() => errs.push('3D nicht bereit'));
  await p.waitForTimeout(2500);
  await p.evaluate(() => { document.querySelectorAll('.kpfm').forEach(x => x.remove()); document.documentElement.style.scrollBehavior = 'auto'; });
  const ev = (f, a) => p.evaluate(f, a);
  const marks = [];
  let k = 1; // aktuelle Zeitlupe (1 = Echtzeit während Vorbereitung)
  const W = ms => p.waitForTimeout(ms / k);
  const now = () => Date.now();
  const S = {
    p, mob, cdp, errs, ev, file: f => f,
    mark: l => { marks.push([l, Math.round((now() - tA) * K)]); },
    sleep: ms => W(ms),
    async box(sel, i = 0) { const l = p.locator(sel).nth(i); await l.waitFor({ state: 'attached', timeout: 8000 }); return l.boundingBox(); },
    async center(sel, i = 0, fx = .5, fy = .5) { const bb = await S.box(sel, i); if (!bb) throw new Error('kein Ziel ' + sel); return [bb.x + bb.width * fx, bb.y + bb.height * fy]; },
    async place(x, y) { await ev(([x, y]) => { __cur.set(x, y); __cur.show(); }, [x, y]); if (!mob) await p.mouse.move(x, y); },
    async glide(x, y, ms = 700) {
      if (mob) { await ev(([x, y, ms]) => __cur.glide(x, y, ms), [x, y, ms]); return; }
      const [x0, y0] = await ev(() => __cur.pos()); const n = Math.max(10, Math.round(ms / 20)); const e = t => -(Math.cos(Math.PI * t) - 1) / 2;
      const t0 = now(), real = ms / k;
      for (let i = 1; i <= n; i++) { const q = e(i / n); await p.mouse.move(x0 + (x - x0) * q, y0 + (y - y0) * q); const w = t0 + real * i / n - now(); if (w > 0) await p.waitForTimeout(w); }
    },
    async press(x, y, hold = 110) {
      if (mob) { await ev(() => __cur.down()); await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] }); await W(hold); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await ev(() => __cur.up()); }
      else { await ev(() => __cur.down()); await p.mouse.down(); await W(hold); await p.mouse.up(); await ev(() => __cur.up()); }
    },
    async click(sel, o = {}) {
      const [x, y] = await S.center(sel, o.i || 0, o.fx ?? .5, o.fy ?? .5);
      await S.glide(x + (o.dx || 0), y + (o.dy || 0), o.ms || 700); await W(o.pre ?? 120); await S.press(x + (o.dx || 0), y + (o.dy || 0)); await W(o.post ?? 500);
      return [x, y];
    },
    async drag(x0, y0, x1, y1, ms = 1200, o = {}) {
      await S.glide(x0, y0, o.ms0 || 650); await W(120);
      const n = o.steps || Math.max(16, Math.round(ms / 20)); const e = t => -(Math.cos(Math.PI * t) - 1) / 2;
      const real = ms / k;
      if (mob) {
        await ev(() => __cur.down()); await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y: y0 }] });
        await W(o.hold || 140);
        const t0 = now();
        for (let i = 1; i <= n; i++) { const q = e(i / n), x = x0 + (x1 - x0) * q, y = y0 + (y1 - y0) * q; await ev(([x, y]) => __cur.set(x, y), [x, y]); await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] }); const w = t0 + real * i / n - now(); if (w > 0) await p.waitForTimeout(w); }
        await W(140); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await ev(() => __cur.up());
      } else {
        await ev(() => __cur.down()); await p.mouse.down(); await W(o.hold || 140);
        const t0 = now();
        for (let i = 1; i <= n; i++) { const q = e(i / n); await p.mouse.move(x0 + (x1 - x0) * q, y0 + (y1 - y0) * q); const w = t0 + real * i / n - now(); if (w > 0) await p.waitForTimeout(w); }
        await W(140); await p.mouse.up(); await ev(() => __cur.up());
      }
      await W(o.post ?? 400);
    },
    async scrollTo(sel, y, ms = 700) { await ev(([sel, y, ms]) => new Promise(r => { const el = sel ? document.querySelector(sel) : document.scrollingElement; const y0 = el.scrollTop, t0 = performance.now(); const f = () => { const kk = Math.min(1, (performance.now() - t0) / ms), q = -(Math.cos(Math.PI * kk) - 1) / 2; el.scrollTop = y0 + (y - y0) * q; if (kk < 1) requestAnimationFrame(f); else r(); }; requestAnimationFrame(f); }), [sel, y, ms]); await W(120); },
    async scrollYFor(sel, top) { return ev(([sel, top, mob]) => { const el = document.querySelector(sel); if (mob) return Math.max(0, el.getBoundingClientRect().top + scrollY - top); const pn = document.querySelector('.kp-panel'); return Math.max(0, el.getBoundingClientRect().top - pn.getBoundingClientRect().top + pn.scrollTop - top); }, [sel, top, mob]); },
    async scrollToEl(sel, top = 140, ms = 700) { const y = await S.scrollYFor(sel, top); await S.scrollTo(mob ? null : '.kp-panel', y, ms); },
    async jumpEl(sel, top = 140) { const y = await S.scrollYFor(sel, top); await ev(([y, mob]) => { const el = mob ? document.scrollingElement : document.querySelector('.kp-panel'); el.scrollTop = y; }, [y, mob]); await p.waitForTimeout(600); },
    async upload(clickSel, file, o = {}) { const fc = p.waitForEvent('filechooser', { timeout: 15000 }); await S.click(clickSel, { ...o, post: 30 }); const ch = await fc; await ch.setFiles(file); await W(o.post ?? 800); },
    hide: () => ev(() => __cur.hide()),
    async tap(x, y, o = {}) { await S.glide(x, y, o.ms || 700); await W(o.pre ?? 120); await S.press(x, y); await W(o.post ?? 500); },
    async hover(sel, o = {}) { const [x, y] = await S.center(sel, o.i || 0, o.fx ?? .5, o.fy ?? .5); await S.glide(x, y, o.ms || 700); await W(o.post ?? 400); },
    type: (t, d = 60) => p.keyboard.type(t, { delay: d / k }),
    waitFn: (fn, arg, ms = 90000) => p.waitForFunction(fn, arg, { timeout: ms, polling: 100 }),
  };
  // Rekorder: Screenshots in Zeitlupe, Zeitstempel in Echtzeit
  let rec = false, frames = [], tA = 0, tB = 0;
  const loop = async () => { while (rec) { const a = now(); try { const r = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 90, optimizeForSpeed: true }); frames.push({ t: (a + now()) / 2, d: r.data }); } catch (e) { break; } } };
  let ok = true, lp = null;
  try {
    if (fn.setup) await fn.setup(S);
    await p.waitForTimeout(500);
    await ev(k => __TS.set(k), K); await cdp.send('Animation.enable').catch(() => { }); await cdp.send('Animation.setPlaybackRate', { playbackRate: K }); k = K;
    rec = true; lp = loop(); await p.waitForTimeout(300); tA = now();
    await fn(S);
    tB = now(); await p.waitForTimeout(250); rec = false; await lp;
  } catch (er) { ok = false; rec = false; if (lp) await lp; errs.push('FEHLER ' + er.message.split('\n')[0]); try { await p.screenshot({ path: path.join(OUT, tag + '_' + name + '_err.png') }); } catch (e) { } }
  await c.close(); await b.close();
  // Bilder schreiben + 25-fps-Folge nach Seitenzeit
  const fd = path.join(OUT, tag + '_' + name); fs.rmSync(fd, { recursive: true, force: true }); fs.mkdirSync(fd, { recursive: true });
  const src = frames.map((f, i) => { const fn2 = path.join(fd, 's' + String(i).padStart(5, '0') + '.jpg'); fs.writeFileSync(fn2, Buffer.from(f.d, 'base64')); return { t: (f.t - tA) * K, f: fn2 }; });
  const dur = (tB - tA) * K, seq = [];
  if (ok && src.length) { let j = 0; for (let i = 0; i * 40 <= dur; i++) { const T = i * 40; while (j + 1 < src.length && Math.abs(src[j + 1].t - T) <= Math.abs(src[j].t - T)) j++; seq.push(src[j].f); } }
  seq.forEach((f, i) => fs.symlinkSync(f, path.join(fd, 'o' + String(i).padStart(5, '0') + '.jpg')));
  const gaps = src.slice(1).map((s2, i) => s2.t - src[i].t).filter(g => g > 0);
  fs.writeFileSync(path.join(OUT, tag + '_' + name + '.json'), JSON.stringify({ dir: fd, n: seq.length, dur, ok, errs, marks, uniq: new Set(seq).size, maxGap: Math.round(Math.max(0, ...gaps)), avgGap: Math.round(gaps.reduce((a, b) => a + b, 0) / (gaps.length || 1)) }));
  console.log(tag, name, ok ? 'ok' : 'FEHLER', 'dauer', (dur / 1000).toFixed(2), 's · Bilder', seq.length, 'eindeutig', new Set(seq).size, '· max. Lücke', Math.round(Math.max(0, ...gaps)), 'ms', errs.filter(x => !/GPU stall|WebGL|swiftshader|GL Driver/.test(x)).slice(0, 6).join(' | '));
}
module.exports = { scene };
