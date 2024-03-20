export const searchIndex = [
  {
    "title": "首页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "联系作者",
    "headers": [],
    "path": "/contact/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "教师端用户手册",
    "headers": [
      {
        "level": 2,
        "title": "培养方案",
        "slug": "培养方案",
        "link": "#培养方案",
        "children": []
      }
    ],
    "path": "/teacher/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "培养方案",
    "headers": [
      {
        "level": 2,
        "title": "添加培养方案",
        "slug": "添加培养方案",
        "link": "#添加培养方案",
        "children": []
      },
      {
        "level": 2,
        "title": "培养方案审核",
        "slug": "培养方案审核",
        "link": "#培养方案审核",
        "children": []
      },
      {
        "level": 2,
        "title": "培养方案查看",
        "slug": "培养方案查看",
        "link": "#培养方案查看",
        "children": []
      },
      {
        "level": 2,
        "title": "学生能力评估",
        "slug": "学生能力评估",
        "link": "#学生能力评估",
        "children": []
      }
    ],
    "path": "/teacher/traingplan.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "学生端用户手册",
    "headers": [],
    "path": "/student/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
