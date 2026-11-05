/* Beethoven Barbershop – „Sinfonie in Fresh-Dur“, Fassung 2
   Was durch die ganze Seite läuft: die Partitur oben, die Schere an jeder Naht, der Hut von Mr Fresh,
   die Öffnungszeiten als Spielplan. Alles Bildmaterial ist echtes Foto oder HD-Film, Code macht nur die Bewegung. */
(function(){
'use strict';
var M=window.MEDIEN||{fotos:{},filme:{},fades:[],team:[],looks:{},saalPunkte:[]};
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var ruhig=matchMedia('(prefers-reduced-motion: reduce)').matches;
var hochkant=function(){return innerWidth<700||innerHeight>innerWidth*1.1};
var root=document.documentElement;
function klemm(v,a,b){return Math.max(a,Math.min(b,v))}
function glatt(t){t=klemm(t,0,1);return t*t*(3-2*t)}
function misch(a,b,t){return a+(b-a)*t}
function bild(src,alt,cls){var i=new Image();i.decoding='async';i.src=src;i.alt=alt||'';if(cls)i.className=cls;return i}
function beobachte(el,fn,schwelle,einmal){if(!el)return;var o=new IntersectionObserver(function(es){es.forEach(function(e){fn(e.isIntersecting,e);if(e.isIntersecting&&einmal)o.disconnect()})},{threshold:schwelle||0});o.observe(el);return o}
function kopfUnten(){var k=$('#kopf');return k?k.getBoundingClientRect().bottom:86}

/* ===================== Ton (nur auf Wunsch) ===================== */
var ton=false,ctx=null,puffer={},laedt=null;
var PROBEN=['C3','Ds3','Fs3','A3','C4','Ds4','Fs4','A4','C5','Ds5','Fs5','A5','C6','Ds6','Fs6','A6'];
function midi(n){var m=n.match(/^([A-G])(s?)(\d)$/);var b={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]]+(m[2]?1:0);return 12*(+m[3]+1)+b}
function audio(){if(!ctx){try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(ctx&&ctx.state==='suspended')ctx.resume();return ctx}
function ladeKlang(){
  if(laedt)return laedt;var c=audio();if(!c)return Promise.resolve();
  laedt=Promise.all(PROBEN.map(function(n){return fetch('klang/'+n+'.mp3').then(function(r){return r.arrayBuffer()}).then(function(b){return new Promise(function(ok){c.decodeAudioData(b,function(d){puffer[midi(n)]=d;ok()},function(){ok()})})}).catch(function(){})}));
  return laedt;
}
function spiele(m,laut,dauer){
  var c=ctx;if(!c||!ton)return;
  var best=null,abst=99;Object.keys(puffer).forEach(function(k){var d=Math.abs(k-m);if(d<abst){abst=d;best=+k}});
  if(best===null){ladeKlang();return}
  ducken();
  var q=c.createBufferSource();q.buffer=puffer[best];q.playbackRate.value=Math.pow(2,(m-best)/12);
  var g=c.createGain(),t=c.currentTime;g.gain.setValueAtTime(laut||.8,t);g.gain.setTargetAtTime(0,t+(dauer||2.2),.6);
  q.connect(g);g.connect(c.destination);q.start(t);q.stop(t+(dauer||2.2)+3);
}
var musikGain=null,musikQuelle=null,musikPuffer=null,musikLaedt=null,LAUT=.3,musikZiel=LAUT;
function ladeMusik(){if(musikLaedt)return musikLaedt;var c=audio();if(!c)return Promise.resolve();musikLaedt=fetch('klang/fresh-dur.mp3').then(function(r){return r.arrayBuffer()}).then(function(b){return new Promise(function(ok){c.decodeAudioData(b,function(d){musikPuffer=d;ok()},function(){ok()})})}).catch(function(){});return musikLaedt}
function musikStart(){var c=audio();if(!c)return;if(!musikGain){musikGain=c.createGain();musikGain.gain.value=0;musikGain.connect(c.destination)}
  ladeMusik().then(function(){if(!ton||!musikPuffer)return;if(!musikQuelle){musikQuelle=c.createBufferSource();musikQuelle.buffer=musikPuffer;musikQuelle.loop=true;musikQuelle.loopStart=.03;musikQuelle.loopEnd=musikPuffer.duration-.03;musikQuelle.connect(musikGain);musikQuelle.start()}
    musikGain.gain.cancelScheduledValues(c.currentTime);musikGain.gain.setTargetAtTime(musikZiel,c.currentTime,.4)})}
function musikStop(){var c=ctx;if(!c||!musikGain)return;musikGain.gain.cancelScheduledValues(c.currentTime);musikGain.gain.setTargetAtTime(0,c.currentTime,.15);var q=musikQuelle;musikQuelle=null;if(q)setTimeout(function(){try{q.stop()}catch(e){}},900)}
function musikPegel(z){musikZiel=z;var c=ctx;if(!c||!musikGain||!ton)return;musikGain.gain.cancelScheduledValues(c.currentTime);musikGain.gain.setTargetAtTime(z,c.currentTime,.35)}
function ducken(){var c=ctx;if(!c||!musikGain||!ton||musikZiel<LAUT)return;var t=c.currentTime;musikGain.gain.cancelScheduledValues(t);musikGain.gain.setTargetAtTime(.06,t,.05);musikGain.gain.setTargetAtTime(musikZiel,t+2.4,.8)}
document.addEventListener('visibilitychange',function(){if(!ctx)return;if(document.hidden){ctx.suspend()}else if(ton){ctx.resume()}});
/* kleine Geräusche aus dem Laden */
function rauschen(dauer,hoch,laut,form){var c=ctx;if(!ton||!c)return;var len=Math.max(1,c.sampleRate*dauer|0),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,form||5);var n=c.createBufferSource();n.buffer=b;var f=c.createBiquadFilter();f.type='bandpass';f.frequency.value=hoch;f.Q.value=.8;var g=c.createGain();g.gain.value=laut;n.connect(f);f.connect(g);g.connect(c.destination);n.start()}
function schnipp(){rauschen(.05,4200,.22,7);setTimeout(function(){rauschen(.03,2600,.12,8)},28)}
function klatsch(){rauschen(.08,1200+Math.random()*900,.25,4)}
function klirr(){var c=ctx;if(!ton||!c)return;[2093,3322,4186].forEach(function(f,i){var o=c.createOscillator(),g=c.createGain(),t=c.currentTime;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.05/(i+1),t);g.gain.exponentialRampToValueAtTime(.0001,t+.9-i*.2);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+1)})}
var brumm=null;
function summen(an){var c=ctx;if(an&&(!ton||!c))return;
  if(an&&!brumm){var o=c.createOscillator(),o2=c.createOscillator(),f=c.createBiquadFilter(),g=c.createGain(),g2=c.createGain();o.type='sawtooth';o.frequency.value=120;o2.type='square';o2.frequency.value=60;g2.gain.value=.35;f.type='lowpass';f.frequency.value=1500;o.connect(f);o2.connect(g2);g2.connect(f);f.connect(g);g.gain.value=0;g.gain.setTargetAtTime(.03,c.currentTime,.03);g.connect(c.destination);o.start();o2.start();brumm={o:[o,o2],g:g}}
  else if(!an&&brumm){var b=brumm;brumm=null;if(c)b.g.gain.setTargetAtTime(0,c.currentTime,.04);setTimeout(function(){b.o.forEach(function(x){try{x.stop()}catch(e){}})},300)}}
var tonKnopf=$('#ton'),tonWort=$('.ton-wort',tonKnopf);
function setzeTon(an){ton=an;tonKnopf.setAttribute('aria-pressed',an);if(tonWort)tonWort.textContent=an?'Ton an':'Ton';
  if(an){musikStart();ladeKlang().then(function(){spiele(60,.45);setTimeout(function(){spiele(64,.4)},120);setTimeout(function(){spiele(67,.4)},240)})}else{musikStop();summen(false)}}
tonKnopf.addEventListener('click',function(){setzeTon(!ton)});

/* ===================== Menü ===================== */
var nav=$('#nav'),menue=$('#menue');
function menueZu(){nav.classList.remove('offen-menue');menue.setAttribute('aria-expanded','false');menue.setAttribute('aria-label','Menü öffnen')}
menue.addEventListener('click',function(){var o=nav.classList.toggle('offen-menue');menue.setAttribute('aria-expanded',o);menue.setAttribute('aria-label',o?'Menü schließen':'Menü öffnen')});
$$('#nav a').forEach(function(a){a.addEventListener('click',menueZu)});

