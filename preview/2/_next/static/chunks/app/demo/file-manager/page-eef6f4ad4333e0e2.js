(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5040],{45832:function(e,t,n){Promise.resolve().then(n.bind(n,990))},94565:function(e,t,n){"use strict";n.d(t,{ZP:function(){return w},M4:function(){return s},l2:function(){return c},wE:function(){return h}});var r=n(88461),o=n(9788),l=n(6375),a=n(15170),i=n(246);function s(e,t){let n=!1;return e&&t&&(n=(0,r.Z)(new Date(t),new Date(e))),n}function c(e,t){let n=new Date().getFullYear(),r=e?(0,o.Z)(e):null,s=t?(0,o.Z)(t):null,c=!!e&&!!t&&(0,l.Z)(new Date(e),new Date(t)),d=!!e&&!!t&&(0,a.Z)(new Date(e),new Date(t));return n===r&&n===s?d?c?(0,i.Mu)(t,"dd MMM yy"):"".concat((0,i.Mu)(e,"dd")," - ").concat((0,i.Mu)(t,"dd MMM yy")):"".concat((0,i.Mu)(e,"dd MMM")," - ").concat((0,i.Mu)(t,"dd MMM yy")):"".concat((0,i.Mu)(e,"dd MMM yy")," - ").concat((0,i.Mu)(t,"dd MMM yy"))}var d=n(86006);function h(e,t){let[n,r]=(0,d.useState)(!1),[o,l]=(0,d.useState)(t),[a,h]=(0,d.useState)(e),u=s(a,o),x=(0,d.useCallback)(()=>{r(!0)},[]),p=(0,d.useCallback)(()=>{r(!1)},[]),g=(0,d.useCallback)(e=>{h(e)},[]),j=(0,d.useCallback)(e=>{u&&l(null),l(e)},[u]),f=(0,d.useCallback)(()=>{h(null),l(null)},[]);return{startDate:a,endDate:o,onChangeStartDate:g,onChangeEndDate:j,open:n,onOpen:x,onClose:p,onReset:f,selected:!!a&&!!o,error:u,label:"".concat((0,i.Mu)(a)," - ").concat((0,i.Mu)(o)),shortLabel:c(a,o),setStartDate:h,setEndDate:l}}var u=n(9268),x=n(75852),p=n(27925),g=n(23835),j=n(65507),f=n(95698),m=n(63615),Z=n(77294),b=n(71932),C=n(87194),v=n(18393),y=n(52992);function w(e){let{title:t="Select date range",variant:n="input",startDate:r,endDate:o,onChangeStartDate:l,onChangeEndDate:a,open:i,onClose:s,error:c}=e,d=(0,y.F)("up","md"),h="calendar"===n;return(0,u.jsxs)(m.Z,{fullWidth:!0,maxWidth:!h&&"xs",open:i,onClose:s,PaperProps:{sx:{...h&&{maxWidth:720}}},children:[(0,u.jsx)(Z.Z,{sx:{pb:2},children:t}),(0,u.jsxs)(C.Z,{sx:{...h&&d&&{overflow:"unset"}},children:[(0,u.jsx)(j.Z,{justifyContent:"center",spacing:h?3:2,direction:h&&d?"row":"column",sx:{pt:1},children:h?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,u.jsx)(p.W,{value:r,onChange:l})}),(0,u.jsx)(g.Z,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:(0,u.jsx)(p.W,{value:o,onChange:a})})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.M,{label:"Start date",value:r,onChange:l}),(0,u.jsx)(x.M,{label:"End date",value:o,onChange:a})]})}),c&&(0,u.jsx)(v.Z,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),(0,u.jsxs)(b.Z,{children:[(0,u.jsx)(f.Z,{variant:"outlined",color:"inherit",onClick:s,children:"Cancel"}),(0,u.jsx)(f.Z,{disabled:c,variant:"contained",onClick:s,children:"Apply"})]})]})}},16500:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9268),o=n(23343),l=n(81771),a=n(90409),i=n(65507);function s(e){let{title:t,imgUrl:n,action:s,filled:c,description:d,sx:h,...u}=e;return(0,r.jsxs)(i.Z,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...c&&{borderRadius:2,bgcolor:e=>(0,o.Fq)(e.palette.grey[500],.04),border:e=>"dashed 1px ".concat((0,o.Fq)(e.palette.grey[500],.08))},...h},...u,children:[(0,r.jsx)(l.Z,{component:"img",alt:"empty content",src:n||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),t&&(0,r.jsx)(a.Z,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:t}),d&&(0,r.jsx)(a.Z,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:d}),s&&s]})}},66589:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(9268),o=n(86006),l=n(4957),a=n(81771),i=n(95457),s=n(23343);let c=(0,i.ZP)(a.Z)(e=>{let{theme:t,ownerState:n}=e,r="light"===t.palette.mode,o="filled"===n.variant,l="outlined"===n.variant,a="soft"===n.variant,i={..."default"===n.color&&{...o&&{color:r?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...l&&{backgroundColor:"transparent",color:t.palette.text.primary,border:"2px solid ".concat(t.palette.text.primary)},...a&&{color:t.palette.text.secondary,backgroundColor:(0,s.Fq)(t.palette.grey[500],.16)}}},c={..."default"!==n.color&&{...o&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...l&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:"2px solid ".concat(t.palette[n.color].main)},...a&&{color:t.palette[n.color][r?"dark":"light"],backgroundColor:(0,s.Fq)(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...i,...c}}),d=(0,o.forwardRef)((e,t)=>{let{children:n,color:o="default",variant:i="soft",startIcon:s,endIcon:d,sx:h,...u}=e,x=(0,l.Z)(),p={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,r.jsxs)(c,{ref:t,component:"span",ownerState:{color:o,variant:i},sx:{...s&&{pl:.75},...d&&{pr:.75},...h},theme:x,...u,children:[s&&(0,r.jsxs)(a.Z,{sx:{mr:.75,...p},children:[" ",s," "]}),n,d&&(0,r.jsxs)(a.Z,{sx:{ml:.75,...p},children:[" ",d," "]})]})});var h=d},85633:function(e,t,n){"use strict";function r(e,t,n){return e?Math.max(0,(1+e)*t-n):0}function o(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function l(e,t){return"desc"===e?(e,n)=>o(e,n,t):(e,n)=>-o(e,n,t)}n.d(t,{$W:function(){return j},K:function(){return v},et:function(){return u},S_:function(){return F},Z4:function(){return w},hM:function(){return g},fQ:function(){return r},sQ:function(){return l},x6:function(){return i}});var a=n(86006);function i(e){let[t,n]=(0,a.useState)(!!(null==e?void 0:e.defaultDense)),[r,o]=(0,a.useState)((null==e?void 0:e.defaultCurrentPage)||0),[l,i]=(0,a.useState)((null==e?void 0:e.defaultOrderBy)||"name"),[s,c]=(0,a.useState)((null==e?void 0:e.defaultRowsPerPage)||5),[d,h]=(0,a.useState)((null==e?void 0:e.defaultOrder)||"asc"),[u,x]=(0,a.useState)((null==e?void 0:e.defaultSelected)||[]),p=(0,a.useCallback)(e=>{let t=l===e&&"asc"===d;""!==e&&(h(t?"desc":"asc"),i(e))},[d,l]),g=(0,a.useCallback)(e=>{let t=u.includes(e)?u.filter(t=>t!==e):[...u,e];x(t)},[u]),j=(0,a.useCallback)(e=>{o(0),c(parseInt(e.target.value,10))},[]),f=(0,a.useCallback)(e=>{n(e.target.checked)},[]),m=(0,a.useCallback)((e,t)=>{if(e){x(t);return}x([])},[]),Z=(0,a.useCallback)((e,t)=>{o(t)},[]),b=(0,a.useCallback)(()=>{o(0)},[]),C=(0,a.useCallback)(e=>{x([]),r&&e<2&&o(r-1)},[r]),v=(0,a.useCallback)(e=>{let{totalRows:t,totalRowsInPage:n,totalRowsFiltered:l}=e,a=u.length;if(x([]),r){if(a===n)o(r-1);else if(a===l)o(0);else if(a>n){let e=Math.ceil((t-a)/s)-1;o(e)}}},[r,s,u.length]);return{dense:t,order:d,page:r,orderBy:l,rowsPerPage:s,selected:u,onSelectRow:g,onSelectAllRows:m,onSort:p,onChangePage:Z,onChangeDense:f,onResetPage:b,onChangeRowsPerPage:j,onUpdatePageDeleteRow:C,onUpdatePageDeleteRows:v,setPage:o,setDense:n,setOrder:h,setOrderBy:i,setSelected:x,setRowsPerPage:c}}var s=n(9268),c=n(35599),d=n(2568),h=n(16500);function u(e){let{notFound:t,sx:n}=e;return(0,s.jsx)(c.Z,{children:t?(0,s.jsx)(d.Z,{colSpan:12,children:(0,s.jsx)(h.Z,{filled:!0,title:"No Data",sx:{py:10,...n}})}):(0,s.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var x=n(65507),p=n(9238);function g(e){let{...t}=e;return(0,s.jsx)(c.Z,{...t,children:(0,s.jsx)(d.Z,{colSpan:12,children:(0,s.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,s.jsx)(p.Z,{sx:{borderRadius:1.5,width:48,height:48,flexShrink:0}}),(0,s.jsx)(p.Z,{sx:{width:1,height:12}}),(0,s.jsx)(p.Z,{sx:{width:180,height:12}}),(0,s.jsx)(p.Z,{sx:{width:160,height:12}}),(0,s.jsx)(p.Z,{sx:{width:140,height:12}}),(0,s.jsx)(p.Z,{sx:{width:120,height:12}})]})})})}function j(e){let{emptyRows:t,height:n}=e;return t?(0,s.jsx)(c.Z,{sx:{...n&&{height:n*t}},children:(0,s.jsx)(d.Z,{colSpan:9})}):null}var f=n(81771),m=n(42424),Z=n(28992),b=n(41275);let C={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function v(e){let{order:t,orderBy:n,rowCount:r=0,headLabel:o,numSelected:l=0,onSort:a,onSelectAllRows:i,sx:h}=e;return(0,s.jsx)(Z.Z,{sx:h,children:(0,s.jsxs)(c.Z,{children:[i&&(0,s.jsx)(d.Z,{padding:"checkbox",children:(0,s.jsx)(m.Z,{indeterminate:!!l&&l<r,checked:!!r&&l===r,onChange:e=>i(e.target.checked)})}),o.map(e=>(0,s.jsx)(d.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:a?(0,s.jsxs)(b.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>a(e.id),children:[e.label,n===e.id?(0,s.jsx)(f.Z,{sx:{...C},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id))]})})}var y=n(90409);function w(e){let{dense:t,action:n,rowCount:r,numSelected:o,onSelectAllRows:l,sx:a,...i}=e;return o?(0,s.jsxs)(x.Z,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...a},...i,children:[(0,s.jsx)(m.Z,{indeterminate:!!o&&o<r,checked:!!r&&o===r,onChange:e=>l(e.target.checked)}),(0,s.jsxs)(y.Z,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[o," selected"]}),n&&n]}):null}var k=n(74766),S=n(74933),D=n(44823);function F(e){let{dense:t,onChangeDense:n,rowsPerPageOptions:r=[5,10,25],sx:o,...l}=e;return(0,s.jsxs)(f.Z,{sx:{position:"relative",...o},children:[(0,s.jsx)(D.Z,{rowsPerPageOptions:r,component:"div",...l,sx:{borderTopColor:"transparent"}}),n&&(0,s.jsx)(S.Z,{label:"Dense",control:(0,s.jsx)(k.Z,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},82085:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},t:function(){return l}});var r=n(4957),o=n(52992);function l(e){let t=(0,r.Z)(),n=(0,o.z)(),l=t.breakpoints.up("xl"===n?"lg":n),a=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][l]?t.typography[e][l]:t.typography[e],i=Math.round(16*parseFloat(a.fontSize)),s=Number(t.typography[e].lineHeight)*i,{fontWeight:c,letterSpacing:d}=t.typography[e];return{fontSize:i,lineHeight:s,fontWeight:c,letterSpacing:d}}var a=n(9268),i=n(86006),s=n(69881),c=n(90409);let d=(0,i.forwardRef)((e,t)=>{let{asLink:n,variant:r="body1",line:o=2,persistent:i=!1,children:d,sx:h,...u}=e,{lineHeight:x}=l(r),p={overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:o,WebkitBoxOrient:"vertical",...i&&{height:x*o},...h};return n?(0,a.jsx)(s.Z,{color:"inherit",ref:t,variant:r,sx:{...p},...u,children:d}):(0,a.jsx)(c.Z,{ref:t,variant:r,sx:{...p},...u,children:d})});var h=d},31358:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(86006);function o(e){let{click:t,doubleClick:n,timeout:o=250}=e,l=(0,r.useRef)(),a=()=>{l&&(clearTimeout(l.current),l.current=null)};return(0,r.useCallback)(e=>{a(),t&&1===e.detail&&(l.current=setTimeout(()=>{t(e)},o)),e.detail%2==0&&n(e)},[t,n,o])}},990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ef}});var r=n(9268),o=n(86006),l=n(65507),a=n(95698),i=n(89843),s=n(90409),c=n(48114),d=n(70686),h=n(246),u=n(82331),x=n(39168),p=n(55315),g=n(16500),j=n(67639),f=n(60989),m=n(16418),Z=n(85633),b=n(94565),C=n(4957),v=n(81771),y=n(21387),w=n(19744),k=n(13658),S=n(39714),D=n(8399),F=n(69319),R=n(60486),I=n(46350),M=n(37487),T=n(14200),P=n(8929),W=n(42424),O=n(88939),z=n(23343),L=n(35599),E=n(84037),A=n(2568),B=n(32428),N=n(71118),q=n(31358),_=n(38744),Q=n(66328),U=n(31931),K=n(51399),G=n(2575),H=n(54489);function $(e){let{row:t,selected:n,onSelectRow:i,onDeleteRow:c}=e,d=(0,C.Z)(),{name:h,size:u,type:g,modifiedAt:m,shared:Z,isFavorited:b}=t,{enqueueSnackbar:v}=(0,K.Ds)(),{copy:y}=(0,_.m)(),[w,k]=(0,o.useState)(""),D=(0,x.k)(b),R=(0,x.k)(),$=(0,x.k)(),Y=(0,x.k)(),J=(0,U.S)(),V=(0,o.useCallback)(e=>{k(e.target.value)},[]),X=(0,q.D)({click:()=>{R.onTrue()},doubleClick:()=>console.info("DOUBLE CLICK")}),ee=(0,o.useCallback)(()=>{v("Copied!"),y(t.url)},[y,v,t.url]),et={borderTop:"solid 1px ".concat((0,z.Fq)(d.palette.grey[500],.16)),borderBottom:"solid 1px ".concat((0,z.Fq)(d.palette.grey[500],.16)),"&:first-of-type":{borderTopLeftRadius:16,borderBottomLeftRadius:16,borderLeft:"solid 1px ".concat((0,z.Fq)(d.palette.grey[500],.16))},"&:last-of-type":{borderTopRightRadius:16,borderBottomRightRadius:16,borderRight:"solid 1px ".concat((0,z.Fq)(d.palette.grey[500],.16))}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(L.Z,{selected:n,sx:{borderRadius:2,["&.".concat(E.Z.selected,", &:hover")]:{backgroundColor:"background.paper",boxShadow:d.customShadows.z20,transition:d.transitions.create(["background-color","box-shadow"],{duration:d.transitions.duration.shortest}),"&:hover":{backgroundColor:"background.paper",boxShadow:d.customShadows.z20}},["& .".concat(F.Z.root)]:{...et},...R.value&&{["& .".concat(F.Z.root)]:{...et}}},children:[(0,r.jsx)(A.Z,{padding:"checkbox",children:(0,r.jsx)(W.Z,{checked:n,onDoubleClick:()=>console.info("ON DOUBLE CLICK"),onClick:i})}),(0,r.jsx)(A.Z,{onClick:X,children:(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,r.jsx)(j.ZP,{file:g,sx:{width:36,height:36}}),(0,r.jsx)(s.Z,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...R.value&&{fontWeight:"fontWeightBold"}},children:h})]})}),(0,r.jsx)(A.Z,{onClick:X,sx:{whiteSpace:"nowrap"},children:(0,Q.oe)(u)}),(0,r.jsx)(A.Z,{onClick:X,sx:{whiteSpace:"nowrap"},children:g}),(0,r.jsx)(A.Z,{onClick:X,sx:{whiteSpace:"nowrap"},children:(0,r.jsx)(O.Z,{primary:(0,I.Z)(new Date(m),"dd MMM yyyy"),secondary:(0,I.Z)(new Date(m),"p"),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),(0,r.jsx)(A.Z,{align:"right",onClick:X,children:(0,r.jsx)(B.Z,{max:4,sx:{display:"inline-flex",["& .".concat(N.Z.avatar)]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:Z&&Z.map(e=>(0,r.jsx)(M.Z,{alt:e.name,src:e.avatarUrl},e.id))})}),(0,r.jsxs)(A.Z,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[(0,r.jsx)(W.Z,{color:"warning",icon:(0,r.jsx)(p.Z,{icon:"eva:star-outline"}),checkedIcon:(0,r.jsx)(p.Z,{icon:"eva:star-fill"}),checked:D.value,onChange:D.onToggle,sx:{p:.75}}),(0,r.jsx)(S.Z,{color:J.open?"inherit":"default",onClick:J.onOpen,children:(0,r.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})]})]}),(0,r.jsxs)(U.Z,{open:J.open,onClose:J.onClose,arrow:"right-top",sx:{width:160},children:[(0,r.jsxs)(P.Z,{onClick:()=>{J.onClose(),ee()},children:[(0,r.jsx)(p.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,r.jsxs)(P.Z,{onClick:()=>{J.onClose(),$.onTrue()},children:[(0,r.jsx)(p.Z,{icon:"solar:share-bold"}),"Share"]}),(0,r.jsx)(T.Z,{sx:{borderStyle:"dashed"}}),(0,r.jsxs)(P.Z,{onClick:()=>{Y.onTrue(),J.onClose()},sx:{color:"error.main"},children:[(0,r.jsx)(p.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),(0,r.jsx)(H.Z,{item:t,favorited:D.value,onFavorite:D.onToggle,onCopyLink:ee,open:R.value,onClose:R.onFalse,onDelete:c}),(0,r.jsx)(G.Z,{open:$.value,shared:Z,inviteEmail:w,onChangeInvite:V,onCopyLink:ee,onClose:()=>{$.onFalse(),k("")}}),(0,r.jsx)(f.Q,{open:Y.value,onClose:Y.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,r.jsx)(a.Z,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}let Y=[{id:"name",label:"Name"},{id:"size",label:"Size",width:120},{id:"type",label:"Type",width:120},{id:"modifiedAt",label:"Modified",width:140},{id:"shared",label:"Shared",align:"right",width:140},{id:"",width:88}];function J(e){let{table:t,tableData:n,notFound:o,onDeleteRow:l,dataFiltered:a,onOpenConfirm:i}=e,s=(0,C.Z)(),{dense:c,page:d,order:h,orderBy:u,rowsPerPage:x,selected:g,onSelectRow:j,onSelectAllRows:f,onSort:m,onChangeDense:b,onChangePage:I,onChangeRowsPerPage:M}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.Z,{sx:{position:"relative",m:s.spacing(-2,-3,-3,-3)},children:[(0,r.jsx)(Z.Z4,{dense:c,numSelected:g.length,rowCount:n.length,onSelectAllRows:e=>f(e,n.map(e=>e.id)),action:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.Z,{title:"Share",children:(0,r.jsx)(S.Z,{color:"primary",children:(0,r.jsx)(p.Z,{icon:"solar:share-bold"})})}),(0,r.jsx)(w.Z,{title:"Delete",children:(0,r.jsx)(S.Z,{color:"primary",onClick:i,children:(0,r.jsx)(p.Z,{icon:"solar:trash-bin-trash-bold"})})})]}),sx:{pl:1,pr:2,top:16,left:24,right:24,width:"auto",borderRadius:1.5}}),(0,r.jsx)(D.Z,{sx:{p:s.spacing(0,3,3,3)},children:(0,r.jsxs)(y.Z,{size:c?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 16px"},children:[(0,r.jsx)(Z.K,{order:h,orderBy:u,headLabel:Y,rowCount:n.length,numSelected:g.length,onSort:m,onSelectAllRows:e=>f(e,n.map(e=>e.id)),sx:{["& .".concat(F.Z.head)]:{"&:first-of-type":{borderTopLeftRadius:12,borderBottomLeftRadius:12},"&:last-of-type":{borderTopRightRadius:12,borderBottomRightRadius:12}}}}),(0,r.jsxs)(k.Z,{children:[a.slice(d*x,d*x+x).map(e=>(0,r.jsx)($,{row:e,selected:g.includes(e.id),onSelectRow:()=>j(e.id),onDeleteRow:()=>l(e.id)},e.id)),(0,r.jsx)(Z.$W,{height:c?58:78,emptyRows:(0,Z.fQ)(d,x,n.length)}),(0,r.jsx)(Z.et,{notFound:o,sx:{m:-2,borderRadius:1.5,border:"dashed 1px ".concat(s.palette.divider)}})]})]})})]}),(0,r.jsx)(Z.S_,{count:a.length,page:d,rowsPerPage:x,onPageChange:I,onRowsPerPageChange:M,dense:c,onChangeDense:b,sx:{["& .".concat(R.Z.toolbar)]:{borderTopColor:"transparent"}}})]})}var V=n(1326),X=n(90604),ee=n(81645),et=n(66589);function en(e){let{openDateRange:t,onCloseDateRange:n,onOpenDateRange:i,filters:c,onFilters:d,dateError:h,typeOptions:u}=e,x=(0,U.S)(),g=c.type.length?c.type.slice(0,2).join(","):"All type",f=(0,o.useCallback)(e=>{d("name",e.target.value)},[d]),m=(0,o.useCallback)(e=>{d("startDate",e)},[d]),Z=(0,o.useCallback)(e=>{d("endDate",e)},[d]),C=(0,o.useCallback)(e=>{let t=c.type.includes(e)?c.type.filter(t=>t!==e):[...c.type,e];d("type",t)},[c.type,d]),y=(0,o.useCallback)(()=>{x.onClose(),d("type",[])},[d,x]),w=(0,r.jsx)(V.Z,{value:c.name,onChange:f,placeholder:"Search...",InputProps:{startAdornment:(0,r.jsx)(ee.Z,{position:"start",children:(0,r.jsx)(p.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,md:260}}}),k=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{color:"inherit",onClick:x.onOpen,endIcon:(0,r.jsx)(p.Z,{icon:x.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:[g,c.type.length>2&&(0,r.jsxs)(et.Z,{color:"info",sx:{ml:1},children:["+",c.type.length-2]})]}),(0,r.jsx)(U.Z,{open:x.open,onClose:x.onClose,sx:{p:2.5},children:(0,r.jsxs)(l.Z,{spacing:2.5,children:[(0,r.jsx)(v.Z,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},children:u.map(e=>{let t=c.type.includes(e);return(0,r.jsx)(X.Z,{onClick:()=>C(e),sx:{p:1,borderRadius:1,cursor:"pointer",border:e=>"solid 1px ".concat((0,z.Fq)(e.palette.grey[500],.08)),...t&&{bgcolor:"action.selected"}},children:(0,r.jsxs)(l.Z,{spacing:1,direction:"row",alignItems:"center",children:[(0,r.jsx)(j.ZP,{file:e}),(0,r.jsx)(s.Z,{variant:t?"subtitle2":"body2",children:e})]})},e)})}),(0,r.jsxs)(l.Z,{spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,r.jsx)(a.Z,{variant:"outlined",color:"inherit",onClick:y,children:"Clear"}),(0,r.jsx)(a.Z,{variant:"contained",onClick:x.onClose,children:"Apply"})]})]})})]}),S=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{color:"inherit",onClick:i,endIcon:(0,r.jsx)(p.Z,{icon:t?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:c.startDate&&c.endDate?(0,b.l2)(c.startDate,c.endDate):"Select Date"}),(0,r.jsx)(b.ZP,{variant:"calendar",startDate:c.startDate,endDate:c.endDate,onChangeStartDate:m,onChangeEndDate:Z,open:t,onClose:n,selected:!!c.startDate&&!!c.endDate,error:h})]});return(0,r.jsxs)(l.Z,{spacing:1,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},sx:{width:1},children:[w,(0,r.jsxs)(l.Z,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,children:[S,k]})]})}var er=n(74495),eo=n(87250),el=n(23835),ea=n(82085);function ei(e){var t;let{file:n,selected:i,onSelect:c,onDelete:d,sx:u,...g}=e,{enqueueSnackbar:m}=(0,K.Ds)(),{copy:Z}=(0,_.m)(),[b,C]=(0,o.useState)(""),y=(0,x.k)(),w=(0,x.k)(),k=(0,x.k)(),D=(0,x.k)(),F=(0,x.k)(n.isFavorited),R=(0,U.S)(),I=(0,o.useCallback)(e=>{C(e.target.value)},[]),O=(0,o.useCallback)(()=>{m("Copied!"),Z(n.url)},[Z,m,n.url]),z=(y.value||i)&&c?(0,r.jsx)(W.Z,{size:"medium",checked:i,onClick:c,icon:(0,r.jsx)(p.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,r.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):(0,r.jsx)(j.ZP,{file:n.type,sx:{width:36,height:36}}),L=(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[(0,r.jsx)(W.Z,{color:"warning",icon:(0,r.jsx)(p.Z,{icon:"eva:star-outline"}),checkedIcon:(0,r.jsx)(p.Z,{icon:"eva:star-fill"}),checked:F.value,onChange:F.onToggle}),(0,r.jsx)(S.Z,{color:R.open?"inherit":"default",onClick:R.onOpen,children:(0,r.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})]}),E=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ea.Z,{persistent:!0,variant:"subtitle2",onClick:D.onTrue,sx:{width:1,mt:2,mb:.5},children:n.name}),(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",sx:{maxWidth:.99,whiteSpace:"nowrap",typography:"caption",color:"text.disabled"},children:[(0,Q.oe)(n.size),(0,r.jsx)(v.Z,{component:"span",sx:{mx:.75,width:2,height:2,flexShrink:0,borderRadius:"50%",bgcolor:"currentColor"}}),(0,r.jsx)(s.Z,{noWrap:!0,component:"span",variant:"caption",children:(0,h.zM)(n.modifiedAt)})]})]}),A=(0,r.jsx)(B.Z,{max:3,sx:{mt:1,["& .".concat(N.Z.avatar)]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:null===(t=n.shared)||void 0===t?void 0:t.map(e=>(0,r.jsx)(M.Z,{alt:e.name,src:e.avatarUrl},e.id))});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{component:el.Z,variant:"outlined",alignItems:"flex-start",sx:{p:2.5,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(y.value||i)&&{bgcolor:"background.paper",boxShadow:e=>e.customShadows.z20},...u},...g,children:[(0,r.jsx)(v.Z,{onMouseEnter:y.onTrue,onMouseLeave:y.onFalse,children:z}),E,A,L]}),(0,r.jsxs)(U.Z,{open:R.open,onClose:R.onClose,arrow:"right-top",sx:{width:160},children:[(0,r.jsxs)(P.Z,{onClick:()=>{R.onClose(),O()},children:[(0,r.jsx)(p.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,r.jsxs)(P.Z,{onClick:()=>{R.onClose(),w.onTrue()},children:[(0,r.jsx)(p.Z,{icon:"solar:share-bold"}),"Share"]}),(0,r.jsx)(T.Z,{sx:{borderStyle:"dashed"}}),(0,r.jsxs)(P.Z,{onClick:()=>{k.onTrue(),R.onClose()},sx:{color:"error.main"},children:[(0,r.jsx)(p.Z,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),(0,r.jsx)(H.Z,{item:n,favorited:F.value,onFavorite:F.onToggle,onCopyLink:O,open:D.value,onClose:D.onFalse,onDelete:()=>{D.onFalse(),d()}}),(0,r.jsx)(G.Z,{open:w.value,shared:n.shared,inviteEmail:b,onChangeInvite:I,onCopyLink:O,onClose:()=>{w.onFalse(),C("")}}),(0,r.jsx)(f.Q,{open:k.value,onClose:k.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,r.jsx)(a.Z,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})}var es=n(27526),ec=n(75387);function ed(e){let{action:t,selected:n,rowCount:o,numSelected:l,onSelectAllItems:a,sx:i,...c}=e;return(0,r.jsx)(ec.Z,{children:(0,r.jsxs)(v.Z,{sx:{right:0,zIndex:9,bottom:0,display:"flex",borderRadius:1.5,position:"fixed",alignItems:"center",bgcolor:"text.primary",p:e=>e.spacing(1.5,2,1.5,1),boxShadow:e=>e.customShadows.z20,m:{xs:2,md:3},...i},...c,children:[(0,r.jsx)(W.Z,{indeterminate:!!l&&l<o,checked:!!o&&l===o,onChange:e=>a(e.target.checked),icon:(0,r.jsx)(p.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,r.jsx)(p.Z,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:(0,r.jsx)(p.Z,{icon:"eva:minus-circle-fill"})}),n&&(0,r.jsxs)(s.Z,{variant:"subtitle2",sx:{mr:2,color:e=>"light"===e.palette.mode?"common.white":"grey.800"},children:[n.length," Items selected"]}),t&&t]})})}var eh=n(68036);function eu(e){let{table:t,data:n,dataFiltered:l,onDeleteItem:i,onOpenConfirm:s}=e,{selected:c,onSelectRow:d,onSelectAllRows:h}=t,u=(0,o.useRef)(null),[g,j]=(0,o.useState)(""),[f,m]=(0,o.useState)(""),Z=(0,x.k)(),b=(0,x.k)(),C=(0,x.k)(),y=(0,x.k)(),w=(0,x.k)(),k=(0,o.useCallback)(e=>{m(e.target.value)},[]),S=(0,o.useCallback)(e=>{j(e.target.value)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.Z,{ref:u,children:[(0,r.jsx)(eo.Z,{title:"Folders",subTitle:"".concat(n.filter(e=>"folder"===e.type).length," folders"),onOpen:b.onTrue,collapse:w.value,onCollapse:w.onToggle}),(0,r.jsx)(er.Z,{in:!w.value,unmountOnExit:!0,children:(0,r.jsx)(v.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},children:l.filter(e=>"folder"===e.type).map(e=>(0,r.jsx)(es.Z,{folder:e,selected:c.includes(e.id),onSelect:()=>d(e.id),onDelete:()=>i(e.id),sx:{maxWidth:"auto"}},e.id))})}),(0,r.jsx)(T.Z,{sx:{my:5,borderStyle:"dashed"}}),(0,r.jsx)(eo.Z,{title:"Files",subTitle:"".concat(n.filter(e=>"folder"!==e.type).length," files"),onOpen:C.onTrue,collapse:y.value,onCollapse:y.onToggle}),(0,r.jsx)(er.Z,{in:!y.value,unmountOnExit:!0,children:(0,r.jsx)(v.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:l.filter(e=>"folder"!==e.type).map(e=>(0,r.jsx)(ei,{file:e,selected:c.includes(e.id),onSelect:()=>d(e.id),onDelete:()=>i(e.id),sx:{maxWidth:"auto"}},e.id))})}),!!(null==c?void 0:c.length)&&(0,r.jsx)(ed,{numSelected:c.length,rowCount:n.length,selected:c,onSelectAllItems:e=>h(e,n.map(e=>e.id)),action:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"small",color:"error",variant:"contained",startIcon:(0,r.jsx)(p.Z,{icon:"solar:trash-bin-trash-bold"}),onClick:s,sx:{mr:1},children:"Delete"}),(0,r.jsx)(a.Z,{color:"primary",size:"small",variant:"contained",startIcon:(0,r.jsx)(p.Z,{icon:"solar:share-bold"}),onClick:Z.onTrue,children:"Share"})]})})]}),(0,r.jsx)(G.Z,{open:Z.value,inviteEmail:f,onChangeInvite:k,onClose:()=>{Z.onFalse(),m("")}}),(0,r.jsx)(eh.Z,{open:C.value,onClose:C.onFalse}),(0,r.jsx)(eh.Z,{open:b.value,onClose:b.onFalse,title:"New Folder",onCreate:()=>{b.onFalse(),j(""),console.info("CREATE NEW FOLDER",g)},folderName:g,onChangeFolderName:S})]})}var ex=n(13452);function ep(e){let{filters:t,onFilters:n,canReset:o,onResetFilters:i,results:s,...c}=e,d=(0,b.l2)(t.startDate,t.endDate),h=e=>{let r=t.type.filter(t=>t!==e);n("type",r)};return(0,r.jsxs)(l.Z,{spacing:1.5,...c,children:[(0,r.jsxs)(v.Z,{sx:{typography:"body2"},children:[(0,r.jsx)("strong",{children:s}),(0,r.jsx)(v.Z,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,r.jsxs)(l.Z,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!t.type.length&&(0,r.jsx)(eg,{label:"Types:",children:t.type.map(e=>(0,r.jsx)(ex.Z,{label:e,size:"small",onDelete:()=>h(e)},e))}),t.startDate&&t.endDate&&(0,r.jsx)(eg,{label:"Date:",children:(0,r.jsx)(ex.Z,{size:"small",label:d,onDelete:()=>{n("startDate",null),n("endDate",null)}})}),o&&(0,r.jsx)(a.Z,{color:"error",onClick:i,startIcon:(0,r.jsx)(p.Z,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function eg(e){let{label:t,children:n,sx:o,...a}=e;return(0,r.jsxs)(l.Z,{component:el.Z,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...o},...a,children:[(0,r.jsx)(v.Z,{component:"span",sx:{typography:"subtitle2"},children:t}),(0,r.jsx)(l.Z,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}let ej={name:"",type:[],startDate:null,endDate:null};function ef(){let e=(0,Z.x6)({defaultRowsPerPage:10}),t=(0,m.K$)(),n=(0,x.k)(),C=(0,x.k)(),v=(0,x.k)(),[y,w]=(0,o.useState)("list"),[k,S]=(0,o.useState)(u.w7),[D,F]=(0,o.useState)(ej),R=(0,b.M4)(D.startDate,D.endDate),I=function(e){let{inputData:t,comparator:n,filters:r,dateError:o}=e,{name:l,type:a,startDate:i,endDate:s}=r,c=t.map((e,t)=>[e,t]);return c.sort((e,t)=>{let r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]}),t=c.map(e=>e[0]),l&&(t=t.filter(e=>-1!==e.name.toLowerCase().indexOf(l.toLowerCase()))),a.length&&(t=t.filter(e=>a.includes((0,j.fH)(e.type)))),!o&&i&&s&&(t=t.filter(e=>(0,h.IO)(e.createdAt)>=(0,h.IO)(i)&&(0,h.IO)(e.createdAt)<=(0,h.IO)(s))),t}({inputData:k,comparator:(0,Z.sQ)(e.order,e.orderBy),filters:D,dateError:R}),M=I.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),T=!!D.name||!!D.type.length||!!D.startDate&&!!D.endDate,P=!I.length&&T||!I.length,W=(0,o.useCallback)((e,t)=>{null!==t&&w(t)},[]),O=(0,o.useCallback)((t,n)=>{e.onResetPage(),F(e=>({...e,[t]:n}))},[e]),z=(0,o.useCallback)(t=>{let n=k.filter(e=>e.id!==t);S(n),e.onUpdatePageDeleteRow(M.length)},[M.length,e,k]),L=(0,o.useCallback)(()=>{let t=k.filter(t=>!e.selected.includes(t.id));S(t),e.onUpdatePageDeleteRows({totalRows:k.length,totalRowsInPage:M.length,totalRowsFiltered:I.length})},[I.length,M.length,e,k]),E=(0,o.useCallback)(()=>{F(ej)},[]),A=(0,r.jsxs)(l.Z,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[(0,r.jsx)(en,{openDateRange:n.value,onCloseDateRange:n.onFalse,onOpenDateRange:n.onTrue,filters:D,onFilters:O,dateError:R,typeOptions:u.fE}),(0,r.jsxs)(d.Z,{size:"small",value:y,exclusive:!0,onChange:W,children:[(0,r.jsx)(c.Z,{value:"list",children:(0,r.jsx)(p.Z,{icon:"solar:list-bold"})}),(0,r.jsx)(c.Z,{value:"grid",children:(0,r.jsx)(p.Z,{icon:"mingcute:dot-grid-fill"})})]})]}),B=(0,r.jsx)(ep,{filters:D,onResetFilters:E,canReset:T,onFilters:O,results:I.length});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{maxWidth:!t.themeStretch&&"lg",children:[(0,r.jsxs)(l.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(s.Z,{variant:"h4",children:"File Manager"}),(0,r.jsx)(a.Z,{variant:"contained",startIcon:(0,r.jsx)(p.Z,{icon:"eva:cloud-upload-fill"}),onClick:v.onTrue,children:"Upload"})]}),(0,r.jsxs)(l.Z,{spacing:2.5,sx:{my:{xs:3,md:5}},children:[A,T&&B]}),P?(0,r.jsx)(g.Z,{filled:!0,title:"No Data",sx:{py:10}}):(0,r.jsx)(r.Fragment,{children:"list"===y?(0,r.jsx)(J,{table:e,tableData:k,dataFiltered:I,onDeleteRow:z,notFound:P,onOpenConfirm:C.onTrue}):(0,r.jsx)(eu,{table:e,data:k,dataFiltered:I,onDeleteItem:z,onOpenConfirm:C.onTrue})})]}),(0,r.jsx)(eh.Z,{open:v.value,onClose:v.onFalse}),(0,r.jsx)(f.Q,{open:C.value,onClose:C.onFalse,title:"Delete",content:(0,r.jsxs)(r.Fragment,{children:["Are you sure want to delete ",(0,r.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,r.jsx)(a.Z,{variant:"contained",color:"error",onClick:()=>{L(),C.onFalse()},children:"Delete"})})]})}}},function(e){e.O(0,[1278,2929,9083,5846,5551,5597,5011,4571,9744,254,655,3628,8761,5650,570,2968,2916,3451,1326,6350,4102,7578,389,3774,436,9318,6156,4344,3949,2331,1935,7319,7856,2667,6488,1744],function(){return e(e.s=45832)}),_N_E=e.O()}]);