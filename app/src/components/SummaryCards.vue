<script setup>
defineProps({
  summary: {
    type: Object,
    required: true,
  },
});

const cards = [
  { key: "total", label: "Total Tasks" },
  { key: "todo", label: "Todo" },
  { key: "inProgress", label: "In Progress" },
  { key: "done", label: "Done" },
];
</script>

<template>
  <section class="summary-grid">
    <article v-for="card in cards" :key="card.key" class="summary-card">
      <small>{{ card.label }}</small>
      <strong>{{ summary[card.key] }}</strong>
    </article>
  </section>
</template>