/* ===================== Öffnungszeiten: der Spielplan ===================== */
var ZEITEN={0:null,1:[540,1140],2:[540,1140],3:[540,1140],4:[540,1140],5:[540,1140],6:[540,1140]};
var TAGE=['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
function berlin(){var f=new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',weekday:'short',hour:'2-digit',minute:'2-digit',year:'numeric',month:'numeric',hourCycle:'h23'}).formatToParts(new Date());var o={};f.forEach(function(p){o[p.type]=p.value});var tage={So:0,Mo:1,Di:2,Mi:3,Do:4,Fr:5,Sa:6};return {tag:tage[o.weekday.replace('.','')],min:(+o.hour)*60+(+o.minute),jahr:+o.year,monat:+o.month}}
function uhr(min){var h=Math.floor(min/60),m=min%60;return h+(m?':'+String(m).padStart(2,'0'):'')+' Uhr'}
function lage(){
  var b=berlin(),z=ZEITEN[b.tag],auf=!!z&&b.min>=z[0]&&b.min<z[1],lang,kurz,pille;
  if(auf){var rest=z[1]-b.min;lang=rest<=60?'Jetzt geöffnet · noch '+rest+' Minuten':'Jetzt geöffnet · bis '+uhr(z[1]);kurz='Offen bis '+uhr(z[1]);pille='Geöffnet bis '+uhr(z[1])}
  else{var n=null;for(var d=0;d<8;d++){var t=(b.tag+d)%7,zz=ZEITEN[t];if(!zz)continue;if(d===0&&b.min>=zz[0])continue;n={d:d,tag:t,z:zz};break}
    var wann=n.d===0?'heute':n.d===1?'morgen':TAGE[n.tag];lang='Gerade geschlossen · '+wann+' ab '+uhr(n.z[0]);kurz=wann.charAt(0).toUpperCase()+wann.slice(1)+' ab '+uhr(n.z[0]);pille=kurz}
  return {b:b,z:z,auf:auf,lang:lang,kurz:kurz,pille:pille};
}
var sp=$('#spielplan'),spOffen=false,spAutoZu=null;
(function baueWoche(){
  var ol=$('#sp-woche');if(!ol)return;var reihe=[1,2,3,4,5,6,0];
  reihe.forEach(function(t){var li=document.createElement('li');li.dataset.tag=t;li.setAttribute('aria-label',TAGE[t]+': '+(ZEITEN[t]?uhr(ZEITEN[t][0])+' bis '+uhr(ZEITEN[t][1]):'Ruhetag'));if(!ZEITEN[t])li.className='pause';li.innerHTML='<span>heute</span><b></b>';ol.appendChild(li)});
  var tx=document.createElement('div');tx.className='sp-wochentext';tx.textContent='Montag bis Samstag 9 bis 19 Uhr · Sonntag Ruhetag';ol.after(tx);
})();
function zeitenMalen(){
  var L=lage(),b=L.b;
  $('#sp-tag').textContent=TAGE[b.tag];
  $('#sp-zeit').textContent=L.z?uhr(L.z[0]).replace(' Uhr','')+' – '+uhr(L.z[1]):'Ruhetag';
  [['#sp-status',L.lang],['#besuch-status',L.lang],['#status-pille',L.pille],['#leiste-status',L.kurz]].forEach(function(p){var el=$(p[0]);if(!el)return;el.classList.toggle('ja',L.auf);el.lastElementChild.textContent=p[1]});
  var fuell=L.z?klemm((b.min-L.z[0])/(L.z[1]-L.z[0]),0,1):0;
  if(spOffen){$('#sp-fuell').style.width=(fuell*100)+'%';$('#sp-jetzt').style.left=(fuell*100)+'%'}
  $('#sp-jetzt').style.opacity=L.auf?1:.35;
  $$('#sp-woche li').forEach(function(li){li.classList.toggle('heute',+li.dataset.tag===b.tag)});
  $$('#zeiten li').forEach(function(li){li.classList.toggle('heute',+li.dataset.tag===b.tag)});
  sp._fuell=fuell;
}
zeitenMalen();setInterval(zeitenMalen,30000);
function spielplan(auf,vonKlick){
  if(auf===spOffen)return;spOffen=auf;clearTimeout(spAutoZu);
  sp.classList.toggle('auf',auf);sp.setAttribute('aria-hidden',!auf);
  ['#status-pille','#leiste-status'].forEach(function(s){var e=$(s);if(e)e.setAttribute('aria-expanded',auf)});
  if(auf){spScrollStart=scrollY;$('#sp-fuell').style.width='0';$('#sp-jetzt').style.left='0';setTimeout(function(){$('#sp-fuell').style.width=(sp._fuell*100)+'%';$('#sp-jetzt').style.left=(sp._fuell*100)+'%'},380);
    if(ton){[72,76,79].forEach(function(m,i){setTimeout(function(){spiele(m,.35,1.2)},i*110)})}
    if(vonKlick)setTimeout(function(){$('#sp-zu').focus({preventScroll:true})},60);
    else{spAutoZu=setTimeout(function(){spielplan(false)},14000)}
  }
}
$('#sp-zu').addEventListener('click',function(){spielplan(false)});
['#status-pille','#leiste-status'].forEach(function(s){var e=$(s);if(e)e.addEventListener('click',function(ev){ev.stopPropagation();spielplan(!spOffen,true)})});
document.addEventListener('pointerdown',function(e){if(spOffen&&!sp.contains(e.target)&&!e.target.closest('#status-pille,#leiste-status'))spielplan(false)});
addEventListener('keydown',function(e){if(e.key==='Escape'){if(spOffen)spielplan(false);if(nav.classList.contains('offen-menue')){menueZu();menue.focus()}}});
var spScrollStart=null;
addEventListener('scroll',function(){if(!spOffen){spScrollStart=null;return}if(spScrollStart===null)spScrollStart=scrollY;if(Math.abs(scrollY-spScrollStart)>innerHeight*.45)spielplan(false)},{passive:true});
/* die Note fliegt aus dem Intro (oder vom Status) zur Karte und öffnet den Spielplan */
function noteFliegt(von,fertig){
  var ziel=sp.getBoundingClientRect(),quelle=innerWidth>900?$('#status-pille'):$('#leiste-status');
  if(!von&&quelle){var r=quelle.getBoundingClientRect();von={x:r.left+16,y:r.top+r.height/2}}
  if(!von||ruhig||!sp.animate){fertig();return}
  var n=document.createElement('div');n.className='flug-note';document.body.appendChild(n);
  var zx=ziel.left+ziel.width-70,zy=ziel.top+40;if(!ziel.width){zx=innerWidth*.7;zy=innerHeight*.3}
  var mx=(von.x+zx)/2,my=Math.min(von.y,zy)-120;
  var a=n.animate([{transform:'translate('+(von.x-10)+'px,'+(von.y-38)+'px) scale(.6) rotate(0deg)',opacity:0},{offset:.12,opacity:1},{transform:'translate('+(mx-10)+'px,'+(my-38)+'px) scale(1.5) rotate(-200deg)',opacity:1},{transform:'translate('+(zx-10)+'px,'+(zy-38)+'px) scale(.9) rotate(-360deg)',opacity:1}],{duration:950,easing:'cubic-bezier(.35,.1,.25,1)'});
  a.onfinish=function(){n.animate([{transform:'translate('+(zx-10)+'px,'+(zy-38)+'px) scale(.9)',opacity:1},{transform:'translate('+(zx-10)+'px,'+(zy-38)+'px) scale(3)',opacity:0}],{duration:420}).onfinish=function(){n.remove()};fertig()};
}

/* ===================== Fotos in die Plätze ===================== */
$$('[data-medium]').forEach(function(el){var f=M.fotos[el.dataset.medium];if(!f){el.style.display='none';return}
  if(f.video&&!ruhig){var v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('muted','');v.preload='none';v.poster=f.src;v.setAttribute('aria-label',f.alt);v.src=f.video;el.appendChild(v);el._video=v;
    beobachte(el,function(an){if(an){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()},.15);return}
  el.appendChild(bild(f.src,f.alt));});
beobachte($('.elise-foto'),function(an){if(an)$('.elise-foto').classList.add('da')},.25,true);
$$('.kopfzeile,.elise-text,.fade-raster,.live-text,.solist-text,.besuch-raster').forEach(function(el){el.classList.add('auftritt');beobachte(el,function(an){if(an)el.classList.add('da')},.12,true)});

/* ===================== Partitur oben ===================== */
var saetze=$$('[data-satz]'),partitur=$('#partitur'),strich=$('#kopfstrich');
var noten=saetze.map(function(s,i){var n=document.createElement('span');n.className='n';n.style.top=(1+((i*2)%5)*3)+'px';partitur.appendChild(n);return n});
function lageNoten(){var h=root.scrollHeight-innerHeight;saetze.forEach(function(s,i){var t=s.getBoundingClientRect().top+scrollY;noten[i].style.left=klemm((t-innerHeight*.4)/h*100,1,99)+'%'})}

/* ===================== Nähte: die Schere schneidet den nächsten Satz frei ===================== */
document.body.insertAdjacentHTML('afterbegin','<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs><linearGradient id="schere-k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf0cc"/><stop offset=".45" stop-color="#d9b56c"/><stop offset="1" stop-color="#6e5122"/></linearGradient></defs></svg>');
var SCHERE='<svg class="schere" viewBox="0 0 56 34" aria-hidden="true" focusable="false"><g class="klinge-u"><path d="M20 16.6 L55.2 17.4 L54.4 18.7 L20 19.6 Z" fill="url(#schere-k)"/><path d="M21 18.6 L13.6 23" stroke="#c9a35a" stroke-width="2.6" stroke-linecap="round"/><circle cx="9" cy="25" r="5.4" fill="rgba(13,10,10,.4)" stroke="#d9b56c" stroke-width="2.3"/></g><g class="klinge-o"><path d="M20 14.4 L54.4 15.3 L55.2 16.6 L20 17.4 Z" fill="url(#schere-k)"/><path d="M21 15.4 L13.6 11" stroke="#c9a35a" stroke-width="2.6" stroke-linecap="round"/><circle cx="9" cy="9" r="5.4" fill="rgba(13,10,10,.4)" stroke="#d9b56c" stroke-width="2.3"/></g><circle cx="21" cy="17" r="1.8" fill="#3c0b14" stroke="#ecd59f" stroke-width=".8"/></svg>';
var naehte=$$('.naht').map(function(n){n.innerHTML='<div class="naht-strich"></div><div class="naht-schnitt"></div>'+SCHERE;return {el:n,schere:$('.schere',n),o:$('.klinge-o',n),u:$('.klinge-u',n),schnitt:$('.naht-schnitt',n),phase:0,p:-1}});
function naehteLauf(){
  var vh=innerHeight;
  naehte.forEach(function(N){
    var r=N.el.getBoundingClientRect();if(r.top>vh*1.1||r.top<-vh*.3)return;
    var p=klemm((vh*.94-r.top)/(vh*.62),0,1);if(Math.abs(p-N.p)<.0005)return;
    var w=r.width,x=misch(30,w-30,p),offen=(p>0&&p<1)?Math.abs(Math.sin(p*Math.PI*8))*16:(p>=1?0:12);
    N.schere.style.transform='translateX('+(x-28)+'px)';N.schnitt.style.width=x+'px';
    N.o.setAttribute('transform','rotate('+(-offen)+' 21 17)');N.u.setAttribute('transform','rotate('+offen+' 21 17)');
    var ph=Math.floor(p*8);if(ph!==N.phase&&p>0&&p<1){N.phase=ph;schnipp()}
    N.p=p;
  });
}

/* ===================== Scroll-Filme ===================== */
var filme=$$('.film').map(function(sek){
  var cfg=M.filme[sek.dataset.film]||null;
  var st={sek:sek,cfg:cfg,bild:$('canvas.bild',sek),takte:$$('.takt',sek),lauf:$('.film-lauf b span',sek),frames:[],satz:'',ist:0,soll:0,p:0,zuletzt:'',rect:null,amb:null,ohneHut:null};
  if(cfg&&cfg.ohneHut){var oh=new Image();oh.decoding='async';oh.src=cfg.ohneHut.src;st.ohneHut=oh}
  return st;
});
function satzWahl(st){var c=st.cfg,dpr=Math.min(devicePixelRatio||1,2);if(hochkant())return (c.hoch&&!c.ganz)?'hoch':(c.mittel?'mittel':'breit');return (innerWidth*dpr>1500||!c.mittel)?'breit':'mittel'}
function reihenfolge(n){var o=[],da={};[8,4,2,1].forEach(function(s){for(var i=0;i<n;i+=s)if(!da[i]){da[i]=1;o.push(i)}});if(!da[n-1])o.push(n-1);return o}
function laden(st){
  if(!st.cfg)return;var s=satzWahl(st);if(st.satz===s)return;
  st.satz=s;var pfad=st.cfg[s],n=st.cfg.anzahl,neu=[],alt=st.frames;st.frames=neu;st.alt=alt;
  reihenfolge(n).forEach(function(i,k){var im=new Image();im.decoding='async';im.onload=function(){if(st.frames!==neu)return;neu[i]=im;if(k<3){st.zuletzt='';zeichne(st,true)}};im.src=pfad+String(i+1).padStart(3,'0')+'.webp'});
}
function naechstes(st,i){var f=st.frames,n=st.cfg.anzahl;for(var d=0;d<n;d++){if(f[i-d])return f[i-d];if(f[i+d])return f[i+d]}var a=st.alt||[];for(d=0;d<n;d++){if(a[i-d])return a[i-d];if(a[i+d])return a[i+d]}return null}
function zeichne(st,zwang){
  if(!st.cfg||!st.bild)return;
  var cv=st.bild,dpr=Math.min(devicePixelRatio||1,2),w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return;
  if(cv.width!==Math.round(w*dpr)||cv.height!==Math.round(h*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);zwang=true}
  var n=st.cfg.anzahl,a=Math.floor(st.ist),b=Math.min(a+1,n-1),t=st.ist-a;
  var oh=st.ohneHut&&st.ohneHut.complete&&st.ohneHut.naturalWidth?glatt((st.p-st.cfg.ohneHut.ab)/(1-st.cfg.ohneHut.ab)):0;
  var key=a+':'+Math.round(t*40)+':'+Math.round(oh*30);if(key===st.zuletzt&&!zwang)return;st.zuletzt=key;
  var A=naechstes(st,a),B=naechstes(st,b);if(!A)return;
  var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.globalAlpha=1;
  var iw=A.naturalWidth,ih=A.naturalHeight,R;
  if(st.cfg.ganz&&hochkant()){
    /* Handy hochkant: das ganze Bild auf volle Breite, darunter Platz für den Text; drumherum dasselbe Bild als weiches Licht */
    if(!st.amb){st.amb=document.createElement('canvas');st.amb.width=48;st.amb.height=27}
    var ax=st.amb.getContext('2d');ax.drawImage(A,0,0,48,27);
    var r0=Math.max(w/48,h/27);x.drawImage(st.amb,(w-48*r0)/2,(h-27*r0)/2,48*r0,27*r0);
    x.fillStyle='rgba(13,10,10,.66)';x.fillRect(0,0,w,h);
    var fw=w,fh=w*ih/iw,top=Math.max(kopfUnten()+14,Math.min(h*.36-fh/2,h-fh-330));
    R={x:0,y:top,w:fw,h:fh};
    if(st.lageOben!==top){st.lageOben=top;st.sek.style.setProperty('--rahmen-oben',top+'px');st.sek.style.setProperty('--rahmen-hoehe',fh+'px')}
  }else{
    var oben=st.cfg.ganz?kopfUnten():0,fx=(st.satz==='hoch')?.5:(st.cfg.mitte||.5),r=Math.max(w/iw,(h-oben)/ih),bw=iw*r,bh=ih*r;
    if(oben){if(!st.amb){st.amb=document.createElement('canvas');st.amb.width=48;st.amb.height=27}st.amb.getContext('2d').drawImage(A,0,0,48,27);x.drawImage(st.amb,0,0,w,oben*3);x.fillStyle='rgba(13,10,10,.6)';x.fillRect(0,0,w,oben)}
    R={x:klemm(w/2-fx*bw,w-bw,0),y:oben?oben:(h-bh)/2,w:bw,h:bh};
  }
  x.drawImage(A,R.x,R.y,R.w,R.h);
  if(B&&B!==A&&t>.02){x.globalAlpha=t;x.drawImage(B,R.x,R.y,R.w,R.h);x.globalAlpha=1}
  if(oh>0){x.globalAlpha=oh;x.drawImage(st.ohneHut,R.x,R.y,R.w,R.h);x.globalAlpha=1}
  st.rect=R;
}
function filmLauf(){
  var vh=innerHeight;
  filme.forEach(function(st){
    var r=st.sek.getBoundingClientRect(),hoehe=st.sek.offsetHeight-vh;
    if(r.top<vh*2.5&&r.bottom>-vh)laden(st);
    var p=hoehe>0?klemm(-r.top/hoehe,0,1):0;st.p=p;
    if(st.cfg)st.soll=p*(st.cfg.anzahl-1);
    st.takte.forEach(function(tk){var an=p>=+tk.dataset.von&&p<=+tk.dataset.bis;if(an!==tk.classList.contains('an')){tk.classList.toggle('an',an);if(an&&tk._beimAn)tk._beimAn()}});
    if(st.lauf)st.lauf.style.width=(p*100)+'%';
    if(st.punkte)punkteLauf(st);
  });
}
/* Punkte im Laden */
(function(){
  var saal=filme.filter(function(s){return s.sek.dataset.film==='saal'})[0],box=$('#punkte');if(!saal||!box||!M.saalPunkte)return;
  saal.punkte=M.saalPunkte.map(function(d){var e=document.createElement('div');e.className='punkt';e.innerHTML='<i></i><span>'+d.text+'</span>';box.appendChild(e);return {d:d,el:e}});
})();
function punkteLauf(st){
  var R=st.rect;if(!R)return;var c=st.cfg,hoch=st.satz==='hoch',c0=(c.hochMitte||.5)-.225;
  st.punkte.forEach(function(P){
    var d=P.d,t=st.p,fx=misch(d.a[0],d.e[0],t),fy=misch(d.a[1],d.e[1],t);
    if(hoch)fx=(fx-c0)/.45;
    var sx=R.x+fx*R.w,sy=R.y+fy*R.h,innen=sx>innerWidth*.05&&sx<innerWidth*.95&&sy>kopfUnten()+40&&sy<innerHeight*.62;
    var an=t>=d.von&&t<=d.bis&&innen;
    P.el.classList.toggle('an',an);P.el.classList.toggle('links',sx>innerWidth*.58);
    P.el.style.transform='translate('+sx.toFixed(1)+'px,'+sy.toFixed(1)+'px)';
  });
}
/* „Erst ein Mokka. Dann der Schnitt.“ – mit Klirren, und die Zeile wird wirklich geschnitten */
(function(){
  $$('.takt').forEach(function(tk){var h=$('h2',tk);if(!h||!/Mokka/.test(h.textContent))return;var em=$('em',h);if(!em)return;
    em.classList.add('schnitt-zeile');em.setAttribute('data-text',em.textContent);
    tk._beimAn=function(){klirr();em.classList.remove('geschnitten');void em.offsetWidth;setTimeout(function(){em.classList.add('geschnitten');schnipp()},900)};
  });
})();

/* ===================== Der Hut von Mr Fresh reist durch die Seite ===================== */
var HUT={el:$('#hut-reise'),ziele:[],klick:-9e9,feier:-9e9,blase:null,zuletzt:''};
var HUT_IM_FILM={x:.737,y:.198,w:.205}; /* Lage des Huts im letzten Bild der „Neunten“ */
function hutGroesse(){return klemm(innerWidth*.08,64,120)*(innerWidth<520?.9:1)}
function hutZiele(){
  var z=[];
  $$('[data-hut-ziel]').forEach(function(el){
    if(el.closest('.film-buehne'))return;
    var v=(el.getAttribute('data-hut-ziel')||'').split(',').map(parseFloat);if(v.length<2||isNaN(v[0])||isNaN(v[1]))v=[.92,0];
    /* Lage ohne Transformationen messen (Abschnitte gleiten beim Erscheinen noch ein) */
    var w=el.offsetWidth,h=el.offsetHeight,lx=0,ly=0,e=el;if(!w)return;while(e){lx+=e.offsetLeft;ly+=e.offsetTop;e=e.offsetParent}
    z.push({x:lx+w*v[0],y:ly+h*v[1]});
  });
  z.sort(function(a,b){return a.y-b.y});HUT.ziele=z;HUT.zuletzt='';
}
function hutBahn(){var w=innerWidth;return w>1320?(w+1200)/2+(w-1200)/4:w+hutGroesse()*.12} /* schmale Bildschirme: zwischen den Stationen fällt der Hut halb außerhalb am Rand, damit er Text und Preise nicht verdeckt */
function hutLage(){
  var vh=innerHeight,N=hutGroesse(),hero=filme[0];
  var heroEnde=hero?hero.sek.offsetTop+hero.sek.offsetHeight:0,pts=[];
  if(hero&&hero.rect&&hero.cfg){var R=hero.rect;pts.push({x:R.x+HUT_IM_FILM.x*R.w,y:heroEnde-vh+R.y+HUT_IM_FILM.y*R.h,w:HUT_IM_FILM.w*R.w,film:true,sy:R.y+HUT_IM_FILM.y*R.h})}
  HUT.ziele.forEach(function(z){pts.push({x:z.x,y:z.y,w:N})});
  if(!pts.length)return null;
  var L={x:0,y:0,w:N,rot:-6,flip:1,sicht:1,glanz:0};
  if(pts[0].film&&scrollY<heroEnde-vh){
    /* noch in der Ouvertüre: der Hut sitzt auf Mr Fresh und taucht erst am Ende des Films auf */
    var p=hero.p,a=pts[0],o=hero.cfg.ohneHut?glatt((p-hero.cfg.ohneHut.ab)/(1-hero.cfg.ohneHut.ab)):glatt((p-.93)/.06);
    L.x=a.x;L.y=scrollY+a.sy;L.w=a.w;L.rot=4;L.sicht=o;L.glanz=hero.cfg.ohneHut?0:o;return L;
  }
  var RL=vh*.36,s=scrollY+RL,i=0;
  if(s<=pts[0].y){var a0=pts[0];L.x=a0.x;L.y=a0.y;L.w=a0.w;L.rot=a0.film?4:-6;return L}
  var letzte=pts[pts.length-1];if(s>=letzte.y){L.x=letzte.x;L.y=letzte.y;L.w=letzte.w;return L}
  while(i<pts.length-2&&s>=pts[i+1].y)i++;
  var A=pts[i],B=pts[i+1],gap=Math.max(1,B.y-A.y),H=Math.min(vh*.16,gap*.22),d=s-A.y;
  if(d<H){var k0=d/H;L.x=A.x;L.y=A.y-Math.sin(k0*Math.PI)*8;L.w=A.w;L.rot=misch(A.film?4:-6,-16,k0);return L}
  var u=(d-H)/(gap-H),weit=klemm((gap/vh-.5)/.7,0,1),k=glatt(u/.16)*(1-glatt((u-.84)/.16))*weit;
  var bahn=hutBahn(),schwung=Math.min(46,Math.max(10,(innerWidth-1200)/6))*(innerWidth<700?.35:1);
  var dreh=Math.max(1,Math.round(gap/vh*1.3));
  L.x=misch(misch(A.x,B.x,glatt(u)),bahn,k)+Math.sin(u*Math.PI*2*dreh*.8)*schwung*k;
  L.y=A.y+u*gap+(u>.93?-Math.sin((u-.93)/.07*Math.PI)*14:0);
  L.w=misch(A.w,B.w,glatt(u/.25))*misch(1,innerWidth<700?.82:1,k);
  L.rot=misch(misch(-16,-6,glatt(u)),Math.sin(u*Math.PI*2*dreh)*30,k);
  L.flip=Math.cos(glatt(u)*Math.PI*2*dreh);
  return L;
}
function hutMalen(jetzt){
  var el=HUT.el;if(!el||ruhig)return;
  var L=hutLage();if(!L){el.classList.remove('da');return}
  var vh=innerHeight;
  /* „Hut ab!“ beim Antippen und beim Finale am Flügel */
  var kl=(jetzt-HUT.klick)/750,extraRot=0,extraS=1,hop=0;
  if(kl>=0&&kl<1){extraRot=360*glatt(kl);extraS=1+Math.sin(kl*Math.PI)*.35;hop=Math.sin(kl*Math.PI)*60}
  var fe=(jetzt-HUT.feier)/2800;
  if(fe>=0&&fe<1){var e=glatt(fe/.25)*(1-glatt((fe-.75)/.25));L.x=misch(L.x,innerWidth/2,e);L.y=misch(L.y,scrollY+vh*.62,e);L.w=misch(L.w,Math.min(innerWidth*.5,320),e);extraRot+=720*glatt(fe);L.flip=misch(L.flip,1,e);L.sicht=Math.max(L.sicht,e)}
  var w=L.w,hgt=w*.57,f=L.flip,b=f<0,sx=Math.max(.14,Math.abs(f));
  var key=[L.x|0,L.y|0,w|0,(L.rot+extraRot)|0,(sx*50)|0,b,(extraS*20)|0,(L.sicht*20)|0].join();
  if(key===HUT.zuletzt)return;HUT.zuletzt=key;
  el.style.width=w+'px';
  el.style.transform='translate3d('+(L.x-w/2).toFixed(1)+'px,'+(L.y-hgt*.94-hop).toFixed(1)+'px,0) rotate('+(L.rot+extraRot).toFixed(1)+'deg) scale('+(sx*extraS).toFixed(3)+','+extraS.toFixed(3)+')';
  el.classList.toggle('b',b);el.classList.add('da');el.style.opacity=L.sicht.toFixed(2);
  el.style.filter=L.glanz>0?'drop-shadow(0 0 '+(18*L.glanz).toFixed(0)+'px rgba(236,213,159,'+(.8*L.glanz).toFixed(2)+')) drop-shadow(0 16px 14px rgba(0,0,0,.55))':'';
  el.style.pointerEvents=L.sicht>.5?'auto':'none';
  if(HUT.blase&&HUT.blase.classList.contains('an')){HUT.blase.style.left=(L.x+w*.4)+'px';HUT.blase.style.top=(L.y-scrollY-hgt-30-hop)+'px'}
}
if(HUT.el){
  if(ruhig){HUT.el.style.display='none'}
  HUT.blase=document.createElement('div');HUT.blase.className='hut-sprechblase';HUT.blase.textContent='Hut ab!';HUT.blase.setAttribute('aria-hidden','true');document.body.appendChild(HUT.blase);
  HUT.el.addEventListener('click',function(){HUT.klick=performance.now();HUT.blase.classList.add('an');clearTimeout(HUT.bt);HUT.bt=setTimeout(function(){HUT.blase.classList.remove('an')},1600);if(!ton){setzeTon(true)}setTimeout(function(){spiele(67,.5,.6);setTimeout(function(){spiele(72,.5,1.2)},220)},60)});
}

/* ===================== Für Elise: das Lebenslied, jede Note ein Monat ===================== */
(function(){
  var box=$('#ll-noten'),jahre=$('#ll-jahre');if(!box)return;
  var b=berlin(),n=(b.jahr-2020)*12+(b.monat-10)+1;n=klemm(n,1,400);
  var MEL=[7,6,7,6,7,4,6,5,3,0,1,3,4,1,3,4,5,1,7,6,7,6,7,4,6,5,3];
  var MIDI=[76,75,76,75,76,71,74,72,69,64,65,69,71,65,69,71,72,65,76,75,76,75,76,71,74,72,69];
  var punkte=[];
  for(var i=0;i<n;i++){var monat=(9+i)%12+1,jahr=2020+Math.floor((9+i)/12),st=MEL[i%MEL.length];
    var e=document.createElement('b');e.style.left=(2+i/(Math.max(1,n-1))*96)+'%';e.style.top=(40-st*4.5)+'px';
    if(monat===1||i===0){e.className='jahr';var l=document.createElement('span');l.textContent=jahr;l.style.left=e.style.left;jahre.appendChild(l)}
    box.appendChild(e);punkte.push({el:e,m:MIDI[i%MIDI.length]})}
  beobachte($('#lebenslied'),function(an){if(!an)return;punkte.forEach(function(p,i){setTimeout(function(){p.el.classList.add('da');if(ton&&i%2===0)spiele(p.m,.14,.5)},ruhig?0:i*28)})},.5,true);
})();

/* ===================== Crescendo: der Fade-Regler mit Haarschneidemaschine ===================== */
(function(){
  var F=M.fades||[],box=$('#fade-bild');if(!box)return;if(!F.length){$('#uebergang').style.display='none';return}
  var bilder=F.map(function(f,i){var im=bild(f.src,f.name+': '+f.text);if(i===0)im.classList.add('an');box.appendChild(im);return im});
  var reg=$('#fade-regler'),griff=$('.griff',reg),dyn=$$('#dynamik span'),name=$('#fade-name'),text=$('#fade-text'),hin=$('#fade-hinweis'),skala=$('#fade-skala b'),fuell=$('#fade-bahn-fuell');
  var stufen=F.length-1,wert=0,beruehrt=false,letzte=-1;
  function setze(v,still){
    wert=klemm(v,0,stufen);var i=Math.round(wert);
    griff.style.left=(wert/stufen*100)+'%';fuell.style.width=(wert/stufen*100)+'%';
    if(i!==letzte){letzte=i;bilder.forEach(function(b,k){b.classList.toggle('an',k===i)});dyn.forEach(function(d,k){d.classList.toggle('an',k===i)});
      name.textContent=F[i].name;text.innerHTML=F[i].text+(F[i].mm?' <span class="fade-mm">'+F[i].mm+'</span>':'');skala.style.height=((i+1)/F.length*100)+'%';
      reg.setAttribute('aria-valuenow',i);reg.setAttribute('aria-valuetext',F[i].name);if(!still&&ton)spiele(60+[0,4,7,12,16,19][i%6],.3,1.2)}
  }
  function ausX(x){var r=reg.getBoundingClientRect();return (x-r.left)/r.width*stufen}
  reg.addEventListener('pointerdown',function(e){reg.setPointerCapture(e.pointerId);beruehrt=true;hin.style.opacity=0;griff.classList.add('summt');summen(true);setze(ausX(e.clientX))});
  reg.addEventListener('pointermove',function(e){if(reg.hasPointerCapture(e.pointerId))setze(ausX(e.clientX))});
  function los(){griff.classList.remove('summt');summen(false);setze(Math.round(wert))}
  reg.addEventListener('pointerup',los);reg.addEventListener('pointercancel',los);
  reg.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'||k==='ArrowUp'){beruehrt=true;hin.style.opacity=0;setze(Math.round(wert)+1);e.preventDefault()}if(k==='ArrowLeft'||k==='ArrowDown'){beruehrt=true;hin.style.opacity=0;setze(Math.round(wert)-1);e.preventDefault()}});
  setze(0,true);
  beobachte(reg,function(an){if(!an||beruehrt)return;var seq=[0,.5,1,1.5,2,2.5,3,2,1,0],k=0;griff.classList.add('summt');(function weiter(){if(beruehrt||k>=seq.length){griff.classList.remove('summt');return}setze(seq[k++],true);setTimeout(weiter,220)})()},.7,true);
})();

/* ===================== Programmheft ===================== */
beobachte($('#programm'),function(an){if(an)$('#programm').classList.add('da')},.15,true);

/* ===================== WebGL-Werkzeug ===================== */
function glMach(cv){var o={premultipliedAlpha:true,alpha:true,antialias:false,preserveDrawingBuffer:false};return cv.getContext('webgl',o)||cv.getContext('experimental-webgl',o)}
function glProg(gl,fs){
  var vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  function sh(t,src){var s=gl.createShader(t);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(s));return null}return s}
  var p=gl.createProgram(),a=sh(gl.VERTEX_SHADER,vs),b=sh(gl.FRAGMENT_SHADER,fs);if(!a||!b)return null;gl.attachShader(p,a);gl.attachShader(p,b);gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))return null;
  var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  gl.useProgram(p);var loc=gl.getAttribLocation(p,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var u={};return {p:p,u:function(n){return u[n]||(u[n]=gl.getUniformLocation(p,n))}};
}
var RAUSCHEN='float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),u.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),u.x),u.y);}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}';

