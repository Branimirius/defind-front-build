import{d as A,G,ag as j,r as _,I as k,ak as P,al as S,m as x,o as a,f as u,g as t,F as d,C as p,a0 as v,n as w,p as B,k as I,l as C}from"./index.a43653f5.js";import{S as m}from"./Steps.4b3e53b7.js";const f=o=>(B("data-v-4056ce30"),o=o(),I(),o),F={class:"page page-joinGuild"},O={class:"inner-container"},V={class:"page-joinGuild__header"},R=f(()=>t("h1",{class:"page-joinGuild__header__title"},"Apply to join guild",-1)),$=f(()=>t("span",{class:"page-joinGuild__header__text"},"Follow the simple 4 steps to join guild",-1)),y={class:"page-joinGuild__content"},J={class:"page-joinGuild__content__steps desktop"},X={class:"page-joinGuild__content__steps__mobile mobile"},E={class:"page-joinGuild__content__box"},N=A({__name:"JoinGuildPage",setup(o){G(e=>({fb0a2d3e:l.value}));const i=j(),l=_(`translateX(${0}rem)`);k(()=>{c()});const c=()=>{n.value.forEach(e=>{e.isActive=!1,(i.fullPath.includes("One")&&e.number==="1"||i.fullPath.includes("Two")&&e.number==="2"||i.fullPath.includes("Three")&&e.number==="3"||i.fullPath.includes("Four")&&e.number==="4"||i.fullPath.includes("Five")&&e.number==="5")&&(e.isActive=!0),e.isActive===!0&&e.number==="1"?l.value=`translateX(${0}rem)`:e.isActive===!0&&(l.value=`translateX(${-19+-22.572*(parseInt(e.number,10)-2)}rem)`)})};P(i,e=>{e.fullPath.includes("step")&&c()});const h=S(),b=()=>{h.go(-1)},n=_([{title:"Guild",number:"1",isActive:!1},{title:"Purpose",number:"2",isActive:!1},{title:"Assets",number:"3",isActive:!1},{title:"Wallet",number:"4",isActive:!1}]);return(e,r)=>{const g=x("RouterView");return a(),u("div",F,[t("div",O,[t("div",V,[t("button",{class:"page-joinGuild__header__back-button",onClick:r[0]||(r[0]=s=>b())},"Back"),R,$]),t("div",y,[t("div",J,[(a(!0),u(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",X,[(a(!0),u(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",E,[w(g)])])])])}}});const M=C(N,[["__scopeId","data-v-4056ce30"]]);export{M as default};
