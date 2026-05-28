# 32 Auth And Permission Shape

This lesson is for thinking about authentication and permission-aware UI.

Possible state shape:

```js
const authState = {
  token: null,
  user: null,
  permissions: [],
};
```

Questions to answer:

- what happens before login
- where the token lives
- how to protect routes
- how to hide or disable UI by permission

Simple examples:

```js
const canEditLessons = permissions.includes("lesson:edit");
const canDeleteLessons = permissions.includes("lesson:delete");
```

Try this:

1. Design roles for admin, editor, and viewer.
2. Decide what the app should show for unauthorized pages.
3. Write the guard logic in pseudocode.
