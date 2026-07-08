import { computed, ref } from "vue";
import { defineStore } from "pinia";

const STORAGE_KEY = "pfvue-app-preferences";

const defaultPreferences = {
  displayName: "",
  studyTrack: "Vue 3 Project Practice",
  defaultStatusFilter: "all",
  defaultCategory: "all",
  pageSize: 3,
  compactList: false,
  showHints: true,
};

function readPreferences() {
  const savedValue = localStorage.getItem(STORAGE_KEY);
  if (!savedValue) {
    return { ...defaultPreferences };
  }

  try {
    return {
      ...defaultPreferences,
      ...JSON.parse(savedValue),
    };
  } catch {
    return { ...defaultPreferences };
  }
}

function writePreferences(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export const usePreferencesStore = defineStore("preferences", () => {
  const preferences = ref(readPreferences());

  const displayName = computed(() => preferences.value.displayName.trim());

  function updatePreferences(payload) {
    preferences.value = {
      ...preferences.value,
      ...payload,
    };
    writePreferences(preferences.value);
  }

  function resetPreferences() {
    preferences.value = { ...defaultPreferences };
    writePreferences(preferences.value);
  }

  return {
    preferences,
    displayName,
    updatePreferences,
    resetPreferences,
  };
});
