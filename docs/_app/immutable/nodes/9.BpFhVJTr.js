import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{az as M,aA as R,aB as D,aF as a,aD as r,aE as l,g as s,Y as p,L as u}from"../chunks/BXRkS4xI.js";import{e,s as C}from"../chunks/Bjx9hYoO.js";import{i as G}from"../chunks/D4Wj8zOE.js";import{s as k}from"../chunks/BXWj_DCx.js";var I=M('<div class="overlay svelte-urn6fi"><div class="modal svelte-urn6fi"><p>Successfully logged in</p> <button>OK</button></div></div>'),X=M(`<main class="svelte-urn6fi"><h1 class="svelte-urn6fi">LOG IN</h1> <button class="RandomLetter svelte-urn6fi" style="
            position: absolute;
            left: 730px;
            top: 410px;
            transform: translateX(-50%);
            generate letter">Genrate Letter</button> <p style="
        position: absolute;
        left: 730px;
        top: 270px;
        transform: translateX(-50%);
        user-select: text;
        font-weight: bold;
        font-size: 48px;
        white-space: pre; 
        z-index: 4;"> </p> <div type="button" class="hitbox svelte-urn6fi"></div> <button class="MovingButton svelte-urn6fi">Log in</button> <!> <div class="login-outline svelte-urn6fi" style="position: absolute; left: 600px; top: 190px;"><input type="text" placeholder="Name:"/> <input type="password" placeholder="password:"/></div></main>`);function S(K){let v=p(700),c=p(470),b=p(!1),x=p("");function O(){Math.random()<.85&&(u(v,Math.random()*(window.innerWidth-120)),u(c,Math.random()*(window.innerHeight-50)))}function y(){alert("Logged in successfully")}function z(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyåäö ";u(x,t[Math.floor(Math.random()*t.length)])}var f=X(),h=a(r(f),2),d=a(h,2),A=r(d,!0);l(d);var i=a(d,2),m=a(i,2),w=a(m,2);{var B=t=>{var n=I(),o=r(n),N=a(r(o),2);l(o),l(n),e("click",N,()=>u(b,!1)),D(t,n)};G(w,t=>{s(b)&&t(B)})}var _=a(w,2),g=r(_),L=a(g,2);l(_),l(f),R(()=>{C(A,s(x)),k(i,`position: absolute; left: ${s(v)-20}px; top: ${s(c)-20}px;`),k(m,`position: absolute; left: ${s(v)??""}px; top: ${s(c)??""}px;`)}),e("click",h,z),e("mouseenter",i,O),e("click",i,y),e("click",m,y),e("keydown",g,t=>{(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="v"||t.preventDefault()}),e("paste",g,t=>{t.preventDefault();const o=t.clipboardData.getData("text").replace(/[^a-zA-Z]/g,"");t.target.value+=o}),e("keydown",L,t=>{(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="v"||t.preventDefault()}),e("paste",L,t=>{t.preventDefault();const o=t.clipboardData.getData("text").replace(/[^a-zA-Z]/g,"");t.target.value=o}),D(K,f)}export{S as component};
