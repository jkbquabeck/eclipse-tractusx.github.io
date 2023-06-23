"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[57296],{63929:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var s=i(87462),a=(i(67294),i(3905)),l=i(26389),n=i(94891),o=(i(75190),i(47507)),p=i(24310),r=i(63303),m=(i(75035),i(85162));const c={id:"get-liveness",title:"getLiveness",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"getLiveness",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"getLiveness",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}}},isHealthy:{type:"boolean",example:null}}}},isSystemHealthy:{type:"boolean",example:null}}}}}}}},tags:["Application Observability"],method:"get",path:"/check/liveness",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Liveness",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","liveness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},d=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness",title:"getLiveness",description:"Performs a liveness probe to determine whether the runtime is working properly.",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-liveness",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-liveness",title:"getLiveness",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"getLiveness",hide_title:!0,hide_table_of_contents:!0,api:{description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"getLiveness",responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{componentResults:{type:"array",example:null,items:{type:"object",example:null,properties:{component:{type:"string",example:null},failure:{type:"object",example:null,properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}}},isHealthy:{type:"boolean",example:null}}}},isSystemHealthy:{type:"boolean",example:null}}}}}}}},tags:["Application Observability"],method:"get",path:"/check/liveness",info:{title:"EDC Observability API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get Liveness",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","liveness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/edc-observability-api",custom_edit_url:null},sidebar:"kits",previous:{title:"checkHealth",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/check-health"},next:{title:"getReadiness",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/api-observability/get-readiness"}},v={},y=[{value:"getLiveness",id:"getliveness",level:2}],h={toc:y};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getliveness"},"getLiveness"),(0,a.kt)("p",null,"Performs a liveness probe to determine whether the runtime is working properly."),(0,a.kt)("div",null,(0,a.kt)(l.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(r.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"componentResults"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"component",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"failure"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"failureDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!1,name:"isHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);