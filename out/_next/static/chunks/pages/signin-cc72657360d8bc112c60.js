_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{DB6d:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),o=n("5Yp1"),r=n("rePB"),i=n("nOHt"),s=n.n(i),c=n("q1tI"),l=n.n(c),j=n("iuBY"),d=n("YFqc"),m=n.n(d),p=n("J8P/"),b=n("FGyW"),g=n("wx14"),O=n("zLVn"),u=n("17x9"),h=n.n(u),w=n("TSYQ"),x=n.n(w),y=n("33Jr"),f={tag:y.n,type:h.a.string,size:h.a.string,color:h.a.string,className:h.a.string,cssModule:h.a.object,children:h.a.string},v=function(e){var t=e.className,n=e.cssModule,a=e.type,o=e.size,r=e.color,i=e.children,s=e.tag,c=Object(O.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(y.j)(x()(t,!!o&&"spinner-"+a+"-"+o,"spinner-"+a,!!r&&"text-"+r),n);return l.a.createElement(s,Object(g.a)({role:"status"},c,{className:j}),i&&l.a.createElement("span",{className:Object(y.j)("sr-only",n)},i))};v.propTypes=f,v.defaultProps={tag:"div",type:"border",children:"Loading..."};var N=v,k=(n("jDDT"),n("F4LG"),n("/MKj")),S=n("AIXf");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(){var e=Object(k.b)(),t=Object(c.useState)({email:"",password:"",error:"",loading:!1,message:"",showForm:!0}),n=t[0],o=t[1],i=n.email,l=n.password,d=n.error,g=n.loading,O=n.message;n.showForm;Object(c.useEffect)((function(){Object(j.e)()&&s.a.push("/")}),[]);var u=function(t){t.preventDefault(),o(P(P({},n),{},{loading:!0,error:!1}));var a={email:i,password:l};Object(j.i)(a).then((function(t){t.error?o(P(P({},n),{},{error:t.error,loading:!1})):Object(j.a)(t,(function(){Object(j.e)()&&"admin"===Object(j.e)().role?s.a.push("/admin"):(e(Object(S.b)(t.user)),s.a.push("/user"))}))}))},h=function(e){return function(t){o(P(P({},n),{},Object(r.a)({error:!1},e,t.target.value)))}};O&&b.b.info("".concat(O)),d&&b.b.error("".concat(d));return Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{position:"top-right",autoClose:2200,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsx)("div",{className:"loginMain",children:Object(a.jsxs)("div",{className:"mainContainer",children:[Object(a.jsx)("div",{className:"leftContainer",children:Object(a.jsx)("div",{className:"leftMainImg",children:Object(a.jsx)("img",{src:"images/loginIllu.png",alt:"leftImg"})})}),Object(a.jsxs)("div",{className:"rightContainer",children:[Object(a.jsxs)("div",{className:"heading",children:[Object(a.jsx)("img",{src:"images/cloud_og.png",alt:"logo"}),Object(a.jsx)("h1",{children:"Sign In"})]}),Object(a.jsx)("div",{className:"formContainer",children:Object(a.jsxs)("form",{onSubmit:u,children:[Object(a.jsxs)("div",{className:"emailContainer",children:[Object(a.jsx)("input",{type:"email",onChange:h("email"),value:i,autoComplete:"true",required:!0}),Object(a.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(a.jsxs)("div",{className:"passwordContainer",children:[Object(a.jsx)("input",{type:"password",onChange:h("password"),value:l,required:!0}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(a.jsx)("button",{type:"submit",className:"loginBtn",children:g?Object(a.jsx)(N,{color:"primary",style:{margin:"0 auto"}}):"Login"}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{}),Object(a.jsx)(m.a,{href:"/auth/password/forgot",children:Object(a.jsx)("a",{className:"forgetLink",children:"Forget Password ?"})}),Object(a.jsxs)("p",{className:"signLink",children:["New here ? ",Object(a.jsx)("a",{href:"/signup",children:"Sign Up"})]})]})})]})]})})]})},C=n("obyI"),E=n("8Kt/"),L=n.n(E);t.default=Object(i.withRouter)((function(e){var t=e.router;return Object(a.jsxs)(l.a.Fragment,{children:[Object(a.jsxs)(L.a,{children:[Object(a.jsxs)("title",{children:["Signin | ",C.b]}),Object(a.jsx)("meta",{name:"description",content:"Spend all day doing what you love the most. Meet like-minded people and learn. Expose your talents. Connect with people with similar talents around the world. Stikboard is here to stay."}),Object(a.jsx)("link",{rel:"canonical",href:"".concat(C.d)}),Object(a.jsx)("meta",{property:"og:title",content:"Not your usual social network | ".concat(C.b)}),Object(a.jsx)("meta",{name:"og:description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(a.jsx)("meta",{property:"og:type",content:"website"}),Object(a.jsx)("meta",{property:"og:url",content:"".concat(C.d)}),Object(a.jsx)("meta",{name:"twitter:card",content:"".concat(C.d,"/images/mainLogoMeta.jpg")}),Object(a.jsx)("meta",{name:"keywords",content:"socialmedia,blog,technology,writings,poem,movies,reviews,connect,share,stikboard,follow,connection,group,travell"}),Object(a.jsx)("meta",{name:"robots",content:"index, follow"}),Object(a.jsx)("meta",{itemprop:"name",content:C.b}),Object(a.jsx)("meta",{itemprop:"description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(a.jsx)("meta",{itemprop:"image",content:"".concat(C.d,"/images/mainLogoMeta.jpg")}),Object(a.jsx)("meta",{property:"og:site_name",content:"Stikboard"}),Object(a.jsx)("meta",{name:"twitter:image:alt",ontent:"Share your creation to the world,connect with similar talents and participate in exciting competitions."}),Object(a.jsx)("meta",{property:"og:image",content:"".concat(C.d,"/images/mainLogoMeta.jpg")}),Object(a.jsx)("meta",{property:"og:image:secure_url",content:"".concat(C.d,"/images/mainLogoMeta.jpg")}),Object(a.jsx)("meta",{property:"og:image:type",content:"image/png"}),Object(a.jsx)("meta",{property:"fb:app_id",content:"".concat(C.e)}),Object(a.jsx)("meta",{name:"twitter:site",content:"Stikboard"}),Object(a.jsx)("meta",{name:"twitter:card",content:"Share your creation to the world,connect with similar talents and participate in exciting competitions."}),Object(a.jsx)("meta",{name:"twitter:title",content:C.b}),Object(a.jsx)("meta",{name:"twitter:description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(a.jsx)("meta",{name:"twitter:creator",content:"Stikboard"}),Object(a.jsx)("meta",{name:"twitter:image:src",content:"".concat(C.d,"/images/mainLogoMeta.jpg")})]}),Object(a.jsxs)(o.a,{children:[t.query.message?Object(a.jsx)("div",{className:"alert alert-danger",children:t.query.message}):void 0,Object(a.jsx)(_,{})]})]})}))},hMb1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return n("DB6d")}])}},[["hMb1",1,0,2,3,4,11,13,5]]]);