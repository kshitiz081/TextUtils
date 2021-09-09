(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),r=(a(9),a(2)),o=a(0);a(11);function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(" "),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:(e.mode,{color:"light"===e.mode?"black":"white"}),children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"w-100 p-3",children:Object(o.jsx)("textarea",{className:"w-100 p-3",value:n,onChange:function(e){console.log("On change"),s(e.target.value)},style:{backgroundColor:"light"===e.mode?"dark":"light"},id:"myBox",rows:"10"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to uppercase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to lowercase","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){s(""),e.showAlert("Text cleared","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Handle Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:(e.mode,{color:"light"===e.mode?"black":"white"}),children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something to preview it here"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About text"};var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-$(props.alert.type) alert-dismissible fade show p-3 mb-2 bg-success text-white",role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),h=l[0],u=l[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#14304c",j("Dark mode has been enabled","success"),document.title="TextUtils-Light mode"):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"),document.title="TextUtils-Dark mode")},aboutText:"About"}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)(b,{showAlert:j,heading:"Enter the text to analyze",mode:a})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.6ad8b775.chunk.js.map