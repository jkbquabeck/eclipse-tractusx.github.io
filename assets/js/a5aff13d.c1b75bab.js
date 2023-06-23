"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[78037],{1824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),i=(a(67294),a(3905)),l=a(26389),n=a(94891),p=a(75190),m=a(47507),d=a(24310),o=a(63303),r=(a(75035),a(85162));const c={id:"get-asset",title:"getAsset",description:"Gets an asset with the given ID",sidebar_label:"getAsset",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets an asset with the given ID",operationId:"getAsset",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}}}}},description:"The asset"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"An asset with the given ID does not exist"}},tags:["Asset"],method:"get",path:"/assets/{id}",info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Asset",description:{content:"Gets an asset with the given ID",type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset",title:"getAsset",description:"Gets an asset with the given ID",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-asset",title:"getAsset",description:"Gets an asset with the given ID",sidebar_label:"getAsset",hide_title:!0,hide_table_of_contents:!0,api:{description:"Gets an asset with the given ID",operationId:"getAsset",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"object",example:null,properties:{createdAt:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}}}}},description:"The asset"},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"An asset with the given ID does not exist"}},tags:["Asset"],method:"get",path:"/assets/{id}",info:{title:"EDC Asset API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Asset",description:{content:"Gets an asset with the given ID",type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/edc-asset-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAssetDataAddress",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/get-asset-data-address"},next:{title:"removeAsset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/asset-api/remove-asset"}},g={},h=[{value:"getAsset",id:"getasset",level:2}],v={toc:h};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getasset"},"getAsset"),(0,i.kt)("p",null,"Gets an asset with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The asset")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(r.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed, e.g. id was null")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(r.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An asset with the given ID does not exist")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);