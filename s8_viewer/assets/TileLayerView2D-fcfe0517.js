import{i as w,h as y,y as I,b as V,d as v,e as H,S as T,c as n,f as g,g as q,k as o,l as m,m as U}from"./index-6a6230c9.js";import"./EffectView-39a467a4.js";import"./Container-9418a0ab.js";import"./BufferPool-c9c54224.js";import"./color-ebca2423.js";import"./WGLContainer-3675b209.js";import"./enums-b14466b3.js";import"./Texture-37d17670.js";import"./ProgramTemplate-a52cf5ca.js";import"./definitions-706e5a41.js";import"./GeometryUtils-cbd74bc2.js";import"./VertexArrayObject-91d61933.js";import"./number-e491b09e.js";import"./StyleDefinition-29c49b98.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-cb6f8557.js";import"./OrderIndependentTransparency-e18a4b09.js";import"./floatRGBA-6b040bc0.js";import"./testSVGPremultipliedAlpha-5bd5ed0b.js";import{r as S}from"./GraphicsView2D-07d0f1e3.js";import"./AttributeStoreView-8e72328e.js";import"./earcut-a5bef5a4.js";import"./featureConversionUtils-c181d337.js";import"./vec3f32-ad1dc57f.js";import{t as b,o as f,n as d}from"./imageUtils-a0e04ccc.js";import{f as Q,d as C}from"./LayerView-cd220b33.js";import{n as $}from"./HighlightGraphicContainer-08d9630e.js";import{a as k}from"./RefreshableLayerView-5ac2ebc5.js";import{S as F,G,r as R}from"./drapedUtils-7438e0f5.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./OptimizedGeometry-196224d4.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-6cdd137c.js";import"./fontUtils-9bdd13b2.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b8e39672.js";import"./Rasterizer-129b44e6.js";import"./rasterizingUtils-9217d732.js";import"./pbf-f1846a04.js";import"./imageutils-a9d675f5.js";import"./Matcher-e3085630.js";import"./visualVariablesUtils-bee607f7.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-d3c4c506.js";import"./ExpandedCIM-33d4a450.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-6cfdefea.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-0e81f987.js";import"./OptimizedFeature-4701473b.js";import"./arcadeTimeUtils-7a0c20b0.js";import"./executionError-c92d3b85.js";import"./projectionSupport-69413270.js";import"./json-48e3ea08.js";import"./basicInterfaces-11f56cb3.js";import"./normalizeUtilsSync-175c90bd.js";import"./TiledDisplayObject-76e608d4.js";import"./util-0101427e.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BitmapTileContainer-6dfa6d50.js";import"./Bitmap-e19305ba.js";import"./TileContainer-a9c0a940.js";import"./BaseGraphicContainer-b24d98f5.js";import"./FeatureContainer-4c67d183.js";import"./scaleUtils-bcb55a14.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-4fc08896.js";import"./popupUtils-68f50787.js";const L=[0,0];let s=class extends k(b(Q(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new S({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new $(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new G({createFetchPopupFeaturesQueryGeometry:(r,h)=>R(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):H()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return T((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(L,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(p){if(!n(p)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new g(u),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw p}const a=new g(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,a,{signal:r}),a.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,r)}catch(p){if(n(p))throw p;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,a,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",()=>this.requestUpdate())}catch(e){n(e)||q.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([m()],s.prototype,"_fetchQueue",void 0),o([m()],s.prototype,"resampling",null),o([m()],s.prototype,"tilemapCache",null),s=o([U("esri.views.2d.layers.TileLayerView2D")],s);const ie=s;export{ie as default};
