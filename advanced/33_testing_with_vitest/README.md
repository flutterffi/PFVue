# 33 Testing With Vitest

This lesson is for test mindset before full setup.

Targets to test:

- pure helper functions
- composables
- form validation
- conditional rendering
- emitted events

Starter examples:

```ts
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(1 + 2).toBe(3);
  });
});
```

```ts
it("shows empty state when no rows exist", () => {
  const wrapper = mount(TableView, { props: { rows: [] } });
  expect(wrapper.text()).toContain("No data");
});
```

Try this:

1. Choose one component from this repo and list what to test first.
2. Write test cases for a todo form.
3. Separate unit tests from integration-like component tests.
