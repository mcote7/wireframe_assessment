(this.webpackJsonphatchways=this.webpackJsonphatchways||[]).push([[0],{20:function(e,t,a){e.exports=a(54)},25:function(e,t,a){},26:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),l=(a(25),a(26),a(2)),s=a(15),i=a.n(s),u=a(19),m=a(16),d=a.n(m),p=function(e){var t=e.result,a=e.inputId,r=e.tagSearchQuery,o=Object(n.useState)("fa fa-plus"),s=Object(l.a)(o,2),i=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],g=f[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),v=b[0],y=b[1],N=Object(n.useState)(!1),j=Object(l.a)(N,2),O=j[0],w=j[1],S=Object(n.useState)(!1),C=Object(l.a)(S,2),L=C[0],k=C[1];Object(n.useEffect)((function(){r&&v.toString().toLocaleLowerCase().includes(r.toString().toLowerCase())&&(w(!0),k(!0)),r&&!v.toString().toLocaleLowerCase().includes(r.toString().toLowerCase())&&(w(!0),k(!1)),r||(w(!1),k(!1))}),[r,v]);return O&&!L?null:O&&L||!O&&!L?c.a.createElement("div",{className:"studentContainer"},c.a.createElement("div",{className:"imageContainer pt-3"},c.a.createElement("img",{src:t.pic,alt:"img",className:"rounded-circle studentImage"})),c.a.createElement("div",{className:"col mainCol"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(t.firstName.toUpperCase()," ").concat(t.lastName.toUpperCase())),c.a.createElement("button",{id:"expand-btn",className:"myButton",onClick:function(){m("fa fa-plus"===i?"fa fa-minus":"fa fa-plus"),g(!E)}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"".concat(i," fa-2x"),"aria-hidden":"true"})))),c.a.createElement("div",{className:"details"},c.a.createElement("p",null,"Email: ".concat(t.email)),c.a.createElement("p",null,"Company: ".concat(t.company)),c.a.createElement("p",null,"Skill: ".concat(t.skill)),c.a.createElement("p",{className:"mb-3"},"Average: ".concat(d.a.mean(t.grades.map((function(e){return+e}))).toFixed(2),"%")),E&&t.grades.map((function(e,t){return c.a.createElement("p",{key:t},"Test: ".concat(e,"%"))})),E?v.map((function(e,t){return c.a.createElement("p",{className:"myBadge mt-2 mr-2 px-2 py-1",key:t},e)})):"",E?c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementById("".concat(a)),n=document.getElementById("".concat(a)).value,c=Object(u.a)(v);""!==n&&(c.push(n),y(c),t.value=""),t.value=""}(e)}},c.a.createElement("input",{id:a,type:"text",className:"myTagInput",placeholder:"Add a tag"})):""))):void 0},f=a(17),E=a.n(f),g=function(e){var t=e.loading;return c.a.createElement("div",{className:"messageLoaderWrapper mt-5"},c.a.createElement(E.a,{size:250,color:"#000000",loading:t}))},h=function(){var e=1,t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(""),E=Object(l.a)(f,2),h=E[0],b=E[1],v=Object(n.useState)(!1),y=Object(l.a)(v,2),N=y[0],j=y[1];return Object(n.useEffect)((function(){j(!0),setTimeout((function(){i.a.get("https://www.hatchways.io/api/assessment/students").then((function(e){o(e.data.students)})).catch((function(e){return console.log(e)})),j(!1)}),1500)}),[]),c.a.createElement("div",{className:"mainContainer"},c.a.createElement("input",{id:"name-input",type:"text",className:"myInput",placeholder:"Search by name",onChange:function(e){d(e.target.value)}}),c.a.createElement("input",{id:"tag-input",type:"text",className:"myInput",placeholder:"Search by tag",onChange:function(e){b(e.target.value)}}),c.a.createElement("div",{className:"studentList"},N?c.a.createElement(g,{loading:N}):r&&r.filter((function(e){return e.firstName.concat(e.lastName).toLowerCase().includes(m.toLocaleLowerCase())})).map((function(t){return c.a.createElement(p,{key:t.id,result:t,inputId:e++,tagSearchQuery:h})}))))};a(50);var b=function(){return c.a.createElement("div",{className:"container-fluid App appContainer"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51),a(52);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.336bb946.chunk.js.map