(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3299:function(e,t,a){Promise.resolve().then(a.bind(a,8919)),Promise.resolve().then(a.bind(a,7826)),Promise.resolve().then(a.bind(a,8302)),Promise.resolve().then(a.bind(a,9380)),Promise.resolve().then(a.bind(a,9201)),Promise.resolve().then(a.t.bind(a,7402,23)),Promise.resolve().then(a.t.bind(a,7977,23))},7826:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(9268);a(6006);var i=a(8121),r=a(1127),o=a(5846),s=a.n(o),l=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=function e(t){var a,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(n=e(t[a]))&&(i&&(i+=" "),i+=n);else for(a in t)t[a]&&(i&&(i+=" "),i+=a)}return i}(e))&&(n&&(n+=" "),n+=t);return n},c=a(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:a}=(0,c.useActiveSectionContext)();return(0,n.jsxs)("header",{className:"z-[999] relative",children:[(0,n.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,n.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,n.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:r.Ok.map(r=>(0,n.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,n.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===r.name}),href:r.hash,onClick:()=>{t(r.name),a(Date.now())},children:[r.name,r.name===e&&(0,n.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},r.hash))})})]})}},8302:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(9268),i=a(9380);a(6006);var r=a(8136);function o(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,n.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,n.jsx)(r.eSY,{}):(0,n.jsx)(r.s1t,{})})}},9201:function(e,t,a){"use strict";a.r(t),a.d(t,{ActiveSectionContext:function(){return r},default:function(){return o},useActiveSectionContext:function(){return s}});var n=a(9268),i=a(6006);let r=(0,i.createContext)(null);function o(e){let{children:t}=e,[a,o]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,n.jsx)(r.Provider,{value:{activeSection:a,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(r);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o},useTheme:function(){return s}});var n=a(9268),i=a(6006);let r=(0,i.createContext)(null);function o(e){let{children:t}=e,[a,o]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,n.jsx)(r.Provider,{value:{theme:a,toggleTheme:()=>{"light"===a?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(r);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},1127:function(e,t,a){"use strict";a.d(t,{$c:function(){return c},Ok:function(){return l},ZU:function(){return u},nD:function(){return d}});var n=a(6006),i=a(7782),r=a(2801),o=a(4526),s=a(7374);let l=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],c=[{title:"Senior Software Engineer",location:"Amazon, Bangalore",description:"\nAmazon Physical Stores\n● Optimized inbound of Transshipments and Purchase Orders by designing auto stocking and stowing increasing the UPH up to 35%. Developed pallet-level tracking of shipments by designing workflows, databases and APIs, enabling pallet-level receiving.\n● Developed scalable backend microservices to enable store associates to efficiently inbound shipments in stores. Created HLDs and LLDs for distributed systems and conducted design reviews.\n● Migrated multiple legacy backend services and UI tools to AWS and ReactJS, slashing the resource cost by 30%, reducing on-call load by increasing availability and more verbose debugging.\n● Built a highly scalable service from ground up to track checkout transactions for billing third-party stores for Just Walk Out tech.\n● Conducted over 50 coding and system design interviews.\n\nAmazon Prime\n● Developed Plan Override Tool portal, reducing Prime Plans testing SLA by 80% and enabled unlimited test customers compared to existing 40-customer limit.\n● Built Plan Override Tool Client for automated Prime Plan testing. Integrated with a RoR server reducing on-call workload by 20%.",icon:n.createElement(r.UpG),date:"January 2020 - Present"},{title:"Software Engineer",location:"GetActive, Bangalore",description:"● Built health check up booking feature incorporating time slot selection, payment gateway, and real-time status.\n● Developed a service for image compression. Leveraged Kafka for API performance, achieving a throughput of up to 20 TPS.\n● Sole Android Engineer at the company. Built features like user feed and virtual run utilizing MVVM architecture and Firestore.",icon:n.createElement(s.p17),date:"June 2019 - December 2020"},{title:"Graduated with Bachelor of Technology Degree",location:"Indian Institute of Technology (BHU), Varanasi",description:"● Enrolled for Bachelor of Technology at IIT-BHU, laying the foundation for technical skills.",icon:n.createElement(i.qWM),date:"May 2019"},{title:"Software Engineer Intern",location:"GetActive, Bangalore",description:"● Created a customer query chatbot using Dialogflow and integrated it by developing a Dropwizard backend. Built the Admin dashboard using ReactJS for community management for GetActive App.\n● Implemented fraud detection algorithm for monitoring user foot steps within the GetActive android app.",icon:n.createElement(s.p17),date:"May 2018 - June 2018"},{title:"Software Engineer Intern",location:"Invento Makerspaces, Bangalore",description:"● Added camera-based human detection and distance measurement for improved conversations and collision prevention.\n● Developed a flask service for facial recognition, integrating Hyperverge, Microsoft, and AWS APIs.",icon:n.createElement(s.p17),date:"December 2017"},{title:"Started my engineering journey",location:"Indian Institute of Technology (BHU), Varanasi",description:"● Enrolled for Bachelor of Technology at IIT-BHU, laying the foundation for technical skills.",icon:n.createElement(o.fWt),date:"July 2015"}],d=[{title:"Celebratd",description:"● Co-Founded and led a small team to build a B2B2C event marketplace for hassle-free celebrations in India.\n● Built an Android app using flutter for vendors to list events.\n● Built an admin dashboard with ReactJs and AWS for verifying and launching listings on the platform.",tags:["React","Next.js","Tailwind","Flutter","Android Application Development"],imageUrl:""},{title:"Fonexpert.in",description:'● Built a phone repair booking portal for a mobile store in ReactJs and AWS.\n● Improved the website\'s SEO and got it to the 2nd position in search results for "Mobile repairing in Agra"',tags:["React","TypeScript","Next.js","Tailwind","Redux"],imageUrl:""},{title:"Modern Dictionary",description:"● Built an offline English to English and Hindi dictionary Android App featuring flashcards, bookmarks, history, text to speech.\n● Implemented in Java with SQLite for local storage, I also wrote a Python script for data normalization using the NLTK library",tags:["Java","SQLite","Android development","Python","NLTK"],imageUrl:""},{title:"Productive Social Network",description:"● Developed an Android app that unifies Facebook, Instagram, and Twitter feeds and filters out irrelevant posts and features a voice assistant for hands-free updates during activities like gym.\n● The app was written in Kotlin with Python Flask backend, utilizing Microsoft Azure APIs for AI tasks such as Image descriptor, OCR, and Text summarizer for App’s voice assistant.",tags:["Android Development: Kotlin","Backend Development: Python, Flask","Cloud Computing: Microsoft Azure","Artificial Intelligence: Microsoft Azure APIs"],imageUrl:""},{title:"The Compiler",description:"● Developed a two-tier compiler using Java to compile a High-Level Language.\n● Implemented a two-stage compilation process: conversion of High-Level code into VM code (intermediate language) and then conversion of VM code to Assembly code.",tags:["Java","Assembly"],imageUrl:""},{title:"Modern Computer",description:"● Built computer chips such as Register, RAM, ALU, CPU using HDL to simulate a functional working computer system.\n● Used Nand Gate as a basic fundamental chip for building combinational processor chip and D-flip flop for the sequential circuit for memory.\n● Created a basic Assembler in Java to translate assembly language code into binary machine code.",tags:["Computer Architecture","HDL","D-flip flop"],imageUrl:""},{title:"Harry Potter Dialogs Generator",description:"● Build a dialog completer using basic LSTM cell in tensorflow python. \n● The model was trained for 50,000 iterations with Adadelta Optimizer. The data was taken from Harry Potter books.",tags:["AI & ML","TensorFlow","Python","LSTM"],imageUrl:""},{title:"Automated Underwater Vehicle",description:"● Conducted a case study focusing on the preparation of colored glasses through the introduction of colouring ions and inclusions during crystallization.\n● Investigated light scattering phenomena resulting from various phases within the glasses.\n● Explored the impact of oxidation states of transition metals on glass coloration.\n● Examined dichroic glasses and their unique optical properties.",tags:["React","Next.js","SQL","Tailwind","Framer"],imageUrl:""},{title:"Gender Detection using Deep Learning",description:"● Developed real-time gender classifier using Logistic Regression in Matlab\n● Trained the classifier in Matlab and performed basic image processing using OpenCV in Python\n● Reimplemented classifier with Convolutional Neural Network using TensorFlow in Python\n● Incorporated Google's Inception v3 architecture through fine-tuning and hyperparameter adjustments for two classes\n● Utilized Keras, TensorFlow, and Python for implementation",tags:["React","Next.js","SQL","Tailwind","Framer"],imageUrl:""},{title:"Central Control Unit for Infrared Devices",description:"● Developed a secure network linking household appliances and smartphones using Raspberry Pi under Design and Innovation Hub, IIT (BHU).\n● Implemented communication between smartphones and Raspberry Pi via the internet and between Raspberry Pi and household devices through standard infrared technology.\n● Enabled remote control of household devices from anywhere in the world using a smartphone.",tags:["React","Next.js","SQL","Tailwind","Framer"],imageUrl:""}],u=["Java","Python","Typescript","JavaScript","Kotlin","C","C#","Spring","AWS","ReactJS","Tailwind","Firebase","NextJS","Native Android Development","Flutter","JMeter","OpenCV","SciKitLearn","Tensorflow","Keras","Numpy","Pandas","SQL"]},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_b225af', '__Inter_Fallback_b225af'",fontStyle:"normal"},className:"__className_b225af"}},8919:function(e,t,a){"use strict";let n,i;a.r(t),a.d(t,{CheckmarkIcon:function(){return _},ErrorIcon:function(){return $},LoaderIcon:function(){return J},ToastBar:function(){return ee},ToastIcon:function(){return W},Toaster:function(){return ei},default:function(){return er},resolveValue:function(){return E},toast:function(){return U},useToaster:function(){return R},useToasterStore:function(){return B}});var r,o=a(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",n="",i="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?a=r+" "+o+";":n+="f"==r[1]?p(o,r):r+"{"+p(o,"k"==r[1]?"":t)+"}":"object"==typeof o?n+=p(o,t?t.replace(/([^,])+/g,e=>r.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(r,o):r+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+n},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,n,i)=>{var r;let o=f(e),s=m[o]||(m[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!m[s]){let t=o!==e?e:(e=>{let t,a,n=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?n.shift():t[3]?(a=t[3].replace(u," ").trim(),n.unshift(n[0][a]=n[0][a]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);m[s]=p(i?{["@keyframes "+s]:t}:t,a?"":"."+s)}let l=a&&m.g?m.g:null;return a&&(m.g=m[s]),r=m[s],l?t.data=t.data.replace(l,r):-1===t.data.indexOf(r)&&(t.data=n?r+t.data:t.data+r),s},h=(e,t,a)=>e.reduce((e,n,i)=>{let r=t[i];if(r&&r.call){let e=r(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+n+(null==r?"":r)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,w,x=y.bind({k:1});function k(e,t){let a=this||{};return function(){let n=arguments;function i(r,o){let s=Object.assign({},r),l=s.className||i.className;a.p=Object.assign({theme:v&&v()},s),a.o=/ *go\d+/.test(l),s.className=y.apply(a,n)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),w&&c[0]&&w(s),b(c,s)}return t?t(i):i}}var A=e=>"function"==typeof e,E=(e,t)=>A(e)?e(t):e,I=(n=0,()=>(++n).toString()),P=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},S=new Map,T=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),L({type:4,toastId:e})},1e3);S.set(e,t)},C=e=>{let t=S.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:n}=t;return n?T(n):e.toasts.forEach(e=>{T(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},j=[],N={toasts:[],pausedAt:void 0},L=e=>{N=D(N,e),j.forEach(e=>{e(N)})},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B=(e={})=>{let[t,a]=(0,o.useState)(N);(0,o.useEffect)(()=>(j.push(a),()=>{let e=j.indexOf(a);e>-1&&j.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var a,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},z=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||I()}),O=e=>(t,a)=>{let n=z(t,e,a);return L({type:2,toast:n}),n.id},U=(e,t)=>O("blank")(e,t);U.error=O("error"),U.success=O("success"),U.loading=O("loading"),U.custom=O("custom"),U.dismiss=e=>{L({type:3,toastId:e})},U.remove=e=>L({type:4,toastId:e}),U.promise=(e,t,a)=>{let n=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(U.success(E(t.success,e),{id:n,...a,...null==a?void 0:a.success}),e)).catch(e=>{U.error(E(t.error,e),{id:n,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{L({type:1,toast:{id:e,height:t}})},F=()=>{L({type:5,time:Date.now()})},R=e=>{let{toasts:t,pausedAt:a}=B(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),a)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,a]);let n=(0,o.useCallback)(()=>{a&&L({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:r}=a||{},o=t.filter(t=>(t.position||r)===(e.position||r)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:F,endPause:n,calculateOffset:i}}},$=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,_=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=k("div")`
  position: absolute;
`,V=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(K,null,t):t:"blank"===a?null:o.createElement(V,null,o.createElement(J,{...n}),"loading"!==a&&o.createElement(G,null,"error"===a?o.createElement($,{...n}):o.createElement(_,{...n})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Y=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[n,i]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(a),q(a)];return{animation:t?`${x(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:n})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},r=o.createElement(W,{toast:e}),s=o.createElement(Z,{...e.ariaProps},E(e.message,e));return o.createElement(Y,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof n?n({icon:r,message:s}):o.createElement(o.Fragment,null,r,s))});r=o.createElement,p.p=void 0,b=r,v=void 0,w=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:n,children:i})=>{let r=o.useCallback(t=>{if(t){let a=()=>{n(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:r,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...n}},en=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:n,children:i,containerStyle:r,containerClassName:s})=>{let{toasts:l,handlers:c}=R(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let r=a.position||t,s=ea(r,c.calculateOffset(a,{reverseOrder:e,gutter:n,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?en:"",style:s},"custom"===a.type?E(a.message,a):i?i(a):o.createElement(ee,{toast:a,position:r}))}))},er=U}},function(e){e.O(0,[415,680,296,524,166,584,253,769,744],function(){return e(e.s=3299)}),_N_E=e.O()}]);