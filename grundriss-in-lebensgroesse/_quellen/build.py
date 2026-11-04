# Grundriss in Lebensgröße Saarlouis – Vorführung Küchenplaner (Falcon Eye, Florian-Chat)
# Baut nach /home/claude/falcon-entwurf/grundriss-in-lebensgroesse/
# Planer-Basis: kuechenstudio-quellen/kuechenplaner (nur lesend, eigene Kopie im Ausgabeordner)
import os, sys, time, shutil, json, re
from urllib.parse import quote
KP = '/home/claude/kuechenstudio-quellen/kuechenplaner/'
FEKIT = '/home/claude/kuechenstudio-quellen/fe-kit/'
sys.path.insert(0, KP); import kp_markup
HERE = os.path.dirname(os.path.abspath(__file__)) + '/'
OUT = '/home/claude/falcon-entwurf/grundriss-in-lebensgroesse/'
V = str(int(time.time()))

STUDIO = 'Grundriss in Lebensgröße'
TEL = '06831 6985980'; TEL_L = 'tel:+4968316985980'
WA = 'https://wa.me/491637846992'
MAIL = 'info_sll@in-lebensgroesse.de'
FORM_MAIL = 'info@falcon-eye.de'   # Vorführung: alle Formulare an Falcon Eye (Natan, 17.10.)
ADR1 = 'Industriestraße 22'; ADR2 = '66740 Saarlouis-Beaumarais'
ORANGE = '#f07b4f'

# Logo: Wortmarke + Maßband (nachgebaut nach dem Original-SVG der Website)
def ticks():
    out = []; x = 22.9; i = 0
    while x < 257:
        h = 15.1 if i % 5 == 0 else 9.8
        out.append(f'<rect x="{x - .45:.2f}" y="80.1" width=".9" height="{h}" rx=".45"/>'); x += 4.755; i += 1
    out.append('<rect x="260.45" y="80.1" width=".9" height="54.3" rx=".45"/>')
    return ''.join(out)
def logo(cls, box=False):
    bg = f'<rect width="283.5" height="170.1" fill="{ORANGE}"/>' if box else ''
    return (f'<svg class="{cls}" viewBox="0 0 283.5 170.1" role="img" aria-label="Grundriss in Lebensgröße">{bg}<g fill="#fff">'
            '<text x="20.5" y="69.6" font-family="Montserrat,sans-serif" font-weight="400" font-size="45" textLength="242" lengthAdjust="spacingAndGlyphs">GRUNDRISS</text>'
            + ticks() +
            '<text x="21.5" y="134.4" font-family="Montserrat,sans-serif" font-weight="500" font-size="20.2" textLength="228" lengthAdjust="spacingAndGlyphs">IN LEBENSGRÖSSE</text>'
            '</g></svg>')

POP = '''<div class="kpl-pop" data-kpl-pop><div class="kpl-pop-img"><img src="img/kueche.webp" alt="" loading="lazy"><span class="kpl-3d">3D</span></div>
<div class="kpl-pop-t"><p class="kpl-k">Neu · für Ihre Kunden</p><p class="kpl-h">3D-Küchenplaner <span>für zu Hause</span></p><p class="kpl-p">Küche selbst planen – Raum, Form, Schränke, Farben. Live in 3D, auf Handy, Tablet und PC.</p>
<a class="btn btn--orange" href="planer.html?film=1" data-kpl-go>Küche selbst planen <span class="arr">→</span></a></div></div>'''
NAV = [('index.html', 'Home'), ('#', 'Grundriss'), ('#', 'Küchenstudio'), ('planer.html', 'Küchenplaner'), ('#', 'Events'), ('#', 'Partner')]
def header(page):
    links = ''
    for h, t in NAV:
        if t == 'Küchenplaner':
            links += f'<span class="kpl-wrap"><a class="kpl{" active" if page == "planer" else ""}" href="planer.html" data-kpl{" aria-current=\"page\"" if page == "planer" else ""}>Küchenplaner<em>Neu</em></a>' + (POP if page == 'index' else '') + '</span>'
        else:
            act = ' class="active" aria-current="page"' if (page == 'index' and t == 'Home') else ''
            href = h if h != '#' else 'index.html#bereiche'
            links += f'<a{act} href="{href}" data-demo>{t}</a>'
    links += '<span class="nav-dd"><a href="index.html#kontakt" data-demo>Über uns <i class="caret" aria-hidden="true"></i></a></span>'
    return f'''<header class="site-header" data-page="{page}"><div class="rails" aria-hidden="true"><i><i></i></i></div>
<div class="container header-row"><a class="brand" href="index.html">{logo("logo-h")}<span class="sr">– Startseite</span></a>
<nav class="nav" id="nav" aria-label="Hauptnavigation">{links}<a class="btn btn--white" href="index.html#kontakt">Jetzt anfragen <span class="arr">→</span></a></nav>
<button class="burger" type="button" aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button></div></header>'''

