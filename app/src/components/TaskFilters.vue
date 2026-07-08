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
  category: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  sortBy: {
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
  pageSize: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:keyword", "update:status", "update:category", "update:sortBy", "update:pageSize", "reset"]);
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

      <select :value="category" @change="emit('update:category', $event.target.value)">
        <option v-for="item in categories" :key="item" :value="item">
          {{ item }}
        </option>
      </select>

      <select :value="pageSize" @change="emit('update:pageSize', Number($event.target.value))">
        <option :value="3">3 per page</option>
        <option :value="5">5 per page</option>
        <option :value="8">8 per page</option>
      </select>

      <select :value="sortBy" @change="emit('update:sortBy', $event.target.value)">
        <option value="updated-desc">Latest updated</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
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
