/* Beethoven Barbershop – Sinfonie in Fresh-Dur */
(function(){
'use strict';
var M=window.MEDIEN||{fotos:{},filme:{},fades:[],team:[],looks:{}};
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var ruhig=matchMedia('(prefers-reduced-motion: reduce)').matches;
var schmal=function(){return innerWidth<700||innerHeight>innerWidth*1.1};
function bild(src,alt,cls){var i=new Image();i.decoding='async';i.src=src;i.alt=alt||'';if(cls)i.className=cls;return i}

/* ---------- Ton (Flügel, nur auf Wunsch) ---------- */
var ton=false,ctx=null,puffer={},laedt=null;
var PROBEN=['C3','Ds3','Fs3','A3','C4','Ds4','Fs4','A4','C5','Ds5','Fs5','A5','C6','Ds6','Fs6','A6'];
function midi(n){var m=n.match(/^([A-G])(s?)(\d)$/);var b={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]]+(m[2]?1:0);return 12*(+m[3]+1)+b}
function audio(){if(!ctx){try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(ctx&&ctx.state==='suspended')ctx.resume();return ctx}
function ladeKlang(){
  if(laedt)return laedt;
  var c=audio();if(!c)return Promise.resolve();
  laedt=Promise.all(PROBEN.map(function(n){
    return fetch('klang/'+n+'.mp3').then(function(r){return r.arrayBuffer()}).then(function(b){return new Promise(function(ok){c.decodeAudioData(b,function(d){puffer[midi(n)]=d;ok()},function(){ok()})})}).catch(function(){});
  }));
  return laedt;
}
function spiele(m,laut,dauer){
  var c=audio();if(!c||!ton)return;
  var best=null,abst=99;Object.keys(puffer).forEach(function(k){var d=Math.abs(k-m);if(d<abst){abst=d;best=+k}});
  if(best===null){ladeKlang();return}
  ducken();
  var q=c.createBufferSource();q.buffer=puffer[best];q.playbackRate.value=Math.pow(2,(m-best)/12);
  var g=c.createGain(),t=c.currentTime;g.gain.setValueAtTime(laut||.8,t);g.gain.setTargetAtTime(0,t+(dauer||2.2),.6);
  q.connect(g);g.connect(c.destination);q.start(t);q.stop(t+(dauer||2.2)+3);
}
var tonKnopf=$('#ton');
/* Musik in Fresh-Dur (ElevenLabs Music), leise im Hintergrund, nur wenn Ton an. Web Audio, damit die Lautstärke auch am iPhone stimmt. */
var musikGain=null,musikQuelle=null,musikPuffer=null,musikLaedt=null,duckZeit=null,LAUT=.3;
function ladeMusik(){if(musikLaedt)return musikLaedt;var c=audio();if(!c)return Promise.resolve();musikLaedt=fetch('klang/fresh-dur.mp3').then(function(r){return r.arrayBuffer()}).then(function(b){return new Promise(function(ok){c.decodeAudioData(b,function(d){musikPuffer=d;ok()},function(){ok()})})}).catch(function(){});return musikLaedt}
function musikStart(){var c=audio();if(!c)return;if(!musikGain){musikGain=c.createGain();musikGain.gain.value=0;musikGain.connect(c.destination)}
  ladeMusik().then(function(){if(!ton||!musikPuffer)return;if(!musikQuelle){musikQuelle=c.createBufferSource();musikQuelle.buffer=musikPuffer;musikQuelle.loop=true;musikQuelle.loopStart=.03;musikQuelle.loopEnd=musikPuffer.duration-.03;musikQuelle.connect(musikGain);musikQuelle.start()}
    musikGain.gain.cancelScheduledValues(c.currentTime);musikGain.gain.setTargetAtTime(LAUT,c.currentTime,.4)})}
function musikStop(){var c=audio();if(!c||!musikGain)return;musikGain.gain.cancelScheduledValues(c.currentTime);musikGain.gain.setTargetAtTime(0,c.currentTime,.15);var q=musikQuelle;musikQuelle=null;if(q)setTimeout(function(){try{q.stop()}catch(e){}},900)}
function ducken(){var c=ctx;if(!c||!musikGain||!ton)return;var t=c.currentTime;musikGain.gain.cancelScheduledValues(t);musikGain.gain.setTargetAtTime(.06,t,.05);musikGain.gain.setTargetAtTime(LAUT,t+2.4,.8)}
document.addEventListener('visibilitychange',function(){if(!ctx)return;if(document.hidden){ctx.suspend()}else if(ton){ctx.resume()}});
function setzeTon(an){ton=an;tonKnopf.setAttribute('aria-pressed',an);tonKnopf.textContent=an?'♪ Ton an':'♪ Ton';if(an){musikStart();ladeKlang().then(function(){ducken();spiele(60,.5);setTimeout(function(){spiele(64,.45)},120);setTimeout(function(){spiele(67,.45)},240)})}else{musikStop()}}
tonKnopf.addEventListener('click',function(){setzeTon(!ton)});

/* ---------- Menü ---------- */
var nav=$('#nav'),menue=$('#menue');
menue.addEventListener('click',function(){var o=nav.classList.toggle('offen-menue');menue.setAttribute('aria-expanded',o);menue.textContent=o?'✕':'☰'});
$$('#nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('offen-menue');menue.setAttribute('aria-expanded',false);menue.textContent='☰'})});
addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('offen-menue')){menue.click()}});

