import{k as a,l as i,m as h,C as l,c as o,g as c}from"./index-6a6230c9.js";const y=r=>{let e=class extends r{initialize(){this.addHandles(l(()=>this.layer,"refresh",t=>{this.doRefresh(t.dataChanged).catch(s=>{o(s)||c.getLogger(this).error(s)})}),"RefreshableLayerView")}};return a([i()],e.prototype,"layer",void 0),e=a([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as a};