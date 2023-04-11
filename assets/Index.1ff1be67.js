import{d as I,k as x,q as A,a as W,c as $,h as a,n as d,x as m,v as o,w as k,e as g,p as R,i as q,_ as M,s as V,M as X,o as B,z as F,g as i,U as C,y as L}from"./index.b8937978.js";import{_ as z,u as D}from"./axs.1ed2e975.js";const G="/assets/girl.2f9c708c.png",K="/assets/checkmark.0c1fa944.svg",N=v=>(R("data-v-ad053741"),v=v(),q(),v),E={class:"staking-modal"},H={class:"left"},O=g('<h2 class="title" data-v-ad053741>FIX Staking</h2><div class="company" data-v-ad053741><img class="logo" src="'+z+'" alt="" data-v-ad053741><span class="name" data-v-ad053741>AXS</span></div><div class="block type" data-v-ad053741><span class="block__name" data-v-ad053741>Type</span><input type="number" class="block__input" placeholder="Fix staking" data-v-ad053741></div>',3),P={class:"block term"},U=N(()=>a("span",{class:"block__name"},"Term",-1)),j={class:"term__buttons"},J=g('<div class="block amount" data-v-ad053741><span class="block__name" data-v-ad053741>Blocking amount</span><div class="block__input amount__block" data-v-ad053741><input type="number" class="amount__input" placeholder="Enter amount" data-v-ad053741><span class="amount__max" data-v-ad053741>MAX</span></div></div><div class="block limit" data-v-ad053741><span class="block__name" data-v-ad053741>The limit of the blocked amount</span><div class="limit__blocks" data-v-ad053741><div class="limit__block" data-v-ad053741><span class="limit__text limit__key" data-v-ad053741>Min: </span><span class="limit__text" data-v-ad053741> 0.001 AXS</span></div><div class="limit__block" data-v-ad053741><span class="limit__text limit__key" data-v-ad053741>Available quota:</span><span class="limit__text" data-v-ad053741> 2 AXS</span></div><div class="limit__block" data-v-ad053741><span class="limit__text limit__key" data-v-ad053741>Total personal quota:</span><span class="limit__text" data-v-ad053741> 2 AXS</span></div></div></div>',2),Q={class:"right"},Y=g('<h2 class="title" data-v-ad053741>Total</h2><div class="block block-1" data-v-ad053741><div class="block__left" data-v-ad053741><div class="square" data-v-ad053741></div><div class="block-1__line" data-v-ad053741></div></div><div class="block__right" data-v-ad053741><span class="block__key" data-v-ad053741>The limit of the blocked amount</span><span class="block__value" data-v-ad053741>2022-09-14 15:43</span></div></div><div class="block block-2" data-v-ad053741><div class="block__left" data-v-ad053741><div class="square" data-v-ad053741></div><div class="block-2__line" data-v-ad053741></div></div><div class="block_2__block" data-v-ad053741><div class="block__right" data-v-ad053741><span class="block__key" data-v-ad053741>The limit of the blocked amount</span><span class="block__value" data-v-ad053741>2022-09-14 15:43</span></div><div class="block__right" data-v-ad053741><span class="block__key" data-v-ad053741>Interest period</span><span class="block__value" data-v-ad053741>1 day</span></div></div></div><div class="block block-3" data-v-ad053741><div class="block__left" data-v-ad053741><div class="square" data-v-ad053741></div><div class="block-2__line" data-v-ad053741></div></div><div class="block_3__block" data-v-ad053741><div class="block__right" data-v-ad053741><span class="block__key" data-v-ad053741>Date of completion of <br class="desktop" data-v-ad053741> interest accrual</span><span class="block__value" data-v-ad053741>2022-12-14 <br class="desktop" data-v-ad053741> 03:00</span></div><div class="block__right block__right--bottom" data-v-ad053741><span class="block__key" data-v-ad053741>The next stacking will start <br data-v-ad053741> automatically on 2022-12-14 03:00</span></div></div></div><div class="calculation" data-v-ad053741><h2 class="calculation__key" data-v-ad053741>Calculation. APR</h2><span class="calculation__value" data-v-ad053741>76.00%</span></div>',5),Z={class:"agreement"},aa={class:"agreement__text"},ta=N(()=>a("br",{class:"desktop"},null,-1)),sa=I({__name:"Modal",emits:["close"],setup(v,{emit:n}){const c=()=>{n("close")},_=x(1),r=l=>{_.value=l},u=x(!1),f=()=>{u.value=!u.value},y=l=>{!l.target.classList.contains("modal-wrapper")||c()};return(l,t)=>{const p=A("RouterLink");return W(),$("div",{class:"modal-wrapper",onClick:y},[a("div",E,[a("div",H,[O,a("div",P,[U,a("div",j,[a("button",{class:d(["term__button",{"term__button--active":_.value===1}]),onClick:t[0]||(t[0]=s=>r(1))},"30",2),a("button",{class:d(["term__button",{"term__button--active":_.value===2}]),onClick:t[1]||(t[1]=s=>r(2))},"90",2),a("button",{class:d(["term__button",{"term__button--active":_.value===3}]),onClick:t[2]||(t[2]=s=>r(3))},"120",2)])]),J]),a("div",Q,[Y,a("div",Z,[a("button",{class:"picker",onClick:f},[a("img",{class:d(["check-mark",{"check-mark--active":u.value}]),src:K,alt:""},null,2)]),a("span",aa,[m("I read it(a) and agree to the Finance "),ta,m(" Betting "),o(p,{to:"''",class:"agreement__link"},{default:k(()=>[m("Service Agreement ")]),_:1})])]),a("button",{class:"confirm",onClick:t[3]||(t[3]=s=>l.$emit("close"))},"\u0421onfirm")])])])}}});const ea=M(sa,[["__scopeId","data-v-ad053741"]]),ia={class:"page"},la={class:"staking-page"},oa=g('<div class="main" data-v-0ad09095><div class="titles" data-v-0ad09095><h2 class="title title-secondary title-5 mobile" data-v-0ad09095>STAKING</h2><h2 class="title title-4 mobile" data-v-0ad09095>STAKING</h2><h2 class="title title-1" data-v-0ad09095>STAKING</h2><h2 class="title title-secondary title-2" data-v-0ad09095>STAKING</h2><h2 class="title title-secondary title-3" data-v-0ad09095>STAKING</h2></div><div class="girl-container" data-v-0ad09095><img class="girl" src="'+G+'" alt="" data-v-0ad09095></div></div>',1),da={class:"staking"},na={class:"inner-container"},ca={class:"navigation"},_a={class:"page"},va=I({__name:"Index",setup(v){L(p=>({"4cc71350":u,bb758894:t.value,"534ec253":f,"2769f2e6":y,"1290bb8b":l}));const n=D(),{navigation:c,isModalOpen:_}=V(n),r=X(),u=1234,f=761,y=610,l=600,t=x(0);return B(()=>{t.value=window.innerWidth;const p=window.innerWidth;window.addEventListener("resize",()=>{Math.abs(p-window.innerWidth)<100||location.reload()});let s=window.innerWidth,b=window.innerHeight;const h=getComputedStyle(document.querySelector("html")).fontSize;+h.substring(0,h.length-2);let w=s/100,e=b/100,S="top -100%";navigator.userAgent.match(/firefox|fxios/i)&&(S="top -300%"),(s<850||r.isTouchDevice())&&(S="top -1000px");const T=F.timeline({scrollTrigger:{trigger:".staking-page",start:"top 0%",end:S,scrub:1,pin:".staking-page"}});window.outerWidth>850?T.to(".girl",{duration:1,y:100*e,ease:"linear"},0).to(".title-1",{duration:1,y:-80*e,scale:1.8,ease:"linear"},0).to(".title-2",{duration:1.1,y:-100*e,scale:1.4,ease:"linear"},0).to(".title-3",{duration:1.2,y:80*e,scale:1.8,ease:"linear"},0).fromTo(".staking",{x:100*w},{duration:1.25,x:0,ease:"linear"},0).to(".main",{duration:.01,delay:1.2,autoAlpha:0,ease:"linear"},0):T.to(".girl",{duration:1,y:100*e,ease:"linear"},0).to(".title-1",{duration:1,y:-85*e,scale:1.8,ease:"linear"},0).to(".title-4",{duration:1.1,y:-80*e,scale:1.8,ease:"linear"},0).to(".title-5",{duration:1.1,y:-80*e,scale:1.8,ease:"linear"},0).to(".title-2",{duration:1,y:80*e,scale:1.8,ease:"linear"},0).to(".title-3",{duration:1,y:80*e,scale:1.8,ease:"linear"},0).fromTo(".staking",{autoAlpha:0},{duration:.9,autoAlpha:1,ease:"linear"},0).to(".main",{duration:.05,delay:1,autoAlpha:0,ease:"linear"},0).to(".main",{duration:.01,delay:1.2,ease:"linear"},0)}),(p,s)=>{const b=A("RouterLink"),h=A("RouterView");return W(),$("div",ia,[a("div",la,[oa,a("div",da,[a("div",na,[a("div",ca,[o(b,{to:{name:i(c)[0].to},class:d(["nav-button",{"nav-button--unactive":!i(c)[0].isActive}]),onClick:s[0]||(s[0]=w=>i(n).setActiveTab(1))},{default:k(()=>[m("FIX Staking")]),_:1},8,["to","class"]),o(b,{to:{name:i(c)[1].to},class:d(["nav-button",{"nav-button--unactive":!i(c)[1].isActive}]),onClick:s[1]||(s[1]=w=>i(n).setActiveTab(2))},{default:k(()=>[m("DeFi staking")]),_:1},8,["to","class"])]),a("div",_a,[o(C,null,{default:k(()=>[o(h)]),_:1})])])])]),o(C,null,{default:k(()=>[o(ea,{class:d({closed:!i(_)}),onClose:i(n).closeModal},null,8,["class","onClose"])]),_:1})])}}});const ka=M(va,[["__scopeId","data-v-0ad09095"]]);export{ka as default};
