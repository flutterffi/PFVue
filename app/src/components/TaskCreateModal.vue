<script setup>
import { reactive } from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  saving: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "create"]);

const form = reactive({
  title: "",
  category: "Workflow",
  status: "todo",
  priority: "medium",
  assignee: "",
  description: "",
});

const errors = reactive({
  title: "",
  assignee: "",
});

function resetForm() {
  form.title = "";
  form.category = "Workflow";
  form.status = "todo";
  form.priority = "medium";
  form.assignee = "";
  form.description = "";
  errors.title = "";
  errors.assignee = "";
}

function closeModal() {
  resetForm();
  emit("close");
}

function submitCreate() {
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

  emit("create", {
    title: form.title.trim(),
    category: form.category,
    status: form.status,
    priority: form.priority,
    assignee: form.assignee.trim(),
    description: form.description.trim() || "Add your own implementation details here.",
  });

  resetForm();
}
</script>

<template>
  <div v-if="open" class="modal-backdrop">
    <section class="modal-card">
      <div class="modal-header">
        <div>
          <p class="eyebrow">Create Task</p>
          <h2>New Workflow Task</h2>
        </div>
        <button class="ghost-button" :disabled="saving" @click="closeModal">Close</button>
      </div>

      <div class="form-grid">
        <label>
          Title
          <input v-model="form.title" type="text" placeholder="Example: Add pagination" />
          <small v-if="errors.title" class="field-error">{{ errors.title }}</small>
        </label>

        <label>
          Category
          <select v-model="form.category">
            <option value="Workflow">Workflow</option>
            <option value="UI">UI</option>
            <option value="State">State</option>
            <option value="Architecture">Architecture</option>
          </select>
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
          <input v-model="form.assignee" type="text" placeholder="Learner" />
          <small v-if="errors.assignee" class="field-error">{{ errors.assignee }}</small>
        </label>

        <label>
          Description
          <textarea v-model="form.description" rows="5" />
        </label>
      </div>

      <div class="editor-actions">
        <button class="primary-button" :disabled="saving" @click="submitCreate">
          {{ saving ? "Creating..." : "Create Task" }}
        </button>
        <button class="ghost-button" :disabled="saving" @click="closeModal">Cancel</button>
      </div>
    </section>
  </div>
</template>
