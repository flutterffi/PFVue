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
});

const emit = defineEmits(["update:keyword", "update:status", "reset"]);
</script>

<template>
  <div class="toolbar">
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
</template>
