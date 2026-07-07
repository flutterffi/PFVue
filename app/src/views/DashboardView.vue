<script setup>
import { onMounted, ref } from "vue";
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
const { tasks, loading, error, saving, selectedTask, summary } = storeToRefs(taskStore);
const { keyword, status, filteredTasks, resetFilters } = useTaskFilters(tasks);
const banner = ref({
  type: "",
  message: "",
});

onMounted(() => {
  taskStore.fetchTasks();
});

async function handleSave({ id, payload }) {
  try {
    await taskStore.saveTask(id, payload);
    showBanner("success", "Task changes saved.");
  } catch (saveError) {
    showBanner("error", saveError.message);
  }
}

async function handleCreate(payload) {
  try {
    await taskStore.addTask(payload);
    showBanner("success", "Starter task created.");
  } catch (createError) {
    showBanner("error", createError.message);
  }
}

async function handleDelete(id) {
  try {
    await taskStore.removeTaskById(id);
    showBanner("success", "Task deleted.");
  } catch (deleteError) {
    showBanner("error", deleteError.message);
  }
}

async function handleQuickStatus(id) {
  try {
    await taskStore.advanceTaskStatus(id);
    showBanner("success", "Task status advanced.");
  } catch (statusError) {
    showBanner("error", statusError.message);
  }
}

function showBanner(type, message) {
  banner.value = { type, message };

  window.setTimeout(() => {
    if (banner.value.message === message) {
      banner.value = { type: "", message: "" };
    }
  }, 2400);
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
    <div v-if="banner.message" class="feedback-banner" :class="banner.type">
      {{ banner.message }}
    </div>

    <section class="workspace-grid">
      <TaskList
        :tasks="filteredTasks"
        :selected-task-id="selectedTask?.id ?? null"
        :loading="loading"
        @select="taskStore.selectTask"
        @quick-status="handleQuickStatus"
        @delete="handleDelete"
      />

      <TaskEditor
        :task="selectedTask"
        :saving="saving"
        @save="handleSave"
        @create="handleCreate"
        @delete="handleDelete"
      />
    </section>
  </AppShell>
</template>
