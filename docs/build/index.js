!function(){"use strict";function t(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function e(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n={exports:{}};n.exports=function(){var t=6e4,e=36e5,n="millisecond",r="second",i="minute",o="hour",a="day",u="week",s="month",l="quarter",c="year",f="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,a=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:c,w:u,d:a,D:f,h:o,m:i,s:r,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",T={};T[m]=y;var M=function(t){return t instanceof D},S=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)T[t]&&(r=t),e&&(T[t]=e,r=t);else{var i=t.name;T[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},p=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=g;w.l=S,w.i=M,w.w=function(t,e){return p(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function y(t){this.$L=S(t.locale,null,!0),this.parse(t)}var $=y.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return w},$.isValid=function(){return!(this.$d.toString()===d)},$.isSame=function(t,e){var n=p(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return p(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<p(t)},$.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,l=!!w.u(e)||e,d=w.p(t),h=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?r:r.endOf(a)},v=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,$=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case c:return l?h(1,0):h(31,11);case s:return l?h(1,$):h(0,$+1);case u:var T=this.$locale().weekStart||0,M=(y<T?y+7:y)-T;return h(l?g-M:g+(6-M),$);case a:case f:return v(m+"Hours",0);case o:return v(m+"Minutes",1);case i:return v(m+"Seconds",2);case r:return v(m+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var u,l=w.p(t),d="set"+(this.$u?"UTC":""),h=(u={},u[a]=d+"Date",u[f]=d+"Date",u[s]=d+"Month",u[c]=d+"FullYear",u[o]=d+"Hours",u[i]=d+"Minutes",u[r]=d+"Seconds",u[n]=d+"Milliseconds",u)[l],v=l===a?this.$D+(e-this.$W):e;if(l===s||l===c){var y=this.clone().set(f,1);y.$d[h](v),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[w.p(t)]()},$.add=function(n,l){var f,d=this;n=Number(n);var h=w.p(l),v=function(t){var e=p(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(h===s)return this.set(s,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===a)return v(1);if(h===u)return v(7);var y=(f={},f[i]=t,f[o]=e,f[r]=1e3,f)[h]||1,$=this.$d.getTime()+n*y;return w.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,u=this.$M,s=n.weekdays,l=n.months,c=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].substr(0,o)},f=function(t){return w.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:c(n.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,s,2),ddd:c(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:w.s(o,2,"0"),h:f(1),hh:f(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||y[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,f,d){var h,v=w.p(f),y=p(n),$=(y.utcOffset()-this.utcOffset())*t,g=this-y,m=w.m(this,y);return m=(h={},h[c]=m/12,h[s]=m,h[l]=m/3,h[u]=(g-$)/6048e5,h[a]=(g-$)/864e5,h[o]=g/e,h[i]=g/t,h[r]=g/1e3,h)[v]||g,d?m:w.a(m)},$.daysInMonth=function(){return this.endOf(s).$D},$.$locale=function(){return T[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return w.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},y}(),L=D.prototype;return p.prototype=L,[["$ms",n],["$s",r],["$m",i],["$H",o],["$W",a],["$M",s],["$y",c],["$D",f]].forEach((function(t){L[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),p.extend=function(t,e){return t.$i||(t(e,D,p),t.$i=!0),p},p.locale=S,p.isDayjs=M,p.unix=function(t){return p(1e3*t)},p.en=T[m],p.Ls=T,p.p={},p}();var r,i,o,a,u=n.exports,s=[["2020-03-22T00:00:00+13:00",2],["2020-03-23T13:30:00+13:00",3],["2020-03-26T00:00:00+13:00",4],["2020-04-28T00:00:00+12:00",3],["2020-05-14T00:00:00+12:00",2],["2020-06-09T00:00:00+12:00",1],["2020-08-12T12:00:00+12:00",2],["2020-08-12T12:00:00+12:00",3,"AKL"],["2020-08-31T00:00:00+12:00",2,"AKL"],["2020-09-22T00:00:00+12:00",1],["2020-09-22T00:00:00+12:00",2,"AKL"],["2020-10-08T00:00:00+13:00",1,"AKL"],["2021-02-15T00:00:00+13:00",2],["2021-02-15T00:00:00+13:00",3,"AKL"],["2021-02-18T00:00:00+13:00",1],["2021-02-18T00:00:00+13:00",2,"AKL"],["2021-02-23T00:00:00+13:00",1,"AKL"],["2021-02-28T06:00:00+13:00",2],["2021-02-28T06:00:00+13:00",3,"AKL"],["2021-03-07T06:00:00+13:00",1],["2021-03-07T06:00:00+13:00",2,"AKL"],["2021-03-12T12:00:00+13:00",1,"AKL"],["2021-06-23T18:00:00+12:00",2,"WLG"],["2021-06-30T00:00:00+12:00",1,"WLG"],["2021-08-18T00:00:00+12:00",4],["2021-09-01T00:00:00+12:00",3],["2021-09-01T00:00:00+12:00",4,"AKL"],["2021-09-01T00:00:00+12:00",4,"NL"],["2021-09-03T00:00:00+12:00",3,"NL"],["2021-09-08T00:00:00+12:00",2],["2021-09-08T00:00:00+12:00",4,"AKL"],["2021-09-22T00:00:00+12:00",3,"AKL"],["2021-10-09T00:00:00+13:00",3,"NL"],["2021-10-20T00:00:00+13:00",2,"NL"],["2021-11-03T00:00:00+13:00",3,"NL"]];function l(){var n,r,i,o,u,l,y,$,g,m,T;window.clearInterval(a),localStorage.setItem("config",JSON.stringify(v));try{for(var M=t(null!==($=null===(y=document.getElementById("region"))||void 0===y?void 0:y.children)&&void 0!==$?$:[]),S=M.next();!S.done;S=M.next()){var p=(L=S.value).getAttribute("data-val");L.setAttribute("aria-checked",String(p===v.region))}}catch(t){n={error:t}}finally{try{S&&!S.done&&(r=M.return)&&r.call(M)}finally{if(n)throw n.error}}try{for(var w=t(null!==(m=null===(g=document.getElementById("level"))||void 0===g?void 0:g.children)&&void 0!==m?m:[]),D=w.next();!D.done;D=w.next()){var L=D.value;p=parseInt(null!==(T=L.getAttribute("data-val"))&&void 0!==T?T:""),L.setAttribute("aria-checked",String(p>=v.level))}}catch(t){i={error:t}}finally{try{D&&!D.done&&(o=w.return)&&o.call(w)}finally{if(i)throw i.error}}var b,A,O=0,x=0;try{for(var I=t(s),_=I.next();!_.done;_=I.next()){var E=_.value,k=e(E,3),K=k[0],H=k[2];H&&H!==v.region||(!c(A)&&c(E)&&E[0]!==(null==A?void 0:A[0])&&(x=0,A=void 0),O+=f(b,K),x+=f(A,K),b=E,A=E)}}catch(t){u={error:t}}finally{try{_&&!_.done&&(l=I.return)&&l.call(I)}finally{if(u)throw u.error}}var Y=c(A);function N(){d("curTime",x+f(A)),d("totalTime",O+f(b))}h("curDesc",Y?"in this lockdown":"in last lockdown"),N(),a=Y?window.setInterval(N,100):void 0}function c(t){return!!t&&e(t,2)[1]>=v.level}function f(t,n){if(!c(t))return 0;var r=e(t,1)[0];return u(n).diff(r)}function d(t,e){function n(t,e){void 0===e&&(e=!0);var n=Math.floor(t).toFixed();return!e||n.length>1?n:"0"+n}h(t,n(e/864e5,!1)+"d "+n(e/36e5%24)+":"+n(e/6e4%60)+":"+n(e/1e3%60)+"."+n(e/100%10,!1))}function h(t,e){var n=document.getElementById(t);n&&(n.textContent=e)}var v=function(n){var r,i,o,a,u=null!==(o=JSON.parse(localStorage.getItem("config")))&&void 0!==o?o:{},s={};try{for(var l=t(Object.entries({region:"AKL",level:3})),c=l.next();!c.done;c=l.next()){var f=e(c.value,2),d=f[0];s[d]=null!==(a=u[d])&&void 0!==a?a:f[1]}}catch(t){r={error:t}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}return s}();null===(r=document.getElementById("level"))||void 0===r||r.addEventListener("click",(function(t){var e;if(t.target instanceof Element){var n=parseInt(null!==(e=t.target.getAttribute("data-val"))&&void 0!==e?e:"");isFinite(n)&&(v.level=n,l())}})),null===(i=document.getElementById("region"))||void 0===i||i.addEventListener("click",(function(t){if(t.target instanceof Element){var e=t.target.getAttribute("data-val");null!==e&&(v.region=e,l())}})),null===(o=document.getElementById("music"))||void 0===o||o.addEventListener("click",(function(t){if(t.currentTarget instanceof Element){var e="true"===t.currentTarget.getAttribute("aria-checked"),n=document.getElementById("audio");n instanceof HTMLAudioElement&&(e?n.pause():n.play(),t.currentTarget.setAttribute("aria-checked",String(!e)))}})),l()}();
