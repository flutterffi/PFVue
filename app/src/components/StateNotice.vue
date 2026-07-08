<script setup>
defineProps({
  tone: {
    type: String,
    default: "neutral",
  },
  title: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="state-notice" :class="`state-notice-${tone}`">
    <strong v-if="title">{{ title }}</strong>
    <p>{{ message }}</p>
    <slot />
  </section>
</template>
