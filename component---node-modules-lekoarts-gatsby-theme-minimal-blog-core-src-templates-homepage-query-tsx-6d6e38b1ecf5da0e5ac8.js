"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[956],{5782:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return x}});var a=n(6540),r=n(557),o=n(4794),l=n(3328),i=n(6988),m=n(8084);var c=e=>{let{children:t}=e;return(0,r.Y)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},s=n(3601),u=n(7533),p=n(2174),g=n(2809),d=n(7169),h=n(8453);function E(e){const t=Object.assign({p:"p",a:"a"},(0,h.RP)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),a.createElement(a.Fragment,null,a.createElement(n,{children:"Hi.",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"I'm LekoArts, your theme creator. I'm passionate about open source & teaching. Learn more about Gatsby & React on ",a.createElement(t.a,{href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter"},"my website"),"."))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)};function b(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,h.RP)(),e.components),{Title:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),a.createElement(a.Fragment,null,a.createElement(n,{text:"Projects"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.lekoarts.de/art/3d?utm_source=minimal-blog&utm_medium=Theme"},"3D Art with Cinema4D")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.lekoarts.de/art/photography?utm_source=minimal-blog&utm_medium=Theme"},"Landscape Photography")),"\n"))}var w=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?a.createElement(t,e,a.createElement(b,e)):b(e)};var y=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,s.A)(),{siteTitle:d}=(0,u.A)();return(0,r.Y)(l.A,null,(0,r.Y)("h1",{sx:g.Q},d),(0,r.Y)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,r.Y)(f,null)),(0,r.Y)(i.A,{text:"Latest Posts"},(0,r.Y)(o.Link,{to:(0,p.A)(`/${n}/${a}`)},"Read all posts")),(0,r.Y)(m.A,{posts:t,showTags:!1}),(0,r.Y)(c,null,(0,r.Y)(w,null)))};const v=()=>(0,r.Y)(d.A,null);var x=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(y,Object.assign({posts:n.nodes},t))}},7169:function(e,t,n){var a=n(6540),r=n(4794),o=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:l="",image:i="",children:m=null,canonicalUrl:c=""}=e;const s=(0,o.A)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:h,author:E,siteLanguage:f}=s,b={title:t?`${t} | ${u}`:p,description:n||d,url:`${g}${l||""}`,image:`${g}${i||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,m)}},7715:function(e,t,n){var a=n(557),r=n(6540),o=n(4794),l=n(3601),i=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,l.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.A)(`/${m}/${n}/${e.slug}`)},e.name)))))}},8084:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(557),r=n(6540),o=n(6835),l=n(4794),i=n(7715);var m=e=>{let{post:t,showTags:n=!0}=e;return(0,a.Y)(o.az,{mb:4},(0,a.Y)(l.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&n&&(0,a.Y)(r.Fragment,null," — ",(0,a.Y)(i.A,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.Y)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.Y)(m,{key:e.slug,post:e,showTags:r}))))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-6d6e38b1ecf5da0e5ac8.js.map