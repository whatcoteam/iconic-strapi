(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[5199],{14319:function(J,U,t){(function(e,o){J.exports=o(t(53547))})(this,function(e){return function(o){var y={};function f(i){if(y[i])return y[i].exports;var d=y[i]={i,l:!1,exports:{}};return o[i].call(d.exports,d,d.exports,f),d.l=!0,d.exports}return f.m=o,f.c=y,f.d=function(i,d,D){f.o(i,d)||Object.defineProperty(i,d,{enumerable:!0,get:D})},f.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},f.t=function(i,d){if(1&d&&(i=f(i)),8&d||4&d&&typeof i=="object"&&i&&i.__esModule)return i;var D=Object.create(null);if(f.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:i}),2&d&&typeof i!="string")for(var C in i)f.d(D,C,function(Z){return i[Z]}.bind(null,C));return D},f.n=function(i){var d=i&&i.__esModule?function(){return i.default}:function(){return i};return f.d(d,"a",d),d},f.o=function(i,d){return Object.prototype.hasOwnProperty.call(i,d)},f.p="",f(f.s=67)}({0:function(o,y){o.exports=e},67:function(o,y,f){"use strict";f.r(y);var i=f(0);function d(){return(d=Object.assign||function(D){for(var C=1;C<arguments.length;C++){var Z=arguments[C];for(var w in Z)Object.prototype.hasOwnProperty.call(Z,w)&&(D[w]=Z[w])}return D}).apply(this,arguments)}y.default=function(D){return i.createElement("svg",d({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D),i.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),i.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),i.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},79313:(J,U,t)=>{"use strict";t.d(U,{Z:()=>o});const o={firstname:"",lastname:"",email:"",roles:[]}},91972:(J,U,t)=>{"use strict";t.d(U,{Z:()=>o});const o=[]},61322:(J,U,t)=>{"use strict";t.r(U),t.d(U,{default:()=>ot});var e=t(53547),o=t(68547),y=t(92699),f=t(35395),i=t(64459),d=t(80117),D=t(67422),C=t(14319),Z=t.n(C),w=t(49656),B=t(97132),T=t(23724),x=t(45697),M=t.n(x),me=t(46458),X=t(94117),fe=t(49549),oe=t(40264),H=t(33483),ee=t(43546),te=t(56204),ne=t.n(te),se=t(62982),ve=t.n(se),ie=t(58836),Ee=Object.defineProperty,V=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,ue=(s,p,u)=>p in s?Ee(s,p,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[p]=u,pe=(s,p)=>{for(var u in p||(p={}))le.call(p,u)&&ue(s,u,p[u]);if(V)for(var u of V(p))Q.call(p,u)&&ue(s,u,p[u]);return s},Ce=(s,p)=>{var u={};for(var v in s)le.call(s,v)&&p.indexOf(v)<0&&(u[v]=s[v]);if(s!=null&&V)for(var v of V(s))p.indexOf(v)<0&&Q.call(s,v)&&(u[v]=s[v]);return u};const ae=({canDelete:s,headers:p,entriesToDelete:u,onClickDelete:v,onSelectRow:A,withMainAction:N,withBulkActions:I,rows:E})=>{const{push:P,location:{pathname:W}}=(0,w.useHistory)(),{formatMessage:S}=(0,B.useIntl)();return e.createElement(ee.Tbody,null,E.map(O=>{const Y=u.findIndex(K=>K===O.id)!==-1;return e.createElement(ee.Tr,pe({key:O.id},(0,o.onRowClick)({fn:()=>P(`${W}/${O.id}`),condition:I})),N&&e.createElement(ee.Td,pe({},o.stopPropagation),e.createElement(me.BaseCheckbox,{"aria-label":S({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,ie.Pp)(O.firstname,O.lastname)}),checked:Y,onChange:()=>{A({name:O.id,value:!Y})}})),p.map(K=>{var j=K,{key:q,cellFormatter:k,name:$}=j,z=Ce(j,["key","cellFormatter","name"]);return e.createElement(ee.Td,{key:q},typeof k=="function"?k(O,pe({key:q,name:$},z)):e.createElement(H.Typography,{textColor:"neutral800"},O[$]||"-"))}),I&&e.createElement(ee.Td,null,e.createElement(oe.Flex,{justifyContent:"end"},e.createElement(fe.IconButton,{onClick:()=>P(`${W}/${O.id}`),label:S({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,ie.Pp)(O.firstname,O.lastname)}),noBorder:!0,icon:e.createElement(ne(),null)}),s&&e.createElement(X.Box,pe({paddingLeft:1},o.stopPropagation),e.createElement(fe.IconButton,{onClick:()=>v(O.id),label:S({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,ie.Pp)(O.firstname,O.lastname)}),noBorder:!0,icon:e.createElement(ve(),null)})))))}))};ae.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete:()=>{},onSelectRow:()=>{},rows:[],withBulkActions:!1,withMainAction:!1},ae.propTypes={canDelete:M().bool,entriesToDelete:M().array,headers:M().array.isRequired,onClickDelete:M().func,onSelectRow:M().func,rows:M().array,withBulkActions:M().bool,withMainAction:M().bool};const Ze=ae;var xe=t(88231),Ne=t.n(xe);const Ie=({displayedFilters:s})=>{const[p,u]=(0,e.useState)(!1),{formatMessage:v}=(0,B.useIntl)(),A=(0,e.useRef)(),N=()=>{u(I=>!I)};return e.createElement(e.Fragment,null,e.createElement(X.Box,{paddingTop:1,paddingBottom:1},e.createElement(i.Button,{variant:"tertiary",ref:A,startIcon:e.createElement(Ne(),null),onClick:N,size:"S"},v({id:"app.utils.filters",defaultMessage:"Filters"})),p&&e.createElement(o.FilterPopoverURLQuery,{displayedFilters:s,isVisible:p,onToggle:N,source:A})),e.createElement(o.FilterListURLQuery,{filtersSchema:s}))};Ie.propTypes={displayedFilters:M().arrayOf(M().shape({name:M().string.isRequired,metadatas:M().shape({label:M().string}),fieldSchema:M().shape({type:M().string})})).isRequired};const je=Ie;var Ge=t(71002),_e=t(87462),Re=t(15861),Ae=t(70885),Te=t(68991),ye=t(39272),Ue=t(44981),we=t(9524),$e=t(80831),Se=t(63955),ze=t(7676);const Qe=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var Me=t(63600);const ke=Me.Ry().shape({firstname:Me.Z_().required(o.translatedErrors.required),lastname:Me.Z_(),email:Me.Z_().email(o.translatedErrors.email).required(o.translatedErrors.required),roles:Me.IX().min(1,o.translatedErrors.required).required(o.translatedErrors.required)}),Xe={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};function Pe(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Pe=function(){return s};var s={},p=Object.prototype,u=p.hasOwnProperty,v=typeof Symbol=="function"?Symbol:{},A=v.iterator||"@@iterator",N=v.asyncIterator||"@@asyncIterator",I=v.toStringTag||"@@toStringTag";function E(a,n,r){return Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),a[n]}try{E({},"")}catch(a){E=function(r,l,c){return r[l]=c}}function P(a,n,r,l){var c=n&&n.prototype instanceof O?n:O,m=Object.create(c.prototype),h=new Oe(l||[]);return m._invoke=function(b,R,g){var L="suspendedStart";return function(_,de){if(L==="executing")throw new Error("Generator is already running");if(L==="completed"){if(_==="throw")throw de;return De()}for(g.method=_,g.arg=de;;){var F=g.delegate;if(F){var Be=G(F,g);if(Be){if(Be===S)continue;return Be}}if(g.method==="next")g.sent=g._sent=g.arg;else if(g.method==="throw"){if(L==="suspendedStart")throw L="completed",g.arg;g.dispatchException(g.arg)}else g.method==="return"&&g.abrupt("return",g.arg);L="executing";var Le=W(b,R,g);if(Le.type==="normal"){if(L=g.done?"completed":"suspendedYield",Le.arg===S)continue;return{value:Le.arg,done:g.done}}Le.type==="throw"&&(L="completed",g.method="throw",g.arg=Le.arg)}}}(a,r,h),m}function W(a,n,r){try{return{type:"normal",arg:a.call(n,r)}}catch(l){return{type:"throw",arg:l}}}s.wrap=P;var S={};function O(){}function Y(){}function K(){}var j={};E(j,A,function(){return this});var q=Object.getPrototypeOf,k=q&&q(q(he([])));k&&k!==p&&u.call(k,A)&&(j=k);var $=K.prototype=O.prototype=Object.create(j);function z(a){["next","throw","return"].forEach(function(n){E(a,n,function(r){return this._invoke(n,r)})})}function ce(a,n){function r(c,m,h,b){var R=W(a[c],a,m);if(R.type!=="throw"){var g=R.arg,L=g.value;return L&&(0,Ge.Z)(L)=="object"&&u.call(L,"__await")?n.resolve(L.__await).then(function(_){r("next",_,h,b)},function(_){r("throw",_,h,b)}):n.resolve(L).then(function(_){g.value=_,h(g)},function(_){return r("throw",_,h,b)})}b(R.arg)}var l;this._invoke=function(c,m){function h(){return new n(function(b,R){r(c,m,b,R)})}return l=l?l.then(h,h):h()}}function G(a,n){var r=a.iterator[n.method];if(r===void 0){if(n.delegate=null,n.method==="throw"){if(a.iterator.return&&(n.method="return",n.arg=void 0,G(a,n),n.method==="throw"))return S;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var l=W(r,a.iterator,n.arg);if(l.type==="throw")return n.method="throw",n.arg=l.arg,n.delegate=null,S;var c=l.arg;return c?c.done?(n[a.resultName]=c.value,n.next=a.nextLoc,n.method!=="return"&&(n.method="next",n.arg=void 0),n.delegate=null,S):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,S)}function ge(a){var n={tryLoc:a[0]};1 in a&&(n.catchLoc=a[1]),2 in a&&(n.finallyLoc=a[2],n.afterLoc=a[3]),this.tryEntries.push(n)}function re(a){var n=a.completion||{};n.type="normal",delete n.arg,a.completion=n}function Oe(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(ge,this),this.reset(!0)}function he(a){if(a){var n=a[A];if(n)return n.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var r=-1,l=function c(){for(;++r<a.length;)if(u.call(a,r))return c.value=a[r],c.done=!1,c;return c.value=void 0,c.done=!0,c};return l.next=l}}return{next:De}}function De(){return{value:void 0,done:!0}}return Y.prototype=K,E($,"constructor",K),E(K,"constructor",Y),Y.displayName=E(K,I,"GeneratorFunction"),s.isGeneratorFunction=function(a){var n=typeof a=="function"&&a.constructor;return!!n&&(n===Y||(n.displayName||n.name)==="GeneratorFunction")},s.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,K):(a.__proto__=K,E(a,I,"GeneratorFunction")),a.prototype=Object.create($),a},s.awrap=function(a){return{__await:a}},z(ce.prototype),E(ce.prototype,N,function(){return this}),s.AsyncIterator=ce,s.async=function(a,n,r,l,c){c===void 0&&(c=Promise);var m=new ce(P(a,n,r,l),c);return s.isGeneratorFunction(n)?m:m.next().then(function(h){return h.done?h.value:m.next()})},z($),E($,I,"Generator"),E($,A,function(){return this}),E($,"toString",function(){return"[object Generator]"}),s.keys=function(a){var n=[];for(var r in a)n.push(r);return n.reverse(),function l(){for(;n.length;){var c=n.pop();if(c in a)return l.value=c,l.done=!1,l}return l.done=!0,l}},s.values=he,Oe.prototype={constructor:Oe,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(re),!n)for(var r in this)r.charAt(0)==="t"&&u.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function l(g,L){return h.type="throw",h.arg=n,r.next=g,L&&(r.method="next",r.arg=void 0),!!L}for(var c=this.tryEntries.length-1;c>=0;--c){var m=this.tryEntries[c],h=m.completion;if(m.tryLoc==="root")return l("end");if(m.tryLoc<=this.prev){var b=u.call(m,"catchLoc"),R=u.call(m,"finallyLoc");if(b&&R){if(this.prev<m.catchLoc)return l(m.catchLoc,!0);if(this.prev<m.finallyLoc)return l(m.finallyLoc)}else if(b){if(this.prev<m.catchLoc)return l(m.catchLoc,!0)}else{if(!R)throw new Error("try statement without catch or finally");if(this.prev<m.finallyLoc)return l(m.finallyLoc)}}}},abrupt:function(n,r){for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l];if(c.tryLoc<=this.prev&&u.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var m=c;break}}m&&(n==="break"||n==="continue")&&m.tryLoc<=r&&r<=m.finallyLoc&&(m=null);var h=m?m.completion:{};return h.type=n,h.arg=r,m?(this.method="next",this.next=m.finallyLoc,S):this.complete(h)},complete:function(n,r){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&r&&(this.next=r),S},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.finallyLoc===n)return this.complete(l.completion,l.afterLoc),re(l),S}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc===n){var c=l.completion;if(c.type==="throw"){var m=c.arg;re(l)}return m}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,l){return this.delegate={iterator:he(n),resultName:r,nextLoc:l},this.method==="next"&&(this.arg=void 0),S}},s}var He=function(){return window&&window.strapi&&window.strapi.isEE?t(58818).Z:t(79313).Z}(),Ve=function(){return window&&window.strapi&&window.strapi.isEE?t(81003).Z:t(91972).Z}(),Ye=function(){return window&&window.strapi&&window.strapi.isEE?t(77791).Z:t(26010).Z}(),We=function(p){var u=p.queryName,v=p.onToggle,A=(0,e.useState)("create"),N=(0,Ae.Z)(A,2),I=N[0],E=N[1],P=(0,e.useState)(!1),W=(0,Ae.Z)(P,2),S=W[0],O=W[1],Y=(0,e.useState)(null),K=(0,Ae.Z)(Y,2),j=K[0],q=K[1],k=(0,T.useQueryClient)(),$=(0,B.useIntl)(),z=$.formatMessage,ce=(0,o.useNotification)(),G=(0,o.useOverlayBlocker)(),ge=G.lockApp,re=G.unlockApp,Oe=(0,T.useMutation)(function(h){return Se.be.post("/admin/users",h)},{onSuccess:function(){var h=(0,Re.Z)(Pe().mark(function R(g){var L;return Pe().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return L=g.data,q(L.data.registrationToken),de.next=4,k.invalidateQueries(u);case 4:a(),O(!1);case 6:case"end":return de.stop()}},R)}));function b(R){return h.apply(this,arguments)}return b}(),onError:function(b){throw O(!1),ce({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),b},onSettled:function(){re()}}),he=z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),De=function(){var h=(0,Re.Z)(Pe().mark(function b(R,g){var L,_;return Pe().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return L=g.setErrors,ge(),O(!0),F.prev=3,F.next=6,Oe.mutateAsync(R);case 6:F.next=12;break;case 8:F.prev=8,F.t0=F.catch(3),re(),(F.t0===null||F.t0===void 0||(_=F.t0.response)===null||_===void 0?void 0:_.data.message)==="Email already taken"&&L({email:F.t0.response.data.message});case 12:case"end":return F.stop()}},b,null,[[3,8]])}));return function(R,g){return h.apply(this,arguments)}}(),a=function(){c?E(c):v()},n=Xe[I],r=n.buttonSubmitLabel,l=n.isDisabled,c=n.next,m=I==="create"?e.createElement(i.Button,{type:"submit",loading:S},z(r)):e.createElement(i.Button,{type:"button",loading:S,onClick:v},z(r));return e.createElement(Te.ModalLayout,{onClose:v,labelledBy:"title"},e.createElement(Te.ModalHeader,null,e.createElement(Ue.Breadcrumbs,{label:he},e.createElement(Ue.Crumb,null,he))),e.createElement($e.Formik,{initialValues:He,onSubmit:De,validationSchema:ke,validateOnChange:!1},function(h){var b=h.errors,R=h.handleChange,g=h.values;return e.createElement(o.Form,null,e.createElement(Te.ModalBody,null,e.createElement(we.Stack,{spacing:6},I!=="create"&&e.createElement(Ye,{registrationToken:j}),e.createElement(X.Box,null,e.createElement(H.Typography,{variant:"beta",as:"h2"},z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),e.createElement(X.Box,{paddingTop:4},e.createElement(we.Stack,{spacing:1},e.createElement(ye.Grid,{gap:5},Qe.map(function(L){return L.map(function(_){return e.createElement(ye.GridItem,(0,_e.Z)({key:_.name},_.size),e.createElement(o.GenericInput,(0,_e.Z)({},_,{disabled:l,error:b[_.name],onChange:R,value:g[_.name]})))})}))))),e.createElement(X.Box,null,e.createElement(H.Typography,{variant:"beta",as:"h2"},z({id:"global.roles",defaultMessage:"User's role"})),e.createElement(X.Box,{paddingTop:4},e.createElement(ye.Grid,{gap:5},e.createElement(ye.GridItem,{col:6,xs:12},e.createElement(ze.Z,{disabled:l,error:b.roles,onChange:R,value:g.roles})),Ve.map(function(L){return L.map(function(_){return e.createElement(ye.GridItem,(0,_e.Z)({key:_.name},_.size),e.createElement(o.GenericInput,(0,_e.Z)({},_,{disabled:l,onChange:R,value:g[_.name]})))})})))))),e.createElement(Te.ModalFooter,{startActions:e.createElement(i.Button,{variant:"tertiary",onClick:v,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:m}))}))};We.propTypes={onToggle:M().func.isRequired,queryName:M().array.isRequired};const Je=We,be=({pagination:s})=>e.createElement(X.Box,{paddingTop:4},e.createElement(oe.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.PageSizeURLQuery,null),e.createElement(o.PaginationURLQuery,{pagination:s})));be.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},be.propTypes={pagination:M().shape({page:M().number,pageCount:M().number,pageSize:M().number,total:M().number})};const qe=be;var Ke=(s,p,u)=>new Promise((v,A)=>{var N=P=>{try{E(u.next(P))}catch(W){A(W)}},I=P=>{try{E(u.throw(P))}catch(W){A(W)}},E=P=>P.done?v(P.value):Promise.resolve(P.value).then(N,I);E((u=u.apply(s,p)).next())});const et=(s,p)=>Ke(void 0,null,function*(){const{data:{data:u}}=yield Se.be.get(`/admin/users${s}`);return p(),u}),tt=s=>Ke(void 0,null,function*(){yield Se.be.post("/admin/users/batch-delete",{ids:s})}),nt=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Fe=[{name:"firstname",key:"firstname",metadatas:{label:"Firstname",sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:"Lastname",sortable:!0}},{key:"email",name:"email",metadatas:{label:"Email",sortable:!0}},{key:"roles",name:"roles",metadatas:{label:"Roles",sortable:!1},cellFormatter:({roles:s})=>e.createElement(H.Typography,{textColor:"neutral800"},s.map(p=>p.name).join(`,
`))},{key:"username",name:"username",metadatas:{label:"Username",sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:"User status",sortable:!1},cellFormatter:({isActive:s})=>e.createElement(oe.Flex,null,e.createElement(o.Status,{isActive:s,variant:s?"success":"danger"}),e.createElement(H.Typography,{textColor:"neutral800"},s?"Active":"Inactive"))}];var at=(s,p,u)=>new Promise((v,A)=>{var N=P=>{try{E(u.next(P))}catch(W){A(W)}},I=P=>{try{E(u.throw(P))}catch(W){A(W)}},E=P=>P.done?v(P.value):Promise.resolve(P.value).then(N,I);E((u=u.apply(s,p)).next())});const rt=()=>{const[s,p]=(0,e.useState)(!1),{allowedActions:{canCreate:u,canDelete:v,canRead:A}}=(0,o.useRBAC)(y.Z.settings.users),N=(0,T.useQueryClient)(),I=(0,o.useNotification)(),{formatMessage:E}=(0,B.useIntl)(),{search:P}=(0,w.useLocation)();(0,o.useFocusWhenNavigate)();const{notifyStatus:W}=(0,D.useNotifyAT)(),S=["users",P],O=E({id:"global.users",defaultMessage:"Users"}),Y=()=>{W(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:O}))},{status:K,data:j,isFetching:q}=(0,T.useQuery)(S,()=>et(P,Y),{enabled:A,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:()=>{I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),k=()=>{p(G=>!G)},$=(0,T.useMutation)(G=>tt(G),{onSuccess:()=>at(void 0,null,function*(){yield N.invalidateQueries(S)}),onError:G=>{var ge,re;(re=(ge=G==null?void 0:G.response)==null?void 0:ge.data)!=null&&re.data?I({type:"warning",message:G.response.data.data}):I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),z=K!=="success"&&K!=="error"||K==="success"&&q,ce=u?e.createElement(i.Button,{"data-testid":"create-user-button",onClick:k,startIcon:e.createElement(Z(),null),size:"L"},E({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return e.createElement(d.Main,{"aria-busy":z},e.createElement(o.SettingsPageTitle,{name:"Users"}),e.createElement(f.HeaderLayout,{primaryAction:ce,title:O,subtitle:E({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),A&&e.createElement(f.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(o.SearchURLQuery,{label:E({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:O})}),e.createElement(je,{displayedFilters:nt}))}),e.createElement(f.ContentLayout,{canRead:A},!A&&e.createElement(o.NoPermissions,null),K==="error"&&e.createElement("div",null,"TODO: An error occurred"),A&&e.createElement(e.Fragment,null,e.createElement(o.DynamicTable,{contentType:"Users",isLoading:z,onConfirmDeleteAll:$.mutateAsync,onConfirmDelete:G=>$.mutateAsync([G]),headers:Fe,rows:j==null?void 0:j.results,withBulkActions:!0,withMainAction:v},e.createElement(Ze,{canDelete:v,headers:Fe,rows:(j==null?void 0:j.results)||[],withBulkActions:!0,withMainAction:v})),e.createElement(qe,{pagination:j==null?void 0:j.pagination}))),s&&e.createElement(Je,{onToggle:k,queryName:S}))},ot=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.settings.users.main},e.createElement(rt,null))},53073:(J,U,t)=>{"use strict";t.d(U,{Z:()=>X});var e=t(53547),o=t(45697),y=t.n(o),f=t(49549),i=t.n(f),d=t(68547),D=t.n(d),C=t(54279),Z=t.n(C),w=t(74855),B=t.n(w),T=t(97132),x=t.n(T);const M=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},e.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),me=({children:fe,target:oe})=>{const H=(0,d.useNotification)(),{formatMessage:ee}=(0,T.useIntl)(),te=()=>{H({type:"info",message:{id:"notification.link-copied"}})},ne=ee({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return e.createElement(d.ContentBox,{endAction:e.createElement(w.CopyToClipboard,{onCopy:te,text:oe},e.createElement(f.IconButton,{label:ne,noBorder:!0,icon:e.createElement(Z(),null)})),title:oe,titleEllipsis:!0,subtitle:fe,icon:e.createElement(M,null),iconBackground:"neutral100"})};me.propTypes={children:y().oneOfType([y().element,y().string]).isRequired,target:y().string.isRequired};const X=me},26010:(J,U,t)=>{"use strict";t.d(U,{Z:()=>Z});var e=t(53547),o=t(97132),y=t.n(o),f=t(45697),i=t.n(f),d=t(71242),D=t(53073);const C=({registrationToken:w})=>{const{formatMessage:B}=(0,o.useIntl)(),T=`${window.location.origin}${d.Z}auth/register?registrationToken=${w}`;return e.createElement(D.Z,{target:T},B({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};C.defaultProps={registrationToken:""},C.propTypes={registrationToken:i().string};const Z=C},7676:(J,U,t)=>{"use strict";t.d(U,{Z:()=>ee});var e=t(53547),o=t(45697),y=t.n(o),f=t(97132),i=t.n(f),d=t(2632),D=t.n(d),C=t(23724),Z=t.n(C),w=t(78384),B=t(79386),T=t.n(B),x=t(63955),M=(te,ne,se)=>new Promise((ve,ie)=>{var Ee=Q=>{try{le(se.next(Q))}catch(ue){ie(ue)}},V=Q=>{try{le(se.throw(Q))}catch(ue){ie(ue)}},le=Q=>Q.done?ve(Q.value):Promise.resolve(Q.value).then(Ee,V);le((se=se.apply(te,ne)).next())});const me=w.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,X=w.default.div`
  animation: ${me} 2s infinite linear;
`,fe=()=>e.createElement(X,null,e.createElement(T(),null)),oe=()=>M(void 0,null,function*(){const{data:te}=yield x.be.get("/admin/roles");return te.data}),H=({disabled:te,error:ne,onChange:se,value:ve})=>{const{status:ie,data:Ee}=(0,C.useQuery)(["roles"],oe,{staleTime:5e4}),{formatMessage:V}=(0,f.useIntl)(),le=ne?V({id:ne,defaultMessage:ne}):"",Q=V({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),ue=V({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),pe=V({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Ce=ie==="loading"?e.createElement(fe,null):void 0;return e.createElement(d.Select,{id:"roles",disabled:te,error:le,hint:ue,label:Q,name:"roles",onChange:ae=>{se({target:{name:"roles",value:ae}})},placeholder:pe,multi:!0,startIcon:Ce,value:ve,withTags:!0,required:!0},(Ee||[]).map(ae=>e.createElement(d.Option,{key:ae.id,value:ae.id},ae.name)))};H.defaultProps={disabled:!1,error:void 0},H.propTypes={disabled:y().bool,error:y().string,onChange:y().func.isRequired,value:y().array.isRequired};const ee=H},58818:(J,U,t)=>{"use strict";t.d(U,{Z:()=>w});var e=t(79313),o=Object.defineProperty,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(B,T,x)=>T in B?o(B,T,{enumerable:!0,configurable:!0,writable:!0,value:x}):B[T]=x,D=(B,T)=>{for(var x in T||(T={}))f.call(T,x)&&d(B,x,T[x]);if(y)for(var x of y(T))i.call(T,x)&&d(B,x,T[x]);return B};const C=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},w=D(D({},e.Z),C)},81003:(J,U,t)=>{"use strict";t.d(U,{Z:()=>o});const o=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},77791:(J,U,t)=>{"use strict";t.d(U,{Z:()=>Z});var e=t(53547),o=t(97132),y=t.n(o),f=t(45697),i=t.n(f),d=t(71242),D=t(53073);const C=({registrationToken:w})=>{const{formatMessage:B}=(0,o.useIntl)();return w?e.createElement(D.Z,{target:`${window.location.origin}${d.Z}auth/register?registrationToken=${w}`},B({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):e.createElement(D.Z,{target:`${window.location.origin}${d.Z}auth/login`},B({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};C.defaultProps={registrationToken:""},C.propTypes={registrationToken:i().string};const Z=C}}]);
