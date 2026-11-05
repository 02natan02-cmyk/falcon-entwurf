(function(){var W=function(ms,f){setTimeout(function(){try{f()}catch(e){console.log('D',e.message)}},ms)};
W(100,function(){document.querySelectorAll('[data-kstep]')[2].click()});
W(900,function(){__tap('[data-world=hell]')});
W(2300,function(){__tap('[data-front="#dad6cd"]')});
W(5200,function(){__tap('[data-world=tief]')});
W(6600,function(){__tap('[data-front="#45474b"]')});
})();
