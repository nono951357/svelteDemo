import{s as j,n as v,r as y}from"../chunks/scheduler.BvLojk_z.js";import{S as C,i as E,e as d,s as z,c as p,m as A,h as S,d as w,g as f,n as u,j as r,p as T,o as _}from"../chunks/index.BYVMK9hN.js";function g(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function b(n,s,o){const c=n.slice();return c[3]=s[o],c[4]=s,c[5]=o,c}function k(n){let s,o,c,i,h;function l(){return n[1](n[3],n[4],n[5])}function e(...a){return n[2](n[3],n[4],n[5],...a)}return{c(){s=d("button"),this.h()},l(a){s=p(a,"BUTTON",{class:!0,type:!0,"aria-pressed":!0}),w(s).forEach(f),this.h()},h(){u(s,"class",o="l"+n[3]+" svelte-dj6ivw"),u(s,"type","button"),u(s,"aria-pressed",c=n[3]==1)},m(a,t){r(a,s,t),i||(h=[_(s,"click",l),_(s,"keydown",e)],i=!0)},p(a,t){n=a,t&1&&o!==(o="l"+n[3]+" svelte-dj6ivw")&&u(s,"class",o),t&1&&c!==(c=n[3]==1)&&u(s,"aria-pressed",c)},d(a){a&&f(s),i=!1,y(h)}}}function $(n){let s,o="Kocka színező",c,i,h=g(n[0]),l=[];for(let e=0;e<h.length;e+=1)l[e]=k(b(n,h,e));return{c(){s=d("h1"),s.textContent=o,c=z(),i=d("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){s=p(e,"H1",{"data-svelte-h":!0}),A(s)!=="svelte-dfbglf"&&(s.textContent=o),c=S(e),i=p(e,"DIV",{class:!0});var a=w(i);for(let t=0;t<l.length;t+=1)l[t].l(a);a.forEach(f),this.h()},h(){u(i,"class","g svelte-dj6ivw")},m(e,a){r(e,s,a),r(e,c,a),r(e,i,a);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(i,null)},p(e,[a]){if(a&1){h=g(e[0]);let t;for(t=0;t<h.length;t+=1){const m=b(e,h,t);l[t]?l[t].p(m,a):(l[t]=k(m),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=h.length}},i:v,o:v,d(e){e&&(f(s),f(c),f(i)),T(l,e)}}}function q(n,s,o){const c=Array(99).fill(0);return[c,(l,e,a)=>o(0,e[a]=l==1?0:1,c),(l,e,a,t)=>t.key==="Enter"&&o(0,e[a]=l==1?0:1,c)]}class H extends C{constructor(s){super(),E(this,s,q,$,j,{})}}export{H as component};