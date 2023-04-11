import{d as k,k as m,o as C,m as V,a as t,c as s,A as c,aj as U,ak as B,al as y,_ as S,h as e,t as x,n as F,Y as L,v as u,w as b,F as N,r as E,U as M,Q as R,a2 as T,p as P,i as q,e as I,a5 as K}from"./index.78d9275d.js";const O="/assets/img.99a21709.svg",Y="/assets/video.fbc14ec1.svg",j=["onDrop","onDragenter","onDragleave"],A={key:0,class:"input",type:"file",name:"",id:"",accept:"image/*"},z={key:1,class:"input",type:"file",name:"",id:"",accept:"video/mp4, video/mov"},Q=["src"],G=["src"],H=k({__name:"FileUploader",props:{type:{type:String,required:!0}},emits:["upload"],setup(l,{emit:i}){const r=l,a=m(),n=["dragenter","dragleave","dragover","drop"],p=m(!1);C(()=>{n.forEach(o=>window.addEventListener(o,_=>_.preventDefault))}),V(()=>{n.forEach(o=>window.removeEventListener(o,_=>_.preventDefault))});const h=o=>{var w;const _=(w=o.dataTransfer)==null?void 0:w.files,g=new FileReader;g.readAsDataURL(_[0]),g.onload=()=>a.value=g.result},v=()=>{p.value=!0},D=()=>{p.value=!1};return(o,_)=>(t(),s("div",B(o.$attrs,{class:["file-uploader",{dragging:p.value}],onDrop:y(h,["prevent"]),onDragenter:y(v,["prevent"]),onDragleave:y(D,["prevent"])}),[r.type==="Image"?(t(),s("input",A)):c("",!0),r.type==="Video"?(t(),s("input",z)):c("",!0),U(o.$slots,"default",{},void 0,!0),r.type==="Image"&&a.value?(t(),s("img",{key:2,class:"image",src:a.value,alt:""},null,8,Q)):c("",!0),r.type==="Video"&&a.value?(t(),s("video",{key:3,class:"image",src:a.value,alt:""},null,8,G)):c("",!0)],16,j))}});const $=S(H,[["__scopeId","data-v-d8acb211"]]),J={class:"text"},W={key:0,class:"options"},X=["onClick"],Z=k({__name:"Select",props:{options:{type:Object,required:!0},isStream:{type:Boolean,reqired:!1}},emits:["pickedSteam"],setup(l,{emit:i}){const a=m(l.options[0]),n=m(!1),p=()=>{n.value=!n.value},h=v=>{if(a.value=v,a.value==="Stream"){i("pickedSteam",!0);return}i("pickedSteam",!1)};return(v,D)=>(t(),s("button",{class:"upload-select",onClick:p},[e("span",J,x(a.value),1),e("img",{class:F(["arrow",{"arrow--open":n.value}]),src:L,alt:""},null,2),u(M,null,{default:b(()=>[n.value?(t(),s("div",W,[(t(!0),s(N,null,E(l.options,o=>(t(),s("button",{class:"option",onClick:_=>h(o)},x(o),9,X))),256))])):c("",!0)]),_:1})]))}});const f=S(Z,[["__scopeId","data-v-576e969c"]]),d=l=>(P("data-v-41444627"),l=l(),q(),l),ee={class:"page page-upload"},te={class:"inner-container"},se=d(()=>e("span",{class:"name"},"Step 1",-1)),ae=d(()=>e("h2",{class:"title"},"content Uploading",-1)),oe={class:"main"},ne={class:"block"},le=d(()=>e("div",{class:"image"},[e("img",{class:"upload__img",src:O,alt:""}),e("span",{class:"upload__text"},"Drop your file")],-1)),ie=d(()=>e("div",{class:"video"},[e("img",{class:"upload__img",src:Y,alt:""}),e("span",{class:"upload__text"},"Drag the files here or click the button below to select them on your computer.")],-1)),ce={class:"block block--second"},de=d(()=>e("div",{class:"item"},[e("label",{class:"main__name"},"Name"),e("input",{class:"input"})],-1)),re={class:"item"},_e=d(()=>e("label",{class:"main__name"},"Choose type content",-1)),pe=d(()=>e("div",{class:"block"},[e("div",{class:"item"},[e("label",{class:"main__name"},"Description"),e("textarea",{class:"input textarea",placeholder:"You can write something"})])],-1)),ue={key:0,class:"block"},me=I('<div class="item" data-v-41444627><label class="main__name" data-v-41444627>Streaming Key</label><input class="input" placeholder="Defoult stream key (RTMP)" data-v-41444627></div><div class="item" data-v-41444627><label class="main__name" data-v-41444627>Streaming Key</label><div class="input input--password" data-v-41444627><input class="input-password--text" type="password" placeholder="Defoult stream key (RTMP)" data-v-41444627><img class="password-icon" src="'+K+'" alt="" data-v-41444627></div></div>',2),ve=[me],he={key:1,class:"block"},ge=I('<div class="item" data-v-41444627><label class="main__name" data-v-41444627>Backup URL</label><input class="input" placeholder="rtmp://x.rtmp.youtube.com.live2" data-v-41444627></div><div class="item" data-v-41444627><label class="main__name" data-v-41444627>Streaming Key</label><input class="input" placeholder="rtmp://x.rtmp.youtube.com.live2" data-v-41444627></div>',2),ye=[ge],fe={key:2,class:"block"},be={class:"item"},ke=d(()=>e("label",{class:"main__name"},"Stream delay",-1)),Se={class:"item"},De=d(()=>e("label",{class:"main__name"},"Choose type content",-1)),we=k({__name:"Index",setup(l){const i=m(!1),r=n=>{i.value=n},a=()=>{T.push({name:"verification"})};return(n,p)=>(t(),s("div",ee,[e("div",te,[se,ae,e("div",oe,[e("div",ne,[u($,{class:"item upload",type:"Image"},{default:b(()=>[le]),_:1}),i.value?c("",!0):(t(),R($,{key:0,class:"item upload",type:"Video"},{default:b(()=>[ie]),_:1}))]),e("div",ce,[de,e("div",re,[_e,u(f,{options:["Video","Stream"],onPickedSteam:r})])]),pe,i.value?(t(),s("div",ue,ve)):c("",!0),i.value?(t(),s("div",he,ye)):c("",!0),i.value?(t(),s("div",fe,[e("div",be,[ke,u(f,{options:["Low","Default","Minimal"],isStream:!0})]),e("div",Se,[De,u(f,{options:["Twitch","Youtube"],isStream:!0})])])):c("",!0),e("button",{class:"button",onClick:a},"Next step")])])]))}});const $e=S(we,[["__scopeId","data-v-41444627"]]);export{$e as default};
