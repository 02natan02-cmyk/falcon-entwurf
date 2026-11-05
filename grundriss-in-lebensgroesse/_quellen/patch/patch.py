# Ersetzt in Planer-Aufnahmen das alte Etikett „Planungstisch Saarlouis“ (Chip über der 3D-Ansicht + orangene Marke links)
# durch „Grundriss in Lebensgröße“ – per Vorlagensuche in jedem Bild, damit es auch beim Scrollen sitzt.
import cv2, numpy as np, sys, subprocess, os
T = '/tmp/claude-0/t/'
old = cv2.imread(T + 'uf0.png'); new = cv2.imread(T + 'newpage.png')
tpl_chip = old[199:246, 590:972]; tpl_kick = old[220:258, 36:378]
new_chip = new[198:247, 589:992].astype(np.float32)
h, w = new_chip.shape[:2]; m = np.zeros((h * 4, w * 4), np.uint8)
cv2.rectangle(m, (4 * 2 + 4 * 22, 4 * 1), (4 * (w - 2) - 4 * 22, 4 * (h - 2)), 255, -1)
cv2.circle(m, (4 * (2 + 22), 4 * h // 2), 4 * 22, 255, -1); cv2.circle(m, (4 * (w - 2 - 22), 4 * h // 2), 4 * 22, 255, -1)
mask = cv2.resize(m, (w, h), interpolation=cv2.INTER_AREA).astype(np.float32)[..., None] / 255
new_kick = new[216:262, 30:402]
def put(fr, img, x, y, msk=None):
    H, W = fr.shape[:2]; ih, iw = img.shape[:2]
    if x < 0 or y < 0 or x + iw > W or y + ih > H: return
    if msk is None: fr[y:y + ih, x:x + iw] = img
    else: roi = fr[y:y + ih, x:x + iw].astype(np.float32); fr[y:y + ih, x:x + iw] = (img * msk + roi * (1 - msk)).astype(np.uint8)
src, dst = sys.argv[1], sys.argv[2]
cap = cv2.VideoCapture(src); fps = cap.get(cv2.CAP_PROP_FPS); W = int(cap.get(3)); H = int(cap.get(4))
tmp = dst + '.raw.avi'; vw = cv2.VideoWriter(tmp, cv2.VideoWriter_fourcc(*'MJPG'), fps, (W, H)); n = hits = 0
while True:
    ok, fr = cap.read()
    if not ok: break
    n += 1
    for tpl, img, dx, dy, msk, p0 in ((tpl_chip, new_chip, -1, -1, mask, (590, 199)), (tpl_kick, new_kick, -6, -4, None, (36, 220))):
        r = cv2.matchTemplate(fr, tpl, cv2.TM_CCOEFF_NORMED); _, mv, _, (x, y) = cv2.minMaxLoc(r)
        if mv > 0.8: put(fr, img, x + dx, y + dy, msk); hits += 1
        elif mv > 0.42 and abs(x - p0[0]) < 40 and abs(y - p0[1]) < 40:  # halb durchsichtig (Ein-/Ausblenden eines Fensters): Stelle unlesbar weichzeichnen
            th, tw = tpl.shape[:2]; y0, x0 = max(0, y - 4), max(0, x - 4); roi = fr[y0:y + th + 4, x0:x + tw + 4]
            fr[y0:y + th + 4, x0:x + tw + 4] = cv2.GaussianBlur(roi, (0, 0), 7); hits += 1
    vw.write(fr)
vw.release()
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', tmp, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '15', '-pix_fmt', 'yuv420p', dst], check=True); os.remove(tmp)
print(os.path.basename(src), n, 'Bilder,', hits, 'Treffer')
