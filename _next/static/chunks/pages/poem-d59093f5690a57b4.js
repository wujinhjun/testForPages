(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{6066:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/poem",function(){return n(1048)}])},1328:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(1527),i=n(1787),o=n.n(i),s=n(7009),r=n.n(s),l=n(5924),c=n(959);let m=(0,c.memo)(function(e){let{text:t,link:n,active:i}=e;return(0,a.jsxs)("div",{className:(0,l.Z)({[r().button_wrapper]:!0}),open:i,children:[(0,a.jsx)(o(),{className:r().text,href:n,children:t}),(0,a.jsx)("div",{className:r().bottom_line})]})});function _(e){let{name:t}=e;return(0,a.jsxs)("div",{className:"".concat(r().headerContainer),children:[(0,a.jsxs)("div",{className:(0,l.Z)({[r().leftPanel]:!0}),children:[(0,a.jsx)(m,{text:"首页",link:"/",active:"home"==t}),(0,a.jsx)(m,{text:"文艺",link:"/poem",active:"poem"==t}),(0,a.jsx)(m,{text:"关于我",link:"/me",active:"me"==t})]}),(0,a.jsx)("div",{className:r().rightPanel,children:(0,a.jsx)("div",{className:r().icon,children:"W"})})]})}},6979:function(e,t,n){"use strict";var a=n(959);let i=()=>{let[e,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{t(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),e};t.Z=i},1048:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return v}});var a=n(1527),i=n(4930),o=n.n(i),s=n(3825),r=n(959),l=n(5924);let c=e=>{let{title:t,content:n,id:i}=e;return(0,a.jsxs)("section",{className:o().poemContainer,id:i,children:[(0,a.jsx)("div",{className:o().poemTitleWrapper,children:(0,a.jsx)("div",{className:o().poemTitle,children:t})}),(0,a.jsx)("div",{className:o().poemContentWrapper,children:(0,a.jsx)("div",{className:o().poemContent,dangerouslySetInnerHTML:{__html:n}})})]})},m=e=>{let{title:t,id:n,activeID:i,moveToTarget:s}=e;return(0,a.jsx)("section",{className:(0,l.Z)({[o().catalogItem]:!0,[o().active]:i===n}),id:n,onClick:()=>s(n),children:(0,a.jsx)("span",{className:o().text,children:t})})},_=e=>{let{catalogs:t,contents:n}=e,i=(0,r.useRef)([]),l=(0,r.useRef)(!1),[_,d]=(0,r.useState)(t[0].id),p=e=>{d(e)},u=e=>{let t=document.getElementById("".concat(e));p(e);let{offsetTop:n}=t;window.scrollTo({top:n-120})};return(0,r.useEffect)(()=>{i.current=[],t.forEach((e,n)=>{let a=e.id,o=document.getElementById("".concat(a)),s={id:a,start:0,end:0};if(n===t.length-1)s={id:a,start:o.offsetTop,end:document.body.offsetHeight};else{let e=t[n+1],i=document.getElementById("".concat(e.id));s={id:a,start:o.offsetTop,end:i.offsetTop}}i.current.push(s)})},[t]),(0,r.useEffect)(()=>{let e=document.getElementsByTagName("body")[0];e.onscroll=e=>{l.current||(window.requestAnimationFrame(()=>{let t=e.target.documentElement.scrollTop||0,n=i.current.find(e=>e.start<=t+160&&e.end>t+160);n&&p(n.id),l.current=!1}),l.current=!0)}}),(0,a.jsxs)("section",{className:o().poemWrapper,children:[(0,a.jsx)("section",{className:o().poems,children:n.map(e=>(0,a.jsx)(c,{id:e.id,title:e.title,content:e.content},e.id))}),(0,a.jsx)("section",{className:o().catalog,children:(0,a.jsx)(s.Z,{data:t,itemKey:"id",itemHeight:40,height:480,style:{width:"100%"},children:e=>(0,a.jsx)(m,{title:e.title,id:e.id,activeID:_,moveToTarget:u})})})]})};var d=n(2644),p=n.n(d),u=n(1965),f=n(1328),h=n(6979),x=!0;function v(e){let{allPostsData:t}=e,n=(0,h.Z)(),i=t.map(e=>({id:e.id,title:e.title}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.PB,{title:"诗意"}),(0,a.jsx)("section",{className:"header-fixed ".concat(n?"sticky":""),children:(0,a.jsx)(f.Z,{name:"poem"})}),(0,a.jsx)("main",{className:p().main,children:(0,a.jsx)(_,{catalogs:i,contents:t})})]})}},4930:function(e){e.exports={poemWrapper:"PoemDisplay_poemWrapper__Pv3hU",poems:"PoemDisplay_poems__EbULe",poemContainer:"PoemDisplay_poemContainer__u8SFw",poemTitleWrapper:"PoemDisplay_poemTitleWrapper__BN_JU",poemTitle:"PoemDisplay_poemTitle__wCsak",poemContentWrapper:"PoemDisplay_poemContentWrapper__FhgxJ",poemContent:"PoemDisplay_poemContent__7aCeu",catalog:"PoemDisplay_catalog__r59vD",catalogItem:"PoemDisplay_catalogItem__XYgRy",text:"PoemDisplay_text__YQt3O",active:"PoemDisplay_active__sau_i"}},7009:function(e){e.exports={headerContainer:"Header_headerContainer__m5wGA",leftPanel:"Header_leftPanel__ob0aF",list:"Header_list___02Jq",button_wrapper:"Header_button_wrapper__iJH_a",text:"Header_text__YE7s8",bottom_line:"Header_bottom_line__360El",active:"Header_active__gnzlZ",bottomLine:"Header_bottomLine__zUzkC",rightPanel:"Header_rightPanel__rARBv",icon:"Header_icon__z9DUe"}},2644:function(e){e.exports={main:"Home_main__OVLM4"}}},function(e){e.O(0,[787,615,774,888,179],function(){return e(e.s=6066)}),_N_E=e.O()}]);