export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"联系作者"} }],
  ["/student/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/student/index.html.js"), meta: {"title":""} }],
  ["/teacher/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/index.html.js"), meta: {"title":"教师端用户手册"} }],
  ["/teacher/traingplan.html", { loader: () => import(/* webpackChunkName: "traingplan.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/teacher/traingplan.html.js"), meta: {"title":"培养方案"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/lixingyang/Desktop/sds-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
