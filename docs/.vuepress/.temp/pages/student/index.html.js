import comp from "C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/student/index.html.vue"
const data = JSON.parse("{\"path\":\"/student/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1710557322000,\"contributors\":[{\"name\":\"lxy\",\"email\":\"lxy2914344878@163.com\",\"commits\":1}]},\"filePathRelative\":\"student/README.md\"}")
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
