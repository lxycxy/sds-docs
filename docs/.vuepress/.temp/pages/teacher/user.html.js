import comp from "C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/user.html.vue"
const data = JSON.parse("{\"path\":\"/teacher/user.html\",\"title\":\"登录与身份\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"teacher/user.md\"}")
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