/* ===================== Die Flamme schlägt aus dem Video über die Seite ===================== */
/* Die Flamme im Video zeigt nach oben rechts. Genau dort leckt sie über den Rand, zieht Zungen nach außen und versengt das Programmheft.
   Wie stark, misst die Seite live am Video selbst: lodert es im Film, lodert es auf dem Papier. */
(function(){
  var cv=$('#feuer'),buehne=$('#feuer-buehne');if(!cv||!buehne)return;if(ruhig){cv.remove();return}
  var gl=glMach(cv);if(!gl){cv.remove();return}
  var FS='precision mediump float;uniform vec2 aufl;uniform float zeit,kraft;uniform vec4 karte;'+RAUSCHEN+
  'void main(){vec2 uv=gl_FragCoord.xy/aufl;vec2 ks=karte.zw-karte.xy;vec2 c=(uv-karte.xy)/ks;'+
  'if(c.x>0.&&c.x<1.&&c.y>0.&&c.y<1.){gl_FragColor=vec4(0.);return;}'+
  'vec2 e=clamp(c,0.,1.);vec2 dv=(c-e)*ks*vec2(aufl.x/aufl.y,1.);float d=length(dv);'+
  'float wo=step(.999,e.y)*smoothstep(.36,.62,e.x);float wr=step(.999,e.x)*smoothstep(.45,.78,e.y);float w=max(wo,wr);'+
  'float s=e.y>.999?e.x:(2.-e.y);float L=.07+.2*kraft;'+
  'vec2 q=vec2(s*11.,d*7.-zeit*2.8);float wp=fbm(q*.7+vec2(0.,-zeit*.7));float n1=fbm(q+vec2(wp*1.8,0.));float n2=fbm(q*2.4+vec2(3.1,-zeit*1.5));'+
  'float f=clamp(((n1*1.2+n2*.38)-d/L-.22)*w*1.9,0.,1.);'+
  'vec3 col=mix(vec3(.5,.04,0.),vec3(1.,.4,.04),smoothstep(.04,.42,f));col=mix(col,vec3(1.,.84,.42),smoothstep(.42,.78,f));col=mix(col,vec3(1.,.98,.9),smoothstep(.8,1.,f));'+
  'float al=smoothstep(.02,.32,f);float rand=smoothstep(0.,.05,uv.x)*(1.-smoothstep(.92,1.,uv.x))*(1.-smoothstep(.9,1.,uv.y));'+
  'float seng=w*exp(-d/(L*.22))*(.45+.55*fbm(uv*vec2(10.,8.)))*(.4+.6*kraft)*.7;float glut=w*exp(-d/(L*.38))*.3*kraft;'+
  'vec3 o=col*al;float a=al;o+=vec3(1.,.48,.1)*glut*(1.-a);a+=glut*(1.-a);o+=vec3(.28,.13,.05)*seng*.5*(1.-a);a+=seng*.5*(1.-a);'+
  'gl_FragColor=vec4(o,a)*rand;}';
  var P=glProg(gl,FS);if(!P){cv.remove();return}
  var sichtbar=false,laeuft=false,k=.5,probe=document.createElement('canvas');probe.width=24;probe.height=26;var px=probe.getContext('2d',{willReadFrequently:true});
  function groesse(){var s=Math.min(devicePixelRatio||1,1.5)*.75,w=cv.clientWidth,h=cv.clientHeight;cv.width=Math.max(2,w*s|0);cv.height=Math.max(2,h*s|0);gl.viewport(0,0,cv.width,cv.height)}
  function kraftAusVideo(){var v=buehne.querySelector('video');if(!v||v.readyState<2||v.paused)return .5;try{px.drawImage(v,0,0,24,26);var d=px.getImageData(9,0,15,14).data,c=0;for(var i=0;i<d.length;i+=4){if(d[i]>215&&d[i+1]>150&&d[i+2]<150)c++}return klemm(.3+c/30,.3,1)}catch(e){return .5}}
  var t0=performance.now(),zaehl=0;
  function male(t){
    if(!sichtbar){laeuft=false;return}
    if(zaehl++%3===0){var ziel=kraftAusVideo();k+=(ziel-k)*.35}
    var rc=cv.getBoundingClientRect(),hb=buehne.querySelector('.heft-bild').getBoundingClientRect();
    gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(P.u('aufl'),cv.width,cv.height);gl.uniform1f(P.u('zeit'),(t-t0)/1000);gl.uniform1f(P.u('kraft'),k*(.92+.08*Math.sin(t/70)));
    gl.uniform4f(P.u('karte'),(hb.left-rc.left)/rc.width,(rc.bottom-hb.bottom)/rc.height,(hb.right-rc.left)/rc.width,(rc.bottom-hb.top)/rc.height);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);requestAnimationFrame(male);
  }
  function sichtbarJetzt(){var r=buehne.getBoundingClientRect();return r.bottom>-200&&r.top<innerHeight+200}
  cv.addEventListener('webglcontextlost',function(e){e.preventDefault();sichtbar=false});
  cv.addEventListener('webglcontextrestored',function(){P=glProg(gl,FS);groesse();if(sichtbarJetzt()){sichtbar=true;if(!laeuft){laeuft=true;requestAnimationFrame(male)}}});
  addEventListener('resize',groesse);groesse();
  beobachte(buehne,function(an){sichtbar=an;if(an&&!laeuft){laeuft=true;groesse();requestAnimationFrame(male)}},0);
})();

