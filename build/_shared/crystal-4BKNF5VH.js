import{c as v,i as g,j as d,k as l,m as E,p as u}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var M=v((C,T)=>{g();d();l();u();E();function I(n){let i="(_?[ui](8|16|32|64|128))?",N="(_?f(32|64))?",S="[a-zA-Z_]\\w*[!?=]?",s="[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",t="[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",c={$pattern:S,keyword:"abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",literal:"false nil true"},a={className:"subst",begin:/#\{/,end:/\}/,keywords:c},b={className:"template-variable",variants:[{begin:"\\{\\{",end:"\\}\\}"},{begin:"\\{%",end:"%\\}"}],keywords:c};function e(f,O){let r=[{begin:f,end:O}];return r[0].contains=r,r}let _={className:"string",contains:[n.BACKSLASH_ESCAPE,a],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[Qwi]?\\(",end:"\\)",contains:e("\\(","\\)")},{begin:"%[Qwi]?\\[",end:"\\]",contains:e("\\[","\\]")},{begin:"%[Qwi]?\\{",end:/\}/,contains:e(/\{/,/\}/)},{begin:"%[Qwi]?<",end:">",contains:e("<",">")},{begin:"%[Qwi]?\\|",end:"\\|"},{begin:/<<-\w+$/,end:/^\s*\w+$/}],relevance:0},m={className:"string",variants:[{begin:"%q\\(",end:"\\)",contains:e("\\(","\\)")},{begin:"%q\\[",end:"\\]",contains:e("\\[","\\]")},{begin:"%q\\{",end:/\}/,contains:e(/\{/,/\}/)},{begin:"%q<",end:">",contains:e("<",">")},{begin:"%q\\|",end:"\\|"},{begin:/<<-'\w+'$/,end:/^\s*\w+$/}],relevance:0},w={begin:"(?!%\\})("+n.RE_STARTERS_RE+"|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",keywords:"case if select unless until when while",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,a],variants:[{begin:"//[a-z]*",relevance:0},{begin:"/(?!\\/)",end:"/[a-z]*"}]}],relevance:0},A={className:"regexp",contains:[n.BACKSLASH_ESCAPE,a],variants:[{begin:"%r\\(",end:"\\)",contains:e("\\(","\\)")},{begin:"%r\\[",end:"\\]",contains:e("\\[","\\]")},{begin:"%r\\{",end:/\}/,contains:e(/\{/,/\}/)},{begin:"%r<",end:">",contains:e("<",">")},{begin:"%r\\|",end:"\\|"}],relevance:0},R={className:"meta",begin:"@\\[",end:"\\]",contains:[n.inherit(n.QUOTE_STRING_MODE,{className:"meta-string"})]},o=[b,_,m,A,w,R,n.HASH_COMMENT_MODE,{className:"class",beginKeywords:"class module struct",end:"$|;",illegal:/=/,contains:[n.HASH_COMMENT_MODE,n.inherit(n.TITLE_MODE,{begin:t}),{begin:"<"}]},{className:"class",beginKeywords:"lib enum union",end:"$|;",illegal:/=/,contains:[n.HASH_COMMENT_MODE,n.inherit(n.TITLE_MODE,{begin:t})]},{beginKeywords:"annotation",end:"$|;",illegal:/=/,contains:[n.HASH_COMMENT_MODE,n.inherit(n.TITLE_MODE,{begin:t})],relevance:2},{className:"function",beginKeywords:"def",end:/\B\b/,contains:[n.inherit(n.TITLE_MODE,{begin:s,endsParent:!0})]},{className:"function",beginKeywords:"fun macro",end:/\B\b/,contains:[n.inherit(n.TITLE_MODE,{begin:s,endsParent:!0})],relevance:2},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":",contains:[_,{begin:s}],relevance:0},{className:"number",variants:[{begin:"\\b0b([01_]+)"+i},{begin:"\\b0o([0-7_]+)"+i},{begin:"\\b0x([A-Fa-f0-9_]+)"+i},{begin:"\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?"+N+"(?!_)"},{begin:"\\b([1-9][0-9_]*|0)"+i}],relevance:0}];return a.contains=o,b.contains=o.slice(1),{name:"Crystal",aliases:["cr"],keywords:c,contains:o}}T.exports=I});export default M();
