import{d as p,a as i,c as o,h as s,t as m,A as _,_ as u,k as b,v as a,e as h,p as g,i as f}from"./index.56545538.js";const y="/assets/telegram.20c258ec.svg",k="/assets/twitter.42da5b96.svg",I="/assets/facebook.4866a7cc.svg",S={class:"creative-studio-input"},x={class:"label"},B={key:0,class:"input"},w={key:1,class:"input textarea",placeholder:"You can write something"},C=p({__name:"Input",props:{name:{type:String,required:!0},isInput:{type:Boolean,default:!0}},setup(t){return(c,r)=>(i(),o("div",S,[s("label",x,m(t.name),1),t.isInput?(i(),o("input",B)):_("",!0),t.isInput?_("",!0):(i(),o("textarea",w))]))}});const e=u(C,[["__scopeId","data-v-07d106e9"]]),l=t=>(g("data-v-48db3230"),t=t(),f(),t),N={class:"page page-profile-settings"},$=l(()=>s("h2",{class:"title"},"Basic information",-1)),D={class:"main"},V={class:"left-holder"},F=l(()=>s("div",{class:"line mobile"},null,-1)),P={class:"left"},R={class:"img-container"},U=["src"],A=l(()=>s("span",{class:"replace"},"Replace",-1)),T=l(()=>s("div",{class:"line mobile"},null,-1)),q={class:"right"},E={class:"block"},G={class:"block"},L=h('<div class="social" data-v-48db3230><h2 class="title" data-v-48db3230>Social network</h2><div class="social-list" data-v-48db3230><div class="social-item" data-v-48db3230><div class="social-left" data-v-48db3230><img class="social-img" src="'+y+'" alt="" data-v-48db3230><h2 class="social-title" data-v-48db3230>Telegram</h2></div><button class="social-button" data-v-48db3230>Bind</button></div><div class="line desktop" data-v-48db3230></div><div class="social-item" data-v-48db3230><div class="social-left" data-v-48db3230><img class="social-img" src="'+k+'" alt="" data-v-48db3230><h2 class="social-title" data-v-48db3230>Twitter</h2></div><button class="social-button" data-v-48db3230>Bind</button></div><div class="line desktop" data-v-48db3230></div><div class="social-item" data-v-48db3230><div class="social-left" data-v-48db3230><img class="social-img" src="'+I+'" alt="" data-v-48db3230><h2 class="social-title" data-v-48db3230>Facebook</h2></div><button class="social-button" data-v-48db3230>Bind</button></div></div></div>',1),Y=p({__name:"ProfileSettings",setup(t){const c=b("/img/GameCommentUser.png"),r=v=>{const d=v.target;if(d&&d.files){const n=new FileReader;n.readAsDataURL(d.files[0]),n.onload=()=>c.value=n.result}};return(v,d)=>(i(),o("div",N,[$,s("div",D,[s("div",V,[F,s("button",P,[s("div",R,[c.value?(i(),o("img",{key:0,class:"img",src:c.value,alt:""},null,8,U)):_("",!0)]),A,s("input",{type:"file",class:"choose-img",onChange:r},null,32)]),T]),s("div",q,[s("div",E,[a(e,{name:"Name"}),a(e,{name:"Display name"})]),s("div",G,[a(e,{name:"Country"}),a(e,{name:"City"})]),a(e,{name:"Description",isInput:!1})])]),L]))}});const z=u(Y,[["__scopeId","data-v-48db3230"]]);export{z as default};
