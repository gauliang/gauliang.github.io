(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{8468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return n(5978)}])},1242:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(5893),s=n(7294),a=n(3750);function l(){var e=(0,s.useRef)(null),t=function(t){if(null!==e.current){var n=e.current;t?(n.style.opacity=1,n.style.pointerEvents="auto"):(n.style.opacity=0,n.style.pointerEvents="none")}},n=function(){if(null!==e.current){var t=e.current,n=t.offsetWidth,r=document.querySelector(".container").offsetWidth,s=(window.innerWidth-r)/2+r;t.style.left=window.innerWidth-n<s?window.innerWidth-n-30+"px":s+"px"}},l=function(){var e=document.documentElement.scrollTop;e>300?t(!0):e<=300&&t(!1)};return(0,s.useEffect)((function(){var e=null,t=null,r=function(){e&&clearTimeout(e),e=setTimeout(l,150)},s=function(){t&&clearTimeout(t),t=setTimeout(n,150)};return n(),l(),window.addEventListener("resize",s),window.addEventListener("scroll",r),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",r)}}),[]),(0,r.jsxs)("button",{ref:e,onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},className:"z-50 hidden md:flex scroll-to-top rounded-full whitespace-nowrap space-x-2 flex-row text-xs items-center uppercase py-2 px-5 text-white bg-blue-600 hover:bg-gray-800 transition",children:[(0,r.jsx)(a.a4S,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:"Scroll to top"})]})}},2742:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});var r=n(5893);function s(e){var t=e.title,n=e.abstract,s=e.tag,a=e.center;return(0,r.jsxs)("div",{className:" mx-0 md:mx-20 py-8 md:py-16 space-y-2 md:space-y-5 md:border-b border-gray-200 dark:border-gray-700 bg-slate-100 dark:bg-slate-900/50 md:px-0 px-5 md:bg-transparent md:dark:bg-transparent ",children:[(0,r.jsxs)("h1",{className:"flex text-3xl items-start ".concat(a&&"justify-center","  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"),children:[t,s&&(0,r.jsx)("span",{className:"px-2 mt-1 rounded-tl-md rounded-br-md rounded-tr-md tracking-wider bg-slate-600 text-white ml-2 text-xs font-light",children:s})]}),(0,r.jsx)("p",{className:"text-md font-light leading-7 text-gray-500 dark:text-gray-400",children:n})]})}},3228:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),s=n(7294),a=n(1664),l=n.n(a),i=(0,r.jsx)("svg",{viewBox:"0 0 512 512",fill:"currentColor",children:(0,r.jsx)("path",{d:"M238.74,366.17c-24.56,0.42-12.59,0.42-36.76,0 C92.86,358.74,92.54,257.24,92.54,257.24s-3.78-104.91,109.44-110.42c105.79,0.4,195.22,0.23,242.54,0.08 c40.86-0.53,36.61-7.61,26.7-24.61C447.75,81.99,384.8,3.28,250.71,0C-60.02,17.45-88.35,433.93,194.97,504.76 c42.5,12.75,91.65,4.77,91.65,4.77s-0.23-52.54,0-94.13C286.82,378.65,274.71,365.55,238.74,366.17z M482.55,207.28 c-12,0.02-229.21,1.03-280.57,0.86c-48.75-0.16-48.73,49.23-48.73,49.23s0.19,47.49,48.73,47.5c-0.03,0,109.56-0.35,121.41,0 c11.91,0.35,24.03,12.59,23.94,25.04c-0.19,27.35,0.46,163.59,0.64,163.53c24.08-8.5,157.24-66.58,161.49-236.57 C510.08,231.99,506.75,207.3,482.55,207.28z"})});function c(e){return(0,r.jsx)("footer",{className:"border-t dark:border-gray-700",children:(0,r.jsx)("div",{className:"container mx-auto pt-12 pb-20 opacity-50 hover:opacity-100 transition duration-500",children:(0,r.jsxs)("div",{className:"flex flex-row justify-center items-center space-x-5",children:[(0,r.jsx)(l(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"flex justify-center text-blue-500 w-8 h-8",children:i})}),(0,r.jsx)("code",{className:" text-xs font-mono text-gray-500",children:'$ echo "simple things scale." '})]})})})}var d=n(1163),o=n(3750),m=n(2010),x=n(9092),h={theme:""};function u(){var e=function(){var e="system"===h.theme?window.matchMedia("(prefers-color-scheme:dark)").matches:"dark"===h.theme;t(e?"#1f2937":"white")},t=function(e){var t=document.querySelector('meta[name="theme-color"]');null===t||void 0===t||t.setAttribute("content",e)},n=(0,m.F)(),a=n.theme,l=n.setTheme;h.theme=a;var i=[{name:"Light",description:"Create your own targeted content",href:"##",icon:o.eSY},{name:"Dark",description:"Dark",href:"##",icon:o.pwr},{name:"System",description:"Keep track of your growth",href:"##",icon:o.NbQ}];return(0,s.useEffect)((function(){return e(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}),[]),(0,r.jsxs)(x.J,{className:"relative",children:[(0,r.jsxs)(x.J.Button,{className:" flex h-10 flex-row items-center py-2 focus:outline-none text-blue-500 dark:text-blue-500 md:dark:text-white md:text-inherit",children:[(0,r.jsxs)("span",{className:"dark:hidden",children:[(0,r.jsx)(o.eSY,{className:"w-5 h-5"})," "]}),(0,r.jsx)("span",{className:"hidden dark:inline",children:(0,r.jsx)(o.pwr,{className:"w-5 h-5"})})]}),(0,r.jsx)(x.J.Panel,{className:"absolute w-46 -right-3 z-10 mt-2 bg-white text-slate-800 dark:text-slate-300 dark:bg-slate-700 rounded-md dark:rounded-md",children:(0,r.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:(0,r.jsx)("div",{className:"flex flex-col space-y-2 py-2",children:i.map((function(n){return(0,r.jsxs)("button",{onClick:function(){var r;r=n.name,h.theme=r.toLowerCase(),"system"===h.theme?e():t("light"===h.theme?"white":"#1f2937"),l(h.theme)},className:" flex items-center font-medium px-6 py-2 space-x-4 duration-150 ease-in-out dark:hover:bg-slate-600 dark:hover:text-white hover:bg-slate-100 hover:text-blue-600 ",children:[(0,r.jsx)(n.icon,{"aria-hidden":"true"}),(0,r.jsx)("span",{className:"text-sm pr-3",children:n.name})]},n.name)}))})})})]})}var f=[{title:"\u535a\u5ba2",pathname:"/blogs",route:"/blogs/[...id]"},{title:"\u6807\u7b7e",pathname:"/tags"},{title:"\u7cfb\u5217",pathname:"/series"},{title:"\u5173\u4e8e",pathname:"/about"}];function p(e){var t=(0,d.useRouter)(),n=["/blogs/[...id]","/series/[...id]"].includes(t.pathname);return(0,r.jsx)("nav",{className:"md:sticky md:top-0 backdrop-blur md:bg-white/80 border-gray-200 md:border-b py-1 md:py-5 md:px-5 dark:bg-gray-800 dark:border-gray-700 z-10",children:(0,r.jsxs)("div",{className:"md:container md:mx-auto flex flex-wrap flex-col md:flex-row justify-between",children:[(0,r.jsxs)("div",{className:"".concat(n?"hidden md:flex":"flex"," px-5 md:px-0 flex-row justify-between text-[#0069ff] dark:text-white"),children:[(0,r.jsx)(l(),{href:{pathname:"/"},children:(0,r.jsxs)("div",{className:"flex flex-row cursor-pointer",children:[(0,r.jsx)("div",{className:"w-6 h-6 my-2 md:w-8 md:h-8 md:my-1",children:i}),(0,r.jsx)("span",{className:"text-xl h-8 ml-2 my-1.5 font-semibold",children:"Gauliang"})]})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsx)(u,{})})]}),(0,r.jsxs)("div",{className:"".concat(n?"hidden md:flex":"flex"," items-start md:items-center flex-col md:flex-row mt-2 md:mt-0 mb-5 md:mb-0"),children:[(0,r.jsxs)("ul",{className:"flex flex-row justify-between ml-2 md:ml-0 space-x-0 md:space-x-6 ",children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:{pathname:"/"},children:(0,r.jsx)("a",{className:"block py-2 mx-3 font-semibold md:border-none ".concat("/"===t.route?"text-blue-500 border-b-2 border-blue-500":""),children:"\u9996\u9875"})})},"\u9996\u9875"),f.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:{pathname:e.pathname},children:(0,r.jsx)("a",{className:"block py-2 mx-3 font-semibold md:border-none ".concat(t.route.startsWith(e.pathname)?"text-blue-500 border-b-2 border-blue-500":""),children:e.title})})},e.title)}))]}),(0,r.jsxs)("ul",{className:"flex-row space-x-6 border-l dark:border-slate-600 ml-6 pl-6 hidden md:flex",children:[(0,r.jsx)("li",{children:(0,r.jsx)(u,{})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/gauliang",target:"_blank",rel:"noreferrer",className:"block py-1 ",children:(0,r.jsx)("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"})})})})]})]}),n&&(0,r.jsxs)("div",{className:"flex pl-2 pr-5 justify-between items-center md:hidden",children:[(0,r.jsx)(l(),{href:{pathname:"/"},children:(0,r.jsxs)("a",{className:"flex flex-row items-center justify-start space-x-2 text-blue-500 dark:text-blue-500 font-bold",children:[(0,r.jsx)(o.pjk,{className:"w-5 h-5"}),(0,r.jsx)("span",{children:"\u9996\u9875"})]})}),(0,r.jsx)(u,{})]})]})})}function b(e){var t=e.children;return(0,s.useEffect)((function(){window.navigator.standalone&&document.body.classList.add("standalone")}),[]),(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)("main",{className:"mx-auto container",children:t}),(0,r.jsx)(c,{})]})}},5978:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m}});var r=n(5893),s=n(9008),a=n.n(s),l=n(3228),i=n(1242),c=n(2742),d=n(1551),o=n.n(d),m=!0;t.default=function(e){var t=e.tags,n=e.tagsByFirstLetter.map((function(e){return(0,r.jsxs)("div",{className:"pb-8 md:pb-16",children:[(0,r.jsx)("h3",{className:"text-2xl md:text-4xl text-blue-500",children:e.title}),(0,r.jsx)("div",{className:"mt-2",children:e.tags.map((function(e){return(0,r.jsx)(o(),{href:{pathname:"/tags/".concat(e.name)},children:(0,r.jsxs)("a",{className:"block md:mt-3",children:[e.title,(0,r.jsx)("span",{className:"opacity-50 text-sm ml-2 align-top",children:e.count})]})},e.name)}))})]},e.title)}));return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Tags - Gauliang"})}),(0,r.jsx)(c.y,{title:"\u6807\u7b7e",abstract:"\u6d77\u7eb3\u767e\u5ddd\uff0c\u6709\u5bb9\u4e43\u5927\uff1b\u58c1\u7acb\u5343\u4ede\uff0c\u65e0\u6b32\u5219\u521a\u3002",tag:"".concat(t.length," \u4e2a")}),(0,r.jsx)("main",{className:"mx-5 md:mx-20 pb-20",children:(0,r.jsx)("div",{className:"columns-2 md:columns-5 gap-2 md:gap-16 pt-12 ",children:n})}),(0,r.jsx)(i.z,{})]})}}},function(e){e.O(0,[13,167,774,888,179],(function(){return t=8468,e(e.s=t);var t}));var t=e.O();_N_E=t}]);