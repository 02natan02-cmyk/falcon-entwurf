#!/bin/bash
# Ton: Stimme (ohne „Den Planungstisch.“), Montage-Stimme in Lücke 1, Installations-Satz in Lücke 2, Musik bis zum Ende, Ducking, Lautheit
cd /home/claude/gil/film
M=$1; I=$2; END=$3; VO=/home/claude/gil/media-src/voice2.mp3; VM=/home/claude/gil/media-src/voice_mont.mp3; VI=/home/claude/gil/media-src/voice_install.mp3; MU=/home/claude/gil/media-src/music.mp3
G2=103.23
P=$(python3 -c "print($M-0.3-22.16)"); Q=$(python3 -c "print($I-0.3-8.67)")
ffmpeg -loglevel error -y -i $VO -i $VM -i $VI -filter_complex "[0:a]aresample=48000,aformat=channel_layouts=stereo,volume=enable='between(t,21.12,22.3)':volume=0,asplit=3[a][b][c];[a]atrim=0:49,asetpts=PTS-STARTPTS[a1];[b]atrim=49:$G2,asetpts=PTS-STARTPTS[b1];[c]atrim=start=$G2,asetpts=PTS-STARTPTS[c1];[1:a]aresample=48000,aformat=channel_layouts=stereo,asetpts=PTS-STARTPTS[m];[2:a]aresample=48000,aformat=channel_layouts=stereo,asetpts=PTS-STARTPTS[i];aevalsrc=0|0:d=0.35:s=48000[s0];aevalsrc=0|0:d=0.3:s=48000[s1];aevalsrc=0|0:d=$P:s=48000[s2];aevalsrc=0|0:d=0.3:s=48000[s3];aevalsrc=0|0:d=$Q:s=48000[s4];[s0][a1][s1][m][s2][b1][s3][i][s4][c1]concat=n=10:v=0:a=1,apad,atrim=0:$END[o]" -map "[o]" vo_gap.wav
ffmpeg -loglevel error -y -i $MU -filter_complex "[0:a]aresample=48000,aformat=channel_layouts=stereo,atempo=0.93,asplit=2[m1][m2];[m2]atrim=start=24,asetpts=PTS-STARTPTS[m2b];[m1][m2b]acrossfade=d=5:c1=tri:c2=tri,atrim=0:$END,volume=0.62,afade=in:st=0:d=2,afade=out:st=$(python3 -c "print($END-4)"):d=4[o]" -map "[o]" mu_long.wav
ffmpeg -loglevel error -y -i vo_gap.wav -i mu_long.wav -filter_complex "[0:a]asplit=2[vo][sc];[1:a][sc]sidechaincompress=threshold=0.035:ratio=6:attack=40:release=500[mud];[vo][mud]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-15:TP=-1.5:LRA=11,aresample=48000[a]" -map "[a]" -c:a pcm_s16le ton_v6.wav
ffprobe -v error -show_entries format=duration -of csv=p=0 ton_v6.wav
