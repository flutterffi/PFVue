import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { createTask, deleteTask, getTasks, updateTask } from "@/api/taskApi";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref([]);
  const loading = ref(false);
  const error = ref("");
  const selectedTaskId = ref(null);
  const saving = ref(false);

  const selectedTask = computed(() => {
    return tasks.value.find((task) => task.id === selectedTaskId.value) || null;
  });

  const summary = computed(() => {
    return {
      total: tasks.value.length,
      todo: tasks.value.filter((task) => task.status === "todo").length,
      inProgress: tasks.value.filter((task) => task.status === "in-progress").length,
      done: tasks.value.filter((task) => task.status === "done").length,
      highPriority: tasks.value.filter((task) => task.priority === "high").length,
    };
  });

  const recentActivity = computed(() => {
    return [...tasks.value]
      .sort((left, right) => {
        const leftTime = new Date(left.updatedAt || left.createdAt || 0).getTime();
        const rightTime = new Date(right.updatedAt || right.createdAt || 0).getTime();
        return rightTime - leftTime;
      })
      .slice(0, 4);
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
    saving.value = true;

    try {
      const newTask = await createTask(payload);
      tasks.value.unshift(newTask);
      selectedTaskId.value = newTask.id;
      return newTask;
    } finally {
      saving.value = false;
    }
  }

  async function saveTask(id, payload) {
    saving.value = true;

    try {
      const updated = await updateTask(id, payload);
      const index = tasks.value.findIndex((task) => task.id === id);
      if (index >= 0) {
        tasks.value[index] = updated;
      }

      return updated;
    } finally {
      saving.value = false;
    }
  }

  async function removeTaskById(id) {
    saving.value = true;

    try {
      await deleteTask(id);
      tasks.value = tasks.value.filter((task) => task.id !== id);

      if (selectedTaskId.value === id) {
        selectedTaskId.value = tasks.value[0]?.id ?? null;
      }
    } finally {
      saving.value = false;
    }
  }

  function selectTask(id) {
    selectedTaskId.value = id;
  }

  async function advanceTaskStatus(id) {
    const task = tasks.value.find((item) => item.id === id);
    if (!task) {
      throw new Error("Task not found.");
    }

    const nextStatusByCurrent = {
      todo: "in-progress",
      "in-progress": "done",
      done: "todo",
    };

    return saveTask(id, {
      ...task,
      status: nextStatusByCurrent[task.status],
    });
  }

  return {
    tasks,
    loading,
    error,
    saving,
    selectedTask,
    summary,
    recentActivity,
    fetchTasks,
    addTask,
    saveTask,
    removeTaskById,
    advanceTaskStatus,
    selectTask,
  };
});
