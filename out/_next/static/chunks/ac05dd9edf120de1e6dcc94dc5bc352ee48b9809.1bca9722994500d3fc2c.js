(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"9oip":function(e,t,c){"use strict";var s=c("nKUr"),a=c("q1tI"),n=c("zycw"),i=c("iuBY"),r=c("wd/R"),l=c.n(r),o=c("A3CJ"),d=c("obyI"),j=c("YFqc"),m=c.n(j);var b=function(e){var t=e.comment,c=e.deleteComment;return Object(s.jsxs)("div",{className:"commentDisplay",children:[Object(s.jsxs)("div",{className:"userDetailDelete",children:[Object(s.jsx)(m.a,{href:"/profile/".concat(t.postedBy.username),children:Object(s.jsxs)("div",{className:"photoNameUserDate",children:[Object(s.jsx)("div",{className:"photoContainer",children:Object(s.jsx)(o.Img,{src:["".concat(d.a,"/user/photo/").concat(t.postedBy.username),"/images/blank-profile-picture.webp"],unloader:function(){return Object(s.jsx)(o.Img,{src:"/images/blank-profile-picture.webp"})},className:"img img-fluid ",style:{height:"3.4rem",width:"3.4rem",borderRadius:"50%"},alt:"user profile"})}),Object(s.jsxs)("div",{className:"nameUserDateContainer",children:[Object(s.jsx)("span",{children:t.postedBy.name}),Object(s.jsx)("span",{children:t.postedBy.username}),Object(s.jsx)("span",{children:l()(t.createdOn).fromNow()})]})]})}),Object(i.e)().username===t.postedBy.username?Object(s.jsx)("div",{className:"removeBtn",children:Object(s.jsx)("button",{onClick:function(){c(t)},children:Object(s.jsx)("span",{children:Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"})})})})}):""]}),Object(s.jsx)("div",{className:"commentTextContainer",children:t.text})]})};t.a=function(e){var t=e.slug,c=e.comments,r=e.updateComments,l=Object(a.useState)(""),o=l[0],d=l[1],j=Object(a.useState)(!1),m=j[0],u=j[1],h=function(e){u(!1),d(e.target.value)},f=function(e){e.preventDefault();var c=Object(i.e)()._id,s=Object(i.c)("token"),a={text:o};""===o?u(!0):Object(n.a)(c,s,t,a).then((function(e){e.error?console.log(e.error):(d(""),r(e.comments))}))},O=function(e){window.confirm("Delete your comment ? ")&&function(e){var c=Object(i.e)()._id,s=Object(i.c)("token");Object(n.k)(c,s,t,e).then((function(e){e.error?console.log(e.error):r(e.comments)}))}(e)};return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{className:"commentBar",children:[Object(s.jsx)("input",{type:"text",onChange:h,value:o,className:m?"form-control is-invalid":"form-control",id:"validationServer03","aria-describedby":"validationServer03Feedback",required:!0}),Object(s.jsx)("button",{onClick:f,children:Object(s.jsx)("span",{children:"Comment"})})]}),Object(s.jsx)("div",{id:"validationServer03Feedback",class:"invalid-feedback",children:"Please provide a valid city."})]}),Object(s.jsxs)("div",{className:"mt-5",children:[Object(s.jsxs)("div",{className:"commentNumber",children:[c.length," Comments"]}),c.sort((function(e,t){return t.createdOn>e.createdOn?1:-1})).map((function(e,t){return Object(s.jsx)(b,{comment:e,deleteComment:O},t)}))]})]})}},L3MA:function(e,t,c){"use strict";var s=c("nKUr"),a=c("q1tI"),n=c.n(a),i=c("wHCo"),r=c.n(i),l=c("wd/R"),o=c.n(l),d=c("obyI"),j=c("YFqc"),m=c.n(j),b=c("zycw"),u=c("iuBY"),h=c("oI+J"),f=c("Z7gm"),O=c("X68C"),x=c("kvuc"),g=c("DCcX"),p=c("vkoW"),v=c("CaDr"),w=c("A3CJ"),N=c("9oip");c("K9M2");t.a=function(e){var t=e.blog,c=Object(a.useState)(!1),i=c[0],l=c[1],j=Object(a.useState)(""),k=j[0],C=j[1],y=Object(a.useState)(!1),B=y[0],L=y[1],z=function(){H(F),L(!B)},I=Object(a.useState)({isLike:!1,likes:0}),M=I[0],D=I[1],S=M.isLike,_=M.likes,A=Object(a.useState)([]),F=A[0],H=A[1];Object(a.useEffect)((function(){C(Object(u.e)()._id),H(t.comments),function(){var e=Object(u.e)()&&Object(u.e)()._id,c=t.likes&&t.likes.find((function(t){return t._id===e})),s=t&&t.likes?t.likes.length:"";D(c?{isLike:!0,likes:s}:{isLike:!1,likes:s})}()}),[]);var R=Object(u.c)("token"),V=function(){return l((function(e){return!e}))},q=function(e){window.confirm("Are you sure you want to delete the blog")&&function(e){Object(b.i)(e,R).then((function(e){e.error?console.log(e.error):window.location.reload()}))}(e)},J=function(){return Object(s.jsx)(w.Img,{src:"/images/blank-profile-picture.webp"})};return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("div",{className:"userSinglePostContainer",children:[Object(s.jsxs)("div",{className:"userPostTitle",children:[Object(s.jsx)("a",{href:"/profile/".concat(t.postedBy.username),children:Object(s.jsxs)("div",{className:"profImageDate",children:[Object(s.jsx)("div",{className:"profImage",children:Object(s.jsx)(w.Img,{src:["".concat(d.a,"/user/photo/").concat(t.postedBy.username),"/images/blank-profile-picture.webp"],unloader:J,className:"img img-fluid ",style:{height:"3rem",width:"3rem",borderRadius:"50%"},alt:"user profile"})}),Object(s.jsxs)("div",{className:"userNameDate",children:[Object(s.jsx)("p",{className:"userName",children:t.postedBy.name}),Object(s.jsxs)("p",{className:"postDate",children:["Created ",o()(t.createdAt).fromNow()," "]})]})]})}),t.postedBy._id===k?Object(s.jsxs)(h.a,{direction:"left",isOpen:i,toggle:V,children:[Object(s.jsx)(f.a,{className:"editBlog",children:Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen",class:"svg-inline--fa fa-pen fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"})})}),Object(s.jsxs)(O.a,{children:[Object(s.jsx)(x.a,{href:"/user/crud/".concat(t.slug),children:"Edit Blog"}),Object(s.jsx)(x.a,{onClick:function(){return q(t.slug)},children:"Delete blog"})]})]}):""]}),Object(s.jsxs)("div",{className:"userPostBody",children:[Object(s.jsxs)("div",{className:"postTitle",children:[Object(s.jsx)(m.a,{href:"/blogs/".concat(t.slug),children:Object(s.jsx)("span",{children:t.title})}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("div",{className:"postImage",children:Object(s.jsx)(m.a,{href:"/blogs/".concat(t.slug),children:Object(s.jsx)(w.Img,{className:"img img-fluid ",src:["".concat(d.a,"/blog/photo/").concat(t.slug)],unloader:J,style:{maxHeight:"300px",width:"auto"},alt:t.title})})}),Object(s.jsx)("div",{className:"postDesc",children:r()(t.excerpt)})]}),Object(s.jsx)("div",{className:"userPostFooter",children:Object(s.jsx)(m.a,{href:"/blogs/".concat(t.slug),children:Object(s.jsx)("a",{className:"readMore",children:"Read More"})})}),Object(s.jsxs)("div",{className:"likeCmntShare",children:[Object(s.jsxs)("div",{className:"startIco",onClick:function(){if(Object(u.e)()){var e=S?b.l:b.c,c=Object(u.e)()._id,s=t.slug;e(c,R,s).then((function(e){e.error?console.log(e.error):(console.log(e),console.log("slug",s),D({isLike:!S,likes:e.likes.length}))}))}else Router.push("/signin")},children:[" ",Object(s.jsx)("span",{class:"badge rounded-pill bg-light",children:_}),S?Object(s.jsx)("span",{children:Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"star",class:"svg-inline--fa fa-star fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})})}):Object(s.jsx)("span",{children:Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"star",className:"svg-inline--fa fa-star fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"})})})]}),Object(s.jsx)("div",{className:"commentIco",onClick:z,children:Object(s.jsxs)("span",{children:[Object(s.jsx)("span",{class:"badge rounded-pill bg-light text-dark",children:F.length})," ",Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"comment",className:"svg-inline--fa fa-comment fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"})}),"                    "]})}),Object(s.jsx)("div",{className:"shareIco",children:Object(s.jsx)("span",{children:Object(s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",class:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(s.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})})})})]})]}),Object(s.jsxs)(g.a,{isOpen:B,toggle:z,className:"buttonLabel1",children:[Object(s.jsx)(p.a,{toggle:z,children:"Comment"}),Object(s.jsx)(v.a,{children:Object(s.jsx)(N.a,{slug:t.slug,comments:F,updateComments:function(e){H(e)}})})]})]})}}}]);