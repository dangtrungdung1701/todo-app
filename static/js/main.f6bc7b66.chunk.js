(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(9),a=n.n(i),s=(n(19),n(20),n(6)),r=n(2),l="ADD_TODOS",u="DELETE_TODOS",d="CHECK_TODOS",j="UPDATE_TODOS",O=function(t){return{type:l,payload:t}},b=function(t){return{type:j,payload:t}},f=(n(25),n(1));var p=function(){var t=Object(c.useState)(!1),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),l=a[0],u=a[1],d=(Object(r.c)((function(t){return t})),Object(r.b)());return Object(f.jsxs)("div",{className:"header-container",children:[Object(f.jsx)("h1",{children:"Todos"}),Object(f.jsxs)("div",{className:"input-container",children:[Object(f.jsx)("input",{type:"text",onChange:function(t){u(t.target.value)},value:l,placeholder:"What do you wanna do ? my friend \ud83d\ude80",onKeyUp:function(t){"Enter"===t.key&&(l?(d(O({id:Date.now(),title:l,isDone:!1})),u("")):(o(!0),setTimeout((function(){o(!1)}),800)))}}),n?Object(f.jsx)("button",{className:"error-button",children:"\u26a0\ufe0f"}):Object(f.jsx)("button",{onClick:function(){l?(d(O({id:Date.now(),title:l,isDone:!1})),u("")):(o(!0),setTimeout((function(){o(!1)}),800))},className:"add-button",children:"\u2795"})]})]})},h=n(8);n(27);var v=function(t){var e=Object(c.useRef)(null),n=Object(c.useState)(t.todo.title),o=Object(s.a)(n,2),i=o[0],a=o[1];Object(c.useEffect)((function(){a(t.todo.title)}),[t.todo.title]);var l=Object(r.b)();return Object(f.jsxs)("div",{className:"todo-container",ref:e,children:[Object(f.jsx)("input",{className:"checkbox",type:"checkbox",checked:t.todo.isDone,onClick:function(){var e;l((e=t.todo.id,{type:d,payload:e}))}}),Object(f.jsx)("input",{className:"text",type:"text",value:i,onChange:function(t){t.preventDefault(),a(t.target.value)},onBlur:function(){i!==t.todo.title&&l(b(Object(h.a)(Object(h.a)({},t.todo),{},{title:i})))},onKeyUp:function(e){"Enter"===e.key&&i!==t.todo.title&&l(b(Object(h.a)(Object(h.a)({},t.todo),{},{title:i})))}}),Object(f.jsx)("button",{onClick:function(){e.current.classList.add("remove"),setTimeout((function(){var e;l((e=t.todo.id,{type:u,payload:e}))}),400)},children:"\ud83d\uddd1\ufe0f"})]})};n(28);var x=function(){var t=Object(r.c)((function(t){return t})),e=t.slice(0).reverse();return console.log(e),Object(f.jsx)("div",{className:"todo-list-container",children:t.length>0?Object(f.jsx)("ul",{children:t.slice(0).reverse().map((function(t){return Object(f.jsx)(v,{todo:t},t.id)}))}):Object(f.jsxs)("div",{className:"todo-list-empty-container",children:[Object(f.jsx)("h1",{className:"bell-icon",onClick:function(t){t.target.classList.add("ring"),console.log(t.target.classList),setTimeout((function(){t.target.classList.remove("ring"),console.log(t.target.classList)}),800)},children:"\ud83d\udece\ufe0f"}),Object(f.jsx)("h1",{children:"Todo list is empty"}),Object(f.jsx)("h2",{children:"Let's do something right now!!!"})]})})};var m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsx)(p,{}),Object(f.jsx)(x,{})]})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))},g=n(14),D=n(7),T=[],E=Object(g.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0,n=[];switch(e.type){case l:return(n=Object(D.a)(t)).push(e.payload),n;case u:return n=(n=Object(D.a)(t)).filter((function(t){return t.id!==e.payload}));case d:return(n=Object(D.a)(t)).map((function(t){t.id===e.payload?t.isDone=!t.isDone:t.isDone=t.isDone})),n;case j:var c=-1;return(n=Object(D.a)(t)).map((function(t,n){c=t.id===e.payload.id?n:c})),n[c]=e.payload,n}return t}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(r.a,{store:E,children:Object(f.jsx)(m,{})})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.f6bc7b66.chunk.js.map