import{c as p,i as d,j as S,k as m,m as T,p as A}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";var k=p((X,b)=>{d();S();m();A();T();function R(e){return e?typeof e=="string"?e:e.source:null}function D(e){return s("(",e,")*")}function f(e){return s("(",e,")?")}function s(...e){return e.map(t=>R(t)).join("")}function G(...e){return"("+e.map(t=>R(t)).join("|")+")"}function U(e){let n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t={literal:["true","false","undefined","null"]},g=/""|"[^"]+"/,I=/''|'[^']+'/,o=/\[\]|\[[^\]]+\]/,r=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,O=/(\.|\/)/,c=G(g,I,o,r),C=s(f(/\.|\.\/|\//),c,D(s(O,c))),H=s("(",o,"|",r,")(?==)"),a={begin:C,lexemes:/[\w.\/]+/},_=e.inherit(a,{keywords:t}),i={begin:/\(/,end:/\)/},P={className:"attr",begin:H,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,_,i]}}},M={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},E={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,M,P,_,i],returnEnd:!0},L=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(E,{end:/\)/})});i.contains=[L];let N=e.inherit(a,{keywords:n,className:"name",starts:e.inherit(E,{end:/\}\}/})}),u=e.inherit(a,{keywords:n,className:"name"}),l=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(E,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[u]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[u]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[l]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[l]}]}}function B(e){let n=U(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}b.exports=B});export default k();
