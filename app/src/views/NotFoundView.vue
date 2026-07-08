<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import AppShell from "@/components/AppShell.vue";
import { useSessionStore } from "@/stores/session";

const router = useRouter();
const sessionStore = useSessionStore();

const homeTarget = computed(() => {
  return sessionStore.isAuthenticated ? { name: "dashboard" } : { name: "login" };
});

function goBack() {
  router.back();
}
</script>

<template>
  <AppShell
    title="Page Not Found"
    description="Practice a realistic fallback route so the app still feels complete when a URL is invalid."
  >
    <section class="panel not-found-panel">
      <p class="eyebrow">404 Route</p>
      <h2>The page you requested does not exist.</h2>
      <p>
        This formal workspace now includes a catch-all route, which is a common production detail
        in Vue Router projects.
      </p>

      <div class="editor-actions">
        <button class="primary-button" @click="router.push(homeTarget)">Go To Safe Page</button>
        <button class="ghost-button" @click="goBack">Go Back</button>
      </div>
    </section>
  </AppShell>
</template>
