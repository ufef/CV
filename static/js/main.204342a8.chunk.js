(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){e.exports=a(55)},28:function(e,t,a){},29:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},5:function(e){e.exports=JSON.parse('{"FirstPage":{"title":"FirstPage","items":{"title":"Ramyad Mehdizadeh Seraj","subtitle":"Open-Source Enthusiast| ...","links":{"github":"https://github.com/ramyadmz","linkedin":"https://www.linkedin.com/in/ramyad-seraj/","stackoverflow":"https://stackoverflow.com/story/ramyad"}}},"AboutPage":{"title":"About","items":{"title":"About","text":"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization."}},"ExperiencePage":{"title":"Experience","items":[{"Company":"INFORMATICS SERVICES CO.","Position":"ANALYST AND SENIOR MAINFRAME DEVELOPER","StartDate":"Sep 2012","EndDate":"Jun 2019","Desc":"Developing, maintenance and optimizing  Loan Servicing Softwares"},{"Company":"NEZAM CO.","Position":"SOFTWARE DEVELOPER","StartDate":"Dec 2011","EndDate":"Jun 2012","Desc":"Researching and learning new technologies for developing archiving system "}]},"SkillsPage":{"title":"Skills","items":[{"title":"Python","image":"/url","level":"1"},{"title":"HTML","image":"/url","level":"2"},{"title":"CSS","image":"/url","level":"2"}]},"icons":{"general":{"theme":"icons/theme.png"},"skills":{"js":"/url","html":"/url","css":"/url"}},"themes":{"themeI":{"palleteI":"#3E5050","palleteII":"#EDF5E3","palleteIII":"#EDF5E3","palleteIIII":"#74C697"},"themeII":{"palleteI":"#444","palleteII":"#B2AFAC","palleteIII":"#959492","palleteIIII":"#FFCE2B"},"themeIII":{"palleteI":"#59253A","palleteII":"#EDF5E3","palleteIII":"#EDF5E3","palleteIIII":"#2D4159"}}}')},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),c=a.n(i),r=(a(28),a(1)),s=a(2),o=a(11),m=a(4),u=a(3),h=(a(29),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",{className:"fullpage ".concat(this.props.className||""," ")},e)}}]),a}(n.Component)),p=a(22),E=(a(42),a(43),a(5)),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h,null,l.a.createElement("h1",{className:"palete2 heading"},E.FirstPage.items.title),l.a.createElement("div",null,l.a.createElement("h3",{className:"palete3 heading"},E.FirstPage.items.subtitle)),l.a.createElement("div",{className:"icons-wrapper"},Object.keys(E.FirstPage.items.links).map((function(e){return l.a.createElement("div",{className:"icon"},l.a.createElement(p.SocialMediaIconsReact,{icon:e,url:E.FirstPage.items.links[e]}))}))))}}]),a}(n.Component),d=a(6),I=(a(53),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.Element,{id:"about",name:"about"},l.a.createElement(h,null,l.a.createElement("h1",{className:"palete2 heading"},E.AboutPage.items.title),l.a.createElement("div",null,l.a.createElement("p",{className:"palete3 text"},E.AboutPage.items.text))))}}]),a}(n.Component)),v=(a(21),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"navlist"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"about"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"Experience",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"Experience"))),l.a.createElement("li",null,l.a.createElement(d.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0},l.a.createElement("a",{href:""},"Skills"))))),l.a.createElement("div",{className:"themebox"},l.a.createElement("img",{onClick:function(){e.props.changeTheme()},className:"themeicon",src:E.icons.general.theme,alt:"change theme"})))}}]),a}(n.Component)),b=(a(54),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={theme:"themeI"},e.changeTheme=e.changeTheme.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"changeTheme",value:function(){this.setState({theme:"themeIII"===this.state.theme?"themeI":this.state.theme+"I"})}},{key:"render",value:function(){return l.a.createElement("div",{className:this.state.theme},l.a.createElement(v,{changeTheme:this.changeTheme.bind(this)}),l.a.createElement(g,null),l.a.createElement(I,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.204342a8.chunk.js.map