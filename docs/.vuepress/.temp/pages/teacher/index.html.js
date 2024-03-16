import comp from "C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/index.html.vue"
const data = JSON.parse("{\"path\":\"/teacher/\",\"title\":\"教师端用户手册\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"教师端用户手册\",\"description\":\"教师端用户手册\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"teacher/README.md\"}")
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
