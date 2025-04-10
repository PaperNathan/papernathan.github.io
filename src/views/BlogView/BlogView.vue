<script setup lang="ts">
import * as components from "./components";
</script>

<template>
  <div class="BlogView">
    <Component
      v-for="(component, index) in components"
      :key="index"
      :is="component"
    />
  </div>
</template>

<style lang="scss"></style>
