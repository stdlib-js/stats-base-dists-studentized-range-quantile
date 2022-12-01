// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,o=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(r){return"number"==typeof r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return l&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var b=y()?function(r){var n,t,e,u,i;if(null==r)return s.call(r);t=r[N],i=N,n=null!=(u=r)&&p.call(u,i);try{r[N]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[N]=t:delete r[N],e}:function(r){return s.call(r)},w=Number,A=w.prototype.toString;var d=y();function m(r){return"object"==typeof r&&(r instanceof w||(d?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function _(r){return v(r)||m(r)}c(_,"isPrimitive",v),c(_,"isObject",m);var h=Number.POSITIVE_INFINITY,g=w.NEGATIVE_INFINITY,j=Math.floor;function U(r){return j(r)===r}function O(r){return r<h&&r>g&&U(r)}function I(r){return v(r)&&O(r)}function S(r){return m(r)&&O(r.valueOf())}function E(r){return I(r)||S(r)}function F(r){return I(r)&&r>0}function P(r){return S(r)&&r.valueOf()>0}function H(r){return F(r)||P(r)}function T(r){return r!=r}function G(r){return Math.abs(r)}function k(r){return U(r/2)}function M(r){return k(r>0?r-1:r+1)}function x(r){return r===h||r===g}c(E,"isPrimitive",I),c(E,"isObject",S),c(H,"isPrimitive",F),c(H,"isObject",P);var L=Math.sqrt,V="function"==typeof Uint32Array;var W="function"==typeof Uint32Array?Uint32Array:null;var Y,q="function"==typeof Uint32Array?Uint32Array:void 0;Y=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(V&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C=Y,z="function"==typeof Float64Array;var B="function"==typeof Float64Array?Float64Array:null;var D,J="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=n,r=(z&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Uint8Array;var R="function"==typeof Uint8Array?Uint8Array:null;var X,Z="function"==typeof Uint8Array?Uint8Array:void 0;X=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),t=n,r=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $=X,rr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null;var tr,er="function"==typeof Uint16Array?Uint16Array:void 0;tr=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(rr&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ur,ir={uint16:tr,uint8:$};(ur=new ir.uint16(1))[0]=4660;var fr,or,ar=52===new ir.uint8(ur.buffer)[0];!0===ar?(fr=1,or=0):(fr=0,or=1);var cr={HIGH:fr,LOW:or},vr=new K(1),lr=new C(vr.buffer),yr=cr.HIGH,sr=cr.LOW;function pr(r,n,t,e){return vr[0]=r,n[e]=lr[yr],n[e+t]=lr[sr],n}function Nr(r){return pr(r,[0,0],1,0)}c(Nr,"assign",pr);var br=!0===ar?0:1,wr=new K(1),Ar=new C(wr.buffer);function dr(r,n){return wr[0]=r,Ar[br]=n>>>0,wr[0]}function mr(r){return 0|r}var _r,hr,gr=!0===ar?1:0,jr=new K(1),Ur=new C(jr.buffer);function Or(r){return jr[0]=r,Ur[gr]}!0===ar?(_r=1,hr=0):(_r=0,hr=1);var Ir={HIGH:_r,LOW:hr},Sr=new K(1),Er=new C(Sr.buffer),Fr=Ir.HIGH,Pr=Ir.LOW;function Hr(r,n){return Er[Fr]=r,Er[Pr]=n,Sr[0]}var Tr=[0,0];function Gr(r,n){var t,e;return Nr.assign(r,Tr,1,0),t=Tr[0],t&=2147483647,e=Or(n),Hr(t|=e&=2147483648,Tr[1])}var kr=!0===ar?1:0,Mr=new K(1),xr=new C(Mr.buffer);function Lr(r,n){return Mr[0]=r,xr[kr]=n>>>0,Mr[0]}var Vr=[1,1.5],Wr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8];function qr(r,n,t,e){return T(r)||x(r)?(n[e]=r,n[e+t]=0,n):0!==r&&G(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Cr=[0,0],zr=[0,0];function Br(r,n){var t,e;return 0===n||0===r||T(r)||x(r)?r:(qr(r,Cr,1,0),n+=Cr[1],n+=function(r){var n=Or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Cr[0]),n<-1074?Gr(0,r):n>1023?r<0?g:h:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nr.assign(r,zr,1,0),t=zr[0],t&=2148532223,e*Hr(t|=n+1023<<20,zr[1])))}var Dr=.6931471805599453;var Jr=1e300,Kr=[0,0],Qr=[0,0];function Rr(r,n){var t,e,u,i,f,o,a,c,v,l,y,s,p,N;if(T(r)||T(n))return NaN;if(Nr.assign(n,Kr,1,0),f=Kr[0],0===Kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return L(r);if(-.5===n)return 1/L(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(x(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:G(r)<1==(n===h)?0:h}(r,n)}if(Nr.assign(r,Kr,1,0),i=Kr[0],0===Kr[1]){if(0===i)return function(r,n){return n===g?h:n===h?0:n>0?M(n)?r:0:M(n)?Gr(h,r):h}(r,n);if(1===r)return 1;if(-1===r&&M(n))return-1;if(x(r))return r===g?Rr(-0,-n):n<0?0:h}if(r<0&&!1===U(n))return(r-r)/(r-r);if(u=G(r),t=2147483647&i|0,e=2147483647&f|0,a=f>>>31|0,o=(o=i>>>31|0)&&M(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Jr*Jr:1e-300*o*1e-300;if(t>1072693248)return 0===a?o*Jr*Jr:1e-300*o*1e-300;y=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=dr(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(Qr,u)}else y=function(r,n,t){var e,u,i,f,o,a,c,v,l,y,s,p,N,b,w,A,d,m,_,h,g;return m=0,t<1048576&&(m-=53,t=Or(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?h=0:_<767610?h=1:(h=0,m+=1,t-=1048576),f=dr(u=(A=(n=Lr(n,t))-(c=Vr[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=h<<18),w=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=dr(a=3+(i=f*f)+(w+=(o=d*(A-f*a-f*(n-(a-c))))*(f+u)),0),N=(s=-7.028461650952758e-9*(l=dr(l=(A=f*a)+(d=o*a+(w-(a-3-i))*u),0))+.9617966939259756*(d-(l-A))+Yr[h])-((p=dr(p=(y=.9617967009544373*l)+s+(v=Wr[h])+(b=m),0))-b-v-y),r[0]=p,r[1]=N,r}(Qr,u,t);if(s=(l=(n-(c=dr(n,0)))*y[0]+n*y[1])+(v=c*y[0]),Nr.assign(s,Kr,1,0),p=mr(Kr[0]),N=mr(Kr[1]),p>=1083179008){if(0!=(p-1083179008|N))return o*Jr*Jr;if(l+8008566259537294e-32>s-v)return o*Jr*Jr}else if((2147483647&p)>=1083231232){if(0!=(p-3230714880|N))return 1e-300*o*1e-300;if(l<=s-v)return 1e-300*o*1e-300}return s=function(r,n,t){var e,u,i,f,o,a,c,v,l,y,s;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=i=Lr(0,e)),r=mr(r=Or(c=1-((c=(f=.6931471824645996*(i=dr(i=t+n,0)))+(o=(t-(i-n))*Dr+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Br(c,v):Lr(c,r)}(p,v,l),o*s}var Xr=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],Zr=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095];var $r=.6931471803691238,rn=1.9082149292705877e-10;function nn(r){var n,t,e,u,i,f,o,a,c,v,l,y;return 0===r?g:T(r)||r<0?NaN:(i=0,(t=Or(r))<1048576&&(i-=54,t=Or(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=Lr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===i?0:i*$r+i*rn:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*$r-(f-i*rn-o)):(a=t-398458|0,c=440401-t|0,u=(l=(y=(v=o/(2+o))*v)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),f=e+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-v*(n+f)):i*$r-(n-(v*(n+f)+i*rn)-o)):0===i?o-v*(o-f):i*$r-(v*(o-f)-i*rn-o))))}var tn=Math.ceil;function en(r){return r<0?tn(r):j(r)}function un(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var fn=-.16666666666666632;function on(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(fn+u*t):r-(u*(.5*n-e*t)-n-e*fn)}var an=!0===ar?0:1,cn=new K(1),vn=new C(cn.buffer);function ln(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pn=5.960464477539063e-8,Nn=ln(20),bn=ln(20),wn=ln(20),An=ln(20);function dn(r,n,t,e,u,i,f,o,a){var c,v,l,y,s,p,N,b,w;for(y=i,w=e[t],b=t,s=0;b>0;s++)v=pn*w|0,An[s]=w-16777216*v|0,w=e[b-1]+v,b-=1;if(w=Br(w,u),w-=8*j(.125*w),w-=N=0|w,l=0,u>0?(N+=s=An[t-1]>>24-u,An[t-1]-=s<<24-u,l=An[t-1]>>23-u):0===u?l=An[t-1]>>23:w>=.5&&(l=2),l>0){for(N+=1,c=0,s=0;s<t;s++)b=An[s],0===c?0!==b&&(c=1,An[s]=16777216-b):An[s]=16777215-b;if(u>0)switch(u){case 1:An[t-1]&=8388607;break;case 2:An[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Br(1,u)))}if(0===w){for(b=0,s=t-1;s>=i;s--)b|=An[s];if(0===b){for(p=1;0===An[i-p];p++);for(s=t+1;s<=t+p;s++){for(a[o+s]=yn[f+s],v=0,b=0;b<=o;b++)v+=r[b]*a[o+(s-b)];e[s]=v}return dn(r,n,t+=p,e,u,i,f,o,a)}}if(0===w)for(t-=1,u-=24;0===An[t];)t-=1,u-=24;else(w=Br(w,-u))>=16777216?(v=pn*w|0,An[t]=w-16777216*v|0,u+=24,An[t+=1]=v):An[t]=0|w;for(v=Br(1,u),s=t;s>=0;s--)e[s]=v*An[s],v*=pn;for(s=t;s>=0;s--){for(v=0,p=0;p<=y&&p<=t-s;p++)v+=sn[p]*e[s+p];wn[t-s]=v}for(v=0,s=t;s>=0;s--)v+=wn[s];for(n[0]=0===l?v:-v,v=wn[0]-v,s=1;s<=t;s++)v+=wn[s];return n[1]=0===l?v:-v,7&N}function mn(r,n,t,e){var u,i,f,o,a,c,v;for(4,(i=(t-3)/24|0)<0&&(i=0),o=t-24*(i+1),c=i-(f=e-1),v=f+4,a=0;a<=v;a++)Nn[a]=c<0?0:yn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Nn[f+(a-c)];bn[a]=u}return 4,dn(r,n,4,bn,o,4,i,f,Nn)}var _n=Math.round;function hn(r,n,t){var e,u,i,f,o;return i=r-1.5707963267341256*(e=_n(.6366197723675814*r)),f=6077100506506192e-26*e,o=n>>20|0,t[0]=i-f,o-(Or(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=i)-(i=u-(f=6077100506303966e-26*e))-f),t[0]=i-f,o-(Or(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=i)-(i=u-(f=20222662487111665e-37*e))-f),t[0]=i-f)),t[1]=i-t[0]-f,e}var gn=1.5707963267341256,jn=6077100506506192e-26,Un=2*jn,On=4*jn,In=[0,0,0],Sn=[0,0];function En(r,n){var t,e,u,i,f,o,a;if((u=2147483647&Or(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?hn(r,u,n):u<=1073928572?r>0?(a=r-gn,n[0]=a-jn,n[1]=a-n[0]-jn,1):(a=r+gn,n[0]=a+jn,n[1]=a-n[0]+jn,-1):r>0?(a=r-2*gn,n[0]=a-Un,n[1]=a-n[0]-Un,2):(a=r+2*gn,n[0]=a+Un,n[1]=a-n[0]+Un,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?hn(r,u,n):r>0?(a=r-3*gn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*gn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?hn(r,u,n):r>0?(a=r-4*gn,n[0]=a-On,n[1]=a-n[0]-On,4):(a=r+4*gn,n[0]=a+On,n[1]=a-n[0]+On,-4);if(u<1094263291)return hn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return cn[0]=r,vn[an]}(r),a=Hr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)In[f]=0|a,a=16777216*(a-In[f]);for(In[2]=a,i=3;0===In[i-1];)i-=1;return o=mn(In,Sn,e,i),r<0?(n[0]=-Sn[0],n[1]=-Sn[1],-o):(n[0]=Sn[0],n[1]=Sn[1],o)}var Fn=[0,0];function Pn(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1044381696?1:un(r,0);if(n>=2146435072)return NaN;switch(3&En(r,Fn)){case 0:return un(Fn[0],Fn[1]);case 1:return-on(Fn[0],Fn[1]);case 2:return-un(Fn[0],Fn[1]);default:return on(Fn[0],Fn[1])}}var Hn=[0,0];function Tn(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1045430272?r:on(r,0);if(n>=2146435072)return NaN;switch(3&En(r,Hn)){case 0:return on(Hn[0],Hn[1]);case 1:return un(Hn[0],Hn[1]);case 2:return-on(Hn[0],Hn[1]);default:return-un(Hn[0],Hn[1])}}var Gn=3.141592653589793;var kn=1.4616321449683622,Mn=1.4616321449683622;function xn(r){var n,t,e,u,i,f,o,a,c,v,l,y,s;if(T(r)||x(r))return r;if(0===r)return h;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-nn(r);if(n){if(r>=4503599627370496)return h;if(c=function(r){var n,t;return T(r)||x(r)?NaN:0===(n=G(t=r%2))||1===n?Gr(0,t):n<.25?Tn(Gn*t):n<.75?Gr(Pn(Gn*(n=.5-n)),t):n<1.25?(t=Gr(1,t)-t,Tn(Gn*t)):n<1.75?-Gr(Pn(Gn*(n-=1.5)),t):(t-=Gr(2,t),Tn(Gn*t))}(r),0===c)return h;t=nn(Gn/G(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-nn(r),r>=kn-1+.27?(l=1-r,e=0):r>=kn-1-.27?(l=r-(Mn-1),e=1):(l=r,e=2)):(s=0,r>=kn+.27?(l=2-r,e=0):r>=kn-.27?(l=r-Mn,e=1):(l=r-1,e=2)),e){case 0:f=.07721566490153287+(y=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),i=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),s+=(o=l*f+i)-.5*l;break;case 1:f=.48383612272381005+(v=(y=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),i=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),s+=-.12148629053584961+(o=y*f-(-3638676997039505e-33-v*(i+l*u)));break;case 2:f=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),i=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),s+=-.5*l+f/i}else if(r<8)switch(o=(l=r-(e=en(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),s=.5*l+o/a,y=1,e){case 7:y*=l+6;case 6:y*=l+5;case 5:y*=l+4;case 4:y*=l+3;case 3:s+=nn(y*=l+2)}else r<0x400000000000000?(c=nn(r),v=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=y*y),s=(r-.5)*(c-1)+v):s=r*(nn(r)-1);return n&&(s=t-s),s}function Ln(r){var n;return T(r)||r===h?r:r===g?0:r>709.782712893384?h:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,f;return Br(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=en(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Vn(r){var n,t,e;return(t=G(r))>37?e=r>0?1:0:(n=Ln(-.5*t*t),e=t<7.071?n*((((((.03526249659989109*t+.7003830644436881)*t+6.37396220353165)*t+33.912866078383)*t+112.0792914978709)*t+221.2135961699311)*t+220.2068679123761)/(((((((.08838834764831845*t+1.755667163182642)*t+16.06417757920695)*t+86.78073220294608)*t+296.5642487796737)*t+637.3336333788311)*t+793.8265125199484)*t+440.4137358247522):n/2.5066282746310007/(t+1/(t+2/(t+3/(t+4/(t+.65))))),r>=0&&(e=1-e)),e}function Wn(r,n,t,e,u){var i=(e-t)*n+e+t,f=Ln(-i*i*.125);return f*=Rr(Vn(.5*i)-Vn(.5*(i-2*r)),u-1)}function Yn(r,n,t,e,u,i,f){var o,a=0,c=.5*(i-u),v=.5*(i+u);for(o=0;o<f;o++)a+=0===Zr[o]?Xr[o]*Wn(r,v,n,t,e):Xr[o]*Wn(r,Zr[o]*c+v,n,t,e);return c*a}function qn(r,n){var t,e,u,i,f,o;if(r<=0)return 0;for(e=r/2,i=(r/2*((o=r<=3?3:2)-(u=1))+8*u)/o,t=0,f=1;f<_n(o)+1;f++)u=f,t+=(i-e)/2*Yn(r,e,i,n,-1,1,20),e=i,i=f+1===_n(o)?8:(r/2*(o-u-1)+8*(u+1))/o;return t*=2*n/L(2*Gn),t+=Rr(Ln(1),n*nn(2*Vn(r/2)-1))}function Cn(r,n,t,e,u,i,f){var o,a,c;return 0===(o=qn(L((a=n*f+2*t*f+f)/2)*r,u))&&(o=1e-37),G(c=e*nn(o)+nn(f)+i/2*nn(i)+-a*i/4+(i/2-1)*nn(a)-(i*Dr+xn(i/2)))>=1e30?0:Ln(c)}function zn(r,n,t,e,u,i,f,o,a){var c,v=0,l=(i-u)/2,y=(i+u)/2;for(c=0;c<f;c++)v+=0===Zr[c]?Xr[c]*Cn(r,y,n,e,t,o,a):Xr[c]*Cn(r,Zr[c]*l+y,n,e,t,o,a);return l*v}function Bn(r,n,t,e){var u,i,f,o,a;if(T(r)||T(n)||T(t))return NaN;if(n<2||t<2)return NaN;if(void 0===e)e=1;else if(!F(e))return NaN;if(o=1===t?n<10?1+1/(2*n+3):n<=100?1.0844+(1.119-1.0844)/90*(n-10):1.119+1/n:2===t?.968:t<=100?1:t<=800?.5:t<=5e3?1/4:1/8,r<0)return 0;if(r===h)return 1;if(t>25e3||0===zn(r,0,n,e,-1,1,20,t,o))return Rr(qn(r,n),e);for(i=0,f=!1,a=0,u=0;!f;){if((i+=zn(r,a,n,e,-1,1,20,t,o))>1)return 1;G(i-u)/i<=1e-10?f=!0:u=i,a+=1}return i}function Dn(r){return function(){return r}}c(Bn,"factory",(function(r,n,t){var e;if(T(n)||T(r)||r<2||n<2)return Dn(NaN);if(void 0===t)t=1;else if(!F(t))return Dn(NaN);return e=1===n?r<10?1+1/(2*r+3):r<=100?1.0844+(1.119-1.0844)/90*(r-10):1.119+1/r:2===n?.968:n<=100?1:n<=800?.5:n<=5e3?1/4:1/8,function(u){var i,f,o,a;if(T(u))return NaN;if(u<0)return 0;if(u===h)return 1;if(n>25e3||0===zn(u,0,r,t,-1,1,20,n,e))return Rr(qn(u,r),t);f=0,o=!1,a=0,i=0;for(;!o;){if((f+=zn(u,a,r,t,-1,1,20,n,e))>1)return 1;G(f-i)/f<=1e-10?o=!0:i=f,a+=1}return f}}));function Jn(r,n,t){var e,u=function(r){var n,t,e;return G(t=r-.5)<=.425?n=t*(((((((2509.0809287301227*(e=.180625-t*t)+33430.57558358813)*e+67265.7709270087)*e+45921.95393154987)*e+13731.69376550946)*e+1971.5909503065513)*e+133.14166789178438)*e+3.3871328727963665)/(((((((5226.495278852854*e+28729.085735721943)*e+39307.89580009271)*e+21213.794301586597)*e+5394.196021424751)*e+687.1870074920579)*e+42.31333070160091)*e+1):(e=t<0?r:1-r)<=0?n=0:(n=(e=L(-nn(e)))<=5?(((((((.0007745450142783414*(e-=1.6)+.022723844989269184)*e+.2417807251774506)*e+1.2704582524523684)*e+3.6478483247632045)*e+5.769497221460691)*e+4.630337846156546)*e+1.4234371107496835)/(((((((1.0507500716444169e-9*e+.0005475938084995345)*e+.015198666563616457)*e+.14810397642748008)*e+.6897673349851)*e+1.6763848301838038)*e+2.053191626637759)*e+1):(((((((2.0103343992922881e-7*(e-=5)+27115555687434876e-21)*e+.0012426609473880784)*e+.026532189526576124)*e+.29656057182850487)*e+1.7848265399172913)*e+5.463784911164114)*e+6.657904643501103)/(((((((20442631033899397e-31*e+1.421511758316446e-7)*e+18463183175100548e-21)*e+.0007868691311456133)*e+.014875361290850615)*e+.1369298809227358)*e+.599832206555888)*e+1),t<0&&(n=-n)),n}(.5+.5*r);return n<120&&(u+=(u*u*u+u)/n/4),e=.8843-.2368*u,n<120&&(e-=1.214/n+1.208*u/n),u*(e*nn(t-1)+1.4142)}function Kn(r,n,t,e){var u,i,f,o,a,c,v,l;if(T(n)||T(t)||n<2||t<2)return NaN;if(T(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return h;if(void 0===e)e=1;else if(!F(e))return NaN;for(o=Jn(r,t,n);(c=Bn(o,n,t,e))>r&&(o-=.4),o<0&&(o=.1),!(c<r););if(u=o,G(c-r)<1e-8)return NaN;for(a=o+.5;(v=Bn(a,n,t,e))<r&&(a+=.4),a<0&&(a=1),!(v>r););for(a<o&&(a=o+.01),l=2;l<=28;)(f=(v=Bn(a,n,t,e))-r)-(i=c-r)!=0&&(u=(f*o-i*a)/(f-i)),G(i)<G(f)?(G(c-r)<5e-8&&(l=30),c=Bn(o=u,n,t,e)):(o=a,c=v,a=u),l+=1;return u}function Qn(r,n,t){if(T(r)||T(n)||r<2||n<2)return Dn(NaN);if(void 0===t)t=1;else if(!F(t))return NaN;return function(e){var u,i,f,o,a,c,v,l;if(T(e)||e<0||e>1)return NaN;if(0===e)return 0;if(1===e)return h;o=Jn(e,n,r);for(;(c=Bn(o,r,n,t))>e&&(o-=.4),o<0&&(o=.1),!(c<e););if(u=o,G(c-e)<1e-8)return NaN;a=o+.5;for(;(v=Bn(a,r,n,t))<e&&(a+=.4),a<0&&(a=1),!(v>e););a<o&&(a=o+.01);l=2;for(;l<=28;)v=Bn(a,r,n,t),(f=v-e)-(i=c-e)!=0&&(u=(f*o-i*a)/(f-i)),G(i)<G(f)?(G(c-e)<5e-8&&(l=30),c=Bn(o=u,r,n,t)):(o=a,c=v,a=u),l+=1;return u}}c(Kn,"factory",Qn);export{Kn as default,Qn as factory};
//# sourceMappingURL=mod.js.map
