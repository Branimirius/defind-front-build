import{d as u,r as j,o as s,g as p,F as b,C as I,D as h,t as V,q as v,f as T,h as e,j as d,k as g,x as m,M as r,p as A,n as k,a5 as Y}from"./index.9ce13a47.js";const C="/assets/projectPage-img.80f43a44.png",P={class:"filters"},F=["onClick"],E=u({__name:"LaunchpadFilters",setup(t){const o=j([{id:0,name:"Currency1 Pool",checkedStatus:!0},{id:1,name:"Currency2 Pool",checkedStatus:!1},{id:2,name:"Currency3 Pool",checkedStatus:!1}]),l=_=>{o.value.forEach(a=>{a.id===_?a.checkedStatus=!0:a.checkedStatus=!1})};return(_,a)=>(s(),p("div",P,[(s(!0),p(b,null,I(o.value,(n,i)=>(s(),p("button",{class:h(["filters__el btn",{picked:n.checkedStatus}]),onClick:x=>l(n.id),key:i},V(n.name),11,F))),128))]))}});const f=v(E,[["__scopeId","data-v-72f1248c"]]),S="data:image/png;base64,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",c=t=>(A("data-v-0148dbeb"),t=t(),k(),t),U={class:"popup__content"},M={class:"popup__content__wrapper"},R=r('<h2 class="popup__content__title" data-v-0148dbeb>Invest in the project</h2><div class="popup__content__project-name" data-v-0148dbeb><div class="popup__content__project-name__img" data-v-0148dbeb><img src="'+S+'" alt="project-img" class="popup__content__project-name__img__inside" data-v-0148dbeb></div><span class="popup__content__project-name__text" data-v-0148dbeb>Project Name</span></div><div class="popup__content__info" data-v-0148dbeb><div class="popup__content__info__el" data-v-0148dbeb><span class="popup__content__info__el__text" data-v-0148dbeb>Max commntment limit</span><span class="popup__content__info__el__number" data-v-0148dbeb>1000</span></div><div class="popup__content__info__el" data-v-0148dbeb><span class="popup__content__info__el__text" data-v-0148dbeb>Spot wallet balance</span><span class="popup__content__info__el__number" data-v-0148dbeb>1907</span></div></div><div class="popup__content__amount" data-v-0148dbeb><span class="popup__content__amount__title" data-v-0148dbeb>Amount</span><div class="popup__content__amount__input-box" data-v-0148dbeb><input placeholder="Enter amount" type="number" class="popup__content__amount__input-box__input" data-v-0148dbeb><button class="popup__content__amount__input-box__max-button" data-v-0148dbeb>MAX</button></div></div>',4),w={class:"popup__content__agree desktop"},y=c(()=>e("input",{id:"checkbox",type:"checkbox",class:"popup__content__agree__input"},null,-1)),X=c(()=>e("label",{for:"checkbox",class:"popup__content__agree__input__label"},null,-1)),G={class:"popup__content__agree__el"},B=c(()=>e("span",{class:"popup__content__agree__el__text"},"I read it(a) and agree to the Finance Betting\xA0",-1)),N={class:"popup__content__buttons desktop"},Q=c(()=>e("button",{class:"popup__content__buttons__confirm btn-purple"},"\u0421onfirm",-1)),W={class:"popup__content__buttons mobile"},H={class:"popup__content__agree mobile"},J=c(()=>e("input",{id:"checkbox-mobile",type:"checkbox",class:"popup__content__agree__input"},null,-1)),Z=c(()=>e("label",{for:"checkbox-mobile",class:"popup__content__agree__input__label"},null,-1)),K={class:"popup__content__agree__el"},L=c(()=>e("span",{class:"popup__content__agree__el__text"},"I read it(a) and agree to the Finance Betting\xA0",-1)),D=c(()=>e("button",{class:"popup__content__buttons__confirm btn-purple"},"\u0421onfirm",-1)),O=u({__name:"Popup",props:["handler"],setup(t){const o=t;return(l,_)=>{const a=T("router-link");return s(),p(b,null,[e("div",{class:"popup__overlay",onClick:_[0]||(_[0]=n=>o.handler.handleOpenPopup())}),e("div",U,[e("div",M,[R,e("div",w,[y,X,e("div",G,[B,d(a,{to:"#",class:"popup__content__agree__el__link"},{default:g(()=>[m("Service Agreement")]),_:1})])]),e("div",N,[e("button",{onClick:_[1]||(_[1]=n=>o.handler.handleOpenPopup()),class:"popup__content__buttons__cancel"},"Cancel"),Q]),e("div",W,[e("div",H,[J,Z,e("div",K,[L,d(a,{to:"#",class:"popup__content__agree__el__link"},{default:g(()=>[m("Service Agreement")]),_:1})])]),e("button",{onClick:_[2]||(_[2]=n=>o.handler.handleOpenPopup()),class:"popup__content__buttons__cancel"},"Cancel"),D])])])],64)}}});const z=v(O,[["__scopeId","data-v-0148dbeb"]]),q=t=>(A("data-v-77f4cd51"),t=t(),k(),t),$={class:"page page-project"},ee={class:"inner-container"},_e={class:"page-project__header"},te=q(()=>e("img",{src:C,alt:"Card-Img",class:"page-project__header__img"},null,-1)),ae=r('<div class="page-project__header__descr__title" data-v-77f4cd51><span class="page-project__header__descr__title__name" data-v-77f4cd51>Project Name</span><span class="page-project__header__descr__title__end-time" data-v-77f4cd51>End time 2022-05-29</span></div><p class="page-project__header__descr__text" data-v-77f4cd51>Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button class="page-project__header__descr__learn-more-button" data-v-77f4cd51>Learn more</button>',3),oe=r('<div class="page-project__header__info" data-v-77f4cd51><div class="page-project__header__info__el" data-v-77f4cd51><span class="page-project__header__info__el__title" data-v-77f4cd51>Participants:</span><span class="page-project__header__info__el__title" data-v-77f4cd51>Total staked:</span></div><div class="page-project__header__info__el numbers" data-v-77f4cd51><span class="page-project__header__info__el__number" data-v-77f4cd51>124 890</span><span class="page-project__header__info__el__number" data-v-77f4cd51>7 985 905</span></div></div>',1),ce={class:"page-project__filters mobile"},ne={class:"page-project__filters desktop"},se=r('<section class="page-project__content desktop" data-v-77f4cd51><div class="page-project__content__column" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Total Rewards</span><span class="page-project__content__column__el__text" data-v-77f4cd51>7 985 905</span></div><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Total Staked</span><span class="page-project__content__column__el__text" data-v-77f4cd51>9 985 905</span></div></div><div class="page-project__content__column" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Staking Token</span><span class="page-project__content__column__el__text" data-v-77f4cd51>Token</span></div><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Annual Percentage Yield</span><span class="page-project__content__column__el__text" data-v-77f4cd51>2,5 %</span></div></div><div class="page-project__content__column" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Today\u2019s Pool Rewards</span><span class="page-project__content__column__el__text" data-v-77f4cd51>585 905</span></div></div></section><section class="page-project__content mobile" data-v-77f4cd51><div class="page-project__content__column" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Annual Percentage Yield</span><span class="page-project__content__column__el__text" data-v-77f4cd51>2,5 %</span></div><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Today\u2019s Pool Rewards</span><span class="page-project__content__column__el__text" data-v-77f4cd51>585 905</span></div></div><div class="page-project__content__column" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Total Staked</span><span class="page-project__content__column__el__text" data-v-77f4cd51>9 985 905</span></div><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Staking Token</span><span class="page-project__content__column__el__text" data-v-77f4cd51>Token</span></div></div><div class="page-project__content__column bottom" data-v-77f4cd51><div class="page-project__content__column__el" data-v-77f4cd51><span class="page-project__content__column__el__title" data-v-77f4cd51>Total Rewards</span><span class="page-project__content__column__el__text" data-v-77f4cd51>7 985 905</span></div></div></section><section class="page-project__footer" data-v-77f4cd51><div class="page-project__footer__column" data-v-77f4cd51><div class="page-project__footer__column__el" data-v-77f4cd51><span class="page-project__footer__column__el__title" data-v-77f4cd51>My Funds</span><span class="page-project__footer__column__el__text" data-v-77f4cd51>16 203</span></div></div><div class="page-project__footer__column" data-v-77f4cd51><div class="page-project__footer__column__el" data-v-77f4cd51><span class="page-project__footer__column__el__title" data-v-77f4cd51>My Rewards</span><div class="page-project__footer__column__el__text-box" data-v-77f4cd51><span class="page-project__footer__column__el__text" data-v-77f4cd51>97 809</span><span class="page-project__footer__column__el__text-box__small" data-v-77f4cd51>The rewards have been sent to your wallet</span></div></div></div><div class="page-project__footer__column desktop" data-v-77f4cd51></div></section>',3),pe=u({__name:"ProjectPage",setup(t){const o=Y(),l=()=>{o.go(-1)},_=j(!1),a=()=>{_.value=!_.value};return(n,i)=>(s(),p("div",$,[e("div",ee,[e("button",{class:"page-project__back-button",onClick:i[0]||(i[0]=x=>l())},"Back"),e("section",_e,[te,e("div",{class:"page-project__header__descr"},[ae,e("button",{onClick:a,class:"page-project__header__descr__invest-button btn-purple desktop"},"Invest now")]),oe,e("button",{onClick:a,class:"page-project__header__descr__invest-button btn-purple mobile"},"Invest now"),e("div",ce,[d(f)])]),e("section",ne,[d(f)]),se]),e("div",{class:h(["page-project__popup",{closed:!_.value}])},[d(z,{handler:{handleOpenPopup:a}},null,8,["handler"])],2)]))}});const le=v(pe,[["__scopeId","data-v-77f4cd51"]]);export{le as default};
