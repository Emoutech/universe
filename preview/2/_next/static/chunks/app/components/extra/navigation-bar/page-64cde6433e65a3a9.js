(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6603],{4624:function(e,t,n){Promise.resolve().then(n.bind(n,38846))},65785:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(9268),r=n(81771),o=n(69881),a=n(65507),l=n(90409),c=n(88117),d=n(5669);function s(e){let{link:t,activeLast:n,disabled:a}=e,{name:l,href:c,icon:s}=t,u={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return c?(0,i.jsx)(o.Z,{component:d.r,href:c,sx:u,children:h}):(0,i.jsxs)(r.Z,{sx:u,children:[" ",h," "]})}function u(e){let{links:t,action:n,heading:d,moreLink:u,activeLast:p,sx:g,...m}=e,x=t[t.length-1].name;return(0,i.jsxs)(r.Z,{sx:{...g},children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,i.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,i.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,i.jsx)(c.Z,{separator:(0,i.jsx)(h,{}),...m,children:t.map(e=>(0,i.jsx)(s,{link:e,activeLast:p,disabled:e.name===x},e.name||""))})]}),n&&(0,i.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!u&&(0,i.jsx)(r.Z,{sx:{mt:2},children:u.map(e=>(0,i.jsx)(o.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,i.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},55315:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(9268),r=n(86006),o=n(35551),a=n(81771);let l=(0,r.forwardRef)((e,t)=>{let{icon:n,width:r=20,sx:l,...c}=e;return(0,i.jsx)(a.Z,{ref:t,component:o.JO,className:"component-iconify",icon:n,sx:{width:r,height:r,...l},...c})});var c=l},66589:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(9268),r=n(86006),o=n(4957),a=n(81771),l=n(95457),c=n(23343);let d=(0,l.ZP)(a.Z)(e=>{let{theme:t,ownerState:n}=e,i="light"===t.palette.mode,r="filled"===n.variant,o="outlined"===n.variant,a="soft"===n.variant,l={..."default"===n.color&&{...r&&{color:i?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...o&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...a&&{color:t.palette.text.secondary,backgroundColor:(0,c.Fq)(t.palette.grey[500],.16)}}},d={..."default"!==n.color&&{...r&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...o&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"2px solid ".concat(t.palette[n.color].main)},...a&&{color:t.palette[n.color][i?"dark":"light"],backgroundColor:(0,c.Fq)(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...l,...d}}),s=(0,r.forwardRef)((e,t)=>{let{children:n,color:r="default",variant:l="soft",startIcon:c,endIcon:s,sx:u,...h}=e,p=(0,o.Z)(),g={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,i.jsxs)(d,{ref:t,component:"span",ownerState:{color:r,variant:l},sx:{...c&&{pl:.75},...s&&{pr:.75},...u},theme:p,...h,children:[c&&(0,i.jsxs)(a.Z,{sx:{mr:.75,...g},children:[" ",c," "]}),n,s&&(0,i.jsxs)(a.Z,{sx:{ml:.75,...g},children:[" ",s," "]})]})});var u=s},55073:function(e,t,n){"use strict";n.d(t,{EM:function(){return V},Hg:function(){return H},Mr:function(){return q}});var i=n(9268),r=n(86006),o=n(65507);let a=e=>({itemGap:(null==e?void 0:e.itemGap)||4,iconSize:(null==e?void 0:e.iconSize)||24,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||44,itemSubHeight:(null==e?void 0:e.itemSubHeight)||36,itemPadding:(null==e?void 0:e.itemPadding)||"4px 8px 4px 12px",itemRadius:(null==e?void 0:e.itemRadius)||8,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1}),l=e=>({itemGap:(null==e?void 0:e.itemGap)||4,iconSize:(null==e?void 0:e.iconSize)||22,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||56,itemSubHeight:(null==e?void 0:e.itemSubHeight)||34,itemPadding:(null==e?void 0:e.itemPadding)||"6px 0 0 0",itemRadius:(null==e?void 0:e.itemRadius)||6,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1}),c=e=>({itemGap:(null==e?void 0:e.itemGap)||6,iconSize:(null==e?void 0:e.iconSize)||22,currentRole:null==e?void 0:e.currentRole,itemRootHeight:(null==e?void 0:e.itemRootHeight)||32,itemSubHeight:(null==e?void 0:e.itemSubHeight)||34,itemPadding:(null==e?void 0:e.itemPadding)||"0 6px 0 6px",itemRadius:(null==e?void 0:e.itemRadius)||6,hiddenLabel:(null==e?void 0:e.hiddenLabel)||!1});var d=n(19550),s=n(48343),u=n(26591),h=n(74373),p=n(58583),g=n(4957),m=n(69881),x=n(19744),f=n(88939),b=n(5669),v=n(55315),j=n(95457),y=n(23343),Z=n(33401),k=n(27052);let w=(0,j.ZP)(k.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,open:n,depth:i,config:r,theme:o}=e,a=1!==i,l={root:{color:"light"===o.palette.mode?o.palette.primary.main:o.palette.primary.light,backgroundColor:(0,y.Fq)(o.palette.primary.main,.08),"&:hover":{backgroundColor:(0,y.Fq)(o.palette.primary.main,.16)}},sub:{color:o.palette.text.primary,backgroundColor:o.palette.action.selected,"&:hover":{backgroundColor:o.palette.action.hover}}};return{flexDirection:"column",justifyContent:"center",borderRadius:r.itemRadius,minHeight:r.itemRootHeight,color:o.palette.text.secondary,margin:"0 ".concat(r.itemGap,"px ").concat(r.itemGap,"px ").concat(r.itemGap,"px"),...r.hiddenLabel&&!a&&{padding:r.itemPadding},...t&&{...l.root},...a&&{margin:0,flexDirection:"row",padding:o.spacing(0,1),minHeight:r.itemSubHeight,...t&&{...l.sub}},...n&&!t&&{color:o.palette.text.primary,backgroundColor:o.palette.action.hover}}}),C=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,marginRight:0}}),S=(0,r.forwardRef)((e,t)=>{let{item:n,depth:r,open:o,active:a,externalLink:l,config:c,...d}=e,s=(0,g.Z)(),{title:u,path:h,icon:p,children:j,disabled:y,caption:Z,roles:k}=n,S=1!==r,R=(0,i.jsxs)(w,{disableGutters:!0,ref:t,open:o,depth:r,active:a,disabled:y,config:c,...d,children:[p&&(0,i.jsx)(C,{size:c.iconSize,children:p}),!(c.hiddenLabel&&!S)&&(0,i.jsx)(f.Z,{sx:{width:1,flex:"unset",...!S&&{px:.5,mt:.5}},primary:u,primaryTypographyProps:{noWrap:!0,fontSize:10,lineHeight:"16px",textAlign:"center",textTransform:"capitalize",fontWeight:a?"fontWeightBold":"fontWeightSemiBold",...S&&{textAlign:"unset",fontSize:s.typography.body2.fontSize,lineHeight:s.typography.body2.lineHeight,fontWeight:a?"fontWeightSemiBold":"fontWeightMedium"}}}),Z&&(0,i.jsx)(x.Z,{title:Z,arrow:!0,placement:"right",children:(0,i.jsx)(v.Z,{width:16,icon:"eva:info-outline",sx:{color:"text.disabled",...!S&&{top:11,left:6,position:"absolute"}}})}),!!j&&(0,i.jsx)(v.Z,{width:16,icon:"eva:arrow-ios-forward-fill",sx:{top:11,right:6,position:"absolute"}})]});return k&&!k.includes("".concat(c.currentRole))?null:l?(0,i.jsx)(m.Z,{href:h,target:"_blank",rel:"noopener",underline:"none",sx:{width:1,...y&&{cursor:"default"}},children:R}):(0,i.jsx)(m.Z,{component:b.r,href:h,underline:"none",sx:{width:1,...y&&{cursor:"default"}},children:R})});function R(e){let{data:t,depth:n,hasChild:o,config:a}=e,l=(0,r.useRef)(null),c=(0,h.jD)(),g=(0,p.X)(t.path,o),m=t.path.includes("http"),[x,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{x&&v()},[c]),(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll(".".concat(d.Z.root)));document.body.style.overflow="",document.body.style.padding="",e.forEach(e=>{e.style.padding=""})},[x]);let b=(0,r.useCallback)(()=>{f(!0)},[]),v=(0,r.useCallback)(()=>{f(!1)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S,{ref:l,item:t,depth:n,open:x,active:g,externalLink:m,onMouseEnter:b,onMouseLeave:v,config:a}),o&&(0,i.jsx)(s.ZP,{open:x,anchorEl:l.current,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},PaperProps:{onMouseEnter:b,onMouseLeave:v},sx:{pointerEvents:"none",["& .".concat(u.Z.paper)]:{mt:.5,width:160,...x&&{pointerEvents:"auto"}}},children:(0,i.jsx)(P,{data:t.children,depth:n,config:a})})]})}function P(e){let{data:t,depth:n,config:r}=e;return(0,i.jsx)(o.Z,{spacing:.5,children:t.map(e=>(0,i.jsx)(R,{data:e,depth:n+1,hasChild:!!e.children,config:r},e.title+e.path))})}var H=(0,r.memo)(function(e){let{data:t,config:n,sx:r,...a}=e;return(0,i.jsx)(o.Z,{sx:r,...a,children:t.map((e,t)=>(0,i.jsx)(z,{items:e.items,config:l(n)},e.subheader||t))})});function z(e){let{items:t,config:n}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsx)(R,{data:e,depth:1,hasChild:!!e.children,config:n},e.title+e.path))})}var L=n(64020),W=n(74495),F=n(54711);let E=(0,j.ZP)(k.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,depth:n,config:i,theme:r}=e,o=1!==n,a=n>2,l={root:{color:"light"===r.palette.mode?r.palette.primary.main:r.palette.primary.light,backgroundColor:(0,y.Fq)(r.palette.primary.main,.08),"&:hover":{backgroundColor:(0,y.Fq)(r.palette.primary.main,.16)}},sub:{color:r.palette.text.primary,backgroundColor:"transparent","&:hover":{backgroundColor:r.palette.action.hover}}};return{padding:i.itemPadding,marginBottom:i.itemGap,borderRadius:i.itemRadius,minHeight:i.itemRootHeight,color:r.palette.text.secondary,...t&&{...l.root},...o&&{minHeight:i.itemSubHeight,...t&&{...l.sub}},...a&&{paddingLeft:r.spacing(n)}}}),B=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,alignItems:"center",justifyContent:"center"}}),G=(0,j.ZP)("span")(e=>{let{active:t,theme:n}=e;return{width:4,height:4,borderRadius:"50%",backgroundColor:n.palette.text.disabled,transition:n.transitions.create(["transform"],{duration:n.transitions.duration.shorter}),...t&&{transform:"scale(2)",backgroundColor:n.palette.primary.main}}}),M=(0,j.ZP)(F.Z)(e=>{let{config:t,theme:n}=e;return{...n.typography.overline,fontSize:11,cursor:"pointer",display:"inline-flex",padding:t.itemPadding,paddingTop:n.spacing(2),marginBottom:t.itemGap,paddingBottom:n.spacing(1),color:n.palette.text.disabled,transition:n.transitions.create(["color"],{duration:n.transitions.duration.shortest}),"&:hover":{color:n.palette.text.primary}}});var T=n(81771);function N(e){let{item:t,open:n,depth:r,active:o,config:a,externalLink:l,...c}=e,{title:d,path:s,icon:u,info:h,children:p,disabled:g,caption:j,roles:y}=t,Z=1!==r,k=(0,i.jsxs)(E,{disableGutters:!0,disabled:g,active:o,depth:r,config:a,...c,children:[(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsx)(B,{size:a.iconSize,children:u}),Z&&(0,i.jsx)(B,{size:a.iconSize,children:(0,i.jsx)(G,{active:o})})]}),!(a.hiddenLabel&&!Z)&&(0,i.jsx)(f.Z,{primary:d,secondary:j?(0,i.jsx)(x.Z,{title:j,placement:"top-start",children:(0,i.jsx)("span",{children:j})}):null,primaryTypographyProps:{noWrap:!0,typography:"body2",textTransform:"capitalize",fontWeight:o?"fontWeightSemiBold":"fontWeightMedium"},secondaryTypographyProps:{noWrap:!0,component:"span",typography:"caption",color:"text.disabled"}}),h&&(0,i.jsx)(T.Z,{component:"span",sx:{ml:1,lineHeight:0},children:h}),!!p&&(0,i.jsx)(v.Z,{width:16,icon:n?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",sx:{ml:1,flexShrink:0}})]});return y&&!y.includes("".concat(a.currentRole))?null:l?(0,i.jsx)(m.Z,{href:s,target:"_blank",rel:"noopener",underline:"none",color:"inherit",sx:{...g&&{cursor:"default"}},children:k}):p?k:(0,i.jsx)(m.Z,{component:b.r,href:s,underline:"none",color:"inherit",sx:{...g&&{cursor:"default"}},children:k})}function O(e){let{data:t,depth:n,hasChild:o,config:a}=e,l=(0,h.jD)(),c=(0,p.X)(t.path,o),d=t.path.includes("http"),[s,u]=(0,r.useState)(c);(0,r.useEffect)(()=>{c||m()},[l]);let g=(0,r.useCallback)(()=>{u(e=>!e)},[]),m=(0,r.useCallback)(()=>{u(!1)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{item:t,depth:n,open:s,active:c,externalLink:d,onClick:g,config:a}),o&&(0,i.jsx)(W.Z,{in:s,unmountOnExit:!0,children:(0,i.jsx)(I,{data:t.children,depth:n,config:a})})]})}function I(e){let{data:t,depth:n,config:r}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsx)(O,{data:e,depth:n+1,hasChild:!!e.children,config:r},e.title+e.path))})}var q=(0,r.memo)(function(e){let{data:t,config:n,sx:r,...l}=e;return(0,i.jsx)(o.Z,{sx:r,...l,children:t.map((e,t)=>(0,i.jsx)(_,{subheader:e.subheader,items:e.items,config:a(n)},e.subheader||t))})});function _(e){let{subheader:t,items:n,config:o}=e,[a,l]=(0,r.useState)(!0),c=(0,r.useCallback)(()=>{l(e=>!e)},[]),d=n.map(e=>(0,i.jsx)(O,{data:e,depth:1,hasChild:!!e.children,config:o},e.title+e.path));return(0,i.jsx)(L.Z,{disablePadding:!0,sx:{px:2},children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M,{disableGutters:!0,disableSticky:!0,onClick:c,config:o,children:t}),(0,i.jsx)(W.Z,{in:a,children:d})]}):d})}var D=n(42933);let A=(0,j.ZP)(k.Z,{shouldForwardProp:e=>"active"!==e})(e=>{let{active:t,open:n,depth:i,config:r,theme:o}=e,a={color:o.palette.text.primary,backgroundColor:o.palette.action.selected};return{flexShrink:0,padding:r.itemPadding,marginRight:r.itemGap,borderRadius:r.itemRadius,minHeight:r.itemRootHeight,color:o.palette.text.secondary,...t&&{...a},...1!==i&&{margin:0,padding:o.spacing(0,1),minHeight:r.itemSubHeight},...n&&!t&&{color:o.palette.text.primary,backgroundColor:o.palette.action.hover}}}),X=(0,j.ZP)(Z.Z)(e=>{let{size:t}=e;return{width:t,height:t,flexShrink:0,marginRight:0}}),U=(0,r.forwardRef)((e,t)=>{let{item:n,depth:r,open:o,active:a,externalLink:l,config:c,...d}=e,{title:s,path:u,icon:h,info:p,children:g,disabled:j,caption:y,roles:Z}=n,k=1!==r,w=(0,i.jsxs)(A,{disableGutters:!0,ref:t,open:o,depth:r,active:a,disabled:j,config:c,...d,children:[h&&(0,i.jsx)(X,{size:c.iconSize,children:h}),!(c.hiddenLabel&&!k)&&(0,i.jsx)(f.Z,{sx:{...!k&&{ml:1}},primary:s,primaryTypographyProps:{noWrap:!0,typography:"body2",textTransform:"capitalize",fontWeight:a?"fontWeightBold":"fontWeightMedium",...k&&{fontWeight:a?"fontWeightSemiBold":"fontWeightMedium"}}}),p&&(0,i.jsx)(T.Z,{component:"span",sx:{ml:.5,lineHeight:0},children:p}),y&&(0,i.jsx)(x.Z,{title:y,arrow:!0,children:(0,i.jsx)(v.Z,{width:16,icon:"eva:info-outline",sx:{ml:.5,color:"text.disabled"}})}),!!g&&(0,i.jsx)(v.Z,{icon:k?"eva:arrow-ios-forward-fill":"eva:arrow-ios-downward-fill",width:16,sx:{flexShrink:0,ml:.5}})]});return Z&&!Z.includes("".concat(c.currentRole))?null:l?(0,i.jsx)(m.Z,{href:u,target:"_blank",rel:"noopener",underline:"none",sx:{...j&&{cursor:"default"}},children:w}):(0,i.jsx)(m.Z,{component:b.r,href:u,underline:"none",sx:{...j&&{cursor:"default"}},children:w})});function J(e){let{data:t,depth:n,hasChild:o,config:a}=e,l=(0,r.useRef)(null),c=(0,h.jD)(),g=(0,p.X)(t.path,o),m=t.path.includes("http"),[x,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{x&&v()},[c]),(0,r.useEffect)(()=>{let e=Array.from(document.querySelectorAll(".".concat(d.Z.root)));document.body.style.overflow="",document.body.style.padding="",e.forEach(e=>{e.style.padding=""})},[x]);let b=()=>{f(!0)},v=()=>{f(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{ref:l,item:t,depth:n,open:x,active:g,externalLink:m,onMouseEnter:b,onMouseLeave:v,config:a}),o&&(0,i.jsx)(s.ZP,{open:x,anchorEl:l.current,anchorOrigin:1===n?{vertical:"bottom",horizontal:"left"}:{vertical:"center",horizontal:"right"},transformOrigin:1===n?{vertical:"top",horizontal:"left"}:{vertical:"center",horizontal:"left"},PaperProps:{onMouseEnter:b,onMouseLeave:v},sx:{pointerEvents:"none",["& .".concat(u.Z.paper)]:{width:160,...x&&{pointerEvents:"auto"}}},children:(0,i.jsx)(K,{data:t.children,depth:n,config:a})})]})}function K(e){let{data:t,depth:n,config:r}=e;return(0,i.jsx)(o.Z,{spacing:.5,children:t.map(e=>(0,i.jsx)(J,{data:e,depth:n+1,hasChild:!!e.children,config:r},e.title+e.path))})}var V=(0,r.memo)(function(e){let{data:t,config:n,sx:r,...a}=e;return(0,i.jsx)(o.Z,{direction:"row",sx:{mx:"auto",...D.O1.y,...r},...a,children:t.map((e,t)=>(0,i.jsx)(Y,{items:e.items,config:c(n)},e.subheader||t))})});function Y(e){let{items:t,config:n}=e;return(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsx)(J,{data:e,depth:1,hasChild:!!e.children,config:n},e.title+e.path))})}},5669:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var i=n(9268),r=n(86006),o=n(35846),a=n.n(o);let l=(0,r.forwardRef)((e,t)=>{let{...n}=e;return(0,i.jsx)(a(),{ref:t,...n})});var c=l},74373:function(e,t,n){"use strict";n.d(t,{UO:function(){return i.useParams},jD:function(){return i.usePathname},tv:function(){return i.useRouter},lr:function(){return i.useSearchParams}}),n(58583);var i=n(56008)},58583:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var i=n(56008);function r(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,i.usePathname)(),r=e.startsWith("#"),o="/"===e?"/":"".concat(e,"/"),a=!r&&n===o,l=!r&&n.includes(o);return t?l:a}},38846:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var i=n(9268),r=n(4974),o=n.n(r),a=n(86006),l=n(23343),c=n(81771),d=n(51213),s=n(23835),u=n(65507),h=n(37504),p=n(95824),g=n(74766),m=n(5793),x=n(37467),f=n(89843),b=n(1326),v=n(39714),j=n(90409),y=n(26610),Z=n(74933),k=n(17950),w=n(55315),C=n(66589),S=n(55073),R=n(65785);let P={itemGap:4,iconSize:24,currentRole:"admin",itemRootHeight:44,itemSubHeight:36,itemPadding:"4px 8px 4px 12px",itemRadius:8,hiddenLabel:!1};function H(){let[e,t]=(0,a.useState)(P),n=!o()(P,e),r=(0,a.useCallback)((e,n)=>{t(t=>({...t,[e]:n}))},[]),d=(0,a.useCallback)(()=>{t(P)},[]),s=(0,i.jsxs)(u.Z,{spacing:2,children:[(0,i.jsx)(j.Z,{variant:"h6",children:" Nav Vertical "}),(0,i.jsx)(S.Mr,{data:L,config:e,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:e=>e.customShadows.z20}})]}),h=(0,i.jsxs)(u.Z,{spacing:2,children:[(0,i.jsx)(j.Z,{variant:"h6",children:" Nav Mini "}),(0,i.jsx)(S.Hg,{data:L,config:e,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:e=>e.customShadows.z20}})]}),g=(0,i.jsxs)(u.Z,{spacing:2,children:[(0,i.jsx)(j.Z,{variant:"h6",children:" Nav Horizontal "}),(0,i.jsx)(p.Z,{position:"static",component:"nav",sx:{borderRadius:2,boxShadow:e=>e.customShadows.z20},children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(S.EM,{data:L,config:e})})})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,i.jsx)(f.Z,{children:(0,i.jsx)(R.Z,{heading:"Navigation Bar",links:[{name:"Components",href:k.H.components},{name:"Navigation Bar"}]})})}),(0,i.jsxs)(f.Z,{sx:{my:10},children:[g,(0,i.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",sx:{p:5,mt:5,borderRadius:2,bgcolor:e=>(0,l.Fq)(e.palette.grey[500],.04)},children:[s,h,(0,i.jsx)(z,{config:e,onChangeConfig:r,canReset:n,onReset:d})]})]})]})}function z(e){let{config:t,onChangeConfig:n,canReset:r,onReset:o}=e;return(0,i.jsxs)(u.Z,{component:s.Z,variant:"outlined",spacing:3,sx:{p:3,borderRadius:2},children:[(0,i.jsxs)(u.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,i.jsx)(j.Z,{variant:"h6",children:"Controls"}),r&&(0,i.jsx)(v.Z,{onClick:o,children:(0,i.jsx)(h.Z,{color:"error",variant:"dot",invisible:!r,children:(0,i.jsx)(w.Z,{icon:"solar:restart-bold"})})})]}),(0,i.jsx)(b.Z,{label:"Item Gap",type:"number",value:t.itemGap||"",onChange:e=>n("itemGap",Number(e.target.value))}),(0,i.jsx)(b.Z,{select:!0,label:"Icon Size",value:t.iconSize,onChange:e=>n("iconSize",Number(e.target.value)),SelectProps:{native:!0},children:[16,20,24,28,32,36,40].map(e=>(0,i.jsx)("option",{value:e,children:e},e))}),(0,i.jsx)(b.Z,{select:!0,label:"Item Radius",value:t.itemRadius,onChange:e=>n("itemRadius",Number(e.target.value)||.5),SelectProps:{native:!0},children:[0,4,8,12,16,20,24].map(e=>(0,i.jsx)("option",{value:e,children:e},e))}),(0,i.jsxs)(y.Z,{value:t.currentRole,onChange:e=>n("currentRole",e.target.value),children:[(0,i.jsx)(x.Z,{children:"Role"}),["admin","user"].map(e=>(0,i.jsx)(Z.Z,{value:e,control:(0,i.jsx)(d.Z,{}),label:e,sx:{textTransform:"capitalize"}},e))]}),(0,i.jsx)(b.Z,{label:"Root Height",type:"number",value:t.itemRootHeight||"",onChange:e=>n("itemRootHeight",Number(e.target.value))}),(0,i.jsx)(b.Z,{label:"Sub Height",type:"number",value:t.itemSubHeight||"",onChange:e=>n("itemSubHeight",Number(e.target.value))}),(0,i.jsx)(b.Z,{label:"Item Padding",value:t.itemPadding||"",onChange:e=>n("itemPadding",e.target.value)}),(0,i.jsx)(Z.Z,{control:(0,i.jsx)(g.Z,{checked:t.hiddenLabel,onClick:()=>n("hiddenLabel",!t.hiddenLabel)}),label:"Hidden Label"})]})}let L=[{subheader:"Marketing",items:[{title:"Landing",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:bat",width:1}),roles:["admin"],caption:"Display only admin role"},{title:"Services",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:cyclist",width:1}),roles:["admin","user"]},{title:"Case Studies",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:3d-cursor-alt",width:1}),info:(0,i.jsx)(C.Z,{color:"error",children:"+32"}),children:[{title:"Case Studies",path:"#"},{title:"Case Study",path:"#"}]},{title:"Blog",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:3d-mpr-toggle",width:1}),children:[{title:"Blog Posts",path:"#"},{title:"Blog Post",path:"#"}]},{title:"About",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:airport-01",width:1})},{title:"Contact",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:battery-full",width:1})},{title:"Tours",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:basketball",width:1}),children:[{title:"Tours",path:"#"},{title:"Tour",path:"#"}]},{title:"Checkout",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:area",width:1}),children:[{title:"Checkout",path:"#"},{title:"Checkout Complete",path:"#"}]}]},{subheader:"Travel",items:[{title:"Level 1",path:"#",icon:(0,i.jsx)(w.Z,{icon:"carbon:play",width:1}),children:[{title:"Level 2.1",path:"#"},{title:"Level 2.2",path:"#"},{title:"Level 2.3",path:"#",children:[{title:"Level 3.1",path:"#"},{title:"Level 3.2",path:"#"}]}]}]}]},42933:function(e,t,n){"use strict";n.d(t,{D9:function(){return d},Ls:function(){return s},O1:function(){return p},XK:function(){return h},uS:function(){return c},v3:function(){return u}});var i=n(23343),r=n(69515),o=n(90182),a=n(67490),l=n(46017);let c=e=>{let{theme:t,bgcolor:n,dropdown:i}=e;return{...s({blur:20,opacity:.9,color:t.palette.background.paper,...!!n&&{color:n}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...i&&{padding:t.spacing(.5),boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius}}},d=e=>({...e.typography.body2,padding:e.spacing(.75,1),borderRadius:.75*e.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(a.Z.selected)]:{fontWeight:e.typography.fontWeightSemiBold,backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["& .".concat(o.Z.root)]:{padding:e.spacing(.5),marginLeft:e.spacing(-.5),marginRight:e.spacing(.5)},["&.".concat(l.Z.option,'[aria-selected="true"]')]:{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["&+.".concat(r.Z.root)]:{margin:e.spacing(.5,0)}});function s(e){let t=(null==e?void 0:e.color)||"#000000",n=(null==e?void 0:e.blur)||6,r=(null==e?void 0:e.opacity)||.8,o=null==e?void 0:e.imgUrl;return o?{position:"relative",backgroundImage:"url(".concat(o,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,i.Fq)(t,r)}}:{backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,i.Fq)(t,r)}}function u(e){let t=(null==e?void 0:e.direction)||"to bottom",n=null==e?void 0:e.startColor,i=null==e?void 0:e.endColor,r=null==e?void 0:e.imgUrl,o=null==e?void 0:e.color;return r?{background:"linear-gradient(".concat(t,", ").concat(n||o,", ").concat(i||o,"), url(").concat(r,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(t,", ").concat(n,", ").concat(i,")")}}function h(e){return{background:"-webkit-linear-gradient(".concat(e,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let p={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5011,4571,9744,254,3628,5226,570,2968,3451,1326,9857,2237,7950,2667,6488,1744],function(){return e(e.s=4624)}),_N_E=e.O()}]);