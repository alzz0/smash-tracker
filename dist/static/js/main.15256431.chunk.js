(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{212:function(e,t,a){e.exports=a(410)},217:function(e,t,a){},370:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),i=a.n(c),o=(a(217),a(5)),l=a(28),s=a(3),u=a(10),m=a(23),d=a.n(m),f=a(7),p=Object(f.d)(Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},d()(e.time.toDate()).fromNow()))}))))))}))),h=a(4),b=a(209);var E=function(e){var t=e.names,a=Object(b.a)(e,["names"]),c=Object(n.useState)(!1),i=Object(h.a)(c,2),o=i[0],l=i[1],s=[];function u(e){e.preventDefault(),e.stopPropagation(),l(!o)}return s.push(r.a.createElement("div",{className:"likes-modal",style:o?{display:"block"}:{display:"none"}},r.a.createElement("div",{className:"modal-footer"},r.a.createElement("span",{className:"btn-flat",style:{color:"#fff"},onClick:u},"close")),r.a.createElement("div",{className:"modal-content"},t.map((function(e,t){return r.a.createElement("li",{key:t,style:{listStyle:"none"}},e)}))))),r.a.createElement("div",{onClick:function(e){return u(e)}},"".concat(a.dislike?" Disliked":"Liked "," by ").concat(t[0]," and ").concat(t.length-1,"  ").concat(t.length>2?"others":"other"),s)},g=a(9);var v=Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}}),{dislikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(1),s=o.collection("projects").doc(e);s.update({dislikedBy:i.firestore.FieldValue.arrayUnion({auth:t})}),s.update({dislikes:l})}},likePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c(),l=(i(),o.firestore()),s=o.firestore.FieldValue.increment(1),u=l.collection("projects").doc(e);u.update({likedBy:o.firestore.FieldValue.arrayUnion({auth:t})}),u.update({likes:s})}},removeDislikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(-1),s=o.collection("projects").doc(e);s.update({dislikedBy:i.firestore.FieldValue.arrayRemove({auth:t})}),s.update({dislikes:l})}},removeLikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(-1),s=o.collection("projects").doc(e);s.update({likedBy:i.firestore.FieldValue.arrayRemove({auth:t})}),s.update({likes:l})}}})((function(e){var t=e.project,a=e.dislikePost,c=e.likePost,i=e.auth,o=e.user,l=e.removeDislikePost,s=e.removeLikePost,u=Object(n.useState)(),m=Object(h.a)(u,2),f=m[0],p=m[1],b=Object(n.useState)(),g=Object(h.a)(b,2),v=g[0],N=g[1],j=Object(n.useState)(),y=Object(h.a)(j,2),O=y[0],S=y[1],k=Object(n.useState)(),C=Object(h.a)(k,2),w=C[0],F=C[1];if(Object(n.useEffect)((function(){var e=[],a=[],n=[],r=[];t.dislikedBy&&t.dislikedBy.map((function(t){e.push(t.auth.id),a.push(" ".concat(t.auth.firstName,"  ").concat(t.auth.lastName))})),p(e),S(a),t.likedBy&&t.likedBy.map((function(e){r.push(e.auth.id),n.push(" ".concat(e.auth.firstName,"  ").concat(e.auth.lastName))})),N(r),F(n)}),[t]),w&&w.length>1)var x=r.a.createElement(E,{names:w});else x=0!=w&&" Liked by ".concat(w,"    ");if(O&&O.length>1)var P=r.a.createElement(E,{dislike:!0,names:O});else P=0!=O&&"  Disliked by ".concat(O);return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{style:{position:"absolute",right:"5px",bottom:"0"}},r.a.createElement("span",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),f.includes(i.uid)&&i.uid&&l(t.id,o),v.includes(i.uid)&&i.uid?s(t.id,o):c(t.id,o)}(e)},style:{position:"absolute",right:"40px",bottom:"56px"}},r.a.createElement("i",{className:"material-icons"},"thumb_up"),t.likes),r.a.createElement("span",{style:{marginLeft:"10px",position:"absolute",right:"0",bottom:"56px"},onClick:function(e){return function(e){v.includes(i.uid)&&i.uid&&s(t.id,o),e.preventDefault(),e.stopPropagation(),f.includes(i.uid)&&i.uid?l(t.id,o):a(t.id,o)}(e)}},r.a.createElement("i",{className:"material-icons"},"thumb_down"),t.dislikes),r.a.createElement("div",{onClick:function(e){e.preventDefault(),e.stopPropagation()}},r.a.createElement("span",null,x),r.a.createElement("span",{style:{color:"red"}},P))),r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"},d()(t.createdAt.toDate()).calendar()),t.comment&&" ".concat(t.comment.length," Comments")),r.a.createElement("p",{style:{marginLeft:"24px",marginBottom:"20px",display:"inline-block"}}," "))}));var N=function(e){var t=e.projects,a=e.auth;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(o.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(v,{auth:a,project:e}))})))},j=function(e){return function(t,a){t({type:"SET_HIGHEST_SCORE",payload:e})}};var y=Object(f.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:j}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,i=e.users,o=e.setHighestScore,l=1;Object(n.useEffect)((function(){o(l)}));var s=i&&i.map((function(e){return e.points}));return function(){if(s)for(var e=0;e<s.length;e++)s[e]>l&&(l=s[e])}(),Math.max(s),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(N,{auth:a,projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:i}))),"v1.0.1")})),O=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}},S=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"user"},"Search by first name"),r.a.createElement("input",{type:"text",id:"user",onChange:e.handleInput})))},k=(a(370),["yxHKf6gbiMVJCyW5PqLTUEDiYu23","zDf3HYWc7AWE1xlHiAic62AGdMs1","nQv2SwBbtcdJGKRyHqoEKZMMGnn2"]);var C=Object(f.d)(Object(s.b)((function(e){return{users:e.firestore.ordered.users,auth:e.firebase.auth}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("users").doc(a).update({points:o})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(-1);i.collection("users").doc(a).update({points:o})}));var a},setHighestScore:function(t){return e(j(t))},calcScore:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=r().firestore();c.collection("scoreboard").add({scores:e,createdAt:new Date}).then((function(){i.collection("users").get().then((function(e){e.docs.forEach((function(e){e.ref.update({points:0})}))}))}))}}(t))}}})),Object(u.firestoreConnect)([{collection:"users",orderBy:["points"]}]))(Object(l.g)((function(e){e.setHighestScore;var t=e.users,a=e.incrementPoint,c=e.decrementPoint,i=e.auth,l=e.calcScore,s=t&&Object.entries(t),u=Object(n.useState)(0),m=Object(h.a)(u,2),d=(m[0],m[1],Object(n.useState)("")),f=Object(h.a)(d,2),p=f[0],b=f[1],E=s&&s.filter((function(e){return e[1].firstName.toLowerCase().includes(p.toLowerCase())})),g=E&&E.reverse().map((function(e,t){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(o.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},0===t?r.a.createElement("i",{style:{color:"gold",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):1===t?r.a.createElement("i",{style:{color:"#aaa9ad",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):2===t?r.a.createElement("i",{style:{color:"#b08d57",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):"",r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title custom-card ".concat(0===t?"gold":1===t?"silver":2===t?"bronze":"")},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,"Points: ",e[1].points)))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return c(e[1].id)},disabled:!(k.includes(i.uid)&&e[1].points>0)},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:!k.includes(i.uid),className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return a(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))}));return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(S,{handleInput:function(e){e.preventDefault(),b(e.target.value)}}),r.a.createElement("div",{className:"row"},g),r.a.createElement("span",{style:{margin:"40px"}},r.a.createElement("button",{disabled:!k.includes(i.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){return function(e){e.preventDefault(),t.map((function(e){e.points>0&&(window.confirm("Are you sure?")&&l(t))}))}(e)}},"End Game")))})));var w=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e,t){return r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var F=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/signin"},"Login")))};var x=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(w,{profile:a}):r.a.createElement(F,null))))})),P=a(14);var R=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firebase.auth.uid,r=e.firestore.data.projects,c=e.firestore.data.users,i=r?r[a]:null,o=c?c[n]:null;return{auth:e.firebase.auth,project:i,reduxProject:e.project,user:o}}),{deletePost:function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("projects").doc(e).delete()}},updateProjectContent:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c();i(),n().firebase.profile,n().firebase.auth.uid;o.firestore().collection("projects").doc(t).update(e)}},addComment:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c(),l=(i(),n().firebase.profile,n().firebase.auth.uid,o.firestore().collection("projects").doc(t)),s={comment:e,createdAt:new Date};l.update({comment:o.firestore.FieldValue.arrayUnion(s)})}}}),Object(u.firestoreConnect)([{collection:"projects"},{collection:"users"}]))((function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)({comment:"",user:{}}),s=Object(h.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(!1),p=Object(h.a)(f,2),b=p[0],E=p[1],v=e.project,N=e.deletePost,j=e.history,y=e.updateProjectContent,O=e.auth,S=e.addComment,k=e.user,C=e.match.params.id,w=Object(n.useState)({title:"",content:""}),F=Object(h.a)(w,2),x=F[0],R=F[1];function I(e){R(Object(g.a)({},x,Object(P.a)({},e.target.id,e.target.value)))}function D(e){e.preventDefault(),O.uid&&!1===b&&u.comment.length&&(S(u,C),m({comment:""}),E(!0),setTimeout((function(){E(!1)}),6e3))}if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),v&&v.comment)var A=v.comment.map((function(e,t){return r.a.createElement("div",{key:t,style:{height:"auto",minHeight:"60px"}},r.a.createElement("h6",{style:{fontSize:"15px"}},r.a.createElement("strong",null,r.a.createElement(o.b,{style:{color:"black"},to:"/profile/".concat(e.comment.user.id)},e.comment.user.firstName," ",e.comment.user.lastName))," ",d()(e.createdAt.toDate()).calendar()),r.a.createElement("p",{style:{marginTop:"0",fontSize:"16px"}},e.comment.comment))}));return v?!0===c?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O.uid===v.authorId&&(y(x,C),i(!1))},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:I,type:"text",id:"title",maxLength:"100",value:x.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{style:{height:"auto"},required:!0,value:x.content,onChange:I,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Update"),r.a.createElement("button",{onClick:function(){return i(!1)},className:"btn pink lighten-1 z-depth-0"},"Cancel")))):!1===c?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},v.title),r.a.createElement("p",null,v.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",v.authorFirstName," ",v.authorLastName),r.a.createElement("div",null," ",d()(v.createdAt.toDate()).calendar())),O.uid===v.authorId&&r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){i(!c),R({title:v.title,content:v.content})}},"Edit"),r.a.createElement("button",{style:{float:"right"},className:"waves-effect waves-light btn",onClick:function(){window.confirm("Are you sure you want to delete this masterpiece ?")&&(N(C),j.push("/"))}},"Delete"))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back"),r.a.createElement("h2",null," Comments"),r.a.createElement("form",{onSubmit:function(e){return D(e)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"comment"},!1===b?"Comment":"Wait a moment before commenting again"),r.a.createElement("input",{type:"text",name:"comment",value:u.comment,onChange:function(e){return function(e){var t;m((t={},Object(P.a)(t,e.target.name,e.target.value),Object(P.a)(t,"user",k),t))}(e)}})),!O.isEmpty&&r.a.createElement("input",{required:!0,disabled:!u.comment.length,type:"submit",value:"Comment",className:"waves-effect waves-light btn"})),r.a.createElement("div",null,A&&A.reverse())):void 0:r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))}));var I=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,i=Object(n.useState)({email:"",password:""}),s=Object(h.a)(i,2),u=s[0],m=s[1];if(c.uid)return r.a.createElement(l.a,{to:"/"});function d(e){m(Object(g.a)({},u,Object(P.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:d,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:d,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement(o.b,{to:"/signup"},"Dont have an account? Sign up here.")))}));var D=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0,bio:"",createdAt:new Date})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,i=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),o=Object(h.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(h.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(l.a,{to:"/"});function b(e){u(Object(g.a)({},s,Object(P.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),s.email.length>0&&s.password.length>0&&s.firstName.length>0&&s.lastName.length>0&&setTimeout((function(){c(s),p(!1)}),3e3)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:b,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:b,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(s.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var A=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(g.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),o=Object(h.a)(i,2),s=o[0],u=o[1];if(!a.uid)return r.a.createElement(l.a,{to:"/signin"});function m(e){u(Object(g.a)({},s,Object(P.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",maxLength:"100",value:s.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:s.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var L=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null,auth:e.firebase.auth}}),{createbio:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=(c(),a().firebase.profile,a().firebase.auth.uid);i.firestore().collection("users").doc(o).update(e)}},signOut:O}),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e){var t=e.user,a=e.createbio,c=e.auth,i=e.history,o=e.signOut,l=e.match,s=Object(n.useState)({bio:""}),u=Object(h.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(h.a)(f,2),b=p[0],E=p[1];if(t)var v=1e3*t.createdAt.seconds,N=new Date(parseInt(v,10)).toString("MM/dd/yy HH:mm:ss");return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Name: ",t&&t.firstName," ",t&&t.lastName),r.a.createElement("h4",null,"Score: ",t&&t.points),b?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),d({bio:""}),E(!1)},className:"white"},r.a.createElement("input",{value:m.bio,type:"text",onChange:function(e){d(Object(g.a)({},m,Object(P.a)({},e.target.name,e.target.value)))},name:"bio",maxLength:"100",placeholder:t.bio||" Update Bio"}),r.a.createElement("div",{className:"input-field",style:{display:"inline"}},r.a.createElement("button",{style:{marginRight:"10px"},className:"btn pink lighten-1 z-depth-0"},"Update!"),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",onClick:function(){return E(!1)}},"Cancel")))):r.a.createElement("h4",null,"Bio: ",t&&t.bio," ",r.a.createElement("span",{style:{marginLeft:"10px"}},t&&t.id?c.uid===t.id&&t.id&&r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){c.uid===t.id&&E(!b)},className:"material-icons"},"mode_edit"):null))),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("p",{className:"gray-text",style:{fontSize:"18px"}},"Joined the party on"," ",void 0!==N&&N.slice(0,16))),r.a.createElement("span",{className:"card-title"}))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return i.goBack()}},"Back"),l.params.id===c.uid&&r.a.createElement("a",{className:" waves-effect waves-light btn",onClick:o},"Log Out"))})));var U=Object(f.d)(Object(s.b)((function(e){return{scoreboard:e.firestore.ordered.scoreboard}})),Object(u.firestoreConnect)([{collection:"scoreboard",orderBy:["createdAt","desc"]}]))((function(e){var t=e.scoreboard,a=Object(n.useState)(),c=Object(h.a)(a,2),i=c[0],o=c[1],l=[],s=[];function u(e){t&&t.map((function(t){s.push(t);var a=s[0].id;t.id===e&&(t.scores.map((function(e){l.push(e)})),e&&o(l)),t.id!==a||e||(t.scores.map((function(e){l.push(e)})),o(l))}))}return Object(n.useEffect)((function(){u()}),[t]),t&&t.map((function(e){s.push(e)})),r.a.createElement(n.Fragment,null,r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return u(e.target.value)}},s&&s.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},d()(e.createdAt.toDate()).calendar())}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points")),i&&i.reverse().map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("th",null,e.points)))}))))}));var _=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:y}),r.a.createElement(l.b,{path:"/project/:id",component:R}),r.a.createElement(l.b,{path:"/signin",component:I}),r.a.createElement(l.b,{path:"/signup",component:D}),r.a.createElement(l.b,{path:"/create",component:A}),r.a.createElement(l.b,{path:"/profile/:id",component:L}),r.a.createElement(l.b,{path:"/users",component:C}),r.a.createElement(l.b,{path:"/scoreboard",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(211),B={projects:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return Object(g.a)({},e,{projects:[].concat(Object(z.a)(e.projects),[t.project])});case"CREATE_PROJECT_ERROR":default:return e}},G={authError:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(g.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.err.message),Object(g.a)({},e,{authError:t.err.message});default:return e}},V={score:1},q=a(46),W=Object(f.c)({auth:H,project:T,firestore:q.firestoreReducer,firebase:u.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),J=a(210),M=a(47),K=a.n(M);a(405),a(408);K.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var Y=K.a,Q=Object(f.e)(W,Object(f.d)(Object(f.a)(J.a.withExtraArgument({getFirestore:q.getFirestore,getFirebase:u.getFirebase})),Object(q.reduxFirestore)(K.a,Y))),Z={firebase:K.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:Q.dispatch,createFirestoreInstance:q.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:Q},r.a.createElement(u.ReactReduxFirebaseProvider,Z,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.15256431.chunk.js.map