# Untertitel (3–4 Wörter, im Takt der Stimme) + animierte Titel als ASS (libass, Subpixel-weich)
import re
D = 0.35  # Ton startet 0,35 s nach dem Bild
import sys
GAP = 49.0; M = float(sys.argv[1]) if len(sys.argv) > 1 else 20.0  # Musik-Zwischenspiel (Montage) nach 'und dem PC.'
GAP2 = 103.23; I = float(sys.argv[2]) if len(sys.argv) > 2 else 0.0  # Zusatz Installationspläne nach 'liegt bei Florian.'
S = lambda x: x + (M if x >= GAP else 0) + (I if x >= GAP2 else 0)
def t(s):
    s = max(0, s); h = int(s // 3600); m = int(s % 3600 // 60); return f"{h}:{m:02d}:{s % 60:05.2f}"
chunks = []
for line in open('/home/claude/gil/film/subs.txt', encoding='utf-8'):
    if not line.strip(): continue
    a, b, txt = line.strip().split('|', 2); a, b = S(float(a)), S(float(b)); w = txt.split()
    n = max(1, round(len(w) / 3.5)); per = [w[i * len(w) // n:(i + 1) * len(w) // n] for i in range(n)]
    tot = sum(len(' '.join(p)) for p in per); c = a
    for p in per:
        d = (b - a) * len(' '.join(p)) / tot; chunks.append((c, c + d, ' '.join(p))); c += d
HEAD = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,GM5,56,&H00FFFFFF,&H00FFFFFF,&H64000000,&H8C000000,0,0,0,0,100,100,0,0,1,0,3,2,120,120,62,1
Style: Kick,GD7,30,&H004F7BF0,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,7,0,1,0,0,7,0,0,0,1
Style: Big,GM5,104,&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,0,0,0,0,100,100,-1,0,1,0,4,7,0,0,0,1
Style: BigO,GM5,104,&H004F7BF0,&H00FFFFFF,&H00000000,&H96000000,0,0,0,0,100,100,-1,0,1,0,4,7,0,0,0,1
Style: Mid,GM5,74,&H00FFFFFF,&H00FFFFFF,&H00000000,&H96000000,0,0,0,0,100,100,-1,0,1,0,4,7,0,0,0,1
Style: MidO,GM5,74,&H004F7BF0,&H00FFFFFF,&H00000000,&H96000000,0,0,0,0,100,100,-1,0,1,0,4,7,0,0,0,1
Style: Lab,GD7,26,&H00FFFFFF,&H00FFFFFF,&H00000000,&HB4000000,0,0,0,0,100,100,5,0,3,14,0,7,0,0,0,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
ev = []
for a, b, txt in chunks:
    ev.append(f"Dialogue: 5,{t(a + D)},{t(b + D + 0.12)},Sub,,0,0,0,,{{\\fad(110,90)\\fscx94\\fscy94\\t(0,200,\\fscx100\\fscy100)}}{txt}")
def T(a, b, style, x, y, txt, dx=0, dy=40, fin=500, fout=450, layer=3, raw=False):
    if not raw: a, b = S(a), S(b)
    ev.append(f"Dialogue: {layer},{t(a)},{t(b)},{style},,0,0,0,,{{\\move({x + dx},{y + dy},{x},{y},0,{int(fin * 1.6)})\\fad({fin},{fout})}}{txt}")
L = 140
# Eröffnung über dem 3D-Film
T(0.4, 8.6, 'Kick', L, 330, 'FÜR FLORIAN UND DAS TEAM')
T(0.8, 8.6, 'Big', L, 380, 'Planen Sie die Küche')
T(1.3, 8.6, 'BigO', L, 500, 'von der Couch aus.')
# Studio
T(13.9, 21.4, 'Kick', L, 360, 'IHR STUDIO IN SAARLOUIS')
T(14.2, 21.4, 'Mid', L, 410, 'Der Grundriss')
T(14.6, 21.4, 'MidO', L, 500, 'in Originalgröße.')
T(28.2, 30.7, 'Mid', L, 440, 'Sie sind allen voraus.', dy=30)
T(30.9, 34.9, 'Kick', L, 360, 'NEU')
T(31.1, 34.9, 'Mid', L, 410, 'Dieses Erlebnis –')
T(31.8, 34.9, 'MidO', L, 500, 'jetzt zuhause.')
# Schritt-Etiketten in den Planer-Szenen (oben links)
for a, b, s in [(40.1, 49.3, 'FORM · SCHRÄNKE · 3D'), (49.6, 55.2, 'DESIGN · BALLERINA & NOBILIA'), (55.3, 62.9, 'ANSCHLÜSSE · FENSTER · KI'),
                (75.3, 82.6, 'ECHTOPTIK · SCHNIPPELJAGD'), (97.6, 111.5, 'PLÄNE · ANFRAGE AN FLORIAN')]:
    a, b = S(a), S(b)
    continue
    ev.append(f"Dialogue: 4,{t(a)},{t(b)},Lab,,0,0,0,,{{\\pos(60,52)\\fad(300,300)}} {s} ")
# Farbabgleich (Planer-Werte)
ev.append(f"Dialogue: 7,{t(S(51.4)+D)},{t(S(55.0)+D)},Lab,,0,0,0,,{{\\pos(1180,170)\\fad(250,250)}} IHR GRAU BEI UNSEREN MARKEN ")
T(51.7 + D, 55.0 + D, 'Mid', 1180, 230, '{\\fs56}Ballerina  {\\c&H4F7BF0&}Achatweiß', dx=40, dy=0, fin=300)
T(53.4 + D, 55.0 + D, 'Mid', 1180, 310, '{\\fs56}Nobilia  {\\c&H4F7BF0&}Magnolia', dx=40, dy=0, fin=300)
# KI ohne Schnittstelle: Wörter im Takt
for a, txt in [(64.1, 'Keine Schnittstelle.'), (67.6, 'Keine Tokens.'), (68.8, 'Keine Zusatzkosten.'), (70.2, 'Kein Ausfall.')]:
    i = [64.1, 67.6, 68.8, 70.2].index(a)
    T(a + D, 75.2, 'Mid' if i % 2 == 0 else 'MidO', 120, 250 + i * 110, txt, dx=-60, dy=0, fin=350)
T(71.6, 75.2, 'Kick', 120, 720, 'FERTIGER CODE · GETESTET', dx=-40, dy=0)
# Logo-Moment
T(87.0, 94.3, 'Mid', L, 140, 'Ihr Logo.', dy=-30)
T(88.5, 94.3, 'MidO', L, 230, 'Oder ihr Lieblingsfoto.', dy=-30)
# Gestaunt
T(94.6, 97.6, 'Mid', L, 420, 'Man kauft dort,')
T(95.2, 97.6, 'MidO', L, 510, 'wo man gestaunt hat.')
# Planer stärker
T(111.8, 115.4, 'Mid', L, 420, 'Ersetzt keinen Küchenplaner.')
T(114.0, 115.4, 'MidO', L, 510, 'Macht ihn stärker.')
# Schluss
T(115.6, 127.8, 'Kick', 960 - 470, 300, 'GEBAUT VON EINEM KÜCHENMONTEUR', dy=20)
T(118.9, 127.8, 'Mid', 960 - 470, 350, 'Im Studio allen voraus.', dy=30)
T(121.4, 127.8, 'MidO', 960 - 470, 440, 'Jetzt auch auf Ihrer Website.', dy=30)
# Zusatz Installationspläne (Natan 05.11.)
g2 = GAP2 + M + D
for line in open('/home/claude/gil/film/subs_ins.txt', encoding='utf-8'):
    a0, b0, txt = line.strip().split('|', 2); a0, b0 = g2 + 0.3 + float(a0), g2 + 0.3 + float(b0); w = txt.split()
    n = max(1, round(len(w) / 3.5)); per = [w[i * len(w) // n:(i + 1) * len(w) // n] for i in range(n)]
    tot = sum(len(' '.join(p)) for p in per); c = a0
    for p in per:
        dd = (b0 - a0) * len(' '.join(p)) / tot
        ev.append(f"Dialogue: 5,{t(c)},{t(c + dd + 0.12)},Sub,,0,0,0,,{{\\fad(110,90)\\fscx94\\fscy94\\t(0,200,\\fscx100\\fscy100)}}{' '.join(p)}"); c += dd
T(g2 + 0.3, g2 + I - 0.2, 'Kick', L, 360, 'INSTALLATIONSPLAN', raw=True)
T(g2 + 0.5, g2 + I - 0.2, 'Mid', L, 410, 'Einfach mit dabei.', raw=True)
T(g2 + 3.1, g2 + I - 0.2, 'MidO', L, 500, 'Ein Klick – aus.', raw=True)
T(g2 + 6.3, g2 + I - 0.2, 'Kick', L, 600, 'UND JEDER ANDERE WUNSCH', raw=True)
# Montage: ein Klick – eine Änderung (Musik allein)
MON = [l.strip().split('|') for l in open('/home/claude/gil/film/mont.txt', encoding='utf-8') if l.strip()]
g0 = GAP + D
T(g0 + 0.2, g0 + M - 0.3, 'Kick', 140, 90, 'EIN KLICK · VON DER COUCH AUS', dy=-20, raw=True)
for line in open('/home/claude/gil/film/subs_mont.txt', encoding='utf-8'):
    if not line.strip(): continue
    a0, b0, txt = line.strip().split('|', 2); a0, b0 = g0 + 0.3 + float(a0), g0 + 0.3 + float(b0); w = txt.split()
    n = max(1, round(len(w) / 3.5)); per = [w[i * len(w) // n:(i + 1) * len(w) // n] for i in range(n)]
    tot = sum(len(' '.join(p)) for p in per); c = a0
    for p in per:
        dd = (b0 - a0) * len(' '.join(p)) / tot
        ev.append(f"Dialogue: 5,{t(c)},{t(c + dd + 0.12)},Sub,,0,0,0,,{{\\fad(110,90)\\fscx94\\fscy94\\t(0,200,\\fscx100\\fscy100)}}{' '.join(p)}"); c += dd
for a, b, txt in MON:
    a, b = g0 + float(a), g0 + float(b)
    ev.append(f"Dialogue: 6,{t(a)},{t(b)},Big,,0,0,0,,{{\\move(140,170,140,135,0,260)\\fad(160,140)\\fscx96\\fscy96\\t(0,260,\\fscx100\\fscy100)}}{txt}")
open('/home/claude/gil/film/film.ass', 'w', encoding='utf-8').write(HEAD + '\n'.join(ev) + '\n')
print(len(chunks), 'Untertitel,', len(ev), 'Ereignisse')
