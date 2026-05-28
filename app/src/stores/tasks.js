import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { createTask, getTasks, updateTask } from "@/api/taskApi";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref([]);
  const loading = ref(false);
  const error = ref("");
  const selectedTaskId = ref(null);

  const selectedTask = computed(() => {
    return tasks.value.find((task) => task.id === selectedTaskId.value) || null;
  });

  const summary = computed(() => {
    return {
      total: tasks.value.length,
      todo: tasks.value.filter((task) => task.status === "todo").length,
      inProgress: tasks.value.filter((task) => task.status === "in-progress").length,
      done: tasks.value.filter((task) => task.status === "done").length,
    };
  });

  async function fetchTasks() {
    loading.value = true;
    error.value = "";

    try {
      const result = await getTasks();
      tasks.value = result;
      if (!selectedTaskId.value && result.length > 0) {
        selectedTaskId.value = result[0].id;
      }
    } catch (fetchError) {
      error.value = fetchError.message;
    } finally {
      loading.value = false;
    }
  }

  async function addTask(payload) {
    const newTask = await createTask(payload);
    tasks.value.unshift(newTask);
    selectedTaskId.value = newTask.id;
  }

  async function saveTask(id, payload) {
    const updated = await updateTask(id, payload);
    const index = tasks.value.findIndex((task) => task.id === id);
    if (index >= 0) {
      tasks.value[index] = updated;
    }
  }

  function selectTask(id) {
    selectedTaskId.value = id;
  }

  return {
    tasks,
    loading,
    error,
    selectedTask,
    summary,
    fetchTasks,
    addTask,
    saveTask,
    selectTask,
  };
});
