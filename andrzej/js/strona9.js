/* GardenBruk v9 – strona: nawigacja, oferta, wzory, galeria, wózek (zamówienie), formularz. */
const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const WA = '48500250936', RM = matchMedia('(prefers-reduced-motion: reduce)').matches, MOB = matchMedia('(max-width: 820px)').matches;
const X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } } };
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('pokaz'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('pokaz'), 2600); }
window.GBtoast = toast;
history.scrollRestoration = 'manual';
const gdySwiat = cb => { if (window.Swiat && Swiat.bedPattern) cb(); else addEventListener('swiat', cb, { once: true }); };

/* ---------- intro ---------- */
addEventListener('intro-koniec', () => { if (location.hash.length > 1) setTimeout(() => { const t = $(location.hash); t && t.scrollIntoView(); }, 60); });
$('#pomin').addEventListener('click', () => { window.Scena && Scena.skipIntro(); });

/* ---------- pasek, menu, aktywny rozdział ---------- */
const pasek = $('#pasek'), menu = $('#menu'), burger = $('#burger');
burger.addEventListener('click', () => { const o = burger.getAttribute('aria-expanded') !== 'true'; burger.setAttribute('aria-expanded', o); menu.classList.toggle('otwarte', o); });
$$('a', menu).forEach(a => a.addEventListener('click', () => { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('otwarte'); }));
const linki = $$('a', menu).concat($$('.dok a[data-r]'));
const celSek = $$('main > section');
let tik = false;
function naPrzewiniecie() { if (tik) return; tik = true; requestAnimationFrame(() => { tik = false;
  const y = scrollY, hH = $('#start').offsetHeight; pasek.classList.toggle('staly', y > hH - 90 || menu.classList.contains('otwarte'));
  let akt = null; for (const s of celSek) { const r = s.getBoundingClientRect(); if (r.top < innerHeight * .5) akt = s; }
  linki.forEach(a => a.classList.toggle('akt', !!akt && a.getAttribute('href') === '#' + akt.id)); }); }
addEventListener('scroll', naPrzewiniecie, { passive: true }); addEventListener('resize', naPrzewiniecie); naPrzewiniecie();

