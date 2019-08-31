(window["webpackJsonpsimple-md-shell"]=window["webpackJsonpsimple-md-shell"]||[]).push([[0],{12:function(e,n,t){e.exports={header:"Shell_header__1vajR",tableOfContents:"Shell_tableOfContents__kmQbm",container:"Shell_container__lWg86"}},338:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(59),o=t.n(c),l=(t(77),t(68)),i=t(8),u=t(12),d=t.n(u),s=function(){return r.a.createElement("header",{className:d.a.header},"\u30a2\u30d7\u30ea\u3060\u3088")},h=t(16),m=function(e){var n=e.data,t=e.onClick;return r.a.createElement("div",{onClick:t},r.a.createElement("p",null,n.name))},f=function(e){var n=e.owner,t=e.repo,c=e.branch,o=e.setCurrent,l=Object(a.useState)([]),i=Object(h.a)(l,2),u=i[0],s=i[1];return Object(a.useEffect)(function(){fetch("https://api.github.com"+"/repos/".concat(n,"/").concat(t,"/contents?ref=").concat(c)).then(function(e){return e.json()}).then(function(e){return s(e)})},[n,t,c]),r.a.createElement("div",{className:d.a.tableOfContents},u.map(function(e){return r.a.createElement(m,{key:e.sha,data:e,onClick:function(){return o(e.path)}})}))},p=t(6),E=t.n(p),b=function(e){var n=e.depth,t=e.children;return r.a.createElement("section",{className:E.a["section".concat(n)]},t)},_=function(e){var n=e.depth,t=e.children;return r.a.createElement("h".concat(n),{className:E.a["heading".concat(n)]},t)},v=t(71),g={tableRow:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead,o=e.key;return r.a.createElement("tr",{key:o},n.map(function(e,n){return r.a.createElement(C,{node:e,align:t[n],isHead:c,renderChild:a,key:"".concat(n)})}))},tableCell:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead?"th":"td";return r.a.createElement(c,{className:E.a["table-cell-".concat(t)]},n.map(function(e,n){return r.a.createElement(C,{node:e,renderChild:a,key:"".concat(n)})}))}},C=function(e){var n=e.node,t=e.align,a=e.isHead,c=e.renderChild,o=n.type;return r.a.createElement(g[o]||c,{node:n,align:t,isHead:a,renderChild:c})},k=function(e){var n=e.node,t=e.renderChild,a=n.align,c=n.children,o=Object(v.a)(c),l=o[0],i=o.slice(1);return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(C,{node:l,isHead:!0,align:a,renderChild:t})),r.a.createElement("tbody",null,i.map(function(e,n){return r.a.createElement(C,{node:e,align:a,renderChild:t,key:"".concat(n)})})))},y=t(342),w=t(341),O=function(e){var n=e.language,t=e.codeString;return r.a.createElement("div",{className:E.a["codeblock-container"]},r.a.createElement(y.a,{language:n,style:w.a},t))},j={root:function(e){var n=e.node.children;return r.a.createElement(r.a.Fragment,null,S(n))},section:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(b,{depth:t},S(a))},heading:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(_,{depth:t},S(a))},text:function(e){var n=e.node.value;return"".concat(n)},paragraph:function(e){var n=e.node.children;return r.a.createElement("p",null,S(n))},ruby:function(e){var n=e.node,t=n.base,a=n.text;return r.a.createElement("ruby",null,t,r.a.createElement("rt",null,a))},break:function(){return r.a.createElement("br",null)},table:function(e){var n=e.node;return r.a.createElement(k,{node:n,renderChild:function(e){var n=e.node;return r.a.createElement(x,{node:n})}})},code:function(e){var n=e.node,t=n.value,a=n.lang;return r.a.createElement(O,{language:a,codeString:t})},inlineCode:function(e){var n=e.node.value;return r.a.createElement("code",{className:E.a["inline-code"]},n)}},S=function(e){return e.map(function(e,n){return r.a.createElement(x,{key:"".concat(n),node:e})})},x=function(e){var n=e.node;return j[n.type]||console.log(n),j[n.type]?r.a.createElement(j[n.type],{node:n}):null},N=x,H=t(63),R=t.n(H),U=t(64),W=t.n(U),Z=t(65),z=t.n(Z),A=t(66),B=t.n(A),D=t(67),F=t.n(D),J=R()().use(W.a).use(F.a).use(B.a).use(z.a).freeze(),K=function(e){var n=e.owner,t=e.repo,c=e.branch,o=e.filepath,l=Object(a.useState)(""),i=Object(h.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)({}),f=Object(h.a)(m,2),p=f[0],E=f[1];return Object(a.useEffect)(function(){fetch("https://raw.githubusercontent.com/".concat(n,"/").concat(t,"/").concat(c,"/").concat(o)).then(function(e){return e.text()}).then(function(e){return s(e)})},[n,t,c,o]),Object(a.useEffect)(function(){J.run(J.parse(u)).then(function(e){E(e)})},[u]),r.a.createElement("div",{className:d.a.container},r.a.createElement(N,{node:p}))},I="shogotsuneto",M="md-contents",Q="master",V="README.md";var X=function(){return r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement(i.a,{path:"/",render:function(e){var n=e.history;return r.a.createElement(f,{owner:I,repo:M,branch:Q,setCurrent:function(e){return n.push(e)}})}}),r.a.createElement(i.a,{path:"/:filepath",children:function(e){var n=e.match;return r.a.createElement(K,{owner:I,repo:M,branch:Q,filepath:n?n.params.filepath:V})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){e.exports={heading1:"Contents_heading1__334m9",heading2:"Contents_heading2__1dxOo",heading3:"Contents_heading3__2X29Z",section1:"Contents_section1__3fcUK",section2:"Contents_section2__263vx",section3:"Contents_section3__yvlDa","table-cell-left":"Contents_table-cell-left__2FA6S","table-cell-center":"Contents_table-cell-center__3eo-Z","table-cell-right":"Contents_table-cell-right__2UZzi","codeblock-container":"Contents_codeblock-container__1VoiU","inline-code":"Contents_inline-code__RaK1C"}},72:function(e,n,t){e.exports=t(338)},77:function(e,n,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.ce7fa791.chunk.js.map