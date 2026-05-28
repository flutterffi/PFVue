# 28 Pinia Store

This lesson is for global state design before wiring a full project.

Starter store shape:

```js
export const useLessonStore = defineStore("lessons", {
  state: () => ({
    lessons: [],
    loading: false,
  }),
  getters: {
    completedCount: (state) => state.lessons.filter((item) => item.done).length,
  },
  actions: {
    async fetchLessons() {
      this.loading = true;
      try {
        this.lessons = await api.getLessons();
      } finally {
        this.loading = false;
      }
    },
  },
});
```

Think about:

- what belongs in local state vs store state
- how to avoid overusing global state
- which async flows should live in actions

Try this:

1. Design a user store and a permission store.
2. Add an action for creating a lesson.
3. Add an error field and loading field.
