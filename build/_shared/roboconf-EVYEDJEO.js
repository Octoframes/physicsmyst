import{c as d,i as s,j as t,k as i,m as c,p as o}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var M=d((_,r)=>{s();t();i();o();c();function E(n){let e="[a-zA-Z-_][^\\n{]+\\{",a={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+e,end:/\}/,keywords:"facet",contains:[a,n.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+e,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",a,n.HASH_COMMENT_MODE]},{begin:"^"+e,end:/\}/,contains:[a,n.HASH_COMMENT_MODE]},n.HASH_COMMENT_MODE]}}r.exports=E});export default M();
