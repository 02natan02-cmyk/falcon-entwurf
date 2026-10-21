# Feedback & Bewertung – Bausteine für alle Kundenseiten (21.10.2026)

Vorschau: https://entwurf.falcon-eye.de/labor/fe-kit/

## 1. `fe-feedback.js` – Feedback in Klick-Karten
Nach den aufwendigen Funktionen einer Seite (Planer, Rechner, Spiele, Übungen) fragt die Seite spielerisch nach:
Gesamteindruck (5 Gesichter) → Was hat gefallen? → Hat etwas gehakt? → Was fehlt noch? (Chips + ein freiwilliger Satz) → Danke mit Konfetti.
Ohne Name und ohne E-Mail. Versand über FormSubmit (AJAX), solange Entwurf an info@falcon-eye.de.

```html
<script src="assets/fe-feedback.js?v=…" data-mail="info@falcon-eye.de" data-site="Name der Seite"
        data-topic="Gartenplaner" data-art="der" data-accent="#2f6b3a" data-bottom-m="96" defer></script>
```
- Fester Knopf: beliebiges Element mit `data-fe-fb="Thema"` (optional `data-fe-fb-art="der|die|das"`).
- Einladung nach dem Abschluss: `FEFeedback.invite({ topic: 'Gartenplaner', art: 'der' })` – höchstens einmal pro Besuch, verschwindet nach 16 s.
- Optional: `data-anrede="du"`, `data-good="A|B|C"` (Antworten bei „Was hat gefallen?“), `data-wish="A|B|C"` (Wünsche).
- Test ohne Versand: Seite mit `?fefb=test` öffnen, die Daten stehen dann in `window.__fefbLast`.

## 2. `fe-bewertung.js` – kleines Bewertungs-Banner
„Zufrieden mit uns? Bewerten Sie uns gern bei Google – das hilft uns sehr weiter.“ + Knopf „Jetzt bewerten“ mit Direktlink.
Erscheint höchstens einmal pro Besuch, erst nach 35 s sichtbarer Lesezeit und etwas Scrollen, verschwindet nach 18 s von selbst. Nur ein Link: kein Fremd-Skript, keine Cookies.

```html
<script src="assets/fe-bewertung.js?v=…" data-url="https://search.google.com/local/writereview?placeid=PLACE_ID"
        data-accent="#…" data-skip="impressum|datenschutz" data-bottom="22" data-bottom-m="90" defer></script>
```
- `data-side="right|center"`, wenn unten links schon etwas sitzt. `data-url="#demo"` für Beispielseiten (zeigt nur einen Hinweis).
- Keine Belohnung für Bewertungen anbieten (Google-Richtlinien, UWG).

## Datenschutz (je Seite ergänzen)
- Feedback: freiwillig, ohne Name/E-Mail, nur Auswahl und ein kurzer Satz, über FormSubmit (Art. 6 Abs. 1 lit. f DSGVO), Bitte um keine persönlichen Daten im Textfeld.
- Bewertungs-Hinweis: einfacher Link zu Google (Google Ireland Ltd.). Ob er schon erschienen ist, merkt sich der Browser nur für die Sitzung (Session Storage).

## Prüfen
Desktop, iPhone, Android: Banner im Bild und über nichts Festem (Dock, WhatsApp-Knopf, Entwurfs-Hinweis), kein seitliches Scrollen, Schließen geht; Feedback einmal komplett durchklicken.