/* ---------- Öffnungszeiten live ---------- */
function berlin(){var f=new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());var o={};f.forEach(function(p){o[p.type]=p.value});var tage={So:0,Mo:1,Di:2,Mi:3,Do:4,Fr:5,Sa:6};return {tag:tage[o.weekday.replace('.','')],min:(+o.hour)*60+(+o.minute)}}
function offen(){
  var b=berlin(),el=$('#offen'),txt;
  var auf=b.tag>=1&&b.tag<=6&&b.min>=540&&b.min<1140;
  if(auf){txt='Jetzt geöffnet · bis 19 Uhr'}
  else if(b.tag>=1&&b.tag<=6&&b.min<540){txt='Heute ab 9 Uhr geöffnet'}
  else if(b.tag===6||b.tag===0){txt='Montag ab 9 Uhr wieder da'}
  else {txt='Morgen ab 9 Uhr geöffnet'}
  el.classList.toggle('ja',auf);el.lastElementChild.textContent=txt;
  $$('#zeiten li').forEach(function(li){li.classList.toggle('heute',+li.dataset.tag===b.tag)});
}
offen();setInterval(offen,60000);

/* ---------- Fotos in die Plätze ---------- */
$$('[data-medium]').forEach(function(el){var f=M.fotos[el.dataset.medium];if(!f){el.style.display=el.classList.contains('heft-bild')?'none':'';return}
  if(f.video&&!ruhig){var v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('muted','');v.preload='none';v.poster=f.src;v.setAttribute('aria-label',f.alt);v.src=f.video;el.appendChild(v);
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.2}).observe(el);return}
  el.appendChild(bild(f.src,f.alt));});

/* ---------- Auftritt großer Fotos ---------- */
(function(){var el=$('.elise-foto');if(!el)return;new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){el.classList.add('da');o.disconnect()}})},{threshold:.25}).observe(el)})();

/* ---------- Partitur-Leiste ---------- */
var saetze=$$('[data-satz]'),partitur=$('#partitur'),strich=$('#kopfstrich');
var noten=saetze.map(function(s,i){var n=document.createElement('span');n.className='n';n.style.top=(1+((i*2)%5)*3)+'px';partitur.appendChild(n);return n});
function lageNoten(){var h=document.documentElement.scrollHeight-innerHeight;saetze.forEach(function(s,i){var t=s.getBoundingClientRect().top+scrollY;noten[i].style.left=Math.min(99,Math.max(1,(t-innerHeight*.4)/h*100))+'%'})}

