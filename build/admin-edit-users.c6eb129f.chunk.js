"use strict";(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[4263],{86294:(pe,B,t)=>{t.r(B),t.d(B,{default:()=>we});var a=t(53547),d=t(68547),y=t(49656),C=t(96486),$=t(92699),O=t(71002),b=t(87462),L=t(15861),N=t(97132),A=t(45697),G=t.n(A),j=t(78718),le=t.n(j),ee=t(27361),J=t.n(ee),te=t(57557),re=t.n(te),k=t(23724),X=t(80831),F=t(94117),R=t(64459),T=t(39272),I=t(35395),H=t(56156),x=t(33483),ae=t(80117),W=t(9524),c=t(87760),i=t.n(c),u=t(22754),Ee=t.n(u),me=t(58836),q=t(63955),Le=(v,S,h)=>new Promise((z,g)=>{var ne=w=>{try{P(h.next(w))}catch(V){g(V)}},K=w=>{try{P(h.throw(w))}catch(V){g(V)}},P=w=>w.done?z(w.value):Promise.resolve(w.value).then(ne,K);P((h=h.apply(v,S)).next())});const Ie=v=>Le(void 0,null,function*(){const{data:S}=yield q.be.get(`/admin/users/${v}`);return S.data}),Ce=(v,S)=>Le(void 0,null,function*(){const{data:h}=yield q.be.put(`/admin/users/${v}`,S);return h.data}),Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"email",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12}},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var Be=t(8278),Re=t(7676),We=t(25108);function Me(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Me=function(){return v};var v={},S=Object.prototype,h=S.hasOwnProperty,z=typeof Symbol=="function"?Symbol:{},g=z.iterator||"@@iterator",ne=z.asyncIterator||"@@asyncIterator",K=z.toStringTag||"@@toStringTag";function P(r,e,n){return Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{P({},"")}catch(r){P=function(n,o,s){return n[o]=s}}function w(r,e,n,o){var s=e&&e.prototype instanceof oe?e:oe,l=Object.create(s.prototype),p=new fe(o||[]);return l._invoke=function(Z,m,f){var E="suspendedStart";return function(Y,Ae){if(E==="executing")throw new Error("Generator is already running");if(E==="completed"){if(Y==="throw")throw Ae;return _()}for(f.method=Y,f.arg=Ae;;){var Te=f.delegate;if(Te){var Oe=Pe(Te,f);if(Oe){if(Oe===U)continue;return Oe}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(E==="suspendedStart")throw E="completed",f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);E="executing";var ge=V(Z,m,f);if(ge.type==="normal"){if(E=f.done?"completed":"suspendedYield",ge.arg===U)continue;return{value:ge.arg,done:f.done}}ge.type==="throw"&&(E="completed",f.method="throw",f.arg=ge.arg)}}}(r,n,p),l}function V(r,e,n){try{return{type:"normal",arg:r.call(e,n)}}catch(o){return{type:"throw",arg:o}}}v.wrap=w;var U={};function oe(){}function se(){}function Q(){}var he={};P(he,g,function(){return this});var de=Object.getPrototypeOf,ue=de&&de(de(D([])));ue&&ue!==S&&h.call(ue,g)&&(he=ue);var M=Q.prototype=oe.prototype=Object.create(he);function ye(r){["next","throw","return"].forEach(function(e){P(r,e,function(n){return this._invoke(e,n)})})}function ie(r,e){function n(s,l,p,Z){var m=V(r[s],r,l);if(m.type!=="throw"){var f=m.arg,E=f.value;return E&&(0,O.Z)(E)=="object"&&h.call(E,"__await")?e.resolve(E.__await).then(function(Y){n("next",Y,p,Z)},function(Y){n("throw",Y,p,Z)}):e.resolve(E).then(function(Y){f.value=Y,p(f)},function(Y){return n("throw",Y,p,Z)})}Z(m.arg)}var o;this._invoke=function(s,l){function p(){return new e(function(Z,m){n(s,l,Z,m)})}return o=o?o.then(p,p):p()}}function Pe(r,e){var n=r.iterator[e.method];if(n===void 0){if(e.delegate=null,e.method==="throw"){if(r.iterator.return&&(e.method="return",e.arg=void 0,Pe(r,e),e.method==="throw"))return U;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return U}var o=V(n,r.iterator,e.arg);if(o.type==="throw")return e.method="throw",e.arg=o.arg,e.delegate=null,U;var s=o.arg;return s?s.done?(e[r.resultName]=s.value,e.next=r.nextLoc,e.method!=="return"&&(e.method="next",e.arg=void 0),e.delegate=null,U):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,U)}function ce(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function ve(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function fe(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(ce,this),this.reset(!0)}function D(r){if(r){var e=r[g];if(e)return e.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var n=-1,o=function s(){for(;++n<r.length;)if(h.call(r,n))return s.value=r[n],s.done=!1,s;return s.value=void 0,s.done=!0,s};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return se.prototype=Q,P(M,"constructor",Q),P(Q,"constructor",se),se.displayName=P(Q,K,"GeneratorFunction"),v.isGeneratorFunction=function(r){var e=typeof r=="function"&&r.constructor;return!!e&&(e===se||(e.displayName||e.name)==="GeneratorFunction")},v.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,Q):(r.__proto__=Q,P(r,K,"GeneratorFunction")),r.prototype=Object.create(M),r},v.awrap=function(r){return{__await:r}},ye(ie.prototype),P(ie.prototype,ne,function(){return this}),v.AsyncIterator=ie,v.async=function(r,e,n,o,s){s===void 0&&(s=Promise);var l=new ie(w(r,e,n,o),s);return v.isGeneratorFunction(e)?l:l.next().then(function(p){return p.done?p.value:l.next()})},ye(M),P(M,K,"Generator"),P(M,g,function(){return this}),P(M,"toString",function(){return"[object Generator]"}),v.keys=function(r){var e=[];for(var n in r)e.push(n);return e.reverse(),function o(){for(;e.length;){var s=e.pop();if(s in r)return o.value=s,o.done=!1,o}return o.done=!0,o}},v.values=D,fe.prototype={constructor:fe,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ve),!e)for(var n in this)n.charAt(0)==="t"&&h.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(f,E){return p.type="throw",p.arg=e,n.next=f,E&&(n.method="next",n.arg=void 0),!!E}for(var s=this.tryEntries.length-1;s>=0;--s){var l=this.tryEntries[s],p=l.completion;if(l.tryLoc==="root")return o("end");if(l.tryLoc<=this.prev){var Z=h.call(l,"catchLoc"),m=h.call(l,"finallyLoc");if(Z&&m){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(Z){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(e,n){for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o];if(s.tryLoc<=this.prev&&h.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var l=s;break}}l&&(e==="break"||e==="continue")&&l.tryLoc<=n&&n<=l.finallyLoc&&(l=null);var p=l?l.completion:{};return p.type=e,p.arg=n,l?(this.method="next",this.next=l.finallyLoc,U):this.complete(p)},complete:function(e,n){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&n&&(this.next=n),U},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),ve(o),U}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc===e){var s=o.completion;if(s.type==="throw"){var l=s.arg;ve(o)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:D(e),resultName:n,nextLoc:o},this.method==="next"&&(this.arg=void 0),U}},v}var Se=function(){return window&&window.strapi&&window.strapi.isEE?t(77791).Z:t(26010).Z}(),De=["email","firstname","lastname","username","isActive","roles"],_e=function(S){var h=S.canUpdate,z=(0,N.useIntl)(),g=z.formatMessage,ne=(0,y.useRouteMatch)("/settings/users/:id"),K=ne.params.id,P=(0,y.useHistory)(),w=P.push,V=(0,d.useAppInfos)(),U=V.setUserDisplayName,oe=(0,d.useNotification)(),se=(0,d.useOverlayBlocker)(),Q=se.lockApp,he=se.unlockApp;(0,d.useFocusWhenNavigate)();var de=(0,k.useQuery)(["user",K],function(){return Ie(K)},{retry:!1,keepPreviousData:!1,staleTime:1e3*20,onError:function(_){var r=_.response.status;r===403&&(oe({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),w("/")),We.log(_.response.status)}}),ue=de.status,M=de.data,ye=function(){var D=(0,L.Z)(Me().mark(function _(r,e){var n,o,s,l,p;return Me().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return Q(),m.prev=1,m.next=4,Ce(K,re()(r,"confirmPassword"));case 4:n=m.sent,oe({type:"success",message:g({id:"notification.success.saved",defaultMessage:"Saved"})}),o=d.auth.getUserInfo(),K.toString()===o.id.toString()&&(d.auth.setUserInfo(n),s=J()(r,"username")||(0,me.Pp)(r.firstname,r.lastname),U(s)),e.setValues(le()(r,De)),m.next=17;break;case 11:m.prev=11,m.t0=m.catch(1),l=(0,me.Iz)(m.t0.response.data),p=Object.keys(l).reduce(function(f,E){return f[E]=l[E].id,f},{}),e.setErrors(p),oe({type:"warning",message:J()(m.t0,"response.data.message","notification.error")});case 17:he();case 18:case"end":return m.stop()}},_,null,[[1,11]])}));return function(r,e){return D.apply(this,arguments)}}(),ie=ue!=="success",Pe=ie?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},ce=Object.keys(le()(M,De)).reduce(function(D,_){return _==="roles"?(D[_]=((M==null?void 0:M.roles)||[]).map(function(r){var e=r.id;return e}),D):(D[_]=M==null?void 0:M[_],D)},{}),ve=ce.username||(0,me.Pp)(ce.firstname,ce.lastname),fe=g(Pe,{name:ve});return ie?a.createElement(ae.Main,{"aria-busy":"true"},a.createElement(d.SettingsPageTitle,{name:"Users"}),a.createElement(I.HeaderLayout,{primaryAction:a.createElement(R.Button,{disabled:!0,startIcon:a.createElement(Ee(),null),type:"button",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:fe,navigationAction:a.createElement(H.Link,{startIcon:a.createElement(i(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),a.createElement(I.ContentLayout,null,a.createElement(d.LoadingIndicatorPage,null))):a.createElement(ae.Main,null,a.createElement(d.SettingsPageTitle,{name:"Users"}),a.createElement(X.Formik,{onSubmit:ye,initialValues:ce,validateOnChange:!1,validationSchema:Be.YM},function(D){var _=D.errors,r=D.values,e=D.handleChange,n=D.isSubmitting;return a.createElement(d.Form,null,a.createElement(I.HeaderLayout,{primaryAction:a.createElement(R.Button,{disabled:n||!h,startIcon:a.createElement(Ee(),null),loading:n,type:"submit",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:fe,navigationAction:a.createElement(H.Link,{startIcon:a.createElement(i(),null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},g({id:"global.back",defaultMessage:"Back"}))}),a.createElement(I.ContentLayout,null,(M==null?void 0:M.registrationToken)&&a.createElement(F.Box,{paddingBottom:6},a.createElement(Se,{registrationToken:M.registrationToken})),a.createElement(W.Stack,{spacing:7},a.createElement(F.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(W.Stack,{spacing:4},a.createElement(x.Typography,{variant:"delta",as:"h2"},g({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),a.createElement(T.Grid,{gap:5},Ue.map(function(o){return o.map(function(s){return a.createElement(T.GridItem,(0,b.Z)({key:s.name},s.size),a.createElement(d.GenericInput,(0,b.Z)({},s,{disabled:!h,error:_[s.name],onChange:e,value:r[s.name]||""})))})})))),a.createElement(F.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(W.Stack,{spacing:4},a.createElement(x.Typography,{variant:"delta",as:"h2"},g({id:"global.roles",defaultMessage:"User's role"})),a.createElement(T.Grid,{gap:5},a.createElement(T.GridItem,{col:6,xs:12},a.createElement(Re.Z,{disabled:!h,error:_.roles,onChange:e,value:r.roles}))))))))}))};_e.propTypes={canUpdate:G().bool.isRequired};const Ke=_e,we=()=>{const v=(0,d.useNotification)(),S=(0,a.useMemo)(()=>({read:$.Z.settings.users.read,update:$.Z.settings.users.update}),[]),{isLoading:h,allowedActions:{canRead:z,canUpdate:g}}=(0,d.useRBAC)(S),{state:ne}=(0,y.useLocation)(),K=(0,C.get)(ne,"from","/");return(0,a.useEffect)(()=>{h||!z&&!g&&v({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[h,z,g,v]),h?a.createElement(d.LoadingIndicatorPage,null):!z&&!g?a.createElement(y.Redirect,{to:K}):a.createElement(Ke,{canUpdate:g})}},53073:(pe,B,t)=>{t.d(B,{Z:()=>te});var a=t(53547),d=t(45697),y=t.n(d),C=t(49549),$=t.n(C),O=t(68547),b=t.n(O),L=t(54279),N=t.n(L),A=t(74855),G=t.n(A),j=t(97132),le=t.n(j);const ee=()=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},a.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},a.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),J=({children:re,target:k})=>{const X=(0,O.useNotification)(),{formatMessage:F}=(0,j.useIntl)(),R=()=>{X({type:"info",message:{id:"notification.link-copied"}})},T=F({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return a.createElement(O.ContentBox,{endAction:a.createElement(A.CopyToClipboard,{onCopy:R,text:k},a.createElement(C.IconButton,{label:T,noBorder:!0,icon:a.createElement(N(),null)})),title:k,titleEllipsis:!0,subtitle:re,icon:a.createElement(ee,null),iconBackground:"neutral100"})};J.propTypes={children:y().oneOfType([y().element,y().string]).isRequired,target:y().string.isRequired};const te=J},26010:(pe,B,t)=>{t.d(B,{Z:()=>N});var a=t(53547),d=t(97132),y=t.n(d),C=t(45697),$=t.n(C),O=t(71242),b=t(53073);const L=({registrationToken:A})=>{const{formatMessage:G}=(0,d.useIntl)(),j=`${window.location.origin}${O.Z}auth/register?registrationToken=${A}`;return a.createElement(b.Z,{target:j},G({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};L.defaultProps={registrationToken:""},L.propTypes={registrationToken:$().string};const N=L},7676:(pe,B,t)=>{t.d(B,{Z:()=>F});var a=t(53547),d=t(45697),y=t.n(d),C=t(97132),$=t.n(C),O=t(2632),b=t.n(O),L=t(23724),N=t.n(L),A=t(78384),G=t(79386),j=t.n(G),le=t(63955),ee=(R,T,I)=>new Promise((H,x)=>{var ae=i=>{try{c(I.next(i))}catch(u){x(u)}},W=i=>{try{c(I.throw(i))}catch(u){x(u)}},c=i=>i.done?H(i.value):Promise.resolve(i.value).then(ae,W);c((I=I.apply(R,T)).next())});const J=A.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,te=A.default.div`
  animation: ${J} 2s infinite linear;
`,re=()=>a.createElement(te,null,a.createElement(j(),null)),k=()=>ee(void 0,null,function*(){const{data:R}=yield le.be.get("/admin/roles");return R.data}),X=({disabled:R,error:T,onChange:I,value:H})=>{const{status:x,data:ae}=(0,L.useQuery)(["roles"],k,{staleTime:5e4}),{formatMessage:W}=(0,C.useIntl)(),c=T?W({id:T,defaultMessage:T}):"",i=W({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),u=W({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),Ee=W({id:"app.components.Select.placeholder",defaultMessage:"Select"}),me=x==="loading"?a.createElement(re,null):void 0;return a.createElement(O.Select,{id:"roles",disabled:R,error:c,hint:u,label:i,name:"roles",onChange:q=>{I({target:{name:"roles",value:q}})},placeholder:Ee,multi:!0,startIcon:me,value:H,withTags:!0,required:!0},(ae||[]).map(q=>a.createElement(O.Option,{key:q.id,value:q.id},q.name)))};X.defaultProps={disabled:!1,error:void 0},X.propTypes={disabled:y().bool,error:y().string,onChange:y().func.isRequired,value:y().array.isRequired};const F=X},8278:(pe,B,t)=>{t.d(B,{YM:()=>W,Rw:()=>ee});var a=t(63600),d=t(68547),y=Object.defineProperty,C=Object.defineProperties,$=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,N=(c,i,u)=>i in c?y(c,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):c[i]=u,A=(c,i)=>{for(var u in i||(i={}))b.call(i,u)&&N(c,u,i[u]);if(O)for(var u of O(i))L.call(i,u)&&N(c,u,i[u]);return c},G=(c,i)=>C(c,$(i));const j={firstname:a.nK().required(d.translatedErrors.required),lastname:a.nK(),email:a.Z_().email(d.translatedErrors.email).lowercase().required(d.translatedErrors.required),username:a.Z_().nullable(),password:a.Z_().min(8,d.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:a.Z_().min(8,d.translatedErrors.minLength).oneOf([a.iH("password"),null],"components.Input.error.password.noMatch").when("password",(c,i)=>c?i.required(d.translatedErrors.required):i)},ee=G(A({},j),{currentPassword:a.Z_().when(["password","confirmPassword"],(c,i,u)=>c||i?u.required(d.translatedErrors.required):u),preferedLanguage:a.Z_().nullable()}),te={roles:a.IX().min(1,d.translatedErrors.required).required(d.translatedErrors.required)};var re=Object.defineProperty,k=Object.defineProperties,X=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,I=(c,i,u)=>i in c?re(c,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):c[i]=u,H=(c,i)=>{for(var u in i||(i={}))R.call(i,u)&&I(c,u,i[u]);if(F)for(var u of F(i))T.call(i,u)&&I(c,u,i[u]);return c},x=(c,i)=>k(c,X(i));const W=a.Ry().shape(H(x(H({},j),{isActive:a.Xg()}),te))},77791:(pe,B,t)=>{t.d(B,{Z:()=>N});var a=t(53547),d=t(97132),y=t.n(d),C=t(45697),$=t.n(C),O=t(71242),b=t(53073);const L=({registrationToken:A})=>{const{formatMessage:G}=(0,d.useIntl)();return A?a.createElement(b.Z,{target:`${window.location.origin}${O.Z}auth/register?registrationToken=${A}`},G({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):a.createElement(b.Z,{target:`${window.location.origin}${O.Z}auth/login`},G({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};L.defaultProps={registrationToken:""},L.propTypes={registrationToken:$().string};const N=L}}]);
