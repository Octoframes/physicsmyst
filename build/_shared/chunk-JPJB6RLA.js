import{a as Au}from"/physicsmyst/build/_shared/chunk-QBZQYMPJ.js";import{c as A,i as n,j as F,k as D,m as f,p as c}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var U=A((u0,$)=>{"use strict";n();F();D();c();f();$.exports=Au()});var T=A((s0,M)=>{n();F();D();c();f();M.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/});var N=A((o0,z)=>{"use strict";n();F();D();c();f();var q={};function lu(u){var e,t,r=q[u];if(r)return r;for(r=q[u]=[],e=0;e<128;e++)t=String.fromCharCode(e),/^[0-9a-z]$/i.test(t)?r.push(t):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<u.length;e++)r[u.charCodeAt(e)]=u[e];return r}function _(u,e,t){var r,a,o,h,i,x="";for(typeof e!="string"&&(t=e,e=_.defaultChars),typeof t>"u"&&(t=!0),i=lu(e),r=0,a=u.length;r<a;r++){if(o=u.charCodeAt(r),t&&o===37&&r+2<a&&/^[0-9a-f]{2}$/i.test(u.slice(r+1,r+3))){x+=u.slice(r,r+3),r+=2;continue}if(o<128){x+=i[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&r+1<a&&(h=u.charCodeAt(r+1),h>=56320&&h<=57343)){x+=encodeURIComponent(u[r]+u[r+1]),r++;continue}x+="%EF%BF%BD";continue}x+=encodeURIComponent(u[r])}return x}_.defaultChars=";/?:@&=+$,-_.!~*'()#";_.componentChars="-_.!~*'()";z.exports=_});var Z=A((l0,H)=>{"use strict";n();F();D();c();f();var j={};function pu(u){var e,t,r=j[u];if(r)return r;for(r=j[u]=[],e=0;e<128;e++)t=String.fromCharCode(e),r.push(t);for(e=0;e<u.length;e++)t=u.charCodeAt(e),r[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return r}function P(u,e){var t;return typeof e!="string"&&(e=P.defaultChars),t=pu(e),u.replace(/(%[a-f0-9]{2})+/gi,function(r){var a,o,h,i,x,E,s,l="";for(a=0,o=r.length;a<o;a+=3){if(h=parseInt(r.slice(a+1,a+3),16),h<128){l+=t[h];continue}if((h&224)===192&&a+3<o&&(i=parseInt(r.slice(a+4,a+6),16),(i&192)===128)){s=h<<6&1984|i&63,s<128?l+="\uFFFD\uFFFD":l+=String.fromCharCode(s),a+=3;continue}if((h&240)===224&&a+6<o&&(i=parseInt(r.slice(a+4,a+6),16),x=parseInt(r.slice(a+7,a+9),16),(i&192)===128&&(x&192)===128)){s=h<<12&61440|i<<6&4032|x&63,s<2048||s>=55296&&s<=57343?l+="\uFFFD\uFFFD\uFFFD":l+=String.fromCharCode(s),a+=6;continue}if((h&248)===240&&a+9<o&&(i=parseInt(r.slice(a+4,a+6),16),x=parseInt(r.slice(a+7,a+9),16),E=parseInt(r.slice(a+10,a+12),16),(i&192)===128&&(x&192)===128&&(E&192)===128)){s=h<<18&1835008|i<<12&258048|x<<6&4032|E&63,s<65536||s>1114111?l+="\uFFFD\uFFFD\uFFFD\uFFFD":(s-=65536,l+=String.fromCharCode(55296+(s>>10),56320+(s&1023))),a+=9;continue}l+="\uFFFD"}return l})}P.defaultChars=";/?:@&=+$,#";P.componentChars="";H.exports=P});var V=A((g0,G)=>{"use strict";n();F();D();c();f();G.exports=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}});var k=A((y0,Q)=>{"use strict";n();F();D();c();f();function S(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Bu=/^([a-z0-9.+-]+:)/i,mu=/:[0-9]*$/,vu=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,du=["<",">",'"',"`"," ","\r",`
`,"	"],gu=["{","}","|","\\","^","`"].concat(du),_u=["'"].concat(gu),W=["%","/","?",";","#"].concat(_u),Y=["/","?","#"],Pu=255,X=/^[+a-z0-9A-Z_-]{0,63}$/,Su=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,J={javascript:!0,"javascript:":!0},K={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function bu(u,e){if(u&&u instanceof S)return u;var t=new S;return t.parse(u,e),t}S.prototype.parse=function(u,e){var t,r,a,o,h,i=u;if(i=i.trim(),!e&&u.split("#").length===1){var x=vu.exec(i);if(x)return this.pathname=x[1],x[2]&&(this.search=x[2]),this}var E=Bu.exec(i);if(E&&(E=E[0],a=E.toLowerCase(),this.protocol=E,i=i.substr(E.length)),(e||E||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(h=i.substr(0,2)==="//",h&&!(E&&J[E])&&(i=i.substr(2),this.slashes=!0)),!J[E]&&(h||E&&!K[E])){var s=-1;for(t=0;t<Y.length;t++)o=i.indexOf(Y[t]),o!==-1&&(s===-1||o<s)&&(s=o);var l,m;for(s===-1?m=i.lastIndexOf("@"):m=i.lastIndexOf("@",s),m!==-1&&(l=i.slice(0,m),i=i.slice(m+1),this.auth=l),s=-1,t=0;t<W.length;t++)o=i.indexOf(W[t]),o!==-1&&(s===-1||o<s)&&(s=o);s===-1&&(s=i.length),i[s-1]===":"&&s--;var hu=i.slice(0,s);i=i.slice(s),this.parseHost(hu),this.hostname=this.hostname||"";var w=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!w){var d=this.hostname.split(/\./);for(t=0,r=d.length;t<r;t++){var p=d[t];if(p&&!p.match(X)){for(var b="",g=0,Eu=p.length;g<Eu;g++)p.charCodeAt(g)>127?b+="x":b+=p[g];if(!b.match(X)){var L=d.slice(0,t),R=d.slice(t+1),y=p.match(Su);y&&(L.push(y[1]),R.unshift(y[2])),R.length&&(i=R.join(".")+i),this.hostname=L.join(".");break}}}}this.hostname.length>Pu&&(this.hostname=""),w&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var I=i.indexOf("#");I!==-1&&(this.hash=i.substr(I),i=i.slice(0,I));var O=i.indexOf("?");return O!==-1&&(this.search=i.substr(O),i=i.slice(0,O)),i&&(this.pathname=i),K[a]&&this.hostname&&!this.pathname&&(this.pathname=""),this};S.prototype.parseHost=function(u){var e=mu.exec(u);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),u=u.substr(0,u.length-e.length)),u&&(this.hostname=u)};Q.exports=bu});var uu=A(($0,v)=>{"use strict";n();F();D();c();f();v.exports.encode=N();v.exports.decode=Z();v.exports.format=V();v.exports.parse=k()});var tu=A((j0,eu)=>{n();F();D();c();f();eu.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/});var iu=A((Y0,ru)=>{n();F();D();c();f();ru.exports=/[\0-\x1F\x7F-\x9F]/});var su=A((ue,au)=>{n();F();D();c();f();au.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/});var Fu=A((se,nu)=>{n();F();D();c();f();nu.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/});var Du=A(B=>{"use strict";n();F();D();c();f();B.Any=tu();B.Cc=iu();B.Cf=su();B.P=T();B.Z=Fu()});var ku=A(C=>{"use strict";n();F();D();c();f();function Ru(u){return Object.prototype.toString.call(u)}function yu(u){return Ru(u)==="[object String]"}var Iu=Object.prototype.hasOwnProperty;function cu(u,e){return Iu.call(u,e)}function Ou(u){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){u[r]=t[r]})}}),u}function Tu(u,e,t){return[].concat(u.slice(0,e),t,u.slice(e+1))}function ou(u){return!(u>=55296&&u<=57343||u>=64976&&u<=65007||(u&65535)===65535||(u&65535)===65534||u>=0&&u<=8||u===11||u>=14&&u<=31||u>=127&&u<=159||u>1114111)}function Cu(u){if(u>65535){u-=65536;var e=55296+(u>>10),t=56320+(u&1023);return String.fromCharCode(e,t)}return String.fromCharCode(u)}var xu=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,wu=/&([a-z#][a-z0-9]{1,31});/gi,Lu=new RegExp(xu.source+"|"+wu.source,"gi"),$u=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,fu=U();function Uu(u,e){var t=0;return cu(fu,e)?fu[e]:e.charCodeAt(0)===35&&$u.test(e)&&(t=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10),ou(t))?Cu(t):u}function Mu(u){return u.indexOf("\\")<0?u:u.replace(xu,"$1")}function qu(u){return u.indexOf("\\")<0&&u.indexOf("&")<0?u:u.replace(Lu,function(e,t,r){return t||Uu(e,r)})}var zu=/[&<>"]/,Nu=/[&<>"]/g,ju={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Hu(u){return ju[u]}function Zu(u){return zu.test(u)?u.replace(Nu,Hu):u}var Gu=/[.?*+^$[\]\\(){}|-]/g;function Vu(u){return u.replace(Gu,"\\$&")}function Wu(u){switch(u){case 9:case 32:return!0}return!1}function Yu(u){if(u>=8192&&u<=8202)return!0;switch(u){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var Xu=T();function Ju(u){return Xu.test(u)}function Ku(u){switch(u){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Qu(u){return u=u.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(u=u.replace(/ẞ/g,"\xDF")),u.toLowerCase().toUpperCase()}C.lib={};C.lib.mdurl=uu();C.lib.ucmicro=Du();C.assign=Ou;C.isString=yu;C.has=cu;C.unescapeMd=Mu;C.unescapeAll=qu;C.isValidEntityCode=ou;C.fromCodePoint=Cu;C.escapeHtml=Zu;C.arrayReplaceAt=Tu;C.isSpace=Wu;C.isWhiteSpace=Yu;C.isMdAsciiPunct=Ku;C.isPunctChar=Ju;C.escapeRE=Vu;C.normalizeReference=Qu});export{U as a,T as b,uu as c,tu as d,iu as e,Fu as f,ku as g};
