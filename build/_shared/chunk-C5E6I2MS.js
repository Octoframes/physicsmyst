import{c as S,i as E,j as r,k as N,m as t,p as n}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";var T=S((s,A)=>{E();r();N();n();t();A.exports=e;e.displayName="cypher";e.aliases=[];function e(I){I.languages.cypher={comment:/\/\/.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,greedy:!0},"class-name":{pattern:/(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,lookbehind:!0,greedy:!0},relationship:{pattern:/(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,lookbehind:!0,greedy:!0,alias:"property"},identifier:{pattern:/`(?:[^`\\\r\n])*`/,greedy:!0},variable:/\$\w+/,keyword:/\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,function:/\b\w+\b(?=\s*\()/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,operator:/:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,punctuation:/[()[\]{},;.]/}}});export{T as a};
