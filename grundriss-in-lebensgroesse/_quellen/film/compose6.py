# Präsentationsfilm v6: echte Planer-Bedienung, weiche Fahrten (2–3x Überabtastung), Montage „ein Klick“, Untertitel, Musik bis zum Schluss
import subprocess, os, sys, json
R = '/home/claude/gil/rec3/'; F = '/home/claude/gil/film/'; T = F + 'seg6/'; IMG = '/home/claude/gil/src/out-img/'
VO = '/home/claude/gil/media-src/voice2.mp3'; MU = '/home/claude/gil/media-src/music.mp3'
os.makedirs(T, exist_ok=True)
NEU = '--neu' in sys.argv
def run(a): subprocess.run(['ffmpeg', '-loglevel', 'error', '-y'] + a, check=True)
ENC = ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', '15', '-pix_fmt', 'yuv420p', '-r', '30', '-an']
X = 0.45; D = 0.35; GAP = 49.0
VEND = 124.9

def frac(c, z):  # Bildmitte c (0..1) bei Zoom z → Versatz-Anteil für zoompan
    return 0.5 if z <= 1.0001 else max(0.0, min(1.0, (c - 0.5 / z) / (1 - 1 / z)))
def zp(d, z0, z1, c0, c1, W, H):
    n = max(1, int(round(d * 30))); k = f"(0.5-0.5*cos(PI*min(on,{n})/{n}))"
    z = f"({z0}+({z1}-{z0})*{k})"
    # Mittelpunkt wandert weich von c0 nach c1; Versatz aus aktuellem Zoom berechnet
    cx = f"({c0[0]}+({c1[0]}-{c0[0]})*{k})"; cy = f"({c0[1]}+({c1[1]}-{c0[1]})*{k})"
    x = f"max(0,min(iw-iw/zoom,iw*{cx}-iw/zoom/2))"; y = f"max(0,min(ih-ih/zoom,ih*{cy}-ih/zoom/2))"
    return f"zoompan=z='{z}':x='{x}':y='{y}':d=1:s={W}x{H}:fps=30,scale=1920:1080:flags=lanczos"

segs = []
def add(name, d, a, fc):
    out = T + f'{name}_{d:.2f}.mp4'
    if NEU or not os.path.exists(out):
        run(a + ['-filter_complex', fc, '-map', '[v]', '-t', f'{d:.3f}'] + ENC + [out])
    segs.append((out, d))
def overs_fc(a, fc, d, overs, last='b0'):
    for i, (o, st) in enumerate(overs):
        a += ['-loop', '1', '-t', f'{d:.3f}', '-i', o]; fc += f";[{i+1}:v]format=rgba,fade=in:st={st}:d=0.7:alpha=1[o{i}];[{last}][o{i}]overlay=0:0[b{i+1}]"; last = f'b{i+1}'
    return a, fc + f";[{last}]copy[v]"
def still(name, d, img, z0=1.0, z1=1.15, c0=(.5, .5), c1=None, overs=(), blur=0, dim=1.0, sharp=False):
    c1 = c1 or c0
    a = ['-loop', '1', '-framerate', '30', '-t', f'{d:.3f}', '-i', img]
    pre = "scale=5760:3240:force_original_aspect_ratio=increase:flags=lanczos,crop=5760:3240" + (",unsharp=9:9:0.9" if sharp else '') + (f",gblur=sigma={blur*3}" if blur else '')
    fc = f"[0:v]{pre},{zp(d, z0, z1, c0, c1, 5760, 3240)}" + (f",colorchannelmixer=rr={dim}:gg={dim}:bb={dim}" if dim < 1 else '') + "[b0]"
    a, fc = overs_fc(a, fc, d, overs); add(name, d, a, fc)
def clip(name, d, src, ss=0, speed=1.0, z0=1.0, z1=1.0, c0=(.5, .5), c1=None, overs=(), dim=1.0, ss2=2):
    c1 = c1 or c0; W, H = 1920 * ss2, 1080 * ss2
    a = ['-ss', str(ss), '-i', R + src + '.mp4']
    mv = '' if (z0 == 1 and z1 == 1) else f",scale={W}:{H}:flags=lanczos,{zp(d, z0, z1, c0, c1, W, H)}"
    fc = f"[0:v]setpts=(PTS-STARTPTS)/{speed},fps=30,scale=1920:1080:flags=lanczos,tpad=stop_mode=clone:stop_duration=40{mv}" + (f",colorchannelmixer=rr={dim}:gg={dim}:bb={dim}" if dim < 1 else '') + "[b0]"
    a, fc = overs_fc(a, fc, d, overs); add(name, d, a, fc)
