import{a as g}from"/physics-myst/build/_shared/chunk-NAPUFNVM.js";import{c as u,i as a,j as t,k as i,m as s,p as r}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";var l=u((p,o)=>{a();t();i();r();s();var c=g();o.exports=n;n.displayName="bison";n.aliases=[];function n(e){e.register(c),e.languages.bison=e.languages.extend("c",{}),e.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:e.languages.c}},comment:e.languages.c.comment,string:e.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}});export{l as a};
