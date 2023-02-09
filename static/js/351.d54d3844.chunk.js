"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[351],{2639:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(4691),a="Loader_Loader__wqo9C",s=t(184),o=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.s5,{strokeColor:"teal",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},7351:function(e,r,t){t.r(r),t.d(r,{default:function(){return N}});var n=t(5861),a=t(9439),s=t(7757),o=t.n(s),i=t(1087),c=t(7689),u=t(2791),l=t(7596),p=t(8617),h="GoBack_Link__ftLUK",f=t(184),d=function(e){var r=e.to,t=e.children;return(0,f.jsxs)(i.rU,{className:h,to:r,children:[(0,f.jsx)(p.jTe,{size:"20"}),t]})},v=t(761),w=t(2639),m=t(985),x="MovieDetails_Wrapper__1xf4e",_="MovieDetails_Image__V6K1r",g="MovieDetails_Title__dmr4s",y="MovieDetails_Text__J4zDo",k="MovieDetails_TitleOverview__l4Ldk",b="MovieDetails_Inform__XDs3z",j="MovieDetails_Item__Vlw5d",N=function(){var e,r,t=null!==(e=null===(r=(0,c.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",s=(0,c.UO)().movieId,p=(0,u.useState)([]),h=(0,a.Z)(p,2),N=h[0],Z=h[1];return(0,u.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.TP)(s);case 3:r=e.sent,Z(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,l.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),(0,f.jsxs)("main",{children:[(0,f.jsx)(d,{to:t,children:"Go back"}),(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("img",{className:_,src:N.poster_path?"".concat("https://image.tmdb.org/t/p/w400")+N.poster_path:m,alt:N.title||N.name}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{className:g,children:[N.title," (",N.release_date?N.release_date.slice(0,4):" No year",")"]}),(0,f.jsxs)("p",{className:y,children:["User Score:"," ",N.vote_average?Math.floor(10*N.vote_average).toFixed(0):"","%"]}),(0,f.jsx)("h3",{className:k,children:" Overview"}),(0,f.jsx)("p",{className:y,children:N.overview}),(0,f.jsx)("h3",{className:k,children:"Genres"}),(0,f.jsx)("p",{className:y,children:N.genres?N.genres.map((function(e){return e.name})).join(" "):"Sorry genre not found."})]})]}),(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("h2",{className:g,children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{className:j,children:(0,f.jsx)(i.rU,{to:"cast",state:{from:t},children:"Cast"})}),(0,f.jsx)("li",{className:j,children:(0,f.jsx)(i.rU,{to:"reviews",state:{from:t},children:"Reviews"})})]})]}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)(w.Z,{}),children:(0,f.jsx)(c.j3,{})})]})}},761:function(e,r,t){t.d(r,{NV:function(){return l},TP:function(){return d},UF:function(){return c},tx:function(){return w},zv:function(){return h}});var n=t(5861),a=t(7757),s=t.n(a),o=t(3263),i="39f90a74d7e7bd41ea5263b14ea99d63";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/trending/movie/day?api_key=".concat(i));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"},985:function(e,r,t){e.exports=t.p+"static/media/poster.4dcb9bf2a4987bbe3077.png"}}]);
//# sourceMappingURL=351.d54d3844.chunk.js.map