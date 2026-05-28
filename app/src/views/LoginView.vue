<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "@/stores/session";

const sessionStore = useSessionStore();
const router = useRouter();
const error = ref("");

const form = reactive({
  name: "",
  email: "",
});

function handleLogin() {
  if (!form.email.trim()) {
    error.value = "Email is required.";
    return;
  }

  error.value = "";
  sessionStore.signIn(form);
  router.push({ name: "dashboard" });
}
</script>

<template>
  <div class="login-page">
    <section class="login-card">
      <p class="eyebrow">Formal App Workspace</p>
      <h1>Sign In</h1>
      <p>Move from browser exercises into a real Vue 3 app structure with routing and state management.</p>

      <div class="form-grid">
        <label>
          Name
          <input v-model="form.name" type="text" placeholder="Learner" />
        </label>

        <label>
          Email
          <input v-model="form.email" type="email" placeholder="learner@example.com" />
        </label>
      </div>

      <button class="primary-button" @click="handleLogin">Enter App</button>
      <p v-if="error" class="error-copy">{{ error }}</p>
    </section>
  </div>
</template>
