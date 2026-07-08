import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const url='file:///tmp/claude-0/-home-user-FLC-Esport-Reporting-Shayex/dd2dbd4b-0df5-56cd-86ac-2e82e484ad54/scratchpad/sync-live.html';
const errs=[];
// Client A
const A=await (await b.newContext()).newPage(); A.on('pageerror',e=>errs.push('A '+e.message));
await A.goto(url); await A.waitForTimeout(800);
await A.fill('#login-user','shayex'); await A.fill('#pw','0000'); await A.click('#gate-btn'); await A.waitForTimeout(300);
if(await A.$('#new-pin')){ await A.fill('#new-pin','1234'); await A.fill('#new-pin2','1234'); await A.click('#pin-btn'); await A.waitForTimeout(400); }
console.log('A sync:', await A.$eval('#sync-chip',e=>e.dataset.state));
// Client B (separate context = separate localStorage)
const B=await (await b.newContext()).newPage(); B.on('pageerror',e=>errs.push('B '+e.message));
await B.goto(url); await B.waitForTimeout(800);
// A adds a reunion in fifa
await A.evaluate(()=>{ POLES.fifa.reunions.push({date:'2026-07-01',titre:'CR partagé A',actions:[{texte:'action A',fait:false}]}); savePoles(); });
await A.waitForTimeout(1000);   // let push happen
// B should receive within poll interval (6s) — wait and check
await B.waitForTimeout(7000);
const bHas=await B.evaluate(()=>POLES.fifa.reunions.some(r=>r.titre==='CR partagé A'));
console.log('B received A change:', bHas);
// B logs in and adds a note; A should get it
await B.fill('#login-user','shayex'); await B.fill('#pw','1234'); await B.click('#gate-btn'); await B.waitForTimeout(500);
await B.evaluate(()=>{ ORG.notes.push({titre:'Note de B',categorie:'info',contenu:'x',date:'2026-07-02'}); saveOrg(); });
await B.waitForTimeout(1000);
await A.waitForTimeout(7000);
const aHas=await A.evaluate(()=>ORG.notes.some(n=>n.titre==='Note de B'));
console.log('A received B change:', aHas);
console.log('errors:', JSON.stringify(errs));
await b.close();
