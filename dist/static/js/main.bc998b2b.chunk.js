(this.webpackJsonpsmashbros=this.webpackJsonpsmashbros||[]).push([[0],{212:function(e,t,a){e.exports=a(410)},217:function(e,t,a){},370:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),i=a.n(c),o=(a(217),a(5)),l=a(28),s=a(4),u=a(10),m=a(23),d=a.n(m),f=a(7),p=Object(f.d)(Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}})),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e,t,a){var n=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-content"},"Notifications"),r.a.createElement("ul",{className:"notifications"},n&&n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{pathname:"/profile/".concat(e.userId),state:{user:e}},className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},d()(e.time.toDate()).fromNow()))}))))))}))),b=a(2),h=a(209);var E=function(e){var t=e.names,a=Object(h.a)(e,["names"]),c=Object(n.useState)(!1),i=Object(b.a)(c,2),o=i[0],l=i[1],s=[];function u(e){e.preventDefault(),e.stopPropagation(),l(!o)}return s.push(r.a.createElement("div",{key:t,className:"likes-modal",style:o?{display:"block"}:{display:"none"}},r.a.createElement("div",{className:"modal-footer"},r.a.createElement("span",{className:"btn-flat",style:{color:"#fff",paddingLeft:0,fontWeight:"bold"},onClick:u},"close")),r.a.createElement("div",{className:"modal-content"},t.map((function(e,t){return r.a.createElement("li",{key:t,style:{listStyle:"none"}},e)}))))),r.a.createElement("div",{className:"popup-modal-likes ".concat(o?"":"likes-hover"),onClick:function(e){return u(e)}},!o&&"".concat(a.dislike?" Disliked":"Liked "," by ").concat(t[0]," and ").concat(t.length-1,"  ").concat(t.length>2?"others":"other"),s)},g=a(9);var v=Object(s.b)((function(e,t){var a=t.auth.uid,n=e.firestore.data.users;return{user:n?n[a]:null}}),{dislikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(1),s=o.collection("projects").doc(e);s.update({dislikedBy:i.firestore.FieldValue.arrayUnion({auth:t})}),s.update({dislikes:l})}},likePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c(),l=(i(),o.firestore()),s=o.firestore.FieldValue.increment(1),u=l.collection("projects").doc(e);u.update({likedBy:o.firestore.FieldValue.arrayUnion({auth:t})}),u.update({likes:s})}},removeDislikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(-1),s=o.collection("projects").doc(e);s.update({dislikedBy:i.firestore.FieldValue.arrayRemove({auth:t})}),s.update({dislikes:l})}},removeLikePost:function(e,t){return function(a,n,r){var c=r.getFirebase,i=(r.getFirestore,c()),o=i.firestore(),l=i.firestore.FieldValue.increment(-1),s=o.collection("projects").doc(e);s.update({likedBy:i.firestore.FieldValue.arrayRemove({auth:t})}),s.update({likes:l})}}})((function(e){var t=e.project,a=e.dislikePost,c=e.likePost,i=e.auth,o=e.user,l=e.removeDislikePost,s=e.removeLikePost,u=Object(n.useState)(),m=Object(b.a)(u,2),f=m[0],p=m[1],h=Object(n.useState)(),g=Object(b.a)(h,2),v=g[0],N=g[1],y=Object(n.useState)(),j=Object(b.a)(y,2),O=j[0],S=j[1],k=Object(n.useState)(),C=Object(b.a)(k,2),F=C[0],w=C[1];if(Object(n.useEffect)((function(){var e=[],a=[],n=[],r=[];t.dislikedBy&&t.dislikedBy.map((function(t){e.push(t.auth.id),a.push(" ".concat(t.auth.firstName,"  ").concat(t.auth.lastName))})),p(e),S(a),t.likedBy&&t.likedBy.map((function(e){r.push(e.auth.id),n.push(" ".concat(e.auth.firstName,"  ").concat(e.auth.lastName))})),N(r),w(n)}),[t]),F&&F.length>1)var P=r.a.createElement(E,{names:F});else P=0!=F&&" Liked by ".concat(F,"    ");if(O&&O.length>1)var x=r.a.createElement(E,{dislike:!0,names:O});else x=0!=O&&"  Disliked by ".concat(O);return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{style:{position:"absolute",right:"5px",bottom:"0"}},v&&r.a.createElement("span",{className:v.includes(i.uid)?"like-dislike-active":"like-dislike",onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),i.uid&&(f.includes(i.uid)&&l(t.id,o),v.includes(i.uid)&&i.uid?s(t.id,o):c(t.id,o))}(e)},style:{position:"absolute",right:"40px",bottom:"56px"}},r.a.createElement("i",{onClick:function(){return!i.uid&&alert("Sign in to make your opinion count ")},title:i.uid?"":"Sign in to make your opinion count",className:"material-icons thumb-icon"},"thumb_up"),t.likes),f&&r.a.createElement("span",{className:f.includes(i.uid)?"like-dislike-active":"like-dislike",style:{marginLeft:"10px",position:"absolute",right:"0",bottom:"56px"},onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation(),i.uid&&(v.includes(i.uid)&&s(t.id,o),f.includes(i.uid)&&i.uid?l(t.id,o):a(t.id,o))}(e)}},r.a.createElement("i",{onClick:function(){return!i.uid&&alert("Sign in to make your opinion count ")},title:i.uid?"":"Sign in to make your opinion count",className:"material-icons thumb-icon"},"thumb_down"),r.a.createElement("span",null,t.dislikes)),r.a.createElement("div",{onClick:function(e){e.preventDefault(),e.stopPropagation()}},r.a.createElement("span",null,P),r.a.createElement("span",{style:{color:"#e91e63 "}},x))),r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"},d()(t.createdAt.toDate()).calendar()),t.comment&&" ".concat(t.comment.length," ").concat(t.comment.length<2?"Comment":"Comments")),r.a.createElement("p",{style:{marginLeft:"24px",marginBottom:"20px",display:"inline-block"}}," "))}));var N=function(e){var t=e.projects,a=e.auth;return r.a.createElement("div",{className:"project-list seciton"},t&&t.map((function(e){return r.a.createElement(o.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(v,{auth:a,project:e}))})))},y=function(e){return function(t,a){t({type:"SET_HIGHEST_SCORE",payload:e})}};var j=Object(f.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,users:e.firestore.ordered.users,highestScore:e.hightestScore.score}}),{setHighestScore:y,setScoreSum:function(){return function(e,t,a){for(var n=a.getFirebase,r=(a.getFirestore,["5ISbQ0MaoKw9xaNhRDhg","Sm8M4QIHNWIcOIXTZ5eH"]),c=n().firestore(),i=0;i<r.length;i++)c.collection("scoreboard").doc(r[i]).get().then((function(e){e.get("scores")}))}}}),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,c=e.notifications,i=e.users,o=e.setHighestScore,l=e.setScoreSum,s=1;Object(n.useEffect)((function(){l()}),[]),Object(n.useEffect)((function(){o(s)}));var u=i&&i.map((function(e){return e.points}));return function(){if(u)for(var e=0;e<u.length;e++)u[e]>s&&(s=u[e])}(),Math.max(u),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(N,{auth:a,projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(p,{notifications:c,auth:a,users:i}))),r.a.createElement("p",{style:{opacity:"0.1"}},"v1.1.0"))})),O=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}},S=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"user"},"Search by first name"),r.a.createElement("input",{type:"text",id:"user",onChange:e.handleInput})))},k=(a(370),["yxHKf6gbiMVJCyW5PqLTUEDiYu23","zDf3HYWc7AWE1xlHiAic62AGdMs1","nQv2SwBbtcdJGKRyHqoEKZMMGnn2"]);var C=Object(f.d)(Object(s.b)((function(e){return{users:e.firestore.ordered.users,auth:e.firebase.auth,runningGame:e.firestore.ordered.runningGame}}),(function(e){return{incrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(1);i.collection("users").doc(a).update({points:o})}));var a},decrementPoint:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=c.firestore(),o=c.firestore.FieldValue.increment(-1);i.collection("users").doc(a).update({points:o})}));var a},setHighestScore:function(t){return e(y(t))},calcScore:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=r().firestore(),o=c.collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8");c.collection("scoreboard").add({scores:e,createdAt:new Date}).then((function(){i.collection("users").get().then((function(e){e.docs.forEach((function(e){var t=e.get("points"),a=e.get("sumPoints"),n=e.get("gamesPlayed");t>0&&e.ref.update({sumPoints:a+t,gamesPlayed:n+1,points:0})}))}))})),o.update({runningGame:!1})}}(t))},startGame:function(){return e((function(e,t,a){a.getFirebase,(0,a.getFirestore)().collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8").update({runningGame:!0})}))},cancelStartGame:function(){return e((function(e,t,a){a.getFirebase,(0,a.getFirestore)().collection("runningGame").doc("ZFgGoW0zylu7WjoK3sb8").update({runningGame:!1})}))}}})),Object(u.firestoreConnect)([{collection:"runningGame"},{collection:"users",orderBy:"points"}]))(Object(l.g)((function(e){e.setHighestScore;var t=e.cancelStartGame,a=e.startGame,c=e.users,i=e.runningGame,l=e.incrementPoint,s=e.decrementPoint,u=e.auth,m=e.calcScore,d=c&&Object.entries(c),f=Object(n.useState)(0),p=Object(b.a)(f,2),h=(p[0],p[1],Object(n.useState)("")),E=Object(b.a)(h,2),g=E[0],v=E[1],N=Object(n.useState)(!1),y=Object(b.a)(N,2),j=(y[0],y[1],Object(n.useState)(!1)),O=Object(b.a)(j,2),C=(O[0],O[1],Object(n.useState)()),F=Object(b.a)(C,2),w=F[0],P=F[1],x=i&&i[0].runningGame;if(Object(n.useEffect)((function(){!function(){var e=d&&d.sort((function(e,t){return e[1].sumPoints-t[1].sumPoints}));P(e)}()}),[c]),!0===x)var R=d&&d.filter((function(e){return e[1].firstName.toLowerCase().includes(g.toLowerCase())}));else R=w&&w.filter((function(e){return e[1].firstName.toLowerCase().includes(g.toLowerCase())}));var G=R&&R.reverse().map((function(e,t){return r.a.createElement("div",{className:"col s12 m6",key:e[1].id},r.a.createElement(o.b,{key:e[1].id,to:"/profile/".concat(e[1].id)},r.a.createElement("div",{className:"card z-depth-0 project-summary"},0===t?r.a.createElement("i",{style:{color:"gold",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):1===t?r.a.createElement("i",{style:{color:"#aaa9ad",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):2===t?r.a.createElement("i",{style:{color:"#b08d57",position:"absolute",right:"0",fontSize:"65px"},className:"material-icons"},"star"):"",r.a.createElement("div",{style:{height:"200px"},className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title custom-card ".concat(0===t?"gold":1===t?"silver":2===t?"bronze":"")},e[1].firstName," ",e[1].lastName,r.a.createElement("p",{style:{fontSize:"16px",color:"gray",fontWeight:"400"}},"Bio: ",e[1].bio)),r.a.createElement("p",null,"Points: ",e[1].points)))),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return s(e[1].id)},disabled:!(k.includes(u.uid)&&e[1].points>0)},r.a.createElement("i",{className:" material-icons"},"exposure_neg_1")),r.a.createElement("button",{disabled:!k.includes(u.uid)||!x,className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return l(e[1].id)}},r.a.createElement("i",{className:"add material-icons"},"exposure_plus_1")))}));return r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(S,{handleInput:function(e){e.preventDefault(),v(e.target.value)}}),r.a.createElement("div",{className:"row"},G),r.a.createElement("span",{style:{margin:"40px"}},r.a.createElement("button",{disabled:!k.includes(u.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){return function(e){e.preventDefault();for(var t=0;t<c.length;t++)if(c[t].points>0){window.confirm("Are you sure?")&&m(c);break}}(e)}},"End Game"),r.a.createElement("button",{disabled:!k.includes(u.uid),type:"submit",className:"waves-effect waves-light btn-large",onClick:function(e){x?t(e):function(e){e.preventDefault(),a()}(e)}},x?"Cancel Game":"Start Game")))})));var F=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e,t){return r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement("span",{to:"/",className:"btn btn-floating pink lighten-1",onClick:function(){return e.history.push("/profile/".concat(e.auth.uid))}},e.profile.initial)))})));var w=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/users"},"Fighters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/scoreboard"},"Scoreboard")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/signin"},"Login")))};var P=Object(s.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"brand-logo left "},"SMASH"),t.isLoaded&&(t.uid?r.a.createElement(F,{profile:a}):r.a.createElement(w,null))))})),x=a(14);var R=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firebase.auth.uid,r=e.firestore.data.projects,c=e.firestore.data.users,i=r?r[a]:null,o=c?c[n]:null;return{auth:e.firebase.auth,project:i,reduxProject:e.project,user:o}}),{deletePost:function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().firestore().collection("projects").doc(e).delete()}},updateProjectContent:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c();i(),n().firebase.profile,n().firebase.auth.uid;o.firestore().collection("projects").doc(t).update(e)}},addComment:function(e,t){return function(a,n,r){var c=r.getFirebase,i=r.getFirestore,o=c(),l=(i(),n().firebase.profile,n().firebase.auth.uid,o.firestore().collection("projects").doc(t)),s={comment:e,createdAt:new Date};l.update({comment:o.firestore.FieldValue.arrayUnion(s)})}}}),Object(u.firestoreConnect)([{collection:"projects"},{collection:"users"}]))((function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)({comment:"",user:{}}),s=Object(b.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(!1),p=Object(b.a)(f,2),h=p[0],E=p[1],v=e.project,N=e.deletePost,y=e.history,j=e.updateProjectContent,O=e.auth,S=e.addComment,k=e.user,C=e.match.params.id,F=Object(n.useState)({title:"",content:""}),w=Object(b.a)(F,2),P=w[0],R=w[1];function G(e){R(Object(g.a)({},P,Object(x.a)({},e.target.id,e.target.value)))}function I(e){e.preventDefault(),O.uid&&!1===h&&u.comment.length&&(S(u,C),m({comment:""}),E(!0),setTimeout((function(){E(!1)}),6e3))}if(Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),v&&v.comment)var D=v.comment.map((function(e,t){return r.a.createElement("div",{key:t,style:{height:"auto",minHeight:"60px"}},r.a.createElement("h6",{style:{fontSize:"15px"}},r.a.createElement("strong",null,r.a.createElement(o.b,{style:{color:"black"},to:"/profile/".concat(e.comment.user.id)},e.comment.user.firstName," ",e.comment.user.lastName))," ",d()(e.createdAt.toDate()).calendar()),r.a.createElement("p",{style:{marginTop:"0",fontSize:"16px"}},e.comment.comment))}));return v?!0===c?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O.uid===v.authorId&&(j(P,C),i(!1))},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:G,type:"text",id:"title",maxLength:"100",value:P.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{className:"active",htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{style:{height:"auto"},required:!0,value:P.content,onChange:G,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Update"),r.a.createElement("button",{onClick:function(){return i(!1)},className:"btn pink lighten-1 z-depth-0"},"Cancel")))):!1===c?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},v.title),r.a.createElement("p",null,v.content)),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",v.authorFirstName," ",v.authorLastName),r.a.createElement("div",null," ",d()(v.createdAt.toDate()).calendar())),O.uid===v.authorId&&r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){i(!c),R({title:v.title,content:v.content})}},"Edit"),r.a.createElement("button",{style:{float:"right"},className:"waves-effect waves-light btn",onClick:function(){window.confirm("Are you sure you want to delete this masterpiece ?")&&(N(C),y.push("/"))}},"Delete"))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return e.history.goBack()}},"Back"),r.a.createElement("h2",null," Comments"),r.a.createElement("form",{onSubmit:function(e){return I(e)}},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"comment"},!1===h?"Comment":"Wait a moment before commenting again"),r.a.createElement("input",{type:"text",name:"comment",value:u.comment,onChange:function(e){return function(e){var t;m((t={},Object(x.a)(t,e.target.name,e.target.value),Object(x.a)(t,"user",k),t))}(e)}})),!O.isEmpty&&r.a.createElement("input",{required:!0,disabled:!u.comment.length,type:"submit",value:"Comment",className:"waves-effect waves-light btn"})),r.a.createElement("div",null,D&&D.reverse())):void 0:r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"loading ..."))}));var G=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authError,c=e.auth,i=Object(n.useState)({email:"",password:""}),s=Object(b.a)(i,2),u=s[0],m=s[1];if(c.uid)return r.a.createElement(l.a,{to:"/"});function d(e){m(Object(g.a)({},u,Object(x.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:d,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:d,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)),r.a.createElement(o.b,{to:"/signup"},"Dont have an account? Sign up here.")))}));var I=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initial:e.firstName[0]+e.lastName[0],id:t.user.uid,points:0,bio:"",createdAt:new Date})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.auth,a=e.authError,c=e.signUp,i=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),o=Object(b.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(b.a)(m,2),f=d[0],p=d[1];if(t.uid)return r.a.createElement(l.a,{to:"/"});function h(e){u(Object(g.a)({},s,Object(x.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){p(!0),e.preventDefault(),s.email.length>0&&s.password.length>0&&s.firstName.length>0&&s.lastName.length>0&&setTimeout((function(){c(s),p(!1)}),3e3)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,onChange:h,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,onChange:h,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"firstName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{required:!0,onChange:h,type:"text",id:"lastName"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{disabled:!!f,className:"btn pink lighten-1 z-depth-0"},f?"Hang tight ".concat(s.firstName," signing you up ..."):"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}));var D=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(g.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),o=Object(b.a)(i,2),s=o[0],u=o[1];if(!a.uid)return r.a.createElement(l.a,{to:"/signin"});function m(e){u(Object(g.a)({},s,Object(x.a)({},e.target.id,e.target.value)))}return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(s),u({title:"",content:""}),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{required:!0,onChange:m,type:"text",id:"title",maxLength:"100",value:s.title})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{required:!0,value:s.content,onChange:m,id:"content",className:"materialize-textarea"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}));var A=Object(f.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.users;return{user:n?n[a]:null,auth:e.firebase.auth}}),{createbio:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=(c(),a().firebase.profile,a().firebase.auth.uid);i.firestore().collection("users").doc(o).update(e)}},signOut:O}),Object(u.firestoreConnect)([{collection:"users"}]))(Object(l.g)((function(e){var t=e.user,a=e.createbio,c=e.auth,i=e.history,o=e.signOut,l=e.match,s=Object(n.useState)({bio:""}),u=Object(b.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(b.a)(f,2),h=p[0],E=p[1];if(t)var v=1e3*t.createdAt.seconds,N=new Date(parseInt(v,10)).toString("MM/dd/yy HH:mm:ss"),y=t.sumPoints,j="".concat(t.firstName," ").concat(t.lastName),O=t.gamesPlayed,S=t.sumPoints/t.gamesPlayed||0;return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Name: ",j),r.a.createElement("h4",null,"Score: ",y),r.a.createElement("h4",null,"Games Played: ",O),r.a.createElement("h4",null,"Score Average: ",t&&S.toFixed(2)),h?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m),d({bio:""}),E(!1)},className:"white"},r.a.createElement("input",{value:m.bio,type:"text",onChange:function(e){d(Object(g.a)({},m,Object(x.a)({},e.target.name,e.target.value)))},name:"bio",maxLength:"100",placeholder:t.bio||" Update Bio"}),r.a.createElement("div",{className:"input-field",style:{display:"inline"}},r.a.createElement("button",{style:{marginRight:"10px"},className:"btn pink lighten-1 z-depth-0"},"Update!"),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0",onClick:function(){return E(!1)}},"Cancel")))):r.a.createElement("h4",null,"Bio: ",t&&t.bio," ",r.a.createElement("span",{style:{marginLeft:"10px"}},t&&t.id?c.uid===t.id&&t.id&&r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){c.uid===t.id&&E(!h)},className:"material-icons"},"mode_edit"):null))),r.a.createElement("div",{className:"card-action gray lighten-4 grey-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("p",{className:"gray-text",style:{fontSize:"18px"}},"Joined the party on"," ",void 0!==N&&N.slice(0,16))),r.a.createElement("span",{className:"card-title"}))),r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return i.goBack()}},"Back"),l.params.id===c.uid&&r.a.createElement("a",{className:" waves-effect waves-light btn",onClick:o},"Log Out"))})));var L=Object(f.d)(Object(s.b)((function(e){return{scoreboard:e.firestore.ordered.scoreboard,users:e.firestore.ordered.users}})),Object(u.firestoreConnect)([{collection:"scoreboard",orderBy:["createdAt","desc"]},{collection:"users"}]))((function(e){var t=e.scoreboard,a=e.users,c=Object(n.useState)(),i=Object(b.a)(c,2),o=i[0],l=i[1],s=Object(n.useState)(!1),u=Object(b.a)(s,2),m=u[0],f=u[1],p=Object(n.useState)(!0),h=Object(b.a)(p,2),E=h[0],g=h[1],v=Object(n.useState)("sumPoints"),N=Object(b.a)(v,2),y=(N[0],N[1]),j=[],O=[];function S(e){if("averagePoints"===e){var t=a&&a.slice().sort((function(e,t){if(e.gamesPlayed>0)return e.sumPoints/e.gamesPlayed<t.sumPoints/t.gamesPlayed?1:-1}));f(t)}else{var n=a&&a.slice().sort((function(e,t){return e.sumPoints<t.sumPoints?1:-1}));f(n)}}function k(e){t&&t.map((function(t){O.push(t);var a=O[0].id;t.id===e&&(t.scores.map((function(e){j.push(e)})),e&&l(j)),t.id!==a||e||(t.scores.map((function(e){j.push(e)})),l(j))}))}return Object(n.useEffect)((function(){S()}),[a]),Object(n.useEffect)((function(){k()}),[t]),t&&t.map((function(e){O.push(e)})),E?r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return g(!1)}}," ","History"),r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return function(e){y(e.target.value),S(e.target.value)}(e)},defaultValue:""},r.a.createElement("option",{disabled:!0,value:""},"Filter by total points or game average"),r.a.createElement("option",{key:"sumPoints",id:"sumPoints",value:"sumPoints"},"Totalpoints"),r.a.createElement("option",{key:"averagePoints",id:"averagePoints",value:"averagePoints"},"Average Points")),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Average"),r.a.createElement("th",null,"Total Games Played")),m&&m.map((function(e,t){var a=e.sumPoints/e.gamesPlayed,c=0===t?r.a.createElement("span",{style:{color:"#FAFAD2"}},"Champion"):1===t?"Runner Up":t;return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,c),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.sumPoints),r.a.createElement("td",null,a.toFixed(2)||0),r.a.createElement("td",null,e.gamesPlayed)))})))):r.a.createElement(n.Fragment,null,r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return g(!0)}}," ","highScores"),r.a.createElement("select",{style:{maxWidth:"100%",fontSize:"16px"},className:"browser-default",onChange:function(e){return k(e.target.value)}},O&&O.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},d()(e.createdAt.toDate()).calendar())}))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Points")),o&&o.reverse().map((function(e,t){var a=0===t?r.a.createElement("span",{style:{color:"#FAFAD2"}},"Champion"):1===t?"Runner Up":t;return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,e.firstName),r.a.createElement("th",null,e.points)))}))))}));var z=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:j}),r.a.createElement(l.b,{path:"/project/:id",component:R}),r.a.createElement(l.b,{path:"/signin",component:G}),r.a.createElement(l.b,{path:"/signup",component:I}),r.a.createElement(l.b,{path:"/create",component:D}),r.a.createElement(l.b,{path:"/profile/:id",component:A}),r.a.createElement(l.b,{path:"/users",component:C}),r.a.createElement(l.b,{path:"/scoreboard",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(211),_={projects:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return Object(g.a)({},e,{projects:[].concat(Object(U.a)(e.projects),[t.project])});case"CREATE_PROJECT_ERROR":default:return e}},B={authError:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(g.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log(t.err.message),Object(g.a)({},e,{authError:t.err.message});default:return e}},W={score:1},V=a(46),q=Object(f.c)({auth:H,project:T,firestore:V.firestoreReducer,firebase:u.firebaseReducer,hightestScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGHEST_SCORE":return{state:t.payload};default:return e}}}),J=a(210),M=a(47),K=a.n(M);a(405),a(408);K.a.initializeApp({apiKey:"AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",authDomain:"smashbros-fa91c.firebaseapp.com",databaseURL:"https://smashbros-fa91c.firebaseio.com",projectId:"smashbros-fa91c",storageBucket:"smashbros-fa91c.appspot.com",messagingSenderId:"434722815657",appId:"1:434722815657:web:87623cf1061653c038b3b8",measurementId:"G-9G452HN5WT"});var Z=K.a,Q=Object(f.e)(q,Object(f.d)(Object(f.a)(J.a.withExtraArgument({getFirestore:V.getFirestore,getFirebase:u.getFirebase})),Object(V.reduxFirestore)(K.a,Z))),Y={firebase:K.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:Q.dispatch,createFirestoreInstance:V.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:Q},r.a.createElement(u.ReactReduxFirebaseProvider,Y,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.bc998b2b.chunk.js.map