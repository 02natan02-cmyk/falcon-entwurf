/* GardenBruk v9 – „Załaduj wózek”.
   Klient wybiera towar od producentów (Polbruk, Joniec) i z placu, ładuje go na wózek widłowy,
   a Andrzej na wózku wwozi paletę na ciężarówkę. Zamówienie idzie WhatsAppem albo mailem.
   Scena: jedno SVG, animacja tylko w czasie ruchu (requestAnimationFrame), reszta stoi. */
(function () {
  'use strict';
  const K = window.GBkosz; if (!K) return;
  const NS = 'http://www.w3.org/2000/svg', RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v)), lerp = (a, b, t) => a + (b - a) * t;
  const eio = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, ein = t => t * t * t, eout = t => 1 - Math.pow(1 - t, 3);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const GY = 412, SW = 1200, SH = 460, FX0 = 120, TX0 = 690;
  const GB = 'M30 6H12a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h18V18H17v6h6v4H13V12h17z M34 6h18a6 6 0 0 1 6 6v3a5 5 0 0 1-3 4.6A5.5 5.5 0 0 1 58 24v4a6 6 0 0 1-6 6H34zm7 6v5h10v-5zm0 11v5h10v-5z';

  /* ---------- katalog: prawdziwe linie z katalogów producentów ---------- */
  const PB = 'https://polbruk.pl/download/cenniki_katalogi/cennik/Katalog_Polbruk_2026.pdf', JN = 'https://joniec.pl/gdzie-kupic/gardenbruk/493';
  const KOLORY = { grafit: '#3c3d40', szary: '#8f8d88', melanz: '#8a7766', piaskowy: '#cdb388', braz: '#7d5b45', bialy: '#e3dfd6', onyx: '#2d2d2f', piryt: '#706a60', silver: '#b9b8b3', getyt: '#8a6a4b', alaska: '#dcd9d1', marengo: '#4b4c50', granit: '#8e8d89' };
  const NKOL = { grafit: 'Grafit', szary: 'Szary', melanz: 'Melanż', piaskowy: 'Piaskowy', braz: 'Brąz', bialy: 'Biały', onyx: 'Onyx', piryt: 'Piryt', silver: 'Silver', getyt: 'Getyt', alaska: 'Alaska', marengo: 'Marengo', granit: 'Granit' };
  const MARKI = {
    polbruk: { nazwa: 'Polbruk', katalog: PB, produkty: [
      { id: 'pb-kostka', nazwa: 'Kostka brukowa', rodzaj: 'kostka', jedn: 'm²', ile: 60, linie: ['Napoli', 'Trento', 'Nostalite', 'Avanti', 'Oland', 'Granito', 'Lumia', 'Petra', 'Metrik', 'Holland', 'Behaton'], grub: ['6 cm', '8 cm'], kolory: ['grafit', 'szary', 'melanz', 'piaskowy', 'braz'] },
      { id: 'pb-plyty', nazwa: 'Płyty tarasowe i chodnikowe', rodzaj: 'plyty', jedn: 'm²', ile: 30, typy: ['Tarasowe', 'Chodnikowe', 'Wielkoformatowe'], kolory: ['bialy', 'szary', 'grafit', 'piaskowy'] },
      { id: 'pb-obrzeza', nazwa: 'Obrzeża', rodzaj: 'obrzeza', jedn: 'mb', ile: 40, linie: ['Canto', 'Palinea'], kolory: ['grafit', 'szary'] }] },
    joniec: { nazwa: 'Joniec', katalog: JN, produkty: [
      { id: 'jn-gorc', nazwa: 'Ogrodzenie łupane', rodzaj: 'lupane', jedn: 'mb', ile: 25, linie: ['GORC', 'GORC de Luxe'], kolory: ['onyx', 'piryt', 'silver', 'getyt', 'alaska'] },
      { id: 'jn-roma', nazwa: 'Ogrodzenie modułowe', rodzaj: 'modulowe', jedn: 'mb', ile: 25, linie: ['ROMA Classic', 'ROMA Horizon', 'ROMA Mega', 'ROMA Lite'], kolory: ['onyx', 'piryt', 'marengo', 'silver'] },
      { id: 'jn-tora', nazwa: 'Daszki na murki i słupki', rodzaj: 'modulowe', jedn: 'szt.', ile: 20, linie: ['TORA'], kolory: ['onyx', 'piryt'] },
      { id: 'jn-palisady', nazwa: 'Palisady', rodzaj: 'palisady', jedn: 'szt.', ile: 30, kolory: ['szary', 'grafit', 'piaskowy'] }] },
    plac: { nazwa: 'Z placu', produkty: [
      { id: 'pl-kamien', nazwa: 'Kamień naturalny', rodzaj: 'granit', jedn: 'm²', ile: 20, typy: ['Kostka granitowa', 'Kamień łupany'], kolory: ['granit'] },
      { id: 'pl-kruszywo', nazwa: 'Kruszywo dekoracyjne', rodzaj: 'worek', jedn: 't', ile: 2, typy: ['Biały grys', 'Otoczaki', 'Grys grafitowy', 'Żwir'] },
      { id: 'pl-sprzet', nazwa: 'Wypożyczalnia sprzętu', rodzaj: 'maszyna', jedn: 'dni', ile: 2, typy: ['Zagęszczarka', 'Inny sprzęt'] }] }
  };

  /* ---------- tekstury ładunku (widok z boku), liczone w przeglądarce, bez pobierania ---------- */
  const tCache = {};
  const rgb = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const odc = (c, f) => `rgb(${clamp(c[0] * f, 0, 255) | 0},${clamp(c[1] * f, 0, 255) | 0},${clamp(c[2] * f, 0, 255) | 0})`;
  function los(s) { let x = s >>> 0 || 7; return () => (x = (x * 1664525 + 1013904223) >>> 0) / 4294967296; }
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; }
  function tekstura(rodzaj, kolor) {
    const key = rodzaj + '|' + kolor; if (tCache[key]) return tCache[key];
    const W = 480, H = 280, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'), R = los(hash(key));
    const base = rgb(KOLORY[kolor] || KOLORY.szary);
    const MEL = [[140, 120, 102], [106, 101, 96], [163, 142, 112], [124, 108, 92]];
    const ton = () => kolor === 'melanz' ? MEL[R() * MEL.length | 0] : base;
    g.fillStyle = odc(base, .34); g.fillRect(0, 0, W, H);
    const P = { kostka: [10, 38, 78, 4], plyty: [16, 170, 260, 3], obrzeza: [3, 330, 470, 6], lupane: [3, 150, 190, 6, 1], modulowe: [4, 170, 210, 5, 0, 1], granit: [7, 34, 48, 6, 2] }[rodzaj] || [10, 38, 78, 4];
    function kamien(x, y, w, h) {
      const c0 = ton(), f = 1 + (R() - .5) * .16; g.fillStyle = odc(c0, f); g.fillRect(x, y, w, h);
      if (P[4] === 1) { for (let i = 0; i < 26; i++) { g.fillStyle = odc(c0, f * (.72 + R() * .5)); g.beginPath(); const px = x + R() * w, py = y + R() * h, s = 4 + R() * 14; g.moveTo(px, py); g.lineTo(px + s, py + R() * 6 - 3); g.lineTo(px + s * .6, py + s * .7); g.closePath(); g.fill(); } }
      if (P[5]) { g.fillStyle = 'rgba(0,0,0,.18)'; for (let yy = y + h * .33; yy < y + h; yy += h * .33) g.fillRect(x, yy, w, 1.5); }
      g.fillStyle = 'rgba(255,255,255,.2)'; g.fillRect(x, y, w, 2.5); g.fillRect(x, y, 2, h);
      g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(x, y + h - 3, w, 3); g.fillRect(x + w - 2, y, 2, h);
    }
    if (rodzaj === 'palisady') {
      for (let x = -8; x < W; x += 40) { const gr = g.createLinearGradient(x, 0, x + 38, 0), cc = base, f = 1 + (R() - .5) * .12; gr.addColorStop(0, odc(cc, .5 * f)); gr.addColorStop(.38, odc(cc, 1.16 * f)); gr.addColorStop(1, odc(cc, .55 * f)); g.fillStyle = gr; g.fillRect(x + 1, 0, 38, H); }
    } else {
      const rh = H / P[0];
      for (let r = 0; r < P[0]; r++) { let x = -R() * P[2]; const y = r * rh; while (x < W) { const w = P[1] + R() * (P[2] - P[1]); kamien(x + P[3] / 2, y + P[3] / 2, w - P[3], rh - P[3]); x += w; } }
    }
    const id = g.getImageData(0, 0, W, H), d = id.data, A = P[4] === 2 ? 70 : 24;
    for (let i = 0; i < d.length; i += 4) { const n = (R() - .5) * A; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(id, 0, 0);
    let u; try { u = c.toDataURL('image/webp', .82); if (u.indexOf('image/webp') < 0) u = c.toDataURL('image/jpeg', .84); } catch (e) { u = 'img/tex/grafit.webp'; }
    return (tCache[key] = u);
  }

  /* nawierzchnia placu w lekkiej perspektywie: rzędy grafitowej kostki, kafel bez szwów */
  let brukU = null;
  function bruk() {
    if (brukU) return brukU; const W = 480, H = 116, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'), R = los(77);
    const rz = [14, 18, 22, 27, 35]; let y = 0; g.fillStyle = '#1d1e20'; g.fillRect(0, 0, W, H);
    rz.forEach((h, i) => { const n = Math.round(W / (h * 2.4)), bw = W / n, off = (i % 2) * bw / 2;
      for (let k = -1; k < n; k++) { const x = k * bw + off, f = .86 + R() * .26, gap = 1.5 + i * .4; g.fillStyle = `rgb(${62 * f | 0},${63 * f | 0},${66 * f | 0})`; g.fillRect(x + gap, y + gap, bw - gap * 2, h - gap * 2);
        g.fillStyle = 'rgba(255,255,255,.13)'; g.fillRect(x + gap, y + gap, bw - gap * 2, 2); g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(x + gap, y + h - gap - 2, bw - gap * 2, 2); }
      y += h; });
    const id = g.getImageData(0, 0, W, H), d = id.data; for (let i = 0; i < d.length; i += 4) { const n = (R() - .5) * 18; d[i] += n; d[i + 1] += n; d[i + 2] += n; } g.putImageData(id, 0, 0);
    try { brukU = c.toDataURL('image/webp', .8); if (brukU.indexOf('image/webp') < 0) brukU = c.toDataURL('image/jpeg', .82); } catch (e) { brukU = 'img/wz/wz-rows-grafit.webp'; }
    return brukU;
  }

  /* co jest na palecie: z wózka (wk) albo zgadnięte z nazwy (oferta, wzory, projektant) */
  function opis(p) {
    if (p.wk) return p.wk;
    const n = (p.nazwa || '').toLowerCase(), typ = p.typ || '';
    const kol = /grafit/.test(n) ? 'grafit' : /melan/.test(n) ? 'melanz' : /piask/.test(n) ? 'piaskowy' : /brąz/.test(n) ? 'braz' : /biał|bianco/.test(n) ? 'bialy' : /granit/.test(n) ? 'granit' : 'szary';
    const m = { kostka: 'kostka', wzory: 'kostka', plyty: 'plyty', ogrodzenia: 'lupane', palisady: 'palisady', obrzeza: 'obrzeza', kamien: 'granit', kruszywo: 'worek', wynajem: 'maszyna' };
    if (/^projekt/.test(p.id || '')) return { rodzaj: 'projekt', kolor: kol, marka: 'Twój projekt', linia: p.ile ? K.fmt(p.ile) + ' m²' : '' };
    const rodzaj = m[typ] || (/wzór/.test(n) ? 'kostka' : 'kostka');
    return { rodzaj, kolor: rodzaj === 'granit' ? 'granit' : kol, marka: typ === 'ogrodzenia' || typ === 'palisady' ? 'Joniec' : typ === 'kostka' || typ === 'plyty' ? 'Polbruk' : 'GardenBruk', linia: (p.nazwa || '').split(' (')[0].replace(/^Wzór: /, '').slice(0, 18) };
  }
  const foto = p => { const o = opis(p); return o.rodzaj === 'projekt' ? p.foto : o.rodzaj === 'worek' ? 'img/tex/zwir.webp' : o.rodzaj === 'maszyna' ? 'img/tex/piasek.webp' : tekstura(o.rodzaj, o.kolor); };

  /* ---------- paleta w SVG: lokalnie (0,0) = lewy dolny róg, szer. 120, w górę ujemnie ---------- */
  const PH = 84;
  function paleta(p, x) {
    const o = opis(p), pf = x.pfx;
    let h = `<g class="wk-pal" data-id="${esc(p.id)}">`;
    h += `<rect x="0" y="-14" width="120" height="4" fill="#c99d65"/><rect x="0" y="-10" width="16" height="7" fill="#a97d49"/><rect x="52" y="-10" width="16" height="7" fill="#a97d49"/><rect x="104" y="-10" width="16" height="7" fill="#a97d49"/><rect x="0" y="-3" width="120" height="3" fill="#b88b55"/><path d="M0 -12.5h120M0 -1.5h120" stroke="rgba(90,60,30,.35)" stroke-width=".8"/>`;
    if (o.rodzaj === 'worek') {
      h += `<path d="M7 -14 L5 -76 C5 -86 13 -90 24 -90 L96 -90 C107 -90 115 -86 115 -76 L113 -14 Z" fill="url(#${pf}worek)"/><path d="M18 -90 C18 -104 30 -104 30 -90 M90 -90 C90 -104 102 -104 102 -90" fill="none" stroke="#e8e4da" stroke-width="4"/><ellipse cx="60" cy="-89" rx="44" ry="5" fill="#9b968c"/><text x="60" y="-52" text-anchor="middle" class="wk-t1" fill="#1f7a3a">KRUSZYWO</text><text x="60" y="-40" text-anchor="middle" class="wk-t2" fill="#3b3a36">${esc((o.linia || '').slice(0, 16))}</text>`;
    } else if (o.rodzaj === 'maszyna') {
      h += `<rect x="16" y="-26" width="74" height="10" rx="2" fill="#2a2620"/><rect x="22" y="-60" width="56" height="34" rx="6" fill="#f2a516" stroke="#2a2620" stroke-width="2.5"/><circle cx="48" cy="-66" r="10" fill="#2a2620"/><path d="M70 -54 L108 -104 M100 -108 L116 -98" stroke="#2a2620" stroke-width="5" stroke-linecap="round" fill="none"/><text x="50" y="-38" text-anchor="middle" class="wk-t2" fill="#2a2620">GB</text>`;
    } else {
      const img = o.rodzaj === 'projekt' ? p.foto : tekstura(o.rodzaj, o.kolor);
      h += `<image href="${img}" x="2" y="-${PH}" width="116" height="${PH - 14}" preserveAspectRatio="${o.rodzaj === 'projekt' ? 'xMidYMid slice' : 'none'}"/>`;
      h += `<rect x="2" y="-${PH}" width="116" height="${PH - 14}" fill="url(#${pf}folia)"/><rect x="1" y="-${PH + 2}" width="118" height="3" fill="rgba(238,235,228,.85)"/><rect x="25" y="-${PH}" width="3" height="${PH - 14}" fill="rgba(28,42,66,.5)"/><rect x="91" y="-${PH}" width="3" height="${PH - 14}" fill="rgba(28,42,66,.5)"/>`;
      h += `<g class="wk-etyk"><rect x="32" y="-${PH - 8}" width="60" height="23" rx="1.5" fill="#f7f4ee" stroke="rgba(0,0,0,.18)" stroke-width=".6"/><text x="36" y="-${PH - 17}" class="wk-t1" fill="#1b1b1a">${esc((o.marka || '').toUpperCase().slice(0, 12))}</text><text x="36" y="-${PH - 26}" class="wk-t2" fill="#4a463f">${esc((o.linia || '').slice(0, 15))}</text></g>`;
    }
    return h + '<g class="wk-plus"></g></g>';
  }

  /* ---------- scena ---------- */
  function koloWozka(cx, cy, r, kl) {
    return `<g class="${kl}" data-cx="${cx}" data-cy="${cy}" data-r="${r}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="#191919"/><circle cx="${cx}" cy="${cy}" r="${r - 2.5}" fill="none" stroke="#2e2e2e" stroke-width="4" stroke-dasharray="7 5"/><circle cx="${cx}" cy="${cy}" r="${r * .52}" fill="url(#PFfelga)"/><circle cx="${cx}" cy="${cy}" r="${r * .2}" fill="#3a3a38"/>${[0, 72, 144, 216, 288].map(a => `<circle cx="${(cx + Math.cos(a / 57.3) * r * .34).toFixed(1)}" cy="${(cy + Math.sin(a / 57.3) * r * .34).toFixed(1)}" r="2.2" fill="#55534f"/>`).join('')}</g>`;
  }
  function svgSceny(pf) {
    const defs = `<defs>
<radialGradient id="PFcien"><stop offset="0" stop-color="#000" stop-opacity=".42"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<linearGradient id="PFzolty" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd257"/><stop offset=".5" stop-color="#f3a818"/><stop offset="1" stop-color="#c47e08"/></linearGradient>
<linearGradient id="PFstal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#43464b"/><stop offset=".45" stop-color="#a3a7ad"/><stop offset="1" stop-color="#3a3d42"/></linearGradient>
<linearGradient id="PFstal2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a7d82"/><stop offset="1" stop-color="#2c2e31"/></linearGradient>
<radialGradient id="PFfelga" cx=".4" cy=".35"><stop offset="0" stop-color="#e6e4df"/><stop offset="1" stop-color="#8a8884"/></radialGradient>
<linearGradient id="PFkab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset=".42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient>
<linearGradient id="PFkabina" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d3e42"/><stop offset="1" stop-color="#1f2023"/></linearGradient>
<linearGradient id="PFszyba" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c3d7e3"/><stop offset=".5" stop-color="#7f98a8"/><stop offset="1" stop-color="#3f5361"/></linearGradient>
<linearGradient id="PFalu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcdedf"/><stop offset="1" stop-color="#8e9295"/></linearGradient>
<linearGradient id="PFfolia" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".32" stop-color="#fff" stop-opacity=".3"/><stop offset=".42" stop-color="#fff" stop-opacity=".04"/><stop offset=".7" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="PFworek" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfcabe"/><stop offset=".45" stop-color="#f6f3ec"/><stop offset="1" stop-color="#c6c1b5"/></linearGradient>
<linearGradient id="PFmgla" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1a2a" stop-opacity=".1"/><stop offset=".75" stop-color="#f4e7cf" stop-opacity=".1"/><stop offset="1" stop-color="#2a2218" stop-opacity=".35"/></linearGradient>
<linearGradient id="PFziemia" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".05"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient>
<pattern id="PFbruk" patternUnits="userSpaceOnUse" x="0" y="${GY - 10}" width="480" height="58"><image class="wk-bruk" href="" width="480" height="58" preserveAspectRatio="none"/></pattern>
<clipPath id="PFka"><rect x="66" y="-268" width="118" height="152"/></clipPath>
</defs>`;
    const wozek = `<g class="wf">
<ellipse cx="215" cy="0" rx="225" ry="10" fill="url(#PFcien)"/>
<g class="wf-k">
<path d="M44 -126 L60 -322" stroke="#26251f" stroke-width="10" stroke-linecap="round"/>
<path d="M58 -126 C52 -166 58 -200 76 -212 L88 -206 C78 -186 78 -154 82 -126 Z" fill="#1d1d1c"/>
<g class="wf-a" clip-path="url(#PFka)"><image href="img/andrzej-wozek.webp" x="70" y="-262" width="108" height="147" preserveAspectRatio="xMidYMid slice" transform="translate(248 0) scale(-1 1)"/></g>
<path d="M10 -36 C2 -40 0 -64 2 -94 C4 -118 16 -132 38 -134 L150 -134 C162 -134 168 -128 170 -116 L176 -94 L248 -94 L250 -30 Z" fill="url(#PFzolty)"/>
<path d="M16 -126 L152 -126" stroke="rgba(255,255,255,.45)" stroke-width="3" stroke-linecap="round"/>
<path d="M104 -120 l-6 16 M114 -120 l-6 16 M124 -120 l-6 16 M134 -120 l-6 16" stroke="rgba(60,40,0,.4)" stroke-width="3" stroke-linecap="round"/>
<path d="M176 -94 L248 -94" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
<g transform="translate(26 -112) scale(.62)" fill="#2a2925"><path d="${GB}"/></g>
<path d="M6 -50 L250 -50 L250 -24 L14 -24 C8 -28 6 -40 6 -50 Z" fill="#2a2925"/>
<circle cx="64" cy="-34" r="39" fill="#1b1a17"/><circle cx="198" cy="-40" r="45" fill="#1b1a17"/>
<path d="M212 -98 L180 -152" stroke="#2a2925" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="178" cy="-156" rx="5" ry="22" transform="rotate(28 178 -156)" fill="none" stroke="#171717" stroke-width="6"/>
<path d="M232 -96 L214 -322" stroke="#26251f" stroke-width="10" stroke-linecap="round"/>
<path d="M38 -332 L222 -332 L228 -318 L42 -318 Z" fill="#2c2b27"/><path d="M70 -330v10M100 -330v10M130 -330v10M160 -330v10M190 -330v10" stroke="#4a4842" stroke-width="2"/>
<g class="wf-kogut"><rect x="118" y="-346" width="24" height="15" rx="7" fill="#ff8a00"/><rect x="122" y="-343" width="8" height="5" rx="2" fill="#ffe0a3" opacity=".8"/></g>
<rect x="222" y="-226" width="12" height="9" rx="2" fill="#fff1c9" stroke="#26251f" stroke-width="2"/>
<rect x="250" y="-356" width="16" height="350" rx="2" fill="url(#PFstal)"/><rect x="262" y="-344" width="8" height="336" fill="#3a3d42"/><rect x="243" y="-262" width="6" height="228" fill="#8b8e93"/><rect x="246" y="-360" width="28" height="8" fill="#2b2d30"/>
<g class="wf-w"><path d="M274 -6 L274 -156 L284 -156 L284 -6 Z" fill="#2b2d30"/><path d="M284 -156 h18 M284 -126 h18 M284 -96 h18" stroke="#2b2d30" stroke-width="4"/><path d="M300 -158 v66" stroke="#2b2d30" stroke-width="4"/>
<path d="M276 -4 L276 -66 L288 -66 L288 -16 L414 -16 L421 -10 L414 -4 Z" fill="url(#PFstal2)"/>
<g class="wf-stos" transform="translate(290 -16)"></g></g>
${koloWozka(64, -34, 32, 'kr')}${koloWozka(198, -40, 38, 'kr')}
</g>
<g transform="translate(150 -404)"><g class="wk-dymek"><path class="wk-dym-c" d="" fill="rgba(0,0,0,.25)" transform="translate(2 4)"/><path class="wk-dym-t" d="" fill="#fff"/><text x="0" y="0" class="wk-dym-txt">Co ładujemy?</text></g></g>
</g>`;
    const auto = `<g class="wt">
<ellipse cx="245" cy="0" rx="255" ry="10" fill="url(#PFcien)"/>
<rect x="340" y="-292" width="8" height="140" rx="3" fill="#9a9da1"/>
<rect x="12" y="-100" width="452" height="28" fill="#1c1c1e"/>
<g class="wt-lad"></g>
<rect x="0" y="-122" width="338" height="22" rx="2" fill="#5d6064"/>
<rect x="2" y="-136" width="334" height="16" rx="1.5" fill="url(#PFalu)"/><path d="M84 -136v16M168 -136v16M252 -136v16" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>
<text x="168" y="-124.5" text-anchor="middle" class="wk-burta">GARDENBRUK · MIKOWICE 16 · KŁODZKO</text>
<rect x="336" y="-222" width="12" height="102" fill="#2a2b2e"/><path d="M336 -200h12M336 -176h12M336 -152h12" stroke="#4a4b4f" stroke-width="2"/>
<path d="M350 -88 L350 -248 C350 -260 358 -268 370 -268 L438 -268 C454 -268 462 -260 468 -242 L480 -172 L482 -94 C482 -90 480 -88 476 -88 Z" fill="url(#PFkabina)"/>
<path d="M364 -254 L432 -254 C442 -254 448 -248 452 -238 L463 -196 L364 -196 Z" fill="url(#PFszyba)"/><path d="M372 -250 L402 -250 L384 -200 L366 -200 Z" fill="rgba(255,255,255,.18)"/>
<rect x="350" y="-154" width="132" height="9" fill="#d9ad55"/>
<g transform="translate(372 -188) scale(.82)" fill="#d9ad55"><path d="${GB}"/></g>
<path d="M440 -190 v86" stroke="rgba(255,255,255,.12)" stroke-width="2"/><rect x="430" y="-176" width="14" height="4" rx="2" fill="#77797c"/>
<rect x="472" y="-130" width="9" height="13" rx="2" fill="#ffe8a8"/><rect x="468" y="-106" width="18" height="20" rx="3" fill="#161616"/><rect x="0" y="-100" width="7" height="13" rx="1.5" fill="#c62d24"/>
<path d="M30 -70 C34 -112 194 -112 198 -70" fill="#232325"/><path d="M380 -70 C384 -110 456 -110 460 -70" fill="#232325"/>
${koloWozka(74, -34, 34, 'kr')}${koloWozka(154, -34, 34, 'kr')}${koloWozka(420, -34, 34, 'kr')}
</g>`;
    const svg = `<svg class="wk-svg" viewBox="0 0 ${SW} ${SH}" preserveAspectRatio="xMidYMid slice" role="img">${defs}
<g class="wk-tlo"><image href="img/wozek-tlo.webp" x="-300" y="-12" width="1800" height="440" preserveAspectRatio="xMidYMid slice"/><rect x="-300" y="0" width="1800" height="${GY}" fill="url(#PFmgla)"/></g>
<rect x="-400" y="${GY - 10}" width="2400" height="58" fill="url(#PFbruk)"/><rect x="-400" y="${GY - 10}" width="2400" height="58" fill="url(#PFziemia)"/><rect x="-400" y="${GY - 13}" width="2400" height="5" fill="#d8d3c8"/>
<g class="wk-kurz"></g>
<g class="wt-poz">${auto}</g>
<g class="wf-poz">${wozek}</g>
<g class="wk-kurz2"></g>
</svg>`;
    return svg.replace(/PF/g, pf);
  }

  let licz = 0;
  class Scena {
    constructor(box, mini) {
      this.box = box; this.mini = mini; this.pfx = 'wk' + (++licz);
      const opisS = box.getAttribute('aria-label') || 'Andrzej na wózku widłowym'; box.removeAttribute('role'); box.removeAttribute('aria-label');
      box.innerHTML = svgSceny(this.pfx) + `<div class="wk-dym-html" aria-hidden="true"></div><div class="wk-wynik" role="region" aria-label="Wynik wysyłki" aria-live="polite" hidden></div>`; this.dymH = $('.wk-dym-html', box);
      $('svg', box).setAttribute('aria-label', opisS); this.poza = document.createElement('div'); this.poza.className = 'wk-wynik wk-poza'; this.poza.setAttribute('role', 'region'); this.poza.setAttribute('aria-label', 'Wynik wysyłki'); this.poza.setAttribute('aria-live', 'polite'); this.poza.hidden = true; box.insertAdjacentElement('afterend', this.poza);
      this.svg = $('svg', box); this.wynik = $('.wk-wynik', box); $('.wk-bruk', box).setAttribute('href', bruk());
      this.wfp = $('.wf-poz', box); this.wfk = $('.wf-k', box); this.ww = $('.wf-w', box); this.stos = $('.wf-stos', box); this.wf = $('.wf', box);
      this.wtp = $('.wt-poz', box); this.lad = $('.wt-lad', box); this.tlo = $('.wk-tlo', box);
      this.kolaF = $$('.wf .kr', box); this.kolaT = $$('.wt .kr', box);
      this.dym = $('.wk-dymek', box); this.dymT = $('.wk-dym-txt', box); this.dymP = $('.wk-dym-t', box); this.dymC = $('.wk-dym-c', box);
      this.kurz = $('.wk-kurz2', box);
      this.fX = FX0; this.lift = 0; this.tX = TX0; this.cam = 0; this.W = SW; this.ids = []; this.zajety = false;
      this.wymiar(); new ResizeObserver(() => { this.wymiar(); this.rysuj(true); }).observe(box);
      this.rysuj(true); this.mow('Co ładujemy?');
    }
    wymiar() { const r = this.box.getBoundingClientRect(); this.box.classList.toggle('maly-dymek', r.height / SH < .72); this.W = clamp(SH * (r.width / Math.max(1, r.height)), 360, 1560); this.svg.setAttribute('viewBox', `${this.cam.toFixed(1)} 0 ${this.W.toFixed(1)} ${SH}`); }
    cel() { // na czym kamera ma się skupić
      if (this.W >= SW - 1) return (SW - this.W) / 2;
      const f = this.faza === 'auto' ? Math.min(this.tX + 160, SW) : this.fX + 250;
      return clamp(f - this.W / 2, 0, SW - this.W);
    }
    rysuj(od) {
      const c = this.cel(); this.cam = od ? c : lerp(this.cam, c, .14);
      this.svg.setAttribute('viewBox', `${this.cam.toFixed(1)} 0 ${this.W.toFixed(1)} ${SH}`);
      this.tlo.setAttribute('transform', `translate(${(this.cam * .38).toFixed(1)} 0)`);
      this.wfp.setAttribute('transform', `translate(${this.fX.toFixed(1)} ${GY})`);
      this.wtp.setAttribute('transform', `translate(${this.tX.toFixed(1)} ${GY})`);
      this.ww.setAttribute('transform', `translate(0 ${(-this.lift).toFixed(1)})`);
      for (const k of this.kolaF) k.setAttribute('transform', `rotate(${(this.fX / k.dataset.r * 57.3 % 360).toFixed(1)} ${k.dataset.cx} ${k.dataset.cy})`);
      for (const k of this.kolaT) k.setAttribute('transform', `rotate(${(this.tX / k.dataset.r * 57.3 % 360).toFixed(1)} ${k.dataset.cx} ${k.dataset.cy})`);
      const bob = this.jedzie ? Math.sin(this.fX * .16) * 1.4 : 0; this.wfk.setAttribute('transform', `translate(0 ${(bob + (this.ugiecie || 0)).toFixed(2)})`);
    }
    anim(ms, fn, e) { return new Promise(res => { if (RM) { fn(1); this.rysuj(true); return res(); } const t0 = performance.now(); const k = t => { const p = clamp((t - t0) / ms, 0, 1); fn((e || eio)(p)); this.rysuj(); p < 1 ? requestAnimationFrame(k) : res(); }; requestAnimationFrame(k); }); }
    czekaj(ms) { return new Promise(r => setTimeout(r, RM ? 0 : ms)); }
    mow(t) {
      this.dymT.textContent = t; let w = 0; try { w = this.dymT.getComputedTextLength(); } catch (e) { } if (!w) w = t.length * 9.5;
      const W = w + 32, H = 40; this.dymT.setAttribute('x', 16); this.dymT.setAttribute('y', 26);
      const d = `M8 0 H${W - 8} Q${W} 0 ${W} 8 V${H - 8} Q${W} ${H} ${W - 8} ${H} H40 L22 ${H + 14} L26 ${H} H8 Q0 ${H} 0 ${H - 8} V8 Q0 0 8 0 Z`; this.dymP.setAttribute('d', d); this.dymC.setAttribute('d', d);
      this.dym.classList.remove('pop'); this.dymH.textContent = t; this.dymH.classList.remove('pop'); this.box.getBoundingClientRect(); this.dym.classList.add('pop'); this.dymH.classList.add('pop');
    }
    kurzu(x, y, n, sila) { // kurz spod kół
      if (RM) return; for (let i = 0; i < n; i++) { const c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', x + (Math.random() - .5) * 30); c.setAttribute('cy', y - Math.random() * 8); c.setAttribute('r', 5 + Math.random() * 9); c.setAttribute('fill', 'rgba(215,205,185,.55)'); this.kurz.appendChild(c);
        const dx = (Math.random() - .5) * 60 * sila, dy = -10 - Math.random() * 30 * sila; c.animate([{ transform: 'translate(0,0) scale(.4)', opacity: .9 }, { transform: `translate(${dx}px,${dy}px) scale(1.8)`, opacity: 0 }], { duration: 700 + Math.random() * 500, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = () => c.remove(); }
    }
    /* stos na widłach: najwyżej 3 palety, reszta jako +N */
    synch(lista, pomin) {
      const vis = lista.filter(p => !pomin.has(p.id));
      const ids = vis.map(p => p.id).join('|');
      if (ids === this.ids.join('|')) return; this.ids = vis.map(p => p.id);
      this.stos.innerHTML = vis.slice(0, 3).map((p, i) => `<g transform="translate(0 ${-i * PH})">${paleta(p, this)}</g>`).join('');
      this.plus(vis.length);
    }
    plus(n) { const g = $$('.wk-plus', this.stos), top = g[Math.min(2, g.length - 1)]; g.forEach(x => x.innerHTML = ''); if (top && n > 3) top.innerHTML = `<circle cx="104" cy="-${PH + 6}" r="17" fill="#d9ad55" stroke="#1b1b1a" stroke-width="2"/><text x="104" y="-${PH}" text-anchor="middle" class="wk-plus-t">+${n - 3}</text>`; }
    async zrzuc(p, lista, pomin) { // paleta spada z góry na widły, wózek ugina się
      this.ids = []; this.synch(lista, pomin);
      const idx = lista.filter(x => !pomin.has(x.id)).findIndex(x => x.id === p.id); const n = this.ids.length;
      const g = idx >= 0 && idx < 3 ? this.stos.children[idx] : null;
      if (g && !RM) {
        const y0 = -idx * PH; await this.anim(480, e => g.setAttribute('transform', `translate(0 ${(y0 - 320 * (1 - e)).toFixed(1)})`), ein);
        g.setAttribute('transform', `translate(0 ${y0})`);
        this.kurzu(this.fX + 350, GY - 2, 6, .7);
        await this.anim(380, e => { this.ugiecie = Math.sin(e * Math.PI * 2.2) * 5 * (1 - e); });
        this.ugiecie = 0; this.rysuj();
      }
      this.mow(n === 1 ? 'Mam! Coś jeszcze?' : n < 4 ? 'Ładuję! Jeszcze coś?' : 'Ale ładunek!');
    }
    pozycja() { const r = this.stos.getBoundingClientRect(), s = this.svg.getBoundingClientRect(); const k = s.height / SH; return { x: s.left + (this.fX + 350 - this.cam) * (s.width / this.W), y: s.top + (GY - 16 - Math.min(this.ids.length, 3) * PH - this.lift) * k - 20, k }; }
    /* wysyłka: dojazd, podniesienie, wjazd nad pakę, odłożenie, cofnięcie, odjazd ciężarówki */
    async wyslij(cb) {
      if (this.zajety) return; this.zajety = true; this.ukryj(); this.box.classList.add('w-ruchu');
      const pusto = !this.ids.length;
      this.mow(pusto ? 'Jedziemy!' : 'Jedziemy do auta!'); this.jedzie = true; this.wf.classList.add('jedzie');
      this.kurzu(this.fX + 64, GY - 2, 8, 1);
      const x0 = this.fX; await this.anim(760, e => this.fX = lerp(x0, 276, e));
      this.jedzie = false; await this.anim(460, e => this.lift = lerp(0, 126, e));
      this.jedzie = true; await this.anim(620, e => this.fX = lerp(276, 405, e)); this.jedzie = false;
      await this.anim(320, e => this.lift = lerp(126, 106, e));
      // palety zostają na pace
      const st = [...this.stos.children], dx = this.fX + 290 - this.tX;
      st.forEach((g, i) => { const n = document.createElementNS(NS, 'g'); n.setAttribute('transform', `translate(${dx.toFixed(1)} ${-122 - i * PH})`); g.removeAttribute('transform'); n.appendChild(g); this.lad.appendChild(n); });
      this.ids = []; this.kurzu(this.tX + 60, GY - 120, 5, .5);
      await this.anim(220, e => this.lift = lerp(106, 90, e));
      this.mow('Gotowe!'); this.jedzie = true;
      await this.anim(760, e => { this.fX = lerp(405, FX0, e); this.lift = lerp(90, 0, clamp(e * 1.4, 0, 1)); });
      this.jedzie = false; this.wf.classList.remove('jedzie');
      // ciężarówka rusza
      this.faza = 'auto'; cb && cb.odjazd && cb.odjazd();
      this.kurzu(this.tX + 20, GY - 30, 10, 1.4);
      const t0 = this.tX; await this.anim(1500, e => this.tX = lerp(t0, SW + 520, e), ein);
      this.faza = null; this.lad.innerHTML = '';
      cb && cb.koniec && cb.koniec();
      this.box.classList.remove('w-ruchu');
      // wraca pusta, na kolejne zamówienie
      await this.czekaj(1400); this.tX = SW + 540; this.rysuj(true);
      await this.anim(1600, e => this.tX = lerp(SW + 540, TX0, e), eout);
      this.mow('Co ładujemy?'); this.zajety = false; window.GBwozek && GBwozek.odswiez();
    }
    pokaz(html) { const male = this.box.getBoundingClientRect().height < 300, el = male ? this.poza : this.wynik; (male ? this.wynik : this.poza).hidden = true; el.innerHTML = html; el.hidden = false; this.box.classList.toggle('z-wynikiem', !male);
      const f = $('a,button', el); if (f) { if (male) el.scrollIntoView({ block: 'nearest', behavior: RM ? 'auto' : 'smooth' }); setTimeout(() => f.focus({ preventScroll: !male }), RM ? 0 : 60); } }
    ukryj() { this.wynik.hidden = true; this.poza.hidden = true; this.box.classList.remove('z-wynikiem'); }
  }

  /* ---------- instancje: duża scena w sekcji i mała w panelu wózka ---------- */
  const sekBox = $('#wkScena'), ksBox = $('#ksScena');
  const sceny = []; let duza = null, mala = null;
  if (sekBox) { duza = new Scena(sekBox, false); sceny.push(duza); }
  if (ksBox) { mala = new Scena(ksBox, true); sceny.push(mala); }
  const lecace = new Set();
  function synchWszystko() { for (const s of sceny) if (!s.zajety && !s.czeka) s.synch(K.lista, lecace); }
  function decyzja(sc, usunWyslane) { if (!sc) return; if (usunWyslane && sc.snap) { const sn = sc.snap; K.przywroc(K.lista.filter(p => !sn.has(p.id))); } sc.snap = null; sc.czeka = false; sc.ukryj(); synchWszystko(); }
  let widacDuza = false;
  if (sekBox) new IntersectionObserver(e => { widacDuza = e[0].intersectionRatio > .35; }, { threshold: [0, .35, .6] }).observe(sekBox);

  /* lot palety od kliknięcia do wideł (albo do przycisku w pasku) */
  let ostatniKlik = null;
  addEventListener('pointerdown', e => { ostatniKlik = { x: e.clientX, y: e.clientY }; }, { capture: true, passive: true });
  function lot(p, dokad, gotowe) {
    const z = ostatniKlik || { x: innerWidth / 2, y: innerHeight * .6 };
    if (RM || !dokad) return gotowe();
    const d = document.createElement('div'); d.className = 'wk-lot'; d.style.backgroundImage = `url("${foto(p)}")`; document.body.appendChild(d);
    const kl = []; const sx = z.x - 34, sy = z.y - 26, ex = dokad.x - 34, ey = dokad.y - 26, wy = Math.min(sy, ey) - 140;
    for (let i = 0; i <= 14; i++) { const t = i / 14, x = lerp(sx, ex, t), y = (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * wy + t * t * ey, s = 1 + Math.sin(t * Math.PI) * .25 - t * (dokad.k ? 0 : .45); kl.push({ transform: `translate(${x}px,${y}px) rotate(${(Math.sin(t * 6) * 8).toFixed(1)}deg) scale(${s.toFixed(2)})`, opacity: i === 14 ? .2 : 1 }); }
    d.animate(kl, { duration: 760, easing: 'cubic-bezier(.45,.05,.4,1)' }).onfinish = () => { d.remove(); gotowe(); };
  }
  function dodano(p, nowy) {
    for (const s of sceny) if (s.czeka) decyzja(s, false); // kto dokłada, ten jeszcze kompletuje – nic nie znika
    if (!nowy) { const b = $('#koszykBtn'); lot(p, b && celPrzycisk(b), () => { }); return; }
    const naScene = duza && widacDuza && !duza.zajety ? duza : mala && !$('#koszyk').hidden && !mala.zajety ? mala : null;
    lecace.add(p.id);
    const cel = naScene ? naScene.pozycja() : celPrzycisk($('#koszykBtn'));
    lot(p, cel, () => { lecace.delete(p.id); for (const s of sceny) { if (s === naScene) s.zrzuc(p, K.lista, lecace); else if (!s.zajety && !s.czeka) s.synch(K.lista, lecace); } });
  }
  function celPrzycisk(b) { if (!b) return null; const r = b.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }

  /* ---------- konfigurator w sekcji ---------- */
  const wyb = { m: 'polbruk', p: null, o: {} }, zrobione = new Set();
  const prodBox = $('#wkProd'), konf = $('#wkKonf');
  function pokazMarke(m) {
    wyb.m = m; $$('[data-wkm]').forEach(b => { const on = b.dataset.wkm === m; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on) { const pn = $('#wkPanelM'); pn && pn.setAttribute('aria-labelledby', b.id); } });
    const M = MARKI[m]; prodBox.innerHTML = M.produkty.map((p, i) => `<button type="button" class="wk-pr${i ? '' : ' on'}" data-wkp="${p.id}" aria-pressed="${!i}"><i style="background-image:url('${p.rodzaj === 'worek' ? 'img/tex/zwir.webp' : p.rodzaj === 'maszyna' ? 'img/tex/piasek.webp' : tekstura(p.rodzaj, (p.kolory || ['szary'])[0])}')"></i><span>${p.nazwa}</span></button>`).join('');
    pokazProdukt(M.produkty[0]);
  }
  function pokazProdukt(P) {
    wyb.p = P; wyb.o = { linia: (P.linie || P.typy || [''])[0], kolor: (P.kolory || [''])[0], grub: (P.grub || [''])[0] };
    $$('[data-wkp]', prodBox).forEach(b => { const on = b.dataset.wkp === P.id; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    const chips = (kl, arr, nazwa) => arr && arr.length > 1 ? `<p class="opcje-t">${nazwa}</p><div class="opcje" role="group" aria-label="${nazwa}">${arr.map((v, i) => `<button type="button" class="chip${i ? '' : ' on'}${kl === 'kolor' ? ' wk-kol' : ''}" data-wko="${kl}" data-v="${v}" aria-pressed="${!i}">${kl === 'kolor' ? `<b style="background:${KOLORY[v]}"></b>${NKOL[v]}` : v}</button>`).join('')}</div>` : '';
    const M = MARKI[wyb.m];
    konf.innerHTML = `<div class="wk-podglad"><svg viewBox="-14 -112 148 118" aria-hidden="true"><defs><linearGradient id="wkpfolia" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".32" stop-color="#fff" stop-opacity=".3"/><stop offset=".42" stop-color="#fff" stop-opacity=".04"/><stop offset=".7" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="wkpworek" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfcabe"/><stop offset=".45" stop-color="#f6f3ec"/><stop offset="1" stop-color="#c6c1b5"/></linearGradient><radialGradient id="wkpcien"><stop offset="0" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="60" cy="1" rx="70" ry="5" fill="url(#wkpcien)"/><g class="wk-pg"></g></svg><small id="wkPodpis"></small></div>
<div class="wk-opcje"><h3>${M.nazwa === 'Z placu' ? '' : M.nazwa + ' · '}${P.nazwa}</h3>${chips('linia', P.linie || P.typy, P.linie ? 'Linia' : 'Rodzaj')}${chips('kolor', P.kolory, 'Kolor')}${chips('grub', P.grub, 'Grubość')}
<div class="wk-ile"><span class="opcje-t">Ilość <small>(możesz zostawić pustą, ustalicie ją razem)</small></span><button type="button" class="wk-pm" data-d="-1" aria-label="Zmniejsz ilość">−</button><input id="wkIle" type="number" inputmode="decimal" min="0" step="any" value="" placeholder="np. ${P.ile}" aria-label="Ilość w ${P.jedn}"><span class="jedn">${P.jedn}</span><button type="button" class="wk-pm" data-d="1" aria-label="Zwiększ ilość">+</button></div>
${P.jedn === 'm²' ? `<div class="wk-licz"><span class="opcje-t">Nie wiesz, ile to m²? Przelicz z wymiarów</span><label>dł. <input type="number" inputmode="decimal" min="0" step="any" data-l="dl" aria-label="Długość w metrach"> m</label><b>×</b><label>szer. <input type="number" inputmode="decimal" min="0" step="any" data-l="sz" aria-label="Szerokość w metrach"> m</label><label class="wk-zapas"><input type="checkbox" data-l="zapas" checked> +5% na docinki</label><output class="wk-wyn"></output></div>` : ''}
<p class="wk-krok" data-k="4"><i>4</i><span>Załaduj na wózek<small>Andrzej przewiezie paletę na auto. Możesz dodać kilka produktów.</small></span></p>
<button type="button" class="btn wk-zaladuj" id="wkZaladuj"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17V9h5l2-5h3v13M16 3v15M16 18h6"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/></svg>Załaduj na wózek</button>
${M.katalog ? `<a class="katalog-link" href="${M.katalog}" target="_blank" rel="noopener">Katalog ${M.nazwa} ↗</a>` : ''}</div>`;
    podglad();
  }
  function pozycja() { const P = wyb.p, M = MARKI[wyb.m], o = wyb.o; const ile = parseFloat(($('#wkIle').value || '').replace(',', '.'));
    const cz = []; if (P.typy) cz.push(o.linia.toLowerCase()); if (P.kolory && P.kolory.length > 1) cz.push(NKOL[o.kolor].toLowerCase()); if (o.grub) cz.push(o.grub);
    const nazwa = (M.nazwa !== 'Z placu' ? M.nazwa + (P.linie ? ' ' + o.linia : '') + ' – ' + P.nazwa.toLowerCase() : P.nazwa) + (cz.length ? ' (' + cz.join(', ') + ')' : '');
    return { id: [P.id, o.linia, o.kolor, o.grub].join('|'), typ: P.id, nazwa, ile: isFinite(ile) && ile > 0 ? ile : null, jedn: P.jedn, foto: 'img/tex/grafit.webp', wk: { rodzaj: P.rodzaj, kolor: o.kolor || 'szary', marka: M.nazwa === 'Z placu' ? 'GardenBruk' : M.nazwa, linia: P.linie ? o.linia : (o.linia || P.nazwa) } }; }
  function podglad() { const p = pozycja(), g = $('.wk-pg', konf); g.innerHTML = paleta(p, { pfx: 'wkp' }); $('#wkPodpis').textContent = p.nazwa; }
  if (prodBox) {
    $$('[data-wkm]').forEach(b => b.addEventListener('click', () => { pokazMarke(b.dataset.wkm); krok(1); }));
    $('.wk-marki').addEventListener('keydown', e => { const t = $$('[data-wkm]'), i = t.findIndex(b => b.classList.contains('on')); const k = { ArrowRight: i + 1, ArrowLeft: i - 1 + t.length, Home: 0, End: t.length - 1 }[e.key]; if (k == null) return; e.preventDefault(); const n = t[k % t.length]; n.focus(); pokazMarke(n.dataset.wkm); });
    prodBox.addEventListener('click', e => { const b = e.target.closest('[data-wkp]'); if (b) { pokazProdukt(MARKI[wyb.m].produkty.find(p => p.id === b.dataset.wkp)); krok(2); } });
    konf.addEventListener('input', e => { if (!e.target.closest('.wk-licz')) return; const g = k => parseFloat((($(`[data-l="${k}"]`, konf) || {}).value || '').replace(',', '.')), dl = g('dl'), sz = g('sz'), z = $('[data-l="zapas"]', konf).checked, o = $('.wk-wyn', konf);
      if (dl > 0 && sz > 0) { const m = dl * sz, w = Math.round(m * (z ? 1.05 : 1) * 10) / 10; $('#wkIle').value = w; o.textContent = `${K.fmt(m)} m²${z ? ` + 5% = ${K.fmt(w)} m²` : ''}`; } else o.textContent = ''; });
    konf.addEventListener('input', () => krok(3));
    konf.addEventListener('change', e => { if (e.target.matches('[data-l="zapas"]')) e.target.dispatchEvent(new Event('input', { bubbles: true })); });
    konf.addEventListener('click', e => {
      const c = e.target.closest('[data-wko]'); if (c) { wyb.o[c.dataset.wko] = c.dataset.v; $$(`[data-wko="${c.dataset.wko}"]`, konf).forEach(x => { const on = x === c; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); }); podglad(); }
      const pm = e.target.closest('.wk-pm'); if (pm) { const i = $('#wkIle'), krok = wyb.p.jedn === 't' || wyb.p.jedn === 'dni' ? 1 : 5; i.value = Math.max(0, (parseFloat(i.value) || 0) + krok * pm.dataset.d); }
      if (e.target.closest('#wkZaladuj')) { const p = pozycja(); K.dodaj(p); const b = $('#wkZaladuj'); b.classList.remove('skok'); void b.offsetWidth; b.classList.add('skok'); krok(4); dalej(); }
      const dl = e.target.closest('[data-wkdalej]'); if (dl) skok(+dl.dataset.wkdalej);
      if (e.target.closest('[data-wko],.wk-pm')) krok(3);
    });
    pokazMarke('polbruk');
    // Kroki 1–5: co zrobione (✓), co teraz (zielone), skok do kroku z paska
    $('#wkPostep').addEventListener('click', e => { const b = e.target.closest('[data-skok]'); if (b) skok(+b.dataset.skok); });
    stan();
  }
  function krok(k) { for (let i = 1; i <= k; i++) zrobione.add(i); stan(); }
  function stan() { if (K.lista.length) zrobione.add(4); let teraz = 1; while (zrobione.has(teraz) && teraz < 5) teraz++;
    $$('#wkPostep li').forEach(li => { const k = +li.dataset.k; li.classList.toggle('ok', zrobione.has(k)); li.classList.toggle('teraz', k === teraz); });
    $$('#wozek .wk-krok').forEach(p => { const k = +p.dataset.k; p.classList.toggle('ok', zrobione.has(k)); p.classList.toggle('teraz', k === teraz); }); }
  function skok(k) { const cel = $(`#wozek .wk-krok[data-k="${k}"]`) || $('#wozek'); cel.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); }
  function dalej() { let d = $('.wk-dalej', konf); if (!d) { d = document.createElement('div'); d.className = 'wk-dalej'; d.setAttribute('role', 'status'); $('#wkZaladuj').after(d); }
    const n = K.lista.length; d.innerHTML = `<b>✓ Załadowane! Na wózku: ${n} ${lp(n)}.</b><span>Dodaj kolejny produkt albo wyślij zamówienie.</span><div><button type="button" class="btn jasny" data-wkdalej="2">+ Kolejny produkt</button><button type="button" class="btn" data-wkdalej="5">Wyślij zamówienie ↓</button></div>`; }

  /* ---------- lista zamówienia w sekcji ---------- */
  const lista = $('#wkLista'); let wroc = null;
  const lp = n => n === 1 ? 'pozycja' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'pozycje' : 'pozycji';
  function odswiezListe() {
    if (!lista) return; const L = K.lista;
    lista.innerHTML = L.length ? L.map((p, i) => `<div class="wk-poz"><i style="background-image:url('${foto(p)}')"></i><div><b>${esc(p.nazwa)}</b><label><input type="number" inputmode="decimal" min="0" step="any" value="${p.ile || ''}" placeholder="?" data-i="${i}" aria-label="Ilość: ${esc(p.nazwa)}"> ${esc(p.jedn || '')}</label></div><button type="button" data-u="${i}" aria-label="Zdejmij z wózka: ${esc(p.nazwa)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>`).join('') : '<p class="wk-pusto">Wózek jest pusty. Wybierz towar i naciśnij „Załaduj na wózek”.</p>';
    const ile = $('#wkIleSzt'); if (ile) ile.textContent = L.length ? L.length + ' ' + lp(L.length) : 'pusto';
    if (!L.length) zrobione.delete(4); typeof stan === 'function' && prodBox && stan();
    if (wroc) { const w = wroc; wroc = null; const el = w.t === 'i' ? $(`[data-i="${w.i}"]`, lista) : $(`[data-u="${Math.min(w.i, L.length - 1)}"]`, lista) || $('#wkImie'); el && el.focus({ preventScroll: true }); }
  }
  if (lista) {
    lista.addEventListener('change', e => { const i = e.target.dataset.i; if (i != null) { const v = parseFloat(e.target.value.replace(',', '.')); if (document.activeElement === e.target) wroc = { t: 'i', i: +i }; K.ustawIle(+i, isFinite(v) && v > 0 ? v : null); } });
    lista.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.dataset.i != null) { e.preventDefault(); e.target.dispatchEvent(new Event('change', { bubbles: true })); } });
    lista.addEventListener('click', e => { const b = e.target.closest('[data-u]'); if (b) { wroc = { t: 'u', i: +b.dataset.u }; K.usun(+b.dataset.u); } });
  }

  /* ---------- wysyłka ---------- */
  const zam = $('#wkForm'), info = $('#wkInfo');
  const pole = s => ($(s) || {}).value || '';
  function daneZam() { const o = $('input[name="odbior"]:checked', zam); return [pole('#wkImie') && 'Imię: ' + pole('#wkImie'), pole('#wkTel') && 'Telefon: ' + pole('#wkTel'), pole('#wkMiejsce') && 'Miejscowość: ' + pole('#wkMiejsce'), o && 'Odbiór: ' + o.value, pole('#wkTermin') && 'Termin: ' + pole('#wkTermin'), pole('#wkUwagi') && 'Uwagi: ' + pole('#wkUwagi')].filter(Boolean).join('\n'); }
  function wynikWa(sc, link, otwarte) {
    sc.czeka = true;
    zrobione.add(5); prodBox && stan();
    sc.pokaz(`<b>Zamówienie gotowe!</b><p>${otwarte ? 'WhatsApp otworzył się z gotową wiadomością. Naciśnij tam „Wyślij”, a zamówienie trafi do Andrzeja.' : 'Wiadomość jest gotowa. Otwórz WhatsApp i naciśnij „Wyślij”.'}</p><div class="wk-wb"><a class="btn wa-btn" href="${link}" target="_blank" rel="noopener">${otwarte ? 'Otwórz WhatsApp jeszcze raz' : 'Otwórz WhatsApp'}</a><button type="button" class="btn" data-wk="wyslane">Wysłane – nowy wózek</button><button type="button" class="btn jasny" data-wk="zostaw">Zostaw wózek</button></div>`);
  }
  async function wyslijWa(sc) {
    if (!K.lista.length) { sc.mow('Najpierw coś załaduj!'); sc.box.classList.remove('trzes'); void sc.box.offsetWidth; sc.box.classList.add('trzes'); return; }
    if (sc.zajety) return; if (sc.czeka) decyzja(sc, false);
    const link = K.waLink(sc === duza ? daneZam() : '', 'Moje zamówienie z wózka:'); sc.snap = new Set(K.lista.map(p => p.id));
    let okno = null;
    await sc.wyslij({ odjazd: () => { try { okno = window.open(link, '_blank'); if (okno) okno.opener = null; } catch (e) { okno = null; } }, koniec: () => wynikWa(sc, link, !!okno) });
  }
  function sprawdz() {
    let ok = true; [['#wkImie', v => v.trim().length > 1], ['#wkTel', v => v.replace(/\D/g, '').length >= 9]].forEach(([s, f]) => { const el = $(s), g = f(el.value); el.classList.toggle('bledne', !g); el.setAttribute('aria-invalid', !g); if (!g) ok = false; });
    if (!ok) { info.textContent = 'Podaj imię i numer telefonu (min. 9 cyfr).'; info.classList.add('blad'); return false; }
    if (!$('#wkZgoda').checked) { info.textContent = 'Zaznacz zgodę na kontakt, żeby Andrzej mógł odpowiedzieć.'; info.classList.add('blad'); return false; }
    return true;
  }
  async function wyslijMail() {
    info.classList.remove('blad'); info.textContent = '';
    if (!K.lista.length) { duza.mow('Najpierw coś załaduj!'); return; }
    if (!sprawdz() || duza.zajety) return; if (duza.czeka) decyzja(duza, false);
    const fd = new FormData(zam); fd.set('_subject', 'Zamówienie z wózka – GardenBruk (wersja demonstracyjna)'); fd.set('_template', 'table'); fd.set('_captcha', 'false'); fd.set('zamowienie', K.tekst());
    const btn = $('#wkMail'); btn.disabled = true; info.textContent = 'Ładujemy i wysyłamy…'; duza.snap = new Set(K.lista.map(p => p.id));
    const ac = 'AbortController' in window ? new AbortController() : null, stop = setTimeout(() => ac && ac.abort(), 15000);
    const wys = fetch('https://formsubmit.co/ajax/info@falcon-eye.de', { method: 'POST', headers: { Accept: 'application/json' }, body: fd, signal: ac ? ac.signal : undefined }).then(r => r.json().then(j => r.ok && (j.success === 'true' || j.success === true)).catch(() => false)).catch(() => false).finally(() => clearTimeout(stop));
    await duza.wyslij({ odjazd: () => { }, koniec: async () => {
      const ok = await wys; btn.disabled = false;
      if (ok) { decyzja(duza, true); zam.reset(); info.textContent = 'Zamówienie wysłane.'; duza.pokaz(`<b>Zamówienie wysłane!</b><p>Andrzej sprawdzi dostępność i termin, a potem odezwie się do Ciebie.</p><div class="wk-wb"><button type="button" class="btn" data-wk="zamknij">Dalej</button></div>`); }
      else { duza.snap = null; const t = encodeURIComponent(daneZam() + '\n\n' + K.tekst()); info.classList.add('blad'); info.textContent = 'Nie udało się wysłać maila.'; duza.czeka = true; duza.pokaz(`<b>Coś poszło nie tak.</b><p>Nie udało się wysłać maila. Wyślij to samo zamówienie przez WhatsApp albo ze swojej poczty. Wszystko jest już w wiadomości.</p><div class="wk-wb"><a class="btn wa-btn" href="${K.waLink(daneZam(), 'Moje zamówienie z wózka:')}" target="_blank" rel="noopener">WhatsApp</a><a class="btn jasny" href="mailto:biuro@gardenbruk.net?subject=Zam%C3%B3wienie&body=${t}">E-mail</a><button type="button" class="btn jasny" data-wk="zamknij">Zamknij</button></div>`); }
    } });
  }
  if (zam) {
    $('#wkWa').addEventListener('click', () => wyslijWa(duza));
    zam.addEventListener('submit', e => { e.preventDefault(); wyslijMail(); });
  }
  const ksWa = $('#ksWa'); if (ksWa && mala) ksWa.addEventListener('click', e => { e.stopImmediatePropagation(); wyslijWa(mala); }, true);
  document.addEventListener('click', e => { const b = e.target.closest('[data-wk]'); if (!b) return; const sc = sceny.find(s => s.box.contains(b) || s.poza.contains(b)); const fo = sc && (sc === duza ? $('#wkWa') : $('#ksWa'));
    if (b.dataset.wk === 'wyslane') decyzja(sc, true); else decyzja(sc, false); fo && fo.focus({ preventScroll: true }); });

  /* impuls: kto dojedzie do sceny i nic nie załaduje, temu Andrzej sam macha i podpowiada */
  if (sekBox && !RM) new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { o.disconnect(); setTimeout(() => { if (!K.lista.length && !duza.zajety) { duza.mow('Wybierz coś poniżej!'); sekBox.classList.add('impuls'); setTimeout(() => sekBox.classList.remove('impuls'), 2400); } }, 3800); } }, { threshold: .5 }).observe(sekBox);

  function wybierz(m, pid, preset) { if (!prodBox || !MARKI[m]) return; pokazMarke(m); const P = pid && MARKI[m].produkty.find(x => x.id === pid); if (P) pokazProdukt(P);
    Object.entries(preset || {}).forEach(([k, v]) => { const c = $(`[data-wko="${k}"][data-v="${v}"]`, konf); c && c.click(); }); }
  window.GBwozek = { wybierz, dodano, odswiez: () => { synchWszystko(); odswiezListe(); }, foto, tekstura, sceny };
  synchWszystko(); odswiezListe(); K.odswiez && K.odswiez();
})();
