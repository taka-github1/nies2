import{s as P,co as M,cp as $}from"./index-6a6230c9.js";import{t as C}from"./OptimizedFeature-4701473b.js";import{t as J}from"./OptimizedGeometry-196224d4.js";const v={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(t){return v[t]}function*k(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const o of t.features)o&&(yield o)}}function*x(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const o of t.coordinates)yield*o;break;case"MultiPolygon":for(const o of t.coordinates)for(const n of o)yield*n}}function*A(t,o={}){const{geometryType:n,objectIdField:e}=o;for(const r of t){const{geometry:s,properties:p,id:i}=r;if(s&&b(s.type)!==n)continue;const l=p||{};let c;e&&(c=l[e],i==null||c||(l[e]=c=i)),yield new C(s?Z(new J,s,o):null,l,null,c??void 0)}}function D(t){for(const o of t)if(o.length>2)return!0;return!1}function E(t){return!T(t)}function R(t){return T(t)}function T(t){let o=0;for(let n=0;n<t.length;n++){const e=t[n],r=t[(n+1)%t.length];o+=e[0]*r[1]-r[0]*e[1]}return o<=0}function L(t){const o=t[0],n=t[t.length-1];return o[0]===n[0]&&o[1]===n[1]&&o[2]===n[2]||t.push(o),t}function Z(t,o,n){switch(o.type){case"LineString":return H(t,o,n);case"MultiLineString":return q(t,o,n);case"MultiPoint":return z(t,o,n);case"MultiPolygon":return B(t,o,n);case"Point":return K(t,o,n);case"Polygon":return Q(t,o,n)}}function H(t,o,n){return g(t,o.coordinates,n),t}function q(t,o,n){for(const e of o.coordinates)g(t,e,n);return t}function z(t,o,n){return g(t,o.coordinates,n),t}function B(t,o,n){for(const e of o.coordinates){O(t,e[0],n);for(let r=1;r<e.length;r++)I(t,e[r],n)}return t}function K(t,o,n){return S(t,o.coordinates,n),t}function Q(t,o,n){const e=o.coordinates;O(t,e[0],n);for(let r=1;r<e.length;r++)I(t,e[r],n);return t}function O(t,o,n){const e=L(o);E(e)?N(t,e,n):g(t,e,n)}function I(t,o,n){const e=L(o);R(e)?N(t,e,n):g(t,e,n)}function g(t,o,n){for(const e of o)S(t,e,n);t.lengths.push(o.length)}function N(t,o,n){for(let e=o.length-1;e>=0;e--)S(t,o[e],n);t.lengths.push(o.length)}function S(t,o,n){const[e,r,s]=o;t.coords.push(e,r),n.hasZ&&t.coords.push(s||0)}function U(t){switch(typeof t){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function Y(t){if(!t)throw new P("geojson-layer:empty","GeoJSON data is empty");if(t.type!=="Feature"&&t.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:o}=t;if(!o)return;const n=typeof o=="string"?o:o.type==="name"?o.properties.name:o.type==="EPSG"?o.properties.code:null,e=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!e.test(n))throw new P("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function _(t,o={}){const n=[],e=new Set,r=new Set;let s,p=!1,i=null,l=!1,{geometryType:c=null}=o,m=!1;for(const d of k(t)){const{geometry:h,properties:u,id:a}=d;if((!h||(c||(c=b(h.type)),b(h.type)===c))&&(p||(p=D(x(h))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(y=>u[y]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(y=>u[y]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let y=!0;for(const f in u){if(e.has(f))continue;const F=u[f];if(F==null){y=!1,r.add(f);continue}const j=U(F);if(j==="unknown"){r.add(f);continue}r.delete(f),e.add(f);const G=M(f);G&&n.push({name:G,alias:f,type:j})}m=y}}const w=M((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(w){for(const d of n)if(d.name===w&&$(d)){d.type="esriFieldTypeOID";break}}return{fields:n,geometryType:c,hasZ:p,objectIdFieldName:w,objectIdFieldType:s,unknownFields:Array.from(r)}}function tt(t,o){return Array.from(A(k(t),o))}export{tt as I,_ as L,Y as T,b as s};
