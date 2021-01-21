(this["webpackJsonptakeoff-staff-lk"]=this["webpackJsonptakeoff-staff-lk"]||[]).push([[0],{30:function(t,e,c){},31:function(t,e,c){},32:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),o=c.n(a),i=c(7),s=c.n(i),r=c(2),l=c(3),u=c(6),d=c.n(u),j=c(14);function b(){return(b=Object(j.a)(d.a.mark((function t(e,c){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("../data/auth-data.json");case 3:if(!(n=t.sent).ok){t.next=9;break}return t.next=7,n.json();case 7:return a=t.sent,t.abrupt("return",a.userList.filter((function(t){return t.userName===e&&t.userPassword===c})).length>0);case 9:return t.abrupt("return",!1);case 12:return t.prev=12,t.t0=t.catch(0),console.log("Error while loading auth-data.json:",t.t0),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function p(){return(p=Object(j.a)(d.a.mark((function t(){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("../data/contact-list-data.json");case 3:if(!(e=t.sent).ok){t.next=9;break}return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c.list);case 9:return t.abrupt("return",[]);case 12:return t.prev=12,t.t0=t.catch(0),console.log("Error while loading contact-list-data.json:",t.t0),t.abrupt("return",[]);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}var f=Object(l.b)({name:"auth",initialState:{isLoggedIn:!1,userName:"",failLoginMessage:"",loginAttempts:0},reducers:{setAuthUser:function(t,e){t.userName=e.payload,t.isLoggedIn=!0,t.loginAttempts=0},clearAuthUser:function(t){t.isLoggedIn=!1,t.userName="",t.loginAttempts=0},setFailLoginMessage:function(t){t.failLoginMessage="incorrect login or password"},incrementLoginAttempts:function(t){t.loginAttempts++}}}),h=f.actions,m=h.setAuthUser,O=h.setFailLoginMessage,_=h.incrementLoginAttempts,x=f.actions.clearAuthUser,C=function(t,e){return function(c){(function(t,e){return b.apply(this,arguments)})(t,e).then((function(e){c(_()),c(e?m(t):O())}))}},N=function(t){return t.auth.isLoggedIn},g=function(t){return t.auth.userName},v=function(t){return t.auth.failLoginMessage},A=function(t){return t.auth.loginAttempts},y=f.reducer,I=Object(l.b)({name:"addContact",initialState:{isAddContactMode:!1},reducers:{stopAddContactAction:function(t){t.isAddContactMode=!1},startAddContactAction:function(t){t.isAddContactMode=!0}}}),L=I.actions,k=L.startAddContactAction,M=L.stopAddContactAction,P=function(t){return t.addContact.isAddContactMode},E=I.reducer,D=Object(l.b)({name:"deleteContact",initialState:{isDeleteContactMode:!1,deleteId:null},reducers:{startDeleteContactAction:function(t,e){t.isDeleteContactMode=!0,t.deleteId=e.payload},stopDeleteContactAction:function(t){t.isDeleteContactMode=!1,t.deleteId=null}}}),w=D.actions,S=(w.setDeleteContactMode,w.startDeleteContactAction),R=w.stopDeleteContactAction,U=function(t){return t.deleteContact.isDeleteContactMode},F=function(t){return t.deleteContact.deleteId},J=D.reducer,B=Object(l.b)({name:"editContact",initialState:{isEditMode:!1,editId:null},reducers:{startEditContactAction:function(t,e){t.isEditMode=!0,t.editId=e.payload},stopEditContactAction:function(t){t.isEditMode=!1,t.editId=null}}}),T=B.actions,q=T.startEditContactAction,z=T.stopEditContactAction,G=function(t){return t.editContact.isEditMode},H=function(t){return t.editContact.editId},K=B.reducer;c(30);function Q(){var t=Object(r.c)(N),e=Object(r.c)(g),c=Object(r.b)();return Object(n.jsxs)("article",{className:"header-container",children:[Object(n.jsxs)("div",{className:"header-right",children:[!t&&Object(n.jsx)("span",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 Takeoff Staff"}),t&&Object(n.jsxs)("span",{children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",e]})]}),Object(n.jsx)("div",{className:"header-center",children:t&&Object(n.jsx)("div",{children:Object(n.jsxs)("button",{className:"header__contact-btn",onClick:function(){c(k()),c(R()),c(z())},children:[Object(n.jsx)("img",{className:"header__add-contact-icon",src:"../icons/add_icon.png",alt:"add"}),"Add contact"]})})}),Object(n.jsxs)("div",{className:"header-left",children:[t&&Object(n.jsxs)("button",{className:"header__contact-btn",onClick:function(){c(x())},children:[Object(n.jsx)("img",{className:"header-logout",src:"../icons/logout_icon.png",alt:"logout"}),"log out"]}),!t&&Object(n.jsx)("a",{href:"../data/auth-data.json",target:"blank",children:"JSON \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043b\u043e\u0433\u0438\u043d\u043e\u0432 \u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u0439"})]})]})}c(31);function V(){var t=Object(r.c)(N),e=Object(r.c)(v),c=Object(r.c)(A),o=Object(r.b)(),i=Object(a.useRef)(""),s=Object(a.useRef)("");return!t&&Object(n.jsxs)("form",{className:"login-comp__container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{className:"login-comp__input",type:"text",placeholder:"login",ref:i})}),Object(n.jsx)("div",{className:"login-comp__line",children:Object(n.jsx)("input",{className:"login-comp__input",type:"text",placeholder:"password",ref:s})}),Object(n.jsx)("div",{className:"login-comp__line",children:Object(n.jsx)("input",{className:"login-comp__input login-comp__btn",type:"submit",value:"login",onClick:function(t){t.preventDefault(),o(C(i.current.value,s.current.value))}})}),c>0&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["login attempts: ",c]}),Object(n.jsxs)("p",{children:["login result: ",e]})]})]})}var W=c(17),X=c(15);function Y(t){var e=t.map((function(t){return t.contactId}));return Math.max.apply(Math,Object(X.a)(e).concat([0]))}var Z=Object(l.b)({name:"contactList",initialState:{list:[]},reducers:{setContactList:function(t,e){t.list=e.payload},addContactAction:function(t,e){t.list.push({contactId:Y(Object(X.a)(t.list))+1,contactName:e.payload.contactName,contactPhone:e.payload.contactPhone})},deleteContactAction:function(t,e){t.list=t.list.filter((function(t){return t.contactId!==e.payload}))},updateContactAction:function(t,e){t.list=t.list.map((function(t){return t.contactId===e.payload.contactId?{contactId:e.payload.contactId,contactName:e.payload.contactName,contactPhone:e.payload.contactPhone}:Object(W.a)({},t)}))}}}),$=Z.actions,tt=$.setContactList,et=$.addContactAction,ct=$.deleteContactAction,nt=$.updateContactAction,at=function(t){return t.contactList.list},ot=Z.reducer;c(32);function it(){var t=Object(r.b)(),e=Object(r.c)(at);Object(r.c)(F);return Object(a.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){t(tt(e))}))}),[]),console.log(e),Object(n.jsx)(o.a.Fragment,{children:Object(n.jsx)("table",{className:"contactList__container",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"contactList__header-column",children:" Id "}),Object(n.jsx)("th",{className:"contactList__header-column",children:" Name "}),Object(n.jsx)("th",{className:"contactList__header-column",children:" Phone "}),Object(n.jsx)("th",{className:"contactList__header-column",children:" Actions "})]}),e.length>0&&e.map((function(e){return Object(n.jsxs)("tr",{className:"contactList__row",children:[Object(n.jsx)("td",{className:"contactList__column",children:e.contactId}),Object(n.jsx)("td",{className:"contactList__column",children:e.contactName}),Object(n.jsx)("td",{className:"contactList__column",children:e.contactPhone}),Object(n.jsxs)("td",{children:[Object(n.jsx)("img",{className:"contactList__icon",src:"../icons/edit_icon.png",alt:"edit",onClick:function(){t(M()),t(R()),t(q(e.contactId))}}),Object(n.jsx)("img",{className:"contactList__icon",src:"../icons/delete_icon.png",alt:"delete",onClick:function(){t(M()),t(z()),t(S(e.contactId))}})]})]},e.contactId)}))]})})})}c(33);function st(){var t=Object(r.c)(P),e=Object(a.useRef)(""),c=Object(a.useRef)(""),o=Object(r.b)();return t&&Object(n.jsxs)("form",{className:"addContact__container",children:[Object(n.jsx)("input",{className:"addContact__input",type:"text",placeholder:"name",ref:e}),Object(n.jsx)("input",{className:"addContact__input addContact__phone",type:"text",placeholder:"phone",ref:c}),Object(n.jsx)("input",{className:"addContact__input addContact__btn",type:"submit",value:"add",onClick:function(t){t.preventDefault(),o(et({contactName:e.current.value,contactPhone:c.current.value})),o(M())}}),Object(n.jsx)("input",{className:"addContact__input addContact__btn",type:"button",value:"close",onClick:function(t){o(M())}})]})}var rt=c(9);c(34);function lt(){var t=Object(r.b)(),e=Object(r.c)(U),c=Object(r.c)(F),o=Object(r.c)(at),i=Object(a.useState)({contactName:"contactName",contactPhone:"contactPhone"}),s=Object(rt.a)(i,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){var t=o.filter((function(t){return t.contactId===c}));if(1===t.length){var e={contactName:t[0].contactName,contactPhone:t[0].contactPhone};u(e)}}),[c,o]),e&&c&&Object(n.jsxs)("form",{className:"deleteContact__container",children:[Object(n.jsx)("input",{className:"deleteContact__input",type:"text",value:l.contactName,readOnly:!0}),Object(n.jsx)("input",{className:"deleteContact__input deleteContact__phone",value:l.contactPhone,readOnly:!0,type:"text"}),Object(n.jsx)("input",{className:"deleteContact__input deleteContact__btn",type:"submit",value:"delete",onClick:function(e){e.preventDefault(),t(ct(c)),t(R())}}),Object(n.jsx)("input",{className:"deleteContact__input deleteContact__btn",type:"button",value:"close",onClick:function(e){t(R())}})]})}c(35);function ut(){var t=Object(r.b)(),e=Object(r.c)(G),c=Object(r.c)(H),o=Object(r.c)(at),i=Object(a.useState)({contactName:"contactName",contactPhone:"contactPhone"}),s=Object(rt.a)(i,2),l=(s[0],s[1]);Object(a.useEffect)((function(){var t,e,n=o.filter((function(t){return t.contactId===c}));if(1===n.length){var a={contactName:n[0].contactName,contactPhone:n[0].contactPhone};l(a),t=n[0].contactName,e=n[0].contactPhone,u.current.value=t,d.current.value=e}}),[c]);var u=Object(a.useRef)(""),d=Object(a.useRef)("");return e&&c&&Object(n.jsxs)("form",{className:"editContact__container",children:[Object(n.jsx)("input",{className:"editContact__input",type:"text",placeholder:"name",ref:u}),Object(n.jsx)("input",{className:"editContact__input editContact__phone",type:"text",placeholder:"phone",ref:d}),Object(n.jsx)("input",{className:"editContact__input editContact__btn",type:"submit",value:"save",onClick:function(e){e.preventDefault(),t(nt({contactId:c,contactName:u.current.value,contactPhone:d.current.value})),t(z())}}),Object(n.jsx)("input",{className:"editContact__input editContact__btn",type:"button",value:"close",onClick:function(e){t(z())}})]})}c(36);function dt(){return Object(r.c)(N)&&Object(n.jsxs)("article",{className:"contactPage__container",children:[Object(n.jsx)(st,{}),Object(n.jsx)(lt,{}),Object(n.jsx)(ut,{}),Object(n.jsx)(it,{})]})}c(37),c(38);var jt=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(Q,{}),Object(n.jsx)(V,{}),Object(n.jsx)(dt,{})]})},bt=Object(l.a)({reducer:{auth:y,addContact:E,contactList:ot,deleteContact:J,editContact:K}});s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(r.a,{store:bt,children:Object(n.jsx)(jt,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.15e78040.chunk.js.map