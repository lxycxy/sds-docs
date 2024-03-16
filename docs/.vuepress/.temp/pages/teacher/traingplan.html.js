import comp from "C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/traingplan.html.vue"
const data = JSON.parse("{\"path\":\"/teacher/traingplan.html\",\"title\":\"培养方案\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"培养方案\",\"description\":\"培养相关功能\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"teacher/traingplan.md\"}")
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
