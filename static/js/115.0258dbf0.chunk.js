"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{75:function(e,t,r){r.d(t,{Df:function(){return s},M1:function(){return h},TP:function(){return o},qF:function(){return d},tx:function(){return f}});var n=r(861),a=r(687),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week");case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},115:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(687),c=r.n(u),s=r(791),i=r(87),o=r(689),p=r(75),h=r(184);t.default=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,s.useState)(!0),f=(0,a.Z)(l,2),v=f[0],d=f[1],m=(0,i.lr)(),w=(0,a.Z)(m,2),x=w[0],y=w[1],g=x.get("query"),k=(0,s.useState)((function(){return g||""})),b=(0,a.Z)(k,2),j=b[0],Z=b[1],S=(0,o.TH)();(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,p.qF)(g);case 4:t=e.sent,r=t.results,u(r),d(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();g&&e()}),[g]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Search movies:"}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({query:j})},children:[(0,h.jsx)("input",{value:j,onChange:function(e){Z(e.target.value)},name:"search",type:"text",placeholder:"Type here"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})]}),(0,h.jsx)("ul",{children:g?v?"Loading...":r.length>0?r.map((function(e){var t=e.title,r=e.id;return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{state:{from:S},to:"/movies/".concat(r),children:t})},r)})):(0,h.jsx)("p",{children:"No movies with this title were found. Try entering another title"}):(0,h.jsx)("p",{})})]})}}}]);
//# sourceMappingURL=115.0258dbf0.chunk.js.map