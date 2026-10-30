function confetti(){for(let i=0;i<110;i++){const d=document.createElement('i');d.style.cssText='left:'+Math.random()*100+'vw;background:hsl('+Math.random()*360+' 85% 68%);animation-duration:'+(2.2+Math.random()*2.6)+'s;animation-delay:'+Math.random()*.7+'s';document.body.appendChild(d);setTimeout(()=>d.remove(),6000)}}
let ac,mg,mt,dst,tuneN=0,mon=true;const MEL=[[392,.75],[392,.25],[440,1],[392,1],[523.25,1],[493.88,2],[392,.75],[392,.25],[440,1],[392,1],[587.33,1],[523.25,2],[392,.75],[392,.25],[783.99,1],[659.25,1],[523.25,1],[493.88,1],[440,1],[698.46,.75],[698.46,.25],[659.25,1],[523.25,1],[587.33,1],[523.25,2]];
function tone(f,t,d){[[f,'triangle',.5,.5],[f*2,'sine',.14,.3]].forEach(([q,w,v,r])=>{const o=ac.createOscillator(),g=ac.createGain();o.type=w;o.frequency.value=q;o.connect(g);g.connect(dst);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.001,t+d+r);o.start(t);o.stop(t+d+r+.05)})}
const MEL2=[[659.25,1],[783.99,1],[880,1.5],[783.99,.5],[659.25,1],[587.33,1],[523.25,2],[587.33,1],[659.25,1],[783.99,1.5],[659.25,.5],[587.33,1],[523.25,1],[440,2],[523.25,1],[587.33,1],[659.25,1],[783.99,1],[880,1],[783.99,1],[659.25,2],[587.33,1],[523.25,1],[587.33,1],[659.25,1],[523.25,4]];
const TUNES=[{m:MEL,b:.55,gap:1.5},{m:MEL2,b:.5,gap:1}];
function play(){const T=TUNES[tuneN];let t=ac.currentTime+.1;T.m.forEach(([f,d])=>{tone(f,t,d*T.b);t+=d*T.b});mt=setTimeout(play,(t-ac.currentTime+T.gap)*1000)}
function setTune(n){if(!ac){tuneN=n;return}if(n===tuneN)return;tuneN=n;clearTimeout(mt);const o=dst;o.gain.setTargetAtTime(0,ac.currentTime,.25);setTimeout(()=>o.disconnect(),2500);dst=ac.createGain();dst.connect(mg);play()}
function startMusic(){try{if(ac)return;ac=new(window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.gain.value=.2;mg.connect(ac.destination);dst=ac.createGain();dst.connect(mg);if(ac.state==='suspended')ac.resume();play();const m=document.createElement('button');m.textContent='🔊';m.setAttribute('aria-label','เปิดหรือปิดเพลง');m.style.cssText='position:fixed;top:calc(env(safe-area-inset-top,0px) + 10px);right:10px;z-index:6;padding:8px 13px';m.onclick=()=>{mon=!mon;mg.gain.setTargetAtTime(mon?.2:0,ac.currentTime,.05);m.textContent=mon?'🔊':'🔇'};document.body.appendChild(m)}catch(e){}}

const WEBHOOK_URL=CONFIG.webhookUrl;
async function sendWish(v){
  if(!WEBHOOK_URL)return;
  try{await fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:'Birthday Wish',content:'✨ มีคนขอพรวันเกิด: '+(v||'(ไม่ได้พิมพ์พร)'),allowed_mentions:{parse:[]}})})}catch(e){}
}
const NS='http://www.w3.org/2000/svg',svg=document.getElementById('cake'),board=document.getElementById('board'),hint=document.getElementById('hint'),rb=document.getElementById('b');
const cs=[[145,120,46],[178,120,58],[212,120,42],[102,182,40],[258,182,44]],cc=['#ffffff','#7ad7ff','#ffe27a','#ffb3d0','#ffffff'],N=5;let out=0;
const R=(x,y,w,h,r,f)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+f+'"/>';
const C=(x,y,r,f)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'"/>';
const tier=(x,y,w,h,c)=>R(x,y,w,h,14,c)+R(x,y,w,14,7,'#fff');
const drips=(x0,x1,y)=>{let r='';for(let x=x0+14,k=0;x<x1-8;x+=22,k++)r+=R(x-5,y,10,14+(k*7)%13,5,'#fff');return r};
let g='<ellipse cx="180" cy="346" rx="162" ry="16" fill="#f1f8f3" stroke="#cfe6d6"/>';
g+=tier(50,252,260,84,'#b5e6c9')+drips(50,310,258)+tier(85,182,190,72,'#fffbea')+drips(85,275,188)+tier(120,120,120,64,'#9bd9b6')+drips(120,240,126);
for(let x=64,k=0;x<310;x+=26,k++)g+=C(x,324,5,k%2?'#eafff2':'#ffe27a');
[[66,245],[294,245]].forEach(([x,y])=>g+='<path d="M'+x+' '+(y-8)+' q4-8 9-9" stroke="#3f9b6b" stroke-width="2" fill="none"/>'+C(x,y,9,'#d7143c')+C(x-3,y-3,2.5,'#ff9fb0'));
cs.forEach(([x,b,h],i)=>{g+='<g class="cd" data-i="'+i+'" tabindex="0" role="button" aria-label="เทียนเล่มที่ '+(i+1)+'">'+R(x-5,b-h,10,h,3,cc[i])+R(x-5,b-h,10,5,2,'#00000014')+'<g class="fl" transform="translate('+x+' '+(b-h-8)+')"><g class="fi"><path d="M0-18C9-7 8 4 0 4C-8 4-9-7 0-18Z" fill="#ffc94a"/><path d="M0-9C4-3 3 2 0 2C-3 2-4-3 0-9Z" fill="#fff4b8"/></g></g><rect x="'+(x-12)+'" y="'+(b-h-32)+'" width="24" height="'+(h+34)+'" fill="transparent"/></g>'});
svg.innerHTML=g;
function smoke(x,y){const e=document.createElementNS(NS,'circle');e.setAttribute('cx',x);e.setAttribute('cy',y);e.setAttribute('r',6);e.setAttribute('class','sm');svg.appendChild(e);setTimeout(()=>e.remove(),1300)}
function blow(i){const c=svg.querySelector('.cd[data-i="'+i+'"]');if(!c||c.classList.contains('o'))return;c.classList.add('o');smoke(cs[i][0],cs[i][1]-cs[i][2]-14);out++;hint.textContent=out<N?'เหลืออีก '+(N-out)+' เล่ม':'';if(out===N){confetti();setTimeout(()=>{if(out!==N)return;showMail()},1200)}}
svg.addEventListener('click',e=>{const c=e.target.closest('.cd');if(c)blow(+c.dataset.i)});
svg.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const c=e.target.closest('.cd');if(c){e.preventDefault();blow(+c.dataset.i)}});

