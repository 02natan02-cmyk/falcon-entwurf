(function(){var W=function(ms,f){setTimeout(function(){try{f()}catch(e){console.log('M',e.message)}},ms)};
function PT(el){var q=el.getBoundingClientRect(),o={bubbles:true,cancelable:true,pointerId:1,pointerType:'mouse',isPrimary:true,button:0,buttons:1,clientX:q.left+q.width/2,clientY:q.top+q.height/2};el.dispatchEvent(new PointerEvent('pointerdown',o));var u=Object.assign({},o,{buttons:0});el.dispatchEvent(new PointerEvent('pointerup',u));document.dispatchEvent(new PointerEvent('pointerup',u));window.dispatchEvent(new PointerEvent('pointerup',u))}
function C(s){var e=document.querySelector(s);e&&e.click()}
function popB(re){var p=document.querySelector('[data-kp-pop]');var b=p&&[...p.querySelectorAll('button')].find(function(x){return re.test(x.textContent)});b&&b.click();return b}
function popX(){var x=document.querySelector('[data-kp-pop] [data-p=x]');x&&x.click()}
function step(i){var s=document.querySelectorAll('[data-kstep]')[i];s&&s.click()}
function view(v){var k=KP.k3d();k&&k.view&&k.view(v)}
W(50,function(){document.querySelector('[data-mood]').click();var lk=[...document.querySelectorAll('button')].find(function(b){return /Elegant dunkel/.test(b.textContent)});lk&&lk.click()});
var T0=3000;
W(T0,function(){step(1);var g=document.querySelector('[data-kp-walls] g.kp-u');g.scrollIntoView({block:'center'});setTimeout(function(){PT(g);setTimeout(function(){popB(/^Klappe kippt/)},400);setTimeout(function(){popB(/In 3D öffnen/)},1100)},100)});
W(T0+3800,function(){popX();view('perspektive');setTimeout(function(){KP.edit.room(640,520)},300)});
W(T0+7400,function(){var gs=[...document.querySelectorAll('[data-kp-walls] g.kp-m')];(function nx(i){if(i>=gs.length)return;gs[i].scrollIntoView({block:'center'});PT(gs[i]);setTimeout(function(){var p=document.querySelector('[data-kp-pop]');if(p&&!p.hidden&&/Aufsatz/i.test(p.textContent)){var bs=[...p.querySelectorAll('[aria-label=Aufsatzschrank] button')];var t=bs[bs.length-1];t&&t.click()}else nx(i+1)},120)})(0)});
W(T0+11000,function(){popX();step(2);setTimeout(function(){C('[data-e=tap][data-v=gold]')},300)});
W(T0+14400,function(){view('top');var d=KP.edit.ops().find(function(o){return o.t==='tuer'});if(d){window.__d=d}});
W(T0+15600,function(){window.__d&&KP.edit.op(__d.id,{s:__d.s+100})});
W(T0+17600,function(){window.__d&&KP.edit.op(__d.id,{w:110})});
W(T0+19600,function(){window.__d&&KP.edit.op(__d.id,{w:80})});
W(T0+21600,function(){view('perspektive');C('[data-world=blau]')});
})();
