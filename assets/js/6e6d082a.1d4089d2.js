"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[80722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:1,title:"Deployment"},s=void 0,i={unversionedId:"kits/knowledge-agents/operation-view/deployment",id:"version-23.12/kits/knowledge-agents/operation-view/deployment",title:"Deployment",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-23.12/kits/knowledge-agents/operation-view/deployment.md",sourceDirName:"kits/knowledge-agents/operation-view",slug:"/kits/knowledge-agents/operation-view/deployment",permalink:"/docs-kits/kits/knowledge-agents/operation-view/deployment",draft:!1,tags:[],version:"23.12",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Deployment"},sidebar:"kits",previous:{title:"Register a Skill",permalink:"/docs-kits/kits/knowledge-agents/development-view/api/agent/skill/agent-skill-post"},next:{title:"Deployment",permalink:"/docs-kits/kits/knowledge-agents/operation-view/deployment"}},l={},p=[{value:"Agents KIT",id:"agents-kit",level:3},{value:"Motivation &amp; Deployment Roles",id:"motivation--deployment-roles",level:2},{value:"Role: As A Consumer",id:"role-as-a-consumer",level:2},{value:"Role: As A Skill Provider",id:"role-as-a-skill-provider",level:2},{value:"Role: As A (Data/Function) Provider",id:"role-as-a-datafunction-provider",level:2},{value:"Sub-Role: As A Data Provider",id:"sub-role-as-a-data-provider",level:3},{value:"Sub-Role: As A Function Provider",id:"sub-role-as-a-function-provider",level:3},{value:"Sub-Role: As A Twin Provider",id:"sub-role-as-a-twin-provider",level:3},{value:"Runbook For Deploying and Smoke-Testing Knowledge Agents (Stable)",id:"runbook-for-deploying-and-smoke-testing-knowledge-agents-stable",level:2},{value:"1. Prepare the Two Tenants",id:"1-prepare-the-two-tenants",level:3},{value:"2. Deploy Agent-Enabled Connector&#39;s",id:"2-deploy-agent-enabled-connectors",level:3},{value:"App Provider 1 Datspace Connector Manifest",id:"app-provider-1-datspace-connector-manifest",level:4},{value:"App Consumer 4 Datspace Connector Manifest",id:"app-consumer-4-datspace-connector-manifest",level:4},{value:"3. Deploy App Provider 1 Provisioning Agent",id:"3-deploy-app-provider-1-provisioning-agent",level:3},{value:"4. Deploy App Provider 1 Remoting Agent",id:"4-deploy-app-provider-1-remoting-agent",level:3},{value:"5. Perform Smoke Tests",id:"5-perform-smoke-tests",level:3}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"agents-kit"},"Agents KIT"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Agents Kit Banner",src:t(3389).Z,width:"286",height:"244"})),(0,o.kt)("p",null,"This document describes the deployment of the (Knowledge) Agents KIT (=Keep It Together) depending on the role that the respective tenant/business partner has.\nIt also provides a runbook for deploying a minimal stable environment for testing purposes."),(0,o.kt)("p",null,"For more information see"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Our ",(0,o.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guideline"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"../development-view/architecture"},"Architecture")," documentation"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"agent_edc"},"EDC Deployment")," description"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"provider"},"(Data/Function) Provider Deployment")," description"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"bridge"},"AAS Bridge Deployment")," description"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"testbed"},"Conformity")," testbed"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"policy"},"Data Sovereignity & Graph Policy")," discussion")),(0,o.kt)("h2",{id:"motivation--deployment-roles"},"Motivation & Deployment Roles"),(0,o.kt)("p",null,"Knowledge Agents is a federated technology, so there is no central component setup to take into account.\nInstead, the Semantic Dataspace is formed by the individual business partners extending/configuring their\nconnectors and enabling their backend systems and/or datalakes. The deployment depends hereby on the\nrole that the business partner takes. The roles are described in more detail in our ",(0,o.kt)("a",{parentName:"p",href:"../adoption-view/intro"},"Adoption")," guideline."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(79294).Z},(0,o.kt)("img",{alt:"Dataspace Roles",src:t(47682).Z,width:"290",height:"400"}))),(0,o.kt)("h2",{id:"role-as-a-consumer"},"Role: As A Consumer"),(0,o.kt)("p",null,"As a consumer, you just need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable your ",(0,o.kt)("a",{parentName:"li",href:"agent_edc"},"dataspace connector")," to initiate/delegate the required Agent protocols (here: SparQL-over-Http)."),(0,o.kt)("li",{parentName:"ul"},"(optionally) mount your connector/matchmaking agent as a remote repository into your enterprise graph infrastructure.")),(0,o.kt)("h2",{id:"role-as-a-skill-provider"},"Role: As A Skill Provider"),(0,o.kt)("p",null,"As a skill provider, you need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable your ",(0,o.kt)("a",{parentName:"li",href:"agent_edc"},"dataspace connector"),"  to transfer/delegate the required Agent protocols."),(0,o.kt)("li",{parentName:"ul"},"(optionally) employ multiple data planes in case you want to expose hosted skills (skill assets that operate as stored procedures\nand which require computational resources at the provider side) instead of distributed skills (skill assets that are offered as query texts/files and which are executed at the consumer side).")),(0,o.kt)("h2",{id:"role-as-a-datafunction-provider"},"Role: As A (Data/Function) Provider"),(0,o.kt)("p",null,"As a provider, you need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable your ",(0,o.kt)("a",{parentName:"li",href:"agent_edc"},"dataspace connector")," to receive/internalize the required Agent protocols.")),(0,o.kt)("p",null,'Depending on the kind of provisioning, you will setup additional internal "agents" (endpoints).'),(0,o.kt)("h3",{id:"sub-role-as-a-data-provider"},"Sub-Role: As A Data Provider"),(0,o.kt)("p",null,"As a data provider, you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"provider"},"bind")," your data sources to knowledge graphs following the Catena-X ontology. Therefore, a provisioning agent\nshould be setup on top of a data virtualization/database layer.")),(0,o.kt)("h3",{id:"sub-role-as-a-function-provider"},"Sub-Role: As A Function Provider"),(0,o.kt)("p",null,"As a function provider, you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"provider"},"bind")," your API to a special knowledge graph structure. Therefore, a remoting agent should be setup.")),(0,o.kt)("h3",{id:"sub-role-as-a-twin-provider"},"Sub-Role: As A Twin Provider"),(0,o.kt)("p",null,"As a function provider, you want to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"bridge"},"bridge")," between the Knowledge Agent and Asset Administration Shell APIs.")),(0,o.kt)("h2",{id:"runbook-for-deploying-and-smoke-testing-knowledge-agents-stable"},"Runbook For Deploying and Smoke-Testing Knowledge Agents (Stable)"),(0,o.kt)("p",null,"Knowledge Agents on Stable is deployed on the following two tenants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App Provider 1 (BPNL000000000001)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Agent-Enabled Dataspace Connector",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In-Memory Hashicorp-Vault Control Plane "),(0,o.kt)("li",{parentName:"ul"},"Hashicorp-Vault Agent Data Plane"))),(0,o.kt)("li",{parentName:"ul"},"Provisioning Agent incl. Local Database"),(0,o.kt)("li",{parentName:"ul"},"Remoting Agent"))),(0,o.kt)("li",{parentName:"ul"},"App Consumer 4 (BPNL0000000005VV)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Agent-Enabled Dataspace Connector",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In-Memory Hashicorp-Vault Control Plane "),(0,o.kt)("li",{parentName:"ul"},"Hashicorp-Vault Agent Data Plane")))))),(0,o.kt)("h3",{id:"1-prepare-the-two-tenants"},"1. Prepare the Two Tenants"),(0,o.kt)("p",null,"As a first step, we installed two technical users for the dataspace connectors using the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.stable.demo.catena-x.net"},"https://portal.stable.demo.catena-x.net")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App Provider 1: sa4"),(0,o.kt)("li",{parentName:"ul"},"App Consumer 4: sa5")),(0,o.kt)("p",null,"The generated secrets have been installed under ",(0,o.kt)("a",{parentName:"p",href:"https://vault.demo.catena-x.net/ui/vault/secrets/knowledge"},"https://vault.demo.catena-x.net/ui/vault/secrets/knowledge")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"stable-provider-miw"),(0,o.kt)("li",{parentName:"ul"},"stable-consumer-miw")),(0,o.kt)("p",null,"Further secrets have been installed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"oem-cert"),(0,o.kt)("li",{parentName:"ul"},"oem-key"),(0,o.kt)("li",{parentName:"ul"},"oem-symmetric-key"),(0,o.kt)("li",{parentName:"ul"},"consumer-cert"),(0,o.kt)("li",{parentName:"ul"},"consumer-key"),(0,o.kt)("li",{parentName:"ul"},"consumer-symmetric-key")),(0,o.kt)("p",null,"Finally an access token has been generated."),(0,o.kt)("h3",{id:"2-deploy-agent-enabled-connectors"},"2. Deploy Agent-Enabled Connector's"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge"},"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge")," the following two applications have been installed."),(0,o.kt)("p",null,"We give the complete manifests but hide the secrets."),(0,o.kt)("h4",{id:"app-provider-1-datspace-connector-manifest"},"App Provider 1 Datspace Connector Manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'project: project-knowledge\nsource:\n  repoURL: \'https://eclipse-tractusx.github.io/charts/dev\'\n  targetRevision: 1.10.15\n  plugin:\n    env:\n      - name: HELM_VALUES\n        value: |\n          participant:\n            id: BPNL000000000001\n          nameOverride: agent-connector-provider\n          fullnameOverride: agent-connector-provider\n          vault: \n            hashicorp: \n              enabled: true\n              url: https://vault.demo.catena-x.net\n              token: ****\n              healthCheck:\n                enabled: false\n                standbyOk: true\n              paths:\n                secret: /v1/knowledge\n            secretNames:\n              transferProxyTokenSignerPrivateKey: oem-key\n              transferProxyTokenSignerPublicKey: oem-cert\n              transferProxyTokenEncryptionAesKey: oem-symmetric-key\n          controlplane:\n            securityContext: \n              readOnlyRootFilesystem: false\n            image: \n              pullPolicy: Always\n            ssi: \n              miw:\n                # -- MIW URL\n                url: "https://managed-identity-wallets-new.stable.demo.catena-x.net"\n                # -- The BPN of the issuer authority\n                authorityId: "BPNL00000003CRHK"\n              oauth:\n                # -- The URL (of KeyCloak), where access tokens can be obtained\n                tokenurl: "https://centralidp.stable.demo.catena-x.net/auth/realms/CX-Central/protocol/openid-connect/token"\n                client:\n                  # -- The client ID for KeyCloak\n                  id: "sa4"\n                  # -- The alias under which the client secret is stored in the vault.\n                  secretAlias: "stable-provider-miw"    \n            endpoints:  \n              management:\n                authKey: ****\n            ## Ingress declaration to expose the network service.\n            ingresses:\n              - enabled: true\n                # -- The hostname to be used to precisely map incoming traffic onto the underlying network service\n                hostname: "agent-provider-cp.stable.demo.catena-x.net"\n                # -- EDC endpoints exposed by this ingress resource\n                endpoints:\n                  - protocol\n                  - management\n                  - control\n                # -- Enables TLS on the ingress resource\n                tls:\n                  enabled: true\n          dataplanes:\n            dataplane:\n              securityContext: \n                readOnlyRootFilesystem: false\n              image: \n                pullPolicy: Always\n              configs: \n                dataspace.ttl: |-\n                  ################################################\n                  # Catena-X Agent Bootstrap\n                  ################################################\n                  @prefix : <GraphAsset?local=Dataspace> .\n                  @prefix cx: <https://raw.githubusercontent.com/catenax-ng/product-knowledge/main/ontology/cx_ontology.ttl#> .\n                  @prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n                  @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n                  @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n                  @prefix bpnl: <bpn:legal:> .\n                  @base <GraphAsset?local=Dataspace> .\n\n                  bpnl:BPNL000000000001 cx:hasBusinessPartnerNumber "BPNL000000000001"^^xsd:string;\n                                        cx:hasConnector <edcs://agent-provider-cp.stable.demo.catena-x.net>;\n                                        cx-common:hasConnector <edcs://agent-provider-cp.stable.demo.catena-x.net>.\n\n                  bpnl:BPNL0000000005VV cx:hasBusinessPartnerNumber "BPNL0000000005VV"^^xsd:string;\n                                        cx:hasConnector <edcs://agent-consumer-cp.stable.demo.catena-x.net>;\n                                        cx-common:hasConnector <edcs://agent-consumer-cp.stable.demo.catena-x.net>.\n              agent:\n                #synchronization: 360000\n                connectors:\n                  - https://agent-provider-cp.stable.demo.catena-x.net\n\n              ## Ingress declaration to expose the network service.\n              ingresses:\n                - enabled: true\n                  hostname: "agent-provider-dp.stable.demo.catena-x.net"\n                  # -- EDC endpoints exposed by this ingress resource\n                  endpoints:\n                    - public\n                    - default\n                    - control\n                    - callback\n                  # -- Enables TLS on the ingress resource\n                  tls:\n                    enabled: true\n  chart: agent-connector-memory\ndestination:\n  server: \'https://kubernetes.default.svc\'\n  namespace: product-knowledge\n')),(0,o.kt)("h4",{id:"app-consumer-4-datspace-connector-manifest"},"App Consumer 4 Datspace Connector Manifest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'project: project-knowledge\nsource:\n  repoURL: \'https://eclipse-tractusx.github.io/charts/dev\'\n  targetRevision: 1.10.15\n  plugin:\n    env:\n      - name: HELM_VALUES\n        value: |\n          participant:\n            id: BPNL0000000005VV\n          nameOverride: agent-connector-consumer\n          fullnameOverride: agent-connector-consumer\n          vault: \n            hashicorp: \n              enabled: true\n              url: https://vault.demo.catena-x.net\n              token: ****\n              healthCheck:\n                enabled: false\n                standbyOk: true\n              paths:\n                secret: /v1/knowledge\n            secretNames:\n              transferProxyTokenSignerPrivateKey: consumer-key\n              transferProxyTokenSignerPublicKey: consumer-cert\n              transferProxyTokenEncryptionAesKey: consumer-symmetric-key\n          controlplane:\n            securityContext: \n              readOnlyRootFilesystem: false\n            image: \n              pullPolicy: Always\n            ssi: \n              miw:\n                # -- MIW URL\n                url: "https://managed-identity-wallets-new.stable.demo.catena-x.net"\n                # -- The BPN of the issuer authority\n                authorityId: "BPNL00000003CRHK"\n              oauth:\n                # -- The URL (of KeyCloak), where access tokens can be obtained\n                tokenurl: "https://centralidp.stable.demo.catena-x.net/auth/realms/CX-Central/protocol/openid-connect/token"\n                client:\n                  # -- The client ID for KeyCloak\n                  id: "sa5"\n                  # -- The alias under which the client secret is stored in the vault.\n                  secretAlias: "stable-consumer-miw"    \n            endpoints:  \n              management:\n                authKey: ***\n            ## Ingress declaration to expose the network service.\n            ingresses:\n              - enabled: true\n                # -- The hostname to be used to precisely map incoming traffic onto the underlying network service\n                hostname: "agent-consumer-cp.stable.demo.catena-x.net"\n                # -- EDC endpoints exposed by this ingress resource\n                endpoints:\n                  - protocol\n                  - management\n                  - control\n                # -- Enables TLS on the ingress resource\n                tls:\n                  enabled: true\n          dataplanes:\n            dataplane:\n              securityContext: \n                readOnlyRootFilesystem: false\n              image: \n                pullPolicy: Always\n              configs: \n                dataspace.ttl: |-\n                  ################################################\n                  # Catena-X Agent Bootstrap\n                  ################################################\n                  @prefix : <GraphAsset?local=Dataspace> .\n                  @prefix cx: <https://raw.githubusercontent.com/catenax-ng/product-knowledge/main/ontology/cx_ontology.ttl#> .\n                  @prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n                  @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n                  @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n                  @prefix bpnl: <bpn:legal:> .\n                  @base <GraphAsset?local=Dataspace> .\n\n                  bpnl:BPNL000000000001 cx:hasBusinessPartnerNumber "BPNL000000000001"^^xsd:string;\n                                        cx:hasConnector <edcs://agent-provider-cp.stable.demo.catena-x.net>;\n                                        cx-common:hasConnector <edcs://agent-provider-cp.stable.demo.catena-x.net>.\n\n                  bpnl:BPNL0000000005VV cx:hasBusinessPartnerNumber "BPNL0000000005VV"^^xsd:string;\n                                        cx:hasConnector <edcs://agent-consumer-cp.stable.demo.catena-x.net>;\n                                        cx-common:hasConnector <edcs://agent-consumer-cp.stable.demo.catena-x.net>.\n              agent:\n                # synchronization: 360000\n                connectors:\n                  - https://agent-provider-cp.stable.demo.catena-x.net\n\n              ## Ingress declaration to expose the network service.\n              ingresses:\n                - enabled: true\n                  hostname: "agent-consumer-dp.stable.demo.catena-x.net"\n                  # -- EDC endpoints exposed by this ingress resource\n                  endpoints:\n                    - public\n                    - default\n                    - control\n                    - callback\n                  # -- Enables TLS on the ingress resource\n                  tls:\n                    enabled: true\n  chart: agent-connector-memory\ndestination:\n  server: \'https://kubernetes.default.svc\'\n  namespace: product-knowledge\n')),(0,o.kt)("h3",{id:"3-deploy-app-provider-1-provisioning-agent"},"3. Deploy App Provider 1 Provisioning Agent"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge"},"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge")," the following application has been installed."),(0,o.kt)("p",null,"For simplicity, the provisioning agent exposes a builtin sample H2 database as a graph and therefore needs to write the file system with its non-root account.\nTherefore, some of the following settings are specific to stable and will not be used under productive settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'project: project-knowledge\nsource:\n  repoURL: \'https://eclipse-tractusx.github.io/charts/dev\'\n  targetRevision: 1.10.15\n  plugin:\n    env:\n      - name: HELM_VALUES\n        value: |\n          securityContext:\n            readOnlyRootFilesystem: false\n            runAsUser: 999\n            runAsGroup: 999\n            runAsUser: 999\n          podSecurityContext:\n            runAsGroup: 999\n            fsGroup: 999\n          bindings:\n            dtc:\n              port: 8080\n              settings:\n                  jdbc.url: "jdbc:h2:file:/opt/ontop/database/db;INIT=RUNSCRIPT FROM \'/opt/ontop/data/dtc.sql\'"\n                  jdbc.driver: "org.h2.Driver"\n                  ontop.cardinalityMode: "LOOSE"\n              mapping: |\n                [PrefixDeclaration]\n                cx-common:          https://w3id.org/catenax/ontology/common#\n                cx-core:            https://w3id.org/catenax/ontology/core#\n                cx-vehicle:         https://w3id.org/catenax/ontology/vehicle#\n                cx-reliability:     https://w3id.org/catenax/ontology/reliability#\n                uuid:               urn:uuid:\n                bpnl:               bpn:legal:\n                owl:                http://www.w3.org/2002/07/owl#\n                rdf:                http://www.w3.org/1999/02/22-rdf-syntax-ns#\n                xml:                http://www.w3.org/XML/1998/namespace\n                xsd:                http://www.w3.org/2001/XMLSchema#\n                json:               https://json-schema.org/draft/2020-12/schema#\n                obda:               https://w3id.org/obda/vocabulary#\n                rdfs:               http://www.w3.org/2000/01/rdf-schema#\n                oem:                urn:oem:\n                \n                [MappingDeclaration] @collection [[\n                  mappingId dtc-meta\n                  target    bpnl:{bpnl} rdf:type cx-common:BusinessPartner ; cx-core:id {bpnl}^^xsd:string . \n                  source    SELECT distinct "bpnl" FROM "dtc"."meta"\n                  \n                  mappingId dtc-content\n                  target    oem:Analysis/{id} rdf:type cx-reliability:Analysis ; cx-core:id {code}^^xsd:string ; cx-core:name {description}^^xsd:string .\n                  source    SELECT * FROM "dtc"."content"\n                  \n                  mappingId dtc-part\n                  target    oem:Part/{entityGuid} rdf:type cx-vehicle:Part ; cx-core:id {enDenomination}^^xsd:string ; cx-core:name {classification}^^xsd:string .\n                  source    SELECT * FROM "dtc"."part"\n                  \n                  mappingId dtc-meta-part\n                  target    oem:Part/{entityGuid} cx-vehicle:manufacturer bpnl:{bpnl}. \n                  source    SELECT "bpnl","entityGuid" FROM "dtc"."part"\n                  \n                  mappingId dtc-part-content\n                  target    oem:Analysis/{dtc_id} cx-reliability:analysedObject oem:Part/{part_entityGuid}. \n                  source    SELECT "part_entityGuid","dtc_id" FROM "dtc"."content_part"\n                  \n                ]]\n  chart: provisioning-agent\ndestination:\n  server: \'https://kubernetes.default.svc\'\n  namespace: product-knowledge\n')),(0,o.kt)("h3",{id:"4-deploy-app-provider-1-remoting-agent"},"4. Deploy App Provider 1 Remoting Agent"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge"},"https://argo.stable.demo.catena-x.net/settings/projects/project-knowledge")," the following application has been installed."),(0,o.kt)("p",null,"For simplicity, the remoting agent exposes a simply public API as a graph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'project: project-knowledge\nsource:\n  repoURL: \'https://eclipse-tractusx.github.io/charts/dev\'\n  targetRevision: 1.10.15\n  plugin:\n    env:\n      - name: HELM_VALUES\n        value: |\n          image:\n            pullPolicy: Always\n          repositories:\n            prognosis: |\n              #\n              # Rdf4j configuration for prognosis remoting\n              #\n              @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n              @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n              @prefix rep: <http://www.openrdf.org/config/repository#>.\n              @prefix sr: <http://www.openrdf.org/config/repository/sail#>.\n              @prefix sail: <http://www.openrdf.org/config/sail#>.\n              @prefix sp: <http://spinrdf.org/sp#>.\n              @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n              @prefix json: <https://json-schema.org/draft/2020-12/schema#> .\n              @prefix dcterms: <http://purl.org/dc/terms/> .\n              @prefix cx-fx: <https://w3id.org/catenax/ontology/function#>.\n              @prefix cx-common: <https://w3id.org/catenax/ontology/common#>.\n              @prefix cx-prognosis: <https://w3id.org/catenax/ontology/prognosis#>.\n              @prefix cx-rt: <https://w3id.org/catenax/ontology/remoting#>.\n\n              [] rdf:type rep:Repository ;\n                rep:repositoryID "prognosis" ;\n                rdfs:label "Prognosis Functions" ;\n                rep:repositoryImpl [\n                    rep:repositoryType "openrdf:SailRepository" ;\n                    sr:sailImpl [\n                      sail:sailType "org.eclipse.tractusx.agents:Remoting" ;\n                      cx-fx:callbackAddress <http://localhost:8888/callback>;\n                      cx-fx:supportsInvocation cx-prognosis:Prognosis;\n                    ]\n                ].\n\n              cx-prognosis:Prognosis rdf:type cx-fx:Function;\n                dcterms:description "Prognosis is a sample simulation function with input and output bindings."@en ;\n                dcterms:title "Prognosis" ;\n                cx-fx:targetUri "https://api.agify.io";\n                cx-fx:input cx-prognosis:name;\n                cx-fx:result cx-prognosis:hasResult.\n\n              cx-prognosis:hasResult rdf:type cx-fx:Result;\n                cx-fx:output cx-prognosis:prediction;\n                cx-fx:output cx-prognosis:support.\n\n              cx-prognosis:name rdf:type cx-fx:Argument;\n                dcterms:description "Name is an argument to the Prognosis function."@en ;\n                dcterms:title "Name";\n                cx-fx:argumentName "name".\n\n              cx-prognosis:prediction rdf:type cx-fx:ReturnValue;\n                dcterms:description "Prediction (Value) is an integer-based output of the Prognosis function."@en ;\n                dcterms:title "Prediction" ;\n                cx-fx:valuePath "age";\n                cx-fx:dataType xsd:int.\n\n              cx-prognosis:support rdf:type cx-fx:ReturnValue;\n                dcterms:description "Support (Value) is another integer-based output of the Prognosis function."@en ;\n                dcterms:title "Support" ;\n                cx-fx:valuePath "count";\n                cx-fx:dataType xsd:int.\n  chart: remoting-agent\ndestination:\n  server: \'https://kubernetes.default.svc\'\n  namespace: product-knowledge\n')),(0,o.kt)("h3",{id:"5-perform-smoke-tests"},"5. Perform Smoke Tests"),(0,o.kt)("p",null,"We provide a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/catena-x/workspace/catena-x-knowledge-agents/folder/2757771-f11c5dda-cc04-444f-b38b-3deb3c098478?action=share&creator=2757771&ctx=documentation&active-environment=2757771-31115ff3-61d7-4ad6-8310-1e50290a1c3a"},"Postman collection")," and a corresponding ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/catena-x/workspace/catena-x-knowledge-agents/environment/2757771-31115ff3-61d7-4ad6-8310-1e50290a1c3a?action=share&creator=2757771&active-environment=2757771-3a7489c5-7540-470b-8e44-04610511d9a9"},"environment")),(0,o.kt)("p",null,"It consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query Provider Agent (Internally)"),(0,o.kt)("li",{parentName:"ul"},"Query Provider Agent (Internally from Agent Plane)"),(0,o.kt)("li",{parentName:"ul"},"Query Remoting Agent (Internally)"),(0,o.kt)("li",{parentName:"ul"},"Query Remoting Agent (Internally from Agent Plane)"),(0,o.kt)("li",{parentName:"ul"},"Create Graph Policy (Provider)"),(0,o.kt)("li",{parentName:"ul"},"Create Graph Contract (Provider)"),(0,o.kt)("li",{parentName:"ul"},"Create Data Graph Asset (Provider)"),(0,o.kt)("li",{parentName:"ul"},"Create Function Graph Asset (Provider)"),(0,o.kt)("li",{parentName:"ul"},"Show Own Catalogue (Provider)"),(0,o.kt)("li",{parentName:"ul"},"Show Remote Catalogue (Consumer)"),(0,o.kt)("li",{parentName:"ul"},"Query Data Graph Asset (Consumer)"),(0,o.kt)("li",{parentName:"ul"},"Query Function Graph Asset (Consumer)")),(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(C) 2021,2023 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}d.isMDXComponent=!0},79294:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/dataspace_roles-2722058d268f2f7b0bd9ae311119e300.png"},3389:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/AgentsKit-Icon-d790626da1d452d4369dd7cf814b7dfe.png"},47682:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/dataspace_roles_small-a89af4be34c4336543301064c9483f79.png"}}]);