<script setup>
defineProps({
  blocks: {
    type: Number,
    default: 3,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="skeleton-stack" :class="{ compact }" aria-hidden="true">
    <div v-for="item in blocks" :key="item" class="skeleton-block"></div>
  </div>
</template>
