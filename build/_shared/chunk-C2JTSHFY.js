import{b as u,i,j as a,k as f,m as o,p as s}from"/physics-myst/build/_shared/chunk-RMYRWJKG.js";function I(t){if(!(e=Me.exec(t)))throw new Error("invalid format: "+t);var e;return new V({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function V(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}var Me,ft=u(()=>{i();a();f();s();o();Me=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;I.prototype=V.prototype;V.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type}});function Ht(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function v(t,e){if((r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}var G=u(()=>{i();a();f();s();o()});function $(t){return t=v(Math.abs(t)),t?t[1]:NaN}var Y=u(()=>{i();a();f();s();o();G()});function Rt(t,e){return function(r,n){for(var h=r.length,l=[],c=0,m=t[0],w=0;h>0&&m>0&&(w+m+1>n&&(m=Math.max(1,n-w)),l.push(r.substring(h-=m,h+m)),!((w+=m+1)>n));)m=t[c=(c+1)%t.length];return l.reverse().join(e)}}var Et=u(()=>{i();a();f();s();o()});function vt(t){return function(e){return e.replace(/[0-9]/g,function(r){return t[+r]})}}var zt=u(()=>{i();a();f();s();o()});function Ct(t){t:for(var e=t.length,r=1,n=-1,h;r<e;++r)switch(t[r]){case".":n=h=r;break;case"0":n===0&&(n=r),h=r;break;default:if(!+t[r])break t;n>0&&(n=0);break}return n>0?t.slice(0,n)+t.slice(h+1):t}var jt=u(()=>{i();a();f();s();o()});function qt(t,e){var r=v(t,e);if(!r)return t+"";var n=r[0],h=r[1],l=h-(ot=Math.max(-8,Math.min(8,Math.floor(h/3)))*3)+1,c=n.length;return l===c?n:l>c?n+new Array(l-c+1).join("0"):l>0?n.slice(0,l)+"."+n.slice(l):"0."+new Array(1-l).join("0")+v(t,Math.max(0,e+l-1))[0]}var ot,st=u(()=>{i();a();f();s();o();G()});function ht(t,e){var r=v(t,e);if(!r)return t+"";var n=r[0],h=r[1];return h<0?"0."+new Array(-h).join("0")+n:n.length>h+1?n.slice(0,h+1)+"."+n.slice(h+1):n+new Array(h-n.length+2).join("0")}var At=u(()=>{i();a();f();s();o();G()});var xt,It=u(()=>{i();a();f();s();o();G();st();At();xt={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Ht,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>ht(t*100,e),r:ht,s:qt,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)}});function lt(t){return t}var Lt=u(()=>{i();a();f();s();o()});function Ft(t){var e=t.grouping===void 0||t.thousands===void 0?lt:Rt(_t.call(t.grouping,Number),t.thousands+""),r=t.currency===void 0?"":t.currency[0]+"",n=t.currency===void 0?"":t.currency[1]+"",h=t.decimal===void 0?".":t.decimal+"",l=t.numerals===void 0?lt:vt(_t.call(t.numerals,String)),c=t.percent===void 0?"%":t.percent+"",m=t.minus===void 0?"\u2212":t.minus+"",w=t.nan===void 0?"NaN":t.nan+"";function $t(d){d=I(d);var F=d.fill,O=d.align,M=d.sign,T=d.symbol,q=d.zero,X=d.width,at=d.comma,R=d.precision,Nt=d.trim,b=d.type;b==="n"?(at=!0,b="g"):xt[b]||(R===void 0&&(R=12),Nt=!0,b="g"),(q||F==="0"&&O==="=")&&(q=!0,F="0",O="=");var pe=T==="$"?r:T==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",ye=T==="$"?n:/[%p]/.test(b)?c:"",kt=xt[b],we=/[defgprs%]/.test(b);R=R===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,R)):Math.max(0,Math.min(20,R));function Pt(x){var E=pe,p=ye,A,St,B;if(b==="c")p=kt(x)+p,x="";else{x=+x;var J=x<0||1/x<0;if(x=isNaN(x)?w:kt(Math.abs(x),R),Nt&&(x=Ct(x)),J&&+x==0&&M!=="+"&&(J=!1),E=(J?M==="("?M:m:M==="-"||M==="("?"":M)+E,p=(b==="s"?Dt[8+ot/3]:"")+p+(J&&M==="("?")":""),we){for(A=-1,St=x.length;++A<St;)if(B=x.charCodeAt(A),48>B||B>57){p=(B===46?h+x.slice(A+1):x.slice(A))+p,x=x.slice(0,A);break}}}at&&!q&&(x=e(x,1/0));var Q=E.length+x.length+p.length,P=Q<X?new Array(X-Q+1).join(F):"";switch(at&&q&&(x=e(P+x,P.length?X-p.length:1/0),P=""),O){case"<":x=E+x+p+P;break;case"=":x=E+P+x+p;break;case"^":x=P.slice(0,Q=P.length>>1)+E+x+p+P.slice(Q);break;default:x=P+E+x+p;break}return l(x)}return Pt.toString=function(){return d+""},Pt}function be(d,F){var O=$t((d=I(d),d.type="f",d)),M=Math.max(-8,Math.min(8,Math.floor($(F)/3)))*3,T=Math.pow(10,-M),q=Dt[8+M/3];return function(X){return O(T*X)+q}}return{format:$t,formatPrefix:be}}var _t,Dt,Ot=u(()=>{i();a();f();s();o();Y();Et();zt();ft();jt();It();st();Lt();_t=Array.prototype.map,Dt=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"]});function ut(t){return W=Ft(t),Tt=W.format,Xt=W.formatPrefix,W}var W,Tt,Xt,Gt=u(()=>{i();a();f();s();o();Ot();ut({thousands:",",grouping:[3],currency:["$",""]})});function $e(t){return Math.max(0,-$(Math.abs(t)))}var Yt=u(()=>{i();a();f();s();o();Y()});function Ne(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor($(e)/3)))*3-$(Math.abs(t)))}var Zt=u(()=>{i();a();f();s();o();Y()});function ke(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,$(e)-$(t))+1}var Kt=u(()=>{i();a();f();s();o();Y()});var Pe=u(()=>{i();a();f();s();o();Gt();ft();Yt();Zt();Kt()});function z(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function L(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}var ct=u(()=>{i();a();f();s();o()});function H(){}function Bt(){return this.rgb().formatHex()}function je(){return this.rgb().formatHex8()}function qe(){return ne(this).formatHsl()}function Jt(){return this.rgb().formatRgb()}function U(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=Se.exec(t))?(r=e[1].length,e=parseInt(e[1],16),r===6?Qt(e):r===3?new g(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):r===8?tt(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):r===4?tt(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=He.exec(t))?new g(e[1],e[2],e[3],1):(e=Re.exec(t))?new g(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Ee.exec(t))?tt(e[1],e[2],e[3],e[4]):(e=ve.exec(t))?tt(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=ze.exec(t))?te(e[1],e[2]/100,e[3]/100,1):(e=Ce.exec(t))?te(e[1],e[2]/100,e[3]/100,e[4]):Ut.hasOwnProperty(t)?Qt(Ut[t]):t==="transparent"?new g(NaN,NaN,NaN,0):null}function Qt(t){return new g(t>>16&255,t>>8&255,t&255,1)}function tt(t,e,r,n){return n<=0&&(t=e=r=NaN),new g(t,e,r,n)}function mt(t){return t instanceof H||(t=U(t)),t?(t=t.rgb(),new g(t.r,t.g,t.b,t.opacity)):new g}function re(t,e,r,n){return arguments.length===1?mt(t):new g(t,e,r,n??1)}function g(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function Vt(){return`#${C(this.r)}${C(this.g)}${C(this.b)}`}function Ae(){return`#${C(this.r)}${C(this.g)}${C(this.b)}${C((isNaN(this.opacity)?1:this.opacity)*255)}`}function Wt(){let t=nt(this.opacity);return`${t===1?"rgb(":"rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${t===1?")":`, ${t})`}`}function nt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function j(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function C(t){return t=j(t),(t<16?"0":"")+t.toString(16)}function te(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new y(t,e,r,n)}function ne(t){if(t instanceof y)return new y(t.h,t.s,t.l,t.opacity);if(t instanceof H||(t=U(t)),!t)return new y;if(t instanceof y)return t;t=t.rgb();var e=t.r/255,r=t.g/255,n=t.b/255,h=Math.min(e,r,n),l=Math.max(e,r,n),c=NaN,m=l-h,w=(l+h)/2;return m?(e===l?c=(r-n)/m+(r<n)*6:r===l?c=(n-e)/m+2:c=(e-r)/m+4,m/=w<.5?l+h:2-l-h,c*=60):m=w>0&&w<1?0:c,new y(c,m,w,t.opacity)}function ie(t,e,r,n){return arguments.length===1?ne(t):new y(t,e,r,n??1)}function y(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function ee(t){return t=(t||0)%360,t<0?t+360:t}function et(t){return Math.max(0,Math.min(1,t||0))}function dt(t,e,r){return(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)*255}var Z,rt,_,K,N,Se,He,Re,Ee,ve,ze,Ce,Ut,gt=u(()=>{i();a();f();s();o();ct();Z=.7,rt=1/Z,_="\\s*([+-]?\\d+)\\s*",K="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",N="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Se=/^#([0-9a-f]{3,8})$/,He=new RegExp(`^rgb\\(${_},${_},${_}\\)$`),Re=new RegExp(`^rgb\\(${N},${N},${N}\\)$`),Ee=new RegExp(`^rgba\\(${_},${_},${_},${K}\\)$`),ve=new RegExp(`^rgba\\(${N},${N},${N},${K}\\)$`),ze=new RegExp(`^hsl\\(${K},${N},${N}\\)$`),Ce=new RegExp(`^hsla\\(${K},${N},${N},${K}\\)$`),Ut={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};z(H,U,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Bt,formatHex:Bt,formatHex8:je,formatHsl:qe,formatRgb:Jt,toString:Jt});z(g,re,L(H,{brighter(t){return t=t==null?rt:Math.pow(rt,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Z:Math.pow(Z,t),new g(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new g(j(this.r),j(this.g),j(this.b),nt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Vt,formatHex:Vt,formatHex8:Ae,formatRgb:Wt,toString:Wt}));z(y,ie,L(H,{brighter(t){return t=t==null?rt:Math.pow(rt,t),new y(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Z:Math.pow(Z,t),new y(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,h=2*r-n;return new g(dt(t>=240?t-240:t+120,h,n),dt(t,h,n),dt(t<120?t+240:t-120,h,n),this.opacity)},clamp(){return new y(ee(this.h),et(this.s),et(this.l),nt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=nt(this.opacity);return`${t===1?"hsl(":"hsla("}${ee(this.h)}, ${et(this.s)*100}%, ${et(this.l)*100}%${t===1?")":`, ${t})`}`}}))});var ae,fe,oe=u(()=>{i();a();f();s();o();ae=Math.PI/180,fe=180/Math.PI});function ce(t){if(t instanceof k)return new k(t.l,t.a,t.b,t.opacity);if(t instanceof S)return me(t);t instanceof g||(t=mt(t));var e=wt(t.r),r=wt(t.g),n=wt(t.b),h=bt((.2225045*e+.7168786*r+.0606169*n)/he),l,c;return e===r&&r===n?l=c=h:(l=bt((.4360747*e+.3850649*r+.1430804*n)/se),c=bt((.0139322*e+.0971045*r+.7141733*n)/xe)),new k(116*h-16,500*(l-h),200*(h-c),t.opacity)}function Mt(t,e,r,n){return arguments.length===1?ce(t):new k(t,e,r,n??1)}function k(t,e,r,n){this.l=+t,this.a=+e,this.b=+r,this.opacity=+n}function bt(t){return t>Ie?Math.pow(t,1/3):t/ue+le}function pt(t){return t>D?t*t*t:ue*(t-le)}function yt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function wt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Le(t){if(t instanceof S)return new S(t.h,t.c,t.l,t.opacity);if(t instanceof k||(t=ce(t)),t.a===0&&t.b===0)return new S(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*fe;return new S(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function de(t,e,r,n){return arguments.length===1?Le(t):new S(t,e,r,n??1)}function S(t,e,r,n){this.h=+t,this.c=+e,this.l=+r,this.opacity=+n}function me(t){if(isNaN(t.h))return new k(t.l,0,0,t.opacity);var e=t.h*ae;return new k(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}var it,se,he,xe,le,D,ue,Ie,ge=u(()=>{i();a();f();s();o();ct();gt();oe();it=18,se=.96422,he=1,xe=.82521,le=4/29,D=6/29,ue=3*D*D,Ie=D*D*D;z(k,Mt,L(H,{brighter(t){return new k(this.l+it*(t??1),this.a,this.b,this.opacity)},darker(t){return new k(this.l-it*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return e=se*pt(e),t=he*pt(t),r=xe*pt(r),new g(yt(3.1338561*e-1.6168667*t-.4906146*r),yt(-.9787684*e+1.9161415*t+.033454*r),yt(.0719453*e-.2289914*t+1.4052427*r),this.opacity)}}));z(S,de,L(H,{brighter(t){return new S(this.h,this.c,this.l+it*(t??1),this.opacity)},darker(t){return new S(this.h,this.c,this.l-it*(t??1),this.opacity)},rgb(){return me(this).rgb()}}))});var _e=u(()=>{i();a();f();s();o();gt();ge()});export{I as a,Tt as b,Xt as c,$e as d,Ne as e,ke as f,Pe as g,U as h,re as i,de as j,_e as k};
