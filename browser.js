// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,c,s,l,p,v,y,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(j(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var I=Object.prototype,F=I.toString,O=I.__defineGetter__,T=I.__defineSetter__,V=I.__lookupGetter__,P=I.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||P.call(r,e)?(t=r.__proto__,r.__proto__=I,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),o&&T&&T.call(r,e,n.set),r};function G(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return W&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,R="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof R?R.toStringTag:"",q=C()?function(r){var e,n,t,i,a;if(null==r)return L.call(r);n=r[Z],a=Z,e=null!=(i=r)&&M.call(i,a);try{r[Z]=void 0}catch(e){return L.call(r)}return t=L.call(r),e?r[Z]=n:delete r[Z],t}:function(r){return L.call(r)},X=Number,Y=X.prototype.toString,z=C();function B(r){return"object"==typeof r&&(r instanceof X||(z?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function D(r){return H(r)||B(r)}G(D,"isPrimitive",H),G(D,"isObject",B);var J=Number.POSITIVE_INFINITY,K=X.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return Q(r)===r}function er(r){return r<J&&r>K&&rr(r)}function nr(r){return H(r)&&er(r)}function tr(r){return B(r)&&er(r.valueOf())}function ir(r){return nr(r)||tr(r)}function ar(r){return nr(r)&&r>0}function or(r){return tr(r)&&r.valueOf()>0}function ur(r){return ar(r)||or(r)}function fr(r){return r!=r}function cr(r){return Math.abs(r)}function sr(r){return rr(r/2)}function lr(r){return sr(r>0?r-1:r+1)}function pr(r){return r===J||r===K}G(ir,"isPrimitive",nr),G(ir,"isObject",tr),G(ur,"isPrimitive",ar),G(ur,"isObject",or);var vr,yr=Math.sqrt,dr="function"==typeof Uint32Array,gr="function"==typeof Uint32Array?Uint32Array:null,hr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(dr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,br=vr,mr="function"==typeof Float64Array,Nr="function"==typeof Float64Array?Float64Array:null,Ar="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,NaN]),n=e,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er=wr,Sr="function"==typeof Uint8Array,Ur="function"==typeof Uint8Array?Uint8Array:null,jr="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,256,257]),n=e,r=(Sr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var kr,xr=_r,Ir="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Or="function"==typeof Uint16Array?Uint16Array:void 0;kr=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ir&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Tr,Vr={uint16:kr,uint8:xr};(Tr=new Vr.uint16(1))[0]=4660;var Pr,$r,Gr=52===new Vr.uint8(Tr.buffer)[0];!0===Gr?(Pr=1,$r=0):(Pr=0,$r=1);var Hr={HIGH:Pr,LOW:$r},Wr=new Er(1),Cr=new br(Wr.buffer),Lr=Hr.HIGH,Mr=Hr.LOW;function Rr(r,e,n,t){return Wr[0]=r,e[t]=Cr[Lr],e[t+n]=Cr[Mr],e}function Zr(r){return Rr(r,[0,0],1,0)}G(Zr,"assign",Rr);var qr=!0===Gr?0:1,Xr=new Er(1),Yr=new br(Xr.buffer);function zr(r,e){return Xr[0]=r,Yr[qr]=e>>>0,Xr[0]}function Br(r){return 0|r}var Dr,Jr,Kr=2147483647,Qr=2147483648,re=!0===Gr?1:0,ee=new Er(1),ne=new br(ee.buffer);function te(r){return ee[0]=r,ne[re]}!0===Gr?(Dr=1,Jr=0):(Dr=0,Jr=1);var ie={HIGH:Dr,LOW:Jr},ae=new Er(1),oe=new br(ae.buffer),ue=ie.HIGH,fe=ie.LOW;function ce(r,e){return oe[ue]=r,oe[fe]=e,ae[0]}var se=[0,0];function le(r,e){var n,t;return Zr.assign(r,se,1,0),n=se[0],n&=Kr,t=te(e),ce(n|=t&=Qr,se[1])}var pe=1072693247,ve=1e300,ye=1e-300,de=!0===Gr?1:0,ge=new Er(1),he=new br(ge.buffer);function we(r,e){return ge[0]=r,he[de]=e>>>0,ge[0]}var be=1023,me=1048575,Ne=1048576,Ae=1072693248,_e=536870912,Ee=524288,Se=20,Ue=9007199254740992,je=.9617966939259756,ke=.9617967009544373,xe=-7.028461650952758e-9,Ie=[1,1.5],Fe=[0,.5849624872207642],Oe=[0,1.350039202129749e-8],Te=1.4426950408889634,Ve=1.4426950216293335,Pe=1.9259629911266175e-8,$e=1023,Ge=-1023,He=-1074,We=22250738585072014e-324,Ce=4503599627370496;function Le(r,e,n,t){return fr(r)||pr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&cr(r)<We?(e[t]=r*Ce,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}G((function(r){return Le(r,[0,0],1,0)}),"assign",Le);var Me=2146435072,Re=2220446049250313e-31,Ze=2148532223,qe=[0,0],Xe=[0,0];function Ye(r,e){var n,t;return 0===e||0===r||fr(r)||pr(r)?r:(Le(r,qe,1,0),r=qe[0],e+=qe[1],e+=function(r){var e=te(r);return(e=(e&Me)>>>20)-be|0}(r),e<He?le(0,r):e>$e?r<0?K:J:(e<=Ge?(e+=52,t=Re):t=1,Zr.assign(r,Xe,1,0),n=Xe[0],n&=Ze,t*ce(n|=e+be<<20,Xe[1])))}var ze=.6931471805599453,Be=1048575,De=1048576,Je=1071644672,Ke=20,Qe=.6931471824645996,rn=-1.904654299957768e-9,en=1072693247,nn=1105199104,tn=1139802112,an=1083179008,on=1072693248,un=1083231232,fn=3230714880,cn=31,sn=1e300,ln=1e-300,pn=8008566259537294e-32,vn=[0,0],yn=[0,0];function dn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,y,d;if(fr(r)||fr(e))return NaN;if(Zr.assign(e,vn,1,0),o=vn[0],0===vn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return yr(r);if(-.5===e)return 1/yr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(pr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(e===J)?0:J}(r,e)}if(Zr.assign(r,vn,1,0),a=vn[0],0===vn[1]){if(0===a)return function(r,e){return e===K?J:e===J?0:e>0?lr(e)?r:0:lr(e)?le(J,r):J}(r,e);if(1===r)return 1;if(-1===r&&lr(e))return-1;if(pr(r))return r===K?dn(-0,-e):e<0?0:J}if(r<0&&!1===rr(e))return(r-r)/(r-r);if(i=cr(r),n=a&Kr|0,t=o&Kr|0,f=o>>>cn|0,u=(u=a>>>cn|0)&&lr(e)?-1:1,t>nn){if(t>tn)return function(r,e){return(te(r)&Kr)<=pe?e<0?ve*ve:ye*ye:e>0?ve*ve:ye*ye}(r,e);if(n<en)return 1===f?u*sn*sn:u*ln*ln;if(n>on)return 0===f?u*sn*sn:u*ln*ln;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Pe-a*Te)-((t=zr(t=(o=Ve*i)+u,0))-o),r[0]=t,r[1]=n,r}(yn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,d,g,h,w,b,m,N,A,_;return m=0,n<Ne&&(m-=53,n=te(e*=Ue)),m+=(n>>Se)-be|0,n=(N=n&me|0)|Ae|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=Ne),o=zr(i=(w=(e=we(e,n))-(c=Ie[A]))*(b=1/(e+c)),0),t=(n>>1|_e)+Ee,f=we(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=zr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=zr(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=ke*l,d=(v=xe*l+(b-(l-w))*je+Oe[A])-((y=zr(y=p+v+(s=Fe[A])+(g=m),0))-g-s-p),r[0]=y,r[1]=d,r}(yn,i,n);if(v=(l=(e-(c=zr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Zr.assign(v,vn,1,0),y=Br(vn[0]),d=Br(vn[1]),y>=an){if(0!=(y-an|d))return u*sn*sn;if(l+pn>v-s)return u*sn*sn}else if((y&Kr)>=un){if(0!=(y-fn|d))return u*ln*ln;if(l<=v-s)return u*ln*ln}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Kr|0)>>Ke)-be|0,c=0,s>Je&&(i=we(0,((c=r+(De>>l+1)>>>0)&~(Be>>(l=((c&Kr)>>Ke)-be|0)))>>>0),c=(c&Be|De)>>Ke-l>>>0,r<0&&(c=-c),e-=i),r=Br(r=te(f=1-((f=(a=(i=zr(i=n+e,0))*Qe)+(o=(n-(i-e))*ze+i*rn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Ke>>>0)>>Ke<=0?Ye(f,c):we(f,r)}(y,s,l),u*v}var gn=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],hn=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095],wn=.6931471803691238,bn=1.9082149292705877e-10,mn=0x40000000000000,Nn=.3333333333333333,An=1048575,_n=2146435072,En=1048576,Sn=1072693248;function Un(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?K:fr(r)||r<0?NaN:(a=0,(n=te(r))<En&&(a-=54,n=te(r*=mn)),n>=_n?r+r:(a+=(n>>20)-be|0,a+=(f=614244+(n&=An)&1048576|0)>>20|0,u=(r=we(r,n|f^Sn))-1,(An&2+n)<3?0===u?0===a?0:a*wn+a*bn:(o=u*u*(.5-Nn*u),0===a?u-o:a*wn-(o-a*bn-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*wn-(e-(s*(e+o)+a*bn)-u)):0===a?u-s*(u-o):a*wn-(s*(u-o)-a*bn-u))))}var jn=Math.ceil;function kn(r){return r<0?jn(r):Q(r)}function xn(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var In=-.16666666666666632,Fn=.00833333333332249,On=-.0001984126982985795,Tn=27557313707070068e-22,Vn=-2.5050760253406863e-8,Pn=1.58969099521155e-10;function $n(r,e){var n,t,i;return n=Fn+(i=r*r)*(On+i*Tn)+i*(i*i)*(Vn+i*Pn),t=i*r,0===e?r+t*(In+i*n):r-(i*(.5*e-t*n)-e-t*In)}var Gn=!0===Gr?0:1,Hn=new Er(1),Wn=new br(Hn.buffer);function Cn(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Ln=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Rn=16777216,Zn=5.960464477539063e-8,qn=Cn(20),Xn=Cn(20),Yn=Cn(20),zn=Cn(20);function Bn(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,y,d,g,h;for(p=a,h=t[n],g=n,v=0;g>0;v++)s=Zn*h|0,zn[v]=h-Rn*s|0,h=t[g-1]+s,g-=1;if(h=Ye(h,i),h-=8*Q(.125*h),h-=d=0|h,l=0,i>0?(d+=v=zn[n-1]>>24-i,zn[n-1]-=v<<24-i,l=zn[n-1]>>23-i):0===i?l=zn[n-1]>>23:h>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<n;v++)g=zn[v],0===c?0!==g&&(c=1,zn[v]=16777216-g):zn[v]=16777215-g;if(i>0)switch(i){case 1:zn[n-1]&=8388607;break;case 2:zn[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Ye(1,i)))}if(0===h){for(g=0,v=n-1;v>=a;v--)g|=zn[v];if(0===g){for(y=1;0===zn[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=Ln[o+v],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(v-g)];t[v]=s}return Bn(r,e,n+=y,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===zn[n];)n-=1,i-=24;else(h=Ye(h,-i))>=Rn?(s=Zn*h|0,zn[n]=h-Rn*s|0,i+=24,zn[n+=1]=s):zn[n]=0|h;for(s=Ye(1,i),v=n;v>=0;v--)t[v]=s*zn[v],s*=Zn;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Mn[y]*t[v+y];Yn[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Yn[v];for(e[0]=0===l?s:-s,s=Yn[0]-s,v=1;v<=n;v++)s+=Yn[v];return e[1]=0===l?s:-s,7&d}function Dn(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)qn[f]=c<0?0:Ln[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*qn[o+(f-c)];Xn[f]=i}return Bn(r,e,4,Xn,u,4,a,o,qn)}var Jn=Math.round,Kn=.6366197723675814,Qn=1.5707963267341256,rt=6077100506506192e-26,et=6077100506303966e-26,nt=20222662487959506e-37,tt=20222662487111665e-37,it=84784276603689e-45,at=2047;function ot(r,e,n){var t,i,a,o,u;return a=r-(t=Jn(r*Kn))*Qn,o=t*rt,u=e>>20|0,n[0]=a-o,u-(te(n[0])>>20&at)>16&&(o=t*nt-((i=a)-(a=i-(o=t*et))-o),n[0]=a-o,u-(te(n[0])>>20&at)>49&&(o=t*it-((i=a)-(a=i-(o=t*tt))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ut=0,ft=16777216,ct=1.5707963267341256,st=6077100506506192e-26,lt=2*st,pt=3*st,vt=4*st,yt=598523,dt=1072243195,gt=1073928572,ht=1074752122,wt=1074977148,bt=1075183036,mt=1075388923,Nt=1075594811,At=1094263291,_t=[0,0,0],Et=[0,0];function St(r,e){var n,t,i,a,o,u,f;if((i=te(r)&Kr|0)<=dt)return e[0]=r,e[1]=0,0;if(i<=ht)return(i&Be)===yt?ot(r,i,e):i<=gt?r>0?(f=r-ct,e[0]=f-st,e[1]=f-e[0]-st,1):(f=r+ct,e[0]=f+st,e[1]=f-e[0]+st,-1):r>0?(f=r-2*ct,e[0]=f-lt,e[1]=f-e[0]-lt,2):(f=r+2*ct,e[0]=f+lt,e[1]=f-e[0]+lt,-2);if(i<=Nt)return i<=bt?i===wt?ot(r,i,e):r>0?(f=r-3*ct,e[0]=f-pt,e[1]=f-e[0]-pt,3):(f=r+3*ct,e[0]=f+pt,e[1]=f-e[0]+pt,-3):i===mt?ot(r,i,e):r>0?(f=r-4*ct,e[0]=f-vt,e[1]=f-e[0]-vt,4):(f=r+4*ct,e[0]=f+vt,e[1]=f-e[0]+vt,-4);if(i<At)return ot(r,i,e);if(i>=Me)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Hn[0]=r,Wn[Gn]}(r),f=ce(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)_t[o]=0|f,f=(f-_t[o])*ft;for(_t[2]=f,a=3;_t[a-1]===ut;)a-=1;return u=Dn(_t,Et,t,a),r<0?(e[0]=-Et[0],e[1]=-Et[1],-u):(e[0]=Et[0],e[1]=Et[1],u)}var Ut=[0,0],jt=2147483647,kt=1072243195,xt=1044381696,It=2146435072;function Ft(r){var e;if(e=te(r),(e&=jt)<=kt)return e<xt?1:xn(r,0);if(e>=It)return NaN;switch(3&St(r,Ut)){case 0:return xn(Ut[0],Ut[1]);case 1:return-$n(Ut[0],Ut[1]);case 2:return-xn(Ut[0],Ut[1]);default:return $n(Ut[0],Ut[1])}}var Ot=1072243195,Tt=1045430272,Vt=[0,0];function Pt(r){var e;if(e=te(r),(e&=Kr)<=Ot)return e<Tt?r:$n(r,0);if(e>=Me)return NaN;switch(3&St(r,Vt)){case 0:return $n(Vt[0],Vt[1]);case 1:return xn(Vt[0],Vt[1]);case 2:return-$n(Vt[0],Vt[1]);default:return-xn(Vt[0],Vt[1])}}var $t=3.141592653589793,Gt=.07721566490153287,Ht=.3224670334241136,Wt=1,Ct=-.07721566490153287,Lt=.48383612272381005,Mt=-.1475877229945939,Rt=.06462494023913339,Zt=-.07721566490153287,qt=1,Xt=.4189385332046727,Yt=1.4616321449683622,zt=4503599627370496,Bt=0x400000000000000,Dt=8470329472543003e-37,Jt=1.4616321449683622,Kt=-.12148629053584961,Qt=-3638676997039505e-33;function ri(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(fr(r)||pr(r))return r;if(0===r)return J;if(r<0?(e=!0,r=-r):e=!1,r<Dt)return-Un(r);if(e){if(r>=zt)return J;if(c=function(r){var e,n;return fr(r)||pr(r)?NaN:0===(e=cr(n=r%2))||1===e?le(0,n):e<.25?Pt($t*n):e<.75?le(Ft($t*(e=.5-e)),n):e<1.25?(n=le(1,n)-n,Pt($t*n)):e<1.75?-le(Ft($t*(e-=1.5)),n):(n-=le(2,n),Pt($t*n))}(r),0===c)return J;n=Un($t/cr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Un(r),r>=Yt-1+.27?(l=1-r,t=0):r>=Yt-1-.27?(l=r-(Jt-1),t=1):(l=r,t=2)):(v=0,r>=Yt+.27?(l=2-r,t=0):r>=Yt-.27?(l=r-Jt,t=1):(l=r-1,t=2)),t){case 0:o=Gt+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Ht+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=Lt+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Mt+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Rt+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Kt+(u=p*o-(Qt-s*(a+l*i)));break;case 2:o=l*(Zt+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=qt+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=kn(r)))*(Ct+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Wt+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Un(p*=l+2)}else r<Bt?(c=Un(r),s=Xt+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Un(r)-1);return e&&(v=n-v),v}var ei=.6931471803691238,ni=1.9082149292705877e-10,ti=1.4426950408889634,ii=709.782712893384,ai=-745.1332191019411,oi=1/(1<<28),ui=-oi;function fi(r){var e;return fr(r)||r===J?r:r===K?0:r>ii?J:r<ai?0:r>ui&&r<oi?1+r:function(r,e,n){var t,i,a,o;return Ye(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=kn(r<0?ti*r-.5:ti*r+.5))*ei,e*ni,e)}var ci=Math.round,si=2.5066282746310007,li=7.071,pi=220.2068679123761,vi=221.2135961699311,yi=112.0792914978709,di=33.912866078383,gi=6.37396220353165,hi=.7003830644436881,wi=.03526249659989109,bi=440.4137358247522,mi=793.8265125199484,Ni=637.3336333788311,Ai=296.5642487796737,_i=86.78073220294608,Ei=16.06417757920695,Si=1.755667163182642,Ui=.08838834764831845;function ji(r){var e,n,t;return(n=cr(r))>37?t=r>0?1:0:(e=fi(-.5*n*n),t=n<li?e*((((((wi*n+hi)*n+gi)*n+di)*n+yi)*n+vi)*n+pi)/(((((((Ui*n+Si)*n+Ei)*n+_i)*n+Ai)*n+Ni)*n+mi)*n+bi):e/si/(n+1/(n+2/(n+3/(n+4/(n+.65))))),r>=0&&(t=1-t)),t}function ki(r,e,n,t,i){var a=(t-n)*e+t+n,o=fi(-a*a*.125);return o*=dn(ji(.5*a)-ji(.5*(a-2*r)),i-1)}function xi(r,e,n,t,i,a,o){var u,f=0,c=.5*(a-i),s=.5*(a+i);for(u=0;u<o;u++)0===hn[u]?f+=gn[u]*ki(r,s,e,n,t):f+=gn[u]*ki(r,hn[u]*c+s,e,n,t);return c*f}function Ii(r,e){var n,t,i,a,o,u;if(r<=0)return 0;for(t=r/2,a=(r/2*((u=r<=3?3:2)-(i=1))+8*i)/u,n=0,o=1;o<ci(u)+1;o++)i=o,n+=(a-t)/2*xi(r,t,a,e,-1,1,20),t=a,a=o+1===ci(u)?8:(r/2*(u-i-1)+8*(i+1))/u;return n*=2*e/yr(2*$t),n+=dn(fi(1),e*Un(2*ji(r/2)-1))}function Fi(r,e,n,t,i,a,o){var u,f,c;return 0===(u=Ii(yr((f=e*o+2*n*o+o)/2)*r,i))&&(u=1e-37),cr(c=t*Un(u)+Un(o)+a/2*Un(a)+-f*a/4+(a/2-1)*Un(f)-(a*ze+ri(a/2)))>=1e30?0:fi(c)}function Oi(r,e,n,t,i,a,o,u,f){var c,s=0,l=(a-i)/2,p=(a+i)/2;for(c=0;c<o;c++)0===hn[c]?s+=gn[c]*Fi(r,p,e,t,n,u,f):s+=gn[c]*Fi(r,hn[c]*l+p,e,t,n,u,f);return l*s}var Ti=1e-10;function Vi(r,e,n,t){var i,a,o,u,f;if(fr(r)||fr(e)||fr(n))return NaN;if(e<2||n<2)return NaN;if(void 0===t)t=1;else if(!ar(t))return NaN;if(u=1===n?e<10?1+1/(2*e+3):e<=100?1.0844+(1.119-1.0844)/90*(e-10):1.119+1/e:2===n?.968:n<=100?1:n<=800?.5:n<=5e3?1/4:1/8,r<0)return 0;if(r===J)return 1;if(n>25e3||0===Oi(r,0,e,t,-1,1,20,n,u))return dn(Ii(r,e),t);for(a=0,o=!1,f=0,i=0;!o;){if((a+=Oi(r,f,e,t,-1,1,20,n,u))>1)return 1;cr(a-i)/a<=Ti?o=!0:i=a,f+=1}return a}function Pi(r){return function(){return r}}G(Vi,"factory",(function(r,e,n){var t;if(fr(e)||fr(r)||r<2||e<2)return Pi(NaN);if(void 0===n)n=1;else if(!ar(n))return Pi(NaN);return t=1===e?r<10?1+1/(2*r+3):r<=100?1.0844+(1.119-1.0844)/90*(r-10):1.119+1/r:2===e?.968:e<=100?1:e<=800?.5:e<=5e3?1/4:1/8,function(i){var a,o,u,f;if(fr(i))return NaN;if(i<0)return 0;if(i===J)return 1;if(e>25e3||0===Oi(i,0,r,n,-1,1,20,e,t))return dn(Ii(i,r),n);for(o=0,u=!1,f=0,a=0;!u;){if((o+=Oi(i,f,r,n,-1,1,20,e,t))>1)return 1;cr(o-a)/o<=1e-10?u=!0:a=o,f+=1}return o}}));var $i=3.3871328727963665,Gi=133.14166789178438,Hi=1971.5909503065513,Wi=13731.69376550946,Ci=45921.95393154987,Li=67265.7709270087,Mi=33430.57558358813,Ri=2509.0809287301227,Zi=42.31333070160091,qi=687.1870074920579,Xi=5394.196021424751,Yi=21213.794301586597,zi=39307.89580009271,Bi=28729.085735721943,Di=5226.495278852854,Ji=1.4234371107496835,Ki=4.630337846156546,Qi=5.769497221460691,ra=3.6478483247632045,ea=1.2704582524523684,na=.2417807251774506,ta=.022723844989269184,ia=.0007745450142783414,aa=2.053191626637759,oa=1.6763848301838038,ua=.6897673349851,fa=.14810397642748008,ca=.015198666563616457,sa=.0005475938084995345,la=1.0507500716444169e-9,pa=6.657904643501103,va=5.463784911164114,ya=1.7848265399172913,da=.29656057182850487,ga=.026532189526576124,ha=.0012426609473880784,wa=27115555687434876e-21,ba=2.0103343992922881e-7,ma=.599832206555888,Na=.1369298809227358,Aa=.014875361290850615,_a=.0007868691311456133,Ea=18463183175100548e-21,Sa=1.421511758316446e-7,Ua=20442631033899397e-31,ja=120,ka=.8843,xa=.2368,Ia=1.214,Fa=1.208,Oa=1.4142;function Ta(r,e,n){var t,i=function(r){var e,n,t;return cr(n=r-.5)<=.425?e=n*(((((((Ri*(t=.180625-n*n)+Mi)*t+Li)*t+Ci)*t+Wi)*t+Hi)*t+Gi)*t+$i)/(((((((Di*t+Bi)*t+zi)*t+Yi)*t+Xi)*t+qi)*t+Zi)*t+1):(t=n<0?r:1-r)<=0?e=0:(e=(t=yr(-Un(t)))<=5?(((((((ia*(t-=1.6)+ta)*t+na)*t+ea)*t+ra)*t+Qi)*t+Ki)*t+Ji)/(((((((la*t+sa)*t+ca)*t+fa)*t+ua)*t+oa)*t+aa)*t+1):(((((((ba*(t-=5)+wa)*t+ha)*t+ga)*t+da)*t+ya)*t+va)*t+pa)/(((((((Ua*t+Sa)*t+Ea)*t+_a)*t+Aa)*t+Na)*t+ma)*t+1),n<0&&(e=-e)),e}(.5+.5*r);return e<ja&&(i+=(i*i*i+i)/e/4),t=ka-xa*i,e<ja&&(t-=Ia/e+Fa*i/e),i*(t*Un(n-1)+Oa)}function Va(r,e,n,t){var i,a,o,u,f,c,s,l;if(fr(e)||fr(n)||e<2||n<2)return NaN;if(fr(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return J;if(void 0===t)t=1;else if(!ar(t))return NaN;for(u=Ta(r,n,e);(c=Vi(u,e,n,t))>r&&(u-=.4),u<0&&(u=.1),!(c<r););if(i=u,cr(c-r)<1e-8)return NaN;for(f=u+.5;(s=Vi(f,e,n,t))<r&&(f+=.4),f<0&&(f=1),!(s>r););for(f<u&&(f=u+.01),l=2;l<=28;)(o=(s=Vi(f,e,n,t))-r)-(a=c-r)!=0&&(i=(o*u-a*f)/(o-a)),cr(a)<cr(o)?(cr(c-r)<5e-8&&(l=30),c=Vi(u=i,e,n,t)):(u=f,c=s,f=i),l+=1;return i}return G(Va,"factory",(function(r,e,n){if(fr(r)||fr(e)||r<2||e<2)return Pi(NaN);if(void 0===n)n=1;else if(!ar(n))return NaN;return function(t){var i,a,o,u,f,c,s,l;if(fr(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return J;for(u=Ta(t,e,r);(c=Vi(u,r,e,n))>t&&(u-=.4),u<0&&(u=.1),!(c<t););if(i=u,cr(c-t)<1e-8)return NaN;for(f=u+.5;(s=Vi(f,r,e,n))<t&&(f+=.4),f<0&&(f=1),!(s>t););for(f<u&&(f=u+.01),l=2;l<=28;)(o=(s=Vi(f,r,e,n))-t)-(a=c-t)!=0&&(i=(o*u-a*f)/(o-a)),cr(a)<cr(o)?(cr(c-t)<5e-8&&(l=30),c=Vi(u=i,r,e,n)):(u=f,c=s,f=i),l+=1;return i}})),Va},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map
