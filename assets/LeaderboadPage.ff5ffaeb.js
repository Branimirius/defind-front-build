import{d as l,al as h,C as f,r as m,o,f as d,F as k,x as v,y as S,t as b,l as u,E as g,g as s,G as i,p as L,k as y}from"./index.5316d525.js";const C={class:"filters"},x=["onClick"],F=l({__name:"Filters",setup(t){const _=h();f(()=>{c.value.forEach(e=>{_.currentRoute.value.fullPath.includes(e.name.toLocaleLowerCase())?e.checkedStatus=!e.checkedStatus:e.checkedStatus=!1})});const c=m([{id:0,name:"Profile",checkedStatus:!1},{id:1,name:"Statistics",checkedStatus:!1},{id:2,name:"Guild",checkedStatus:!1},{id:3,name:"NFT",checkedStatus:!1},{id:4,name:"Achivements",checkedStatus:!1}]),r=e=>{c.value.forEach(a=>{a.id===e?(_.push(a.name.toLocaleLowerCase()),a.checkedStatus=!a.checkedStatus):a.checkedStatus=!1})};return(e,a)=>(o(),d("div",C,[(o(!0),d(k,null,v(c.value,(n,p)=>(o(),d("button",{class:S(["filters__el btn",{picked:n.checkedStatus}]),onClick:G=>r(n.id),key:p},b(n.name),11,x))),128))]))}});const w=u(F,[["__scopeId","data-v-fef230f7"]]),I=t=>(L("data-v-150cab17"),t=t(),y(),t),P={class:"page page-leaderboard"},E={class:"inner-container"},R={class:"page-leaderboard__header"},V=I(()=>s("h2",{class:"page-leaderboard__header__title primary-title"},"Leaderboard",-1)),$={class:"page-leaderboard__header__filters"},B={class:"page-leaderboard__content"},N=l({__name:"LeaderboadPage",setup(t){return(_,c)=>{const r=g("RouterView");return o(),d("div",P,[s("div",E,[s("header",R,[V,s("div",$,[i(w)])]),s("section",B,[i(r)])])])}}});const A=u(N,[["__scopeId","data-v-150cab17"]]);export{A as default};