def kicard(name, d, src, ss=0, speed=1.0, t1=3.9, t2=4.8):
    e = f"(if(lt(t,{t1}),0,if(gt(t,{t2}),1,0.5-0.5*cos(PI*(t-{t1})/({t2}-{t1})))))"
    a = ['-ss', str(ss), '-i', R + src + '.mp4', '-ss', '2', '-i', R + HH + '.mp4']
    fc = (f"[1:v]setpts=(PTS-STARTPTS)/0.6,fps=30,scale=1920:1080,tpad=stop_mode=clone:stop_duration=40,gblur=sigma=18,colorchannelmixer=rr=.32:gg=.32:bb=.32[bg];"
          f"[0:v]setpts=(PTS-STARTPTS)/{speed},fps=30,scale=1920:1080:flags=lanczos,tpad=stop_mode=clone:stop_duration=40,"
          f"scale=w='trunc((1920-960*{e})/2)*2':h='trunc((1080-540*{e})/2)*2':eval=frame:flags=bicubic[fg];"
          f"[bg][fg]overlay=x='900*{e}':y='270*{e}':eval=frame[v]")
    add(name, d, a, fc)
def tablet(name, d, bgimg, src, ss=0, speed=1.0):
    a = ['-loop', '1', '-framerate', '30', '-t', f'{d:.3f}', '-i', bgimg, '-ss', str(ss), '-i', R + src + '.mp4']
    k = f"(0.5-0.5*cos(PI*min(t,{d})/{d}))"
    fc = (f"[0:v]scale=5760:3240:force_original_aspect_ratio=increase,crop=5760:3240,gblur=sigma=30,{zp(d, 1.1, 1.2, (.45, .5), (.45, .5), 5760, 3240)},colorchannelmixer=rr=.45:gg=.45:bb=.45[bg];"
          f"[1:v]setpts=(PTS-STARTPTS)/{speed},fps=30,scale=1280:720:flags=lanczos,tpad=stop_mode=clone:stop_duration=40,pad=1320:760:20:20:color=0x0b0b0b,format=rgba,"
          f"geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='if(gt(hypot(max(0,abs(X-660)-626),max(0,abs(Y-380)-346)),34),0,255)'[tb];"
          f"[bg][tb]overlay=x='300+40*{k}':y='160-10*{k}'[v]")
    add(name, d, a, fc)
def phone(name, d, bgimg, src, ss=0, speed=1.0):
    a = ['-loop', '1', '-framerate', '30', '-t', f'{d:.3f}', '-i', bgimg, '-ss', str(ss), '-i', R + src + '.mp4']
    fc = (f"[0:v]scale=5760:3240:force_original_aspect_ratio=increase,crop=5760:3240,gblur=sigma=24,{zp(d, 1.1, 1.2, (.5, .5), (.5, .5), 5760, 3240)},colorchannelmixer=rr=.5:gg=.5:bb=.5[bg];"
          f"[1:v]setpts=(PTS-STARTPTS)/{speed},fps=30,scale=432:936:flags=lanczos,tpad=stop_mode=clone:stop_duration=40,pad=460:964:14:14:color=0x0b0b0b,format=rgba,"
          f"geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='if(gt(hypot(max(0,abs(X-230)-176),max(0,abs(Y-482)-428)),54),0,255)'[ph];"
          f"[bg][ph]overlay=x='1240-40*(0.5-0.5*cos(PI*t/{d}))':y='58'[v]")
    add(name, d, a, fc)
G = lambda n: F + n + '.png'

# ---------- Montage aus u_mont2 (Musik allein): [Quelle von, bis, Etikett] ----------
SEGONLY = '--seg' in sys.argv
SKIP = [x for x in sys.argv if not x.startswith('--')][1:]
HH = 'h_hero_n' if os.path.exists(R + 'h_hero_n.mp4') else 'h_hero'
HL = 'h_logo2_n' if os.path.exists(R + 'h_logo2_n.mp4') else 'h_logo2'
SFX = '_n' if os.path.exists(R + 'u_mont2_n.mp4') else ''
MB = [] if SEGONLY else json.load(open(F + 'mont_beats.json', encoding='utf-8'))
MSPEED = 1.25
mparts = []; mt = 0; mlab = []
for i, bt in enumerate(MB):
    msrc, s0, s1, lab, d = bt[:5]; zz = bt[5] if len(bt) > 5 else [1.06, 1.0, .5, .52]
    sp = (s1 - s0) / d
    nm = f'm{i:02d}'
    clip(nm, d + X, msrc[:-1] if msrc.endswith('!') else msrc + SFX, ss=s0, speed=sp, z0=zz[0], z1=zz[1], c0=(zz[2], zz[3]), c1=(zz[2], zz[3]), ss2=2)
    mparts.append(segs.pop())
    if lab: mlab.append((mt + 0.1, mt + d + 0.1, lab))
    mt += d
