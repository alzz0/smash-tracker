(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{212:function(e,t,a){e.exports=a(410)},217:function(e,t,a){},370:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(85),i=a.n(c),l=(a(217),a(5)),s=a(28),o=a(27),u=a.n(o),m=a(3),d=a(9),f=a(7),p=Object(f.d)(Object(m.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(d.firestoreConnect)([{collection:"users"}]))(Object(s.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},u()(e.time.toDate()).fromNow()))}))))))}))),E=a(2),b=a(210);var h=function(e){var t=e.names,a=Object(b.a)(e,["names"]),c=Object(n.useState)(!1),i=Object(E.a)(c,2),l=i[0],s=i[1],o=[];function u(e){e.preventDefault(),e.stopPropagation(),s(!l)}return o.push(r.a.createElement("div",{key:t,className:"likes-modal",style:l?{display:"block"}:{display:"none"}},r.a.createElement("div",{className:"modal-footer"},r.a.createElement("span",{className:"btn-flat",style:{color:"#fff",paddingLeft:0,fontWeight:"bold"},onClick:u},"close")),r.a.createElement("div",{className:"modal-content"},t.map((function(e,t){return r.a.createElement("li",{key:t,style:{listStyle:"none"}},e)}))))),r.a.createElement("div",{className:"popup-modal-likes ".concat(l?"":"likes-hover"),onClick:function(e){return u(e)}},!l&&"".concat(a.dislike?" Disliked":"Liked "," by ").concat(t[0]," and ").concat(t.length-1,"  ").concat(t.length>2?"others":"other"),o)},g=a(10);var v=Object(m.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}}),{dislikePost:function(e,t){var a={firstName:t.firstName,lastName:t.lastName,id:t.id};return function(t,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),l=i.firestore(),s=i.firestore.FieldValue.increment(1),o=l.collection("projects").doc(e);o.update({dislikedBy:i.firestore.FieldValue.arrayUnion(a)}),o.update({dislikes:s})}},likePost:function(e,t){var a={firstName:t.firstName,lastName:t.lastName,id:t.id};return function(t,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),l=i.firestore(),s=i.firestore.FieldValue.increment(1),o=l.collection("projects").doc(e);o.update({likedBy:i.firestore.FieldValue.arrayUnion(a)}),o.update({likes:s})}},removeDislikePost:function(e,t){var a={firstName:t.firstName,lastName:t.lastName,id:t.id};return function(t,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),l=i.firestore(),s=i.firestore.FieldValue.increment(-1),o=l.collection("projects").doc(e);o.update({dislikedBy:i.firestore.FieldValue.arrayRemove(a)}),o.update({dislikes:s})}},removeLikePost:function(e,t){var a={firstName:t.firstName,lastName:t.lastName,id:t.id};return function(t,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),l=i.firestore(),s=i.firestore.FieldValue.increment(-1),o=l.collection("projects").doc(e);o.update({likedBy:i.firestore.FieldValue.arrayRemove(a)}),o.update({likes:s})}}})((function(e){var t=e.project,a=e.dislikePost,c=e.likePost,i=e.auth,l=e.user,s=e.removeDislikePost,o=e.removeLikePost,m=Object(n.useState)(),d=Object(E.a)(m,2),f=d[0],p=d[1],b=Object(n.useState)(),g=Object(E.a)(b,2),v=g[0],N=g[1],y=Object(n.useState)(),j=Object(E.a)(y,2),O=j[0],S=j[1],k=Object(n.useState)(),C=Object(E.a)(k,2),w=C[0],F=C[1];if(Object(n.useEffect)((function(){var e=[],a=[],n=[],r=[];t.dislikedBy&&t.dislikedBy.map((function(t){e.push(t.id),a.push(" ".concat(t.firstName,"  ").concat(t.lastName))})),p(e),S(a),t.likedBy&&t.likedBy.map((function(e){r.push(e.id||e.auth.id),n.push(" ".concat(e.firstName,"  ").concat(e.lastName))})),N(r),F(n)}),[t]),w&&w.length>1)var x=r.a.createElement(h,{names:w});else x=0!=w&&" Liked by ".concat(w,"    ");if(O&&O.length>1)var P=r.a.createElement(h,{dislike:!0,names:O});else P=0!=O&&"  Disliked by ".concat(O);return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{style:{position:"absolute",right:"5px",bottom:"0"}},v&&r.a.createElement("span",{className:v.includes(i.uid)?"like-dislike-active":"like-dislike",onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),i.uid&&(f.includes(i.uid)&&s(t.id,l),v.includes(i.uid)&&i.uid?o(t.id,l):c(t.id,l))}(e)},style:{position:"absolute",right:"40px",bottom:"56px"}},r.a.createElement("i",{onClick:function(){return!i.uid&&alert("Sign in to make your opinion count ")},title:i.uid?"":"Sign in to make your opinion count",className:"material-icons thumb-icon"},"thumb_up"),t.likes),f&&r.a.createElement("span",{className:f.includes(i.uid)?"like-dislike-active":"like-dislike",style:{marginLeft:"10px",position:"absolute",right:"0",bottom:"56px"},onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),i.uid&&(v.includes(i.uid)&&o(t.id,l),f.includes(i.uid)&&i.uid?s(t.id,l):a(t.id,l))}(e)}},r.a.createElement("i",{onClick:function(){return!i.uid&&alert("Sign in to make your opinion count ")},title:i.uid?"":"Sign in to make your opinion count",className:"material-icons thumb-icon"},"thumb_down"),r.a.createElement("span",null,t.dislikes)),r.a.createElement("div",{onClick:function(e){e.preventDefault(),e.stopPropagation()}},r.a.createElement("span",null,x),r.a.createElement("span",{style:{color:"#e91e63 "}},P))),r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"},u()(t.createdAt.toDate()).calendar()),t.comment&&t.comment.length>0&&" ".concat(t.comment.length," ").concat(t.comment.length<2?"Comment":"Comments")),r.a.createElement("p",{style:{marginLeft:"24px",marginBottom:"20px",display:"inline-block"}}," "))}));var N=function(e){var t=e.projects,a=e.auth;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(l.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(v,{auth:a,project:e}))})))},y=function(e){return function(t,a){t({type:"SET_HIGHEST_SCORE",payload:e})}};var j=Object(f.d)(Object(m.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:y,setScoreSum:function(){return function(e,t,a){for(var n=a.getFirebase,r=(a.getFirestore,["5ISbQ0MaoKw9xaNhRDhg","Sm8M4QIHNWIcOIXTZ5eH"]),c=n().firestore(),i=0;i<r.length;i++)c.collection("scoreboard").doc(r[i]).get().then((function(e){return e.get("scores")}))}}}),Object(d.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,i=e.users,s=e.setHighestScore,o=e.setScoreSum,u=1;Object(n.useEffect)((function(){o()}),[]),Object(n.useEffect)((function(){s(u)}));var m=i&&i.map((function(e){return e.points}));return function(){if(m)for(var e=0;e<m.length;e++)m[e]>u&&(u=m[e])}(),Math.max(m),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{style:{textAlign:"center",margin:"20px 0 10px 0"}},r.a.createElement(l.b,{to:"/create",className:"btn-floating btn-large waves-effect waves-light red"},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement(N,{auth:a,projects:t})),r.a.createElement("div",{style:{paddingTop:"65px"},className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:i}))),r.a.createElement("p",{style:{opacity:"0.1"}},"v1.2.1"))})),O=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}};var S=Object(m.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(s.g)((function(e){return r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var k=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Login")))};var C=Object(m.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(S,{profile:a}):r.a.createElement(k,null))))})),w=a(14),F=a(59);var x=Object(f.d)(Object(m.b)((function(e,t){var a=t.match.params.id,n=e.firebase.auth.uid,r=e.firestore.data.projects,c=e.firestore.data.users,i=r?r[a]:null,l=c?c[n]:null;return{auth:e.firebase.auth,project:i,reduxProject:e.project,user:l}}),{deletePost:function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("projects").doc(e).delete()}},updateProjectContent:function(e,t){return function(a,n,r){var c=r.getFirebase;r.getFirestore;c().firestore().collection("projects").doc(t).update(e)}},addComment:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),l=i.firestore().collection("projects").doc(t),s=Date.now(),o={comment:e,commentId:s,createdAt:new Date};l.update({comment:i.firestore.FieldValue.arrayUnion(o)})}},deleteComment:function(e,t){return function(a,n,r){r.getFirebase;var c=(0,r.getFirestore)().collection("projects").doc(e);return c.get().then((function(e){return c.update({comment:e.data().comment.filter((function(e,a){return e.commentId!==t}))})}))}},editComment:function(e,t,a,n){var r={comment:{comment:"".concat(a," 89456799"),user:n},commentId:t,createdAt:new Date};return function(a,n,c){c.getFirebase;var i=(0,c.getFirestore)().collection("projects").doc(e);return i.get().then((function(e){e.data().comment.map((function(a){var n=Object(F.a)(e.data().comment).filter((function(e){return e.commentId!==t}));return i.update({comment:[].concat(Object(F.a)(n),[r])})}))}))}}}),Object(d.firestoreConnect)([{collection:"projects"},{collection:"users"}]))((function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!1),o=Object(E.a)(s,2),m=o[0],d=o[1],f=Object(n.useState)(),p=Object(E.a)(f,2),b=p[0],h=p[1],v=Object(n.useState)(),N=Object(E.a)(v,2),y=N[0],j=N[1],O=Object(n.useState)({comment:"",user:{}}),S=Object(E.a)(O,2),k=S[0],C=S[1],F=Object(n.useState)(!1),x=Object(E.a)(F,2),P=x[0],I=x[1],R=e.project,U=e.deletePost,A=e.history,D=e.updateProjectContent,G=e.auth,T=e.addComment,L=e.deleteComment,z=e.editComment,_=e.user,B=e.match,W=e.match.params.id,H=Object(n.useState)({title:"",content:""}),V=Object(E.a)(H,2),q=V[0],J=V[1];function M(e){J(Object(g.a)({},q,Object(w.a)({},e.target.id,e.target.value)))}function K(e){e.preventDefault(),G.uid&&!1===P&&k.comment.length&&(T(k,W),C({comment:""}),I(!0),setTimeout((function(){I(!1)}),6e3))}function Z(e){h(e.target.value)}function Q(e){e.preventDefault(),z(B.params.id,y,b,_),d(!1)}if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),R&&R.comment)var Y=R.comment.map((function(e,t){return r.a.createElement("div",{key:t,style:{height:"auto",minHeight:"60px"}},r.a.createElement("h6",{style:{fontSize:"15px"}},r.a.createElement("strong",null,r.a.createElement(l.b,{style:{color:"black"},to:"/profile/".concat(e.comment.user.id)},e.comment.user.firstName," ",e.comment.user.lastName," ")),u()(e.createdAt.toDate()).calendar()," ",G.uid===e.comment.user.id&&r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(t){return function(e){j(e.commentId),d(!m),h(e.comment.comment)}(e)}},"Edit"),G.uid===e.comment.user.id&&r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(t){return L(B.params.id,e.commentId)}},"Delete")),m&&e.commentId===y?r.a.createElement("form",{style:{padding:"0",margin:"0"},onSubmit:Q},r.a.createElement("input",{autoFocus:!0,value:b.replace("89456799",""),type:"text",onChange:Z})," "):r.a.createElement("div",{style:{marginTop:"0",fontSize:"16px"}},e.comment.comment.includes("89456799")?r.a.createElement("p",null,e.comment.comment.replace("89456799","")," ",r.a.createElement("span",{style:{color:"darkslategray",fontSize:"small",fontStyle:"italic"}},"Edited")," "):e.comment.comment))}));return R?!0===c?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),G.uid===R.authorId&&(D(q,W),i(!1))},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:M,type:"text",id:"title",maxLength:"100",value:q.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{style:{height:"auto"},required:!0,value:q.content,onChange:M,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Update"),r.a.createElement("button",{onClick:function(){return i(!1)},className:"btn pink lighten-1 z-depth-0"},"Cancel")))):!1===c?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},R.title),r.a.createElement("p",null,R.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",R.authorFirstName," ",R.authorLastName),r.a.createElement("div",null," ",u()(R.createdAt.toDate()).calendar())),G.uid===R.authorId&&r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){i(!c),J({title:R.title,content:R.content})}},"Edit"),r.a.createElement("button",{style:{float:"right"},className:"waves-effect waves-light btn",onClick:function(){window.confirm("Are you sure you want to delete this masterpiece ?")&&(U(W),A.push("/"))}},"Delete"))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back"),r.a.createElement("h2",null," Comments"),r.a.createElement("form",{onSubmit:function(e){return K(e)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"comment"},!1===P?"Comment":"Wait a moment before commenting again"),r.a.createElement("input",{type:"text",name:"comment",value:k.comment,onChange:function(e){return function(e){var t;C((t={},Object(w.a)(t,e.target.name,e.target.value),Object(w.a)(t,"user",_),t))}(e)}})),!G.isEmpty&&r.a.createElement("input",{required:!0,disabled:!k.comment.length,type:"submit",value:"Comment",className:"waves-effect waves-light btn"})),r.a.createElement("div",null,Y&&Y.reverse())):void 0:r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))}));var P=Object(m.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,i=Object(n.useState)({email:"",password:""}),o=Object(E.a)(i,2),u=o[0],m=o[1];if(c.uid)return r.a.createElement(s.a,{to:"/"});function d(e){m(Object(g.a)({},u,Object(w.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:d,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:d,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement(l.b,{to:"/signup"},"Dont have an account? Sign up here.")))}));var I=Object(m.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0,bio:"",createdAt:new Date})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,i=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),l=Object(E.a)(i,2),o=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(E.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(s.a,{to:"/"});function b(e){u(Object(g.a)({},o,Object(w.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),o.email.length>0&&o.password.length>0&&o.firstName.length>0&&o.lastName.length>0&&setTimeout((function(){c(o),p(!1)}),3e3)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:b,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:b,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:b,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(o.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var R=Object(m.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(g.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),l=Object(E.a)(i,2),o=l[0],u=l[1];if(!a.uid)return r.a.createElement(s.a,{to:"/signin"});function m(e){u(Object(g.a)({},o,Object(w.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",maxLength:"100",value:o.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:o.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var U=Object(f.d)(Object(m.b)((function(e){return{users:e.firestore.ordered.users}}),(function(e){return{deleteSuperUser:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("users").doc(e).update({superUser:!1})}}(t))},createSuperUser:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase;n.getFirestore,r().firestore().collection("users").doc(a).update({superUser:!0})}));var a}}})),Object(d.firestoreConnect)([{collection:"users"}]))((function(e){var t=e.users,a=e.deleteSuperUser,c=e.createSuperUser,i=Object(n.useState)(),l=Object(E.a)(i,2),s=l[0],o=l[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],f=m[1];Object(n.useEffect)((function(){var e=[];t&&t.map((function(t){!0===t.superUser&&e.push(t.id)})),o(e)}),[t]);var p=t&&t.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("li",{className:"user-list-super-profile collection-item ".concat(s&&s.includes(e.id)?"current-superuser":""),onClick:function(e){return t=e,void(s.includes(t.target.id)&&t.target.id?a(t.target.id):t.target.id&&c(t.target.id));var t},id:e.id},e.firstName," ",e.lastName," ",e.superUser&&r.a.createElement("span",{style:{fontStyle:"italic",fontWeight:"normal",marginLeft:"10px"}},"Super User")))})),b=r.a.createElement("ul",{className:"collection"},p),h=r.a.createElement("div",{className:"row control-grid"},r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement("div",{className:"row",onClick:function(){return f("setSuperUsers")}},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Add Super User")),r.a.createElement("div",{className:"card-action"}," ".concat(s&&s.length," super users")))))),r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Card Title")),r.a.createElement("div",{className:"card-action"},r.a.createElement("p",null,"sub content")))))),r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Card Title")),r.a.createElement("div",{className:"card-action"},r.a.createElement("p",null,"sub content")))))),r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Card Title")),r.a.createElement("div",{className:"card-action"},r.a.createElement("p",null,"sub content")))))));return!1===d?h:"setSuperUsers"===d?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Add / Remove Super users"),b,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return f(!1)}},"close")):void 0}));var A=Object(f.d)(Object(m.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null,auth:e.firebase.auth}}),{createbio:function(e){return console.log(e),function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=a().firebase.auth.uid;c.firestore().collection("users").doc(i).update(e)}},signOut:O}),Object(d.firestoreConnect)([{collection:"users"}]))(Object(s.g)((function(e){var t=e.user,a=e.createbio,c=e.auth,i=e.history,l=e.signOut,s=e.match,o=Object(n.useState)({bio:""}),u=Object(E.a)(o,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(E.a)(f,2),b=p[0],h=p[1],v=Object(n.useState)(!1),N=Object(E.a)(v,2),y=N[0],j=N[1];if(t)var O=1e3*t.createdAt.seconds,S=new Date(parseInt(O,10)).toString("MM/dd/yy HH:mm:ss"),k=t.sumPoints,C="".concat(t.firstName," ").concat(t.lastName),F=t.gamesPlayed,x=t.sumPoints/t.gamesPlayed||0;function P(){j(!y)}return y?r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:P},"Profile"),r.a.createElement(U,null)):r.a.createElement("div",{className:"container section project-details"},"yxHKf6gbiMVJCyW5PqLTUEDiYu23"===c.uid&&r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:P},"Control Panel"),r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Name: ",C),r.a.createElement("h4",null,"Score: ",k),r.a.createElement("h4",null,"Games Played: ",F),r.a.createElement("h4",null,"Score Average: ",t&&x.toFixed(2)),b?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),d({bio:""}),h(!1)},className:"white"},r.a.createElement("input",{value:m.bio,type:"text",onChange:function(e){d(Object(g.a)({},m,Object(w.a)({},e.target.name,e.target.value)))},name:"bio",maxLength:"100",placeholder:t.bio||" Update Bio"}),r.a.createElement("div",{className:"input-field",style:{display:"inline"}},r.a.createElement("button",{style:{marginRight:"10px"},className:"btn pink lighten-1 z-depth-0"},"Update!"),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",onClick:function(){return h(!1)}},"Cancel")))):r.a.createElement("h4",null,"Bio: ",t&&t.bio," ",r.a.createElement("span",{style:{marginLeft:"10px"}},t&&t.id?c.uid===t.id&&t.id&&r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){c.uid===t.id&&h(!b)},className:"material-icons"},"mode_edit"):null))),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("p",{className:"gray-text",style:{fontSize:"18px"}},"Joined the party on"," ",void 0!==S&&S.slice(0,16))),r.a.createElement("span",{className:"card-title"}))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return i.goBack()}},"Back"),s.params.id===c.uid&&r.a.createElement("span",{className:" waves-effect waves-light btn",onClick:l},"Log Out"))}))),D=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"user"},"Search by first name"),r.a.createElement("input",{type:"text",id:"user",onChange:e.handleInput})))};a(370);var G=Object(f.d)(Object(m.b)((function(e){var t=e.firestore.ordered.superusers&&e.firestore.ordered.superusers.map((function(e){return e.user}));return{users:e.firestore.ordered.users,auth:e.firebase.auth,runningGame:e.firestore.ordered.runningGame,superusers:t}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),l=c.firestore.FieldValue.increment(1);i.collection("users").doc(a).update({points:l})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),l=c.firestore.FieldValue.increment(-1);i.collection("users").doc(a).update({points:l})}));var a},setHighestScore:function(t){return e(y(t))},calcScore:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=r().firestore(),l=c.collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8");c.collection("scoreboard").add({scores:e,createdAt:new Date}).then((function(){i.collection("users").get().then((function(e){e.docs.forEach((function(e){var t=e.get("points"),a=e.get("sumPoints"),n=e.get("gamesPlayed"),r=(a+t)/(n+1);t>0&&(r>=8?e.ref.update({tier:"A"}):r<8&&r>=5?e.ref.update({tier:"B"}):e.ref.update({tier:"C"}),e.ref.update({sumPoints:a+t,gamesPlayed:n+1,points:0}))}))}))})),l.update({runningGame:!1})}}(t))},startGame:function(){return e((function(e,t,a){a.getFirebase,(0,a.getFirestore)().collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8").update({runningGame:!0})}))},cancelStartGame:function(){return e((function(e,t,a){a.getFirebase,(0,a.getFirestore)().collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8").update({runningGame:!1})}))}}})),Object(d.firestoreConnect)([{collection:"runningGame"},{collection:"users",orderBy:"points"},{collection:"superusers"}]))(Object(s.g)((function(e){e.setHighestScore;var t=e.cancelStartGame,a=e.startGame,c=e.users,i=e.runningGame,s=e.incrementPoint,o=e.decrementPoint,u=e.auth,m=e.calcScore,d=(e.superusers,c&&Object.entries(c)),f=Object(n.useState)(),p=Object(E.a)(f,2),b=p[0],h=p[1],g=Object(n.useState)(""),v=Object(E.a)(g,2),N=v[0],y=v[1],j=Object(n.useState)(),O=Object(E.a)(j,2),S=O[0],k=O[1],C=i&&i[0].runningGame;if(Object(n.useEffect)((function(){var e=[];!function(){var e=d&&d.sort((function(e,t){return e[1].sumPoints-t[1].sumPoints}));k(e)}(),c&&c.map((function(t){t.superUser&&e.push(t.id)})),h(e)}),[c]),!0===C)var w=d&&d.filter((function(e){return e[1].firstName.toLowerCase().includes(N.toLowerCase())}));else w=S&&S.filter((function(e){return e[1].firstName.toLowerCase().includes(N.toLowerCase())}));var F=w&&w.reverse().map((function(e,t){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(l.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},0===t?r.a.createElement("i",{style:{color:"gold",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):1===t?r.a.createElement("i",{style:{color:"#aaa9ad",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):2===t?r.a.createElement("i",{style:{color:"#b08d57",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):"",r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"tier-label ".concat("A"===e[1].tier?"a-tier":"B"===e[1].tier?"b-tier":"C"===e[1].tier?"c-tier":"")},e[1].tier),r.a.createElement("span",{className:"card-title custom-card ".concat(0===t?"gold":1===t?"silver":2===t?"bronze":"")},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,C?"Points ".concat(e[1].points):"Total points ".concat(e[1].sumPoints))))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return o(e[1].id)},disabled:!(b&&b.includes(u.uid)&&e[1].points>0)},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:!(b&&b.includes(u.uid)&&C),className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return s(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))}));return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(D,{handleInput:function(e){e.preventDefault(),y(e.target.value)}}),r.a.createElement("div",{className:"row"},F),r.a.createElement("span",{style:{margin:"40px"}},r.a.createElement("button",{disabled:!b||!b.includes(u.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){return function(e){e.preventDefault();for(var t=0;t<c.length;t++)if(c[t].points>0){window.confirm("Are you sure?")&&m(c);break}}(e)}},"End Game"),r.a.createElement("button",{disabled:!b||!b.includes(u.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){C?t(e):function(e){e.preventDefault(),a()}(e)}},C?"Cancel Game":"Start Game")))})));var T=Object(f.d)(Object(m.b)((function(e){return{scoreboard:e.firestore.ordered.scoreboard,users:e.firestore.ordered.users}})),Object(d.firestoreConnect)([{collection:"scoreboard",orderBy:["createdAt","desc"]},{collection:"users"}]))((function(e){var t=e.scoreboard,a=e.users,c=Object(n.useState)(),i=Object(E.a)(c,2),l=i[0],s=i[1],o=Object(n.useState)(!1),m=Object(E.a)(o,2),d=m[0],f=m[1],p=Object(n.useState)(!0),b=Object(E.a)(p,2),h=b[0],g=b[1],v=[],N=[];function y(e){if("averagePoints"===e){var t=a&&a.slice().sort((function(e,t){if(e.gamesPlayed>0)return e.sumPoints/e.gamesPlayed<t.sumPoints/t.gamesPlayed?1:-1}));f(t)}else{var n=a&&a.slice().sort((function(e,t){return e.sumPoints<t.sumPoints?1:-1}));f(n)}}function j(e){t&&t.map((function(t){N.push(t);var a=N[0].id;t.id===e&&(t.scores.map((function(e){v.push(e)})),e&&s(v)),t.id!==a||e||(t.scores.map((function(e){v.push(e)})),s(v))}))}return Object(n.useEffect)((function(){y()}),[a]),Object(n.useEffect)((function(){j()}),[t]),t&&t.map((function(e){N.push(e)})),h?r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return g(!1)}}," ","History"),r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return function(e){y(e.target.value)}(e)},defaultValue:""},r.a.createElement("option",{disabled:!0,value:""},"Sort results"),r.a.createElement("option",{key:"sumPoints",id:"sumPoints",value:"sumPoints"},"Total points"),r.a.createElement("option",{key:"averagePoints",id:"averagePoints",value:"averagePoints"},"Average points")),r.a.createElement("table",{className:"striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Average"),r.a.createElement("th",null,"Total Games Played"),r.a.createElement("th",{id:"tier-hover",title:"Tier A: Average greater than or equal to 8. Tier B: Average Less than 8 and greater than or equal to 5. Tier C Average less than 5 "},"Tier")),d&&d.map((function(e,t){var a=e.sumPoints/e.gamesPlayed,c=0===t?r.a.createElement("span",{style:{color:"#FAFAD2"}},"Champion"):1===t?"Runner Up":t;return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,c),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.sumPoints),r.a.createElement("td",null,a.toFixed(2)||0),r.a.createElement("td",null,e.gamesPlayed),r.a.createElement("td",null,e.tier)))}))))):r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return g(!0)}}," ","highScores"),r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return j(e.target.value)}},N&&N.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},u()(e.createdAt.toDate()).calendar())}))),r.a.createElement("table",{className:"striped "},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points")),l&&l.reverse().map((function(e,t){var a=0===t?r.a.createElement("span",{style:{color:"#FAFAD2"}},"Champion"):1===t?"Runner Up":t;return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,e.firstName),r.a.createElement("th",null,e.points)))})))))}));var L=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:j}),r.a.createElement(s.b,{path:"/project/:id",component:x}),r.a.createElement(s.b,{path:"/signin",component:P}),r.a.createElement(s.b,{path:"/signup",component:I}),r.a.createElement(s.b,{path:"/create",component:R}),r.a.createElement(s.b,{path:"/profile/:id",component:A}),r.a.createElement(s.b,{path:"/users",component:G}),r.a.createElement(s.b,{path:"/scoreboard",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={projects:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return Object(g.a)({},e,{projects:[].concat(Object(F.a)(e.projects),[t.project])});case"CREATE_PROJECT_ERROR":default:return e}},B={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(g.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.err.message),Object(g.a)({},e,{authError:t.err.message});default:return e}},H={score:1},V=a(46),q=Object(f.c)({auth:W,project:_,firestore:V.firestoreReducer,firebase:d.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),J=a(211),M=a(47),K=a.n(M);a(405),a(408);K.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var Z=K.a,Q=Object(f.e)(q,Object(f.d)(Object(f.a)(J.a.withExtraArgument({getFirestore:V.getFirestore,getFirebase:d.getFirebase})),Object(V.reduxFirestore)(K.a,Z))),Y={firebase:K.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:Q.dispatch,createFirestoreInstance:V.createFirestoreInstance};i.a.render(r.a.createElement(m.a,{store:Q},r.a.createElement(d.ReactReduxFirebaseProvider,Y,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.717fb2aa.chunk.js.map