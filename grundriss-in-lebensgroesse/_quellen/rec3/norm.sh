#!/bin/bash
# Aufnahme mit rate 0.04 auf Seitenzeit bringen: Länge / Sekunden → K, dann setpts/K, 30 fps
f=$1; sec=$(grep -o "in [0-9.]* s" $f.log | tail -1 | grep -o "[0-9.]*"); d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 $f.mp4); K=$(python3 -c "print($d/$sec)")
ffmpeg -loglevel error -y -i $f.mp4 -vf "setpts=PTS/$K,fps=30" -c:v libx264 -preset veryfast -crf 14 -pix_fmt yuv420p ${f%_s}_n.mp4
echo "$f K=$K -> ${f%_s}_n.mp4 $(ffprobe -v error -show_entries format=duration -of csv=p=0 ${f%_s}_n.mp4)"
