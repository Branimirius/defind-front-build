import{d as P,r as g,a as $,c as q,b as l,e as x,o as i,f as m,g as t,h as u,w as p,v as c,t as d,i as _,j as k,p as U,k as S,_ as b,l as B}from"./index.933b938d.js";const E=f=>(U("data-v-a2c3a128"),f=f(),S(),f),V={class:"register-wrap"},C=["onSubmit"],I=E(()=>t("img",{class:"logo-auth",src:b},null,-1)),N={class:"form-container"},K={key:0,class:"form-input-hint"},R={key:1,class:"form-input-hint"},T={key:2,class:"form-input-hint"},z={key:3,class:"form-input-hint"},A={key:4,class:"form-input-hint"},D={id:"error"},M={class:"form-footer"},j=P({__name:"Register",setup(f){const v=g(""),r=$({name:"",username:"",password:"",confirmPass:"",email:""}),a={name:"",username:"",email:"",password:"",confirmPass:""},w=q().shape({name:l().min(4,"Name must contain at least 4 characters.").max(16,"Name should not exceed 16 characters.").required("Name is required."),username:l().min(4,"Username must contain at least 4 characters.").max(16,"Username should not exceed 16 characters.").required("Username is required."),password:l().min(8,"Password must contain at least 8 characters.").max(16,"Password should not exceed 16 characters.").required("Password is required."),email:l().email("Invalid email address.").required("Email is required."),confirmPass:l().oneOf([x("password")],"Passwords must match").required("Confirm password is required.")}),h=()=>{a.name="",a.email="",a.password="",a.confirmPass=""},y=async()=>{w.validate(r,{abortEarly:!1}).then(async()=>{h();try{let o="http://ec2-3-126-130-133.eu-central-1.compute.amazonaws.com/users";const e=await k.post("http://ec2-3-126-130-133.eu-central-1.compute.amazonaws.com/users",{username:r.username,password:r.password,name:r.name,email:r.email})}catch(o){v.value=o.response.data.message,setTimeout(()=>{v.value=""},2500)}}).catch(o=>{o.inner.forEach(e=>{a[e.path]=e.message})})},n=o=>{w.validateAt(o,r).then(()=>a[o]="").catch(e=>{a[o]=e.message})};return(o,e)=>(i(),m("div",V,[t("form",{class:"register-form",action:"/",method:"post",onSubmit:_(y,["prevent"])},[I,t("div",N,[a.name?(i(),m("p",K,d(a.name),1)):u("",!0),p(t("input",{type:"text",placeholder:"Name",id:"name",name:"name","onUpdate:modelValue":e[0]||(e[0]=s=>r.name=s),onBlur:e[1]||(e[1]=s=>n("name")),onKeypress:e[2]||(e[2]=s=>n("name")),required:""},null,544),[[c,r.name]]),a.username?(i(),m("p",R,d(a.username),1)):u("",!0),p(t("input",{type:"text",placeholder:"Username",id:"username",name:"username","onUpdate:modelValue":e[3]||(e[3]=s=>r.username=s),onBlur:e[4]||(e[4]=s=>n("username")),onKeypress:e[5]||(e[5]=s=>n("username")),required:""},null,544),[[c,r.username]]),a.password?(i(),m("p",T,d(a.password),1)):u("",!0),p(t("input",{type:"password",id:"password",placeholder:"Password",name:"password","onUpdate:modelValue":e[6]||(e[6]=s=>r.password=s),onBlur:e[7]||(e[7]=s=>n("password")),onKeypress:e[8]||(e[8]=s=>n("password")),required:""},null,544),[[c,r.password]]),a.confirmPass?(i(),m("p",z,d(a.confirmPass),1)):u("",!0),p(t("input",{type:"password",id:"confirmPass",placeholder:"Confirm Password",name:"confirmPass","onUpdate:modelValue":e[9]||(e[9]=s=>r.confirmPass=s),onBlur:e[10]||(e[10]=s=>n("confirmPass")),onKeypress:e[11]||(e[11]=s=>n("confirmPass")),required:""},null,544),[[c,r.confirmPass]]),a.email?(i(),m("p",A,d(a.email),1)):u("",!0),p(t("input",{type:"text",placeholder:"E-mail",id:"email",name:"email","onUpdate:modelValue":e[12]||(e[12]=s=>r.email=s),onBlur:e[13]||(e[13]=s=>n("email")),onKeypress:e[14]||(e[14]=s=>n("email")),required:""},null,544),[[c,r.email]]),t("p",D,d(v.value),1),t("button",{type:"submit",onClick:e[15]||(e[15]=s=>y())},"REGISTER")]),t("div",M,[t("button",{class:"small-btn",onClick:e[16]||(e[16]=s=>o.$router.push("/Login"))},"Already have an account? Sign in!")])],40,C)]))}});const L=B(j,[["__scopeId","data-v-a2c3a128"]]);export{L as default};
