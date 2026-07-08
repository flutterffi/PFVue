<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSkeleton from "@/components/LoadingSkeleton.vue";
import StateNotice from "@/components/StateNotice.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
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
    <SectionHeader
      eyebrow="Timeline"
      title="Recent Activity"
      description="A compact feed helps practice small dashboard modules and lightweight data summaries."
    />

    <LoadingSkeleton v-if="loading" :blocks="4" />

    <StateNotice
      v-else-if="items.length === 0"
      title="No activity yet"
      message="Recent updates will appear here after tasks are created or edited."
    />

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
