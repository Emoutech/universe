(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{21568:function(e,t,n){Promise.resolve().then(n.bind(n,8532))},65785:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(9268),o=n(81771),i=n(69881),l=n(65507),a=n(90409),s=n(88117),c=n(5669);function d(e){let{link:t,activeLast:n,disabled:l}=e,{name:a,href:s,icon:d}=t,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},p=(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),a]});return s?(0,r.jsx)(i.Z,{component:c.r,href:s,sx:h,children:p}):(0,r.jsxs)(o.Z,{sx:h,children:[" ",p," "]})}function h(e){let{links:t,action:n,heading:c,moreLink:h,activeLast:u,sx:x,...g}=e,m=t[t.length-1].name;return(0,r.jsxs)(o.Z,{sx:{...x},children:[(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,r.jsxs)(o.Z,{sx:{flexGrow:1},children:[c&&(0,r.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:c}),!!t.length&&(0,r.jsx)(s.Z,{separator:(0,r.jsx)(p,{}),...g,children:t.map(e=>(0,r.jsx)(d,{link:e,activeLast:u,disabled:e.name===m},e.name||""))})]}),n&&(0,r.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,r.jsx)(o.Z,{sx:{mt:2},children:h.map(e=>(0,r.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function p(){return(0,r.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},55315:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268),o=n(86006),i=n(35551),l=n(81771);let a=(0,o.forwardRef)((e,t)=>{let{icon:n,width:o=20,sx:a,...s}=e;return(0,r.jsx)(l.Z,{ref:t,component:i.JO,className:"component-iconify",icon:n,sx:{width:o,height:o,...a},...s})});var s=a},5669:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(9268),o=n(86006),i=n(35846),l=n.n(i);let a=(0,o.forwardRef)((e,t)=>{let{...n}=e;return(0,r.jsx)(l(),{ref:t,...n})});var s=a},15211:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268),o=n(23343),i=n(23835),l=n(17558),a=n(65507);function s(e){let{title:t,sx:n,children:s,...c}=e;return(0,r.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:e=>(0,o.Fq)(e.palette.grey[500],.04)},children:[t&&(0,r.jsx)(l.Z,{title:t}),(0,r.jsx)(a.Z,{spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:{p:5,minHeight:180,...n},...c,children:s})]})}},8532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(9268),o=n(81771),i=n(23835),l=n(65507),a=n(89843),s=n(17950),c=n(65785),d=n(86006),h=n(95457),p=n(23343),u=n(86530),x=n(95698),g=n(12455),m=n(94905),j=n(90409),Z=n(99005),b=n(63619),f=n(42933),v=n(55315);let y=["Select campaign settings","Create an ad group","Create an ad"],k=(0,h.ZP)(Z.Z)(e=>{let{theme:t}=e;return{["&.".concat(b.Z.alternativeLabel)]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},["&.".concat(b.Z.active)]:{["& .".concat(b.Z.line)]:{borderColor:t.palette.success.main}},["&.".concat(b.Z.completed)]:{["& .".concat(b.Z.line)]:{borderColor:t.palette.success.main}},["& .".concat(b.Z.line)]:{borderRadius:1,borderTopWidth:3,borderColor:t.palette.divider}}}),w=(0,h.ZP)("div")(e=>{let{theme:t,ownerState:n}=e;return{height:22,display:"flex",alignItems:"center",color:t.palette.text.disabled,...n.active&&{color:t.palette.success.main},"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}});function C(e){let{active:t,completed:n,className:o}=e;return(0,r.jsx)(w,{ownerState:{active:t},className:o,children:n?(0,r.jsx)(v.Z,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):(0,r.jsx)("div",{className:"QontoStepIcon-circle"})})}let S=(0,h.ZP)(Z.Z)(e=>{let{theme:t}=e;return{["&.".concat(b.Z.alternativeLabel)]:{top:22},["&.".concat(b.Z.active)]:{["& .".concat(b.Z.line)]:{...(0,f.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})}},["&.".concat(b.Z.completed)]:{["& .".concat(b.Z.line)]:{...(0,f.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})}},["& .".concat(b.Z.line)]:{height:3,border:0,borderRadius:1,backgroundColor:t.palette.divider}}}),F=(0,h.ZP)("div")(e=>{let{theme:t,ownerState:n}=e;return{zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,backgroundColor:"light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[700],...n.active&&{boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)",color:t.palette.common.white,...(0,f.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})},...n.completed&&{color:t.palette.common.white,...(0,f.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})}}});function I(e){let{active:t,completed:n,className:o,icon:i}=e,l={1:(0,r.jsx)(v.Z,{icon:"eva:settings-2-outline",width:24}),2:(0,r.jsx)(v.Z,{icon:"eva:person-add-outline",width:24}),3:(0,r.jsx)(v.Z,{icon:"eva:monitor-outline",width:24})};return(0,r.jsx)(F,{ownerState:{completed:n,active:t},className:o,children:l[String(i)]})}function R(){let[e,t]=(0,d.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{alternativeLabel:!0,activeStep:e,connector:(0,r.jsx)(k,{}),children:y.map(e=>(0,r.jsx)(u.Z,{children:(0,r.jsx)(m.Z,{StepIconComponent:C,children:e})},e))}),(0,r.jsx)(o.Z,{sx:{mb:5}}),(0,r.jsx)(g.Z,{alternativeLabel:!0,activeStep:e,connector:(0,r.jsx)(S,{}),children:y.map(e=>(0,r.jsx)(u.Z,{children:(0,r.jsx)(m.Z,{StepIconComponent:I,children:e})},e))}),e===y.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsx)(j.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,r.jsx)(x.Z,{color:"inherit",onClick:()=>{t(0)},sx:{mr:1},children:"Reset"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsx)(j.Z,{sx:{my:1},children:function(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}(e)})}),(0,r.jsxs)(o.Z,{sx:{textAlign:"right"},children:[(0,r.jsx)(x.Z,{disabled:0===e,onClick:()=>{t(e=>e-1)},sx:{mr:1},children:"Back"}),(0,r.jsx)(x.Z,{variant:"contained",onClick:()=>{t(e=>e+1)},sx:{mr:1},children:e===y.length-1?"Finish":"Next"})]})]})]})}var L=n(17583);let N=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function W(){let[e,t]=(0,d.useState)(0),n=()=>{t(e=>e+1)},l=()=>{t(e=>e-1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{activeStep:e,orientation:"vertical",children:N.map((e,t)=>(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(m.Z,{optional:2===t?(0,r.jsx)(j.Z,{variant:"caption",children:"Last step"}):null,children:e.label}),(0,r.jsxs)(L.Z,{children:[(0,r.jsx)(j.Z,{children:e.description}),(0,r.jsxs)(o.Z,{sx:{mt:3},children:[(0,r.jsx)(x.Z,{variant:"contained",onClick:n,children:t===N.length-1?"Finish":"Continue"}),(0,r.jsx)(x.Z,{disabled:0===t,onClick:l,children:"Back"})]})]})]},e.label))}),e===N.length&&(0,r.jsxs)(i.Z,{sx:{p:3,mt:3,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:[(0,r.jsx)(j.Z,{paragraph:!0,children:"All steps completed - you're finished"}),(0,r.jsx)(x.Z,{onClick:()=>{t(0)},children:"Reset"})]})]})}let q=["Select campaign settings","Create an ad group","Create an ad"];function B(){let[e,t]=(0,d.useState)(0),[n,l]=(0,d.useState)(new Set),a=e=>1===e,s=e=>n.has(e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{activeStep:e,children:q.map((e,t)=>{let n={},o={};return a(t)&&(o.optional=(0,r.jsx)(j.Z,{variant:"caption",children:"Optional"})),s(t)&&(n.completed=!1),(0,r.jsx)(u.Z,{...n,children:(0,r.jsx)(m.Z,{...o,children:e})},e)})}),e===q.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsx)(j.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(o.Z,{sx:{flexGrow:1}}),(0,r.jsx)(x.Z,{onClick:()=>{t(0)},children:"Reset"})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsxs)(j.Z,{sx:{my:1},children:[" Step ",e+1]})}),(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(x.Z,{color:"inherit",disabled:0===e,onClick:()=>{t(e=>e-1)},sx:{mr:1},children:"Back"}),(0,r.jsx)(o.Z,{sx:{flexGrow:1}}),a(e)&&(0,r.jsx)(x.Z,{color:"inherit",onClick:()=>{if(!a(e))throw Error("You can't skip a step that isn't optional.");t(e=>e+1),l(t=>{let n=new Set(t.values());return n.add(e),n})},sx:{mr:1},children:"Skip"}),(0,r.jsx)(x.Z,{variant:"contained",onClick:()=>{let r=n;s(e)&&(r=new Set(r.values())).delete(e),t(e=>e+1),l(r)},children:e===q.length-1?"Finish":"Next"})]})]})]})}let H=["Select campaign settings","Create an ad group","Create an ad"];function z(){let[e,t]=(0,d.useState)(0),[n,l]=(0,d.useState)(new Set),a=e=>1===e,s=e=>n.has(e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{activeStep:e,alternativeLabel:!0,children:H.map((e,t)=>{let n={};return s(t)&&(n.completed=!1),(0,r.jsx)(u.Z,{...n,children:(0,r.jsx)(m.Z,{children:e})},e)})}),e===H.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsx)(j.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(o.Z,{sx:{flexGrow:1}}),(0,r.jsx)(x.Z,{onClick:()=>{t(0)},children:"Reset"})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:e=>(0,p.Fq)(e.palette.grey[500],.12)},children:(0,r.jsxs)(j.Z,{sx:{my:1},children:[" Step ",e+1]})}),(0,r.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,r.jsx)(x.Z,{color:"inherit",disabled:0===e,onClick:()=>{t(e=>e-1)},sx:{mr:1},children:"Back"}),(0,r.jsx)(o.Z,{sx:{flexGrow:1}}),a(e)&&(0,r.jsx)(x.Z,{color:"inherit",onClick:()=>{if(!a(e))throw Error("You can't skip a step that isn't optional.");t(e=>e+1),l(t=>{let n=new Set(t.values());return n.add(e),n})},sx:{mr:1},children:"Skip"}),(0,r.jsx)(x.Z,{variant:"contained",onClick:()=>{let r=n;s(e)&&(r=new Set(r.values())).delete(e),t(e=>e+1),l(r)},children:e===H.length-1?"Finish":"Next"})]})]})]})}var A=n(15211);function O(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(c.Z,{heading:"Stepper",links:[{name:"Components",href:s.H.components},{name:"Stepper"}],moreLink:["https://mui.com/components/steppers"]})})}),(0,r.jsx)(a.Z,{sx:{my:10},children:(0,r.jsxs)(l.Z,{spacing:3,children:[(0,r.jsx)(A.Z,{title:"Horizontal Linear Stepper",children:(0,r.jsx)(i.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,r.jsx)(B,{})})}),(0,r.jsx)(A.Z,{title:"Linear Alternative Label",children:(0,r.jsx)(i.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,r.jsx)(z,{})})}),(0,r.jsx)(A.Z,{title:"Vertical Linear Stepper",children:(0,r.jsx)(i.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,r.jsx)(W,{})})}),(0,r.jsx)(A.Z,{title:"Customized Stepper",children:(0,r.jsx)(i.Z,{variant:"outlined",sx:{p:3,width:1},children:(0,r.jsx)(R,{})})})]})})]})}},42933:function(e,t,n){"use strict";n.d(t,{D9:function(){return c},Ls:function(){return d},O1:function(){return u},XK:function(){return p},uS:function(){return s},v3:function(){return h}});var r=n(23343),o=n(69515),i=n(90182),l=n(67490),a=n(46017);let s=e=>{let{theme:t,bgcolor:n,dropdown:r}=e;return{...d({blur:20,opacity:.9,color:t.palette.background.paper,...!!n&&{color:n}}),backgroundImage:"url(/assets/cyan-blur.png), url(/assets/red-blur.png)",backgroundRepeat:"no-repeat, no-repeat",backgroundPosition:"top right, left bottom",backgroundSize:"50%, 50%",...r&&{padding:t.spacing(.5),boxShadow:t.customShadows.dropdown,borderRadius:1.25*t.shape.borderRadius}}},c=e=>({...e.typography.body2,padding:e.spacing(.75,1),borderRadius:.75*e.shape.borderRadius,"&:not(:last-of-type)":{marginBottom:4},["&.".concat(l.Z.selected)]:{fontWeight:e.typography.fontWeightSemiBold,backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["& .".concat(i.Z.root)]:{padding:e.spacing(.5),marginLeft:e.spacing(-.5),marginRight:e.spacing(.5)},["&.".concat(a.Z.option,'[aria-selected="true"]')]:{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}},["&+.".concat(o.Z.root)]:{margin:e.spacing(.5,0)}});function d(e){let t=(null==e?void 0:e.color)||"#000000",n=(null==e?void 0:e.blur)||6,o=(null==e?void 0:e.opacity)||.8,i=null==e?void 0:e.imgUrl;return i?{position:"relative",backgroundImage:"url(".concat(i,")"),"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,o)}}:{backdropFilter:"blur(".concat(n,"px)"),WebkitBackdropFilter:"blur(".concat(n,"px)"),backgroundColor:(0,r.Fq)(t,o)}}function h(e){let t=(null==e?void 0:e.direction)||"to bottom",n=null==e?void 0:e.startColor,r=null==e?void 0:e.endColor,o=null==e?void 0:e.imgUrl,i=null==e?void 0:e.color;return o?{background:"linear-gradient(".concat(t,", ").concat(n||i,", ").concat(r||i,"), url(").concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{background:"linear-gradient(".concat(t,", ").concat(n,", ").concat(r,")")}}function p(e){return{background:"-webkit-linear-gradient(".concat(e,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}let u={x:{msOverflowStyle:"none",scrollbarWidth:"none",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},y:{msOverflowStyle:"none",scrollbarWidth:"none",overflowY:"scroll","&::-webkit-scrollbar":{display:"none"}}}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5226,8444,7950,2667,6488,1744],function(){return e(e.s=21568)}),_N_E=e.O()}]);