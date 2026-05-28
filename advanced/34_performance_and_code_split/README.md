# 34 Performance And Code Split

This lesson is for performance thinking in frontend projects.

Core ideas:

- lazy-loaded routes
- avoid unnecessary rerenders
- split heavy pages
- cache repeated request results carefully
- measure before optimizing

Starter examples:

```js
const LessonPage = () => import("./pages/LessonPage.vue");
```

```js
const routes = [
  {
    path: "/lessons",
    component: () => import("./pages/LessonListPage.vue"),
  },
];
```

Try this:

1. Choose which admin pages should be lazy loaded.
2. List three situations where optimization is premature.
3. Explain how loading states change when code splitting is added.