def head(title, desc, page, extra_css=''):
    return f'''<!doctype html>
<html lang="de" data-page="{page}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="robots" content="noindex, nofollow">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="{STUDIO}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="https://entwurf.falcon-eye.de/grundriss-in-lebensgroesse/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#020202">
<link rel="icon" href="img/favicon.png">
<link rel="preload" href="fonts/montserrat-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/gil.css?v={V}">{extra_css}
</head>
<body class="p-{page}">
<a class="skip" href="#main">Zum Inhalt springen</a>
'''

FOOTER = f'''<footer class="site-footer" id="kontakt"><div class="container footer-grid">
<div class="f-brand">{logo("logo-f", box=True)}<p>Wir schaffen räumliches Vorstellungsvermögen!</p>
<p class="f-c"><a href="{TEL_L}">{TEL}</a><a href="mailto:{MAIL}">{MAIL}</a><a href="{WA}" target="_blank" rel="noopener">WhatsApp</a></p>
<p class="f-a">{ADR1}<br>{ADR2}</p></div>
<div><p class="fh">Seiten</p><a href="index.html">Home</a><a href="index.html#bereiche">Grundriss</a><a href="index.html#bereiche">Küchenstudio</a><a href="planer.html">Küchenplaner</a><a href="index.html#bereiche">Events</a><a href="index.html#bereiche">Partner</a></div>
<div><p class="fh">Unternehmen</p><a href="index.html#kontakt">Über uns</a><a href="index.html#kontakt">Presse</a><a href="index.html#kontakt">Dein Weg zu uns</a></div>
<div><p class="fh">Rechtliches</p><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div>
</div><div class="container f-b"><span>© Grundriss in Lebensgröße Saar-Lor-Lux GmbH</span><span>Entwurf: <a href="https://falcon-eye.de" target="_blank" rel="noopener">Falcon Eye</a> · nicht die offizielle Seite</span></div></footer>'''

ICON = {
 'grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
 'chef': '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',
 'party': '<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',
 'max': '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
 'pack': '<path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><path d="M3.29 7 12 12l8.71-5"/><path d="M12 22V12"/>',
 'arrow': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
 'cube': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
}
def ic(n, cls=''): return f'<svg class="{cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICON[n]}</svg>'

def card(img, alt, icon, h, p, href, extra=''):
    return f'''<a class="home-card{extra}" href="{href}"><div class="home-card-inner"><img src="img/{img}" alt="{alt}" loading="lazy"><div class="home-card-body"><span class="home-card-icon">{ic(icon)}</span><h2 class="hc">{h}</h2><p>{p}</p></div>{ic('arrow', 'home-card-arrow')}</div><span class="home-discover" aria-hidden="true">Jetzt entdecken</span></a>'''

