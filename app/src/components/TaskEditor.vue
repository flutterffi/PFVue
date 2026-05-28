<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  task: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["save", "create"]);

const form = reactive({
  title: "",
  status: "todo",
  priority: "medium",
  assignee: "",
  description: "",
});

watch(
  () => props.task,
  (task) => {
    if (!task) {
      form.title = "";
      form.status = "todo";
      form.priority = "medium";
      form.assignee = "";
      form.description = "";
      return;
    }

    form.title = task.title;
    form.status = task.status;
    form.priority = task.priority;
    form.assignee = task.assignee;
    form.description = task.description;
  },
  { immediate: true }
);

function submitUpdate() {
  if (!props.task) {
    return;
  }

  emit("save", {
    id: props.task.id,
    payload: {
      title: form.title.trim(),
      status: form.status,
      priority: form.priority,
      assignee: form.assignee.trim(),
      description: form.description.trim(),
    },
  });
}

function submitCreate() {
  emit("create", {
    title: "New formal app task",
    status: "todo",
    priority: "medium",
    assignee: "Learner",
    description: "Replace this placeholder with your own workflow task.",
  });
}
</script>

<template>
  <aside class="panel editor-panel">
    <template v-if="task">
      <h2>Edit Task</h2>

      <div class="form-grid">
        <label>
          Title
          <input v-model="form.title" type="text" />
        </label>

        <label>
          Status
          <select v-model="form.status">
            <option value="todo">Todo</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label>
          Priority
          <select v-model="form.priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Assignee
          <input v-model="form.assignee" type="text" />
        </label>

        <label>
          Description
          <textarea v-model="form.description" rows="6"></textarea>
        </label>
      </div>

      <button class="primary-button" @click="submitUpdate">Save Changes</button>
    </template>

    <template v-else>
      <h2>No Task Selected</h2>
      <p>Select a task from the list, or create a fresh one to practice the workflow.</p>
      <button class="primary-button" @click="submitCreate">Create Starter Task</button>
    </template>
  </aside>
</template>