/* ===================== Das Notenblatt brennt, je länger man hinsieht ===================== */
(function(){
  var cv=$('#nb-leinwand'),box=$('#notenblatt');if(!cv||!box)return;
  var W=1200,H=900,pap=document.createElement('canvas');pap.width=W;pap.height=H;var y=pap.getContext('2d');
  function papierMalen(){
    var g=y.createLinearGradient(0,0,W,H);g.addColorStop(0,'#f7efdc');g.addColorStop(.6,'#efe2c4');g.addColorStop(1,'#e2cfa6');y.fillStyle=g;y.fillRect(0,0,W,H);
    for(var i=0;i<9000;i++){y.fillStyle='rgba(120,90,50,'+(Math.random()*.05).toFixed(3)+')';y.fillRect(Math.random()*W,Math.random()*H,1+Math.random()*2,1+Math.random()*2)}
    var rg=y.createRadialGradient(W/2,H/2,H*.3,W/2,H/2,H*.85);rg.addColorStop(0,'rgba(0,0,0,0)');rg.addColorStop(1,'rgba(110,70,30,.28)');y.fillStyle=rg;y.fillRect(0,0,W,H);
    y.fillStyle='#2a1c17';y.textAlign='center';y.font='italic 600 54px "Bodoni Moda", Didot, serif';y.fillText('Sinfonie in Fresh-Dur',W/2,96);
    y.font='500 20px "Hanken Grotesk", Arial, sans-serif';y.fillText('ALLEGRO CON FUOCO',W/2,134);
    y.textAlign='right';y.font='italic 22px "Bodoni Moda", serif';y.fillText('Ludwig van Beethoven · frisch arrangiert',W-80,170);
    y.textAlign='left';y.fillText('Dudweilerstraße 53',80,170);
    var seed=7;function zz(){seed=(seed*9301+49297)%233280;return seed/233280}
    var takt=(W-250)/4;
    for(var s=0;s<5;s++){var oy=220+s*130;y.strokeStyle='rgba(42,28,23,.75)';y.lineWidth=1.4;for(var l=0;l<5;l++){y.beginPath();y.moveTo(80,oy+l*13);y.lineTo(W-80,oy+l*13);y.stroke()}
      y.lineWidth=2;y.beginPath();y.moveTo(80,oy);y.lineTo(80,oy+52);y.stroke();
      y.lineWidth=3;y.beginPath();y.moveTo(112,oy+66);y.bezierCurveTo(100,oy+40,128,oy+6,118,oy-14);y.bezierCurveTo(108,oy-4,104,oy+30,126,oy+36);y.bezierCurveTo(146,oy+40,140,oy+14,122,oy+20);y.stroke();
      for(var t=0;t<4;t++){var tx=170+t*takt;y.lineWidth=1.4;y.beginPath();y.moveTo(tx+takt,oy);y.lineTo(tx+takt,oy+52);y.stroke();
        for(var q=0;q<4;q++){var nx=tx+26+q*(takt-40)/4,st=Math.floor(zz()*9)-1,ny=oy+52-st*6.5;y.fillStyle='#2a1c17';y.save();y.translate(nx,ny);y.rotate(-.35);y.beginPath();y.ellipse(0,0,8.5,6,0,0,Math.PI*2);y.fill();y.restore();y.lineWidth=1.8;y.beginPath();y.moveTo(nx+7.5,ny-2);y.lineTo(nx+7.5,ny-40);y.stroke();
          if(q%2===0&&zz()>.4){y.lineWidth=5;y.beginPath();y.moveTo(nx+7.5,ny-40);y.lineTo(nx+7.5+(takt-40)/4,ny-40-(zz()-.5)*10);y.stroke()}}}
    }
    y.fillStyle='rgba(125,23,39,.85)';y.font='italic 700 30px "Bodoni Moda", serif';y.fillText('ff',150,850);y.fillText('fresh',W-230,850);
  }
  var gl=glMach(cv),P=null,tex=null;
  var FS='precision mediump float;uniform sampler2D pap;uniform vec2 aufl,herd;uniform float brand,zeit;'+RAUSCHEN+
  'void main(){vec2 uv=gl_FragCoord.xy/aufl;vec2 tuv=vec2(uv.x,1.-uv.y);float asp=aufl.x/aufl.y;'+
  'float r=fbm(uv*vec2(4.5,3.4))*.55+fbm(uv*16.)*.14;float d=length((uv-herd)*vec2(asp,1.))/asp*1.25;float v=d+r*.55-brand*1.75;'+
  'vec4 c=texture2D(pap,tuv);float seng=1.-smoothstep(0.,.17,v);vec3 col=mix(c.rgb,c.rgb*vec3(.55,.36,.2),seng);col=mix(col,vec3(.08,.05,.03),pow(1.-smoothstep(0.,.05,v),1.5));'+
  'float glut=(1.-smoothstep(0.,.022,v))*smoothstep(-.016,0.,v);float fl=.65+.35*sin(zeit*17.+r*40.);col=mix(col,vec3(1.,.55,.12)*1.3,glut*fl);col+=vec3(1.,.3,.05)*glut*.4;'+
  'float al=smoothstep(-.016,-.004,v);gl_FragColor=vec4(col*al,al);}';
  if(gl)P=glProg(gl,FS);
  if(!gl||!P){(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){var c2=cv.getContext('2d');if(!c2)return;papierMalen();cv.width=W;cv.height=H;c2.drawImage(pap,0,0)});return}
  var funken=document.createElement('canvas');funken.className='nb-funken';funken.setAttribute('aria-hidden','true');box.appendChild(funken);var fx=funken.getContext('2d');
  function textur(){papierMalen();tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,pap)}
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(textur);
  function groesse(){var dpr=Math.min(devicePixelRatio||1,2),w=box.clientWidth,h=box.clientHeight;cv.width=Math.max(2,w*dpr|0);cv.height=Math.max(2,h*dpr|0);funken.width=cv.width;funken.height=cv.height;gl.viewport(0,0,cv.width,cv.height)}
  var brand=0,phase='brennt',warte=0,sichtbar=false,laeuft=false,schnell=false,letzt=0,t0=performance.now(),teile=[],herd=[.9,.06];
  box.addEventListener('pointerenter',function(){schnell=true});box.addEventListener('pointerleave',function(){schnell=false});
  box.addEventListener('pointerdown',function(){schnell=true;setTimeout(function(){schnell=false},1500)});
  function male(t){
    if(!sichtbar){laeuft=false;return}
    var dt=Math.min(.05,(t-letzt)/1000||0);letzt=t;
    if(phase==='brennt'){brand+=dt/(schnell?9:20);if(brand>1.12){phase='asche';warte=2.8}}
    else if(phase==='asche'){warte-=dt;if(warte<=0)phase='dacapo'}
    else{brand-=dt/1.8;if(brand<=0){brand=0;phase='brennt'}}
    if(tex){gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.bindTexture(gl.TEXTURE_2D,tex);gl.uniform1i(P.u('pap'),0);gl.uniform2f(P.u('aufl'),cv.width,cv.height);gl.uniform2f(P.u('herd'),herd[0],herd[1]);gl.uniform1f(P.u('brand'),brand);gl.uniform1f(P.u('zeit'),(t-t0)/1000);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}
    /* Funken an der Brandkante */
    var W2=funken.width,H2=funken.height,asp=W2/H2;
    if(phase==='brennt'&&brand>.02&&teile.length<140){for(var i=0;i<3;i++){var a=Math.random()*Math.PI/2+Math.PI/2,rr=(brand*1.75-.25)*asp/1.25;var ux=herd[0]+Math.cos(a)*rr/asp,uy=herd[1]+Math.sin(a)*rr;if(ux<0||ux>1||uy<0||uy>1)continue;teile.push({x:ux*W2,y:(1-uy)*H2,vx:(Math.random()-.5)*30,vy:-40-Math.random()*90,l:1,g:1+Math.random()*2.5})}}
    fx.clearRect(0,0,W2,H2);fx.globalCompositeOperation='lighter';
    for(var j=teile.length-1;j>=0;j--){var p=teile[j];p.x+=p.vx*dt*2;p.y+=p.vy*dt*2;p.vx+=(Math.random()-.5)*20*dt;p.l-=dt*.9;if(p.l<=0){teile.splice(j,1);continue}
      fx.fillStyle='rgba(255,'+(140+p.l*100|0)+',60,'+p.l.toFixed(2)+')';fx.beginPath();fx.arc(p.x,p.y,p.g*(devicePixelRatio>1?1.6:1),0,6.283);fx.fill()}
    fx.globalCompositeOperation='source-over';
    requestAnimationFrame(male);
  }
  cv.addEventListener('webglcontextlost',function(e){e.preventDefault();tex=null});
  cv.addEventListener('webglcontextrestored',function(){P=glProg(gl,FS);textur();groesse()});
  addEventListener('resize',groesse);groesse();
  beobachte(box,function(an){sichtbar=an;if(an&&!laeuft){laeuft=true;letzt=performance.now();requestAnimationFrame(male)}},.3);
})();

