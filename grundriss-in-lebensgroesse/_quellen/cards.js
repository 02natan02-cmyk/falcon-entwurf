const { chromium } = require('/opt/fe-werkzeuge/node_modules/playwright-core'); const fs=require('fs');
(async()=>{const P=JSON.parse(fs.readFileSync('pages.json'));const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1243/chrome-linux64/chrome'});const p=await b.newPage({viewport:{width:1920,height:1080}});
for(const [n,h] of Object.entries(P)){fs.writeFileSync('/tmp/claude-0/c.html',h);await p.goto('file:///tmp/claude-0/c.html');await p.waitForTimeout(400);await p.screenshot({path:n+'.png',omitBackground:n.startsWith('c_')||n==='t_couch'||n==='t_bind'||n==='t_stark'});}
await b.close();})();
