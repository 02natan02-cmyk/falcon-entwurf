(function(){var W=function(ms,f){setTimeout(function(){try{f()}catch(e){console.log('M',e.message)}},ms)};
function PT(el){var q=el.getBoundingClientRect(),o={bubbles:true,cancelable:true,pointerId:1,pointerType:'mouse',isPrimary:true,button:0,buttons:1,clientX:q.left+q.width/2,clientY:q.top+q.height/2};el.dispatchEvent(new PointerEvent('pointerdown',o));var u=Object.assign({},o,{buttons:0});el.dispatchEvent(new PointerEvent('pointerup',u));document.dispatchEvent(new PointerEvent('pointerup',u));window.dispatchEvent(new PointerEvent('pointerup',u))}
function C(s){var e=document.querySelector(s);e&&e.click()}
function popB(re){var p=document.querySelector('[data-kp-pop]');var b=p&&[...p.querySelectorAll('button')].find(function(x){return re.test(x.textContent)});b&&b.click();return b}
function popX(){var x=document.querySelector('[data-kp-pop] [data-p=x]');x&&x.click()}
function step(i){var s=document.querySelectorAll('[data-kstep]')[i];s&&s.click()}
var T0=2500;
W(T0+600,function(){C('[data-form=l]')});
W(T0+3200,function(){C('[data-form=insel]')});
W(T0+5800,function(){C('[data-form=zwei]')});
W(T0+8400,function(){C('[data-form=u]')});
W(T0+10600,function(){step(2)});
W(T0+11000,function(){C('[data-world=gruen]')});
W(T0+13000,function(){C('[data-world=blau]')});
W(T0+15000,function(){C('[data-world=tief]')});
W(T0+17200,function(){step(1)});
W(T0+17600,function(){var g=document.querySelector('[data-kp-walls] g.kp-u');g.scrollIntoView({block:'center'});setTimeout(function(){PT(g);setTimeout(function(){popB(/^Klappe kippt/)},500);setTimeout(function(){popB(/In 3D öffnen/)},1300)},150)});
W(T0+21000,function(){popX();KP.edit.room(620,500)});
W(T0+23600,function(){var gs=[...document.querySelectorAll('[data-kp-walls] g.kp-m')];(function nx(i){if(i>=gs.length)return;gs[i].scrollIntoView({block:'center'});PT(gs[i]);setTimeout(function(){var p=document.querySelector('[data-kp-pop]');if(p&&!p.hidden&&/AUFSATZ|Aufsatz/.test(p.textContent)){var bs=[...p.querySelectorAll('[aria-label=Aufsatzschrank] button')];var t=bs[bs.length-1];t&&t.click()}else nx(i+1)},120)})(0)});
W(T0+26600,function(){popX();step(2)});
W(T0+27000,function(){C('[data-e=hobV][data-v=dd]')});
W(T0+29400,function(){C('[data-e=tap][data-v=gold]')});
W(T0+32000,function(){var d=KP.edit.ops().find(function(o){return o.t==='tuer'});if(d){window.__d=d;KP.edit.op(d.id,{s:d.s+90})}});
W(T0+34200,function(){window.__d&&KP.edit.op(__d.id,{w:110})});
W(T0+36400,function(){window.__d&&KP.edit.op(__d.id,{w:80})});
})();
