_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"0lIN":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/blogs",function(){return e("BzMX")}])},BzMX:function(n,t,e){"use strict";e.r(t);var c=e("nKUr"),o=e("5Yp1"),r=e("vC6e"),a=e("nVAt");e("YFqc");t.default=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)(r.a,{children:Object(c.jsxs)("div",{className:"container-fluid",style:{paddingTop:"140px"},children:[Object(c.jsx)("h1",{className:"pt-5 pb-5",children:"Manage Blog"}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(a.a,{})})})]})})})}},SMr6:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u})),e.d(t,"d",(function(){return s})),e.d(t,"c",(function(){return l}));var c=e("LpSC"),o=e.n(c),r=e("obyI"),a=e("iuBY"),i=function(n,t){return o()("".concat(r.a,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return Object(a.d)(n),n.json()})).catch((function(n){return console.log(n)}))},u=function(){return o()("".concat(r.a,"/tags"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},s=function(n){return o()("".concat(r.a,"/tag/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},l=function(n,t){return o()("".concat(r.a,"/tag/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return Object(a.d)(n),n.json()})).catch((function(n){return console.log(n)}))}},abxw:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u})),e.d(t,"d",(function(){return s})),e.d(t,"c",(function(){return l}));var c=e("LpSC"),o=e.n(c),r=e("obyI"),a=e("iuBY"),i=function(n,t){return o()("".concat(r.a,"/category"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return Object(a.d)(n),n.json()})).catch((function(n){return console.log(n)}))},u=function(){return o()("".concat(r.a,"/categories"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},s=function(n){return o()("".concat(r.a,"/category/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))},l=function(n,t){return o()("".concat(r.a,"/category/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return Object(a.d)(n),n.json()})).catch((function(n){return console.log(n)}))}},nVAt:function(n,t,e){"use strict";var c=e("nKUr"),o=e("q1tI"),r=e.n(o),a=e("YFqc"),i=e.n(a),u=(e("nOHt"),e("iuBY")),s=(e("abxw"),e("SMr6"),e("zycw")),l=e("wd/R"),d=e.n(l);t.a=function(n){var t=n.username,e=Object(o.useState)([]),a=e[0],l=e[1],j=Object(o.useState)(""),h=j[0],f=j[1],b=Object(u.c)("token");Object(o.useEffect)((function(){p()}),[]);var p=function(){Object(s.d)(t).then((function(n){n.error?console.log(n.error):l(n)}))},m=function(n){window.confirm("Are you sure you want to delete the blog")&&function(n){Object(s.i)(n,b).then((function(n){n.error?console.log(n.error):(f(n.message),p())}))}(n)},O=function(n){return Object(u.e)()&&"admin"!==Object(u.e)().role?Object(c.jsx)(i.a,{href:"/user/crud/".concat(n.slug),children:Object(c.jsx)("a",{className:"ml-3 btn btn-sm btn-primary",children:"Update"})}):Object(u.e)()&&"admin"===Object(u.e)().role?Object(c.jsx)(i.a,{href:"/admin/crud/".concat(n.slug),children:Object(c.jsx)("a",{className:"ml-3 btn btn-sm btn-primary",children:"Update"})}):void 0};return Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-md-12",children:[h&&Object(c.jsx)("div",{className:"alert alert-warning",children:h}),a.map((function(n,t){return Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)("h3",{children:n.title}),Object(c.jsxs)("p",{className:"mark",children:["Written by ",n.postedBy.name," | Published on ",d()(n.updatedAt).fromNow()]}),Object(c.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return m(n.slug)},children:"Delete"}),O(n)]},t)}))]})})})})}},vC6e:function(n,t,e){"use strict";var c=e("nKUr"),o=e("q1tI"),r=e.n(o),a=e("nOHt"),i=e.n(a),u=e("iuBY");t.a=function(n){var t=n.children;return Object(o.useEffect)((function(){Object(u.e)()?"admin"!==Object(u.e)().role&&i.a.push("/"):i.a.push("/signin")}),[]),Object(c.jsx)(r.a.Fragment,{children:t})}}},[["0lIN",1,0,7,2,3,4,6]]]);