/* ---------- oferta ---------- */
const PB = 'https://polbruk.pl/download/cenniki_katalogi/cennik/Katalog_Polbruk_2026.pdf', JN = 'https://joniec.pl/gdzie-kupic/gardenbruk/493';
const TOWARY = [
  { id: 'kostka', nazwa: 'Kostka brukowa', opis: 'Na podjazdy, ścieżki i place. Różne formaty, grubości i kolory.', jedn: 'm²', foto: 'img/real/podjazd-grafit-zolty.webp', marka: 'Polbruk', katalog: PB, opcje: { Wzór: ['Jodełka', 'Cegiełka', 'Koszyk', 'Łuki'], Kolor: ['Grafit', 'Szary', 'Melanż', 'Piaskowy', 'Brąz'], Grubość: ['6 cm', '8 cm'] } },
  { id: 'plyty', nazwa: 'Płyty tarasowe', opis: 'Na taras, wokół domu i do ogrodu. Także płyty wielkoformatowe i imitacja drewna.', jedn: 'm²', foto: 'img/real/plyty-ekspo.webp', marka: 'Polbruk', katalog: PB, opcje: { Rodzaj: ['Tarasowe', 'Chodnikowe', 'Wielkoformatowe'], Kolor: ['Biały', 'Szary', 'Grafit', 'Piaskowy'] } },
  { id: 'ogrodzenia', nazwa: 'Ogrodzenia i murki', opis: 'Bloczki łupane, słupki, daszki i murki oporowe. Na placu stoją gotowe przęsła.', jedn: 'mb', foto: 'img/real/ogrodzenia.webp', marka: 'Joniec', katalog: JN, opcje: { Kolor: ['Piaskowy', 'Grafit', 'Szary', 'Brąz'] } },
  { id: 'wzory', nazwa: 'Wzory i mozaiki', opis: 'Kwiat, koło, łuki, pasy: ułożymy wzór, który będzie tylko Twój.', jedn: 'projekt', foto: 'img/real/kwiat-podjazd.webp', opcje: { Wzór: ['Kwiat', 'Koło', 'Łuki', 'Pasy', 'Własny pomysł'] } },
  { id: 'palisady', nazwa: 'Palisady i stopnie', opis: 'Na skarpy, schody terenowe i rabaty. Okrągłe i prostokątne.', jedn: 'szt.', foto: 'img/tex/jasny.webp', wzor: ['grid', 'piaskowy'], marka: 'Joniec', katalog: JN },
  { id: 'obrzeza', nazwa: 'Obrzeża i krawężniki', opis: 'Trzymają kostkę w ryzach i wyznaczają granice ogrodu.', jedn: 'mb', foto: 'img/tex/grafit.webp', wzor: ['rows', 'bianco'] },
  { id: 'kamien', nazwa: 'Kamień naturalny', opis: 'Kostka granitowa i kamień łupany. Na lata, na pokolenia.', jedn: 'm²', foto: 'img/tex/granit.webp', wzor: ['cobble', 'granit'], opcje: { Rodzaj: ['Kostka granitowa', 'Kamień łupany'] } },
  { id: 'kruszywo', nazwa: 'Kruszywo dekoracyjne', opis: 'Grys, otoczaki, żwir. Na rabaty i ścieżki.', jedn: 't', foto: 'img/tex/zwir.webp', opcje: { Rodzaj: ['Biały grys', 'Otoczaki', 'Grys grafitowy', 'Żwir'] } },
  { id: 'wynajem', nazwa: 'Wypożyczalnia sprzętu', opis: 'Robisz sam? Wypożycz zagęszczarkę i inny sprzęt.', jedn: 'dni', foto: 'img/tex/piasek.webp', ikona: '<svg viewBox="0 0 64 48"><path d="M14 40h30v4H14z" fill="#2a2620"/><rect x="16" y="26" width="26" height="13" rx="3" fill="#f2a516" stroke="#2a2620"/><circle cx="29" cy="22" r="5" fill="#2a2620"/><path d="M38 27 L54 8 M50 6 l8 5" stroke="#2a2620" stroke-width="3" stroke-linecap="round" fill="none"/></svg>' }
];
const kafle = $('#kafle');
TOWARY.forEach(t => { const b = document.createElement('button'); b.type = 'button'; b.className = 'kafel'; b.dataset.id = t.id;
  b.innerHTML = `<div class="k-foto"><img src="${t.foto}" alt="" loading="lazy" decoding="async">${t.ikona ? `<span class="k-ikona">${t.ikona}</span>` : ''}${t.marka ? `<span class="k-marka">${t.marka}</span>` : ''}</div><div class="k-txt"><h3>${t.nazwa}</h3><p>${t.opis}</p><span class="k-dodaj"><i>+</i>Na wózek</span></div>`;
  if (t.wzor) gdySwiat(() => { const f = $('.k-foto', b), c = document.createElement('canvas'), D = Math.min(devicePixelRatio || 1, 2); c.width = 480 * D; c.height = 300 * D; Swiat.swatch(c, t.wzor[0], t.wzor[1], { dpr: D, k: .34 }); $('img', f).replaceWith(c); });
  b.addEventListener('click', () => otworz(t)); kafle.appendChild(b); });
