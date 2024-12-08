(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{54266:function(e,n,t){Promise.resolve().then(t.bind(t,35786))},65785:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var l=t(9268),s=t(81771),r=t(69881),i=t(65507),o=t(90409),a=t(88117),c=t(5669);function d(e){let{link:n,activeLast:t,disabled:i}=e,{name:o,href:a,icon:d}=n,x={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},u=(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return a?(0,l.jsx)(r.Z,{component:c.r,href:a,sx:x,children:u}):(0,l.jsxs)(s.Z,{sx:x,children:[" ",u," "]})}function x(e){let{links:n,action:t,heading:c,moreLink:x,activeLast:h,sx:j,...p}=e,f=n[n.length-1].name;return(0,l.jsxs)(s.Z,{sx:{...j},children:[(0,l.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,l.jsxs)(s.Z,{sx:{flexGrow:1},children:[c&&(0,l.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,l.jsx)(a.Z,{separator:(0,l.jsx)(u,{}),...p,children:n.map(e=>(0,l.jsx)(d,{link:e,activeLast:h,disabled:e.name===f},e.name||""))})]}),t&&(0,l.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!x&&(0,l.jsx)(s.Z,{sx:{mt:2},children:x.map(e=>(0,l.jsx)(r.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function u(){return(0,l.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},39168:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var l=t(86006);function s(e){let[n,t]=(0,l.useState)(!!e),s=(0,l.useCallback)(()=>{t(!0)},[]),r=(0,l.useCallback)(()=>{t(!1)},[]),i=(0,l.useCallback)(()=>{t(e=>!e)},[]);return{value:n,onTrue:s,onFalse:r,onToggle:i,setValue:t}}},5669:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var l=t(9268),s=t(86006),r=t(35846),i=t.n(r);let o=(0,s.forwardRef)((e,n)=>{let{...t}=e;return(0,l.jsx)(i(),{ref:n,...t})});var a=o},35786:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var l=t(9268),s=t(86006),r=t(81771),i=t(17095),o=t(65507),a=t(74766),c=t(89843),d=t(17558),x=t(90409),u=t(8235),h=t(74933),j=t(17950),p=t(66328),f=t(39168),g=t(55315),Z=t(65785),m=t(7319);function b(){let e=(0,f.k)(),[n,t]=(0,s.useState)([]),[b,v]=(0,s.useState)(null),[k,w]=(0,s.useState)(null),y=(0,s.useCallback)(e=>{let n=e[0];n&&v(Object.assign(n,{preview:URL.createObjectURL(n)}))},[]),U=(0,s.useCallback)(e=>{let n=e[0];n&&w(Object.assign(n,{preview:URL.createObjectURL(n)}))},[]),C=(0,s.useCallback)(e=>{t([...n,...e.map(e=>Object.assign(e,{preview:URL.createObjectURL(e)}))])},[n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,l.jsx)(c.Z,{children:(0,l.jsx)(Z.Z,{heading:"Upload",links:[{name:"Components",href:j.H.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),(0,l.jsx)(c.Z,{sx:{my:10},children:(0,l.jsxs)(o.Z,{spacing:5,children:[(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(d.Z,{title:"Upload Multi File",action:(0,l.jsx)(h.Z,{control:(0,l.jsx)(a.Z,{checked:e.value,onClick:e.onToggle}),label:"Show Thumbnail"})}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(m.gq,{multiple:!0,thumbnail:e.value,files:n,onDrop:C,onRemove:e=>{let l=n.filter(n=>n!==e);t(l)},onRemoveAll:()=>{t([])},onUpload:()=>console.info("ON UPLOAD")})})]}),(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(d.Z,{title:"Upload Single File"}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(m.gq,{file:b,onDrop:y,onDelete:()=>v(null)})})]}),(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(d.Z,{title:"Upload Avatar"}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(m.ab,{file:k,onDrop:U,helperText:(0,l.jsxs)(x.Z,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,l.jsx)("br",{})," max size of ",(0,p.oe)(3145728)]})})})]}),(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(d.Z,{title:"Upload Box"}),(0,l.jsx)(u.Z,{children:(0,l.jsxs)(o.Z,{direction:"row",spacing:2,children:[(0,l.jsx)(m.un,{}),(0,l.jsx)(m.un,{placeholder:(0,l.jsxs)(o.Z,{spacing:.5,alignItems:"center",children:[(0,l.jsx)(g.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,l.jsx)(x.Z,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5011,9744,655,5226,4102,7578,436,9581,7950,1935,7319,2667,6488,1744],function(){return e(e.s=54266)}),_N_E=e.O()}]);