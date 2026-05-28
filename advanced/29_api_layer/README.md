# 29 API Layer

This lesson is for separating UI code from request code.

Suggested folder shape:

```text
api/
  client.js
  lessonApi.js
  userApi.js
```

Starter examples:

```js
export async function getLessons() {
  const response = await fetch("/api/lessons");
  if (!response.ok) throw new Error("Failed to load lessons");
  return response.json();
}
```

```js
export async function createLesson(payload) {
  const response = await fetch("/api/lessons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed to create lesson");
  return response.json();
}
```

Try this:

1. Add a shared request helper.
2. Normalize error handling.
3. Separate mock data from API functions.
