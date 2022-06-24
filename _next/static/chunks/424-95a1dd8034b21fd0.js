(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:w,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+w(r,2,"0")+":"+w(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,l),i=n-s<0,a=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:a,m:i,s:s,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",$={};$[y]=p;var b=function(e){return e instanceof N},g=function e(t,n,r){var s;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();$[i]&&(s=i),n&&($[i]=n,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,s=o}return!r&&s&&(y=s),s||!r&&y},j=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new N(n)},M=v;M.l=g,M.i=b,M.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var N=function(){function p(e){this.$L=g(e.locale,null,!0),this.parse(e)}var w=p.prototype;return w.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},w.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},w.$utils=function(){return M},w.isValid=function(){return!(this.$d.toString()===f)},w.isSame=function(e,t){var n=j(e);return this.startOf(t)<=n&&n<=this.endOf(t)},w.isAfter=function(e,t){return j(e)<this.startOf(t)},w.isBefore=function(e,t){return this.endOf(t)<j(e)},w.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(e,t){var n=this,r=!!M.u(t)||t,u=M.p(e),f=function(e,t){var s=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?s:s.endOf(o)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},x=this.$W,p=this.$M,w=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,p):f(0,p+1);case c:var y=this.$locale().weekStart||0,$=(x<y?x+7:x)-y;return f(r?w-$:w+(6-$),p);case o:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},w.endOf=function(e){return this.startOf(e,!1)},w.$set=function(e,t){var n,c=M.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[s]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],m=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var x=this.clone().set(h,1);x.$d[f](m),x.init(),this.$d=x.set(h,Math.min(this.$D,x.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},w.set=function(e,t){return this.clone().$set(e,t)},w.get=function(e){return this[M.p(e)]()},w.add=function(r,u){var h,f=this;r=Number(r);var m=M.p(u),x=function(e){var t=j(f);return M.w(t.date(t.date()+Math.round(e*r)),f)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===o)return x(1);if(m===c)return x(7);var p=(h={},h[i]=t,h[a]=n,h[s]=e,h)[m]||1,w=this.$d.getTime()+r*p;return M.w(w,this)},w.subtract=function(e,t){return this.add(-1*e,t)},w.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),i=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=function(e,n,s,i){return e&&(e[n]||e(t,r))||s[n].slice(0,i)},d=function(e){return M.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:u(n.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:M.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return r.replace(x,(function(e,t){return t||m[e]||s.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(r,h,f){var m,x=M.p(h),p=j(r),w=(p.utcOffset()-this.utcOffset())*t,v=this-p,y=M.m(this,p);return y=(m={},m[d]=y/12,m[l]=y,m[u]=y/3,m[c]=(v-w)/6048e5,m[o]=(v-w)/864e5,m[a]=v/n,m[i]=v/t,m[s]=v/e,m)[x]||v,f?y:M.a(y)},w.daysInMonth=function(){return this.endOf(l).$D},w.$locale=function(){return $[this.$L]},w.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=g(e,t,!0);return r&&(n.$L=r),n},w.clone=function(){return M.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},p}(),k=N.prototype;return j.prototype=k,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),j.extend=function(e,t){return e.$i||(e(t,N,j),e.$i=!0),j},j.locale=g,j.isDayjs=b,j.unix=function(e){return j(1e3*e)},j.en=$[y],j.Ls=$,j.p={},j}()},1242:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893),s=n(7294),i=n(3750);function a(){var e=(0,s.useRef)(null),t=function(t){if(null!==e.current){var n=e.current;t?(n.style.opacity=1,n.style.pointerEvents="auto"):(n.style.opacity=0,n.style.pointerEvents="none")}},n=function(){if(null!==e.current){var t=e.current,n=t.offsetWidth,r=document.querySelector(".container").offsetWidth,s=(window.innerWidth-r)/2+r;t.style.left=window.innerWidth-n<s?window.innerWidth-n-30+"px":s+"px"}},a=function(){var e=document.documentElement.scrollTop;e>300?t(!0):e<=300&&t(!1)};return(0,s.useEffect)((function(){var e=null,t=null,r=function(){e&&clearTimeout(e),e=setTimeout(a,150)},s=function(){t&&clearTimeout(t),t=setTimeout(n,150)};return n(),a(),window.addEventListener("resize",s),window.addEventListener("scroll",r),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",r)}}),[]),(0,r.jsxs)("button",{ref:e,onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:"z-50 hidden md:flex scroll-to-top rounded-full whitespace-nowrap space-x-2 flex-row text-xs items-center uppercase py-2 px-5 text-white bg-blue-600 hover:bg-gray-800 transition",children:[(0,r.jsx)(i.a4S,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:"Scroll to top"})]})}},3228:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(5893),s=n(7294),i=n(1664),a=n.n(i),o=(0,r.jsx)("svg",{viewBox:"0 0 512 512",fill:"currentColor",children:(0,r.jsx)("path",{d:"M238.74,366.17c-24.56,0.42-12.59,0.42-36.76,0 C92.86,358.74,92.54,257.24,92.54,257.24s-3.78-104.91,109.44-110.42c105.79,0.4,195.22,0.23,242.54,0.08 c40.86-0.53,36.61-7.61,26.7-24.61C447.75,81.99,384.8,3.28,250.71,0C-60.02,17.45-88.35,433.93,194.97,504.76 c42.5,12.75,91.65,4.77,91.65,4.77s-0.23-52.54,0-94.13C286.82,378.65,274.71,365.55,238.74,366.17z M482.55,207.28 c-12,0.02-229.21,1.03-280.57,0.86c-48.75-0.16-48.73,49.23-48.73,49.23s0.19,47.49,48.73,47.5c-0.03,0,109.56-0.35,121.41,0 c11.91,0.35,24.03,12.59,23.94,25.04c-0.19,27.35,0.46,163.59,0.64,163.53c24.08-8.5,157.24-66.58,161.49-236.57 C510.08,231.99,506.75,207.3,482.55,207.28z"})});function c(e){return(0,r.jsx)("footer",{className:"border-t dark:border-gray-700",children:(0,r.jsx)("div",{className:"container mx-auto py-16 opacity-50 hover:opacity-100 transition duration-500",children:(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center space-x-5",children:[(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"flex justify-center text-blue-500 w-8 h-8",children:o})}),(0,r.jsx)("code",{className:" text-xs font-mono text-gray-500",children:'$ echo "simple things scale." '})]})})})}var l=n(1163),u=n(3750),d=n(2010),h=n(9092),f={theme:""};function m(){var e=function(){var e="system"===f.theme?window.matchMedia("(prefers-color-scheme:dark)").matches:"dark"===f.theme;t(e?"#1f2937":"white")},t=function(e){var t=document.querySelector('meta[name="theme-color"]');null===t||void 0===t||t.setAttribute("content",e)},n=(0,d.F)(),i=n.theme,a=n.setTheme;f.theme=i;var o=[{name:"Light",description:"Create your own targeted content",href:"##",icon:u.eSY},{name:"Dark",description:"Dark",href:"##",icon:u.pwr},{name:"System",description:"Keep track of your growth",href:"##",icon:u.NbQ}];return(0,s.useEffect)((function(){return e(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}),[]),(0,r.jsxs)(h.J,{className:"relative",children:[(0,r.jsxs)(h.J.Button,{className:" flex h-10 flex-row items-center py-2 focus:outline-none text-blue-500 dark:text-blue-500 md:dark:text-white md:text-inherit",children:[(0,r.jsxs)("span",{className:"dark:hidden",children:[(0,r.jsx)(u.eSY,{className:"w-5 h-5"})," "]}),(0,r.jsx)("span",{className:"hidden dark:inline",children:(0,r.jsx)(u.pwr,{className:"w-5 h-5"})})]}),(0,r.jsx)(h.J.Panel,{className:"absolute w-46 -right-3 z-10 mt-2 bg-white text-slate-800 dark:text-slate-300 dark:bg-slate-700 rounded-md dark:rounded-md",children:(0,r.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:(0,r.jsx)("div",{className:"flex flex-col space-y-2 py-2",children:o.map((function(n){return(0,r.jsxs)("button",{onClick:function(){var r;r=n.name,f.theme=r.toLowerCase(),"system"===f.theme?e():t("light"===f.theme?"white":"#1f2937"),a(f.theme)},className:" flex items-center font-medium px-6 py-2 space-x-4 duration-150 ease-in-out dark:hover:bg-slate-600 dark:hover:text-white hover:bg-slate-100 hover:text-blue-600 ",children:[(0,r.jsx)(n.icon,{"aria-hidden":"true"}),(0,r.jsx)("span",{className:"text-sm pr-3",children:n.name})]},n.name)}))})})})]})}var x=[{title:"\u535a\u5ba2",pathname:"/blogs",route:"/blogs/[...id]"},{title:"\u6807\u7b7e",pathname:"/tags"},{title:"\u7cfb\u5217",pathname:"/series"},{title:"\u5173\u4e8e",pathname:"/about"}];function p(e){var t=(0,l.useRouter)(),n=["/blogs/[...id]","/series/[...id]"].includes(t.pathname);return(0,r.jsx)("nav",{className:"md:sticky md:top-0 backdrop-blur md:bg-white/80 border-gray-200 md:border-b py-1 md:py-5 md:px-5 dark:bg-gray-800 dark:border-gray-700 z-10",children:(0,r.jsxs)("div",{className:"md:container md:mx-auto flex flex-wrap flex-col md:flex-row justify-between",children:[(0,r.jsxs)("div",{className:"".concat(n?"hidden md:flex":"flex"," px-5 md:px-0 flex-row justify-between text-[#0069ff] dark:text-white"),children:[(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsxs)("div",{className:"flex flex-row cursor-pointer",children:[(0,r.jsx)("div",{className:"w-6 h-6 my-2 md:w-8 md:h-8 md:my-1",children:o}),(0,r.jsx)("span",{className:"text-xl h-8 ml-2 my-1.5 font-semibold",children:"Gauliang"})]})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsx)(m,{})})]}),(0,r.jsxs)("div",{className:"".concat(n?"hidden md:flex":"flex"," items-start md:items-center flex-col md:flex-row mt-2 md:mt-0 mb-5 md:mb-0"),children:[(0,r.jsxs)("ul",{className:"flex flex-row justify-between ml-2 md:ml-0 space-x-0 md:space-x-6 ",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"block py-2 mx-3 font-semibold md:border-none ".concat("/"===t.route?"text-blue-500 border-b-2 border-blue-500":""),children:"\u9996\u9875"})})},"\u9996\u9875"),x.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:{pathname:e.pathname},children:(0,r.jsx)("a",{className:"block py-2 mx-3 font-semibold md:border-none ".concat(t.route.startsWith(e.pathname)?"text-blue-500 border-b-2 border-blue-500":""),children:e.title})})},e.title)}))]}),(0,r.jsxs)("ul",{className:"flex-row space-x-6 border-l dark:border-slate-600 ml-6 pl-6 hidden md:flex",children:[(0,r.jsx)("li",{children:(0,r.jsx)(m,{})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/gauliang",target:"_blank",rel:"noreferrer",className:"block py-1 ",children:(0,r.jsx)("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"})})})})]})]}),n&&(0,r.jsxs)("div",{className:"flex pl-2 pr-5 justify-between items-center md:hidden",children:[(0,r.jsx)(a(),{href:{pathname:"/"},children:(0,r.jsxs)("a",{className:"flex flex-row items-center justify-start space-x-2 text-blue-500 dark:text-blue-500 font-bold",children:[(0,r.jsx)(u.pjk,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:"\u9996\u9875"})]})}),(0,r.jsx)(m,{})]})]})})}function w(e){var t=e.children;return(0,s.useEffect)((function(){window.navigator.standalone&&document.body.classList.add("standalone")}),[]),(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)("main",{className:"mx-auto container",children:t}),(0,r.jsx)(c,{})]})}}}]);