import{d as x,k as C,a,c as _,h as n,t as c,aa as u,A as s,F as k,p as E,i as N,_ as I}from"./index.b8937978.js";const t=h=>(E("data-v-d4ac46de"),h=h(),N(),h),K={class:"myProfile desktop"},B={class:"myProfile__el name"},M={class:"myProfile__el__img-box"},$={for:"pic-input",class:"myProfile__el__img-box__img"},R=["src"],S=t(()=>n("label",{class:"myProfile__el__img-box__button btn",for:"pic-input"},"Replace",-1)),V={class:"myProfile__box"},w={class:"myProfile__el"},A={class:"myProfile__el__name-change-box"},F={key:0,class:"myProfile__el__name-change-box__text"},L=["value","onKeyup"],U=t(()=>n("span",{class:"myProfile__el__status"},"Ambassador",-1)),j={class:"myProfile__el"},D=t(()=>n("span",{class:"myProfile__el__title"},"Email",-1)),O={key:0,class:"myProfile__el__info"},T=["value","onKeyup"],q={class:"myProfile__el"},z=t(()=>n("span",{class:"myProfile__el__title"},"Phone",-1)),G={key:0,class:"myProfile__el__info"},H=["value","onKeyup"],J={class:"myProfile mobile"},Q={class:"myProfile__box"},W={class:"myProfile__el"},X={for:"pic-input",class:"myProfile__el__img-box__img"},Y=["src"],Z={class:"myProfile__el__mobile"},ee={key:0,class:"myProfile__el__name-change-box__text"},ne=["value","onKeyup"],le={class:"myProfile__el__mobile__box"},oe=t(()=>n("label",{class:"myProfile__el__img-box__button btn",for:"pic-input"},"Replace",-1)),ae={class:"myProfile__el"},_e={class:"myProfile__el__mobile-box"},ie=t(()=>n("span",{class:"myProfile__el__title"},"Email",-1)),se={key:0,class:"myProfile__el__info"},te=["value","onKeyup"],ce={class:"myProfile__el"},ue={class:"myProfile__el__mobile-box"},me=t(()=>n("span",{class:"myProfile__el__title"},"Phone",-1)),he={key:0,class:"myProfile__el__info"},re=["value","onKeyup"],ge=x({__name:"MyProfile",setup(h){const r=C("/img/user/avatar.png"),d=o=>{const l=o.target.files;l&&(r.value=URL.createObjectURL(l[0]))},e=C({name:"Karna.Val",email:"karnaval@info.com",phone:"+ 381 62 987 98 95",isNameChanging:!1,isEmailChanging:!1,isPhoneChanging:!1}),g=o=>{setTimeout(()=>{var l;(l=document.getElementById(o))==null||l.focus()},0)},p=o=>{e.value.isNameChanging=!0,g(o)},y=o=>{e.value.isEmailChanging=!0,g(o)},v=o=>{e.value.isPhoneChanging=!0,g(o)},i=()=>{e.value.isEmailChanging=!1,e.value.isPhoneChanging=!1,e.value.isNameChanging=!1},f=o=>{const l=o.target.value;e.value.name=l},P=o=>{const l=o.target.value;e.value.email=l},b=o=>{const l=o.target.value;e.value.phone=l};return(o,l)=>(a(),_(k,null,[n("div",K,[n("div",B,[n("div",M,[n("label",$,[n("img",{src:r.value,alt:"ProfilePic",class:"myProfile__el__img-box__img"},null,8,R)]),n("input",{onChange:d,id:"pic-input",type:"file"},null,32),S])]),n("div",V,[n("div",w,[n("div",A,[e.value.isNameChanging?e.value.isNameChanging?(a(),_("input",{key:1,value:e.value.name,onInput:f,id:"changeName",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__name-change-box__text"},null,40,L)):s("",!0):(a(),_("span",F,c(e.value.name),1)),e.value.isNameChanging?s("",!0):(a(),_("button",{key:2,onClick:l[0]||(l[0]=m=>p("changeName")),class:"myProfile__el__name-change-box__button"}))]),U]),n("div",j,[D,e.value.isEmailChanging?e.value.isEmailChanging?(a(),_("input",{key:1,value:e.value.email,onInput:P,id:"changeEmail",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__info"},null,40,T)):s("",!0):(a(),_("span",O,c(e.value.email),1)),e.value.isEmailChanging?s("",!0):(a(),_("button",{key:2,onClick:l[1]||(l[1]=m=>y("changeEmail")),class:"myProfile__el__change-button"}))]),n("div",q,[z,e.value.isPhoneChanging?e.value.isPhoneChanging?(a(),_("input",{key:1,value:e.value.phone,onInput:b,id:"changePhone",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__info"},null,40,H)):s("",!0):(a(),_("span",G,c(e.value.phone),1)),e.value.isPhoneChanging?s("",!0):(a(),_("button",{key:2,onClick:l[2]||(l[2]=m=>v("changePhone")),class:"myProfile__el__change-button"}))])])]),n("div",J,[n("div",Q,[n("div",W,[n("label",X,[n("img",{src:r.value,alt:"ProfilePic",class:"myProfile__el__img-box__img"},null,8,Y)]),n("div",Z,[e.value.isNameChanging?e.value.isNameChanging?(a(),_("input",{key:1,value:e.value.name,onInput:f,id:"changeNameMobile",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__name-change-box__text"},null,40,ne)):s("",!0):(a(),_("span",ee,c(e.value.name),1)),n("div",le,[n("button",{onClick:l[3]||(l[3]=m=>p("changeNameMobile")),class:"myProfile__el__name-change-box__button"}),n("input",{onChange:d,id:"pic-input",type:"file"},null,32),oe])])]),n("div",ae,[n("button",{onClick:l[4]||(l[4]=m=>y("changeEmailMobile")),class:"myProfile__el__name-change-box__button"}),n("div",_e,[ie,e.value.isEmailChanging?e.value.isEmailChanging?(a(),_("input",{key:1,value:e.value.email,onInput:P,id:"changeEmailMobile",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__info"},null,40,te)):s("",!0):(a(),_("span",se,c(e.value.email),1))])]),n("div",ce,[n("button",{onClick:l[5]||(l[5]=m=>v("changePhoneMobile")),class:"myProfile__el__name-change-box__button"}),n("div",ue,[me,e.value.isPhoneChanging?e.value.isPhoneChanging?(a(),_("input",{key:1,value:e.value.phone,onInput:b,id:"changePhoneMobile",onBlur:i,onKeyup:u(i,["enter"]),type:"text",class:"myProfile__el__info"},null,40,re)):s("",!0):(a(),_("span",he,c(e.value.phone),1))])])])])],64))}});const pe=I(ge,[["__scopeId","data-v-d4ac46de"]]);export{pe as default};
