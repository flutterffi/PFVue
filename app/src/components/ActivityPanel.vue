<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});

function formatDate(value) {
  if (!value) {
    return "No timestamp";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
</script>

<template>
  <section class="panel activity-panel">
    <h2>Recent Activity</h2>

    <div v-if="items.length === 0" class="empty-state">No recent task activity yet.</div>

    <div v-else class="activity-list">
      <article v-for="item in items" :key="item.id" class="activity-item">
        <div>
          <strong>{{ item.title }}</strong>
          <p>{{ item.category }} · {{ item.status }} · {{ item.assignee }}</p>
        </div>
        <span class="activity-time">{{ formatDate(item.updatedAt || item.createdAt) }}</span>
      </article>
    </div>
  </section>
</template>
