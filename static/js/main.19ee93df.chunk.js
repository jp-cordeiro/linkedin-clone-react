(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),r=c.n(a),i=(c(66),c(67),c(18)),o=c(33),l=c(53),d=c.n(l),j=c(49),u=c.n(j),b=c(50),p=c.n(b),O=c(51),h=c.n(O),m=c(52),x=c.n(m),v=(c(68),c(2)),f=function(e){var t=e.Icon,c=e.title,n=e.color;return Object(v.jsxs)("div",{className:"input-option",children:[Object(v.jsx)(t,{style:{color:n}}),Object(v.jsx)("h4",{children:c})]})};var _=function(e){return e.inputOptionsList.map((function(e,t){return Object(v.jsx)(f,{Icon:e.Icon,title:e.title,color:e.color},t)}))},g=c(99),N=c(39),y=c.n(N),I=c(44),w=c.n(I),S=c(45),k=c.n(S),E=c(46),D=c.n(E);c(70);var T=function(e){var t=e.name,c=e.description,n=e.message,s=(e.photoUrl,[{Icon:y.a,title:"Foto",color:"gray"},{Icon:w.a,title:"V\xeddeo",color:"gray"},{Icon:k.a,title:"Evento",color:"gray"},{Icon:D.a,title:"Escrever artigo",color:"gray"}]);return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"post",children:[Object(v.jsxs)("div",{className:"post__header",children:[Object(v.jsx)(g.a,{}),Object(v.jsxs)("div",{className:"post__info",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("p",{children:c})]})]}),Object(v.jsx)("div",{className:"post_body",children:Object(v.jsx)("p",{children:n})}),Object(v.jsx)("div",{className:"post__buttons",children:Object(v.jsx)(_,{inputOptionsList:s})})]})})},C=c(12),P=c.n(C),A=(c(47),c(21));c(76),c(78);A.a.initializeApp({apiKey:"AIzaSyBrdCsvMOJbi3i5LJyb5fnGRGs8-gXh_yA",authDomain:"linkedin-clone-57ad7.firebaseapp.com",projectId:"linkedin-clone-57ad7",storageBucket:"linkedin-clone-57ad7.appspot.com",messagingSenderId:"52609390305",appId:"1:52609390305:web:29e4ada0070d1fa30d09a0"});var L=A.a.auth(),R=A.a.firestore(),U=new A.a.auth.GoogleAuthProvider;U.setCustomParameters({prompt:"select_account"});var G=A.a,B=(c(80),c(32)),F=c(30),J="posts/LOAD_POSTS",V="posts/ADD_POST",M=Object(F.a)((function(e,t){switch(t.type){case"posts/LOAD_POSTS":e.posts=t.payload}}),{posts:[]}),Q=function(e){return console.log(e),{type:J,payload:e}},W=function(e){return{type:V,payload:e}};var H=function(){var e=Object(B.b)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useCallback)((function(t){t.preventDefault(),e(W({name:"JP",description:"Teste",message:s,postUrl:""})),a("")}),[s]);return Object(v.jsxs)("form",{onSubmit:r,children:[Object(v.jsx)("input",{value:s,onChange:function(e){var t=e.target;return a(t.value)},type:"text"}),Object(v.jsx)("button",{type:"submit",children:"Enviar"})]})},X=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=[{Icon:u.a,title:"Foto",color:"#7085f9"},{Icon:p.a,title:"V\xeddeo",color:"#e7a33b"},{Icon:h.a,title:"Evento",color:"#c0cbcD"},{Icon:x.a,title:"Escrever artigo",color:"#7fc15e"}],r=Object(n.useCallback)((function(){R.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[c]);return Object(n.useEffect)((function(){r()}),[]),Object(v.jsxs)("div",{className:"feed",children:[Object(v.jsxs)("div",{className:"feed__input-container",children:[Object(v.jsxs)("div",{className:"feed__input",children:[Object(v.jsx)(d.a,{}),Object(v.jsx)(H,{})]}),Object(v.jsx)("div",{className:"feed__options",children:Object(v.jsx)(_,{inputOptionsList:a})})]}),c.map((function(e){return Object(v.jsx)(T,Object(i.a)({},e.data),e.id)}))]})},z=c(59),K=c.n(z),Z=c(54),$=c.n(Z),q=c(55),Y=c.n(q),ee=c(56),te=c.n(ee),ce=c(57),ne=c.n(ce),se=c(58),ae=c.n(se),re=c.p+"static/media/logo.32e20978.svg",ie=(c(82),c(83),function(e){var t=e.avatar,c=e.Icon,n=e.title;return Object(v.jsxs)("div",{className:"header-options",children:[c&&Object(v.jsx)(c,{className:"header-option__icon"}),t&&Object(v.jsx)(g.a,{className:"header-option__icon",src:t}),Object(v.jsx)("h3",{className:"header-option__title",children:n})]})}),oe=function(){var e=[{Icon:$.a,title:"In\xedcio"},{Icon:Y.a,title:"Inha rede"},{Icon:te.a,title:"Vagas"},{Icon:ne.a,title:"Mensagens"},{Icon:ae.a,title:"Notifica\xe7\xf5es"},{title:"Eu",avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQGfo-A4O3ELfQ/profile-displayphoto-shrink_100_100/0/1576532321076?e=1622678400&v=beta&t=WBDG2p5ZtiK5Ng7F98PSs13IDDy1WGrQkCJr9gxRGDM"}];return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"header__left",children:[Object(v.jsx)("img",{src:re,alt:"Linkedin"}),Object(v.jsxs)("div",{className:"header__search",children:[Object(v.jsx)(K.a,{}),Object(v.jsx)("input",{type:"text"})]})]}),Object(v.jsx)("div",{className:"header__right",children:e.map((function(e,t){return Object(v.jsx)(ie,Object(i.a)({},e),t)}))})]})},le=c.p+"static/media/background-avatar.59ea100d.jpg",de=(c(84),function(){return Object(v.jsxs)("div",{className:"sidebar",children:[Object(v.jsx)("img",{src:le,alt:""}),Object(v.jsxs)("div",{className:"sidebar__top",children:[Object(v.jsx)(g.a,{className:"sidebar__avatar"}),Object(v.jsx)("h2",{children:"Jo\xe3o Paulo Cordeiro"}),Object(v.jsx)("h4",{children:"meuemail@meuemail.com"})]}),Object(v.jsxs)("div",{className:"sidebar__stats",children:[Object(v.jsxs)("div",{className:"sidebar__stat",children:[Object(v.jsx)("p",{children:"Quem viu seu perfil"}),Object(v.jsx)("p",{className:"sidebar__stat-number",children:"xxx"})]}),Object(v.jsxs)("div",{className:"sidebar__stat",children:[Object(v.jsx)("p",{children:"Viram sua publica\xe7\xe3o"}),Object(v.jsx)("p",{className:"sidebar__stat-number",children:"xxxx"})]})]}),Object(v.jsxs)("div",{className:"sidebar__bottom",children:[Object(v.jsx)("p",{children:"Recentes"}),["reactjs","nodejs","vuejs","react-native"].map((function(e,t){return function(e,t){return Object(v.jsxs)("div",{className:"sidebar__recent-item",children:[Object(v.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(v.jsx)("p",{children:e})]},t)}(e,t)}))]})]})});var je=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(oe,{}),Object(v.jsxs)("div",{className:"app__body",children:[Object(v.jsx)(de,{}),Object(v.jsx)(X,{})]})]})},ue=c(17),be=c(60),pe="users/FETCH_USER",Oe=Object(F.a)((function(e,t){switch(t.type){case"users/FETCH_USER":e.currentUser=t.payload}}),{currentUser:null}),he=function(e){return{type:pe,payload:{user:e}}},me=Object(ue.c)({usersReducer:Oe,postsReducer:M}),xe=c(16),ve=P.a.mark(fe);function fe(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{G.firestore().collection("users").doc(L.currentUser.id).get().then((function(e){e.exists?(console.log(e.data()),Object(xe.b)(he(e.data()))):console.log("does not exist")}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),ve)}var _e=Object(xe.a)([Object(xe.c)("users/FETCH_USER",fe)]),ge=P.a.mark(ye),Ne=P.a.mark(Ie);function ye(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){R.collection("posts").orderBy("timestamp","desc").onSnapshot((function(t){return e(t.docs.map((function(e){return{id:e.id,data:e.data()}})))}),t)}));case 3:return e=t.sent,t.next=6,Object(xe.b)(Q(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),ge,null,[[0,8]])}function Ie(e){var t;return P.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,n=t,console.log(n),R.collection("posts").add(Object(i.a)(Object(i.a)({},n),{},{timestamp:G.firestore.FieldValue.serverTimestamp()}));case 4:c.next=9;break;case 6:c.prev=6,c.t0=c.catch(1),console.log(c.t0);case 9:case"end":return c.stop()}var n}),Ne,null,[[1,6]])}var we=Object(xe.a)([Object(xe.c)("posts/GET_POSTS",ye),Object(xe.c)("posts/ADD_POST",Ie)]),Se=P.a.mark(ke);function ke(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)([_e,we]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),Se)}var Ee=Object(be.a)(),De=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d)(Object(ue.a)(Ee)),Te=Object(ue.e)(me,De);Ee.run(ke);var Ce=Te;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(B.a,{store:Ce,children:Object(v.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[85,1,2]]]);
//# sourceMappingURL=main.19ee93df.chunk.js.map