"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[69806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,y=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return r?i.createElement(y,s(s({ref:t},u),{},{components:r})):i.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(87462),a=(r(67294),r(3905));const n={id:"Circularity Dashboard Sucess Story",title:"Circularity Dashboard Sucess Story",description:"Data Chain Kit",sidebar_position:1},s=void 0,o={unversionedId:"kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story",id:"version-3.1.0/kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story",title:"Circularity Dashboard Sucess Story",description:"Data Chain Kit",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Data Chain Kit/Success Stories/page_ce_circularity_dashboard_story.md",sourceDirName:"kits/Data Chain Kit/Success Stories",slug:"/kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story",permalink:"/docs-kits/kits/Data Chain Kit/Success Stories/Circularity Dashboard Sucess Story",draft:!1,tags:[],version:"3.1.0",sidebarPosition:1,frontMatter:{id:"Circularity Dashboard Sucess Story",title:"Circularity Dashboard Sucess Story",description:"Data Chain Kit",sidebar_position:1},sidebar:"kits",previous:{title:"Trace-X Sucess Story",permalink:"/docs-kits/kits/Data Chain Kit/Success Stories/Trace-X Sucess Story"},next:{title:"Administration Guide",permalink:"/docs-kits/kits/Data Chain Kit/Documentation/irs_admin_guide"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Due to the large number of producers and consumers, however, the implementation of the circular economy is challenging: Information on the individual lifecycles is mostly only available locally and therefore does not provide any meaningful assessment of reuse, recycling or remanufacturing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:r(65636).Z,width:"687",height:"653"})),(0,a.kt)("p",null,"Therefore, the circularity dashboard, gives the user information about materials of the product and of all their composites. This is only possible, if participants of the supply chain, the direct manufactures of the composites of a vehicle are sharing information about the materials used.\nThe ability to access provided data in the Catena-X network could be done in two different ways. Way one is to handle each request separately, or use the IRS, which manages the retrieval of digital twins, checks and validates the results against the semantics and provides an easy-to-use API to interact with the decentral stored data.\nIn the SAP Industry Network for Automotive, circularity cockpit  API specification and IRS implementation are serving as a reference.  Thus, we were able to develop IRS functionality to best fit the SAP tech stack, which we decided to use for the circularity cockpit.\nThis enables us, to have a controlled access to distributed data in an interoperable setup to access data chains. To abstract the data consumption layer brings benefits in stability and resiliency to our application, because we could easily change to different providers or services of a IRS implementation."))}d.isMDXComponent=!0},65636:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/irs-circularity-dashboard-successstory-c418f16c2a9f26192525cff621935735.png"}}]);