import{p as k,P as v,m as x,u as w}from"./mount-component-BsIUfqY6.js";import{c as b,e as f,m as u,n as C,u as P,p as S,i as N,a as B,w as T}from"./index-1IMyRTzM.js";import{d as h,c as g,m as y,r as I,o as c,a as d,F as O,b as U,u as $,e as j,w as z,f as D,t as E,_ as F}from"./index-BUDJbm-d.js";import{B as V}from"./index-BFDfGY4n.js";const[L,q]=b("notify"),A=["lockScroll","position","show","teleport","zIndex"],G=f({},k,{type:u("danger"),color:String,message:C,position:u("top"),className:P,background:String,lockScroll:Boolean});var _=h({name:L,props:G,emits:["update:show"],setup(e,{emit:n,slots:s}){const l=o=>n("update:show",o);return()=>g(v,y({class:[q([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,duration:.2,"onUpdate:show":l},S(e,A)),{default:()=>[s.default?s.default():e.message]})}});let p,a;const H=e=>B(e)?e:{message:e};function J(){({instance:a}=x({setup(){const{state:e,toggle:n}=w();return()=>g(_,y(e,{"onUpdate:show":n}),null)}}))}const K=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let M=K();const Q=()=>{a&&a.toggle(!1)};function m(e){if(N)return a||J(),e=f({},M,H(e)),a.open(e),clearTimeout(p),e.duration>0&&(p=setTimeout(Q,e.duration)),a}T(_);const R={class:"list flex middle center column"},W=h({__name:"list",setup(e){let n=I([{name:"拼多多",path:"/pdd"},{name:"京东",path:s("/jd/index"),shareText:`快来京东薅羊毛了,这里有不少的优惠券,点击打来网页就能领取:${s("/jd/index")}`},{name:"投票",path:"/vote"},{name:"抽话费",path:"/vote"}]);function s(o){return`${location.href.split("#")[0]}#${o}`}function l(o){try{let t=document.createElement("input");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),m({type:"success",message:"复制成功"})}catch{m({type:"danger",message:"复制失败"})}}return(o,t)=>{const i=V;return c(),d("div",R,[(c(!0),d(O,null,U($(n),r=>(c(),j(i,{class:"btn",type:"primary",size:"small",key:r.name,onClick:X=>l((r==null?void 0:r.shareText)||"")},{default:z(()=>[D(E(r.name),1)]),_:2},1032,["onClick"]))),128))])}}}),oe=F(W,[["__scopeId","data-v-58f93fad"]]);export{oe as default};
