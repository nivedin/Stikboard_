_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(r.AmpStateContext))};var o,a=(o=n("q1tI"))&&o.__esModule?o:{default:o},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery,i=void 0!==r&&r;return n||a&&i}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var u=p[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var d=a.props[u],l=o[u]||new Set;l.has(d)?r=!1:(l.add(d),o[u]=l)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),o=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:m,headManager:o,inAmpMode:(0,s.isInAmpMode)(n)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var o=n("Ijbi"),a=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||a(e)||r(e)||i()}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),a=n("lwsE"),r=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var r;return a(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var o=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?a(e):t}},a9lt:function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),a=(n("5Yp1"),n("8Kt/")),r=n.n(a),i=n("q1tI"),c=n.n(i),s=(n("N8+F"),n("YFqc")),u=n.n(s),d=n("iuBY"),l=n("nOHt"),p=n.n(l),m=function(){return Object(i.useEffect)((function(){Object(d.e)()&&("admin"===Object(d.e)().role?p.a.push("/admin"):p.a.push("/user"))}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"getStartedMain",children:Object(o.jsxs)("div",{className:"mainContent",children:[Object(o.jsxs)("div",{className:"leftLogo",children:[Object(o.jsx)("img",{src:"images/cloudEdit.webp",alt:"sbBg",className:"sbBg"}),Object(o.jsx)("div",{className:"sbLogo",children:Object(o.jsx)("img",{src:"images/sbLogo.png",alt:"sbLogo"})})]}),Object(o.jsx)("div",{className:"rightContent",children:Object(o.jsx)("div",{className:"rightSignLogin",children:Object(o.jsxs)("div",{className:"signLoginContainer",children:[Object(o.jsx)("h4",{children:"Let's stick on Stikboard"}),Object(o.jsx)("p",{children:"join today"}),Object(o.jsx)(u.a,{href:"/signup",children:Object(o.jsx)("button",{className:"signUpBtn",children:Object(o.jsx)("span",{children:"Sign up"})})}),Object(o.jsx)(u.a,{href:"/signin",children:Object(o.jsx)("button",{className:"loginBtn",children:Object(o.jsx)("span",{children:"Sign in"})})})]})})})]})})})},f=n("obyI");t.default=Object(l.withRouter)((function(e){e.router;return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsxs)(r.a,{children:[Object(o.jsxs)("title",{children:["GetStarted | ",f.b]}),Object(o.jsx)("meta",{name:"description",content:"Spend all day doing what you love the most. Meet like-minded people and learn. Expose your talents. Connect with people with similar talents around the world. Stikboard is here to stay."}),Object(o.jsx)("link",{rel:"canonical",href:"".concat(f.d)}),Object(o.jsx)("meta",{property:"og:title",content:"Not your usual social network | ".concat(f.b)}),Object(o.jsx)("meta",{name:"og:description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(o.jsx)("meta",{property:"og:type",content:"website"}),Object(o.jsx)("meta",{property:"og:url",content:"".concat(f.d)}),Object(o.jsx)("meta",{name:"twitter:card",content:"".concat(f.d,"/images/mainLogoMeta.jpg")}),Object(o.jsx)("meta",{name:"keywords",content:"socialmedia,blog,technology,writings,poem,movies,reviews,connect,share,stikboard,follow,connection,group,travell"}),Object(o.jsx)("meta",{name:"robots",content:"index, follow"}),Object(o.jsx)("meta",{itemprop:"name",content:f.b}),Object(o.jsx)("meta",{itemprop:"description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(o.jsx)("meta",{itemprop:"image",content:"".concat(f.d,"/images/mainLogoMeta.jpg")}),Object(o.jsx)("meta",{property:"og:site_name",content:"Stikboard"}),Object(o.jsx)("meta",{name:"twitter:image:alt",ontent:"Share your creation to the world,connect with similar talents and participate in exciting competitions."}),Object(o.jsx)("meta",{property:"og:image",content:"".concat(f.d,"/images/mainLogoMeta.jpg")}),Object(o.jsx)("meta",{property:"og:image:secure_url",content:"".concat(f.d,"/images/mainLogoMeta.jpg")}),Object(o.jsx)("meta",{property:"og:image:type",content:"image/png"}),Object(o.jsx)("meta",{property:"fb:app_id",content:"".concat(f.e)}),Object(o.jsx)("meta",{name:"twitter:site",content:"Stikboard"}),Object(o.jsx)("meta",{name:"twitter:card",content:"Share your creation to the world,connect with similar talents and participate in exciting competitions."}),Object(o.jsx)("meta",{name:"twitter:title",content:f.b}),Object(o.jsx)("meta",{name:"twitter:description",content:"Spend all day doing what you love the most.Meet like-minded people and learn.Expose your talents.Connect with people with similar talents around the world.Stikboard is here to stay."}),Object(o.jsx)("meta",{name:"twitter:creator",content:"Stikboard"}),Object(o.jsx)("meta",{name:"twitter:image:src",content:"".concat(f.d,"/images/mainLogoMeta.jpg")})]}),Object(o.jsx)(m,{})]})}))},jtjB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getStarted",function(){return n("a9lt")}])},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=a}},[["jtjB",2,0,1,3,4,5,6]]]);