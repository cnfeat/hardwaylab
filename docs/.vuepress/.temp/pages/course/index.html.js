import comp from "C:/Users/Administrator/Documents/GitHub/vuepress-starter/docs/.vuepress/.temp/pages/course/index.html.vue"
const data = JSON.parse("{\"path\":\"/course/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"meta\":[{\"name\":\"keywords\",\"content\":\"笨方法,手册\"},{\"name\":\"description\",\"content\":\"笨方法文化手册\"}],\"title\":\"Home\",\"heroImage\":\"https://s3.bmp.ovh/imgs/2024/02/18/81d17e6d4ddf82a5.png\",\"heroText\":\"笨方法文化手册\",\"tagline\":\"世上无难事，只怕笨方法\",\"actions\":[{\"text\":\"领取下载\",\"link\":\"/getbook.html\",\"type\":\"primary\"},{\"text\":\"课程产品\",\"link\":\"https://mp.weixin.qq.com/mp/homepage?__biz=MzA4MTQ0NDQxNg==&hid=1&sn=3d08ee3bd1610daaaac6e460f352989b&scene=1&devicetype=android-33&version=28002d3d&lang=zh_CN&nettype=WIFI&ascene=59&session_us=gh_f788adf0c391\",\"type\":\"secondary\"}],\"footer\":\"遵循 CC BY-NC 4.0 协议 | Copyright © 笨方法实验室\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"course/README.md\"}")
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
