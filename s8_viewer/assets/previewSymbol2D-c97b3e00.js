import{dN as w,dO as P,dP as Z,s as R,dQ as j,dR as E,dS as U,dT as x,dU as V}from"./index-6a6230c9.js";import{c as W}from"./fontUtils-9bdd13b2.js";import{t as L,e as H,d as T,l as N}from"./symbolUtils-213d17df.js";import"./webStyleSymbolUtils-6cfdefea.js";import"./devEnvironmentUtils-5002a058.js";const q="picture-fill",Q="picture-marker",G="simple-fill",I="simple-line",J="simple-marker",K="text",X="Aa",Y=L.size,z=L.maxSize,_=L.maxOutlineSize,$=L.lineWidth,D=225,ee=document.createElement("canvas");function A(a,e){const n=ee.getContext("2d"),l=[];return e&&(e.weight&&l.push(e.weight),e.size&&l.push(e.size+"px"),e.family&&l.push(e.family)),n.font=l.join(" "),n.measureText(a).width}const ae=7.2/2.54,le=72/2.54;function ne(a){if(a.length===0)return 0;if(a.length>2){const e=V(1),n=parseFloat(a);switch(a.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return n*ae*e;case"cm":return n*le*e}}return parseFloat(a)}function k(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function ie(a,e){const n=e.fill,l=a.color;if((n==null?void 0:n.type)==="pattern"&&l&&a.type!==q){const r=await U(n.src,l.toCss(!0));n.src=r,e.fill=n}}async function se(a,e,n,l){var d,t,c;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await W(a.font)}catch{}const{width:r}=k(l),u=/[\uE600-\uE6FF]/.test(e.shape.text);r!=null||u||(n[0]=A(e.shape.text,{weight:(d=e.font)==null?void 0:d.weight,size:(t=e.font)==null?void 0:t.size,family:(c=e.font)==null?void 0:c.family}))}function oe(a,e,n,l,r){var u;if(a.haloColor!=null&&a.haloSize!=null){r.masking??(r.masking=n.map(()=>[]));const d=w(a.haloSize);l[0]+=d,l[1]+=d,n.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*d,join:"round",cap:"round"}}]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:l[0]+2*x,height:l[1]+2*x},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(l[0]+=2*x,l[1]+=2*x,n.unshift([{shape:{type:"rect",x:0,y:0,width:l[0],height:l[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(u=r.masking)==null||u.unshift([]))}function O(a,e){return a>e?"dark":"light"}function te(a,e){var M,S;const n=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,l=n!=null?w(n):null,r=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,u=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,d=P(a);let t=Z(a);re(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(t={width:.75,...t,color:"#bdc3c7"});const c={shape:null,fill:d,stroke:t,offset:[0,0]};t!=null&&t.width&&(t.width=Math.min(t.width,_));const p=(t==null?void 0:t.width)||0;let g=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),i=0,s=0,b=!1;switch(a.type){case J:{const h=a.style,{width:m,height:o}=k(e),v=m===o&&m!=null?m:l??Math.min(w(a.size),r||z);switch(i=v,s=v,h){case"circle":c.shape={type:"circle",cx:0,cy:0,r:.5*v},g||(i+=p,s+=p);break;case"cross":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[i,.5*s]},{command:"M",values:[.5*i,0]},{command:"L",values:[.5*i,s]}]};break;case"diamond":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*i,0]},{command:"L",values:[i,.5*s]},{command:"L",values:[.5*i,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p);break;case"square":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p),u&&(b=!0);break;case"triangle":c.shape={type:"path",path:[{command:"M",values:[.5*i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(i+=p,s+=p),u&&(b=!0);break;case"x":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,s]},{command:"M",values:[i,0]},{command:"L",values:[0,s]}]},u&&(b=!0);break;case"path":c.shape={type:"path",path:a.path||""},g||(i+=p,s+=p),u&&(b=!0),g=!0}break}case I:{const{width:h,height:m}=k(e),o=m??l??p,v=h??$;t&&(t.width=o),i=v,s=o;const y=((M=c==null?void 0:c.stroke)==null?void 0:M.cap)||"butt",f=y==="round";g=!0,c.stroke&&(c.stroke.cap=y==="butt"?"square":y),c.shape={type:"path",path:[{command:"M",values:[f?o/2:0,s/2]},{command:"L",values:[f?i-o/2:i,s/2]}]};break}case q:case G:{const h=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((S=e==null?void 0:e.symbolConfig)!=null&&S.isSquareFill),{width:m,height:o}=k(e);i=!h&&m!==o||m==null?l??Y:m,s=!h&&m!==o||o==null?i:o,g||(i+=p,s+=p),g=!0,c.shape=h?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,s]},{command:"L",values:[0,s]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:H.fill[0];break}case Q:{const h=Math.min(w(a.width),r||z),m=Math.min(w(a.height),r||z),{width:o,height:v}=k(e),y=o===v&&o!=null?o:l??Math.max(h,m),f=h/m;i=f<=1?Math.ceil(y*f):y,s=f<=1?y:Math.ceil(y/f),c.shape={type:"image",x:-Math.round(i/2),y:-Math.round(s/2),width:i,height:s,src:a.url||""},u&&(b=!0);break}case K:{const h=a,m=(e==null?void 0:e.overrideText)||h.text||X,o=h.font,{width:v,height:y}=k(e),f=y??l??Math.min(w(o.size),r||z),B=A(m,{weight:o.weight,size:f,family:o.family}),C=/[\uE600-\uE6FF]/.test(m);i=v??(C?f:B),s=f;let F=.25*ne((o?f:0).toString());C&&(F+=5),c.shape={type:"text",text:m,x:h.xoffset||0,y:h.yoffset||F,align:"middle",alignBaseline:h.verticalAlignment,decoration:o&&o.decoration,rotated:h.rotated,kerning:h.kerning},c.font=o&&{size:f,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:c,size:[i,s],renderOptions:{node:e==null?void 0:e.node,scale:g,opacity:e==null?void 0:e.opacity,rotation:u,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function pe(a,e){var d;const{shapeDescriptor:n,size:l,renderOptions:r}=te(a,e);if(!n.shape)throw new R("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ie(a,n),await se(a,n,l,e);const u=[[n]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((d=e==null?void 0:e.symbolConfig)!=null&&d.applyColorModulation)){const t=.6*l[0];u.unshift([{...n,offset:[-t,0],fill:T(n.fill,-.3)}]),u.push([{...n,offset:[t,0],fill:T(n.fill,.3)}]),l[0]+=2*t,r.scale=!1}return a.type==="text"&&oe(a,n,u,l,r),N(u,l,r)}function re(a,e=D){const n=P(a),l=Z(a),r=!n||"type"in n?null:new j(n),u=l!=null&&l.color?new j(l==null?void 0:l.color):null,d=r?O(E(r),e):null,t=u?O(E(u),e):null;return t?d?d===t?d:e>=D?"light":"dark":t:d}export{re as getContrastingBackgroundTheme,te as getRenderSymbolParameters,pe as previewSymbol2D};