import{b as j,h as global,i as E,j as A,k,m as O,p as C}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";function K(){if(z)return I;z=!0;var e=I={},u,t;function b(){throw new Error("setTimeout has not been defined")}function L(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?u=setTimeout:u=b}catch{u=b}try{typeof clearTimeout=="function"?t=clearTimeout:t=L}catch{t=L}})();function _(r){if(u===setTimeout)return setTimeout(r,0);if((u===b||!u)&&setTimeout)return u=setTimeout,setTimeout(r,0);try{return u(r,0)}catch{try{return u.call(null,r,0)}catch{return u.call(this||g,r,0)}}}function H(r){if(t===clearTimeout)return clearTimeout(r);if((t===L||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(r);try{return t(r)}catch{try{return t.call(null,r)}catch{return t.call(this||g,r)}}}var c=[],T=!1,d,x=-1;function J(){!T||!d||(T=!1,d.length?c=d.concat(c):x=-1,c.length&&N())}function N(){if(!T){var r=_(J);T=!0;for(var s=c.length;s;){for(d=c,c=[];++x<s;)d&&d[x].run();x=-1,s=c.length}d=null,T=!1,H(r)}}e.nextTick=function(r){var s=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)s[v-1]=arguments[v];c.push(new U(r,s)),c.length===1&&!T&&_(N)};function U(r,s){(this||g).fun=r,(this||g).array=s}U.prototype.run=function(){(this||g).fun.apply(null,(this||g).array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={};function a(){}return e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.prependListener=a,e.prependOnceListener=a,e.listeners=function(r){return[]},e.binding=function(r){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(r){throw new Error("process.chdir is not supported")},e.umask=function(){return 0},I}var I,z,g,n,M=j(()=>{E();A();k();C();O();I={},z=!1,g=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global;n=K();n.platform="browser";n.addListener;n.argv;n.binding;n.browser;n.chdir;n.cwd;n.emit;n.env;n.listeners;n.nextTick;n.off;n.on;n.once;n.prependListener;n.prependOnceListener;n.removeAllListeners;n.removeListener;n.title;n.umask;n.version;n.versions});function Q(){throw new Error("setTimeout has not been defined")}function S(){throw new Error("clearTimeout has not been defined")}function F(e){if(f===setTimeout)return setTimeout(e,0);if((f===Q||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch{try{return f.call(null,e,0)}catch{return f.call(this||y,e,0)}}}function P(){w&&p&&(w=!1,p.length?m=p.concat(m):q=-1,m.length&&G())}function G(){if(!w){var e=F(P);w=!0;for(var u=m.length;u;){for(p=m,m=[];++q<u;)p&&p[q].run();q=-1,u=m.length}p=null,w=!1,function(t){if(h===clearTimeout)return clearTimeout(t);if((h===S||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{h(t)}catch{try{return h.call(null,t)}catch{return h.call(this||y,t)}}}(e)}}function B(e,u){(this||y).fun=e,(this||y).array=u}function l(){}var D,f,h,y,i,p,m,w,q,o,R=j(()=>{E();A();k();C();O();y=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global,i=D={};(function(){try{f=typeof setTimeout=="function"?setTimeout:Q}catch{f=Q}try{h=typeof clearTimeout=="function"?clearTimeout:S}catch{h=S}})();m=[],w=!1,q=-1;i.nextTick=function(e){var u=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)u[t-1]=arguments[t];m.push(new B(e,u)),m.length!==1||w||F(G)},B.prototype.run=function(){(this||y).fun.apply(null,(this||y).array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=l,i.addListener=l,i.once=l,i.off=l,i.removeListener=l,i.removeAllListeners=l,i.emit=l,i.prependListener=l,i.prependOnceListener=l,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};o=D;o.addListener;o.argv;o.binding;o.browser;o.chdir;o.cwd;o.emit;o.env;o.listeners;o.nextTick;o.off;o.on;o.once;o.prependListener;o.prependOnceListener;o.removeAllListeners;o.removeListener;o.title;o.umask;o.version;o.versions});export{n as a,M as b,o as c,R as d};
