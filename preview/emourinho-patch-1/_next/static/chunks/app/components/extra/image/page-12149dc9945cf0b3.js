(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3847],{34649:function(e,r,t){Promise.resolve().then(t.bind(t,82827))},65785:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(9268),s=t(81771),i=t(69881),a=t(65507),o=t(90409),l=t(88117),c=t(5669);function d(e){let{link:r,activeLast:t,disabled:a}=e,{name:o,href:l,icon:d}=r,p={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return l?(0,n.jsx)(i.Z,{component:c.r,href:l,sx:p,children:h}):(0,n.jsxs)(s.Z,{sx:p,children:[" ",h," "]})}function p(e){let{links:r,action:t,heading:c,moreLink:p,activeLast:x,sx:u,...m}=e,f=r[r.length-1].name;return(0,n.jsxs)(s.Z,{sx:{...u},children:[(0,n.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,n.jsxs)(s.Z,{sx:{flexGrow:1},children:[c&&(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!r.length&&(0,n.jsx)(l.Z,{separator:(0,n.jsx)(h,{}),...m,children:r.map(e=>(0,n.jsx)(d,{link:e,activeLast:x,disabled:e.name===f},e.name||""))})]}),t&&(0,n.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!p&&(0,n.jsx)(s.Z,{sx:{mt:2},children:p.map(e=>(0,n.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e))})]})}function h(){return(0,n.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},92882:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(9268),s=t(86006),i=t(34102),a=t(4957),o=t(23343),l=t(81771);let c=(0,s.forwardRef)((e,r)=>{let{ratio:t,overlay:s,disabledEffect:c=!1,alt:d,src:p,afterLoad:h,delayTime:x,threshold:u,beforeLoad:m,delayMethod:f,placeholder:g,wrapperProps:j,scrollPosition:Z,effect:b="blur",visibleByDefault:v,wrapperClassName:y,useIntersectionObserver:w,sx:k,...I}=e,_=(0,a.Z)(),C=!!s&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:s||(0,o.Fq)(_.palette.grey[900],.48)}},L=(0,n.jsx)(l.Z,{component:i.LazyLoadImage,alt:d,src:p,afterLoad:h,delayTime:x,threshold:u,beforeLoad:m,delayMethod:f,placeholder:g,wrapperProps:j,scrollPosition:Z,visibleByDefault:v,effect:c?void 0:b,useIntersectionObserver:w,wrapperClassName:y||"component-image-wrapper",placeholderSrc:c?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",...!!t&&{top:0,left:0,position:"absolute"}}});return(0,n.jsx)(l.Z,{ref:r,component:"span",className:"component-image",sx:{overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",...!!t&&{width:1},"& span.component-image-wrapper":{width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important",...!!t&&{pt:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1";return({"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"})[e]}(t)}},...C,...k},...I,children:L})});var d=c},5669:function(e,r,t){"use strict";t.d(r,{r:function(){return l}});var n=t(9268),s=t(86006),i=t(35846),a=t.n(i);let o=(0,s.forwardRef)((e,r)=>{let{...t}=e;return(0,n.jsx)(a(),{ref:r,...t})});var l=o},82827:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(9268),s=t(81771),i=t(17095),a=t(65507),o=t(89843),l=t(17558),c=t(90409),d=t(17950),p=t(82331),h=t(92882),x=t(65785);let u=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"].map((e,r)=>({ratio:e,url:p.QJ.image.cover(r+1)}));function m(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{sx:{py:5,bgcolor:e=>"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(x.Z,{heading:"Image",links:[{name:"Components",href:d.H.components},{name:"Image"}]})})}),(0,n.jsx)(o.Z,{sx:{my:10},children:(0,n.jsxs)(a.Z,{spacing:5,children:[(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{title:"List"}),(0,n.jsx)(s.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:u.map(e=>(0,n.jsx)(h.Z,{alt:e.ratio,src:e.url,sx:{borderRadius:2}},e.ratio))})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{title:"Aspect Ratio"}),(0,n.jsx)(s.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:u.map(e=>(0,n.jsxs)(a.Z,{spacing:1,children:[(0,n.jsx)(c.Z,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),(0,n.jsx)(h.Z,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})]})]})})]})}}},function(e){e.O(0,[1278,2929,9083,5846,5226,4102,1675,7950,2331,2667,6488,1744],function(){return e(e.s=34649)}),_N_E=e.O()}]);