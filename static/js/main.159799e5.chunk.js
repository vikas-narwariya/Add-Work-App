(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),r=n.n(s),l=(n(24),n(11)),o=n(19),i=(n(25),n(8)),b=n(0);function d(e){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(b.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})})}d.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(e){var t=e.todo,n=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(b.jsx)("hr",{})]})},u=function(e){return Object(b.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"45px auto",fontFamily:"cursive",background:"lightgray"},children:[Object(b.jsx)("h3",{className:"my-3",children:"Day work"}),0===e.todos.length?"No Work to display all deleted":e.todos.map((function(t){return Object(b.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(){return Object(b.jsx)("footer",{className:"bg-dark text-light py-3",style:{position:"inherit",top:"70vh",width:"100%"},children:Object(b.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyAddWorkList.com"})})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),d=i[0],j=i[1];return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h3",{children:"Add Day Work"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&d?(t(s,d),r(""),j("")):alert("Title or description cannot be blank")},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Work Title"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Work Description"}),Object(b.jsx)("input",{type:"text",value:d,onChange:function(e){return j(e.target.value)},className:"form-control",id:"desc"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Work"})]})]})},O=function(){return Object(b.jsxs)("div",{children:["This is an about component",Object(b.jsx)("p",{children:"Hello everyone this is vikas narwariya making this programs"})]})},x=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am deleting up see you",e),j(r.filter((function(t){return t!==e}))),console.log("deleted",r),localStorage.setItem("todos",JSON.stringify(r))},n=function(e,t){console.log("I am adding this todo here",e,t);var n={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};j([].concat(Object(o.a)(r),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(l.a)(c,2),r=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{title:"My Todos List",searchBar:!0}),Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{addTodo:n}),Object(b.jsx)(u,{todos:r,onDelete:t})]})}}),Object(b.jsx)(x.a,{exact:!0,path:"/about",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(h,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.159799e5.chunk.js.map