import{_ as p,q as x,a,c as s,h as t,v as b,w as C,p as w,i as k,a5 as B,d as T,a6 as S,t as y,n as h,a2 as A,Y as I,F as i,r,A as f,s as N,k as v,a7 as F,Q as g,g as u,a8 as W}from"./index.763b9cc7.js";import{P as q}from"./ProjectCard.2390d118.js";const D={},$=e=>(w("data-v-fef46dc8"),e=e(),k(),e),L={class:"my-balance"},R=$(()=>t("div",{class:"my-balance__info"},[t("img",{class:"my-balance__img",src:B,alt:""}),t("span",{class:"my-balance__total"},"Estimated total")],-1)),j={class:"my-balance__main"},E=$(()=>t("div",{class:"my-balance__money"},[t("span",{class:"my-balance__crypto"},"0.0313123123 BTC "),t("span",{class:"my-balance__currency"},"\u2248 $655.79")],-1)),O=$(()=>t("button",{class:"my-balance__button"},"Donate",-1));function P(e,n){const o=x("RouterLink");return a(),s("div",L,[R,t("div",j,[E,b(o,{to:{name:"donate"}},{default:C(()=>[O]),_:1})])])}const V=p(D,[["render",P],["__scopeId","data-v-fef46dc8"]]),M=e=>(w("data-v-4ac882ea"),e=e(),k(),e),z={class:"wallet-nav__name"},H=M(()=>t("img",{class:"wallet-nav__img mobile",src:I,alt:""},null,-1)),Q=T({__name:"WalletNav",props:{name:{type:String,required:!0},to:{type:String,required:!0},active:{type:Boolean,required:!0}},setup(e){const n=S(),o=l=>{window.innerWidth<850&&A.push(l),n.toggleWalletTab(l)};return(l,_)=>(a(),s("button",{class:h(["wallet-nav",e.active?"wallet-nav--active":""]),onClick:_[0]||(_[0]=c=>o(e.to))},[t("h2",z,y(e.name),1),H],2))}});const Y=p(Q,[["__scopeId","data-v-4ac882ea"]]);const G={class:"wallet-table"},J={class:"wallet-table__row wallet-table__header"},K={class:"wallet-table__row wallet-table__data"},U=["src"],X=T({__name:"Table",props:{headers:{type:Object,required:!0},data:{type:Object,required:!0},image:{type:String,required:!0}},setup(e){return(n,o)=>(a(),s("table",G,[t("tr",J,[(a(!0),s(i,null,r(e.headers,(l,_)=>(a(),s("th",{class:h(["wallet-table__item wallet-table__title",_===0?"wallet-table__item--first":""])},y(l),3))),256))]),(a(!0),s(i,null,r(e.data,l=>(a(),s("tr",K,[(a(!0),s(i,null,r(l,(_,c)=>(a(),s("td",{class:h(["wallet-table__item",[c===0?"wallet-table__item--first":"",_==="Close"?"wallet-table__item--operation":""]])},[c===0?(a(),s("img",{key:0,class:"wallet-table__img",src:e.image,alt:""},null,8,U)):f("",!0),t("span",null,y(_),1)],2))),256))]))),256))]))}});const Z=p(X,[["__scopeId","data-v-9b9b03e3"]]),m=e=>(w("data-v-17de3f10"),e=e(),k(),e),ee={class:"page page-wallet"},te=m(()=>t("h2",{class:"page-wallet__block-title"},"My wallet",-1)),ae=m(()=>t("div",{class:"page-wallet__line mobile"},null,-1)),se={class:"page-wallet__navs"},le={class:"page-wallet__dynamic desktop"},_e=m(()=>t("h2",{class:"page-wallet__block-title page-wallet__block-title--next"},"My collection",-1)),ne=m(()=>t("div",{class:"page-wallet__line mobile"},null,-1)),ce={class:"page-wallet__nft-list"},oe=T({__name:"Wallet",setup(e){const n=S(),{walletNavigation:o}=N(n),l=v([""]),_=v([[""]]),c=v("");return F(()=>{n.getActiveTab()==="Fix Staiking"&&(l.value=["Token","Total amount","Total amount","Date of subscription","Blocking period","Blocking period","Accrual days","Accrual days"],_.value=[["Binance","0.14956800","17.34%","17.34%","30 days","2021-03-24","0 days","0.000005680"],["Binance","0.14956800","17.34%","17.34%","30 days","2021-03-24","0 days","0.000005680"]],c.value="/svg/binance.svg"),n.getActiveTab()==="DeFi Staiking"&&(l.value=["Floating rate deposits","Total amount","Accrual of interest","Subscriptions today","To be received","Aggregate interest","Return on investment in 7 days","Operation"],_.value=[["1INCH","0.14956800","0.14956800","0.000000","0.000000","0.00341241","3.29%","Close"]],c.value="")}),(ie,re)=>(a(),s("div",ee,[te,ae,b(V,{class:"page-wallet__balance-card"}),t("div",se,[(a(!0),s(i,null,r(u(o),d=>(a(),g(Y,{name:d.name,to:d.to,active:d.active,class:"page-wallet__nav"},null,8,["name","to","active"]))),256))]),t("div",le,[u(n).getActiveTab()==="Fix Staiking"||u(n).getActiveTab()==="DeFi Staiking"?(a(),g(Z,{key:0,headers:l.value,data:_.value,image:c.value},null,8,["headers","data","image"])):f("",!0),u(n).getActiveTab()==="Launchpad"?(a(),g(q,{key:1})):f("",!0)]),_e,ne,t("div",ce,[(a(),s(i,null,r(4,d=>b(W)),64))])]))}});const pe=p(oe,[["__scopeId","data-v-17de3f10"]]);export{pe as default};
