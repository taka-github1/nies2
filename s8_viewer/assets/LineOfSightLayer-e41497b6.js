import{cZ as I,bz as _,ja as y,k as n,l as s,aM as x,f$ as $,m as h,a0 as T,ih as N,V as v,B as P,d as w,fX as O,A as L,jb as C,eL as H,jc as M,jd as Z,d1 as k,d4 as B,aD as D}from"./index-6a6230c9.js";import{c as V}from"./Analysis-d832e6e4.js";import{h as f}from"./persistable-c070ae26.js";import"./resourceExtension-dd66d232.js";function R(t,e){return m(t)===m(e)}function m(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${e}-${r}`}const E={json:{write:{writer:X,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:G}}}};function X(t,e){var r;t!=null&&((r=t.layer)==null?void 0:r.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function G(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends I(_(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};n([s({type:x,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),n([s({type:$}),f()],a.prototype,"elevationInfo",void 0),n([s(E)],a.prototype,"feature",void 0),a=n([h("esri.analysis.LineOfSightAnalysisObserver")],a);const z=a;let u=class extends I(N){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};n([s({type:x}),f()],u.prototype,"position",void 0),n([s({type:$}),f()],u.prototype,"elevationInfo",void 0),n([s(E)],u.prototype,"feature",void 0),u=n([h("esri.analysis.LineOfSightAnalysisTarget")],u);const F=u;function J(t){return t?U:W}function K(t,e){return e!=null&&e.mode?e.mode:J(t).mode}function Q(t,e){return K(t!=null&&t.hasZ,e)}const U={mode:"absolute-height",offset:0},W={mode:"on-the-ground",offset:null},g=v.ofType(F);let l=class extends V{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(w(()=>this._computeExtent(),e=>{e!=null&&e.pending!=null||this._set("extent",e!=null?e.extent:null)},O))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",L(e,this.targets,g))}get spatialReference(){return this.observer!=null&&this.observer.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(this.observer==null||this.observer.position==null||e==null)return null;const r=p=>Q(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,b=C(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const d=H(p.position,e);if(d.pending!=null)return{pending:d.pending,extent:null};if(d.geometry!=null){const{x:S,y:A,z:q}=d.geometry;M(b,[S,A,q])}}const c=Z(b,e);return r(this.observer)&&this.targets.every(r)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};n([s({type:["line-of-sight"]})],l.prototype,"type",void 0),n([s({type:z,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),n([s({cast:P,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),n([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),n([s({readOnly:!0})],l.prototype,"spatialReference",null),n([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=n([h("esri.analysis.LineOfSightAnalysis")],l);const j=l,Y=v.ofType(F);let i=class extends k(B(D)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new j,this.opacity=1}initialize(){this.addHandles(w(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},O))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var e;L(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new j)}};n([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),n([s({type:["LineOfSightLayer"]})],i.prototype,"operationalLayerType",void 0),n([s({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],i.prototype,"observer",null),n([s({type:Y,json:{read:!0,write:{ignoreOrigin:!0}}})],i.prototype,"targets",null),n([s({nonNullable:!0,json:{read:!1,write:!1}})],i.prototype,"analysis",void 0),n([s({readOnly:!0})],i.prototype,"fullExtent",null),n([s({readOnly:!0})],i.prototype,"spatialReference",null),n([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),n([s({type:["show","hide"]})],i.prototype,"listMode",void 0),i=n([h("esri.layers.LineOfSightLayer")],i);const lt=i;export{lt as default};