import{a as p}from"/physicsmyst/build/_shared/chunk-F4IRQJLV.js";import{a as v}from"/physicsmyst/build/_shared/chunk-TYHB4QOQ.js";import{c as g,i as s,j as o,k as r,m as u,p as i}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var j=g((w,d)=>{s();o();r();i();u();var k=p(),b=v();d.exports=n;n.displayName="javadoc";n.aliases=[];function n(a){a.register(k),a.register(b),function(e){var t=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,l=/#\s*\w+(?:\s*\([^()]*\))?/.source,c=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,function(){return l});e.languages.javadoc=e.languages.extend("javadoclike",{}),e.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+c+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:e.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:t,lookbehind:!0,inside:e.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:t,lookbehind:!0,inside:{tag:e.languages.markup.tag,entity:e.languages.markup.entity,code:{pattern:/.+/,inside:e.languages.java,alias:"language-java"}}}}}],tag:e.languages.markup.tag,entity:e.languages.markup.entity}),e.languages.javadoclike.addSupport("java",e.languages.javadoc)}(a)}});export{j as a};
