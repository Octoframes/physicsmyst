import{c as M,i as a,j as t,k as s,m as c,p as i}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var C=M((D,r)=>{a();t();s();i();c();function T(e){return e?typeof e=="string"?e:e.source:null}function g(...e){return e.map(o=>T(o)).join("")}function y(e){let n={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},o=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],l=e.COMMENT(/;/,/$/),m={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},u={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},d={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},b={className:"symbol",begin:/%[si]/},A={className:"attribute",begin:g(n.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:n.unexpectedChars,keywords:o,contains:[A,l,m,u,d,b,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}r.exports=y});export default C();
