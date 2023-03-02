"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=s,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:s,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const o={},c="Invoke Business-Tests via Maven",a={unversionedId:"kits/product-edc/edc-tests/README",id:"kits/product-edc/edc-tests/README",title:"Invoke Business-Tests via Maven",description:'"Think globally, act locally"',source:"@site/docs/kits/product-edc/edc-tests/README.md",sourceDirName:"kits/product-edc/edc-tests",slug:"/kits/product-edc/edc-tests/",permalink:"/docs/kits/product-edc/edc-tests/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/edc-tests/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Provision: additional headers",permalink:"/docs/kits/product-edc/edc-extensions/provision-additional-headers/"},next:{title:"Release",permalink:"/docs/kits/product-edc/docs/development/Release"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"invoke-business-tests-via-maven"},"Invoke Business-Tests via Maven"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -pl edc-tests -Pbusiness-tests -pl edc-tests test -Dtest=org.eclipse.tractusx.edc.tests.features.RunCucumberTest\n")),(0,s.kt)("h1",{id:"test-locally-using-act-tool"},"Test locally using Act Tool"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'"Think globally, ',(0,s.kt)("a",{parentName:"p",href:"https://github.com/nektos/act"},(0,s.kt)("inlineCode",{parentName:"a"},"act")),' locally"')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"act -j business-test\n")))}p.isMDXComponent=!0}}]);