/* ---------- Scroll-Film ---------- */
var filme=$$('.film').map(function(sek){
  var name=sek.dataset.film,cfg=M.filme[name]||null;
  var st={sek:sek,cfg:cfg,bild:$('canvas.bild',sek),hall:$('canvas.hall',sek),takte:$$('.takt',sek),lauf:$('.film-lauf span',sek),frames:[],geladen:false,ist:0,soll:0,p:0,zuletzt:-1};
  if(!cfg){
    var f=M.fotos[name+'-poster'];
    if(f){var i=bild(f.src,f.alt,'poster');$('.film-buehne',sek).insertBefore(i,st.bild);}
    else{sek.style.height='100vh'}
    st.bild.remove();st.hall.remove();
  }
  return st;
});
function laden(st){
  if(st.geladen||!st.cfg)return;st.geladen=true;
  var c=st.cfg,satz=(schmal()&&c.hoch)?c.hoch:c.breit,n=c.anzahl;
  for(var i=0;i<n;i++){(function(i){var im=new Image();im.decoding='async';im.onload=function(){st.frames[i]=im;if(i===0)zeichne(st,true)};im.src=satz+String(i+1).padStart(3,'0')+'.webp'})(i)}
}
function deck(ctx,im,w,h,alpha){
  var r=Math.max(w/im.naturalWidth,h/im.naturalHeight),bw=im.naturalWidth*r,bh=im.naturalHeight*r;
  ctx.globalAlpha=alpha;ctx.drawImage(im,(w-bw)/2,(h-bh)/2,bw,bh);
}
function passe(ctx,im,w,h,alpha){
  var r=Math.min(w/im.naturalWidth,h/im.naturalHeight),bw=im.naturalWidth*r,bh=im.naturalHeight*r;
  ctx.globalAlpha=alpha;ctx.drawImage(im,(w-bw)/2,(h-bh)/2,bw,bh);
}
function naechstes(st,i){for(var d=0;d<st.cfg.anzahl;d++){if(st.frames[i-d])return st.frames[i-d];if(st.frames[i+d])return st.frames[i+d]}return null}
function zeichne(st,zwang){
  if(!st.cfg)return;
  var cv=st.bild,dpr=Math.min(devicePixelRatio||1,2),w=cv.clientWidth,h=cv.clientHeight;
  if(!w||!h)return;
  if(cv.width!==Math.round(w*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr)}
  var a=Math.floor(st.ist),b=Math.min(a+1,st.cfg.anzahl-1),t=st.ist-a;
  var key=a+':'+t.toFixed(2);if(key===st.zuletzt&&!zwang)return;st.zuletzt=key;
  var A=naechstes(st,a),B=naechstes(st,b);if(!A)return;
  var x=cv.getContext('2d');x.setTransform(dpr,0,0,dpr,0,0);x.clearRect(0,0,w,h);
  var ia=A.naturalWidth/A.naturalHeight,sa=w/h,fit=(ia/sa>1.45||sa/ia>1.45)?passe:deck;
  fit(x,A,w,h,1);if(B&&B!==A&&t>0.01)fit(x,B,w,h,t);x.globalAlpha=1;
  if(fit===passe){
    var hv=st.hall;hv.style.display='';if(hv.width!==160){hv.width=160;hv.height=90}
    var y=hv.getContext('2d');deck(y,A,160,90,1);y.globalAlpha=1;
  }else{st.hall.style.display='none'}
}
function filmLauf(){
  filme.forEach(function(st){
    var r=st.sek.getBoundingClientRect(),hoehe=st.sek.offsetHeight-innerHeight;
    if(r.top<innerHeight*2.5&&r.bottom>-innerHeight)laden(st);
    var p=hoehe>0?Math.min(1,Math.max(0,-r.top/hoehe)):0;st.p=p;
    if(st.cfg)st.soll=p*(st.cfg.anzahl-1);
    st.takte.forEach(function(tk){var an=p>=+tk.dataset.von&&p<=+tk.dataset.bis;tk.classList.toggle('an',an)});
    if(st.lauf)st.lauf.style.width=(p*100)+'%';
  });
}
function schleife(){
  filme.forEach(function(st){if(!st.cfg)return;var d=st.soll-st.ist;if(Math.abs(d)>0.002){st.ist+=ruhig?d:d*0.16;zeichne(st)}});
  requestAnimationFrame(schleife);
}
requestAnimationFrame(schleife);

/* ---------- Scroll gesamt ---------- */
var aktivNav=null;
function scrollen(){
  var h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;
  strich.style.left=(p*100)+'%';
  saetze.forEach(function(s,i){noten[i].classList.toggle('da',s.getBoundingClientRect().top<innerHeight*.6)});
  filmLauf();
  var ids=['leistungen','kinder','team','bewertungen','fluegel','besuch'],akt=null;
  ids.forEach(function(id){var e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<innerHeight*.4)akt=id});
  if(akt!==aktivNav){aktivNav=akt;$$('#nav a').forEach(function(a){a.classList.toggle('aktiv',a.getAttribute('href')==='#'+akt)})}
}
addEventListener('scroll',scrollen,{passive:true});
addEventListener('resize',function(){lageNoten();scrollen();filme.forEach(function(st){st.zuletzt=-1;zeichne(st,true)})});
lageNoten();scrollen();

