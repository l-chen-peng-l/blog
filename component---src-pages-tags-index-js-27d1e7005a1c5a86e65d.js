(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(e,a,t){"use strict";t.r(a),t.d(a,"tagPageQuery",function(){return m});var l=t(0),r=t.n(l),n=t(259),c=t(199),o=t.n(c),i=t(196),s=t(201);a.default=function(e){var a=e.data,t=a.allMarkdownRemark.group,l=a.site.siteMetadata.title;return r.a.createElement(s.a,null,r.a.createElement(o.a,{title:"Tags | "+l}),r.a.createElement("section",{className:"mw7 center avenir"},r.a.createElement("header",{className:"tc"},r.a.createElement("h1",{className:"f1 code mb1 fw1 dib tracked-tight"},"Tags")),r.a.createElement("ul",{className:"list ph3 ph5-ns pv4 tc"},t.map(function(e){return r.a.createElement("li",{key:e.fieldValue,className:"dib mr1 mb2"},r.a.createElement(i.a,{className:"f6 f5-ns fw4 b db pa2 link dim dark-gray ba b--black-20",to:"/tags/"+Object(n.kebabCase)(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))};var m="3682505313"},194:function(e,a){e.exports={siteTitle:"Chen Peng's Blog",siteTitleAlt:"Chen Peng Blog",siteLogo:"/logos/logo-512x512.png",siteUrl:"https://l-chen-peng-l.github.io",pathPrefix:"/blog",siteDescription:"",siteRss:"/rss.xml",googleTagManagerID:"",disqusShortname:"",userName:"Chen Peng",userTwitter:"",userLocation:"Singapore",userDescription:"",copyright:"",themeColor:"#676767",backgroundColor:"#ffffff"}},195:function(e,a,t){var l;e.exports=(l=t(197))&&l.default||l},196:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var l=t(0),r=t.n(l),n=t(58),c=t.n(n);t.d(a,"a",function(){return c.a});t(195),t(7).default.enqueue;var o=r.a.createContext({});function i(e){var a=e.staticQueryData,t=e.data,l=e.query,n=e.render,c=t?t.data:a[l]&&a[l].data;return r.a.createElement(r.a.Fragment,null,c&&n(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var a=e.data,t=e.query,l=e.render,n=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(i,{data:a,query:t,render:l||n,staticQueryData:e})})}},197:function(e,a,t){"use strict";t.r(a);t(16);var l=t(0),r=t.n(l),n=t(86);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(n.a,Object.assign({location:a,pageResources:t},t.json)):null}},201:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(199),c=t.n(n),o=(t(205),t(194)),i=t.n(o),s=function(){return r.a.createElement("div",{className:"db dtc-ns black-70 tc tr-ns v-mid"},r.a.createElement("a",{href:"feed:https://theleakycauldronblog.com"+i.a.siteRss,className:"link hover-orange dib mr3 black-70",title:"Impossible Labs on Medium",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"RSS icon"),r.a.createElement("path",{d:"M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"}))),r.a.createElement("a",{href:"https://instagram.com/vaibhaved",className:"link hover-pink dib mr3 black-70",title:"Vaibhav Sharma on Instagram",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"Instagram icon"),r.a.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}))),r.a.createElement("a",{href:"https://twitter.com/vaibhaved",className:"link hover-light-blue dib mr3 black-70",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2","data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},r.a.createElement("title",null,"twitter icon"),r.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),r.a.createElement("a",{href:"https://github.com/v4iv",className:"link hover-black dib mr3 black-70",title:"Vaibhav Sharma on Github",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"GitHub icon"),r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/waybove",className:"link hover-blue dib black-70",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"LinkedIn icon"),r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))))},m=function(e){var a=e.config;return r.a.createElement("footer",{className:"pa4 pa5-l black-70 bt b--black-10 mw8 center pv5"},r.a.createElement("div",{className:"dt dt--fixed w-100"},r.a.createElement("div",{className:"dn dtc-ns v-mid"},r.a.createElement("p",{className:"f7 black-70 dib pr3 mb3"},a.copyright," Powered by ",r.a.createElement("a",{className:"link black hover-purple",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noreferrer nofollow noopener"},"Gatsby"))),r.a.createElement(s,null)),r.a.createElement("div",{className:"db dn-ns"},r.a.createElement("p",{className:"f7 black-70 mt4 tc"},a.copyright," Powered by ",r.a.createElement("a",{className:"link black hover-purple",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noreferrer nofollow noopener"},"Gatsby"))))},b=t(196),u=function(){return r.a.createElement("header",{className:"bg-white black-80 tc pv4 avenir"},r.a.createElement("h1",{className:"mt2 mb0 baskerville i fw1 f1"},o.siteTitle),r.a.createElement("h2",{className:"mt2 mb0 f6 fw4 ttu tracked"},"A Brew of Awesomeness with a Pinch of Magic..."),r.a.createElement("nav",{className:"bt bb tc mw8 center mt4"},r.a.createElement(b.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/"},"Home"),r.a.createElement(b.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l",to:"/search"},"Search"),r.a.createElement(b.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l",to:"/about"},"About"),r.a.createElement(b.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l",to:"/contact"},"Contact")))};a.a=function(e){return r.a.createElement(l.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,i.a.siteTitle),r.a.createElement("meta",{name:"description",content:i.a.siteDescription}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(u,null),r.a.createElement("div",null,e.children),r.a.createElement(m,{config:i.a})))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-js-27d1e7005a1c5a86e65d.js.map