<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div>
        <p class="eyebrow">PFVue Formal App</p>
        <h1>{{ title }}</h1>
        <p class="header-copy">{{ description }}</p>
      </div>
      <nav class="header-nav">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
    </header>

    <slot />
  </div>
</template>
