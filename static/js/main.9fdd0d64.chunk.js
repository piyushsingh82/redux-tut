(this["webpackJsonpredux-tut"]=this["webpackJsonpredux-tut"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(25),r=a.n(s),i=(a(69),a(50),a(20)),l=a(21),o=a(24),j=a(22),d=a(108),h=a(110),b=a(107),u=a(19),O=a(8),x=a(59),m=a.n(x),p=a(60),g=a(1),f=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={username:"",userdetails:"",isError:""},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:3001/api/allusers").then((function(t){e.setState({userdetails:t.data}),console.log(t.data)})).catch((function(t){e.setState({isError:"of Error in reading api "+t})}))}},{key:"handleChange",value:function(e){console.log(e.target.value),this.setState({username:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,c=t.userdetails,n=t.isError;return Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h1",{children:"Listing Page"}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-3",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"Name",children:" Name "}),Object(g.jsx)("input",{type:"text",onChange:function(t){e.handleChange(t)}})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)(p.a,{className:"btn btn-secondary",children:"Search Now"})})]}),Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsx)("div",{className:"table-responsive",children:Object(g.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(g.jsx)("thead",{className:"thead-dark",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Username"}),Object(g.jsx)("th",{children:"Useremailid"}),Object(g.jsx)("th",{children:"UserPassword"})]})}),Object(g.jsx)("tbody",{children:c?c.filter((function(e){return""===a?e:e.username.toLowerCase().includes(a.toLowerCase())?(console.log(e.length),e):e})).map((function(e,t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.username}),Object(g.jsx)("td",{children:e.useremail}),Object(g.jsx)("td",{children:e.userpasswd})]},t)})):null})]})}),n?Object(g.jsxs)("p",{children:["There is some issue ",n," "]}):null]})]})]})}}]),a}(n.a.Component),v=a(64),N=a(26),w=function(e){return Object(g.jsxs)("div",{className:"todo_style",children:[Object(g.jsx)("i",{className:"fa fa-arrow","aria-hidden":"true",onClick:function(){e.onSelect(e.id)},children:"x"}),Object(g.jsx)("li",{children:e.text})]})},y=function(){var e=Object(c.useState)("Buy A Apple"),t=Object(N.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(N.a)(s,2),i=r[0],l=r[1],o=function(e){l((function(t){return t.filter((function(t,a){return a!==e}))}))};return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsx)("div",{className:"col-md-4",children:Object(g.jsxs)("div",{className:"block-items",children:[Object(g.jsx)("h1",{children:"Todo List"}),Object(g.jsx)("p",{}),Object(g.jsxs)("div",{className:"form-inline",children:[Object(g.jsx)("input",{type:"text",placeholder:"Add Items",className:"form-control",value:a,onChange:function(e){n(e.target.value)}}),Object(g.jsxs)("button",{onClick:function(){l((function(e){return[].concat(Object(v.a)(e),[a])})),n("")},className:"btn btn-danger",children:[" ","+"]})]}),Object(g.jsx)("ol",{children:i.map((function(e,t){return Object(g.jsx)(w,{id:t,text:e,onSelect:o},t)}))})]})})]})})},S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={},c}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"container-fluid",children:Object(g.jsx)("h1",{children:"  About Page"})})}}]),a}(n.a.Component),k=a(109),C=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={useremail:null,userpasswd:null,login:!1,store:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("login"));this.setState({store:e}),e&&e.login&&this.setState({login:!0})}},{key:"AuthorizeLogin",value:function(){var e=this;console.log("this state "+this.state.useremail,this.state.userpasswd),fetch("http://localhost:127.0.0.1/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)}).then((function(t){console.log("what a response",t),t.json().then((function(t){console.log("result :"+t),localStorage.setItem("login",JSON.stringify({login:!0,token:t.token})),e.setState({login:!0})}))}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("div",{className:"loginpage",children:Object(g.jsxs)(k.a,{children:[Object(g.jsxs)(k.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(k.a.Label,{children:"Email address"}),Object(g.jsx)(k.a.Control,{type:"email",placeholder:"Enter email",required:"required",onChange:function(t){e.setState({useremail:t.target.value})}})]}),Object(g.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(k.a.Label,{children:"Password"}),Object(g.jsx)(k.a.Control,{type:"password",placeholder:"Password",required:"required",onChange:function(t){e.setState({userpasswd:t.target.value})}})]}),Object(g.jsx)(k.a.Group,{controlId:"formBasicCheckbox",children:Object(g.jsx)(k.a.Check,{type:"checkbox",label:"Check me out"})}),Object(g.jsx)(p.a,{variant:"primary",type:"button",onClick:function(){return e.AuthorizeLogin()},children:"Submit"})]})}),Object(g.jsx)("div",{})]})}}]),a}(n.a.Component),T=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{children:[Object(g.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(d.a.Brand,{href:"#home",children:"Usermanagment"}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(h.a,{className:"mr-auto",children:[Object(g.jsx)(u.b,{to:"/Home",className:"btn",children:"Home"}),Object(g.jsx)(u.b,{to:"/Listing",className:"btn",children:"List"}),Object(g.jsx)(u.b,{to:"/About",className:"btn",children:"About"}),Object(g.jsx)(u.b,{to:"/DashBoard",className:"btn",children:"Dashboard"}),Object(g.jsx)(u.b,{to:"/Weather",className:"btn",children:"Weatherapp"}),Object(g.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",className:"pullRight",children:[Object(g.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(b.a.Divider,{}),Object(g.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(g.jsx)(O.a,{path:"/",exact:!0,component:C}),Object(g.jsx)(O.a,{path:"/Home",component:y}),Object(g.jsx)(O.a,{path:"/About",component:S}),Object(g.jsx)(O.a,{path:"/Listing",component:f})]})})}}]),a}(n.a.Component);a(99);var L=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("h1",{children:["You have logged out now,to login ",Object(g.jsx)("link",{href:"#",className:"link",children:"clickhere"})]})})},A=a(32),I=a.n(A),P=a(42),D=a(106),B=a(111);var E=function(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(P.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"data_card",children:[" ",Object(g.jsxs)("ul",{children:[a.map((function(e,t){return Object(g.jsx)("li",{className:"newList",children:e.title},t)}))," "]})]}),Object(g.jsx)("div",{className:"col-md-12 d-none",children:Object(g.jsxs)(D.a,{children:[Object(g.jsxs)(B.a,{children:[Object(g.jsx)(B.a.Img,{variant:"top",src:"https://picsum.photos/160/86?random=3"}),Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"Card title"}),Object(g.jsx)(B.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]}),Object(g.jsx)(B.a.Footer,{children:Object(g.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(B.a.Img,{variant:"top",src:"https://picsum.photos/160/86?random=2"}),Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"Card title"}),Object(g.jsxs)(B.a.Text,{children:["This card has supporting text below as a natural lead-in to additional content."," "]})]}),Object(g.jsx)(B.a.Footer,{children:Object(g.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(B.a.Img,{variant:"top",src:"https://picsum.photos/160/86?random=1"}),Object(g.jsxs)(B.a.Body,{children:[Object(g.jsx)(B.a.Title,{children:"Card title"}),Object(g.jsx)(B.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."})]}),Object(g.jsx)(B.a.Footer,{children:Object(g.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})})]})},F=function(){var e=Object(c.useState)(null),t=Object(N.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Mumbai"),r=Object(N.a)(s,2),i=r[0],l=r[1],o=(new Date).toLocaleDateString(),j=(new Date).toLocaleTimeString();setTimeout(j,1e3);var d,h=(new Date).getHours();return d=h>4&&h<12?"Good Moring , Piyush Singh !!":h>=12&&h<=16?"Good Afternoon , Piyush Singh !!":h>=14&&h<=19?"Good Evening , Piyush Singh !!":"Welcome at Night, Piyush Singh !! ",Object(c.useEffect)((function(){(function(){var e=Object(P.a)(I.a.mark((function e(){var t,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=0d10acae220d82c0fb87a003680d1dca"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:" row",children:Object(g.jsxs)("div",{className:"weather_app col-md-auto",children:[Object(g.jsx)("h3",{children:d}),Object(g.jsxs)("p",{className:"text-white",children:["Today is ",o," And Time Now is ",j]}),Object(g.jsx)("p",{className:"text-dark bg-warning",children:"Search Today's Weather "}),Object(g.jsx)("div",{className:"form",children:Object(g.jsx)("input",{type:"search",className:"form-control",placeholder:"Search your city",value:i,onChange:function(e){l(e.target.value)}})}),a?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h2",{children:["Location:",Object(g.jsx)("i",{className:"fa fas-street-view","aria-hidden":"true"}),i]}),Object(g.jsx)("h4",{className:"text-warning bigFont",children:"Temp"}),Object(g.jsx)("p",{className:"text-dark bg-light ",children:a.temp}),Object(g.jsxs)("h6",{children:["Min ",Object(g.jsxs)("span",{className:"text-dark bg-light",children:[a.temp_min,"Cel"]})," || Max"," ",Object(g.jsxs)("span",{className:"text-dark bg-light",children:[a.temp_max," cel"]})]})]}):Object(g.jsx)("p",{className:"error",children:"City not found,Search some other city!!"}),Object(g.jsxs)("div",{className:"ocean",children:[Object(g.jsx)("div",{className:"wave"}),Object(g.jsx)("div",{className:"wave"})]})]})})})})};var M=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(T,{}),Object(g.jsx)(u.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(O.c,{children:[Object(g.jsx)(O.a,{path:"/Login",children:Object(g.jsx)(C,{})}),Object(g.jsx)(O.a,{path:"/Logout",children:Object(g.jsx)(L,{})}),Object(g.jsx)(O.a,{path:"/Dashboard",children:Object(g.jsx)(E,{})}),Object(g.jsx)(O.a,{path:"/Weather",children:Object(g.jsx)(F,{})})]})})})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),q()},69:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.9fdd0d64.chunk.js.map