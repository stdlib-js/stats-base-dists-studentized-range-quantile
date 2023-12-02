// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-studentized-range-cdf@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function o(t,e,s){var r,n=function(t){var e,s,r;return i(s=t-.5)<=.425?e=s*(((((((2509.0809287301227*(r=.180625-s*s)+33430.57558358813)*r+67265.7709270087)*r+45921.95393154987)*r+13731.69376550946)*r+1971.5909503065513)*r+133.14166789178438)*r+3.3871328727963665)/(((((((5226.495278852854*r+28729.085735721943)*r+39307.89580009271)*r+21213.794301586597)*r+5394.196021424751)*r+687.1870074920579)*r+42.31333070160091)*r+1):(r=s<0?t:1-t)<=0?e=0:(e=(r=f(-d(r)))<=5?(((((((.0007745450142783414*(r-=1.6)+.022723844989269184)*r+.2417807251774506)*r+1.2704582524523684)*r+3.6478483247632045)*r+5.769497221460691)*r+4.630337846156546)*r+1.4234371107496835)/(((((((1.0507500716444169e-9*r+.0005475938084995345)*r+.015198666563616457)*r+.14810397642748008)*r+.6897673349851)*r+1.6763848301838038)*r+2.053191626637759)*r+1):(((((((2.0103343992922881e-7*(r-=5)+27115555687434876e-21)*r+.0012426609473880784)*r+.026532189526576124)*r+.29656057182850487)*r+1.7848265399172913)*r+5.463784911164114)*r+6.657904643501103)/(((((((20442631033899397e-31*r+1.421511758316446e-7)*r+18463183175100548e-21)*r+.0007868691311456133)*r+.014875361290850615)*r+.1369298809227358)*r+.599832206555888)*r+1),s<0&&(e=-e)),e}(.5+.5*t);return e<120&&(n+=(n*n*n+n)/e/4),r=.8843-.2368*n,e<120&&(r-=1.214/e+1.208*n/e),n*(r*d(s-1)+1.4142)}function a(t,d,f,m){var a,l,u,j,p,v,c,h;if(r(d)||r(f)||d<2||f<2)return NaN;if(r(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return n;if(void 0===m)m=1;else if(!e(m))return NaN;for(j=o(t,f,d);(v=s(j,d,f,m))>t&&(j-=.4),j<0&&(j=.1),!(v<t););if(a=j,i(v-t)<1e-8)return NaN;for(p=j+.5;(c=s(p,d,f,m))<t&&(p+=.4),p<0&&(p=1),!(c>t););for(p<j&&(p=j+.01),h=2;h<=28;)(u=(c=s(p,d,f,m))-t)-(l=v-t)!=0&&(a=(u*j-l*p)/(u-l)),i(l)<i(u)?(i(v-t)<5e-8&&(h=30),v=s(j=a,d,f,m)):(j=p,v=c,p=a),h+=1;return a}function l(t,d,f){if(r(t)||r(d)||t<2||d<2)return m(NaN);if(void 0===f)f=1;else if(!e(f))return NaN;return function(e){var m,a,l,u,j,p,v,c;if(r(e)||e<0||e>1)return NaN;if(0===e)return 0;if(1===e)return n;u=o(e,d,t);for(;(p=s(u,t,d,f))>e&&(u-=.4),u<0&&(u=.1),!(p<e););if(m=u,i(p-e)<1e-8)return NaN;j=u+.5;for(;(v=s(j,t,d,f))<e&&(j+=.4),j<0&&(j=1),!(v>e););j<u&&(j=u+.01);c=2;for(;c<=28;)v=s(j,t,d,f),(l=v-e)-(a=p-e)!=0&&(m=(l*u-a*j)/(l-a)),i(a)<i(l)?(i(p-e)<5e-8&&(c=30),p=s(u=m,t,d,f)):(u=j,p=v,j=m),c+=1;return m}}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map