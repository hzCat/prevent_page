import{d as x,c as v,T as D,J as H,r as b,k,o as i,a as r,h as t,u as o,t as p,F as f,b as h,e as C,w as I,f as w,K as N,p as S,g as B,_ as P,L}from"./index-eveRkr_s.js";import{c as E,t as F,m as V,H as A,I as K,w as R}from"./index-Cns-baah.js";const[q,$]=E("tag"),J={size:String,mark:Boolean,show:F,type:V("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var O=x({name:q,props:J,emits:["close"],setup(e,{slots:n,emit:a}){const d=c=>{c.stopPropagation(),a("close",c)},g=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},y=()=>{var c;const{type:u,mark:_,plain:m,round:s,size:l,closeable:j}=e,M={mark:_,plain:m,round:s};l&&(M[l]=l);const z=j&&v(K,{name:"cross",class:[$("close"),A],onClick:d},null);return v("span",{style:g(),class:$([M,u])},[(c=n.default)==null?void 0:c.call(n),z])};return()=>v(D,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?y():null]})}});const G=R(O),T=e=>(S("data-v-a067f85a"),e=e(),B(),e),Q={class:"list-item flex middle start"},U=["src"],W={class:"right flex1 flex column start top"},X={class:"title"},Y={class:"tags"},Z={class:"price flex middle start"},ee={class:"price-num"},te=T(()=>t("span",{class:"small"},"¥",-1)),se={class:"calc"},ae={class:"buy flex middle between"},oe={class:"radio"},ne={class:"radio-num"},ie=T(()=>t("button",{class:"buy-button"},"抢",-1)),ce=x({__name:"ListItem",props:{item:{type:Object,required:!0}},setup(e){const n=e,{item:a}=H(n);let d=b(Math.floor(new Date().getHours()/24*100)),g=k(()=>d.value>20?d.value:20);return(y,c)=>{const u=G;return i(),r("div",Q,[t("img",{src:o(a).img,class:"left"},null,8,U),t("div",W,[t("h4",X,p(o(a).name),1),t("div",Y,[(i(!0),r(f,null,h(o(a).tags,(_,m)=>(i(),C(u,{style:{"margin-right":"10px"},plain:"",type:m==0?"danger":"warning",key:m},{default:I(()=>[w(p(_),1)]),_:2},1032,["type"]))),128))]),t("div",Z,[t("span",ee,[te,w(p((o(a).price*10-o(a).saveMoney*10)/10),1)]),v(u,{plain:"",class:"save-money",type:"danger"},{default:I(()=>[w(" 省"+p(o(a).saveMoney)+"元",1)]),_:1}),t("span",se,"日常价:"+p(o(a).price)+"元",1)]),t("div",ae,[t("div",oe,[t("div",{class:"inside",style:N({width:`${o(g)-o(a).offset}%`})},null,4)]),t("div",ne,p(o(g)-o(a).offset)+"%",1),ie])])])}}}),le=P(ce,[["__scopeId","data-v-a067f85a"]]);function re(e){let n=e.length;for(;n;){let a=Math.floor(Math.random()*n),d=e[--n];e[n]=e[a],e[a]=d}return e}function pe(){let e=b([{name:"容声 210L 大容量节能双温柜",price:"1999",saveMoney:100,offset:13,tags:["30天加保","回头客"],img:"http://img.seaboats.cn/prevent_page/product_1.webp"},{name:"红豆薏米茶去调湿茶 20袋",price:"19.9",saveMoney:5,offset:12,tags:["闪电退款","7天无理由"],img:"http://img.seaboats.cn/prevent_page/product_2.webp"},{name:"佳洁士 锁白牙膏 120g*3",price:"25.9",saveMoney:5,offset:9,tags:["包邮","30天价保"],img:"http://img.seaboats.cn/prevent_page/product_3.webp"},{name:"英氏 核桃油 110mL",price:"35.9",saveMoney:10,offset:14,tags:["包邮","1万人加购"],img:"http://img.seaboats.cn/prevent_page/product_4.webp"},{name:"泡菜 500g",price:"27.9",saveMoney:2,offset:5,tags:["包邮","闪电退款"],img:"http://img.seaboats.cn/prevent_page/product_5.webp"},{name:"同仁堂 抗皱眼霜 30g",price:"39.9",saveMoney:10,offset:13,tags:["包邮","7天无理由"],img:"http://img.seaboats.cn/prevent_page/product_6.webp"},{name:"途虎 汽车玻璃水 8斤装",tags:["包邮","闪电退款"],price:"19.9",saveMoney:4,offset:2,img:"http://img.seaboats.cn/prevent_page/product_7.webp"},{name:"同仁堂 牙膏 120g+20g",price:"31.9",saveMoney:5,offset:7,tags:["包邮","回头客"],img:"http://img.seaboats.cn/prevent_page/product_8.webp"},{name:"爷爷的农场 果泥 5支装",price:"17.9",saveMoney:2,offset:15,tags:["包邮","回头客"],img:"http://img.seaboats.cn/prevent_page/product_9.webp"},{name:"苏菲 超值日夜组合",price:"49.9",saveMoney:10,offset:8,tags:["包邮","30天价保"],img:"http://img.seaboats.cn/prevent_page/product_10.png"}]);function n(a){return re(e.value).slice(0,a)}return{products:e,getLimitList:n}}const de=e=>(S("data-v-fa250781"),e=e(),B(),e),me={class:"jd-index"},_e=de(()=>t("img",{class:"head",src:"http://img.seaboats.cn/prevent_page/jd_top.png",alt:""},null,-1)),ge={class:"list-1 flex middle between"},ue=["src"],fe={class:"name"},he={class:"time-list flex middle between"},ve={class:"line-1"},be={class:"line-2"},ye={class:"class-list flex middle between"},we={class:"product-list"},xe=x({__name:"index",setup(e){const{getLimitList:n}=pe();let a=n(5),d=b([{name:"欢乐淘金",img:"http://img.seaboats.cn/prevent_page/icon_1.png"},{name:"转赚红包",img:"http://img.seaboats.cn/prevent_page/icon_2.png"},{name:"大牌奥莱",img:"http://img.seaboats.cn/prevent_page/icon_3.png"},{name:"低价捡漏",img:"http://img.seaboats.cn/prevent_page/icon_4.png"}]),g=b(["精选","家居家电","医药健康","食品饮料","美妆个护","服饰鞋包","母婴玩具","数码家电","运动户外","生鲜水果","图书音像","游戏周边","其他"]),c=new Date().getHours(),u=k(()=>{c%2==1&&c--;let _=[];for(let m=0;m<6;m++){let s=c+m*2;s>=24&&(s=s-24),s=s<10?"0"+s:s,_.push(s)}return _});return(_,m)=>(i(),r("div",me,[_e,t("div",ge,[(i(!0),r(f,null,h(o(d),(s,l)=>(i(),r("div",{class:"item flex middle center",key:l},[t("img",{class:"icon",src:s.img,alt:""},null,8,ue),t("div",fe,p(s.name),1)]))),128))]),t("div",he,[(i(!0),r(f,null,h(o(u),(s,l)=>(i(),r("div",{class:L(["time-item flex middle center column",{selected:l==0}])},[t("div",ve,p(s)+":00",1),t("div",be,p(l==0?"正在抢购":"即将开抢"),1)],2))),256))]),t("div",ye,[(i(!0),r(f,null,h(o(g),(s,l)=>(i(),r("div",{class:L(["class-item",{selected:l==0}])},p(s),3))),256))]),t("div",we,[(i(!0),r(f,null,h(o(a),s=>(i(),C(le,{item:s,key:s.name},null,8,["item"]))),128))])]))}}),Le=P(xe,[["__scopeId","data-v-fa250781"]]);export{Le as default};
