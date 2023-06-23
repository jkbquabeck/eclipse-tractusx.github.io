"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[50561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s="Supporting Infrastructure Deployment",i={unversionedId:"kits/tractusx-edc/edc-tests/deployment/test-infrastructure/README",id:"version-3.1.0/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/README",title:"Supporting Infrastructure Deployment",description:"The Supporting Infrastructure Deployment creates a complete, independent and already configured EDC test environment.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/README.md",sourceDirName:"kits/tractusx-edc/edc-tests/deployment/test-infrastructure",slug:"/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/",permalink:"/docs-kits/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"Omejdn DAPS",permalink:"/docs-kits/kits/tractusx-edc/edc-tests/deployment/omejdn/"},next:{title:"Postman Collection",permalink:"/docs-kits/kits/tractusx-edc/docs/development/postman/"}},l={},c=[{value:"Omejdn DAPS",id:"omejdn-daps",level:2},{value:"HashiCorp Vault",id:"hashicorp-vault",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Setup",id:"setup",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supporting-infrastructure-deployment"},"Supporting Infrastructure Deployment"),(0,o.kt)("p",null,"The Supporting Infrastructure Deployment creates a complete, independent and already configured EDC test environment.\nDuring the automated business tests, these infrastructure components are deployed together with two connectors (Plato & Sokrates)."),(0,o.kt)("p",null,"This deployment could also be used as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"reference setup for teams, that want to create their own connector"),(0,o.kt)("li",{parentName:"ul"},"standalone infrastructure to try things out")),(0,o.kt)("p",null,"This deployment should ",(0,o.kt)("strong",{parentName:"p"},"never")," be used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("strong",{parentName:"li"},"any")," production or near production environments"),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("strong",{parentName:"li"},"any")," long living internet facing connector setups")),(0,o.kt)("h2",{id:"omejdn-daps"},"Omejdn DAPS"),(0,o.kt)("p",null,"The Dynamic Attribute Provisioning Service (DAPS) is a component of the IDS Ecosystem.\nThe Fraunhofer Institute has created a DAPS reference implementation, the Omejdn\nDAPS (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Fraunhofer-AISEC/omejdn-server"},"link"),"). This deplyoment configures and deployes a instance of\nthis reference implementation."),(0,o.kt)("p",null,"Definition of DAPS from the IDS Reference architecture v3.0:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Identity Provider acts as an agent for the International\nData Spaces Association. It is responsible for issuing technical identities to parties that have been approved to become\nParticipants in the International Data Spaces. The Identity\nProvider is instructed to issue identities based on approved\nroles (e.g., App Store or App Provider). Only if equipped with\nsuch an identity, an entity is allowed to participate in the International Data Spaces")),(0,o.kt)("p",null,"Also, please note, that the Omejdn DAPS is meant as research sandbox and should not be used in anq\nproductive environment."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Omejdn is meant to be a research sandbox in which we can (re)implement standard protocols and\npotentially extend and modify functionality under the hood to support research projects. Use at your own\nrisk! (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Fraunhofer-AISEC/omejdn-server"},"source"),")")),(0,o.kt)("h2",{id:"hashicorp-vault"},"HashiCorp Vault"),(0,o.kt)("p",null,"The Control- and Data Plane persist confidential in the vault and persist and communicate using only the secret\nnames. Hence, it is not possible to run a connector without an instance of a vault."),(0,o.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"This database is used to persist the state of the Control Plane."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Simply execute the following comment in a shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm install infra edc-tests/deployment/src/main/resources/helm/test-infrastructure --update-dependencies\n")))}p.isMDXComponent=!0}}]);