/* ===================== Dolce: live am Flügel, mit Ton ===================== */
(function(){
  var v=$('#live-video'),knopf=$('#live-ton'),cv=$('#noten-flug'),sek=$('#live');if(!v||!sek)return;
  var an=false,quelle=null,ana=null,daten=null,sichtbar=false;
  beobachte($('.live-bild'),function(ja){sichtbar=ja;if(ja){var p=v.play();if(p&&p.catch)p.catch(function(){})}else{v.pause()}},.3);
  knopf.addEventListener('click',function(){
    an=!an;var c=audio();
    if(an&&c&&!quelle){try{quelle=c.createMediaElementSource(v);ana=c.createAnalyser();ana.fftSize=256;daten=new Uint8Array(ana.frequencyBinCount);quelle.connect(ana);ana.connect(c.destination)}catch(e){}}
    v.muted=!an;v.volume=1;if(an){var p=v.play();if(p&&p.catch)p.catch(function(){})}
    knopf.setAttribute('aria-pressed',an);$('.lt-wort',knopf).textContent=an?'Ton aus':'Mit Ton hören';$('.lt-pfeil',knopf).textContent=an?'❚❚':'▶';
    musikPegel(an?0:LAUT);
  });
  if(!cv||ruhig)return;var x=cv.getContext('2d'),teile=[],laeuft=false,letzt=0;
  function groesse(){var d=Math.min(devicePixelRatio||1,2);cv.width=sek.clientWidth*d|0;cv.height=sek.clientHeight*d|0}
  addEventListener('resize',groesse);groesse();
  function energie(){if(!an||!ana)return 0;ana.getByteFrequencyData(daten);var s=0;for(var i=2;i<40;i++)s+=daten[i];return s/(38*255)}
  function note(x0,y0,s,a,rot){x.save();x.translate(x0,y0);x.rotate(rot);x.globalAlpha=a;x.fillStyle='#ecd59f';x.strokeStyle='#ecd59f';x.lineWidth=s*.12;x.beginPath();x.ellipse(0,0,s*.42,s*.3,-.35,0,6.283);x.fill();x.beginPath();x.moveTo(s*.38,-s*.08);x.lineTo(s*.38,-s*1.25);x.stroke();x.beginPath();x.moveTo(s*.38,-s*1.25);x.quadraticCurveTo(s*.9,-s*.95,s*.75,-s*.55);x.stroke();x.restore()}
  function male(t){
    if(!sichtbar&&!teile.length){laeuft=false;x.clearRect(0,0,cv.width,cv.height);return}
    var dt=Math.min(.05,(t-letzt)/1000||0);letzt=t;var d=Math.min(devicePixelRatio||1,2);
    var e=energie(),lb=$('.live-bild').getBoundingClientRect(),rs=sek.getBoundingClientRect();
    var rate=(!v.paused&&sichtbar)?(an?.6+e*9:.35):0;
    if(Math.random()<rate*dt*6&&teile.length<70){teile.push({x:(lb.right-rs.left-20)*d,y:(lb.top-rs.top+lb.height*(.3+Math.random()*.5))*d,vx:(40+Math.random()*90+e*160)*d,vy:(-30-Math.random()*60-e*120)*d,s:(12+Math.random()*12+e*16)*d,r:(Math.random()-.5)*.6,vr:(Math.random()-.5)*1.4,l:1})}
    x.clearRect(0,0,cv.width,cv.height);
    for(var i=teile.length-1;i>=0;i--){var p=teile[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=8*dt*d;p.r+=p.vr*dt;p.l-=dt*.32;if(p.l<=0||p.x>cv.width+40){teile.splice(i,1);continue}note(p.x,p.y,p.s,Math.min(1,p.l*1.4)*.85,p.r)}
    requestAnimationFrame(male);
  }
  beobachte(sek,function(ja){if(ja&&!laeuft){laeuft=true;letzt=performance.now();groesse();requestAnimationFrame(male)}},0);
})();

/* ===================== Scherzo: Muster in einen echten Fade schneiden ===================== */
(function(){
  var fl=$('#studio-flaeche'),cv=$('#studio-leinwand'),hv=$('#studio-haare'),ms=$('#studio-maschine'),tipp=$('#studio-tipp');if(!cv||!M.fotos.studio)return;
  var S=1200,x=cv.getContext('2d');cv.width=S;cv.height=S;
  var basis=new Image(),bereit=false;basis.decoding='async';
  function leer(){var c=document.createElement('canvas');c.width=S;c.height=S;return c}
  var mHaut=leer(),mRand=leer(),hautC=leer(),t1=leer(),t2=leer(),mh=mHaut.getContext('2d'),mr=mRand.getContext('2d');
  /* Zone: nur der kurze Fade hinter und über dem Ohr (am Foto gemessen) */
  var ZONE=[[.31,.57],[.44,.60],[.58,.655],[.72,.70],[.83,.72],[.855,.82],[.80,.92],[.66,.975],[.50,.985],[.40,.93],[.33,.84],[.31,.70]];
  var zone=new Path2D();ZONE.forEach(function(p,i){i?zone.lineTo(p[0]*S,p[1]*S):zone.moveTo(p[0]*S,p[1]*S)});zone.closePath();
  function haut(){
    /* Haut aus dem Licht des Fotos: Helligkeit weich gerechnet, Farbton vom Ohr, dazu feine Stoppeln */
    var k=150,c=document.createElement('canvas');c.width=k;c.height=k;var y=c.getContext('2d',{willReadFrequently:true});y.drawImage(basis,0,0,k,k);
    var d=y.getImageData(0,0,k,k),p=d.data,ohr=[0,0,0,0];
    for(var yy=Math.floor(.42*k);yy<.56*k;yy++)for(var xx=Math.floor(.02*k);xx<.12*k;xx++){var i=(yy*k+xx)*4;ohr[0]+=p[i];ohr[1]+=p[i+1];ohr[2]+=p[i+2];ohr[3]++}
    var hr=ohr[0]/ohr[3],hg=ohr[1]/ohr[3],hb=ohr[2]/ohr[3],sum=0,L=new Float32Array(k*k);
    for(var j=0;j<k*k;j++){L[j]=(.3*p[j*4]+.59*p[j*4+1]+.11*p[j*4+2]);sum+=L[j]}
    var mittel=sum/(k*k);
    function weich(a){var b=new Float32Array(k*k),r=6;for(var yy=0;yy<k;yy++)for(var xx=0;xx<k;xx++){var s=0,n=0;for(var dy=-r;dy<=r;dy+=2)for(var dx=-r;dx<=r;dx+=2){var X=xx+dx,Y=yy+dy;if(X<0||Y<0||X>=k||Y>=k)continue;s+=a[Y*k+X];n++}b[yy*k+xx]=s/n}return b}
    L=weich(weich(L));
    for(j=0;j<k*k;j++){var f=klemm(.86+(L[j]-mittel)/255*.6,.74,1.04),gr=(hr+hg+hb)/3;p[j*4]=klemm(misch(hr,gr,.32)*f,0,255);p[j*4+1]=klemm(misch(hg,gr,.32)*f,0,255);p[j*4+2]=klemm(misch(hb,gr,.32)*f,0,255);p[j*4+3]=255}
    y.putImageData(d,0,0);
    var hx=hautC.getContext('2d');hx.imageSmoothingEnabled=true;hx.imageSmoothingQuality='high';hx.drawImage(c,0,0,S,S);
    for(var z=0;z<52000;z++){var a=.12+Math.random()*.3;hx.fillStyle='rgba(38,24,18,'+a.toFixed(2)+')';hx.fillRect(Math.random()*S,Math.random()*S,1.1+Math.random()*.8,1.1+Math.random()*1.6)}
  }
  function zeichne(){
    x.globalCompositeOperation='source-over';x.globalAlpha=1;x.drawImage(basis,0,0,S,S);
    var a=t1.getContext('2d');a.globalCompositeOperation='source-over';a.clearRect(0,0,S,S);a.drawImage(mRand,0,0);a.globalCompositeOperation='source-in';a.fillStyle='rgb(14,9,7)';a.fillRect(0,0,S,S);
    x.globalAlpha=.26;x.drawImage(t1,0,0);x.globalAlpha=1;
    var b=t2.getContext('2d');b.globalCompositeOperation='source-over';b.clearRect(0,0,S,S);b.drawImage(mHaut,0,0);b.globalCompositeOperation='source-in';b.drawImage(hautC,0,0);
    x.drawImage(t2,0,0);
    /* feine Schattenkante oben im Schnitt, damit er Tiefe hat */
    a.globalCompositeOperation='source-over';a.clearRect(0,0,S,S);a.drawImage(mHaut,0,0);a.globalCompositeOperation='destination-out';a.drawImage(mHaut,0,2.4);a.globalCompositeOperation='source-in';a.fillStyle='rgb(40,24,18)';a.fillRect(0,0,S,S);
    x.globalAlpha=.5;x.drawImage(t1,0,0);x.globalAlpha=1;
  }
  var neuZeichnen=false;function bitte(){if(!neuZeichnen){neuZeichnen=true;requestAnimationFrame(function(){neuZeichnen=false;if(bereit)zeichne()})}}
  function leeren(){mh.clearRect(0,0,S,S);mr.clearRect(0,0,S,S);bitte()}
  function strich(pfad,breite){
    [[mh,breite],[mr,breite+2.4]].forEach(function(z){var c=z[0];c.save();c.clip(zone);c.lineCap='round';c.lineJoin='round';c.strokeStyle='#fff';c.lineWidth=z[1];c.beginPath();
      c.moveTo(pfad[0][0],pfad[0][1]);if(pfad.length===2){c.lineTo(pfad[1][0],pfad[1][1])}else{for(var i=1;i<pfad.length-1;i++){var mx=(pfad[i][0]+pfad[i+1][0])/2,my=(pfad[i][1]+pfad[i+1][1])/2;c.quadraticCurveTo(pfad[i][0],pfad[i][1],mx,my)}c.lineTo(pfad[pfad.length-1][0],pfad[pfad.length-1][1])}
      c.stroke();c.restore()});
    bitte();
  }
  basis.onload=function(){haut();bereit=true;zeichne()};basis.src=M.fotos.studio.src;
  /* Haare fallen */
  var hx=hv.getContext('2d'),haare=[],hLauf=false,letztH=0;
  function hvGroesse(){var d=Math.min(devicePixelRatio||1,2);hv.width=Math.max(2,fl.clientWidth*d|0);hv.height=Math.max(2,fl.clientHeight*d|0)}
  addEventListener('resize',hvGroesse);hvGroesse();
  function haarFall(px,py){var d=hv.width/Math.max(1,fl.clientWidth);for(var i=0;i<3;i++)haare.push({x:px*d,y:py*d,vx:(Math.random()-.5)*60*d,vy:(-10-Math.random()*40)*d,r:Math.random()*6.3,vr:(Math.random()-.5)*8,l:3+Math.random()*5,a:1});if(!hLauf){hLauf=true;letztH=performance.now();requestAnimationFrame(haarMalen)}}
  function haarMalen(t){var dt=Math.min(.05,(t-letztH)/1000);letztH=t;var d=hv.width/Math.max(1,fl.clientWidth);hx.clearRect(0,0,hv.width,hv.height);
    for(var i=haare.length-1;i>=0;i--){var h=haare[i];h.vy+=420*dt*d;h.x+=h.vx*dt;h.y+=h.vy*dt;h.r+=h.vr*dt;h.a-=dt*.8;if(h.a<=0||h.y>hv.height+20){haare.splice(i,1);continue}
      hx.save();hx.translate(h.x,h.y);hx.rotate(h.r);hx.strokeStyle='rgba(32,22,18,'+h.a.toFixed(2)+')';hx.lineWidth=1.1*d;hx.beginPath();hx.moveTo(-h.l*d/2,0);hx.lineTo(h.l*d/2,0);hx.stroke();hx.restore()}
    if(haare.length)requestAnimationFrame(haarMalen);else hLauf=false}
  /* die Maschine folgt dem Finger */
  function maschine(px,py){ms.style.transform='translate('+px+'px,'+py+'px) translate(-50%,-6%) rotate(-28deg)';ms.classList.add('da')}
  function lokal(e){var r=fl.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top,sx:(e.clientX-r.left)/r.width*S,sy:(e.clientY-r.top)/r.height*S}}
  var zug=null,gezogen=false,demo=null;
  fl.addEventListener('pointermove',function(e){var p=lokal(e);if(e.pointerType==='mouse'||zug)maschine(p.x,p.y);
    if(!zug)return;var l=zug[zug.length-1];if(Math.hypot(p.sx-l[0],p.sy-l[1])<5)return;zug.push([p.sx,p.sy]);
    strich(zug.slice(-3),8.5);if(x.isPointInPath(zone,p.sx,p.sy))haarFall(p.x,p.y)});
  fl.addEventListener('pointerdown',function(e){fl.setPointerCapture(e.pointerId);if(demo){demo.stop=true;demo=null}var p=lokal(e);zug=[[p.sx,p.sy]];gezogen=true;tipp.style.opacity=0;maschine(p.x,p.y);ms.classList.add('summt');summen(true)});
  function ende(e){if(!zug)return;zug=null;ms.classList.remove('summt');summen(false);if(e&&e.pointerType!=='mouse')ms.classList.remove('da')}
  fl.addEventListener('pointerup',ende);fl.addEventListener('pointercancel',ende);fl.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse'&&!zug&&!demo)ms.classList.remove('da')});
  /* fertige Muster, von der Maschine geschnitten */
  function bogen(a,c,b,n){var p=[];for(var i=0;i<=n;i++){var t=i/n,u=1-t;p.push([u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]])}return p}
  var MUSTER={
    linien:[bogen([.40,.70],[.58,.70],[.79,.78],40),bogen([.41,.745],[.58,.745],[.79,.825],40)],
    blitz:[[[.50,.70],[.63,.785],[.56,.80],[.71,.905]]],
    welle:[(function(){var p=[];for(var i=0;i<=60;i++){var t=i/60;p.push([.40+t*.39,.79+t*.03+Math.sin(t*Math.PI*3)*.026])}return p})()],
    stern:[(function(){var p=[],cx=.61,cy=.815;for(var i=0;i<=10;i++){var r=i%2?.03:.07,a=-Math.PI/2+i*Math.PI/5;p.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return p})()]
  };
  function abspielen(name){
    if(demo)demo.stop=true;leeren();var d={stop:false};demo=d;gezogen=true;tipp.style.opacity=0;
    var pfade=MUSTER[name].map(function(pf){var out=[];for(var i=1;i<pf.length;i++){var a=pf[i-1],b=pf[i],len=Math.hypot((b[0]-a[0])*S,(b[1]-a[1])*S),n=Math.max(1,Math.round(len/7));for(var k=0;k<n;k++){var t=k/n;out.push([(a[0]+(b[0]-a[0])*t)*S,(a[1]+(b[1]-a[1])*t)*S])}}out.push([pf[pf.length-1][0]*S,pf[pf.length-1][1]*S]);return out});
    var pi=0,k=1;ms.classList.add('summt');summen(true);
    (function schritt(){
      if(d.stop){ms.classList.remove('summt');summen(false);return}
      var f=fl.getBoundingClientRect().width/S;
      for(var z=0;z<(ruhig?9999:3);z++){var pf=pfade[pi];if(!pf)break;if(k>=pf.length){pi++;k=1;continue}strich([pf[k-1],pf[k]],9);var q=pf[k];maschine(q[0]*f,q[1]*f);if(k%3===0)haarFall(q[0]*f,q[1]*f);k++}
      if(pi>=pfade.length){ms.classList.remove('summt');summen(false);setTimeout(function(){if(!zug)ms.classList.remove('da')},700);if(demo===d)demo=null;return}
      requestAnimationFrame(schritt);
    })();
  }
  $$('[data-muster]').forEach(function(btn){btn.addEventListener('click',function(){var m=btn.dataset.muster;
    $$('[data-muster]').forEach(function(z){z.classList.toggle('an',z===btn&&!!MUSTER[m])});
    if(m==='neu'){if(demo)demo.stop=true;leeren();tipp.style.opacity=1;return}
    if(m==='speichern'){if(!bereit)return;cv.toBlob(function(b){if(!b)return;var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='beethoven-barbershop-muster.png';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500)},'image/png');return}
    abspielen(m)})});
  beobachte(fl,function(an){if(an&&!gezogen){setTimeout(function(){if(!gezogen&&bereit)abspielen('linien')},600)}},.55,true);
})();

