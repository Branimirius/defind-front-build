import{f as V,d as m,a as i,c as t,h as a,F as N,r as G,n as v,t as s,A as P,g as E,e as o,p as k,i as Z,_ as f,k as x,q as z,v as b,w as B,x as F,y as M}from"./index.6a291319.js";const w=V({id:"gameStanding",state:()=>[{playerID:0,participant:"Mr. Niceguy",matches:5,time:"12:47",deaths:0,isPastWinner:!1},{playerID:1,participant:"Mr. Niceguy",matches:2,time:"12:47",deaths:4,isPastWinner:!1},{playerID:2,participant:"Mr. Niceguy",matches:6,time:"12:47",deaths:13,isPastWinner:!1},{playerID:3,participant:"Mr. Niceguy",matches:7,time:"12:48",deaths:23,isPastWinner:!0},{playerID:4,participant:"Mr. Niceguy",matches:5,time:"12:48",deaths:3,isPastWinner:!1},{playerID:5,participant:"Mr. Niceguy",matches:5,time:"12:48",deaths:0,isPastWinner:!1},{playerID:6,participant:"Mr. Niceguy",matches:5,time:"12:48",deaths:0,isPastWinner:!1}],actions:{addAPlayer(e){this.$state=[...this.$state,e]}}}),d="data:image/png;base64,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",Q=e=>(k("data-v-85975af9"),e=e(),Z(),e),U={class:"standing"},C=o('<div class="standing__title" data-v-85975af9><h2 class="standing__title__text" data-v-85975af9>Standings</h2></div><div class="standing__table-title" data-v-85975af9><div class="standing__table-title__el" data-v-85975af9>\u2116</div><div class="standing__table-title__el participant" data-v-85975af9>Participant</div><div class="standing__table-title__el" data-v-85975af9>Matches</div><div class="standing__table-title__el" data-v-85975af9>Time</div><div class="standing__table-title__el" data-v-85975af9>Deaths</div></div>',2),D={class:"standing__table"},O={class:"standing__table__row__el"},W={class:"standing__table__row__el participant"},S=Q(()=>a("img",{src:d,alt:"img",class:"standing__table__row__el__player-img"},null,-1)),Y={class:"standing__table__row__el__text"},H={class:"standing__table__row__el__text__player-name"},R={key:0,class:"standing__table__row__el__text__past-winner"},T={class:"standing__table__row__el"},j={class:"standing__table__row__el"},J={class:"standing__table__row__el"},L=m({__name:"GameStanding",setup(e){const n=w(),p=1234;return(c,g)=>(i(),t("div",U,[C,a("div",D,[(i(!0),t(N,null,G(E(n).$state,(_,r)=>(i(),t("div",{class:v(["standing__table__row",{you:_.playerID===p}])},[a("div",O,s(r+1),1),a("div",W,[S,a("div",Y,[a("span",H,s(_.participant),1),_.isPastWinner?(i(),t("span",R,"Past winner")):P("",!0)])]),a("div",T,s(_.matches),1),a("div",j,s(_.time),1),a("div",J,s(_.deaths),1)],2))),256))])]))}});const q=f(L,[["__scopeId","data-v-85975af9"]]),X={key:0,class:"price-pool"},K=o('<p class="price-pool__winner" data-v-3b098087>Winners</p><div class="price-pool__box" data-v-3b098087><div class="price-pool__box__el" data-v-3b098087><div class="price-pool__box__el__wrapper" data-v-3b098087><div class="price-pool__box__el__wrapper__place" data-v-3b098087><div class="price-pool__box__el__wrapper__place__position" data-v-3b098087><span class="price-pool__box__el__wrapper__place__position__number" data-v-3b098087>1</span><span class="price-pool__box__el__wrapper__place__position__text" data-v-3b098087>st</span></div><span class="price-pool__box__el__wrapper__place__descr" data-v-3b098087>place</span></div><img src="'+d+'" alt="img" class="price-pool__box__el__wrapper__place__img" data-v-3b098087><div class="price-pool__box__el__wrapper__place__info" data-v-3b098087><span class="price-pool__box__el__wrapper__place__info__name" data-v-3b098087>Mr. Niceguy</span><span class="price-pool__box__el__wrapper__place__info__prize" data-v-3b098087>Prize</span><span class="price-pool__box__el__wrapper__place__info__money" data-v-3b098087>$ 1000</span></div></div></div><div class="price-pool__box__el" data-v-3b098087><div class="price-pool__box__el__wrapper" data-v-3b098087><div class="price-pool__box__el__wrapper__place" data-v-3b098087><div class="price-pool__box__el__wrapper__place__position" data-v-3b098087><span class="price-pool__box__el__wrapper__place__position__number" data-v-3b098087>2</span><span class="price-pool__box__el__wrapper__place__position__text" data-v-3b098087>nd</span></div><span class="price-pool__box__el__wrapper__place__descr" data-v-3b098087>place</span></div><img src="'+d+'" alt="img" class="price-pool__box__el__wrapper__place__img" data-v-3b098087><div class="price-pool__box__el__wrapper__place__info" data-v-3b098087><span class="price-pool__box__el__wrapper__place__info__name" data-v-3b098087>Mr. Niceguy</span><span class="price-pool__box__el__wrapper__place__info__prize" data-v-3b098087>Prize</span><span class="price-pool__box__el__wrapper__place__info__money" data-v-3b098087>$ 5000</span></div></div></div><div class="price-pool__box__el win" data-v-3b098087><div class="price-pool__box__el__wrapper" data-v-3b098087><div class="price-pool__box__el__wrapper__place" data-v-3b098087><div class="price-pool__box__el__wrapper__place__position" data-v-3b098087><span class="price-pool__box__el__wrapper__place__position__number" data-v-3b098087>3</span><span class="price-pool__box__el__wrapper__place__position__text" data-v-3b098087>rd</span></div><span class="price-pool__box__el__wrapper__place__descr" data-v-3b098087>place</span></div><img src="'+d+'" alt="img" class="price-pool__box__el__wrapper__place__img" data-v-3b098087><div class="price-pool__box__el__wrapper__place__info" data-v-3b098087><span class="price-pool__box__el__wrapper__place__info__name" data-v-3b098087>Karnaval</span><span class="price-pool__box__el__wrapper__place__info__prize" data-v-3b098087>Prize</span><span class="price-pool__box__el__wrapper__place__info__money" data-v-3b098087>$ 100</span></div></div></div></div>',2),$=[K],aa={key:1,class:"price-pool"},_a=o('<p class="price-pool__winner dummy" data-v-3b098087>Winners</p><div class="price-pool__box" data-v-3b098087><div class="price-pool__box__el" data-v-3b098087><span class="price-pool__box__el__title" data-v-3b098087>Prize for 1st place</span><span class="price-pool__box__el__money" data-v-3b098087>$ 1000</span></div><div class="price-pool__box__el" data-v-3b098087><span class="price-pool__box__el__title" data-v-3b098087>Prize for 2nd place</span><span class="price-pool__box__el__money" data-v-3b098087>$ 500</span></div><div class="price-pool__box__el" data-v-3b098087><span class="price-pool__box__el__title" data-v-3b098087>Prize for 3rd place</span><span class="price-pool__box__el__money" data-v-3b098087>$ 100</span></div></div>',2),ea=[_a],sa=m({__name:"PricePool",props:["isGameFinished"],setup(e){const n=e;return(p,c)=>n.isGameFinished?(i(),t("div",X,$)):(i(),t("div",aa,ea))}});const ia=f(sa,[["__scopeId","data-v-3b098087"]]),ta={class:"page page-game"},na={class:"page-game__info desktop"},oa={class:"page-game__info__bg"},pa={class:"inner-container-banner"},la={class:"page-game__info__header"},da=o('<span class="page-game__info__header__time" data-v-da5fb8f9>15 September - start at 16:00</span><h1 class="page-game__info__header__name title-primary" data-v-da5fb8f9>name game</h1><div class="page-game__info__header__info" data-v-da5fb8f9><div class="page-game__info__header__info__el" data-v-da5fb8f9><span class="page-game__info__header__info__el__title" data-v-da5fb8f9>Rules:</span><span class="page-game__info__header__info__el__descr" data-v-da5fb8f9>Description of the rules</span></div><div class="page-game__info__header__info__el" data-v-da5fb8f9><span class="page-game__info__header__info__el__title" data-v-da5fb8f9>Time:</span><span class="page-game__info__header__info__el__descr" data-v-da5fb8f9>70 min</span></div><div class="page-game__info__header__info__el" data-v-da5fb8f9><span class="page-game__info__header__info__el__title" data-v-da5fb8f9>Matches:</span><span class="page-game__info__header__info__el__descr" data-v-da5fb8f9>1</span></div><div class="page-game__info__header__info__el" data-v-da5fb8f9><span class="page-game__info__header__info__el__title" data-v-da5fb8f9>Participants:</span><span class="page-game__info__header__info__el__descr" data-v-da5fb8f9>126</span></div></div>',3),ca={class:"page-game__info-mobile mobile"},ra={class:"page-game__info-mobile__bg"},ba={class:"inner-container-banner"},va={class:"page-game__info-mobile__header"},ma=o('<span class="page-game__info-mobile__header__time" data-v-da5fb8f9>15 September - start at 16:00</span><h1 class="page-game__info-mobile__header__name title-primary" data-v-da5fb8f9>name game</h1><div class="page-game__info-mobile__header__info" data-v-da5fb8f9><div class="page-game__info-mobile__header__info__el" data-v-da5fb8f9><span class="page-game__info-mobile__header__info__el__title" data-v-da5fb8f9>Rules:</span><span class="page-game__info-mobile__header__info__el__descr" data-v-da5fb8f9>Description of the rules</span></div><div class="page-game__info-mobile__header__info__el" data-v-da5fb8f9><span class="page-game__info-mobile__header__info__el__title" data-v-da5fb8f9>Time:</span><span class="page-game__info-mobile__header__info__el__descr" data-v-da5fb8f9>70 min</span></div><div class="page-game__info-mobile__header__info__el" data-v-da5fb8f9><span class="page-game__info-mobile__header__info__el__title" data-v-da5fb8f9>Matches:</span><span class="page-game__info-mobile__header__info__el__descr" data-v-da5fb8f9>1</span></div><div class="page-game__info-mobile__header__info__el" data-v-da5fb8f9><span class="page-game__info-mobile__header__info__el__title" data-v-da5fb8f9>Participants:</span><span class="page-game__info-mobile__header__info__el__descr" data-v-da5fb8f9>126</span></div></div>',3),fa={class:"inner-container"},ga={class:"page-game__price-pool"},ha={class:"page-game__standing"},ua=m({__name:"TournamentsGamePage",setup(e){M(A=>({"550a9c48":n,"7fe6e05e":p,ff074cc4:c,"4869a85a":g}));const n=1920,p=830,c=375,g=716,_=x(!1),r=w(),h=()=>{_.value=!0,r.addAPlayer({playerID:1234,participant:"Karnaval",matches:5,time:"12:49",deaths:0,isPastWinner:!1}),u.value=!0},u=x(!1);return(A,l)=>{const y=z("router-link");return i(),t("div",ta,[a("section",na,[a("div",oa,[a("div",pa,[a("div",la,[b(y,{class:"page-game__info__header__back-button",to:"/tournaments"},{default:B(()=>[F("Back")]),_:1}),da,a("button",{id:"join-game-button",onClick:l[0]||(l[0]=I=>h()),class:v([{active:_.value},"page-game__info__header__join-button btn-purple"]),to:"/tournaments/game/1"},s(_.value?"You have joined":"Join"),3)])])])]),a("section",ca,[a("div",ra,[a("div",ba,[a("div",va,[ma,a("button",{id:"join-game-button",onClick:l[1]||(l[1]=I=>h()),class:v([{active:_.value},"page-game__info-mobile__header__join-button btn-purple"]),to:"/tournaments/game/1"},s(_.value?"You have joined":"Join"),3)])])])]),a("div",fa,[a("section",ga,[b(ia,{isGameFinished:u.value},null,8,["isGameFinished"])]),a("section",ha,[b(q)])])])}}});const wa=f(ua,[["__scopeId","data-v-da5fb8f9"]]);export{wa as default};