const towar = $('#towar'), panel = $('#towarPanel'); let ostatni = null;
function zamknijTowar() { towar.hidden = true; ostatni && ostatni.focus({ preventScroll: true }); }
function otworz(t) {
  ostatni = document.activeElement; const wyb = {};
  let h = `<button type="button" class="zamknij" aria-label="Zamknij">${X}</button><div class="foto" style="background-image:url(${t.foto})"></div>${t.marka ? `<span class="marka-t">${t.marka}</span>` : ''}<h3>${t.nazwa}</h3><p>${t.opis}</p>${t.katalog ? `<a class="katalog-link" href="${t.katalog}" target="_blank" rel="noopener">Katalog producenta ↗</a>` : ''}`;
  Object.entries(t.opcje || {}).forEach(([k, arr]) => { wyb[k] = arr[0]; h += `<p class="opcje-t">${k}</p><div class="opcje" role="group" aria-label="${k}">${arr.map((v, i) => `<button type="button" class="chip${i ? '' : ' on'}" data-k="${k}" data-v="${v}" aria-pressed="${!i}">${v}</button>`).join('')}</div>`; });
  const naZdj = { kostka: 1, plyty: 1, wzory: 1, kamien: 1 }[t.id];
  h += `<div class="ilosc"><label for="ile" class="jedn">Ilość</label><input id="ile" type="number" inputmode="decimal" min="0" step="any" placeholder="${t.jedn === 'm²' ? '60' : t.jedn === 't' ? '2' : t.jedn === 'dni' ? '2' : t.jedn === 'projekt' ? '1' : '20'}"><span class="jedn">${t.jedn}</span><button type="button" class="btn" data-dodaj>Załaduj na wózek</button></div>`;
  if (t.jedn === 'm²') h += `<div class="licz-m2"><span>Nie wiesz, ile to m²? Wpisz wymiary:</span><label>dł. <input id="ileDl" type="number" inputmode="decimal" min="0" step="any" aria-label="Długość w metrach"> m</label><b>×</b><label>szer. <input id="ileSz" type="number" inputmode="decimal" min="0" step="any" aria-label="Szerokość w metrach"> m</label><output id="ileWyn"></output></div>`;
  if (naZdj) h += `<button type="button" class="btn jasny pelny-w" data-zdjecie>Pokaż na moim zdjęciu</button>`;
  panel.innerHTML = h; towar.hidden = false; $('.zamknij', panel).focus({ preventScroll: true });
  panel.onclick = e => { const c = e.target.closest('[data-k]'); if (c) { wyb[c.dataset.k] = c.dataset.v; $$(`[data-k="${c.dataset.k}"]`, panel).forEach(x => { const on = x === c; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); }); }
    if (e.target.closest('.zamknij')) zamknijTowar();
    if (e.target.closest('[data-zdjecie]')) { const WZ = { 'Jodełka': 'herring', 'Cegiełka': 'rows', 'Koszyk': 'basket', 'Łuki': 'arcs' }, KL = { Grafit: 'grafit', Szary: 'szary', 'Melanż': 'melanz', Piaskowy: 'piaskowy', 'Brąz': 'melanz', 'Biały': 'bianco' };
      const pat = t.id === 'plyty' ? 'slabs' : t.id === 'kamien' ? 'cobble' : WZ[wyb['Wzór']] || 'herring', pal = t.id === 'kamien' ? 'granit' : KL[wyb.Kolor] || 'grafit';
      zamknijTowar(); if (window.GBprojektant) GBprojektant.ustaw(pat, pal); else window.GBprojektantStart = { pat, pal }; $('#projektant').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }
    if (e.target.closest('[data-dodaj]')) { const v = parseFloat(($('#ile', panel).value || '').replace(',', '.')); const op = Object.values(wyb).join(', ');
      dodaj({ id: t.id + '|' + op, typ: t.id, nazwa: t.nazwa + (op ? ' (' + op + ')' : ''), ile: isFinite(v) && v > 0 ? v : null, jedn: t.jedn, foto: t.foto }); zamknijTowar(); } };
}
towar.addEventListener('click', e => { if (e.target === towar) zamknijTowar(); });
panel.addEventListener('input', e => { if (!e.target.closest('.licz-m2')) return; const dl = parseFloat(($('#ileDl', panel).value || '').replace(',', '.')), sz = parseFloat(($('#ileSz', panel).value || '').replace(',', '.')), o = $('#ileWyn', panel);
  if (dl > 0 && sz > 0) { const m = dl * sz; $('#ile', panel).value = Math.round(m * 1.05 * 10) / 10; o.textContent = `= ${fmt(m)} m², z zapasem 5%: ${fmt(m * 1.05)} m²`; } else o.textContent = ''; });

