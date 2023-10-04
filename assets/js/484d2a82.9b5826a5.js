"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[12077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,title:"Reference Implementation"},l=void 0,o={unversionedId:"kits/knowledge-agents/development-view/reference",id:"kits/knowledge-agents/development-view/reference",title:"Reference Implementation",description:"\x3c!--",source:"@site/docs-kits/kits/knowledge-agents/development-view/reference.md",sourceDirName:"kits/knowledge-agents/development-view",slug:"/kits/knowledge-agents/development-view/reference",permalink:"/docs-kits/next/kits/knowledge-agents/development-view/reference",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Reference Implementation"},sidebar:"kits",previous:{title:"Layers & Modules",permalink:"/docs-kits/next/kits/knowledge-agents/development-view/modules"},next:{title:"API",permalink:"/docs-kits/next/kits/knowledge-agents/development-view/api"}},s={},c=[{value:"High Level Architecture",id:"high-level-architecture",level:2},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Sources And Artifacts",id:"sources-and-artifacts",level:2},{value:"Tractus-X Knowledge Agents EDC Extensions (KA-EDC)",id:"tractus-x-knowledge-agents-edc-extensions-ka-edc",level:3},{value:"Tractus-X Knowledge Agents Reference Implementations (KA-RI)",id:"tractus-x-knowledge-agents-reference-implementations-ka-ri",level:3},{value:"Tractus-X Knowledge Agents AAS Bridge (KA-AAS)",id:"tractus-x-knowledge-agents-aas-bridge-ka-aas",level:3},{value:"Contact &amp; Further Reading",id:"contact--further-reading",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the Reference Implementation of Agents Standard and Kit."),(0,a.kt)("p",null,"For more information see"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guideline"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"modules"},"Layers & Modules")," Architecture"),(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"build"},"Build")," instructions"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"../operation-view/deployment"},"Deployment")," guide")),(0,a.kt)("h2",{id:"high-level-architecture"},"High Level Architecture"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(25104).Z},(0,a.kt)("img",{alt:"Architecture High-Level",src:n(59770).Z,width:"600",height:"447"}))),(0,a.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provider-Side Programming Language: Java > 12",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Eclipse Dataspace Connector"),(0,a.kt)("li",{parentName:"ul"},"Provider Agent: OnTop"),(0,a.kt)("li",{parentName:"ul"},"Inference Agent: Fuseki"),(0,a.kt)("li",{parentName:"ul"},"Function Agent: RDF4J"),(0,a.kt)("li",{parentName:"ul"},"SPARQL-AAS Bridge: FAAAST"))),(0,a.kt)("li",{parentName:"ul"},"Consumer-Side Programming Language: Typescript",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Skill Framework: React/Redux"),(0,a.kt)("li",{parentName:"ul"},"Knowledge Explorer: React/Redux & Catena-X Portal"),(0,a.kt)("li",{parentName:"ul"},"Skill Development Environment: React/Redux & Catena-X Portal")))),(0,a.kt)("h2",{id:"sources-and-artifacts"},"Sources And Artifacts"),(0,a.kt)("h3",{id:"tractus-x-knowledge-agents-edc-extensions-ka-edc"},"Tractus-X Knowledge Agents EDC Extensions (KA-EDC)"),(0,a.kt)("p",null,"see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents-edc"},"Tractus-X Repository")," and its ",(0,a.kt)("a",{parentName:"p",href:"../operation-view/agent_edc"},"KA-EDC Deployment")," "),(0,a.kt)("h3",{id:"tractus-x-knowledge-agents-reference-implementations-ka-ri"},"Tractus-X Knowledge Agents Reference Implementations (KA-RI)"),(0,a.kt)("p",null,"see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents"},"Tractus-X Repository")," and its ",(0,a.kt)("a",{parentName:"p",href:"../operation-view/provider"},"KA-RI Deployment")," "),(0,a.kt)("h3",{id:"tractus-x-knowledge-agents-aas-bridge-ka-aas"},"Tractus-X Knowledge Agents AAS Bridge (KA-AAS)"),(0,a.kt)("p",null,"see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents-aas-bridge"},"Tractus-X Repository")," and its ",(0,a.kt)("a",{parentName:"p",href:"../operation-view/bridge"},"KA-AAS Deployment")," "),(0,a.kt)("h2",{id:"contact--further-reading"},"Contact & Further Reading"),(0,a.kt)("p",null,"  For more information see"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guideline"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"modules"},"Layers & Modules")," Architecture"),(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"build"},"Build")," instructions"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"../operation-view/deployment"},"Deployment")," guide")),(0,a.kt)("sub",null,(0,a.kt)("sup",null,"(C) 2021,2023 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}p.isMDXComponent=!0},25104:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/knowledge_agent_architecture-3aa46110a6213138c677b339e3647703.png"},59770:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/knowledge_agent_architecture_small-adfd1153ee8a08d5338e311a931d0f3a.png"}}]);