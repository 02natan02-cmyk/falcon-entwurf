(function(){var W=function(ms,f){setTimeout(function(){try{f()}catch(e){}},ms)};
W(50,function(){document.querySelector('[data-mood]').click();var lk=[...document.querySelectorAll('button')].find(function(b){return /Elegant dunkel/.test(b.textContent)});lk&&lk.click();document.querySelectorAll('[data-kstep]')[2].click();setTimeout(function(){var b=document.querySelector('[data-e=back][data-v=motiv]');b&&b.click()},300)});
W(5000,function(){var b=document.querySelector('[data-cam=augen]');b&&b.click()});
W(12500,function(){fetch('img/events.webp').then(function(r){return r.blob()}).then(function(bl){var i=[...document.querySelectorAll('input[type=file]')].find(function(x){return x.accept==='image/*'&&!x.name});var dt=new DataTransfer();dt.items.add(new File([bl],'foto.webp',{type:'image/webp'}));i.files=dt.files;i.dispatchEvent(new Event('change',{bubbles:true}))})});
})();