/* ---------- Intro ---------- */
(function(){
  var el=$('#intro'),bar=$('#intro-laden'),q=location.search;
  var schon=false;try{schon=sessionStorage.getItem('bb-intro')==='1'}catch(e){}
  if(/nointro/.test(q)||(schon&&!/intro/.test(q))){el.remove();return}
  document.documentElement.style.overflow='hidden';
  var start=performance.now(),fertig=false,erster=filme[0];
  if(erster)laden(erster);
  function zu(){if(fertig)return;fertig=true;try{sessionStorage.setItem('bb-intro','1')}catch(e){}el.classList.add('weg');document.documentElement.style.overflow='';setTimeout(function(){el.remove()},1000)}
  $('#intro-weiter').addEventListener('click',zu);
  (function tick(){
    if(fertig)return;
    var n=erster&&erster.cfg?erster.cfg.anzahl:1,da=erster&&erster.cfg?erster.frames.filter(Boolean).length:1;
    var zeit=(performance.now()-start)/3600,anteil=Math.min(1,Math.min(zeit,da/Math.max(1,Math.min(n,40))));
    bar.style.width=(anteil*100)+'%';
    if((anteil>=1&&zeit>=1)||performance.now()-start>7000){setTimeout(zu,350);return}
    requestAnimationFrame(tick);
  })();
})();

/* ---------- Crescendo: Fade-Regler ---------- */
(function(){
  var F=M.fades||[];var box=$('#fade-bild');if(!box)return;
  if(!F.length){$('#uebergang').style.display='none';return}
  var bilder=F.map(function(f,i){var im=bild(f.src,f.name);if(i===0)im.classList.add('an');box.appendChild(im);return im});
  var reg=$('#fade-regler'),griff=$('.griff',reg),dyn=$$('#dynamik span'),name=$('#fade-name'),text=$('#fade-text'),hin=$('#fade-hinweis');
  var stufen=F.length-1,wert=0,beruehrt=false;
  dyn.forEach(function(d,i){d.style.display=i<F.length?'':'none'});
  function setze(v,still){
    wert=Math.max(0,Math.min(stufen,v));var i=Math.round(wert);
    griff.style.left=(wert/stufen*100)+'%';
    bilder.forEach(function(b,k){b.classList.toggle('an',k===i)});dyn.forEach(function(d,k){d.classList.toggle('an',k===i)});
    name.textContent=F[i].name;text.innerHTML=F[i].text+(F[i].mm?' <span class="fade-mm">'+F[i].mm+'</span>':'');
    reg.setAttribute('aria-valuenow',i);reg.setAttribute('aria-valuetext',F[i].name);
    if(!still&&ton)spiele(60+[0,4,7,12,16,19][i%6],.35,1.2);
  }
  function ausX(x){var r=reg.getBoundingClientRect();return (x-r.left)/r.width*stufen}
  reg.addEventListener('pointerdown',function(e){reg.setPointerCapture(e.pointerId);beruehrt=true;hin.style.opacity=0;setze(ausX(e.clientX))});
  reg.addEventListener('pointermove',function(e){if(reg.hasPointerCapture(e.pointerId))setze(ausX(e.clientX))});
  reg.addEventListener('pointerup',function(){setze(Math.round(wert))});
  reg.addEventListener('keydown',function(e){beruehrt=true;hin.style.opacity=0;if(e.key==='ArrowRight'||e.key==='ArrowUp'){setze(Math.round(wert)+1);e.preventDefault()}if(e.key==='ArrowLeft'||e.key==='ArrowDown'){setze(Math.round(wert)-1);e.preventDefault()}});
  setze(0,true);
  new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting&&!beruehrt){o.disconnect();var seq=[0,1,2,1,0],k=0;(function weiter(){if(beruehrt||k>=seq.length)return;setze(seq[k++],true);setTimeout(weiter,650)})()}})},{threshold:.6}).observe(reg);
})();

