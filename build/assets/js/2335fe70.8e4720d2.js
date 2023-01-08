"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="UI Libraries",l={unversionedId:"Front End/Advanced/ui-libraries",id:"Front End/Advanced/ui-libraries",title:"UI Libraries",description:"Three of the most popular UI libraries are Material UI (MUI), Bootstrap, and Tailwind CSS. They can speed up the development of your UI by using various classes and components.",source:"@site/docs/Front End/Advanced/ui-libraries.md",sourceDirName:"Front End/Advanced",slug:"/Front End/Advanced/ui-libraries",permalink:"/docs/Front End/Advanced/ui-libraries",draft:!1,editUrl:"https://github.com/Boston343/web-dev-docs/docs/Front End/Advanced/ui-libraries.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/docs/Front End/Advanced/next"},next:{title:"Back End Web Design",permalink:"/docs/category/back-end-web-design"}},s={},c=[{value:"Material UI",id:"material-ui",level:2},{value:"MUI Installation",id:"mui-installation",level:3},{value:"MUI Core",id:"mui-core",level:4},{value:"MUI Icons",id:"mui-icons",level:4},{value:"MUI Colors",id:"mui-colors",level:3},{value:"MUI Theme",id:"mui-theme",level:3},{value:"Material Icons Usage",id:"material-icons-usage",level:3},{value:"Bootstrap",id:"bootstrap",level:2},{value:"Bootstrap Installation",id:"bootstrap-installation",level:3},{value:"Tailwind CSS",id:"tailwind-css",level:2},{value:"Tailwind vs Bootstrap",id:"tailwind-vs-bootstrap",level:3},{value:"React Icons",id:"react-icons",level:2},{value:"React Icons Installation",id:"react-icons-installation",level:3},{value:"React Icons Usage",id:"react-icons-usage",level:3},{value:"Resizing React Icons",id:"resizing-react-icons",level:3},{value:"Font Awesome",id:"font-awesome",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ui-libraries"},"UI Libraries"),(0,r.kt)("p",null,"Three of the most popular UI libraries are Material UI (MUI), Bootstrap, and Tailwind CSS. They can speed up the development of your UI by using various classes and components."),(0,r.kt)("p",null,"This page also has a few other useful libraries that I have used."),(0,r.kt)("h2",{id:"material-ui"},"Material UI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mui.com/material-ui/getting-started/overview/"},"Material UI"))," is an open-source React component library that implements Google's Material Design."),(0,r.kt)("h3",{id:"mui-installation"},"MUI Installation"),(0,r.kt)("h4",{id:"mui-core"},"MUI Core"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @mui/material @emotion/react @emotion/styled\n")),(0,r.kt)("h4",{id:"mui-icons"},"MUI Icons"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @mui/icons-material\n")),(0,r.kt)("h3",{id:"mui-colors"},"MUI Colors"),(0,r.kt)("p",null,"You can set the colors that Material UI can use in components. See the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mui.com/material-ui/customization/color/"},"documentation")),"."),(0,r.kt)("p",null,"Color picker tool ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://m2.material.io/resources/color/#!/?view.left=0&view.right=0"},"here")),"."),(0,r.kt)("h3",{id:"mui-theme"},"MUI Theme"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mui.com/material-ui/customization/theming/"},"Documentation"))," on how to use themes. You create a theme and define whatever you want to change from the Material UI default theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// changes only the default primary color\n// dark and light colors can be set individually\n// or Material UI will auto calculate appropriate values\nconst theme = createTheme({\n  palette: {\n    primary: {\n      light: "#f7c742",\n      main: "#f5ba13",\n    },\n  },\n});\n')),(0,r.kt)("p",null,"You then wrap your application (or the specific components desired) with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemeProvider theme={theme}>")," component."),(0,r.kt)("h3",{id:"material-icons-usage"},"Material Icons Usage"),(0,r.kt)("p",null,"Search for the icons you want ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mui.com/material-ui/material-icons/"},"here")),"."),(0,r.kt)("p",null,"Import the specific icons you want like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import DeleteIcon from "@mui/icons-material/Delete";\n')),(0,r.kt)("p",null,"Then you use it as a react component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<DeleteIcon />\n")),(0,r.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://getbootstrap.com/"},"Bootstrap"))," is a frontend toolkit. Build and customize with Sass, utilize prebuild grid system and components, and bring projects to life with powerful JavaScript plugins."),(0,r.kt)("h3",{id:"bootstrap-installation"},"Bootstrap Installation"),(0,r.kt)("p",null,"You can either download the source files for Bootstrap, or you can use a CDN to include it into your HTML. The sources files can be found on their website. For CDN, in your HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," put the line from their ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.3/getting-started/introduction/"},"website"),". It will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"\n  rel="stylesheet"\n  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"\n  crossorigin="anonymous"\n/>\n<script\n  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"\n  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"\n  crossorigin="anonymous"\n><\/script>\n')),(0,r.kt)("h2",{id:"tailwind-css"},"Tailwind CSS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://tailwindcss.com/"},"Tailwind CSS"))," is a utility-first CSS framework packed with classes like ",(0,r.kt)("inlineCode",{parentName:"p"},"flex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pt-4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"text-center"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"rotate-90")," that can be composed to build any design, directly in your markup."),(0,r.kt)("p",null,"It is highly customizable. You can style each component on your website as the Tailwind UI demands from it."),(0,r.kt)("p",null,"Unlike bootstrap, there are no ready-made components. However, it is highly flexible for transforming the look and feel of elements on the website."),(0,r.kt)("h3",{id:"tailwind-vs-bootstrap"},"Tailwind vs Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bootstrap requires about 300kb, while Tailwind only takes about 30kb"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tailwind will load faster"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bootstrap has been around longer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bootstrap is easier to get going, but is less customizable"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"IMHO - Tailwind is probably better for front-end dev specifically, while Bootstrap is probably better for full-stack since you have more to worry about.")),(0,r.kt)("h2",{id:"react-icons"},"React Icons"),(0,r.kt)("p",null,"Arguably better icons than MUI icons. They are also imported as React components."),(0,r.kt)("p",null,"Search for icons using the searchbar ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://react-icons.github.io/react-icons/"},"here")),"."),(0,r.kt)("h3",{id:"react-icons-installation"},"React Icons Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-icons --save\n")),(0,r.kt)("h3",{id:"react-icons-usage"},"React Icons Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { FaBeer } from "react-icons/fa";\n\nclass Question extends React.Component {\n  render() {\n    return (\n      <h3>\n        {" "}\n        Lets go for a <FaBeer />?{" "}\n      </h3>\n    );\n  }\n}\n')),(0,r.kt)("h3",{id:"resizing-react-icons"},"Resizing React Icons"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"IconContext.Provider")," to resize icons. Example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { IconContext } from "react-icons";\nimport { FaBeer } from "react-icons/fa";\n\n<IconContext.Provider value={{ size: 50 }}>\n  <FaBeer />\n</IconContext.Provider>;\n')),(0,r.kt)("h2",{id:"font-awesome"},"Font Awesome"),(0,r.kt)("p",null,"Font Awesome is a collection of a ton of icons for free use (and more paid). Search through the icons ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://fontawesome.com/search"},"here")),"."),(0,r.kt)("p",null,"To use in your website, create a kit on their page ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://fontawesome.com/kits"},"here")),", then open the kit and put the ",(0,r.kt)("em",{parentName:"p"},"Kit Code")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML."),(0,r.kt)("p",null,"It will look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script\n  src="https://kit.fontawesome.com/somethingHere.js"\n  crossorigin="anonymous"\n><\/script>\n')))}u.isMDXComponent=!0}}]);