INDEX = head('Grundriss in Lebensgröße Saarlouis – Küchenstudio & Events', 'Grundriss in Lebensgröße, Küchenstudio und Eventlocation – auf 200 m² mitten in Saarlouis. Neu: Küche online planen.', 'index') + header('index') + f'''
<div class="curtain" data-curtain role="dialog" aria-label="Begrüßung"><div class="c-l"></div><div class="c-r"></div>
<div class="c-in"><div class="c-logo">{logo("logo-c")}</div><p class="c-for">Für Florian und das Team von Grundriss in Lebensgröße</p><p class="c-h">Wir haben etwas Besonderes<br>für Sie gebaut.</p>
<button type="button" class="btn btn--orange c-go" data-curtain-go>Vorhang auf <span class="arr">→</span></button></div>
<button type="button" class="c-skip" data-curtain-skip aria-label="Überspringen"></button></div>
<main id="main">
<section class="hero home-hero"><div class="home-hero-bg" aria-hidden="true"></div><div class="rails" aria-hidden="true"><i><i></i></i></div>
<div class="container">
<p class="home-kicker">Probewohnen · Küche erleben · Feiern</p>
<h1>Drei Konzepte. Ein Ort.</h1>
<p class="home-hero-copy">Grundriss in Lebensgröße, Küchenstudio und Eventlocation - auf 200 m² mitten in Saarlouis.</p>
<div class="home-cards" id="bereiche">
{card('saeule.webp', 'Grundriss-Projektion mit beweglichen Möbeln in der Halle', 'grid', 'Planung in Lebensgröße', 'Probewohnen, bevor Sie bauen: Ihr Grundriss im Maßstab 1:1 mit Wänden und Möbeln.', 'index.html#bereiche')}
{card('kueche.webp', 'Drei Personen besprechen eine Küche am digitalen Planungstisch', 'chef', 'Küchenstudio', 'Ihre Küche planen, in Originalgröße erleben und aus einer Hand bekommen.', 'planer.html', ' is-kp')}
{card('events.webp', 'Hände mit Cocktails über einem Bartisch im warmen Licht', 'party', 'Events', 'Sommerlounge, Pop-Up-Club, Ihre Feier oder Ihr Firmenevent.', 'index.html#bereiche')}
</div>
<div class="home-facts"><span>{ic('max')}200 m² in Originalgröße</span><span>{ic('pack')}Planung, Verkauf &amp; Montage aus einer Hand</span><span class="home-facts-badge">★ 5,0 · 43 Google-Rezensionen</span></div>
</div></section>
</main>
<div class="guide" data-guide aria-hidden="true"><svg class="g-cur" viewBox="0 0 32 32"><path d="M6 3l19 11.5-8.2 1.6 4.9 9.4-3.6 1.9-4.9-9.4L6 23.6z" fill="#fff" stroke="#020202" stroke-width="1.6" stroke-linejoin="round"/></svg><span class="g-ring"></span>
<div class="g-tip"><b>Neu: Ihre Küche online planen</b><span>Raum, Form, Schränke, Farben – live in 3D. Hier klicken.</span></div></div>
{FOOTER}
<script src="assets/gil.js?v={V}"></script>
</body></html>'''

# ---------------- Planer ----------------
KPC = dict(
    film_erf='mit Planung, Verkauf und Montage aus einer Hand', mail=MAIL, wa=WA, form_mail=FORM_MAIL,
    studio='Grundriss in Lebensgröße · Saarlouis', greet='Hallo Florian', acc=ORANGE,
    person='Florian', person_short='Florian', pl_name='Planungstisch Saarlouis', pl_theme='blueprint', herst='ballerina,nobilia',
    ki_name='Raum-Vorschau', ki_kick='Neu · Raum-Vorschau per Foto', ki_h1='Ihr Raum heute.', ki_h2='Ihre Küche morgen.',
    ki_p='Ein Handyfoto vom leeren Raum oder Ihrer alten Küche genügt. Der Planer stellt die Küche, die Sie gerade geplant haben, in 3D direkt in Ihr Foto – mit Vorher/Nachher-Regler. Danach erleben Sie sie bei uns in der Halle in Originalgröße.',
    ah_kick='Planung in Lebensgröße', ah_h1='Gebaut für', ah_h2='Ihre Größe.', ah_p='Stellen Sie Ihre Größe ein – wir finden die Arbeitshöhe, die zu Ihnen passt.')

BRANDS = f'''<section class="gil-brands" aria-labelledby="gb-h"><div class="container">
<p class="home-kicker">Unsere Küchen</p><h2 id="gb-h">Zwei Marken. <em>Ihre Wahl.</em></h2>
<div class="gb-g">
<article class="gb gb-b"><span class="gb-tag">Top-Qualität</span><h3>Ballerina</h3><p>Hochwertige Küchen für alle, die bei Fronten, Verarbeitung und Ausstattung keine Kompromisse machen.</p><a class="btn btn--orange sm" href="#main" data-gb="ballerina">Mit Ballerina planen</a></article>
<article class="gb gb-n"><span class="gb-tag">Top-Preise</span><h3>Nobilia</h3><p>Einer der größten Küchenhersteller – riesige Auswahl an Farben und Fronten zu starken Preisen.</p><a class="btn btn--white sm" href="#main" data-gb="nobilia">Mit Nobilia planen</a></article>
</div>
<p class="gb-n2">Ihre Farbwahl im Planer schicken wir mit dem passenden Serienton an Florian. Die Feinheiten klären wir gemeinsam – am Planungstisch und in Originalgröße in unserer Halle.</p>
</div></section>'''

