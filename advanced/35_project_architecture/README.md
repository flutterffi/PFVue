# 35 Project Architecture

This lesson is for structuring a Vue 3 app so it stays maintainable.

Starter folder shape:

```text
src/
  app/
  assets/
  components/
  composables/
  layouts/
  pages/
  router/
  stores/
  api/
  utils/
  types/
```

Questions to answer:

- what belongs in `components` vs `pages`
- when to create a composable
- where API functions live
- how to name files consistently
- how to separate domain concerns

Try this:

1. Design a folder structure for an admin dashboard.
2. Split shared UI from business-specific UI.
3. Decide how many store files you would create and why.
