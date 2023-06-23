"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[99900],{40025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),l=a(75190),o=a(47507),m=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Get page of legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"},mainAbbreviation:{type:"string"},language:{type:"object",properties:{technicalKey:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]},name:{type:"string"}},description:"Named type uniquely identified by its technical key"},categories:{type:"array",items:{type:"object",properties:{name:{type:"string"},url:{type:"string"}},description:"General type with name and URL link for further information"}}},description:"Legal form a business partner can have"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Get page of legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",id:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Get page of legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"},mainAbbreviation:{type:"string"},language:{type:"object",properties:{technicalKey:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]},name:{type:"string"}},description:"Named type uniquely identified by its technical key"},categories:{type:"array",items:{type:"object",properties:{name:{type:"string"},url:{type:"string"}},description:"General type with name and URL link for further information"}}},description:"Legal form a business partner can have"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Get page of legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"metadata-controller",permalink:"/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Pool Api/metadata-controller"},next:{title:"Create new legal form",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/create-legal-form"}},y={},f=[{value:"Get page of legal forms",id:"get-page-of-legal-forms",level:2}],k={toc:f};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-page-of-legal-forms"},"Get page of legal forms"),(0,s.kt)("p",null,"Lists all currently known legal forms in a paginated result"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Page of existing legal forms, may be empty")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"mainAbbreviation",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"language"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Named type uniquely identified by its technical key")),(0,s.kt)(m.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`undefined`, `aa`, `ab`, `ae`, `af`, `ak`, `am`, `an`, `ar`, `as`, `av`, `ay`, `az`, `ba`, `be`, `bg`, `bh`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `ca`, `ce`, `ch`, `co`, `cr`, `cs`, `cu`, `cv`, `cy`, `da`, `de`, `dv`, `dz`, `ee`, `el`, `en`, `eo`, `es`, `et`, `eu`, `fa`, `ff`, `fi`, `fj`, `fo`, `fr`, `fy`, `ga`, `gd`, `gl`, `gn`, `gu`, `gv`, `ha`, `he`, `hi`, `ho`, `hr`, `ht`, `hu`, `hy`, `hz`, `ia`, `id`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `it`, `iu`, `ja`, `jv`, `ka`, `kg`, `ki`, `kj`, `kk`, `kl`, `km`, `kn`, `ko`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lu`, `lv`, `mg`, `mh`, `mi`, `mk`, `ml`, `mn`, `mr`, `ms`, `mt`, `my`, `na`, `nb`, `nd`, `ne`, `ng`, `nl`, `nn`, `no`, `nr`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pi`, `pl`, `ps`, `pt`, `qu`, `rm`, `rn`, `ro`, `ru`, `rw`, `sa`, `sc`, `sd`, `se`, `sg`, `si`, `sk`, `sl`, `sm`, `sn`, `so`, `sq`, `sr`, `ss`, `st`, `su`, `sv`, `sw`, `ta`, `te`, `tg`, `th`, `ti`, `tk`, `tl`, `tn`, `to`, `tr`, `ts`, `tt`, `tw`, `ty`, `ug`, `uk`, `ur`, `uz`, `ve`, `vi`, `vo`, `wa`, `wo`, `xh`, `yi`, `yo`, `za`, `zh`, `zu`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"categories"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "technicalKey": "string",\n      "name": "string",\n      "url": "string",\n      "mainAbbreviation": "string",\n      "language": {\n        "technicalKey": "undefined",\n        "name": "string"\n      },\n      "categories": [\n        {\n          "name": "string",\n          "url": "string"\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed request parameters")),(0,s.kt)("div",null)))))}h.isMDXComponent=!0}}]);