_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"3GiG":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password/reset/[id]",function(){return t("frO5")}])},frO5:function(e,r,t){"use strict";t.r(r);var s=t("rePB"),n=t("nKUr"),o=t("q1tI"),c=t("5Yp1"),a=t("nOHt"),i=t("iuBY");function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){Object(s.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=Object(a.withRouter)((function(e){var r=e.router,t=Object(o.useState)({name:"",newPassword:"",error:"",message:"",showForm:!0}),s=t[0],a=t[1],d=(s.name,s.showForm),u=s.newPassword,j=s.error,p=s.message,w=function(e){e.preventDefault(),Object(i.h)({newPassword:u,resetPasswordLink:r.query.id}).then((function(e){e.error?a(l(l({},s),{},{error:e.error})):a(l(l({},s),{},{message:e.message,newPassword:"",showForm:!1,error:!1}))}))};return Object(n.jsx)(c.a,{children:Object(n.jsxs)("div",{className:"container",style:{paddingTop:"140px"},children:[Object(n.jsx)("h2",{children:"Reset Password"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"alert alert-danger",style:{display:j?"":"none"},children:j}),Object(n.jsx)("div",{className:"alert alert-success",style:{display:p?"":"none"},children:p}),d&&Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("form",{onSubmit:w,children:Object(n.jsxs)("div",{className:"form-group pt-5",children:[Object(n.jsx)("input",{type:"password",required:!0,onChange:function(e){return a(l(l({},s),{},{newPassword:e.target.value}))},className:"form-control",value:u,placeholder:"Enter your new password"}),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)("button",{className:"btn btn-primary",children:"Change Password"})})]})})})]})})}))}},[["3GiG",2,0,1,3,4,5]]]);