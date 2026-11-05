(function(){var W=function(ms,f){setTimeout(function(){try{f()}catch(e){console.log('K',e.message)}},ms)};var vis=function(s){return [...document.querySelectorAll(s)].filter(function(x){return x.offsetParent})};
W(300,function(){__tap('.kpai-hb')});
W(1700,function(){var T='L-Küche mit Insel, grifflos in Grau, viel Stauraum, Kochfeld nicht vor dem Fenster',i=0;(function n(){i++;var ta=vis('textarea')[0];if(ta){ta.focus();ta.value=T.slice(0,i);ta.dispatchEvent(new Event('input',{bubbles:true}))}if(i<T.length)setTimeout(n,38)})()});
W(5600,function(){var b=vis('[data-kpai-run]')[0];b&&__tap(b)});
W(8200,function(){var b=vis('[data-kpai-plan]')[0];b&&__tap(b)});
W(12600,function(){var b=vis('[data-kpai-apply]')[0];b&&__tap(b)});
})();
