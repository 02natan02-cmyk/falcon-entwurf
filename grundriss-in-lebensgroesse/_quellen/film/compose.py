# Schneidet das Präsentationsvideo aus Mitschnitten, Titelkarten und Untertiteln (1920×1080, 30 fps)
import subprocess, os, sys
R = '/home/claude/gil/rec/'; F = '/home/claude/gil/film/'; T = F + 'seg/'
os.makedirs(T, exist_ok=True)
def run(a): subprocess.run(['ffmpeg', '-loglevel', 'error', '-y'] + a, check=True)
def dur(f): return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).decode())
ENC = ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', '30', '-an']
segs = []
def still(name, img, d, over=None, zoom=1.06):
    out = T + name + '.mp4'
    fc = f"[0:v]scale=2112:1188,zoompan=z='1+({zoom}-1)*on/{int(d*30)}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={int(d*30)}:s=1920x1080:fps=30[b]"
    a = ['-loop', '1', '-t', str(d), '-i', img]
    if over: a += ['-loop', '1', '-t', str(d), '-i', over]; fc += f";[1:v]format=rgba,fade=in:st=0.4:d=0.6:alpha=1[o];[b][o]overlay=0:0[v]"
    else: fc += ';[b]copy[v]'
    run(a + ['-filter_complex', fc, '-map', '[v]', '-t', str(d)] + ENC + [out]); segs.append((out, d))
def clip(name, src, d, cap=None, ss=0, speed=1.0, cap_at=0.3, zoom=None):
    out = T + name + '.mp4'; s = R + src + '.mp4'
    fc = f"[0:v]setpts=PTS/{speed},fps=30,scale=1920:1080,tpad=stop_mode=clone:stop_duration=6"
    if zoom:  # langsames Heranfahren an einen Bereich (x,y in 0..1, Endzoom)
        zx, zy, zz = zoom; n = int(d * 30)
        fc += f",scale=3840:2160,zoompan=z='1+({zz}-1)*min(on/{n},1)':x='(iw-iw/zoom)*{zx}':y='(ih-ih/zoom)*{zy}':d=1:s=1920x1080:fps=30"
    fc += '[b]'
    a = ['-ss', str(ss), '-i', s]
    if cap: a += ['-loop', '1', '-t', str(d), '-i', F + cap + '.png']; fc += f";[1:v]format=rgba,fade=in:st={cap_at}:d=0.5:alpha=1[o];[b][o]overlay=0:0[v]"
    else: fc += ';[b]copy[v]'
    run(a + ['-filter_complex', fc, '-map', '[v]', '-t', str(d)] + ENC + [out]); segs.append((out, d))
def phone(name, src, d, ss=0):
    out = T + name + '.mp4'
    fc = f"[1:v]setpts=PTS,fps=30,scale=400:866,tpad=stop_mode=clone:stop_duration=6[p];[0:v][p]overlay=1250:103[v]"
    run(['-loop', '1', '-t', str(d), '-i', F + 't_phone.png', '-ss', str(ss), '-i', R + src + '.mp4', '-filter_complex', fc, '-map', '[v]', '-t', str(d)] + ENC + [out]); segs.append((out, d))

still('01_open', F + 't_open.png', 4.5, zoom=1.04)
clip('02_index', 'd_index', 12.0, 'c_index', ss=0.3, cap_at=7.5)
still('03_couch', F + 'couch.jpg', 5.0, F + 't_couch.png', zoom=1.10)
clip('04_form', 'd_form', 6.5, 'c_form', zoom=(0.75, 0.25, 1.35))
clip('05_cam', 'd_cam', 7.0, 'c_cam', zoom=(0.8, 0.2, 1.3))
phone('06_phone', 'm_plan', 8.5)
clip('07_design', 'd_design', 7.0, 'c_design', zoom=(0.0, 0.4, 1.25))
clip('08_ki', 'd_ki', 5.0, 'c_ki', speed=0.75)
clip('09_echt', 'd_echt', 8.0, 'c_echt', ss=0.2)
clip('10_game', 'd_game', 7.0, 'c_game')
clip('11_logo', 'd_logo', 6.0, 'c_logo', zoom=(0.7, 0.55, 1.3))
clip('12_plans', 'd_plans', 6.0, 'c_plans')
clip('13_send', 'd_send', 6.0, 'c_send')
still('14_end', F + 't_end.png', 6.5, zoom=1.03)
# Überblendungen
X = 0.5; inp = []; fc = []; off = 0; prev = '[0:v]'
for i, (f, d) in enumerate(segs): inp += ['-i', f]
for i in range(1, len(segs)):
    off += segs[i - 1][1] - X
    lab = f'[x{i}]'; fc.append(f"{prev}[{i}:v]xfade=transition=fade:duration={X}:offset={off:.3f}{lab}"); prev = lab
fc.append(f"{prev}fade=in:st=0:d=0.6,format=yuv420p[v]")
total = sum(d for _, d in segs) - X * (len(segs) - 1)
out = F + 'film.mp4'
run(inp + ['-filter_complex', ';'.join(fc), '-map', '[v]', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '24', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out])
print('fertig', out, round(total, 1), 's', os.path.getsize(out) // 1024, 'KB')
