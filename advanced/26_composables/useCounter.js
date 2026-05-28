import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  function increment() {
    count.value += 1;
  }

  function decrement() {
    count.value -= 1;
  }

  return {
    count,
    increment,
    decrement,
  };
}
