import{d as A,k as _,o as G,ab as j,q as P,a,c as l,h as t,F as d,r as p,Q as v,v as S,y as k,a9 as x,ac as w,p as B,i as F,_ as I}from"./index.56545538.js";import{S as m}from"./Steps.f618c0d1.js";const f=o=>(B("data-v-4056ce30"),o=o(),F(),o),O={class:"page page-joinGuild"},V={class:"inner-container"},y={class:"page-joinGuild__header"},C=f(()=>t("h1",{class:"page-joinGuild__header__title"},"Apply to join guild",-1)),R=f(()=>t("span",{class:"page-joinGuild__header__text"},"Follow the simple 4 steps to join guild",-1)),$={class:"page-joinGuild__content"},J={class:"page-joinGuild__content__steps desktop"},X={class:"page-joinGuild__content__steps__mobile mobile"},E={class:"page-joinGuild__content__box"},N=A({__name:"JoinGuildPage",setup(o){k(e=>({fb0a2d3e:u.value}));const i=x(),u=_(`translateX(${0}rem)`);G(()=>{c()});const c=()=>{n.value.forEach(e=>{e.isActive=!1,(i.fullPath.includes("One")&&e.number==="1"||i.fullPath.includes("Two")&&e.number==="2"||i.fullPath.includes("Three")&&e.number==="3"||i.fullPath.includes("Four")&&e.number==="4"||i.fullPath.includes("Five")&&e.number==="5")&&(e.isActive=!0),e.isActive===!0&&e.number==="1"?u.value=`translateX(${0}rem)`:e.isActive===!0&&(u.value=`translateX(${-19+-22.572*(parseInt(e.number,10)-2)}rem)`)})};j(i,e=>{e.fullPath.includes("step")&&c()});const h=w(),b=()=>{h.go(-1)},n=_([{title:"Guild",number:"1",isActive:!1},{title:"Purpose",number:"2",isActive:!1},{title:"Assets",number:"3",isActive:!1},{title:"Wallet",number:"4",isActive:!1}]);return(e,r)=>{const g=P("RouterView");return a(),l("div",O,[t("div",V,[t("div",y,[t("button",{class:"page-joinGuild__header__back-button",onClick:r[0]||(r[0]=s=>b())},"Back"),C,R]),t("div",$,[t("div",J,[(a(!0),l(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",X,[(a(!0),l(d,null,p(n.value,s=>(a(),v(m,{title:s.title,number:s.number,isActive:s.isActive,numberOfSteps:n.value.length},null,8,["title","number","isActive","numberOfSteps"]))),256))]),t("div",E,[S(g)])])])])}}});const L=I(N,[["__scopeId","data-v-4056ce30"]]);export{L as default};
