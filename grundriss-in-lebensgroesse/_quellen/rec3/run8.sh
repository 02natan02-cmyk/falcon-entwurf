#!/bin/bash
# 3D-Szenen neu mit 2,5x mehr echten Bildern (rate 0.04)
B=http://localhost:8840/grundriss-in-lebensgroesse/planer.html?nointro
O=/home/claude/gil/rec3
FULL='.kp-stage{position:fixed!important;inset:0!important;z-index:150!important;height:100vh!important;width:100vw!important}.kp-acts,.kp-live,.kp-cams,.kp-wm,.kp-toast,[data-kp-toast],.fx-c,.fx-r,[data-kp-pop],.kp-mini,[data-kp-mini]{opacity:0!important}.site-header{display:none!important}'
PRE0="try{localStorage.setItem('kp-film','1');sessionStorage.setItem('gil-lt','1')}catch(e){}"
LOOK="document.querySelector('[data-mood]').click();var lk=[...document.querySelectorAll('button')].find(b=>/Elegant dunkel/.test(b.textContent));lk&&lk.click();"
D="--w 1280 --h 720 --dpr 1.5 --mobile 0 --rate 0.04 --wait 2000"
fe-mitschnitt h_hero_s "$B" $O ${D/--wait 2000/--wait 5000} --sec 15 --css "$FULL" --pre "$PRE0;setTimeout(function(){${LOOK}dispatchEvent(new Event('resize'))},50)" --act '[[2500,"click","[data-kp-doors]"],[5000,"click","[data-cam=augen]"],[9000,"click","[data-cam=perspektive]"],[12000,"click","[data-cam=top]"]]' > $O/h_hero_s.log 2>&1; tail -1 $O/h_hero_s.log
fe-mitschnitt h_logo2_s "$B" $O $D --sec 20 --css "$FULL" --pre "localStorage.removeItem('kp-motiv');$PRE0;$(cat $O/logo.js)" > $O/h_logo2_s.log 2>&1; tail -1 $O/h_logo2_s.log
fe-mitschnitt u_mont3_s "$B" $O $D --sec 28 --css "$FULL" --pre "$PRE0;$(cat $O/mont3.js)" > $O/u_mont3_s.log 2>&1; tail -1 $O/u_mont3_s.log
fe-mitschnitt u_mont2_s "$B" $O $D --sec 42 --css "$FULL" --pre "$PRE0;$(cat $O/mont.js)" > $O/u_mont2_s.log 2>&1; tail -1 $O/u_mont2_s.log
echo FERTIG8
