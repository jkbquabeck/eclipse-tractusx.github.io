"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[51723],{44389:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>g,contentTitle:()=>u,default:()=>x,frontMatter:()=>r,metadata:()=>y,toc:()=>v});var a=t(87462),l=(t(67294),t(3905)),n=t(26389),p=t(94891),o=t(75190),s=t(47507),m=t(24310),d=t(63303),c=(t(75035),t(85162));const r={id:"get-policy-definition",title:"getPolicyDefinition",description:"Gets a policy definition with the given ID",sidebar_label:"getPolicyDefinition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets a policy definition with the given ID",operationId:"getPolicyDefinition",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",additionalProperties:{type:"object",example:null,properties:{valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}},example:null,properties:{empty:{type:"boolean",example:null},valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}}},required:["policy"]}}},description:"The  policy definition"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"An  policy definition with the given ID does not exist"}},tags:["Policy Definition"],method:"get",path:"/v2/policydefinitions/{id}",info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Policy Definition",description:{content:"Gets a policy definition with the given ID",type:"text/plain"},url:{path:["v2","policydefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition",title:"getPolicyDefinition",description:"Gets a policy definition with the given ID",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy-definition",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-policy-definition",title:"getPolicyDefinition",description:"Gets a policy definition with the given ID",sidebar_label:"getPolicyDefinition",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets a policy definition with the given ID",operationId:"getPolicyDefinition",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},policy:{type:"object",additionalProperties:{type:"object",example:null,properties:{valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}},example:null,properties:{empty:{type:"boolean",example:null},valueType:{type:"string",enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"],example:null}}}},required:["policy"]}}},description:"The  policy definition"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"An  policy definition with the given ID does not exist"}},tags:["Policy Definition"],method:"get",path:"/v2/policydefinitions/{id}",info:{title:"EDC Policy Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Policy Definition",description:{content:"Gets a policy definition with the given ID",type:"text/plain"},url:{path:["v2","policydefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/edc-policy-definition-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAllPolicies",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-all-policies"},next:{title:"getPolicy",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/policy-definition-api/get-policy"}},g={},v=[{value:"getPolicyDefinition",id:"getpolicydefinition",level:2}],h={toc:v};function x(e){let{components:i,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getpolicydefinition"},"getPolicyDefinition"),(0,l.kt)("p",null,"Gets a policy definition with the given ID"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(n.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"The  policy definition")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"policy"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"empty",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"valueType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ARRAY`, `OBJECT`, `STRING`, `NUMBER`, `TRUE`, `FALSE`, `NULL`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"An  policy definition with the given ID does not exist")),(0,l.kt)("div",null,(0,l.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(d.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(s.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);