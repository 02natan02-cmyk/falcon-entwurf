# erzeugt Untertitel-Overlays (transparent) und Titelkarten als PNG über Chromium
import json, subprocess, sys
sys.path.insert(0,'/home/claude/gil')
src=open('/home/claude/gil/build.py').read(); s0=src.index('def ticks'); s1=src.index("POP = ")
ns={'ORANGE':'#f07b4f'}; exec(src[s0:s1], ns); LOGO=ns['logo']('lg'); LOGOB=ns['logo']('lg', box=True)
F='/home/claude/gil/src/fonts/'
CSS=f'''@font-face{{font-family:M;font-weight:500;src:url({F}montserrat-latin-500-normal.woff2)}}@font-face{{font-family:M;font-weight:400;src:url({F}montserrat-latin-400-normal.woff2)}}@font-face{{font-family:D;font-weight:500;src:url({F}dm-sans-latin-500-normal.woff2)}}
html,body{{margin:0;width:1920px;height:1080px;overflow:hidden}}'''
CAP=[ # name, kicker, text
 ('c_index','Ihre Website','Neu im Menü: der Küchenplaner.'),
 ('c_form','Form & Raum','Form wählen – die Schränke stellen sich selbst.'),
 ('c_cam','Live in 3D','Türen öffnen, drehen, reinstellen. Ohne Ruckeln.'),
 ('c_design','Farbe','Sie mag Grau? Passend bei Ballerina und Nobilia.'),
 ('c_ki','KI-Planung','Oder die KI plant – aus ihren eigenen Worten.'),
 ('c_echt','Echtoptik','So könnte ihre nächste Küche aussehen.'),
 ('c_game','Kurze Wartezeit?','Obst schneiden wie bei Fruit Ninja – und dranbleiben.'),
 ('c_logo','Ihr Studio','Ein Klick – Ihr Logo auf der Rückwand.'),
 ('c_plans','Pläne','Installationsplan, Maße, Ansichten – fertig für den Termin.'),
 ('c_send','Anfrage','Ein Klick – die Planung liegt bei Florian.'),
]
pages={}
for n,k,t in CAP:
    pages[n]=f'''<html><head><style>{CSS}body{{background:transparent}}
.g{{position:absolute;left:0;right:0;bottom:0;height:300px;background:linear-gradient(180deg,rgba(2,2,2,0),rgba(2,2,2,.85))}}
.c{{position:absolute;left:96px;bottom:84px;color:#fff}}.k{{font:500 24px D;letter-spacing:6px;text-transform:uppercase;color:#f07b4f;margin-bottom:14px}}.t{{font:500 56px/1.1 M;max-width:1500px;text-shadow:0 4px 24px rgba(0,0,0,.6)}}
.l{{position:absolute;right:80px;bottom:84px;width:190px;opacity:.95}}</style></head><body><div class="g"></div><div class="c"><div class="k">{k}</div><div class="t">{t}</div></div><div class="l">{LOGO}</div></body></html>'''
BG='''background:#060606;background-image:linear-gradient(rgba(240,123,79,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(240,123,79,.12) 1px,transparent 1px),radial-gradient(80% 80% at 50% 40%,#1c1c1c,#040404);background-size:96px 96px,96px 96px,100% 100%;'''
pages['t_open']=f'''<html><head><style>{CSS}body{{{BG}display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center}}
.lg{{width:300px;margin-bottom:56px}}.k{{font:500 26px D;letter-spacing:7px;text-transform:uppercase;color:#f07b4f;margin-bottom:24px}}.t{{font:500 84px/1.1 M}}.t span{{color:#f07b4f}}</style></head><body>{LOGO}<div class="k">Für Florian und das Team</div><div class="t">Planen Sie die Küche<br><span>von der Couch aus.</span></div></body></html>'''
pages['t_couch']=f'''<html><head><style>{CSS}body{{background:transparent}}.g{{position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,2,2,.82),rgba(2,2,2,.2) 60%,rgba(2,2,2,0))}}
.c{{position:absolute;left:110px;top:50%;transform:translateY(-50%);color:#fff}}.k{{font:500 26px D;letter-spacing:7px;text-transform:uppercase;color:#f07b4f;margin-bottom:22px}}.t{{font:500 76px/1.1 M;max-width:900px}}</style></head><body><div class="g"></div><div class="c"><div class="k">Abends, zuhause</div><div class="t">Ihre Kundin plant ihre Küche – selbst.</div></div></body></html>'''
pages['t_phone']=f'''<html><head><style>{CSS}body{{{BG}color:#fff}}.c{{position:absolute;left:150px;top:50%;transform:translateY(-50%)}}.k{{font:500 26px D;letter-spacing:7px;text-transform:uppercase;color:#f07b4f;margin-bottom:22px}}.t{{font:500 72px/1.1 M;max-width:820px}}
.ph{{position:absolute;right:250px;top:60px;width:440px;height:952px;border-radius:64px;background:#111;box-shadow:0 0 0 3px #3a3a3a,0 0 0 14px #0b0b0b,0 60px 120px rgba(0,0,0,.8),0 0 120px rgba(240,123,79,.25)}}
.sc{{position:absolute;right:270px;top:80px;width:400px;height:912px;border-radius:46px;background:#000}}</style></head><body><div class="c"><div class="k">Jedes Gerät</div><div class="t">Handy, Tablet und PC. Alles in einem schlanken Code.</div></div><div class="ph"></div><div class="sc" id="sc"></div></body></html>'''
pages['t_end']=f'''<html><head><style>{CSS}body{{{BG}display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center}}
.k{{font:500 26px D;letter-spacing:6px;text-transform:uppercase;color:#f07b4f;margin-bottom:26px}}.t{{font:500 64px/1.15 M;max-width:1400px;margin-bottom:60px}}.lg{{width:260px}}.u{{font:500 26px D;color:#bbb;margin-top:40px}}</style></head><body><div class="k">Gebaut von einem Küchenmonteur, der weiß, worauf es ankommt</div><div class="t">Den Beamer haben Sie schon.<br>Jetzt kommt die Technik auf Ihre Website.</div>{LOGOB}<div class="u">Probieren Sie es selbst aus.</div></body></html>'''
pages['t_end'] = pages['t_end'].replace('class="lg"','class="lg" style="width:300px"')
json.dump(pages, open('pages.json','w'))
