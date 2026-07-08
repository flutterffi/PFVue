<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import AppShell from "@/components/AppShell.vue";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import TaskEditor from "@/components/TaskEditor.vue";
import { useTaskStore } from "@/stores/tasks";

const route = useRoute();
const router = useRouter();
const taskStore = useTaskStore();
const { tasks, loading, saving, selectedTask } = storeToRefs(taskStore);

const taskId = computed(() => Number(route.params.id));
const deleteOpen = ref(false);
const selectedTaskIndex = computed(() => {
  if (!selectedTask.value) {
    return -1;
  }

  return tasks.value.findIndex((task) => task.id === selectedTask.value.id);
});
const previousTask = computed(() => {
  if (selectedTaskIndex.value <= 0) {
    return null;
  }

  return tasks.value[selectedTaskIndex.value - 1] || null;
});
const nextTask = computed(() => {
  if (selectedTaskIndex.value < 0 || selectedTaskIndex.value >= tasks.value.length - 1) {
    return null;
  }

  return tasks.value[selectedTaskIndex.value + 1] || null;
});

async function ensureTaskLoaded() {
  if (tasks.value.length === 0) {
    await taskStore.fetchTasks();
  }

  if (taskId.value) {
    taskStore.selectTask(taskId.value);
  }
}

onMounted(() => {
  ensureTaskLoaded();
});

watch(
  () => route.params.id,
  () => {
    ensureTaskLoaded();
  }
);

async function handleSave({ id, payload }) {
  await taskStore.saveTask(id, payload);
}

async function handleDelete() {
  if (!selectedTask.value) {
    return;
  }

  await taskStore.removeTaskById(selectedTask.value.id);
  deleteOpen.value = false;
  router.push({ name: "dashboard" });
}

async function handleQuickStatus() {
  if (!selectedTask.value) {
    return;
  }

  await taskStore.advanceTaskStatus(selectedTask.value.id);
}

function requestDelete() {
  if (!selectedTask.value) {
    return;
  }

  deleteOpen.value = true;
}

function openSiblingTask(id) {
  taskStore.selectTask(id);
  router.push({ name: "task-detail", params: { id } });
}
</script>

<template>
  <AppShell
    title="Task Detail"
    description="Use a dedicated route view to practice a more realistic list-to-detail admin workflow."
  >
    <div class="topbar">
      <div>
        <h2 v-if="selectedTask">{{ selectedTask.title }}</h2>
        <h2 v-else>Task Detail</h2>
        <p v-if="selectedTask">
          {{ selectedTask.category }} · {{ selectedTask.status }} · {{ selectedTask.assignee }}
        </p>
        <p v-else>Open a task from the dashboard to inspect and edit it here.</p>
      </div>

      <div class="topbar-actions">
        <button class="ghost-button" @click="router.push({ name: 'dashboard' })">Back To Dashboard</button>
        <button class="primary-button" :disabled="loading || saving || !selectedTask" @click="handleQuickStatus">
          Advance Status
        </button>
      </div>
    </div>

    <section class="detail-route-grid">
      <section class="panel">
        <template v-if="loading">
          <div class="empty-state">Loading task details...</div>
        </template>

        <template v-else-if="selectedTask">
          <h3>Task Overview</h3>
          <div class="detail-facts">
            <div class="detail-fact">
              <strong>Category</strong>
              <span>{{ selectedTask.category }}</span>
            </div>
            <div class="detail-fact">
              <strong>Status</strong>
              <span>{{ selectedTask.status }}</span>
            </div>
            <div class="detail-fact">
              <strong>Priority</strong>
              <span>{{ selectedTask.priority }}</span>
            </div>
            <div class="detail-fact">
              <strong>Assignee</strong>
              <span>{{ selectedTask.assignee }}</span>
            </div>
          </div>

          <div class="detail-description">
            <strong>Description</strong>
            <p>{{ selectedTask.description }}</p>
          </div>

          <div class="detail-neighbors">
            <button
              class="ghost-button"
              :disabled="!previousTask"
              @click="previousTask && openSiblingTask(previousTask.id)"
            >
              {{ previousTask ? `Previous: ${previousTask.title}` : "No Previous Task" }}
            </button>
            <button class="ghost-button" :disabled="!nextTask" @click="nextTask && openSiblingTask(nextTask.id)">
              {{ nextTask ? `Next: ${nextTask.title}` : "No Next Task" }}
            </button>
          </div>
        </template>

        <template v-else>
          <div class="empty-state">The requested task could not be found.</div>
        </template>
      </section>

      <TaskEditor
        :task="selectedTask"
        :saving="saving"
        @save="handleSave"
        @open-create="router.push({ name: 'dashboard' })"
        @delete="requestDelete"
      />
    </section>

    <ConfirmDialog
      :open="deleteOpen"
      title="Delete task?"
      message="This removes the task from the local mock data store and returns you to the dashboard."
      :loading="saving"
      @cancel="deleteOpen = false"
      @confirm="handleDelete"
    />
  </AppShell>
</template>
