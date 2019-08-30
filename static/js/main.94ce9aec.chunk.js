(window["webpackJsonpsimple-md-shell"]=window["webpackJsonpsimple-md-shell"]||[]).push([[0],{3:function(e,n,t){e.exports={heading1:"Contents_heading1__334m9",heading2:"Contents_heading2__1dxOo",heading3:"Contents_heading3__2X29Z",section1:"Contents_section1__3fcUK",section2:"Contents_section2__263vx",section3:"Contents_section3__yvlDa","table-cell-left":"Contents_table-cell-left__2FA6S","table-cell-center":"Contents_table-cell-center__3eo-Z","table-cell-right":"Contents_table-cell-right__2UZzi","codeblock-container":"Contents_codeblock-container__1VoiU"}},320:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(48),o=t.n(c),l=(t(63),t(5)),i=t(8),u=t.n(i),d=function(){return r.a.createElement("header",{className:u.a.header},"\u30a2\u30d7\u30ea\u3060\u3088")},s=function(e){var n=e.data,t=e.onClick;return r.a.createElement("div",{onClick:t},r.a.createElement("p",null,n.name))},h=function(e){var n=e.owner,t=e.repo,c=e.branch,o=e.setCurrent,i=Object(a.useState)([]),d=Object(l.a)(i,2),h=d[0],m=d[1];return Object(a.useEffect)(function(){fetch("https://api.github.com"+"/repos/".concat(n,"/").concat(t,"/contents?ref=").concat(c)).then(function(e){return e.json()}).then(function(e){return m(e)})},[n,t,c]),r.a.createElement("div",{className:u.a.tableOfContents},h.map(function(e){return r.a.createElement(s,{key:e.sha,data:e,onClick:function(){return o(e.path)}})}))},m=t(3),f=t.n(m),b=function(e){var n=e.depth,t=e.children;return r.a.createElement("section",{className:f.a["section".concat(n)]},t)},E=function(e){var n=e.depth,t=e.children;return r.a.createElement("h".concat(n),{className:f.a["heading".concat(n)]},t)},p=t(57),_={tableRow:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead,o=e.key;return r.a.createElement("tr",{key:o},n.map(function(e,n){return r.a.createElement(g,{node:e,align:t[n],isHead:c,renderChild:a,key:"".concat(n)})}))},tableCell:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead?"th":"td";return r.a.createElement(c,{className:f.a["table-cell-".concat(t)]},n.map(function(e,n){return r.a.createElement(g,{node:e,renderChild:a,key:"".concat(n)})}))}},g=function(e){var n=e.node,t=e.align,a=e.isHead,c=e.renderChild,o=n.type;return r.a.createElement(_[o]||c,{node:n,align:t,isHead:a,renderChild:c})},v=function(e){var n=e.node,t=e.renderChild,a=n.align,c=n.children,o=Object(p.a)(c),l=o[0],i=o.slice(1);return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(g,{node:l,isHead:!0,align:a,renderChild:t})),r.a.createElement("tbody",null,i.map(function(e,n){return r.a.createElement(g,{node:e,align:a,renderChild:t,key:"".concat(n)})})))},C=t(324),k=t(323),w=function(e){var n=e.language,t=e.codeString;return r.a.createElement("div",{className:f.a["codeblock-container"]},r.a.createElement(C.a,{language:n,style:k.a},t))},y={root:function(e){var n=e.node.children;return r.a.createElement(r.a.Fragment,null,O(n))},section:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(b,{depth:t},O(a))},heading:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(E,{depth:t},O(a))},text:function(e){var n=e.node.value;return"".concat(n)},paragraph:function(e){var n=e.node.children;return r.a.createElement("p",null,O(n))},ruby:function(e){var n=e.node,t=n.base,a=n.text;return r.a.createElement("ruby",null,t,r.a.createElement("rt",null,a))},break:function(){return r.a.createElement("br",null)},table:function(e){var n=e.node;return r.a.createElement(v,{node:n,renderChild:function(e){var n=e.node;return r.a.createElement(j,{node:n})}})},code:function(e){var n=e.node,t=n.value,a=n.lang;return r.a.createElement(w,{language:a,codeString:t})}},O=function(e){return e.map(function(e,n){return r.a.createElement(j,{key:"".concat(n),node:e})})},j=function(e){var n=e.node;return y[n.type]?r.a.createElement(y[n.type],{node:n}):null},S=j,x=t(52),N=t.n(x),H=t(53),A=t.n(H),R=t(54),U=t.n(R),W=t(55),Z=t.n(W),z=t(56),B=t.n(z),D=N()().use(A.a).use(B.a).use(Z.a).use(U.a).freeze(),F=function(e){var n=e.owner,t=e.repo,c=e.branch,o=e.filepath,i=Object(a.useState)(""),d=Object(l.a)(i,2),s=d[0],h=d[1],m=Object(a.useState)({}),f=Object(l.a)(m,2),b=f[0],E=f[1];return Object(a.useEffect)(function(){fetch("https://raw.githubusercontent.com/".concat(n,"/").concat(t,"/").concat(c,"/").concat(o)).then(function(e){return e.text()}).then(function(e){return h(e)})},[n,t,c,o]),Object(a.useEffect)(function(){D.run(D.parse(s)).then(function(e){E(e)})},[s]),r.a.createElement("div",{className:u.a.container},r.a.createElement(S,{node:b}))},J="shogotsuneto",I="md-contents",K="master",M="README.md";var Q=function(){var e=Object(a.useState)(M),n=Object(l.a)(e,2),t=n[0],c=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(h,{owner:J,repo:I,branch:K,setCurrent:function(e){return c(e)}}),r.a.createElement(F,{owner:J,repo:I,branch:K,filepath:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,n,t){e.exports=t(320)},63:function(e,n,t){},8:function(e,n,t){e.exports={header:"Shell_header__1vajR",tableOfContents:"Shell_tableOfContents__kmQbm",container:"Shell_container__lWg86"}}},[[58,1,2]]]);
//# sourceMappingURL=main.94ce9aec.chunk.js.map