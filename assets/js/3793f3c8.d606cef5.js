"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=h(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,m=c["".concat(o,".").concat(u)]||c[u]||g[u]||r;return n?i.createElement(m,l(l({ref:t},p),{},{components:n})):i.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var h={};for(var o in t)hasOwnProperty.call(t,o)&&(h[o]=t[o]);h.originalType=e,h[c]="string"==typeof e?e:a,l[1]=h;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>h,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={description:"The plugin-match-highlight plugin allows Lyra to keep track of all token positions on each property of each document."},l="Match highlight plugin",h={unversionedId:"plugins/match-highlight-plugin",id:"plugins/match-highlight-plugin",title:"Match highlight plugin",description:"The plugin-match-highlight plugin allows Lyra to keep track of all token positions on each property of each document.",source:"@site/docs/04-plugins/03-match-highlight-plugin.md",sourceDirName:"04-plugins",slug:"/plugins/match-highlight-plugin",permalink:"/plugins/match-highlight-plugin",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/04-plugins/03-match-highlight-plugin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"The plugin-match-highlight plugin allows Lyra to keep track of all token positions on each property of each document."},sidebar:"main",previous:{title:"Parsedoc plugin",permalink:"/plugins/parsedoc-plugin"},next:{title:"Astro plugin",permalink:"/plugins/astro-plugin"}},o={},s=[{value:'Installation <a href="#installation" id="installation"></a>',id:"installation-",level:2},{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:'<code>searchWithHighlight</code> \u200b <a href="#searchwithhighlight" id="searchwithhighlight"></a>',id:"searchwithhighlight--",level:4}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"match-highlight-plugin"},"Match highlight plugin"),(0,a.kt)("h3",{className:"plugin-description"},r.description),(0,a.kt)("h2",{id:"installation-"},"Installation ",(0,a.kt)("a",{href:"#installation",id:"installation"})),(0,a.kt)("p",null,"You can install the plugin using any major Node.js/Bun package manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using npm"',title:'"Using','npm"':!0},"npm install --save @lyrasearch/plugin-match-highlight\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using yarn"',title:'"Using','yarn"':!0},"yarn add @lyrasearch/plugin-match-highlight\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using pnpm"',title:'"Using','pnpm"':!0},"pnpm add @lyrasearch/plugin-match-highlight\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Plugin usage depends on the runtime that you are using, even though the goal is\nto expose the exact same APIs for browsers, Deno, and all the other JavaScript\nengines."),(0,a.kt)("p",null,"The plugin exports ",(0,a.kt)("inlineCode",{parentName:"p"},"afterInsertHook"),", which will be the hook used by Lyra to add\npositions, and ",(0,a.kt)("inlineCode",{parentName:"p"},"searchWithHighlight")," which wraps the original Lyra's ",(0,a.kt)("inlineCode",{parentName:"p"},"search"),"\nfunction to return positions alongside docs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { afterInsert, LyraWithHighlight, searchWithHighlight } from "../src";\n\nconst schema = {\n  text: "string",\n} as const;\n\nconst db = await create({\n  schema,\n  hooks: { afterInsert },\n}) as LyraWithHighlight<typeof schema>;\n\ninsertWithHooks(db, { text: "hello world" });\n\nconst results = searchWithHighlight(db, "hello");\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h4",{id:"searchwithhighlight--"},(0,a.kt)("inlineCode",{parentName:"h4"},"searchWithHighlight")," ",(0,a.kt)("a",{parentName:"h4",href:"https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-match-highlight#searchwithhighlight"},"\u200b")," ",(0,a.kt)("a",{href:"#searchwithhighlight",id:"searchwithhighlight"})),(0,a.kt)("p",null,"A function that takes the same arguments as the original ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," function, and\nreturns the document with positions for each token on each property matching the\nquery."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  {\n    positions: {\n      text: {\n        hello: [{\n          start: 0,\n          length: 5\n        }]\n      }\n    }\n  },\n  ...\n]\n")))}c.isMDXComponent=!0}}]);