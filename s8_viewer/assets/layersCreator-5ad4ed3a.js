import{aC as G,az as M,V as A}from"./index-6a6230c9.js";import{a as L}from"./lazyLayerLoader-dc3e0242.js";import{selectLayerClassPath as v}from"./portalLayers-d29b5a5a.js";import"./layersLoader-718d3692.js";import"./fetchService-8fa10407.js";import"./jsonContext-eaf229ed.js";function b(e){return p(e,"notes")}function w(e){return p(e,"markup")}function h(e){return p(e,"route")}function p(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function C(e,r,y){if(!r)return;const t=[];for(const a of r){const i=D(a,y);a.layerType==="GroupLayer"?t.push(E(i,a,y)):t.push(i)}const n=await Promise.allSettled(t);for(const a of n)a.status==="rejected"||a.value&&e.add(a.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},O={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},V={...I,LinkChartLayer:"LinkChartLayer"},k={...T},B={...m};async function D(e,r){return U(await x(e,r),e,r)}async function U(e,r,y){const t=new e;return t.read(r,y.context),t.type==="group"&&f(r)&&await N(t,r,y.context),await G(t,y.context),t}async function x(e,r){var o;const y=r.context,t=R(y);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=t[n];let i=a?L[a]:L.UnknownLayer;if(g(e)){const c=y==null?void 0:y.portal;if(e.itemId){const l=new M({id:e.itemId,portal:c});await l.load();const s=(await v(l)).className||"UnknownLayer";i=L[s]}}else n==="ArcGISFeatureLayer"?b(e)||w(e)?i=L.MapNotesLayer:h(e)?i=L.RouteLayer:f(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function f(e){var r,y;return e.layerType!=="ArcGISFeatureLayer"||g(e)?!1:(((y=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:y.length)??0)>1}function g(e){return e.type==="Feature Collection"}function R(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=O;break;case"ground":r=F;break;default:r=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=B;break;case"tables":r=k;break;default:r=V}break;default:switch(e.layerContainerType){case"basemap":r=m;break;case"tables":r=T;break;default:r=I}}return r}async function E(e,r,y){const t=new A,n=C(t,Array.isArray(r.layers)?r.layers:[],y);try{const a=await e;try{if(await n,a.type==="group")return a.layers.addMany(t),a}catch(i){a.destroy();for(const o of t)o.destroy();throw i}}catch(a){throw a}}async function N(e,r,y){var c;const t=L.FeatureLayer,n=await t(),a=r.featureCollection,i=a==null?void 0:a.showLegend,o=(c=a==null?void 0:a.layers)==null?void 0:c.map((l,s)=>{var d;const S=new n;S.read(l,y);const u={...y,ignoreDefaults:!0};return S.read({id:`${e.id}-sublayer-${s}`,visibility:((d=r.visibleLayers)==null?void 0:d.includes(s))??!0},u),i!=null&&S.read({showLegend:i},u),S});e.layers.addMany(o??[])}export{C as populateOperationalLayers};
