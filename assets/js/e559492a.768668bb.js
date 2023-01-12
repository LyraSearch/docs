"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[8020],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="Extending Lyra",s={unversionedId:"internals/extending-lyra",id:"version-v0.3.1/internals/extending-lyra",title:"Extending Lyra",description:"Extending Lyra has just become easier than ever. Starting from v0.3.0, Lyra",source:"@site/versioned_docs/version-v0.3.1/06-internals/extending-lyra.md",sourceDirName:"06-internals",slug:"/internals/extending-lyra",permalink:"/v0.3.1/internals/extending-lyra",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/versioned_docs/version-v0.3.1/06-internals/extending-lyra.md",tags:[],version:"v0.3.1",frontMatter:{},sidebar:"main",previous:{title:"Internals",permalink:"/v0.3.1/category/internals"}},l={},c=[{value:"<code>formatNanoseconds</code>",id:"formatnanoseconds",level:3},{value:"<code>getNanosecondsTime</code>",id:"getnanosecondstime",level:3},{value:"<code>intersectTokenScores</code>",id:"intersecttokenscores",level:3},{value:"<code>includes</code>",id:"includes",level:3},{value:"<code>boundedLevenshtein</code>",id:"boundedlevenshtein",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extending-lyra"},"Extending Lyra"),(0,a.kt)("p",null,"Extending Lyra has just become easier than ever. Starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0"),", Lyra\nexposes some of its internals:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  boundedLevenshtein,\n  formatNanoseconds,\n  getNanosecondsTime,\n  includes,\n  intersectTokenScores,\n  tokenize,\n} from "@lyrasearch/lyra/dist/esm/internals";\n')),(0,a.kt)("p",null,"Every exposed method comes with its own type definition."),(0,a.kt)("p",null,"Let's break them down:"),(0,a.kt)("h3",{id:"formatnanoseconds"},(0,a.kt)("inlineCode",{parentName:"h3"},"formatNanoseconds")),(0,a.kt)("p",null,"Takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInt")," as input and returns a human-readable ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { formatNanoseconds } from "@lyrasearch/lyra/dist/esm/internals";\n\nformatNanoseconds(30000n); // "30\u03bcs"\n')),(0,a.kt)("h3",{id:"getnanosecondstime"},(0,a.kt)("inlineCode",{parentName:"h3"},"getNanosecondsTime")),(0,a.kt)("p",null,"Gets the current time with nanoseconds-precision. Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInt"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { getNanosecondsTime } from "@lyrasearch/lyra/dist/esm/internals";\n\ngetNanosecondsTime(); // 1363500821581208n\n')),(0,a.kt)("h3",{id:"intersecttokenscores"},(0,a.kt)("inlineCode",{parentName:"h3"},"intersectTokenScores")),(0,a.kt)("p",null,"Returns the intersection of ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," arrays."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { intersectTokenScores } from "@lyrasearch/lyra/dist/esm/internals";\n\nintersectTokenScores([\n  [\n    ["foo", 1],\n    ["bar", 1],\n    ["baz", 2],\n  ],\n  [\n    ["foo", 4],\n    ["quick", 10],\n    ["brown", 3],\n    ["bar", 2],\n  ],\n  [\n    ["fox", 12],\n    ["foo", 4],\n    ["jumps", 3],\n    ["bar", 6],\n  ],\n]);\n\n// Result: [["foo", 9], ["bar", 9]]\n')),(0,a.kt)("h3",{id:"includes"},(0,a.kt)("inlineCode",{parentName:"h3"},"includes")),(0,a.kt)("p",null,"faster alternative to ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.includes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { includes } from "@lyrasearch/lyra/dist/esm/internals";\n\nincludes([10, 20, 30], 10); // true\n')),(0,a.kt)("h3",{id:"boundedlevenshtein"},(0,a.kt)("inlineCode",{parentName:"h3"},"boundedLevenshtein")),(0,a.kt)("p",null,"Computes the Levenshtein distance between two strings ",(0,a.kt)("inlineCode",{parentName:"p"},"(a, b)"),", returning early\nwith -1 if the distance is greater than the given tolerance. It assumes that\n",(0,a.kt)("inlineCode",{parentName:"p"},"tolerance >= ||a| - |b|| >= 0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { boundedLevenshtein } from "@lyrasearch/lyra/dist/esm/internals";\n\nboundedLevenshtein("moon", "lions", 3); // { isBounded: true, distance: 3 }\n')))}p.isMDXComponent=!0}}]);