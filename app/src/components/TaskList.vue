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
});

const emit = defineEmits(["select"]);
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
        :class="{ selected: selectedTaskId === task.id }"
      >
        <div class="task-card-top">
          <div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
          </div>
          <StatusBadge :status="task.status" />
        </div>

        <div class="meta-row">
          <span class="meta-pill">{{ task.priority }}</span>
          <span class="meta-pill">{{ task.assignee }}</span>
        </div>

        <div class="card-actions">
          <button class="secondary-button" @click="emit('select', task.id)">Open</button>
        </div>
      </article>
    </div>
  </section>
</template>
