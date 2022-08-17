"use strict";(self.webpackChunkiconic_taste_backend=self.webpackChunkiconic_taste_backend||[]).push([[3552],{31701:(Ye,R,i)=>{i.r(R),i.d(R,{default:()=>Ke});var e=i(67294),g=i(68547),ne=i(45697),v=i.n(ne),h=i(97132),T=i(19408),oe=i(62031),O=i(78862),se=i(80768),G=i.n(se),ie=i(85407),ce=i.n(ie),V=i(47235),r=i(68798),S=i(80831),de=i(84734),j=i.n(de),L=i(75146),f=i(11402),H=i(67826),U=i(5493),z=i(14276),E=i(49425),D=i(53209);const W=(0,D.object)().shape({code:(0,D.string)().required(),displayName:(0,D.string)().max(50,"Settings.locales.modal.locales.displayName.error").required(g.translatedErrors.required)});var P=i(37424),B=i(70437),Z=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const re=(a,l,t)=>Z(void 0,null,function*(){try{const n=yield(0,g.request)(`/i18n/locales/${a}`,{method:"PUT",body:l});return t({type:"success",message:{id:(0,r.O)("Settings.locales.modal.edit.success")}}),n}catch(n){return t({type:"warning",message:{id:"notification.error"}}),null}}),ue=()=>{const[a,l]=(0,e.useState)(!1),t=(0,P.I0)(),n=(0,g.useNotification)();return{isEditing:a,editLocale:(c,u)=>Z(void 0,null,function*(){l(!0);const d=yield re(c,u,n);t({type:B.OT,editedLocale:d}),l(!1)})}};var M=i(34626),$=i(55967),Q=i(43808);const J=({locale:a})=>{const{formatMessage:l}=(0,h.useIntl)(),{values:t,handleChange:n,errors:s}=(0,S.useFormikContext)();return e.createElement(M.Grid,{gap:4},e.createElement(M.GridItem,{col:6},e.createElement(Q.Select,{label:l({id:(0,r.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:a.code,disabled:!0},e.createElement(Q.Option,{value:a.code},a.name))),e.createElement(M.GridItem,{col:6},e.createElement($.TextInput,{name:"displayName",label:l({id:(0,r.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,r.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:s.displayName?l({id:(0,r.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:t.displayName,onChange:n})))},me=J;J.propTypes={locale:v().shape({id:v().number.isRequired,name:v().string.isRequired,code:v().string.isRequired,isDefault:v().bool.isRequired}).isRequired};var K=i(81325);const X=({isDefaultLocale:a})=>{const{values:l,setFieldValue:t}=(0,S.useFormikContext)(),{formatMessage:n}=(0,h.useIntl)();return e.createElement(K.Checkbox,{name:"isDefault",hint:n({id:(0,r.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>t("isDefault",!l.isDefault),value:l.isDefault,disabled:a},n({id:(0,r.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};X.propTypes={isDefaultLocale:v().bool.isRequired};const ve=X;var ge=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const F=({locale:a,onClose:l})=>{const{refetchPermissions:t}=(0,g.useRBACProvider)(),{isEditing:n,editLocale:s}=ue(),{formatMessage:c}=(0,h.useIntl)(),u=d=>ge(void 0,[d],function*({displayName:o,isDefault:m}){yield s(a.id,{name:o,isDefault:m}),yield t()});return e.createElement(L.ModalLayout,{onClose:l,labelledBy:"edit-locale-title"},e.createElement(S.Formik,{initialValues:{code:a==null?void 0:a.code,displayName:(a==null?void 0:a.name)||"",isDefault:Boolean(a==null?void 0:a.isDefault)},onSubmit:u,validationSchema:W},e.createElement(g.Form,null,e.createElement(L.ModalHeader,null,e.createElement(E.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},c({id:(0,r.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(L.ModalBody,null,e.createElement(f.TabGroup,{label:c({id:(0,r.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(H.Flex,{justifyContent:"space-between"},e.createElement(E.Typography,{as:"h2"},c({id:(0,r.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(f.Tabs,null,e.createElement(f.Tab,null,c({id:(0,r.O)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),e.createElement(f.Tab,null,c({id:(0,r.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(z.Divider,null),e.createElement(U.Box,{paddingTop:7,paddingBottom:7},e.createElement(f.TabPanels,null,e.createElement(f.TabPanel,null,e.createElement(me,{locale:a})),e.createElement(f.TabPanel,null,e.createElement(ve,{isDefaultLocale:Boolean(a&&a.isDefault)})))))),e.createElement(L.ModalFooter,{startActions:e.createElement(T.Button,{variant:"tertiary",onClick:l},c({id:"app.components.Button.cancel"})),endActions:e.createElement(T.Button,{type:"submit",startIcon:e.createElement(j(),null),disabled:n},c({id:"global.save"}))}))))};F.defaultProps={locale:void 0},F.propTypes={locale:v().shape({id:v().number.isRequired,name:v().string.isRequired,code:v().string.isRequired,isDefault:v().bool.isRequired}),onClose:v().func.isRequired};const fe=F;var Y=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const ye=(a,l)=>Y(void 0,null,function*(){try{const t=yield(0,g.request)(`/i18n/locales/${a}`,{method:"DELETE"});return l({type:"success",message:{id:(0,r.O)("Settings.locales.modal.delete.success")}}),t}catch(t){return l({type:"warning",message:{id:"notification.error"}}),t}}),pe=()=>{const[a,l]=(0,e.useState)(!1),t=(0,P.I0)(),n=(0,g.useNotification)();return{isDeleting:a,deleteLocale:c=>Y(void 0,null,function*(){l(!0),yield ye(c,n),t({type:B.HC,id:c}),l(!1)})}},x=({localeToDelete:a,onClose:l})=>{const{isDeleting:t,deleteLocale:n}=pe(),s=Boolean(a),c=()=>n(a.id).then(l);return e.createElement(g.ConfirmDialog,{isConfirmButtonLoading:t,onConfirm:c,onToggleDialog:l,isOpen:s})};x.defaultProps={localeToDelete:void 0},x.propTypes={localeToDelete:v().shape({id:v().number.isRequired}),onClose:v().func.isRequired};const he=x;var Ee=i(27361),Le=i.n(Ee),w=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const Ce=(a,l)=>w(void 0,[a,l],function*({code:t,name:n,isDefault:s},c){const u=yield(0,g.request)("/i18n/locales",{method:"POST",body:{name:n,code:t,isDefault:s}});return c({type:"success",message:{id:(0,r.O)("Settings.locales.modal.create.success")}}),u}),Te=()=>{const[a,l]=(0,e.useState)(!1),t=(0,P.I0)(),n=(0,g.useNotification)();return{isAdding:a,addLocale:c=>w(void 0,null,function*(){l(!0);try{const u=yield Ce(c,n);t({type:B.xz,newLocale:u})}catch(u){const d=Le()(u,"response.payload.message",null);throw d&&d.includes("already exists")?n({type:"warning",message:{id:(0,r.O)("Settings.locales.modal.create.alreadyExist")}}):n({type:"warning",message:{id:"notification.error"}}),u}finally{l(!1)}})}};var k=i(54675),Se=i(23724),Me=i(84686),be=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const Oe=a=>be(void 0,null,function*(){try{return yield(0,g.request)("/i18n/iso-locales",{method:"GET"})}catch(l){return a({type:"warning",message:{id:"notification.error"}}),[]}}),De=()=>{const{formatMessage:a}=(0,h.useIntl)(),{notifyStatus:l}=(0,Me.useNotifyAT)(),t=(0,g.useNotification)(),{isLoading:n,data:s}=(0,Se.useQuery)("default-locales",()=>Oe(t).then(c=>(l(a({id:(0,r.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),c)));return{defaultLocales:s,isLoading:n}},A=e.memo(({value:a,onClear:l,onLocaleChange:t,error:n})=>{const{formatMessage:s}=(0,h.useIntl)(),{defaultLocales:c,isLoading:u}=De(),{locales:d}=(0,V.Z)(),o=(c||[]).map(p=>({label:p.name,value:p.code})).filter(({value:p})=>{const C=d.find(({code:b})=>b===p);return!C||C.code===a}),m=a||"";return e.createElement(k.Combobox,{"aria-busy":u,error:n,label:s({id:(0,r.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:m,onClear:a?l:void 0,onChange:p=>{const C=o.find(b=>b.value===p);C&&t({code:C.value,displayName:C.label})},placeholder:s({id:"components.placeholder.select",defaultMessage:"Select"})},o.map(p=>e.createElement(k.ComboboxOption,{value:p.value,key:p.value},p.label)))});A.defaultProps={error:void 0,value:void 0,onClear:()=>{},onLocaleChange:()=>{}},A.propTypes={error:v().string,onClear:v().func,onLocaleChange:v().func,value:v().string};const Pe=A,Be=()=>{const{formatMessage:a}=(0,h.useIntl)(),{values:l,handleChange:t,setFieldValue:n,errors:s}=(0,S.useFormikContext)(),c=(0,e.useCallback)(d=>{n("displayName",d.displayName),n("code",d.code)},[n]),u=(0,e.useCallback)(()=>{n("displayName",""),n("code","")},[n]);return e.createElement(M.Grid,{gap:4},e.createElement(M.GridItem,{col:6},e.createElement(Pe,{error:s.code,value:l.code,onLocaleChange:c,onClear:u})),e.createElement(M.GridItem,{col:6},e.createElement($.TextInput,{name:"displayName",label:a({id:(0,r.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:a({id:(0,r.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:s.displayName?a({id:(0,r.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:l.displayName,onChange:t})))},Fe=()=>{const{values:a,setFieldValue:l}=(0,S.useFormikContext)(),{formatMessage:t}=(0,h.useIntl)();return e.createElement(K.Checkbox,{hint:t({id:(0,r.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>l("isDefault",!a.isDefault),value:a.isDefault},t({id:(0,r.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var xe=(a,l,t)=>new Promise((n,s)=>{var c=o=>{try{d(t.next(o))}catch(m){s(m)}},u=o=>{try{d(t.throw(o))}catch(m){s(m)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,u);d((t=t.apply(a,l)).next())});const Ae={code:"",displayName:"",isDefault:!1},q=({onClose:a})=>{const{isAdding:l,addLocale:t}=Te(),{formatMessage:n}=(0,h.useIntl)(),{refetchPermissions:s}=(0,g.useRBACProvider)(),c=u=>xe(void 0,null,function*(){yield t({code:u.code,name:u.displayName,isDefault:u.isDefault}),yield s()});return e.createElement(L.ModalLayout,{onClose:a,labelledBy:"add-locale-title"},e.createElement(S.Formik,{initialValues:Ae,onSubmit:c,validationSchema:W,validateOnChange:!1},e.createElement(g.Form,null,e.createElement(L.ModalHeader,null,e.createElement(E.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},n({id:(0,r.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(L.ModalBody,null,e.createElement(f.TabGroup,{label:n({id:(0,r.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(H.Flex,{justifyContent:"space-between"},e.createElement(E.Typography,{as:"h2",variant:"beta"},n({id:(0,r.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(f.Tabs,null,e.createElement(f.Tab,null,n({id:(0,r.O)("Settings.locales.modal.base"),defaultMessage:"Base settings"})),e.createElement(f.Tab,null,n({id:(0,r.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(z.Divider,null),e.createElement(U.Box,{paddingTop:7,paddingBottom:7},e.createElement(f.TabPanels,null,e.createElement(f.TabPanel,null,e.createElement(Be,null)),e.createElement(f.TabPanel,null,e.createElement(Fe,null)))))),e.createElement(L.ModalFooter,{startActions:e.createElement(T.Button,{variant:"tertiary",onClick:a},n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(T.Button,{type:"submit",startIcon:e.createElement(j(),null),disabled:l},n({id:"global.save",defaultMessage:"Save"}))}))))};q.propTypes={onClose:v().func.isRequired};const Ie=q;var _=i(30741),Ne=i(9008),Re=i(26851),y=i(41798),Ge=i(19352),Ve=i.n(Ge),je=i(18568),He=i.n(je),Ue=Object.defineProperty,ee=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,te=(a,l,t)=>l in a?Ue(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,ae=(a,l)=>{for(var t in l||(l={}))ze.call(l,t)&&te(a,t,l[t]);if(ee)for(var t of ee(l))We.call(l,t)&&te(a,t,l[t]);return a};const I=({locales:a,onDeleteLocale:l,onEditLocale:t})=>{const{formatMessage:n}=(0,h.useIntl)();return e.createElement(y.Table,{colCount:4,rowCount:a.length+1},e.createElement(y.Thead,null,e.createElement(y.Tr,null,e.createElement(y.Th,null,e.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},n({id:(0,r.O)("Settings.locales.row.id")}))),e.createElement(y.Th,null,e.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},n({id:(0,r.O)("Settings.locales.row.displayName")}))),e.createElement(y.Th,null,e.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},n({id:(0,r.O)("Settings.locales.row.default-locale")}))),e.createElement(y.Th,null,e.createElement(Re.VisuallyHidden,null,"Actions")))),e.createElement(y.Tbody,null,a.map(s=>e.createElement(y.Tr,ae({key:s.id},(0,g.onRowClick)({fn:()=>t(s),condition:t})),e.createElement(y.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},s.id)),e.createElement(y.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},s.name)),e.createElement(y.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},s.isDefault?n({id:(0,r.O)("Settings.locales.default")}):null)),e.createElement(y.Td,null,e.createElement(Ne.Stack,ae({horizontal:!0,spacing:1,style:{justifyContent:"flex-end"}},g.stopPropagation),t&&e.createElement(_.IconButton,{onClick:()=>t(s),label:n({id:(0,r.O)("Settings.list.actions.edit")}),icon:e.createElement(Ve(),null),noBorder:!0}),l&&!s.isDefault&&e.createElement(_.IconButton,{onClick:()=>l(s),label:n({id:(0,r.O)("Settings.list.actions.delete")}),icon:e.createElement(He(),null),noBorder:!0})))))))};I.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},I.propTypes={locales:v().array,onDeleteLocale:v().func,onEditLocale:v().func};const Ze=I,N=({canUpdateLocale:a,canDeleteLocale:l,onToggleCreateModal:t,isCreating:n})=>{const[s,c]=(0,e.useState)(),[u,d]=(0,e.useState)(),{locales:o}=(0,V.Z)(),{formatMessage:m}=(0,h.useIntl)();(0,g.useFocusWhenNavigate)();const p=()=>c(void 0),C=l?c:void 0,b=()=>d(void 0),Xe=a?d:void 0;return e.createElement(oe.Main,{tabIndex:-1},e.createElement(O.HeaderLayout,{primaryAction:e.createElement(T.Button,{startIcon:e.createElement(G(),null),onClick:t,size:"L"},m({id:(0,r.O)("Settings.list.actions.add")})),title:m({id:(0,r.O)("plugin.name")}),subtitle:m({id:(0,r.O)("Settings.list.description")})}),e.createElement(O.ContentLayout,null,(o==null?void 0:o.length)>0?e.createElement(Ze,{locales:o,onDeleteLocale:C,onEditLocale:Xe}):e.createElement(O.EmptyStateLayout,{icon:e.createElement(ce(),{width:void 0,height:void 0}),content:m({id:(0,r.O)("Settings.list.empty.title")}),action:t?e.createElement(T.Button,{variant:"secondary",startIcon:e.createElement(G(),null),onClick:t},m({id:(0,r.O)("Settings.list.actions.add")})):null})),n&&e.createElement(Ie,{onClose:t}),u&&e.createElement(fe,{onClose:b,locale:u}),e.createElement(he,{localeToDelete:s,onClose:p}))};N.defaultProps={onToggleCreateModal:void 0},N.propTypes={canUpdateLocale:v().bool.isRequired,canDeleteLocale:v().bool.isRequired,onToggleCreateModal:v().func,isCreating:v().bool.isRequired};const $e=N,le=({canReadLocale:a,canCreateLocale:l,canDeleteLocale:t,canUpdateLocale:n})=>{const[s,c]=(0,e.useState)(!1),u=l?()=>c(d=>!d):void 0;return a?e.createElement($e,{canUpdateLocale:n,canDeleteLocale:t,onToggleCreateModal:u,isCreating:s}):null};le.propTypes={canReadLocale:v().bool.isRequired,canCreateLocale:v().bool.isRequired,canUpdateLocale:v().bool.isRequired,canDeleteLocale:v().bool.isRequired};const Qe=le;var Je=i(97473);const Ke=()=>{const{isLoading:a,allowedActions:{canRead:l,canUpdate:t,canCreate:n,canDelete:s}}=(0,g.useRBAC)(Je.Z);return a?null:e.createElement(Qe,{canReadLocale:l,canCreateLocale:n,canUpdateLocale:t,canDeleteLocale:s})}}}]);