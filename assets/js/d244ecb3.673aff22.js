"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[52069],{61294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),s=n(26389),r=n(94891),o=n(75190),p=n(47507),l=n(24310),m=n(63303),c=(n(75035),n(85162));const d={id:"get-changelog-entries",title:"Get business partner changelog entries by bpn",description:"Get business partner changelog entries by bpn ignoring case.",sidebar_label:"Get business partner changelog entries by bpn",hide_title:!0,hide_table_of_contents:!0,api:{tags:["business-partner-controller"],description:"Get business partner changelog entries by bpn ignoring case.",operationId:"getChangelogEntries",parameters:[{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The changelog entries for the specified bpn",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{bpn:{type:"string"},changelogType:{type:"string",enum:["CREATE","UPDATE"]},timestamp:{type:"string",format:"date-time"}},description:"Changelog entry for a business partner"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},method:"get",path:"/api/catena/business-partners/{bpn}/changelog",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Get business partner changelog entries by bpn",description:{content:"Get business partner changelog entries by bpn ignoring case.",type:"text/plain"},url:{path:["api","catena","business-partners",":bpn","changelog"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpn value",type:"text/plain"},type:"any",value:"",key:"bpn"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",id:"version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",title:"Get business partner changelog entries by bpn",description:"Get business partner changelog entries by bpn ignoring case.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",permalink:"/docs-kits/3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"get-changelog-entries",title:"Get business partner changelog entries by bpn",description:"Get business partner changelog entries by bpn ignoring case.",sidebar_label:"Get business partner changelog entries by bpn",hide_title:!0,hide_table_of_contents:!0,api:{tags:["business-partner-controller"],description:"Get business partner changelog entries by bpn ignoring case.",operationId:"getChangelogEntries",parameters:[{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The changelog entries for the specified bpn",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{bpn:{type:"string"},changelogType:{type:"string",enum:["CREATE","UPDATE"]},timestamp:{type:"string",format:"date-time"}},description:"Changelog entry for a business partner"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},method:"get",path:"/api/catena/business-partners/{bpn}/changelog",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Get business partner changelog entries by bpn",description:{content:"Get business partner changelog entries by bpn ignoring case.",type:"text/plain"},url:{path:["api","catena","business-partners",":bpn","changelog"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpn value",type:"text/plain"},type:"any",value:"",key:"bpn"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"business-partner-controller",permalink:"/docs-kits/3.1.0/category/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-controller"},next:{title:"business-partner-legacy-controller",permalink:"/docs-kits/3.1.0/category/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-legacy-controller"}},b={},h=[{value:"Get business partner changelog entries by bpn",id:"get-business-partner-changelog-entries-by-bpn",level:2}],y={toc:h};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-business-partner-changelog-entries-by-bpn"},"Get business partner changelog entries by bpn"),(0,i.kt)("p",null,"Get business partner changelog entries by bpn ignoring case."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The changelog entries for the specified bpn")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"changelogType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CREATE`, `UPDATE`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "bpn": "string",\n      "changelogType": "CREATE",\n      "timestamp": "2023-05-31"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"On malformed pagination request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No business partner found for specified bpn")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);