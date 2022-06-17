import{u as b,B as w,r as g,i as R,c as z,m,f,g as v}from"./BaseInput.ceb0847e.js";import{_ as B,o as y,v as P,x as a,a as M,r as V,c as $,f as i,z as r,e,w as L,J as N,K as A,L as q,g as x}from"./index.7aec1e25.js";import{P as C}from"./PopupModal.264a6550.js";const D={},H={xmlns:"http://www.w3.org/2000/svg",width:"160",height:"160",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16"},J=a("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"},null,-1),K=a("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"},null,-1),T=[J,K];function j(c,t){return y(),P("svg",H,T)}var F=B(D,[["render",j]]);const U=c=>(A("data-v-0e694bda"),c=c(),q(),c),G={class:"container"},O=N(),Q=U(()=>a("br",null,null,-1)),W=U(()=>a("br",null,null,-1)),X=["disabled"],Y=["disabled"],Z={name:"ProfileView",setup(c){const t=M();t.reload();const s=V({location:!1,balance:!1}),p=V({addValue:""}),l=V({newLatitude:"",newLongitude:""}),E=$(()=>({addValue:{required:g,integer:R,positive:z.withMessage("Value should be positive",m(1))}})),k=$(()=>({newLatitude:{required:g,decimal:f,minValue:m(-90),maxValue:v(90)},newLongitude:{required:g,decimal:f,minValue:m(-180),maxValue:v(180)}})),d=b(E,p),n=b(k,l),h=()=>{s.location=!1,s.balance=!1,p.addValue="",l.newLatitude="",l.newLongitude="",d.value.$reset(),n.value.$reset()},I=async()=>{try{await x.put("/location",{account:t.account,latitude:l.newLatitude,longitude:l.newLongitude}),await t.reload(),alert("Update succeed!")}catch(_){console.log(_),alert("Update fail!")}h()},S=async()=>{try{await x.patch("/recharge",{account:t.account,value:p.addValue}),await t.reload(),alert("Recharge succeed!")}catch(_){console.log(_),alert("Recharge fail!")}h()};return(_,o)=>(y(),P("div",G,[i(F),O,Q,a("ul",null,[a("li",null,"account: "+r(e(t).account),1),a("li",null,"phone number: "+r(e(t).phone),1),a("li",null,"location: "+r(e(t).latitude)+", "+r(e(t).longitude),1),a("button",{onClick:o[0]||(o[0]=u=>s.location=!0)},"Change location"),a("li",null,"wallet balance: $"+r(e(t).balance),1),a("button",{onClick:o[1]||(o[1]=u=>s.balance=!0)},"Recharge")]),i(C,{show:s.location,titles:"Update location",onClosePopup:h},{default:L(()=>[a("ul",null,[a("li",null,"Current latitude: "+r(e(t).latitude),1),a("li",null,"Current longitude: "+r(e(t).longitude),1)]),i(w,{modelValue:l.newLatitude,"onUpdate:modelValue":o[2]||(o[2]=u=>l.newLatitude=u),placeholder:"new latitude",hasError:e(n).newLatitude.$error,errors:e(n).newLatitude.$errors,id:"newLatitude",type:"text",onBlur:e(n).newLatitude.$touch},null,8,["modelValue","hasError","errors","onBlur"]),W,i(w,{modelValue:l.newLongitude,"onUpdate:modelValue":o[3]||(o[3]=u=>l.newLongitude=u),placeholder:"new longitude",hasError:e(n).newLongitude.$error,errors:e(n).newLongitude.$errors,id:"newLongitude",type:"text",onBlur:e(n).newLongitude.$touch},null,8,["modelValue","hasError","errors","onBlur"]),a("button",{disabled:e(n).$error||e(n).$errors.length,onClick:I},"Update",8,X)]),_:1},8,["show"]),i(C,{show:s.balance,titles:"Recharge",onClosePopup:h},{default:L(()=>[a("h1",null,"Current balence: "+r(e(t).balance),1),i(w,{modelValue:p.addValue,"onUpdate:modelValue":o[4]||(o[4]=u=>p.addValue=u),placeholder:"enter add value",hasError:e(d).addValue.$error,errors:e(d).addValue.$errors,id:"addValue",type:"text",onBlur:e(d).addValue.$touch},null,8,["modelValue","hasError","errors","onBlur"]),a("button",{disabled:e(d).$error||e(d).$errors.length,onClick:S},"Charge",8,Y)]),_:1},8,["show"])]))}};var oe=B(Z,[["__scopeId","data-v-0e694bda"]]);export{oe as default};