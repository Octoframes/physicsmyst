import{c as d,i as t,j as a,k as n,m as r,p as o}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var l=d((u,b)=>{t();a();n();o();r();b.exports=e;e.displayName="erlang";e.aliases=[];function e(i){i.languages.erlang={comment:/%.+/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"quoted-function":{pattern:/'(?:\\.|[^\\'\r\n])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^\\'\r\n])+'/,alias:"atom"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,number:[/\$\\?./,/\b\d+#[a-z0-9]+/i,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],function:/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/}}});export{l as a};
