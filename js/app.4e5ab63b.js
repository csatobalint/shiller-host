(function(t){function e(e){for(var a,r,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},u=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c40e9b52","chunk-2d0e4939":"91329e9c","chunk-50551fed":"d57bd471","chunk-016a3514":"4cf2e0df","chunk-121bb05a":"6142d541","chunk-143e1c53":"ed2283a0","chunk-451c321d":"fda79505","chunk-6b36de39":"d2942537","chunk-e66219c2":"da5789aa"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-50551fed":1,"chunk-016a3514":1,"chunk-121bb05a":1,"chunk-143e1c53":1,"chunk-451c321d":1,"chunk-e66219c2":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0e4939":"31d6cfe0","chunk-50551fed":"25753767","chunk-016a3514":"b9224be5","chunk-121bb05a":"d253099c","chunk-143e1c53":"6c21a9f1","chunk-451c321d":"c4f06e59","chunk-6b36de39":"31d6cfe0","chunk-e66219c2":"c4f06e59"}[t]+".css",o=s.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[t],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",primary:""}},[a("img",{staticClass:"mr-3",attrs:{src:n("9b19"),height:"30"}}),a("v-toolbar-title",[t._v("Shiller Crypto App")]),a("v-spacer"),t.isAuthenticated?t._e():a("v-btn",{attrs:{text:"",rounded:"",to:"/login"}},[t._v("Login")]),t.isAuthenticated?a("v-btn",{attrs:{text:"",rounded:"",to:"/app"}},[t._v("App")]):t._e(),t.isAuthenticated?a("v-btn",{attrs:{text:"",rounded:""},on:{click:t.signOut}},[t._v("Logout")]):t._e(),t.isAuthenticated?[t.user.photoURL?a("v-avatar",[a("img",{attrs:{src:t.user.photoURL}})]):a("v-avatar",{attrs:{color:"primary",size:"40"}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-account-circle ")])],1)]:t._e()],2),a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("v-row",[t.isAuthenticated?a("v-col",{attrs:{cols:"2"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("v-list",{attrs:{color:"transparent"}},[a("v-list-item",{attrs:{link:"",to:{name:"new_question"}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" New question ")])],1)],1),a("v-list-item",{attrs:{link:"",to:{name:"list_questions"}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" My questions ")])],1)],1),a("v-divider",{staticClass:"my-2"}),a("v-list-item",{attrs:{link:"",color:"grey lighten-4"}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" Refresh ")])],1)],1)],1)],1)],1):t._e(),a("v-col",[a("v-sheet",{attrs:{rounded:"lg"}},[t.isAuthenticated?a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("h1",[t._v("Logged in as "+t._s(t.user.displayName))])])],1)],1):t._e(),a("router-view"),a("v-row",[a("v-col")],1)],1)],1)],1)],1)],1),a("v-footer",{attrs:{color:"blue-grey darken-4 lighten-1",padless:""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{"py-4":"","text-center":"","white--text":"",xs12:""}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Shiller Crypto")])])],1)],1)],1)},o=[],u=n("5530"),i=(n("ac1f"),n("5319"),n("2f62")),s=n("8aa5"),c=n.n(s),l={name:"App",data:function(){return{links:[{label:"Home",url:"/"},{label:"Login",url:"/login"},{label:"App",url:"/app"}]}},computed:Object(u["a"])({},Object(i["b"])({user:"auth/user",isAuthenticated:"auth/isAuthenticated"})),methods:{signOut:function(){var t=this;c.a.auth().signOut().then((function(){t.$store.dispatch("auth/clearUser"),t.$router.replace({name:"login"})}))}}},p=l,d=n("2877"),h=n("6544"),f=n.n(h),m=n("7496"),v=n("40dc"),b=n("8212"),g=n("8336"),y=n("62ad"),k=n("a523"),_=n("ce7e"),w=n("0e8f"),x=n("553a"),E=n("132d"),A=n("a722"),j=n("8860"),S=n("da13"),V=n("5d23"),L=n("f6c4"),C=n("0fd9"),O=n("8dd9"),T=n("2fa4"),P=n("2a7f"),q=Object(d["a"])(p,r,o,!1,null,null,null),D=q.exports;f()(q,{VApp:m["a"],VAppBar:v["a"],VAvatar:b["a"],VBtn:g["a"],VCol:y["a"],VContainer:k["a"],VDivider:_["a"],VFlex:w["a"],VFooter:x["a"],VIcon:E["a"],VLayout:A["a"],VList:j["a"],VListItem:S["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VMain:L["a"],VRow:C["a"],VSheet:O["a"],VSpacer:T["a"],VToolbarTitle:P["a"]});n("d3b7"),n("3ca3"),n("ddb0");var I=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},N=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Shiller ")]),n("p",[t._v(" Please log in to use the app. ")])])],1)],1)},B=[],G={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},M=G,F=Object(d["a"])(M,R,B,!1,null,null,null),$=F.exports;f()(F,{VContainer:k["a"],VFlex:w["a"],VLayout:A["a"]});var H={name:"home",components:{HelloWorld:$}},W=H,z=Object(d["a"])(W,U,N,!1,null,null,null),J=z.exports;a["a"].use(I["a"]);var Y=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-50551fed"),n.e("chunk-e66219c2")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-50551fed"),n.e("chunk-451c321d")]).then(n.bind(null,"73cf"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([n.e("chunk-50551fed"),n.e("chunk-016a3514"),n.e("chunk-143e1c53")]).then(n.bind(null,"34c3"))}},{path:"/app",name:"app",component:function(){return n.e("chunk-2d0e4939").then(n.bind(null,"918c"))},children:[{path:"question/new",name:"new_question",component:function(){return Promise.all([n.e("chunk-50551fed"),n.e("chunk-6b36de39")]).then(n.bind(null,"8320"))}},{path:"questions",name:"list_questions",component:function(){return Promise.all([n.e("chunk-50551fed"),n.e("chunk-016a3514"),n.e("chunk-121bb05a")]).then(n.bind(null,"d1ba"))}}]}],K=new I["a"]({mode:"history",base:"/",routes:Y}),Q=K,X={namespaced:!0,state:{isAuthenticated:!1,user:null},getters:{user:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},mutations:{SET_LOGGED_IN:function(t,e){t.isAuthenticated=e},SET_USER:function(t,e){t.user=e},DELETE_USER:function(t){t.user=null,t.isAuthenticated=!1}},actions:{fetchUser:function(t,e){var n=t.commit;n("SET_LOGGED_IN",null!==e),null!==e.providerData[0]?n("SET_USER",e.providerData[0]):n("SET_USER",null)},clearUser:function(t){var e=t.commit;e("DELETE_USER")}}},Z=X;a["a"].use(i["a"]);var tt=new i["a"].Store({state:{},mutations:{},actions:{},modules:{auth:Z}}),et=n("f309");a["a"].use(et["a"]);var nt=new et["a"]({}),at={apiKey:"AIzaSyDtVBjk1uECnGEjnvBE_vIpJDvgrkSpqN4",authDomain:"cacstestapp.firebaseapp.com",databaseURL:"https://cacstestapp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"cacstestapp",storageBucket:"cacstestapp.appspot.com",messagingSenderId:"491883331961",appId:"1:491883331961:web:9699d64a75deb8e3ed6fa8",measurementId:"G-YWG3452C85"};s["initializeApp"](at),s["auth"]().onAuthStateChanged((function(t){null!==t&&tt.dispatch("auth/fetchUser",t)})),a["a"].config.productionTip=!1,new a["a"]({router:Q,store:tt,vuetify:nt,render:function(t){return t(D)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.4e5ab63b.js.map