<script setup>
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";

defineProps({
  summary: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const cards = [
  { key: "total", label: "Total Tasks" },
  { key: "todo", label: "Todo" },
  { key: "inProgress", label: "In Progress" },
  { key: "done", label: "Done" },
  { key: "highPriority", label: "High Priority" },
];
</script>

<template>
  <section class="summary-grid">
    <article v-for="card in cards" :key="card.key" class="summary-card">
      <small>{{ card.label }}</small>
      <LoadingSkeleton v-if="loading" :blocks="1" compact />
      <strong v-else>{{ summary[card.key] }}</strong>
    </article>
  </section>
</template>