M = 22.91 if SEGONLY else round(mt - 0.15, 3)  # Montage-Länge inkl. Ausklang
open(F + 'mont.txt', 'w', encoding='utf-8').write('\n'.join(f'{a:.2f}|{b:.2f}|{l}' for a, b, l in mlab))
if not SEGONLY: subprocess.run(['python3', F + 'ass6.py', str(M), str(round(0.3 + 8.67 + 0.5, 2))], check=True)
GAP2 = 103.23; I = round(0.3 + 8.67 + 0.5, 2)  # Zusatz Installationspläne
S = lambda x: x + (M if x >= GAP else 0) + (I if x >= GAP2 else 0)
END = round(S(VEND) + 3.6, 2)

# ---------- Zeitplan in Ton-Sekunden (ungeschoben); Bild = Ton + D ----------
P = [
 ('00_hero', 0.0, lambda d: clip('00_hero', d, HH, ss=0.2, z0=1.0, z1=1.08, c0=(.45, .5), c1=(.55, .48), overs=[(G('g_left'), 0)])),
 ('01_logo', 8.75, lambda d: clip('01_logo', d, HL, ss=7.0, z0=1.0, z1=1.22, c0=(.5, .55), c1=(.42, .62))),
 ('02_halle', 13.5, lambda d: still('02_halle', d, IMG + 'saeule.webp', 1.0, 1.32, (.5, .5), (.55, .42), [(G('g_left'), 0)], sharp=True)),
 ('03_boden', 16.6, lambda d: still('03_boden', d, IMG + 'saeule.webp', 1.55, 1.4, (.25, .62), (.62, .62), [(G('g_left'), 0)], sharp=True)),
 ('04_boden2', 21.0, lambda d: still('04_boden2', d, IMG + 'saeule.webp', 1.6, 1.4, (.62, .72), (.5, .68), [(G('g_left'), 0)], sharp=True)),
 ('05_vr', 22.5, lambda d: still('05_vr', d, IMG + 'kueche.webp', 1.6, 1.8, (.62, .3), (.58, .3), [(G('g_left'), 0)], sharp=True)),
 ('06_voraus', 27.7, lambda d: clip('06_voraus', d, HH, ss=9.0, z0=1.12, z1=1.0, c0=(.5, .5), dim=0.6)),
 ('07_couch', 30.5, lambda d: still('07_couch', d, F + 'couch.jpg', 1.0, 1.18, (.5, .5), (.45, .48), [(G('g_left'), 0)])),
  ('08_tablet', 34.85, lambda d: tablet('08_tablet', d, F + 'couch.jpg', 'u_design2', ss=0.0, speed=1.0)),
 ('09_form', 39.85, lambda d: clip('09_form', d, 'u_form', ss=0.3, speed=1.9, z0=1.35, z1=1.25, c0=(.36, .38), c1=(.42, .4))),
 ('10_dreh', 43.9, lambda d: clip('10_dreh', d, HH, ss=4.0, speed=1.5, z0=1.0, z1=1.1, c0=(.5, .5))),
  ('11_handy', 46.4, lambda d: phone('11_handy', d, IMG + 'kueche.webp', 'm_plan', ss=7.5, speed=1.3)),
 ('MONTAGE', 49.0, None),
 ('12_design', 49.15, lambda d: clip('12_design', d, DES, ss=0.5, speed=1.7, z0=1.35, z1=1.25, c0=(.42, .36), c1=(.45, .4))),
 ('13_cx', 55.0, lambda d: clip('13_cx', d, 'u_cx', ss=0.3, speed=1.6, z0=1.2, z1=1.45, c0=(.5, .45), c1=(.5, .53))),
 ('14_ki', 60.0, lambda d: kicard('14_ki', d, KI, ss=3.4, speed=0.9)),
 ('15_echt', 75.1, lambda d: clip('15_echt', d, 'u_echt', ss=5.2, speed=1.0, z0=1.15, z1=1.35, c0=(.5, .5))),
 ('16_spiel', 78.5, lambda d: clip('16_spiel', d, 'u_game', ss=0.45, speed=0.55, z0=1.9, z1=1.55, c0=(.5, .3), c1=(.5, .4))),
 ('17_logo', 82.5, lambda d: clip('17_logo', d, HL, ss=2.0, speed=1.5, z0=1.0, z1=1.25, c0=(.5, .5), c1=(.42, .6), overs=[(G('g_left'), 5.0)])),
 ('18_staunen', 94.3, lambda d: still('18_staunen', d, IMG + 'saeule.webp', 1.1, 1.3, (.4, .5), (.6, .45), [(G('g_dim'), 0), (G('g_left'), 0)], blur=1)),
 ('19_plaene', 97.4, lambda d: clip('19_plaene', d, 'u_plans', ss=0.4, speed=1.4, z0=1.2, z1=1.32, c0=(.5, .5))),
 ('19b_install', 103.2299, lambda d: clip('19b_install', d, 'u_plans', ss=6.0, speed=0.6, z0=1.15, z1=1.35, c0=(.5, .5), c1=(.45, .55), overs=[(G('g_left'), 0.2)])),
 ('20_senden', 103.23, lambda d: clip('20_senden', d, 'u_send', ss=0.2, speed=1.0, z0=1.15, z1=1.3, c0=(.5, .5))),
 ('21_staerker', 111.5, lambda d: clip('21_staerker', d, HH, ss=9.5, speed=0.9, z0=1.15, z1=1.0, c0=(.5, .5), dim=0.5, overs=[(G('g_left'), 0)])),
 ('22_ende', 115.2, lambda d: clip('22_ende', d, HH, ss=0.5, speed=0.8, z0=1.0, z1=1.1, c0=(.5, .5), dim=0.45, overs=[(G('o_logo_low'), 6.0)])),
]
DES = 'u_design2' if os.path.exists(R + 'u_design2.mp4') else 'u_design'
KI = 'u_ki2' if os.path.exists(R + 'u_ki2.mp4') else 'u_ki'
KISP = 1.05
for i, (n, s0, fn) in enumerate(P):
    if fn is None: segs.extend(mparts); continue
    if SEGONLY and n in SKIP: continue
    a = 0 if i == 0 else S(s0) + D
    nx = P[i + 1][1] if i + 1 < len(P) else None
    b = (GAP + D if P[i + 1][0] == 'MONTAGE' else S(nx) + D) if nx is not None else END
    fn(b - a + (X if nx is not None else 0))
