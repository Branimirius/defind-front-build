import{_ as m,q as v,a as _,Q as b,w as p,h as e,v as i,x as k,p as S,i as x,d as u,k as T,c,F as g,r as f,n as $,t as y,e as C,y as B}from"./index.56545538.js";const N="/assets/game-icon.ce2b9877.png",F="/assets/game-icon-mobile.dd9293d5.png";const I={},r=s=>(S("data-v-5d2feaf8"),s=s(),x(),s),G=r(()=>e("img",{src:N,alt:"game-icon",class:"game-card__img desktop"},null,-1)),V=r(()=>e("img",{src:F,alt:"game-icon",class:"game-card__img mobile"},null,-1)),w=r(()=>e("div",{class:"game-card__wrapper"},[e("span",{class:"game-card__time"},"20 September - start at 16:00 "),e("strong",{class:"game-card__game-name"},"Tournament\u2019s name "),e("div",{class:"game-card__info"},[e("div",{class:"game-card__info__el"},[e("span",{class:"game-card__info__el__title"},"Matches"),e("span",{class:"game-card__info__el__descr"},"1")]),e("div",{class:"game-card__info__el"},[e("span",{class:"game-card__info__el__title"},"Time"),e("span",{class:"game-card__info__el__descr"},"70 min")]),e("div",{class:"game-card__info__el"},[e("span",{class:"game-card__info__el__title"},"Participants"),e("span",{class:"game-card__info__el__descr"},"126")])])],-1)),P={class:"game-card__footer"},q=r(()=>e("div",{class:"game-card__footer__info"},[e("span",{class:"game-card__footer__info__title"},"1st place prize"),e("span",{class:"game-card__footer__info__descr"},"$ 1000")],-1));function L(s,n){const t=v("router-link");return _(),b(t,{to:"/tournaments/game/1",class:"game-card"},{default:p(()=>[G,V,w,e("div",P,[q,i(t,{to:"/tournaments/game/1",class:"game-card__footer__join-button btn-purple"},{default:p(()=>[k("Join")]),_:1})])]),_:1})}const M=m(I,[["render",L],["__scopeId","data-v-5d2feaf8"]]),z={class:"filters"},E=["onClick"],H=u({__name:"GameFilters",setup(s){const n=T([{id:0,name:"All games",checkedStatus:!0},{id:1,name:"Name of the game",checkedStatus:!1},{id:2,name:"Name of the game",checkedStatus:!1},{id:3,name:"Name of the game",checkedStatus:!1},{id:4,name:"Name of the game",checkedStatus:!1}]),t=d=>{n.value.forEach(a=>{a.id===d?a.checkedStatus=!a.checkedStatus:a.checkedStatus=!1})};return(d,a)=>(_(),c("div",z,[(_(!0),c(g,null,f(n.value,(o,l)=>(_(),c("button",{class:$(["filters__el btn",{picked:o.checkedStatus}]),onClick:h=>t(o.id),key:l},y(o.name),11,E))),128))]))}});const W=m(H,[["__scopeId","data-v-c28bfd8a"]]),j={class:"page page-tournaments"},A=C('<section class="page-tournaments__promo desktop" data-v-81dd6382><div class="inner-container-banner" data-v-81dd6382><div class="page-tournaments__promo__header" data-v-81dd6382><h1 class="page-tournaments__promo__header__title" data-v-81dd6382>Tournaments</h1><p class="page-tournaments__promo__header__descr" data-v-81dd6382>Tournaments description Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br data-v-81dd6382>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div></section><section class="page-tournaments__promo-mobile mobile" data-v-81dd6382><div class="inner-container-banner" data-v-81dd6382><div class="page-tournaments__promo-mobile__header" data-v-81dd6382><h1 class="page-tournaments__promo-mobile__header__title" data-v-81dd6382>Tournaments</h1><p class="page-tournaments__promo-mobile__header__descr" data-v-81dd6382>Tournaments description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div></section>',2),D={class:"inner-container"},J={class:"page-tournaments__game-list"},Q={class:"page-tournaments__game-list__filter"},K={class:"page-tournaments__game-list__box"},O=u({__name:"TournamentsPage",setup(s){B(o=>({f9e4d47a:n,"7653ae6c":t,"1ad87445":d,e61b33e8:a}));const n=1920,t=830,d=375,a=570;return(o,l)=>(_(),c("div",j,[A,e("div",D,[e("section",J,[e("div",Q,[i(W)]),e("div",K,[(_(),c(g,null,f(4,h=>i(M)),64))])])])]))}});const U=m(O,[["__scopeId","data-v-81dd6382"]]);export{U as default};
