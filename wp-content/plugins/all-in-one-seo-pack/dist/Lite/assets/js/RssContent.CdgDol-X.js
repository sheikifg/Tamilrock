import{a as S,u as b}from"./links.C572zDFG.js";import{C}from"./Caret.CGwYaMo_.js";import{C as y}from"./Card.CuS1kKeW.js";import{C as k}from"./HtmlTagsEditor.BQtOQ8ni.js";import{C as v}from"./SettingsRow.BzmNmU2T.js";import{S as A}from"./External.1pzVM6vX.js";import{_ as R}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{v as s,c as w,B as o,l as n,o as u,a as r,t as i,C as m,k as L,b as $}from"./runtime-core.esm-bundler.DMBo7TXk.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.D5tYIqKS.js";import"./Tooltip.CRFjFnpF.js";import"./index.CdwEuUIl.js";import"./Slide.D2pWF0rN.js";import"./Editor.DxKrKvK1.js";import"./isEqual.6YJSJDqn.js";import"./_baseIsEqual.8qmZqLuw.js";import"./_getTag.Dxs-K0Yj.js";import"./_baseClone.Zn5yUk9p.js";import"./_arrayEach.Fgt6pfHj.js";import"./UnfilteredHtml.C9zHp9e0.js";import"./Row.CHjKxnPP.js";const T={setup(){return{optionsStore:S(),rootStore:b()}},components:{CoreAlert:C,CoreCard:y,CoreHtmlTagsEditor:k,CoreSettingsRow:v,SvgExternal:A},data(){return{strings:{tooltip:this.$t.__("Automatically add content to your site's RSS feed.",this.$td),description:this.$t.__("This feature is used to automatically add content to your site's RSS feed. More specifically, it allows you to add links back to your blog and your blog posts so scrapers will automatically add these links too. This helps search engines identify you as the original source of the content.",this.$td),learnMore:this.$t.__("Learn more",this.$td),rssFeedDisabled:this.$t.sprintf(this.$t.__("Your RSS feed has been disabled. Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings. You can re-enable the global RSS feed in the %1$scrawl content settings%2$s.",this.$td),'<a href="'+this.rootStore.aioseo.urls.aio.searchAppearance+'&aioseo-scroll=crawl-content-global-feed&aioseo-highlight=crawl-content-global-feed#/advanced">',"</a>"),rssContent:this.$t.__("RSS Content Settings",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),rssBeforeContent:this.$t.__("RSS Before Content",this.$td),rssAfterContent:this.$t.__("RSS After Content",this.$td),beforeRssDescription:this.$t.__("Add content before each post in your site feed.",this.$td),afterRssDescription:this.$t.__("Add content after each post in your site feed.",this.$td),unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}}},x={class:"aioseo-rss-content"},B={class:"aioseo-settings-row aioseo-section-description"},D=["innerHTML"],V={class:"aioseo-description"},H={class:"aioseo-description"};function M(l,a,N,e,t,O){const _=s("core-alert"),f=s("svg-external"),h=s("base-button"),c=s("core-settings-row"),p=s("core-html-tags-editor"),g=s("core-card");return u(),w("div",x,[o(g,{slug:"rssContent","header-text":t.strings.rssContent},{tooltip:n(()=>[r("div",null,i(t.strings.tooltip),1)]),default:n(()=>[r("div",B,[m(i(t.strings.description)+" ",1),r("span",{innerHTML:l.$links.getDocLink(l.$constants.GLOBAL_STRINGS.learnMore,"rssContent",!0)},null,8,D),e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable&&!e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global?(u(),L(_,{key:0,type:"red",innerHTML:t.strings.rssFeedDisabled},null,8,["innerHTML"])):$("",!0)]),o(c,{name:l.$constants.GLOBAL_STRINGS.preview},{content:n(()=>[o(h,{size:"medium",type:"blue",tag:"a",href:e.rootStore.aioseo.urls.feeds.global,target:"_blank",disabled:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable&&!e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global},{default:n(()=>[o(f),m(" "+i(t.strings.openYourRssFeed),1)]),_:1},8,["href","disabled"])]),_:1},8,["name"]),o(c,{name:t.strings.rssBeforeContent},{content:n(()=>[o(p,{checkUnfilteredHtml:"",modelValue:e.optionsStore.options.rssContent.before,"onUpdate:modelValue":a[0]||(a[0]=d=>e.optionsStore.options.rssContent.before=d),"minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable&&!e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global},null,8,["modelValue","disabled"]),r("div",V,i(t.strings.beforeRssDescription),1)]),_:1},8,["name"]),o(c,{name:t.strings.rssAfterContent},{content:n(()=>[o(p,{checkUnfilteredHtml:"",modelValue:e.optionsStore.options.rssContent.after,"onUpdate:modelValue":a[1]||(a[1]=d=>e.optionsStore.options.rssContent.after=d),"minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:e.optionsStore.options.searchAppearance.advanced.crawlCleanup.enable&&!e.optionsStore.options.searchAppearance.advanced.crawlCleanup.feeds.global},null,8,["modelValue","disabled"]),r("div",H,i(t.strings.afterRssDescription),1)]),_:1},8,["name"])]),_:1},8,["header-text"])])}const re=R(T,[["render",M]]);export{re as default};