if SEGONLY: print('Segmente fertig', len(segs)); sys.exit(0)
inp = []; fc = []; off = 0; prev = '[0:v]'
for f, d in segs: inp += ['-i', f]
for i in range(1, len(segs)):
    off += segs[i - 1][1] - X
    lab = f'[x{i}]'; fc.append(f"{prev}[{i}:v]xfade=transition=fade:duration={X}:offset={off:.3f}{lab}"); prev = lab
n = len(segs)
print('Bildlänge', round(off + segs[-1][1], 2), 'END', END, 'M', M)
fc.append(f"{prev}[{n+2}:v]overlay=0:0,ass={F}film.ass:fontsdir={F}fonts,fade=in:st=0:d=0.8,fade=out:st={END-1.6}:d=1.6,format=yuv420p[v]")
# Stimme mit Lücke für die Montage
g = GAP + D
fc.append(f"[{n}:a]asplit=2[va][vb];[va]atrim=0:{GAP},asetpts=PTS-STARTPTS,adelay={int(D*1000)}|{int(D*1000)}[v1];"
          f"[vb]atrim={GAP},asetpts=PTS-STARTPTS,adelay={int((g+M)*1000)}|{int((g+M)*1000)}[v2];[v1][v2]amix=inputs=2:duration=longest:normalize=0,apad,atrim=0:{END},asplit=2[vo][sc]")
# Musik läuft bis zum Schluss: gedehnt + bei Bedarf Schleife
fc.append(f"[{n+1}:a]atempo=0.93,asplit=2[m1][m2];[m2]atrim=start=24,asetpts=PTS-STARTPTS[m2b];[m1][m2b]acrossfade=d=5:c1=tri:c2=tri,atrim=0:{END},volume=0.62,afade=in:st=0:d=2,afade=out:st={END-4}:d=4[mu]")
fc.append("[mu][sc]sidechaincompress=threshold=0.035:ratio=6:attack=40:release=500[mud]")
fc.append("[vo][mud]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=11[a]")
out = F + 'film_v6.mp4'
vf = ';'.join(x for x in fc if '[v]' in x and 'xfade' not in x or 'xfade' in x)
afc = ';'.join(x for x in fc if 'xfade' not in x and '[v]' not in x).replace(f'[{n}:a]', '[0:a]').replace(f'[{n+1}:a]', '[1:a]')
print('Ton fertig')
run(inp + ['-f', 'lavfi', '-i', 'anullsrc', '-f', 'lavfi', '-i', 'anullsrc', '-loop', '1', '-t', str(END), '-i', G('g_bottom'), '-filter_complex', vf, '-map', '[v]',
           '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-an', '-t', str(END), F + 'bild_v6.mp4'])
print('Bild fertig')
run(['-i', F + 'bild_v6.mp4', '-i', F + 'ton_v6.wav', '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-shortest', out])
print('fertig', out, os.path.getsize(out) // 1024, 'KB', 'Länge', END)
