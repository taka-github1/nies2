import{a8 as l,dM as n,dN as m}from"./index-6a6230c9.js";import{t as d}from"./symbolUtils-213d17df.js";import"./webStyleSymbolUtils-6cfdefea.js";import"./devEnvironmentUtils-5002a058.js";function f(e,i,t){const a=e.thumbnail&&e.thumbnail.url;return a?l(a,{responseType:"image"}).then(o=>{const h=u(o.data,t);return t&&t.node?(t.node.appendChild(h),t.node):h}):n(e).then(o=>o?i(o,t):null)}function u(e,i){const t=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,a=Math.max(e.width,e.height);let o=i&&i.maxSize!=null?m(i.maxSize):d.maxSize;t&&(o=Math.min(a,o));const h=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,r=Math.min(o,h!=null?m(h):a);if(r!==a){const s=e.width!==0&&e.height!==0?e.width/e.height:1;s>=1?(e.width=r,e.height=r/s):(e.width=r*s,e.height=r)}return e}export{f as previewWebStyleSymbol};
