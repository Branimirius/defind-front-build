import{d as c,o as _,f as i,g as s,t as o,y as a,h as n,F as p,p as r,k as l,l as m}from"./index.5316d525.js";const d=t=>(r("data-v-6082f282"),t=t(),l(),t),u={class:"step__title"},b={class:"step__number title-primary"},h={class:"step__number__text"},v=d(()=>s("div",{class:"step__img"},null,-1)),f={class:"step__title"},S={class:"step__number title-primary"},y={class:"step__number__text"},g={key:0,class:"step__img"},k={key:1,class:"step__img__mobile"},x={key:0,class:"hr"},O=c({__name:"Steps",props:["title","number","isActive","numberOfSteps"],setup(t){const e=t;return(I,N)=>(_(),i(p,null,[s("div",{class:a(["step desktop",{active:e.isActive}])},[s("span",u,o(e.title),1),s("div",b,[s("span",h,o(e.number),1)]),v],2),s("div",{class:a(["step__mobile mobile",{active:e.isActive}])},[s("span",f,o(e.title),1),s("div",S,[s("span",y,o(e.number),1)]),e.number!==JSON.stringify(t.numberOfSteps)?(_(),i("div",g)):n("",!0),e.number!=="1"?(_(),i("div",k)):n("",!0)],2),e.number!==JSON.stringify(t.numberOfSteps)?(_(),i("hr",x)):n("",!0)],64))}});const B=m(O,[["__scopeId","data-v-6082f282"]]);export{B as S};
