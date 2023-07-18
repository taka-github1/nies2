import{S,gF as d,s as w}from"./index-6a6230c9.js";import{n as U}from"./pbf-f1846a04.js";import{t as y}from"./OptimizedGeometry-196224d4.js";import{s as G,t as D}from"./OptimizedFeature-4701473b.js";import{e as R}from"./OptimizedFeatureSet-1d1ac4b9.js";const F=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];let te=class{constructor(e){this._options=e,this.geometryTypes=F,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new R}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||S(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const a=d(this._options.sourceSpatialReference)/d(e.spatialReference);if(a!==1)for(const n of e.features){if(!G(n))continue;const s=n.geometry.coords;for(let r=2;r<s.length;r+=3)s[r]*=a}}addFeature(e,a){e.features.push(a)}createFeature(){return new D}createSpatialReference(){return{wkid:0}}createGeometry(){return new y}addField(e,a){e.fields.push(a)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((a,n)=>a+n,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,a){e.coords[this._coordinatePtr++]=a}addCoordinatePoint(e,a){e.coords.push(a)}addLength(e,a){e.lengths.push(a)}addQueryGeometry(e,a){e.queryGeometry=a.queryGeometry,e.queryGeometryType=a.queryGeometryType}createPointGeometry(){return new y}};const m=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],h=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],b=["upperLeft","lowerLeft"];function k(t){return t>=m.length?null:m[t]}function x(t){return t>=h.length?null:h[t]}function T(t){return t>=b.length?null:b[t]}function q(t,e){return e>=t.geometryTypes.length?null:t.geometryTypes[e]}function M(t,e,a){const s=t.asUnsafe(),r=e.createPointGeometry(a);for(;s.next();)switch(s.tag()){case 3:{const o=s.getUInt32(),i=s.pos()+o;let c=0;for(;s.pos()<i;)e.addCoordinatePoint(r,s.getSInt64(),c++);break}default:s.skip()}return r}function P(t,e,a){const r=t.asUnsafe(),o=e.createGeometry(a),i=2+(a.hasZ?1:0)+(a.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const c=r.getUInt32(),p=r.pos()+c;let l=0;for(;r.pos()<p;)e.addLength(o,r.getUInt32(),l++);break}case 3:{const c=r.getUInt32(),p=r.pos()+c;let l=0;for(e.allocateCoordinates(o);r.pos()<p;)e.addCoordinate(o,r.getSInt64(),l),l++,l===i&&(l=0);break}default:r.skip()}return o}function _(t){const s=t.asUnsafe(),r=new y;let o="esriGeometryPoint";for(;s.next();)switch(s.tag()){case 2:{const i=s.getUInt32(),c=s.pos()+i;for(;s.pos()<c;)r.lengths.push(s.getUInt32());break}case 3:{const i=s.getUInt32(),c=s.pos()+i;for(;s.pos()<c;)r.coords.push(s.getSInt64());break}case 1:o=F[s.getEnum()];break;default:s.skip()}return{queryGeometry:r,queryGeometryType:o}}function B(t){const l=t.asUnsafe();for(;l.next();)switch(l.tag()){case 1:return l.getString();case 2:return l.getFloat();case 3:return l.getDouble();case 4:return l.getSInt32();case 5:return l.getUInt32();case 6:return l.getInt64();case 7:return l.getUInt64();case 8:return l.getSInt64();case 9:return l.getBool();default:return l.skip(),null}return null}function W(t){const i=t.asUnsafe(),c={type:k(0)};for(;i.next();)switch(i.tag()){case 1:c.name=i.getString();break;case 2:c.type=k(i.getEnum());break;case 3:c.alias=i.getString();break;case 4:c.sqlType=x(i.getEnum());break;case 5:i.skip();break;case 6:c.defaultValue=i.getString();break;default:i.skip()}return c}function L(t){const n={},s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:n.name=s.getString();break;case 2:n.isSystemMaintained=s.getBool();break;default:s.skip()}return n}function N(t,e,a,n){const i=e.createFeature(a);let c=0;for(;t.next();)switch(t.tag()){case 1:{const p=n[c++].name;i.attributes[p]=t.processMessage(B);break}case 2:i.geometry=t.processMessageWithArgs(P,e,a);break;case 4:i.centroid=t.processMessageWithArgs(M,e,a);break;default:t.skip()}return i}function A(t){const r=[1,1,1,1],o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:r[0]=o.getDouble();break;case 2:r[1]=o.getDouble();break;case 4:r[2]=o.getDouble();break;case 3:r[3]=o.getDouble();break;default:o.skip()}return r}function V(t){const r=[0,0,0,0],o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:r[0]=o.getDouble();break;case 2:r[1]=o.getDouble();break;case 4:r[2]=o.getDouble();break;case 3:r[3]=o.getDouble();break;default:o.skip()}return r}function C(t){const s={originPosition:T(0)},r=t.asUnsafe();for(;r.next();)switch(r.tag()){case 1:s.originPosition=T(r.getEnum());break;case 2:s.scale=r.processMessage(A);break;case 3:s.translate=r.processMessage(V);break;default:r.skip()}return s}function $(t){const s={},r=t.asUnsafe();for(;r.next();)switch(r.tag()){case 1:s.shapeAreaFieldName=r.getString();break;case 2:s.shapeLengthFieldName=r.getString();break;case 3:s.units=r.getString();break;default:r.skip()}return s}function v(t,e){const i=e.createSpatialReference();for(;t.next();)switch(t.tag()){case 1:i.wkid=t.getUInt32();break;case 5:i.wkt=t.getString();break;case 2:i.latestWkid=t.getUInt32();break;case 3:i.vcsWkid=t.getUInt32();break;case 4:i.latestVcsWkid=t.getUInt32();break;default:t.skip()}return i}function E(t,e){const u=e.createFeatureResult(),g=t.asUnsafe();u.geometryType=q(e,0);let f=!1;for(;g.next();)switch(g.tag()){case 1:u.objectIdFieldName=g.getString();break;case 3:u.globalIdFieldName=g.getString();break;case 4:u.geohashFieldName=g.getString();break;case 5:u.geometryProperties=g.processMessage($);break;case 7:u.geometryType=q(e,g.getEnum());break;case 8:u.spatialReference=g.processMessageWithArgs(v,e);break;case 10:u.hasZ=g.getBool();break;case 11:u.hasM=g.getBool();break;case 12:u.transform=g.processMessage(C);break;case 9:{const I=g.getBool();u.exceededTransferLimit=I;break}case 13:e.addField(u,g.processMessage(W));break;case 15:f||(e.prepareFeatures(u),f=!0),e.addFeature(u,g.processMessageWithArgs(N,e,u,u.fields));break;case 2:u.uniqueIdField=g.processMessage(L);break;default:g.skip()}return e.finishFeatureResult(u),u}function O(t,e){const s={};let r=null;for(;t.next();)switch(t.tag()){case 4:r=t.processMessageWithArgs(_);break;case 1:s.featureResult=t.processMessageWithArgs(E,e);break;default:t.skip()}return r!=null&&s.featureResult&&e.addQueryGeometry(s,r),s}function j(t,e){try{const n=new U(new Uint8Array(t),new DataView(t)),s={};for(;n.next();)n.tag()===2?s.queryResult=n.processMessageWithArgs(O,e):n.skip();return s}catch(a){throw new w("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}function se(t,e){const a=j(t,e),n=a.queryResult.featureResult,s=a.queryResult.queryGeometry,r=a.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const o=n.objectIdFieldName;for(const i of n.features)i.attributes&&(i.objectId=i.attributes[o])}return n&&(n.queryGeometry=s,n.queryGeometryType=r),n}export{te as a,W as b,C as h,se as t};
