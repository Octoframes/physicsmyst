import{c as C,i as l,j as E,k as b,m as g,p as c}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var w=C((y,v)=>{l();E();b();c();g();function I(e){var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",N={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},R={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},s={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,R]},m=e.inherit(s,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),A="[0-9]{4}(-[0-9][0-9]){0,2}",d="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",u="(\\.[0-9]*)?",_="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",T={className:"number",begin:"\\b"+A+d+u+_+"\\b"},i={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},S={begin:/\{/,end:/\}/,contains:[i],illegal:"\\n",relevance:0},o={begin:"\\[",end:"\\]",contains:[i],illegal:"\\n",relevance:0},t=[N,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},T,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},S,o,s],r=[...t];return r.pop(),r.push(m),i.contains=r,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:t}}v.exports=I});export default w();