kpm = kp_markup.planner(KPC).replace('href="index.html#arbeitshoehe"', 'href="#arbeitshoehe"')
FILM = '''<div class="film" data-film hidden><div class="film-in"><video data-film-v playsinline preload="none"></video>
<button type="button" class="film-play" data-film-play aria-label="Film abspielen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><span>Film ansehen · 2 Minuten, mit Ton</span></button>
<button type="button" class="film-skip" data-film-skip>Direkt zum Planer →</button></div>
<div class="film-end" data-film-end hidden><p class="kpl-k">Jetzt Sie</p><p class="film-h">Probieren Sie es selbst aus.</p><button type="button" class="btn btn--orange" data-film-close>Küchenplaner öffnen <span class="arr">→</span></button></div></div>
<div class="logo-tip" data-logo-tip hidden><b>Ihr Logo auf der Rückwand</b><span>Ein Klick – und Ihr Studio ist in jeder Küche. Kunden laden genauso ihr eigenes Foto hoch.</span><div class="ctas"><button type="button" class="btn btn--orange sm" data-logo-on>Logo als Rückwand zeigen</button><button type="button" class="btn btn-line sm" data-logo-x>Später</button></div></div>'''
PLANER = (head('Küchenplaner | Grundriss in Lebensgröße Saarlouis', 'Küche online in 3D planen – Raum, Form, Schränke, Farben – und mit Maßen und Plänen an das Küchenstudio in Saarlouis schicken.', 'planer',
           f'\n<link rel="stylesheet" href="assets/kp.css?v={V}">\n<link rel="stylesheet" href="assets/gil-kp.css?v={V}">')
          + header('planer') + FILM + kpm + kp_markup.ki_section(KPC, page='planer') + kp_markup.hoehe_section(KPC) + BRANDS + FOOTER
          + f'\n<script src="assets/gil-pre.js?v={V}"></script>\n<script src="assets/ki.js?v={V}"></script>\n<script src="assets/kp.js?v={V}"></script>\n<script src="assets/gil.js?v={V}"></script>\n')
sys.path.insert(0, '/home/claude/kuechenstudio-quellen/tools'); import kpaddons
PLANER += kpaddons.tags(V, {'mail': FORM_MAIL, 'site': STUDIO, 'accent': ORANGE, 'bottom-m': 24}) + '</body></html>'

def legal(t, body): return head(t + ' | ' + STUDIO, t, 'legal') + header('legal') + f'<main id="main" class="legal container"><h1>{t}</h1>{body}</main>' + FOOTER + f'<script src="assets/gil.js?v={V}"></script></body></html>'
IMP = legal('Impressum', f'<p><b>Designentwurf von Falcon Eye – nicht die offizielle Seite.</b> Vor einer Veröffentlichung wird das vollständige Impressum des Studios eingesetzt.</p><p>Grundriss in Lebensgröße Saar-Lor-Lux GmbH<br>{ADR1}<br>{ADR2}</p><p>Telefon: {TEL}<br>E-Mail: {MAIL}</p><p>Entwurf und Umsetzung: Falcon Eye, <a href="https://falcon-eye.de" target="_blank" rel="noopener">falcon-eye.de</a></p>')
DS = legal('Datenschutz', '<p>Designentwurf. Vor einer Veröffentlichung wird die vollständige Datenschutzerklärung des Studios ergänzt. Diese Seite lädt keine Inhalte von fremden Servern; Schriften liegen auf diesem Server.</p><p><b>Küchenplaner und Raum-Vorschau:</b> Beides läuft vollständig in Ihrem Browser. Ein Raumfoto, das Sie auswählen oder aufnehmen, wird nur auf Ihrem Gerät verarbeitet – es wird weder hochgeladen noch gespeichert. Ihr Entwurf und Fotos werden erst übertragen, wenn Sie sie selbst absenden (Formular, E-Mail oder WhatsApp). Damit Sie später weiterplanen können, merkt sich der Planer Ihren letzten Entwurf im Speicher Ihres Browsers (localStorage). „Neu anfangen“ oder das Löschen der Website-Daten entfernt ihn.</p><p><b>Formular:</b> In diesem Entwurf gehen Anfragen über den Formulardienst FormSubmit (Sitz in den USA) an den Website-Dienstleister Falcon Eye (Art. 6 Abs. 1 lit. b DSGVO).</p><p><b>Feedback zum Planer:</b> freiwillig, ohne Namen oder E-Mail-Adresse, ebenfalls über FormSubmit.</p>')

