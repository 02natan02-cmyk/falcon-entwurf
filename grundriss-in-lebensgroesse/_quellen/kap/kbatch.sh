cd /home/claude/gil/kap
for k in k1_raum k2_einrichten k3_design k4_senden; do n=${k%%_*}; node $n.js && python3 kenc.py $k; done
echo KAPITEL FERTIG
