import{d as A,A as G,ag as P,r as _,C as j,ak as k,al as S,E as C,o as a,f as l,g as t,F as d,x as p,$ as v,G as x,p as w,k as B,l as F}from"./index.933b938d.js";import{S as m}from"./Steps.af82c7aa.js";const f=o=>(w("data-v-9b3c9ad2"),o=o(),B(),o),I={class:"page page-joinGuild"},O={class:"inner-container"},V={class:"page-joinGuild__header"},$=f(()=>t("h1",{class:"page-joinGuild__header__title"},"Apply to join the course",-1)),R=f(()=>t("span",{class:"page-joinGuild__header__text"},"Follow the simple 4 steps to start learning",-1)),y={class:"page-joinGuild__content"},E={class:"page-joinGuild__content__steps desktop"},J={class:"page-joinGuild__content__steps__mobile mobile"},X={class:"page-joinGuild__content__box"},N=A({__name:"JoinCoursePage",setup(o){G(e=>({"5a420ab4":u.value}));const i=P(),u=_(`translateX(${0}rem)`);j(()=>{r()});const r=()=>{n.value.forEach(e=>{e.isActive=!1,(i.fullPath.includes("One")&&e.number==="1"||i.fullPath.includes("Two")&&e.number==="2"||i.fullPath.includes("Three")&&e.number==="3"||i.fullPath.includes("Four")&&e.number==="4"||i.fullPath.includes("Five")&&e.number==="5")&&(e.isActive=!0),e.isActive===!0&&e.number==="1"?u.value=`translateX(${0}rem)`:e.isActive===!0&&(u.value=`translateX(${-19+-22.572*(parseInt(e.number,10)-2)}rem)`)})};k(i,e=>{e.fullPath.includes("step")&&r()});const b=S(),h=()=>{b.go(-1)},n=_([{title:"Course",number:"1",isActive:!1},{title:"Personal Details",number:"2",isActive:!1},{title:"Purpose",number:"3",isActive:!1},{title:"Wallet",number:"4",isActive:!1}]);return(e,c)=>{const g=C("RouterView");return a(),l("div",I,[t("div",O,[t("div",V,[t("button",{class:"page-joinGuild__header__back-button",onClick:c[0]||(c[0]=s=>h())},"Back"),$,R]),t("div",y,[t("div",E,[(a(!0),l(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",J,[(a(!0),l(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",X,[x(g)])])])])}}});const L=F(N,[["__scopeId","data-v-9b3c9ad2"]]);export{L as default};