/* ---------- Blitz-Studio ---------- */
(function(){
  var flaeche=$('#studio-flaeche'),cv=$('#studio-leinwand');if(!cv)return;
  var f=M.fotos.hinterkopf;if(!f){$('#studio').style.display='none';return}
  var basis=new Image(),haut=null,x=cv.getContext('2d'),S=900,gezogen=false;
  cv.width=S;cv.height=S;
  basis.onload=function(){neu();vorbereiten()};basis.src=f.src;
  function vorbereiten(){
    var h=document.createElement('canvas');h.width=S;h.height=S;var y=h.getContext('2d');
    y.filter='blur(5px) brightness(1.55) saturate(.55) sepia(.35)';decke(y,basis);y.filter='none';
    y.globalCompositeOperation='multiply';y.fillStyle='#e9c9ad';y.fillRect(0,0,S,S);
    haut=x.createPattern(h,'no-repeat');
  }
  function decke(c,im){var r=Math.max(S/im.naturalWidth,S/im.naturalHeight),w=im.naturalWidth*r,hh=im.naturalHeight*r;c.drawImage(im,(S-w)/2,(S-hh)/2,w,hh)}
  function neu(){x.globalAlpha=1;x.globalCompositeOperation='source-over';decke(x,basis)}
  function linie(a,b,breite){
    if(!haut)return;
    x.lineCap='round';x.lineJoin='round';
    x.globalAlpha=.35;x.strokeStyle='rgba(20,12,8,1)';x.lineWidth=breite+5;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke();
    x.globalAlpha=1;x.strokeStyle=haut;x.lineWidth=breite;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke();
  }
  var zuletzt=null;
  function punkt(e){var r=cv.getBoundingClientRect();return [(e.clientX-r.left)/r.width*S,(e.clientY-r.top)/r.height*S]}
  flaeche.addEventListener('pointerdown',function(e){flaeche.setPointerCapture(e.pointerId);zuletzt=punkt(e);gezogen=true;$('#studio-hinweis').textContent='Fresh. Zeig das Bild im Laden.';summen(true)});
  flaeche.addEventListener('pointermove',function(e){if(!zuletzt)return;var p=punkt(e);linie(zuletzt,p,14);zuletzt=p});
  flaeche.addEventListener('pointerup',function(){zuletzt=null;summen(false)});
  flaeche.addEventListener('pointercancel',function(){zuletzt=null;summen(false)});
  var brumm=null;
  function summen(an){var c=audio();if(!ton||!c)return;if(an&&!brumm){var o=c.createOscillator(),g=c.createGain();o.type='sawtooth';o.frequency.value=118;g.gain.value=.025;o.connect(g);g.connect(c.destination);o.start();brumm={o:o,g:g}}else if(!an&&brumm){brumm.g.gain.setTargetAtTime(0,c.currentTime,.05);brumm.o.stop(c.currentTime+.3);brumm=null}}
  var MUSTER={
    blitz:[[[560,250],[455,445],[545,445],[420,660]]],
    stern:(function(){var p=[],cx=450,cy=450;for(var i=0;i<=10;i++){var r=i%2?75:190,a=-Math.PI/2+i*Math.PI/5;p.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return [p]})(),
    linien:[[[300,380],[640,300]],[[300,450],[640,370]],[[300,520],[640,440]]],
    note:[[[520,250],[520,560]],[[520,250],[600,300],[600,360]],(function(){var p=[];for(var i=0;i<=24;i++){var a=i/24*Math.PI*2;p.push([470+55*Math.cos(a),565+38*Math.sin(a)])}return p})()]
  };
  function zeichneMuster(name){
    neu();var z=MUSTER[name],teile=[];z.forEach(function(pfad){for(var i=1;i<pfad.length;i++)teile.push([pfad[i-1],pfad[i]])});
    var k=0,t=0;summen(true);
    (function schritt(){
      if(k>=teile.length){summen(false);$('#studio-hinweis').textContent='Fresh. Zeig das Bild im Laden.';return}
      var a=teile[k][0],b=teile[k][1],len=Math.hypot(b[0]-a[0],b[1]-a[1]),n=Math.max(1,Math.round(len/14));
      var p0=[a[0]+(b[0]-a[0])*t/n,a[1]+(b[1]-a[1])*t/n];t++;var p1=[a[0]+(b[0]-a[0])*t/n,a[1]+(b[1]-a[1])*t/n];
      linie(p0,p1,16);if(t>=n){t=0;k++}
      requestAnimationFrame(schritt);
    })();
  }
  $$('[data-muster]').forEach(function(btn){btn.addEventListener('click',function(){var m=btn.dataset.muster;if(m==='neu'){neu();$('#studio-hinweis').textContent='Tippen und ziehen';return}gezogen=true;zeichneMuster(m)})});
  new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting&&!gezogen&&haut){o.disconnect();setTimeout(function(){if(!gezogen)zeichneMuster('blitz')},500)}})},{threshold:.55}).observe(flaeche);
})();

