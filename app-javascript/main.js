(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("Vue")):"function"===typeof define&&define.amd?define(["Vue"],t):"object"===typeof exports?exports["app-app-javascript"]=t(require("Vue")):e["app-app-javascript"]=t(e["Vue"])})(window,(function(e){return function(e){function t(t){for(var n,o,a=t[0],u=t[1],c=0,i=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&i.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(i.length)i.shift()()}var n={},r={app:0};function o(e){return a.p+""+({}[e]||e)+"."+{"chunk-0b6b56d6":"fe13df4b","chunk-1e4f4de6":"12dc0cca","chunk-cfe33490":"b2a96c72"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=u);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=o(e);var p=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="app-javascript/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp-app-javascript"]=window["webpackJsonp-app-javascript"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=c;return a(a.s=0)}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("8bbf"),o=n.n(r);const a="app-javascript",u=()=>n.e("chunk-0b6b56d6").then(n.bind(null,"3dfd")),c=()=>n.e("chunk-1e4f4de6").then(n.bind(null,"bb51")),i=()=>n.e("chunk-cfe33490").then(n.bind(null,"f820"));var p=[{path:`/${a}`,name:a,redirect:{name:`${a}.home`},component:u,children:[{path:"home",name:`${a}.home`,component:c},{path:"about",name:`${a}.about`,component:i}]}];o.a.__share_pool__.router.addRoutes(p)},"8bbf":function(t,n){t.exports=e}})["default"]}));