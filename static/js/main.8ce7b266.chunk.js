(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(9),a=n.n(i),r=(n(19),n(20),n(6)),s=n(2),u="ADD_TODOS",d="DELETE_TODOS",l="CHECK_TODOS",j="UPDATE_TODOS",b=function(t){return{type:j,payload:t}},O=(n(25),n(1));var h=function(){var t=Object(c.useState)(!1),e=Object(r.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),d=a[0],l=a[1],j=Object(s.c)((function(t){return t})),b=Object(s.b)();return Object(O.jsxs)("div",{className:"header-container",children:[Object(O.jsx)("h1",{children:"Todos"}),Object(O.jsxs)("div",{className:"input-container",children:[Object(O.jsx)("input",{type:"text",onChange:function(t){l(t.target.value)},value:d,placeholder:"What do you wanna do ? my friend \ud83d\ude80"}),n?Object(O.jsx)("button",{className:"error-button",children:"\u26a0\ufe0f"}):Object(O.jsx)("button",{onClick:function(){d?(b(function(t){return{type:u,payload:t}}({id:j.length+1,title:d,isDone:!1})),l("")):(o(!0),setTimeout((function(){o(!1)}),800))},className:"add-button",children:"\u2795"})]})]})},f=n(8);n(27);var p=function(t){var e=Object(c.useState)(t.todo.title),n=Object(r.a)(e,2),o=n[0],i=n[1];Object(c.useEffect)((function(){i(t.todo.title)}),[t.todo.title]);var a=Object(s.b)();return Object(O.jsxs)("div",{className:"todo-container",children:[Object(O.jsx)("input",{className:"checkbox",type:"checkbox",checked:t.todo.isDone,onClick:function(){var e;a((e=t.todo.id,{type:l,payload:e}))}}),Object(O.jsx)("input",{className:"text",type:"text",value:o,onChange:function(t){t.preventDefault(),i(t.target.value)},onBlur:function(){o!==t.todo.title&&a(b(Object(f.a)(Object(f.a)({},t.todo),{},{title:o})))},onKeyUp:function(e){"Enter"===e.key&&o!==t.todo.title&&a(b(Object(f.a)(Object(f.a)({},t.todo),{},{title:o})))}}),Object(O.jsx)("button",{onClick:function(){var e;a((e=t.todo.id,{type:d,payload:e}))},children:"\ud83d\uddd1\ufe0f"})]})};n(28);var v=function(){var t=Object(s.c)((function(t){return t})),e=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.current.scrollIntoView({block:"end",behavior:"smooth"})})),Object(O.jsx)("div",{className:"todo-list-container",ref:e,children:t.length>0?Object(O.jsx)("ul",{children:t.map((function(t){return Object(O.jsx)(p,{todo:t},t.id)}))}):Object(O.jsxs)("div",{className:"todo-list-empty-container",children:[Object(O.jsx)("h1",{className:"bell-icon",children:"\ud83d\udece\ufe0f"}),Object(O.jsx)("h1",{children:"Todo list is empty"}),Object(O.jsx)("h2",{children:"Let's do something right now!!!"})]})})};var x=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h,{}),Object(O.jsx)(v,{})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))},m=n(14),D=n(7),E=[],g=Object(m.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0,n=[];switch(e.type){case u:return(n=Object(D.a)(t)).push(e.payload),n;case d:return n=(n=Object(D.a)(t)).filter((function(t){return t.id!==e.payload}));case l:return(n=Object(D.a)(t)).map((function(t){t.id===e.payload?t.isDone=!t.isDone:t.isDone=t.isDone})),n;case j:var c=-1;return(n=Object(D.a)(t)).map((function(t,n){c=t.id===e.payload.id?n:c})),n[c]=e.payload,n}return t}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(s.a,{store:g,children:Object(O.jsx)(x,{})})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.8ce7b266.chunk.js.map