import{c as d,i as n,j as s,k as a,m as o,p as u}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";var p=d((l,i)=>{n();s();a();u();o();i.exports=t;t.displayName="systemd";t.aliases=[];function t(c){(function(m){var r={pattern:/^[;#].*/m,greedy:!0},e=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;m.languages.systemd={comment:r,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+e+`|(?=[^"\r
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+e+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:r,quoted:{pattern:RegExp(/(^|\s)/.source+e),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(c)}});export{p as a};