/* ---------- wzory: plac wokół układa się na nowo ---------- */
const OPISY = { herring: 'Jodełka: najmocniejszy układ na podjazd. Każdy wzór układamy pod Kłodzkiem.', rows: 'Cegiełka: klasyka na ścieżki i place.', basket: 'Koszyk: pary kostek na przemian. Spokojny wzór na taras.', slabs: 'Płyty na mijankę: nowocześnie, z dużych formatów.', arcs: 'Łuki segmentowe, jak na starym rynku.', cobble: 'Kostka granitowa rzędowa. Na lata, na pokolenia.' };
let wz = 'herring', wzKol = 'grafit', wzDot = false;
function pasekKol() { const wp = $('#wzPorownaj'); if (!wp) return; const KOL = $$('[data-kol]').map(b => [b.dataset.kol, b.textContent.trim()]); wp.innerHTML = KOL.map(([k, n]) => `<button type="button" class="wz-pk${k === wzKol ? ' on' : ''}" data-pk="${k}" aria-pressed="${k === wzKol}"><img src="img/wz/wz-${wz}-${k}.webp" alt="" width="112" height="72" loading="lazy" decoding="async"><span>${n}</span></button>`).join(''); }
function ustawWzor(p, k) { wz = p || wz; wzKol = k || wzKol;
  $$('[data-wz]').forEach(b => { const on = b.dataset.wz === wz; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  $$('[data-kol]').forEach(b => { const on = b.dataset.kol === wzKol; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  $('#wzOpis').textContent = OPISY[wz];
  pasekKol();
  const pal = wz === 'cobble' || wz === 'arcs' ? (wzKol === 'grafit' ? 'lupek' : wzKol === 'szary' || wzKol === 'piaskowy' ? 'granit' : wzKol) : wz === 'slabs' && wzKol === 'szary' ? 'bianco' : wzKol;
  window.Scena && Scena.ustawWzor(wz, pal); }
$$('[data-wz]').forEach(b => b.addEventListener('click', () => { wzDot = true; ustawWzor(b.dataset.wz); }));
$$('[data-kol]').forEach(b => b.addEventListener('click', () => { wzDot = true; ustawWzor(null, b.dataset.kol); }));
pasekKol();
$('#wzPorownaj') && $('#wzPorownaj').addEventListener('click', e => { const b = e.target.closest('[data-pk]'); if (b) { wzDot = true; ustawWzor(null, b.dataset.pk); } });
$('#wzDoZapytania').addEventListener('click', () => dodaj({ id: 'wzor-' + wz + '-' + wzKol, nazwa: 'Wzór: ' + $('[data-wz].on').textContent + ', ' + $('[data-kol].on').textContent.trim().toLowerCase(), ile: null, jedn: 'projekt', foto: 'img/tex/' + (wzKol === 'melanz' ? 'melanz' : wzKol === 'granit' ? 'granit' : wzKol === 'grafit' ? 'grafit' : 'jasny') + '.webp' }));
$('#wzNaZdjeciu').addEventListener('click', () => { if (window.GBprojektant) GBprojektant.ustaw(wz, wzKol); else window.GBprojektantStart = { pat: wz, pal: wzKol }; });
// impuls: gdy ktoś dojedzie do wzorów i nic nie klika, plac pokazuje sam jeden inny wzór
addEventListener('wzory-widac', () => { if (RM) return; setTimeout(() => { if (!wzDot) ustawWzor('basket', 'melanz'); }, 3600); }, { once: true });

/* ---------- galeria ---------- */
const lb = $('#lightbox'), lbImg = $('#lbImg'); $('#lbZamknij').innerHTML = X;
$$('.g-el').forEach(b => b.addEventListener('click', () => { lbImg.src = b.dataset.src; lbImg.alt = $('img', b).alt; lb.hidden = false; $('#lbZamknij').focus(); }));
lb.addEventListener('click', e => { if (e.target !== lbImg && !e.target.closest('#lbChce')) lb.hidden = true; });
$('#lbChce').addEventListener('click', () => { const src = lbImg.getAttribute('src'), el = $$('.g-el').find(b => b.dataset.src === src), opis = el ? ($('span', el) || {}).textContent || lbImg.alt : lbImg.alt;
  dodaj({ id: 'podobnie-' + src, nazwa: 'Chcę podobnie jak na zdjęciu: ' + opis, ile: null, jedn: 'projekt', foto: src }); lb.hidden = true; });

/* ---------- zapytanie ---------- */
let kosz = store.get('gb-zapytanie', []).filter(p => p.foto);
function zapisz() { store.set('gb-zapytanie', kosz); odswiez(); }
function dodaj(p) { const e = kosz.find(x => x.id === p.id); if (e) { if (p.ile) e.ile = (e.ile || 0) + p.ile; } else kosz.push(p); window.GBwozek && GBwozek.dodano(p, !e); zapisz(); const b = $('#koszykBtn'); b.classList.remove('skok'); void b.offsetWidth; b.classList.add('skok'); toast('Na wózku: ' + p.nazwa); }
window.GBdodaj = p => dodaj({ foto: 'img/tex/grafit.webp', ...p });
const fmt = n => String(Math.round(n * 10) / 10).replace('.', ',');
const fotoP = p => (window.GBwozek && GBwozek.foto(p)) || p.foto;
const tekst = () => kosz.map(p => '- ' + p.nazwa + (p.ile ? ': ' + fmt(p.ile) + ' ' + p.jedn : ' (ilość do ustalenia)')).join('\n');
function odswiez() {
  $('#koszykIle').textContent = kosz.length; $('#koszykBtn').classList.toggle('pusty', !kosz.length);
  $$('.kafel').forEach(k => k.classList.toggle('w-koszyku', kosz.some(p => p.typ === k.dataset.id)));
  const L = $('#ksLista'); L.innerHTML = kosz.length ? '' : '<p class="ks-pusty">Wózek jest pusty. Wybierz coś z oferty, dodaj towar w sekcji „Załaduj wózek” albo zrób projekt na swoim zdjęciu.</p>';
  kosz.forEach((p, i) => { const r = document.createElement('div'); r.className = 'ks-poz'; r.innerHTML = `<i style="background-image:url('${fotoP(p)}')"></i><div><b>${p.nazwa}</b><small>${p.ile ? fmt(p.ile) + ' ' + p.jedn : 'ilość do ustalenia'}</small></div><button type="button" aria-label="Zdejmij z wózka: ${p.nazwa}">${X}</button>`; $('button', r).addEventListener('click', () => { kosz.splice(i, 1); zapisz(); }); L.appendChild(r); });
  const m2 = kosz.filter(p => p.jedn === 'm²' && p.ile).reduce((a, p) => a + p.ile, 0);
  $('#ksKalk').innerHTML = m2 ? `Na <b>${fmt(m2)} m²</b> warto doliczyć ok. 5% na docinki (<b>${fmt(m2 * 1.05)} m²</b>) i ok. <b>${fmt(m2 * .064)} t</b> piasku na podsypkę 4 cm. Dokładnie policzymy przy pomiarze.` : '';
  const fk = $('#fKoszyk'); fk.hidden = !kosz.length; fk.innerHTML = kosz.length ? '<b>Na wózku:</b>' + kosz.map(p => '• ' + p.nazwa + (p.ile ? ' – ' + fmt(p.ile) + ' ' + p.jedn : '')).join('<br>') : ''; $('#fZapytanie').value = tekst(); window.GBwozek && GBwozek.odswiez(); }
const ks = $('#koszyk'), ksB = $('#koszykBtn');
function koszyk(o) { ks.hidden = !o; ksB.setAttribute('aria-expanded', o); if (o) $('#koszykZamknij').focus({ preventScroll: true }); }
ksB.addEventListener('click', () => koszyk(ks.hidden)); $('#koszykZamknij').innerHTML = X; $('#koszykZamknij').addEventListener('click', () => koszyk(false)); $('#ksForm').addEventListener('click', () => koszyk(false));
addEventListener('keydown', e => { if (e.key === 'Escape') { if (!ks.hidden) { koszyk(false); ksB.focus({ preventScroll: true }); } if (!towar.hidden) zamknijTowar(); lb.hidden = true; burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('otwarte'); } });
function waLink(extra, nag) { let t = 'Dzień dobry, piszę ze strony GardenBruk.'; if (kosz.length) t += '\n\n' + (nag || 'Na moim wózku:') + '\n' + tekst(); if (extra) t += '\n\n' + extra; return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); }
for (const s of ['#waPlywak', '#ktWa', '#dokWa']) $(s).addEventListener('click', e => { if (kosz.length) { e.preventDefault(); open(waLink(), '_blank', 'noopener'); } });

/* ---------- formularz ---------- */
const form = $('#form'), info2 = $('#fInfo');
$$('[data-temat]').forEach(a => a.addEventListener('click', () => { const w = $('#fWiad'); if (!w.value) w.value = a.dataset.temat + ': '; }));
function sprawdz() { let ok = true; [['#fImie', v => v.trim().length > 1], ['#fTel', v => v.replace(/\D/g, '').length >= 9]].forEach(([s, f]) => { const el = $(s), g = f(el.value); el.classList.toggle('bledne', !g); el.setAttribute('aria-invalid', !g); if (!g) ok = false; });
  if (!ok) { info2.textContent = 'Podaj imię i numer telefonu (min. 9 cyfr).'; info2.classList.add('blad'); return false; }
  if (!$('#fZgoda').checked) { info2.textContent = 'Zaznacz zgodę na kontakt, żebyśmy mogli odpisać.'; info2.classList.add('blad'); return false; } return true; }
const opisF = () => ['Imię: ' + $('#fImie').value, 'Telefon: ' + $('#fTel').value, $('#fMiejsce').value ? 'Miejscowość: ' + $('#fMiejsce').value : '', $('#fWiad').value ? 'Wiadomość: ' + $('#fWiad').value : ''].filter(Boolean).join('\n');
$('#fWa').addEventListener('click', () => { info2.classList.remove('blad'); if (!sprawdz()) return; open(waLink(opisF()), '_blank', 'noopener'); info2.textContent = 'WhatsApp otwarty z gotową wiadomością. Wystarczy ją wysłać.'; });
let wys = false;
form.addEventListener('submit', async e => { e.preventDefault(); info2.classList.remove('blad'); if (wys || !sprawdz()) return; wys = true; const b = $('#fMail'); b.disabled = true; info2.textContent = 'Wysyłam…'; $('#fZapytanie').value = tekst();
  try { const r = await fetch('https://formsubmit.co/ajax/info@falcon-eye.de', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) }); const j = await r.json().catch(() => ({}));
    if (r.ok && (j.success === 'true' || j.success === true)) { info2.textContent = 'Dziękujemy! Zapytanie dotarło. Odezwiemy się najszybciej, jak to możliwe.'; form.reset(); kosz = []; zapisz(); } else throw new Error('odp'); }
  catch (err) { info2.classList.add('blad'); info2.innerHTML = 'Nie udało się wysłać. Napisz na <a href="' + waLink(opisF()) + '" target="_blank" rel="noopener">WhatsApp</a> albo na <a href="mailto:biuro@gardenbruk.net?subject=Zapytanie&body=' + encodeURIComponent(opisF() + '\n\n' + tekst()) + '">biuro@gardenbruk.net</a>. Twoje dane są już w wiadomości.'; }
  wys = false; b.disabled = false; });
$('#mapaBtn').addEventListener('click', () => { $('#mapa').innerHTML = '<iframe title="Mapa dojazdu: Mikowice 16, Kłodzko" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=16.60%2C50.40%2C16.72%2C50.47&layer=mapnik&marker=50.435%2C16.66"></iframe>'; });
/* ---------- start: co planujesz? ---------- */
const PLAN = { podjazd: ['polbruk', 'pb-kostka', { grub: '8 cm' }], sciezka: ['polbruk', 'pb-kostka', { grub: '6 cm' }], taras: ['polbruk', 'pb-plyty', { linia: 'Tarasowe' }], ogrodzenie: ['joniec', 'jn-gorc', {}] };
$$('[data-plan]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.plan; if (k === 'projekt') { $('#projektant').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); return; }
  const [m, pid, o] = PLAN[k]; window.GBwozek && GBwozek.wybierz(m, pid, o); $('#wozek').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }));