/* ---------- Ensemble + Hut ---------- */
(function(){
  var T=M.team||[],buehne=$('#buehne-team');if(!buehne)return;
  if(!T.length){$('#team').style.display='none';return}
  buehne.style.setProperty('--anzahl',Math.min(T.length,4));
  T.forEach(function(p){
    var b=document.createElement('button');b.type='button';b.className='musiker'+(p.solist?' solist':'');
    var pf=document.createElement('div');pf.className='portrait';pf.appendChild(bild(p.bild,p.alt||p.name));b.appendChild(pf);
    if(p.solist&&M.fotos.hut){var h=bild(M.fotos.hut.src,'','hut hut-gag');h.setAttribute('aria-hidden','true');b.appendChild(h);b.addEventListener('click',function(){hutFlug(h)})}
    var n=document.createElement('div');n.className='name';n.textContent=p.name;b.appendChild(n);
    var r=document.createElement('div');r.className='rolle';r.textContent=p.rolle||'';b.appendChild(r);
    buehne.appendChild(b);
  });
  function hutFlug(h){h.classList.remove('fliegt');void h.offsetWidth;h.classList.add('fliegt');if(ton){spiele(67,.5,.6);setTimeout(function(){spiele(72,.5,1.2)},700)}}
  var hut=$('.hut-gag',buehne);
  if(hut)new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){o.disconnect();setTimeout(function(){hutFlug(hut)},400)}})},{threshold:.5}).observe(hut.parentNode);
})();

/* ---------- Applaus: der Saal steht auf ---------- */
(function(){
  var cv=$('#saal');if(!cv)return;var x=cv.getContext('2d'),plaetze=[],steh=0,ziel=0,druck=false,sichtbar=false;
  var ANZ=251;
  function bau(){
    var w=cv.clientWidth,h=cv.clientHeight,dpr=Math.min(devicePixelRatio||1,2);cv.width=w*dpr;cv.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);
    plaetze=[];var reihen=9,k=0;
    for(var r=0;r<reihen&&k<ANZ;r++){var rad=.28+r*.085,n=Math.round(14+r*5.2);for(var i=0;i<n&&k<ANZ;i++,k++){var a=Math.PI*(.12+.76*i/(n-1));plaetze.push({x:w/2-Math.cos(a)*w*rad*1.05,y:h*.02+Math.sin(a)*h*rad*1.35,r:r,v:Math.random(),g:2.2+r*.35})}}
  }
  function stern(cx,cy,R,alpha){x.globalAlpha=alpha;x.beginPath();for(var i=0;i<10;i++){var rr=i%2?R*.45:R,a=-Math.PI/2+i*Math.PI/5;x.lineTo(cx+rr*Math.cos(a),cy+rr*Math.sin(a))}x.closePath();x.fill()}
  function male(){
    var w=cv.clientWidth,h=cv.clientHeight;x.clearRect(0,0,w,h);
    steh+=(ziel-steh)*.06;
    plaetze.forEach(function(p){
      var auf=Math.max(0,Math.min(1,(steh*1.3-p.v*.3))),y=p.y-auf*(10+p.r*1.5)-(druck?Math.sin(performance.now()/90+p.v*20)*3*auf:0);
      x.fillStyle=auf>.5?'#ecd59f':'#8d6c32';stern(p.x,y,p.g+auf*2.2,.35+auf*.65);
    });
    x.globalAlpha=1;
    if(sichtbar)requestAnimationFrame(male);
  }
  new IntersectionObserver(function(es){es.forEach(function(e){sichtbar=e.isIntersecting;if(sichtbar){if(!plaetze.length)bau();ziel=Math.max(ziel,.75);requestAnimationFrame(male)}})},{threshold:.2}).observe(cv);
  addEventListener('resize',function(){if(plaetze.length)bau()});
  var btn=$('#klatschen'),klatschTimer=null;
  function klatsch(){var c=audio();if(!ton||!c)return;var n=c.createBufferSource(),len=c.sampleRate*.08,b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,4);n.buffer=b;var f=c.createBiquadFilter();f.type='bandpass';f.frequency.value=1200+Math.random()*900;var g=c.createGain();g.gain.value=.25;n.connect(f);f.connect(g);g.connect(c.destination);n.start()}
  function an(e){e.preventDefault();druck=true;ziel=1;klatschTimer=setInterval(function(){for(var i=0;i<3;i++)setTimeout(klatsch,Math.random()*120)},110)}
  function aus(){druck=false;clearInterval(klatschTimer)}
  btn.addEventListener('pointerdown',an);btn.addEventListener('pointerup',aus);btn.addEventListener('pointerleave',aus);btn.addEventListener('pointercancel',aus);
  btn.addEventListener('keydown',function(e){if(e.key===' '||e.key==='Enter'){if(!druck)an(e)}});btn.addEventListener('keyup',aus);
  var zs=$$('#zitate blockquote'),zi=0;setInterval(function(){if(!sichtbar)return;zs[zi].classList.remove('an');zi=(zi+1)%zs.length;zs[zi].classList.add('an')},6500);
  var bew=$('#bewerten');if(bew)bew.href='https://www.google.com/maps/search/?api=1&query=Beethoven+Barbershop+Dudweilerstra%C3%9Fe+53+Saarbr%C3%BCcken';
})();

