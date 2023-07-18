import{dN as z,au as W,ei as V,g as Y,hZ as G,k4 as mt,eo as H,em as I,ep as tt,k as f,l as y,m as et,a0 as at,c as pt,aM as ft,aQ as _t,k5 as j,d as U,w as yt,k6 as Z,k7 as J,el as gt,en as E,ex as vt,J as xt}from"./index-6a6230c9.js";import{h as A,f as C}from"./VertexArrayObject-91d61933.js";import{C as p,R as v,E as P,F as D,G as wt,D as St,I as st,O as L}from"./enums-b14466b3.js";import{e as bt,T as At}from"./Texture-37d17670.js";import{t as x}from"./VertexElementDescriptor-2925c6af.js";import{d as it,i as Dt}from"./WGLContainer-3675b209.js";import{T as Rt,e as Mt}from"./color-ebca2423.js";import{i as rt}from"./Container-9418a0ab.js";function zt(r){const t=ot(q(r)),e=t,a=!0,s=Math.max(t/2,5),i=Math.round(z(r.maxPathLength)/s)+1,n=10,{density:o}=r;return{smoothing:z(r.smoothing),interpolate:!0,velocityScale:r.flowRepresentation==="flow-from"?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:s,maxTurnAngle:1,collisions:a,lineCollisionWidth:e,lineSpacing:n,density:o}}function ot(r){return r.kind==="constant"?r.value[0]:r.values[r.values.length-1]}function Q(r){const t=r.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Tt(r){return{kind:"constant",value:[.1,.1,.1,1]}}function q(r){if(!r.hasVisualVariables("size"))return{kind:"constant",value:[z(r.trailWidth)]};const t=r.getVisualVariablesForType("size")[0],e=[],a=[];let s;if(t.stops){for(const i of t.stops)e.push(i.value),a.push(z(i.size));s=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),a.push(z(t.minSize),z(t.maxSize)),s=2;return{kind:"ramp",stops:e,values:a,count:s}}function $t(r){if(!r.hasVisualVariables("color"))return{kind:"constant",value:Q(r.color)};const t=r.getVisualVariablesForType("color")[0],e=[],a=[];for(const s of t.stops)e.push(s.value),Array.prototype.push.apply(a,Q(s.color));return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function Ot(r){if(!r.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=r.getVisualVariablesForType("opacity")[0],e=[],a=[];for(const s of t.stops)e.push(s.value),a.push(s.opacity);return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function N(r,t,e,a){switch(t){case"int":r.setUniform1iv(e,a);break;case"float":r.setUniform1fv(e,a);break;case"vec2":r.setUniform2fv(e,a);break;case"vec3":r.setUniform3fv(e,a);break;case"vec4":r.setUniform4fv(e,a)}}function b(r,t,e,a){a.kind==="constant"?N(r,e,`u_${t}`,a.value):(N(r,"float",`u_${t}_stops`,a.stops),N(r,e,`u_${t}_values`,a.values),r.setUniform1i(`u_${t}_count`,a.count))}function Pt(r,t){let e=!0;return e=e&&r.collisions===t.collisions,e=e&&r.density===t.density,e=e&&r.interpolate===t.interpolate,e=e&&r.lineCollisionWidth===t.lineCollisionWidth,e=e&&r.lineSpacing===t.lineSpacing,e=e&&r.maxTurnAngle===t.maxTurnAngle,e=e&&r.minSpeedThreshold===t.minSpeedThreshold,e=e&&r.segmentLength===t.segmentLength,e=e&&r.smoothing===t.smoothing,e=e&&r.velocityScale===t.velocityScale,e=e&&r.verticesPerLine===t.verticesPerLine,e}function nt(r,t){return r===t||r!=null&&t!=null&&r.equals(t)}function lt(r,t){if(!Pt(r.simulationSettings,t.simulationSettings)||!nt(r.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&r.loadImagery===t.loadImagery,e=e&&r.createFlowMesh===t.createFlowMesh,e=e&&r.color.kind===t.color.kind,e=e&&r.opacity.kind===t.opacity.kind,e=e&&r.size.kind===t.size.kind,e}let Ut=class ct{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof ct)||!nt(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e);return new It(i,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(P.TRIANGLE_STRIP,0,4)}};const k=new Map;k.set("a_position",0),k.set("a_texcoord",1);const Et={geometry:[new x("a_position",2,p.UNSIGNED_SHORT,0,8),new x("a_texcoord",2,p.UNSIGNED_SHORT,4,8)]},Ft={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:k};class It{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:s}=this._flowData,i=A.createVertex(e,D.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),n=new C(e,k,Et,{geometry:i}),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity");const c=t.painter.materialManager.getProgram(Ft,o);let h=1e6,m=-1e6;for(let d=0;d<s;d++)for(let u=0;u<a;u++)if(this._flowData.mask[d*a+u]!==0){const w=this._flowData.data[2*(d*a+u)],S=this._flowData.data[2*(d*a+u)+1],R=Math.sqrt(w*w+S*S);h=Math.min(h,R),m=Math.max(m,R)}const l=new Uint8Array(4*a*s);for(let d=0;d<s;d++)for(let u=0;u<a;u++)if(this._flowData.mask[d*a+u]!==0){const w=this._flowData.data[2*(d*a+u)],S=this._flowData.data[2*(d*a+u)+1],R=(Math.sqrt(w*w+S*S)-h)/(m-h);l[4*(d*a+u)]=255*R,l[4*(d*a+u)+1]=0,l[4*(d*a+u)+2]=0,l[4*(d*a+u)+3]=255}else l[4*(d*a+u)]=0,l[4*(d*a+u)+1]=0,l[4*(d*a+u)+2]=0,l[4*(d*a+u)+3]=0;const g=new bt;g.internalFormat=wt.RGBA,g.wrapMode=St.CLAMP_TO_EDGE,g.flipped=!0,g.width=a,g.height=s;const O=new At(e,g,l);this.vertexArray=n,this.program=c,this.texture=O,this.min=h,this.max=m,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}let Vt=class ht{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof ht&&lt(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:n,indexData:o}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,e);return new Lt(n,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),b(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(P.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}};const T=new Map;T.set("a_xyts0",0),T.set("a_xyts1",1),T.set("a_typeIdDurationSeed",2),T.set("a_extrudeInfo",3);const kt={geometry:[new x("a_xyts0",4,p.FLOAT,0,64),new x("a_xyts1",4,p.FLOAT,16,64),new x("a_typeIdDurationSeed",4,p.FLOAT,32,64),new x("a_extrudeInfo",4,p.FLOAT,48,64)]},Ct={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:T};let Lt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=A.createVertex(e,D.STATIC_DRAW,this._vertexData),s=A.createIndex(e,D.STATIC_DRAW,this._indexData),i=new C(e,T,kt,{geometry:a},s),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const o=t.painter.materialManager.getProgram(Ct,n);this.vertexArray=i,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}},Nt=class dt{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof dt)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map(s=>s.load(t,e)));return new Gt(a)}render(t,e,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(t,e,a.resources[s])}};class Gt{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}}class B{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof B&&lt(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;W(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:n,indexData:o}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,e);return new Bt(n,o,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(i,"color","vec4",this._params.color),b(i,"opacity","float",this._params.opacity),b(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(P.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}}const $=new Map;$.set("a_positionAndSide",0),$.set("a_timeInfo",1),$.set("a_extrude",2),$.set("a_speed",3);const qt={geometry:[new x("a_positionAndSide",3,p.FLOAT,0,36),new x("a_timeInfo",3,p.FLOAT,12,36),new x("a_extrude",2,p.FLOAT,24,36),new x("a_speed",1,p.FLOAT,32,36)]},Wt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:$};let Bt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=A.createVertex(e,D.STATIC_DRAW,this._vertexData),s=A.createIndex(e,D.STATIC_DRAW,this._indexData),i=new C(e,$,qt,{geometry:a},s),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const o=t.painter.materialManager.getProgram(Wt,n);this.vertexArray=i,this.program=o,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};const Ht=4,jt=1,Zt=.5,Jt=!0,Qt=!0,Kt=2.3;function Xt(r,t){const{flowSpeed:e,trailLength:a}=r,s=zt(r);let i=null;const n={opacity:Ot(r),size:q(r)};let o=$t(r);if(r.background==="none")n.color=o;else{o.kind==="constant"&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const m={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};i=new Ut(m),n.color=Tt()}const c={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:s,timeExtent:t.timeExtent,trailLength:a,flowSpeed:e,featheringSize:jt,featheringOffset:Zt,introFade:Jt,fadeToZero:Qt,decayRate:Kt,color:n.color,opacity:n.opacity,size:n.size},h=r.trailCap==="butt"||ot(q(r))<=Ht?new B(c):new Vt(c);return i!=null?new Nt([i,h]):h}class Yt extends it{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:V(),displayViewMat3:V()}}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(st.EQUAL,0,255)}draw(t,e){const{requestRender:a,allowDelayedRender:s}=t,{displayData:i}=e;if(i==null||(i.state.name==="loaded"&&i.attach(t),i.state.name!=="attached"))return;const n=i.state.resources;!s||n.ready||a==null?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.dvs,this._visualState.displayViewMat3=t.state.displayViewMat3,i.flowStyle.render(t,this._visualState,n),i.flowStyle.animated&&a!=null&&a()):a()}}class te extends Dt{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[Yt],target:()=>this.children,drawPhase:Rt.MAP});return[...super.prepareRenderPasses(t),e]}}class ee{constructor(t,e,a,s){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=s}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if(this.state.name!=="loaded")return void Y.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class ae extends rt{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){this._displayData!=null&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(e==null)return;const a=e.extent.xmin,s=e.extent.ymax,i=[0,0];t.toScreen(i,[a,s]);const n=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,o=G(t.rotation),{dvs:c}=this.transforms;mt(c,[-1,1,0]),H(c,c,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),I(c,c,[i[0],i[1],0]),tt(c,c,o),H(c,c,[n*t.pixelRatio,n*t.pixelRatio,1])}_createTransforms(){return{dvs:V()}}}const se=1.15;let M=class extends at{constructor(t){super(t),this._flowDisplayObject=new ae,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(t){const{flowStyle:e}=this.flowContainer;if(e==null)return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:n}=t.state,o=re(a,s);o.expand(se);const c=[Math.round((o.xmax-o.xmin)/i),Math.round((o.ymax-o.ymin)/i)],h=new ee(e,o,c,n);if(this._loading!=null){if(this._loading.update(h))return;this._loading.detach(),this._loading=null}this._flowDisplayObject.displayData!=null&&this._flowDisplayObject.displayData.update(h)||(h.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},m=>{pt(m)||(Y.getLogger(this).error("A resource failed to load.",m),this._loading=null)}),this._loading=h)}_clear(){this._flowDisplayObject.clear(),this._loading!=null&&(this._loading.detach(),this._loading=null)}};f([y()],M.prototype,"_loading",void 0),f([y()],M.prototype,"flowContainer",void 0),f([y()],M.prototype,"updating",null),M=f([et("esri.views.2d.engine.flow.FlowStrategy")],M);const ie=M;function re(r,t){const e=new ft({x:(r.xmax+r.xmin)/2,y:(r.ymax+r.ymin)/2,spatialReference:r.spatialReference}),a=r.xmax-r.xmin,s=r.ymax-r.ymin,i=Math.abs(Math.cos(G(t))),n=Math.abs(Math.sin(G(t))),o=i*a+n*s,c=n*a+i*s,h=new _t({xmin:e.x-o/2,ymin:e.y-c/2,xmax:e.x+o/2,ymax:e.y+c/2,spatialReference:r.spatialReference});return h.centerAt(e),h}let _=class extends at{constructor(){super(...arguments),this._loadImagery=(t,e,a,s,i)=>j(this.layer,t,e,a,s,i),this._createFlowMesh=(t,e,a,s)=>this.layer.createFlowMesh({meshType:t,flowData:a,simulationSettings:e},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:t}=this,e=()=>{this._loadImagery=(a,s,i,n,o)=>j(t,a,s,i,n,o),this._updateVisualization()};"multidimensionalDefinition"in t?this.addHandles(U(()=>t.multidimensionalDefinition,e)):this.addHandles([U(()=>t.mosaicRule,e),U(()=>t.rasterFunction,e),U(()=>t.definitionExpression,e)]),this.container=new te,this._strategy=new ie({flowContainer:this.container}),this._updateVisualization()}detach(){var t;this._strategy.destroy(),(t=this.container)==null||t.removeAllChildren(),this.container=null,this.removeHandles()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new yt({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const t=this.layer.renderer;if(t==null||t.type!=="flow")return;const e=Xt(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate()}};f([y()],_.prototype,"_strategy",void 0),f([y()],_.prototype,"attached",void 0),f([y()],_.prototype,"container",void 0),f([y()],_.prototype,"layer",void 0),f([y()],_.prototype,"layerView",void 0),f([y()],_.prototype,"type",void 0),f([y()],_.prototype,"updating",null),f([y()],_.prototype,"timeExtent",void 0),_=f([et("esri.views.2d.engine.flow.FlowView2D")],_);const ve=_,F=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),K=new Float32Array([0,92/255,230/255,1]),oe={beaufort_ft:F,beaufort_m:F,beaufort_km:F,beaufort_mi:F,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:K,single_arrow:K,wind_speed:new Float32Array([0,0,0,1])},X=[0,20];class xe extends it{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(L.KEEP,L.KEEP,L.REPLACE)}draw(t,e){if(e.source==null||e.source.validPixelCount===0)return;const{context:a,timeline:s}=t;if(s.begin(this.name),a.setStencilFunction(st.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),t.renderPass==="scalar"){const i=e.vaoData.scalar;i&&this._drawScalars(t,e,i.vao,i.elementCount)}else{const i=e.vaoData.magdir;i&&this._drawTriangles(t,e,i.vao,i.elementCount)}s.end(this.name)}_drawTriangles(t,e,a,s){const{context:i,painter:n,requestRender:o,allowDelayedRender:c}=t,{symbolizerParameters:h}=e,m=h.dataRange?["dataRange"]:[];h.rotationType==="geographic"&&m.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.magdir,m);if(c&&o!=null&&!l.compiled)return void o();i.useProgram(l);const{coordScale:g,opacity:O,transforms:d}=e;l.setUniform2fv("u_coordScale",g),l.setUniform1f("u_opacity",O),l.setUniformMatrix3fv("u_dvsMat3",d.dvs);const{style:u,dataRange:w,rotation:S,symbolPercentRange:R}=h;l.setUniform4fv("u_colors",oe[u]),l.setUniform2fv("u_dataRange",w||X),l.setUniform1f("u_rotation",S),l.setUniform2fv("u_symbolPercentRange",R);const ut=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",ut),i.bindVAO(a),i.drawElements(P.TRIANGLES,s,p.UNSIGNED_INT,0)}_drawScalars(t,e,a,s){const{context:i,painter:n,requestRender:o,allowDelayedRender:c}=t,{symbolizerParameters:h}=e,m=[];h.style==="wind_speed"?m.push("innerCircle"):h.dataRange&&m.push("dataRange"),h.rotationType==="geographic"&&m.push("rotationGeographic");const l=n.materialManager.getProgram(this._desc.scalar,m);if(c&&o!=null&&!l.compiled)return void o();i.useProgram(l);const{coordScale:g,opacity:O,transforms:d}=e;l.setUniform2fv("u_coordScale",g),l.setUniform1f("u_opacity",O),l.setUniformMatrix3fv("u_dvsMat3",d.dvs);const{dataRange:u,symbolPercentRange:w}=h;l.setUniform2fv("u_dataRange",u||X),l.setUniform2fv("u_symbolPercentRange",w);const S=this._getSymbolSize(t,e);l.setUniform2fv("u_symbolSize",S),i.bindVAO(a),i.drawElements(P.TRIANGLES,s,p.UNSIGNED_INT,0)}_getSymbolSize(t,e){const a=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:s}=e.symbolizerParameters;return[s/(Math.round((e.width-e.offset[0])/s)*s)/a,s/(Math.round((e.height-e.offset[1])/s)*s)/a]}}class we extends rt{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){var t,e;this.vaoData!=null&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){var t,e;this._vaoInvalidated||this.vaoData==null||((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,this.source!=null&&this.vaoData==null){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const a=Z(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a);this.vaoData={magdir:s}}break;case"simple_scalar":{const a=J(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a);this.vaoData={scalar:s}}break;case"wind_speed":{const a=Z(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,a),i=J(this.source,this.symbolizerParameters),n=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:s,scalar:n}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:V()}}setTransform(t){const e=gt(this.transforms.dvs),[a,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),i=this.resolution/this.pixelRatio/t.resolution,n=i*this.width,o=i*this.height,c=Math.PI*this.rotation/180;I(e,e,E(a,s)),I(e,e,E(n/2,o/2)),tt(e,e,-c),I(e,e,E(-n/2,-o/2)),vt(e,e,E(n,o)),xt(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:s}=e,i=A.createVertex(t,D.STATIC_DRAW,new Float32Array(a)),n=A.createIndex(t,D.STATIC_DRAW,new Uint32Array(s)),o=Mt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:p.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:p.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:p.FLOAT,normalized:!1}]});return{vao:new C(t,o.attributes,o.bufferLayouts,{geometry:i},n),elementCount:s.length}}}export{xe as d,we as f,ve as h};