import{y as $,v as N,k as z,r as x,q as O,z as j,H as V,j as q,l as b,s as F,i as J,n as K,D as X,u as h,I as G,c as u,d as R}from"./index-eveRkr_s.js";import{v as Q,c as _,e as D,x as Z,n as S,m as v,h as ee,w as L,y as ne,I as te}from"./index-Cns-baah.js";var T=typeof window<"u",oe=e=>e===window,B=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),Pe=e=>{const n=h(e);if(oe(n)){const t=n.innerWidth,o=n.innerHeight;return B(t,o)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():B(0,0)};function Ne(e){const n=$(e,null);if(n){const t=b(),{link:o,unlink:a,internalChildren:i}=n;o(t),N(()=>a(t));const s=z(()=>i.indexOf(t));return{parent:n,index:s}}return{parent:null,index:x(-1)}}function ie(e){const n=[],t=o=>{Array.isArray(o)&&o.forEach(a=>{var i;G(a)&&(n.push(a),(i=a.component)!=null&&i.subTree&&(n.push(a.component.subTree),t(a.component.subTree.children)),a.children&&t(a.children))})};return t(e),n}var I=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(o=>n.key!==void 0&&n.key!==null&&o.type===n.type&&o.key===n.key):t};function re(e,n,t){const o=ie(e.subTree.children);t.sort((i,s)=>I(o,i.vnode)-I(o,s.vnode));const a=t.map(i=>i.proxy);n.sort((i,s)=>{const d=a.indexOf(i),l=a.indexOf(s);return d-l})}function ze(e){const n=O([]),t=O([]),o=b();return{children:n,linkChildren:i=>{F(e,Object.assign({link:l=>{l.proxy&&(t.push(l),n.push(l.proxy),re(o,n,t))},unlink:l=>{const r=t.indexOf(l);n.splice(r,1),t.splice(r,1)},children:n,internalChildren:t},i))}}}function ae(e){let n;J(()=>{e(),K(()=>{n=!0})}),X(()=>{n&&e()})}function Re(e,n,t={}){if(!T)return;const{target:o=window,passive:a=!1,capture:i=!1}=t;let s=!1,d;const l=c=>{if(s)return;const f=h(c);f&&!d&&(f.addEventListener(e,n,{capture:i,passive:a}),d=!0)},r=c=>{if(s)return;const f=h(c);f&&d&&(f.removeEventListener(e,n,i),d=!1)};N(()=>r(o)),j(()=>r(o)),ae(()=>l(o));let g;return V(o)&&(g=q(o,(c,f)=>{r(f),l(c)})),()=>{g==null||g(),r(o),s=!0}}var m,w;function se(){if(!m&&(m=x(0),w=x(0),T)){const e=()=>{m.value=window.innerWidth,w.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:m,height:w}}var le=/scroll|auto|overlay/i,ce=T?window:void 0;function ue(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function _e(e,n=ce){let t=e;for(;t&&t!==n&&ue(t);){const{overflowY:o}=window.getComputedStyle(t);if(le.test(o))return t;t=t.parentNode}return n}var De=Symbol("van-field");function P(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function de(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function fe(e){P(window,e),P(document.body,e)}const ge=Q();function Le(){ge&&fe(de())}const pe=e=>e.stopPropagation();function ve(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&pe(e)}const{width:Me,height:Ae}=se(),ye={to:[String,Object],url:String,replace:Boolean};function me({to:e,url:n,replace:t,$router:o}){e&&o?o[t?"replace":"push"](e):n&&(t?location.replace(n):location.href=n)}function we(){const e=b().proxy;return()=>me(e)}const[xe,y]=_("loading"),he=Array(12).fill(null).map((e,n)=>u("i",{class:y("line",String(n+1))},null)),Se=u("svg",{class:y("circular"),viewBox:"25 25 50 50"},[u("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),be={size:S,type:v("circular"),color:String,vertical:Boolean,textSize:S,textColor:String};var Te=R({name:xe,props:be,setup(e,{slots:n}){const t=z(()=>D({color:e.color},Z(e.size))),o=()=>{const i=e.type==="spinner"?he:Se;return u("span",{class:y("spinner",e.type),style:t.value},[n.icon?n.icon():i])},a=()=>{var i;if(n.default)return u("span",{class:y("text"),style:{fontSize:ee(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[n.default()])};return()=>{const{type:i,vertical:s}=e;return u("div",{class:y([i,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[o(),a()])}}});const ke=L(Te),[Ee,p]=_("button"),Ce=D({},ye,{tag:v("button"),text:String,icon:String,type:v("default"),size:v("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:v("button"),loadingSize:S,loadingText:String,loadingType:String,iconPosition:v("left")});var Oe=R({name:Ee,props:Ce,emits:["click"],setup(e,{emit:n,slots:t}){const o=we(),a=()=>t.loading?t.loading():u(ke,{size:e.loadingSize,type:e.loadingType,class:p("loading")},null),i=()=>{if(e.loading)return a();if(t.icon)return u("div",{class:p("icon")},[t.icon()]);if(e.icon)return u(te,{name:e.icon,class:p("icon"),classPrefix:e.iconPrefix},null)},s=()=>{let r;if(e.loading?r=e.loadingText:r=t.default?t.default():e.text,r)return u("span",{class:p("text")},[r])},d=()=>{const{color:r,plain:g}=e;if(r){const c={color:g?r:"white"};return g||(c.background=r),r.includes("gradient")?c.border=0:c.borderColor=r,c}},l=r=>{e.loading?ve(r):e.disabled||(n("click",r),o())};return()=>{const{tag:r,type:g,size:c,block:f,round:M,plain:A,square:W,loading:Y,disabled:k,hairline:E,nativeType:H,iconPosition:C}=e,U=[p([g,c,{plain:A,block:f,round:M,square:W,loading:Y,disabled:k,hairline:E}]),{[ne]:E}];return u(r,{type:H,class:U,style:d(),disabled:k,onClick:l},{default:()=>[u("div",{class:p("content")},[C==="left"&&i(),s(),C==="right"&&i()])]})}}});const We=L(Oe);export{We as B,De as C,ke as L,Ae as a,ze as b,we as c,Ne as d,Re as e,Le as f,de as g,_e as h,ae as o,ve as p,ye as r,fe as s,Pe as u,Me as w};
