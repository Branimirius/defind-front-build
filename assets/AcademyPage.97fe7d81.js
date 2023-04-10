import{d as u,k as f,a as c,c as _,h as a,F as g,r as b,n as p,t as o,_ as x,q as w,v as S,Q as m,w as y,A as h,af as T,e as C,p as H,i as B,x as v}from"./index.56545538.js";const E="/assets/academy.27782180.png",D={class:"filters"},$={class:"filters"},O=["onClick"],W=u({__name:"AcademyFilters",setup(d){const i=f([{id:0,name:"All",checkedStatus:!0},{id:1,name:"Web 3.0",checkedStatus:!1},{id:2,name:"Gamer",checkedStatus:!1},{id:3,name:"Creator",checkedStatus:!1},{id:4,name:"Trader",checkedStatus:!1}]),l=r=>{i.value.forEach(s=>{s.id===r?s.checkedStatus=!0:s.checkedStatus=!1})};return(r,s)=>(c(),_("div",D,[a("div",$,[(c(!0),_(g,null,b(i.value,(t,n)=>(c(),_("button",{class:p(["filters__el btn",{active:t.checkedStatus}]),onClick:e=>l(t.id),key:n},o(t.name),11,O))),128))])]))}});const F=x(W,[["__scopeId","data-v-f64d8236"]]),k=d=>(H("data-v-7b275f33"),d=d(),B(),d),P={class:"page page-academy"},I=C('<div class="page-academy__banner" data-v-7b275f33><div class="inner-container-banner" data-v-7b275f33><h2 class="page-academy__banner__title title-primary" data-v-7b275f33>defind.io</h2><img src="'+E+'" alt="Academy" class="page-academy__banner__img" data-v-7b275f33><p class="page-academy__banner__descr desktop" data-v-7b275f33>The goal of the Defind academy is to develop, organize and share world-class<br data-v-7b275f33> educational content on Web 3.0 and blockchain-related topics by making it easily<br data-v-7b275f33> accessible to the community. Defind Academy is the first of many steps to achieve our<br data-v-7b275f33> goal of building an equitable value-based society.</p><p class="page-academy__banner__descr mobile" data-v-7b275f33>The goal of the Defind academy is to<br data-v-7b275f33> develop, organize and share world-class<br data-v-7b275f33> educational content on Web 3.0 and<br data-v-7b275f33> blockchain-related topics by making it<br data-v-7b275f33> easily accessible to the community. Defind<br data-v-7b275f33> Academy is the first of many steps to<br data-v-7b275f33> achieve our goal of building an equitable<br data-v-7b275f33> value-based society.</p></div></div>',1),N={class:"inner-container"},V={class:"page-academy__content"},z={class:"page-academy__content__info"},G=k(()=>a("h3",{class:"page-academy__content__info__title title-primary desktop"},[v("Avaible"),a("br"),v("coursers")],-1)),M=k(()=>a("h3",{class:"page-academy__content__info__title title-primary mobile"},"Avaible coursers",-1)),q={class:"page-academy__content__info__filters"},L={class:"page-academy__content__box desktop"},Q={class:"page-academy__content__box__scroll"},X=["src"],j=["src"],J=["src"],K={class:"page-academy__content__box__card__wrapper"},R={class:"page-academy__content__box__card__type"},U={class:"page-academy__content__box__card__date"},Y={class:"page-academy__content__box__card__name"},Z={class:"page-academy__content__box__card__info"},ee={class:"page-academy__content__mobile-box mobile"},ae={class:"page-academy__content__box"},te=["src"],se=["src"],ne=["src"],ce={class:"page-academy__content__box__card__wrapper"},oe={class:"page-academy__content__box__card__type"},_e={class:"page-academy__content__box__card__date"},ie={class:"page-academy__content__box__card__name"},de={class:"page-academy__content__box__card__info"},re=u({__name:"AcademyPage",setup(d){const i=f([{position:0,name:"Creatives Training",type:"Creator",class:"creator",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/img/Academy/creator-bg.png",img:"/img/Academy/creator-img.png",light:"",link:"/courses/creativeTraining",isHover:!1},{position:1,name:"GamePlay Training",type:"Gamer",class:"gamer",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/svg/Academy/gamer-background.svg",img:"/img/Academy/gamer-img.png",light:"",link:"/courses/gameplayTraining",isHover:!1},{position:2,name:"Web 3.0 Basics",type:"Web 3.0",class:"web3-basic",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/img/Academy/web3-basic-bg.png",img:"/img/Academy/web3-basic-img.png",light:"/svg/Academy/web3-basic-light.svg",link:"/courses/web3Basics",isHover:!1},{position:3,name:`Web 3.0
 Developer`,type:"Web 3.0",class:"web3-developer",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/img/Academy/web3-developer-bg.png",img:"/img/Academy/web3-developer-img.png",light:"",link:"/courses/web3Developer",isHover:!1},{position:4,name:"Trading Bacics",type:"Trader",class:"trader",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/img/Academy/trader-bg.png",img:"/img/Academy/trader-img.png",light:"",link:"/courses/tradingBasics",isHover:!1},{position:5,name:"GameDev Training",type:"Trader",class:"trader",date:"September - October",text:`The training will be provided
 based on the games incubated
 by Earn.`,bg:"/img/Academy/trader-bg.png",img:"/img/Academy/gamedev-img.png",light:"",link:"/courses/tradingBasics",isHover:!1}]),l=(s,t)=>{t||i.value.forEach(n=>{n.position>s?n.position--:n.position===s&&(n.isHover=!n.isHover)})},r=s=>{i.value.forEach(t=>{t.position>=s?t.isHover===!1?t.position++:t.isHover=!1:t.position=t.position})};return(s,t)=>{const n=w("router-link");return c(),_("div",P,[I,a("div",N,[a("div",V,[a("div",z,[G,M,a("div",q,[S(F)])]),a("div",L,[a("div",Q,[(c(!0),_(g,null,b(i.value,e=>(c(),m(n,{to:e.link,class:"page-academy__content__box__card",onMouseover:A=>l(e.position,e.isHover),onMouseleave:A=>r(e.position),style:T({transform:`translateX(${-25.8*e.position}rem)`})},{default:y(()=>[a("img",{src:e.bg,alt:"",class:p(["page-academy__content__box__card__bg",e.class])},null,10,X),e.light.length>0?(c(),_("img",{key:0,src:e.light,alt:"",class:"page-academy__content__box__card__bg light"},null,8,j)):h("",!0),a("img",{src:e.img,alt:"img",class:"page-academy__content__box__card__img"},null,8,J),a("div",K,[a("span",R,o(e.type),1),a("span",U,o(e.date),1),a("span",Y,o(e.name),1),a("p",Z,o(e.text),1)])]),_:2},1032,["to","onMouseover","onMouseleave","style"]))),256))])]),a("div",ee,[a("div",ae,[(c(!0),_(g,null,b(i.value,e=>(c(),m(n,{to:e.link,class:"page-academy__content__box__card"},{default:y(()=>[a("img",{src:e.bg,alt:"",class:p(["page-academy__content__box__card__bg",e.class])},null,10,te),e.light.length>0?(c(),_("img",{key:0,src:e.light,alt:"",class:"page-academy__content__box__card__bg light"},null,8,se)):h("",!0),a("img",{src:e.img,alt:"img",class:"page-academy__content__box__card__img"},null,8,ne),a("div",ce,[a("span",oe,o(e.type),1),a("span",_e,o(e.date),1),a("span",ie,o(e.name),1),a("p",de,o(e.text),1)])]),_:2},1032,["to"]))),256))])])])])])}}});const ge=x(re,[["__scopeId","data-v-7b275f33"]]);export{ge as default};
