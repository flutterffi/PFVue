# 27 Vue Router

This lesson introduces route thinking before a full Vite project setup.

Core ideas to practice:

- route records
- nested pages
- params
- redirects
- navigation links
- lazy-loaded pages later

Starter route shape:

```js
const routes = [
  { path: "/", component: HomePage },
  { path: "/lessons", component: LessonListPage },
  { path: "/lessons/:id", component: LessonDetailPage },
  { path: "/settings", component: SettingsPage },
];
```

Try this:

1. Design routes for an admin dashboard.
2. Add an auth-only route in pseudocode.
3. Decide which pages should be nested under a shared layout.
