import{a as Ni}from"./devEnvironmentUtils-5002a058.js";import{fc as _o,fb as Di,hL as Fi,fg as bo,eM as U,cU as pe,cT as ge,nD as Bi,bA as P,i1 as Le,nE as Vi,nF as zi,nG as nr,ei as et,J as Wr,ay as St,eE as Gi,g as yr,f9 as Ui,dp as kr,ab as Hi,fh as ct,kR as dt,au as jr,nH as Wi,jx as ki,kW as ji,ej as hr,s as Cr,iW as qi,fe as tt,hv as ze,dZ as Xi,lv as Yi,a_ as Ki,nI as Qi,nJ as Zi,ce as Ji,cg as Er,aq as ea,is as ta,bB as Ye,fv as le,fw as qe,fx as qr,fs as Xr,ft as ra,nK as oa,fr as Bt,nL as So,nM as Ao,bS as ia,cV as aa,i8 as Xt,cR as Ke,kO as fr,k as h,hH as pr,c3 as oe,j6 as Yt,hJ as Or,l as k,m as na,a0 as sa,id as la,eP as Vt,gr as yo,h_ as vr,cQ as ca,cd as da,eN as ua,E as ma,av as Co,a8 as ha,d5 as Eo,gM as Oo,nN as wo,jc as zt,i0 as fa,lw as Yr,ho as pa}from"./index-6a6230c9.js";import{e as Kt}from"./mat3f64-221ce671.js";import{o as Gt,r as va,e as Qt}from"./mat4f64-1413b4a7.js";import{x as Zt,c as gr,y as ga,u as xa,q as Ta,i as Ut,L as _a,O as ba,E as Sa}from"./BufferView-e560afde.js";import{r as Aa,n as ya,u as Kr}from"./vec32-0d2d8ac6.js";import{l as Ca,n as Ea,i as ke,o as Oa,j as wa,k as Ra,u as Qr,t as Ma,m as La}from"./DefaultMaterial_COLOR_GAMMA-d058e08d.js";import{n as sr}from"./resourceUtils-29c53688.js";import{e as $a}from"./byteSizeEstimations-7cf1c05d.js";import{t as Pa}from"./NestedMap-1b5db22e.js";import{t as Ro}from"./requestImageUtils-7752e530.js";import{t as Ia,u as ft,a as xr,i as Na,N as $e,s as Y,e as Pe,n as At}from"./basicInterfaces-11f56cb3.js";import{y as Zr,t as Da,s as j}from"./Indices-2c511ceb.js";import{w as Fa,e as Ue,o as Ba}from"./triangle-8aaa551a.js";import{E as m}from"./VertexAttribute-c9cc5f8e.js";import{f as Oe,G as ve,L as xe,D as ce,E as Va,I as Ie,O as ne,P as yt,U as Jt,B as za,C as de}from"./enums-b14466b3.js";import{T as pt,E as Ga,e as Re,b as Ua}from"./Texture-37d17670.js";import{H as Ha}from"./InterleavedLayout-e0d8d912.js";import{o as s,n as wr,W as Rr,_ as Mr,a as Je,c as Wa,A as ka,h as ja,l as qa,b as Xa,d as Ya,S as Ka}from"./OrderIndependentTransparency-e18a4b09.js";import{_ as Mo}from"./sphere-f5810db0.js";import{O as Qa,s as Za,n as Ce}from"./orientedBoundingBox-34cfa61d.js";import{o as Ja,r as en}from"./doublePrecisionUtils-e3c3d0d8.js";import{a as tn}from"./VertexArrayObject-91d61933.js";import{t as ue}from"./VertexElementDescriptor-2925c6af.js";let je=class{constructor(e,r,o=!1,i=r){this.data=e,this.size=r,this.exclusive=o,this.stride=i}};function rn(t){if(t.length<_o)return Array.from(t);if(Di(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Fi(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Lr=class{constructor(){this.id=bo()}unload(){}};function on(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;U(r,0,0,0),U(ae,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const c=e[l]*o,d=e[l+1]*o,u=e[l+2]*o;U(X,i[c],i[c+1],i[c+2]),U(Ee,i[d],i[d+1],i[d+2]),U(Et,i[u],i[u+1],i[u+2]);const f=Fa(X,Ee,Et);f?(pe(X,X,Ee),pe(X,X,Et),ge(X,X,1/3*f),pe(r,r,X),a+=f):(pe(ae,ae,X),pe(ae,ae,Ee),pe(ae,ae,Et),n+=3)}return(n!==0||a!==0)&&(a!==0?(ge(r,r,1/a),!0):n!==0&&(ge(r,ae,1/n),!0))}function an(t,e,r){if(!t||!e)return!1;const{size:o,data:i}=t;U(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const c=e[l]*o;a!==c&&(r[0]+=i[c],r[1]+=i[c+1],r[2]+=i[c+2],n++),a=c}return n>1&&ge(r,r,1/n),n>0}function nn(t,e,r,o){if(!t)return!1;U(o,0,0,0),U(ae,0,0,0);let i=0,a=0;const{size:n,data:l}=t,c=e?e.length-1:l.length/n-1,d=c+(r?2:0);for(let u=0;u<d;u+=2){const f=u<c?u:c,v=u<c?u+1:0,p=(e?e[f]:f)*n,y=(e?e[v]:v)*n;X[0]=l[p],X[1]=l[p+1],X[2]=l[p+2],Ee[0]=l[y],Ee[1]=l[y+1],Ee[2]=l[y+2],ge(X,pe(X,X,Ee),.5);const E=Bi(X,Ee);E>0?(pe(o,o,ge(X,X,E)),i+=E):i===0&&(pe(ae,ae,X),a++)}return i!==0?(ge(o,o,1/i),!0):a!==0&&(ge(o,ae,1/a),!0)}const X=P(),Ee=P(),Et=P(),ae=P();let sn=class{constructor(e){this.channel=e,this.id=bo()}};function ln(t,e){return t==null&&(t=[]),t.push(e),t}function cn(t,e){if(t==null)return null;const r=t.filter(o=>o!==e);return r.length===0?null:r}let Lo=class $o extends Lr{constructor(e,r,o=[],i=null,a=Ue.Mesh,n=null,l=-1){super(),this.material=e,this.mapPositions=i,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=l,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[c,d]of r)d&&this._vertexAttributes.set(c,{...d});if(o==null||o.length===0){const c=dn(this._vertexAttributes),d=Zr(c);this.edgeIndicesLength=this.edgeIndicesLength<0?c:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,d)}else for(const[c,d]of o)d&&(this._indices.set(c,Da(d)),c===m.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(c).length:this.edgeIndicesLength))}instantiate(e={}){const r=new $o(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((o,i)=>{o.exclusive=!1,r._vertexAttributes.set(i,o)}),this._indices.forEach((o,i)=>r._indices.set(i,o)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:rn(r.data)},this._vertexAttributes.set(e,r)),r}setAttributeData(e,r){const o=this._vertexAttributes.get(e);o&&this._vertexAttributes.set(e,{...o,exclusive:!0,data:r})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ue.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ue.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Le(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(m.POSITION),o=this.vertexAttributes.get(m.POSITION);return on(o,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(m.POSITION),o=this.indices.get(m.POSITION);return nn(r,o,o&&un(this.material.parameters,r,o),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(m.POSITION),o=this.vertexAttributes.get(m.POSITION);return an(o,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(m.POSITION),r=this.vertexAttributes.get(m.POSITION);if(!e||e.length===0||!r)return null;const o=this.type===Ue.Mesh?3:1;j(e.length%o==0,"Indexing error: "+e.length+" not divisible by "+o);const i=Zr(e.length/o);return new Ba(i,o,e,r)}get transformation(){return this._transformation??Gt}set transformation(e){this._transformation=e&&e!==Gt?va(e):null}addHighlight(){const e=new sn(Ia.Highlight);return this.highlights=ln(this.highlights,e),e}removeHighlight(e){this.highlights=cn(this.highlights,e)}};function dn(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function un(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}function Ot(t,e=!1){return t<=_o?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function nt(t){if(t==null)return null;const e=t.offset!=null?t.offset:Vi,r=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:zi,i=nr(1,0,0,0,1,0,e[0],e[1],1),a=nr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=nr(o[0],0,0,0,o[1],0,0,0,1),l=et();return Wr(l,a,n),Wr(l,i,l),l}let mn=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},hn=class{constructor(e,r,o){this.name=e,this.lodThreshold=r,this.pivotOffset=o,this.stageResources=new mn,this.numberOfVertices=0}};function fn(){if(lr==null){const t=e=>Gi(`esri/libs/basisu/${e}`);lr=St(()=>import("./basis_transcoder-663983ac.js"),["./basis_transcoder-663983ac.js","./index-6a6230c9.js","./index-ed438937.css"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return lr}let lr;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let me=null,wt=null;async function Po(){return wt==null&&(wt=fn(),me=await wt),wt}function pn(t,e){if(me==null)return t.byteLength;const r=new me.BasisFile(new Uint8Array(t)),o=No(r)?Io(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function vn(t,e){if(me==null)return t.byteLength;const r=new me.KTX2File(new Uint8Array(t)),o=Do(r)?Io(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function Io(t,e,r,o,i){const a=Ga(e?Oe.COMPRESSED_RGBA8_ETC2_EAC:Oe.COMPRESSED_RGB8_ETC2),n=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*a*n)}function No(t){return t.getNumImages()>=1&&!t.isUASTC()}function Do(t){return t.getFaces()>=1&&t.isETC1S()}async function gn(t,e,r){me==null&&(me=await Po());const o=new me.BasisFile(new Uint8Array(r));if(!No(o))return null;o.startTranscoding();const i=Fo(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function xn(t,e,r){me==null&&(me=await Po());const o=new me.KTX2File(new Uint8Array(r));if(!Do(o))return null;o.startTranscoding();const i=Fo(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function Fo(t,e,r,o,i,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:d}=t.capabilities,[u,f]=c?o?[Ge.ETC2_RGBA,Oe.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,Oe.COMPRESSED_RGB8_ETC2]:d?o?[Ge.BC3_RGBA,Oe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,Oe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,ve.RGBA],v=e.hasMipmap?r:Math.min(1,r),p=[];for(let y=0;y<v;y++)p.push(new Uint8Array(n(y,u))),l(y,u,p[y]);return e.internalFormat=f,e.hasMipmap=p.length>1,e.samplingMode=e.hasMipmap?xe.LINEAR_MIPMAP_LINEAR:xe.LINEAR,e.width=i,e.height=a,new pt(t,e,{type:"compressed",levels:p})}const Rt=yr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Tn=542327876,_n=131072,bn=4;function $r(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Sn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const An=$r("DXT1"),yn=$r("DXT3"),Cn=$r("DXT5"),En=31,On=0,wn=1,Rn=2,Mn=3,Ln=4,$n=7,Pn=20,In=21;function Nn(t,e,r){const o=Dn(r,e.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:l}=o;return e.samplingMode=i.levels.length>1?xe.LINEAR_MIPMAP_LINEAR:xe.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=n,e.height=l,new pt(t,e,i)}function Dn(t,e){const r=new Int32Array(t,0,En);if(r[On]!==Tn)return Rt.error("Invalid magic number in DDS header"),null;if(!(r[Pn]&bn))return Rt.error("Unsupported format, must contain a FourCC code"),null;const o=r[In];let i,a;switch(o){case An:i=8,a=Oe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case yn:i=16,a=Oe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Cn:i=16,a=Oe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Rt.error("Unsupported FourCC code:",Sn(o)),null}let n=1,l=r[Ln],c=r[Mn];!(3&l)&&!(3&c)||(Rt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const d=l,u=c;let f,v;r[Rn]&_n&&e!==!1&&(n=Math.max(1,r[$n]));let p=r[wn]+4;const y=[];for(let E=0;E<n;++E)v=(l+3>>2)*(c+3>>2)*i,f=new Uint8Array(t,p,v),y.push(f),p+=v,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:y},internalFormat:a,width:d,height:u}}let Bo=class extends Lr{constructor(e,r){super(),this._data=e,this.type=Ue.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ui,this.parameters=r||{},this.parameters.mipmap=this.parameters.mipmap!==!1,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:ce.REPEAT,t:ce.REPEAT},this._startPreload(e)}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(kr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){Hi(e.src)||kr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const r=new Re;return r.wrapMode=this.parameters.wrap??ce.REPEAT,r.flipped=!this.parameters.noUnpackFlip,r.samplingMode=this.parameters.mipmap?xe.LINEAR_MIPMAP_LINEAR:xe.LINEAR,r.hasMipmap=!!this.parameters.mipmap,r.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,r.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||Fn(this._data,this.parameters)}load(e){if(this._glTexture!=null)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new pt(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(ct(r)||dt(r))&&this.parameters.encoding===ft.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(ct(r)||dt(r))&&this.parameters.encoding===ft.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(ct(r)||dt(r))&&this.parameters.encoding===ft.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):dt(r)?this._loadFromPixelData(e,r):ct(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&this._glTexture!=null?this._data.readyState<vt.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,r){return this._glTexture=Nn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>xn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>gn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){j(this.parameters.width>0&&this.parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this.parameters.components===1?ve.LUMINANCE:this.parameters.components===3?ve.RGB:ve.RGBA,o.width=this.parameters.width??0,o.height=this.parameters.height??0,this._glTexture=new pt(e,o,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async o=>{const i=await Ro(r,{signal:o});return jr(o),this._loadFromImage(e,i)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async o=>{const i=await Wi(r,r.src,!1,o);return jr(o),this._loadFromImage(e,i)})}_loadFromVideoElement(e,r){return r.readyState>=vt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(o=>new Promise((i,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),qi(d)},l=()=>{r.readyState>=vt.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,r)))},c=u=>{n(),a(u||new Cr("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=ki(o,()=>c(ji()))}))}_loadFromImage(e,r){const o=Vo(r);this.parameters.width=o.width,this.parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=this.parameters.components===3?ve.RGB:ve.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new pt(e,i,r),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=hr(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Fn(t,e){if(t==null)return 0;if(ct(t)||dt(t))return e.encoding===ft.KTX2_ENCODING?vn(t,!!e.mipmap):e.encoding===ft.BASIS_ENCODING?pn(t,!!e.mipmap):t.byteLength;const{width:r,height:o}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Vo(t):e;return(e.mipmap?4/3:1)*r*o*(e.components||4)||0}function Vo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var vt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(vt||(vt={}));var b;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(b||(b={}));function er(t,e){switch(e.normalType){case z.Compressed:t.attributes.add(m.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case z.Attribute:t.attributes.add(m.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case z.ScreenDerivative:t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:tt(e.normalType);case z.COUNT:case z.Ground:}}var z;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(z||(z={}));function Bn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:tt(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var J;function Qe(t,e){switch(e.textureCoordinateType){case J.Default:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case J.Compressed:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case J.Atlas:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(m.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:tt(e.textureCoordinateType);case J.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case J.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(J||(J={}));function Vn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function zo(t,e){switch(t.include(Qe,e),e.textureCoordinateType){case J.Default:case J.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case J.Atlas:return t.include(Vn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:tt(e.textureCoordinateType);case J.None:case J.COUNT:return}}var M;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(M||(M={}));let Z=class{constructor(e,r,o,i,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[M.Pass]:null,[M.Draw]:null},i)switch(o){case M.Pass:this.bind[M.Pass]=i;break;case M.Draw:this.bind[M.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},he=class extends Z{constructor(e,r){super(e,"vec3",M.Draw,(o,i,a,n)=>o.setUniform3fv(e,r(i,a,n)))}},K=class extends Z{constructor(e,r){super(e,"vec3",M.Pass,(o,i,a)=>o.setUniform3fv(e,r(i,a)))}},gt=class extends Z{constructor(e,r){super(e,"sampler2D",M.Draw,(o,i,a)=>o.bindTexture(e,r(i,a)))}},Q=class extends Z{constructor(e,r){super(e,"sampler2D",M.Pass,(o,i,a)=>o.bindTexture(e,r(i,a)))}},zn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return xr.LOADED}},Gn=class extends zn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=ze(this._texture),this._textureNormal=ze(this._textureNormal),this._textureEmissive=ze(this._textureEmissive),this._textureOcclusion=ze(this._textureOcclusion),this._textureMetallicRoughness=ze(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?xr.LOADED:xr.LOADING}get textureBindParameters(){return new Un(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=ze(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const o=this._textureRepository.acquire(e);if(Xi(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return ze(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},Un=class extends wr{constructor(e=null,r=null,o=null,i=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=a}};var O;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(O||(O={}));function Go(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===O.Normal&&o&&t.include(zo,e),e.pbrMode!==O.Schematic)if(e.pbrMode!==O.Disabled){if(e.pbrMode===O.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(i===M.Pass?new Q("texMetallicRoughness",a=>a.textureMetallicRoughness):new gt("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(i===M.Pass?new Q("texEmission",a=>a.textureEmissive):new gt("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(i===M.Pass?new Q("texOcclusion",a=>a.textureOcclusion):new gt("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),i===M.Pass?r.uniforms.add(new K("emissionFactor",a=>a.emissiveFactor),new K("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new he("emissionFactor",a=>a.emissiveFactor),new he("mrrFactors",a=>a.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const tr=new Map([[m.POSITION,0],[m.NORMAL,1],[m.NORMALCOMPRESSED,1],[m.UV0,2],[m.COLOR,3],[m.COLORFEATUREATTRIBUTE,3],[m.SIZE,4],[m.TANGENT,4],[m.AUXPOS1,5],[m.SYMBOLCOLOR,5],[m.AUXPOS2,6],[m.FEATUREATTRIBUTE,6],[m.INSTANCEFEATUREATTRIBUTE,6],[m.INSTANCECOLOR,7],[m.OBJECTANDLAYERIDCOLOR,7],[m.INSTANCEOBJECTANDLAYERIDCOLOR,7],[m.INSTANCEMODEL,8],[m.INSTANCEMODELNORMAL,12],[m.INSTANCEMODELORIGINHI,11],[m.INSTANCEMODELORIGINLO,15]]);function Hn(t){return Math.abs(t*t*t)}function Wn(t,e,r){const o=r.parameters,i=r.paddingPixelsOverride;return st.scale=Math.min(o.divisor/(e-o.offset),1),st.factor=Hn(t),st.minPixelSize=o.minPixelSize,st.paddingPixels=i,st}function kn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function jn(t,e){return Math.max(Yi(t*e.scale,t,e.factor),kn(t,e))}function qn(t,e,r,o){return jn(t,Wn(e,r,o))}const st={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Mt=Ki();function Xn(t,e,r,o,i,a){if(t.visible)if(t.boundingInfo){j(t.type===Ue.Mesh);const n=e.tolerance;Uo(t.boundingInfo,r,o,n,i,a)}else{const n=t.indices.get(m.POSITION),l=t.vertexAttributes.get(m.POSITION);Wo(r,o,0,n.length/3,n,l,void 0,i,a)}}const Yn=P();function Uo(t,e,r,o,i,a){if(t==null)return;const n=Qn(e,r,Yn);if(Qi(Mt,t.bbMin),Zi(Mt,t.bbMax),i!=null&&i.applyToAabb(Mt),Zn(Mt,e,n,o)){const{primitiveIndices:l,indices:c,position:d}=t,u=l?l.length:c.length/3;if(u>is){const f=t.getChildren();if(f!==void 0){for(const v of f)Uo(v,e,r,o,i,a);return}}Wo(e,r,0,u,c,d,l,i,a)}}const Ho=P();function Wo(t,e,r,o,i,a,n,l,c){if(n)return Kn(t,e,r,o,i,a,n,l,c);const{data:d,stride:u}=a,f=t[0],v=t[1],p=t[2],y=e[0]-f,E=e[1]-v,D=e[2]-p;for(let F=r,B=3*r;F<o;++F){let w=u*i[B++],L=d[w++],$=d[w++],x=d[w];w=u*i[B++];let C=d[w++],R=d[w++],S=d[w];w=u*i[B++];let A=d[w++],N=d[w++],T=d[w];l!=null&&([L,$,x]=l.applyToVertex(L,$,x,F),[C,R,S]=l.applyToVertex(C,R,S,F),[A,N,T]=l.applyToVertex(A,N,T,F));const I=C-L,V=R-$,W=S-x,q=A-L,Te=N-$,_e=T-x,Ne=E*_e-Te*D,rt=D*q-_e*y,ot=y*Te-q*E,se=I*Ne+V*rt+W*ot;if(Math.abs(se)<=Number.EPSILON)continue;const ie=f-L,De=v-$,Fe=p-x,fe=ie*Ne+De*rt+Fe*ot;if(se>0){if(fe<0||fe>se)continue}else if(fe>0||fe<se)continue;const be=De*W-V*Fe,it=Fe*I-W*ie,at=ie*V-I*De,Be=y*be+E*it+D*at;if(se>0){if(Be<0||fe+Be>se)continue}else if(Be>0||fe+Be<se)continue;const Ve=(q*be+Te*it+_e*at)/se;Ve>=0&&c(Ve,ko(I,V,W,q,Te,_e,Ho),F,!1)}}function Kn(t,e,r,o,i,a,n,l,c){const{data:d,stride:u}=a,f=t[0],v=t[1],p=t[2],y=e[0]-f,E=e[1]-v,D=e[2]-p;for(let F=r;F<o;++F){const B=n[F];let w=3*B,L=u*i[w++],$=d[L++],x=d[L++],C=d[L];L=u*i[w++];let R=d[L++],S=d[L++],A=d[L];L=u*i[w];let N=d[L++],T=d[L++],I=d[L];l!=null&&([$,x,C]=l.applyToVertex($,x,C,F),[R,S,A]=l.applyToVertex(R,S,A,F),[N,T,I]=l.applyToVertex(N,T,I,F));const V=R-$,W=S-x,q=A-C,Te=N-$,_e=T-x,Ne=I-C,rt=E*Ne-_e*D,ot=D*Te-Ne*y,se=y*_e-Te*E,ie=V*rt+W*ot+q*se;if(Math.abs(ie)<=Number.EPSILON)continue;const De=f-$,Fe=v-x,fe=p-C,be=De*rt+Fe*ot+fe*se;if(ie>0){if(be<0||be>ie)continue}else if(be>0||be<ie)continue;const it=Fe*q-W*fe,at=fe*V-q*De,Be=De*W-V*Fe,Ve=y*it+E*at+D*Be;if(ie>0){if(Ve<0||be+Ve>ie)continue}else if(Ve>0||be+Ve<ie)continue;const Hr=(Te*it+_e*at+Ne*Be)/ie;Hr>=0&&c(Hr,ko(V,W,q,Te,_e,Ne,Ho),B,!1)}}const Jr=P(),eo=P();function ko(t,e,r,o,i,a,n){return U(Jr,t,e,r),U(eo,o,i,a),Ji(n,Jr,eo),Er(n,n),n}function Qn(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Zn(t,e,r,o){return Jn(t,e,r,o,1/0)}function Jn(t,e,r,o,i){const a=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const d=(t[1]-o-e[1])*r[1],u=(t[4]+o-e[1])*r[1];if(c=Math.min(c,Math.max(d,u)),c<0||(l=Math.max(l,Math.min(d,u)),l>c))return!1;const f=(t[2]-o-e[2])*r[2],v=(t[5]+o-e[2])*r[2];return c=Math.min(c,Math.max(f,v)),!(c<0)&&(l=Math.max(l,Math.min(f,v)),!(l>c)&&l<i)}function es(t,e,r,o,i){let a=(r.screenLength||0)*t.pixelRatio;i!=null&&(a=qn(a,o,e,i));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return ea(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function jo(t,e){const r=e?jo(e):{};for(const o in t){let i=t[o];i&&i.forEach&&(i=rs(i)),i==null&&o in r||(r[o]=i)}return r}function ts(t,e){let r=!1;for(const o in e){const i=e[o];i!==void 0&&(Array.isArray(i)?t[o]===null?(t[o]=i.slice(),r=!0):ta(t[o],i)&&(r=!0):t[o]!==i&&(r=!0,t[o]=i))}return r}function rs(t){const e=[];return t.forEach(r=>e.push(r)),e}const os={multiply:1,ignore:2,replace:3,tint:4},is=1e3;let as=class extends Lr{constructor(e,r){super(),this.type=Ue.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=tr,this._pp0=Ye(0,0,1),this._pp1=Ye(0,0,0),this._parameters=jo(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ts(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.isDecoration||e.bindParameters.decorations===Na.ON)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get isDecoration(){return this.parameters.isDecoration}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository!=null&&this.repository.materialChanged(this)}intersectDraped(e,r,o,i,a,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,o,this._pp0,this._pp1,a)}};var Tr;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(Tr||(Tr={}));var Xe;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.ANTIALIASING=10]="ANTIALIASING",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=11]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=12]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=13]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=14]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=15]="HUD_MATERIAL",t[t.LABEL_MATERIAL=16]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=17]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=18]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=19]="DRAPED_MATERIAL",t[t.DRAPED_WATER=20]="DRAPED_WATER",t[t.VOXEL=21]="VOXEL",t[t.MAX_SLOTS=22]="MAX_SLOTS"})(Xe||(Xe={}));let ns=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=P(),this._mbs=Mo(),this._obb=Qa(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=le(e)}applyToVertex(e,r,o){const i=U(_r,e,r,o),a=U(ro,e,r,o+this.componentLocalOriginLength),n=this._totalOffset/le(a);return qe(this._tmpVertex,i,a,n),this._tmpVertex}applyToAabb(e){const r=U(_r,e[0],e[1],e[2]+this.componentLocalOriginLength),o=U(ro,e[3],e[4],e[5]+this.componentLocalOriginLength),i=qr(cs,r),a=qr(ds,o),n=Xr(us,r),l=Xr(ms,o),c=ra(oo,n,l);c[0]=i[0]*a[0]<0?0:c[0],c[1]=i[1]*a[1]<0?0:c[1],c[2]=i[2]*a[2]<0?0:c[2];const d=le(c);if(d<this._totalOffset)return e[0]-=r[0]<0?this._totalOffset:0,e[1]-=r[1]<0?this._totalOffset:0,e[2]-=r[2]<0?this._totalOffset:0,e[3]+=o[0]>0?this._totalOffset:0,e[4]+=o[1]>0?this._totalOffset:0,e[5]+=o[2]>0?this._totalOffset:0,e;const u=oa(oo,n,l),f=le(u),v=this._totalOffset/f,p=this._totalOffset/d;return e[0]+=r[0]*(r[0]>0?v:p),e[1]+=r[1]*(r[1]>0?v:p),e[2]+=r[2]*(r[2]>0?v:p),e[3]+=o[0]*(o[0]<0?v:p),e[4]+=o[1]*(o[1]<0?v:p),e[5]+=o[2]*(o[2]<0?v:p),e}applyToMbs(e){const r=le(e),o=this._totalOffset/r;return qe(this._mbs,e,e,o),this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){return Za(e,this._totalOffset,this._totalOffset,Bt.Global,this._obb),this._obb}},ss=class{constructor(e=0){this.offset=e,this.sphere=Mo(),this.tmpVertex=P()}applyToVertex(e,r,o){const i=this.objectTransform.transform,a=U(_r,e,r,o),n=Le(a,a,i),l=this.offset/le(n);qe(n,n,n,l);const c=this.objectTransform.inverse;return Le(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const o=this.offset/le(e);qe(e,e,e,o);const i=this.offset/le(r);qe(r,r,r,i)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=le(e),o=this.offset/r;return qe(this.sphere,e,e,o),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const to=new ss;function ls(t){return t!=null?(to.offset=t,to):null}new ns;const _r=P(),ro=P(),cs=P(),ds=P(),us=P(),ms=P(),oo=P();function io(t,e,r,o){const i=r.typedBuffer,a=r.typedBufferStride,n=t.length;o*=a;for(let l=0;l<n;++l){const c=2*t[l];i[o]=e[c],i[o+1]=e[c+1],o+=a}}function qo(t,e,r,o,i){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i==null||i===1)for(let c=0;c<l;++c){const d=3*t[c];a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],o+=n}else for(let c=0;c<l;++c){const d=3*t[c];for(let u=0;u<i;++u)a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],o+=n}}function Xo(t,e,r,o,i=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(o*=n,i===1)for(let c=0;c<l;++c){const d=4*t[c];a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],a[o+3]=e[d+3],o+=n}else for(let c=0;c<l;++c){const d=4*t[c];for(let u=0;u<i;++u)a[o]=e[d],a[o+1]=e[d+1],a[o+2]=e[d+2],a[o+3]=e[d+3],o+=n}}function hs(t,e,r,o,i,a=1){if(!r)return void qo(t,e,o,i,a);const n=o.typedBuffer,l=o.typedBufferStride,c=t.length,d=r[0],u=r[1],f=r[2],v=r[4],p=r[5],y=r[6],E=r[8],D=r[9],F=r[10],B=r[12],w=r[13],L=r[14];i*=l;let $=0,x=0,C=0;const R=So(r)?S=>{$=e[S]+B,x=e[S+1]+w,C=e[S+2]+L}:S=>{const A=e[S],N=e[S+1],T=e[S+2];$=d*A+v*N+E*T+B,x=u*A+p*N+D*T+w,C=f*A+y*N+F*T+L};if(a===1)for(let S=0;S<c;++S)R(3*t[S]),n[i]=$,n[i+1]=x,n[i+2]=C,i+=l;else for(let S=0;S<c;++S){R(3*t[S]);for(let A=0;A<a;++A)n[i]=$,n[i+1]=x,n[i+2]=C,i+=l}}function fs(t,e,r,o,i,a=1){if(!r)return void qo(t,e,o,i,a);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=t.length,u=n[0],f=n[1],v=n[2],p=n[4],y=n[5],E=n[6],D=n[8],F=n[9],B=n[10],w=!Ao(n),L=1e-6,$=1-L;i*=c;let x=0,C=0,R=0;const S=So(n)?A=>{x=e[A],C=e[A+1],R=e[A+2]}:A=>{const N=e[A],T=e[A+1],I=e[A+2];x=u*N+p*T+D*I,C=f*N+y*T+F*I,R=v*N+E*T+B*I};if(a===1)if(w)for(let A=0;A<d;++A){S(3*t[A]);const N=x*x+C*C+R*R;if(N<$&&N>L){const T=1/Math.sqrt(N);l[i]=x*T,l[i+1]=C*T,l[i+2]=R*T}else l[i]=x,l[i+1]=C,l[i+2]=R;i+=c}else for(let A=0;A<d;++A)S(3*t[A]),l[i]=x,l[i+1]=C,l[i+2]=R,i+=c;else for(let A=0;A<d;++A){if(S(3*t[A]),w){const N=x*x+C*C+R*R;if(N<$&&N>L){const T=1/Math.sqrt(N);x*=T,C*=T,R*=T}}for(let N=0;N<a;++N)l[i]=x,l[i+1]=C,l[i+2]=R,i+=c}}function ps(t,e,r,o,i,a=1){if(!r)return void Xo(t,e,o,i,a);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=t.length,u=n[0],f=n[1],v=n[2],p=n[4],y=n[5],E=n[6],D=n[8],F=n[9],B=n[10],w=!Ao(n),L=1e-6,$=1-L;if(i*=c,a===1)for(let x=0;x<d;++x){const C=4*t[x],R=e[C],S=e[C+1],A=e[C+2],N=e[C+3];let T=u*R+p*S+D*A,I=f*R+y*S+F*A,V=v*R+E*S+B*A;if(w){const W=T*T+I*I+V*V;if(W<$&&W>L){const q=1/Math.sqrt(W);T*=q,I*=q,V*=q}}l[i]=T,l[i+1]=I,l[i+2]=V,l[i+3]=N,i+=c}else for(let x=0;x<d;++x){const C=4*t[x],R=e[C],S=e[C+1],A=e[C+2],N=e[C+3];let T=u*R+p*S+D*A,I=f*R+y*S+F*A,V=v*R+E*S+B*A;if(w){const W=T*T+I*I+V*V;if(W<$&&W>L){const q=1/Math.sqrt(W);T*=q,I*=q,V*=q}}for(let W=0;W<a;++W)l[i]=T,l[i+1]=I,l[i+2]=V,l[i+3]=N,i+=c}}function vs(t,e,r,o,i,a=1){const n=o.typedBuffer,l=o.typedBufferStride,c=t.length;if(i*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let d=0;d<c;++d){const u=3*t[d];for(let f=0;f<a;++f)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}else for(let d=0;d<c;++d){const u=4*t[d];for(let f=0;f<a;++f)n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}else{if(r===4){for(let d=0;d<c;++d){const u=4*t[d];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=e[u+3],i+=l}return}for(let d=0;d<c;++d){const u=3*t[d];n[i]=e[u],n[i+1]=e[u+1],n[i+2]=e[u+2],n[i+3]=255,i+=l}}else{n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3];const d=new Uint32Array(o.typedBuffer.buffer,o.start),u=l/4,f=d[i/=4];i+=u;const v=c*a;for(let p=1;p<v;++p)d[i]=f,i+=u}}function gs(t,e,r,o){const i=r.typedBuffer,a=r.typedBufferStride,n=t.length,l=e[0];o*=a;for(let c=0;c<n;++c)i[o]=l,o+=a}function xs(t,e,r,o,i=1){const a=e.typedBuffer,n=e.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<i;++c)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n}function Ts(t,e,r,o,i,a){for(const n of e.fields.keys()){const l=t.vertexAttributes.get(n),c=t.indices.get(n);if(l&&c)_s(n,l,c,r,o,i,a);else if(n===m.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=t.indices.get(m.POSITION);if(j(!!d,`No buffer view for ${n}`),d){const u=d.length,f=i.getField(n,Zt);xs(t.objectAndLayerIdColor,f,u,a)}}}}function _s(t,e,r,o,i,a,n){switch(t){case m.POSITION:{j(e.size===3);const l=a.getField(t,Ut);j(!!l,`No buffer view for ${t}`),l&&hs(r,e.data,o,l,n);break}case m.NORMAL:{j(e.size===3);const l=a.getField(t,Ut);j(!!l,`No buffer view for ${t}`),l&&fs(r,e.data,i,l,n);break}case m.NORMALCOMPRESSED:{j(e.size===2);const l=a.getField(t,Ta);j(!!l,`No buffer view for ${t}`),l&&io(r,e.data,l,n);break}case m.UV0:{j(e.size===2);const l=a.getField(t,xa);j(!!l,`No buffer view for ${t}`),l&&io(r,e.data,l,n);break}case m.COLOR:case m.SYMBOLCOLOR:{const l=a.getField(t,Zt);j(!!l,`No buffer view for ${t}`),j(e.size===3||e.size===4),!l||e.size!==3&&e.size!==4||vs(r,e.data,e.size,l,n);break}case m.COLORFEATUREATTRIBUTE:{const l=a.getField(t,ga);j(!!l,`No buffer view for ${t}`),j(e.size===1),l&&e.size===1&&gs(r,e.data,l,n);break}case m.TANGENT:{j(e.size===4);const l=a.getField(t,gr);j(!!l,`No buffer view for ${t}`),l&&ps(r,e.data,i,l,n);break}case m.PROFILERIGHT:case m.PROFILEUP:case m.PROFILEVERTEXANDNORMAL:case m.FEATUREVALUE:{j(e.size===4);const l=a.getField(t,gr);j(!!l,`No buffer view for ${t}`),l&&Xo(r,e.data,l,n)}}}let bs=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(m.POSITION).length}write(e,r,o,i,a){Ts(o,this.vertexBufferLayout,e,r,i,a)}};function Pr(t){t.attributes.add(m.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Yo({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Ko=class extends Z{constructor(e,r){super(e,"mat3",M.Draw,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Me=class extends Z{constructor(e,r){super(e,"mat3",M.Pass,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Ze=class extends Z{constructor(e,r){super(e,"mat4",M.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function Qo(t,e){t.include(Pr);const r=t.vertex;r.include(Yo,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new K("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new K("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new Me("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Ze("transformProjFromView",o=>o.transformProjFromView),new Ko("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new he("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new he("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new K("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ss=class extends wr{constructor(){super(...arguments),this.transformWorldFromViewTH=P(),this.transformWorldFromViewTL=P(),this.transformViewFromCameraRelativeRS=Kt(),this.transformProjFromView=Qt()}};function Zo(t,e){switch(e.normalType){case z.Attribute:case z.Compressed:t.include(er,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Ko("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Me("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case z.Ground:t.include(Qo,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case z.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:tt(e.normalType);case z.COUNT:}}let As=class extends Ss{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Kt()}};const ys=.1,Ir=.001;let rr=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Nr=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=hr(this._program),this._pipeline=this._configuration=null}reload(e){hr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,o){e.setPipelineState(this.getPipelineState(r,o))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Va.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Dr=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new ia({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Ua()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(r==null||r.glName==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Ie.LESS;Ie.ALWAYS;const Cs={mask:255},Es={function:{func:Ie.ALWAYS,ref:$e.OutlineVisualElementMask,mask:$e.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},Os={function:{func:Ie.ALWAYS,ref:$e.OutlineVisualElementMask,mask:$e.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};Ie.EQUAL,$e.OutlineVisualElementMask,$e.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;Ie.NOTEQUAL,$e.OutlineVisualElementMask,$e.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;function ws({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&i==null&&(a==null||aa(a,Xt))&&n==null&&(o==null||o===1)&&(r==null||r===1||r===0)}const Jo=[1,1,.5],Rs=[0,.6,.2],Ms=[0,1,.2];let we=class extends Z{constructor(e,r){super(e,"vec2",M.Pass,(o,i,a)=>o.setUniform2fv(e,r(i,a)))}};function ao(t){t.varyings.add("linearDepth","float")}function ei(t){t.vertex.uniforms.add(new we("nearFar",(e,r)=>r.camera.nearFar))}function ti(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ri(t,e){const{vertex:r}=t;switch(e.output){case b.Color:if(e.receiveShadows)return ao(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case b.Depth:case b.Shadow:case b.ShadowHighlight:case b.ShadowExcludeHighlight:return t.include(Qo,e),ao(t),ei(t),ti(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function oi(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function He(t,e){Ls(t,e,new he("slicePlaneOrigin",(r,o)=>$s(e,r,o)),new he("slicePlaneBasis1",(r,o)=>{var i;return no(e,r,o,(i=o.slicePlane)==null?void 0:i.basis1)}),new he("slicePlaneBasis2",(r,o)=>{var i;return no(e,r,o,(i=o.slicePlane)==null?void 0:i.basis2)}))}function Ls(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(a)}function ii(t,e,r){return t.instancedDoublePrecision?U(Ps,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ai(t,e){return t!=null?Ke(Ht,e.origin,t):e.origin}function ni(t,e,r){return t.hasSliceTranslatedView?e!=null?fr(Is,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function $s(t,e,r){if(r.slicePlane==null)return Xt;const o=ii(t,e,r),i=ai(o,r.slicePlane),a=ni(t,o,r);return a!=null?Le(Ht,i,a):i}function no(t,e,r,o){if(o==null||r.slicePlane==null)return Xt;const i=ii(t,e,r),a=ai(i,r.slicePlane),n=ni(t,i,r);return n!=null?(pe(lt,o,a),Le(Ht,a,n),Le(lt,lt,n),Ke(lt,lt,Ht)):o}const Ps=P(),Ht=P(),lt=P(),Is=Qt();function xt(t){ti(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let ee=class extends Z{constructor(e,r){super(e,"float",M.Pass,(o,i,a)=>o.setUniform1f(e,r(i,a)))}},Ns=class extends Z{constructor(e,r){super(e,"mat4",M.Draw,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function bt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Xt):t.uniforms.add(new he("cameraPosition",(r,o)=>U(si,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Tt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Ze("proj",(o,i)=>i.camera.projectionMatrix),new Ns("view",(o,i)=>fr(so,i.camera.viewMatrix,o.origin)),new he("localOrigin",o=>o.origin));const r=o=>U(si,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Ze("proj",(o,i)=>i.camera.projectionMatrix),new Ze("view",(o,i)=>fr(so,i.camera.viewMatrix,r(i))),new K("localOrigin",(o,i)=>r(i)))}const so=Qt(),si=P();function Ds(t){t.uniforms.add(new Ze("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let Fs=class extends wr{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function g(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,i=t.count||2,a=Math.ceil(Math.log2(i)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const c=n[l],d=(1<<a)-1<<c;n[l]+=a,Object.defineProperty(e,r,{get(){return this[o]},set(u){if(this[o]!==u&&(this[o]=u,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+u<<c&d,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}let br=class extends Fs{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};h([g()],br.prototype,"instancedDoublePrecision",void 0),h([g()],br.prototype,"hasModelTransformation",void 0);const lo=Kt();function li(t,e){const r=e.hasModelTransformation,o=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Ze("model",a=>a.modelTransformation??Gt)),t.vertex.uniforms.add(new Me("normalLocalOriginFromModel",a=>(pr(lo,a.modelTransformation??Gt),lo)))),e.instanced&&o&&(t.attributes.add(m.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(m.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(m.INSTANCEMODEL,"mat3"),t.attributes.add(m.INSTANCEMODELNORMAL,"mat3"));const i=t.vertex;o&&(i.include(Yo,e),i.uniforms.add(new he("viewOriginHi",(a,n)=>Ja(U(Lt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Lt)),new he("viewOriginLo",(a,n)=>en(U(Lt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Lt)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * normalize(instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===b.Normal&&(Ds(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${o?"return normalize((viewNormal * vec4(instanceModelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Lt=P();function Bs(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Ce.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Ce.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Ce.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Ce.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let ci=class extends Z{constructor(e,r){super(e,"int",M.Pass,(o,i,a)=>o.setUniform1i(e,r(i,a)))}};function di(t,e){e.hasSymbolColors?(t.include(Bs),t.attributes.add(m.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new ci("colorMixMode",r=>os[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ui(t,e){e.hasVertexColors?(t.attributes.add(m.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}let te=class extends Z{constructor(e,r){super(e,"vec4",M.Pass,(o,i,a)=>o.setUniform4fv(e,r(i,a)))}};function Vs(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function zs(t){t.uniforms.add(new te("screenSizePerspectiveAlignment",e=>Gs(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Gs(t){return oe(Us,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Us=Yt();function mi(t,e){const r=t.vertex;e.hasVerticalOffset?(Ws(r),e.hasScreenSizePerspective&&(t.include(Vs),zs(r),bt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Hs=Yt();function Ws(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return oe(Hs,a*l,n,o,i)}))}function ks(t,e){const r=e.output===b.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(m.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(m.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function hi(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function fi(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function js(t,e){switch(e.output){case b.Shadow:case b.ShadowHighlight:case b.ShadowExcludeHighlight:t.fragment.include(hi),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case b.Depth:t.fragment.include(fi),t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const qs=Or(1,1,0,1),Xs=Or(1,0,1,1);function Ys(t){t.fragment.uniforms.add(new Q("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",qs).add("unoccludedHighlightFlag","vec4",Xs),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let Ks=class extends Z{constructor(e,r,o){super(e,"vec4",M.Pass,(i,a,n)=>i.setUniform4fv(e,r(a,n)),o)}},Qs=class extends Z{constructor(e,r,o){super(e,"float",M.Pass,(i,a,n)=>i.setUniform1fv(e,r(a,n)),o)}},G=class extends sa{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};h([k()],G.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),h([k()],G.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),h([k()],G.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),h([k()],G.prototype,"DECONFLICTOR_SHOW_GRID",void 0),h([k()],G.prototype,"LABELS_SHOW_BORDER",void 0),h([k()],G.prototype,"TEXT_SHOW_BASELINE",void 0),h([k()],G.prototype,"TEXT_SHOW_BORDER",void 0),h([k()],G.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),h([k()],G.prototype,"OVERLAY_SHOW_CENTER",void 0),h([k()],G.prototype,"SHOW_POI",void 0),h([k()],G.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),h([k()],G.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),h([k()],G.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),h([k()],G.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),h([k()],G.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),h([k()],G.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),h([k()],G.prototype,"I3S_TREE_SHOW_TILES",void 0),h([k()],G.prototype,"I3S_SHOW_MODIFICATIONS",void 0),h([k()],G.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),h([k()],G.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),h([k()],G.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),h([k()],G.prototype,"LINE_WIREFRAMES",void 0),G=h([na("esri.views.3d.support.DebugFlags")],G);new G;var co,uo;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(co||(co={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(uo||(uo={}));const cr=8;function _t(t,e){const{vertex:r,attributes:o}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&o.add(m.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new K("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new K("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new K("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new K("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new Me("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new K("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",cr),r.uniforms.add(new Qs("vvColorValues",i=>i.vvColor.values,cr),new Ks("vvColorColors",i=>i.vvColor.colors,cr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Zs(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Ir)}) { discard; } }
  `)}function We(t,e){Js(t,e,new ee("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Js(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==Y.Mask&&e.alphaDiscardMode!==Y.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case Y.Blend:return t.include(Zs);case Y.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Y.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Y.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function pi(t,e){const{vertex:r,fragment:o}=t,i=e.hasColorTexture&&e.alphaDiscardMode!==Y.Opaque;switch(e.output){case b.Depth:case b.Shadow:case b.ShadowHighlight:case b.ShadowExcludeHighlight:case b.ObjectAndLayerIdColor:Tt(r,e),t.include(xt,e),t.include(Qe,e),t.include(_t,e),t.include(js,e),t.include(He,e),t.include(ks,e),ei(t),t.varyings.add("depth","float"),i&&o.uniforms.add(new Q("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(We,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===b.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case b.Normal:{Tt(r,e),t.include(xt,e),t.include(er,e),t.include(Zo,e),t.include(Qe,e),t.include(_t,e),i&&o.uniforms.add(new Q("tex",n=>n.texture)),e.normalType===z.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const a=e.normalType===z.Attribute||e.normalType===z.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${a?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(He,e),t.include(We,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===z.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case b.Highlight:Tt(r,e),t.include(xt,e),t.include(Qe,e),t.include(_t,e),i&&o.uniforms.add(new Q("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(He,e),t.include(We,e),t.include(Ys,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function el(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(m.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==J.None&&(t.include(zo,e),r.uniforms.add(e.pbrTextureBindType===M.Pass?new Q("normalTexture",o=>o.textureNormal):new gt("normalTexture",o=>o.textureNormal)),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}var ye;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(ye||(ye={}));const Pt=new Re;Pt.pixelFormat=ve.RED,Pt.internalFormat=yt.R8,Pt.wrapMode=ce.CLAMP_TO_EDGE;const It=new Re;It.pixelFormat=ve.RG,It.internalFormat=yt.RG8,It.wrapMode=ce.CLAMP_TO_EDGE;const Nt=new Re;Nt.internalFormat=yt.RGBA4,Nt.dataType=Jt.UNSIGNED_SHORT_4_4_4_4,Nt.wrapMode=ce.CLAMP_TO_EDGE;const vi=new Re;vi.wrapMode=ce.CLAMP_TO_EDGE;const ut=new Re;ut.wrapMode=ce.CLAMP_TO_EDGE,ut.samplingMode=xe.LINEAR_MIPMAP_LINEAR,ut.hasMipmap=!0,ut.maxAnisotropy=8;const mt=new Re;mt.pixelFormat=ve.RED,mt.dataType=Jt.HALF_FLOAT,mt.internalFormat=yt.R16F,mt.samplingMode=xe.NEAREST;const Dt=new Re;Dt.dataType=Jt.HALF_FLOAT,Dt.internalFormat=yt.RGBA16F,Dt.samplingMode=xe.NEAREST;ye.RED+"",ye.RG+"",ye.RGBA4+"",ye.RGBA+"",ye.RGBA_MIPMAP+"",ye.R16F+"",ye.RGBA16F+"";var Wt;(function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"})(Wt||(Wt={}));const ht=new Re;ht.pixelFormat=ve.DEPTH_STENCIL,ht.dataType=Jt.UNSIGNED_INT_24_8,ht.samplingMode=xe.NEAREST,ht.wrapMode=ce.CLAMP_TO_EDGE;Wt.DEPTH_STENCIL_TEXTURE+"",Wt.DEPTH16_BUFFER+"",new tn(za.DEPTH_COMPONENT16,4);new ue(m.POSITION,3,de.FLOAT,0,12);new ue(m.POSITION,3,de.FLOAT,0,20),new ue(m.UV0,2,de.FLOAT,12,20);new ue(m.POSITION,3,de.FLOAT,0,32),new ue(m.NORMAL,3,de.FLOAT,12,32),new ue(m.UV0,2,de.FLOAT,24,32);new ue(m.POSITION,3,de.FLOAT,0,16),new ue(m.COLOR,4,de.UNSIGNED_BYTE,12,16);new ue(m.POSITION,2,de.FLOAT,0,8);new ue(m.POSITION,2,de.FLOAT,0,16),new ue(m.UV0,2,de.FLOAT,8,16);function gi(t,e=!0){t.attributes.add(m.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Fr(t){t.include(fi),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}let tl=class extends Z{constructor(e,r){super(e,"vec2",M.Draw,(o,i,a,n)=>o.setUniform2fv(e,r(i,a,n)))}};const xi=yr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Ti=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==r){xi.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const a of Object.keys(o))o[a]!==e[a]&&i.add(a);for(const a of Object.keys(e))o[a]!==e[a]&&i.add(a);i.forEach(a=>console.error(`  ${a}: current ${o[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},or=class extends Ti{constructor(){super(...arguments),this.vertex=new mo,this.fragment=new mo,this.attributes=new il,this.varyings=new al,this.extensions=new Sr,this.constants=new H,this.outputs=new _i}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=e==="vertex"?sl:nl,d=this.constants.generateSource().concat(a.constants.generateSource()),u=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${c}

${d.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${u.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[M.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[M.Pass];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n)=>{for(let l=0;l<i;++l)o[l](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[M.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[M.Draw];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n,l)=>{for(let c=0;c<i;++c)o[c](e,a,n,l)}}},rl=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Cr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else xi.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},ol=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},mo=class extends Ti{constructor(){super(...arguments),this.uniforms=new rl,this.code=new ol,this.constants=new H}get builder(){return this}},il=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},al=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&j(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((o,i)=>r.push(e==="vertex"?`out ${o} ${i};`:`in ${o} ${i};`)),r}},Sr=class Ar{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Ar.ALLOWLIST_VERTEX:Ar.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};Sr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Sr.ALLOWLIST_VERTEX=[];let _i=class bi{constructor(){this._entries=new Map}add(e,r,o=0){const i=this._entries.get(o);i?j(i.name===e&&i.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];if(this._entries.size===0)return bi.DEFAULT_OUTPUT;const r=new Array;return this._entries.forEach((o,i)=>r.push(`layout(location = ${i}) out ${o.type} ${o.name};`)),r}};_i.DEFAULT_OUTPUT=["layout(location = 0) out vec4 fragColor;"];class H{constructor(){this._entries=new Set}add(e,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=H._numberToFloatStr(o);break;case"int":i=H._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])},                            ${H._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${H._numberToFloatStr(o[0])},                            ${H._numberToFloatStr(o[1])},                            ${H._numberToFloatStr(o[2])},                            ${H._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])},                             ${H._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${H._numberToIntStr(o[0])},                             ${H._numberToIntStr(o[1])},                             ${H._numberToIntStr(o[2])},                             ${H._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>H._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const nl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,sl=`precision highp float;
precision highp sampler2D;`,dr=4;function ll(){const t=new or,e=t.fragment;t.include(gi);const r=(dr+1)/2,o=1/(2*r*r);return e.include(Fr),e.uniforms.add(new Q("depthMap",i=>i.depthTexture),new gt("tex",i=>i.colorTexture),new tl("blurSize",i=>i.blurSize),new ee("projScale",(i,a)=>{const n=la(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale}),new we("nearFar",(i,a)=>a.camera.nearFar)),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(dr)}; r <= ${s.int(dr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const cl=Object.freeze(Object.defineProperty({__proto__:null,build:ll},Symbol.toStringTag,{value:"Module"}));let dl=class Si extends Nr{initializeProgram(e){return new Dr(e.rctx,Si.shader.get().build(),tr)}initializePipeline(){return Rr({colorWrite:Mr})}};dl.shader=new rr(cl,()=>St(()=>import("./SSAOBlur.glsl-7a9a9f37.js"),["./SSAOBlur.glsl-7a9a9f37.js","./index-6a6230c9.js","./index-ed438937.css","./OrderIndependentTransparency-e18a4b09.js","./enums-b14466b3.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-c9cc5f8e.js","./devEnvironmentUtils-5002a058.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-e560afde.js","./vec32-0d2d8ac6.js","./DefaultMaterial_COLOR_GAMMA-d058e08d.js","./quat-b2f94896.js","./quatf64-3363c48e.js","./resourceUtils-29c53688.js","./Indices-2c511ceb.js","./byteSizeEstimations-7cf1c05d.js","./NestedMap-1b5db22e.js","./requestImageUtils-7752e530.js","./triangle-8aaa551a.js","./sphere-f5810db0.js","./lineSegment-be205fdb.js","./Texture-37d17670.js","./InterleavedLayout-e0d8d912.js","./types-1305598a.js","./orientedBoundingBox-34cfa61d.js","./quatf32-6df77abe.js","./vec3f32-ad1dc57f.js","./plane-fc562cd0.js","./doublePrecisionUtils-e3c3d0d8.js","./VertexArrayObject-91d61933.js","./VertexElementDescriptor-2925c6af.js"],import.meta.url));function ul(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>ml(r))),t.fragment.uniforms.add(new we("zScale",(e,r)=>Ai(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function ml(t){const e=t.camera.projectionMatrix;return e[11]===0?oe(ho,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):oe(ho,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const ho=Yt();function Ai(t){return t.camera.projectionMatrix[11]===0?Vt(fo,0,1):Vt(fo,1,0)}const fo=yo(),po=16;function hl(){const t=new or,e=t.fragment;return t.include(gi),e.include(Fr),t.include(ul),e.uniforms.add(new ee("radius",(r,o)=>yi(o.camera))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new we("nearFar",(r,o)=>o.camera.nearFar),new Q("normalMap",r=>r.normalTexture),new Q("depthMap",r=>r.depthTexture),new we("zScale",(r,o)=>Ai(o)),new ee("projScale",r=>r.projScale),new Q("rnm",r=>r.noiseTexture),new we("rnmScale",(r,o)=>Vt(vo,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new ee("intensity",r=>r.intensity),new we("screenSize",(r,o)=>Vt(vo,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(po)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(po)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function yi(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const vo=yo(),fl=Object.freeze(Object.defineProperty({__proto__:null,build:hl,getRadius:yi},Symbol.toStringTag,{value:"Module"}));let pl=class Ci extends Nr{initializeProgram(e){return new Dr(e.rctx,Ci.shader.get().build(),tr)}initializePipeline(){return Rr({colorWrite:Mr})}};pl.shader=new rr(fl,()=>St(()=>import("./SSAO.glsl-144c79ed.js"),["./SSAO.glsl-144c79ed.js","./index-6a6230c9.js","./index-ed438937.css","./OrderIndependentTransparency-e18a4b09.js","./enums-b14466b3.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-c9cc5f8e.js","./devEnvironmentUtils-5002a058.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-e560afde.js","./vec32-0d2d8ac6.js","./DefaultMaterial_COLOR_GAMMA-d058e08d.js","./quat-b2f94896.js","./quatf64-3363c48e.js","./resourceUtils-29c53688.js","./Indices-2c511ceb.js","./byteSizeEstimations-7cf1c05d.js","./NestedMap-1b5db22e.js","./requestImageUtils-7752e530.js","./triangle-8aaa551a.js","./sphere-f5810db0.js","./lineSegment-be205fdb.js","./Texture-37d17670.js","./InterleavedLayout-e0d8d912.js","./types-1305598a.js","./orientedBoundingBox-34cfa61d.js","./quatf32-6df77abe.js","./vec3f32-ad1dc57f.js","./plane-fc562cd0.js","./doublePrecisionUtils-e3c3d0d8.js","./VertexArrayObject-91d61933.js","./VertexElementDescriptor-2925c6af.js"],import.meta.url));const vl=2;function Br(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new Q("ssaoTex",(o,i)=>i.ssaoHelper.colorTexture)),r.constants.add("blurSizePixelsInverse","float",1/vl),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function gl(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new K("lightingAmbientSH0",(i,a)=>U(go,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new te("lightingAmbientSH_R",(i,a)=>oe(Se,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(i,a)=>oe(Se,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(i,a)=>oe(Se,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add(new K("lightingAmbientSH0",(i,a)=>U(go,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(i,a)=>oe(Se,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(i,a)=>oe(Se,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(i,a)=>oe(Se,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(i,a)=>oe(Se,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(i,a)=>oe(Se,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(i,a)=>oe(Se,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==O.Normal&&e.pbrMode!==O.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const go=P(),Se=Yt();function Vr(t){t.uniforms.add(new K("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function ir(t){t.uniforms.add(new K("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function xo(t){Vr(t.fragment),ir(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function xl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ei(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function zr(t,e){const r=t.fragment.code;t.include(Ei),e.pbrMode!==O.Normal&&e.pbrMode!==O.Schematic&&e.pbrMode!==O.Terrain&&e.pbrMode!==O.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==O.Normal&&e.pbrMode!==O.Schematic||(t.include(xl),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Tl=class extends Z{constructor(e,r){super(e,"bool",M.Pass,(o,i,a)=>o.setUniform1b(e,r(i,a)))}};const _l=.4;function Gr(t){t.constants.add("ambientBoostFactor","float",_l)}function Ur(t){t.uniforms.add(new ee("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Oi(t,e){const r=t.fragment;switch(t.include(Br,e),e.pbrMode!==O.Disabled&&t.include(zr,e),t.include(gl,e),t.include(Ei),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===O.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Gr(r),Ur(r),Vr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ir(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case O.Disabled:case O.WaterOnIntegratedMesh:case O.Water:t.include(xo),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case O.Normal:case O.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Tl("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new ee("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new ee("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===O.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case O.Terrain:case O.TerrainWithWater:t.include(xo),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:tt(e.pbrMode);case O.COUNT:}}function kt(t,e){e.multipassEnabled&&(t.fragment.include(Fr),t.fragment.uniforms.add(new Q("terrainDepthTexture",(r,o)=>{var i;return(i=o.multipassTerrain.linearDepth)==null?void 0:i.colorTexture})),t.fragment.uniforms.add(new we("nearFar",(r,o)=>o.camera.nearFar)),t.fragment.uniforms.add(new we("inverseViewport",(r,o)=>o.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class bl extends Z{constructor(e,r,o){super(e,"mat4",M.Draw,(i,a,n,l)=>i.setUniformMatrix4fv(e,r(a,n,l)),o)}}let Sl=class extends Z{constructor(e,r,o){super(e,"mat4",M.Pass,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}};function wi(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Sl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Mi(t))}function Ri(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new bl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Mi(t))}function Mi(t){const e=t.fragment;e.include(hi),e.uniforms.add(new Q("shadowMapTex",(r,o)=>o.shadowMap.depthTexture),new ci("numCascades",(r,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function Al(t){t.vertex.uniforms.add(new Me("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix!=null?e.colorTextureTransformMatrix:et())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function yl(t){t.vertex.uniforms.add(new Me("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix!=null?e.normalTextureTransformMatrix:et())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Cl(t){t.vertex.uniforms.add(new Me("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix!=null?e.emissiveTextureTransformMatrix:et())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function El(t){t.vertex.uniforms.add(new Me("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix!=null?e.occlusionTextureTransformMatrix:et())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ol(t){t.vertex.uniforms.add(new Me("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix!=null?e.metallicRoughnessTextureTransformMatrix:et())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function wl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function jt(t){t.include(wl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Ce.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Ce.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(Ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Ce.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Rl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;if(Tt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(_t,t),e.include(li,t),e.include(mi,t),t.hasColorTextureTransform&&e.include(Al),t.output===b.Color||t.output===b.Alpha){t.hasNormalTextureTransform&&e.include(yl),t.hasEmissionTextureTransform&&e.include(Cl),t.hasOcclusionTextureTransform&&e.include(El),t.hasMetallicRoughnessTextureTransform&&e.include(Ol),bt(r,t),e.include(er,t),e.include(xt,t);const a=t.normalType===z.Attribute||t.normalType===z.Compressed;a&&t.offsetBackfaces&&e.include(oi),e.include(el,t),e.include(Zo,t),t.instancedColor&&e.attributes.add(m.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),e.include(Qe,t),e.include(ri,t),e.include(di,t),e.include(ui,t),r.uniforms.add(new te("externalColor",n=>n.externalColor)),i.add("vcolorExt","vec4"),t.multipassEnabled&&i.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Ir)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(t.output){case b.Alpha:e.include(He,t),e.include(We,t),e.include(kt,t),o.uniforms.add(new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),o.include(jt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case b.Color:e.include(He,t),e.include(Oi,t),e.include(Br,t),e.include(We,t),e.include(t.instancedDoublePrecision?wi:Ri,t),e.include(kt,t),bt(o,t),o.uniforms.add(r.uniforms.get("localOrigin"),new K("ambient",a=>a.ambient),new K("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),e.include(Go,t),e.include(zr,t),o.include(jt),e.include(Bn,t),Gr(o),Ur(o),ir(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===z.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===O.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===O.Normal||t.pbrMode===O.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Je.Color?s`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return e.include(pi,t),e}const Ml=Object.freeze(Object.defineProperty({__proto__:null,build:Rl},Symbol.toStringTag,{value:"Module"}));let Ll=class extends As{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=vr(Jo),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Pe.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Ye(0,0,0),this.instancedDoublePrecision=!1,this.normalType=z.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ye(.2,.2,.2),this.diffuse=Ye(.8,.8,.8),this.externalColor=Or(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=P(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=At.Less,this.textureAlphaMode=Y.Blend,this.textureAlphaCutoff=ys,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Tr.Occlude,this.isDecoration=!1}};class Ct extends Nr{initializeConfiguration(e,r){r.spherical=e.viewingMode===Bt.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?J.Default:J.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Ct.shader)}_initializeProgram(e,r){return new Dr(e.rctx,r.get().build(this.configuration),tr)}_convertDepthTestFunction(e){return e===At.Lequal?Ie.LEQUAL:Ie.LESS}_makePipeline(e,r){const o=this.configuration,i=e===Je.NONE,a=e===Je.FrontFace;return Rr({blending:o.output!==b.Color&&o.output!==b.Alpha||!o.transparent?null:i?Wa:ka(e),culling:$l(o)?ja(o.cullFace):null,depthTest:{func:qa(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||a)&&o.writeDepth?Xa:null,colorWrite:Mr,stencilWrite:o.hasOccludees?Cs:null,stencilTest:o.hasOccludees?r?Os:Es:null,polygonOffset:i||a?null:Ya(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function $l(t){return t.cullFace!==Pe.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Ct.shader=new rr(Ml,()=>St(()=>import("./DefaultMaterial.glsl-87cd0092.js"),["./DefaultMaterial.glsl-87cd0092.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./index-6a6230c9.js","./index-ed438937.css","./OrderIndependentTransparency-e18a4b09.js","./enums-b14466b3.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-c9cc5f8e.js","./orientedBoundingBox-34cfa61d.js","./quat-b2f94896.js","./quatf64-3363c48e.js","./quatf32-6df77abe.js","./vec3f32-ad1dc57f.js","./plane-fc562cd0.js","./sphere-f5810db0.js","./VertexArrayObject-91d61933.js","./Texture-37d17670.js","./devEnvironmentUtils-5002a058.js","./BufferView-e560afde.js","./vec32-0d2d8ac6.js","./DefaultMaterial_COLOR_GAMMA-d058e08d.js","./resourceUtils-29c53688.js","./Indices-2c511ceb.js","./byteSizeEstimations-7cf1c05d.js","./NestedMap-1b5db22e.js","./requestImageUtils-7752e530.js","./triangle-8aaa551a.js","./lineSegment-be205fdb.js","./InterleavedLayout-e0d8d912.js","./types-1305598a.js","./doublePrecisionUtils-e3c3d0d8.js","./VertexElementDescriptor-2925c6af.js"],import.meta.url));let Ft=class extends br{};h([g({constValue:!0})],Ft.prototype,"hasSliceHighlight",void 0),h([g({constValue:!1})],Ft.prototype,"hasSliceInVertexProgram",void 0),h([g({constValue:M.Pass})],Ft.prototype,"pbrTextureBindType",void 0);class _ extends Ft{constructor(){super(...arguments),this.output=b.Color,this.alphaDiscardMode=Y.Opaque,this.doubleSidedMode=re.None,this.pbrMode=O.Disabled,this.cullFace=Pe.None,this.transparencyPassType=Je.NONE,this.normalType=z.Attribute,this.textureCoordinateType=J.None,this.customDepthTest=At.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}h([g({count:b.COUNT})],_.prototype,"output",void 0),h([g({count:Y.COUNT})],_.prototype,"alphaDiscardMode",void 0),h([g({count:re.COUNT})],_.prototype,"doubleSidedMode",void 0),h([g({count:O.COUNT})],_.prototype,"pbrMode",void 0),h([g({count:Pe.COUNT})],_.prototype,"cullFace",void 0),h([g({count:Je.COUNT})],_.prototype,"transparencyPassType",void 0),h([g({count:z.COUNT})],_.prototype,"normalType",void 0),h([g({count:J.COUNT})],_.prototype,"textureCoordinateType",void 0),h([g({count:At.COUNT})],_.prototype,"customDepthTest",void 0),h([g()],_.prototype,"spherical",void 0),h([g()],_.prototype,"hasVertexColors",void 0),h([g()],_.prototype,"hasSymbolColors",void 0),h([g()],_.prototype,"hasVerticalOffset",void 0),h([g()],_.prototype,"hasSlicePlane",void 0),h([g()],_.prototype,"hasSliceHighlight",void 0),h([g()],_.prototype,"hasColorTexture",void 0),h([g()],_.prototype,"hasMetallicRoughnessTexture",void 0),h([g()],_.prototype,"hasEmissionTexture",void 0),h([g()],_.prototype,"hasOcclusionTexture",void 0),h([g()],_.prototype,"hasNormalTexture",void 0),h([g()],_.prototype,"hasScreenSizePerspective",void 0),h([g()],_.prototype,"hasVertexTangents",void 0),h([g()],_.prototype,"hasOccludees",void 0),h([g()],_.prototype,"multipassEnabled",void 0),h([g()],_.prototype,"hasModelTransformation",void 0),h([g()],_.prototype,"offsetBackfaces",void 0),h([g()],_.prototype,"vvSize",void 0),h([g()],_.prototype,"vvColor",void 0),h([g()],_.prototype,"receiveShadows",void 0),h([g()],_.prototype,"receiveAmbientOcclusion",void 0),h([g()],_.prototype,"textureAlphaPremultiplied",void 0),h([g()],_.prototype,"instanced",void 0),h([g()],_.prototype,"instancedColor",void 0),h([g()],_.prototype,"objectAndLayerIdColorInstanced",void 0),h([g()],_.prototype,"instancedDoublePrecision",void 0),h([g()],_.prototype,"doublePrecisionRequiresObfuscation",void 0),h([g()],_.prototype,"writeDepth",void 0),h([g()],_.prototype,"transparent",void 0),h([g()],_.prototype,"enableOffset",void 0),h([g()],_.prototype,"cullAboveGround",void 0),h([g()],_.prototype,"snowCover",void 0),h([g()],_.prototype,"hasColorTextureTransform",void 0),h([g()],_.prototype,"hasEmissionTextureTransform",void 0),h([g()],_.prototype,"hasNormalTextureTransform",void 0),h([g()],_.prototype,"hasOcclusionTextureTransform",void 0),h([g()],_.prototype,"hasMetallicRoughnessTextureTransform",void 0),h([g({constValue:!0})],_.prototype,"hasVvInstancing",void 0),h([g({constValue:!1})],_.prototype,"useCustomDTRExponentForWater",void 0),h([g({constValue:!1})],_.prototype,"supportsTextureAtlas",void 0),h([g({constValue:!0})],_.prototype,"useFillLights",void 0);function Pl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;return Tt(r,t),e.include(Pr),i.add("vpos","vec3"),e.include(_t,t),e.include(li,t),e.include(mi,t),t.output!==b.Color&&t.output!==b.Alpha||(bt(e.vertex,t),e.include(er,t),e.include(xt,t),t.offsetBackfaces&&e.include(oi),t.instancedColor&&e.attributes.add(m.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.multipassEnabled&&i.add("depth","float"),e.include(Qe,t),e.include(ri,t),e.include(di,t),e.include(ui,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Ir)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===b.Alpha&&(e.include(He,t),e.include(We,t),e.include(kt,t),o.uniforms.add(new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),o.include(jt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),t.output===b.Color&&(e.include(He,t),e.include(Oi,t),e.include(Br,t),e.include(We,t),e.include(t.instancedDoublePrecision?wi:Ri,t),e.include(kt,t),bt(e.fragment,t),Vr(o),Gr(o),Ur(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new K("ambient",a=>a.ambient),new K("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new Q("tex",a=>a.texture)),e.include(Go,t),e.include(zr,t),o.include(jt),ir(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===O.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===O.Normal||t.pbrMode===O.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===O.Normal||t.pbrMode===O.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===Je.Color?s`fragColor = premultiplyAlpha(fragColor);`:s``}
      }
    `)),e.include(pi,t),e}const Il=Object.freeze(Object.defineProperty({__proto__:null,build:Pl},Symbol.toStringTag,{value:"Module"}));class ar extends Ct{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=z.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ar.shader)}}ar.shader=new rr(Il,()=>St(()=>import("./RealisticTree.glsl-0af34365.js"),["./RealisticTree.glsl-0af34365.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./index-6a6230c9.js","./index-ed438937.css","./OrderIndependentTransparency-e18a4b09.js","./enums-b14466b3.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-c9cc5f8e.js","./orientedBoundingBox-34cfa61d.js","./quat-b2f94896.js","./quatf64-3363c48e.js","./quatf32-6df77abe.js","./vec3f32-ad1dc57f.js","./plane-fc562cd0.js","./sphere-f5810db0.js","./VertexArrayObject-91d61933.js","./Texture-37d17670.js","./devEnvironmentUtils-5002a058.js","./BufferView-e560afde.js","./vec32-0d2d8ac6.js","./DefaultMaterial_COLOR_GAMMA-d058e08d.js","./resourceUtils-29c53688.js","./Indices-2c511ceb.js","./byteSizeEstimations-7cf1c05d.js","./NestedMap-1b5db22e.js","./requestImageUtils-7752e530.js","./triangle-8aaa551a.js","./lineSegment-be205fdb.js","./InterleavedLayout-e0d8d912.js","./types-1305598a.js","./doublePrecisionUtils-e3c3d0d8.js","./VertexElementDescriptor-2925c6af.js"],import.meta.url));let qt=class extends as{constructor(e){super(e,Fl),this.supportsEdges=!0,this._configuration=new _,this._vertexBufferLayout=Bl(this.parameters)}isVisibleForOutput(e){return e!==b.Shadow&&e!==b.ShadowExcludeHighlight&&e!==b.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:i,vvColor:a}=e,n=e.colorMixMode==="replace",l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0,d=r||a||i;return o&&d?n||l:o?n?c:l:d?n||l:n?c:l}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Pe.None:this.parameters.cullFace,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e!==b.Color&&e!==b.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?O.Schematic:O.Normal:O.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Ka,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,i,a,n){if(this.parameters.verticalOffset!=null){const l=o.camera;U(mr,r[12],r[13],r[14]);let c=null;switch(o.viewingMode){case Bt.Global:c=Er(To,mr);break;case Bt.Local:c=ca(To,Gl)}let d=0;const u=Ke(Ul,mr,l.eye),f=le(u),v=ge(u,u,1/f);let p=null;this.parameters.screenSizePerspective&&(p=da(c,v)),d+=es(l,f,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),ge(c,c,d),ua(ur,c,o.transform.inverseRotation),i=Ke(Vl,i,ur),a=Ke(zl,a,ur)}Xn(e,o,i,a,ls(o.verticalOffset),n)}canRender(e,r){return r===b.Color||r===b.Alpha||r===b.Depth||r===b.Normal||r===b.Shadow||r===b.ShadowHighlight||r===b.ShadowExcludeHighlight||r===b.Highlight||r===b.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?Xe.TRANSPARENT_MATERIAL:Xe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Xe.OPAQUE_MATERIAL)||e===Xe.DRAPED_MATERIAL:!1}createGLMaterial(e){return new Nl(e)}createBufferWriter(){return new bs(this._vertexBufferLayout)}},Nl=class extends Gn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==b.Color&&this._output!==b.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return U(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?ar:Ct,e)}},Dl=class extends Ll{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Fl=new Dl;function Bl(t){const e=Ha().vec3f(m.POSITION);return t.normalType===z.Compressed?e.vec2i16(m.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(m.NORMAL),t.hasVertexTangents&&e.vec4f(m.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(m.UV0),t.hasVertexColors&&e.vec4u8(m.COLOR),t.hasSymbolColors&&e.vec4u8(m.SYMBOLCOLOR),ma("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(m.OBJECTANDLAYERIDCOLOR),e}const Vl=P(),zl=P(),Gl=Ye(0,0,1),To=P(),ur=P(),mr=P(),Ul=P(),Ae=yr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Hl(t,e){const r=await Wl(t,e),o=await Yl(r.textureDefinitions??{},e);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const n=o[a];i+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:i+$a(r)}}async function Wl(t,e){const r=e!=null&&e.streamDataRequester;if(r)return kl(t,r,e);const o=await Co(ha(t,e));if(o.ok===!0)return o.value.data;Eo(o.error),Li(o.error)}async function kl(t,e,r){const o=await Co(e.request(t,"json",r));if(o.ok===!0)return o.value;Eo(o.error),Li(o.error.details.url)}function Li(t){throw new Cr("",`Request for object resource failed: ${t}`)}function jl(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(Ae.warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Ae.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Ae.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(Ae.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Ae.warn("Indexed geometries must specify faces"),o=!1;break}default:Ae.warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(Ae.warn("Geometry requires material"),o=!1);const i=t.params.vertexAttributes;for(const a in i)i[a].values||(Ae.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function ql(t,e){var y;const r=new Array,o=new Array,i=new Array,a=new Pa,n=t.resource,l=Oo.parse(n.version||"1.0","wosr");Ql.validate(l);const c=n.model.name,d=n.model.geometries,u=n.materialDefinitions??{},f=t.textures;let v=0;const p=new Map;for(let E=0;E<d.length;E++){const D=d[E];if(!jl(D))continue;const F=Kl(D),B=D.params.vertexAttributes,w=[];for(const T in B){const I=B[T],V=I.values;w.push([T,new je(V,I.valuesPerElement,!0)])}const L=[];if(D.params.topology!=="PerAttributeArray"){const T=D.params.faces;for(const I in T)L.push([I,T[I].values])}const $=F.texture,x=f&&f[$];if(x&&!p.has($)){const{image:T,parameters:I}=x,V=new Bo(T,I);o.push(V),p.set($,V)}const C=p.get($),R=C?C.id:void 0,S=F.material;let A=a.get(S,$);if(A==null){const T=u[S.substring(S.lastIndexOf("/")+1)].params;T.transparency===1&&(T.transparency=0);const I=x&&x.alphaChannelUsage,V=T.transparency>0||I==="transparency"||I==="maskAndTransparency",W=x?$i(x.alphaChannelUsage):void 0,q={ambient:vr(T.diffuse),diffuse:vr(T.diffuse),opacity:1-(T.transparency||0),transparent:V,textureAlphaMode:W,textureAlphaCutoff:.33,textureId:R,initTextureTransparent:!0,doubleSided:!0,cullFace:Pe.None,colorMixMode:T.externalColorMixMode||"tint",textureAlphaPremultiplied:(x==null?void 0:x.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParamsMixin&&Object.assign(q,e.materialParamsMixin),A=new qt(q),a.set(S,$,A)}i.push(A);const N=new Lo(A,w,L);v+=((y=L.find(T=>T[0]===m.POSITION))==null?void 0:y[1].length)??0,r.push(N)}return{engineResources:[{name:c,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:Xl(r)}}function Xl(t){const e=wo();return t.forEach(r=>{const o=r.boundingInfo;o!=null&&(zt(e,o.bbMin),zt(e,o.bbMax))}),e}async function Yl(t,e){const r=new Array;for(const a in t){const n=t[a],l=n.images[0].data;if(!l){Ae.warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+l,d="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:ce.REPEAT,t:ce.REPEAT},preMultiplyAlpha:$i(u)!==Y.Opaque},v=e!=null&&e.disableTextures?Promise.resolve(null):Ro(c,e);r.push(v.then(p=>({refId:d,image:p,parameters:f,alphaChannelUsage:u})))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}function $i(t){switch(t){case"mask":return Y.Mask;case"maskAndTransparency":return Y.MaskBlend;case"none":return Y.Opaque;default:return Y.Blend}}function Kl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Ql=new Oo(1,2,"wosr");async function Zl(t,e){var f;const r=Pi(Ni(t));if(r.fileType==="wosr"){const v=await(e.cache?e.cache.loadWOSR(r.url,e):Hl(r.url,e)),{engineResources:p,referenceBoundingBox:y}=ql(v,e);return{lods:p,referenceBoundingBox:y,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):Ca(new Ea(e.streamDataRequester),r.url,e,e.usePBR)),i=(f=o.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,a=o.meta.isEsriSymbolResource&&i!=null&&o.meta.uri.includes("/RealisticTrees/");a&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,rc(o,i));const n=!!e.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[...Ms]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...Jo]},c={...e.materialParamsMixin,treeRendering:a},{engineResources:d,referenceBoundingBox:u}=Ii(o,l,c,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:u,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Pi(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Ii(t,e,r,o){const i=t.model,a=new Array,n=new Map,l=new Map,c=i.lods.length,d=wo();return i.lods.forEach((u,f)=>{const v=o.skipHighLods===!0&&(c>1&&f===0||c>3&&f===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&f!==o.singleLodIndex;if(v&&f!==0)return;const p=new hn(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(y=>{const E=v?new qt({}):Jl(i,y,p,e,r,n,l),{geometry:D,vertexCount:F}=ec(y,E??new qt({})),B=D.boundingInfo;B!=null&&f===0&&(zt(d,B.bbMin),zt(d,B.bbMax)),E!=null&&(p.stageResources.geometries.push(D),p.numberOfVertices+=F)}),v||a.push(p)}),{engineResources:a,referenceBoundingBox:d}}function Jl(t,e,r,o,i,a,n){const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),c=t.materials.get(e.material),d=e.attributes.texCoord0!=null,u=e.attributes.normal!=null;if(c==null)return null;const f=tc(c.alphaMode);if(!a.has(l)){if(d){const $=(x,C=!1)=>{if(x!=null&&!n.has(x)){const R=t.textures.get(x);if(R!=null){const S=R.data;n.set(x,new Bo(sr(S)?S.data:S,{...R.parameters,preMultiplyAlpha:!sr(S)&&C,encoding:sr(S)&&S.encoding!=null?S.encoding:void 0}))}}};$(c.textureColor,f!==Y.Opaque),$(c.textureNormal),$(c.textureOcclusion),$(c.textureEmissive),$(c.textureMetallicRoughness)}const p=c.color[0]**(1/ke),y=c.color[1]**(1/ke),E=c.color[2]**(1/ke),D=c.emissiveFactor[0]**(1/ke),F=c.emissiveFactor[1]**(1/ke),B=c.emissiveFactor[2]**(1/ke),w=c.textureColor!=null&&d?n.get(c.textureColor):null,L=ws({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion});a.set(l,new qt({...o,transparent:f===Y.Blend,customDepthTest:At.Lequal,textureAlphaMode:f,textureAlphaCutoff:c.alphaCutoff,diffuse:[p,y,E],ambient:[p,y,E],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?Pe.None:Pe.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?z.Attribute:z.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:w!=null?w.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:c.textureNormal!=null&&d?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:w!=null&&!!w.parameters.preMultiplyAlpha,occlusionTextureId:c.textureOcclusion!=null&&d?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:c.textureEmissive!=null&&d?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:c.textureMetallicRoughness!=null&&d?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[D,F,B],mrrFactors:L?[...Rs]:[c.metallicFactor,c.roughnessFactor,o.mrrFactors[2]],isSchematic:L,colorTextureTransformMatrix:nt(c.colorTextureTransform),normalTextureTransformMatrix:nt(c.normalTextureTransform),occlusionTextureTransformMatrix:nt(c.occlusionTextureTransform),emissiveTextureTransformMatrix:nt(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:nt(c.metallicRoughnessTextureTransform),...i}))}const v=a.get(l);if(r.stageResources.materials.push(v),d){const p=y=>{y!=null&&r.stageResources.textures.push(n.get(y))};p(c.textureColor),p(c.textureNormal),p(c.textureOcclusion),p(c.textureEmissive),p(c.textureMetallicRoughness)}return v}function ec(t,e){const r=t.attributes.position.count,o=Oa(t.indices||r,t.primitiveType),i=Ot(3*r),{typedBuffer:a,typedBufferStride:n}=t.attributes.position;Aa(i,a,t.transform,3,n);const l=[[m.POSITION,new je(i,3,!0)]],c=[[m.POSITION,o]];if(t.attributes.normal!=null){const d=Ot(3*r),{typedBuffer:u,typedBufferStride:f}=t.attributes.normal;pr($t,t.transform),ya(d,u,$t,3,f),l.push([m.NORMAL,new je(d,3,!0)]),c.push([m.NORMAL,o])}if(t.attributes.tangent!=null){const d=Ot(4*r),{typedBuffer:u,typedBufferStride:f}=t.attributes.tangent;pr($t,t.transform),wa(d,u,$t,4,f),l.push([m.TANGENT,new je(d,4,!0)]),c.push([m.TANGENT,o])}if(t.attributes.texCoord0!=null){const d=Ot(2*r),{typedBuffer:u,typedBufferStride:f}=t.attributes.texCoord0;Ra(d,u,2,f),l.push([m.UV0,new je(d,2,!0)]),c.push([m.UV0,o])}if(t.attributes.color!=null){const d=new Uint8Array(4*r);t.attributes.color.elementCount===4?t.attributes.color instanceof gr?Qr(d,t.attributes.color,255):t.attributes.color instanceof Zt?Ma(d,t.attributes.color):t.attributes.color instanceof _a&&Qr(d,t.attributes.color,1/256):(d.fill(255),t.attributes.color instanceof Ut?Kr(d,t.attributes.color,255,4):t.attributes.color instanceof ba?La(d,t.attributes.color.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Sa&&Kr(d,t.attributes.color,1/256,4)),l.push([m.COLOR,new je(d,4,!0)]),c.push([m.COLOR,o])}return{geometry:new Lo(e,l,c),vertexCount:r}}const $t=Kt();function tc(t){switch(t){case"BLEND":return Y.Blend;case"MASK":return Y.Mask;case"OPAQUE":case null:case void 0:return Y.Opaque}}function rc(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const i of o.parts){const a=i.attributes.normal;if(a==null)return;const n=i.attributes.position,l=n.count,c=P(),d=P(),u=P(),f=new Uint8Array(4*l),v=new Float64Array(3*l),p=fa(Qt(),i.transform);let y=0,E=0;for(let D=0;D<l;D++){n.getVec(D,d),a.getVec(D,c),Le(d,d,i.transform),Ke(u,d,e.center),Yr(u,u,e.radius);const F=u[2],B=le(u),w=Math.min(.45+.55*B*B,1);Yr(u,u,e.radius),p!==null&&Le(u,u,p),Er(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&pa(u,u,c,F>-1?.2:Math.min(-4*F-3.8,1)),v[y]=u[0],v[y+1]=u[1],v[y+2]=u[2],y+=3,f[E]=255*w,f[E+1]=255*w,f[E+2]=255*w,f[E+3]=255,E+=4}i.attributes.normal=new Ut(v),i.attributes.color=new Zt(f)}}}const yd=Object.freeze(Object.defineProperty({__proto__:null,fetch:Zl,gltfToEngineResources:Ii,parseUrl:Pi},Symbol.toStringTag,{value:"Module"}));export{Rl as H,Pl as I,hl as d,yi as m,yd as o,ll as u};
