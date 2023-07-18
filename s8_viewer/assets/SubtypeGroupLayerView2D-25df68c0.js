import{k as m,m as d,d as u,P as y,E as h,F as c}from"./index-6a6230c9.js";import b from"./FeatureLayerView2D-877ff60c.js";import"./EffectView-39a467a4.js";import"./definitions-706e5a41.js";import"./LayerView-cd220b33.js";import"./Container-9418a0ab.js";import"./enums-b14466b3.js";import"./Texture-37d17670.js";import"./AttributeStoreView-8e72328e.js";import"./TiledDisplayObject-76e608d4.js";import"./color-ebca2423.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-3675b209.js";import"./VertexArrayObject-91d61933.js";import"./ProgramTemplate-a52cf5ca.js";import"./GeometryUtils-cbd74bc2.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-a5bef5a4.js";import"./featureConversionUtils-c181d337.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-bee607f7.js";import"./cimAnalyzer-6cdd137c.js";import"./fontUtils-9bdd13b2.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b8e39672.js";import"./floatRGBA-6b040bc0.js";import"./ExpandedCIM-33d4a450.js";import"./util-0101427e.js";import"./BitmapTileContainer-6dfa6d50.js";import"./Bitmap-e19305ba.js";import"./TileContainer-a9c0a940.js";import"./CircularArray-ef508845.js";import"./BufferPool-c9c54224.js";import"./FeatureContainer-4c67d183.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-68f50787.js";import"./RefreshableLayerView-5ac2ebc5.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var a;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((a=this.tileRenderer)==null?void 0:a.updating),p=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${p}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),p}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const le=n;export{le as default};