/* ===================== Tutti: der Solist und der Filmstreifen ===================== */
(function(){
  var sb=$('#solist-bild');if(sb&&M.fotos.mrfresh){var im=bild(M.fotos.mrfresh.src,M.fotos.mrfresh.alt);sb.insertBefore(im,sb.firstChild);
    sb.addEventListener('pointermove',function(e){var r=sb.getBoundingClientRect();sb.style.setProperty('--sx',((e.clientX-r.left)/r.width*100)+'%');sb.style.setProperty('--sy',((e.clientY-r.top)/r.height*100)+'%')})}
  var band=$('#fs-band'),fs=$('#filmstreifen');if(!band)return;
  (M.team||[]).forEach(function(t){var f=document.createElement('figure');f.className='fs-bild';f.appendChild(bild(t.bild,t.alt));var c=document.createElement('figcaption');c.innerHTML='<small>'+t.unter+'</small>'+t.titel;f.appendChild(c);band.appendChild(f)});
  function breite(){fs.style.setProperty('--fs-breite',band.scrollWidth+'px')}
  addEventListener('resize',breite);setTimeout(breite,300);addEventListener('load',breite);
  var fein=matchMedia('(pointer:fine)').matches;$('#fs-hinweis').textContent=fein?'← ziehen oder scrollen →':'← wischen →';
  var zieh=null,beruehrt=false;
  if(fein){fs.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;e.preventDefault();zieh={x:e.clientX,s:fs.scrollLeft};beruehrt=true;fs.style.scrollSnapType='none';fs.style.cursor='grabbing'});
    addEventListener('pointermove',function(e){if(zieh)fs.scrollLeft=zieh.s-(e.clientX-zieh.x)});addEventListener('pointerup',function(){if(zieh){zieh=null;fs.style.scrollSnapType='';fs.style.cursor=''}})}
  ['touchstart','wheel'].forEach(function(t){fs.addEventListener(t,function(){beruehrt=true},{passive:true})});
  /* läuft von selbst langsam wie ein Filmprojektor, bis jemand selbst schiebt */
  var sicht=false,richtung=1,lauf=false;
  beobachte(fs,function(an){sicht=an;if(an&&!lauf&&!ruhig){lauf=true;requestAnimationFrame(rollen)}},.3);
  function rollen(){if(!sicht||beruehrt){lauf=false;if(beruehrt)fs.style.scrollSnapType='';return}var max=fs.scrollWidth-fs.clientWidth;if(max>0){fs.style.scrollSnapType='none';fs.scrollLeft+=richtung*.45;if(fs.scrollLeft>=max-1)richtung=-1;if(fs.scrollLeft<=0)richtung=1}requestAnimationFrame(rollen)}
})();

