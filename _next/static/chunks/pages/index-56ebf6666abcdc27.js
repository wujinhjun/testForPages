(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4284:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4770)}])},1328:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(1527),i=n(1787),a=n.n(i),o=n(7009),s=n.n(o),c=n(5924),l=n(959);let d=(0,l.memo)(function(e){let{text:t,link:n,active:i}=e;return(0,r.jsxs)("div",{className:(0,c.Z)({[s().button_wrapper]:!0}),open:i,children:[(0,r.jsx)(a(),{className:s().text,href:n,children:t}),(0,r.jsx)("div",{className:s().bottom_line})]})});function u(e){let{name:t}=e;return(0,r.jsxs)("div",{className:"".concat(s().headerContainer),children:[(0,r.jsxs)("div",{className:(0,c.Z)({[s().leftPanel]:!0}),children:[(0,r.jsx)(d,{text:"首页",link:"/",active:"home"==t}),(0,r.jsx)(d,{text:"文艺",link:"/poem",active:"poem"==t}),(0,r.jsx)(d,{text:"关于我",link:"/me",active:"me"==t})]}),(0,r.jsx)("div",{className:s().rightPanel,children:(0,r.jsx)("div",{className:s().icon,children:"W"})})]})}},6979:function(e,t,n){"use strict";var r=n(959);let i=()=>{let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=()=>{t(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),e};t.Z=i},7727:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(5321).Z,i=n(1322).Z,a=n(6687).Z,o=n(6239).Z,s=a(n(959)),c=i(n(8008)),l=n(3085),d=n(4556),u=n(4765);n(1020);var _=i(n(7906));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,i,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let g=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:a,qualityInt:c,className:l,imgStyle:d,blurStyle:u,isLazy:_,fill:m,placeholder:f,loading:p,srcString:g,config:v,unoptimized:x,loader:j,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:C,setShowAltText:N,onLoad:y,onError:S}=e,E=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=_?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,{loading:p,width:a,height:i,decoding:"async","data-nimg":m?"fill":"1",className:l,style:r({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,g,f,w,b,C,x))},[g,f,w,b,C,S,x,t]),onLoad:e=>{let t=e.currentTarget;h(t,g,f,w,b,C,x)},onError:e=>{N(!0),"blur"===f&&C(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let n,i;var a,{src:h,sizes:v,unoptimized:x=!1,priority:j=!1,loading:w,className:b,quality:C,width:N,height:y,fill:S,style:E,onLoad:H,onLoadingComplete:B,placeholder:I="empty",blurDataURL:k,layout:z,objectFit:P,objectPosition:O,lazyBoundary:L,lazyRoot:R}=e,M=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=s.useContext(u.ImageConfigContext),D=s.useMemo(()=>{let e=m||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[T]),W=M,A=W.loader||_.default;delete W.loader;let F="__next_img_default"in A;if(F){if("custom"===D.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=A;A=t=>{let{config:n}=t,r=o(t,["config"]);return e(r)}}if(z){"fill"===z&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(E=r({},E,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!v&&(v=t)}let Z="",Y=p(N),G=p(y);if("object"==typeof(a=h)&&(f(a)||void 0!==a.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,k=k||e.blurDataURL,Z=e.src,!S){if(Y||G){if(Y&&!G){let t=Y/e.width;G=Math.round(e.height*t)}else if(!Y&&G){let t=G/e.height;Y=Math.round(e.width*t)}}else Y=e.width,G=e.height}}let J=!j&&("lazy"===w||void 0===w);((h="string"==typeof h?h:Z).startsWith("data:")||h.startsWith("blob:"))&&(x=!0,J=!1),D.unoptimized&&(x=!0),F&&h.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(x=!0);let[q,X]=s.useState(!1),[V,U]=s.useState(!1),K=p(C),Q=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:O}:{},V?{}:{color:"transparent"},E),$="blur"===I&&k&&!q?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:Y,heightInt:G,blurWidth:n,blurHeight:i,blurDataURL:k,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:a,sizes:o,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:a,kind:"x"}}(t,i,o),d=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,r)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===l?e:r+1).concat(l)).join(", "),src:s({config:t,src:n,quality:a,width:c[d]})}}({config:D,src:h,unoptimized:x,width:Y,quality:K,sizes:v,loader:A}),et=h,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},er=s.useRef(H);s.useEffect(()=>{er.current=H},[H]);let ei=s.useRef(B);s.useEffect(()=>{ei.current=B},[B]);let ea=r({isLazy:J,imgAttributes:ee,heightInt:G,widthInt:Y,qualityInt:K,className:b,imgStyle:Q,blurStyle:$,loading:w,config:D,fill:S,unoptimized:x,placeholder:I,loader:A,srcString:et,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:X,setShowAltText:U},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(g,Object.assign({},ea,{ref:t})),j?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3085:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}=e,s=r||t,c=i||n,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7906:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4770:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return y}});var r=n(1527),i=n(3181),a=n.n(i),o=n(2644),s=n.n(o),c=n(9717),l=n.n(c),d=n(5924),u=n(563),_=n.n(u),m=n(959);let f=(e,t)=>{let n=(0,m.useRef)(null),r=(0,m.useRef)(),i=()=>{null!==t&&(n.current=setInterval(()=>{r.current()},t))},a=()=>{n.current&&clearInterval(n.current)},o=()=>{a(),i()};return(0,m.useEffect)(()=>{r.current=e},[e]),(0,m.useEffect)(()=>(i(),a),[t]),o};function p(e){let{contents:t}=e,n=e=>{let{count:t,clickPage:n}=e,i=[];for(let e=0;e<t;e++)i.push((0,r.jsx)("div",{onClick:()=>{n(e)},className:(0,d.Z)({[_().dot]:!0,[_().active]:e===a})},e));return(0,r.jsx)("div",{className:_().dots,children:i})},i=e=>{let{progress:t}=e;return(0,r.jsx)("div",{className:_().timeline,children:(0,r.jsx)("div",{style:{animationDuration:"".concat(5e3,"ms"),transitionDuration:"".concat(5e3,"ms"),width:"100%"},className:_().timelineActive})})},[a,o]=(0,m.useState)(0),[s,c]=(0,m.useState)(a),[u,p]=(0,m.useState)(!1),h=(0,m.useRef)(null),[g,v]=(0,m.useState)(!1),[x,j]=(0,m.useState)(null),w=t.length,b=f(()=>{C({targetIndex:(a+1+w)%w})},5e3);function C(e){let{targetIndex:t,isNegative:n=!1,resetPlayInterval:r=!1}=e;u||t===a||(p(!0),o(t),c(a),j(n?"negative":"position"),r&&b(),h.current=setTimeout(()=>{p(!1),h.current=null},500))}return(0,m.useEffect)(()=>()=>{h.current&&clearTimeout(h.current)},[]),(0,m.useEffect)(()=>{C({targetIndex:a})}),(0,r.jsxs)("section",{className:_().wrapper,children:[(0,r.jsx)("section",{className:_().image,children:(0,r.jsx)(l(),{className:_().screen,src:"https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202303111133810.png",alt:"screen",placeholder:"blur",blurDataURL:"/assets/dev1.png",width:755,height:510,priority:!0})}),(0,r.jsxs)("section",{className:_().carousel,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(0,r.jsx)("div",{className:(0,d.Z)({[_().pictures]:!0,[_().negative]:"negative"===x}),children:t.map((e,t)=>{let n=t===a;return(0,r.jsx)("section",{className:(0,d.Z)({[_().picture]:!0,[_().pictureCurrent]:n,[_().pictureSlideOut]:t===s&&x&&u,[_().pictureSlideIn]:n&&x&&u}),style:{animationDuration:"".concat(500,"ms"),transitionDuration:"".concat(500,"ms")},children:(0,r.jsx)(l(),{src:e.src,width:572,height:318,alt:"content"})},t)})}),(0,r.jsx)(n,{count:3,clickPage:e=>{C({targetIndex:e,isNegative:e<a,resetPlayInterval:!0})}})]}),(0,r.jsxs)("div",{className:(0,d.Z)({[_().intro]:!0}),children:[(0,r.jsx)("div",{style:{whiteSpace:"pre-line"},className:_().header,children:t[a].header}),(0,r.jsx)(i,{progress:100}),(0,r.jsx)("div",{className:_().content,children:t[a].content})]})]})}var h=n(960),g=n.n(h),v=n(1787),x=n.n(v);let j=e=>{let{pic:t,tech:n,src:i,header:a,description:o,projectSrc:s}=e;return(0,r.jsxs)("section",{className:g().contentSection,children:[(0,r.jsx)("div",{className:g().background,children:(0,r.jsx)(x(),{href:i,children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l(),{className:g().pic,alt:"dev",src:t,width:400,height:225,priority:!0})})})}),(0,r.jsx)("div",{className:g().intro,children:(0,r.jsxs)("div",{className:g().introText,children:[(0,r.jsx)(x(),{href:s,className:g().introHeader,children:a}),(0,r.jsxs)("div",{className:g().introContent,children:[(0,r.jsx)("span",{className:g().introDesc,children:o}),(0,r.jsx)("span",{className:g().introTech,children:n})]})]})})]})};function w(e){let{production:t}=e;return(0,r.jsxs)("section",{className:g().contentsWrapper,children:[(0,r.jsx)("div",{id:"title",className:g().titleWrapper,children:(0,r.jsx)("span",{className:g().title,children:"我的作品"})}),(0,r.jsx)("section",{className:g().contentWrapper,children:(0,r.jsx)("section",{className:g().cards,children:t.map((e,t)=>{let{src:n,pic:i,header:a,description:o,tech:s,projectSrc:c}=e;return(0,r.jsx)(j,{src:n,pic:i,header:a,description:o,tech:s,projectSrc:c},t)})})})]})}var b=n(1328),C=n(6979),N=!0;function y(e){let{introduction:t,project:n}=e,i=(0,C.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"wujinhjun-website"})}),(0,r.jsx)("section",{className:"header-fixed ".concat(i?"sticky":""),children:(0,r.jsx)(b.Z,{name:"home"})}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsx)(p,{contents:t}),(0,r.jsx)(w,{production:n})]})]})}},563:function(e){e.exports={wrapper:"Banner_wrapper__eBY0X",image:"Banner_image__oJeVY",carousel:"Banner_carousel__1I3qH",pictures:"Banner_pictures__wlKuE",pictureSlideOut:"Banner_pictureSlideOut__nspop","slide-x-out":"Banner_slide-x-out__xQ4IM",pictureSlideIn:"Banner_pictureSlideIn__diXjf","slide-x-in":"Banner_slide-x-in__ST6NL",negative:"Banner_negative__lM6Hw","slide-x-out-reverse":"Banner_slide-x-out-reverse__BJd6u","slide-x-in-reverse":"Banner_slide-x-in-reverse__2LVgY",picture:"Banner_picture__FOWBK",pictureCurrent:"Banner_pictureCurrent__5YYHX",dots:"Banner_dots__t2Mxy",dot:"Banner_dot__O_arg",active:"Banner_active__eD2bY",intro:"Banner_intro__2xG87",header:"Banner_header__X26Ph",timeline:"Banner_timeline__MbFh6",timelineActive:"Banner_timelineActive__uKYii",content:"Banner_content__Lnij9",button:"Banner_button__mDIpX"}},960:function(e){e.exports={contentsWrapper:"HomeContent_contentsWrapper__E55qa",titleWrapper:"HomeContent_titleWrapper__FSnjT",title:"HomeContent_title__Bs1xj",typing:"HomeContent_typing___zG3V",caret:"HomeContent_caret__L3FUq",contentWrapper:"HomeContent_contentWrapper__vn883",sectionTitleWrapper:"HomeContent_sectionTitleWrapper__1loJJ",sectionTitle:"HomeContent_sectionTitle__YguaA",line:"HomeContent_line___M9Kt",cards:"HomeContent_cards__O1A7e",contentSection:"HomeContent_contentSection__d7mJY",background:"HomeContent_background__Eb8Ia",pic:"HomeContent_pic__LwPHr",intro:"HomeContent_intro__Nm9HN",introText:"HomeContent_introText__mLDFG",introHeader:"HomeContent_introHeader__7dvKJ",introContent:"HomeContent_introContent__VOaaq",introDesc:"HomeContent_introDesc__iCu1p",introTech:"HomeContent_introTech__kd_5t",flipInX:"HomeContent_flipInX__KsGed"}},7009:function(e){e.exports={headerContainer:"Header_headerContainer__m5wGA",leftPanel:"Header_leftPanel__ob0aF",list:"Header_list___02Jq",button_wrapper:"Header_button_wrapper__iJH_a",text:"Header_text__YE7s8",bottom_line:"Header_bottom_line__360El",active:"Header_active__gnzlZ",bottomLine:"Header_bottomLine__zUzkC",rightPanel:"Header_rightPanel__rARBv",icon:"Header_icon__z9DUe"}},2644:function(e){e.exports={main:"Home_main__OVLM4"}},9717:function(e,t,n){e.exports=n(7727)}},function(e){e.O(0,[787,774,888,179],function(){return e(e.s=4284)}),_N_E=e.O()}]);