(this.webpackJsonptweetcleanerwebsite=this.webpackJsonptweetcleanerwebsite||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/Logo.e86324af.png"},121:function(e,t,a){e.exports=a(201)},175:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(13),o=a.n(c),i=a(46),s=a(75),m=a.n(s),u=a(95),h=a(70),d=a(19),p=a(203),E=a(204),w=a(205),f=a(202),g=E.a.Title,b=E.a.Paragraph;n="https://tweet-cleaner-server.herokuapp.com";var y=function(){return l.a.createElement(E.a,null,l.a.createElement(g,null,"Welcome to TweetCleaner"),l.a.createElement(b,null,"This app helps Twitter users to delete a batch of their tweets very fast. You have multiple options to clean your tweets, such as:"),l.a.createElement(b,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Choosing a date or period (For example, 30 days) to delete all the created tweets before that date."),l.a.createElement("li",null,"Filter your tweets based on time, content, or the words in the tweet, number of likes, number of comments, etc. Once you are done with filtering them, you can delete the filtered tweets."))),l.a.createElement(f.a,null),l.a.createElement(b,null,"To start Sign in with your Twitter account:"),l.a.createElement("a",{href:"".concat(n,"/auth/twitter")},l.a.createElement("img",{src:"https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/icons/sign-in-with-twitter-gray-1-png-img-fullhd-medium.png.img.fullhd.medium.png",alt:"Sign in with Twitter"})))};var v,k=function(e){return l.a.createElement("h2",null,"Hi ",e.user.name)},j=(a(175),a(115)),x=a.n(j),T=a(116),O=a.n(T),C=p.a.Header,S=p.a.Footer,I=p.a.Content,L=E.a.Link,F=E.a.Text;v="https://tweet-cleaner-server.herokuapp.com";var H=function(){var e=Object(r.useState)({}),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),o=Object(h.a)(c,2),s=(o[0],o[1]),E=Object(r.useState)(!1),f=Object(h.a)(E,2),g=f[0],b=f[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(v,"/auth/login/success"),{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){if(200===e.status)return e.data;throw new Error("Failed to authenticate user.")})).catch((function(e){return{error:"Failed to authenticate user."}}));case 2:(t=e.sent).error?(b(!1),s(t.err)):(b(!0),n(t.user));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement("div",null,l.a.createElement(p.a,{className:"layout",style:{height:"100vh"}},l.a.createElement(C,null,l.a.createElement("div",{className:"logo"},l.a.createElement(i.b,{to:"/tweetcleanerwebsite"},l.a.createElement("img",{src:x.a,alt:"Website Logo",style:{width:"50px"}}),l.a.createElement(F,{strong:!0,style:{marginLeft:"8px"}},"TweetCleaner"))),g?l.a.createElement(w.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},l.a.createElement(w.a.Item,{key:"1"},l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement(w.a.Item,{key:"2"},l.a.createElement(i.b,{to:"/profile"},"Profile")),l.a.createElement(w.a.Item,{key:"3"},l.a.createElement("a",{href:"".concat(v,"/auth/logout")},"Logout"))):l.a.createElement(w.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},l.a.createElement(w.a.Item,{key:"1"},l.a.createElement(i.b,{to:"/tweetcleanerwebsite"},"Home")),l.a.createElement(w.a.Item,{key:"2"},l.a.createElement("a",{href:"".concat(v,"/auth/twitter")},"Login")))),l.a.createElement(I,{style:{padding:"0 50px"}},l.a.createElement("div",{className:"site-layout-content",style:{margin:"16px 0"}},l.a.createElement(d.c,null,g&&l.a.createElement(d.a,{path:"/profile"},l.a.createElement(k,{user:a})),l.a.createElement(d.a,{path:"/"},l.a.createElement(y,null))))),l.a.createElement(S,{style:{textAlign:"center"}},l.a.createElement(F,{strong:!0},"Made with"," ",l.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," ","by"," ",l.a.createElement(L,{href:"https://parsahejabi.com/",target:"_blank"},"Parsa Hejabi")," ","- 2020"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.1d5a8837.chunk.js.map