/* ---------- Der Flügel: zwei Oktaven, Dur und Moll ---------- */
(function(){
  var bahn=$('#tastatur');if(!bahn)return;
  var NAMEN=['C','Cis','D','Dis','E','F','Fis','G','Gis','A','B','H'];
  var L=M.looks||{};
  var WEISS=[
    ['Low Fade','Tief angesetzt, ganz weich nach oben.'],['Mid Fade','Der Übergang auf halber Höhe.'],['High Fade','Hoch und klar, oben bleibt die Länge.'],['Taper','Nur an Schläfe und Nacken.'],['Mullet Fade','Hinten Länge, an den Seiten fresh.'],['Boxerschnitt','Kurz, sauber, zeitlos.'],['Scherenschnitt','Mit Schere und Ruhe.'],
    ['Bart','Kontur und Übergang zum Haar.'],['Rasur gegen den Strich','Heißes Tuch, Messer, glatt.'],['Konturen','Messerscharfe Linien an Stirn und Nacken.'],['Augenbrauen mit Faden','Sauber und natürlich.'],['Augenbrauen mit Messer','Schnell und präzise.'],['Locken','Männer und Locken? Ja, bitte.'],['Kinderschnitt','Der coolste in der Klasse.']
  ];
  var SCHWARZ=[['Die Flamme','Für die Ohrhärchen, mit Feuer.'],['Mokka','Zur Begrüßung, bevor es losgeht.'],['Muster','Blitz, Stern oder Linien in die Seite.'],['Live-Musik','Manchmal spielt jemand am Flügel.'],['Fresh Fresh','Das Markenzeichen von Mr Fresh.'],['Waschen','Mit Kopfmassage.'],['Styling','Für Abiball, Hochzeit, Geburtstag.'],['Vorher – Nachher','Typveränderung inklusive.'],['Kartenzahlung','Bar oder mit Karte.'],['Ohne Termin','Einfach reinkommen.']];
  var tasten=[],wi=0,si=0,w=14,modus='ton',verlauf=[];
  for(var m=60;m<84;m++){
    var pc=m%12,schwarz=[1,3,6,8,10].indexOf(pc)>=0,b=document.createElement('button');b.type='button';b.dataset.m=m;
    var info=schwarz?SCHWARZ[si++]:WEISS[wi];
    b.setAttribute('aria-label',NAMEN[pc]+(Math.floor(m/12)-1)+': '+info[0]);b._info=info;
    if(schwarz){b.className='taste-s';b.style.left=(wi/w*100)+'%';b.style.width='calc('+(100/w)+'% * .6)'}
    else{b.className='taste-w';b.innerHTML='<span>'+info[0]+'</span>';wi++}
    bahn.appendChild(b);tasten[m]=b;
  }
  function akkordName(m,art){var n=NAMEN[m%12];return art==='moll'?n.toLowerCase()+'-Moll':n+'-Dur'}
  function leuchte(m){var t=tasten[m];if(!t)return;t.classList.add('an');setTimeout(function(){t.classList.remove('an')},220)}
  function druecke(m){
    var noten=[m];if(modus==='dur')noten=[m,m+4,m+7];if(modus==='moll')noten=[m,m+3,m+7];
    if(!ton)setzeTon(true);
    ladeKlang().then(function(){noten.forEach(function(n,i){setTimeout(function(){spiele(n,i?.55:.75)},modus==='ton'?0:i*18)})});
    noten.forEach(leuchte);
    $('#akkord').textContent=modus==='ton'?NAMEN[m%12]:akkordName(m,modus);
    var info=tasten[m]._info,lb=$('#look-bild');$('#look-titel').textContent=info[0];$('#look-text').textContent=info[1];
    lb.innerHTML='';var f=L[info[0]];if(f)lb.appendChild(bild(f,info[0]));
    verlauf.push(m);if(verlauf.length>9)verlauf.shift();
    if(verlauf.join(',')==='76,75,76,75,76,71,74,72,69'){verlauf=[];setTimeout(finale,400)}
    if(verlauf.slice(-4).join(',')==='67,67,67,63'){$('#look-titel').textContent='So klopft das Schicksal an die Tür.';$('#look-text').textContent='Komm rein, die Tür ist offen. Mo–Sa 9–19 Uhr.'}
  }
  var start=null;
  bahn.addEventListener('pointerdown',function(e){var t=e.target.closest('[data-m]');if(!t)return;start={x:e.clientX,t:t}});
  bahn.addEventListener('pointerup',function(e){if(!start)return;var t=e.target.closest('[data-m]')||start.t;if(Math.abs(e.clientX-start.x)<12)druecke(+t.dataset.m);start=null});
  bahn.addEventListener('keydown',function(e){var t=e.target.closest('[data-m]');if(t&&(e.key==='Enter'||e.key===' ')){e.preventDefault();druecke(+t.dataset.m)}});
  $$('[data-modus]').forEach(function(k){k.addEventListener('click',function(){modus=k.dataset.modus;$$('[data-modus]').forEach(function(z){z.setAttribute('aria-pressed',z===k)})})});
  var rahmen=$('#tastatur-rahmen');
  function mitte(){if(rahmen.scrollWidth>rahmen.clientWidth){var t=tasten[69];rahmen.scrollLeft=t.offsetLeft-rahmen.clientWidth*.2}}
  mitte();addEventListener('resize',mitte);
  new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){o.disconnect();[60,64,67,72].forEach(function(m,i){setTimeout(function(){leuchte(m)},300+i*170)})}})},{threshold:.6}).observe(bahn);
  function finale(){
    var f=$('#finale'),c=$('#regen'),x=c.getContext('2d');
    c.width=innerWidth;c.height=innerHeight;f.classList.add('an');
    var alt=$('.hut',f);if(alt)alt.remove();
    if(M.fotos.hut){var h=bild(M.fotos.hut.src,'','hut');f.appendChild(h)}
    $('#look-titel').textContent='Bravo!';$('#look-text').textContent='Das war „Für Elise“. Mr Fresh zieht den Hut.';
    [[64,68,71],[69,72,76],[72,76,79,84]].forEach(function(a,i){setTimeout(function(){a.forEach(function(n){spiele(n,.5,2.5)})},i*380)});
    var st=[];for(var i=0;i<80;i++)st.push({x:Math.random()*innerWidth,y:-Math.random()*innerHeight,v:2+Math.random()*3.5,r:Math.random()*6.3,s:6+Math.random()*8});
    var t0=performance.now();
    (function los(t){x.clearRect(0,0,c.width,c.height);st.forEach(function(p){p.y+=p.v;p.r+=.03;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle='#ecd59f';x.beginPath();x.ellipse(0,0,p.s,p.s*.72,-.35,0,6.28);x.fill();x.fillRect(p.s*.85,-p.s*3.2,1.6,p.s*3.2);x.restore()});
      if(t-t0<3400)requestAnimationFrame(los);else{f.classList.remove('an');x.clearRect(0,0,c.width,c.height)}})(t0);
  }
})();

/* ---------- Karte erst nach Klick ---------- */
(function(){
  var k=$('#karte-laden');if(!k)return;
  k.addEventListener('click',function(){var p=$('#karte-platz');p.innerHTML='<iframe title="Karte: Beethoven Barbershop, Dudweilerstraße 53" src="https://www.google.com/maps?q=Beethoven+Barbershop,+Dudweilerstra%C3%9Fe+53,+66111+Saarbr%C3%BCcken&output=embed" style="border:0;width:100%;height:100%;border-radius:4px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';p.style.padding='0'});
})();
})();
