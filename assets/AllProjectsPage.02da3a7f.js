import{P as g}from"./ProjectCard.03d7c0c3.js";import{d as p,r as h,H as b,I as w,o as l,f as r,g as t,C as i,an as f,p as _,k as v,L as P,l as u,m as k,n,q as C,x as j,F as x,B as I}from"./index.5f171296.js";const S=a=>(_("data-v-9da9d830"),a=a(),v(),a),y={class:"sort-container desktop"},E=S(()=>t("span",{class:"current-sort"},"Sort by",-1)),D=P('<li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Recently created</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Recently sold</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Recently received</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Ending soon</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Price low to high</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Price high to low</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Highest last sale</span><div class="circle-container" data-v-9da9d830></div></button></li><li class="item" data-v-9da9d830><button class="parameter" data-v-9da9d830><span data-v-9da9d830>Oldest</span><div class="circle-container" data-v-9da9d830></div></button></li>',8),B=[D],L=p({__name:"SortDropdown",setup(a){const s=h(!1),e=()=>{s.value=!1},o=()=>{s.value?e():s.value=!0},c=d=>{s.value&&((d==null?void 0:d.target).closest(".sort-container")||e())};return b(()=>{window.addEventListener("click",c)}),w(()=>{window.removeEventListener("click",c)}),(d,m)=>(l(),r("div",y,[t("button",{onClick:o,class:"sort-dropdown-opener"},[E,t("img",{class:i([{"arrow-active":s.value},"arrow"]),src:f,alt:""},null,2)]),t("div",{class:i([{closed:!s.value},"dropdown sort-dropdown"])},[t("ul",{onClick:e,class:"list"},B)],2)]))}});const $=u(L,[["__scopeId","data-v-9da9d830"]]),N=a=>(_("data-v-fe8c92a8"),a=a(),v(),a),V={class:"page page-allProjects"},A={class:"inner-container"},R=N(()=>t("h1",{class:"page-allProjects__title"},"Earn Project",-1)),F={class:"page-allProjects__dropdown"},H={class:"page-allProjects__box"},O=p({__name:"AllProjectsPage",setup(a){return(s,e)=>{const o=k("router-link");return l(),r("div",V,[t("div",A,[n(o,{class:"page-allProjects__back-button",to:"/Launchpad"},{default:C(()=>[j("Back")]),_:1}),R,t("div",F,[n($)]),t("div",H,[(l(),r(x,null,I(9,c=>n(g)),64))])])])}}});const T=u(O,[["__scopeId","data-v-fe8c92a8"]]);export{T as default};
