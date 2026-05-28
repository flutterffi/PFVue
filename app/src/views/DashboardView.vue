<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import AppShell from "@/components/AppShell.vue";
import SummaryCards from "@/components/SummaryCards.vue";
import TaskEditor from "@/components/TaskEditor.vue";
import TaskFilters from "@/components/TaskFilters.vue";
import TaskList from "@/components/TaskList.vue";
import { useTaskFilters } from "@/composables/useTaskFilters";
import { useSessionStore } from "@/stores/session";
import { useTaskStore } from "@/stores/tasks";

const sessionStore = useSessionStore();
const taskStore = useTaskStore();
const { tasks, loading, error, selectedTask, summary } = storeToRefs(taskStore);
const { keyword, status, filteredTasks, resetFilters } = useTaskFilters(tasks);

onMounted(() => {
  taskStore.fetchTasks();
});

async function handleSave({ id, payload }) {
  await taskStore.saveTask(id, payload);
}

async function handleCreate(payload) {
  await taskStore.addTask(payload);
}
</script>

<template>
  <AppShell
    title="PFVue Dashboard"
    description="A real Vite + Vue 3 workspace with routing, Pinia, component structure, and a mock API layer."
  >
    <div class="topbar">
      <div>
        <h2>Welcome, {{ sessionStore.user?.name || "Learner" }}</h2>
        <p>Practice a production-style list, filter, and edit workflow.</p>
      </div>

      <button class="ghost-button" @click="sessionStore.signOut()">Sign Out</button>
    </div>

    <SummaryCards :summary="summary" />

    <TaskFilters
      v-model:keyword="keyword"
      v-model:status="status"
      @reset="resetFilters"
    />

    <p v-if="error" class="error-copy">{{ error }}</p>

    <section class="workspace-grid">
      <TaskList
        :tasks="filteredTasks"
        :selected-task-id="selectedTask?.id ?? null"
        :loading="loading"
        @select="taskStore.selectTask"
      />

      <TaskEditor
        :task="selectedTask"
        @save="handleSave"
        @create="handleCreate"
      />
    </section>
  </AppShell>
</template>
