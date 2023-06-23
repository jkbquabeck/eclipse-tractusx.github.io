"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,A=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,u=d["".concat(s,".").concat(h)]||d[h]||l[h]||A;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=n.length,i=new Array(A);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<A;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>A,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const A={id:"Adoption View",title:"Adoption View",description:"Connector Kit",sidebar_position:1},i=void 0,r={unversionedId:"kits/tractusx-edc/docs/kit/adoption-view/Adoption View",id:"kits/tractusx-edc/docs/kit/adoption-view/Adoption View",title:"Adoption View",description:"Connector Kit",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/adoption-view/page_adoption-view.md",sourceDirName:"kits/tractusx-edc/docs/kit/adoption-view",slug:"/kits/tractusx-edc/docs/kit/adoption-view/Adoption View",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/adoption-view/Adoption View",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Adoption View",title:"Adoption View",description:"Connector Kit",sidebar_position:1},sidebar:"kits",previous:{title:"Changelog",permalink:"/docs-kits/next/kits/tractusx-edc/CHANGELOG"},next:{title:"Development View",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/page00_development_view"}},s={},p=[{value:"Connector Kit",id:"connector-kit",level:2}],c={toc:p};function d(e){let{components:t,...A}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connector kit banner",src:n(63080).Z,width:"286",height:"244"})),(0,o.kt)("h2",{id:"connector-kit"},"Connector Kit"),(0,o.kt)("p",null,"The ConnectorKit provides a connector framework, based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"Eclipse Dataspace Connector")," for sovereign, cross-enterprise data exchange."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EDC Overview",src:n(65680).Z,width:"4170",height:"1771"})),(0,o.kt)("p",null,"Trust, interoperability and data sovereignty, these are the objectives and values for secure and sustainable peer-to-peer data exchange between organizations and companies. The claim is data sovereignty: Whoever makes data available retains control and decides individually who is involved in the data exchange, how, when, where and under what conditions."),(0,o.kt)("p",null,"A corresponding concept was developed in the context of ",(0,o.kt)("a",{parentName:"p",href:"https://www.data-infrastructure.eu/GAIAX/Navigation/EN/Home/home.html"},"Gaia-X")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://internationaldataspaces.org/"},"International Data Space Association"),". The essential software component is the connector."),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"EDC"),", a new central communication component was created, which implements the following architectural principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple, maintaining a small and efficient core with as few external dependencies as possible"),(0,o.kt)("li",{parentName:"ul"},"Interoperable, independent of platforms and ecosystems"),(0,o.kt)("li",{parentName:"ul"},"Decentralized, software components with the necessary capabilities for participating in a data room are located on the partners' side, data is only exchanged between the agreed points."),(0,o.kt)("li",{parentName:"ul"},"Data protection is more important than data sharing, data to be transmitted are fundamentally linked to policies via contracts; a transfer without a contract is not possible."),(0,o.kt)("li",{parentName:"ul"},"Separation of metadata and data enables high throughput rates for the actual data transfer."),(0,o.kt)("li",{parentName:"ul"},"Consistent semantics for the data is the basis for the consistency of digital value creation."),(0,o.kt)("li",{parentName:"ul"},"As far as possible, all processes, starting with determining the identity, through ensuring the contractually agreed regulations to data transmission, are automated."),(0,o.kt)("li",{parentName:"ul"},"Existing standards and protocols (",(0,o.kt)("a",{parentName:"li",href:"https://www.data-infrastructure.eu/GAIAX/Navigation/EN/Home/home.html"},"GAIA-X")," and ",(0,o.kt)("a",{parentName:"li",href:"https://internationaldataspaces.org/"},"IDSA"),") are used as far as possible.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"EDC")," as a connector implements a framework agreement for sovereign, cross-organizational data exchange. The International Data Spaces Standard (IDS) and relevant principles in connection with ",(0,o.kt)("a",{parentName:"p",href:"https://www.data-infrastructure.eu/GAIAX/Navigation/EN/Home/home.html"},"GAIA-X")," were implemented. The connector is designed to be extensible to support alternative protocols and to be integrated into different ecosystems."),(0,o.kt)("p",null,'The objective is to set up a decentralized software component on the part of the respective partner, which bundles the skills required to participate in a data room and enables peer-to-peer connections between participants.\nThe focus here is particularly on the data sovereignty of the independent companies.\nThe functionality required for this is bundled in the open-source project "Eclipse Dataspace Connectors", to which the Catena-X partners contribute as part of the Eclipse Foundation.'),(0,o.kt)("p",null,"The main difference between the EDC and the previous connectors of the ",(0,o.kt)("a",{parentName:"p",href:"https://internationaldataspaces.org/"},"IDSA")," is the separation of the communication into a channel for the metadata and one for the actual data exchange. The channel for the data supports various transmission protocols via so-called data plane extensions. The metadata is transmitted directly via the EDC interface, while the actual data exchange then takes place via the appropriate channel extension. In this way, a highly scalable data exchange is made possible."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EDC Architecture",src:n(76938).Z,width:"720",height:"277"})),(0,o.kt)("p",null,"The architecture of the EDC combines various services that are necessary for the above principles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An interface to the Identity Provider service, currently ",(0,o.kt)("a",{parentName:"li",href:"https://internationaldataspaces.org/"},"IDSA"),"'s ",(0,o.kt)("a",{parentName:"li",href:"https://www.dataspaces.fraunhofer.de/en/software/identity_provider.html"},"Dynamic Attribute Provisioning System"),". This central service provides the identity and the corresponding authentication of the participants in the data exchange. (There is no authorization at this point). Decentralized solutions will also be supported in the future."),(0,o.kt)("li",{parentName:"ul"},"The provision of possible offers (contract offering) which, on the one hand, stipulates the data offered and the associated terms of use (policies) in corresponding contracts."),(0,o.kt)("li",{parentName:"ul"},"An interface for manual selection of data and associated contract offers."),(0,o.kt)("li",{parentName:"ul"},"The actual data transfer via the data plane extension"),(0,o.kt)("li",{parentName:"ul"},"The connection of software systems on the customer and provider side")))}d.isMDXComponent=!0},76938:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},65680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edc_overview-a39aaf47262f7523281ace506c8fe978.png"},63080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ConnectorKitIcon-44f7fb56f8da1b27337f8c23f28067d2.png"}}]);