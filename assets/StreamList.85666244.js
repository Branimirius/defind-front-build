import{f as L,d as S,s as I,a as _,c as d,F as b,r as y,n as R,g as h,t as f,_ as B,h as e,p as N,i as x,j as $,k,l as A,o as X,m as T,q as W,v as l,w as H,x as U,R as V,C as D,y as q}from"./index.56545538.js";const z="/assets/mainMoble.4c8cbc66.png",F="/assets/mainDesktop.9c24f12e.png",G=L({id:"blognewsStore",state:()=>({activeBroadcastid:0,broadcastNames:["WEB 3.0","UIX design","Develop"]}),actions:{setActiveBroadCastid(t){this.$state.activeBroadcastid=t}}}),M={class:"blognews-switcher"},P=["onClick"],j=S({__name:"Switcher",setup(t){const o=G(),{activeBroadcastid:m,broadcastNames:g}=I(o);return(u,E)=>(_(),d("div",M,[(_(!0),d(b,null,y(h(g),(p,r)=>(_(),d("button",{class:R(["blognews-switcher__button",h(m)===r?"blognews-switcher__button--active":""]),onClick:C=>h(o).setActiveBroadCastid(r)},f(p),11,P))),256))]))}});const J=B(j,[["__scopeId","data-v-9a49ace2"]]),O=t=>(N("data-v-84ad1841"),t=t(),x(),t),Y={class:"topic-user"},K=["src"],Q={class:"topic-user__content"},Z={class:"topic-user__name"},ee={class:"topic-user__comment"},te=O(()=>e("button",{class:"topic-user__subscribe"},"Subscribe",-1)),se=S({__name:"TopicUser",props:{image:{type:String,required:!0},name:{type:String,required:!0},comment:{type:String,required:!0}},setup(t){const o=t;return(m,g)=>(_(),d("div",Y,[e("img",{class:"topic-user__img",src:o.image,alt:""},null,8,K),e("div",Q,[e("h1",Z,f(o.name),1),e("h1",ee,f(o.comment),1),te])]))}});const w=B(se,[["__scopeId","data-v-84ad1841"]]),i=t=>(N("data-v-84838824"),t=t(),x(),t),oe={class:"page blog-news-main"},ne=i(()=>e("img",{class:"blog-news-main__logo mobile",src:z,alt:""},null,-1)),ie=i(()=>e("img",{class:"blog-news-main__logo desktop",src:F,alt:""},null,-1)),ae={class:"blog-news-main__header"},ce=i(()=>e("h1",{class:"blog-news-main__title"},"Vebinar",-1)),le=i(()=>e("span",{class:"blog-news-main__desc"},"designers for designers",-1)),_e={class:"inner-container"},de=i(()=>e("h2",{class:"blog-news-main__live-title"},"Live broadcast",-1)),re={class:"blog-news-main__broadcasts"},me={class:"blog-news-main__live"},ge=i(()=>e("div",{class:"blog-news-main__switcher--fake desktop",style:{height:"1px"}},null,-1)),pe={class:"blog-news-main__top"},he={class:"blog-news-main__related-videos"},ue=i(()=>e("button",{class:"blog-news-main__see-more mobile"},"(3) See more videos",-1)),ve={class:"blog-news-main__posts"},we={class:"blog-news-main__post-list"},be=i(()=>e("h2",{class:"blog-news-main__posts-title mobile"},"Posts",-1)),ye={class:"blog-news-main__comments"},fe={class:"blog-news-main__topic desktop"},Se=i(()=>e("span",{class:"blog-news-main__topic-notif"},"Here's what we have on the topic",-1)),Be=i(()=>e("span",{class:"blog-news-main__topic-title"},"Similar Blogers",-1)),Ee={class:"blog-news-main__topic-users"},Ce=S({__name:"StreamList",setup(t){q(s=>({"8852edb6":p.screenWidth}));const o=$(),{videoInfo:m}=I(o),g="epA_8nN1y4I",u="JMN7Xx4POJE",E=k(""),p=A({screenWidth:0}),r=()=>{p.screenWidth=window.innerWidth;let s=document.getElementsByClassName("blog-news-main__live-title")[0];s&&(E.value=s.getBoundingClientRect().left+"px")},C=s=>{let a=document.getElementsByClassName("blog-news-main__broadcasts")[0];if(a){let n=a.getBoundingClientRect().top,v=document.getElementsByClassName("blog-news-main__switcher"),c=Array.from(v);console.log(n<c[0].getBoundingClientRect().top),innerHeight-c[0].getBoundingClientRect().top-c[0].getBoundingClientRect().height>0&&n<c[0].getBoundingClientRect().top?(c[0].style.position="fixed",c[0].style.bottom="11rem"):(c[0].style.position="relative",c[0].style.bottom="0rem")}};return(()=>{let s=document.getElementsByTagName("html"),a=document.getElementsByTagName("body"),n=document.getElementById("app");s[0]&&a[0]&&n&&(s[0].style.overflowX="unset",a[0].style.overflowX="unset",n.style.overflowX="unset")})(),X(()=>{r(),window.addEventListener("resize",r),o.getVideoInfo(g),o.getVideoInfo(u)}),T(()=>{let s=document.getElementsByTagName("html"),a=document.getElementsByTagName("body"),n=document.getElementById("app");s[0]&&a[0]&&n&&(s[0].style.overflowX="hidden",a[0].style.overflowX="hidden",n.style.overflowX="hidden"),window.removeEventListener("resize",r),window.removeEventListener("scroll",C)}),(s,a)=>{const n=W("router-link");return _(),d("div",oe,[ne,ie,e("div",ae,[ce,le,l(n,{to:"/streamPage",class:"blog-news-main__join"},{default:H(()=>[U("December 12 at 12.00")]),_:1})]),e("div",_e,[de,e("div",re,[e("div",me,[l(J,{class:"blog-news-main__switcher"}),ge]),e("div",pe,[e("div",he,[(_(),d(b,null,y(5,v=>l(V,{videoId:u,videoInfo:h(m)},null,8,["videoInfo"])),64)),ue]),e("div",ve,[e("div",we,[be,e("div",ye,[(_(),d(b,null,y(3,v=>l(D)),64))])]),e("div",fe,[Se,Be,e("div",Ee,[l(w,{image:"/img/GameCommentUser.png",name:"RESHALA HELEX",comment:"What the call? In love with a money"}),l(w,{image:"/img/GameCommentUser.png",name:"RESHALA HELEX",comment:"What the call? In love with a money"}),l(w,{image:"/img/GameCommentUser.png",name:"RESHALA HELEX",comment:"What the call? In love with a money"})])])])])])])])}}});const Ne=B(Ce,[["__scopeId","data-v-84838824"]]);export{Ne as default};
