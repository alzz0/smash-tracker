(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{209:function(e,t,a){e.exports=a.p+"static/media/star.85ca7fe7.png"},211:function(e,t,a){e.exports=a(408)},216:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),o=a.n(c),i=(a(216),a(5)),l=a(27),s=a(4),u=a(8),m=a(45),d=a.n(m),f=a(7),p=Object(f.d)(Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},d()(e.time.toDate()).fromNow()))}))))))})));var h=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},d()(t.createdAt.toDate()).calendar())))};var E=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(i.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(h,{project:e}))})))},g=function(e){return function(t,a){console.log(e),t({type:"SET_HIGHEST_SCORE",payload:e}),console.log(e)}};var b=Object(f.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:g}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:6,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,o=e.users,i=e.setHighestScore,l=0;Object(n.useEffect)((function(){i(l)}));var s=o&&o.map((function(e){return e.points}));return function(){if(s)for(var e=0;e<s.length;e++)s[e]>l&&(l=s[e]),console.log(s[e]),console.log("hightestnum",l)}(),Math.max(s),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(E,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:o}))))})),v=a(25),N=a(209),j=a.n(N);var O=Object(f.d)(Object(s.b)((function(e){return{users:e.firestore.ordered.users,auth:e.firebase.auth}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),o=c.firestore(),i=c.firestore.FieldValue.increment(1);o.collection("users").doc(a).update({points:i})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),o=c.firestore(),i=c.firestore.FieldValue.increment(-1);o.collection("users").doc(a).update({points:i})}));var a},setHighestScore:function(t){return e(g(t))}}})),Object(u.firestoreConnect)([{collection:"users",orderBy:["points"]}]))(Object(l.g)((function(e){var t=e.setHighestScore,a=e.users,c=e.incrementPoint,o=e.decrementPoint,l=e.auth,s=a&&Object.entries(a),u=Object(n.useState)(0),m=Object(v.a)(u,2),d=(m[0],m[1],0);console.log(a),Object(n.useEffect)((function(){t(d)})),console.log(l.uid);var f=a&&a.map((function(e){return e.points}));!function(){if(f)for(var e=0;e<f.length;e++)f[e]>d&&(d=f[e]),console.log(f[e]),console.log("hightestnum",d)}(),Math.max(f);var p=s&&s.reverse().map((function(e){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(i.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},e[1].points==d?r.a.createElement("img",{style:{position:"absolute",right:"0"},width:50,height:50,src:j.a}):null,r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("span",{style:{color:e[1].points==d?"gold":"#000",lineHeight:"normal",fontWeight:"500"},className:"card-title"},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,"Points: ",e[1].points)))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return o(e[1].id)},disabled:"yxHKf6gbiMVJCyW5PqLTUEDiYu23"!==l.uid},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:"yxHKf6gbiMVJCyW5PqLTUEDiYu23"!==l.uid,className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return c(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))})),h=p&&p.sort((function(e,t){return t-e}));return console.log(h&&h.points),r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"row"},p))})));var y=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e,t){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/create"},"New Post")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/users"},"Smashers")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var S=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/create"},"NewPost")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/users"},"Smashers")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/signin"},"Login")))};var w=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(y,{profile:a}):r.a.createElement(S,null))))}));var C=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.match.params.id,t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null," ",d()(t.createdAt.toDate()).calendar()))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back")):r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))})),R=a(26),x=a(14);var F=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,o=Object(n.useState)({email:"",password:""}),i=Object(v.a)(o,2),s=i[0],u=i[1];if(c.uid)return r.a.createElement(l.a,{to:"/"});function m(e){u(Object(x.a)({},s,Object(R.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(e),t(s)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:m,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:m,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var P=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return console.log(t),console.log(e),i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,o=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),i=Object(v.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(!1),d=Object(v.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(l.a,{to:"/"});function h(e){u(Object(x.a)({},s,Object(R.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),console.log(e),s.email.length>0&&s.password.length>0&&s.firstName.length>0&&s.lastName.length>0?(console.log("yes"),setTimeout((function(){console.log(s),c(s),p(!1)}),3e3)):console.log("no")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:h,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:h,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(s.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var k=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("projects").add(Object(x.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:o,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){console.log(e),t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,o=Object(n.useState)({title:"",content:""}),i=Object(v.a)(o,2),s=i[0],u=i[1];if(!a.uid)return r.a.createElement(l.a,{to:"/signin"});function m(e){u(Object(x.a)({},s,Object(R.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",value:s.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:s.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var I=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("h3",null,"Name: ",t&&t.firstName," ",t&&t.lastName),r.a.createElement("h4",null,"Score: ",t&&t.points),r.a.createElement("h4",null,"Bio: ",t&&t.bio))})));var _=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:b}),r.a.createElement(l.b,{path:"/project/:id",component:C}),r.a.createElement(l.b,{path:"/signin",component:F}),r.a.createElement(l.b,{path:"/signup",component:P}),r.a.createElement(l.b,{path:"/create",component:k}),r.a.createElement(l.b,{path:"/profile/:id",component:I}),r.a.createElement(l.b,{path:"/users",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U={projects:[{id:"1",title:"title1",content:"content1"},{id:"2",title:"title2",content:"content2"},{id:"3",title:"title3",content:"content3"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Create project error",t.err),e;default:return e}},L={authError:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("error"),Object(x.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("sucess"),Object(x.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(x.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),console.log(t.err.message),Object(x.a)({},e,{authError:t.err.message});default:return e}},G={score:0},H=a(46),D=Object(f.c)({auth:A,project:T,firestore:H.firestoreReducer,firebase:u.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),z=a(210),B=a(47),J=a.n(B);a(403),a(406);J.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var W=J.a,q=Object(f.e)(D,Object(f.d)(Object(f.a)(z.a.withExtraArgument({getFirestore:H.getFirestore,getFirebase:u.getFirebase})),Object(H.reduxFirestore)(J.a,W))),M={firebase:J.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:q.dispatch,createFirestoreInstance:H.createFirestoreInstance};o.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(u.ReactReduxFirebaseProvider,M,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.35abb011.chunk.js.map