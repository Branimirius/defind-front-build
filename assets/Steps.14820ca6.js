import{d as c,a as _,c as i,h as s,t as n,n as o,A as a,F as p,p as r,i as l,_ as m}from"./index.3ec8a10c.js";const d=t=>(r("data-v-6082f282"),t=t(),l(),t),u={class:"step__title"},b={class:"step__number title-primary"},h={class:"step__number__text"},v=d(()=>s("div",{class:"step__img"},null,-1)),S={class:"step__title"},f={class:"step__number title-primary"},y={class:"step__number__text"},g={key:0,class:"step__img"},k={key:1,class:"step__img__mobile"},x={key:0,class:"hr"},O=c({__name:"Steps",props:["title","number","isActive","numberOfSteps"],setup(t){const e=t;return(A,I)=>(_(),i(p,null,[s("div",{class:o(["step desktop",{active:e.isActive}])},[s("span",u,n(e.title),1),s("div",b,[s("span",h,n(e.number),1)]),v],2),s("div",{class:o(["step__mobile mobile",{active:e.isActive}])},[s("span",S,n(e.title),1),s("div",f,[s("span",y,n(e.number),1)]),e.number!==JSON.stringify(t.numberOfSteps)?(_(),i("div",g)):a("",!0),e.number!=="1"?(_(),i("div",k)):a("",!0)],2),e.number!==JSON.stringify(t.numberOfSteps)?(_(),i("hr",x)):a("",!0)],64))}});const B=m(O,[["__scopeId","data-v-6082f282"]]);export{B as S};