/* ===================== Applaus: die Bühne ===================== */
var BUEHNE=(function(){
  var sek=$('#bewertungen');if(!sek)return null;
  var szene=$('#bk-szene'),L=$('#bk-links'),R=$('#bk-rechts'),wert=$('#bk-wert'),zahl=$('#bk-zahl'),sterne=$$('#bk-sterne i'),zitate=$$('#bk-zitate blockquote'),zbox=$('#bk-zitate'),inhalt=$('.bk-inhalt'),steuer=$('.bk-steuer');
  var staub=$('#bk-staub'),sx=staub.getContext('2d'),jubel=$('#bk-jubel'),jx=jubel.getContext('2d'),teile=[],koerner=[],sichtbar=false,laeuft=false,licht=0,jubelEinmal=false,druck=false,zi=0,zt=0,letzt=0;
  function platz(){if(hochkant()){if(zbox.parentNode!==steuer)steuer.insertBefore(zbox,steuer.firstChild)}else if(zbox.parentNode!==inhalt){inhalt.appendChild(zbox)}}
  function groesse(){var d=Math.min(devicePixelRatio||1,2);staub.width=Math.max(2,staub.clientWidth*d|0);staub.height=Math.max(2,staub.clientHeight*d|0);jubel.width=Math.max(2,jubel.clientWidth*d|0);jubel.height=Math.max(2,jubel.clientHeight*d|0);
    koerner=[];for(var i=0;i<70;i++)koerner.push({x:Math.random(),y:Math.random(),v:.005+Math.random()*.02,s:.6+Math.random()*1.6,p:Math.random()*6})}
  function lauf(){
    var r=sek.getBoundingClientRect(),hoehe=sek.offsetHeight-innerHeight;if(r.bottom<-50||r.top>innerHeight*1.2)return;
    var p=hoehe>0?klemm(-r.top/hoehe,0,1):0,offen=glatt((p-.03)/.34);licht=glatt((p-.12)/.3);
    var s=1-.84*offen;L.style.transform='scaleX('+s.toFixed(3)+')';R.style.transform='scaleX('+s.toFixed(3)+')';
    szene.style.setProperty('--licht',licht.toFixed(3));
    var z=glatt((p-.28)/.26);wert.textContent=(4.7*z).toFixed(1).replace('.',',');zahl.textContent=Math.round(251*z);
    sterne.forEach(function(st,i){st.classList.toggle('da',z*5>i+.3)});
    if(offen>.95&&!jubelEinmal){jubelEinmal=true;werfen(46,false)}
  }
  function werfen(n,laut){var W=jubel.width,H=jubel.height;for(var i=0;i<n;i++){var rose=Math.random()<.22;teile.push({x:W*(.15+Math.random()*.7),y:H*1.02,vx:(Math.random()-.5)*W*.35,vy:-H*(.75+Math.random()*.55),r:Math.random()*6.3,vr:(Math.random()-.5)*8,s:(rose?11:6)*(W/900+.4),rose:rose,f:['#ecd59f','#c9a35a','#f2e9d8','#7d1727'][i%4],l:1})}
    if(laut)for(var k=0;k<5;k++)setTimeout(klatsch,Math.random()*160);start()}
  function male(t){
    if(!sichtbar&&!teile.length){laeuft=false;return}
    var dt=Math.min(.05,(t-letzt)/1000||0);letzt=t;
    szene.style.setProperty('--kegel',(Math.sin(t/2600)*7).toFixed(2)+'deg');
    var W=staub.width,H=staub.height;sx.clearRect(0,0,W,H);
    if(licht>.05){koerner.forEach(function(k){k.y-=k.v*dt*3;k.x+=Math.sin(t/1800+k.p)*.0006;if(k.y<0)k.y=1;var mitte=1-Math.min(1,Math.abs(k.x-.5)*2.6);sx.fillStyle='rgba(255,236,190,'+(.55*mitte*licht).toFixed(2)+')';sx.beginPath();sx.arc(k.x*W,k.y*H,k.s*(W/600),0,6.283);sx.fill()})}
    var JW=jubel.width,JH=jubel.height;jx.clearRect(0,0,JW,JH);
    for(var i=teile.length-1;i>=0;i--){var q=teile[i];q.vy+=JH*1.1*dt;q.vx*=.99;q.x+=q.vx*dt;q.y+=q.vy*dt;q.r+=q.vr*dt;if(q.vy>0)q.l-=dt*.45;if(q.l<=0||q.y>JH+60){teile.splice(i,1);continue}
      jx.save();jx.translate(q.x,q.y);jx.rotate(q.r);jx.globalAlpha=Math.min(1,q.l*1.5);
      if(q.rose){jx.fillStyle='#2f5a2a';jx.fillRect(-q.s*.08,0,q.s*.16,q.s*1.6);[0,1.26,2.51,3.77,5.03].forEach(function(a){jx.fillStyle='#7d1727';jx.beginPath();jx.ellipse(Math.cos(a)*q.s*.28,Math.sin(a)*q.s*.28-q.s*.1,q.s*.42,q.s*.32,a,0,6.283);jx.fill()});jx.fillStyle='#b8243a';jx.beginPath();jx.arc(0,-q.s*.1,q.s*.26,0,6.283);jx.fill()}
      else{jx.fillStyle=q.f;jx.fillRect(-q.s/2,-q.s/5,q.s,q.s*.4)}
      jx.restore()}
    if(sichtbar&&licht>.8&&t-zt>5200){zt=t;zitate[zi].classList.remove('an');zi=(zi+1)%zitate.length;zitate[zi].classList.add('an')}
    requestAnimationFrame(male);
  }
  function start(){if(!laeuft){laeuft=true;letzt=performance.now();requestAnimationFrame(male)}}
  beobachte(sek,function(an){sichtbar=an;if(an){groesse();start()}},0);
  addEventListener('resize',function(){platz();groesse()});platz();
  var btn=$('#klatschen'),takt=null;
  function an(e){e.preventDefault();if(druck)return;druck=true;if(!ton)setzeTon(true);werfen(18,true);takt=setInterval(function(){werfen(7,true)},170)}
  function aus(){druck=false;clearInterval(takt)}
  btn.addEventListener('pointerdown',an);btn.addEventListener('pointerup',aus);btn.addEventListener('pointerleave',aus);btn.addEventListener('pointercancel',aus);
  btn.addEventListener('contextmenu',function(e){e.preventDefault()});
  btn.addEventListener('keydown',function(e){if(e.key===' '||e.key==='Enter')an(e)});btn.addEventListener('keyup',aus);
  return {lauf:lauf};
})();

