import{aw as o,s as p,ax as g,a8 as y}from"./index-6a6230c9.js";async function P(e,t={},a){await e.load(a);const r=o(e.itemUrl,"resources"),{start:n=1,num:u=10,sortOrder:l="asc",sortField:c="created"}=t,i={query:{start:n,num:u,sortOrder:l,sortField:c,token:e.apiKey},signal:a==null?void 0:a.signal},s=await e.portal.request(r,i);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:h,size:f,resource:w})=>({created:new Date(h),size:f,resource:e.resourceFromPath(w)}))}}async function x(e,t,a,r){if(!e.hasPath())throw new p(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(r);const u=o(n.userItemUrl,t==="add"?"addResources":"updateResources"),[l,c]=d(e.path),i=await R(a),s=new FormData;return l&&l!=="."&&s.append("resourcesPrefix",l),r!=null&&r.compress&&s.append("compress","true"),s.append("fileName",c),s.append("file",i,c),s.append("f","json"),r!=null&&r.access&&s.append("access",r.access),await n.portal.request(u,{method:"post",body:s,signal:r==null?void 0:r.signal}),e}async function b(e,t,a){if(!t.hasPath())throw new p("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=o(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:a==null?void 0:a.signal}),t.portalItem=null}async function q(e,t){await e.load(t);const a=o(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t==null?void 0:t.signal})}function d(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,a]=v(e),[r,n]=d(t);return[r,n,a]}function v(e){const t=g(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function R(e){return e instanceof Blob?e:(await y(e.url,{responseType:"blob"})).data}function F(e,t){if(!e.hasPath())return null;const[a,,r]=m(e.path);return e.portalItem.resourceFromPath(o(a,t+r))}function O(e,t){if(!e.hasPath())return null;const[a,,r]=m(e.path);return e.portalItem.resourceFromPath(o(a,t+r))}export{x as addOrUpdateResource,R as contentToBlob,P as fetchResources,F as getSiblingOfSameType,O as getSiblingOfSameTypeI,q as removeAllResources,b as removeResource,m as splitPrefixFileNameAndExtension};
