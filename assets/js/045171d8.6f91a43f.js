"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[47909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Automate KIT documentation update",sidebar_position:7},i=void 0,c={unversionedId:"website-guidelines/automate-kit-doc-update",id:"website-guidelines/automate-kit-doc-update",title:"Automate KIT documentation update",description:"For each KIT that should be automated add the following to the build-and-deploy workflow.",source:"@site/docs/website-guidelines/automate-kit-doc-update.md",sourceDirName:"website-guidelines",slug:"/website-guidelines/automate-kit-doc-update",permalink:"/docs/website-guidelines/automate-kit-doc-update",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/website-guidelines/automate-kit-doc-update.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Automate KIT documentation update",sidebar_position:7},sidebar:"docs",previous:{title:"How to update the News page by adding a new post?",permalink:"/docs/website-guidelines/update-news-page"},next:{title:"Central Github Checks",permalink:"/docs/github-checks"}},u={},s=[],p={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For each KIT that should be automated add the following to the build-and-deploy workflow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},' - name: check out kit repo\n          uses: actions/checkout@v3\n          with: \n            # add the kit repository\n            repository: "<repo-owner>/<repo name>"\n            path: <repo name>\n        - name: copy docs\n          run: |\n            # create path for the KIT Repository\n            mkdir -p main-repo/docs/test-kit &&\n            # copy documentation to website\n            cp -r <repo name>/path/to/documentation main-repo/docs/<repo name>\n')),(0,o.kt)("p",null,'Fill the sections in these brackets "< >"" with the necessary information.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make sure that the structure within the documentation of the KIT is as expected.")))}l.isMDXComponent=!0}}]);