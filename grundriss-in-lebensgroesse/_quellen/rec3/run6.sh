#!/bin/bash
B=http://localhost:8840/grundriss-in-lebensgroesse/planer.html?nointro
O=/home/claude/gil/rec3
D="--w 1280 --h 720 --dpr 1.5 --mobile 0 --rate 0.1 --wait 2000"
until [ -s $O/u_ki2.log ] && ! pgrep -f mitschnitt.js >/dev/null; do sleep 5; done
fe-mitschnitt u_design2 "$B" $O $D --sec 10 --pre "$(cat $O/pre.js);$(cat $O/des.js)" > $O/u_design2.log 2>&1; tail -1 $O/u_design2.log
