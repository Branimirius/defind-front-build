import{d as g,s as F,q as v,a as n,c as l,h as s,F as y,r as C,Q as x,w as p,x as b,t as S,n as $,g as u,e as I,S as V,_ as m,T as B,k as h,o as N,v as r,A as k,U as R,p as T,i as O}from"./index.b8937978.js";import{u as M}from"./creativeStudio.8cc129f0.js";const H={class:"creative-studio-navigation"},L=I('<div class="line mobile" data-v-50aa3057></div><div class="user" data-v-50aa3057><button data-v-50aa3057><img class="img" src="'+V+'" alt="" data-v-50aa3057></button><div class="info" data-v-50aa3057><h2 class="name" data-v-50aa3057>mwoodo</h2><span class="count" data-v-50aa3057>466k subscribers</span></div></div><div class="line line-next mobile" data-v-50aa3057></div>',3),Z={class:"navs"},q=g({__name:"Navigation",emits:["close"],setup(i,{emit:e}){const a=M(),{navigation:t}=F(a),o=d=>{a.toggleTab(d),e("close")};return(d,f)=>{const _=v("RouterLink");return n(),l("div",H,[L,s("div",Z,[(n(!0),l(y,null,C(u(t),c=>(n(),x(_,{class:$(["nav",c.active?"nav-active":""]),to:c.to,onClick:te=>o(c.to)},{default:p(()=>[b(S(c.name),1)]),_:2},1032,["to","class","onClick"]))),256))])])}}});const A=m(q,[["__scopeId","data-v-50aa3057"]]),D={id:"burder",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"16",fill:"none"},W=["id"],z=["id"],E=["id"],Q=g({__name:"Burger",props:{isOpen:{type:Boolean,default:!1,required:!0}},emits:["toggle"],setup(i,{emit:e}){const a=i,{isOpen:t}=B(a),o=h(!1),d=()=>{t.value=!t.value,o.value=!0,e("toggle")};return(f,_)=>(n(),l("button",{class:"burger-component",onClick:d},[(n(),l("svg",D,[s("path",{id:u(t)?"first":o.value?"first-close":"",fill:"#F2F2F2",d:"M0 0h18v2H0V0Zm0"},null,8,W),s("path",{id:u(t)?"second":o.value?"second-close":"",fill:"#F2F2F2",d:"M0 7h18v2H0V7Zm0"},null,8,z),s("path",{id:u(t)?"third":o.value?"third-close":"",fill:"#F2F2F2",d:"M0 14h18v2H0v-2Z"},null,8,E)]))]))}});const U=m(Q,[["__scopeId","data-v-6ef31a29"]]),w=i=>(T("data-v-082922a2"),i=i(),O(),i),j={class:"page page-creative-studio"},G={class:"inner-container"},J={class:"header"},K=w(()=>s("h2",{class:"title"},"creative studio",-1)),P=w(()=>s("div",{class:"line desktop"},null,-1)),X={class:"content"},Y={key:0,class:"navigation-mobile"},ee=g({__name:"Index",setup(i){const e=h(!1),a=h(!1),t=()=>{e.value=!e.value},o=()=>{window.innerWidth<850&&(e.value=!1)};return N(()=>{window.innerWidth>850&&(e.value=!0,a.value=!0)}),(d,f)=>{const _=v("router-link"),c=v("RouterView");return n(),l("div",j,[s("div",G,[s("header",J,[r(U,{class:"mobile",onToggle:t,isOpen:e.value},null,8,["isOpen"]),K,r(_,{to:"/upload",class:"button btn-purple desktop"},{default:p(()=>[b("Add a video")]),_:1})]),P,s("div",X,[r(R,null,{default:p(()=>[e.value?(n(),l("section",Y,[r(A,{onClose:o})])):k("",!0)]),_:1}),a.value||!a.value&&!e.value?(n(),x(c,{key:0})):k("",!0)])])])}}});const oe=m(ee,[["__scopeId","data-v-082922a2"]]);export{oe as default};
