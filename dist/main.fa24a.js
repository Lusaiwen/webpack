(()=>{var t={648:()=>{Math.random()}},n={};function r(o){var e=n[o];if(void 0!==e)return e.exports;var c=n[o]={exports:{}};return t[o](c,c.exports,r),c.exports}(()=>{"use strict";const t=function(t,n,r){var o=-1,e=t.length;n<0&&(n=-n>e?0:e+n),(r=r>e?e:r)<0&&(r+=e),e=n>r?0:r-n>>>0,n>>>=0;for(var c=Array(e);++o<e;)c[o]=t[o+n];return c},n="object"==typeof global&&global&&global.Object===Object&&global;var o="object"==typeof self&&self&&self.Object===Object&&self;const e=(n||o||Function("return this")()).Symbol;var c=Object.prototype,u=c.hasOwnProperty,l=c.toString,a=e?e.toStringTag:void 0;var i=Object.prototype.toString;var f=e?e.toStringTag:void 0;const s=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?function(t){var n=u.call(t,a),r=t[a];try{t[a]=void 0;var o=!0}catch(t){}var e=l.call(t);return o&&(n?t[a]=r:delete t[a]),e}(t):function(t){return i.call(t)}(t)},v=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},b=function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){if(!v(t))return!1;var n=s(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}(t)};var g=/^(?:0|[1-9]\d*)$/;const y=function(t,n,r){if(!v(r))return!1;var o=typeof n;return!!("number"==o?b(r)&&function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&g.test(t))&&t>-1&&t%1==0&&t<n}(n,r.length):"string"==o&&n in r)&&function(t,n){return t===n||t!=t&&n!=n}(r[n],t)};var p=/\s/;var j=/^\s+/;const d=function(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&p.test(t.charAt(n)););return n}(t)+1).replace(j,""):t};var h=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,O=/^0o[0-7]+$/i,x=parseInt;const S=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==s(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=d(t);var r=m.test(t);return r||O.test(t)?x(t.slice(2),r?2:8):h.test(t)?NaN:+t};const N=function(t){var n=function(t){return t?1/0===(t=S(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),r=n%1;return n==n?r?n-r:n:0};var A=Math.ceil,F=Math.max;var M;r(648),console.log((1,2,console.log("add"),3)),console.log((console.log("random"),Math.random())),console.log((M=[2,34,45,5,6],2,console.log("chunk"),void function(n,r,o){r=(o?y(n,r,o):void 0===r)?1:F(N(r),0);var e=null==n?0:n.length;if(!e||r<1)return[];for(var c=0,u=0,l=Array(A(e/r));c<e;)l[u++]=t(n,c,c+=r)}(M,2)))})()})();