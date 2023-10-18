"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},c="Omejdn DAPS",i={unversionedId:"kits/tractusx-edc/edc-tests/deployment/omejdn/README",id:"version-3.1.0/kits/tractusx-edc/edc-tests/deployment/omejdn/README",title:"Omejdn DAPS",description:"This chart deployes an IDS Omejdn DAPS.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/edc-tests/deployment/omejdn/README.md",sourceDirName:"kits/tractusx-edc/edc-tests/deployment/omejdn",slug:"/kits/tractusx-edc/edc-tests/deployment/omejdn/",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/edc-tests/deployment/omejdn/",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"tractusx-connector-memory",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/charts/tractusx-connector-memory/"},next:{title:"Supporting Infrastructure Deployment",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"omejdn-daps"},"Omejdn DAPS"),(0,o.kt)("p",null,"This chart deployes an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Fraunhofer-AISEC/omejdn-server"},"IDS Omejdn DAPS"),"."),(0,o.kt)("p",null,"Two Eclipse Dataspace Connectors need to be registered at the same DAPS instance, to be able to talk to each other. Each connector is registered in the DAPS by an unique client ID and a correpsonding client certificate."),(0,o.kt)("p",null,"New connectors are configured in the omejdn ",(0,o.kt)("em",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("p",null,"In each Eclipse Dataspace Connector configure the following properties to use the DAPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'    edc.oauth.client.id=<client ID from omejdn values.yaml>\n\n    edc.oauth.provider.jwks.url="http://<name>:4567/.well-known/jwks.json"\n    edc.oauth.token.url="http://<name>:4567/token"\n\n    edc.oauth.private.key.alias=<key vault alias of certificate private key>\n    edc.oauth.public.key.alias=<key vault alias of certificate configured in omejdn values.yaml>\n\n    edc.oauth.provider.audience=idsc:IDS_CONNECTORS_ALL\n')))}u.isMDXComponent=!0}}]);