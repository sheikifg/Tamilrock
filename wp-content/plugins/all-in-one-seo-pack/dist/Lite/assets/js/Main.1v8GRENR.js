import b from"./AboutUs.8O_jzjHD.js";import{C as A}from"./Index.C0cjWOzj.js";import C from"./GettingStarted.DMAaIcm5.js";import{C as E,c as k,S as T}from"./Caret.CGwYaMo_.js";import{_ as $}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{v as a,o,c as r,a as t,t as i,B as n,l as h,C as p,F as O,ac as w,b as _,k as c,q as N}from"./runtime-core.esm-bundler.DMBo7TXk.js";import"./links.C572zDFG.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.D5tYIqKS.js";import"./em.2x6etyqr.js";import"./Row.CHjKxnPP.js";import"./External.1pzVM6vX.js";import"./license.w8vDmkyH.js";import"./upperFirst.BGtMw2rr.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.CkyAieyd.js";import"./allowed.DI27y-Lv.js";/* empty css             */import"./params.B3T1WKlC.js";import"./Ellipse.CAgnKuMU.js";import"./Header.CAqvp6wK.js";import"./addons.tTxptju5.js";import"./ScrollAndHighlight.BJMBF74G.js";import"./LogoGear.DKfym1nW.js";import"./AnimatedNumber.AHtyCECF.js";import"./numbers.zAmItkHM.js";import"./Logo.BIaooogV.js";import"./index.CdwEuUIl.js";import"./Support.2kTcpvZ-.js";import"./Tabs.C-PQxwBC.js";import"./TruSeoScore.TjofuHRQ.js";import"./Information.JAmX9TGg.js";import"./Slide.D2pWF0rN.js";import"./Url.CKoztWLY.js";import"./Date.7QFk4W6o.js";import"./constants.B6ynd7gz.js";import"./Exclamation.Dk_xiOnS.js";import"./Gear.Big5c48d.js";import"./news-sitemap.DpNdH6wu.js";import"./GettingStarted.DsX3A9Nz.js";import"./Book.DaIhDiml.js";import"./Rocket.2DIRzDuc.js";import"./Index.fxoyLS1r.js";const L={components:{CoreAlert:E,SvgCircleCheck:k,SvgClose:T},data(){return{strings:{header:{title:this.$t.sprintf(this.$t.__("%1$s Lite vs. Pro",this.$td),"AIOSEO"),description:this.$t.sprintf(this.$t.__("Get the most out of %1$s by upgrading to Pro and unlocking all of the powerful features.",this.$td),"All in One SEO")},grid:{features:this.$t.__("Features:",this.$td)},cta:{title:this.$t.__("Upgrade to Pro to Unlock Powerful SEO Features",this.$td),description:this.$t.sprintf(this.$t.__("%1$s is the best WordPress SEO plugin. Join over %2$s Professionals who are already using %3$s to improve their website search rankings.",this.$td),"All in One SEO","3,000,000+","AIOSEO"),button:this.$t.sprintf(this.$t.__("Upgrade to %1$s Today",this.$td),"Pro"),bonus:this.$t.sprintf(this.$t.__("%1$sBonus:%2$s You can upgrade to the %3$s plan today and %4$ssave %5$s off%6$s (discount auto-applied).",this.$td),"<strong>","</strong>","Pro","<strong>",this.$constants.DISCOUNT_PERCENTAGE,"</strong>")}},features:{seo:{name:this.$t.__("Search Engine Optimization (SEO)",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("Posts, Pages and custom Post Types only",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("Posts, Pages, custom Post Types + Categories, Tags and custom Taxonomies",this.$td)}},socialMeta:{name:this.$t.__("Social Meta (Open Graph Markup)",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("Posts, Pages and custom Post Types only",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("Posts, Pages, custom Post Types + Categories, Tags and custom Taxonomies",this.$td)}},searchStatistics:{name:this.$t.__("Google Search Console Integration",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Included as Pro Feature",this.$td),description:this.$t.__("Connect with Google Search Console to track how your site is performing in search rankings and generate reports with actionable insights that help you get the most out of your content. (Elite plan only)",this.$td)}},openai:{name:this.$t.__("Open AI Integration",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Included as Pro Feature",this.$td),description:this.$t.__("Use the power of ChatGPT to generate engaging SEO titles and meta descriptions for your posts.",this.$td)}},wooCommerce:{name:this.$t.__("WooCommerce Integration",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("WooCommerce Products only",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("WooCommerce Products, Product Categories, Product Tags, Product Attributes + WooCommerce smart tags (price, brand, etc.)",this.$td)}},schema:{name:this.$t.__("Schema Rich Snippets",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("Posts, Pages, Categories and Tags only",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("Posts, Pages, Categories, Tags + Breadcrumb Navigation + advanced graphs (Product, FAQ Page, Recipe, etc.)",this.$td)}},breadcrumbs:{name:this.$t.__("Visual Breadcrumb Trails",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("Default template for all pages.",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("Granular control over the template for each post type, taxonomy and archive.",this.$td)}},sitemap:{name:this.$t.__("XML Sitemap",this.$td),lite:{title:this.$t.__("Limited Support",this.$td),description:this.$t.__("Control the priority & frequency per Post Type/Taxonomy",this.$td)},pro:{title:this.$t.__("Complete Support",this.$td),description:this.$t.__("Control the priority & frequency of each Post, Page, Category, Tag, etc.",this.$td)}},videoSitemap:{name:this.$t.__("Video Sitemap",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Submit your videos to search engines (Pro & Elite plans only)",this.$td)}},newsSitemap:{name:this.$t.__("News Sitemap",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Submit your latest news stories to Google News (Pro & Elite plans only)",this.$td)}},imageSeo:{name:this.$t.__("Image SEO",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Control the title, alt tag, caption, description and filename of your images (Plus, Pro & Elite plans only)",this.$td)}},localSeo:{name:this.$t.__("Local SEO",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Local Business schema (multiple locations supported) + Business Info & Location blocks, widgets & shortcodes (Plus, Pro & Elite plans only)",this.$td)}},redirectionManager:{name:this.$t.__("Redirection Manager",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Create, manage and monitor redirects for 404's or modified posts + server redirects, full site redirects and site aliases (Pro & Elite plans only)",this.$td)}},linkAssistant:{name:this.$t.__("Link Assistant",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("View detailed link & domain reports, manage existing links and discover new internal linking opportunities through smart suggestions (Pro & Elite plans only)",this.$td)}},seoRevisions:{name:this.$t.__("SEO Revisions",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Included as Pro Feature",this.$td),description:this.$t.__("SEO Revisions provide a historical record of SEO updates, allowing you to monitor the effectiveness of your SEO efforts and make informed decisions. (Plus, Pro & Elite plans only)",this.$td)}},restApi:{name:this.$t.__("REST API",this.$td),lite:{title:this.$t.__("Not Available",this.$td)},pro:{title:this.$t.__("Available as Addon Plugin",this.$td),description:this.$t.__("Manage your post and term SEO meta via the WordPress REST API. This addon also works seamlessly with headless WordPress installs. (Plus, Pro & Elite plans only)",this.$td)}},support:{name:this.$t.__("Customer Support",this.$td),lite:{title:this.$t.__("Limited Support",this.$td)},pro:{title:this.$t.__("Priority Support",this.$td)}}}}}},x={class:"aioseo-lite-vs-pro"},I={class:"aioseo-lite-vs-pro-header"},B={class:"header-title"},M={class:"header-text"},R={class:"aioseo-lite-vs-pro-grid"},U={class:"header"},G=t("div",{class:"header-lite"},"Lite",-1),F=t("div",{class:"header-pro"},"Pro",-1),V=t("hr",null,null,-1),W={class:"feature"},D={class:"feature-title"},q={key:0},H={class:"feature-title"},z={key:0},J=t("hr",null,null,-1),Q={class:"aioseo-lite-vs-pro-cta"},X={class:"cta-title"},Y={class:"cta-text"},j=["innerHTML"];function K(l,m,u,g,s,v){const d=a("base-button"),f=a("svg-close"),P=a("svg-circle-check"),y=a("core-alert");return o(),r("div",x,[t("div",I,[t("div",null,[t("div",B,i(s.strings.header.title),1),t("div",M,i(s.strings.header.description),1)]),n(d,{type:"green",tag:"a",href:l.$links.utmUrl("about-us-page","header-button"),target:"_blank"},{default:h(()=>[p(i(s.strings.cta.button),1)]),_:1},8,["href"])]),t("div",R,[t("div",U,[t("div",null,i(s.strings.grid.features),1),G,F]),V,t("div",null,[(o(!0),r(O,null,w(s.features,(e,S)=>(o(),r("div",{key:S},[t("div",W,[t("div",null,i(e.name),1),n(f),t("div",null,[t("div",D,i(e.lite.title),1),e.lite.description?(o(),r("div",q,i(e.lite.description),1)):_("",!0)]),n(P),t("div",null,[t("div",H,i(e.pro.title),1),e.pro.description?(o(),r("div",z,i(e.pro.description),1)):_("",!0)])]),J]))),128))])]),t("div",Q,[t("div",X,i(s.strings.cta.title),1),t("div",Y,i(s.strings.cta.description),1),n(d,{type:"green",tag:"a",href:l.$links.utmUrl("about-us-page","footer-button"),target:"_blank"},{default:h(()=>[p(i(s.strings.cta.button),1)]),_:1},8,["href"]),n(y,{class:"cta-text bonus-alert",type:"yellow"},{default:h(()=>[p(" 🎁 "),t("span",{innerHTML:s.strings.cta.bonus},null,8,j)]),_:1})])])}const Z=$(L,[["render",K]]),tt={components:{AboutUs:b,CoreMain:A,GettingStarted:C,LiteVsPro:Z},data(){return{strings:{pageName:this.$t.__("About Us",this.$td)}}}};function it(l,m,u,g,s,v){const d=a("core-main");return o(),c(d,{"page-name":s.strings.pageName,showSaveButton:!1},{default:h(()=>[(o(),c(N(l.$route.name)))]),_:1},8,["page-name"])}const Ht=$(tt,[["render",it]]);export{Ht as default};
