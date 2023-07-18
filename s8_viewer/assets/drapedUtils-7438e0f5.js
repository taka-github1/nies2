import{cn as W,b5 as K,k as u,l as c,je as X,dW as Y,aQ as P,b3 as ee,dx as te,m as M,b9 as k,bb as re,w as A,b7 as se,b8 as ie,g8 as ne,aR as ae,bv as oe,bd as le,bc as ue,a8 as pe,a0 as ye,bD as ce,C as fe,s as L,e as N,V as he,R as U,dd as J,ay as de,gy as me,aT as V,E as ge,jf as be,f6 as we}from"./index-6a6230c9.js";import{i as ve,r as xe}from"./scaleUtils-bcb55a14.js";import{n as T}from"./floorFilterUtils-080a7cd2.js";import{n as $e}from"./sublayerUtils-4fc08896.js";import{n as Se,p as Re}from"./popupUtils-68f50787.js";function I(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function Fe(e){let t=0,s=0;for(let i=0;i<e.length;i++){const r=e[i].size;typeof r=="number"&&(t+=r,s++)}return t/s}function H(e,t){return typeof e=="number"?e:e&&e.stops&&e.stops.length?Fe(e.stops):t}function Ee(e,t){if(!t)return e;const s=t.filter(a=>a.type==="size").map(a=>{const{maxSize:o,minSize:y}=a;return(H(o,e)+H(y,e))/2});let i=0;const r=s.length;if(r===0)return e;for(let a=0;a<r;a++)i+=s[a];const n=Math.floor(i/r);return Math.max(n,e)}function Q(e){var r;const t=e&&e.renderer,s=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!t)return s;const i="visualVariables"in t?Ee(s,t.visualVariables):s;if(t.type==="simple")return I(i,t.symbol);if(t.type==="unique-value"){let n=i;return(r=t.uniqueValueInfos)==null||r.forEach(a=>{n=I(n,a.symbol)}),n}if(t.type==="class-breaks"){let n=i;return t.classBreakInfos.forEach(a=>{n=I(n,a.symbol)}),n}return t.type==="dot-density"||t.type,i}const z=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function Oe(e,t){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:a,layerOption:o,mapExtent:y,maxAllowableOffset:l,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:R,spatialReference:x,timeExtent:$,tolerance:m,width:F}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:v}=je(e),j=t&&t.geometry!=null?t.geometry:null,g={geometryPrecision:n,maxAllowableOffset:l,returnFieldName:p,returnGeometry:f,returnUnformattedValues:h,returnZ:R,tolerance:m},E=j&&j.toJSON()||r;if(g.imageDisplay=`${F},${a},${s}`,i&&(g.gdbVersion=i),E&&(delete E.spatialReference,g.geometry=JSON.stringify(E),g.geometryType=W(E)),x?g.sr=x.wkid||JSON.stringify(x):E&&E.spatialReference?g.sr=z(E):y&&y.spatialReference&&(g.sr=z(y)),g.time=$?[$.start,$.end].join(","):null,y){const{xmin:B,ymin:D,xmax:Z,ymax:C}=y;g.mapExtent=`${B},${D},${Z},${C}`}return w&&(g.layerDefs=w),b&&!w&&(g.dynamicLayers=b),g.layers=o==="popup"?"visible":o,v&&!b&&(g.layers+=`:${v.join(",")}`),g}function je(e){var x,$;const{mapExtent:t,floors:s,width:i,sublayers:r,layerIds:n,layerOption:a,gdbVersion:o}=e,y=($=(x=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,l=a==="popup",p={},f=ve({extent:t,width:i,spatialReference:t==null?void 0:t.spatialReference}),h=[],R=m=>{const F=f===0,b=m.minScale===0||f<=m.minScale,w=m.maxScale===0||f>=m.maxScale;if(m.visible&&(F||b&&w))if(m.sublayers)m.sublayers.forEach(R);else{if((n==null?void 0:n.includes(m.id))===!1||l&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(R),r&&!h.length)p.layerIds=[];else{const m=$e(h,y,o),F=h.map(b=>{const w=T(s,b);return b.toExportImageJSON(w)});if(m)p.dynamicLayers=JSON.stringify(F);else{if(r){let w=h.map(({id:v})=>v);n&&(w=w.filter(v=>n.includes(v))),p.layerIds=w}else n!=null&&n.length&&(p.layerIds=n);const b=Pe(s,h);if(b!=null&&b.length){const w={};for(const v of b)v.definitionExpression&&(w[v.id]=v.definitionExpression);Object.keys(w).length&&(p.layerDefs=JSON.stringify(w))}}}return p}function Pe(e,t){const s=!!(e!=null&&e.length),i=t.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=T(e,r),a=K(n,r.definitionExpression);return{id:r.id,definitionExpression:a??void 0}}):null}var G;let d=G=class extends k{static from(e){return re(G,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};u([c({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),u([c()],d.prototype,"floors",void 0),u([c({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),u([c({types:X,json:{read:Y,write:!0}})],d.prototype,"geometry",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"height",void 0),u([c({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),u([c({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),u([c({type:P,json:{write:!0}})],d.prototype,"mapExtent",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),u([c({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),u([c({type:ee,json:{write:!0}})],d.prototype,"spatialReference",void 0),u([c()],d.prototype,"sublayers",void 0),u([c({type:te,json:{write:!0}})],d.prototype,"timeExtent",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),u([c({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=G=u([M("esri.rest.support.IdentifyParameters")],d);const q=d;let S=class extends k{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return A.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:s,geometry:i}=e;s&&(t.attributes={...s}),i!=null&&(t.geometry=i.toJSON(),t.geometryType=ne.toJSON(i.type))}};u([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),u([c({type:A})],S.prototype,"feature",void 0),u([se("feature",["attributes","geometry"])],S.prototype,"readFeature",null),u([ie("feature")],S.prototype,"writeFeature",null),u([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),u([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=u([M("esri.rest.support.IdentifyResult")],S);const Ne=S;async function Ie(e,t,s){const i=(t=Ve(t)).geometry?[t.geometry]:[],r=ae(e);return r.path+="/identify",oe(i).then(n=>{const a=Oe(t,{geometry:n&&n[0]}),o=le({...r.query,f:"json",...a}),y=ue(o,s);return pe(r.path,y).then(_e).then(l=>Ge(l,t.sublayers))})}function _e(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=!!t.exceededTransferLimit,t.results=t.results.map(s=>Ne.fromJSON(s)),t}function Ve(e){return e=q.from(e)}function Ge(e,t){if(!(t!=null&&t.length))return e;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}t.forEach(i);for(const r of e.results)r.feature.sourceLayer=s.get(r.layerId);return e}let _=null;function ke(e,t){return t.type==="tile"||t.type==="map-image"}let O=class extends ye{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ce(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){const e=t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([fe(()=>this.highlightGraphics,"change",t=>e(t.added),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var a,o;const{layerView:{layer:s,view:{scale:i}}}=this;if(!e)throw new L("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Me(s.sublayers,i,t);if(!r.length)return[];const n=await Te(s,r);if(!((((o=(a=s.capabilities)==null?void 0:a.operations)==null?void 0:o.supportsIdentify)??!0)&&s.version>=10.5)&&!n)throw new L("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(e,r,t):this._fetchPopupFeaturesUsingIdentify(e,r,t)}clearHighlights(){var e;(e=this.highlightGraphics)==null||e.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return N();let s=null;if(e instanceof A?s=[e]:he.isCollection(e)&&e.length>0?s=e.toArray():Array.isArray(e)&&e.length>0&&(s=e),s=s==null?void 0:s.filter(U),!s||!s.length)return N();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return t.addMany(s),N(()=>t.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of e){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async a=>{var l;a||(a=new J);let o=null;const y="visualVariables"in n?(l=n.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;y&&(_||(_=(await de(()=>import("./index-6a6230c9.js").then(p=>p.nP),["./index-6a6230c9.js","./index-ed438937.css"],import.meta.url)).getSize),o=_(y,r,{view:t.type,scale:t.scale,shape:a.type==="simple-marker"?a.style:null})),o||(o="width"in a&&"height"in a&&a.width!=null&&a.height!=null?Math.max(a.width,a.height):"size"in a?a.size:16),s.includes(r)&&(r.symbol=new J({style:"square",size:o,xoffset:"xoffset"in a?a.xoffset:0,yoffset:"yoffset"in a?a.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=e,!r||!(i!=null&&i.length)||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),a=new Map;for(const l of i)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const p=l.sourceLayer;me(a,p,()=>new Map).set(l.getObjectId(),l)}const o=Array.from(a,([l,p])=>{const f=l.createQuery();return f.objectIds=[...p.keys()],f.outFields=[l.objectIdField],f.returnGeometry=!0,f.maxAllowableOffset=n,f.outSpatialReference=s.spatialReference,l.queryFeatures(f)}),y=await Promise.all(o);if(!this.destroyed)for(const{features:l}of y)for(const p of l){const f=p.sourceLayer,h=a.get(f).get(p.getObjectId());h&&i.includes(h)&&(h.geometry=p.geometry,r(h,"geometry"),this._featuresResolutions.set(h,n))}}_getTargetResolution(e){const t=e*V(this.layerView.view.spatialReference),s=t/16;return s<=10?0:e/t*s}async _fetchPopupFeaturesUsingIdentify(e,t,s){const i=await this._createIdentifyParameters(e,t,s);if(i==null)return[];const{results:r}=await Ie(this.layerView.layer.parsedUrl,i);return r.map(n=>n.feature)}async _createIdentifyParameters(e,t,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:a,scale:o}}=this.layerView,y=s!=null?s.event:null;if(!t.length)return null;await Promise.all(t.map(({sublayer:x})=>x.load().catch(()=>{})));const l=Math.min(ge("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?Q({renderer:$.renderer,event:y}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(e,l),f=xe(o,a),h=Math.round(p.width/f),R=new P({xmin:p.center.x-f*h,ymin:p.center.y-f*h,xmax:p.center.x+f*h,ymax:p.center.y+f*h,spatialReference:p.spatialReference});return new q({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:e,height:h,layerOption:"popup",mapExtent:R,returnGeometry:!0,spatialReference:a,sublayers:r.sublayers,timeExtent:n,tolerance:l,width:h})}async _fetchPopupFeaturesUsingQueries(e,t,s){const{layerView:{floors:i,timeExtent:r}}=this,n=s!=null?s.event:null,a=t.map(async({sublayer:o,popupTemplate:y})=>{var v;if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const l=o.createQuery(),p=Q({renderer:o.renderer,event:n}),f=this.createFetchPopupFeaturesQueryGeometry(e,p),h=new Set,[R]=await Promise.all([Se(o,y),(v=o.renderer)==null?void 0:v.collectRequiredFields(h,o.fieldsIndex)]);be(h,o.fieldsIndex,R);const x=Array.from(h).sort();if(l.geometry=f,l.outFields=x,l.timeExtent=r,i){const j=i.clone(),g=T(j,o);g!=null&&(l.where=l.where?`(${l.where}) AND (${g})`:g)}const $=this._getTargetResolution(f.width/p),m=await Ae(y),F=o.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(y);F||(l.maxAllowableOffset=$);let{features:b}=await o.queryFeatures(l);const w=F?0:$;b=await Le(o,b);for(const j of b)this._featuresResolutions.set(j,w);return b});return(await Promise.allSettled(a)).reverse().reduce((o,y)=>y.status==="fulfilled"?[...o,...y.value]:o,[]).filter(U)}};function Me(e,t,s){const i=[],r=n=>{const a=n.minScale===0||t<=n.minScale,o=n.maxScale===0||t>=n.maxScale;if(n.visible&&a&&o){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const y=Re(n,{...s,defaultPopupTemplateEnabled:!1});y!=null&&i.unshift({sublayer:n,popupTemplate:y})}}};return((e==null?void 0:e.toArray())??[]).reverse().map(r),i}function Ae(e){var t;return(t=e.expressionInfos)!=null&&t.length||Array.isArray(e.content)&&e.content.some(s=>s.type==="expression")?we():Promise.resolve()}async function Te(e,t){var s,i;if((i=(s=e.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(t.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(e,t){const s=e.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(t=s.valueExpression?await Promise.all(t.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):t.filter(i=>s.getSymbol(i)!=null)),t}u([c({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),u([c({constructOnly:!0})],O.prototype,"layerView",void 0),u([c({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),u([c({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),u([c({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=u([M("esri.views.layers.support.MapService")],O);function qe(e,t,s,i=new P){let r=0;if(s.type==="2d")r=t*(s.resolution??0);else if(s.type==="3d"){const p=s.overlayPixelSizeInMapUnits(e),f=s.basemapSpatialReference;r=f==null||f.equals(s.spatialReference)?t*p:V(f)/V(s.spatialReference)}const n=e.x-r,a=e.y-r,o=e.x+r,y=e.y+r,{spatialReference:l}=s;return i.xmin=Math.min(n,o),i.ymin=Math.min(a,y),i.xmax=Math.max(n,o),i.ymax=Math.max(a,y),i.spatialReference=l,i}new P;export{O as G,ke as S,qe as r};