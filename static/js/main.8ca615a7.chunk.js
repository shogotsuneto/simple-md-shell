(window["webpackJsonpsimple-md-shell"]=window["webpackJsonpsimple-md-shell"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),i=(n(36),n(2)),u=n(5),l=n.n(u),s=function(){return a.a.createElement("header",{className:l.a.header},"\u30a2\u30d7\u30ea\u3060\u3088")},f=function(e){var t=e.data,n=e.onClick;return a.a.createElement("div",{onClick:n},a.a.createElement("p",null,t.name))},h=function(e){var t=e.owner,n=e.repo,c=e.branch,o=e.setCurrent,u=Object(r.useState)([]),s=Object(i.a)(u,2),h=s[0],p=s[1];return Object(r.useEffect)(function(){fetch("https://api.github.com"+"/repos/".concat(t,"/").concat(n,"/contents?ref=").concat(c)).then(function(e){return e.json()}).then(function(e){return p(e)})},[t,n,c]),a.a.createElement("div",{className:l.a.tableOfContents},h.map(function(e){return a.a.createElement(f,{key:e.sha,data:e,onClick:function(){return o(e.path)}})}))},p=n(25),m=n(7),d=n.n(m),b=function(e){var t=e.depth,n=e.children;return a.a.createElement("section",{className:d.a["section".concat(t)]},n)},v=function(e){var t=e.depth,n=e.children;return a.a.createElement("h".concat(t),{className:d.a["heading".concat(t)]},n)};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var O={root:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,g(t))},section:function(e){var t=e.depth,n=e.children;return a.a.createElement(b,{depth:t},g(n))},heading:function(e){var t=e.depth,n=e.children;return a.a.createElement(v,{depth:t},g(n))},text:function(e){var t=e.value;return"".concat(t)},paragraph:function(e){var t=e.children;return a.a.createElement("p",null,g(t))},ruby:function(e){var t=e.base,n=e.text;return a.a.createElement("ruby",null,t,a.a.createElement("rt",null,n))},break:function(){return a.a.createElement("br",null)}},g=function(e){return e.map(function(e,t){return a.a.createElement(_,{key:"".concat(t),node:e})})},_=function(e){var t=e.node;return O[t.type]?a.a.createElement(O[t.type],function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)):null},j=_,w=n(26),y=n.n(w),C=n(27),k=n.n(C),x=n(28),P=n.n(x),S=n(29),D=n.n(S),N=n(30),W=n.n(N),A=y()().use(k.a).use(W.a).use(D.a).use(P.a).freeze(),B=function(e){var t=e.owner,n=e.repo,c=e.branch,o=e.filepath,u=Object(r.useState)(""),s=Object(i.a)(u,2),f=s[0],h=s[1],p=Object(r.useState)({}),m=Object(i.a)(p,2),d=m[0],b=m[1];return Object(r.useEffect)(function(){fetch("https://raw.githubusercontent.com/".concat(t,"/").concat(n,"/").concat(c,"/").concat(o)).then(function(e){return e.text()}).then(function(e){return h(e)})},[t,n,c,o]),Object(r.useEffect)(function(){A.run(A.parse(f)).then(function(e){b(e)})},[f]),a.a.createElement("div",{className:l.a.container},a.a.createElement(j,{node:d}))},J=(n(103),"shogotsuneto"),R="md-contents",z="master",F="README.md";var I=function(){var e=Object(r.useState)(F),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement(s,null),a.a.createElement(h,{owner:J,repo:R,branch:z,setCurrent:function(e){return c(e)}}),a.a.createElement(B,{owner:J,repo:R,branch:z,filepath:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,n){e.exports=n(104)},36:function(e,t,n){},5:function(e,t,n){e.exports={header:"Shell_header__1vajR",container:"Shell_container__lWg86"}},7:function(e,t,n){e.exports={heading1:"Contents_heading1__334m9",heading2:"Contents_heading2__1dxOo",heading3:"Contents_heading3__2X29Z",section1:"Contents_section1__3fcUK",section2:"Contents_section2__263vx",section3:"Contents_section3__yvlDa"}}},[[31,1,2]]]);
//# sourceMappingURL=main.8ca615a7.chunk.js.map