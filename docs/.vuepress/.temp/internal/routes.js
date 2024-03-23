export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"联系作者"} }],
  ["/teacher/course_outline.html", { loader: () => import(/* webpackChunkName: "course_outline.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/course_outline.html.js"), meta: {"title":"课程大纲"} }],
  ["/teacher/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/index.html.js"), meta: {"title":"教师端用户手册"} }],
  ["/teacher/teacher_manage.html", { loader: () => import(/* webpackChunkName: "teacher_manage.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/teacher_manage.html.js"), meta: {"title":"教师管理"} }],
  ["/teacher/traingplan.html", { loader: () => import(/* webpackChunkName: "traingplan.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/traingplan.html.js"), meta: {"title":"培养方案"} }],
  ["/student/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/student/index.html.js"), meta: {"title":"学生端用户手册"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
