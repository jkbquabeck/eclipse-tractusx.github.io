"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7091],{41599:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),o=(s(75190),s(47507)),d=s(24310),l=s(63303),m=(s(75035),s(85162));const p={id:"upsert-addresses",title:"Create or update addresses.",description:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",sidebar_label:"Create or update addresses.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["address-controller"],description:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",operationId:"upsertAddresses",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{version:{type:"object",properties:{characterSet:{type:"string",enum:["ARABIC","CHINESE","CHINESE_TRADITIONAL","CYRILLIC","GREEK","HANGUL_KOREAN","HEBREW","HIRAGANA","KANJI","KATAKANA","LATIN","THAI","WESTERN_LATIN_STANDARD","UNDEFINED"]},language:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]}},description:"Localization record for an address"},careOf:{type:"string"},contexts:{type:"array",items:{type:"string"}},country:{type:"string",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},administrativeAreas:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},fipsCode:{type:"string"},type:{type:"string",enum:["COUNTY","REGION","OTHER"]}},description:"Areas such as country regions or counties"}},postCodes:{type:"array",items:{type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["CEDEX","LARGE_MAIL_USER","OTHER","POST_BOX","REGULAR"]}},description:"Postcode record for an address"}},localities:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},type:{type:"string",enum:["BLOCK","CITY","DISTRICT","OTHER","POST_OFFICE_CITY","QUARTER"]}},description:"Locality record for an address such as city, block or district"}},thoroughfares:{type:"array",items:{type:"object",properties:{value:{type:"string"},name:{type:"string"},shortName:{type:"string"},number:{type:"string"},direction:{type:"string"},type:{type:"string",enum:["INDUSTRIAL_ZONE","OTHER","RIVER","SQUARE","STREET"]}},description:"Thoroughfare record for an address such as street, square or industrial zone"}},premises:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["BUILDING","OTHER","LEVEL","HARBOUR","ROOM","SUITE","UNIT","WAREHOUSE"]}},description:"Premise record for an address such as building, room or floor"}},postalDeliveryPoints:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["INTERURBAN_DELIVERY_POINT","MAIL_STATION","MAILBOX","OTHER","POST_OFFICE_BOX"]}},description:"Postal delivery point record for an address"}},geographicCoordinates:{type:"object",properties:{longitude:{type:"number",format:"float"},latitude:{type:"number",format:"float"},altitude:{type:"number",format:"float"}},description:"Geo coordinates record for an address"},types:{type:"array",items:{type:"string",enum:["BRANCH_OFFICE","CARE_OF","HEADQUARTER","LEGAL_ALTERNATIVE","PO_BOX","REGISTERED","REGISTERED_AGENT_MAIL","REGISTERED_AGENT_PHYSICAL","VAT_REGISTERED","UNSPECIFIC"]}},externalId:{type:"string"},legalEntityExternalId:{type:"string"},siteExternalId:{type:"string"},bpn:{type:"string"}},description:"Address with legal entity or site references. Only one of either legal entity or site external id can be set for an address."}}}},required:!0},responses:{200:{description:"Addresses were successfully updated or created",content:{"*/*":{schema:{type:"object"}}}},400:{description:"On malformed address request"}},method:"put",path:"/api/catena/input/addresses",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:[{version:{characterSet:"ARABIC",language:"undefined"},careOf:"string",contexts:["string"],country:"UNDEFINED",administrativeAreas:[{value:"string",shortName:"string",fipsCode:"string",type:"COUNTY"}],postCodes:[{value:"string",type:"CEDEX"}],localities:[{value:"string",shortName:"string",type:"BLOCK"}],thoroughfares:[{value:"string",name:"string",shortName:"string",number:"string",direction:"string",type:"INDUSTRIAL_ZONE"}],premises:[{value:"string",shortName:"string",number:"string",type:"BUILDING"}],postalDeliveryPoints:[{value:"string",shortName:"string",number:"string",type:"INTERURBAN_DELIVERY_POINT"}],geographicCoordinates:{longitude:0,latitude:0,altitude:0},types:["BRANCH_OFFICE"],externalId:"string",legalEntityExternalId:"string",siteExternalId:"string",bpn:"string"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0"},postman:{name:"Create or update addresses.",description:{content:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",type:"text/plain"},url:{path:["api","catena","input","addresses"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},c=void 0,u={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/upsert-addresses",id:"kits/Business Partner Kit/Software Development View/Gate Api/upsert-addresses",title:"Create or update addresses.",description:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/upsert-addresses.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/upsert-addresses",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/upsert-addresses",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"upsert-addresses",title:"Create or update addresses.",description:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",sidebar_label:"Create or update addresses.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["address-controller"],description:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",operationId:"upsertAddresses",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{version:{type:"object",properties:{characterSet:{type:"string",enum:["ARABIC","CHINESE","CHINESE_TRADITIONAL","CYRILLIC","GREEK","HANGUL_KOREAN","HEBREW","HIRAGANA","KANJI","KATAKANA","LATIN","THAI","WESTERN_LATIN_STANDARD","UNDEFINED"]},language:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]}},description:"Localization record for an address"},careOf:{type:"string"},contexts:{type:"array",items:{type:"string"}},country:{type:"string",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},administrativeAreas:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},fipsCode:{type:"string"},type:{type:"string",enum:["COUNTY","REGION","OTHER"]}},description:"Areas such as country regions or counties"}},postCodes:{type:"array",items:{type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["CEDEX","LARGE_MAIL_USER","OTHER","POST_BOX","REGULAR"]}},description:"Postcode record for an address"}},localities:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},type:{type:"string",enum:["BLOCK","CITY","DISTRICT","OTHER","POST_OFFICE_CITY","QUARTER"]}},description:"Locality record for an address such as city, block or district"}},thoroughfares:{type:"array",items:{type:"object",properties:{value:{type:"string"},name:{type:"string"},shortName:{type:"string"},number:{type:"string"},direction:{type:"string"},type:{type:"string",enum:["INDUSTRIAL_ZONE","OTHER","RIVER","SQUARE","STREET"]}},description:"Thoroughfare record for an address such as street, square or industrial zone"}},premises:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["BUILDING","OTHER","LEVEL","HARBOUR","ROOM","SUITE","UNIT","WAREHOUSE"]}},description:"Premise record for an address such as building, room or floor"}},postalDeliveryPoints:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["INTERURBAN_DELIVERY_POINT","MAIL_STATION","MAILBOX","OTHER","POST_OFFICE_BOX"]}},description:"Postal delivery point record for an address"}},geographicCoordinates:{type:"object",properties:{longitude:{type:"number",format:"float"},latitude:{type:"number",format:"float"},altitude:{type:"number",format:"float"}},description:"Geo coordinates record for an address"},types:{type:"array",items:{type:"string",enum:["BRANCH_OFFICE","CARE_OF","HEADQUARTER","LEGAL_ALTERNATIVE","PO_BOX","REGISTERED","REGISTERED_AGENT_MAIL","REGISTERED_AGENT_PHYSICAL","VAT_REGISTERED","UNSPECIFIC"]}},externalId:{type:"string"},legalEntityExternalId:{type:"string"},siteExternalId:{type:"string"},bpn:{type:"string"}},description:"Address with legal entity or site references. Only one of either legal entity or site external id can be set for an address."}}}},required:!0},responses:{200:{description:"Addresses were successfully updated or created",content:{"*/*":{schema:{type:"object"}}}},400:{description:"On malformed address request"}},method:"put",path:"/api/catena/input/addresses",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:[{version:{characterSet:"ARABIC",language:"undefined"},careOf:"string",contexts:["string"],country:"UNDEFINED",administrativeAreas:[{value:"string",shortName:"string",fipsCode:"string",type:"COUNTY"}],postCodes:[{value:"string",type:"CEDEX"}],localities:[{value:"string",shortName:"string",type:"BLOCK"}],thoroughfares:[{value:"string",name:"string",shortName:"string",number:"string",direction:"string",type:"INDUSTRIAL_ZONE"}],premises:[{value:"string",shortName:"string",number:"string",type:"BUILDING"}],postalDeliveryPoints:[{value:"string",shortName:"string",number:"string",type:"INTERURBAN_DELIVERY_POINT"}],geographicCoordinates:{longitude:0,latitude:0,altitude:0},types:["BRANCH_OFFICE"],externalId:"string",legalEntityExternalId:"string",siteExternalId:"string",bpn:"string"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0"},postman:{name:"Create or update addresses.",description:{content:"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries.",type:"text/plain"},url:{path:["api","catena","input","addresses"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"Get page of addresses",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/get-addresses"},next:{title:"Get page of addresses",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/get-addresses-output"}},y={},g=[{value:"Create or update addresses.",id:"create-or-update-addresses",level:2}],T={toc:g};function h(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},T,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-or-update-addresses"},"Create or update addresses."),(0,i.kt)("p",null,"Create or update addresses. Updates instead of creating a new address if an already existing external id is used. The same external id may not occur more than once in a single request. For a single request, the maximum number of addresses in the request is limited to 100 entries."),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"version"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Localization record for an address")),(0,i.kt)(d.Z,{collapsible:!1,name:"characterSet",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ARABIC`, `CHINESE`, `CHINESE_TRADITIONAL`, `CYRILLIC`, `GREEK`, `HANGUL_KOREAN`, `HEBREW`, `HIRAGANA`, `KANJI`, `KATAKANA`, `LATIN`, `THAI`, `WESTERN_LATIN_STANDARD`, `UNDEFINED`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"language",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`undefined`, `aa`, `ab`, `ae`, `af`, `ak`, `am`, `an`, `ar`, `as`, `av`, `ay`, `az`, `ba`, `be`, `bg`, `bh`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `ca`, `ce`, `ch`, `co`, `cr`, `cs`, `cu`, `cv`, `cy`, `da`, `de`, `dv`, `dz`, `ee`, `el`, `en`, `eo`, `es`, `et`, `eu`, `fa`, `ff`, `fi`, `fj`, `fo`, `fr`, `fy`, `ga`, `gd`, `gl`, `gn`, `gu`, `gv`, `ha`, `he`, `hi`, `ho`, `hr`, `ht`, `hu`, `hy`, `hz`, `ia`, `id`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `it`, `iu`, `ja`, `jv`, `ka`, `kg`, `ki`, `kj`, `kk`, `kl`, `km`, `kn`, `ko`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lu`, `lv`, `mg`, `mh`, `mi`, `mk`, `ml`, `mn`, `mr`, `ms`, `mt`, `my`, `na`, `nb`, `nd`, `ne`, `ng`, `nl`, `nn`, `no`, `nr`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pi`, `pl`, `ps`, `pt`, `qu`, `rm`, `rn`, `ro`, `ru`, `rw`, `sa`, `sc`, `sd`, `se`, `sg`, `si`, `sk`, `sl`, `sm`, `sn`, `so`, `sq`, `sr`, `ss`, `st`, `su`, `sv`, `sw`, `ta`, `te`, `tg`, `th`, `ti`, `tk`, `tl`, `tn`, `to`, `tr`, `ts`, `tt`, `tw`, `ty`, `ug`, `uk`, `ur`, `uz`, `ve`, `vi`, `vo`, `wa`, `wo`, `xh`, `yi`, `yo`, `za`, `zh`, `zu`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"careOf",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"contexts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"administrativeAreas"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"fipsCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`COUNTY`, `REGION`, `OTHER`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"postCodes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CEDEX`, `LARGE_MAIL_USER`, `OTHER`, `POST_BOX`, `REGULAR`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"localities"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`BLOCK`, `CITY`, `DISTRICT`, `OTHER`, `POST_OFFICE_CITY`, `QUARTER`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"thoroughfares"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"direction",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`INDUSTRIAL_ZONE`, `OTHER`, `RIVER`, `SQUARE`, `STREET`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"premises"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`BUILDING`, `OTHER`, `LEVEL`, `HARBOUR`, `ROOM`, `SUITE`, `UNIT`, `WAREHOUSE`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"postalDeliveryPoints"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`INTERURBAN_DELIVERY_POINT`, `MAIL_STATION`, `MAILBOX`, `OTHER`, `POST_OFFICE_BOX`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"geographicCoordinates"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Geo coordinates record for an address")),(0,i.kt)(d.Z,{collapsible:!1,name:"longitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"latitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"altitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"types",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`BRANCH_OFFICE`, `CARE_OF`, `HEADQUARTER`, `LEGAL_ALTERNATIVE`, `PO_BOX`, `REGISTERED`, `REGISTERED_AGENT_MAIL`, `REGISTERED_AGENT_PHYSICAL`, `VAT_REGISTERED`, `UNSPECIFIC`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"legalEntityExternalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"siteExternalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Addresses were successfully updated or created")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"On malformed address request")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);