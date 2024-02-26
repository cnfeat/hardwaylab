import comp from "C:/Users/Administrator/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/100card.html.vue"
const data = JSON.parse("{\"path\":\"/100card.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"∎简介\",\"slug\":\"∎简介\",\"link\":\"#∎简介\",\"children\":[]},{\"level\":2,\"title\":\"∎内容\",\"slug\":\"∎内容\",\"link\":\"#∎内容\",\"children\":[]},{\"level\":2,\"title\":\"∎价格\",\"slug\":\"∎价格\",\"link\":\"#∎价格\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"100card.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
