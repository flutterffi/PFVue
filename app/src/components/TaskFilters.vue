<script setup>
defineProps({
  keyword: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  totalResults: {
    type: Number,
    required: true,
  },
  pageRange: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:keyword", "update:status", "reset"]);
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-main">
      <input
        :value="keyword"
        type="text"
        placeholder="Search tasks"
        @input="emit('update:keyword', $event.target.value)"
      />

      <select :value="status" @change="emit('update:status', $event.target.value)">
        <option value="all">All statuses</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>

      <button class="ghost-button" @click="emit('reset')">Reset</button>
    </div>

    <p class="toolbar-summary">
      <template v-if="totalResults > 0">
        Showing {{ pageRange.start }}-{{ pageRange.end }} of {{ totalResults }} tasks
      </template>
      <template v-else>
        No tasks match the current filters
      </template>
    </p>
  </div>
</template>
