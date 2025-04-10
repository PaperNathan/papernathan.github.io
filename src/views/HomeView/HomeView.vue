<script setup lang="ts">
import BlogView from "@/views/BlogView/BlogView.vue";
</script>

<template>
  <div class="HomeView">
    <h1>Hi</h1>
    <RouterLink to="/blog">Go to Blog</RouterLink>
  </div>
</template>

<style lang="scss">
.HomeView {
  padding: 0.5rem;
}
</style>
