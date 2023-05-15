import{d as g,r as q,a as x,c as $,b as l,e as k,f as U,o as i,g as m,h as t,i as u,w as p,v as c,t as d,j as b,k as S,l as B,m as E,p as V,n as C,_ as N,q as I}from"./index.9ce13a47.js";const h=f=>(V("data-v-3cd02aa2"),f=f(),C(),f),K={class:"register-wrap"},R=["onSubmit"],T=h(()=>t("img",{class:"logo-auth",src:N},null,-1)),z={class:"form-container"},A={key:0,class:"form-input-hint"},D={key:1,class:"form-input-hint"},M={key:2,class:"form-input-hint"},j={key:3,class:"form-input-hint"},G={key:4,class:"form-input-hint"},O={id:"error"},F={class:"form-footer"},H=h(()=>t("button",{class:"small-btn"},"Already have an account? Sign in!",-1)),J=g({__name:"Register",setup(f){const w=q(""),r=x({name:"",username:"",password:"",confirmPass:"",email:""}),a={name:"",username:"",email:"",password:"",confirmPass:""},v=$().shape({name:l().min(4,"Name must contain at least 4 characters.").max(16,"Name should not exceed 16 characters.").required("Name is required."),username:l().min(4,"Username must contain at least 4 characters.").max(16,"Username should not exceed 16 characters.").required("Username is required."),password:l().min(8,"Password must contain at least 8 characters.").max(16,"Password should not exceed 16 characters.").required("Password is required."),email:l().email("Invalid email address.").required("Email is required."),confirmPass:l().oneOf([k("password")],"Passwords must match").required("Confirm password is required.")}),_=()=>{a.name="",a.email="",a.password="",a.confirmPass=""},y=async()=>{v.validate(r,{abortEarly:!1}).then(async()=>{_();try{let o="http://ec2-3-126-130-133.eu-central-1.compute.amazonaws.com/users";const e=await E.post("http://ec2-3-126-130-133.eu-central-1.compute.amazonaws.com/users",{username:r.username,password:r.password,name:r.name,email:r.email})}catch(o){w.value=o.response.data.message,setTimeout(()=>{w.value=""},2500)}}).catch(o=>{o.inner.forEach(e=>{a[e.path]=e.message})})},n=o=>{v.validateAt(o,r).then(()=>a[o]="").catch(e=>{a[o]=e.message})};return(o,e)=>{const P=U("router-link");return i(),m("div",K,[t("form",{class:"register-form",action:"/",method:"post",onSubmit:B(y,["prevent"])},[T,t("div",z,[a.name?(i(),m("p",A,d(a.name),1)):u("",!0),p(t("input",{type:"text",placeholder:"Name",id:"name",name:"name","onUpdate:modelValue":e[0]||(e[0]=s=>r.name=s),onBlur:e[1]||(e[1]=s=>n("name")),onKeypress:e[2]||(e[2]=s=>n("name")),required:""},null,544),[[c,r.name]]),a.username?(i(),m("p",D,d(a.username),1)):u("",!0),p(t("input",{type:"text",placeholder:"Username",id:"username",name:"username","onUpdate:modelValue":e[3]||(e[3]=s=>r.username=s),onBlur:e[4]||(e[4]=s=>n("username")),onKeypress:e[5]||(e[5]=s=>n("username")),required:""},null,544),[[c,r.username]]),a.password?(i(),m("p",M,d(a.password),1)):u("",!0),p(t("input",{type:"password",id:"password",placeholder:"Password",name:"password","onUpdate:modelValue":e[6]||(e[6]=s=>r.password=s),onBlur:e[7]||(e[7]=s=>n("password")),onKeypress:e[8]||(e[8]=s=>n("password")),required:""},null,544),[[c,r.password]]),a.confirmPass?(i(),m("p",j,d(a.confirmPass),1)):u("",!0),p(t("input",{type:"password",id:"confirmPass",placeholder:"Confirm Password",name:"confirmPass","onUpdate:modelValue":e[9]||(e[9]=s=>r.confirmPass=s),onBlur:e[10]||(e[10]=s=>n("confirmPass")),onKeypress:e[11]||(e[11]=s=>n("confirmPass")),required:""},null,544),[[c,r.confirmPass]]),a.email?(i(),m("p",G,d(a.email),1)):u("",!0),p(t("input",{type:"text",placeholder:"E-mail",id:"email",name:"email","onUpdate:modelValue":e[12]||(e[12]=s=>r.email=s),onBlur:e[13]||(e[13]=s=>n("email")),onKeypress:e[14]||(e[14]=s=>n("email")),required:""},null,544),[[c,r.email]]),t("p",O,d(w.value),1),t("button",{type:"submit",onClick:e[15]||(e[15]=s=>y())},"REGISTER")]),t("div",F,[b(P,{to:"/login",class:"profile-banner-container"},{default:S(()=>[H]),_:1})])],40,R)])}}});const Q=I(J,[["__scopeId","data-v-3cd02aa2"]]);export{Q as default};
