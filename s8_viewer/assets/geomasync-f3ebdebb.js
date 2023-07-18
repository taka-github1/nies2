import{dV as d,aQ as S,aO as N,aM as b,aN as x,aP as W,dW as U,j as q,dX as rn,aT as an}from"./index-6a6230c9.js";import{m as o,Q as h,B,d as k,z as A,q as F,y as j,t as P,V as D,u as O,v as w,w as E,x as p,H as z,I as L,c as R,K as sn,M as un,P as cn,S as H,b as M,U as Z,X as fn,Z as C}from"./arcadeUtils-3c951a8d.js";import{t as i,e as s}from"./executionError-c92d3b85.js";import{t as K,s as Q}from"./portalUtils-eacde04a.js";import{A as ln,h as on,S as dn,m as wn,x as hn,p as mn,O as yn,g as pn,R as vn,D as gn,b as Pn,E as In,k as An,y as Fn,w as Rn,W as X,K as G,F as J,M as V,d as Nn,C as Y,U as _,B as xn,L as bn,P as Sn,v as On,H as $,N as nn,J as jn,j as Dn,T as Mn,V as Zn}from"./geometryEngineAsync-fb9ffba9.js";import"./arcadeTimeUtils-7a0c20b0.js";import"./number-fef932e9.js";import"./featureConversionUtils-c181d337.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";function en(r){return rn.indexOf("4.")===0?x.fromExtent(r):new x({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function I(r,e,t){if(h(r,2,2,e,t),!(r[0]instanceof d&&r[1]instanceof d)){if(!(r[0]instanceof d&&r[1]===null)){if(!(r[1]instanceof d&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new i(e,s.InvalidParameter,t)}}}}async function tn(r,e){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let t=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(t=fn(r.spatialReference)/an(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let a=1;a<n.length;a++)c+=C(n[a],n[a-1],t);else if(r.type==="polygon")for(const n of r.rings){for(let a=1;a<n.length;a++)c+=C(n[a],n[a-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=C(n[0],n[n.length-1],t))}else r.type==="extent"&&(c+=2*C([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],t),c+=2*C([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],t),c*=2,c+=4*Math.abs(w(r.zmax,0)*t-w(r.zmin,0)*t));const l=new N({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return J(l,e)}function En(r){r.mode==="async"&&(r.functions.disjoint=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]===null||n[1]===null||ln(n[0],n[1])))},r.functions.intersects=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&on(n[0],n[1])))},r.functions.touches=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&dn(n[0],n[1])))},r.functions.crosses=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&wn(n[0],n[1])))},r.functions.within=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},r.functions.contains=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},r.functions.overlaps=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]!==null&&yn(n[0],n[1])))},r.functions.equals=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(h(n,2,2,e,t),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?pn(n[0],n[1]):!(!B(n[0])||!B(n[1]))&&n[0].equals(n[1]))))},r.functions.relate=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,3,3,e,t),n[0]instanceof d&&n[1]instanceof d)return vn(n[0],n[1],k(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new i(e,s.InvalidParameter,t)})},r.functions.intersection=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]===null||n[1]===null?null:gn(n[0],n[1])))},r.functions.union=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{const a=[];if((n=o(n)).length===0)throw new i(e,s.WrongNumberOfParameters,t);if(n.length===1)if(A(n[0])){const u=o(n[0]);for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(e,s.InvalidParameter,t);a.push(u[f])}}else{if(!F(n[0])){if(n[0]instanceof d)return j(P(n[0]),e.spatialReference);if(n[0]===null)return null;throw new i(e,s.InvalidParameter,t)}{const u=o(n[0].toArray());for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(e,s.InvalidParameter,t);a.push(u[f])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new i(e,s.InvalidParameter,t);a.push(n[u])}return a.length===0?null:Pn(a)})},r.functions.difference=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:In(n[0],n[1])))},r.functions.symmetricdifference=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>(I(n=o(n),e,t),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):An(n[0],n[1])))},r.functions.clip=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[1]instanceof S)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return n[1]===null?null:Fn(n[0],n[1])})},r.functions.cut=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[1]instanceof N)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return n[1]===null?[P(n[0])]:Rn(n[0],n[1])})},r.functions.area=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return a}if(A(n[0])||F(n[0])){const a=E(n[0],e.spatialReference);return a===null?0:X(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return X(n[0],O(w(n[1],-1)))})},r.functions.areageodetic=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return a}if(A(n[0])||F(n[0])){const a=E(n[0],e.spatialReference);return a===null?0:G(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return G(n[0],O(w(n[1],-1)))})},r.functions.length=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return a}if(A(n[0])||F(n[0])){const a=z(n[0],e.spatialReference);return a===null?0:J(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return J(n[0],p(w(n[1],-1)))})},r.functions.length3d=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const a=z(n[0],e.spatialReference);return a===null?0:a.hasZ===!0?tn(a,p(w(n[1],-1))):J(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return n[0].hasZ===!0?tn(n[0],p(w(n[1],-1))):J(n[0],p(w(n[1],-1)))})},r.functions.lengthgeodetic=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return a}if(A(n[0])||F(n[0])){const a=z(n[0],e.spatialReference);return a===null?0:V(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return V(n[0],p(w(n[1],-1)))})},r.functions.distance=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{n=o(n),h(n,2,3,e,t);let a=n[0];(A(n[0])||F(n[0]))&&(a=L(n[0],e.spatialReference));let u=n[1];if((A(n[1])||F(n[1]))&&(u=L(n[1],e.spatialReference)),!(a instanceof d))throw new i(e,s.InvalidParameter,t);if(!(u instanceof d))throw new i(e,s.InvalidParameter,t);return Nn(a,u,p(w(n[2],-1)))})},r.functions.distancegeodetic=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{n=o(n),h(n,2,3,e,t);const a=n[0],u=n[1];if(!(a instanceof b))throw new i(e,s.InvalidParameter,t);if(!(u instanceof b))throw new i(e,s.InvalidParameter,t);const f=new N({paths:[],spatialReference:a.spatialReference});return f.addPath([a,u]),V(f,p(w(n[2],-1)))})},r.functions.densify=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);if(a<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof x||n[0]instanceof N?Y(n[0],a,p(w(n[2],-1))):n[0]instanceof S?Y(en(n[0]),a,p(w(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);if(a<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof x||n[0]instanceof N?_(n[0],a,p(w(n[2],-1))):n[0]instanceof S?_(en(n[0]),a,p(w(n[2],-1))):n[0]})},r.functions.generalize=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,4,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);return xn(n[0],a,sn(w(n[2],!0)),p(w(n[3],-1)))})},r.functions.buffer=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);return a===0?P(n[0]):bn(n[0],a,p(w(n[2],-1)))})},r.functions.buffergeodetic=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);return a===0?P(n[0]):Sn(n[0],a,p(w(n[2],-1)))})},r.functions.offset=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,2,6,e,t),n[0]===null)return null;if(!(n[0]instanceof x||n[0]instanceof N))throw new i(e,s.InvalidParameter,t);const a=R(n[1]);if(isNaN(a))throw new i(e,s.InvalidParameter,t);const u=R(w(n[4],10));if(isNaN(u))throw new i(e,s.InvalidParameter,t);const f=R(w(n[5],0));if(isNaN(f))throw new i(e,s.InvalidParameter,t);return On(n[0],a,p(w(n[2],-1)),k(w(n[3],"round")).toLowerCase(),u,f)})},r.functions.rotate=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{n=o(n),h(n,2,3,e,t);let a=n[0];if(a===null)return null;if(!(a instanceof d))throw new i(e,s.InvalidParameter,t);a instanceof S&&(a=x.fromExtent(a));const u=R(n[1]);if(isNaN(u))throw new i(e,s.InvalidParameter,t);const f=w(n[2],null);if(f===null)return $(a,u);if(f instanceof b)return $(a,u,f);throw new i(e,s.InvalidParameter,t)})},r.functions.centroid=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;let a=n[0];if((A(n[0])||F(n[0]))&&(a=L(n[0],e.spatialReference)),a===null)return null;if(!(a instanceof d))throw new i(e,s.InvalidParameter,t);return a instanceof b?j(P(n[0]),e.spatialReference):a instanceof x?a.centroid:a instanceof N?un(a):a instanceof W?cn(a):a instanceof S?a.center:null})},r.functions.multiparttosinglepart=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{n=o(n),h(n,1,1,e,t);const a=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);if(n[0]instanceof b)return[j(P(n[0]),e.spatialReference)];if(n[0]instanceof S)return[j(P(n[0]),e.spatialReference)];const u=await nn(n[0]);if(u instanceof x){const f=[],y=[];for(let m=0;m<u.rings.length;m++)if(u.isClockwise(u.rings[m])){const v=U({rings:[u.rings[m]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(v)}else y.push({ring:u.rings[m],pt:u.getPoint(m,0)});for(let m=0;m<y.length;m++)for(let v=0;v<f.length;v++)if(f[v].contains(y[m].pt)){f[v].addRing(y[m].ring);break}return f}if(u instanceof N){const f=[];for(let y=0;y<u.paths.length;y++){const m=U({paths:[u.paths[y]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof W){const f=j(P(n[0]),e.spatialReference);for(let y=0;y<f.points.length;y++)a.push(f.getPoint(y));return a}return null})},r.functions.issimple=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return!0;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return jn(n[0])})},r.functions.simplify=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return nn(n[0])})},r.functions.convexhull=function(e,t){return r.standardFunctionAsync(e,t,(c,l,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,t);return Dn(n[0])})},r.functions.getuser=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{h(n,0,2,e,t);let a=w(n[1],""),u=a===!0;if(a=a===!0||a===!1?"":k(a),n.length===0||n[0]instanceof H){let y=null;y=e.services&&e.services.portal?e.services.portal:q.getDefault(),n.length>0&&(y=K(n[0],y));const m=await Q(y,a,u);if(m){const v=JSON.parse(JSON.stringify(m));for(const g of["lastLogin","created","modified"])v[g]!==void 0&&v[g]!==null&&(v[g]=new Date(v[g]));return M.convertObjectToArcadeDictionary(v,Z(e))}return null}let f=null;if(D(n[0])&&(f=n[0]),f){if(u=!1,a)return null;await f.load();const y=await f.getOwningSystemUrl();if(!y){if(!a){const g=await f.getIdentityUser();return g?M.convertObjectToArcadeDictionary({username:g},Z(e)):null}return null}let m=null;m=e.services&&e.services.portal?e.services.portal:q.getDefault(),m=K(new H(y),m);const v=await Q(m,a,u);if(v){const g=JSON.parse(JSON.stringify(v));for(const T of["lastLogin","created","modified"])g[T]!==void 0&&g[T]!==null&&(g[T]=new Date(g[T]));return M.convertObjectToArcadeDictionary(g,Z(e))}return null}throw new i(e,s.InvalidParameter,t)})}),r.functions.nearestcoordinate=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[0]instanceof d||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof b||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const a=await Mn(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},Z(e),!1,!0)})},r.functions.nearestvertex=function(e,t){return r.standardFunctionAsync(e,t,async(c,l,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[0]instanceof d||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof b||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const a=await Zn(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},Z(e),!1,!0)})}}export{En as registerFunctions};
