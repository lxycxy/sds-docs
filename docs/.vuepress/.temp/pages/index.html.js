import comp from "C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/assets/logo.png\",\"actions\":[{\"text\":\"教师端\",\"link\":\"/teacher/README.md\",\"type\":\"primary\"},{\"text\":\"学生端\",\"link\":\"/student/README.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"培养方案\",\"details\":\"管理培养方案\"},{\"title\":\"课程大纲\",\"details\":\"管理课程大纲\"},{\"title\":\"课程目标达成度\",\"details\":\"提交教学班成绩，系统可直接计算除课程目标达成度，并生成报告\"},{\"title\":\"课程成绩\",\"details\":\"在这里可以查询到更详细的课程成绩\"},{\"title\":\"毕业达成度\",\"details\":\"在这里查询您毕业要求的达成度\"},{\"title\":\"生成简历\",\"details\":\"在这里上传您的奖励和荣誉，生成您的简历\"}],\"footer\":\"MIT Licensed | Copyright © 2024 重庆交通大学|信息科学与工程学院\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
