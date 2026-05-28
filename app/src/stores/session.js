import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", () => {
  const user = ref(null);

  const isAuthenticated = computed(() => Boolean(user.value));

  function signIn(payload) {
    user.value = {
      name: payload.name || "Learner",
      email: payload.email,
    };
  }

  function signOut() {
    user.value = null;
  }

  return {
    user,
    isAuthenticated,
    signIn,
    signOut,
  };
});
