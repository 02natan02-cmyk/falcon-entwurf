#!/bin/sh
# Mitschnitte der GIL-Seite für das Präsentationsvideo
B=http://localhost:8840/grundriss-in-lebensgroesse
O=/home/claude/gil/rec
D="--w 1280 --h 720 --dpr 1.5 --mobile 0 --rate 0.25 --wait 5000"
PRE="try{localStorage.setItem('kp-film','1');sessionStorage.setItem('gil-lt','1')}catch(e){}"
r(){ n=$1; shift; fe-mitschnitt $n "$@" > $O/$n.log 2>&1; echo "$n fertig: $(tail -1 $O/$n.log)"; }
r d_form "$B/planer.html?nointro" $O $D --sec 7 --act '[[500,"click","[data-form=l]"],[2300,"click","[data-form=u]"],[4300,"click","[data-form=insel]"],[6000,"click","[data-kp-doors]"]]'
r d_cam "$B/planer.html?nointro" $O $D --sec 8 --act '[[300,"click","[data-kp-doors]"],[1500,"click","[data-cam=augen]"],[3500,"click","[data-cam=top]"],[5500,"click","[data-cam=perspektive]"],[6600,"click","[data-mood]"]]'
r d_design "$B/planer.html?nointro" $O $D --sec 8 --pre "$PRE" --act '[[200,"js","document.querySelectorAll(\"[data-kstep]\")[2].click()"],[1400,"js","var w=[...document.querySelectorAll(\"[data-world]\")];(w[1]||w[0]).click()"],[2600,"js","var g=document.querySelector(\".gil-match\");g&&g.scrollIntoView({behavior:\"smooth\",block:\"center\"})"],[4200,"js","var w=[...document.querySelectorAll(\"[data-kp-pal] button, [data-kp-pal] [data-c]\")];w[3]&&w[3].click()"],[6000,"js","var w=[...document.querySelectorAll(\"[data-kp-pal] button, [data-kp-pal] [data-c]\")];w[6]&&w[6].click()"]]'
r d_logo "$B/planer.html?nointro" $O $D --sec 7 --pre "$PRE" --act '[[600,"js","document.querySelector(\"[data-logo-on]\").click()"],[3800,"click","[data-cam=augen]"]]'
r d_plans "$B/planer.html?nointro" $O $D --sec 8 --pre "$PRE" --act '[[400,"js","document.querySelectorAll(\"[data-kstep]\")[3].click()"],[1800,"click","[data-kpx-go=inst]"],[5200,"click","[data-kpx-go=plan]"]]'
r d_echt "$B/planer.html?nointro" $O $D --sec 9 --rate 0.2 --pre "$PRE" --act '[[400,"js","document.querySelectorAll(\"[data-kstep]\")[3].click()"],[1500,"click","[data-kpx-go=real]"]]'
r d_game "$B/planer.html?nointro" $O $D --sec 8 --pre "$PRE" --act '[[300,"js","var s=document.createElement(\"script\");s.src=\"assets/kp-game.js\";s.onload=function(){KPGame.open()};document.head.appendChild(s)"],[2500,"js","var b=[...document.querySelectorAll(\"button\")].find(x=>/los|start|spielen/i.test(x.textContent)&&x.offsetParent);b&&b.click()"]]'
r d_ki "$B/planer.html?nointro" $O $D --sec 7 --pre "$PRE" --act '[[500,"click",".kpai-hb"]]'
r d_send "$B/planer.html?nointro" $O $D --sec 7 --pre "$PRE" --act '[[300,"js","document.querySelectorAll(\"[data-kstep]\")[3].click()"],[1500,"js","var c=document.querySelector(\"[data-kp-form]\");c&&c.scrollIntoView({behavior:\"smooth\",block:\"center\"})"]]'
r m_plan "$B/planer.html?nointro" $O --w 390 --h 844 --dpr 2 --mobile 1 --rate 0.25 --wait 5000 --sec 9 --pre "$PRE" --act '[[500,"click","[data-form=u]"],[2500,"click","[data-kp-doors]"],[4200,"scroll",700],[6500,"js","document.querySelector(\"[data-logo-on]\").click()"]]'
echo ALLES FERTIG