os.makedirs(OUT + 'assets', exist_ok=True); os.makedirs(OUT + 'img/ki', exist_ok=True); os.makedirs(OUT + 'js', exist_ok=True)
os.makedirs(OUT + 'fonts', exist_ok=True); os.makedirs(OUT + 'rt/tex', exist_ok=True); os.makedirs(OUT + 'rt/hdri', exist_ok=True); os.makedirs(OUT + 'assets/mv', exist_ok=True)
for n, h in [('index.html', INDEX), ('planer.html', PLANER), ('impressum.html', IMP), ('datenschutz.html', DS)]:
    open(OUT + n, 'w').write(h)
for f in os.listdir(HERE + 'src/fonts'): shutil.copy(HERE + 'src/fonts/' + f, OUT + 'fonts/' + f)
for f in ['gil.css', 'gil-kp.css', 'gil.js', 'gil-pre.js']: shutil.copy(HERE + 'src/' + f, OUT + 'assets/' + f)
os.makedirs(OUT + 'media', exist_ok=True)
for f in (os.listdir(HERE + 'media') if os.path.isdir(HERE + 'media') else []): shutil.copy(HERE + 'media/' + f, OUT + 'media/' + f)
for f in os.listdir(HERE + 'src/out-img'): shutil.copy(HERE + 'src/out-img/' + f, OUT + 'img/' + f)
# Planer (eigene Kopie)
shutil.copy(KP + 'kp.js', OUT + 'assets/kp.js'); shutil.copy(KP + 'kp.css', OUT + 'assets/kp.css'); shutil.copy(KP + 'ki.js', OUT + 'assets/ki.js')
shutil.copy(KP + 'planner3d.js', OUT + 'js/planner3d.js')
for f in ['kp-foto.js', 'kp-result.js', 'kp-result.css', 'kp-ai.js', 'kp-ai.css', 'kp-film.js', 'kp-film.css', 'kp-game.js', 'kp-raum.js', 'kp-ar.js', 'kp-arx.js', 'qrcode.js']:
    shutil.copy(KP + f, OUT + 'assets/' + f)
shutil.copy(KP + 'mv/model-viewer.min.js', OUT + 'assets/mv/model-viewer.min.js')
for f in os.listdir(KP + 'ki'): shutil.copy(KP + 'ki/' + f, OUT + 'img/ki/' + f)
shutil.copy(KP + 'kp-rt.js', OUT + 'rt/kp-rt.js'); shutil.copy(KP + 'kp-photo.js', OUT + 'rt/kp-photo.js')
for f in os.listdir(KP + 'tex'): shutil.copy(KP + 'tex/' + f, OUT + 'rt/tex/' + f)
for f in ['park.exr', 'apartment.exr', 'night.exr']: shutil.copy(KP + 'hdri/' + f, OUT + 'rt/hdri/' + f)
for f in ('fe-feedback.js',): shutil.copy(FEKIT + f, OUT + 'assets/' + f)
# Holz-Hinweis ohne fremde Herstellernamen (eigene Kopie)
js = open(OUT + 'assets/kp.js').read()
js = js.replace("eiche: 'Holzdekore zum Beispiel Nolte „MANHATTAN Eiche Cognac“, Schüller „Eiche Skagen“'", "eiche: 'Eiche: passendes Holzdekor von Ballerina oder Nobilia im Studio wählen'")
F = json.load(open(HERE + 'farben.json'))
arr = lambda L: '[' + ', '.join(f"['{n}', '{h.lower()}']" for n, h, *_ in L) + ']'
js, n1 = re.subn(r"const HERST = \{ nobilia: \[.*?\],\n", lambda m: "const HERST = { ballerina: " + arr(F['ballerina']) + ", nobilia: " + arr(F['nobilia']) + ",\n", js, count=1, flags=re.S)
js = js.replace("const HERSTN = { nobilia: 'nobilia',", "const HERSTN = { ballerina: 'Ballerina', nobilia: 'Nobilia',")
js = js.replace("window.KP = {", "window.KP = { herstHint: () => { try { return herstHint(P.style); } catch (e) { return ''; } },", 1)
assert n1 == 1, 'HERST nicht gefunden'
open(OUT + 'assets/kp.js', 'w').write(js)
ai = open(OUT + 'assets/kp-ai.js').read().replace("b.setAttribute('aria-label', 'KI plant Ihre Küche')", "b.setAttribute('aria-label', 'KI-Planung: KI plant Ihre Küche')")
open(OUT + 'assets/kp-ai.js', 'w').write(ai)
print('ok', OUT)
