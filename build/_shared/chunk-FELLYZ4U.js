import{b as U,i as A,j as I,k as b,m as S,p as E}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";function p(n){throw new RangeError(q[n])}function F(n,o){let c=n.split("@"),e="";c.length>1&&(e=c[0]+"@",n=c[1]);let r=function(s,l){let i=[],t=s.length;for(;t--;)i[t]=l(s[t]);return i}((n=n.replace(R,".")).split("."),o).join(".");return e+r}function O(n){let o=[],c=0,e=n.length;for(;c<e;){let r=n.charCodeAt(c++);if(r>=55296&&r<=56319&&c<e){let s=n.charCodeAt(c++);(64512&s)==56320?o.push(((1023&r)<<10)+(1023&s)+65536):(o.push(r),c--)}else o.push(r)}return o}var L,M,R,q,u,x,m,P,j,k,v,y=U(()=>{A();I();b();E();S();L=/^xn--/,M=/[^\0-\x7E]/,R=/[\x2E\u3002\uFF0E\uFF61]/g,q={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=Math.floor,x=String.fromCharCode;m=function(n,o){return n+22+75*(n<26)-((o!=0)<<5)},P=function(n,o,c){let e=0;for(n=c?u(n/700):n>>1,n+=u(n/o);n>455;e+=36)n=u(n/35);return u(e+36*n/(n+38))},j=function(n){let o=[],c=n.length,e=0,r=128,s=72,l=n.lastIndexOf("-");l<0&&(l=0);for(let t=0;t<l;++t)n.charCodeAt(t)>=128&&p("not-basic"),o.push(n.charCodeAt(t));for(let t=l>0?l+1:0;t<c;){let g=e;for(let d=1,h=36;;h+=36){t>=c&&p("invalid-input");let a=(i=n.charCodeAt(t++))-48<10?i-22:i-65<26?i-65:i-97<26?i-97:36;(a>=36||a>u((2147483647-e)/d))&&p("overflow"),e+=a*d;let C=h<=s?1:h>=s+26?26:h-s;if(a<C)break;let w=36-C;d>u(2147483647/w)&&p("overflow"),d*=w}let f=o.length+1;s=P(e-g,f,g==0),u(e/f)>2147483647-r&&p("overflow"),r+=u(e/f),e%=f,o.splice(e++,0,r)}var i;return String.fromCodePoint(...o)},k=function(n){let o=[],c=(n=O(n)).length,e=128,r=0,s=72;for(let t of n)t<128&&o.push(x(t));let l=o.length,i=l;for(l&&o.push("-");i<c;){let t=2147483647;for(let f of n)f>=e&&f<t&&(t=f);let g=i+1;t-e>u((2147483647-r)/g)&&p("overflow"),r+=(t-e)*g,e=t;for(let f of n)if(f<e&&++r>2147483647&&p("overflow"),f==e){let d=r;for(let h=36;;h+=36){let a=h<=s?1:h>=s+26?26:h-s;if(d<a)break;let C=d-a,w=36-a;o.push(x(m(a+C%w,0))),d=u(C/w)}o.push(x(m(d,0))),s=P(r,g,i==l),r=0,++i}++r,++e}return o.join("")},v={version:"2.1.0",ucs2:{decode:O,encode:n=>String.fromCodePoint(...n)},decode:j,encode:k,toASCII:function(n){return F(n,function(o){return M.test(o)?"xn--"+k(o):o})},toUnicode:function(n){return F(n,function(o){return L.test(o)?j(o.slice(4).toLowerCase()):o})}};v.decode;v.encode;v.toASCII;v.toUnicode;v.ucs2;v.version});export{v as a,y as b};
