/*! For license information please see 425.cd56d6e7.chunk.js.LICENSE.txt */
(self.webpackChunkgroup_ap=self.webpackChunkgroup_ap||[]).push([[425],{425:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});s(791);var a=s(277),t=s(184);const n=e=>{let{datos:r}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"row justify-content-center align-content-center",children:(0,t.jsxs)("div",{className:"col-8",children:[(0,t.jsx)("p",{className:"resumen-seguro",children:"Resumen del seguro"}),(0,t.jsx)(a.Z,{style:{width:"20rem"},className:"card-cotiza",children:(0,t.jsxs)(a.Z.Body,{children:[(0,t.jsx)("p",{children:"PRECIOS CALCULADOS PARA:"}),(0,t.jsx)("i",{className:"fa fa-users"})," ",r.name,(0,t.jsx)("hr",{}),(0,t.jsx)("h5",{children:"Responsable de pago"}),(0,t.jsxs)("p",{children:["DNI:",r.dni]}),(0,t.jsxs)("p",{children:["Celular:",r.celular]}),(0,t.jsx)("br",{}),(0,t.jsx)("h5",{children:"Plan elegido"}),(0,t.jsx)("p",{children:r.namePlan}),(0,t.jsxs)("p",{children:["Costo del Plan: ",r.price," al mes"]})]})})]})})})}},277:(e,r,s)=>{"use strict";s.d(r,{Z:()=>B});var a=s(418),t=s.n(a),n=s(791),c=s(162),l=s(184);const i=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n="div",...i}=e;return a=(0,c.vE)(a,"card-body"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));i.displayName="CardBody";const o=i,d=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n="div",...i}=e;return a=(0,c.vE)(a,"card-footer"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));d.displayName="CardFooter";const f=d,u=n.createContext(null);u.displayName="CardHeaderContext";const x=u,m=n.forwardRef(((e,r)=>{let{bsPrefix:s,className:a,as:i="div",...o}=e;const d=(0,c.vE)(s,"card-header"),f=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(x.Provider,{value:f,children:(0,l.jsx)(i,{ref:r,...o,className:t()(a,d)})})}));m.displayName="CardHeader";const p=m,N=n.forwardRef(((e,r)=>{let{bsPrefix:s,className:a,variant:n,as:i="img",...o}=e;const d=(0,c.vE)(s,"card-img");return(0,l.jsx)(i,{ref:r,className:t()(n?"".concat(d,"-").concat(n):d,a),...o})}));N.displayName="CardImg";const v=N,j=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n="div",...i}=e;return a=(0,c.vE)(a,"card-img-overlay"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));j.displayName="CardImgOverlay";const y=j,b=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n="a",...i}=e;return a=(0,c.vE)(a,"card-link"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));b.displayName="CardLink";const h=b,g=e=>n.forwardRef(((r,s)=>(0,l.jsx)("div",{...r,ref:s,className:t()(r.className,e)}))),C=g("h6"),P=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n=C,...i}=e;return a=(0,c.vE)(a,"card-subtitle"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));P.displayName="CardSubtitle";const w=P,R=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n="p",...i}=e;return a=(0,c.vE)(a,"card-text"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));R.displayName="CardText";const E=R,k=g("h5"),S=n.forwardRef(((e,r)=>{let{className:s,bsPrefix:a,as:n=k,...i}=e;return a=(0,c.vE)(a,"card-title"),(0,l.jsx)(n,{ref:r,className:t()(s,a),...i})}));S.displayName="CardTitle";const O=S,A=n.forwardRef(((e,r)=>{let{bsPrefix:s,className:a,bg:n,text:i,border:d,body:f=!1,children:u,as:x="div",...m}=e;const p=(0,c.vE)(s,"card");return(0,l.jsx)(x,{ref:r,...m,className:t()(a,p,n&&"bg-".concat(n),i&&"text-".concat(i),d&&"border-".concat(d)),children:f?(0,l.jsx)(o,{children:u}):u})}));A.displayName="Card";const B=Object.assign(A,{Img:v,Title:O,Subtitle:w,Body:o,Link:h,Text:E,Header:p,Footer:f,ImgOverlay:y})},162:(e,r,s)=>{"use strict";s.d(r,{pi:()=>d,vE:()=>o,zG:()=>f});var a=s(791);s(184);const t=["xxl","xl","lg","md","sm","xs"],n="xs",c=a.createContext({prefixes:{},breakpoints:t,minBreakpoint:n}),{Consumer:l,Provider:i}=c;function o(e,r){const{prefixes:s}=(0,a.useContext)(c);return e||s[r]||r}function d(){const{breakpoints:e}=(0,a.useContext)(c);return e}function f(){const{minBreakpoint:e}=(0,a.useContext)(c);return e}},418:(e,r)=>{var s;!function(){"use strict";var a={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var s=arguments[r];s&&(e=c(e,n(s)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var s in e)a.call(e,s)&&e[s]&&(r=c(r,s));return r}function c(e,r){return r?e?e+" "+r:e+r:e}e.exports?(t.default=t,e.exports=t):void 0===(s=function(){return t}.apply(r,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=425.cd56d6e7.chunk.js.map