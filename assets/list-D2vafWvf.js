import{p as _,P as k,m as v,u as w}from"./mount-component-CEdJRwXf.js";import{c as b,e as d,m as l,n as C,u as x,p as P,i as S,a as N,w as B}from"./index-Cns-baah.js";import{d as m,c as f,m as g,r as I,o as c,a as i,F as O,b as T,u as j,e as z,w as D,f as E,t as F,_ as U}from"./index-eveRkr_s.js";import{B as V}from"./index-BAubkpgm.js";const[L,$]=b("notify"),q=["lockScroll","position","show","teleport","zIndex"],A=d({},_,{type:l("danger"),color:String,message:C,position:l("top"),className:x,background:String,lockScroll:Boolean});var h=m({name:L,props:A,emits:["update:show"],setup(e,{emit:a,slots:n}){const s=t=>a("update:show",t);return()=>f(k,g({class:[$([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,duration:.2,"onUpdate:show":s},P(e,q)),{default:()=>[n.default?n.default():e.message]})}});let p,o;const G=e=>N(e)?e:{message:e};function H(){({instance:o}=v({setup(){const{state:e,toggle:a}=w();return()=>f(h,g(e,{"onUpdate:show":a}),null)}}))}const J=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let K=J();const M=()=>{o&&o.toggle(!1)};function u(e){if(S)return o||H(),e=d({},K,G(e)),o.open(e),clearTimeout(p),e.duration>0&&(p=setTimeout(M,e.duration)),o}B(h);const Q={class:"list flex middle center column"},R=m({__name:"list",setup(e){let a=I([{name:"拼多多",path:"/pdd"},{name:"京东",path:"/jd"},{name:"投票",path:"/vote"},{name:"领取优惠券",path:"/vote"}]);function n(s){try{let t=document.createElement("input");t.value=s,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),u({type:"success",message:"复制成功"})}catch{u({type:"danger",message:"复制失败"})}}return(s,t)=>{const y=V;return c(),i("div",Q,[(c(!0),i(O,null,T(j(a),r=>(c(),z(y,{class:"btn",type:"primary",size:"small",key:r.name,onClick:W=>n(r.path)},{default:D(()=>[E(F(r.name),1)]),_:2},1032,["onClick"]))),128))])}}}),te=U(R,[["__scopeId","data-v-be10278a"]]);export{te as default};
