<script setup>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import AppShell from "@/components/AppShell.vue";
import { usePreferencesStore } from "@/stores/preferences";
import { useSessionStore } from "@/stores/session";

const preferencesStore = usePreferencesStore();
const sessionStore = useSessionStore();
const { preferences } = storeToRefs(preferencesStore);
const banner = ref("");

const form = reactive({
  displayName: preferences.value.displayName,
  studyTrack: preferences.value.studyTrack,
  defaultStatusFilter: preferences.value.defaultStatusFilter,
  compactList: preferences.value.compactList,
  showHints: preferences.value.showHints,
});

function savePreferences() {
  preferencesStore.updatePreferences({ ...form });
  banner.value = "Preferences saved.";
}

function useSessionName() {
  form.displayName = sessionStore.user?.name || "";
  banner.value = "Session name copied into preferences.";
}

function resetPreferences() {
  preferencesStore.resetPreferences();
  form.displayName = preferences.value.displayName;
  form.studyTrack = preferences.value.studyTrack;
  form.defaultStatusFilter = preferences.value.defaultStatusFilter;
  form.compactList = preferences.value.compactList;
  form.showHints = preferences.value.showHints;
  banner.value = "Preferences reset.";
}
</script>

<template>
  <AppShell
    title="PFVue Settings"
    description="Use this page to practice route-level structure and small settings-style forms."
  >
    <section class="panel">
      <h2>Settings Practice</h2>
      <p>Adjust app-level preferences here and then return to the dashboard to see the changes.</p>

      <p v-if="banner" class="success-copy">{{ banner }}</p>

      <div class="settings-grid">
        <label>
          Display Name
          <input v-model="form.displayName" type="text" placeholder="Optional custom dashboard name" />
        </label>

        <button class="ghost-button inline-button" @click="useSessionName">
          Use Current Session Name
        </button>

        <label>
          Study Track
          <input v-model="form.studyTrack" type="text" placeholder="Vue 3 Project Practice" />
        </label>

        <label>
          Default Dashboard Filter
          <select v-model="form.defaultStatusFilter">
            <option value="all">All statuses</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label class="checkbox-row">
          <input v-model="form.compactList" type="checkbox" />
          Use compact task cards
        </label>

        <label class="checkbox-row">
          <input v-model="form.showHints" type="checkbox" />
          Show dashboard hints
        </label>
      </div>

      <div class="editor-actions">
        <button class="primary-button" @click="savePreferences">Save Preferences</button>
        <button class="ghost-button" @click="resetPreferences">Reset Preferences</button>
      </div>
    </section>
  </AppShell>
</template>
