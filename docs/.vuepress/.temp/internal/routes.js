export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/getbook.html", { loader: () => import(/* webpackChunkName: "getbook.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/getbook.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/course/100card.html", { loader: () => import(/* webpackChunkName: "100card.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/course/100card.html.js"), meta: {"title":"卡片创作100条"} }],
  ["/course/100Inspiration.html", { loader: () => import(/* webpackChunkName: "100Inspiration.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/course/100Inspiration.html.js"), meta: {"title":"灵感觉醒100条"} }],
  ["/course/100question.html", { loader: () => import(/* webpackChunkName: "100question.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/course/100question.html.js"), meta: {"title":"日课一问100条"} }],
  ["/course/productivity.html", { loader: () => import(/* webpackChunkName: "productivity.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/course/productivity.html.js"), meta: {"title":"个人生产力发展指南"} }],
  ["/course/writing.html", { loader: () => import(/* webpackChunkName: "writing.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/course/writing.html.js"), meta: {"title":"笨方法学写作"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Administrator/Documents/GitHub/hardwaylab/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
