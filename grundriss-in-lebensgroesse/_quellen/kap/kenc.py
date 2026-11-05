#!/usr/bin/env python3
# Kapitel-Clips → H.264-MP4 (läuft in jedem Browser, auch Firefox/Safari am Handy) + Poster + Marker-JSON
import json, subprocess, sys, os
RAW = '/tmp/claude-0/-home-claude/633ed5eb-13e7-570d-b0a7-c0736854e344/scratchpad/kap/raw'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/gil/kpfilm/k'
os.makedirs(OUT, exist_ok=True)
n = sys.argv[1]; m = json.load(open(f'{RAW}/m_{n}.json'))
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-framerate', '25', '-i', f"{m['dir']}/o%05d.jpg", '-vf', 'scale=720:-2:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', '22', '-profile:v', 'high', '-movflags', '+faststart', '-an', f'{OUT}/{n}.mp4'], check=True)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', f'{OUT}/{n}.mp4', '-frames:v', '1', '-q:v', '4', f'{OUT}/{n}.jpg'], check=True)
json.dump({'marks': m['marks'], 'dur': m['dur']}, open(f'{OUT}/{n}.json', 'w'))
print(n, round(m['dur'] / 1000, 1), 's', m['marks'], os.path.getsize(f'{OUT}/{n}.mp4') // 1024, 'KB', m['errs'][:2])
