!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicScroll=t()}}(function(){return function t(n,e,r){function o(i,c){if(!e[i]){if(!n[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var f=e[i]={exports:{}};n[i][0].call(f.exports,function(t){var e=n[i][1][t];return o(e||t)},f,f.exports,t,n,e,r)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,n,e){"use strict";n.exports=function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},{}],2:[function(t,n,e){"use strict";n.exports=function(t){var n=1.70158;return t*t*((n+1)*t-n)}},{}],3:[function(t,n,e){"use strict";n.exports=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1}},{}],4:[function(t,n,e){"use strict";var r=t("./bounce-out");n.exports=function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,n,e){"use strict";var r=t("./bounce-out");n.exports=function(t){return 1-r(1-t)}},{"./bounce-out":6}],6:[function(t,n,e){"use strict";n.exports=function(t){var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,n,e){"use strict";n.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,n,e){"use strict";n.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,n,e){"use strict";n.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,n,e){"use strict";n.exports=function(t){return t*t*t}},{}],12:[function(t,n,e){"use strict";n.exports=function(t){var n=t-1;return n*n*n+1}},{}],13:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,n,e){"use strict";n.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,n,e){"use strict";n.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,n,e){"use strict";n.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,n,e){"use strict";n.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,n,e){"use strict";n.exports=function(t){return t}},{}],21:[function(t,n,e){"use strict";n.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,n,e){"use strict";n.exports=function(t){return t*t}},{}],23:[function(t,n,e){"use strict";n.exports=function(t){return-t*(t-2)}},{}],24:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,n,e){"use strict";n.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,n,e){"use strict";n.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,n,e){"use strict";n.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,n,e){"use strict";n.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,n,e){"use strict";n.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,n,e){"use strict";n.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,n,e){"use strict";n.exports=function(t){var n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}},{}],32:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,n,e){(function(t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=200,u="__lodash_hash_undefined__",i=9007199254740991,c="[object Arguments]",a="[object Boolean]",s="[object Date]",f="[object Function]",l="[object GeneratorFunction]",p="[object Map]",d="[object Number]",h="[object Object]",v="[object Promise]",b="[object RegExp]",y="[object Set]",_="[object String]",m="[object Symbol]",w="[object WeakMap]",g="[object ArrayBuffer]",x="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",M="[object Int8Array]",q="[object Int16Array]",I="[object Int32Array]",E="[object Uint8Array]",A="[object Uint8ClampedArray]",k="[object Uint16Array]",P="[object Uint32Array]",S=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,D={};D[c]=D["[object Array]"]=D[g]=D[x]=D[a]=D[s]=D[j]=D[O]=D[M]=D[q]=D[I]=D[p]=D[d]=D[h]=D[b]=D[y]=D[_]=D[m]=D[E]=D[A]=D[k]=D[P]=!0,D["[object Error]"]=D[f]=D[w]=!1;var U="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,z="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,T=U||z||Function("return this")(),B="object"==(void 0===e?"undefined":r(e))&&e&&!e.nodeType&&e,N=B&&"object"==(void 0===n?"undefined":r(n))&&n&&!n.nodeType&&n,C=N&&N.exports===B;function L(t,n){return t.set(n[0],n[1]),t}function R(t,n){return t.add(n),t}function H(t,n,e,r){var o=-1,u=t?t.length:0;for(r&&u&&(e=t[++o]);++o<u;)e=n(e,t[o],o,t);return e}function V(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function W(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function G(t,n){return function(e){return t(n(e))}}function J(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var K,Q=Array.prototype,X=Function.prototype,Y=Object.prototype,Z=T["__core-js_shared__"],tt=(K=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",nt=X.toString,et=Y.hasOwnProperty,rt=Y.toString,ot=RegExp("^"+nt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=C?T.Buffer:void 0,it=T.Symbol,ct=T.Uint8Array,at=G(Object.getPrototypeOf,Object),st=Object.create,ft=Y.propertyIsEnumerable,lt=Q.splice,pt=Object.getOwnPropertySymbols,dt=ut?ut.isBuffer:void 0,ht=G(Object.keys,Object),vt=Nt(T,"DataView"),bt=Nt(T,"Map"),yt=Nt(T,"Promise"),_t=Nt(T,"Set"),mt=Nt(T,"WeakMap"),wt=Nt(Object,"create"),gt=Vt(vt),xt=Vt(bt),jt=Vt(yt),Ot=Vt(_t),Mt=Vt(mt),qt=it?it.prototype:void 0,It=qt?qt.valueOf:void 0;function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function At(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function kt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Pt(t){this.__data__=new At(t)}function St(t,n){var e,o,u,i=Gt(t)||(u=o=e=t)&&"object"==(void 0===u?"undefined":r(u))&&Jt(o)&&et.call(e,"callee")&&(!ft.call(e,"callee")||rt.call(e)==c)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],a=i.length,s=!!a;for(var f in t)!n&&!et.call(t,f)||s&&("length"==f||Rt(f,a))||i.push(f);return i}function $t(t,n,e){var r=t[n];et.call(t,n)&&Wt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Ft(t,n){for(var e=t.length;e--;)if(Wt(t[e][0],n))return e;return-1}function Dt(t,n,e,r,o,u,i){var v;if(r&&(v=u?r(t,o,u,i):r(t)),void 0!==v)return v;if(!Xt(t))return t;var w,$,F,U,z,T,B=Gt(t);if(B){if(v=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&et.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,v)}else{var N=Lt(t),C=N==f||N==l;if(Kt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(N==h||N==c||C&&!u){if(V(t))return u?t:{};if(v="function"!=typeof(z=C?{}:t).constructor||Ht(z)?{}:Xt(T=at(z))?st(T):{},!n)return w=t,U=t,$=(F=v)&&Tt(U,Yt(U),F),Tt(w,Ct(w),$)}else{if(!D[N])return u?t:{};v=function(t,n,e,r){var o=t.constructor;switch(n){case g:return zt(t);case a:case s:return new o(+t);case x:return F=t,D=r?zt(F.buffer):F.buffer,new F.constructor(D,F.byteOffset,F.byteLength);case j:case O:case M:case q:case I:case E:case A:case k:case P:return w=t,$=r?zt(w.buffer):w.buffer,new w.constructor($,w.byteOffset,w.length);case p:return h=t,v=e,H(r?v(W(h),!0):W(h),L,new h.constructor);case d:case _:return new o(t);case b:return(l=new(f=t).constructor(f.source,S.exec(f))).lastIndex=f.lastIndex,l;case y:return i=t,c=e,H(r?c(J(i),!0):J(i),R,new i.constructor);case m:return u=t,It?Object(It.call(u)):{}}var u;var i,c;var f,l;var h,v;var w,$;var F,D}(t,N,Dt,n)}}i||(i=new Pt);var G,K,Q,X=i.get(t);if(X)return X;if(i.set(t,v),!B)var Y=e?(K=Ct,Q=Yt(G=t),Gt(G)?Q:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(Q,K(G))):Yt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(Y||t,function(o,u){Y&&(o=t[u=o]),$t(v,u,Dt(o,n,e,r,u,t,i))}),v}function Ut(t){return!(!Xt(t)||(n=t,tt&&tt in n))&&(Qt(t)||V(t)?ot:$).test(Vt(t));var n}function zt(t){var n=new t.constructor(t.byteLength);return new ct(n).set(new ct(t)),n}function Tt(t,n,e,r){e||(e={});for(var o=-1,u=n.length;++o<u;){var i=n[o],c=r?r(e[i],t[i],i,e,t):void 0;$t(e,i,void 0===c?t[i]:c)}return e}function Bt(t,n){var e,o,u=t.__data__;return("string"==(o=void 0===(e=n)?"undefined":r(e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function Nt(t,n){var e,r,o=(r=n,null==(e=t)?void 0:e[r]);return Ut(o)?o:void 0}Et.prototype.clear=function(){this.__data__=wt?wt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var n=this.__data__;if(wt){var e=n[t];return e===u?void 0:e}return et.call(n,t)?n[t]:void 0},Et.prototype.has=function(t){var n=this.__data__;return wt?void 0!==n[t]:et.call(n,t)},Et.prototype.set=function(t,n){return this.__data__[t]=wt&&void 0===n?u:n,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var n=this.__data__,e=Ft(n,t);return!(e<0||(e==n.length-1?n.pop():lt.call(n,e,1),0))},At.prototype.get=function(t){var n=this.__data__,e=Ft(n,t);return e<0?void 0:n[e][1]},At.prototype.has=function(t){return Ft(this.__data__,t)>-1},At.prototype.set=function(t,n){var e=this.__data__,r=Ft(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},kt.prototype.clear=function(){this.__data__={hash:new Et,map:new(bt||At),string:new Et}},kt.prototype.delete=function(t){return Bt(this,t).delete(t)},kt.prototype.get=function(t){return Bt(this,t).get(t)},kt.prototype.has=function(t){return Bt(this,t).has(t)},kt.prototype.set=function(t,n){return Bt(this,t).set(t,n),this},Pt.prototype.clear=function(){this.__data__=new At},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,n){var e=this.__data__;if(e instanceof At){var r=e.__data__;if(!bt||r.length<o-1)return r.push([t,n]),this;e=this.__data__=new kt(r)}return e.set(t,n),this};var Ct=pt?G(pt,Object):function(){return[]},Lt=function(t){return rt.call(t)};function Rt(t,n){return!!(n=null==n?i:n)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<n}function Ht(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||Y)}function Vt(t){if(null!=t){try{return nt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,n){return t===n||t!=t&&n!=n}(vt&&Lt(new vt(new ArrayBuffer(1)))!=x||bt&&Lt(new bt)!=p||yt&&Lt(yt.resolve())!=v||_t&&Lt(new _t)!=y||mt&&Lt(new mt)!=w)&&(Lt=function(t){var n=rt.call(t),e=n==h?t.constructor:void 0,r=e?Vt(e):void 0;if(r)switch(r){case gt:return x;case xt:return p;case jt:return v;case Ot:return y;case Mt:return w}return n});var Gt=Array.isArray;function Jt(t){return null!=t&&("number"==typeof(n=t.length)&&n>-1&&n%1==0&&n<=i)&&!Qt(t);var n}var Kt=dt||function(){return!1};function Qt(t){var n=Xt(t)?rt.call(t):"";return n==f||n==l}function Xt(t){var n=void 0===t?"undefined":r(t);return!!t&&("object"==n||"function"==n)}function Yt(t){return Jt(t)?St(t):function(t){if(!Ht(t))return ht(t);var n=[];for(var e in Object(t))et.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}n.exports=function(t){return Dt(t,!0,!0)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],34:[function(t,n,e){"use strict";n.exports=function(t,n){n||(n=[0,""]),t=String(t);var e=parseFloat(t,10);return n[0]=e,n[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",n}},{}],35:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=void 0;var r=i(t("parse-unit")),o=i(t("lodash.clonedeep")),u=i(t("eases"));function i(t){return t&&t.__esModule?t:{default:t}}var c,a,s,f=[],l=function(){return(document.scrollingElement||document.documentElement).scrollTop},p=function(t){return!1===isNaN((0,r.default)(t)[0])},d=function(t){var n=(0,r.default)(t);return{value:n[0],unit:n[1]}},h=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},v=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,o=n.getBoundingClientRect(),u=t.match(/^[a-z]+/)[0],i=t.match(/[a-z]+$/)[0],c=0;return"top"===i&&(c-=0),"middle"===i&&(c-=r/2),"bottom"===i&&(c-=r),"top"===u&&(c+=o.top+e),"middle"===u&&(c+=o.top+e+o.height/2),"bottom"===u&&(c+=o.top+e+o.height),c+"px"},b=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(),e=t.getData(),r=e.to.value-e.from.value,o=(n-e.from.value)/(r/100),u=Math.min(Math.max(o,0),100),i=!0===e.direct?e.elem:document.documentElement,c=Object.keys(e.props).reduce(function(t,n){var r=e.props[n],o=r.from.unit||r.to.unit,i=r.from.value-r.to.value,c=r.timing(u/100),a=r.from.value-i*c,s=Math.round(100*a)/100;return t[n]=s+o,t},{}),a=o<0||o>100;return!0===(o>=0&&o<=100)&&e.inside(t,o,c),!0===a&&e.outside(t,o,c),{elem:i,props:c}},y=function(t,n){Object.keys(n).forEach(function(e){return r=t,o={key:e,value:n[e]},void r.style.setProperty(o.key,o.value);var r,o})};e.create=function(t){var n=null,e=!1,r={isActive:function(){return e},getData:function(){return n},calculate:function(){n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=(0,o.default)(t)).from)throw new Error("Missing property `from`");if(null==t.to)throw new Error("Missing property `to`");if(null==t.inside&&(t.inside=function(){}),null==t.outside&&(t.outside=function(){}),!0===t.direct&&null==t.elem)throw new Error("Property `elem` required when `direct` is true");if(!0!==t.direct&&(t.direct=!1),!1!==t.track&&(t.track=!0),"function"!=typeof t.inside)throw new Error("Property `inside` must be a function");if("function"!=typeof t.outside)throw new Error("Property `outside` must be a function");if(null==t.elem){if(!1===p(t.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(t.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===h(t.from)&&(t.from=v(t.from,t.elem)),!0===h(t.to)&&(t.to=v(t.to,t.elem));return t.from=d(t.from),t.to=d(t.to),null==t.props&&(t.props={}),Object.keys(t.props).forEach(function(n){var e=t.props[n];if(!1===p(e.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(e.to))throw new Error("Property `from` of prop must be a absolute value");if(e.from=d(e.from),e.to=d(e.to),"string"==typeof e.timing&&null==u.default[e.timing])throw new Error("Unknown timing for property `timing` of prop");null==e.timing&&(e.timing=u.default.linear),"string"==typeof e.timing&&(e.timing=u.default[e.timing])}),t}(t)},update:function(){var t=b(r),n=t.elem,e=t.props;return y(n,e),e},start:function(){e=!0},stop:function(){e=!1},destroy:function(){f[i]=void 0}},i=f.push(r)-1;return r.calculate(),r};!function t(n,e){var r=function(){requestAnimationFrame(function(){return t(n,e)})},o=f.filter(function(t){return null!=t&&t.isActive()});if(0===o.length)return r();var u=l();if(e===u)return r();e=u,o.map(function(t){return b(t,u)}).forEach(function(t){var n=t.elem,e=t.props;return y(n,e)}),r()}(),window.addEventListener("resize",(c=function(){f.filter(function(t){return null!=t&&t.getData().track}).forEach(function(t){t.calculate(),t.update()})},a=50,s=null,function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];clearTimeout(s),s=setTimeout(function(){return c.apply(void 0,n)},a)}))},{eases:19,"lodash.clonedeep":33,"parse-unit":34}]},{},[35])(35)});
// coin
var market=$(".header-widget");function showPopularCurrencies(){var xhr=new XMLHttpRequest();xhr.open("GET","https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&order=market_cap_desc&per_page=5&page=1&sparkline=false");xhr.setRequestHeader("accept","application/json");xhr.send();xhr.onload=function(){if(xhr.status==200){var data=JSON.parse(this.response);displayCoins(data)}else{coin.innerHTML="价格数据载入出错！"}}}function displayCoins(data){var arr=data;arr.forEach(function(coins){var div=createCard(coins);market.append(div)});function createCard(coins){var div=document.createElement("div");div.setAttribute("class","header-block "+coins.symbol);var coin=document.createElement("div");coin.innerHTML="<img src='/styles/westyle/img/"+coins.symbol+".svg'><b>"+coins.symbol.toUpperCase()+"</b>";var h24=document.createElement("div");h24.innerHTML="<span class='badge'>24H</span>";var price=document.createElement("div");price.innerHTML="¥ "+Math.round(100*coins.current_price)/100;var priceChange=document.createElement("div");priceChange.innerHTML="<span>"+Math.round(100*coins.price_change_percentage_24h)/100+"%</span>";if(coins.price_change_percentage_24h>0){priceChange.className="changeup"}else{priceChange.className="changedown"}div.append(coin,h24,price,priceChange);return div}};function coinUnavailable(){console.log("Coin not available! Please try again!");h1=document.createElement("h1");h1.innerText="Coin not available! Please try again...";h1.setAttribute("class","sub-heading");document.getElementById("coinResult").append(h1)}
// smoothscroll
function C(){if(document.body){var a=document.body,b=document.documentElement,d=window.innerHeight,e=a.scrollHeight;n=0<=document.compatMode.indexOf("CSS")?b:a;u=a;f.keyboardSupport&&window.addEventListener("keydown",K,!1);D=!0;if(top!=self)E=!0;else if(e>d&&(a.offsetHeight<=d||b.offsetHeight<=d)){var c=!1;setTimeout(function(){c||b.scrollHeight==document.height||(c=!0,setTimeout(function(){b.style.height=document.height+"px";c=!1},500))},10);n.offsetHeight<=d&&(d=document.createElement("div"),d.style.clear="both",a.appendChild(d))}f.fixedBackground||(a.style.backgroundAttachment="scroll",b.style.backgroundAttachment="scroll")}}function F(a,b,d,e){e||(e=1E3);L(b,d);if(1!=f.accelerationMax){var c=+new Date-x;c<f.accelerationDelta&&(c=(1+30/c)/2,1<c&&(c=Math.min(c,f.accelerationMax),b*=c,d*=c));x=+new Date}p.push({x:b,y:d,lastX:0>b?.99:-.99,lastY:0>d?.99:-.99,start:+new Date});if(!y){var g=a===document.body,h=function(c){c=+new Date;for(var q=0,r=0,t=0;t<p.length;t++){var k=p[t],l=c-k.start,n=l>=f.animationTime,m=n?1:l/f.animationTime;f.pulseAlgorithm&&(l=m,1<=l?m=1:0>=l?m=0:(1==f.pulseNormalize&&(f.pulseNormalize/=G(1)),m=G(l)));l=k.x*m-k.lastX>>0;m=k.y*m-k.lastY>>0;q+=l;r+=m;k.lastX+=l;k.lastY+=m;n&&(p.splice(t,1),t--)}g?window.scrollBy(q,r):(q&&(a.scrollLeft+=q),r&&(a.scrollTop+=r));b||d||(p=[]);p.length?H(h,a,e/f.frameRate+1):y=!1};H(h,a,0);y=!0}}function M(a){D||C();var b=a.target,d=I(b);if(!d||a.defaultPrevented||"embed"===(u.nodeName||"").toLowerCase()||"embed"===(b.nodeName||"").toLowerCase()&&/\.pdf/i.test(b.src))return!0;var b=a.wheelDeltaX||0,e=a.wheelDeltaY||0;b||e||(e=a.wheelDelta||0);var c;if(c=!f.touchpadSupport)if(c=e){c=Math.abs(c);h.push(c);h.shift();clearTimeout(N);c=h[0]==h[1]&&h[1]==h[2];var g=z(h[0],120)&&z(h[1],120)&&z(h[2],120);c=!(c||g)}else c=void 0;if(c)return!0;1.2<Math.abs(b)&&(b*=f.stepSize/120);1.2<Math.abs(e)&&(e*=f.stepSize/120);F(d,-b,-e);a.preventDefault()}function K(a){var b=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==g.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||d||"button"===(b.nodeName||"").toLowerCase()&&a.keyCode===g.spacebar)return!0;var e;e=b=0;var d=I(u),c=d.clientHeight;d==document.body&&(c=window.innerHeight);switch(a.keyCode){case g.up:e=-f.arrowScroll;break;case g.down:e=f.arrowScroll;break;case g.spacebar:e=a.shiftKey?1:-1;e=-e*c*.9;break;case g.pageup:e=.9*-c;break;case g.pagedown:e=.9*c;break;case g.home:e=-d.scrollTop;break;case g.end:c=d.scrollHeight-d.scrollTop-c;e=0<c?c+10:0;break;case g.left:b=-f.arrowScroll;break;case g.right:b=f.arrowScroll;break;default:return!0}F(d,b,e);a.preventDefault()}function O(a){u=a.target}function A(a,b){for(var d=a.length;d--;)B[J(a[d])]=b;return b}function I(a){var b=[],d=n.scrollHeight;do{var e=B[J(a)];if(e)return A(b,e);b.push(a);if(d===a.scrollHeight){if(!E||n.clientHeight+10<d)return A(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return A(b,a)}while(a=a.parentNode)}function L(a,b){a=0<a?1:-1;b=0<b?1:-1;if(v.x!==a||v.y!==b)v.x=a,v.y=b,p=[],x=0}function z(a,b){return Math.floor(a/b)==a/b}function G(a){var b;a*=f.pulseScale;1>a?b=a-(1-Math.exp(-a)):(b=Math.exp(-1),--a,a=1-Math.exp(-a),b+=a*(1-b));return b*f.pulseNormalize}var w={frameRate:150,animationTime:600,stepSize:120,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:50,accelerationMax:1,keyboardSupport:!0,arrowScroll:120,touchpadSupport:!0,fixedBackground:!0,excluded:""},f=w,E=!1,v={x:0,y:0},D=!1,n=document.documentElement,u,h=[120,120,120],g={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},f=w,p=[],y=!1,x=+new Date,B={};setInterval(function(){B={}},1E4);var J=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),N,H=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,d){window.setTimeout(a,d||1E3/60)}}(),w=/chrome/i.test(window.navigator.userAgent);"onmousewheel"in document&&w&&(window.addEventListener("mousedown",O,!1),window.addEventListener("mousewheel",M,{passive:false}),window.addEventListener("load",C,!1));
C();
