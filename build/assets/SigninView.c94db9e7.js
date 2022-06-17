var V=Object.defineProperty;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(t,r,o)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,i=(t,r)=>{for(var o in r||(r={}))y.call(r,o)&&d(t,o,r[o]);if(l)for(var o of l(r))b.call(r,o)&&d(t,o,r[o]);return t};import{u as E,a as S,r as v,c as A,o as k,b as U,w as _,d as I,e as a,f as p,g as m}from"./index.7aec1e25.js";import{u as L,B as w,r as h,a as $,c as f}from"./BaseInput.ceb0847e.js";import{B as M}from"./BaseForm.9243d21b.js";const P={name:"SigninView",setup(t){const r=E(),o=S(),e=v({account:"",password:""}),B=async()=>{try{return(await m.get(`check/${e.account}`)).data.exists}catch(n){return console.log(n),!0}},g=A(()=>({account:{required:h,alphaNum:$,accountExists:f.withMessage("Account does not exist",f.withAsync(B))},password:{required:h,alphaNum:$}})),s=L(g,e),x=async()=>{if(s.value.$touch(),s.value.$error){e.password="";return}try{const n=await m.post("/login",i({},e));alert("Login successfully!"),o.$state=n.data,r.push({name:"search"})}catch{alert("Login failed!"),e.password=""}};return(n,u)=>(k(),U(M,{onSubmit:I(x,["prevent"]),"button-text":"Sign In",disableButton:a(s).$error||a(s).$errors.length>0},{default:_(()=>[p(w,{modelValue:e.account,"onUpdate:modelValue":u[0]||(u[0]=c=>e.account=c),placeholder:"Account",hasError:a(s).account.$error,errors:a(s).account.$errors,id:"account",type:"text",onBlur:a(s).account.$touch},null,8,["modelValue","hasError","errors","onBlur"]),p(w,{modelValue:e.password,"onUpdate:modelValue":u[1]||(u[1]=c=>e.password=c),placeholder:"Password",hasError:a(s).password.$error,errors:a(s).password.$errors,id:"password",type:"password",onBlur:a(s).password.$touch},null,8,["modelValue","hasError","errors","onBlur"])]),_:1},8,["onSubmit","disableButton"]))}};export{P as default};