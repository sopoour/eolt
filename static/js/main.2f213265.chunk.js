(this.webpackJsonpeolt=this.webpackJsonpeolt||[]).push([[0],{101:function(e,t){},13:function(e,t,n){e.exports={scrolled:"Navbar_scrolled__wgQ-v",buttonContainer:"Navbar_buttonContainer__1SOht",active:"Navbar_active__1_PBO"}},131:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(52),i=n.n(a),r=(n(68),n(4)),j=(n(69),n(0)),o=function(e){return Object(j.jsx)("input",{type:"text",placeholder:"\uf002 Search...",onFocus:e.onFocus,onBlur:e.onBlur,onKeyUp:e.onChange,value:e.searchTerm,onChange:e.onChange})},l=n(27),b=n.n(l),d=n(53),h=n.n(d),u=function(e){return Object(j.jsx)("section",{className:h.a.section,children:e.children})},f=n.p+"static/media/erc_eu_logo.10532ae9.jpg",O=function(){return Object(j.jsxs)(u,{children:[Object(j.jsxs)("div",{className:b.a.contentBox,children:[Object(j.jsx)("p",{children:"Some description about the project"}),Object(j.jsx)("p",{style:{fontSize:"12px",fontStyle:"italic"},children:"Principal Editors and responsibly people of the page: Mike"})]}),Object(j.jsxs)("div",{className:b.a.contentBox,children:[Object(j.jsx)("p",{children:"This research has received funding from the European Research Council (ERC) under the European Union\u2019s Horizon 2020 research and innovation programme (Grant Agreement No [695528] \u2013 MSG: Making Sense of Games)."}),Object(j.jsx)("img",{src:f,alt:"euLogo"})]})]})},x=n(14),p=n.n(x),m=n(54),g=function(e,t,n){var s=Object(c.useState)(""),a=Object(r.a)(s,2),i=a[0],j=a[1],o=Object(c.useState)([]),l=Object(r.a)(o,2),b=l[0],d=l[1];return Object(c.useEffect)((function(){Object(m.a)(p.a.mark((function n(){var c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=[],i||!t){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,e.filter((function(e){return e.fields.mainTitle.toLowerCase().includes(i.toLowerCase())||e.fields.mainContent.toLowerCase().includes(i.toLowerCase())}));case 7:c=n.sent,d(c);case 9:case"end":return n.stop()}}),n)})))()}),[e,i,t]),{searchResults:b,searchTerm:i,handleChange:function(e){t&&n(!0),j(e.target.value)}}},v=n(5),_=n(28),L=n.n(_),C=function(e){var t=e.data.fields.slug;return Object(j.jsx)(v.b,{className:L.a.cardsWrapper,style:{textDecoration:"none"},to:t,children:Object(j.jsxs)("div",{className:L.a.card,children:[Object(j.jsx)("h1",{children:e.data.fields.mainTitle}),Object(j.jsxs)("p",{children:[" ",e.data.fields.abstract]}),Object(j.jsxs)("p",{children:["Author: ",e.data.fields.author]})]})},t)},N=n(55),T=n.n(N),w=function(e){return Object(j.jsxs)("div",{className:T.a.cardContainer,children:[!e.isLoading&&e.data.length>0&&e.data.map((function(e){return Object(j.jsx)(C,{data:e},e.fields.slug)})),e.isLoading&&Object(j.jsx)("p",{children:"Loading..."})]})},S=n(72).createClient({space:"",accessToken:""}),E=S.getEntries().then((function(e){return e.items.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0}))})),y=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),i=Object(r.a)(a,2),j=i[0],o=i[1];return Object(c.useEffect)((function(){E.then((function(e){s(e),o(!1)}))}),[]),[n,j]},F=function(){var e=y(),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),b=l[0],d=l[1],h=g(n,!0,d),f=h.searchResults,x=h.searchTerm,p=h.handleChange;return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsxs)(u,{children:[Object(j.jsx)(o,{searchTerm:x,onChange:p,onKeyUp:p,onBlur:function(){d(!1)}}),b&&Object(j.jsx)(w,{isLoading:a,data:f})]}),!b&&Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(v.b,{to:"contents",className:"btnDark centered",style:{width:"100px",height:"20px"},children:"Browse"}),Object(j.jsx)(O,{})]})]})},M=n(13),B=n.n(M),k=function(){var e=Object(c.useState)(window.innerWidth),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=function(){return s(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:n}},I=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),s=n[0],a=n[1];window.addEventListener("scroll",(function(){var e=window.scrollY;a(e>=100)}));var i=s?B.a.scrolled:"",o=k().width<475?Object(j.jsx)("h1",{children:"EoLT"}):Object(j.jsx)("h1",{children:"Encyclopedia of Ludic Terms"});return Object(j.jsxs)("header",{className:i,children:[Object(j.jsxs)(v.b,{to:"/",children:[" ",o," "]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:B.a.buttonContainer,children:[Object(j.jsxs)(v.c,{to:"about-us",className:function(e){return e.isActive?B.a.active:B.a.btnLight},children:[" ","About us"]}),Object(j.jsxs)(v.c,{to:"support-us",className:function(e){return e.isActive?B.a.active:B.a.btnLight},children:[" ","Support"]})]})})]})},A=n(9),D=n.n(A),P=function(){return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("section",{className:D.a.ftMain,children:[Object(j.jsxs)("div",{className:D.a.ftMainItem,children:[Object(j.jsx)("h2",{className:D.a.ftTitle,children:"About"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(v.b,{to:"/about-us",children:"Project Group"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Editorial Information"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"How to Cite the EoLT"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Contact"})})]})]}),Object(j.jsxs)("div",{className:D.a.ftMainItem,children:[Object(j.jsx)("h2",{className:D.a.ftTitle,children:"Browse"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Table of Contents"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Archives"})})]})]}),Object(j.jsxs)("div",{className:D.a.ftMainItem,children:[Object(j.jsx)("h2",{className:D.a.ftTitle,children:"Support EoLT"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(v.b,{to:"/support-us",children:"How to support us"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Make A Donation"})})]})]})]}),Object(j.jsx)("section",{className:D.a.ftSocial,children:Object(j.jsxs)("ul",{className:D.a.ftSocialList,children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-facebook"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-twitter"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-instagram"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-github"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("i",{className:"fab fa-youtube"})})})]})}),Object(j.jsx)("section",{className:D.a.ftLegal,children:Object(j.jsx)("ul",{className:D.a.ftLegalList,children:Object(j.jsx)("li",{children:"The Encyclopedia of Ludic Terms is Copyright \xa9 2021 by XXX"})})})]})},R=function(){var e=y(),t=Object(r.a)(e,2),n=t[0],c=t[1],s=g(n,!1),a=s.searchResults,i=s.searchTerm,l=s.handleChange;return Object(j.jsxs)(u,{children:[Object(j.jsx)(o,{searchTerm:i,onChange:l}),Object(j.jsx)(w,{isLoading:c,data:a})]})},z=n(2),G=function(e){var t=function(e){return S.getEntries({"fields.slug":e,content_type:"gameArticle"}).then((function(e){return e.items}))}(e),n=Object(c.useState)(null),s=Object(r.a)(n,2),a=s[0],i=s[1],j=Object(c.useState)(!0),o=Object(r.a)(j,2),l=o[0],b=o[1];return Object(c.useEffect)((function(){t.then((function(e){i(e[0].fields),b(!1)}))}),[t]),[a,l]},W=n(136),Q=function(){var e=Object(z.g)().contentId,t=Object(z.f)(),n=G(e),c=Object(r.a)(n,2),s=c[0];if(c[1])return Object(j.jsx)("p",{children:"Loading..."});return Object(j.jsxs)(u,{children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),t(-1)},children:"Go Back"}),Object(j.jsx)("h1",{children:s.mainTitle}),Object(j.jsxs)("h3",{style:{fontStyle:"italic"},children:[" ",s.subtitle]}),Object(j.jsx)(W.a,{children:s.abstract}),Object(j.jsx)(W.a,{children:s.mainContent}),Object(j.jsx)(W.a,{children:s.bibliography}),Object(j.jsx)(W.a,{children:s.authorInfo})]})},U=function(){return Object(j.jsx)("h1",{children:"This is an about us page"})},H=function(){return Object(j.jsx)("h1",{children:"This is a support page"})},J=function(){return Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)("p",{children:"Page is not found!"})})},K=function(){return Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)(I,{}),Object(j.jsxs)(z.c,{children:[Object(j.jsx)(z.a,{path:"/",element:Object(j.jsx)(F,{})}),Object(j.jsx)(z.a,{path:"/contents",element:Object(j.jsx)(R,{})}),Object(j.jsx)(z.a,{path:"/contents/:contentId",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(z.a,{path:"/about-us",element:Object(j.jsx)(U,{})}),Object(j.jsx)(z.a,{path:"/support-us",element:Object(j.jsx)(H,{})}),Object(j.jsx)(z.a,{path:"*",element:Object(j.jsx)(J,{})})]}),Object(j.jsx)(P,{})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(v.a,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),X()},27:function(e,t,n){e.exports={contentBox:"Info_contentBox__10wfM"}},28:function(e,t,n){e.exports={cardsWrapper:"Card_cardsWrapper__1LDBp",card:"Card_card__1eE8R"}},30:function(e,t){},53:function(e,t,n){e.exports={section:"Section_section__3vam2"}},55:function(e,t,n){e.exports={cardContainer:"CardContainer_cardContainer__7AQTQ"}},68:function(e,t,n){},69:function(e,t,n){},9:function(e,t,n){e.exports={ftTitle:"Footer_ftTitle__16Msb",ftMain:"Footer_ftMain__FUbNr",ftMainItem:"Footer_ftMainItem__22rN7",ftSocial:"Footer_ftSocial__3Axpz",ftSocialList:"Footer_ftSocialList__M2dJV",ftLegal:"Footer_ftLegal__7QVoK",ftLegalList:"Footer_ftLegalList__1I5Od"}}},[[131,1,2]]]);
//# sourceMappingURL=main.2f213265.chunk.js.map