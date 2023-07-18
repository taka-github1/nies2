import{k as r,l as o,b4 as g,m,i as l,c as d,g as u,d as c}from"./index-6a6230c9.js";import{a as y}from"./BitmapContainer-d6399191.js";import{f,d as x}from"./LayerView-cd220b33.js";import{r as w}from"./GraphicsView2D-07d0f1e3.js";import{n as _}from"./HighlightGraphicContainer-08d9630e.js";import{v}from"./ExportStrategy-6905f0df.js";import{y as H}from"./ExportImageParameters-cdd15411.js";import{a as I}from"./RefreshableLayerView-5ac2ebc5.js";import{G as V,r as b}from"./drapedUtils-7438e0f5.js";import"./WGLContainer-3675b209.js";import"./definitions-706e5a41.js";import"./VertexArrayObject-91d61933.js";import"./Texture-37d17670.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-ebca2423.js";import"./enums-f1a6a48a.js";import"./number-e491b09e.js";import"./ProgramTemplate-a52cf5ca.js";import"./GeometryUtils-cbd74bc2.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./Container-9418a0ab.js";import"./EffectView-39a467a4.js";import"./earcut-a5bef5a4.js";import"./featureConversionUtils-c181d337.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./cimAnalyzer-6cdd137c.js";import"./fontUtils-9bdd13b2.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b8e39672.js";import"./floatRGBA-6b040bc0.js";import"./normalizeUtilsSync-175c90bd.js";import"./projectionSupport-69413270.js";import"./json-48e3ea08.js";import"./AttributeStoreView-8e72328e.js";import"./TiledDisplayObject-76e608d4.js";import"./visualVariablesUtils-bee607f7.js";import"./ExpandedCIM-33d4a450.js";import"./util-0101427e.js";import"./Matcher-e3085630.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-d3c4c506.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-6cfdefea.js";import"./ComputedAttributeStorage-0e81f987.js";import"./arcadeTimeUtils-7a0c20b0.js";import"./executionError-c92d3b85.js";import"./BaseGraphicContainer-b24d98f5.js";import"./FeatureContainer-4c67d183.js";import"./TileContainer-a9c0a940.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-e19305ba.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-4fc08896.js";import"./scaleUtils-bcb55a14.js";import"./popupUtils-68f50787.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let a=class extends P(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,p=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(s,h)=>b(s,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,h)=>{this._highlightView.graphicUpdateHandler({graphic:s,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:p,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,p){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}fetchImageBitmap(t,e,i,p){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...p})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],a.prototype,"strategy",void 0),r([o()],a.prototype,"updating",void 0),a=r([m("esri.views.2d.layers.MapImageLayerView2D")],a);const Mt=a;export{Mt as default};