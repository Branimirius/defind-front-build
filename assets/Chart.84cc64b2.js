import{C as n,p as y,r as m}from"./chart.af4f2849.js";import{d as C,k as w,l as S,o as k,a as r,c,F as x,r as B,n as v,h as d,t as h,A as _,p as A,i as F,_ as D}from"./index.56545538.js";const R=i=>(A("data-v-4f8b2ba4"),i=i(),F(),i),z={class:"creative-studio-chart"},I={key:0,class:"options"},O=["onClick"],N={class:"first"},P={class:"title"},Q={class:"value"},V={key:0,class:"stats"},W=R(()=>d("canvas",{id:"myChart"},null,-1)),E=[W],H=C({__name:"Chart",props:{isOptions:{type:Boolean,default:!0},options:{type:Array}},setup(i){const b=i;w();const a=S({optionsReactive:b.options,label:"New views",data:[0,250,300,750,200,180,50,1e3,1300,1500]}),g=async l=>{var t;let o=n.getChart("myChart");o&&(o.destroy(),u()),a.optionsReactive&&a.optionsReactive.map(e=>{e.id===l?e.active=!0:e.active=!1}),(t=a.optionsReactive)==null||t.map(e=>{e.active&&e.id===0&&(a.label="New views",a.data=[0,250,300,750,200,180,50,1e3,1300,1500]),e.active&&e.id===1&&(a.label="Average Views",a.data=[0,1250,245,234,987,453,1267,345,1111,235]),e.active&&e.id===2&&(a.label="Subscribers",a.data=[0,800,100,0,1200,1300,1400,300,200,1500])})},u=()=>{n.register(y,...m),n.defaults.color="white",n.defaults.font.family="Qanelas",n.defaults.font.weight="600",n.defaults.font.size=16;const l=document.getElementById("myChart");l&&new n(l,{type:"line",data:{labels:["","8 Sep 2022","9 Sep 2022","10 Sep 2022","11 Sep 2022","12 Sep 2022","13 Sep 2022","14 Sep 2022","15 Sep 2022"],datasets:[{borderColor:"#B14DFF",data:a.data,pointBorderColor:"#D7A4FF",pointBackgroundColor:"black",pointBorderWidth:0,hoverBorderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hoverRadius:4.5}},hover:{intersect:!0},scales:{y:{min:0,max:1500,ticks:{stepSize:500},border:{display:!0,color:"rgba(212, 157, 255, 0.6)",width:1}},x:{border:{display:!0,color:"rgba(212, 157, 255, 0.6)",width:1}}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:o=>"+"+o[0].raw,label:o=>a.label},caretPadding:7,yAlign:"bottom",displayColors:!1,padding:{top:1,bottom:3,left:21,right:21},backgroundColor:"#B14DFF",titleColor:"white",titleFont:{family:"Qanelas",lineHeight:"140%",size:20,weight:"500"},titleAlign:"center",titleMarginBottom:-5,bodyFont:{family:"Qanelas",size:12,weight:"400",lineHeight:"140%"},bodyAlign:"center"}}},plugins:[{id:"CustomPlugin",beforeDraw:o=>{var e,f;let t=o;if((f=(e=t.tooltip)==null?void 0:e._active)!=null&&f.length){const s=o.ctx,p=t.tooltip._active[0];s.save(),s.setLineDash([5]),s.beginPath(),s.moveTo(p.element.x,t.chartArea.bottom),s.lineTo(p.element.x,p.element.y),s.lineWidth=2,s.lineDashOffset=40,s.strokeStyle="rgba(255, 255, 255, 0.2)",s.stroke(),s.restore()}}}]})};return k(()=>{u()}),(l,o)=>(r(),c("div",z,[i.isOptions?(r(),c("div",I,[(r(!0),c(x,null,B(a.optionsReactive,t=>(r(),c("button",{class:v(["option",[{"option--active":t.active},{"option-last":t.id===0}]]),onClick:e=>g(t.id)},[d("div",N,[d("h2",P,h(t.title),1),d("span",Q,h(t.value),1)]),t.stats?(r(),c("span",V,h(t.stats),1)):_("",!0)],10,O))),256))])):_("",!0),d("div",{class:v(["chart",{"chart--full-radius":!i.isOptions}])},E,2)]))}});const T=D(H,[["__scopeId","data-v-4f8b2ba4"]]);export{T as C};
