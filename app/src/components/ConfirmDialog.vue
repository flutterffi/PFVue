<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["confirm", "cancel"]);
</script>

<template>
  <div v-if="open" class="modal-backdrop">
    <section class="modal-card confirm-card">
      <p class="eyebrow">Confirm Action</p>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>

      <div class="editor-actions">
        <button class="ghost-button" :disabled="loading" @click="emit('cancel')">Cancel</button>
        <button class="primary-button danger-solid-button" :disabled="loading" @click="emit('confirm')">
          {{ loading ? "Working..." : "Confirm" }}
        </button>
      </div>
    </section>
  </div>
</template>
