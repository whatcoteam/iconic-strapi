(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[8418],{44981:(L,R,d)=>{"use strict";L.exports=d(5582)},5582:function(L,R,d){(function(u,x){L.exports=x(d(53547),d(78384),d(74764))})(this,function(u,x,P){return function(n){var l={};function t(i){if(l[i])return l[i].exports;var a=l[i]={i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=l,t.d=function(i,a,s){t.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:s})},t.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,a){if(1&a&&(i=t(i)),8&a||4&a&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&a&&typeof i!="string")for(var c in i)t.d(s,c,function(o){return i[o]}.bind(null,c));return s},t.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(a,"a",a),a},t.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},t.p="",t(t.s=112)}({0:function(n,l,t){n.exports=t(19)()},1:function(n,l){n.exports=u},10:function(n,l,t){var i=t(25),a=t(26),s=t(22),c=t(27);n.exports=function(o,y){return i(o)||a(o,y)||s(o,y)||c()},n.exports.default=n.exports,n.exports.__esModule=!0},112:function(n,l,t){"use strict";t.r(l),t.d(l,"Crumb",function(){return F}),t.d(l,"Breadcrumbs",function(){return N});var i,a=t(4),s=t.n(a),c=t(3),o=t.n(c),y=t(1),E=t.n(y),p=t(0),v=t.n(p),m=t(2),e=t.n(m),r=t(50),f=t.n(r),S=t(8),I=t(6),$=t(9),J=t(18),q=["children","label"],_=e()($.Flex)(i||(i=o()([`
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
`])),function(z){return z.theme.colors.neutral300},I.Box),F=function(z){var U=z.children;return E.a.createElement(_,{inline:!0,as:"li"},E.a.createElement(S.Typography,{fontWeight:"bold",color:"neutral800"},U),E.a.createElement(I.Box,{paddingLeft:3,paddingRight:3},E.a.createElement(f.a,null)))};F.displayName="Crumb",F.propTypes={children:v.a.string.isRequired};var G=v.a.shape({type:v.a.oneOf([F])}),N=function(z){var U=z.children,W=z.label,Q=s()(z,q);return E.a.createElement($.Flex,Q,E.a.createElement(J.VisuallyHidden,null,W),E.a.createElement("ol",{"aria-hidden":!0},U))};N.displayName="Breadcrumbs",N.propTypes={children:v.a.oneOfType([v.a.arrayOf(G),G]).isRequired,label:v.a.string.isRequired}},13:function(n,l){function t(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),t(i)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},18:function(n,l,t){"use strict";t.r(l),t.d(l,"VisuallyHidden",function(){return o});var i,a=t(3),s=t.n(a),c=t(2),o=t.n(c).a.div(i||(i=s()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(n,l,t){"use strict";var i=t(20);function a(){}function s(){}s.resetWarningCache=a,n.exports=function(){function c(E,p,v,m,e,r){if(r!==i){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function o(){return c}c.isRequired=c;var y={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:o,element:c,elementType:c,instanceOf:o,node:c,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:s,resetWarningCache:a};return y.PropTypes=y,y}},2:function(n,l){n.exports=x},20:function(n,l,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,l){n.exports=function(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,s=new Array(i);a<i;a++)s[a]=t[a];return s},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,l,t){var i=t(21);n.exports=function(a,s){if(a){if(typeof a=="string")return i(a,s);var c=Object.prototype.toString.call(a).slice(8,-1);return c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set"?Array.from(a):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(a,s):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,l){n.exports=function(t,i){if(t==null)return{};var a,s,c={},o=Object.keys(t);for(s=0;s<o.length;s++)a=o[s],i.indexOf(a)>=0||(c[a]=t[a]);return c},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,l){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,l){n.exports=function(t,i){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var s,c,o=[],y=!0,E=!1;try{for(a=a.call(t);!(y=(s=a.next()).done)&&(o.push(s.value),!i||o.length!==i);y=!0);}catch(p){E=!0,c=p}finally{try{y||a.return==null||a.return()}finally{if(E)throw c}}return o}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,l){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,l){n.exports=function(t,i){return i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,l,t){var i=t(24);n.exports=function(a,s){if(a==null)return{};var c,o,y=i(a,s);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(a);for(o=0;o<E.length;o++)c=E[o],s.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(a,c)&&(y[c]=a[c])}return y},n.exports.default=n.exports,n.exports.__esModule=!0},50:function(n,l){n.exports=P},6:function(n,l,t){"use strict";t.r(l),t.d(l,"Box",function(){return m});var i,a=t(3),s=t.n(a),c=t(0),o=t.n(c),y=t(2),E=t.n(y),p=t(7),v={color:!0},m=E.a.div.withConfig({shouldForwardProp:function(e,r){return!v[e]&&r(e)}})(i||(i=s()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,f=e.background;return r.colors[f]},function(e){var r=e.theme,f=e.color;return r.colors[f]},function(e){var r=e.theme,f=e.padding;return Object(p.a)("padding",f,r)},function(e){var r=e.theme,f=e.paddingTop;return Object(p.a)("padding-top",f,r)},function(e){var r=e.theme,f=e.paddingRight;return Object(p.a)("padding-right",f,r)},function(e){var r=e.theme,f=e.paddingBottom;return Object(p.a)("padding-bottom",f,r)},function(e){var r=e.theme,f=e.paddingLeft;return Object(p.a)("padding-left",f,r)},function(e){var r=e.theme,f=e.marginLeft;return Object(p.a)("margin-left",f,r)},function(e){var r=e.theme,f=e.marginRight;return Object(p.a)("margin-right",f,r)},function(e){var r=e.theme,f=e.marginTop;return Object(p.a)("margin-top",f,r)},function(e){var r=e.theme,f=e.marginBottom;return Object(p.a)("margin-bottom",f,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,f=e.hasRadius,S=e.borderRadius;return f?r.borderRadius:S},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,f=e.borderColor,S=e.borderStyle,I=e.borderWidth;if(f&&!S&&!I)return"1px solid ".concat(r.colors[f])},function(e){var r=e.theme,f=e.shadow;return r.shadows[f]},function(e){return e.pointerEvents},function(e){var r=e._hover,f=e.theme;return r?r(f):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});m.displayName="Box",m.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m.propTypes={_hover:o.a.func,background:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.string]),borderColor:o.a.string,children:o.a.oneOfType([o.a.node,o.a.string]),color:o.a.string,flex:o.a.oneOfType([o.a.string,o.a.string]),grow:o.a.oneOfType([o.a.string,o.a.string]),hasRadius:o.a.bool,hiddenS:o.a.bool,hiddenXS:o.a.bool,padding:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingBottom:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingLeft:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingRight:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingTop:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),shadow:o.a.string,shrink:o.a.oneOfType([o.a.string,o.a.string])}},7:function(n,l,t){"use strict";var i=t(10),a=t.n(i),s=t(13),c=t.n(s);l.a=function(o,y,E){var p=y;if(Array.isArray(y)||c()(y)!=="object"||(p=[y==null?void 0:y.desktop,y==null?void 0:y.tablet,y==null?void 0:y.mobile]),p!==void 0){if(Array.isArray(p)){var v=p,m=a()(v,3),e=m[0],r=m[1],f=m[2],S="".concat(o,": ").concat(E.spaces[e],";");return r!==void 0&&(S+="".concat(E.mediaQueries.tablet,`{
          `).concat(o,": ").concat(E.spaces[r],`;
        }`)),f!==void 0&&(S+="".concat(E.mediaQueries.mobile,`{
          `).concat(o,": ").concat(E.spaces[f],`;
        }`)),S}var I=E.spaces[p]||p;return"".concat(o,": ").concat(I,";")}}},8:function(n,l,t){"use strict";t.r(l),t.d(l,"Typography",function(){return v});var i,a=t(3),s=t.n(a),c=t(0),o=t.n(c),y=t(2),E=["alpha","beta","delta","epsilon","omega","pi","sigma"],p={fontSize:!0,fontWeight:!0},v=t.n(y).a.span.withConfig({shouldForwardProp:function(m,e){return!p[m]&&e(m)}})(i||(i=s()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(m){var e=m.theme,r=m.fontWeight;return e.fontWeights[r]},function(m){var e=m.theme,r=m.fontSize;return e.fontSizes[r]},function(m){var e=m.theme,r=m.lineHeight;return e.lineHeights[r]},function(m){var e=m.theme,r=m.textColor;return e.colors[r||"neutral800"]},function(m){return m.textTransform},function(m){return m.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(m){var e=m.variant,r=m.theme;switch(e){case"alpha":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[5],`;
        line-height: `).concat(r.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[4],`;
        line-height: `).concat(r.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(r.fontWeights.semiBold,`;
        font-size: `).concat(r.fontSizes[3],`;
        line-height: `).concat(r.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(r.fontSizes[3],`;
        line-height: `).concat(r.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(r.fontSizes[2],`;
        line-height: `).concat(r.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(r.fontSizes[1],`;
        line-height: `).concat(r.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(r.fontWeights.bold,`;
        font-size: `).concat(r.fontSizes[0],`;
        line-height: `).concat(r.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(r.fontSizes[2],`;
      `)}});v.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},v.propTypes={fontSize:o.a.oneOfType([o.a.number,o.a.string]),fontWeight:o.a.string,lineHeight:o.a.oneOfType([o.a.number,o.a.string]),textColor:o.a.string,textTransform:o.a.string,variant:o.a.oneOf(E)}},9:function(n,l,t){"use strict";t.r(l),t.d(l,"Flex",function(){return e});var i,a=t(3),s=t.n(a),c=t(0),o=t.n(c),y=t(2),E=t.n(y),p=t(6),v=t(7),m={direction:!0},e=E()(p.Box).withConfig({shouldForwardProp:function(r,f){return!m[r]&&f(r)}})(i||(i=s()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(r){return r.alignItems},function(r){return r.inline?"inline-flex":"flex"},function(r){return r.direction},function(r){return r.wrap},function(r){var f=r.gap,S=r.theme;return Object(v.a)("gap",f,S)},function(r){return r.justifyContent});e.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},e.propTypes={alignItems:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.number]),direction:o.a.string,gap:o.a.oneOfType([o.a.shape({desktop:o.a.number,mobile:o.a.number,tablet:o.a.number}),o.a.number,o.a.arrayOf(o.a.number),o.a.string]),inline:o.a.bool,justifyContent:o.a.string,reverse:o.a.bool,wrap:o.a.string}}})})},79274:function(L,R,d){(function(u,x){L.exports=x(d(53547))})(this,function(u){return function(x){var P={};function n(l){if(P[l])return P[l].exports;var t=P[l]={i:l,l:!1,exports:{}};return x[l].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=x,n.c=P,n.d=function(l,t,i){n.o(l,t)||Object.defineProperty(l,t,{enumerable:!0,get:i})},n.r=function(l){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},n.t=function(l,t){if(1&t&&(l=n(l)),8&t||4&t&&typeof l=="object"&&l&&l.__esModule)return l;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:l}),2&t&&typeof l!="string")for(var a in l)n.d(i,a,function(s){return l[s]}.bind(null,a));return i},n.n=function(l){var t=l&&l.__esModule?function(){return l.default}:function(){return l};return n.d(t,"a",t),t},n.o=function(l,t){return Object.prototype.hasOwnProperty.call(l,t)},n.p="",n(n.s=154)}({0:function(x,P){x.exports=u},154:function(x,P,n){"use strict";n.r(P);var l=n(0);function t(){return(t=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(i[c]=s[c])}return i}).apply(this,arguments)}P.default=function(i){return l.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},84210:(L,R,d)=>{"use strict";d.r(R),d.d(R,{default:()=>Te});var u=d(53547),x=d(23724),P=d(97132),n=d(68547),l=d(67422),t=d(80117),i=d(35395),a=d(51725),s=d(42722),c=(h,b,g)=>new Promise((M,O)=>{var j=T=>{try{C(g.next(T))}catch(B){O(B)}},w=T=>{try{C(g.throw(T))}catch(B){O(B)}},C=T=>T.done?M(T.value):Promise.resolve(T.value).then(j,w);C((g=g.apply(h,b)).next())});const o=()=>c(void 0,null,function*(){const{data:h}=yield s.be.get((0,s.Gc)("email-templates"));return h}),y=h=>s.be.put((0,s.Gc)("email-templates"),h);var E=d(45697),p=d.n(E),v=d(43546),m=d(19631),e=d(33483),r=d(49549),f=d(33699),S=d(56204),I=d.n(S),$=d(79274),J=d.n($),q=d(22754),_=d.n(q),F=Object.defineProperty,G=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,U=(h,b,g)=>b in h?F(h,b,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[b]=g,W=(h,b)=>{for(var g in b||(b={}))N.call(b,g)&&U(h,g,b[g]);if(G)for(var g of G(b))z.call(b,g)&&U(h,g,b[g]);return h};const Q=({canUpdate:h,onEditClick:b})=>{const{formatMessage:g}=(0,P.useIntl)();return u.createElement(v.Table,{colCount:3,rowCount:3},u.createElement(v.Thead,null,u.createElement(v.Tr,null,u.createElement(v.Th,{width:"1%"},u.createElement(m.VisuallyHidden,null,g({id:(0,s.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),u.createElement(v.Th,null,u.createElement(e.Typography,{variant:"sigma",textColor:"neutral600"},g({id:(0,s.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),u.createElement(v.Th,{width:"1%"},u.createElement(m.VisuallyHidden,null,g({id:(0,s.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),u.createElement(v.Tbody,null,u.createElement(v.Tr,W({},(0,n.onRowClick)({fn:()=>b("reset_password")})),u.createElement(v.Td,null,u.createElement(f.Icon,null,u.createElement(J(),{"aria-label":g({id:"global.reset-password",defaultMessage:"Reset password"})}))),u.createElement(v.Td,null,u.createElement(e.Typography,null,g({id:"global.reset-password",defaultMessage:"Reset password"}))),u.createElement(v.Td,W({},n.stopPropagation),u.createElement(r.IconButton,{onClick:()=>b("reset_password"),label:g({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:h&&u.createElement(I(),null)}))),u.createElement(v.Tr,W({},(0,n.onRowClick)({fn:()=>b("email_confirmation")})),u.createElement(v.Td,null,u.createElement(f.Icon,null,u.createElement(_(),{"aria-label":g({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),u.createElement(v.Td,null,u.createElement(e.Typography,null,g({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),u.createElement(v.Td,W({},n.stopPropagation),u.createElement(r.IconButton,{onClick:()=>b("email_confirmation"),label:g({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:h&&u.createElement(I(),null)})))))};Q.propTypes={canUpdate:p().bool.isRequired,onEditClick:p().func.isRequired};const le=Q;var ue=d(80831),Z=d(68991),D=d(39272),ne=d(64459),ee=d(44981),ce=d(78607),A=d(63600);const de=A.object().shape({options:A.object().shape({from:A.object().shape({name:A.string().required(n.translatedErrors.required),email:A.string().email(n.translatedErrors.email).required(n.translatedErrors.required)}).required(),response_email:A.string().email(n.translatedErrors.email),object:A.string().required(n.translatedErrors.required),message:A.string().required(n.translatedErrors.required)}).required(n.translatedErrors.required)}),re=({template:h,onToggle:b,onSubmit:g})=>{const{formatMessage:M}=(0,P.useIntl)();return u.createElement(Z.ModalLayout,{onClose:b,labelledBy:`${M({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,s.OB)(h.display),defaultMessage:h.display})}`},u.createElement(Z.ModalHeader,null,u.createElement(ee.Breadcrumbs,{label:`${M({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,s.OB)(h.display),defaultMessage:h.display})}`},u.createElement(ee.Crumb,null,M({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),u.createElement(ee.Crumb,null,M({id:(0,s.OB)(h.display),defaultMessage:h.display})))),u.createElement(ue.Formik,{onSubmit:g,initialValues:h,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:O,values:j,handleChange:w,isSubmitting:C})=>{var T,B,V,k,K,X,Y;return u.createElement(n.Form,null,u.createElement(Z.ModalBody,null,u.createElement(D.Grid,{gap:5},u.createElement(D.GridItem,{col:6,s:12},u.createElement(n.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:w,value:j.options.from.name,error:(B=(T=O==null?void 0:O.options)==null?void 0:T.from)==null?void 0:B.name,type:"text"})),u.createElement(D.GridItem,{col:6,s:12},u.createElement(n.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:w,value:j.options.from.email,error:(k=(V=O==null?void 0:O.options)==null?void 0:V.from)==null?void 0:k.email,type:"text"})),u.createElement(D.GridItem,{col:6,s:12},u.createElement(n.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:w,value:j.options.response_email,error:(K=O==null?void 0:O.options)==null?void 0:K.response_email,type:"text"})),u.createElement(D.GridItem,{col:6,s:12},u.createElement(n.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:w,value:j.options.object,error:(X=O==null?void 0:O.options)==null?void 0:X.object,type:"text"})),u.createElement(D.GridItem,{col:12,s:12},u.createElement(ce.Textarea,{label:M({id:(0,s.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:w,value:j.options.message,error:((Y=O==null?void 0:O.options)==null?void 0:Y.message)&&M({id:O.options.message,defaultMessage:O.options.message})})))),u.createElement(Z.ModalFooter,{startActions:u.createElement(ne.Button,{onClick:b,variant:"tertiary"},"Cancel"),endActions:u.createElement(ne.Button,{loading:C,type:"submit"},"Finish")}))}))};re.propTypes={template:p().shape({display:p().string,icon:p().string,options:p().shape({from:p().shape({name:p().string,email:p().string}),message:p().string,object:p().string,response_email:p().string})}).isRequired,onSubmit:p().func.isRequired,onToggle:p().func.isRequired};const pe=re;var me=Object.defineProperty,fe=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(h,b,g)=>b in h?me(h,b,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[b]=g,ye=(h,b)=>{for(var g in b||(b={}))he.call(b,g)&&ae(h,g,b[g]);if(oe)for(var g of oe(b))ve.call(b,g)&&ae(h,g,b[g]);return h},be=(h,b)=>fe(h,ge(b)),Ee=(h,b,g)=>new Promise((M,O)=>{var j=T=>{try{C(g.next(T))}catch(B){O(B)}},w=T=>{try{C(g.throw(T))}catch(B){O(B)}},C=T=>T.done?M(T.value):Promise.resolve(T.value).then(j,w);C((g=g.apply(h,b)).next())});const xe=()=>u.createElement(n.CheckPagePermissions,{permissions:a.Z.readEmailTemplates},u.createElement(Oe,null)),Oe=()=>{const{formatMessage:h}=(0,P.useIntl)(),{trackUsage:b}=(0,n.useTracking)(),{notifyStatus:g}=(0,l.useNotifyAT)(),M=(0,n.useNotification)(),{lockApp:O,unlockApp:j}=(0,n.useOverlayBlocker)(),w=(0,u.useRef)(b),C=(0,x.useQueryClient)();(0,n.useFocusWhenNavigate)();const[T,B]=(0,u.useState)(!1),[V,k]=(0,u.useState)(null),K=(0,u.useMemo)(()=>({update:a.Z.updateEmailTemplates}),[]),{isLoading:X,allowedActions:{canUpdate:Y}}=(0,n.useRBAC)(K),{status:Pe,data:ie}=(0,x.useQuery)("email-templates",()=>o(),{onSuccess:()=>{g(h({id:(0,s.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Me=X||Pe!=="success",te=()=>{B(H=>!H)},Se=H=>{k(H),te()},se=(0,x.useMutation)(H=>y({"email-templates":H}),{onSuccess:()=>Ee(void 0,null,function*(){yield C.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),w.current("didEditEmailTemplates"),j(),te()}),onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),j()},refetchActive:!0}),{isLoading:je}=se,we=H=>{O(),w.current("willEditEmailTemplates");const Be=be(ye({},ie),{[V]:H});se.mutate(Be)};return Me?u.createElement(t.Main,{"aria-busy":"true"},u.createElement(n.SettingsPageTitle,{name:h({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),u.createElement(i.HeaderLayout,{title:h({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),u.createElement(i.ContentLayout,null,u.createElement(n.LoadingIndicatorPage,null))):u.createElement(t.Main,{"aria-busy":je},u.createElement(n.SettingsPageTitle,{name:h({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),u.createElement(i.HeaderLayout,{title:h({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),u.createElement(i.ContentLayout,null,u.createElement(le,{onEditClick:Se,canUpdate:Y}),T&&u.createElement(pe,{template:ie[V],onToggle:te,onSubmit:we})))},Te=xe},65772:(L,R,d)=>{"use strict";d.d(R,{Z:()=>i});var u=d(9669),x=d.n(u),P=d(68547),n=d.n(P),l=(a,s,c)=>new Promise((o,y)=>{var E=m=>{try{v(c.next(m))}catch(e){y(e)}},p=m=>{try{v(c.throw(m))}catch(e){y(e)}},v=m=>m.done?o(m.value):Promise.resolve(m.value).then(E,p);v((c=c.apply(a,s)).next())});const t=x().create({baseURL:""});t.interceptors.request.use(a=>l(void 0,null,function*(){return a.headers={Authorization:`Bearer ${P.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},a}),a=>{Promise.reject(a)}),t.interceptors.response.use(a=>a,a=>{var s;throw((s=a.response)==null?void 0:s.status)===401&&(P.auth.clearAppStorage(),window.location.reload()),a});const i=t},42722:(L,R,d)=>{"use strict";d.d(R,{be:()=>u.Z,YX:()=>n,Gc:()=>i,OB:()=>a.Z});var u=d(65772),x=d(96486);const n=s=>Object.keys(s).reduce((c,o)=>{const y=s[o].controllers,E=Object.keys(y).reduce((p,v)=>((0,x.isEmpty)(y[v])||(p[v]=y[v]),p),{});return(0,x.isEmpty)(E)||(c[o]={controllers:E}),c},{});var l=d(83086);const i=s=>`/${l.Z}/${s}`;var a=d(97961)}}]);
