<script setup>
import StatusBadge from "@/components/StatusBadge.vue";

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  selectedTaskId: {
    type: Number,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["select", "quick-status", "delete", "previous-page", "next-page"]);
</script>

<template>
  <section class="panel">
    <div v-if="loading" class="empty-state">Loading tasks...</div>

    <div v-else-if="tasks.length === 0" class="empty-state">
      No tasks match the current filters.
    </div>

    <div v-else class="task-list">
      <article
        v-for="task in tasks"
        :key="task.id"
        class="task-card"
        :class="{ selected: selectedTaskId === task.id, compact }"
      >
        <div class="task-card-top">
          <div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
          </div>
          <StatusBadge :status="task.status" />
        </div>

        <div class="meta-row">
          <span class="meta-pill strong-pill">{{ task.category }}</span>
          <span class="meta-pill">{{ task.priority }}</span>
          <span class="meta-pill">{{ task.assignee }}</span>
        </div>

        <div class="card-actions">
          <button class="secondary-button" @click="emit('select', task.id)">Open</button>
          <button class="ghost-button" @click="emit('quick-status', task.id)">Next Status</button>
          <button class="ghost-button danger-button" @click="emit('delete', task.id)">Delete</button>
        </div>
      </article>

      <div v-if="totalPages > 1" class="pagination-bar">
        <button class="ghost-button" :disabled="currentPage === 1" @click="emit('previous-page')">
          Previous
        </button>
        <span class="pagination-copy">Page {{ currentPage }} of {{ totalPages }}</span>
        <button class="ghost-button" :disabled="currentPage === totalPages" @click="emit('next-page')">
          Next
        </button>
      </div>
    </div>
  </section>
</template>
