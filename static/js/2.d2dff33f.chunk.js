(this.webpackJsonpbefree=this.webpackJsonpbefree||[]).push([[2],{130:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";var i=n(0);n(2),n(134);t.a=function(e){var t=e.style,n=e.className,s=void 0===n?"arrow-icon":n;return Object(i.jsx)("svg",{style:t,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",className:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(i.jsx)("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 \r 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 \r 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 \r 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 \r 9.372-24.569 9.372-33.942 0z"})})}},134:function(e,t,n){},150:function(e,t,n){"use strict";var i=n(0),s=n(17),a=n(2);n(178);t.a=function(e){var t=e.show,n=e.closeModal,o=e.title,c=e.children,r=Object(a.useState)(!1),l=Object(s.a)(r,2),d=l[0],m=l[1];Object(a.useEffect)((function(){t&&(document.body.style.overflow="hidden",window.addEventListener("keydown",(function(e){27===e.keyCode&&n()})),m(!1)),t||(document.body.style.overflow="auto",window.removeEventListener("keydown",(function(e){27===e.keyCode&&n()})),setTimeout((function(){m(!0)}),300))}),[t]);var j=Object(a.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:t?"overlay overlay-active":"overlay",onClick:function(e){e.target!=j.current&&n()}}),Object(i.jsxs)("div",{ref:j,className:t?"terms_wrapper terms_wrapper-open":"terms_wrapper",children:[Object(i.jsxs)("div",{className:"terms_wrapper-title",children:[Object(i.jsx)("span",{className:"terms_wrapper-title-name",children:o}),Object(i.jsx)("i",{onClick:n,className:"fas fa-times x-icon"})]}),!d&&c,Object(i.jsx)("div",{className:"terms_footer",children:Object(i.jsx)("button",{className:"terms_button",type:"button",onClick:n,children:"Close"})})]})]})}},151:function(e,t,n){"use strict";var i=n(0);n(2),n(435);t.a=function(e){var t=e.changeHandler,n=e.name,s=e.placeholder,a=e.error,o=e.value,c=e.tooltip;return Object(i.jsxs)("div",{className:"field_wrapper",children:[Object(i.jsx)("label",{htmlFor:"input_".concat(n),className:(null===o||void 0===o?void 0:o.trim().length)<=0?"field_placeholder visible":"field_placeholder",children:s}),Object(i.jsx)("input",{id:"input_".concat(n),onChange:t,className:a?"long-input input-error":"long-input",name:n,type:"text",value:o}),Object(i.jsx)("i",{className:"far fa-question-circle tooltip","data-tooltip":c})]})}},152:function(e,t,n){},153:function(e,t,n){"use strict";var i=n(0),s=n(17),a=n(2),o=n(120),c=(n(177),n(130),n(132),n(133)),r=n(127),l=n(150),d=n(44),m=n(11),j=n.p+"static/media/InstructionVideo.ba789cf4.mov",h=n.p+"static/media/ExampleVideo.053fddb0.mov",b=n.p+"static/media/InstructionVideoCover.58f11e48.jpg",u=n.p+"static/media/ExampleVideoCover.3a192c67.jpg";t.a=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],p=t[1],f=Object(a.useState)(!1),x=Object(s.a)(f,2),O=x[0],g=x[1],v=Object(a.useState)(!1),y=Object(s.a)(v,2),_=y[0],w=y[1],N=Object(o.a)().t,I=function(){return g(!O)},k=function(){return w(!_)};return Object(i.jsxs)("div",{className:"befree-container",children:[Object(i.jsxs)("h2",{className:"befree-title",children:[N("casting.title")+" ",Object(i.jsx)("span",{className:"befree-title-blue",children:N("casting.title.blue")})]}),Object(i.jsx)("p",{className:"befree_date",children:"20.01.2021 - 20.04.2021"}),Object(i.jsx)("p",{className:"befree-text-casting",children:N("casting.title.text.1")+N("casting.title.text.2")}),Object(i.jsx)("p",{className:"befree-text-casting",children:N("casting.text.one")+N("casting.text.two")+N("casting.text.three")}),Object(i.jsx)("span",{className:"casting_steps-title",children:N("casting.steps.title")}),Object(i.jsxs)("div",{className:"casting_steps-body",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"casting_steps-num",children:N("casting.steps.nums.one")+" "}),N("casting.steps.text.1")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"casting_steps-num",children:N("casting.steps.nums.two")+" "}),N("casting.steps.text.2")]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"casting_steps-num",children:N("casting.steps.nums.three")+" "}),N("casting.steps.text.3")]})]}),Object(i.jsxs)("div",{className:n?"casting_moreInfo casting_moreInfo-visible":"casting_moreInfo",children:[Object(i.jsxs)("div",{className:"casting_moreInfo_item",children:[Object(i.jsxs)("p",{className:"casting_moreInfo_title",children:[" ",N("casting.moreInfo.videoReq.title")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoReq.one")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoReq.two")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoReq.three")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoReq.four")," "]})]}),Object(i.jsx)(r.a,{title:N("casting.moreInfo.showVideoInstruction"),onClick:I}),Object(i.jsx)(l.a,{closeModal:I,show:O,title:"Instruction",children:Object(i.jsx)(d.a,{videoURL:j,image:b})}),Object(i.jsxs)("div",{className:"casting_moreInfo_item",children:[Object(i.jsxs)("p",{className:"casting_moreInfo_title",children:[" ",N("casting.moreInfo.videoContent.title")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoContent.one")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoContent.two")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoContent.three")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoContent.four")," "]}),Object(i.jsxs)("p",{children:[" ",N("casting.moreInfo.videoContent.five")," "]})]}),Object(i.jsx)(r.a,{title:N("casting.moreInfo.showExampleVideo"),onClick:k}),Object(i.jsx)(l.a,{closeModal:k,show:_,title:"Example",children:Object(i.jsx)(d.a,{videoURL:h,image:u})}),Object(i.jsxs)("div",{className:"casting_moreInfo_item",children:[Object(i.jsxs)("p",{className:"casting_moreInfo_title",children:[" ",N("casting.moreInfo.conditions.title")," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.1")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.2")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.3")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.4")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.5")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.6")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.7")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.8")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.9")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.10")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.11")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.12")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.13")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.14")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.15")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.16")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.17")}),Object(i.jsx)("li",{children:N("casting.moreInfo.conditions.18")})]})]}),Object(i.jsx)(m.b,{to:"/faq",children:Object(i.jsx)(r.a,{title:N("casting.moreInfo.faq")})})]}),Object(i.jsxs)("p",{className:"casting_more-info",onClick:function(){return p(!n)},children:[Object(i.jsxs)("span",{children:[" ",n?"HIDE":N("casting.moreInfo.text")," "]}),Object(i.jsx)(c.a,{style:n?{marginLeft:"10px",transform:"rotate(180deg)"}:{marginLeft:"10px"}})]})]})}},154:function(e,t,n){"use strict";var i=n(0),s=n(122),a=n(123),o=n.n(a),c=n(124),r=n(125),l=n(17),d=n(2),m=n(126),j=n(135),h=n(151),b=n(43),u=n(127),p=n(120),f=n(128),x=n(150),O=function(e){var t=e.onToggleTermsModal,n=e.termsModalIsOpen;return Object(i.jsx)(x.a,{closeModal:t,show:n,title:"Terms of agreement",children:Object(i.jsxs)("div",{className:"terms_content",children:[Object(i.jsx)("p",{className:"terms_title",children:"1.Gathering information"}),Object(i.jsx)("div",{className:"terms_text",children:"We collect information when you fill out a feedback form on the site. The information may include your full name, email address, telephone number, location. In addition, it is possible to automatically register your IP, browser, software, hardware data and other functions. By sending a message through the feedback form, you agree to the privacy policy and authorize us to collect and store your data."}),Object(i.jsx)("p",{className:"terms_title",children:"2. Use of information"}),Object(i.jsx)("div",{className:"terms_text",children:"The information we collect from you may be used to: Provide services tailored to your individual needs Offer personalized ads Improve our website Contact you by email Arrange a promotion, competition or research"}),Object(i.jsx)("p",{className:"terms_title",children:"3. Protection of personal data"}),Object(i.jsx)("div",{className:"terms_text",children:"We are the sole owner of the information collected on this site. Your personal data will not be sold or in any way transferred to third parties for any reason, except for the necessary data to complete a request or transaction, for example, when sending an order."}),Object(i.jsx)("p",{className:"terms_title",children:"4. Disclosure of information to third parties"}),Object(i.jsx)("div",{className:"terms_text",children:"We do not sell, exchange or transfer personal data to third parties. This does not apply to trusted companies that help us operate the site and conduct business, provided that they agree to keep the information confidential. We are ready to share information in order to prevent crimes or help in their investigation when it comes to suspicion of fraud, actions that physically threaten the safety of people, violations of the rules of use, or in cases where it is provided by law. Non-confidential information may be provided to other companies for marketing, advertising, etc."}),Object(i.jsx)("p",{className:"terms_title",children:"5. Protection of information and use of cookies"}),Object(i.jsx)("div",{className:"terms_text",children:"Information protection is carried out by means of the company-provider of the website constructor and hosting services. From our side, only those employees who are directly related to the processing of requests and support of the site have access to personal data without the right to misuse and disclose it. Our cookies are used to improve site access and to identify repeat visits. In addition, they allow you to track the most interesting queries. Cookies are not"}),Object(i.jsx)("p",{className:"terms_title",children:"6. Unsubscribe"}),Object(i.jsx)("div",{className:"terms_text",children:"We use email to provide you with information on your applications, company news, etc. If you wish to unsubscribe, each email contains detailed instructions on how you can do this."}),Object(i.jsx)("p",{className:"terms_title",children:"7. Consent"}),Object(i.jsx)("div",{className:"terms_text",children:"By leaving your data on our website, you automatically agree to our privacy policy."})]})})},g=(n(436),n(130),n(132),n(152),n(437),n(129)),v=n(136),y=n.n(v);t.a=function(e){var t,n=e.setDone,a=Object(d.useState)({name:"",email:"",phone:"",video1:"",video2:"",about:"",surname:""}),x=Object(l.a)(a,2),v=x[0],_=x[1],w=Object(d.useState)(!1),N=Object(l.a)(w,2),I=N[0],k=N[1],C=Object(d.useState)(!1),T=Object(l.a)(C,2),q=T[0],E=T[1],L=Object(d.useState)(!1),S=Object(l.a)(L,2),M=S[0],H=S[1],R=Object(d.useState)({name:[""],email:[""],phone:[""],video1:[""],video2:[""],about:[""],surname:[""]}),V=Object(l.a)(R,2),F=V[0],P=V[1],W=Object(p.a)().t,B=Object(f.a)(),U=B.request,z=B.loading;Object(d.useEffect)((function(){var e=v.name,t=v.email,n=v.phone,i=v.video1,s=v.video2,a=v.about,o=v.surname;e.trim().length&&t.trim().length&&n.length&&i.trim().length&&s.trim().length&&a.trim().length>10&&o.trim().length&&q?k(!0):k(!1)}),[v,q]);var D=function(){return H(!M)},J=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(),e.prev=1,!(y()(v.phone,"").length>0)){e.next=13;break}if(!Object(g.a)(v.email)){e.next=10;break}return e.next=6,U("https://lbefree.com/api/casting/new","POST",v);case 6:e.sent.status&&(A(),n(!0),setTimeout((function(){return n(!1)}),3e3)),e.next=11;break;case 10:P(Object(c.a)(Object(c.a)({},F),{},{email:["Email is not valid!"]}));case 11:e.next=14;break;case 13:P(Object(c.a)(Object(c.a)({},F),{},{phone:["Phone is not valid!"]}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),t=e.t0.response.data.errors,P(Object(c.a)(Object(c.a)({},F),t));case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),A=function(){return P({name:[""],email:[""],phone:[""],video1:[""],video2:[""],about:[""],surname:[""]})},G=function(e){return _(Object(c.a)(Object(c.a)({},v),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"error_wrapper",children:Object.values(F).map((function(e){if(e.length>0)return Object(i.jsx)("p",{className:"input_error error_visible",children:e})}))}),Object(i.jsxs)("div",{className:"casting_form-wrapper",children:[Object(i.jsx)(O,{termsModalIsOpen:M,onToggleTermsModal:D}),Object(i.jsxs)("div",{className:"befree-col casting__c-1",children:[Object(i.jsx)(m.a,{tooltip:W("casting.tooltip.name"),value:v.name,error:F.name[0].length&&F.name[0]?F.name[0]:null,name:"name",placeholder:W("name"),changeHandler:G}),Object(i.jsx)(m.a,{tooltip:W("casting.tooltip.surname"),value:v.surname,error:F.surname[0].length&&F.surname[0]?F.surname[0]:null,name:"surname",placeholder:W("surname"),changeHandler:G}),Object(i.jsx)(m.a,{tooltip:W("casting.tooltip.email"),value:v.email,error:F.email[0].length&&F.email[0]?F.email[0]:null,name:"email",placeholder:W("email"),changeHandler:G}),Object(i.jsx)(j.a,{placeholder:W("phone"),changeHandler:function(e){return _(Object(c.a)(Object(c.a)({},v),{},{phone:e}))},phoneValue:v.phone})]}),Object(i.jsxs)("div",{className:"befree-col casting__c-2",children:[Object(i.jsx)(h.a,{tooltip:W("casting.tooltip.link.1"),value:v.video1,error:F.video1[0].length&&F.video1[0]?F.video1[0]:null,name:"video1",placeholder:W("link.video"),changeHandler:G}),Object(i.jsx)(h.a,{tooltip:W("casting.tooltip.link.2"),value:v.video2,error:F.video2[0].length&&F.video2[0]?F.video2[0]:null,name:"video2",placeholder:W("link.video"),changeHandler:G}),Object(i.jsxs)("div",{className:"field_wrapper",children:[Object(i.jsx)("label",{htmlFor:"input_".concat(v.about),className:(null===(t=v.about)||void 0===t?void 0:t.trim().length)<=0?"field_placeholder visible":"field_placeholder",children:W("transmittalLater")}),Object(i.jsx)("textarea",{onChange:G,className:!!F.about[0].length>0?"long-input-casting input-error":"long-input-casting",name:"about",type:"text"})]})]})]}),Object(i.jsx)("div",{style:{width:"70%",marginTop:"20px",marginBottom:"14px"},children:W("casting.page.end")}),Object(i.jsxs)("div",{className:"casting_terms",children:[Object(i.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:"accept"}),Object(i.jsxs)("label",{onClick:function(){return E(!q)},htmlFor:"accept",children:[" ",W("casting.checkbox")," "]}),Object(i.jsx)("p",{onClick:D,className:"casting_terms-modal-button",children:"Terms of agreement"})]}),z?Object(i.jsx)(b.a,{}):Object(i.jsx)(u.a,{onClick:J,disabled:!I,title:W("send")})]})}},177:function(e,t,n){},178:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){},437:function(e,t,n){}}]);
//# sourceMappingURL=2.d2dff33f.chunk.js.map