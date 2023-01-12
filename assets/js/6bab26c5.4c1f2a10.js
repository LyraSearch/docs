"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[5948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Delete data",s={unversionedId:"usage/delete-data",id:"usage/delete-data",title:"Delete data",description:"Deletion is one of the easiest things to do in Lyra. Let's say we have the",source:"@site/docs/03-usage/04-delete-data.md",sourceDirName:"03-usage",slug:"/usage/delete-data",permalink:"/usage/delete-data",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/03-usage/04-delete-data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"main",previous:{title:"Search",permalink:"/usage/search"},next:{title:"Plugins",permalink:"/plugins/"}},l={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-data"},"Delete data"),(0,a.kt)("p",null,"Deletion is one of the easiest things to do in Lyra. Let's say we have the\nfollowing database with the following inserted documents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { create, insert, remove, search } from "@lyrasearch/lyra";\n\nconst movieDB = await create({\n  schema: {\n    title: "string",\n    director: "string",\n    plot: "string",\n    year: "number",\n    isFavorite: "boolean",\n  },\n});\n\nconst { id: thePrestige } = await insert(movieDB, {\n  title: "The prestige",\n  director: "Christopher Nolan",\n  plot:\n    "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",\n  year: 2006,\n  isFavorite: true,\n});\n\nconst { id: bigFish } = await insert(movieDB, {\n  title: "Big Fish",\n  director: "Tim Burton",\n  plot:\n    "Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.",\n  year: 2004,\n  isFavorite: true,\n});\n\nconst { id: harryPotter } = await insert(movieDB, {\n  title: "Harry Potter and the Philosopher\'s Stone",\n  director: "Chris Columbus",\n  plot:\n    "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",\n  year: 2001,\n  isFavorite: false,\n});\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice that we are also importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove")," method.")),(0,a.kt)("p",null,"To delete a single document from the database we use the:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"await remove(movieDB, harryPotter);\n")),(0,a.kt)("p",null,"As simple as that."))}p.isMDXComponent=!0}}]);