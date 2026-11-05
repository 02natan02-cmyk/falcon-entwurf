#!/bin/bash
B=http://localhost:8840/grundriss-in-lebensgroesse/planer.html?nointro
O=/home/claude/gil/rec3
FULL='.kp-stage{position:fixed!important;inset:0!important;z-index:150!important;height:100vh!important;width:100vw!important}.kp-acts,.kp-live,.kp-cams,.kp-wm,.kp-toast,[data-kp-toast],.fx-c,.fx-r,[data-kp-pop]{opacity:0!important}.site-header{display:none!important}'
D="--w 1280 --h 720 --dpr 1.5 --mobile 0 --rate 0.1 --wait 2000"
PRE0="try{localStorage.setItem('kp-film','1');sessionStorage.setItem('gil-lt','1')}catch(e){}"
until [ -s $O/u_design2.log ] && ! pgrep -f mitschnitt.js >/dev/null; do sleep 5; done
fe-mitschnitt u_mont3 "$B" $O $D --sec 28 --css "$FULL" --pre "$PRE0;$(cat $O/mont3.js)" > $O/u_mont3.log 2>&1; tail -1 $O/u_mont3.log
