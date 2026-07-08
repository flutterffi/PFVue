<script setup>
import { storeToRefs } from "pinia";
import { usePreferencesStore } from "@/stores/preferences";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const preferencesStore = usePreferencesStore();
const { preferences } = storeToRefs(preferencesStore);
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <p class="eyebrow">PFVue Formal App</p>
        <h1>{{ title }}</h1>
        <p class="header-copy">{{ description }}</p>
        <div class="header-meta">
          <span class="meta-pill">Track: {{ preferences.studyTrack }}</span>
          <span v-if="preferences.compactList" class="meta-pill">Compact List</span>
        </div>
      </div>
      <nav class="header-nav">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
    </header>

    <slot />
  </div>
</template>
