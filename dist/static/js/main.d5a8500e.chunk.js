(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{211:function(e,t,a){e.exports=a(409)},216:function(e,t,a){},369:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),i=a.n(c),o=(a(216),a(5)),l=a(28),s=a(3),u=a(10),m=a(23),d=a.n(m),f=a(6),p=Object(f.d)(Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},d()(e.time.toDate()).fromNow()))}))))))}))),b=a(8);var h=Object(s.b)((function(e){return{auth:e.firebase.auth}}),{dislikePost:function(e){return function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("projects").doc(e).update({dislikes:o})}},likePost:function(e){return function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("projects").doc(e).update({likes:o})}}})((function(e){var t=e.project,a=e.dislikePost,n=e.likePost,c=e.auth;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{style:{position:"absolute",right:"5px",bottom:"0"}},r.a.createElement("span",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),c.uid&&n(t.id)}(e)}},r.a.createElement("i",{className:"material-icons"},"thumb_up"),t.likes),r.a.createElement("span",{style:{marginLeft:"10px"},onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),c.uid&&a(t.id)}(e)}},r.a.createElement("i",{className:"material-icons"},"thumb_down"),t.dislikes)),r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},d()(t.createdAt.toDate()).calendar())))}));var E=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(o.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(h,{project:e}))})))},g=function(e){return function(t,a){t({type:"SET_HIGHEST_SCORE",payload:e})}};var v=Object(f.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:g}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,i=e.users,o=e.setHighestScore,l=1;Object(n.useEffect)((function(){o(l)}));var s=i&&i.map((function(e){return e.points}));return function(){if(s)for(var e=0;e<s.length;e++)s[e]>l&&(l=s[e])}(),Math.max(s),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(E,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:i}))))})),N=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}},j=a(9),O=(a(369),["yxHKf6gbiMVJCyW5PqLTUEDiYu23","zDf3HYWc7AWE1xlHiAic62AGdMs1","nQv2SwBbtcdJGKRyHqoEKZMMGnn2"]);var y=Object(f.d)(Object(s.b)((function(e){return{users:e.firestore.ordered.users,auth:e.firebase.auth}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("users").doc(a).update({points:o})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(-1);i.collection("users").doc(a).update({points:o})}));var a},setHighestScore:function(t){return e(g(t))},calcScore:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=r().firestore();c.collection("scoreboard").add({scores:e,createdAt:new Date}).then((function(){i.collection("users").get().then((function(e){e.docs.forEach((function(e){e.ref.update({points:0})}))}))}))}}(t))}}})),Object(u.firestoreConnect)([{collection:"users",orderBy:["points"]}]))(Object(l.g)((function(e){e.setHighestScore;var t=e.users,a=e.incrementPoint,c=e.decrementPoint,i=e.auth,l=e.calcScore,s=t&&Object.entries(t),u=Object(n.useState)(0),m=Object(j.a)(u,2);m[0],m[1];var d=s&&s.reverse().map((function(e,t){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(o.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},0===t?r.a.createElement("i",{style:{color:"gold",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):1===t?r.a.createElement("i",{style:{color:"#aaa9ad",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):2===t?r.a.createElement("i",{style:{color:"#b08d57",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):"",r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title custom-card ".concat(0===t?"gold":1===t?"silver":2===t?"bronze":"")},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,"Points: ",e[1].points)))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return c(e[1].id)},disabled:!O.includes(i.uid)},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:!O.includes(i.uid),className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return a(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))}));return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"row"},d),r.a.createElement("span",{style:{margin:"40px"}},r.a.createElement("button",{disabled:!O.includes(i.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){return function(e){e.preventDefault(),window.confirm("Are you sure?")&&l(t)}(e)}},"End Game")))})));var S=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e,t){return r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var C=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/signin"},"Login")))};var w=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(S,{profile:a}):r.a.createElement(C,null))))})),F=a(13);var x=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firebase.auth.uid,r=e.firestore.data.projects,c=e.firestore.data.users,i=r?r[a]:null,o=c?c[n]:null;return{auth:e.firebase.auth,project:i,reduxProject:e.project,user:o}}),{deletePost:function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("projects").doc(e).delete()}},updateProjectContent:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c();i(),n().firebase.profile,n().firebase.auth.uid;o.firestore().collection("projects").doc(t).update(e)}},addComment:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore;console.log(e);var o=c(),l=(i(),n().firebase.profile,n().firebase.auth.uid,o.firestore().collection("projects").doc(t)),s={comment:e,createdAt:new Date};l.update({comment:o.firestore.FieldValue.arrayUnion(s)})}}}),Object(u.firestoreConnect)([{collection:"projects"},{collection:"users"}]))((function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)({comment:"",user:{}}),l=Object(j.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),p=f[0],h=f[1],E=e.project,g=e.deletePost,v=e.history,N=e.updateProjectContent,O=e.auth,y=e.addComment,S=e.user,C=e.match.params.id,w=Object(n.useState)({title:"",content:""}),x=Object(j.a)(w,2),k=x[0],P=x[1];function R(e){P(Object(b.a)({},k,Object(F.a)({},e.target.id,e.target.value)))}function I(e){e.preventDefault(),O.uid&&!1===p&&s.comment.length&&(y(s,C),u({comment:""}),h(!0),setTimeout((function(){h(!1)}),6e3))}if(E&&E.comment)var _=E.comment.map((function(e,t){return r.a.createElement("div",{key:t,style:{lineHeight:"5px",height:"auto",minHeight:"60px"}},r.a.createElement("h6",{style:{fontSize:"15px"}},r.a.createElement("strong",null,e.comment.user.firstName," ",e.comment.user.lastName)," ",d()(e.createdAt.toDate()).calendar()),r.a.createElement("p",{style:{fontSize:"16px"}},e.comment.comment))}));return E?!0===c?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O.uid===E.authorId&&(N(k,C),i(!1))},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:R,type:"text",id:"title",value:k.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:k.content,onChange:R,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Update"),r.a.createElement("button",{onClick:function(){return i(!1)},className:"btn pink lighten-1 z-depth-0"},"Cancel")))):!1===c?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},E.title),r.a.createElement("p",null,E.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",E.authorFirstName," ",E.authorLastName),r.a.createElement("div",null," ",d()(E.createdAt.toDate()).calendar())),O.uid===E.authorId&&r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){i(!c),P({title:E.title,content:E.content})}},"Edit"),r.a.createElement("button",{style:{float:"right"},className:"waves-effect waves-light btn",onClick:function(){return g(C),void v.push("/")}},"Delete"))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back"),r.a.createElement("h2",null," Comments"),r.a.createElement("form",{onSubmit:function(e){return I(e)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"comment"},!1===p?"Comment":"Wait a moment before commenting again"),r.a.createElement("input",{type:"text",name:"comment",value:s.comment,onChange:function(e){return function(e){var t;u((t={},Object(F.a)(t,e.target.name,e.target.value),Object(F.a)(t,"user",S),t)),console.log("change")}(e)}})),!O.isEmpty&&r.a.createElement("input",{required:!0,disabled:!s.comment.length,type:"submit",value:"Comment",className:"waves-effect waves-light btn"})),r.a.createElement("div",null,_&&_.reverse())):void 0:r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))}));var k=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,i=Object(n.useState)({email:"",password:""}),s=Object(j.a)(i,2),u=s[0],m=s[1];if(c.uid)return r.a.createElement(l.a,{to:"/"});function d(e){m(Object(b.a)({},u,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:d,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:d,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement(o.b,{to:"/signup"},"Dont have an account? Sign up here.")))}));var P=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0,bio:""})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,i=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),o=Object(j.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(j.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(l.a,{to:"/"});function h(e){u(Object(b.a)({},s,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),s.email.length>0&&s.password.length>0&&s.firstName.length>0&&s.lastName.length>0&&setTimeout((function(){c(s),p(!1)}),3e3)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:h,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:h,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(s.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var R=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(b.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),o=Object(j.a)(i,2),s=o[0],u=o[1];if(!a.uid)return r.a.createElement(l.a,{to:"/signin"});function m(e){u(Object(b.a)({},s,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",value:s.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:s.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var I=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null,auth:e.firebase.auth}}),{createbio:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=(c(),a().firebase.profile,a().firebase.auth.uid);i.firestore().collection("users").doc(o).update(e)}},signOut:N}),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e){var t=e.user,a=e.createbio,c=e.auth,i=e.history,o=e.signOut,l=Object(n.useState)({bio:""}),s=Object(j.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(j.a)(d,2),p=f[0],h=f[1];if(c.createdAt)var E=c.createdAt,g=new Date(parseInt(E,10)).toString("MM/dd/yy HH:mm:ss");return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Name: ",t&&t.firstName," ",t&&t.lastName),r.a.createElement("h4",null,"Score: ",t&&t.points),p?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(u),m({bio:""}),h(!1)},className:"white"},r.a.createElement("input",{value:u.bio,type:"text",onChange:function(e){m(Object(b.a)({},u,Object(F.a)({},e.target.name,e.target.value)))},name:"bio",placeholder:t.bio}),r.a.createElement("div",{className:"input-field",style:{display:"inline"}},r.a.createElement("button",{style:{marginRight:"10px"},className:"btn pink lighten-1 z-depth-0"},"Update!"),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",onClick:function(){return h(!1)}},"Cancel")))):r.a.createElement("h4",null,"Bio: ",t&&t.bio," ",r.a.createElement("span",{style:{marginLeft:"10px"}},t&&t.id?c.uid===t.id&&t.id&&r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){c.uid===t.id&&h(!p)},className:"material-icons"},"mode_edit"):null))),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("p",{className:"gray-text",style:{fontSize:"18px"}},"Joined the party on"," ",void 0!==g&&g.slice(0,16))),r.a.createElement("span",{className:"card-title"}))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return i.goBack()}},"Back"),r.a.createElement("a",{className:" waves-effect waves-light btn",onClick:o},"Log Out"))})));var _=Object(f.d)(Object(s.b)((function(e){return{scoreboard:e.firestore.ordered.scoreboard}})),Object(u.firestoreConnect)([{collection:"scoreboard",orderBy:["createdAt","desc"]}]))((function(e){var t=e.scoreboard,a=Object(n.useState)(),c=Object(j.a)(a,2),i=c[0],o=c[1],l=[],s=[];function u(e){t&&t.map((function(t){s.push(t);var a=s[0].id;t.id===e&&(t.scores.map((function(e){l.push(e)})),e&&o(l)),t.id!==a||e||(t.scores.map((function(e){l.push(e)})),o(l))}))}return Object(n.useEffect)((function(){u()}),[t]),t&&t.map((function(e){s.push(e)})),r.a.createElement(n.Fragment,null,r.a.createElement("select",{className:"browser-default",onChange:function(e){return u(e.target.value)}},s&&s.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},d()(e.createdAt.toDate()).calendar())}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points")),i&&i.reverse().map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("th",null,e.points)))}))))}));var A=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:v}),r.a.createElement(l.b,{path:"/project/:id",component:x}),r.a.createElement(l.b,{path:"/signin",component:k}),r.a.createElement(l.b,{path:"/signup",component:P}),r.a.createElement(l.b,{path:"/create",component:R}),r.a.createElement(l.b,{path:"/profile/:id",component:I}),r.a.createElement(l.b,{path:"/users",component:y}),r.a.createElement(l.b,{path:"/scoreboard",component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(210),D={projects:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),Object(b.a)({},e,{projects:[].concat(Object(z.a)(e.projects),[t.project])});case"CREATE_PROJECT_ERROR":return console.log("Create project error",t.err),e;default:return e}},T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(b.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(b.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(b.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.err.message),Object(b.a)({},e,{authError:t.err.message});default:return e}},H={score:1},L=a(46),B=Object(f.c)({auth:G,project:U,firestore:L.firestoreReducer,firebase:u.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),q=a(209),J=a(47),W=a.n(J);a(404),a(407);W.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var M=W.a,V=Object(f.e)(B,Object(f.d)(Object(f.a)(q.a.withExtraArgument({getFirestore:L.getFirestore,getFirebase:u.getFirebase})),Object(L.reduxFirestore)(W.a,M))),K={firebase:W.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:V.dispatch,createFirestoreInstance:L.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:V},r.a.createElement(u.ReactReduxFirebaseProvider,K,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.d5a8500e.chunk.js.map