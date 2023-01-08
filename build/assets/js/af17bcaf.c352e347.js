"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o=n.p+"assets/images/CSS Units-2b946a1a1373c6d409eb40e1067a2555.png",l={sidebar_position:2},s="CSS",r={unversionedId:"Front End/Basics/css-basics",id:"Front End/Basics/css-basics",title:"CSS",description:"While HTML is the specific elements on a webpage, CSS determines how those elements visually appear. This is how you make a website look gorgeous. This files have the extension .css",source:"@site/docs/Front End/Basics/css-basics.md",sourceDirName:"Front End/Basics",slug:"/Front End/Basics/css-basics",permalink:"/docs/Front End/Basics/css-basics",draft:!1,editUrl:"https://github.com/Boston343/web-dev-docs/docs/Front End/Basics/css-basics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/docs/Front End/Basics/html-basics"},next:{title:"CSS-Flexbox",permalink:"/docs/Front End/Basics/css-flexbox"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"Classes",id:"classes",level:2},{value:"Pseudo Classes",id:"pseudo-classes",level:2},{value:"Favicon",id:"favicon",level:2},{value:"Box Design",id:"box-design",level:2},{value:"Display Elements",id:"display-elements",level:2},{value:"Block Elements",id:"block-elements",level:3},{value:"Inline Elements",id:"inline-elements",level:3},{value:"Inline Block",id:"inline-block",level:3},{value:"Visibility of Elements",id:"visibility-of-elements",level:2},{value:"Position",id:"position",level:2},{value:"Static",id:"static",level:3},{value:"Relative",id:"relative",level:3},{value:"Absolute",id:"absolute",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Centering",id:"centering",level:3},{value:"Fonts",id:"fonts",level:2},{value:"Font Design Rules",id:"font-design-rules",level:3},{value:"Font Size",id:"font-size",level:3},{value:"CSS Units",id:"css-units",level:2},{value:"Float",id:"float",level:2},{value:"Clear",id:"clear",level:3},{value:"Buttons",id:"buttons",level:2},{value:"Box Sizing",id:"box-sizing",level:2},{value:"Media Queries",id:"media-queries",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css"},"CSS"),(0,a.kt)("p",null,"While HTML is the specific elements on a webpage, CSS determines how those elements visually appear. This is how you make a website look ",(0,a.kt)("strong",{parentName:"p"},"gorgeous"),". This files have the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".css")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Good documentation on CSS can be found here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"},"CSS MDN Docs")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties are things like ",(0,a.kt)("inlineCode",{parentName:"p"},"background-color")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"border")," and define properties of a specific element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Change the background color of every img"',title:'"Change',the:!0,background:!0,color:!0,of:!0,every:!0,'img"':!0},"img {\n  background-color: blue;\n}\n")),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("p",null,"In HTML you can define classes like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<p class="main-paragraph">This is a paragraph with "main-paragraph" class</p>\n')),(0,a.kt)("p",null,"Then in CSS you can change what the class does like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".paragraph-class {\n  background-color: blue;\n}\n")),(0,a.kt)("h2",{id:"pseudo-classes"},"Pseudo Classes"),(0,a.kt)("p",null,"These look like ",(0,a.kt)("inlineCode",{parentName:"p"},":hover")," and would be used like ",(0,a.kt)("inlineCode",{parentName:"p"},"img:hover")," and define properties under specific circumstances outlined by the pseudo-class. Hover determines what happens when a users mouse hovers over an item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:hover"},"MDN Docs on :hover"))),(0,a.kt)("p",null,"A few other useful pseudo classes include ",(0,a.kt)("inlineCode",{parentName:"p"},":hover")," ",(0,a.kt)("inlineCode",{parentName:"p"},":link")," ",(0,a.kt)("inlineCode",{parentName:"p"},":viewed")," ",(0,a.kt)("inlineCode",{parentName:"p"},":empty")," ",(0,a.kt)("inlineCode",{parentName:"p"},":in-range")),(0,a.kt)("h2",{id:"favicon"},"Favicon"),(0,a.kt)("p",null,"The little image next to a website title is called a ",(0,a.kt)("strong",{parentName:"p"},"favicon"),". It can be up to 64x64. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.geeksforgeeks.org/what-is-favicon-and-what-is-the-size-of-it-in-html/"},"What is a favicon"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use (",(0,a.kt)("a",{parentName:"p",href:"https://favicon.io/"},"https://favicon.io/"),") to generate a favicon from an image.")),(0,a.kt)("h2",{id:"box-design"},"Box Design"),(0,a.kt)("p",null,"With CSS, elements have a box around them which includes the content, then padding, border, and margin. You can view these by opening up the developer tools with ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + I"),"."),(0,a.kt)("h2",{id:"display-elements"},"Display Elements"),(0,a.kt)("h3",{id:"block-elements"},"Block Elements"),(0,a.kt)("p",null,"Block elements take up an entire row."),(0,a.kt)("p",null,"Ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"p, h1-h6, div, ol, ul, li, form")),(0,a.kt)("h3",{id:"inline-elements"},"Inline Elements"),(0,a.kt)("p",null,"Inline elements take up only as much space as they need to."),(0,a.kt)("p",null,"Ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"span, img, a (anchor)")),(0,a.kt)("h3",{id:"inline-block"},"Inline Block"),(0,a.kt)("p",null,"Inline Block elements give the best of both worlds. You can set this like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  display: inline-block;\n}\n")),(0,a.kt)("h2",{id:"visibility-of-elements"},"Visibility of Elements"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"visibility: hidden;")," leaves the element posititoning there, but hides the element otherwise."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"display: none;")," basically deletes the element."),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("h3",{id:"static"},"Static"),(0,a.kt)("p",null,'How it displays just from HTML "normally"'),(0,a.kt)("h3",{id:"relative"},"Relative"),(0,a.kt)("p",null,"Position element selected relative to how it would be positioned static. Doesn't push any other elements."),(0,a.kt)("p",null,'This effectively leaves a "ghost" element from where it was originally placed.'),(0,a.kt)("p",null,"Set with ",(0,a.kt)("inlineCode",{parentName:"p"},"position: relative;")),(0,a.kt)("p",null,"Coordinates determine how to move an element. Top, bottom, left, or right."),(0,a.kt)("p",null,"Ex.\n",(0,a.kt)("inlineCode",{parentName:"p"},"left: 60px;")," moves the element 60px FROM the left edge of where it was previously at."),(0,a.kt)("h3",{id:"absolute"},"Absolute"),(0,a.kt)("p",null,"Positions element relative to its ",(0,a.kt)("strong",{parentName:"p"},"PARENT"),". Set with ",(0,a.kt)("inlineCode",{parentName:"p"},"position: absolute;"),". Must set parent to ",(0,a.kt)("inlineCode",{parentName:"p"},"position: relative;")),(0,a.kt)("p",null,"Ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"right: 60px")," moves the element 60px from the right edge of its ",(0,a.kt)("strong",{parentName:"p"},"PARENT"),"."),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("p",null,"Position of element is relative to webpage. So if you scroll it remains in the same spot on your screen. This is useful for a nav bar or side bar that you always want visible."),(0,a.kt)("h3",{id:"centering"},"Centering"),(0,a.kt)("p",null,"Inside parent, can set ",(0,a.kt)("inlineCode",{parentName:"p"},"text-align: center;"),". This works for inline, and block elements, but not inline-block elements or modified width block elements. Inside element, can do ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: auto;")," to get around this issue."),(0,a.kt)("p",null,"Looks like ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: 'top' 'right' 'bottom' 'left'")," so if you want to center horizontally but not vertically, use ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: 0 auto 0 auto;"),". Shorthand version of this is ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: 0 auto;")),(0,a.kt)("h2",{id:"fonts"},"Fonts"),(0,a.kt)("p",null,"Common free method is to use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://fonts.google.com/"},"Google Fonts"))),(0,a.kt)("h3",{id:"font-design-rules"},"Font Design Rules"),(0,a.kt)("p",null,"Some good font design rules to follow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use similar moods"),(0,a.kt)("li",{parentName:"ul"},"Use similar time era, don't mix traditional with modern"),(0,a.kt)("li",{parentName:"ul"},"Contrast serif-ness. Like using a serif font for heading and a sans-serif font for body"),(0,a.kt)("li",{parentName:"ul"},"Can create interest by just varying the weights, like making headers much bolder")),(0,a.kt)("h3",{id:"font-size"},"Font Size"),(0,a.kt)("p",null,"Sizing in CSS can be difficult. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"px")," is not dynamic, but percentages of ",(0,a.kt)("inlineCode",{parentName:"p"},"em")," are. 100% = 1em = 16px"),(0,a.kt)("p",null,"Percentages and ",(0,a.kt)("inlineCode",{parentName:"p"},"em")," inherets from parent. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"rem")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"em")," allows you to ignore all parent settings. It's generally better."),(0,a.kt)("h2",{id:"css-units"},"CSS Units"),(0,a.kt)("img",{src:o,alt:"CSS Units",style:{width:600}}),(0,a.kt)("h2",{id:"float"},"Float"),(0,a.kt)("p",null,"To make text float around an image, in the image set ",(0,a.kt)("inlineCode",{parentName:"p"},"float: left;")," or another side."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Only use ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," when necessary. There are many edge cases.")),(0,a.kt)("h3",{id:"clear"},"Clear"),(0,a.kt)("p",null,"To prevent an element from following the float, use ",(0,a.kt)("inlineCode",{parentName:"p"},"clear: left;")," or another side to cause it to not float for objects on that side."),(0,a.kt)("h2",{id:"buttons"},"Buttons"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://css3buttongenerator.com/"},"Button Generator!")),(0,a.kt)("h2",{id:"box-sizing"},"Box Sizing"),(0,a.kt)("p",null,"Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"box-sizing: border-box;")," tells browser to take into account any border and padding into element's width and height. This is generally preferred."),(0,a.kt)("p",null,"Ex. If you set element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width."),(0,a.kt)("h2",{id:"media-queries"},"Media Queries"),(0,a.kt)("p",null,"At the heart of responsive design is media queries. These allow you to change how a webpage displays depending on screen dimensions."),(0,a.kt)("p",null,"Example media queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".example-media-queries {\n  @media (min-width: 320px) {\n    /* smartphones, iPhone, portrait 480x320 phones */\n  }\n  @media (min-width: 481px) {\n    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n  }\n  @media (min-width: 641px) {\n    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n  }\n  @media (min-width: 961px) {\n    /* tablet, landscape iPad, lo-res laptops ands desktops */\n  }\n  @media (min-width: 1025px) {\n    /* big landscape tablets, laptops, and desktops */\n  }\n  @media (min-width: 1281px) {\n    /* hi-res laptops and desktops */\n  }\n}\n")))}c.isMDXComponent=!0}}]);