/* ---------- producenci: od razu do zamówienia ---------- */
$$('[data-zamow]').forEach(b => b.addEventListener('click', () => { window.GBwozek && GBwozek.wybierz(b.dataset.zamow); $('#wozek').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }));
/* ---------- jak pracujemy: prośba o pomiar ---------- */
const pm = { dzien: new Set(), pora: new Set() };
$$('[data-pm]').forEach(b => b.addEventListener('click', () => { const g = pm[b.dataset.pm], v = b.dataset.v; g.has(v) ? g.delete(v) : g.add(v); const on = g.has(v); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); }));
$('#pmWa') && $('#pmWa').addEventListener('click', () => { const t = ['Dzień dobry, proszę o umówienie pomiaru.', pm.dzien.size ? 'Pasują mi dni: ' + [...pm.dzien].join(', ').replace(/\.?$/, '.') : '', pm.pora.size ? 'Pora: ' + [...pm.pora].join(' albo ') + '.' : '', $('#pmMiejsce').value ? 'Miejscowość: ' + $('#pmMiejsce').value + '.' : '', $('#pmCo').value ? 'Do zmierzenia: ' + $('#pmCo').value + '.' : ''].filter(Boolean).join('\n');
  open('https://wa.me/' + WA + '?text=' + encodeURIComponent(t), '_blank', 'noopener'); });
