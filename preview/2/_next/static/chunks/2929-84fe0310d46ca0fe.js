"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2929],{5309:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(40431),r=n(82071);function l(e,t,n){return void 0===e||(0,r.Z)(e)?t:(0,o.Z)({},t,{ownerState:(0,o.Z)({},t.ownerState,n)})}},82071:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return"string"==typeof e}},61914:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e,t){return"function"==typeof e?e(t):e}},73820:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(40431),r=n(46750),l=n(84815),u=n(5309),i=n(89791);function c(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}var a=n(61914);let s=["elementType","externalSlotProps","ownerState"];function f(e){var t;let{elementType:n,externalSlotProps:f,ownerState:d}=e,Z=(0,r.Z)(e,s),v=(0,a.Z)(f,d),{props:p,internalRef:m}=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:l,className:u}=e;if(!t){let e=(0,i.Z)(null==l?void 0:l.className,null==r?void 0:r.className,u,null==n?void 0:n.className),t=(0,o.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==r?void 0:r.style),c=(0,o.Z)({},n,l,r);return e.length>0&&(c.className=e),Object.keys(t).length>0&&(c.style=t),{props:c,internalRef:void 0}}let a=function(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}((0,o.Z)({},l,r)),s=c(r),f=c(l),d=t(a),Z=(0,i.Z)(null==d?void 0:d.className,null==n?void 0:n.className,u,null==l?void 0:l.className,null==r?void 0:r.className),v=(0,o.Z)({},null==d?void 0:d.style,null==n?void 0:n.style,null==l?void 0:l.style,null==r?void 0:r.style),p=(0,o.Z)({},d,n,f,s);return Z.length>0&&(p.className=Z),Object.keys(v).length>0&&(p.style=v),{props:p,internalRef:d.ref}}((0,o.Z)({},Z,{externalSlotProps:v})),y=(0,l.Z)(m,null==v?void 0:v.ref,null==(t=e.additionalProps)?void 0:t.ref),h=(0,u.Z)(n,(0,o.Z)({},p,{ref:y}),d);return h}},81771:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(40431),r=n(46750),l=n(86006),u=n(89791),i=n(4323),c=n(51579),a=n(86601),s=n(95887),f=n(9268);let d=["className","component"];var Z=n(47327),v=n(5287),p=n(86356);let m=(0,v.Z)(),y=function(e={}){let{themeId:t,defaultTheme:n,defaultClassName:Z="MuiBox-root",generateClassName:v}=e,p=(0,i.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.Z),m=l.forwardRef(function(e,l){let i=(0,s.Z)(n),c=(0,a.Z)(e),{className:m,component:y="div"}=c,h=(0,r.Z)(c,d);return(0,f.jsx)(p,(0,o.Z)({as:y,ref:l,className:(0,u.Z)(m,v?v(Z):Z),theme:t&&i[t]||i},h))});return m}({themeId:p.Z,defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:Z.Z.generate});var h=y},65507:function(e,t,n){n.d(t,{Z:function(){return P}});var o=n(46750),r=n(40431),l=n(86006),u=n(89791),i=n(95135),c=n(47562),a=n(13809),s=n(96263),f=n(15749),d=n(86601),Z=n(41153),v=n(91559),p=n(48527),m=n(9268);let y=["component","direction","spacing","divider","children","className","useFlexGap"],h=(0,Z.Z)(),k=(0,s.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:h})}let N=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],g=({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,p.hB)(t),r=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),l=(0,v.P$)({values:e.direction,base:r}),u=(0,v.P$)({values:e.spacing,base:r});"object"==typeof l&&Object.keys(l).forEach((e,t,n)=>{let o=l[e];if(!o){let o=t>0?l[n[t-1]]:"column";l[e]=o}}),n=(0,i.Z)(n,(0,v.k9)({theme:t},u,(t,n)=>e.useFlexGap?{gap:(0,p.NA)(o,t)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${N(n?l[n]:e.direction)}`]:(0,p.NA)(o,t)}}))}return(0,v.dt)(t.breakpoints,n)};var j=n(95457),w=n(18006);let x=function(e={}){let{createStyledComponent:t=k,useThemeProps:n=b,componentName:i="MuiStack"}=e,s=()=>(0,c.Z)({root:["root"]},e=>(0,a.Z)(i,e),{}),f=t(g),Z=l.forwardRef(function(e,t){let i=n(e),c=(0,d.Z)(i),{component:a="div",direction:Z="column",spacing:v=0,divider:p,children:h,className:k,useFlexGap:b=!1}=c,N=(0,o.Z)(c,y),g=s();return(0,m.jsx)(f,(0,r.Z)({as:a,ownerState:{direction:Z,spacing:v,useFlexGap:b},ref:t,className:(0,u.Z)(g.root,k)},N,{children:p?function(e,t){let n=l.Children.toArray(e).filter(Boolean);return n.reduce((e,o,r)=>(e.push(o),r<n.length-1&&e.push(l.cloneElement(t,{key:`separator-${r}`})),e),[])}(h,p):h}))});return Z}({createStyledComponent:(0,j.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiStack"})});var P=x},23631:function(e,t,n){var o=n(2343);t.Z=o.Z},96263:function(e,t,n){var o=n(9312);let r=(0,o.ZP)();t.Z=r},6804:function(e,t,n){var o=n(86006);let r="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;t.Z=r},2343:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(86006),r=n(6804);function l(e){let t=o.useRef(e);return(0,r.Z)(()=>{t.current=e}),o.useCallback((...e)=>(0,t.current)(...e),[])}},20907:function(e,t,n){var o=n(86006);t.Z=o.createContext(null)},90300:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(71053);function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,o.Z)(e,t)}},71053:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}}}]);