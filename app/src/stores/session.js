import { computed, ref } from "vue";
import { defineStore } from "pinia";

const STORAGE_KEY = "pfvue-app-session";

function readUser() {
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (!savedValue) {
    return null;
  }

  try {
    return JSON.parse(savedValue);
  } catch {
    return null;
  }
}

function writeUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export const useSessionStore = defineStore("session", () => {
  const user = ref(readUser());

  const isAuthenticated = computed(() => Boolean(user.value));

  function signIn(payload) {
    user.value = {
      name: payload.name || "Learner",
      email: payload.email,
    };
    writeUser(user.value);
  }

  function signOut() {
    user.value = null;
    writeUser(null);
  }

  return {
    user,
    isAuthenticated,
    signIn,
    signOut,
  };
});
