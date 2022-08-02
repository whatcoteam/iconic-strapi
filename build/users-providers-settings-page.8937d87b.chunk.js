(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[2282],{44981:(k,A,m)=>{"use strict";k.exports=m(5582)},5582:function(k,A,m){(function(l,L){k.exports=L(m(53547),m(78384),m(74764))})(this,function(l,L,O){return function(a){var v={};function r(i){if(v[i])return v[i].exports;var o=v[i]={i,l:!1,exports:{}};return a[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=a,r.c=v,r.d=function(i,o,f){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:f})},r.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var f=Object.create(null);if(r.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var u in i)r.d(f,u,function(n){return i[n]}.bind(null,u));return f},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=112)}({0:function(a,v,r){a.exports=r(19)()},1:function(a,v){a.exports=l},10:function(a,v,r){var i=r(25),o=r(26),f=r(22),u=r(27);a.exports=function(n,g){return i(n)||o(n,g)||f(n,g)||u()},a.exports.default=a.exports,a.exports.__esModule=!0},112:function(a,v,r){"use strict";r.r(v),r.d(v,"Crumb",function(){return W}),r.d(v,"Breadcrumbs",function(){return q});var i,o=r(4),f=r.n(o),u=r(3),n=r.n(u),g=r(1),b=r.n(g),y=r(0),E=r.n(y),h=r(2),e=r.n(h),t=r(50),s=r.n(t),x=r(8),F=r(6),G=r(9),Q=r(18),$=["children","label"],Z=e()(G.Flex)(i||(i=n()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(U){return U.theme.colors.neutral300},F.Box),W=function(U){var H=U.children;return b.a.createElement(Z,{inline:!0,as:"li"},b.a.createElement(x.Typography,{fontWeight:"bold",color:"neutral800"},H),b.a.createElement(F.Box,{paddingLeft:3,paddingRight:3},b.a.createElement(s.a,null)))};W.displayName="Crumb",W.propTypes={children:E.a.string.isRequired};var D=E.a.shape({type:E.a.oneOf([W])}),q=function(U){var H=U.children,_=U.label,ee=f()(U,$);return b.a.createElement(G.Flex,ee,b.a.createElement(Q.VisuallyHidden,null,_),b.a.createElement("ol",{"aria-hidden":!0},H))};q.displayName="Breadcrumbs",q.propTypes={children:E.a.oneOfType([E.a.arrayOf(D),D]).isRequired,label:E.a.string.isRequired}},13:function(a,v){function r(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(a.exports=r=function(o){return typeof o},a.exports.default=a.exports,a.exports.__esModule=!0):(a.exports=r=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},a.exports.default=a.exports,a.exports.__esModule=!0),r(i)}a.exports=r,a.exports.default=a.exports,a.exports.__esModule=!0},18:function(a,v,r){"use strict";r.r(v),r.d(v,"VisuallyHidden",function(){return n});var i,o=r(3),f=r.n(o),u=r(2),n=r.n(u).a.div(i||(i=f()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(a,v,r){"use strict";var i=r(20);function o(){}function f(){}f.resetWarningCache=o,a.exports=function(){function u(b,y,E,h,e,t){if(t!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return u}u.isRequired=u;var g={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:n,element:u,elementType:u,instanceOf:n,node:u,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:f,resetWarningCache:o};return g.PropTypes=g,g}},2:function(a,v){a.exports=L},20:function(a,v,r){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(a,v){a.exports=function(r,i){(i==null||i>r.length)&&(i=r.length);for(var o=0,f=new Array(i);o<i;o++)f[o]=r[o];return f},a.exports.default=a.exports,a.exports.__esModule=!0},22:function(a,v,r){var i=r(21);a.exports=function(o,f){if(o){if(typeof o=="string")return i(o,f);var u=Object.prototype.toString.call(o).slice(8,-1);return u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set"?Array.from(o):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?i(o,f):void 0}},a.exports.default=a.exports,a.exports.__esModule=!0},24:function(a,v){a.exports=function(r,i){if(r==null)return{};var o,f,u={},n=Object.keys(r);for(f=0;f<n.length;f++)o=n[f],i.indexOf(o)>=0||(u[o]=r[o]);return u},a.exports.default=a.exports,a.exports.__esModule=!0},25:function(a,v){a.exports=function(r){if(Array.isArray(r))return r},a.exports.default=a.exports,a.exports.__esModule=!0},26:function(a,v){a.exports=function(r,i){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var f,u,n=[],g=!0,b=!1;try{for(o=o.call(r);!(g=(f=o.next()).done)&&(n.push(f.value),!i||n.length!==i);g=!0);}catch(y){b=!0,u=y}finally{try{g||o.return==null||o.return()}finally{if(b)throw u}}return n}},a.exports.default=a.exports,a.exports.__esModule=!0},27:function(a,v){a.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},a.exports.default=a.exports,a.exports.__esModule=!0},3:function(a,v){a.exports=function(r,i){return i||(i=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))},a.exports.default=a.exports,a.exports.__esModule=!0},4:function(a,v,r){var i=r(24);a.exports=function(o,f){if(o==null)return{};var u,n,g=i(o,f);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);for(n=0;n<b.length;n++)u=b[n],f.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(o,u)&&(g[u]=o[u])}return g},a.exports.default=a.exports,a.exports.__esModule=!0},50:function(a,v){a.exports=O},6:function(a,v,r){"use strict";r.r(v),r.d(v,"Box",function(){return h});var i,o=r(3),f=r.n(o),u=r(0),n=r.n(u),g=r(2),b=r.n(g),y=r(7),E={color:!0},h=b.a.div.withConfig({shouldForwardProp:function(e,t){return!E[e]&&t(e)}})(i||(i=f()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t},function(e){var t=e.theme,s=e.background;return t.colors[s]},function(e){var t=e.theme,s=e.color;return t.colors[s]},function(e){var t=e.theme,s=e.padding;return Object(y.a)("padding",s,t)},function(e){var t=e.theme,s=e.paddingTop;return Object(y.a)("padding-top",s,t)},function(e){var t=e.theme,s=e.paddingRight;return Object(y.a)("padding-right",s,t)},function(e){var t=e.theme,s=e.paddingBottom;return Object(y.a)("padding-bottom",s,t)},function(e){var t=e.theme,s=e.paddingLeft;return Object(y.a)("padding-left",s,t)},function(e){var t=e.theme,s=e.marginLeft;return Object(y.a)("margin-left",s,t)},function(e){var t=e.theme,s=e.marginRight;return Object(y.a)("margin-right",s,t)},function(e){var t=e.theme,s=e.marginTop;return Object(y.a)("margin-top",s,t)},function(e){var t=e.theme,s=e.marginBottom;return Object(y.a)("margin-bottom",s,t)},function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(e){var t=e.theme,s=e.hasRadius,x=e.borderRadius;return s?t.borderRadius:x},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var t=e.borderColor;return e.theme.colors[t]},function(e){var t=e.theme,s=e.borderColor,x=e.borderStyle,F=e.borderWidth;if(s&&!x&&!F)return"1px solid ".concat(t.colors[s])},function(e){var t=e.theme,s=e.shadow;return t.shadows[s]},function(e){return e.pointerEvents},function(e){var t=e._hover,s=e.theme;return t?t(s):void 0},function(e){return e.display},function(e){return e.position},function(e){var t=e.left;return e.theme.spaces[t]||t},function(e){var t=e.right;return e.theme.spaces[t]||t},function(e){var t=e.top;return e.theme.spaces[t]||t},function(e){var t=e.bottom;return e.theme.spaces[t]||t},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var t=e.width;return e.theme.spaces[t]||t},function(e){var t=e.maxWidth;return e.theme.spaces[t]||t},function(e){var t=e.minWidth;return e.theme.spaces[t]||t},function(e){var t=e.height;return e.theme.spaces[t]||t},function(e){var t=e.maxHeight;return e.theme.spaces[t]||t},function(e){var t=e.minHeight;return e.theme.spaces[t]||t},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});h.displayName="Box",h.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},h.propTypes={_hover:n.a.func,background:n.a.string,basis:n.a.oneOfType([n.a.string,n.a.string]),borderColor:n.a.string,children:n.a.oneOfType([n.a.node,n.a.string]),color:n.a.string,flex:n.a.oneOfType([n.a.string,n.a.string]),grow:n.a.oneOfType([n.a.string,n.a.string]),hasRadius:n.a.bool,hiddenS:n.a.bool,hiddenXS:n.a.bool,padding:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingBottom:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingLeft:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingRight:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),paddingTop:n.a.oneOfType([n.a.number,n.a.arrayOf(n.a.number)]),shadow:n.a.string,shrink:n.a.oneOfType([n.a.string,n.a.string])}},7:function(a,v,r){"use strict";var i=r(10),o=r.n(i),f=r(13),u=r.n(f);v.a=function(n,g,b){var y=g;if(Array.isArray(g)||u()(g)!=="object"||(y=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),y!==void 0){if(Array.isArray(y)){var E=y,h=o()(E,3),e=h[0],t=h[1],s=h[2],x="".concat(n,": ").concat(b.spaces[e],";");return t!==void 0&&(x+="".concat(b.mediaQueries.tablet,`{
          `).concat(n,": ").concat(b.spaces[t],`;
        }`)),s!==void 0&&(x+="".concat(b.mediaQueries.mobile,`{
          `).concat(n,": ").concat(b.spaces[s],`;
        }`)),x}var F=b.spaces[y]||y;return"".concat(n,": ").concat(F,";")}}},8:function(a,v,r){"use strict";r.r(v),r.d(v,"Typography",function(){return E});var i,o=r(3),f=r.n(o),u=r(0),n=r.n(u),g=r(2),b=["alpha","beta","delta","epsilon","omega","pi","sigma"],y={fontSize:!0,fontWeight:!0},E=r.n(g).a.span.withConfig({shouldForwardProp:function(h,e){return!y[h]&&e(h)}})(i||(i=f()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(h){var e=h.theme,t=h.fontWeight;return e.fontWeights[t]},function(h){var e=h.theme,t=h.fontSize;return e.fontSizes[t]},function(h){var e=h.theme,t=h.lineHeight;return e.lineHeights[t]},function(h){var e=h.theme,t=h.textColor;return e.colors[t||"neutral800"]},function(h){return h.textTransform},function(h){return h.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(h){var e=h.variant,t=h.theme;switch(e){case"alpha":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[5],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[4],`;
        line-height: `).concat(t.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(t.fontWeights.semiBold,`;
        font-size: `).concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(t.fontSizes[2],`;
        line-height: `).concat(t.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(t.fontSizes[1],`;
        line-height: `).concat(t.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[0],`;
        line-height: `).concat(t.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(t.fontSizes[2],`;
      `)}});E.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},E.propTypes={fontSize:n.a.oneOfType([n.a.number,n.a.string]),fontWeight:n.a.string,lineHeight:n.a.oneOfType([n.a.number,n.a.string]),textColor:n.a.string,textTransform:n.a.string,variant:n.a.oneOf(b)}},9:function(a,v,r){"use strict";r.r(v),r.d(v,"Flex",function(){return e});var i,o=r(3),f=r.n(o),u=r(0),n=r.n(u),g=r(2),b=r.n(g),y=r(6),E=r(7),h={direction:!0},e=b()(y.Box).withConfig({shouldForwardProp:function(t,s){return!h[t]&&s(t)}})(i||(i=f()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.wrap},function(t){var s=t.gap,x=t.theme;return Object(E.a)("gap",s,x)},function(t){return t.justifyContent});e.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},e.propTypes={alignItems:n.a.string,basis:n.a.oneOfType([n.a.string,n.a.number]),direction:n.a.string,gap:n.a.oneOfType([n.a.shape({desktop:n.a.number,mobile:n.a.number,tablet:n.a.number}),n.a.number,n.a.arrayOf(n.a.number),n.a.string]),inline:n.a.bool,justifyContent:n.a.string,reverse:n.a.bool,wrap:n.a.string}}})})},8884:(k,A,m)=>{"use strict";m.r(A),m.d(A,{ProvidersPage:()=>Pe,default:()=>Ze});var l=m(53547),L=m(97132),O=m(68547),a=m(18721),v=m.n(a),r=m(11700),i=m.n(r),o=m(67814),f=m(35395),u=m(80117),n=m(67422),g=m(43546),b=m(33483),y=m(19631),E=m(49549),h=m(56204),e=m.n(h),t=m(23724),s=m(63600),x=m(42722);const F={id:(0,x.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},G={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},Q={id:(0,x.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},$={id:(0,x.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Z={id:(0,x.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},W={id:(0,x.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},D={id:(0,x.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},q={id:(0,x.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},H={email:{form:[[{intlLabel:$,name:"enabled",type:"bool",description:Q,size:6}]],schema:s.object().shape({enabled:s.bool().required(O.translatedErrors.required)})},providers:{form:[[{intlLabel:$,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:Z,name:"key",type:"text",placeholder:D,size:12,validations:{required:!0}}],[{intlLabel:q,name:"secret",type:"text",placeholder:D,size:12,validations:{required:!0}}],[{intlLabel:F,placeholder:G,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:W,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.object().shape({enabled:s.bool().required(O.translatedErrors.required),key:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()}),secret:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()}),callback:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()})})},providersWithSubdomain:{form:[[{intlLabel:$,name:"enabled",type:"bool",description:Q,size:6,validations:{required:!0}}],[{intlLabel:Z,name:"key",type:"text",placeholder:D,size:12,validations:{required:!0}}],[{intlLabel:q,name:"secret",type:"text",placeholder:D,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,x.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,x.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:F,placeholder:G,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:W,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:s.object().shape({enabled:s.bool().required(O.translatedErrors.required),key:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()}),secret:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()}),subdomain:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()}),callback:s.string().when("enabled",{is:!0,then:s.string().required(O.translatedErrors.required),otherwise:s.string()})})}};var _=(d,c,p)=>new Promise((j,S)=>{var B=M=>{try{C(p.next(M))}catch(T){S(T)}},w=M=>{try{C(p.throw(M))}catch(T){S(T)}},C=M=>M.done?j(M.value):Promise.resolve(M.value).then(B,w);C((p=p.apply(d,c)).next())});const ee=d=>_(void 0,null,function*(){try{const{data:c}=yield x.be.get((0,x.Gc)("providers"));return c}catch(c){throw d({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Ee=d=>x.be.put((0,x.Gc)("providers"),d);var Te=m(96486);const Me=d=>(0,Te.sortBy)(Object.keys(d).reduce((c,p)=>{const{icon:j,enabled:S,subdomain:B}=d[p],w=j==="envelope"?["fas","envelope"]:["fab",j];return B!==void 0?c.push({name:p,icon:w,enabled:S,subdomain:B}):c.push({name:p,icon:w,enabled:S}),c},[]),"name");var ue=m(51725),de=m(64459),Se=m(9524),ce=m(44981),fe=m(39272),K=m(68991),we=m(45697),P=m.n(we),Re=m(80831),je=m(53575),Ce=m(99136),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(d,c,p)=>c in d?Be(d,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[c]=p,te=(d,c)=>{for(var p in c||(c={}))Le.call(c,p)&&me(d,p,c[p]);if(pe)for(var p of pe(c))ze.call(c,p)&&me(d,p,c[p]);return d};const re=({description:d,disabled:c,intlLabel:p,error:j,name:S,onChange:B,placeholder:w,providerToEditName:C,type:M,value:T})=>{const{formatMessage:z}=(0,L.useIntl)(),N=S==="noName"?`${strapi.backendURL}/api/connect/${C}/callback`:T,V=z({id:p.id,defaultMessage:p.defaultMessage},te({provider:C},p.values)),I=d?z({id:d.id,defaultMessage:d.defaultMessage},te({provider:C},d.values)):"";if(M==="bool")return l.createElement(je.ToggleInput,{"aria-label":S,checked:T,disabled:c,hint:I,label:V,name:S,offLabel:z({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:z({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:X=>{B({target:{name:S,value:X.target.checked}})}});const ae=w?z({id:w.id,defaultMessage:w.defaultMessage},te({},w.values)):"",ie=j?z({id:j,defaultMessage:j}):"";return l.createElement(Ce.TextInput,{"aria-label":S,disabled:c,error:ie,label:V,name:S,onChange:B,placeholder:ae,type:M,value:N})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:P().shape({id:P().string.isRequired,defaultMessage:P().string.isRequired,values:P().object}),disabled:P().bool,error:P().string,intlLabel:P().shape({id:P().string.isRequired,defaultMessage:P().string.isRequired,values:P().object}).isRequired,name:P().string.isRequired,onChange:P().func.isRequired,placeholder:P().shape({id:P().string.isRequired,defaultMessage:P().string.isRequired,values:P().object}),providerToEditName:P().string.isRequired,type:P().string.isRequired,value:P().oneOfType([P().bool,P().string])};const Ie=re;var Fe=Object.defineProperty,Ae=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,he=(d,c,p)=>c in d?Fe(d,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[c]=p,He=(d,c)=>{for(var p in c||(c={}))We.call(c,p)&&he(d,p,c[p]);if(ge)for(var p of ge(c))De.call(c,p)&&he(d,p,c[p]);return d},Ne=(d,c)=>Ae(d,Ue(c));const ne=({headerBreadcrumbs:d,initialData:c,isSubmiting:p,layout:j,isOpen:S,onSubmit:B,onToggle:w,providerToEditName:C})=>{const{formatMessage:M}=(0,L.useIntl)();return S?l.createElement(K.ModalLayout,{onClose:w,labelledBy:"title"},l.createElement(K.ModalHeader,null,l.createElement(ce.Breadcrumbs,{label:d.join(", ")},d.map(T=>l.createElement(ce.Crumb,{key:T},T)))),l.createElement(Re.Formik,{onSubmit:T=>B(T),initialValues:c,validationSchema:j.schema,validateOnChange:!1},({errors:T,handleChange:z,values:N})=>l.createElement(O.Form,null,l.createElement(K.ModalBody,null,l.createElement(Se.Stack,{spacing:1},l.createElement(fe.Grid,{gap:5},j.form.map(V=>V.map(I=>l.createElement(fe.GridItem,{key:I.name,col:I.size,xs:12},l.createElement(Ie,Ne(He({},I),{error:T[I.name],onChange:z,value:N[I.name],providerToEditName:C})))))))),l.createElement(K.ModalFooter,{startActions:l.createElement(de.Button,{variant:"tertiary",onClick:w,type:"button"},M({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:l.createElement(l.Fragment,null,l.createElement(de.Button,{type:"submit",loading:p},M({id:"global.save",defaultMessage:"Save"})))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:P().arrayOf(P().string).isRequired,initialData:P().object,layout:P().shape({form:P().arrayOf(P().array),schema:P().object}).isRequired,isOpen:P().bool.isRequired,isSubmiting:P().bool.isRequired,onSubmit:P().func.isRequired,onToggle:P().func.isRequired,providerToEditName:P().string};const ke=ne;var qe=Object.defineProperty,Ve=Object.defineProperties,Ge=Object.getOwnPropertyDescriptors,ve=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,be=(d,c,p)=>c in d?qe(d,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[c]=p,oe=(d,c)=>{for(var p in c||(c={}))Qe.call(c,p)&&be(d,p,c[p]);if(ve)for(var p of ve(c))$e.call(c,p)&&be(d,p,c[p]);return d},Xe=(d,c)=>Ve(d,Ge(c)),ye=(d,c,p)=>new Promise((j,S)=>{var B=M=>{try{C(p.next(M))}catch(T){S(T)}},w=M=>{try{C(p.throw(M))}catch(T){S(T)}},C=M=>M.done?j(M.value):Promise.resolve(M.value).then(B,w);C((p=p.apply(d,c)).next())});const Pe=()=>{const{formatMessage:d}=(0,L.useIntl)();(0,O.useFocusWhenNavigate)();const{notifyStatus:c}=(0,n.useNotifyAT)(),p=(0,t.useQueryClient)(),{trackUsage:j}=(0,O.useTracking)(),S=(0,l.useRef)(j),[B,w]=(0,l.useState)(!1),[C,M]=(0,l.useState)(!1),[T,z]=(0,l.useState)(null),N=(0,O.useNotification)(),{lockApp:V,unlockApp:I}=(0,O.useOverlayBlocker)(),ae=(0,l.useMemo)(()=>({update:ue.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:X}}=(0,O.useRBAC)(ae),{isLoading:Ke,data:Y,isFetching:Ye}=(0,t.useQuery)("get-providers",()=>ee(N),{onSuccess:()=>{c(d({id:(0,x.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Je=Ke||Ye,_e=(0,t.useMutation)(Ee,{onSuccess:()=>ye(void 0,null,function*(){yield p.invalidateQueries("get-providers"),N({type:"info",message:{id:(0,x.OB)("notification.success.submit")}}),S.current("didEditAuthenticationProvider"),M(!1),se(),I()}),onError:()=>{N({type:"warning",message:{id:"notification.error"}}),I(),M(!1)},refetchActive:!1}),J=(0,l.useMemo)(()=>Me(Y),[Y]),et=J.length,xe=(0,l.useMemo)(()=>{if(!T)return!1;const R=J.find(le=>le.name===T);return v()(R,"subdomain")},[J,T]),tt=d({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,l.useMemo)(()=>T==="email"?H.email:xe?H.providersWithSubdomain:H.providers,[T,xe]),se=()=>{w(R=>!R)},Oe=R=>{X&&(z(R.name),se())},nt=R=>ye(void 0,null,function*(){M(!0),V(),S.current("willEditAuthenticationProvider");const le=Xe(oe({},Y),{[T]:R});_e.mutate({providers:le})});return l.createElement(f.Layout,null,l.createElement(O.SettingsPageTitle,{name:tt}),l.createElement(u.Main,null,l.createElement(f.HeaderLayout,{title:d({id:(0,x.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Je||ie?l.createElement(O.LoadingIndicatorPage,null):l.createElement(f.ContentLayout,null,l.createElement(g.Table,{colCount:4,rowCount:et+1},l.createElement(g.Thead,null,l.createElement(g.Tr,null,l.createElement(g.Th,null,l.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},l.createElement(y.VisuallyHidden,null,d({id:(0,x.OB)("Providers.image"),defaultMessage:"Image"})))),l.createElement(g.Th,null,l.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},d({id:"global.name",defaultMessage:"Name"}))),l.createElement(g.Th,null,l.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},d({id:(0,x.OB)("Providers.status"),defaultMessage:"Status"}))),l.createElement(g.Th,null,l.createElement(b.Typography,{variant:"sigma"},l.createElement(y.VisuallyHidden,null,d({id:"global.settings",defaultMessage:"Settings"})))))),l.createElement(g.Tbody,null,J.map(R=>l.createElement(g.Tr,oe({key:R.name},(0,O.onRowClick)({fn:()=>Oe(R),condition:X})),l.createElement(g.Td,{width:""},l.createElement(o.G,{icon:R.icon})),l.createElement(g.Td,{width:"45%"},l.createElement(b.Typography,{fontWeight:"semiBold",textColor:"neutral800"},R.name)),l.createElement(g.Td,{width:"65%"},l.createElement(b.Typography,{textColor:R.enabled?"success600":"danger600","data-testid":`enable-${R.name}`},R.enabled?d({id:"global.enabled",defaultMessage:"Enabled"}):d({id:"global.disabled",defaultMessage:"Disabled"}))),l.createElement(g.Td,oe({},O.stopPropagation),X&&l.createElement(E.IconButton,{onClick:()=>Oe(R),noBorder:!0,icon:l.createElement(e(),null),label:"Edit"})))))))),l.createElement(ke,{initialData:Y[T],isOpen:B,isSubmiting:C,layout:rt,headerBreadcrumbs:[d({id:(0,x.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),i()(T)],onToggle:se,onSubmit:nt,providerToEditName:T}))},Ze=()=>l.createElement(O.CheckPagePermissions,{permissions:ue.Z.readProviders},l.createElement(Pe,null))},65772:(k,A,m)=>{"use strict";m.d(A,{Z:()=>i});var l=m(9669),L=m.n(l),O=m(68547),a=m.n(O),v=(o,f,u)=>new Promise((n,g)=>{var b=h=>{try{E(u.next(h))}catch(e){g(e)}},y=h=>{try{E(u.throw(h))}catch(e){g(e)}},E=h=>h.done?n(h.value):Promise.resolve(h.value).then(b,y);E((u=u.apply(o,f)).next())});const r=L().create({baseURL:""});r.interceptors.request.use(o=>v(void 0,null,function*(){return o.headers={Authorization:`Bearer ${O.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},o}),o=>{Promise.reject(o)}),r.interceptors.response.use(o=>o,o=>{var f;throw((f=o.response)==null?void 0:f.status)===401&&(O.auth.clearAppStorage(),window.location.reload()),o});const i=r},42722:(k,A,m)=>{"use strict";m.d(A,{be:()=>l.Z,YX:()=>a,Gc:()=>i,OB:()=>o.Z});var l=m(65772),L=m(96486);const a=f=>Object.keys(f).reduce((u,n)=>{const g=f[n].controllers,b=Object.keys(g).reduce((y,E)=>((0,L.isEmpty)(g[E])||(y[E]=g[E]),y),{});return(0,L.isEmpty)(b)||(u[n]={controllers:b}),u},{});var v=m(83086);const i=f=>`/${v.Z}/${f}`;var o=m(97961)}}]);
