import{p as e,aR as f,aS as i}from"./index-6a6230c9.js";import{m}from"./query-537b8104.js";async function d(a,r,t){const n=await p(a,r,t);return e.fromJSON(n)}async function p(a,r,t){const n=f(a),s={...t},o=i.from(r),{data:c}=await m(n,o,o.sourceSpatialReference,s);return c}export{p as a,d as s};
