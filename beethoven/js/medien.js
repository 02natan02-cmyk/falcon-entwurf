/* Beethoven Barbershop – alle Bilder und Filme der Seite an einer Stelle.
   Fotos: Instagram @beethoven_barber / @mrfresh_barber und Kundenfotos aus Google-Bewertungen.
   Filme: „Die Neunte, frisch geschnitten“ (KI-Animation, ElevenLabs Kling 3) und die Kamerafahrt
   durch den Laden (echtes Google-Foto, animiert; Schild gegenüber entfernt). */
window.MEDIEN = {
  fotos: {
    'sohn':   {src:'medien/foto/sohn.webp', alt:'Ein kleiner Junge sitzt im Barberstuhl und bekommt einen frischen Fade, im Hintergrund Mr Fresh mit Hut'},
    'flamme': {src:'medien/foto/flamme-video-poster.webp', video:'medien/video/flamme.mp4', alt:'Im Laden steigt eine Flamme auf'},
    'studio': {src:'medien/foto/studio-kopf.webp', alt:'Seitenansicht eines frischen Fades hinter dem Ohr'},
    'mrfresh':{src:'medien/foto/mrfresh.webp', alt:'Mr Fresh mit schwarzem Hut und Sonnenbrille, lachend'}
  },
  filme: {
    /* mittel = 1280 px für Handys, breit = 1920 px, hoch = 4:5-Ausschnitt */
    'neunte': {breit:'medien/film/neunte/breit/', mittel:'medien/film/neunte/mittel/', anzahl:121, ganz:true, mitte:.54,
               /* letztes Bild ohne Hut (Hut per Bildbearbeitung entfernt, Haare ergänzt): der echte Hut fällt dann als Element durch die Seite */
               ohneHut:{src:'medien/foto/neunte-ohne-hut.webp', ab:.95}},
    'saal':   {breit:'medien/film/saal/breit/', mittel:'medien/film/saal/mittel/', hoch:'medien/film/saal/hoch/', hochMitte:.40, anzahl:81}
  },
  /* Punkte im Saal: Lage im 16:9-Bild am Anfang (a) und am Ende (e) der Fahrt, sichtbar von–bis */
  saalPunkte: [
    {text:'Der Konzertflügel', a:[.13,.52], e:[.27,.47], von:.06, bis:.36},
    {text:'Das Wappen am Schaufenster', a:[.22,.28], e:[.42,.19], von:.38, bis:.66},
    {text:'Die Barberstühle', a:[.60,.62], e:[.86,.66], von:.68, bis:.96}
  ],
  fades: [
    {src:'medien/foto/fade-1.webp', name:'Taper',     mm:'Ansatz am Haarrand', text:'Ganz leise: nur an Schläfe und Nacken läuft das Haar weich aus. Oben bleibt alles, wie es ist.'},
    {src:'medien/foto/fade-2.webp', name:'Low Fade',  mm:'tief angesetzt',     text:'Knapp über dem Ohr beginnt der Übergang. Der Klassiker für jeden Tag.'},
    {src:'medien/foto/fade-3.webp', name:'Mid Fade',  mm:'auf halber Höhe',    text:'Der Übergang auf halber Höhe, sauber in den Bart geführt.'},
    {src:'medien/foto/fade-4.webp', name:'High Fade', mm:'hoch angesetzt',     text:'Hoch und klar. Die Seiten kurz, oben die Länge, dazwischen keine Kante.'},
    {src:'medien/foto/fade-5.webp', name:'Skin Fade', mm:'bis auf die Haut',   text:'Fortissimo: an den Seiten bis auf die Haut und nahtlos nach oben.'}
  ],
  team: [
    {bild:'medien/foto/mrfresh-arbeit.webp', titel:'Am Stuhl', unter:'Montag bis Samstag', alt:'Mr Fresh mit Hut schneidet im Laden einem Kunden die Haare'},
    {bild:'medien/foto/ensemble-2024.webp',  titel:'Das Ensemble', unter:'Sommer 2024', alt:'Das Team mit Freunden vor dem Laden'},
    {bild:'medien/foto/look-fresh.webp',     titel:'Mokka?', unter:'Zur Begrüßung', alt:'Mr Fresh reicht eine Tasse zur Begrüßung'},
    {bild:'medien/foto/ensemble-2020.webp',  titel:'Die Erstbesetzung', unter:'Eröffnung Oktober 2020', alt:'Vier Männer im neuen Laden neben dem Konzertflügel'},
    {bild:'medien/foto/look-live.webp',      titel:'Live-Musik', unter:'Oktober 2020', alt:'Ein Pianist am Flügel im Laden'},
    {bild:'medien/foto/look-rasur.webp',     titel:'Gegen den Strich', unter:'Rasur mit Messer', alt:'Rasur mit dem Messer'}
  ],
  looks: {
    'Low Fade':'medien/foto/fade-2.webp',
    'Mid Fade':'medien/foto/fade-3.webp',
    'High Fade':'medien/foto/fade-4.webp',
    'Taper':'medien/foto/look-taper.webp',
    'Skin Fade':'medien/foto/fade-5.webp',
    'Boxerschnitt':'medien/foto/look-boxer.webp',
    'Scherenschnitt':'medien/foto/look-schere.webp',
    'Bart':'medien/foto/look-bart.webp',
    'Rasur gegen den Strich':'medien/foto/look-rasur.webp',
    'Konturen':'medien/foto/look-konturen.webp',
    'Locken':'medien/foto/look-locken.webp',
    'Kinderschnitt':'medien/foto/look-kinder.webp',
    'Die Flamme':'medien/foto/flamme-2.webp',
    'Mokka':'medien/foto/look-fresh.webp',
    'Muster':'medien/foto/look-muster.webp',
    'Live-Musik':'medien/foto/look-live.webp',
    'Fresh Fresh':'medien/foto/mrfresh.webp',
    'Waschen':'medien/foto/look-waschen.webp',
    'Styling':'medien/foto/look-styling.webp',
    'Vorher – Nachher':'medien/foto/look-nachher.webp',
    'Ohne Termin':'medien/foto/look-termin.webp',
    'Kinder am Flügel':'medien/foto/look-kind-fluegel.webp'
  }
};
