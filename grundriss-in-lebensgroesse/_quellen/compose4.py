# Präsentationsfilm v3: Sprecher v2 (125 s) + Musik, Schnitt auf Wort-Zeitstempel, kein Zoom-Wackeln
import subprocess, os
R = '/home/claude/gil/rec/'; F = '/home/claude/gil/film/'; T = F + 'seg4/'; IMG = '/home/claude/gil/src/out-img/'
VO = '/home/claude/gil/media-src/voice2.mp3'; MU = '/home/claude/gil/media-src/music.mp3'
os.makedirs(T, exist_ok=True)
def run(a): subprocess.run(['ffmpeg', '-loglevel', 'error', '-y'] + a, check=True)
ENC = ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', '30', '-an']
X = 0.5; D = 0.35  # Ton startet 0,35 s nach dem Bild
PLAN = [  # Start (Ton-Sekunde), Art, Parameter
 (0.0, 'still', dict(img=F + 't_open.png')),
 (13.5, 'still', dict(img=IMG + 'saeule.webp', over=F + 'c_beamer.png')),
 (21.2, 'still', dict(img=IMG + 'kueche.webp', over=F + 'c_tisch.png')),
 (30.5, 'still', dict(img=F + 'couch.jpg', over=F + 'c_home.png')),
 (34.8, 'still', dict(img=F + 'couch.jpg', over=F + 't_couch.png')),
 (39.8, 'clip', dict(src='d_form', cap='c_form')),
 (43.9, 'clip', dict(src='d_cam', cap='c_cam', ss=0.8)),
 (46.3, 'phone', dict(src='m_plan')),
 (49.1, 'clip', dict(src='d_design', cap='c_design')),
 (54.9, 'clip', dict(src='d_ki', cap='c_ki', speed=0.8)),
 (62.7, 'clip', dict(src='d_cam', cap='c_ki2', speed=0.6)),
 (75.0, 'clip', dict(src='d_echt', cap='c_echt', ss=1.5)),
 (78.4, 'clip', dict(src='d_game', cap='c_game', ss=1.5)),
 (82.4, 'clip', dict(src='d_logo', cap='c_logo2', speed=0.55)),
 (94.2, 'still', dict(img=IMG + 'saeule.webp', over=F + 't_bind.png', blur=6)),
 (97.3, 'clip', dict(src='d_plans', cap='c_plans')),
 (102.5, 'clip', dict(src='d_send', cap='c_send', speed=0.75)),
 (111.4, 'still', dict(img=IMG + 'kueche.webp', over=F + 't_stark.png', blur=6)),
 (115.0, 'still', dict(img=F + 't_end.png')),
]
END = 128.5
segs = []
for i, (t, kind, p) in enumerate(PLAN):
    nxt = PLAN[i + 1][0] + D if i + 1 < len(PLAN) else END
    start = t + D if i else 0
    d = nxt - start + (X if i + 1 < len(PLAN) else 0); out = T + f'{i:02d}.mp4'
    if kind == 'still':
        fc = "[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" + (f",gblur=sigma={p['blur']}" if p.get('blur') else '') + "[b]"
        a = ['-loop', '1', '-t', str(d), '-i', p['img']]
        if p.get('over'): a += ['-loop', '1', '-t', str(d), '-i', p['over']]; fc += ";[1:v]format=rgba,fade=in:st=0.3:d=0.6:alpha=1[o];[b][o]overlay=0:0[v]"
        else: fc += ';[b]copy[v]'
    elif kind == 'clip':
        fc = f"[0:v]setpts=PTS/{p.get('speed',1)},fps=30,scale=1920:1080,tpad=stop_mode=clone:stop_duration=20[b]"
        a = ['-ss', str(p.get('ss', 0)), '-i', R + p['src'] + '.mp4', '-loop', '1', '-t', str(d), '-i', F + p['cap'] + '.png']
        fc += f";[1:v]format=rgba,fade=in:st={p.get('cap_at',0.3)}:d=0.5:alpha=1[o];[b][o]overlay=0:0[v]"
    else:
        a = ['-loop', '1', '-t', str(d), '-i', F + 't_phone.png', '-i', R + p['src'] + '.mp4']
        fc = "[1:v]fps=30,scale=400:866,tpad=stop_mode=clone:stop_duration=20[p];[0:v][p]overlay=1250:103[v]"
    run(a + ['-filter_complex', fc, '-map', '[v]', '-t', f'{d:.3f}'] + ENC + [out]); segs.append((out, d))
inp = []; fc = []; off = 0; prev = '[0:v]'
for f, d in segs: inp += ['-i', f]
for i in range(1, len(segs)):
    off += segs[i - 1][1] - X
    lab = f'[x{i}]'; fc.append(f"{prev}[{i}:v]xfade=transition=fade:duration={X}:offset={off:.3f}{lab}"); prev = lab
n = len(segs)
fc.append(f"{prev}fade=in:st=0:d=0.6,fade=out:st={END-1.5}:d=1.5,format=yuv420p[v]")
fc.append(f"[{n}:a]adelay={int(D*1000)}|{int(D*1000)},apad,atrim=0:{END},asplit=2[vo][sc]")
fc.append(f"[{n+1}:a]atrim=0:{END},volume=0.55,afade=in:st=0:d=1.5,afade=out:st={END-3}:d=3[mu]")
fc.append("[mu][sc]sidechaincompress=threshold=0.03:ratio=6:attack=40:release=500[mud]")
fc.append("[vo][mud]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=11[a]")
out = F + 'film.mp4'
run(inp + ['-i', VO, '-i', MU, '-filter_complex', ';'.join(fc), '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p',
           '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-t', str(END), out])
print('fertig', out, os.path.getsize(out) // 1024, 'KB')
