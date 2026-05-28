# 30 TypeScript With Vue

This lesson introduces TypeScript shape in Vue components.

Starter examples:

```ts
type Lesson = {
  id: number;
  title: string;
  done: boolean;
};
```

```ts
const lessons = ref<Lesson[]>([]);
const selectedId = ref<number | null>(null);
```

```ts
defineProps<{
  title: string;
  done?: boolean;
}>();
```

Practice goals:

- type props
- type emitted events
- type API response data
- use unions for UI state

Try this:

1. Design a typed table row model.
2. Type a form state object.
3. Use a union type for `"idle" | "loading" | "error" | "success"`.
