import{a as p}from"/physics-myst/build/_shared/chunk-BQXD5VCA.js";import{a as d}from"/physics-myst/build/_shared/chunk-KWKKFES7.js";import{c as b,i as t,j as u,k as i,m as o,p as l}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";var f=b((h,g)=>{t();u();i();l();o();var c=d(),k=p();g.exports=n;n.displayName="erb";n.aliases=[];function n(r){r.register(c),r.register(k),function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",function(a){var s=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"erb",s)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"erb")})}(r)}});export{f as a};
