import{gA as T,au as $,gB as y,gC as v,gD as E,ac as O,gE as k,a8 as b,c as C,s as D}from"./index-6a6230c9.js";import{o as R}from"./imageutils-a9d675f5.js";async function B(i,n){const a=T(i);if(a instanceof Error)throw a;await a.createImages(),$(n);const{frames:t,width:r,height:s}=a,u=document.createElement("canvas");u.width=r,u.height=s;const o=u.getContext("2d",{willReadFrequently:!0}),f=[],m=[];let g=0;for(const e of t){const c=y(e.delay||100);m.push(c),g+=c;const d=e.imageElement;e.blendOp===0?o.globalCompositeOperation="copy":o.globalCompositeOperation="source-over";const p=e.disposeOp===2?o.getImageData(e.left,e.top,e.width,e.height):void 0;o.drawImage(d,e.left,e.top);const w=o.getImageData(0,0,r,s);f.push(w),e.disposeOp===0||(e.disposeOp===1?o.clearRect(e.left,e.top,e.width,e.height):e.disposeOp===2&&o.putImageData(p,e.left,e.top))}return{frameCount:t.length,duration:g,frameDurations:m,getFrame:e=>f[e],width:r,height:s}}const A=[137,80,78,71,13,10,26,10];function L(i){const n=new Uint8Array(i);return!A.some((a,t)=>a!==n[t])}function q(i){if(!L(i))return!1;const n=new DataView(i),a=new Uint8Array(i);let t,r=8;do{const s=n.getUint32(r);if(t=String.fromCharCode.apply(String,Array.prototype.slice.call(a.subarray(r+4,r+8))),t==="acTL")return!0;r+=12+s}while(t!=="IEND"&&r<a.length);return!1}async function x(i,n){const a=v(i),t=E(a,!0),{width:r,height:s}=a.lsd,u=document.createElement("canvas");u.width=r,u.height=s;const o=u.getContext("2d",{willReadFrequently:!0}),f=[],m=[];let g=0;for(const e of t){const c=y(e.delay||100);m.push(c),g+=c;const d=new ImageData(e.patch,e.dims.width,e.dims.height),p=R(d),w=e.disposalType===3?o.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0;o.drawImage(p,e.dims.left,e.dims.top);const U=o.getImageData(0,0,r,s);f.push(U),e.disposalType===1||(e.disposalType===2?o.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):e.disposalType===3&&o.putImageData(w,e.dims.left,e.dims.top))}return{frameCount:t.length,duration:g,frameDurations:m,getFrame:e=>f[e],width:r,height:s}}const F=[71,73,70];function j(i){const n=new Uint8Array(i);return!F.some((a,t)=>a!==n[t])}function S(i){if(!j(i))return!1;const n=new DataView(i),a=n.getUint8(10);let t=13+(128&a?3*2**(1+(7&a)):0),r=0,s=!1;for(;!s;){switch(n.getUint8(t++)){case 33:if(!u())return!1;break;case 44:o();break;case 59:s=!0;break;default:return!1}if(r>1)return!0}function u(){switch(n.getUint8(t++)){case 249:f();break;case 1:m();break;case 254:g();break;case 255:e();break;default:return!1}return!0}function o(){r++,t+=8;const d=n.getUint8(t++);t+=128&d?3*2**(1+(7&d)):0,t++,c()}function f(){t++,t+=4,c()}function m(){r++,t++,t+=12,c()}function g(){c()}function e(){t++,t+=8,t+=3,c()}function c(){let d;for(;d=n.getUint8(t++);)t+=d}return!1}let h=null,l=!0;function J(i,n,a){if(!i||!n)throw new Error("Cannot construct image data without dimensions");if(l)try{return new ImageData(i,n)}catch{l=!1}return I(i,n,a)}function K(i,n,a,t){if(!n||!a)throw new Error("Cannot construct image data without dimensions");if(l)try{return new ImageData(i,n,a)}catch{l=!1}const r=I(n,a,t);return r.data.set(i,0),r}function V(){return h||(h=document.createElement("canvas"),h.width=1,h.height=1),h}function I(i,n,a){return a||(a=V()),a.getContext("2d").createImageData(i,n)}async function H(i,n){const a=window.URL.createObjectURL(i);try{const{data:t}=await b(a,{...n,responseType:"image"});return t}catch(t){throw C(t)?t:new D("invalid-image",`Could not fetch requested image at ${a}`)}finally{window.URL.revokeObjectURL(a)}}async function M(i,n){const{arrayBuffer:a,mediaType:t}=await N(i,n),r=t==="image/png";return t==="image/gif"&&S(a)?x(a):r&&q(a)?B(a,n):H(new Blob([a],{type:t}),n)}async function N(i,n){let a;const t=O(i);if(t!=null&&t.isBase64)a={arrayBuffer:k(t.data),mediaType:t.mediaType};else try{const r=await b(i,{responseType:"array-buffer",...n});a={arrayBuffer:r.data,mediaType:r.getHeader("Content-Type")}}catch(r){if(!C(r))throw new D("invalid-image",`Could not fetch requested image at ${i}`)}return a}export{K as d,J as u,M as y};
