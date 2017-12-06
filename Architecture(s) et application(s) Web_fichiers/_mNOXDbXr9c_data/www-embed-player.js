(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function u(){throw Error("unimplemented abstract method");}
function ca(a){a.getInstance=function(){return a.Y?a.Y:a.Y=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function v(a){return"array"==da(a)}
function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function w(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==da(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return x.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.bf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(oa,Error);oa.prototype.name="CustomError";var pa;function qa(a){return/^[\s\xa0]*$/.test(a)}
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ta=/&/g,ua=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,za=/[\x00&<>"']/;function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ba,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(d=String.fromCharCode(h))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ca(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Ba=/&([^;\s<&]+);?/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ea={"'":"\\'"};
function Fa(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Ga(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Ga(0==k[2].length,0==l[2].length)||Ga(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(w(a))return w(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=w(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},La=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=w(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Na=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Oa(a,b,c){b=Pa(a,b,c);return 0>b?null:w(a)?a.charAt(b):a[b]}
function Pa(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function B(a,b){return 0<=Ia(a,b)}
function Qa(a,b){B(a,b)||a.push(b)}
function Ra(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Sa(a,b){var c=Pa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ta(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Wa(a,b,c,d){return Array.prototype.splice.apply(a,Xa(arguments,1))}
function Xa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ya(a,b){return a>b?1:a<b?-1:0}
;function Za(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function $a(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function ab(a){var b=0,c;for(c in a)b++;return b}
function bb(a,b){return cb(a,b)}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function eb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function cb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){var b=da(a);if("object"==b||"array"==b){if(ga(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=kb(a[c]);return b}return a}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;a:{var qb=m.navigator;if(qb){var rb=qb.userAgent;if(rb){nb=rb;break a}}nb=""}function C(a){return-1!=nb.indexOf(a)}
;function sb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
;function tb(){this.b="";this.f=ub}
tb.prototype.Rb=!0;tb.prototype.Mb=function(){return this.b};
function vb(a){if(a instanceof tb&&a.constructor===tb&&a.f===ub)return a.b;da(a);return"type_error:SafeUrl"}
var wb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function xb(a){if(a instanceof tb)return a;a=a.Rb?a.Mb():String(a);wb.test(a)||(a="about:invalid#zClosurez");return yb(a)}
var ub={};function yb(a){var b=new tb;b.b=a;return b}
yb("about:blank");function zb(){this.b="";this.f=Ab}
zb.prototype.Rb=!0;zb.prototype.Mb=function(){return this.b};
var Ab={};function Bb(){this.b="";this.f=Cb}
Bb.prototype.Rb=!0;Bb.prototype.Mb=function(){return this.b};
function Db(a){if(a instanceof Bb&&a.constructor===Bb&&a.f===Cb)return a.b;da(a);return"type_error:SafeHtml"}
var Cb={};function Eb(a){var b=new Bb;b.b=a;return b}
Eb("<!DOCTYPE html>");Eb("");Eb("<br>");function Fb(a,b){var c;c=b instanceof tb?b:xb(b);a.href=vb(c)}
function Gb(a,b){a.rel="stylesheet";var c;b instanceof zb&&b.constructor===zb&&b.f===Ab?c=b.b:(da(b),c="type_error:TrustedResourceUrl");a.href=c}
;function Hb(a,b,c){a&&(a.dataset?a.dataset[Ib(b)]=c:a.setAttribute("data-"+b,c))}
function D(a,b){return a?a.dataset?a.dataset[Ib(b)]:a.getAttribute("data-"+b):null}
function Jb(a,b){a&&(a.dataset?delete a.dataset[Ib(b)]:a.removeAttribute("data-"+b))}
var Kb={};function Ib(a){return Kb[a]||(Kb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Lb(a){m.setTimeout(function(){throw a;},0)}
var Mb;
function Nb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ic;c.ic=null;a()}};
return function(a){d.next={ic:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Ob(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Ob.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Pb(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Qb(){this.f=this.b=null}
var Sb=new Ob(function(){return new Rb},function(a){a.reset()},100);
Qb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Rb(){this.next=this.scope=this.b=null}
Rb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Rb.prototype.reset=function(){this.next=this.scope=this.b=null};function Tb(a,b){Ub||Vb();Wb||(Ub(),Wb=!0);var c=Xb,d=Sb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Ub;function Vb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Ub=function(){a.then(Yb)}}else Ub=function(){var a=Yb;
!ga(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Mb||(Mb=Nb()),Mb(a)):m.setImmediate(a)}}
var Wb=!1,Xb=new Qb;function Yb(){for(var a;a=Xb.remove();){try{a.b.call(a.scope)}catch(b){Lb(b)}Pb(Sb,a)}Wb=!1}
;function E(){this.Ka=this.Ka;this.T=this.T}
E.prototype.Ka=!1;E.prototype.D=function(){return this.Ka};
E.prototype.dispose=function(){this.Ka||(this.Ka=!0,this.w())};
function Zb(a,b){$b(a,na(ac,b))}
function $b(a,b){a.Ka?p(void 0)?b.call(void 0):b():(a.T||(a.T=[]),a.T.push(p(void 0)?x(b,void 0):b))}
E.prototype.w=function(){if(this.T)for(;this.T.length;)this.T.shift()()};
function ac(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?bc.apply(null,d):ac(d)}}
;function F(a){E.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.ha={};this.j=!!a}
z(F,E);g=F.prototype;g.subscribe=function(a,b,c){var d=this.ha[a];d||(d=this.ha[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ha[a]){var d=this.b;if(a=Oa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.na(a)}return!1};
g.na=function(a){var b=this.b[a];if(b){var c=this.ha[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Ra(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.A=function(a,b){var c=this.ha[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];cc(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.na(c)}}return 0!=e}return!1};
function cc(a,b,c){Tb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ha[a];b&&(A(b,this.na,this),delete this.ha[a])}else this.b.length=0,this.ha={}};
g.W=function(a){if(a){var b=this.ha[a];return b?b.length:0}a=0;for(b in this.ha)a+=this.W(b);return a};
g.w=function(){F.C.w.call(this);this.clear();this.f.length=0};var dc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",dc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var ec=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",ec,void 0);function fc(a){hc(dc,arguments)}
function G(a,b){return a in dc?dc[a]:b}
function H(a,b){ga(a)&&(a=ic(a));return window.setTimeout(a,b)}
function J(a){window.clearTimeout(a)}
function ic(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw jc(b),b;}}:a}
function jc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),fc("ERRORS",c))}
function hc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var kc=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},lc="Microsoft Internet Explorer"==navigator.appName;var mc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.na;F.prototype.publish=F.prototype.A;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",mc,void 0);var nc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",nc,void 0);var oc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",oc,void 0);var pc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",pc,void 0);
var qc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",qc,void 0);function rc(a,b,c){var d=sc();if(d){var e=d.subscribe(a,function(){if(!qc||qc!=e){var d=arguments,h;h=function(){nc[e]&&b.apply(c||window,d)};
try{pc[a]?h():H(h,0)}catch(k){jc(k)}}},c);
nc[e]=!0;oc[a]||(oc[a]=[]);oc[a].push(e);return e}return 0}
function tc(a){var b=sc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete nc[a]}))}
function uc(a,b){var c=sc();return c?c.publish.apply(c,arguments):!1}
function vc(a,b){pc[a]=!0;var c=sc();c&&c.publish.apply(c,arguments);pc[a]=!1}
function wc(a){oc[a]&&(a=oc[a],A(a,function(a){nc[a]&&delete nc[a]}),a.length=0)}
function xc(a){var b=sc();if(b)if(b.clear(a),a)wc(a);else for(var c in oc)wc(c)}
function sc(){return r("yt.pubsub.instance_")}
;function yc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(zc,""),c=c.replace(Ac,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Bc(a,b)}
function Bc(a,b){var c=Cc(a),d=document.getElementById(c),e=d&&D(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=rc(c,b),h=""+ia(b);Dc[h]=e}f||(d=Ec(a,c,function(){D(d,"loaded")||(Hb(d,"loaded","true"),uc(c),H(na(xc,c),0))}))}}
function Ec(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Fc(a,b){if(a&&b){var c=""+ia(b);(c=Dc[c])&&tc(c)}}
function Cc(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ha(a)}
var zc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ac=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Dc={};var Gc=null;function Hc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?yc(b,function(){Gc=new botguard.bg(c)}):a&&(eval(a),Gc=new botguard.bg(c))}
function Ic(){return null!=Gc}
function Jc(){return Gc?Gc.invoke():null}
;var Kc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Lc(){}
Lc.prototype.next=function(){throw Kc;};
Lc.prototype.pa=function(){return this};
function Mc(a){if(a instanceof Lc)return a;if("function"==typeof a.pa)return a.pa(!1);if(ea(a)){var b=0,c=new Lc;c.next=function(){for(;;){if(b>=a.length)throw Kc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Nc(a,b,c){if(ea(a))try{A(a,b,c)}catch(d){if(d!==Kc)throw d;}else{a=Mc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Kc)throw d;}}}
function Oc(a){if(ea(a))return Ua(a);a=Mc(a);var b=[];Nc(a,function(a){b.push(a)});
return b}
;function Pc(a,b){this.f={};this.b=[];this.Aa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Pc?(c=a.qa(),d=a.X()):(c=eb(a),d=db(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Pc.prototype;g.W=function(){return this.g};
g.X=function(){Qc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.qa=function(){Qc(this);return this.b.concat()};
g.$a=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Rc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.W())return!1;var c=b||Sc;Qc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Sc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.Aa=this.g=this.b.length=0};
g.remove=function(a){return Rc(this.f,a)?(delete this.f[a],this.g--,this.Aa++,this.b.length>2*this.g&&Qc(this),!0):!1};
function Qc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Rc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Rc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Rc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Rc(this.f,a)||(this.g++,this.b.push(a),this.Aa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.qa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Pc(this)};
g.pa=function(a){Qc(this);var b=0,c=this.Aa,d=this,e=new Lc;e.next=function(){if(c!=d.Aa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Kc;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Rc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Tc(a){return a.W&&"function"==typeof a.W?a.W():ea(a)||w(a)?a.length:ab(a)}
function Uc(a){if(a.X&&"function"==typeof a.X)return a.X();if(w(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return db(a)}
function Vc(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(!a.X||"function"!=typeof a.X){if(ea(a)||w(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return eb(a)}}
function Wc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||w(a))A(a,b,c);else for(var d=Vc(a),e=Uc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Xc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||w(a))return Na(a,b,void 0);for(var c=Vc(a),d=Uc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Yc(a){this.b=new Pc;a&&Zc(this,a)}
function $c(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ia(a):b.substr(0,1)+a}
g=Yc.prototype;g.W=function(){return this.b.W()};
function Zc(a,b){for(var c=Uc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set($c(f),f)}}
g.remove=function(a){return this.b.remove($c(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=$c(a);return Rc(this.b.f,a)};
g.X=function(){return this.b.X()};
g.clone=function(){return new Yc(this)};
g.equals=function(a){return this.W()==Tc(a)&&ad(this,a)};
function ad(a,b){var c=Tc(b);if(a.W()>c)return!1;!(b instanceof Yc)&&5<c&&(b=new Yc(b));return Xc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.$a&&"function"==typeof c.$a?c.$a(a):ea(c)||w(c)?B(c,a):cb(c,a)})}
g.pa=function(){return this.b.pa(!1)};function bd(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function cd(a){cd[" "](a);return a}
cd[" "]=t;function dd(a,b){var c=ed;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var fd=C("Opera"),K=C("Trident")||C("MSIE"),gd=C("Edge"),hd=C("Gecko")&&!(-1!=nb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),id=-1!=nb.toLowerCase().indexOf("webkit")&&!C("Edge"),jd=C("Windows");function kd(){var a=m.document;return a?a.documentMode:void 0}
var ld;a:{var md="",nd=function(){var a=nb;if(hd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(gd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(id)return/WebKit\/(\S+)/.exec(a);if(fd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nd&&(md=nd?nd[1]:"");if(K){var od=kd();if(null!=od&&od>parseFloat(md)){ld=String(od);break a}}ld=md}var pd=ld,ed={};function qd(a){return dd(a,function(){return 0<=Fa(pd,a)})}
function rd(a){return Number(sd)>=a}
var td;var ud=m.document;td=ud&&K?kd()||("CSS1Compat"==ud.compatMode?parseInt(pd,10):5):void 0;var sd=td;function vd(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function wd(a){a=String(a);if(vd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function xd(a){return eval("("+a+")")}
function L(a){return yd(new zd(void 0),a)}
function zd(a){this.b=a}
function yd(a,b){var c=[];Ad(a,b,c);return c.join("")}
function Ad(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(v(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ad(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Bd(d,c),c.push(":"),Ad(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Bd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Bd(a,b){b.push('"',a.replace(Dd,function(a){var b=Cd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Cd[a]=b);return b}),'"')}
;function Ed(a){return G("EXPERIMENT_FLAGS",{})[a]}
;var Fd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gd(a){return a?decodeURI(a):a}
function Hd(a,b){return b.match(Fd)[a]||null}
function Id(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?sa(h):"")}}
function Jd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Kd(a,b,c){if(v(b))for(var d=0;d<b.length;d++)Kd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ld(a,b,c){for(c=c||0;c<b.length;c+=2)Kd(b[c],b[c+1],a);return a}
function Md(a,b){for(var c in b)Kd(c,b[c],a);return a}
function Nd(a){a=Md([],a);a[0]="";return a.join("")}
function Od(a,b){return Jd(2==arguments.length?Ld([a],arguments[1],0):Ld([a],arguments,1))}
function Pd(a,b){return Jd(Md([a],b))}
;function Qd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=sa(e[0]||""),e=sa(e[1]||"");f in b?v(b[f])?Va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Rd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Qd(d[1]||""),e;for(e in b)d[e]=b[e];return Pd(a,d)+c}
;var Sd=null;"undefined"!=typeof XMLHttpRequest?Sd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Sd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Td(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ud(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ic(b)(l)}
var l=Sd&&Sd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Vd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Vd(a,b){b=b||{};var c;c||(c=window.location.href);var d=Hd(1,a),e=Gd(Hd(3,a));d&&e?(d=c,c=a.match(Fd),d=d.match(Fd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Gd(Hd(3,c))==e&&(Number(Hd(4,c))||null)==(Number(Hd(4,a))||null):!0;for(var f in Wd){if((e=d=G(Wd[f]))&&!(e=c)){var e=f,h=G("CORS_HEADER_WHITELIST")||{},k=Gd(Hd(3,a));e=k?(h=h[k])?B(h,e):!1:!0}e&&(b[f]=d)}return b}
function Xd(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.df&&(!Gd(Hd(3,a))||b.withCredentials||Gd(Hd(3,a))==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.O&&b.O[c])}
function Yd(a,b){var c=b.format||"JSON";b.ef&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.Xb;f&&(f[d]&&delete f[d],a=Rd(a,f||{}));var h=b.postBody||"",f=b.O;Xd(a,b)&&(f||(f={}),f[d]=e);f&&w(h)&&(d=Qd(h),mb(d,f),h=b.Ic&&"JSON"==b.Ic?JSON.stringify(d):Nd(d));var k=!1,l,n=Ud(a,function(a){if(!k){k=!0;l&&J(l);var d=Td(a),e=null;if(d||400<=a.status&&500>a.status)e=
$d(c,a,b.cf);if(d)a:if(Ed("ajax_204_success")&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.R&&b.R.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ub&&b.Ub.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.ka&&0<b.timeout&&(l=H(function(){k||(k=!0,n.abort(),J(l),b.ka.call(b.context||m,n))},b.timeout));
return n}
function $d(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=xd(a));break;case "XML":if(b=(b=b.responseXML)?ae(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=be(a)})}c&&ce(d);
return d}
function ce(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Eb(a[b]);a[c]=d}else ce(a[b])}}
function ae(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function be(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Wd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var de={},ee=0;function fe(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):H(a,b||0)}
;var ge=[],he=!1;function ie(){function a(){he=!0;"google_ad_status"in window?fc("DCLKSTAT",1):fc("DCLKSTAT",2)}
yc("//static.doubleclick.net/instream/ad_status.js",a);ge.push(fe(function(){he||"google_ad_status"in window||(Fc("//static.doubleclick.net/instream/ad_status.js",a),fc("DCLKSTAT",3))},5E3))}
function je(){return parseInt(G("DCLKSTAT",0),10)}
;function ke(a,b){this.width=a;this.height=b}
g=ke.prototype;g.clone=function(){return new ke(this.width,this.height)};
g.ld=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.ld()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function le(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in me||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
le.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
le.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
le.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var me={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function ne(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function oe(a,b){return a.classList?a.classList.contains(b):B(ne(a),b)}
function pe(a,b){a.classList?a.classList.add(b):oe(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function qe(a,b){a.classList?a.classList.remove(b):oe(a,b)&&(a.className=Ka(ne(a),function(a){return a!=b}).join(" "))}
function re(a,b,c){c?pe(a,b):qe(a,b)}
;var se=y().toString();function te(a,b){this.J=p(a)?a:0;this.K=p(b)?b:0}
g=te.prototype;g.clone=function(){return new te(this.J,this.K)};
g.equals=function(a){return a instanceof te&&(this==a?!0:this&&a?this.J==a.J&&this.K==a.K:!1)};
g.ceil=function(){this.J=Math.ceil(this.J);this.K=Math.ceil(this.K);return this};
g.floor=function(){this.J=Math.floor(this.J);this.K=Math.floor(this.K);return this};
g.round=function(){this.J=Math.round(this.J);this.K=Math.round(this.K);return this};!hd&&!K||K&&rd(9)||hd&&qd("1.9.1");var ue=K&&!qd("9");function ve(a){we();var b=new zb;b.b=a;return b}
var we=t;function xe(a){return a?new ye(ze(a)):pa||(pa=new ye)}
function Ae(a){var b=document;return w(a)?b.getElementById(a):a}
function Be(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Ce(a)}
function Ce(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className;"function"==typeof h.split&&B(h.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function De(a){var b=a.scrollingElement?a.scrollingElement:!id&&Ee(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&qd("10")&&a.pageYOffset!=b.scrollTop?new te(b.scrollLeft,b.scrollTop):new te(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ee(a){return"CSS1Compat"==a.compatMode}
function Fe(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ge(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function He(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ze(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ie(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Fe(a),a.appendChild(ze(a).createTextNode(String(b)))}
var Je={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ke={IMG:" ",BR:"\n"};function Le(a){if(ue&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Me(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ue||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Me(a,b,c){if(!(a.nodeName in Je))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ke)b.push(Ke[a.nodeName]);else for(a=a.firstChild;a;)Me(a,b,c),a=a.nextSibling}
function Ne(a){var b=Oe.bd;return b?Pe(a,function(a){return!b||w(a.className)&&B(a.className.split(/\s+/),b)},!0,void 0):null}
function Pe(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ye(a){this.b=a||m.document||document}
g=ye.prototype;g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=function(a){return ha(a)&&1==a.nodeType};
g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Qe=r("yt.dom.getNextId_");if(!Qe){Qe=function(){return++Re};
q("yt.dom.getNextId_",Qe,void 0);var Re=0}function Se(){var a=document,b;Ma(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;var gb=r("yt.events.listeners_")||{};q("yt.events.listeners_",gb,void 0);var Te=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Te,void 0);function Ue(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ue(a,b,c,d);if(e)return e;var e=++Te.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new le(d);if(!Pe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new le(b);
b.currentTarget=a;return c.call(a,b)};
h=ic(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);gb[e]=[a,b,c,h,d];return e}
function Ve(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in gb){var b=gb[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[a]}}))}
;function We(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Xe();M(document,"keydown",Xe);M(document,"keyup",Xe);M(document,"mousedown",Xe);M(document,"mouseup",Xe);rc("page-mouse",Xe);rc("page-scroll",Xe);rc("page-resize",Xe)}}
function Xe(){null==r("_lact",window)&&(We(),r("_lact",window));var a=y();q("_lact",a,window);uc("USER_ACTIVE")}
function Ye(){var a=r("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function Ze(){}
Ze.prototype.set=u;Ze.prototype.get=u;Ze.prototype.remove=u;function $e(){}
z($e,Ze);$e.prototype.W=function(){var a=0;Nc(this.pa(!0),function(){a++});
return a};
$e.prototype.pa=u;$e.prototype.clear=function(){var a=Oc(this.pa(!0)),b=this;A(a,function(a){b.remove(a)})};function af(a){this.b=a}
z(af,$e);g=af.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.W=function(){return this.b.length};
g.pa=function(a){var b=0,c=this.b,d=new Lc;d.next=function(){if(b>=c.length)throw Kc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function bf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(bf,af);function cf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(cf,af);function df(a){this.b=a}
df.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
df.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return wd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
df.prototype.remove=function(a){this.b.remove(a)};function ef(a){this.b=a}
z(ef,df);function ff(a){this.data=a}
function gf(a){return!p(a)||a instanceof ff?a:new ff(a)}
ef.prototype.set=function(a,b){ef.C.set.call(this,a,gf(b))};
ef.prototype.f=function(a){a=ef.C.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ef.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hf(a){this.b=a}
z(hf,ef);function jf(a){var b=a.creation;a=a.expiration;return!!a&&a<y()||!!b&&b>y()}
hf.prototype.set=function(a,b,c){if(b=gf(b)){if(c){if(c<y()){hf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}hf.C.set.call(this,a,b)};
hf.prototype.f=function(a,b){var c=hf.C.f.call(this,a);if(c)if(!b&&jf(c))hf.prototype.remove.call(this,a);else return c};function kf(a){this.b=a}
z(kf,hf);function lf(a,b){var c=[];Nc(b,function(a){var b;try{b=kf.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?jf(b)&&c.push(a):c.push(a)},a);
return c}
function mf(a,b){var c=lf(a,b);A(c,function(a){kf.prototype.remove.call(this,a)},a)}
function nf(){var a=of;mf(a,a.b.pa(!0))}
;function N(a,b,c){var d=c&&0<c?c:0;c=d?y()+1E3*d:0;if((d=d?of:pf)&&window.JSON){w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function qf(a){if(!pf&&!of||!window.JSON)return null;var b;try{b=pf.get(a)}catch(c){}if(!w(b))try{b=of.get(a)}catch(c){}if(!w(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function rf(a){pf&&pf.remove(a);of&&of.remove(a)}
var of,sf=new bf;of=sf.isAvailable()?new kf(sf):null;var pf,tf=new cf;pf=tf.isAvailable()?new kf(tf):null;var uf=C("Firefox"),vf=bd()||C("iPod"),wf=C("iPad"),xf=C("Android")&&!(sb()||C("Firefox")||C("Opera")||C("Silk")),yf=sb(),zf=C("Safari")&&!(sb()||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(bd()||C("iPad")||C("iPod"));function Af(a){this.b=a;this.f=this.g=void 0}
function Bf(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Cf={log_event:"events",log_interaction:"interactions"},Df={},Ef={},Ff=0,Gf=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Gf,void 0);function Hf(a,b){Gf[a.endpoint]=Gf[a.endpoint]||[];var c=Gf[a.endpoint];c.push(a.Gc);Ef[a.endpoint]=b;20<=c.length?If():Jf()}
function If(){J(Ff);if(!hb(Gf)){for(var a in Gf){var b=Df[a];if(!b){b=Ef[a];if(!b)continue;b=new b;Df[a]=b}var c=b.f();c.requestTimeMs=Math.round(kc());c[Cf[a]]=Gf[a];b.g(a,c,{});delete Gf[a]}hb(Gf)||Jf()}}
function Jf(){J(Ff);Ff=H(If,G("LOGGING_BATCH_TIMEOUT",1E4))}
;function Kf(a,b){var c=Lf(),d=La(b,function(a){return Bf(a)});
Mf(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Mf(a,b,c){b.eventTimeMs=Math.round(kc());b.lactMs=Ye();c&&(b.clientData=Nf(c));Hf({endpoint:"log_interaction",Gc:b},a)}
function Nf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=La(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Of(){var a=G("client-screen-nonce",void 0);a||(a=G("EVENT_ID",void 0));return a}
;var Pf={};function Qf(a){this.b=a||{cookie:""}}
var Rf=/\s*;\s*/;g=Qf.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Rf),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.qa=function(){return Sf(this).keys};
g.X=function(){return Sf(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.W=function(){return this.b.cookie?(this.b.cookie||"").split(Rf).length:0};
g.$a=function(a){for(var b=Sf(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Sf(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Sf(a){a=(a.b.cookie||"").split(Rf);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Tf=new Qf("undefined"==typeof document?null:document);Tf.f=3950;function Uf(a,b,c){Tf.set(""+a,b,c,"/","youtube.com")}
;function Vf(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Gd(Hd(3,window.location.href));e&&d.push(e);e=Gd(Hd(3,a));if(B(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Fd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))Ed("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||Of()),d="ST-"+Ha(d).toString(36),e=b?Nd(b):"",Uf(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new Af(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Pd(a,{})+"",a=a instanceof tb?a:xb(a),c.href=vb(a));return!0}
;function Wf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||jb(Xf);this.assets=a.assets||{};this.attrs=a.attrs||jb(Yf);this.params=a.params||jb(Zf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Xf={enablejsapi:1},Yf={},Zf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function $f(a){a instanceof Wf||(a=new Wf(a));return a}
Wf.prototype.clone=function(){var a=new Wf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==da(c)?a[b]=jb(c):a[b]=c}return a};function ag(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=ag.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new ag(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof ag?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.J>=this.left&&a.J<=this.right&&a.K>=this.top&&a.K<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=bg.prototype;g.clone=function(){return new bg(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof te?a.J>=this.left&&a.J<=this.left+this.width&&a.K>=this.top&&a.K<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function cg(a,b){var c=ze(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function dg(a,b){return cg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function eg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function fg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function gg(a){var b=hg;if("none"!=dg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function hg(a){var b=a.offsetWidth,c=a.offsetHeight,d=id&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ke(b,c):(a=eg(a),new ke(a.right-a.left,a.bottom-a.top))}
function ig(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function jg(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?ig(a,c):0}
var kg={thin:2,medium:4,thick:6};function lg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in kg?kg[c]:ig(a,c)}
;function mg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,l,n;if(lc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(I){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(I){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ca(mg);function ng(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function og(a){if(window.spf){var b=a.match(pg);spf.style.load(a,b?b[1]:"",void 0)}else qg(a)}
function qg(a){var b=rg(a),c=document.getElementById(b),d=c&&D(c,"loaded");d||c&&!d||(c=sg(a,b,function(){D(c,"loaded")||(Hb(c,"loaded","true"),uc(b),H(na(xc,b),0))}))}
function sg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ve(a);Gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function rg(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ha(a)}
var pg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var tg;var ug=nb,ug=ug.toLowerCase();if(-1!=ug.indexOf("android")){var vg=ug.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(vg)tg=Number(vg[1]);else{var wg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},xg=ug.match("("+eb(wg).join("|")+")");tg=xg?wg[xg[0]]:0}}else tg=void 0;var yg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],zg=['audio/mp4; codecs="mp4a.40.2"'];function Ag(a){E.call(this);this.b=[];this.f=a||this}
z(Ag,E);function Bg(a,b,c,d){d=ic(x(d,a.f));d={target:b,name:c,ob:d};b.addEventListener(c,d.ob,void 0);a.b.push(d)}
Ag.prototype.Db=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.ob);break}};
function Cg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ob)}}
Ag.prototype.w=function(){Cg(this);Ag.C.w.call(this)};function Dg(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Eg(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){Fg(c,2,a)},function(a){Fg(c,3,a)})}catch(d){Fg(this,3,d)}}
function Gg(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Gg.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Hg=new Ob(function(){return new Gg},function(a){a.reset()},100);
function Ig(a,b,c){var d=Hg.get();d.g=a;d.f=b;d.context=c;return d}
function Jg(a){if(a instanceof Eg)return a;var b=new Eg(t);Fg(b,2,a);return b}
function Kg(a){return new Eg(function(b,c){c(a)})}
Eg.prototype.then=function(a,b,c){return Lg(this,ga(a)?a:null,ga(b)?b:null,c)};
Dg(Eg);Eg.prototype.cancel=function(a){0==this.b&&Tb(function(){var b=new Mg(a);Ng(this,b)},this)};
function Ng(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.i||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?Ng(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Og(c),Pg(c,e,3,b)))}a.g=null}else Fg(a,3,b)}
function Rg(a,b){a.f||2!=a.b&&3!=a.b||Sg(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Lg(a,b,c,d){var e=Ig(null,null,null);e.b=new Eg(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Mg?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;Rg(a,e);return e.b}
Eg.prototype.T=function(a){this.b=0;Fg(this,2,a)};
Eg.prototype.G=function(a){this.b=0;Fg(this,3,a)};
function Fg(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.T,h=a.G;if(e instanceof Eg)Rg(e,Ig(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){Tg(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,Sg(a),3!=b||c instanceof Mg||Ug(a,c))}}
function Tg(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function Sg(a){a.o||(a.o=!0,Tb(a.B,a))}
function Og(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Eg.prototype.B=function(){for(var a;a=Og(this);)Pg(this,a,this.b,this.l);this.o=!1};
function Pg(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Vg(b,c,d);else try{b.i?b.g.call(b.context):Vg(b,c,d)}catch(e){Wg.call(null,e)}Pb(Hg,b)}
function Vg(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ug(a,b){a.j=!0;Tb(function(){a.j&&Wg.call(null,b)})}
var Wg=Lb;function Mg(a){oa.call(this,a)}
z(Mg,oa);Mg.prototype.name="cancel";function Xg(){return{apiaryHost:G("APIARY_HOST",void 0),fc:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),Cd:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ed:G("INNERTUBE_CONTEXT_HL",void 0),Dd:G("INNERTUBE_CONTEXT_GL",void 0),Ee:G("XHR_APIARY_HOST",void 0)}}
function Yg(a){a={client:{hl:a.Ed,gl:a.Dd,clientName:a.Cd,clientVersion:a.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});return a}
;function Zg(){this.b=Xg();$g||($g=ah(this.b))}
var $g=null;function ah(a){return(new Eg(function(b){yc(G("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){jc(c)}})})).then(function(){})}
Zg.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.fc;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Zg.prototype.f=function(){return{context:Yg(this.b)}};
Zg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=H(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
bh(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function bh(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);$g.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function ch(a,b,c){var d={};d.eventTimeMs=Math.round(c||kc());d[a]=b;Hf({endpoint:"log_event",Gc:d},Zg)}
;function dh(a,b){this.f=this.B=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof dh?(this.o=p(b)?b:a.o,eh(this,a.i),this.B=a.B,fh(this,a.f),gh(this,a.l),this.b=a.b,hh(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(Fd))?(this.o=!!b,eh(this,c[1]||"",!0),this.B=ih(c[2]||""),fh(this,c[3]||"",!0),gh(this,c[4]),this.b=ih(c[5]||"",!0),hh(this,c[6]||"",!0),this.j=ih(c[7]||"")):(this.o=!!b,this.g=new jh(null,0,this.o))}
dh.prototype.toString=function(){var a=[],b=this.i;b&&a.push(kh(b,lh,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.B)&&a.push(kh(b,lh,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(kh(c,"/"==c.charAt(0)?mh:nh,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",kh(c,oh));return a.join("")};
dh.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?eh(b,a.i):c=!!a.B;c?b.B=a.B:c=!!a.f;c?fh(b,a.f):c=null!=a.l;var d=a.b;if(c)gh(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?hh(b,ih(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
dh.prototype.clone=function(){return new dh(this)};
function eh(a,b,c){a.i=c?ih(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function fh(a,b,c){a.f=c?ih(b,!0):b}
function gh(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function hh(a,b,c){b instanceof jh?(a.g=b,ph(a.g,a.o)):(c||(b=kh(b,qh)),a.g=new jh(b,0,a.o))}
function O(a,b,c){a.g.set(b,c)}
function rh(a,b,c){v(c)||(c=[String(c)]);sh(a.g,b,c)}
function th(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36));return a}
function uh(a){return a instanceof dh?a.clone():new dh(a,void 0)}
function vh(a,b,c,d){var e=new dh(null,void 0);a&&eh(e,a);b&&fh(e,b);c&&gh(e,c);d&&(e.b=d);return e}
function ih(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function kh(a,b,c){return w(a)?(a=encodeURI(a).replace(b,wh),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function wh(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var lh=/[#\/\?@]/g,nh=/[\#\?:]/g,mh=/[\#\?]/g,qh=/[\#\?@]/g,oh=/#/g;function jh(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function xh(a){a.b||(a.b=new Pc,a.f=0,a.g&&Id(a.g,function(b,c){yh(a,sa(b),c)}))}
g=jh.prototype;g.W=function(){xh(this);return this.f};
function yh(a,b,c){xh(a);a.g=null;b=zh(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){xh(this);a=zh(this,a);return Rc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){xh(this);return 0==this.f};
function Ah(a,b){xh(a);b=zh(a,b);return Rc(a.b.f,b)}
g.$a=function(a){var b=this.X();return B(b,a)};
g.qa=function(){xh(this);for(var a=this.b.X(),b=this.b.qa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.X=function(a){xh(this);var b=[];if(w(a))Ah(this,a)&&(b=Ta(b,this.b.get(zh(this,a))));else{a=this.b.X();for(var c=0;c<a.length;c++)b=Ta(b,a[c])}return b};
g.set=function(a,b){xh(this);this.g=null;a=zh(this,a);Ah(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.X(a):[];return 0<c.length?String(c[0]):b};
function sh(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(zh(a,b),Ua(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.qa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new jh;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function zh(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function ph(a,b){b&&!a.i&&(xh(a),a.g=null,a.b.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),sh(this,c,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Wc(arguments[b],function(a,b){yh(this,b,a)},this)};var Bh="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Ch="";
function Dh(a){return a&&a==Ch?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Bh.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Ch=a,!0):!1}
;var Eh={},Fh=0;function Gh(a){var b=new Image,c=""+Fh++;Eh[c]=b;b.onload=b.onerror=function(){delete Eh[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function Hh(a){if(!a.Aa){var b={};a.call(b);a.Aa=b.version}return a.Aa}
function Ih(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Hh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.b=b}
Q.prototype.toString=function(){return this.topic};var Jh=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.na;F.prototype.publish=F.prototype.A;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Jh,void 0);var Kh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Kh,void 0);var Lh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Lh,void 0);var Mh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Mh,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=Nh();c&&c.publish.call(c,a.toString(),a,b)}
function Oh(a,b,c){var d=Nh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Kh[e])try{if(h&&a instanceof Q&&a!=d)try{h=Ih(a.b,h)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,h)}catch(l){jc(l)}};
Mh[a.toString()]?r("yt.scheduler.instance")?fe(f,void 0):H(f,0):f()}});
Kh[e]=!0;Lh[a.toString()]||(Lh[a.toString()]=[]);Lh[a.toString()].push(e);return e}
function Ph(a){var b=Nh();b&&(fa(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete Kh[a]}))}
function Nh(){return r("yt.pubsub2.instance_")}
;var Qh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Rh(a){P.call(this,1,arguments)}
z(Rh,P);var Sh=new Q("timing-sent",Rh);var Th={vc:!0},Uh=/^mark_/i,Vh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Wh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Xh=x(Qh.clearResourceTimings||Qh.webkitClearResourceTimings||Qh.mozClearResourceTimings||Qh.msClearResourceTimings||Qh.oClearResourceTimings||t,Qh);
function Yh(a){if("_"!=a[0]){var b=a;Qh.mark&&(Uh.test(b)||(b="mark_"+b),Qh.mark(b))}var b=Zh(),c=kc();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;$h()["tick_"+a]=void 0;Ed("csi_on_gel")?(b=ai(),"_start"==a?ch("latencyActionBaselined",{clientActionNonce:b},void 0):ch("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!Ed("navigation_only_csi_reset"));if(!a&&(b=G("TIMING_ACTION",void 0),a=Zh(),r("yt.timing.ready_")&&b&&a._start&&
bi())){b=!0;c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ci()}}
function di(){var a=ei().info.yt_lt="hot_bg";$h().info_yt_lt=a;if(Ed("csi_on_gel"))if("yt_lt"in Vh){var b={},c=Vh.yt_lt;B(Wh,c)&&(a=!!a);b[c]=a;a=ai();b.clientActionNonce=a;ch("latencyActionInfo",b)}else jc(Error("Unknown label yt_lt logged with GEL CSI."))}
function bi(){var a=Zh();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ci(){var a=Zh(),b=ei().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&v(a[d])){var e=d.slice(1);if(e in Th){var f=La(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))fi(f,e),gi(),Xh(),hi(!1,void 0)}else{var h=G("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:G("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=Qh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=Qh.getEntriesByName?Qh.getEntriesByName(l)[0]:
null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=bi();ii()&&"youtube"==h&&(di(),h=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=kc();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Ed("navigation_only_csi_reset")||(gi(),Xh(),hi(!1,void 0));fi(f,e,void 0);R(Sh,new Rh(b.aft+(k||0)))}}
function fi(a,b,c){if(Ed("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Gh(a)}catch(f){a&&Gh(a)}else a&&Gh(a);hi(!0,c)}
function ai(){var a=ei().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=y();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(se)for(c=1,d=0;d<se.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^se.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");ei().nonce=a}return a}
function Zh(){return ei().tick}
function $h(){var a=ei();"gel"in a||(a.gel={});return a.gel}
function ei(){return r("ytcsi.data_")||gi()}
function gi(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function hi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function ii(){var a=Zh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==ei().info.yt_pvis}
;var ji={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function ki(a,b){E.call(this);this.o=this.j=a;this.aa=b;this.B=!1;this.f={};this.La=this.$=null;this.da=new F;Zb(this,this.da);this.i={};this.G=this.Ma=this.g=this.Ya=this.b=null;this.oa=!1;this.H=this.l=this.P=this.U=null;this.Na={};this.hd=["onReady"];this.ra=new Ag(this);Zb(this,this.ra);this.Gb=null;this.cc=NaN;this.va={};li(this);this.sa("onDetailedError",x(this.Sd,this));this.sa("onTabOrderChange",x(this.md,this));this.sa("onTabAnnounce",x(this.dc,this));this.sa("WATCH_LATER_VIDEO_ADDED",x(this.Td,
this));this.sa("WATCH_LATER_VIDEO_REMOVED",x(this.Ud,this));uf||(this.sa("onMouseWheelCapture",x(this.Pd,this)),this.sa("onMouseWheelRelease",x(this.Qd,this)));this.sa("onAdAnnounce",x(this.dc,this));this.L=new Ag(this);Zb(this,this.L);this.Xa=!1;this.Wa=null}
z(ki,E);var mi=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=ki.prototype;g.Zb=function(a,b){this.D()||(ni(this,a),oi(this,b),this.B&&pi(this))};
function ni(a,b){a.Ya=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.aa,a.b.attrs.id=a.aa);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.aa;a.Ma||(a.Ma=qi(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=fg(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=fg(Number(c)||c,!0)}
g.td=function(){return this.Ya};
function pi(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function ri(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=ng(mg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function si(a,b){if((!b||(5!=(ji[b.errorCode]||5)?0:-1!=mi.indexOf(b.errorCode)))&&ri(a)){var c=ti(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=$f(c));d.args.autoplay=1;d.args.html5_unavailable="1";ni(a,d);oi(a,"flash")}}
function oi(a,b){if(!a.D()){if(!b){var c;if(!(c=!a.b.html5&&ri(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==tg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?yg:zg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=ui(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ri(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ce:a.De).call(a)}}
function ui(a){var b=!0,c=ti(a);c&&a.b&&(a=a.b,b=D(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.De=function(){if(!this.oa){var a=ui(this);a&&"html5"==vi(this)?(this.G="html5",this.B||this.Ra()):(wi(this),this.G="html5",a&&this.P?(this.j.appendChild(this.P),this.Ra()):(this.b.loaded=!0,this.U=x(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Ra()},this),this.oa=!0,a?this.U():(yc(this.b.assets.js,this.U),og(this.b.assets.css))))}};
g.Ce=function(){var a=this.b.clone();if(!this.l){var b=ti(this);b&&(this.l=document.createElement("span"),this.l.tabIndex=0,Bg(this.ra,this.l,"focus",this.uc),this.H=document.createElement("span"),this.H.tabIndex=0,Bg(this.ra,this.H,"focus",this.uc),b.parentNode&&b.parentNode.insertBefore(this.l,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==vi(this))this.G="flash",this.B||this.Ra();else{wi(this);
this.G="flash";this.b.loaded=!0;var b=mg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!ng(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=w(b)?Ae(b):b,d=jb(a.attrs);d.tabindex=0;var e=jb(a.params);e.flashvars=Nd(a.args);if(lc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.Ra()}};
g.uc=function(){ti(this).focus()};
function ti(a){var b=Ae(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.Ra=function(){if(!this.D()){var a=ti(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.oa=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))si(this);else{li(this);this.B=!0;a=ti(this);a.addEventListener&&(this.$=xi(this,a,"addEventListener"));a.removeEventListener&&(this.La=xi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=xi(this,a,d))}for(var e in this.i)this.$(e,
this.i[e]);pi(this);this.Ma&&this.Ma(this.f);this.da.A("onReady",this.f)}else this.cc=H(x(this.Ra,this),50)}};
function xi(a,b,c){var d=b[c];return function(){try{return a.Gb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Gb=e,jc(e,"WARNING"))}}}
function li(a){a.B=!1;if(a.La)for(var b in a.i)a.La(b,a.i[b]);for(var c in a.va)J(parseInt(c,10));a.va={};a.$=null;a.La=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.sa,a);a.f.removeEventListener=x(a.pe,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.ud,a);a.f.getPlayerType=x(a.vd,a);a.f.getCurrentVideoConfig=x(a.td,a);a.f.loadNewVideoConfig=x(a.Zb,a);a.f.isReady=x(a.Pe,a)}
g.Pe=function(){return this.B};
g.sa=function(a,b){if(!this.D()){var c=qi(this,b);if(c){if(!B(this.hd,a)&&!this.i[a]){var d=yi(this,a);this.$&&this.$(a,d)}this.da.subscribe(a,c);"onReady"==a&&this.B&&H(na(c,this.f),0)}}};
g.pe=function(a,b){if(!this.D()){var c=qi(this,b);c&&this.da.unsubscribe(a,c)}};
function qi(a,b){var c=b;if("string"==typeof b){if(a.Na[b])return a.Na[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Na[b]=c}return c?c:null}
function yi(a,b){var c="ytPlayer"+b+a.aa;a.i[b]=c;m[c]=function(c){var d=H(function(){if(!a.D()){a.da.A(b,c);var e=a.va,h=String(d);h in e&&delete e[h]}},0);
ib(a.va,String(d))};
return c}
g.md=function(a){a=a?He:Ge;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.l||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
g.dc=function(a){uc("a11y-announce",a)};
g.Sd=function(a){si(this,a)};
g.Td=function(a){uc("WATCH_LATER_VIDEO_ADDED",a)};
g.Ud=function(a){uc("WATCH_LATER_VIDEO_REMOVED",a)};
g.Pd=function(){this.Xa||(yf?(this.Wa=De(document),Bg(this.L,window,"scroll",this.je),Bg(this.L,this.j,"touchmove",this.de)):(Bg(this.L,this.j,"mousewheel",this.yc),Bg(this.L,this.j,"wheel",this.yc)),this.Xa=!0)};
g.Qd=function(){Cg(this.L);this.Xa=!1};
g.yc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.je=function(){window.scrollTo(this.Wa.J,this.Wa.K)};
g.de=function(a){a.preventDefault()};
g.vd=function(){return this.G||vi(this)};
g.ud=function(){return this.Gb};
function vi(a){return(a=ti(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function wi(a){Yh("dcp");a.cancel();li(a);a.G=null;a.b&&(a.b.loaded=!1);var b=ti(a);"html5"==vi(a)?a.P=b:b&&b.destroy&&b.destroy();Fe(a.j);Cg(a.ra);a.l=null;a.H=null}
g.cancel=function(){this.U&&Fc(this.b.assets.js,this.U);J(this.cc);this.oa=!1};
g.w=function(){wi(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){jc(b)}this.Na=null;for(var a in this.i)m[this.i[a]]=null;this.Ya=this.b=this.f=null;delete this.j;delete this.o;ki.C.w.call(this)};var zi={},Ai="player_uid_"+(1E9*Math.random()>>>0);function Bi(a,b){a=w(a)?Ae(a):a;b=$f(b);var c=Ai+"_"+ia(a),d=zi[c];if(d)return d.Zb(b),d.f;d=new ki(a,c);zi[c]=d;uc("player-added",d.f);$b(d,na(Ci,d));H(function(){d.Zb(b)},0);
return d.f}
function Ci(a){zi[a.aa]=null}
function Di(a){a=Ae(a);if(!a)return null;var b=Ai+"_"+ia(a),c=zi[b];c||(c=new ki(a,b),zi[b]=c);return c.f}
;var Ei=r("yt.abuse.botguardInitialized")||Ic;q("yt.abuse.botguardInitialized",Ei,void 0);var Fi=r("yt.abuse.invokeBotguard")||Jc;q("yt.abuse.invokeBotguard",Fi,void 0);var Gi=r("yt.abuse.dclkstatus.checkDclkStatus")||je;q("yt.abuse.dclkstatus.checkDclkStatus",Gi,void 0);var Hi=r("yt.player.exports.navigate")||Vf;q("yt.player.exports.navigate",Hi,void 0);var Ii=r("yt.player.embed")||Bi;q("yt.player.embed",Ii,void 0);var Ji=r("yt.player.getPlayerByElement")||Di;q("yt.player.getPlayerByElement",Ji,void 0);
var Ki=r("yt.util.activity.init")||We;q("yt.util.activity.init",Ki,void 0);var Li=r("yt.util.activity.getTimeSinceActive")||Ye;q("yt.util.activity.getTimeSinceActive",Li,void 0);var Mi=r("yt.util.activity.setTimestamp")||Xe;q("yt.util.activity.setTimestamp",Mi,void 0);function Ni(a){P.call(this,1,arguments);this.b=a}
z(Ni,P);function Oi(a){P.call(this,1,arguments);this.b=a}
z(Oi,P);function Pi(a,b,c,d){P.call(this,2,arguments);this.g=a;this.b=null===b?null:!!b;this.receivePostUpdates=null===c?null:!!c;this.f=null===d?null:!!d}
z(Pi,P);function Qi(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
z(Qi,P);function Ri(a,b,c){P.call(this,1,arguments);this.b=a;this.subscriptionId=b}
z(Ri,P);function Si(a,b,c,d,e,f,h){P.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
z(Si,P);
var Ti=new Q("subscription-batch-subscribe",Ni),Ui=new Q("subscription-batch-unsubscribe",Ni),Vi=new Q("subscription-pref-email",Pi),Wi=new Q("subscription-subscribe",Qi),Xi=new Q("subscription-subscribe-loading",Oi),Yi=new Q("subscription-subscribe-loaded",Oi),Zi=new Q("subscription-subscribe-success",Ri),$i=new Q("subscription-subscribe-external",Qi),aj=new Q("subscription-unsubscribe",Si),bj=new Q("subscription-unsubscirbe-loading",Oi),cj=new Q("subscription-unsubscribe-loaded",Oi),dj=new Q("subscription-unsubscribe-success",
Oi),ej=new Q("subscription-external-unsubscribe",Si),fj=new Q("subscription-enable-ypc",Oi),gj=new Q("subscription-disable-ypc",Oi);function hj(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Od(c,"mode",b));c=Od("/signin?context=popup","next",c);c=Od(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=rc("LOGGED_IN",function(b){tc(G("LOGGED_IN_PUBSUB_KEY",void 0));fc("LOGGED_IN",!0);a(b)});
fc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",uc,void 0);function ij(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function jj(){var a=Se();return a?a:null}
;function kj(a,b){(a=Ae(a))&&a.style&&(a.style.display=b?"":"none",re(a,"hid",!b))}
function lj(a){A(arguments,function(a){!ea(a)||a instanceof Element?kj(a,!0):A(a,function(a){lj(a)})})}
function mj(a){A(arguments,function(a){!ea(a)||a instanceof Element?kj(a,!1):A(a,function(a){mj(a)})})}
;var nj={},oj="ontouchstart"in document;function pj(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Pe(c,function(a){return oe(a,b)},!0,d)}
function qj(a){var b="mouseover"==a.type&&"mouseenter"in nj||"mouseout"==a.type&&"mouseleave"in nj,c=a.type in nj||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=nj[b],d;for(d in c.ha){var e=pj(b,d,a.target);e&&!Pe(a.relatedTarget,function(a){return a==e},!0)&&c.A(d,e,b,a)}}if(b=nj[a.type])for(d in b.ha)(e=pj(a.type,d,a.target))&&b.A(d,e,a.type,a)}}
M(document,"blur",qj,!0);M(document,"change",qj,!0);M(document,"click",qj);M(document,"focus",qj,!0);M(document,"mouseover",qj);M(document,"mouseout",qj);M(document,"mousedown",qj);M(document,"keydown",qj);M(document,"keyup",qj);M(document,"keypress",qj);M(document,"cut",qj);M(document,"paste",qj);oj&&(M(document,"touchstart",qj),M(document,"touchend",qj),M(document,"touchcancel",qj));function rj(a){this.j=a;this.g={};this.yb=[];this.i=[]}
function S(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
rj.prototype.register=u;rj.prototype.unregister=function(){tc(this.yb);this.yb.length=0;Ph(this.i);this.i.length=0};
rj.prototype.init=t;rj.prototype.dispose=t;function sj(a,b,c){a.i.push(Oh(b,c,a))}
function tj(a,b,c){var d=S(a,void 0),e=x(c,a);b in nj||(nj[b]=new F);nj[b].subscribe(d,e);a.g[c]=e}
function uj(a,b,c){if(b in nj){var d=nj[b];d.unsubscribe(S(a,void 0),a.g[c]);0>=d.W()&&(d.dispose(),delete nj[b])}delete a.g[c]}
function vj(a,b){Hb(a,"tooltip-text",b)}
;function wj(){rj.call(this,"tooltip");this.b=0;this.f={}}
z(wj,rj);ca(wj);g=wj.prototype;g.register=function(){tj(this,"mouseover",this.vb);tj(this,"mouseout",this.Ia);tj(this,"focus",this.mc);tj(this,"blur",this.hc);tj(this,"click",this.Ia);tj(this,"touchstart",this.Qc);tj(this,"touchend",this.Cb);tj(this,"touchcancel",this.Cb)};
g.unregister=function(){uj(this,"mouseover",this.vb);uj(this,"mouseout",this.Ia);uj(this,"focus",this.mc);uj(this,"blur",this.hc);uj(this,"click",this.Ia);uj(this,"touchstart",this.Qc);uj(this,"touchend",this.Cb);uj(this,"touchcancel",this.Cb);this.dispose();wj.C.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ia(this.f[a]);this.f={}};
g.vb=function(a){if(!(this.b&&1E3>y()-this.b)){var b=parseInt(D(a,"tooltip-hide-timer"),10);b&&(Jb(a,"tooltip-hide-timer"),J(b));var b=x(function(){xj(this,a);Jb(a,"tooltip-show-timer")},this),c=parseInt(D(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Hb(a,"tooltip-show-timer",b.toString());a.title&&(vj(a,yj(a)),a.title="");b=ia(a).toString();this.f[b]=a}};
g.Ia=function(a){var b=parseInt(D(a,"tooltip-show-timer"),10);b&&(J(b),Jb(a,"tooltip-show-timer"));b=x(function(){if(a){var b=Ae(zj(this,a));b&&(Aj(b),b&&b.parentNode&&b.parentNode.removeChild(b),Jb(a,"content-id"));(b=Ae(zj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Jb(a,"tooltip-hide-timer")},this);
b=H(b,50);Hb(a,"tooltip-hide-timer",b.toString());if(b=D(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
g.mc=function(a){this.b=0;this.vb(a)};
g.hc=function(a){this.b=0;this.Ia(a)};
g.Qc=function(a,b,c){c.changedTouches&&(this.b=0,a=pj(b,S(this),c.changedTouches[0].target),this.vb(a))};
g.Cb=function(a,b,c){c.changedTouches&&(this.b=y(),a=pj(b,S(this),c.changedTouches[0].target),this.Ia(a))};
function Bj(a,b){vj(a,b);var c=D(a,"content-id");(c=Ae(c))&&Ie(c,b)}
function yj(a){return D(a,"tooltip-text")||a.title}
function xj(a,b){if(b){var c=yj(b);if(c){var d=Ae(zj(a,b));if(!d){d=document.createElement("div");d.id=zj(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=S(a,"tip-content");var k=Cj(a,b),l=zj(a,b,"content");h.id=l;Hb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var n=
Le(b),l=zj(a,b,"arialabel"),f=document.createElement("div");pe(f,S(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;Ie(f,n);b.setAttribute("aria-labelledby",l);l=jj()||document.body;l.appendChild(f);l.appendChild(d);Bj(b,c);(c=parseInt(D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",pe(h,S(a,"normal-wrap")));h=oe(b,S(a,"reverse"));Dj(a,b,d,e,k,h)||Dj(a,b,d,e,k,!h);var I=S(a,"tip-visible");
H(function(){pe(d,I)},0)}}}}
function Dj(a,b,c,d,e,f){re(c,S(a,"tip-reverse"),f);var h=0;f&&(h=1);a=gg(b);f=new te((a.width-10)/2,f?a.height:0);var k=ze(b),l=new te(0,0),n;n=k?ze(k):document;n=!K||rd(9)||Ee(xe(n).b)?n.documentElement:n.body;b!=n&&(n=eg(b),k=De(xe(k).b),l.J=n.left+k.J,l.K=n.top+k.K);f=new te(l.J+f.J,l.K+f.K);f=f.clone();l=(h&8&&"rtl"==dg(c,"direction")?h^4:h)&-9;h=gg(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.J-=k.width+0:l&2&&(n.J-=k.width/2),l&1&&(n.K-=k.height+0));f=new bg(0,0,0,0);f.left=n.J;f.top=
n.K;f.width=k.width;f.height=k.height;k=new te(f.left,f.top);k instanceof te?(l=k.J,k=k.K):(l=k,k=void 0);c.style.left=fg(l,!1);c.style.top=fg(k,!1);k=new ke(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,l=Ee(xe(ze(c)).b),!K||qd("10")||l&&qd("8"))f=c.style,hd?f.MozBoxSizing="border-box":id?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(K){l=jg(c,"paddingLeft");k=jg(c,
"paddingRight");n=jg(c,"paddingTop");var I=jg(c,"paddingBottom"),l=new ag(n,k,I,l)}else l=cg(c,"paddingLeft"),k=cg(c,"paddingRight"),n=cg(c,"paddingTop"),I=cg(c,"paddingBottom"),l=new ag(parseFloat(n),parseFloat(k),parseFloat(I),parseFloat(l));if(K&&!rd(9)){k=lg(c,"borderLeft");n=lg(c,"borderRight");var I=lg(c,"borderTop"),ba=lg(c,"borderBottom"),k=new ag(I,n,ba,k)}else k=cg(c,"borderLeftWidth"),n=cg(c,"borderRightWidth"),I=cg(c,"borderTopWidth"),ba=cg(c,"borderBottomWidth"),k=new ag(parseFloat(I),
parseFloat(n),parseFloat(ba),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=Ee(h)?h.documentElement:h.body;f=new ke(h.clientWidth,h.clientHeight);1==c.nodeType?(c=eg(c),k=new te(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new te(c.clientX,c.clientY));c=gg(d);n=Math.floor(c.width/2);h=!!(f.height<k.K+a.height);a=!!(k.K<a.height);l=!!(k.J<n);f=!!(f.width<
k.J+n);k=(c.width+3)/-2- -5;b=D(b,"force-tooltip-direction");if("left"==b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function zj(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=Qe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Cj(a,b){var c=null;jd&&oe(b,S(a,"masked"))&&((c=Ae("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),lj(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function Aj(a){var b=Ae("yt-uix-tooltip-shared-mask"),c=b&&Pe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),mj(b),document.body.appendChild(b))}
;function Ej(){rj.call(this,"subscription-button")}
z(Ej,rj);ca(Ej);Ej.prototype.register=function(){tj(this,"click",this.Ib);sj(this,Xi,this.xc);sj(this,Yi,this.wc);sj(this,Zi,this.be);sj(this,bj,this.xc);sj(this,cj,this.wc);sj(this,dj,this.he);sj(this,fj,this.Od);sj(this,gj,this.Nd)};
Ej.prototype.unregister=function(){uj(this,"click",this.Ib);Ej.C.unregister.call(this)};
var Oe={$b:"hover-enabled",$c:"yt-uix-button-subscribe",ad:"yt-uix-button-subscribed",Re:"ypc-enabled",bd:"yt-uix-button-subscription-container",cd:"yt-subscription-button-disabled-mask-container"},Fj={Se:"channel-external-id",dd:"subscriber-count-show-when-subscribed",ed:"subscriber-count-tooltip",fd:"subscriber-count-title",Ue:"href",ac:"is-subscribed",We:"parent-url",Ye:"clicktracking",gd:"style-type",bc:"subscription-id",af:"target",jd:"ypc-enabled"};g=Ej.prototype;
g.Ib=function(a){var b=D(a,"href"),c=ij();if(b)a=D(a,"target")||"_self",window.open(b,a);else if(c){var b=D(a,"channel-external-id"),c=D(a,"clicktracking"),d;if(D(a,"ypc-enabled")){d=D(a,"ypc-item-type");var e=D(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=D(a,"parent-url");if(D(a,"is-subscribed")){var f=D(a,"subscription-id");R(aj,new Si(b,f,d,a,c,e))}else R(Wi,new Qi(b,d,c,e))}else Gj(this,a)};
g.xc=function(a){this.Oa(a.b,this.Nc,!0)};
g.wc=function(a){this.Oa(a.b,this.Nc,!1)};
g.be=function(a){this.Oa(a.b,this.Oc,!0,a.subscriptionId)};
g.he=function(a){this.Oa(a.b,this.Oc,!1)};
g.Od=function(a){this.Oa(a.b,this.qd)};
g.Nd=function(a){this.Oa(a.b,this.pd)};
g.Oc=function(a,b,c){b?(Hb(a,Fj.ac,"true"),c&&Hb(a,Fj.bc,c)):(Jb(a,Fj.ac),Jb(a,Fj.bc));Hj(a)};
g.Nc=function(a,b){var c;c=Ne(a);re(c,Oe.cd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Hj(a){var b=D(a,Fj.gd),c=!!D(a,"is-subscribed"),b="-"+b,d=Oe.ad+b;re(a,Oe.$c+b,!c);re(a,d,c);D(a,Fj.ed)&&!D(a,Fj.dd)&&(b=S(wj.getInstance()),re(a,b,!c),a.title=c?"":D(a,Fj.fd));c?H(function(){pe(a,Oe.$b)},1E3):qe(a,Oe.$b)}
g.qd=function(a){var b=!!D(a,"ypc-item-type"),c=!!D(a,"ypc-item-id");!D(a,"ypc-enabled")&&b&&c&&(pe(a,"ypc-enabled"),Hb(a,Fj.jd,"true"))};
g.pd=function(a){D(a,"ypc-enabled")&&(qe(a,"ypc-enabled"),Jb(a,"ypc-enabled"))};
function Ij(a,b){return Ka(Be(S(a)),function(a){return b==D(a,"channel-external-id")},a)}
g.kd=function(a,b,c){var d=Xa(arguments,2);A(a,function(a){b.apply(this,Ta(a,d))},this)};
g.Oa=function(a,b,c){var d=Ij(this,a);this.kd.apply(this,Ta([d],Xa(arguments,1)))};
function Gj(a,b){var c=x(function(a){a.discoverable_subscriptions&&fc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Ib(b)},a);
hj(c,"subscribe")}
;var Jj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Jj,void 0);var Kj=window,Lj=document,Mj=Kj.location;function Nj(){}
var Oj=/\[native code\]/;function T(a,b,c){return a[b]=a[b]||c}
function Pj(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Qj(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Rj(){var a;if((a=Object.create)&&Oj.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Sj=T(Kj,"gapi",{});var U;U=T(Kj,"___jsl",Rj());T(U,"I",0);T(U,"hel",10);function Tj(){var a=Mj.href,b;if(U.dpo)b=U.h;else{b=U.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Uj(a){var b=T(U,"PQ",[]);U.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Vj(a){return T(T(U,"H",Rj()),a,Rj())}
;var Wj=T(U,"perf",Rj());T(Wj,"g",Rj());var Xj=T(Wj,"i",Rj());T(Wj,"r",[]);Rj();Rj();function Yj(a,b,c){b&&0<b.length&&(b=Zj(b),c&&0<c.length&&(b+="___"+Zj(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=T(Xj,"_p",Rj()),T(b,c,Rj())[a]=(new Date).getTime(),b=Wj.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Zj(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var ak=Rj(),bk=[];function ck(a){throw Error("Bad hint"+(a?": "+a:""));}
;bk.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?U[b]=T(U,b,[]).concat(c):T(U,b,c)}if(b=a.u)a=T(U,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var dk=/^(\/[a-zA-Z0-9_\-]+)+$/,ek=/^[a-zA-Z0-9\-_\.,!]+$/,fk=/^gapi\.loaded_[0-9]+$/,gk=/^[a-zA-Z0-9,._-]+$/;function hk(a,b,c,d){var e=a.split(";"),f=e.shift(),h=ak[f],k=null;h?k=h(e,b,c,d):ck("no hint processor for: "+f);k||ck("failed to generate load url");b=k;c=b.match(ik);(d=b.match(jk))&&1===d.length&&kk.test(b)&&c&&1===c.length||ck("failed sanity: "+a);return k}
function lk(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=mk(a);fk.test(c)||ck("invalid_callback");b=nk(b);d=d&&d.length?nk(d):null;return[encodeURIComponent(a.le).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ec?"/am="+e(a.ec):"",a.Kc?"/rs="+e(a.Kc):"",a.Zc?"/t="+e(a.Zc):"","/cb=",e(c)].join("")}
function mk(a){"/"!==a.charAt(0)&&ck("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ck("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&h&&k&&(a[h]=a[h]||k)}b="/"+c.join("/");dk.test(b)||ck("invalid_prefix");c=ok(a,"k",!0);d=ok(a,"am");e=ok(a,"rs");a=ok(a,"t");return{le:b,version:c,
ec:d,Kc:e,Zc:a}}
function nk(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");gk.test(e)&&b.push(e)}return b.join(",")}
function ok(a,b,c){a=a[b];!a&&c&&ck("missing: "+b);if(a){if(ek.test(a))return a;ck("invalid: "+b)}return null}
var kk=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,jk=/\/cb=/g,ik=/\/\//g;function pk(){var a=Tj();if(!a)throw Error("Bad hint");return a}
ak.m=function(a,b,c,d){(a=a[0])||ck("missing_hint");return"https://apis.google.com"+lk(a,b,c,d)};var qk=decodeURI("%73cript");function rk(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Pj.call(b,e)&&c.push(e)}return c}
function sk(a){"loading"!=Lj.readyState?tk(a):Lj.write("<"+qk+' src="'+encodeURI(a)+'"></'+qk+">")}
function tk(a){var b=Lj.createElement(qk);b.setAttribute("src",a);b.async="true";(a=Lj.getElementsByTagName(qk)[0])?a.parentNode.insertBefore(b,a):(Lj.head||Lj.body||Lj.documentElement).appendChild(b)}
function uk(a,b){var c=b&&b._c;if(c)for(var d=0;d<bk.length;d++){var e=bk[d][0],f=bk[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function vk(a,b,c){wk(function(){var c;c=b===Tj()?T(Sj,"_",Rj()):Rj();c=T(Vj(b),"_",c);a(c)},c)}
function xk(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);uk(a,c);var d=a?a.split(":"):[],e=c.h||pk(),f=T(U,"ah",Rj());if(f["::"]&&d.length){for(var h=[],k=null;k=d.shift();){var l=k.split("."),l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e,n=h.length&&h[h.length-1]||null,I=n;n&&n.hint==l||(I={hint:l,features:[]},h.push(I));I.features.push(k)}var ba=h.length;if(1<ba){var gc=c.callback;gc&&(c.callback=function(){0==--ba&&gc()})}for(;d=h.shift();)yk(d.features,c,d.hint)}else yk(d||[],c,e)}
function yk(a,b,c){function d(a,b){if(ba)return 0;Kj.clearTimeout(I);gc.push.apply(gc,Ja);var d=((Sj||{}).config||{}).update;d?d(f):f&&T(U,"cu",[]).push(f);if(b){Yj("me0",a,Zd);try{vk(b,c,n)}finally{Yj("me1",a,Zd)}}return 1}
a=Qj(a)||[];var e=b.callback,f=b.config,h=b.timeout,k=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var I=null,ba=!1;if(h&&!k||!h&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=T(Vj(c),"r",[]).sort(),gc=T(Vj(c),"L",[]).sort(),Zd=[].concat(l);0<h&&(I=Kj.setTimeout(function(){ba=!0;k()},h));
var Ja=rk(a,gc);if(Ja.length){var Ja=rk(a,l),ob=T(U,"CP",[]),pb=ob.length;ob[pb]=function(a){function b(){var a=ob[pb+1];a&&a()}
function c(b){ob[pb]=null;d(Ja,a)&&Uj(function(){e&&e();b()})}
if(!a)return 0;Yj("ml1",Ja,Zd);0<pb&&ob[pb-1]?ob[pb]=function(){c(b)}:c(b)};
if(Ja.length){var Qg="loaded_"+U.I++;Sj[Qg]=function(a){ob[pb](a);Sj[Qg]=null};
a=hk(c,Ja,"gapi."+Qg,l);l.push.apply(l,Ja);Yj("ml0",Ja,Zd);b.sync||Kj.___gapisync?sk(a):tk(a)}else ob[pb](Nj)}else d(Ja)&&e&&e()}
;function wk(a,b){if(U.hee&&0<U.hel)try{return a()}catch(c){b&&b(c),U.hel--,xk("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;Sj.load=function(a,b){return wk(function(){return xk(a,b)})};function zk(a){this.b=a||Xg();Ak||(Ak=Bk(this.b))}
var Ak=null;function Bk(a){return(new Eg(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ga(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||mb(d,{_c:{jsl:{h:G("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||G("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],h=f.split("?",2);e=Qd(1<h.length?h[1]:h[0])}else e={};var k=e.gapi_jsh;k&&mb(d,{_c:{jsl:{h:k}}})}xk("client",d)}catch(l){jc(l)}})).then(function(){})}
zk.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;qa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.fc;qa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
zk.prototype.f=function(){return{context:Yg(this.b)}};
zk.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=H(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
Ck(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function Ck(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);Ak.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function Dk(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ek(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;I=n=0}
function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],l=e[4],n,ba,c=0;80>c;c++)40>c?20>c?(n=k^d&(f^k),ba=1518500249):(n=d^f^k,ba=1859775393):60>c?(n=d&f|k&(d|f),ba=2400959708):(n=d^f^k,ba=3395469782),n=((a<<5|a>>>27)&4294967295)+n+l+ba+b[c]&4294967295,l=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,h=a.length;e<h;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,I+=64;for(;d<c;)if(f[n++]=a[d++],I++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,I+=64}
function d(){var a=[],d=8*I;56>n?c(k,56-n):c(k,64-(n-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var l=24;0<=l;l-=8)a[d++]=e[h]>>l&255;return a}
for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var n,I;a();return{reset:a,update:c,digest:d,od:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Fk(a,b,c){var d=[],e=[];if(1==(v(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),Gk(e.join(" "));
var f=[],h=[];A(c,function(a){h.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=Gk(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function Gk(a){var b=Ek();b.update(a);return b.od().toLowerCase()}
;function Hk(){this.b=Xg()}
Hk.prototype.f=function(){return{context:Yg(this.b)}};
Hk.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":G("VISITOR_DATA")},O:b,Ic:"JSON",ka:c.ka,R:c.R,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=Dk(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new Qf(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new Qf(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);
c=f&&d&&e?[e,Fk(Dk(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=G("SESSION_INDEX",0));a="//"+this.b.Ee+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey;b.method="POST";b.O||(b.O={});Yd(a,b)};function Lf(){return Ed("enable_youtubei_innertube")?Hk:zk}
;function Ik(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Jk(a,b,c){w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Kk(a)}
function Kk(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Lk(a,b,c,d){if(ha(a)&&!v(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};w(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Mk(a){var b=a.video_id||a.videoId;if(w(b)){var c=qf("yt-player-two-stage-token")||{},d=qf("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];N("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function Nk(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
function Ok(a){return document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Pk=Ok("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Qk=Ok("loadCastFramework");function Rk(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Sk=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Tk=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Uk=Nk()?Tk.concat(Sk):Sk.concat(Tk);function Vk(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Wk(a){if(a>=Uk.length)Xk();else{var b=Uk[a],c="chrome-extension://"+b+Pk;0<=Sk.indexOf(b)?Vk(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Yk(c,Xk)):Wk(a+1)}):Yk(c,function(){Wk(a+1)})}}
function Yk(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Xk(){var a=Rk();a&&a(!1,"No cast extension found")}
function Zk(){if(Qk){var a=2,b=Rk(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Yk("//www.gstatic.com/cast/sdk/libs/sender/0.1/cast_framework.js",Xk,c)}}
function $k(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){Zk();a({command:"cast.sender.init"});return}}window.chrome?(Zk(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=Nk()?"50":"",Yk("//www.gstatic.com/eureka/clank"+a+Pk,Xk)):Wk(0)):Xk()}
;var al=y(),bl=null,cl=Array(50),dl=-1,el=!1;function fl(){var a=gl;hl();bl.push(a);il(bl)}
function jl(a,b){hl();var c=bl,d=kl(a,String(b));0==c.length?ll(d):(il(c),A(c,function(a){a(d)}))}
function hl(){bl||(bl=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",bl,void 0))}
function ll(a){var b=(dl+1)%50;dl=b;cl[b]=a;el||(el=49==b)}
function il(a){var b=cl;if(b[0]){var c=dl,d=el?c:-1;do{var d=(d+1)%50,e=b[d];A(a,function(a){a(e)})}while(d!=c);
cl=Array(50);dl=-1;el=!1}}
function kl(a,b){var c=(y()-al)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function ml(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function nl(a,b){return!!b&&(a.id==b||a.uuid==b)}
function ol(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function pl(a){return new ml(a)}
function ql(a){return v(a)?La(a,pl):[]}
function rl(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function sl(a){return v(a)?"["+La(a,rl).join(",")+"]":"null"}
;var tl={Qe:"atp",$e:"ska",Xe:"que",Ve:"mus",Ze:"sus"};function ul(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(Hd(4,a))||null||"";b&&(this.i=":"+b);this.g=Gd(Hd(3,a))||"";a=nb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Fa(a,"10.0")&&(this.f=!1))}
function vl(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Pd(e+b,c||{})}
function wl(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,R:na(a.o,d,!0),onError:na(a.j,e),ka:na(a.l,e)};c&&(a.O=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Yd(b,a)}
ul.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
ul.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
ul.prototype.l=function(a){a(Error("request timed out"))};function xl(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function yl(a){return La(a,function(a){return{key:a.id,name:a.name}})}
function zl(a,b){return Oa(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function Al(a,b){return Oa(a,function(a){return nl(a,b)})}
;function V(){E.call(this);this.o=new F;Zb(this,this.o)}
z(V,E);V.prototype.subscribe=function(a,b,c){return this.D()?0:this.o.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.D()?!1:this.o.unsubscribe(a,b,c)};
V.prototype.na=function(a){return this.D()?!1:this.o.na(a)};
V.prototype.A=function(a,b){return this.D()?!1:this.o.A.apply(this.o,arguments)};function Bl(a){V.call(this);this.l=a;this.screens=[]}
z(Bl,V);g=Bl.prototype;g.ea=function(){return this.screens};
g.contains=function(a){return!!zl(this.screens,a)};
g.get=function(a){return a?Al(this.screens,a):null};
g.start=u;g.mb=u;g.remove=u;g.kb=u;function Cl(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function Dl(a,b){var c=a.screens.length!=b.length;a.screens=Ka(a.screens,function(a){return!!zl(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Cl(a,b[d])||c;return c}
function El(a,b){var c=a.screens.length;a.screens=Ka(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
g.info=function(a){jl(this.l,a)};function Fl(a,b,c,d){V.call(this);this.B=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
z(Fl,V);var Gl=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Fl.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Hc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(J(this.f),this.f=NaN)};
g.w=function(){this.stop();Fl.C.w.call(this)};
g.Hc=function(){this.f=NaN;this.b=Yd(vl(this.B,"/pairing/get_screen"),{method:"POST",O:{pairing_code:this.l},timeout:5E3,R:x(this.He,this),onError:x(this.Ge,this),ka:x(this.Ie,this)})};
g.He=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.A("pairingComplete",new ml(c))};
g.Ge=function(a){this.b=null;a.status&&404==a.status?this.g>=Gl.length?this.A("pairingFailed",Error("DIAL polling timed out")):(a=Gl[this.g],this.f=H(x(this.Hc,this),a),this.g++):this.A("pairingFailed",Error("Server error "+a.status))};
g.Ie=function(){this.b=null;this.A("pairingFailed",Error("Server not responding"))};function Hl(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Yc;this.experiments=new Yc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Zc(this.capabilities,Ka(b.split(","),na(bb,tl)));a=a.experiments||"";this.experiments.clear();Zc(this.experiments,
a.split(","))}}
Hl.prototype.equals=function(a){return a?this.id==a.id:!1};var Il;function Jl(){var a=Kl(),b=Ll();if(Ml()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Ya(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Wa(c,-(d+1),0,b)}a=Nl(a);if(0==a.length)try{Tf.remove("remote_sid","/","youtube.com")}catch(l){}else try{Uf("remote_sid",a.join(","),-1)}catch(l){}}
function Kl(){var a=qf("yt-remote-connected-devices")||[];a.sort(Ya);return a}
function Nl(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return La(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Ol(a){N("yt-remote-connected-devices",a,86400)}
function Ll(){if(Pl)return Pl;var a=qf("yt-remote-device-id");a||(a=xl(),N("yt-remote-device-id",a,31536E3));for(var b=Kl(),c=1,d=a;B(b,d);)c++,d=a+"#"+c;return Pl=d}
function Ql(){return qf("yt-remote-session-browser-channel")}
function Ml(){return qf("yt-remote-session-screen-id")}
function Rl(a){5<a.length&&(a=a.slice(a.length-5));var b=La(Sl(),function(a){return a.loungeToken}),c=La(a,function(a){return a.loungeToken});
Na(c,function(a){return!B(b,a)})&&Tl();
N("yt-remote-local-screens",a,31536E3)}
function Sl(){return qf("yt-remote-local-screens")||[]}
function Tl(){N("yt-remote-lounge-token-expiration",!0,86400)}
function Ul(a,b){N("yt-remote-session-browser-channel",a);N("yt-remote-session-screen-id",b);var c=Kl(),d=Ll();B(c,d)||c.push(d);Ol(c);Jl()}
function Vl(a){a||(rf("yt-remote-session-screen-id"),rf("yt-remote-session-video-id"));Jl();a=Kl();Ra(a,Ll());Ol(a)}
function Wl(){if(!Il){var a;a=new bf;(a=a.isAvailable()?a:null)&&(Il=new df(a))}return Il?!!Il.get("yt-remote-use-staging-server"):!1}
var Pl="";function Xl(a){Bl.call(this,"LocalScreenService");this.f=a;this.b=NaN;Yl(this);this.info("Initializing with "+sl(this.screens))}
z(Xl,Bl);g=Xl.prototype;g.start=function(){Yl(this)&&this.A("screenChange");!qf("yt-remote-lounge-token-expiration")&&Zl(this);J(this.b);this.b=H(x(this.start,this),1E4)};
g.mb=function(a,b){Yl(this);Cl(this,a);$l(this,!1);this.A("screenChange");b(a);a.token||Zl(this)};
g.remove=function(a,b){var c=Yl(this);El(this,a)&&($l(this,!1),c=!0);b(a);c&&this.A("screenChange")};
g.kb=function(a,b,c,d){var e=Yl(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,$l(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.A("screenChange")};
g.w=function(){J(this.b);Xl.C.w.call(this)};
function Zl(a){if(a.screens.length){var b=La(a.screens,function(a){return a.id}),c=vl(a.f,"/pairing/get_lounge_token_batch");
wl(a.f,c,{screen_ids:b.join(",")},x(a.zd,a),x(a.yd,a))}}
g.zd=function(a){Yl(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}$l(this,!b);b&&jl(this.l,"Missed "+b+" lounge tokens.")};
g.yd=function(a){jl(this.l,"Requesting lounge tokens failed: "+a)};
function Yl(a){var b=ql(Sl()),b=Ka(b,function(a){return!a.uuid});
return Dl(a,b)}
function $l(a,b){Rl(La(a.screens,ol));b&&Tl()}
;function am(a,b){V.call(this);this.l=b;for(var c=qf("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.l(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=B(c,k)}this.b=d;this.j=a;this.g=this.i=NaN;this.f=null;bm("Initialized with "+L(this.b))}
z(am,V);g=am.prototype;g.start=function(){var a=parseInt(qf("yt-remote-fast-check-period")||"0",10);(this.i=y()-144E5<a?0:a)?cm(this):(this.i=y()+3E5,N("yt-remote-fast-check-period",this.i),this.Vb())};
g.isEmpty=function(){return hb(this.b)};
g.update=function(){bm("Updating availability on schedule.");var a=this.l(),b=$a(this.b,function(b,d){return b&&!!Al(a,d)},this);
dm(this,b)};
function em(a,b,c){var d=vl(a.j,"/pairing/get_screen_availability");wl(a.j,d,{lounge_token:b.token},x(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),x(function(){c(!1)},a))}
g.w=function(){J(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);am.C.w.call(this)};
function dm(a,b){var c;a:if(ab(b)!=ab(a.b))c=!1;else{c=eb(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(bm("Updated online screens: "+L(a.b)),a.b=b,a.A("screenChange"));fm(a)}
function cm(a){isNaN(a.g)||J(a.g);a.g=H(x(a.Vb,a),0<a.i&&a.i<y()?2E4:1E4)}
g.Vb=function(){J(this.g);this.g=NaN;this.f&&this.f.abort();var a=gm(this);if(ab(a)){var b=vl(this.j,"/pairing/get_screen_availability");this.f=wl(this.j,b,{lounge_token:eb(a).join(",")},x(this.$d,this,a),x(this.Zd,this))}else dm(this,{}),cm(this)};
g.$d=function(a,b){this.f=null;var c;a:{c=eb(gm(this));var d=eb(a);if(ea(c)&&ea(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;dm(this,d);cm(this)}else this.N("Changing Screen set during request."),this.Vb()};
g.Zd=function(a){this.N("Screen availability failed: "+a);this.f=null;cm(this)};
function bm(a){jl("OnlineScreenService",a)}
g.N=function(a){jl("OnlineScreenService",a)};
function gm(a){var b={};A(a.l(),function(a){a.token?b[a.token]=a.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function fm(a){a=eb($a(a.b,function(a){return a}));
a.sort(Ya);a.length?N("yt-remote-online-screen-ids",a.join(","),60):rf("yt-remote-online-screen-ids")}
;function W(a){Bl.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};hm(this)}
z(W,Bl);g=W.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.A("screenChange"),this.b.isEmpty()||this.A("onlineScreenChange"))};
g.mb=function(a,b,c){this.f.mb(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.kb=function(a,b,c,d){this.f.contains(a)?this.f.kb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,jl(this.l,a),d(Error(a)))};
g.ea=function(a){return a?this.screens:Ta(this.screens,Ka(this.g,function(a){return!this.contains(a)},this))};
g.Sc=function(){return Ka(this.ea(!0),function(a){return!!this.b.b[a.id]},this)};
function im(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.ea();if(h=(c?Al(h,c):null)||Al(h,b)){h.uuid=b;var k=jm(a,h);em(a.b,k,function(a){e(a?k:null)})}else c?km(a,c,x(function(a){var f=jm(this,new ml({name:d,
screenId:c,loungeToken:a,dialId:b||""}));em(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Tc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Fl(this.j,a,b,c);f.subscribe("pairingComplete",x(function(a){ac(f);d(jm(this,a))},this));
f.subscribe("pairingFailed",function(a){ac(f);e(a)});
f.start();return x(f.stop,f)};
function lm(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.Ke=function(a,b,c,d){Yd(vl(this.j,"/pairing/get_screen"),{method:"POST",O:{pairing_code:a},timeout:5E3,R:x(function(a,d){var e=new ml(d.screen||{});if(!e.name||lm(this,e.name)){var f;a:{f=e.name;for(var l=2,n=b(f,l);lm(this,n);){l++;if(20<l)break a;n=b(f,l)}f=n}e.name=f}c(jm(this,e))},this),
onError:x(function(a){d(Error("pairing request failed: "+a.status))},this),
ka:x(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){ac(this.f);ac(this.b);W.C.w.call(this)};
function km(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={O:{screen_ids:b},method:"POST",context:a,R:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Yd(vl(a.j,"/pairing/get_lounge_token_batch"),e)}
function mm(a){a.screens=a.f.ea();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+sl(a.screens))}
g.Ad=function(){mm(this);this.A("screenChange");this.b.update()};
function hm(a){nm(a);a.f=new Xl(a.j);a.f.subscribe("screenChange",x(a.Ad,a));mm(a);a.g=ql(qf("yt-remote-automatic-screen-cache")||[]);nm(a);a.info("Initializing automatic screens: "+sl(a.g));a.b=new am(a.j,x(a.ea,a,!0));a.b.subscribe("screenChange",x(function(){this.A("onlineScreenChange")},a))}
function jm(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=Al(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),N("yt-remote-automatic-screen-cache",La(a.g,ol)));nm(a);a.i[b.uuid]=b.id;N("yt-remote-device-id-map",a.i,31536E3);return b}
function nm(a){a.i=qf("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function om(a,b,c){V.call(this);this.U=c;this.H=a;this.b=b;this.g=null}
z(om,V);g=om.prototype;g.xb=function(a){this.g=a;this.A("sessionScreen",this.g)};
g.ba=function(a){this.D()||(a&&pm(this,""+a),this.g=null,this.A("sessionScreen",null))};
g.info=function(a){jl(this.U,a)};
function pm(a,b){jl(a.U,b)}
g.Ha=u;g.Bb=u;g.Vc=function(){return null};
g.stop=u;g.Wb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,x(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),x(function(){pm(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Wb("");om.C.w.call(this)};function qm(a,b){om.call(this,a,b,"CastSession");this.f=null;this.i=0;this.l=x(this.Le,this);this.j=x(this.ke,this);this.i=H(x(function(){rm(this,null)},this),12E4)}
z(qm,om);g=qm.prototype;g.Bb=function(a){if(this.f){if(this.f==a)return;pm(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.l);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.f=a;this.f.addUpdateListener(this.l);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);sm(this)};
g.Ha=function(a){this.info("launchWithParams no-op for Cast: "+L(a))};
g.stop=function(){this.f?this.f.stop(x(function(){this.ba()},this),x(function(){this.ba(Error("Failed to stop receiver app."))},this)):this.ba(Error("Stopping cast device witout session."))};
g.Wb=t;g.w=function(){this.info("disposeInternal");J(this.i);this.i=0;this.f&&(this.f.removeUpdateListener(this.l),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.f=null;qm.C.w.call(this)};
function sm(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+L(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,x(function(){pm(this,"Failed to send message: getMdxSessionStatus.")},a)):pm(a,"Sending yt message without session: "+L(b))}
g.ke=function(a,b){if(!this.D())if(b){var c=xd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":rm(this,c.screenId);break;default:pm(this,"Unknown youtube message: "+d)}}else pm(this,"Unable to parse message.")}else pm(this,"No data in message.")};
function rm(a,b){J(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=x(a.xb,a),d=x(a.ba,a);a.oc(b,c,d,5)}}else a.ba(Error("Waiting for session status timed out."))}
g.oc=function(a,b,c,d){im(this.H,this.b.label,a,this.b.friendlyName,x(function(e){e?b(e):0<=d?(pm(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(x(this.oc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Vc=function(){return this.f};
g.Le=function(a){this.D()||a||(pm(this,"Cast session died."),this.ba())};function tm(a,b){om.call(this,a,b,"DialSession");this.i=this.G=null;this.L="";this.j=null;this.B=t;this.l=NaN;this.P=x(this.Oe,this);this.f=t}
z(tm,om);g=tm.prototype;g.Bb=function(a){this.i=a;this.i.addUpdateListener(this.P)};
g.Ha=function(a){this.j=a;this.B()};
g.stop=function(){this.f();this.f=t;J(this.l);this.i?this.i.stop(x(this.ba,this,null),x(this.ba,this,"Failed to stop DIAL device.")):this.ba()};
g.w=function(){this.f();this.f=t;J(this.l);this.i&&this.i.removeUpdateListener(this.P);this.i=null;tm.C.w.call(this)};
function um(a){a.f=a.H.Tc(a.L,a.b.label,a.b.friendlyName,x(function(a){this.f=t;this.xb(a)},a),x(function(a){this.f=t;
this.ba(a)},a))}
g.Oe=function(a){this.D()||a||(pm(this,"DIAL session died."),this.f(),this.f=t,this.ba())};
function vm(a){var b={};b.pairingCode=a.L;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Wl()&&(b.env_useStageMdx=1);return Nd(b)}
g.Sb=function(a){this.L=xl();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,vm(this));a(b);um(this)}else this.B=x(function(){J(this.l);this.B=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,vm(this));a(b);um(this)},this),this.l=H(x(function(){this.B()},this),100)};
g.Bd=function(a,b){im(this.H,this.G.receiver.label,a,this.b.friendlyName,x(function(a){a&&a.token?(this.xb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Sb(b)},this),x(function(a){pm(this,"Failed to get DIAL screen: "+a);
this.Sb(b)},this))};function wm(a,b){om.call(this,a,b,"ManualSession");this.f=H(x(this.Ha,this,null),150)}
z(wm,om);wm.prototype.stop=function(){this.ba()};
wm.prototype.Bb=t;wm.prototype.Ha=function(){J(this.f);this.f=NaN;var a=Al(this.H.ea(),this.b.label);a?this.xb(a):this.ba(Error("No such screen"))};
wm.prototype.w=function(){J(this.f);this.f=NaN;wm.C.w.call(this)};function X(a){V.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=x(this.Xd,this)}
z(X,V);g=X.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,x(this.Bc,this),x(this.Yd,this),d,e);c.customDialLaunchCallback=x(this.Md,this);chrome.cast.initialize(c,x(function(){this.D()||(chrome.cast.addReceiverActionListener(this.i),fl(),
this.f.subscribe("onlineScreenChange",x(this.Uc,this)),this.g=xm(this),chrome.cast.setCustomReceivers(this.g,t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)),this.A("yt-remote-cast2-availability-change",ym(this)),b(!0))},this),x(function(a){this.N("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ye=function(a,b){zm("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)zm("Unsetting old screen status: "+this.b.b.friendlyName),ac(this.b),this.b=null}if(a&&b){if(!this.b){c=Al(this.f.ea(),a);if(!c){zm("setConnectedScreenStatus: Unknown screen.");return}var d=Am(this,c);d||(zm("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)));
zm("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Bm(this,new wm(this.f,d),!0)}this.b.Wb(b)}else zm("setConnectedScreenStatus: no screen.")};
function Am(a,b){return b?Oa(a.g,function(a){return nl(b,a.label)},a):null}
g.ze=function(a){this.D()?this.N("Setting connection data on disposed cast v2"):this.b?this.b.Ha(a):this.N("Setting connection data without a session")};
g.Ne=function(){this.D()?this.N("Stopping session on disposed cast v2"):this.b?(this.b.stop(),ac(this.b),this.b=null):zm("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(x(this.Bc,this),x(this.ae,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",x(this.Uc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=gl,b=r("yt.mdx.remote.debug.handlers_");Ra(b||[],a);ac(this.b);X.C.w.call(this)};
function zm(a){jl("Controller",a)}
g.N=function(a){jl("Controller",a)};
function gl(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function ym(a){return a.j||!!a.g.length||!!a.b}
function Bm(a,b,c){ac(a.b);(a.b=b)?(c?a.A("yt-remote-cast2-receiver-resumed",b.b):a.A("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",x(a.Cc,a,b)),b.g?a.A("yt-remote-cast2-session-change",b.g):c&&a.b.Ha(null)):a.A("yt-remote-cast2-session-change",null)}
g.Cc=function(a,b){this.b==a&&(b||Bm(this,null),this.A("yt-remote-cast2-session-change",b))};
g.Xd=function(a,b){if(!this.D())if(a)switch(zm("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)zm("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{zm("onReceiverAction_: Casting to active receiver.");this.b.g&&this.A("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:Bm(this,new wm(this.f,a));break;case chrome.cast.ReceiverType.DIAL:Bm(this,
new tm(this.f,a));break;case chrome.cast.ReceiverType.CAST:Bm(this,new qm(this.f,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
g.Md=function(a){if(this.D())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return zm("Reselecting dial screen."),
this.A("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Bm(this,new tm(this.f,b))}b=this.b;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise(x(b.Bd,b,(b.G.extraData||{}).screenId||null)):new Promise(x(b.Sb,b))};
g.Bc=function(a){if(!this.D()){zm("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)zm("Got resumed cast session before resumed mdx connection."),Bm(this,new qm(this.f,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=Al(this.f.ea(),c.label);d&&nl(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(zm("onSessionEstablished_: manual to cast session change "+b.friendlyName),ac(this.b),this.b=new qm(this.f,b),this.b.subscribe("sessionScreen",x(this.Cc,this,this.b)),this.b.Ha(null));this.b.Bb(a)}}};
g.Me=function(){return this.b?this.b.Vc():null};
g.ae=function(a){this.D()||(this.N("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&Bm(this,null))};
g.Yd=function(a){zm("Receiver availability updated: "+a);if(!this.D()){var b=ym(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;ym(this)!=b&&this.A("yt-remote-cast2-availability-change",ym(this))}};
function xm(a){var b=a.f.Sc(),c=a.b&&a.b.b;a=La(b,function(a){c&&nl(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=Am(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Uc=function(){if(!this.D()){var a=ym(this);this.g=xm(this);zm("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,x(function(){this.N("Failed to set custom receivers.")},this));
var b=ym(this);b!=a&&this.A("yt-remote-cast2-availability-change",b)}};
X.prototype.setLaunchParams=X.prototype.ze;X.prototype.setConnectedScreenStatus=X.prototype.ye;X.prototype.stopSession=X.prototype.Ne;X.prototype.getCastSession=X.prototype.Me;X.prototype.requestSession=X.prototype.requestSession;X.prototype.init=X.prototype.init;X.prototype.dispose=X.prototype.dispose;function Cm(a,b,c){Dm()?Fm(a)&&(Gm(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Hm(b):(window.__onGCastApiAvailable=function(a,c){a?Hm(b):(Im("Failed to load cast API: "+c),Jm(!1),Gm(!1),rf("yt-remote-cast-available"),rf("yt-remote-cast-receiver"),Km(),b(!1))},c?yc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):$k())):Em("Cannot initialize because not running Chrome")}
function Km(){Em("dispose");var a=Lm();a&&a.dispose();Mm=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Nm(!1);tc(Om);Om.length=0}
function Pm(){return!!qf("yt-remote-cast-installed")}
function Qm(){var a=qf("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in m?Aa(a):Ca(a):a):a=null;return a}
function Rm(){Em("clearCurrentReciever");rf("yt-remote-cast-receiver")}
function Sm(a,b){Tm()?Lm().setConnectedScreenStatus(a,b):Im("setConnectedScreenStatus called before ready.")}
var Mm=null;function Dm(){var a;a=0<=nb.search(/\ (CrMo|Chrome|CriOS)\//);return yf||a}
function Fm(a){var b=!1;if(!Mm){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new X(a),c.subscribe("yt-remote-cast2-availability-change",function(a){N("yt-remote-cast-available",a);uc("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Em("onReceiverSelected: "+a.friendlyName);
N("yt-remote-cast-receiver",a);uc("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Em("onReceiverResumed: "+a.friendlyName);
N("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Em("onSessionChange: "+rl(a));
a||rf("yt-remote-cast-receiver");uc("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Mm=c}Em("cloudview.createSingleton_: "+b);return b}
function Lm(){Mm||(Mm=r("yt.mdx.remote.cloudview.instance_"));return Mm}
function Hm(a){Jm(!0);Gm(!1);Mm.init(!0,function(b){b?(Nm(!0),uc("yt-remote-cast2-api-ready")):(Im("Failed to initialize cast API."),Jm(!1),rf("yt-remote-cast-available"),rf("yt-remote-cast-receiver"),Km());a(b)})}
function Em(a){jl("cloudview",a)}
function Im(a){jl("cloudview",a)}
function Jm(a){Em("setCastInstalled_ "+a);N("yt-remote-cast-installed",a)}
function Tm(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Nm(a){Em("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Gm(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Om=[];function Um(a,b){this.action=a;this.params=b||null}
;function Vm(){this.b=y()}
new Vm;Vm.prototype.set=function(a){this.b=a};
Vm.prototype.reset=function(){this.set(y())};
Vm.prototype.get=function(){return this.b};function Wm(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.f=!1;this.Lc=!0}
Wm.prototype.stopPropagation=function(){this.f=!0};
Wm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Lc=!1};var Xm=!K||rd(9),Ym=K&&!qd("9");!id||qd("528");hd&&qd("1.9b")||K&&qd("8")||fd&&qd("9.5")||id&&qd("528");hd&&!qd("8")||K&&qd("9");function Zm(a,b){Wm.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.button=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.g=this.state=null;a&&this.init(a,b)}
z(Zm,Wm);
Zm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;var e=a.relatedTarget;if(e){if(hd){var f;a:{try{cd(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Zm.prototype.stopPropagation=function(){Zm.C.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Zm.prototype.preventDefault=function(){Zm.C.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ym)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var $m="closure_listenable_"+(1E6*Math.random()|0),an=0;function bn(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.pb=!!d;this.tb=e;this.key=++an;this.Sa=this.nb=!1}
function cn(a){a.Sa=!0;a.listener=null;a.b=null;a.src=null;a.tb=null}
;function dn(a){this.src=a;this.b={};this.f=0}
function en(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=fn(b,c,d,e);-1<h?(a=b[h],a.nb=!1):(a=new bn(c,a.src,f,!!d,e),a.nb=!1,b.push(a));return a}
dn.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=fn(e,b,c,d);return-1<b?(cn(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function gn(a,b){var c=b.type;c in a.b&&Ra(a.b[c],b)&&(cn(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function hn(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=fn(a,c,d,e));return-1<b?a[b]:null}
function fn(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sa&&f.listener==b&&f.pb==!!c&&f.tb==d)return e}return-1}
;var jn="closure_lm_"+(1E6*Math.random()|0),kn={},ln=0;
function mn(a,b,c,d,e){if(v(b)){for(var f=0;f<b.length;f++)mn(a,b[f],c,d,e);return null}c=nn(c);if(a&&a[$m])a=a.ub(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=on(a);h||(a[jn]=h=new dn(a));c=en(h,b,c,d,e);if(!c.b){d=pn();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(qn(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");ln++}a=c}return a}
function pn(){var a=rn,b=Xm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function sn(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)sn(a,b[f],c,d,e);else c=nn(c),a&&a[$m]?a.Db(b,c,d,e):a&&(a=on(a))&&(b=hn(a,b,c,!!d,e))&&tn(b)}
function tn(a){if(!fa(a)&&a&&!a.Sa){var b=a.src;if(b&&b[$m])gn(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.pb):b.detachEvent&&b.detachEvent(qn(c),d);ln--;(c=on(b))?(gn(c,a),0==c.f&&(c.src=null,b[jn]=null)):cn(a)}}}
function qn(a){return a in kn?kn[a]:kn[a]="on"+a}
function un(a,b,c,d){var e=!0;if(a=on(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.pb==c&&!f.Sa&&(f=vn(f,d),e=e&&!1!==f)}return e}
function vn(a,b){var c=a.listener,d=a.tb||a.src;a.nb&&tn(a);return c.call(d,b)}
function rn(a,b){if(a.Sa)return!0;if(!Xm){var c=b||r("window.event"),d=new Zm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.b;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.b=c[h];var k=un(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.b=c[h],k=un(c[h],f,!1,d),e=e&&k}return e}return vn(a,new Zm(b,this))}
function on(a){a=a[jn];return a instanceof dn?a:null}
var wn="__closure_events_fn_"+(1E9*Math.random()>>>0);function nn(a){if(ga(a))return a;a[wn]||(a[wn]=function(b){return a.handleEvent(b)});
return a[wn]}
;function xn(){E.call(this);this.g=new dn(this);this.va=this;this.aa=null}
z(xn,E);xn.prototype[$m]=!0;g=xn.prototype;g.addEventListener=function(a,b,c,d){mn(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){sn(this,a,b,c,d)};
function yn(a,b){var c,d=a.aa;if(d){c=[];for(var e=1;d;d=d.aa)c.push(d),++e}var d=a.va,e=b,f=e.type||e;if(w(e))e=new Wm(e,d);else if(e instanceof Wm)e.target=e.target||d;else{var h=e,e=new Wm(f,d);mb(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.f&&0<=l;l--)k=e.b=c[l],h=zn(k,f,!0,e)&&h;e.f||(k=e.b=d,h=zn(k,f,!0,e)&&h,e.f||(h=zn(k,f,!1,e)&&h));if(c)for(l=0;!e.f&&l<c.length;l++)k=e.b=c[l],h=zn(k,f,!1,e)&&h}
g.w=function(){xn.C.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,cn(d[e]);delete a.b[c];a.f--}}this.aa=null};
g.ub=function(a,b,c,d){return en(this.g,String(a),b,c,d)};
g.Db=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function zn(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Sa&&h.pb==c){var k=h.listener,l=h.tb||h.src;h.nb&&gn(a.g,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Lc}
;function An(a,b){this.f=new zd(a);this.b=b?xd:wd}
An.prototype.stringify=function(a){return yd(this.f,a)};
An.prototype.parse=function(a){return this.b(a)};function Bn(a,b){xn.call(this);this.f=a||1;this.b=b||m;this.i=x(this.Be,this);this.j=y()}
z(Bn,xn);g=Bn.prototype;g.enabled=!1;g.fa=null;g.Be=function(){if(this.enabled){var a=y()-this.j;0<a&&a<.8*this.f?this.fa=this.b.setTimeout(this.i,this.f-a):(this.fa&&(this.b.clearTimeout(this.fa),this.fa=null),yn(this,"tick"),this.enabled&&(this.fa=this.b.setTimeout(this.i,this.f),this.j=y()))}};
g.start=function(){this.enabled=!0;this.fa||(this.fa=this.b.setTimeout(this.i,this.f),this.j=y())};
g.stop=function(){this.enabled=!1;this.fa&&(this.b.clearTimeout(this.fa),this.fa=null)};
g.w=function(){Bn.C.w.call(this);this.stop();delete this.b};
function Cn(a,b,c){if(ga(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function Dn(a,b,c){E.call(this);this.i=null!=c?x(a,c):a;this.g=b;this.f=x(this.ce,this);this.b=[]}
z(Dn,E);g=Dn.prototype;g.Ta=!1;g.hb=0;g.Ea=null;g.wd=function(a){this.b=arguments;this.Ea||this.hb?this.Ta=!0:En(this)};
g.stop=function(){this.Ea&&(m.clearTimeout(this.Ea),this.Ea=null,this.Ta=!1,this.b=[])};
g.pause=function(){this.hb++};
g.resume=function(){this.hb--;this.hb||!this.Ta||this.Ea||(this.Ta=!1,En(this))};
g.w=function(){Dn.C.w.call(this);this.stop()};
g.ce=function(){this.Ea=null;this.Ta&&!this.hb&&(this.Ta=!1,En(this))};
function En(a){a.Ea=Cn(a.f,a.g);a.i.apply(null,a.b)}
;function Fn(a){E.call(this);this.f=a;this.b={}}
z(Fn,E);var Gn=[];Fn.prototype.ub=function(a,b,c,d){v(b)||(b&&(Gn[0]=b.toString()),b=Gn);for(var e=0;e<b.length;e++){var f=mn(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
Fn.prototype.Db=function(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)this.Db(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=nn(c),d=!!d,b=a&&a[$m]?hn(a.g,String(b),c,d,e):a?(a=on(a))?hn(a,b,c,d,e):null:null,b&&(tn(b),delete this.b[b.key]);return this};
function Hn(a){Za(a.b,function(a,c){this.b.hasOwnProperty(c)&&tn(a)},a);
a.b={}}
Fn.prototype.w=function(){Fn.C.w.call(this);Hn(this)};
Fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function In(){}
In.prototype.f=null;In.prototype.b=u;function Jn(a){return a.f||(a.f=a.i())}
In.prototype.i=u;var Kn;function Ln(){}
z(Ln,In);Ln.prototype.b=function(){var a=Mn(this);return a?new ActiveXObject(a):new XMLHttpRequest};
Ln.prototype.i=function(){var a={};Mn(this)&&(a[0]=!0,a[1]=!0);return a};
function Mn(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Kn=new Ln;function Nn(a,b,c,d,e){this.b=a;this.g=c;this.B=d;this.l=e||1;this.j=45E3;this.i=new Fn(this);a=this.f=new Bn;a.f=250;a.fa&&a.enabled?(a.stop(),a.start()):a.fa&&a.stop()}
g=Nn.prototype;g.Fa=null;g.la=!1;g.Va=null;g.Yb=null;g.ib=null;g.Ua=null;g.wa=null;g.za=null;g.Ja=null;g.S=null;g.lb=0;g.ma=null;g.Fb=null;g.Ga=null;g.fb=-1;g.Mc=!0;g.Ba=!1;g.Qb=0;g.zb=null;var On={},Pn={};g=Nn.prototype;g.setTimeout=function(a){this.j=a};
function Qn(a,b,c){a.Ua=1;a.wa=th(b.clone());a.Ja=c;a.o=!0;Rn(a,null)}
function Sn(a,b,c,d,e){a.Ua=1;a.wa=th(b.clone());a.Ja=null;a.o=c;e&&(a.Mc=!1);Rn(a,d)}
function Rn(a,b){a.ib=y();Tn(a);a.za=a.wa.clone();rh(a.za,"t",a.l);a.lb=0;a.S=a.b.Jb(a.b.jb()?b:null);0<a.Qb&&(a.zb=new Dn(x(a.Rc,a,a.S),a.Qb));a.i.ub(a.S,"readystatechange",a.ne);var c=a.Fa?jb(a.Fa):{};a.Ja?(a.Fb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.S.send(a.za,a.Fb,a.Ja,c)):(a.Fb="GET",a.Mc&&!id&&(c.Connection="close"),a.S.send(a.za,a.Fb,null,c));a.b.ja(1)}
g.ne=function(a){a=a.target;var b=this.zb;b&&3==Un(a)?b.wd():this.Rc(a)};
g.Rc=function(a){try{if(a==this.S)a:{var b=Un(this.S),c=this.S.j,d=this.S.getStatus();if(K&&!rd(10)||id&&!qd("420+")){if(4>b)break a}else if(3>b||3==b&&!fd&&!Vn(this.S))break a;this.Ba||4!=b||7==c||(8==c||0>=d?this.b.ja(3):this.b.ja(2));Wn(this);var e=this.S.getStatus();this.fb=e;var f=Vn(this.S);(this.la=200==e)?(4==b&&Xn(this),this.o?(Yn(this,b,f),fd&&this.la&&3==b&&(this.i.ub(this.f,"tick",this.me),this.f.start())):Zn(this,f),this.la&&!this.Ba&&(4==b?this.b.wb(this):(this.la=!1,Tn(this)))):(this.Ga=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),Xn(this),$n(this))}}catch(h){}finally{}};
function Yn(a,b,c){for(var d=!0;!a.Ba&&a.lb<c.length;){var e=ao(a,c);if(e==Pn){4==b&&(a.Ga=4,Y(),d=!1);break}else if(e==On){a.Ga=4;Y();d=!1;break}else Zn(a,e)}4==b&&0==c.length&&(a.Ga=1,Y(),d=!1);a.la=a.la&&d;d||(Xn(a),$n(a))}
g.me=function(){var a=Un(this.S),b=Vn(this.S);this.lb<b.length&&(Wn(this),Yn(this,a,b),this.la&&4!=a&&Tn(this))};
function ao(a,b){var c=a.lb,d=b.indexOf("\n",c);if(-1==d)return Pn;c=Number(b.substring(c,d));if(isNaN(c))return On;d+=1;if(d+c>b.length)return Pn;var e=b.substr(d,c);a.lb=d+c;return e}
function bo(a,b){a.ib=y();Tn(a);var c=b?window.location.hostname:"";a.za=a.wa.clone();O(a.za,"DOMAIN",c);O(a.za,"t",a.l);try{a.ma=new ActiveXObject("htmlfile")}catch(n){Xn(a);a.Ga=7;Y();$n(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ea)h=Ea[h];else if(h in Da)h=Ea[h]=Da[h];else{var k,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ea[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=Eb(d+"</body></html>");a.ma.open();a.ma.write(Db(c));a.ma.close();a.ma.parentWindow.m=x(a.ge,a);a.ma.parentWindow.d=x(a.Fc,a,!0);a.ma.parentWindow.rpcClose=x(a.Fc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=xb(a.za.toString());d=vb(d);za.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ta,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ua,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(va,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(wa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(xa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ya,"&#0;")));d=Eb('<iframe src="'+d+'"></iframe>');c.innerHTML=Db(d);a.b.ja(1)}
g.ge=function(a){co(x(this.fe,this,a),0)};
g.fe=function(a){this.Ba||(Wn(this),Zn(this,a),Tn(this))};
g.Fc=function(a){co(x(this.ee,this,a),0)};
g.ee=function(a){this.Ba||(Xn(this),this.la=a,this.b.wb(this),this.b.ja(4))};
g.cancel=function(){this.Ba=!0;Xn(this)};
function Tn(a){a.Yb=y()+a.j;eo(a,a.j)}
function eo(a,b){if(null!=a.Va)throw Error("WatchDog timer not null");a.Va=co(x(a.ie,a),b)}
function Wn(a){a.Va&&(m.clearTimeout(a.Va),a.Va=null)}
g.ie=function(){this.Va=null;var a=y();0<=a-this.Yb?(2!=this.Ua&&this.b.ja(3),Xn(this),this.Ga=2,Y(),$n(this)):eo(this,this.Yb-a)};
function $n(a){a.b.sc()||a.Ba||a.b.wb(a)}
function Xn(a){Wn(a);ac(a.zb);a.zb=null;a.f.stop();Hn(a.i);if(a.S){var b=a.S;a.S=null;fo(b);b.dispose()}a.ma&&(a.ma=null)}
function Zn(a,b){try{a.b.Ac(a,b),a.b.ja(4)}catch(c){}}
;function go(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;ho(a,b,function(e){e?c(!0):m.setTimeout(function(){go(a,b,c,d,f)},f)})}}
function ho(a,b,c){var d=new Image;d.onload=function(){try{io(d),c(!0)}catch(e){}};
d.onerror=function(){try{io(d),c(!1)}catch(e){}};
d.onabort=function(){try{io(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{io(d),c(!1)}catch(e){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function io(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function jo(a){this.b=a;this.f=new An(null,!0)}
g=jo.prototype;g.Ob=null;g.ca=null;g.Ab=!1;g.Pc=null;g.qb=null;g.Tb=null;g.Pb=null;g.ga=null;g.ua=-1;g.eb=null;g.Za=null;g.connect=function(a){this.Pb=a;a=ko(this.b,null,this.Pb);Y();this.Pc=y();var b=this.b.B;null!=b?(this.eb=b[0],(this.Za=b[1])?(this.ga=1,lo(this)):(this.ga=2,mo(this))):(rh(a,"MODE","init"),this.ca=new Nn(this,0,void 0,void 0,void 0),this.ca.Fa=this.Ob,Sn(this.ca,a,!1,null,!0),this.ga=0)};
function lo(a){var b=ko(a.b,a.Za,"/mail/images/cleardot.gif");th(b);go(b.toString(),5E3,x(a.nd,a),3,2E3);a.ja(1)}
g.nd=function(a){if(a)this.ga=2,mo(this);else{Y();var b=this.b;b.ia=b.xa.ua;no(b,9)}a&&this.ja(2)};
function mo(a){var b=a.b.T;if(null!=b)Y(),b?(Y(),oo(a.b,a,!1)):(Y(),oo(a.b,a,!0));else if(a.ca=new Nn(a,0,void 0,void 0,void 0),a.ca.Fa=a.Ob,b=a.b,b=ko(b,b.jb()?a.eb:null,a.Pb),Y(),!K||rd(10))rh(b,"TYPE","xmlhttp"),Sn(a.ca,b,!1,a.eb,!1);else{rh(b,"TYPE","html");var c=a.ca;a=!!a.eb;c.Ua=3;c.wa=th(b.clone());bo(c,a)}}
g.Jb=function(a){return this.b.Jb(a)};
g.sc=function(){return!1};
g.Ac=function(a,b){this.ua=a.fb;if(0==this.ga)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.ia=this.ua;no(c,2);return}this.eb=c[0];this.Za=c[1]}else c=this.b,c.ia=this.ua,no(c,2);else if(2==this.ga)if(this.Ab)Y(),this.Tb=y();else if("11111"==b){if(Y(),this.Ab=!0,this.qb=y(),c=this.qb-this.Pc,!K||rd(10)||500>c)this.ua=200,this.ca.cancel(),Y(),oo(this.b,this,!0)}else Y(),this.qb=this.Tb=y(),this.Ab=!1};
g.wb=function(){this.ua=this.ca.fb;if(this.ca.la)0==this.ga?this.Za?(this.ga=1,lo(this)):(this.ga=2,mo(this)):2==this.ga&&((!K||rd(10)?!this.Ab:200>this.Tb-this.qb)?(Y(),oo(this.b,this,!1)):(Y(),oo(this.b,this,!0)));else{0==this.ga?Y():2==this.ga&&Y();var a=this.b;a.ia=this.ua;no(a,2)}};
g.jb=function(){return this.b.jb()};
g.isActive=function(){return this.b.isActive()};
g.ja=function(a){this.b.ja(a)};function po(a){xn.call(this);this.headers=new Pc;this.L=a||null;this.f=!1;this.H=this.b=null;this.$="";this.j=0;this.o="";this.i=this.U=this.l=this.P=!1;this.G=0;this.B=null;this.ra="";this.da=this.oa=!1}
z(po,xn);var qo=/^https?$/i,ro=["POST","PUT"];g=po.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.$+"; newUri="+a);b=b?b.toUpperCase():"GET";this.$=a;this.o="";this.j=0;this.P=!1;this.f=!0;this.b=this.L?this.L.b():Kn.b();this.H=this.L?Jn(this.L):Jn(Kn);this.b.onreadystatechange=x(this.zc,this);try{this.getStatus(),this.U=!0,this.b.open(b,String(a),!0),this.U=!1}catch(f){this.getStatus();so(this,f);return}a=c||"";var e=this.headers.clone();d&&Wc(d,function(a,b){e.set(b,a)});
d=Oa(e.qa(),to);c=m.FormData&&a instanceof m.FormData;!B(ro,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.ra&&(this.b.responseType=this.ra);"withCredentials"in this.b&&this.b.withCredentials!==this.oa&&(this.b.withCredentials=this.oa);try{uo(this),0<this.G&&(this.da=vo(this.b),this.getStatus(),this.da?(this.b.timeout=this.G,this.b.ontimeout=x(this.qc,this)):this.B=Cn(this.qc,this.G,this)),this.getStatus(),this.l=!0,this.b.send(a),this.l=!1}catch(f){this.getStatus(),so(this,f)}};
function vo(a){return K&&qd(9)&&fa(a.timeout)&&p(a.ontimeout)}
function to(a){return"content-type"==a.toLowerCase()}
g.qc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.G+"ms, aborting",this.j=8,this.getStatus(),yn(this,"timeout"),fo(this,8))};
function so(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;wo(a);xo(a)}
function wo(a){a.P||(a.P=!0,yn(a,"complete"),yn(a,"error"))}
function fo(a,b){a.b&&a.f&&(a.getStatus(),a.f=!1,a.i=!0,a.b.abort(),a.i=!1,a.j=b||7,yn(a,"complete"),yn(a,"abort"),xo(a))}
g.w=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),xo(this,!0));po.C.w.call(this)};
g.zc=function(){this.D()||(this.U||this.l||this.i?yo(this):this.Vd())};
g.Vd=function(){yo(this)};
function yo(a){if(a.f&&"undefined"!=typeof aa)if(a.H[1]&&4==Un(a)&&2==a.getStatus())a.getStatus();else if(a.l&&4==Un(a))Cn(a.zc,0,a);else if(yn(a,"readystatechange"),4==Un(a)){a.getStatus();a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Hd(1,String(a.$));if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,f=h.substr(0,h.length-1);e=!qo.test(f?f.toLowerCase():"")}d=
e}if(d)yn(a,"complete"),yn(a,"success");else{a.j=6;var k;try{k=2<Un(a)?a.b.statusText:""}catch(l){k=""}a.o=k+" ["+a.getStatus()+"]";wo(a)}}finally{xo(a)}}}
function xo(a,b){if(a.b){uo(a);var c=a.b,d=a.H[0]?t:null;a.b=null;a.H=null;b||yn(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function uo(a){a.b&&a.da&&(a.b.ontimeout=null);fa(a.B)&&(m.clearTimeout(a.B),a.B=null)}
g.isActive=function(){return!!this.b};
function Un(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Un(this)?this.b.status:-1}catch(a){return-1}};
function Vn(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function zo(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new An(null,!0);this.B=b||null;this.T=null!=c?c:null}
function Ao(a,b){this.f=a;this.b=b;this.context=null}
g=zo.prototype;g.ab=null;g.Z=null;g.M=null;g.Nb=null;g.rb=null;g.gc=null;g.sb=null;g.gb=0;g.Gd=0;g.V=null;g.ya=null;g.ta=null;g.Da=null;g.xa=null;g.Eb=null;g.Qa=-1;g.tc=-1;g.ia=-1;g.bb=0;g.Pa=0;g.Ca=8;var Bo=new xn;function Co(a){Wm.call(this,"statevent",a)}
z(Co,Wm);function Do(a,b){Wm.call(this,"timingevent",a);this.size=b}
z(Do,Wm);function Eo(a){Wm.call(this,"serverreachability",a)}
z(Eo,Wm);g=zo.prototype;g.connect=function(a,b,c,d,e){Y();this.Nb=b;this.ab=c||{};d&&p(e)&&(this.ab.OSID=d,this.ab.OAID=e);this.xa=new jo(this);this.xa.Ob=null;this.xa.f=this.j;this.xa.connect(a)};
function Fo(a){Go(a);if(3==a.b){var b=a.gb++,c=a.rb.clone();O(c,"SID",a.g);O(c,"RID",b);O(c,"TYPE","terminate");Ho(a,c);b=new Nn(a,0,a.g,b,void 0);b.Ua=2;b.wa=th(c.clone());(new Image).src=b.wa;b.ib=y();Tn(b)}Io(a)}
function Go(a){if(a.xa){var b=a.xa;b.ca&&(b.ca.cancel(),b.ca=null);b.ua=-1;a.xa=null}a.M&&(a.M.cancel(),a.M=null);a.ta&&(m.clearTimeout(a.ta),a.ta=null);Jo(a);a.Z&&(a.Z.cancel(),a.Z=null);a.ya&&(m.clearTimeout(a.ya),a.ya=null)}
function Ko(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new Ao(a.Gd++,b));2!=a.b&&3!=a.b||Lo(a)}
g.sc=function(){return 0==this.b};
function Lo(a){a.Z||a.ya||(a.ya=co(x(a.Ec,a),0),a.bb=0)}
g.Ec=function(a){this.ya=null;Mo(this,a)};
function Mo(a,b){if(1==a.b){if(!b){a.gb=Math.floor(1E5*Math.random());var c=a.gb++,d=new Nn(a,0,"",c,void 0);d.Fa=null;var e=No(a),f=a.rb.clone();O(f,"RID",c);a.l&&O(f,"CVER",a.l);Ho(a,f);Qn(d,f,e);a.Z=d;a.b=2}}else 3==a.b&&(b?Oo(a,b):0==a.f.length||a.Z||Oo(a))}
function Oo(a,b){var c,d;b?6<a.Ca?(a.f=a.i.concat(a.f),a.i.length=0,c=a.gb-1,d=No(a)):(c=b.B,d=b.Ja):(c=a.gb++,d=No(a));var e=a.rb.clone();O(e,"SID",a.g);O(e,"RID",c);O(e,"AID",a.Qa);Ho(a,e);c=new Nn(a,0,a.g,c,a.bb+1);c.Fa=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Z=c;Qn(c,e,d)}
function Ho(a,b){if(a.V){var c=a.V.nc(a);c&&Za(c,function(a,c){O(b,c,a)})}}
function No(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.Ca&&0<b?(d=a.f[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b,f=6>=a.Ca?e:f-d;try{Wc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function Po(a){a.M||a.ta||(a.o=1,a.ta=co(x(a.Dc,a),0),a.Pa=0)}
function Qo(a){if(a.M||a.ta||3<=a.Pa)return!1;a.o++;a.ta=co(x(a.Dc,a),Ro(a,a.Pa));a.Pa++;return!0}
g.Dc=function(){this.ta=null;this.M=new Nn(this,0,this.g,"rpc",this.o);this.M.Fa=null;this.M.Qb=0;var a=this.gc.clone();O(a,"RID","rpc");O(a,"SID",this.g);O(a,"CI",this.Eb?"0":"1");O(a,"AID",this.Qa);Ho(this,a);if(!K||rd(10))O(a,"TYPE","xmlhttp"),Sn(this.M,a,!0,this.sb,!1);else{O(a,"TYPE","html");var b=this.M,c=!!this.sb;b.Ua=3;b.wa=th(a.clone());bo(b,c)}};
function oo(a,b,c){a.Eb=c;a.ia=b.ua;a.rd(1,0);a.rb=ko(a,null,a.Nb);Lo(a)}
g.Ac=function(a,b){if(0!=this.b&&(this.M==a||this.Z==a))if(this.ia=a.fb,this.Z==a&&3==this.b)if(7<this.Ca){var c;try{c=this.j.parse(b)}catch(f){c=null}if(v(c)&&3==c.length)if(0==c[0])a:{if(!this.ta){if(this.M)if(this.M.ib+3E3<this.Z.ib)Jo(this),this.M.cancel(),this.M=null;else break a;Qo(this);Y()}}else this.tc=c[1],0<this.tc-this.Qa&&37500>c[2]&&this.Eb&&0==this.Pa&&!this.Da&&(this.Da=co(x(this.Hd,this),6E3));else no(this,11)}else b!=Pf.Te.b&&no(this,11);else if(this.M==a&&Jo(this),!qa(b)){c=this.j.parse(b);
v(c);for(var d=0;d<c.length;d++){var e=c[d];this.Qa=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.sb=e[2],e=e[3],null!=e?this.Ca=e:this.Ca=6,this.b=3,this.V&&this.V.lc(this),this.gc=ko(this,this.jb()?this.sb:null,this.Nb),Po(this)):"stop"==e[0]&&no(this,7):3==this.b&&("stop"==e[0]?no(this,7):"noop"!=e[0]&&this.V&&this.V.kc(this,e),this.Pa=0)}}};
g.Hd=function(){null!=this.Da&&(this.Da=null,this.M.cancel(),this.M=null,Qo(this),Y())};
function Jo(a){null!=a.Da&&(m.clearTimeout(a.Da),a.Da=null)}
g.wb=function(a){var b;if(this.M==a)Jo(this),this.M=null,b=2;else if(this.Z==a)this.Z=null,b=1;else return;this.ia=a.fb;if(0!=this.b)if(a.la)1==b?(y(),yn(Bo,new Do(Bo,a.Ja?a.Ja.length:0)),Lo(this),this.i.length=0):Po(this);else{var c=a.Ga,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.Z||this.ya||1==this.b||2<=this.bb?d=!1:(this.ya=co(x(this.Ec,this,a),Ro(this,this.bb)),this.bb++,d=!0);d=!(d||2==b&&Qo(this))}if(d)switch(c){case 1:no(this,5);break;case 4:no(this,10);break;case 3:no(this,6);
break;case 7:no(this,12);break;default:no(this,2)}}};
function Ro(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.rd=function(a){if(!B(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function no(a,b){if(2==b||9==b){var c=null;a.V&&(c=null);var d=x(a.Ae,a);c||(c=new dh("//www.google.com/images/cleardot.gif"),th(c));ho(c.toString(),1E4,d)}else Y();So(a,b)}
g.Ae=function(a){a?Y():(Y(),So(this,8))};
function So(a,b){a.b=0;a.V&&a.V.jc(a,b);Io(a);Go(a)}
function Io(a){a.b=0;a.ia=-1;if(a.V)if(0==a.i.length&&0==a.f.length)a.V.Hb(a);else{var b=Ua(a.i),c=Ua(a.f);a.i.length=0;a.f.length=0;a.V.Hb(a,b,c)}}
function ko(a,b,c){var d=uh(c);if(""!=d.f)b&&fh(d,b+"."+d.f),gh(d,d.l);else var e=window.location,d=vh(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.ab&&Za(a.ab,function(a,b){O(d,b,a)});
O(d,"VER",a.Ca);Ho(a,d);return d}
g.Jb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new po;a.oa=!1;return a};
g.isActive=function(){return!!this.V&&this.V.isActive(this)};
function co(a,b){if(!ga(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ja=function(){yn(Bo,new Eo(Bo))};
function Y(){yn(Bo,new Co(Bo))}
g.jb=function(){return!(!K||rd(10))};
function To(){}
g=To.prototype;g.lc=function(){};
g.kc=function(){};
g.jc=function(){};
g.Hb=function(){};
g.nc=function(){return{}};
g.isActive=function(){return!0};function Uo(a,b,c){E.call(this);this.b=a;this.i=b||0;this.f=c;this.g=x(this.pc,this)}
z(Uo,E);g=Uo.prototype;g.cb=0;g.w=function(){Uo.C.w.call(this);this.stop();delete this.b;delete this.f};
g.start=function(a){this.stop();this.cb=Cn(this.g,p(a)?a:this.i)};
g.stop=function(){this.isActive()&&m.clearTimeout(this.cb);this.cb=0};
g.isActive=function(){return 0!=this.cb};
g.pc=function(){this.cb=0;this.b&&this.b.call(this.f)};function Vo(a,b){E.call(this);this.f=new Uo(this.i,0,this);Zb(this,this.f);this.g=this.b=0;if(ga(a))b&&(a=x(a,b));else if(a&&ga(a.handleEvent))a=x(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a;Wo(this)}
z(Vo,E);Vo.prototype.i=function(){500<this.b&&24E4>2*this.b&&(this.b*=2);this.j();this.g&&this.start()};
Vo.prototype.start=function(){var a=this.f,b=this.b;a.isActive()||a.start(b);this.g=y()+this.b};
Vo.prototype.stop=function(){this.f.stop();this.g=0};
Vo.prototype.isActive=function(){return this.f.isActive()};
function Wo(a){a.f.stop();a.b=5E3+2E4*Math.random()}
;function Xo(a,b){this.H=a;this.o=b;this.g=new F;this.f=new Vo(this.Fe,this);this.b=null;this.G=!1;this.j=null;this.T="";this.B=this.i=0;this.l=[]}
z(Xo,To);g=Xo.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.na=function(a){return this.g.na(a)};
g.A=function(a,b){return this.g.A.apply(this.g,arguments)};
g.dispose=function(){this.G||(this.G=!0,ac(this.g),Yo(this),ac(this.f),this.f=null)};
g.D=function(){return this.G};
function Zo(a){return{firstTestResults:[""],secondTestResults:!a.b.Eb,sessionId:a.b.g,arrayId:a.b.Qa}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.T="";this.f.stop();this.j=a||null;this.i=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new zo("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.V=null);d.V=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Qa):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function Yo(a,b){a.B=b||0;a.f.stop();a.b&&(3==a.b.b&&Mo(a.b),Fo(a.b));a.B=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&mb(c,b);this.f.isActive()||2==(this.b?this.b.b:0)?this.l.push(c):$o(this)&&Ko(this.b,c)};
g.lc=function(){Wo(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)Ko(this.b,a[b])}this.A("handlerOpened")};
g.jc=function(a,b){var c=2==b&&401==this.b.ia;if(4!=b&&!c){if(6==b||410==this.b.ia)c=this.f,c.f.stop(),c.b=500;this.f.start()}this.A("handlerError",b)};
g.Hb=function(a,b,c){if(!this.f.isActive())this.A("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].b;d&&this.l.push(d)}};
g.nc=function(){var a={v:2};this.T&&(a.gsessionid=this.T);0!=this.i&&(a.ui=""+this.i);0!=this.B&&(a.ui=""+this.B);this.j&&mb(a,this.j);return a};
g.kc=function(a,b){"S"==b[0]?this.T=b[1]:"gracefulReconnect"==b[0]?(Wo(this.f),this.f.start(),Fo(this.b)):this.A("handlerMessage",new Um(b[0],b[1]))};
function $o(a){return!!a.b&&3==a.b.b}
function ap(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.Fe=function(){this.f.isActive();var a=this.b,b=0;a.M&&b++;a.Z&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function bp(a){this.index=-1;this.videoId=this.listId="";this.volume=this.b=-1;this.j=!1;this.audioTrackId=null;this.i=this.f=0;this.g=null;this.reset(a)}
function cp(a){a.audioTrackId=null;a.g=null;a.b=-1;a.f=0;a.i=y()}
bp.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";cp(this);this.volume=-1;this.j=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.j=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.f=a.playerTime,this.i=a.playerTimeAt)};
function dp(a){switch(a.b){case 1:return(y()-a.i)/1E3+a.f;case -1E3:return 0}return a.f}
function ep(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.j;b.audioTrackId=a.audioTrackId;b.trackData=kb(a.g);b.playerTime=a.f;b.playerTimeAt=a.i;return b}
bp.prototype.clone=function(){return new bp(ep(this))};function Z(a,b,c){V.call(this);this.i=NaN;this.$=!1;this.L=this.H=this.P=this.U=NaN;this.aa=[];this.B=this.G=this.g=this.F=this.b=null;this.Xa=a;this.aa.push(M(window,"beforeunload",x(this.xd,this)));this.f=[];this.F=new bp;this.oa=b.id;this.b=fp(this,c);this.b.subscribe("handlerOpened",this.Ld,this);this.b.subscribe("handlerClosed",this.Id,this);this.b.subscribe("handlerError",this.Jd,this);this.b.subscribe("handlerMessage",this.Kd,this);ap(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.F.videoId;Ml()&&N("yt-remote-session-video-id",a)},this)}
z(Z,V);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.F.listId=c);this.F.videoId=d;this.F.index=e||0;this.F.state=3;c=this.F;c.f=f;c.i=y();this.B="UNSUPPORTED";gp("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,Ql())}else gp("Connecting without params"),this.b.connect({},a,Ql());hp(this)};
g.dispose=function(){this.D()||(this.A("beforeDispose"),ip(this,3));Z.C.dispose.call(this)};
g.w=function(){jp(this);kp(this);lp(this);J(this.H);this.H=NaN;J(this.L);this.L=NaN;this.g=null;Ve(this.aa);this.aa.length=0;this.b.dispose();Z.C.w.call(this);this.B=this.G=this.f=this.F=this.b=null};
function gp(a){jl("conn",a)}
g.xd=function(){this.j(2)};
function fp(a,b){return new Xo(vl(a.Xa,"/bc",void 0,!1),b)}
function ip(a,b){a.A("proxyStateChange",b)}
function hp(a){a.i=H(x(function(){gp("Connecting timeout");this.j(1)},a),2E4)}
function jp(a){J(a.i);a.i=NaN}
function lp(a){J(a.U);a.U=NaN}
function mp(a){kp(a);a.P=H(x(function(){np(this,"getNowPlaying")},a),2E4)}
function kp(a){J(a.P);a.P=NaN}
g.Ld=function(){gp("Channel opened");this.$&&(this.$=!1,lp(this),this.U=H(x(function(){gp("Timing out waiting for a screen.");this.j(1)},this),15E3));
Ul(Zo(this.b),this.oa)};
g.Id=function(){gp("Channel closed");isNaN(this.i)?Vl(!0):Vl();this.dispose()};
g.Jd=function(a){Vl();isNaN(this.l())?(gp("Channel error: "+a+" without reconnection"),this.dispose()):(this.$=!0,gp("Channel error: "+a+" with reconnection in "+this.l()+" ms"),ip(this,2))};
function op(a,b){b&&(jp(a),lp(a));b==($o(a.b)&&isNaN(a.i))?b&&(ip(a,1),np(a,"getSubtitlesTrack")):b?(a.da()&&a.F.reset(),ip(a,1),np(a,"getNowPlaying"),pp(a)):a.j(1)}
function qp(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.F.videoId&&(hb(b.params)?a.F.g=null:a.F.g=b.params,a.A("remotePlayerChange"))}
function rp(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.F.listId=b.params.listId||a.F.listId;var e=a.F,f=e.videoId;e.videoId=c;e.index=d;c!=f&&cp(e);a.A("remoteQueueChange")}
function sp(a,b){b.params=b.params||{};rp(a,b);tp(a,b)}
function tp(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.F;d.f=isNaN(c)?0:c;d.i=y();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.F.b&&(c=-1E3);a.F.b=c;1==a.F.b?mp(a):kp(a);a.A("remotePlayerChange")}
function up(a,b){var c="true"==b.params.muted;a.F.volume=parseInt(b.params.volume,10);a.F.j=c;a.A("remotePlayerChange")}
g.Kd=function(a){a.params?gp("Received: action="+a.action+", params="+L(a.params)):gp("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=wd(a.params.devices);this.f=La(a,function(a){return new Hl(a)});
a=!!Oa(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
op(this,a);break;case "loungeScreenConnected":op(this,!0);break;case "loungeScreenDisconnected":Sa(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
op(this,!1);break;case "remoteConnected":var b=new Hl(wd(a.params.device));Oa(this.f,function(a){return a.equals(b)})||Qa(this.f,b);
break;case "remoteDisconnected":b=new Hl(wd(a.params.device));Sa(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":rp(this,a);break;case "nowPlaying":sp(this,a);break;case "onStateChange":tp(this,a);break;case "onVolumeChanged":up(this,a);break;case "onSubtitlesTrackChanged":qp(this,a);break;case "nowAutoplaying":this.G=a.params.videoId;break;case "autoplayDismissed":break;case "autoplayUpNext":this.G=a.params.videoId;break;case "onAutoplayModeChanged":this.B=a.params.autoplayMode;break;default:gp("Unrecognized action: "+a.action)}};
g.qe=function(){if(this.g){var a=this.g;this.g=null;this.F.videoId!=a&&np(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.na;Z.prototype.Ma=function(){var a=3;this.D()||(a=0,isNaN(this.l())?$o(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.Ma;Z.prototype.j=function(a){gp("Disconnecting with "+a);jp(this);this.A("beforeDisconnect",a);1==a&&Vl();Yo(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.j;Z.prototype.La=function(){var a=this.F;if(this.g){var b=a=this.F.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&cp(b)}return ep(a)};
Z.prototype.getPlayerContextData=Z.prototype.La;Z.prototype.Wa=function(a){var b=new bp(a);b.videoId&&b.videoId!=this.F.videoId&&(this.g=b.videoId,J(this.H),this.H=H(x(this.qe,this),5E3));var c=[];this.F.listId==b.listId&&this.F.videoId==b.videoId&&this.F.index==b.index||c.push("remoteQueueChange");this.F.b==b.b&&this.F.volume==b.volume&&this.F.j==b.j&&dp(this.F)==dp(b)&&L(this.F.g)==L(b.g)||c.push("remotePlayerChange");this.F.reset(a);A(c,function(a){this.A(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.Wa;Z.prototype.da=function(){var a=this.b.o.id,b=Oa(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.da;Z.prototype.l=function(){var a=this.b;return a.f.isActive()?a.f.g-y():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.l;Z.prototype.ra=function(){return this.B||"UNSUPPORTED"};
Z.prototype.getAutoplayMode=Z.prototype.ra;Z.prototype.va=function(){return this.G||""};
Z.prototype.getAutoplayVideoId=Z.prototype.va;Z.prototype.Ya=function(){if(!isNaN(this.l())){var a=this.b.f,b=a.f;b.stop();b.pc();a.start()}};
Z.prototype.reconnect=Z.prototype.Ya;function pp(a){J(a.L);a.L=H(x(a.j,a,1),864E5)}
function np(a,b,c){c?gp("Sending: action="+b+", params="+L(c)):gp("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.Na=function(a,b){np(this,a,b);pp(this)};
Z.prototype.sendMessage=Z.prototype.Na;function vp(a){Bl.call(this,"ScreenServiceProxy");this.Y=a;this.b=[];this.b.push(this.Y.$_s("screenChange",x(this.Je,this)));this.b.push(this.Y.$_s("onlineScreenChange",x(this.Rd,this)))}
z(vp,Bl);g=vp.prototype;g.ea=function(a){return this.Y.$_gs(a)};
g.contains=function(a){return!!this.Y.$_c(a)};
g.get=function(a){return this.Y.$_g(a)};
g.start=function(){this.Y.$_st()};
g.mb=function(a,b,c){this.Y.$_a(a,b,c)};
g.remove=function(a,b,c){this.Y.$_r(a,b,c)};
g.kb=function(a,b,c,d){this.Y.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.Y.$_ubk(this.b[a]);this.b.length=0;this.Y=null;vp.C.w.call(this)};
g.Je=function(){this.A("screenChange")};
g.Rd=function(){this.A("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ke;W.prototype.$_gsppc=W.prototype.Tc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.mb;W.prototype.$_un=W.prototype.kb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.ea;W.prototype.$_gos=W.prototype.Sc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.na;function wp(){var a={device:"Desktop",app:"youtube-desktop"};of&&nf();Jl();xp||(xp=new ul,Wl()&&(xp.b="/api/loungedev"));yp||(yp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",yp,void 0));zp();var b=Ap();if(!b){var c=new W(xp);q("yt.mdx.remote.screenService_",c,void 0);b=Ap();Cm(c,function(a){a?Bp()&&Sm(Bp(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){uc("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
Cp("Initializing: "+L(a));Dp.push(rc("yt-remote-cast2-availability-change",function(){uc("yt-remote-receiver-availability-change")}));
Dp.push(rc("yt-remote-cast2-receiver-selected",function(){Ep();uc("yt-remote-auto-connect","cast-selector-receiver")}));
Dp.push(rc("yt-remote-cast2-session-change",Fp));Dp.push(rc("yt-remote-connection-change",function(a){a?Sm(Bp(),"YouTube TV"):Gp()||(Sm(null,null),Rm())}));
var d=Hp();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;Cp(" -- with channel params: "+L(d));Ip(d);b.start();Bp()||Jp()}}
function Kp(){tc(Dp);Dp.length=0;ac(Lp);Lp=null;yp&&(A(yp,function(a){a(null)}),yp.length=0,yp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
xp=null}
function Mp(){var a=Np();Pm()&&qf("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a}
function Np(){var a;a=Ap().Y.$_gos();var b=Op();b&&Pp()&&(zl(a,b)||a.push(b));return yl(a)}
function Qp(){var a=Rp();!a&&Pm()&&Qm()&&(a={key:"cast-selector-receiver",name:Qm()});return a}
function Rp(){var a=Np(),b=Op();b||(b=Gp());return Oa(a,function(a){return b&&nl(b,a.key)?!0:!1})}
function Op(){var a=Bp();if(!a)return null;var b=Ap().ea();return Al(b,a)}
function Fp(a){Cp("remote.onCastSessionChange_: "+rl(a));if(a){var b=Op();b&&b.id==a.id?Sm(b.id,"YouTube TV"):(b&&Sp(),Tp(a,1))}else Sp()}
function Sp(){Tm()?Lm().stopSession():Im("stopSession called before API ready.");var a=Pp();a?a.disconnect(1):(vc("yt-remote-before-disconnect",1),vc("yt-remote-connection-change",!1));Up(null)}
function Cp(a){jl("remote",a)}
function Ap(){if(!Lp){var a=r("yt.mdx.remote.screenService_");Lp=a?new vp(a):null}return Lp}
function Bp(){return r("yt.mdx.remote.currentScreenId_")}
function Vp(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function Ep(){q("yt.mdx.remote.connectData_",null,void 0)}
function Pp(){return r("yt.mdx.remote.connection_")}
function Up(a){var b=Pp();Ep();a?Pp():Vp("");q("yt.mdx.remote.connection_",a,void 0);yp&&(A(yp,function(b){b(a)}),yp.length=0);
b&&!a?vc("yt-remote-connection-change",!1):!b&&a&&uc("yt-remote-connection-change",!0)}
function Gp(){var a=Ml();if(!a)return null;var b=Ap().ea();return Al(b,a)}
function Tp(a,b){Bp();Vp(a.id);var c=new Z(xp,a,Hp());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){vc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Pp()&&(Pp(),Up(null))});
Up(c)}
function Jp(){var a=Gp();a?(Cp("Resume connection to: "+rl(a)),Tp(a,0)):(Vl(),Rm(),Cp("Skipping connecting because no session screen found."))}
var xp=null,yp=null,Lp=null;function zp(){var a=Hp();if(hb(a)){var a=Ll(),b=qf("yt-remote-session-name")||"",c=qf("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function Hp(){return r("yt.mdx.remote.channelParams_")||{}}
function Ip(a){a?(N("yt-remote-session-app",a.app),N("yt-remote-session-name",a.name)):(rf("yt-remote-session-app"),rf("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Dp=[];var Wp=null,Xp=[];function Yp(){Zp();if(Qp()){var a=Wp;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Zp(){var a=Wp;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Mp(),Qp())}
;var $p=null,aq=[];function bq(a){return{externalChannelId:a.externalChannelId,Fd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function cq(a){dq(bq(a))}
function dq(a){ij()?(R(Wi,new Qi(a.externalChannelId,a.Fd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Nd({event:"subscribe",source:a.source}))&&Gh(a)):eq(a)}
function eq(a){hj(function(b){b.subscription_ajax&&dq(a)},null)}
function fq(a){a=bq(a);R(aj,new Si(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Nd({event:"unsubscribe",source:a.source}))&&Gh(a)}
function gq(a){$p&&$p.channelSubscribed(a.b,a.subscriptionId)}
function hq(a){$p&&$p.channelUnsubscribed(a.b)}
;function iq(a){E.call(this);this.f=a;this.f.subscribe("command",this.Jc,this);this.g={};this.i=!1}
z(iq,E);g=iq.prototype;g.start=function(){this.i||this.D()||(this.i=!0,jq(this.f,"RECEIVING"))};
g.Wc=u;g.addEventListener=u;g.removeEventListener=u;g.Jc=function(a,b){if(this.i&&!this.D()){var c=b||{};switch(a){case "addEventListener":if(w(c.event)&&(c=c.event,!(c in this.g))){var d=x(this.se,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":w(c.event)&&kq(this,c.event);break;default:this.Wc(a,b)}}};
g.se=function(a,b){this.i&&!this.D()&&jq(this.f,a,this.Kb(a,b))};
g.Kb=function(a,b){if(null!=b)return{value:b}};
function kq(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.Jc,this);this.f=null;for(var a in this.g)kq(this,a);iq.C.w.call(this)};function lq(a,b){iq.call(this,b);this.b=a;this.start()}
z(lq,iq);g=lq.prototype;g.addEventListener=function(a,b){this.b.addEventListener(a,b)};
g.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
g.Wc=function(a,b){if(this.b.isReady()&&this.b[a]){var c=mq(a,b||{}),c=this.b[a].apply(this.b,c);(c=nq(a,c))&&this.i&&!this.D()&&jq(this.f,a,c)}};
function mq(a,b){switch(a){case "loadVideoById":return b=Kk(b),Mk(b),[b];case "cueVideoById":return b=Kk(b),Mk(b),[b];case "loadVideoByPlayerVars":return Mk(b),[b];case "cueVideoByPlayerVars":return Mk(b),[b];case "loadPlaylist":return b=Lk(b),Mk(b),[b];case "cuePlaylist":return b=Lk(b),Mk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function nq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
g.Kb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return lq.C.Kb.call(this,a,b)};
g.w=function(){lq.C.w.call(this);delete this.b};function oq(a,b,c,d){E.call(this);this.b=b||null;this.B="*";this.i=c||null;this.f=null;this.channel=d||null;this.H=!!a;this.G=x(this.L,this);window.addEventListener("message",this.G)}
z(oq,E);oq.prototype.L=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.b&&a.source!=this.b)&&w(a.data)){var b;try{b=wd(a.data)}catch(c){return}null!=b&&(this.H&&(this.f&&this.f!=b.id||this.channel&&this.channel!=b.channel)?window.console&&window.console.warn("Session ID or channel missmatch"):b&&this.l(a,b))}};
oq.prototype.l=u;oq.prototype.sendMessage=function(a){if(this.b){this.f&&(a.id=this.f);this.channel&&(a.channel=this.channel);try{var b=L(a);this.b.postMessage(b,this.B)}catch(c){jc(c,"WARNING")}}};
oq.prototype.w=function(){window.removeEventListener("message",this.G);oq.C.w.call(this)};function pq(a,b,c){oq.call(this,a,b,c||G("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.o=this.g=this.j=null}
z(pq,oq);pq.prototype.l=function(a,b){switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:jc(Error("MessageEvent origin is null"),"WARNING");this.b=a.source;this.f=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.j&&(this.o&&!B(this.o,b.func)||this.j(b.func,b.args))}};function qq(){var a=this.f=new pq(!!G("WIDGET_ID_ENFORCE")),b=x(this.oe,this);a.j=b;a.o=null;this.f.channel="widget";if(a=G("WIDGET_ID"))this.f.P=a;this.i=[];this.o=!1;this.j={}}
g=qq.prototype;g.oe=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,rq(this,c)),this.j[c]=!0)}else this.Xc(a,b)};
g.Xc=function(){};
function rq(a,b){return x(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.sd=function(){this.o=!0;this.sendMessage("initialDelivery",this.Lb());this.sendMessage("onReady");A(this.i,this.Yc,this);this.i=[]};
g.Lb=function(){return null};
function sq(a,b){a.sendMessage("infoDelivery",b)}
g.Yc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Yc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function tq(a){qq.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Wd,this));this.addEventListener("onVideoProgress",x(this.we,this));this.addEventListener("onVolumeChange",x(this.xe,this));this.addEventListener("onApiChange",x(this.re,this));this.addEventListener("onPlaybackQualityChange",x(this.te,this));this.addEventListener("onPlaybackRateChange",x(this.ue,this));this.addEventListener("onStateChange",x(this.ve,this))}
z(tq,qq);g=tq.prototype;g.Xc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Ik(a)){var c;c=b;if(ha(c[0])&&!v(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Kk.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Jk.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Lk.apply(window,c)}c=d}Mk(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Ik(a)&&sq(this,this.Lb())}};
g.Wd=function(){var a=x(this.sd,this);this.f.g=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Lb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ra(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
g.ve=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};
this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());sq(this,a)};
g.te=function(a){sq(this,{playbackQuality:a})};
g.ue=function(a){sq(this,{playbackRate:a})};
g.re=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.xe=function(){sq(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.we=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());sq(this,a)};
g.dispose=function(){tq.C.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function uq(a,b,c){V.call(this);this.b=a;this.f=b;this.g=c}
z(uq,V);function jq(a,b,c){if(!a.D()){var d=a.b;d.D()||a.f!=d.b||(a={id:a.g,command:b},c&&(a.data=c),d.b.postMessage(L(a),d.g))}}
uq.prototype.w=function(){this.f=this.b=null;uq.C.w.call(this)};function vq(a,b,c){E.call(this);this.b=a;this.g=c;this.i=M(window,"message",x(this.j,this));this.f=new uq(this,a,b);Zb(this,this.f)}
z(vq,E);vq.prototype.j=function(a){var b;if(b=!this.D())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,w(a))){try{a=wd(a)}catch(d){return}a.command&&(b=this.f,b.D()||b.A("command",a.command,a.data))}};
vq.prototype.w=function(){Ve(this.i);this.b=null;vq.C.w.call(this)};var wq=!1;function xq(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(wq=!0,a.description)){xq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){wq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],wq=!(!a||!a.enabledPlugin))){xq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");wq=!0;xq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");wq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),wq=!0,xq(b.GetVariable("$version"))}catch(c){}})();function yq(a){return(a=a.exec(nb))?a[1]:""}
(function(){if(uf)return yq(/Firefox\/([0-9.]+)/);if(K||gd||fd)return pd;if(yf)return yq(/Chrome\/([0-9.]+)/);if(zf&&!(bd()||C("iPad")||C("iPod")))return yq(/Version\/([0-9.]+)/);if(vf||wf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(nb);if(a)return a[1]+"."+a[2]}else if(xf)return(a=yq(/Android\s+([0-9.]+)/))?a:yq(/Version\/([0-9.]+)/);return""})();function zq(){var a=Aq;return new Eg(function(b,c){a.R=function(a){Td(a)?b(a):c(a)};
a.onError=c;a.ka=c;Yd("//googleads.g.doubleclick.net/pagead/id",a)})}
;function Bq(a,b){this.f=a;this.b=b}
Bq.prototype.then=function(a,b,c){try{if(p(this.f))return a?Jg(a.call(c,this.f)):Jg(this.f);if(p(this.b)){if(!b)return Kg(this.b);var d=b.call(c,this.b);return!p(d)&&this.b instanceof Mg?Kg(this.b):Jg(d)}throw Error("Invalid Result_ state");}catch(e){return Kg(e)}};
Dg(Bq);var Aq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Cq=null;function Dq(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Eq(""),Cq=new Bq(""),"";a=JSON.parse(a.substr(4)).id;Eq(a);Cq=new Bq(a);Fq(18E5,2);return a}
function Gq(a){var b=Error("Unable to load /pagead/id");Eq("");Cq=new Bq(void 0,b);0<a&&Fq(12E4,a-1);throw b;}
function Fq(a,b){H(function(){var a=x(Gq,m,b),a=zq().then(Dq,a);Lg(a,null,t,void 0)},a)}
function Eq(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Hq(){}
;function Iq(){var a;if(a=Tf.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Jq[d]=c.toString())}}}
ca(Iq);var Jq=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Jq,void 0);function Kq(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Lq(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Mq(a){a=void 0!==Jq[a]?Jq[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Iq.prototype.get=function(a,b){Lq(a);Kq(a);var c=void 0!==Jq[a]?Jq[a].toString():null;return null!=c?c:b?b:""};
Iq.prototype.set=function(a,b){Lq(a);Kq(a);if(null==b)throw"ExpectedNotNull";Jq[a]=b.toString()};
Iq.prototype.remove=function(a){Lq(a);Kq(a);delete Jq[a]};
Iq.prototype.clear=function(){Jq={}};function Nq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Gh(c)}}
;function Oq(a){P.call(this,1,arguments);this.ob=a}
z(Oq,P);function Pq(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
z(Pq,P);function Qq(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
z(Qq,P);function Rq(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
z(Rq,P);function Sq(a){P.call(this,1,arguments)}
z(Sq,P);var Tq=new Q("ypc-core-load",Oq),Uq=new Q("ypc-guide-sync-success",Pq),Vq=new Q("ypc-purchase-success",Qq),Wq=new Q("ypc-subscription-cancel",Sq),Xq=new Q("ypc-subscription-cancel-success",Rq),Yq=new Q("ypc-init-subscription",Sq);var Zq=!1,$q=[],ar=[];function br(a){a.b?Zq?R($i,a):R(Tq,new Oq(function(){R(Yq,new Sq(a.b))})):cr(a.f,a.i,a.g,a.source)}
function dr(a){a.b?Zq?R(ej,a):R(Tq,new Oq(function(){R(Wq,new Sq(a.b))})):er(a.f,a.subscriptionId,a.i,a.g,a.source)}
function fr(a){gr(Ua(a.b))}
function hr(a){ir(Ua(a.b))}
function jr(a){kr(a.g,a,null)}
function lr(a,b,c,d){kr(a,b,c,d)}
function mr(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&R(Zi,new Ri(b,c,a.b.channelInfo))}
function nr(a){var b=a.b;Za(a.f,function(a,d){R(Zi,new Ri(d,a,b[d]))})}
function or(a){R(dj,new Oi(a.f.itemId));a.b&&a.b.length&&(pr(a.b,dj),pr(a.b,fj))}
function cr(a,b,c,d){var e=new Oi(a);R(Xi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&qr(b,c);Yd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Xb:f,O:c,R:function(b,c){var d=c.response;R(Zi,new Ri(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&uc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Nq(d.actions)},
Ub:function(){R(Yi,e)}})}
function er(a,b,c,d,e){var f=new Oi(a);R(bj,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&qr(c,d);Yd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Xb:h,O:d,R:function(a,b){var c=b.response;R(dj,f);c.actions&&Nq(c.actions)},
Ub:function(){R(cj,f)}})}
function kr(a,b,c,d){if(null!==b&&(null!==b.b||null!==b.receivePostUpdates||null!==b.f)){var e={};a&&(e.channel_id=a);null!==b.b&&(e.receive_all_updates=b.b);null!==b.receivePostUpdates&&(e.receive_post_updates=b.receivePostUpdates);null!==b.f&&(e.receive_no_updates=b.f);Yd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",O:e,onError:function(){c&&c()},
R:function(){d&&d()}})}}
function gr(a){if(a.length){var b=Wa(a,0,40);R("subscription-batch-subscribe-loading");pr(b,Xi);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");pr(b,Yi)};
Yd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",O:c,R:function(c,f){d();var e=f.response,k=e.id;if(v(k)&&k.length==b.length){var l=e.channel_info_map;A(k,function(a,c){var d=b[c];R(Zi,new Ri(d,a,l[d]))});
a.length?gr(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function ir(a){if(a.length){var b=Wa(a,0,40);R("subscription-batch-unsubscribe-loading");pr(b,bj);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");pr(b,cj)};
Yd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",O:c,R:function(){d();pr(b,dj);a.length&&ir(a)},
onError:function(){d()}})}}
function pr(a,b){A(a,function(a){R(b,new Oi(a))})}
function qr(a,b){var c=Qd(a),d;for(d in c)b[d]=c[d]}
;var rr=null,sr=null,tr=null,ur=!1;function vr(a){var b=Of();b&&Mf(Lf(),{click:{csn:b,visualElement:Bf(new Af(a))}},void 0)}
function wr(a){var b=Of();if(b){for(var c=[],d=0;d<a.length;d++)c.push(new Af(a[d]));Kf(b,c)}}
;q("yt.setConfig",fc,void 0);q("yt.setMsg",function(a){hc(ec,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||G("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=ee)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(w(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.ff||"Not available"}catch(ba){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||
m.$googDebugFname||f}catch(ba){k="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(de[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Xb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},O:{url:G("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.O.stack=e);for(var n in c)b.O["client."+n]=c[n];if(n=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var I in n)b.O[I]=n[I];Yd("/error_204",b);de[a.message]=!0;ee++}}},void 0);
q("writeEmbed",function(){var a=G("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!Cq){var e=x(Gq,m,2);Cq=zq().then(Dq,e)}d=Cq}b=d}catch(f){b=Kg(f)}Lg(b,null,Hq,void 0)}catch(f){jc(f)}"gvn-experiment"==a.args.ps&&(document.body.style.backgroundColor="transparent");d=document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;Ed("legacy_cast2")&&w(d)&&w(b)&&-1<d.indexOf(b)&&Dh(b)&&Dh(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=
d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Mk(a.args);rr=d=Bi("player",a);d.addEventListener("onLogServerVeClicked",vr);d.addEventListener("onLogServerVesShown",wr);e=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?tr=new tq(d):G("ENABLE_POST_API")&&w(e)&&w(b)&&(sr=new vq(window.parent,e,b),tr=new lq(d,sr.f));Ed("legacy_cast2")&&((ur=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(wp(),Wp=d,Wp.addEventListener("onReady",Yp),Xp.push(rc("yt-remote-receiver-availability-change",
Zp))));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&Hc();ie();$p=d;$p.addEventListener("SUBSCRIBE",cq);$p.addEventListener("UNSUBSCRIBE",fq);aq.push(Oh(Zi,gq),Oh(dj,hq))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Gh(a);return!0},void 0);
var xr=ic(function(){Yh("ol");Zq=!0;ar.push(Oh(Wi,br),Oh(aj,dr));Zq||(ar.push(Oh($i,br),Oh(ej,dr),Oh(Ti,fr),Oh(Ui,hr),Oh(Vi,jr)),$q.push(rc("subscription-prefs",lr)),ar.push(Oh(Vq,mr),Oh(Xq,or),Oh(Uq,nr)));Iq.getInstance();var a=1<window.devicePixelRatio;if(!!((Mq("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=Mq(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Jq[b]:(a=c.toString(16),Jq[b]=a.toString());var b=[],d;for(d in Jq)b.push(d+"="+escape(Jq[d]));Uf("PREF",b.join("&"),
63072E3)}}),yr=ic(function(){var a=rr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(Gc=null);for(var a=0,b=ge.length;a<b;a++){var c=ge[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}}ge.length=0;a=Cc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))xc(a),b.parentNode.removeChild(b);he=!1;fc("DCLKSTAT",0);tc($q);$q.length=0;Ph(ar);ar.length=0;Zq=!1;$p&&($p.removeEventListener("SUBSCRIBE",dq),$p.removeEventListener("UNSUBSCRIBE",fq));$p=null;Ph(aq);aq.length=0;
Ed("legacy_cast2")&&!ur&&(tc(Xp),Xp.length=0,Wp&&(Wp.removeEventListener("onReady",Yp),Wp=null),Kp());bc(tr,sr);if(a=rr)a.removeEventListener("onLogServerVeClicked",vr),a.removeEventListener("onLogServerVesShown",wr),a.destroy()});
window.addEventListener?(window.addEventListener("load",xr),window.addEventListener("unload",yr)):window.attachEvent&&(window.attachEvent("onload",xr),window.attachEvent("onunload",yr));var zr=Ej.getInstance(),Ar=S(zr);Ar in Jj||(zr.register(),zr.yb.push(rc("yt-uix-init-"+Ar,zr.init,zr)),zr.yb.push(rc("yt-uix-dispose-"+Ar,zr.dispose,zr)),Jj[Ar]=zr);})();
