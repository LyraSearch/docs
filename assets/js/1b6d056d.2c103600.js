"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[2836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={description:"The plugin-parsedoc plugin allows Lyra to parse and create indexes from HTML and Markdown documents automatically."},r="Parsedoc plugin",o={unversionedId:"plugins/parsedoc-plugin",id:"plugins/parsedoc-plugin",title:"Parsedoc plugin",description:"The plugin-parsedoc plugin allows Lyra to parse and create indexes from HTML and Markdown documents automatically.",source:"@site/docs/04-plugins/02-parsedoc-plugin.md",sourceDirName:"04-plugins",slug:"/plugins/parsedoc-plugin",permalink:"/plugins/parsedoc-plugin",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/04-plugins/02-parsedoc-plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"The plugin-parsedoc plugin allows Lyra to parse and create indexes from HTML and Markdown documents automatically."},sidebar:"main",previous:{title:"Data persistence plugin",permalink:"/plugins/data-persistence-plugin"},next:{title:"Match highlight plugin",permalink:"/plugins/match-highlight-plugin"}},p={},s=[{value:'Installation <a href="#installation" id="installation"></a>',id:"installation-",level:2},{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:'<code>populateFromGlob</code>\u200b <a href="#populatefromglob" id="populatefromglob"></a>',id:"populatefromglob-",level:4},{value:'<code>populate</code>\u200b <a href="#populate" id="populate"></a>',id:"populate-",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parsedoc-plugin"},"Parsedoc plugin"),(0,i.kt)("h3",{className:"plugin-description"},l.description),(0,i.kt)("h2",{id:"installation-"},"Installation ",(0,i.kt)("a",{href:"#installation",id:"installation"})),(0,i.kt)("p",null,"You can install the plugin using any major Node.js/Bun package manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using npm"',title:'"Using','npm"':!0},"npm install --save @lyrasearch/plugin-parsedoc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using pnpm"',title:'"Using','pnpm"':!0},"pnpm add @lyrasearch/plugin-parsedoc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using yarn"',title:'"Using','yarn"':!0},"yarn add @lyrasearch/plugin-parsedoc\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Plugin usage depends on the runtime that you are using, even though the goal is to expose the exact same APIs for browsers, Deno, and all the other JavaScript engines."),(0,i.kt)("p",null,"The plugin exports ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultHtmlSchema")," which will be the schema used in the index. Providing a glob pattern to the files containing the documents will index them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { create, insert } from "@lyrasearch/lyra";\nimport { populateFromGlob, defaultHtmlSchema } from "@lyrasearch/plugin-parsedoc";\n\nconst db = await create({\n  schema: defaultHtmlSchema,\n});\n\nawait populateFromGlob(db, "docs/**/*.html");\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h4",{id:"populatefromglob-"},(0,i.kt)("inlineCode",{parentName:"h4"},"populateFromGlob"),(0,i.kt)("a",{parentName:"h4",href:"https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populatefromglob"},"\u200b")," ",(0,i.kt)("a",{href:"#populatefromglob",id:"populatefromglob"})),(0,i.kt)("p",null,"An asynchronous function that takes three arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),": the database to populate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globPath"),": a string representing a glob path to reading the files from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": an object containing the following properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transformFn")," (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mergeStrategy")," (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"merge"),". Accepted values are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge"),": consecutive chunks with the same tag will be merged into one document for the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"split"),": consecutive chunks with the same tag will be split into separate documents for the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"both"),": consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index.")))))),(0,i.kt)("h4",{id:"populate-"},(0,i.kt)("inlineCode",{parentName:"h4"},"populate"),(0,i.kt)("a",{parentName:"h4",href:"https://deploy-preview-8--lyra-docs.netlify.app/plugins/plugin-parsedoc#populate"},"\u200b")," ",(0,i.kt)("a",{href:"#populate",id:"populate"})),(0,i.kt)("p",null,"A function that takes three arguments. Should be used internally by ",(0,i.kt)("inlineCode",{parentName:"p"},"populateFromGlob"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db"),": the database to populate. Should use Lyra's native ",(0,i.kt)("inlineCode",{parentName:"li"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"insertBatch")," methods internally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": raw HTML/Markdown string or Buffer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fileType"),": a string representing the file type. Accepted values are ",(0,i.kt)("inlineCode",{parentName:"li"},"html")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"md"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": an object containing the following properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transformFn")," (optional): a function that passes an object as its only argument. It contains the raw HTML/Markdown chunk, tag name, parsed content and html attributes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mergeStrategy")," (optional): a value that defines how to handle consecutive chunks of the same tag. The default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"merge"),". Accepted values are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge"),": consecutive chunks with the same tag will be merged into one document for the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"split"),": consecutive chunks with the same tag will be split into separate documents for the index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"both"),": consecutive chunks with the same tag will be split into separate documents for the index, and also merged into one document for the index."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basePath")," (optional): a string representing the base path of the file. This is used to generate the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," field in the index")))))}c.isMDXComponent=!0}}]);