_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{PavT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[username]",function(){return n("k/Hk")}])},StKG:function(e,t,n){"use strict";var c=n("rePB"),s=n("nKUr"),r=n("q1tI"),a=n.n(r),o=(n("YFqc"),n("LpSC")),l=n.n(o),i=n("obyI");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.authorEmail,n=Object(r.useState)({message:"",name:"",email:"",sent:!1,buttonText:"Send Message",success:!1,error:!1}),o=n[0],j=n[1],u=o.message,d=o.email,m=o.name,p=(o.sent,o.buttonText),O=o.success,h=o.error,g=function(e){e.preventDefault(),j(b(b({},o),{},{buttonText:"Sending..."})),function(e){var t;return t=e.authorEmail?"".concat(i.a,"/contact-blog-author"):"".concat(i.a,"/contact"),l()("".concat(t),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({authorEmail:t,name:m,email:d,message:u}).then((function(e){e.error?j(b(b({},o),{},{error:e.error})):j(b(b({},o),{},{sent:!0,name:"",email:"",message:"",buttonText:"Sent",success:!0}))}))},x=function(e){return function(t){var n;j(b(b({},o),{},(n={},Object(c.a)(n,e,t.target.value),Object(c.a)(n,"error",!1),Object(c.a)(n,"success",!1),Object(c.a)(n,"buttonText","Send Message"),n)))}};return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("div",{className:"alert alert-danger",style:{display:h?"":"none"},children:h}),Object(s.jsx)("div",{className:"alert alert-success",style:{display:O?"":"none"},children:"Thank you for contacting us"}),Object(s.jsx)("div",{className:"container my-4",children:Object(s.jsxs)("form",{onSubmit:g,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"lead",children:"Name"}),Object(s.jsx)("input",{type:"text",onChange:x("name"),className:"form-control",value:m,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"lead",children:"Email"}),Object(s.jsx)("input",{type:"text",onChange:x("email"),className:"form-control",value:d,required:!0})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"lead",children:"Message"}),Object(s.jsx)("textarea",{rows:"10",onChange:x("message"),className:"form-control",value:u,required:!0})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn btn-primary",children:p})})]})})]})}},"k/Hk":function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),s=n("q1tI"),r=n.n(s),a=n("nOHt"),o=n.n(a),l=n("8Kt/"),i=n.n(l),j=(n("YFqc"),n("wd/R"),n("5Yp1"),n("Qgx5")),b=n("0c6W"),u=n("iuBY"),d=n("obyI"),m=(n("StKG"),n("c/hf")),p=n("L3MA"),O=n("A3CJ"),h=n("DCcX"),g=n("vkoW"),x=n("CaDr"),f=function(e){var t=e.user,n=e.blogs,a=e.query,l=Object(s.useState)(!1),f=l[0],w=l[1],y=function(){return w(!f)},N=Object(s.useState)(!1),v=N[0],S=N[1],P=function(){return S(!v)},_=Object(s.useState)(0),k=_[0],T=_[1],E=Object(s.useState)(!1),q=E[0],C=E[1],I=Object(s.useState)({followers:t.followers,followings:t.following}),F=I[0],L=I[1],D=F.followers,R=F.followings;Object(s.useEffect)((function(){!function(e){if(Object(u.e)()){var t=e.followers.find((function(e){return e._id===Object(u.e)()._id}));C(!!t)}else o.a.push("/signin");Object(b.g)(e.username).then((function(e){if(e.error)console.log(e.error);else{console.log(e.blogs);var t=0,n=0;e.blogs.map((function(e){t+=e.ratings.length,e.ratings.map((function(e){n+=e.rate,console.log("lenght",t),console.log("rate",n)}))})),T(n/t)}}))}(t)}),[]);var B=function(){return Object(c.jsx)(O.Img,{src:"/images/blank-profile-picture.webp"})},K=Object(u.c)("token");return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsxs)(i.a,{children:[Object(c.jsxs)("title",{children:[t.username," | ",d.b]}),Object(c.jsx)("meta",{name:"description",content:"Blogs by ".concat(t.username)}),Object(c.jsx)("link",{rel:"canonical",href:"".concat(d.d,"/profile/").concat(a.username)}),Object(c.jsx)("meta",{property:"og:title",content:"".concat(t.username," | ").concat(d.b)}),Object(c.jsx)("meta",{name:"og:description",content:"Blogs by ".concat(t.name)}),Object(c.jsx)("meta",{property:"og:type",content:"website"}),Object(c.jsx)("meta",{property:"og:url",content:"".concat(d.d,"/profile/").concat(a.username)}),Object(c.jsx)("meta",{property:"og:site_name",content:"".concat(d.b)}),Object(c.jsx)("meta",{property:"og:image",content:"".concat(d.d,"/images/sbLogo.png")}),Object(c.jsx)("meta",{property:"og:image:secure_url",content:"".concat(d.d,"/images/sbLogo.png")}),Object(c.jsx)("meta",{property:"og:image:type",content:"image/png"}),Object(c.jsx)("meta",{property:"fb:app_id",content:"".concat(d.e)})]}),Object(c.jsxs)(j.a,{children:[Object(c.jsx)("div",{className:"container",style:{boxShadow:"rgb(220, 220, 220) 3px 2px 7px 0px",borderRadius:"5px"},children:Object(c.jsx)("div",{className:"row ",children:Object(c.jsx)("div",{className:"col-md-12 ",children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("div",{className:"row align-items-center ",children:[Object(c.jsx)("div",{className:"col-md-3",children:Object(c.jsx)(O.Img,{src:["".concat(d.a,"/user/photo/").concat(t.username),"/images/blank-profile-picture.webp"],unloader:B,className:"img img-fluid img-thumbnail mb-3",style:{height:"10rem",width:"10rem",borderRadius:"50%"},alt:"user profile"})}),Object(c.jsxs)("div",{className:"col-md-3",children:[Object(c.jsx)("h5",{children:t.name}),Object(c.jsxs)("h6",{className:"text-muted",children:["@",t.username]}),Object(c.jsx)("p",{className:"mt-4",children:t.about?Object(c.jsx)("q",{children:t.about}):""})]}),Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsxs)("div",{className:"followUnfollowList",style:{display:"flex"},children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:n.length}),Object(c.jsx)("span",{children:"Posts"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{onClick:y,children:D?D.length:"0"}),Object(c.jsx)("span",{children:"Followers"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{onClick:P,children:R?R.length:"0"}),Object(c.jsx)("span",{children:"Following"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:k?Math.round(10*(k+Number.EPSILON))/10:"0"}),Object(c.jsx)("span",{children:"Rating"})]})]}),Object(c.jsx)(m.a,{following:q,onButtonClick:function(e){e(Object(u.e)()._id,K,t._id).then((function(e){e.error?console.log(e.error):(L({followers:e.followers,followings:e.following}),C(!q))}))}})]}),Object(c.jsxs)(h.a,{isOpen:f,toggle:y,className:"buttonLabel1",children:[Object(c.jsx)(g.a,{toggle:y,children:"Followers"}),Object(c.jsx)(x.a,{children:0!=D.length?D.map((function(e,t){return Object(c.jsx)("div",{className:"userProfTabView",children:Object(c.jsx)("a",{href:"/profile/".concat(e.username),children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:Object(c.jsx)(O.Img,{src:["".concat(d.a,"/user/photo/").concat(e.username),"/images/blank-profile-picture.webp"],unloader:B,className:"img img-fluid ",style:{height:"2.5rem",width:"2.5rem",borderRadius:"50%"},alt:"user profile"})}),Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{children:e.username}),Object(c.jsx)("span",{children:e.name})]})]})})},t)})):Object(c.jsx)("p",{children:"No users found"})})]}),Object(c.jsxs)(h.a,{isOpen:v,toggle:P,className:"buttonLabel2",children:[Object(c.jsx)(g.a,{toggle:P,children:"Following"}),Object(c.jsx)(x.a,{children:0!=R.length?R.map((function(e,t){return Object(c.jsx)("div",{className:"userProfTabView",children:Object(c.jsx)("a",{href:"/profile/".concat(e.username),children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:Object(c.jsx)(O.Img,{src:["".concat(d.a,"/user/photo/").concat(e.username),"/images/blank-profile-picture.webp"],unloader:B,className:"img img-fluid ",style:{height:"2.5rem",width:"2.5rem",borderRadius:"50%"},alt:"user profile"})}),Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{children:e.username}),Object(c.jsx)("span",{children:e.name})]})]})})},t)})):Object(c.jsx)("p",{children:"No users found"})})]})]})})})})})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"container pb-5",children:Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)(p.a,{blog:e},t)}))})})]})]})};f.getInitialProps=function(e){var t=e.query;return Object(b.f)(t.username).then((function(e){if(!e.error)return{user:e.user,blogs:e.blogs,query:t};console.log(e.error)}))},t.default=f}},[["PavT",1,0,7,2,3,4,6,8,12,5]]]);