/* ===================== Capriccio: der Flügel ===================== */
(function(){
  var bahn=$('#tastatur');if(!bahn)return;
  var NAMEN=['C','Cis','D','Dis','E','F','Fis','G','Gis','A','B','H'];
  var L=M.looks||{};
  var WEISS=[['Low Fade','Tief angesetzt, ganz weich nach oben.'],['Mid Fade','Der Übergang auf halber Höhe.'],['High Fade','Hoch und klar, oben bleibt die Länge.'],['Taper','Nur an Schläfe und Nacken.'],['Skin Fade','An den Seiten bis auf die Haut.'],['Boxerschnitt','Kurz, sauber, zeitlos.'],['Scherenschnitt','Mit Schere und Ruhe.'],
    ['Bart','Kontur und Übergang zum Haar.'],['Rasur gegen den Strich','Heißes Tuch, Messer, glatt.'],['Konturen','Messerscharfe Linien an Stirn und Nacken.'],['Locken','Männer und Locken? Ja, bitte.'],['Kinderschnitt','Der coolste im Kindergarten.'],['Waschen','Mit Kopfmassage.'],['Styling','Für Abiball, Hochzeit, Geburtstag.']];
  var SCHWARZ=[['Die Flamme','Für die Ohrhärchen, mit Feuer.'],['Mokka','Zur Begrüßung, bevor es losgeht.'],['Muster','Blitz, Stern oder Linien in die Seite.'],['Live-Musik','Manchmal spielt jemand am Flügel.'],['Fresh Fresh','Das Markenzeichen von Mr Fresh.'],['Vorher – Nachher','Typveränderung inklusive.'],['Ohne Termin','Einfach reinkommen.'],['Kinder am Flügel','Erst spielen, dann schneiden.'],['Kartenzahlung','Bar oder mit Karte.'],['Muster','Dein Muster, frei geschnitten.']];
  var MITTE={1:.93,3:2.07,6:3.92,8:5,10:6.08},tasten={},wi=0,si=0,modus='ton',verlauf=[];
  for(var m=60;m<84;m++){
    var pc=m%12,okt=Math.floor((m-60)/12),schwarz=pc in MITTE,b=document.createElement('button');b.type='button';b.dataset.m=m;
    var info=schwarz?SCHWARZ[si++]:WEISS[wi];b._info=info;b.setAttribute('aria-label',NAMEN[pc]+(okt+4)+': '+info[0]);
    if(schwarz){b.className='taste-s';b.style.left=((okt*7+MITTE[pc])/14*100)+'%'}
    else{b.className='taste-w';b.innerHTML='<span>'+NAMEN[pc]+(pc===0?(okt+4):'')+'</span>';wi++}
    bahn.appendChild(b);tasten[m]=b;
  }
  $$('.taste-s',bahn).forEach(function(t){bahn.appendChild(t)});
  function leuchte(m,d){var t=tasten[m];if(!t)return;t.classList.add('an');setTimeout(function(){t.classList.remove('an')},d||220)}
  var blatt=$('.pult-blatt');
  (function(){var lb=$('#look-bild');if(lb&&!lb.firstChild&&L['Live-Musik'])lb.appendChild(bild(L['Live-Musik'],'Live-Musik am Flügel im Laden'))})();
  function pult(info){var lb=$('#look-bild');$('#look-titel').textContent=info[0];$('#look-text').textContent=info[1];lb.innerHTML='';var f=L[info[0]];if(f)lb.appendChild(bild(f,info[0]));blatt.classList.remove('neu');void blatt.offsetWidth;blatt.classList.add('neu')}
  function druecke(m){
    var n=[m];if(modus==='dur')n=[m,m+4,m+7];if(modus==='moll')n=[m,m+3,m+7];
    if(!ton)setzeTon(true);
    ladeKlang().then(function(){n.forEach(function(k,i){setTimeout(function(){spiele(k,i?.5:.72)},modus==='ton'?0:i*18)})});
    n.forEach(function(k){leuchte(k)});
    $('#akkord').textContent=modus==='ton'?NAMEN[m%12]:(modus==='moll'?NAMEN[m%12].toLowerCase()+'-Moll':NAMEN[m%12]+'-Dur');
    pult(tasten[m]._info);
    verlauf.push(m);if(verlauf.length>9)verlauf.shift();
    if(verlauf.join(',')==='76,75,76,75,76,71,74,72,69'){verlauf=[];setTimeout(finale,350)}
    else if(verlauf.slice(-4).join(',')==='67,67,67,63'){pult(['So klopft das Schicksal an die Tür.','Komm rein, die Tür ist offen. Montag bis Samstag 9 bis 19 Uhr.'])}
  }
  var start=null;
  bahn.addEventListener('pointerdown',function(e){var t=e.target.closest('[data-m]');if(!t)return;start={x:e.clientX,t:t}});
  bahn.addEventListener('pointerup',function(e){if(!start)return;var t=e.target.closest('[data-m]')||start.t;if(Math.abs(e.clientX-start.x)<14)druecke(+t.dataset.m);start=null});
  bahn.addEventListener('keydown',function(e){var t=e.target.closest('[data-m]');if(t&&(e.key==='Enter'||e.key===' ')){e.preventDefault();druecke(+t.dataset.m)}});
  $$('[data-modus]').forEach(function(k){k.addEventListener('click',function(){modus=k.dataset.modus;$$('[data-modus]').forEach(function(z){z.setAttribute('aria-pressed',z===k)})})});
  beobachte(bahn,function(an){if(an){[60,64,67,72,76,79,83].forEach(function(m,i){setTimeout(function(){leuchte(m,260)},300+i*120)})}},.6,true);
  function finale(){
    var f=$('#finale'),c=$('#regen'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;f.classList.add('an');
    pult(['Bravo!','Das war „Für Elise“. Mr Fresh zieht den Hut.']);HUT.feier=performance.now();
    [[64,68,71],[69,72,76],[72,76,79,84]].forEach(function(a,i){setTimeout(function(){a.forEach(function(n){spiele(n,.5,2.5)})},i*380)});
    var st=[];for(var i=0;i<90;i++)st.push({x:Math.random()*innerWidth,y:-Math.random()*innerHeight,v:2+Math.random()*3.5,r:Math.random()*6.3,s:6+Math.random()*8});
    var t0=performance.now();
    (function los(t){x.clearRect(0,0,c.width,c.height);st.forEach(function(p){p.y+=p.v;p.r+=.03;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle='#ecd59f';x.beginPath();x.ellipse(0,0,p.s,p.s*.72,-.35,0,6.28);x.fill();x.fillRect(p.s*.85,-p.s*3.2,1.6,p.s*3.2);x.restore()});
      if(t-t0<3400)requestAnimationFrame(los);else{f.classList.remove('an');x.clearRect(0,0,c.width,c.height)}})(t0);
  }
})();

/* ===================== Karte erst nach Klick ===================== */
(function(){var k=$('#karte-laden');if(!k)return;k.addEventListener('click',function(){var p=$('#karte-platz');p.innerHTML='<iframe title="Karte: Beethoven Barbershop, Dudweilerstraße 53" src="https://www.google.com/maps?q=Beethoven+Barbershop,+Dudweilerstra%C3%9Fe+53,+66111+Saarbr%C3%BCcken&output=embed" style="border:0;width:100%;height:100%;border-radius:4px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';p.style.padding='0'})})();

/* ===================== Scroll und Bild für Bild ===================== */
var aktivNav=null,scrollNeu=true;
function scrollen(){
  var h=root.scrollHeight-innerHeight,p=h>0?scrollY/h:0;
  strich.style.left=(p*100)+'%';
  saetze.forEach(function(s,i){noten[i].classList.toggle('da',s.getBoundingClientRect().top<innerHeight*.6)});
  filmLauf();naehteLauf();if(BUEHNE)BUEHNE.lauf();
  var ids=['kinder','leistungen','team','bewertungen','fluegel','besuch'],akt=null;
  ids.forEach(function(id){var e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<innerHeight*.4)akt=id});
  if(akt!==aktivNav){aktivNav=akt;$$('#nav a').forEach(function(a){a.classList.toggle('aktiv',a.getAttribute('href')==='#'+akt)})}
}
addEventListener('scroll',function(){scrollNeu=true},{passive:true});
function schleife(t){
  if(scrollNeu){scrollNeu=false;scrollen()}
  filme.forEach(function(st){if(!st.cfg)return;var d=st.soll-st.ist;if(Math.abs(d)>.002){st.ist+=ruhig?d:d*.18;zeichne(st)}});
  hutMalen(t);
  requestAnimationFrame(schleife);
}
function neuMessen(){lageNoten();hutZiele();filme.forEach(function(st){laden(st);st.zuletzt='';zeichne(st,true)});scrollNeu=true}
var rz=null;addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(neuMessen,120)});
addEventListener('load',neuMessen);
if(window.ResizeObserver){var ro=new ResizeObserver(function(){clearTimeout(rz);rz=setTimeout(function(){lageNoten();hutZiele()},150)});ro.observe(document.body)}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(neuMessen);
lageNoten();hutZiele();scrollen();requestAnimationFrame(schleife);

/* ===================== Intro: das Wappen vom Schaufenster ===================== */
function nachIntro(von){
  setTimeout(function(){var l=$('#leiste');if(l)l.classList.add('da')},500);
  setTimeout(function(){noteFliegt(von,function(){spielplan(true)})},von?50:700);
}
(function(){
  var el=$('#intro'),bar=$('#intro-laden'),note=$('#intro-note');
  if(!el){nachIntro(null);return}
  if(/nointro/.test(location.search)){el.remove();nachIntro(null);return}
  root.style.overflow='hidden';
  var start=performance.now(),fertig=false,erster=filme[0];if(erster)laden(erster);
  function zu(){if(fertig)return;fertig=true;var r=note.getBoundingClientRect(),von={x:r.left+5,y:r.top+4};
    el.classList.add('weg');root.style.overflow='';setTimeout(function(){el.remove()},1000);scrollNeu=true;nachIntro(von)}
  $('#intro-weiter').addEventListener('click',zu);
  (function tick(){
    if(fertig)return;
    var n=erster&&erster.cfg?erster.cfg.anzahl:1,da=erster&&erster.cfg?erster.frames.filter(Boolean).length:1;
    var zeit=(performance.now()-start)/2600,anteil=Math.min(1,Math.min(zeit,da/Math.max(1,Math.min(n,48))));
    bar.style.width=(anteil*100)+'%';note.style.left='calc('+(anteil*100)+'% - 6px)';note.style.top=(6+Math.sin(anteil*Math.PI*6)*7)+'px';
    if((anteil>=1&&zeit>=1)||performance.now()-start>7000){setTimeout(zu,300);return}
    requestAnimationFrame(tick);
  })();
})();
})();
