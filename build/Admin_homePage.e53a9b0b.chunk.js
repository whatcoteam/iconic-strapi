"use strict";(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[3981],{87512:(L,T,n)=>{n.r(T),n.d(T,{default:()=>We});var e=n(53547),f=n(97132),c=n(78384),O=n(15482),F=n(49656),i=n(68547),W=n(35395),V=n(80117),d=n(94117),g=n(39272),$=n(42462),A=n(32104);const z=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var v=n(9524),E=n(40264),h=n(33483),H=n(31512),P=n(64459),K=n(64290),b=n.n(K),Z=n(45697),r=n.n(Z),N=n(71289),J=n(66952),m=n(16289);const B=({type:t,title:a,number:o,content:l,hasLine:p})=>{const{formatMessage:y}=(0,f.useIntl)();return e.createElement(d.Box,null,e.createElement(E.Flex,null,e.createElement(d.Box,{minWidth:(0,i.pxToRem)(30),marginRight:5},e.createElement(N.Z,{type:t,number:o})),e.createElement(h.Typography,{variant:"delta",as:"h3"},y(a))),e.createElement(E.Flex,{alignItems:"flex-start"},e.createElement(E.Flex,{justifyContent:"center",minWidth:(0,i.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},p&&e.createElement(J.Z,{type:t,minHeight:t===m.lW?(0,i.pxToRem)(85):(0,i.pxToRem)(65)})),e.createElement(d.Box,{marginTop:2},t===m.lW&&l)))};B.defaultProps={content:void 0,number:void 0,type:m.VM,hasLine:!0},B.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([m.lW,m.hx,m.VM]),hasLine:r().bool};const U=B,Y=(t,a)=>t===-1||a<t?m.hx:a>t?m.VM:m.lW,k=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(l=>l.key===a);return e.createElement(d.Box,null,t.map((l,p)=>e.createElement(U,{key:l.key,title:l.title,content:l.content,number:p+1,type:Y(o,p),hasLine:p!==t.length-1})))};k.defaultProps={currentSectionKey:void 0},k.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const Q=k;var X=n(76910),w=Object.defineProperty,G=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,R=(t,a,o)=>a in t?w(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,ee=(t,a)=>{for(var o in a||(a={}))q.call(a,o)&&R(t,o,a[o]);if(G)for(var o of G(a))_.call(a,o)&&R(t,o,a[o]);return t};const te=()=>{var t;const{guidedTourState:a,setSkipped:o}=(0,i.useGuidedTour)(),{formatMessage:l}=(0,f.useIntl)(),{trackUsage:p}=(0,i.useTracking)(),y=Object.entries(X.Z).map(([u,s])=>({key:u,title:s.home.title,content:e.createElement(H.LinkButton,{onClick:()=>p(s.home.trackingEvent),to:s.home.cta.target,endIcon:e.createElement(b(),null)},l(s.home.cta.title))})),x=(t=y.map(u=>ee({isDone:Object.entries(a[u.key]).every(([,s])=>s)},u)).find(u=>!u.isDone))==null?void 0:t.key,M=()=>{o(!0),p("didSkipGuidedtour")};return e.createElement(d.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(v.Stack,{spacing:6},e.createElement(h.Typography,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(Q,{sections:y,currentSectionKey:x})),e.createElement(E.Flex,{justifyContent:"flex-end"},e.createElement(P.Button,{variant:"tertiary",onClick:M},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var I=n(56156),ne=n(74657),ae=n.n(ne),oe=n(42365),re=n.n(oe),le=n(94869),se=n.n(le),ie=n(70450),ce=n.n(ie),de=n(25634),me=n.n(de),pe=n(3849),ue=n.n(pe),ge=n(90431),fe=n.n(ge);const he=(0,c.default)(se())`
  path {
    fill: #7289da !important;
  }
`,ye=(0,c.default)(ce())`
  > path:first-child {
    fill: #ff4500;
  }
`,D=(0,c.default)(me())`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`,ve=(0,c.default)(ue())`
  path {
    fill: #1da1f2 !important;
  }
`,Ee=(0,c.default)(fe())`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:e.createElement(re(),{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:e.createElement(he,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:e.createElement(ve,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:e.createElement(Ee,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(D,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(D,null),alt:"career"}],Te=(0,c.default)(H.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Be=(0,c.default)(g.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,ke=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(d.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(d.Box,{paddingBottom:7},e.createElement(v.Stack,{spacing:5},e.createElement(v.Stack,{spacing:3},e.createElement(h.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(h.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(I.Link,{href:"https://feedback.strapi.io/",endIcon:e.createElement(ae(),null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Be,null,Se.map(a=>e.createElement(g.GridItem,{col:6,s:12,key:a.name},e.createElement(Te,{size:"L",startIcon:a.icon,variant:"tertiary",href:a.link},a.name)))))},Ce=(0,c.default)(h.Typography)`
  word-break: break-word;
`,xe=(0,c.default)(v.Stack)`
  align-items: flex-start;
`,C=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,f.useIntl)();return e.createElement("div",null,e.createElement(d.Box,{paddingLeft:6,paddingBottom:10},e.createElement(xe,{spacing:5},e.createElement(h.Typography,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Ce,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(I.Link,{href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(P.Button,{size:"L",onClick:a,endIcon:e.createElement(b(),null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};C.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},C.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const Me=C;var Le=n(97557),He=n.n(Le),Pe=n(64214),be=n.n(Pe),Ge=n(91021),Re=n.n(Ge),Ie=n(46884),De=n.n(Ie);const S=c.default.a`
  text-decoration: none;
`,je=()=>{const{formatMessage:t}=(0,f.useIntl)();return e.createElement(v.Stack,{spacing:5},e.createElement(S,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(He(),null),iconBackground:"primary100"})),e.createElement(S,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(be(),null),iconBackground:"warning100"})),e.createElement(S,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(Re(),null),iconBackground:"secondary100"})),e.createElement(S,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow"},e.createElement(i.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(De(),null),iconBackground:"alternative100"})))},Oe=(0,c.default)(d.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,Fe=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,A.bP)(),{guidedTourState:l,isGuidedTourVisible:p,isSkipped:y}=(0,i.useGuidedTour)(),j=!z(l)&&p&&!y,{push:x}=(0,F.useHistory)(),M=s=>{s.preventDefault(),x("/plugins/content-type-builder/content-types/create-content-type")},u=(0,e.useMemo)(()=>{const s=Ve=>Ve.filter($e=>$e.isDisplayed);return s(t).length>1||s(a).length>0},[t,a]);return o?e.createElement(i.LoadingIndicatorPage,null):e.createElement(W.Layout,null,e.createElement(f.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},s=>e.createElement(O.Helmet,{title:s[0]})),e.createElement(V.Main,null,e.createElement(Oe,null,e.createElement("img",{alt:"","aria-hidden":!0,src:$})),e.createElement(d.Box,{padding:10},e.createElement(g.Grid,null,e.createElement(g.GridItem,{col:8,s:12},e.createElement(Me,{onCreateCT:M,hasCreatedContentType:u}))),e.createElement(g.Grid,{gap:6},e.createElement(g.GridItem,{col:8,s:12},j?e.createElement(te,null):e.createElement(je,null)),e.createElement(g.GridItem,{col:4,s:12},e.createElement(ke,null))))))},We=(0,e.memo)(Fe)},42462:(L,T,n)=>{L.exports=n.p+"2a9e9ef5c4c775bb7c7b.png"}}]);