const mail=document.getElementById('mail'),env=document.getElementById('env'),mh=document.getElementById('mh');
const deck=document.getElementById('deck');
const CARDS=CONFIG.cards.map(c=>[c.title,c.text]);
deck.innerHTML=CARDS.map((c,i)=>'<div class="k7'+(i?'':' main')+'" data-i="'+i+'" tabindex="0" role="button"><b>'+c[0]+'</b><p>'+c[1]+'</p></div>').join('');
const ks=[...deck.children];let st=0;
function geo(){const u=Math.min(deck.clientWidth,deck.clientHeight/1.2);deck.style.setProperty('--cw',u*.24+'px');return u}
function spot(i,u){if(i===0)return[0,0,-2];const a=(i-1)*2*Math.PI/(ks.length-1)-Math.PI/2,R=u*.4;return[Math.cos(a)*R,Math.sin(a)*R,i%2?7:-7]}
function put(k,x,y,r,s,o){k.style.transform='translate(calc(-50% + '+x+'px),calc(-50% + '+y+'px)) rotate('+r+'deg) scale('+s+')';k.style.opacity=o}
function oy(){const a=deck.getBoundingClientRect(),b=env.getBoundingClientRect();return b.top+b.height/2-(a.top+a.height/2)}
function stash(){const y=oy();ks.forEach(k=>{k.style.transitionDelay='0s';put(k,0,y,0,.2,0)})}
function deal(){const u=geo();deck.classList.add('live');ks.forEach((k,i)=>{const[x,y,r]=spot(i,u);k.style.transitionDelay=(i*.07)+'s';put(k,x,y,r,1,1)})}
function pick(k){st=3;const a=deck.getBoundingClientRect(),m=mail.getBoundingClientRect(),dx=m.left+m.width/2-(a.left+a.width/2),dy=m.top+m.height/2-(a.top+a.height/2);
ks.forEach(o=>{o.style.transitionDelay='0s';if(o===k){o.classList.add('sel');put(o,dx,dy,0,1,1)}else if(!o.dataset.done)o.classList.add('dim')});mh.textContent='แตะอีกครั้งเพื่อเก็บการ์ด'}
function back(k){st=4;mh.textContent='';k.classList.add('ret','done');k.dataset.done=1;ks.forEach(o=>o.classList.remove('dim'));
k.style.transitionDelay='0s';put(k,0,oy(),0,.2,0);
setTimeout(()=>k.classList.remove('sel','ret'),900);
const left=ks.filter(o=>!o.dataset.done).length;
if(left){setTimeout(()=>{st=2;mh.textContent='แตะการ์ดที่อยากอ่าน (เหลืออีก '+left+' ใบ)'},900);return}
setTimeout(()=>env.classList.remove('open'),1000);
setTimeout(()=>env.classList.add('fold'),1800);
setTimeout(()=>env.classList.add('fly'),2300);
setTimeout(showEnd,3700)}
function openEnv(){if(st)return;st=1;env.classList.add('open');mh.textContent='';startFw();setTimeout(()=>{deal();st=2;mh.textContent='แตะการ์ดที่อยากอ่าน'},650)}
const sl=env.querySelector('.sl');sl.setAttribute('role','button');sl.setAttribute('tabindex','0');sl.setAttribute('aria-label','เปิดซอง');
sl.addEventListener('click',openEnv);sl.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openEnv()}});
deck.addEventListener('click',e=>{const k=e.target.closest('.k7');if(!k||k.dataset.done)return;if(st===2)pick(k);else if(st===3&&k.classList.contains('sel'))back(k)});
deck.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const k=e.target.closest('.k7');if(k){e.preventDefault();k.click()}}});
function showEnd(){mail.classList.add('end');if(window.myWish)document.getElementById('ew').textContent='✨ พรของเธอ: '+window.myWish;confetti();launch();setTimeout(launch,300);setTimeout(launch,600)}
function showMail(){st=0;env.classList.remove('open','read','gone','fold','fly');ks.forEach(k=>{k.classList.remove('sel','dim','done');delete k.dataset.done});mh.textContent='แตะหัวใจสีเขียวที่ซองเพื่อเปิด';deck.classList.remove('live');mail.hidden=false;geo();stash();setTune(1)}
const fw=document.getElementById('fw'),fx=fw.getContext('2d'),calm=matchMedia('(prefers-reduced-motion:reduce)').matches;let ps=[],rk=[],fwOn=false;
function launch(){const W=mail.clientWidth,H=mail.clientHeight;rk.push({x:W*(.12+Math.random()*.76),y:H,ty:H*(.1+Math.random()*.32),h:Math.random()*360})}
function burst(x,y,h){for(let i=0;i<50;i++){const a=i/50*6.283,s=1.6+Math.random()*3;ps.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,h:h+Math.random()*40})}}
function fwLoop(){if(mail.hidden){fwOn=false;rk=[];ps=[];return}
const W=mail.clientWidth,H=mail.clientHeight;fx.clearRect(0,0,W,H);
rk=rk.filter(r=>{r.y-=9;fx.fillStyle='hsl('+r.h+' 90% 55%)';fx.fillRect(r.x-1.5,r.y,3,14);if(r.y<=r.ty){burst(r.x,r.y,r.h);return false}return true});
ps=ps.filter(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.vx*=.985;p.vy*=.985;p.l-=.012;if(p.l<=0)return false;fx.globalAlpha=p.l;fx.fillStyle='hsl('+p.h+' 95% 58%)';fx.beginPath();fx.arc(p.x,p.y,2.6,0,6.283);fx.fill();return true});
fx.globalAlpha=1;if(Math.random()<.035)launch();requestAnimationFrame(fwLoop)}
function startFw(){if(calm)return;const d=devicePixelRatio||1;fw.width=mail.clientWidth*d;fw.height=mail.clientHeight*d;fx.setTransform(d,0,0,d,0,0);launch();setTimeout(launch,250);setTimeout(launch,550);if(!fwOn){fwOn=true;fwLoop()}}
const wp=document.getElementById('wishp'),wt=document.getElementById('wt');
function makeWish(){if(wp.classList.contains('out'))return;const v=wt.value.trim();window.myWish=v;sendWish(v);wp.classList.add('out');setTimeout(()=>wp.remove(),700);
const f=document.createElement('div');f.className='wf';f.textContent=v?'✨ '+v+' ✨':'✨ ขอพรแล้ว ✨';document.body.appendChild(f);setTimeout(()=>f.remove(),4200);
for(let i=0;i<18;i++){const s=document.createElement('span');s.className='sp';s.textContent='✦';s.style.cssText='left:'+(30+Math.random()*40)+'vw;top:'+(48+Math.random()*14)+'vh;font-size:'+(12+Math.random()*16)+'px;animation-delay:'+Math.random()*.8+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),3500)}}
document.getElementById('wb').onclick=makeWish;wt.addEventListener('keydown',e=>{if(e.key==='Enter')makeWish()});
['click','keydown'].forEach(t=>addEventListener(t,()=>startMusic(),{once:true}));
