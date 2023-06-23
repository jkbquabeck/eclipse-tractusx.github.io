"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[20493],{73748:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var a=s(87462),r=(s(67294),s(3905)),i=s(26389),n=s(94891),l=s(75190),o=s(47507),p=s(24310),c=s(63303),m=(s(75035),s(85162));const d={id:"terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"terminateTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"terminateTransferProcess",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{reason:{type:"string",example:null}},required:["reason"]}}}},responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"A contract negotiation with the given ID does not exist"},409:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Could not terminate transfer process, because it is already completed or terminated."}},tags:["Transfer Process"],method:"post",path:"/transferprocess/{id}/terminate",jsonRequestBodyExample:null,info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"terminate Transfer Process",description:{content:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","terminate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/terminate-transfer-process",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"terminate-transfer-process",title:"terminateTransferProcess",description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"terminateTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"terminateTransferProcess",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{reason:{type:"string",example:null}},required:["reason"]}}}},responses:{200:{description:"Request to cancel the transfer process was successfully received",links:{"poll-state":{operationId:"getTransferProcessState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"A contract negotiation with the given ID does not exist"},409:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Could not terminate transfer process, because it is already completed or terminated."}},tags:["Transfer Process"],method:"post",path:"/transferprocess/{id}/terminate",jsonRequestBodyExample:null,info:{title:"EDC Transfer Process API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"terminate Transfer Process",description:{content:"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["transferprocess",":id","terminate"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/edc-transfer-process-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryAllTransferProcesses",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/transfer-process-api/query-all-transfer-processes"},next:{title:"Control Plane",permalink:"/docs-kits/kits/tractusx-edc/edc-controlplane/"}},h={},f=[{value:"terminateTransferProcess",id:"terminatetransferprocess",level:2}],v={toc:f};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"terminatetransferprocess"},"terminateTransferProcess"),(0,r.kt)("p",null,"Requests the termination of a transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"reason",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request to cancel the transfer process was successfully received")),(0,r.kt)("div",null)),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request was malformed, e.g. id was null")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A contract negotiation with the given ID does not exist")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not terminate transfer process, because it is already completed or terminated.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);