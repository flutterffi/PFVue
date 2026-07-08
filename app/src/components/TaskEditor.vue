<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  task: {
    type: Object,
    default: null,
  },
  saving: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["save", "open-create", "delete"]);

const form = reactive({
  title: "",
  status: "todo",
  priority: "medium",
  assignee: "",
  description: "",
});

const errors = reactive({
  title: "",
  assignee: "",
});

watch(
  () => props.task,
  (task) => {
    errors.title = "";
    errors.assignee = "";

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

  errors.title = "";
  errors.assignee = "";

  if (!form.title.trim()) {
    errors.title = "Title is required.";
  }

  if (!form.assignee.trim()) {
    errors.assignee = "Assignee is required.";
  }

  if (errors.title || errors.assignee) {
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

</script>

<template>
  <aside class="panel editor-panel">
    <template v-if="task">
      <h2>Edit Task</h2>

      <div class="form-grid">
        <label>
          Title
          <input v-model="form.title" type="text" />
          <small v-if="errors.title" class="field-error">{{ errors.title }}</small>
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
          <small v-if="errors.assignee" class="field-error">{{ errors.assignee }}</small>
        </label>

        <label>
          Description
          <textarea v-model="form.description" rows="6"></textarea>
        </label>
      </div>

      <div class="editor-actions">
        <button class="primary-button" :disabled="saving" @click="submitUpdate">
          {{ saving ? "Saving..." : "Save Changes" }}
        </button>
        <button class="ghost-button danger-button" :disabled="saving" @click="emit('delete', task.id)">
          Delete Task
        </button>
      </div>
    </template>

    <template v-else>
      <h2>No Task Selected</h2>
      <p>Select a task from the list, or create a fresh one to practice the workflow.</p>
      <button class="primary-button" :disabled="saving" @click="emit('open-create')">
        {{ saving ? "Creating..." : "Open Create Task" }}
      </button>
    </template>
  </aside>
</template>
