(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(234),c=a(196),i=a(259),s=a.n(i),o=a(261),m=a.n(o),p=(a(506),a(507),a(194)),u=a.n(p),h=function(e){var t=e.content,a=e.date,n=e.contentComponent,i=e.cover,o=e.tags,p=e.title,h=n||l.b;return r.a.createElement("article",{className:"baskerville pb3"},r.a.createElement("section",{className:"mw8 center"},r.a.createElement("header",{className:"avenir tc-l ph3 ph4-ns pt4 pt5-ns"},r.a.createElement("h1",{className:"f3 f2-m f-subheadline-l measure lh-title fw1 mt0"},p),r.a.createElement("div",{className:"flex db mb4"},r.a.createElement("time",{className:"f5 f4-l db fw1 baskerville mb4-l mb2"},u.a.userName," | ",a),r.a.createElement("div",{className:"inline-flex flex-wrap"},o&&o.length&&o.map(function(e){return r.a.createElement(c.a,{to:"/tags/"+s.a.kebabCase(e),key:e,className:"no-underline black dim avenir"},r.a.createElement("small",{className:"f6 f4-l fw1"},"#",e,"  "))}))))),i&&i.childImageSharp?r.a.createElement(m.a,{className:"w-100 dib f3",fluid:i.childImageSharp.fluid,alt:p}):r.a.createElement("img",{className:"w-100 dib f3",src:i.publicURL,alt:p}),r.a.createElement("section",{className:"mw8 center"},r.a.createElement("div",{className:"ph3 ph4-m ph5-l"},r.a.createElement(h,{content:t,className:"measure db center f5 f4-ns lh-copy"}))))},b=a(199),d=a.n(b),f=function(e){var t=e.title,a=e.meta_title,n=e.meta_desc,l=e.cover,c=e.slug,i=e.date,s=u.a.siteUrl+c,o="/"===u.a.pathPrefix?"":u.a.pathPrefix,m=u.a.siteUrl+o+l,p={"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":u.a.siteUrl,name:"Home",image:u.a.siteUrl+"/icons/icon-512x512.png"}},{"@type":"ListItem",position:2,item:{"@id":s,name:t,image:m}}]},h={"@context":"http://schema.org","@type":"BlogPosting",url:s,name:t,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:t,mainEntityOfPage:{"@type":"WebPage","@id":s},author:{"@type":"Person",name:u.a.userName},image:{"@type":"ImageObject",url:m},datePublished:i,dateModified:i,publisher:{"@type":"Organization",name:u.a.siteTitle,logo:{"@type":"ImageObject",url:u.a.siteUrl+"/icons/icon-512x512.png"}},description:n};return r.a.createElement(d.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:l}),r.a.createElement("link",{rel:"canonical",href:s}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),r.a.createElement("meta",{property:"og:url",content:s}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:m}),r.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:site",content:s}),r.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:m}))},g=a(508),E=a.n(g);function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(v(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(v(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},l.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},l.render=function(){var e=this.props,t=e.title,a=e.slug;if(!u.a.disqusShortname)return null;var n=u.a.siteUrl+a;return r.a.createElement("section",{className:"mb3 pa3 pa5-l center"},r.a.createElement(E.a,{shortname:u.a.disqusShortname,identifier:t,title:t,url:n,onNewComment:this.notifyAboutComment}))},n}(n.Component),y=a(582),k=a(583),N=a(584),C=a(585),A=a(586);var x=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.title,a=e.slug,n=e.excerpt,l="/"===u.a.pathPrefix?"":u.a.pathPrefix,c=u.a.siteUrl+l+a;return r.a.createElement("div",{className:"pv4 ph3 ph5-ns tc"},r.a.createElement("div",{className:"dib mr3",style:{cursor:"pointer"}},r.a.createElement(y.a,{url:c,title:t},r.a.createElement("span",{className:"link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-white ba b--black-10"},r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{fill:"currentcolor"}},r.a.createElement("title",null,"Reddit icon"),r.a.createElement("path",{d:"M2.204 14.049c-.06.276-.091.56-.091.847 0 3.443 4.402 6.249 9.814 6.249 5.41 0 9.812-2.804 9.812-6.249 0-.274-.029-.546-.082-.809l-.015-.032c-.021-.055-.029-.11-.029-.165-.302-1.175-1.117-2.241-2.296-3.103-.045-.016-.088-.039-.126-.07-.026-.02-.045-.042-.067-.064-1.792-1.234-4.356-2.008-7.196-2.008-2.815 0-5.354.759-7.146 1.971-.014.018-.029.033-.049.049-.039.033-.084.06-.13.075-1.206.862-2.042 1.937-2.354 3.123 0 .058-.014.114-.037.171l-.008.015zm9.773 5.441c-1.794 0-3.057-.389-3.863-1.197-.173-.174-.173-.457 0-.632.176-.165.46-.165.635 0 .63.629 1.685.943 3.228.943 1.542 0 2.591-.3 3.219-.929.165-.164.45-.164.629 0 .165.18.165.465 0 .645-.809.808-2.065 1.198-3.862 1.198l.014-.028zm-3.606-7.573c-.914 0-1.677.765-1.677 1.677 0 .91.763 1.65 1.677 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm7.233 0c-.914 0-1.678.765-1.678 1.677 0 .91.764 1.65 1.678 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm4.548-1.595c1.037.833 1.8 1.821 2.189 2.904.45-.336.719-.864.719-1.449 0-1.002-.815-1.816-1.818-1.816-.399 0-.778.129-1.09.363v-.002zM2.711 9.963c-1.003 0-1.817.816-1.817 1.818 0 .543.239 1.048.644 1.389.401-1.079 1.172-2.053 2.213-2.876-.302-.21-.663-.329-1.039-.329v-.002zm9.217 12.079c-5.906 0-10.709-3.205-10.709-7.142 0-.275.023-.544.068-.809C.494 13.598 0 12.729 0 11.777c0-1.496 1.227-2.713 2.725-2.713.674 0 1.303.246 1.797.682 1.856-1.191 4.357-1.941 7.112-1.992l1.812-5.524.404.095s.016 0 .016.002l4.223.993c.344-.798 1.138-1.36 2.065-1.36 1.229 0 2.231 1.004 2.231 2.234 0 1.232-1.003 2.234-2.231 2.234s-2.23-1.004-2.23-2.23l-3.851-.912-1.467 4.477c2.65.105 5.047.854 6.844 2.021.494-.464 1.144-.719 1.833-.719 1.498 0 2.718 1.213 2.718 2.711 0 .987-.54 1.886-1.378 2.365.029.255.059.494.059.749-.015 3.938-4.806 7.143-10.72 7.143l-.034.009zm8.179-19.187c-.74 0-1.34.599-1.34 1.338 0 .738.6 1.34 1.34 1.34.732 0 1.33-.6 1.33-1.334 0-.733-.598-1.332-1.347-1.332l.017-.012z"}))))),r.a.createElement("div",{className:"dib mr3",style:{cursor:"pointer"}},r.a.createElement(k.a,{url:c,title:t},r.a.createElement("span",{className:"link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-white ba b--black-10"},r.a.createElement("svg",{"data-icon":"twitter",viewBox:"0 0 32 32",style:{fill:"currentcolor"}},r.a.createElement("title",null,"twitter icon"),r.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))))),r.a.createElement("div",{className:"dib mr3",style:{cursor:"pointer"}},r.a.createElement(N.a,{url:c,quote:n},r.a.createElement("span",{className:"link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-white ba b--black-10"},r.a.createElement("svg",{"data-icon":"facebook",viewBox:"0 0 32 32",style:{fill:"currentcolor"}},r.a.createElement("title",null,"facebook icon"),r.a.createElement("path",{d:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"}))))),r.a.createElement("div",{className:"dib mr3",style:{cursor:"pointer"}},r.a.createElement(C.a,{url:c,title:t},r.a.createElement("span",{className:"link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-white ba b--black-10"},r.a.createElement("svg",{"data-icon":"whatsapp",viewBox:"0 0 24 24",style:{fill:"currentcolor"}},r.a.createElement("title",null,"whatsapp icon"),r.a.createElement("path",{d:"M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"}))))),r.a.createElement("div",{className:"dib mr3",style:{cursor:"pointer"}},r.a.createElement(A.a,{url:c,title:t,description:n},r.a.createElement("span",{className:"link grow gray dib h1 h2-ns w1 w2-ns br-100 pa2 bg-near-white ba b--black-10"},r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{fill:"currentcolor"}},r.a.createElement("title",null,"LinkedIn icon"),r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))))))},n}(n.Component),_=a(201);a.d(t,"pageQuery",function(){return z});t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(_.a,null,r.a.createElement("section",{className:"center"},r.a.createElement(f,{title:t.frontmatter.title,meta_title:t.frontmatter.meta_title,meta_desc:t.frontmatter.meta_description,cover:t.frontmatter.cover.publicURL,slug:t.fields.slug,date:t.frontmatter.date}),r.a.createElement(h,{content:t.html,contentComponent:l.a,date:t.frontmatter.date,cover:t.frontmatter.cover,tags:t.frontmatter.tags,title:t.frontmatter.title}),r.a.createElement("section",{className:"mw8 center"},r.a.createElement(x,{title:t.frontmatter.title,slug:t.fields.slug,excerpt:t.frontmatter.meta_description}),r.a.createElement(w,{title:t.frontmatter.title,slug:t.fields.slug}))))};var z="198691695"},194:function(e,t){e.exports={siteTitle:"Chen Peng's Blog",siteTitleAlt:"Chen Peng Blog",siteLogo:"/logos/logo-512x512.png",siteUrl:"https://l-chen-peng-l.github.io",pathPrefix:"/blog",siteDescription:"",siteRss:"/rss.xml",googleTagManagerID:"",disqusShortname:"",userName:"Chen Peng",userTwitter:"",userLocation:"Singapore",userDescription:"",copyright:"",themeColor:"#676767",backgroundColor:"#ffffff"}},195:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},196:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(58),c=a.n(l);a.d(t,"a",function(){return c.a});a(195),a(7).default.enqueue;var i=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||l,staticQueryData:e})})}},197:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),l=a(86);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(199),c=a.n(l),i=(a(205),a(194)),s=a.n(i),o=function(){return r.a.createElement("div",{className:"db dtc-ns black-70 tc tr-ns v-mid"},r.a.createElement("a",{href:"feed:https://theleakycauldronblog.com"+s.a.siteRss,className:"link hover-orange dib mr3 black-70",title:"Impossible Labs on Medium",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"RSS icon"),r.a.createElement("path",{d:"M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"}))),r.a.createElement("a",{href:"https://instagram.com/vaibhaved",className:"link hover-pink dib mr3 black-70",title:"Vaibhav Sharma on Instagram",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"Instagram icon"),r.a.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}))),r.a.createElement("a",{href:"https://twitter.com/vaibhaved",className:"link hover-light-blue dib mr3 black-70",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2","data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},r.a.createElement("title",null,"twitter icon"),r.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),r.a.createElement("a",{href:"https://github.com/v4iv",className:"link hover-black dib mr3 black-70",title:"Vaibhav Sharma on Github",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"GitHub icon"),r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/waybove",className:"link hover-blue dib black-70",target:"_blank",rel:"noopener nofollow noreferrer"},r.a.createElement("svg",{className:"db w2 h2",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.a.createElement("title",null,"LinkedIn icon"),r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))))},m=function(e){var t=e.config;return r.a.createElement("footer",{className:"pa4 pa5-l black-70 bt b--black-10 mw8 center pv5"},r.a.createElement("div",{className:"dt dt--fixed w-100"},r.a.createElement("div",{className:"dn dtc-ns v-mid"},r.a.createElement("p",{className:"f7 black-70 dib pr3 mb3"},t.copyright," Powered by ",r.a.createElement("a",{className:"link black hover-purple",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noreferrer nofollow noopener"},"Gatsby"))),r.a.createElement(o,null)),r.a.createElement("div",{className:"db dn-ns"},r.a.createElement("p",{className:"f7 black-70 mt4 tc"},t.copyright," Powered by ",r.a.createElement("a",{className:"link black hover-purple",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noreferrer nofollow noopener"},"Gatsby"))))},p=a(196),u=function(){return r.a.createElement("header",{className:"bg-white black-80 tc pv4 avenir"},r.a.createElement("h1",{className:"mt2 mb0 baskerville i fw1 f1"},i.siteTitle),r.a.createElement("h2",{className:"mt2 mb0 f6 fw4 ttu tracked"},"A Brew of Awesomeness with a Pinch of Magic..."),r.a.createElement("nav",{className:"bt bb tc mw8 center mt4"},r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/"},"Home"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l",to:"/search"},"Search"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l",to:"/about"},"About"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l",to:"/contact"},"Contact")))};t.a=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,s.a.siteTitle),r.a.createElement("meta",{name:"description",content:s.a.siteDescription}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(u,null),r.a.createElement("div",null,e.children),r.a.createElement(m,{config:s.a})))}},234:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),l=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})};t.b=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},t)}}}]);
//# sourceMappingURL=component---src-templates-article-page-js-2d174e617019d7d60272.js.map