(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dcecb1c9"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("router-view"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar fixed-top navbar-expand-md navbar-light bg-light"},[s("router-link",{attrs:{to:{name:"Home"}}},[s("a",{staticClass:"navbar-brand dummy"},[s("link",{attrs:{rel:"alternate",href:"atom.xml",type:"application/atom+xml",title:"Atom"}}),s("div",[s("img",{staticClass:"ml-2",staticStyle:{width:"50px"},attrs:{src:a("84f9")}})])])]),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item active sm-dummy"},[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Home"}}},[s("a",{staticClass:"nav-link active"},[t._v(" "+t._s(t.$t("Dummy"))+" "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])])],1)]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[s("ul",{staticClass:"navbar-nav d-none"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Home"}}},[s("a",{staticClass:"nav-link active"},[t._v(" "+t._s(t.$t("Dummy"))+" "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])])],1)]),s("ul",{staticClass:"nav navbar-nav ml-auto mr-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Contact"}}},[s("a",{staticClass:"nav-link active"},[t._v(" "+t._s(t.$t("Contact Us"))+" ")])])],1),s("select",{directives:[{name:"model",rawName:"v-model",value:t.lang,expression:"lang"}],staticClass:"mr-2 selectbox",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.lang=e.target.multiple?a:a[0]},function(e){return t.handleChange()}]}},[s("option",{staticClass:"option",attrs:{value:"en"},on:{change:function(e){return t.handleChange()}}},[t._v(" "+t._s(t.$t("English"))+" ")]),s("option",{staticClass:"option",attrs:{value:"tr"},on:{change:function(e){return t.handleChange()}}},[t._v(" "+t._s(t.$t("Turkish"))+" ")])]),t.isAuthenticated?t._e():s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showModal=!0}}},[t._v(" "+t._s(t.$t("Login"))+" ")])])]),t.isAuthenticated?s("div",{staticClass:"menu"},[s("li",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.dropdown=!t.dropdown}}},[s("a",[s("i",{staticClass:"far fa-user mr-2 icon"},[s("span",{staticClass:"ml-2"},[t._v(" "+t._s(t.userInfo.name))])])]),s("transition",{attrs:{name:"fade"}},[t.dropdown?s("ul",{staticClass:"drop",on:{mouseleave:function(e){t.dropdown=!1},click:function(e){t.dropdown=!t.dropdown}}},[s("li",[s("a",[t._v(" "+t._s(t.userInfo.email)+" ")])]),s("li",{on:{click:t.logout}},[s("a",[t._v(" "+t._s(t.$t("Logout"))+" ")])])]):t._e()])],1)]):t._e()])],1),s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"exampleModal"}},[s("transition",{on:{enter:t.startTransitionModal,"after-enter":t.endTransitionModal,"before-leave":t.endTransitionModal,"after-leave":t.startTransitionModal}},[t.showModal?s("div",{ref:"modal",staticClass:"modal fade"},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h1",{staticClass:"modal-title"},[t._v(t._s(t.$t("Login Form")))]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.showModal=!1}}},[t._v("×")])])]),s("div",{staticClass:"modal-body",staticStyle:{height:"250px"}},[s("form",[s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:t.$t("Name")},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:t.$t("Email")},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:t.$t("Password")},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),s("button",{staticClass:"btn btn-info btn-block btn-round",attrs:{type:"button"},on:{click:t.login}},[t._v(" "+t._s(t.$t("Login"))+" ")])])])])])]):t._e()]),s("div",{ref:"backdrop",staticClass:"modal-backdrop fade d-none"})],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("ade3"),u=a("5530"),m=a("2f62"),d={data:function(){return{lang:"en",showModal:!1,dropdown:!1,isAuth:"",user:{name:"",email:"",password:""}}},created:function(){this.refreshPage()},computed:Object(u["a"])({},Object(m["b"])(["isAuthenticated","userInfo"])),mounted:function(){},methods:(s={login:function(){var t=this;this.$store.dispatch("Login",this.user).then((function(e){t.showModal=!1}))},logout:function(){this.$store.dispatch("Logout")},handleChange:function(){this.$i18n.locale=this.lang,localStorage.setItem("lang",this.lang)},refreshPage:function(){this.lang=localStorage.getItem("lang"),this.$i18n.locale=localStorage.getItem("lang")},startTransitionModal:function(){this.$refs.backdrop.classList.toggle("d-block"),this.$refs.modal.classList.toggle("d-block")},endTransitionModal:function(){this.$refs.backdrop.classList.toggle("show"),this.$refs.modal.classList.toggle("show")}},Object(c["a"])(s,"handleChange",(function(){this.$i18n.locale=this.lang,localStorage.setItem("lang",this.lang)})),Object(c["a"])(s,"refreshPage",(function(){this.lang=localStorage.getItem("lang"),this.$i18n.locale=this.lang,this.isAuth=JSON.parse(localStorage.getItem("user"))})),s)},p=d,v=a("2877"),f=Object(v["a"])(p,r,l,!1,null,null,null),g=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer font-small blue"},[a("div",{staticClass:"footer-copyright text-center py-3"},[t._v(" © 2021 Copyright: "),a("a",{attrs:{href:"https://dummy.com/"}},[t._v(" "+t._s(t.$t("Dummy"))+" ")])])])},b=[],y={},C=y,_=Object(v["a"])(C,h,b,!1,null,null,null),k=_.exports,$={components:{Navbar:g,Footer:k},created:function(){this.$store.dispatch("initAuth")}},w=$,L=Object(v["a"])(w,o,i,!1,null,null,null),x=L.exports,S=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"col-lg-12 col-md-4 col-sm-4 col-xs-12"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col"},[a("div",{staticClass:"jumbotron mt-2 col-xs-12 col-sm-6 col-md-4 col-lg-12"},[a("h1",{staticClass:"display-2"},[t._v(t._s(t.$t("Learn Geometry")))]),a("p",{staticClass:"lead"},[t._v(" "+t._s(t.$t("Lorem ipsum dolor sit amet."))+" ")]),a("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#",role:"button"}},[t._v(t._s(t.$t("Get Started"))+" »")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 mb-4"},[a("p",[t._v(" "+t._s(t.$t("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))+" ")]),a("h2",{staticClass:"display-3"},[t._v(t._s(t.$t("Pythagoras Theorem")))]),a("p",[t._v(" "+t._s(t.$t("Lorem ipsum dolor sit amet."))+", "+t._s(t.$t("Lorem ipsum dolor sit amet."))+", "+t._s(t.$t("Lorem ipsum dolor sit amet."))+", "+t._s(t.$t("Lorem ipsum dolor sit amet."))+", "+t._s(t.$t("Lorem ipsum dolor sit amet."))+" ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[a("h3",{staticClass:"display-4"},[t._v(t._s(t.$t("Title")))]),a("p",[t._v(" "+t._s(t.$t("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))+" ")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Button")])]),a("div",{staticClass:"col-md"},[a("h3",{staticClass:"display-4"},[t._v(t._s(t.$t("Title")))]),a("p",[t._v(" "+t._s(t.$t("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))+". ")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v(t._s(t.$t("Button")))])]),a("div",{staticClass:"col-md"},[a("h3",{staticClass:"display-4"},[t._v(t._s(t.$t("Title")))]),a("p",[t._v(" "+t._s(t.$t("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))+" ")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v(t._s(t.$t("Button")))])])])]),t._m(0)])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 mb-4"},[a("ul",{staticClass:"nav nav-pills flex-column"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("-")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("-")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("-")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("-")])])])])}],P={name:"Home"},I=P,E=Object(v["a"])(I,T,O,!1,null,null,null),j=E.exports;n["a"].use(S["a"]);var M=[{path:"/",name:"Home",component:j},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],A=new S["a"]({mode:"history",base:"/",routes:M}),N=A;n["a"].use(m["a"]);var U=new m["a"].Store({state:{user:""},mutations:{setToken:function(t,e){t.token=e},clearUser:function(t){t.user=""},setUser:function(t,e){t.user=e}},actions:{initAuth:function(t){var e=t.commit,a=JSON.parse(localStorage.getItem("user"));a&&e("setUser",a)},Login:function(t,e){var a=t.commit;localStorage.setItem("user",JSON.stringify(e)),a("setUser",e)},Logout:function(t){var e=t.commit;e("clearUser"),localStorage.removeItem("user")}},getters:{isAuthenticated:function(t){return""!==t.user},userInfo:function(t){return t.user}}}),G=a("a925"),B=a("edd4"),D=a("ffeb");n["a"].use(G["a"]);var F=new G["a"]({locale:localStorage.getItem("lang")||"tr",fallbackLocale:"en",messages:{en:B,tr:D}}),J=(a("7d05"),a("1dce")),H=a.n(J),z=a("d45f");n["a"].config.productionTip=!1,n["a"].use(H.a),n["a"].component("vue-bootstrap-typeahead",z["a"]),new n["a"]({router:N,store:U,i18n:F,render:function(t){return t(x)}}).$mount("#app")},"7d05":function(t,e,a){},"84f9":function(t,e,a){t.exports=a.p+"img/dummy.d314772b.png"},edd4:function(t){t.exports=JSON.parse('{"message":"hello i18n !!","Dummy":"Dummy","Turkish":"Turkish","English":"English","Learn Geometry":"Learn Geometry","Lorem ipsum dolor sit amet.":"Lorem ipsum dolor sit amet.","Get Started":"Get Started","Contact Us":"Contact Us","Login":"Login","Logout":"Logout","Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","Pythagoras Theorem":"Pythagoras Theorem","Title":"Title","Button":"Button","Login Form":"Login Form","Username":"Username","Email":"Email","Name":"Name","Password":"Password","Submit":"Submit","Telephone":"Telephone","phone number must consist of numbers.":"phone number must consist of numbers.","Enter your 11 digit phone number.":"Enter your 11 digit phone number.","Country":"Country","Description":"Description","Canada":"Canada","USA":"USA","Mexico":"Mexico","Turkey":"Turkey"}')},ffeb:function(t){t.exports=JSON.parse('{"message":"hello i18n !!","Dummy":"Kukla","Turkish":"Türkçe","English":"İngilizce","Learn Geometry":"Geometri Öğrenin","Lorem ipsum dolor sit amet.":"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.","Get Started":"Başla","Contact Us":"İletişim","Login":"Giriş Yap","Logout":"Çıkış Yap","Lorem Ipsum is simply dummy text of the printing and typesetting industry.":"Lorem Ipsum, basım ve dizgi endüstrisinin basit bir sahte metnidir.","Pythagoras Theorem":"Pisagor Teoremi","Title":"Başlık","Button":"Buton","Login Form":"Giriş Formu","Email":"Email","Name":"İsim","Lastname":"Soyisim","Password":"Şifre","Submit":"Gönder","Telephone":"Telefon","phone number must consist of numbers.":"Telefon numarası rakamlardan oluşmalıdır.","Enter your 11 digit phone number.":"11 haneli telefon numaranızı girin.","Country":"Ülke","Description":"Açıklama","Canada":"Kanada","USA":"Amerika","Mexico":"Meksika","Turkey":"Türkiye"}')}});
//# sourceMappingURL=app.f8298cfd.js.map