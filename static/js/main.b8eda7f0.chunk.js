(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),c=a(9),i=a(10),s=a(14),m=a(15),u=a(3);function p(e){return r.a.createElement("a",{href:e.url,rel:"noopener",target:"_blank","aria-label":"ss"},r.a.createElement(u.a,{className:"social-icon",icon:e.iconType}))}var d=a(2),h=[{src:"https://github.com/ganeshraja10",type:d.e,name:"Github"},{src:"https://dev.to/ganesh",type:d.d,name:"Dev.to"},{src:"https://twitter.com/ganesh_107",type:d.k,name:"Twitter"},{src:"https://www.linkedin.com/in/ganesh-raja-b4a155ab/",type:d.h,name:"LinkedIn"}],f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"social-icons-list"},h.map((function(e){return r.a.createElement(p,{url:e.src,iconType:e.type})})))}}]),a}(n.Component),E=function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.href},r.a.createElement("div",{class:"items"},r.a.createElement(u.a,{icon:d.a})," ",e.name)))},y=["About me","Projects","Blogs"],b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list-unstyled components"},y.map((function(e){return r.a.createElement(E,{name:e})})))}}]),a}(n.Component);function g(){return r.a.createElement("img",{style:{display:"block"},class:"profile-pic",src:"https://media-exp1.licdn.com/dms/image/C5103AQEijuVyitMGpw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=BvaaSf8sbuMQbvFdDXRNT5i-tO6jPfPYlR3CtjFU7qk",alt:"Profile Pic"})}var v=function(e){return r.a.createElement("nav",{id:"sidebar"},r.a.createElement(g,null),r.a.createElement(f,null),r.a.createElement(b,null))},k=a(4),w=a(5),x=a(7),j=a(6),O=a(33),S=a(32);function C(e){return console.log(e.data),r.a.createElement("li",null,r.a.createElement(u.a,{style:{color:e.data.color},icon:e.data.icon})," ",e.data.text)}function N(e){return r.a.createElement("div",{className:"col-md-5 col-lg-5 col-xl-2 custom-card skill-list",style:{minHeight:"300px",padding:"10px"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"20px"}},"Front End"),r.a.createElement("div",{class:"skill-line"}),r.a.createElement("ul",{class:"skills"},e.data.map((function(e){return r.a.createElement(C,{data:e,key:e.name})}))))}n.Component;function B(e){return r.a.createElement("div",{className:"jumbo",style:{backgroundColor:"transparent",color:"antiquewhite"}},r.a.createElement("div",{className:"mobile-bio",style:{width:"100%"}},r.a.createElement(g,null),r.a.createElement(f,null)),r.a.createElement("h2",{style:{fontSize:"2.25em"},className:"bio-intro"},"Hi, I'm Ganesh"),r.a.createElement("p",{style:{fontSize:"18px",fontFamily:"inherit"}},"\xa0\xa0\xa0\xa0I am a full-stack developer who primarily works on Python and Javascript. I am also a tech enthusiast who is interested to learn and work on new technologies. I work on a fulltime Job in Banglore. If you want to have a chat drop a mail at"," ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"mailto:ganeshraja1010@gmail.com"},r.a.createElement("span",{style:{color:"#f6e05e",font:"Nunito"}},"ganeshraja1010@gmail.com"))))}function I(e){return r.a.createElement("div",{class:"col-md-8 col-xl-5 custom-card  ",style:{padding:"10px"}},r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("h4",{style:{marginTop:"0px"}},e.project_name),r.a.createElement("p",null,e.project_desc),r.a.createElement("div",{style:{marginTop:"10px",padding:"10px 0px"}},r.a.createElement("div",{style:{display:"inline",padding:"10px",backgroundColor:"#000000",borderRadius:"20px"}},r.a.createElement("a",{href:"$",style:{color:"antiquewhite"}}," ","Github Link to Project")))))}n.Component;var P=[{color:"#f0db4f",text:"JavaScript",icon:d.g},{color:"#e34f26",text:"HTML5",icon:d.f},{color:"#e34f26",text:"CSS3",icon:d.c},{color:"#c69",text:"SASS",icon:d.j},{color:"#61dbfb",text:"React",icon:d.i},{color:"#563d7c",text:"Bootstrap",icon:d.b}],T=function(e){Object(x.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{fluid:!0},r.a.createElement(B,null),r.a.createElement("p",{style:{padding:"0px 30px",margin:"0px",fontSize:"2em"}},"Skills "),r.a.createElement(S.a,null,r.a.createElement(N,{data:P}),r.a.createElement(N,{data:P}),r.a.createElement(N,{data:P}),r.a.createElement(N,{data:P})))}}]),a}(n.Component);var _=function(){return r.a.createElement("div",{class:"wrapper",style:{color:"white"}},r.a.createElement(v,null),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b8eda7f0.chunk.js.map