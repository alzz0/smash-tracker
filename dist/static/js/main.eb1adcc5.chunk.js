(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{211:function(e,t,a){e.exports=a(409)},216:function(e,t,a){},369:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),i=a.n(c),o=(a(216),a(4)),l=a(28),s=a(3),u=a(10),m=a(23),d=a.n(m),f=a(6),p=Object(f.d)(Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},d()(e.time.toDate()).fromNow()))}))))))}))),h=a(9);var b=Object(s.b)((function(e){return{auth:e.firebase.auth}}),{dislikePost:function(e){return function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("projects").doc(e).update({dislikes:o})}},likePost:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();console.log(o.collection("users").doc("4I3uavpblzg4DCbhK3NBRFwb5nX2"));var l=i.firestore(),s=i.firestore.FieldValue.increment(1);l.collection("projects").doc(e).update({likes:s})}}})((function(e){var t=e.project,a=e.dislikePost,n=e.likePost,c=e.auth;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{style:{position:"absolute",right:"5px",bottom:"0"}},r.a.createElement("span",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),c.uid&&n(t.id,c)}(e)}},r.a.createElement("i",{className:"material-icons"},"thumb_up"),t.likes),r.a.createElement("span",{style:{marginLeft:"10px"},onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),c.uid&&a(t.id)}(e)}},r.a.createElement("i",{className:"material-icons"},"thumb_down"),t.dislikes)),r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"},d()(t.createdAt.toDate()).calendar())),r.a.createElement("p",{style:{marginLeft:"7px"}}," ",t.comment&&" ".concat(t.comment.length," Comments")))}));var E=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(o.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(b,{project:e}))})))},g=function(e){return function(t,a){t({type:"SET_HIGHEST_SCORE",payload:e})}};var v=Object(f.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:g}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,i=e.users,o=e.setHighestScore,l=1;Object(n.useEffect)((function(){o(l)}));var s=i&&i.map((function(e){return e.points}));return function(){if(s)for(var e=0;e<s.length;e++)s[e]>l&&(l=s[e])}(),Math.max(s),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(E,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:i}))))})),N=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}},j=a(8),O=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"user"},"Search by first name"),r.a.createElement("input",{type:"text",id:"user",onChange:e.handleInput})))},y=(a(369),["yxHKf6gbiMVJCyW5PqLTUEDiYu23","zDf3HYWc7AWE1xlHiAic62AGdMs1","nQv2SwBbtcdJGKRyHqoEKZMMGnn2"]);var S=Object(f.d)(Object(s.b)((function(e){return{users:e.firestore.ordered.users,auth:e.firebase.auth}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("users").doc(a).update({points:o})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(-1);i.collection("users").doc(a).update({points:o})}));var a},setHighestScore:function(t){return e(g(t))},calcScore:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=r().firestore();c.collection("scoreboard").add({scores:e,createdAt:new Date}).then((function(){i.collection("users").get().then((function(e){e.docs.forEach((function(e){e.ref.update({points:0})}))}))}))}}(t))}}})),Object(u.firestoreConnect)([{collection:"users",orderBy:["points"]}]))(Object(l.g)((function(e){e.setHighestScore;var t=e.users,a=e.incrementPoint,c=e.decrementPoint,i=e.auth,l=e.calcScore,s=t&&Object.entries(t),u=Object(n.useState)(0),m=Object(j.a)(u,2),d=(m[0],m[1],Object(n.useState)("")),f=Object(j.a)(d,2),p=f[0],h=f[1],b=s&&s.filter((function(e){return e[1].firstName.toLowerCase().includes(p.toLowerCase())})),E=b&&b.reverse().map((function(e,t){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(o.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},0===t?r.a.createElement("i",{style:{color:"gold",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):1===t?r.a.createElement("i",{style:{color:"#aaa9ad",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):2===t?r.a.createElement("i",{style:{color:"#b08d57",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):"",r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title custom-card ".concat(0===t?"gold":1===t?"silver":2===t?"bronze":"")},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,"Points: ",e[1].points)))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return c(e[1].id)},disabled:!(y.includes(i.uid)&&e[1].points>0)},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:!y.includes(i.uid),className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return a(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))}));return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(O,{handleInput:function(e){e.preventDefault(),h(e.target.value)}}),r.a.createElement("div",{className:"row"},E),r.a.createElement("span",{style:{margin:"40px"}},r.a.createElement("button",{disabled:!y.includes(i.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){return function(e){e.preventDefault(),t.map((function(e){e.points>0&&(window.confirm("Are you sure?")&&l(t))}))}(e)}},"End Game")))})));var C=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e,t){return r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var w=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/signin"},"Login")))};var x=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(C,{profile:a}):r.a.createElement(w,null))))})),F=a(13);var k=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firebase.auth.uid,r=e.firestore.data.projects,c=e.firestore.data.users,i=r?r[a]:null,o=c?c[n]:null;return{auth:e.firebase.auth,project:i,reduxProject:e.project,user:o}}),{deletePost:function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("projects").doc(e).delete()}},updateProjectContent:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c();i(),n().firebase.profile,n().firebase.auth.uid;o.firestore().collection("projects").doc(t).update(e)}},addComment:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c(),l=(i(),n().firebase.profile,n().firebase.auth.uid,o.firestore().collection("projects").doc(t)),s={comment:e,createdAt:new Date};l.update({comment:o.firestore.FieldValue.arrayUnion(s)})}}}),Object(u.firestoreConnect)([{collection:"projects"},{collection:"users"}]))((function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)({comment:"",user:{}}),s=Object(j.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(!1),p=Object(j.a)(f,2),b=p[0],E=p[1],g=e.project,v=e.deletePost,N=e.history,O=e.updateProjectContent,y=e.auth,S=e.addComment,C=e.user,w=e.match.params.id,x=Object(n.useState)({title:"",content:""}),k=Object(j.a)(x,2),P=k[0],R=k[1];function I(e){R(Object(h.a)({},P,Object(F.a)({},e.target.id,e.target.value)))}function A(e){e.preventDefault(),y.uid&&!1===b&&u.comment.length&&(S(u,w),m({comment:""}),E(!0),setTimeout((function(){E(!1)}),6e3))}if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),g&&g.comment)var D=g.comment.map((function(e,t){return r.a.createElement("div",{key:t,style:{height:"auto",minHeight:"60px"}},r.a.createElement("h6",{style:{fontSize:"15px"}},r.a.createElement("strong",null,r.a.createElement(o.b,{style:{color:"black"},to:"/profile/".concat(e.comment.user.id)},e.comment.user.firstName," ",e.comment.user.lastName))," ",d()(e.createdAt.toDate()).calendar()),r.a.createElement("p",{style:{marginTop:"0",fontSize:"16px"}},e.comment.comment))}));return g?!0===c?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y.uid===g.authorId&&(O(P,w),i(!1))},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:I,type:"text",id:"title",maxLength:"100",value:P.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{style:{height:"auto"},required:!0,value:P.content,onChange:I,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Update"),r.a.createElement("button",{onClick:function(){return i(!1)},className:"btn pink lighten-1 z-depth-0"},"Cancel")))):!1===c?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},g.title),r.a.createElement("p",null,g.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",g.authorFirstName," ",g.authorLastName),r.a.createElement("div",null," ",d()(g.createdAt.toDate()).calendar())),y.uid===g.authorId&&r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){i(!c),R({title:g.title,content:g.content})}},"Edit"),r.a.createElement("button",{style:{float:"right"},className:"waves-effect waves-light btn",onClick:function(){window.confirm("Are you sure you want to delete this masterpiece ?")&&(v(w),N.push("/"))}},"Delete"))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back"),r.a.createElement("h2",null," Comments"),r.a.createElement("form",{onSubmit:function(e){return A(e)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"comment"},!1===b?"Comment":"Wait a moment before commenting again"),r.a.createElement("input",{type:"text",name:"comment",value:u.comment,onChange:function(e){return function(e){var t;m((t={},Object(F.a)(t,e.target.name,e.target.value),Object(F.a)(t,"user",C),t))}(e)}})),!y.isEmpty&&r.a.createElement("input",{required:!0,disabled:!u.comment.length,type:"submit",value:"Comment",className:"waves-effect waves-light btn"})),r.a.createElement("div",null,D&&D.reverse())):void 0:r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))}));var P=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,i=Object(n.useState)({email:"",password:""}),s=Object(j.a)(i,2),u=s[0],m=s[1];if(c.uid)return r.a.createElement(l.a,{to:"/"});function d(e){m(Object(h.a)({},u,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:d,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:d,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement(o.b,{to:"/signup"},"Dont have an account? Sign up here.")))}));var R=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0,bio:"",createdAt:new Date})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,i=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),o=Object(j.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(j.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(l.a,{to:"/"});function b(e){u(Object(h.a)({},s,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),s.email.length>0&&s.password.length>0&&s.firstName.length>0&&s.lastName.length>0&&setTimeout((function(){c(s),p(!1)}),3e3)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:b,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:b,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(s.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var I=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(h.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),o=Object(j.a)(i,2),s=o[0],u=o[1];if(!a.uid)return r.a.createElement(l.a,{to:"/signin"});function m(e){u(Object(h.a)({},s,Object(F.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",maxLength:"100",value:s.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:s.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var A=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null,auth:e.firebase.auth}}),{createbio:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=(c(),a().firebase.profile,a().firebase.auth.uid);i.firestore().collection("users").doc(o).update(e)}},signOut:N}),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e){var t=e.user,a=e.createbio,c=e.auth,i=e.history,o=e.signOut,l=e.match,s=Object(n.useState)({bio:""}),u=Object(j.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(j.a)(f,2),b=p[0],E=p[1];if(t)var g=1e3*t.createdAt.seconds,v=new Date(parseInt(g,10)).toString("MM/dd/yy HH:mm:ss");return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Name: ",t&&t.firstName," ",t&&t.lastName),r.a.createElement("h4",null,"Score: ",t&&t.points),b?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),d({bio:""}),E(!1)},className:"white"},r.a.createElement("input",{value:m.bio,type:"text",onChange:function(e){d(Object(h.a)({},m,Object(F.a)({},e.target.name,e.target.value)))},name:"bio",maxLength:"100",placeholder:t.bio||" Update Bio"}),r.a.createElement("div",{className:"input-field",style:{display:"inline"}},r.a.createElement("button",{style:{marginRight:"10px"},className:"btn pink lighten-1 z-depth-0"},"Update!"),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",onClick:function(){return E(!1)}},"Cancel")))):r.a.createElement("h4",null,"Bio: ",t&&t.bio," ",r.a.createElement("span",{style:{marginLeft:"10px"}},t&&t.id?c.uid===t.id&&t.id&&r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){c.uid===t.id&&E(!b)},className:"material-icons"},"mode_edit"):null))),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("p",{className:"gray-text",style:{fontSize:"18px"}},"Joined the party on"," ",void 0!==v&&v.slice(0,16))),r.a.createElement("span",{className:"card-title"}))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return i.goBack()}},"Back"),l.params.id===c.uid&&r.a.createElement("a",{className:" waves-effect waves-light btn",onClick:o},"Log Out"))})));var D=Object(f.d)(Object(s.b)((function(e){return{scoreboard:e.firestore.ordered.scoreboard}})),Object(u.firestoreConnect)([{collection:"scoreboard",orderBy:["createdAt","desc"]}]))((function(e){var t=e.scoreboard,a=Object(n.useState)(),c=Object(j.a)(a,2),i=c[0],o=c[1],l=[],s=[];function u(e){t&&t.map((function(t){s.push(t);var a=s[0].id;t.id===e&&(t.scores.map((function(e){l.push(e)})),e&&o(l)),t.id!==a||e||(t.scores.map((function(e){l.push(e)})),o(l))}))}return Object(n.useEffect)((function(){u()}),[t]),t&&t.map((function(e){s.push(e)})),r.a.createElement(n.Fragment,null,r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return u(e.target.value)}},s&&s.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},d()(e.createdAt.toDate()).calendar())}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points")),i&&i.reverse().map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("th",null,e.points)))}))))}));var _=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:v}),r.a.createElement(l.b,{path:"/project/:id",component:k}),r.a.createElement(l.b,{path:"/signin",component:P}),r.a.createElement(l.b,{path:"/signup",component:R}),r.a.createElement(l.b,{path:"/create",component:I}),r.a.createElement(l.b,{path:"/profile/:id",component:A}),r.a.createElement(l.b,{path:"/users",component:S}),r.a.createElement(l.b,{path:"/scoreboard",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(210),U={projects:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return Object(h.a)({},e,{projects:[].concat(Object(z.a)(e.projects),[t.project])});case"CREATE_PROJECT_ERROR":default:return e}},T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(h.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(h.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(h.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.err.message),Object(h.a)({},e,{authError:t.err.message});default:return e}},H={score:1},B=a(46),q=Object(f.c)({auth:G,project:L,firestore:B.firestoreReducer,firebase:u.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),W=a(209),J=a(47),M=a.n(J);a(404),a(407);M.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var V=M.a,K=Object(f.e)(q,Object(f.d)(Object(f.a)(W.a.withExtraArgument({getFirestore:B.getFirestore,getFirebase:u.getFirebase})),Object(B.reduxFirestore)(M.a,V))),Y={firebase:M.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:K.dispatch,createFirestoreInstance:B.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:K},r.a.createElement(u.ReactReduxFirebaseProvider,Y,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.eb1adcc5.chunk.js.map