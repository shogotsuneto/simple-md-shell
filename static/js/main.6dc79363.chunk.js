(window["webpackJsonpsimple-md-shell"]=window["webpackJsonpsimple-md-shell"]||[]).push([[0],{13:function(e,n,t){e.exports={header:"Shell_header__1vajR",tableOfContents:"Shell_tableOfContents__kmQbm",container:"Shell_container__lWg86"}},354:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(20),o=t.n(c),l=(t(83),t(74)),i=t(9),u=t(13),d=t.n(u),s=function(){return r.a.createElement("header",{className:d.a.header},"\u30a2\u30d7\u30ea\u3060\u3088")},h=t(15),m="README.md",f="shogotsuneto",E="md-contents",p="master",_="https://api.github.com",b="https://raw.githubusercontent.com",g=function(e){var n=e.data,t=e.onClick;return r.a.createElement("div",{onClick:t},r.a.createElement("p",null,n.name))},v=function(e){var n=e.setCurrent,t=Object(a.useState)([]),c=Object(h.a)(t,2),o=c[0],l=c[1];return Object(a.useEffect)(function(){fetch("".concat(_,"/repos/").concat(f,"/").concat(E,"/contents?ref=").concat(p)).then(function(e){return e.json()}).then(function(e){return l(e)})},[]),r.a.createElement("div",{className:d.a.tableOfContents},o.map(function(e){return r.a.createElement(g,{key:e.sha,data:e,onClick:function(){return n(e.path)}})}))},C=t(65),y=t.n(C),k=t(7),O=t.n(k),j=function(e){var n=e.depth,t=e.children;return r.a.createElement("section",{className:O.a["section".concat(n)]},t)},w=function(e){var n=e.depth,t=e.children;return r.a.createElement("h".concat(n),{className:O.a["heading".concat(n)]},t)},S=t(77),x={tableRow:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead,o=e.key;return r.a.createElement("tr",{key:o},n.map(function(e,n){return r.a.createElement(N,{node:e,align:t[n],isHead:c,renderChild:a,key:"".concat(n)})}))},tableCell:function(e){var n=e.node.children,t=e.align,a=e.renderChild,c=e.isHead?"th":"td";return r.a.createElement(c,{className:O.a["table-cell-".concat(t)]},n.map(function(e,n){return r.a.createElement(N,{node:e,renderChild:a,key:"".concat(n)})}))}},N=function(e){var n=e.node,t=e.align,a=e.isHead,c=e.renderChild,o=n.type;return r.a.createElement(x[o]||c,{node:n,align:t,isHead:a,renderChild:c})},H=function(e){var n=e.node,t=e.renderChild,a=n.align,c=n.children,o=Object(S.a)(c),l=o[0],i=o.slice(1);return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(N,{node:l,isHead:!0,align:a,renderChild:t})),r.a.createElement("tbody",null,i.map(function(e,n){return r.a.createElement(N,{node:e,align:a,renderChild:t,key:"".concat(n)})})))},R=t(358),U=t(357),W=function(e){var n=e.language,t=e.codeString;return r.a.createElement("div",{className:O.a["codeblock-container"]},r.a.createElement(R.a,{language:n,style:U.a},t))},Z={root:function(e){var n=e.node.children;return r.a.createElement(r.a.Fragment,null,z(n))},section:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(j,{depth:t},z(a))},heading:function(e){var n=e.node,t=n.depth,a=n.children;return r.a.createElement(w,{depth:t},z(a))},text:function(e){var n=e.node.value;return"".concat(n)},paragraph:function(e){var n=e.node.children;return r.a.createElement("p",null,z(n))},ruby:function(e){var n=e.node,t=n.base,a=n.text;return r.a.createElement("ruby",null,t,r.a.createElement("rt",null,a))},break:function(){return r.a.createElement("br",null)},table:function(e){var n=e.node;return r.a.createElement(H,{node:n,renderChild:function(e){var n=e.node;return r.a.createElement(A,{node:n})}})},code:function(e){var n=e.node,t=n.value,a=n.lang;return r.a.createElement(W,{language:a,codeString:t})},inlineCode:function(e){var n=e.node.value;return r.a.createElement("code",{className:O.a["inline-code"]},n)}},z=function(e){return e.map(function(e,n){return r.a.createElement(A,{key:"".concat(n),node:e})})},A=function(e){var n=e.node;return Z[n.type]||console.log(n),Z[n.type]?r.a.createElement(Z[n.type],{node:n}):null},B=A,D=t(69),F=t.n(D),J=t(70),K=t.n(J),I=t(71),L=t.n(I),M=t(72),Q=t.n(M),V=t(73),X=t.n(V),$=F()().use(K.a).use(X.a).use(Q.a).use(L.a).freeze(),q=function(e){var n=e.filepath,t=Object(a.useState)(""),c=Object(h.a)(t,2),o=c[0],l=c[1],i=Object(a.useState)({}),u=Object(h.a)(i,2),s=u[0],m=u[1],_=Object(a.useState)(!1),g=Object(h.a)(_,2),v=g[0],C=g[1];return Object(a.useEffect)(function(){C(!0),function(e){return fetch("".concat(b,"/").concat(f,"/").concat(E,"/").concat(p,"/").concat(e)).then(function(e){return e.text()})}(n).then(function(e){return l(e)})},[n]),Object(a.useEffect)(function(){$.run($.parse(o)).then(function(e){m(e),C(!1)})},[o]),r.a.createElement(y.a,{className:d.a.container,active:v,fadeSpeed:300,spinner:!0,text:"Loading your content...",styles:{content:{margin:"200pt auto"}}},r.a.createElement(B,{node:s}))},G=m;var P=function(){return r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement(i.a,{path:"/",render:function(e){var n=e.history;return r.a.createElement(v,{setCurrent:function(e){return n.push(e)}})}}),r.a.createElement(i.a,{path:"/:filepath",children:function(e){var n=e.match;return r.a.createElement(q,{filepath:n?n.params.filepath:G})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n,t){e.exports={heading1:"Contents_heading1__334m9",heading2:"Contents_heading2__1dxOo",heading3:"Contents_heading3__2X29Z",section1:"Contents_section1__3fcUK",section2:"Contents_section2__263vx",section3:"Contents_section3__yvlDa","table-cell-left":"Contents_table-cell-left__2FA6S","table-cell-center":"Contents_table-cell-center__3eo-Z","table-cell-right":"Contents_table-cell-right__2UZzi","codeblock-container":"Contents_codeblock-container__1VoiU","inline-code":"Contents_inline-code__RaK1C"}},78:function(e,n,t){e.exports=t(354)},83:function(e,n,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.6dc79363.chunk.js.map