/* ---------- dla firm: zapytanie w trzech polach ---------- */
let fiKto = 'Deweloper';
$$('[data-fi]').forEach(b => b.addEventListener('click', () => { fiKto = b.dataset.fi; $$('[data-fi]').forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); }); }));
const fiTekst = () => [`Zapytanie od firmy (${fiKto.toLowerCase()}).`, $('#fiCo').value && 'Inwestycja: ' + $('#fiCo').value + '.', $('#fiIle').value && 'Ilość: ' + $('#fiIle').value + '.', $('#fiKiedy').value && 'Termin: ' + $('#fiKiedy').value + '.'].filter(Boolean).join(' ');
$('#fiWa') && $('#fiWa').addEventListener('click', () => open('https://wa.me/' + WA + '?text=' + encodeURIComponent('Dzień dobry, piszę ze strony GardenBruk.\n' + fiTekst()), '_blank', 'noopener'));
$('#fiForm') && $('#fiForm').addEventListener('click', () => { $('#fWiad').value = fiTekst(); });
/* ---------- gry: wyzwij znajomego ---------- */
$('#gryWyzwij') && $('#gryWyzwij').addEventListener('click', async () => { const r = [['Ułóż sam', '#rekUloz'], ['Zgadnij wzór', '#rekZgad'], ['Memory z kostki', '#rekMem']].map(([n, s]) => { const v = ($(s) || {}).textContent || ''; return /Rekord/.test(v) ? n + ': ' + v.replace('Rekord: ', '') : null; }).filter(Boolean);
  const url = location.origin + location.pathname + '#gry', t = (r.length ? 'Moje rekordy w grach GardenBruk: ' + r.join(', ') + '. Pobijesz?' : 'Zagraj w gry GardenBruk na stronie i pobij moje wyniki!') + ' ' + url;
  if (navigator.share) { try { await navigator.share({ text: t }); return; } catch (e) { if (e && e.name === 'AbortError') return; } } open('https://wa.me/?text=' + encodeURIComponent(t), '_blank', 'noopener'); });
/* ---------- kontakt: wizytówka do telefonu ---------- */
const vcf = ['BEGIN:VCARD', 'VERSION:3.0', 'N:;Andrzej;;;', 'FN:Andrzej · GardenBruk', 'ORG:GardenBruk – Centrum Architektury Ogrodowej', 'TEL;TYPE=CELL:+48500250936', 'EMAIL:biuro@gardenbruk.net', 'ADR;TYPE=WORK:;;Mikowice 16;Kłodzko;;57-300;Polska', 'URL:https://www.facebook.com/gardenbruk.net/', 'END:VCARD'].join('\r\n');
$('#ktVcf') && ($('#ktVcf').href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcf));
window.GBkosz = { get lista() { return kosz; }, dodaj, odswiez: () => odswiez(), tekst, waLink, fmt, usun(i) { kosz.splice(i, 1); zapisz(); }, ustawIle(i, v) { if (kosz[i]) { kosz[i].ile = v; zapisz(); } }, wyczysc() { kosz = []; zapisz(); }, przywroc(a) { kosz = (a || []).map(p => ({ ...p })); zapisz(); } };
odswiez();
window.__gb = { get scena() { return window.Scena; } };
