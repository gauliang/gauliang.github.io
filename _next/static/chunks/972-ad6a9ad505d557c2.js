(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},$={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,u),i=n-s<0,a=t.clone().add(r+(i?-1:1),u);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:h,w:c,d:o,D:d,h:a,m:i,s:s,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",w={};w[y]=p;var g=function(e){return e instanceof S},j=function e(t,n,r){var s;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(s=i),n&&(w[i]=n,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;w[o]=t,s=o}return!r&&s&&(y=s),s||!r&&y},b=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},M=$;M.l=j,M.i=g,M.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function p(e){this.$L=j(e.locale,null,!0),this.parse(e)}var v=p.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return b(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<b(e)},v.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!M.u(t)||t,l=M.p(e),f=function(e,t){var s=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?s:s.endOf(o)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},x=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,p):f(0,p+1);case c:var y=this.$locale().weekStart||0,w=(x<y?x+7:x)-y;return f(r?v-w:v+(6-w),p);case o:case d:return m($+"Hours",0);case a:return m($+"Minutes",1);case i:return m($+"Seconds",2);case s:return m($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,c=M.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],m=c===o?this.$D+(t-this.$W):t;if(c===u||c===h){var x=this.clone().set(d,1);x.$d[f](m),x.init(),this.$d=x.set(d,Math.min(this.$D,x.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(r,l){var d,f=this;r=Number(r);var m=M.p(l),x=function(e){var t=b(f);return M.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return x(1);if(m===c)return x(7);var p=(d={},d[i]=t,d[a]=n,d[s]=e,d)[m]||1,v=this.$d.getTime()+r*p;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),i=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(e,n,s,i){return e&&(e[n]||e(t,r))||s[n].slice(0,i)},h=function(e){return M.s(i%12||12,e,"0")},d=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:M.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,a,!0),A:d(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return r.replace(x,(function(e,t){return t||m[e]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,f){var m,x=M.p(d),p=b(r),v=(p.utcOffset()-this.utcOffset())*t,$=this-p,y=M.m(this,p);return y=(m={},m[h]=y/12,m[u]=y,m[l]=y/3,m[c]=($-v)/6048e5,m[o]=($-v)/864e5,m[a]=$/n,m[i]=$/t,m[s]=$/e,m)[x]||$,f?y:M.a(y)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),D=S.prototype;return b.prototype=D,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,S,b),e.$i=!0),b},b.locale=j,b.isDayjs=g,b.unix=function(e){return b(1e3*e)},b.en=w[y],b.Ls=w,b.p={},b}()},1242:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893),s=n(7294),i=n(3750);function a(){var e=(0,s.useRef)(null),t=function(t){if(null!==e.current){var n=e.current;t?(n.style.opacity=1,n.style.pointerEvents="auto"):(n.style.opacity=0,n.style.pointerEvents="none")}},n=function(){if(null!==e.current){var t=e.current,n=t.offsetWidth,r=document.querySelector(".container").offsetWidth,s=(window.innerWidth-r)/2+r;t.style.left=window.innerWidth-n<s?window.innerWidth-n-30+"px":s+"px"}},a=function(){var e=document.documentElement.scrollTop;e>300?t(!0):e<=300&&t(!1)};return(0,s.useEffect)((function(){var e=null,t=null,r=function(){e&&clearTimeout(e),e=setTimeout(a,150)},s=function(){t&&clearTimeout(t),t=setTimeout(n,150)};return n(),a(),window.addEventListener("resize",s),window.addEventListener("scroll",r),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",r)}}),[]),(0,r.jsxs)("button",{ref:e,onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-to-top rounded-full whitespace-nowrap flex space-x-2 flex-row text-xs items-center uppercase py-2 px-5 text-white bg-blue-600 hover:bg-gray-800 transition",children:[(0,r.jsx)(i.a4S,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:"Scroll to top"})]})}},5430:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),s=n(7294),i=n(1664),a=n.n(i),o=(0,r.jsx)("svg",{className:"w-8 h-8 my-1 dark:text-[#0069ff]",viewBox:"0 0 512 512",fill:"currentColor",children:(0,r.jsx)("path",{d:"M238.74,366.17c-24.56,0.42-12.59,0.42-36.76,0 C92.86,358.74,92.54,257.24,92.54,257.24s-3.78-104.91,109.44-110.42c105.79,0.4,195.22,0.23,242.54,0.08 c40.86-0.53,36.61-7.61,26.7-24.61C447.75,81.99,384.8,3.28,250.71,0C-60.02,17.45-88.35,433.93,194.97,504.76 c42.5,12.75,91.65,4.77,91.65,4.77s-0.23-52.54,0-94.13C286.82,378.65,274.71,365.55,238.74,366.17z M482.55,207.28 c-12,0.02-229.21,1.03-280.57,0.86c-48.75-0.16-48.73,49.23-48.73,49.23s0.19,47.49,48.73,47.5c-0.03,0,109.56-0.35,121.41,0 c11.91,0.35,24.03,12.59,23.94,25.04c-0.19,27.35,0.46,163.59,0.64,163.53c24.08-8.5,157.24-66.58,161.49-236.57 C510.08,231.99,506.75,207.3,482.55,207.28z"})});function c(e){return(0,r.jsx)("footer",{className:"border-t dark:border-gray-700",children:(0,r.jsx)("div",{className:"container mx-auto flex flex-row justify-center py-16 opacity-50 hover:opacity-100 transition duration-500",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"flex justify-center mb-3 text-blue-500",children:o})}),(0,r.jsx)("code",{className:" text-xs font-mono text-gray-500",children:'$ echo "simple things scale." '})]})})})}var u=n(1163),l=n(2010),h=n(9092),d=n(3750);function f(){var e=(0,l.F)().setTheme,t=(0,s.useState)("system"),n=(t[0],t[1]),i=[{name:"Dark",description:"Dark",href:"##",icon:d.pwr},{name:"Light",description:"Create your own targeted content",href:"##",icon:d.eSY},{name:"System",description:"Keep track of your growth",href:"##",icon:d.NbQ}];return(0,r.jsxs)(h.J,{className:"relative",children:[(0,r.jsxs)(h.J.Button,{className:" flex h-10 flex-row items-center py-2 focus:outline-none text-inherit",children:[(0,r.jsxs)("span",{className:"dark:hidden",children:[(0,r.jsx)(d.eSY,{className:"w-5 h-5"})," "]}),(0,r.jsx)("span",{className:"hidden dark:inline",children:(0,r.jsx)(d.pwr,{className:"w-5 h-5"})})]}),(0,r.jsx)(h.J.Panel,{className:"absolute w-46 left-1/2 -translate-x-1/2 z-10 mt-2 bg-white dark:bg-slate-700 dark:rounded-md",children:(0,r.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:(0,r.jsx)("div",{className:"flex flex-col space-y-2 py-2",children:i.map((function(t){return(0,r.jsxs)("button",{onClick:function(){var r;r=t.name,e(r.toLowerCase()),n(r)},className:" flex items-center font-medium px-6 py-2 space-x-4 duration-150 ease-in-out dark:hover:bg-slate-600 dark:hover:text-white hover:bg-slate-100 hover:text-blue-600 ",children:[(0,r.jsx)(t.icon,{"aria-hidden":"true"}),(0,r.jsx)("span",{className:"text-sm pr-3",children:t.name})]},t.name)}))})})})]})}var m=[{title:"\u535a\u5ba2",pathname:"/posts",route:"/posts/[...id]"},{title:"\u6807\u7b7e",pathname:"/tags"},{title:"\u7cfb\u5217",pathname:"/series"},{title:"\u5173\u4e8e",pathname:"/about"}];function x(e){var t=(0,u.useRouter)();return(0,r.jsx)("nav",{className:"sticky top-0 backdrop-blur bg-white/90 border-gray-200 border-b py-5 sm:px-4 dark:bg-gray-800 dark:border-gray-700 z-10",children:(0,r.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsxs)("div",{className:"flex justify-center text-[#0069ff] dark:text-white cursor-pointer",children:[o,(0,r.jsx)("span",{className:"text-xl h-8 ml-2 my-1.5 font-semibold",children:"Gauliang"})]})}),(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsxs)("ul",{className:"flex flex-row space-x-6",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"block py-2 pr-4 pl-3 font-semibold ".concat("/"===t.route?"text-blue-500":""),children:"\u9996\u9875"})})},"\u9996\u9875"),m.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:{pathname:e.pathname},children:(0,r.jsx)("a",{className:"block py-2 pr-4 pl-3 font-semibold ".concat(t.route.startsWith(e.pathname)?"text-blue-500":""),children:e.title})})},e.title)}))]}),(0,r.jsxs)("ul",{className:"flex flex-row space-x-6 border-l ml-6 pl-6",children:[(0,r.jsx)("li",{children:(0,r.jsx)(f,{})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/gauliang",target:"_blank",rel:"noreferrer",className:"block py-1 ",children:(0,r.jsx)("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"})})})})]})]})]})})}function p(e){var t=e.children;return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)("main",{className:"mx-auto container",children:t}),(0,r.jsx)(c,{})]})}}}]);