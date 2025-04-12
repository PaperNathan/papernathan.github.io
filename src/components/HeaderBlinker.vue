<script setup lang="ts">
defineProps<{
  path: string;
}>();
</script>

<template>
  <div class="HeaderDirectory">
    <span class="HeaderDirectory__text">{{ path }}</span>
    <span class="HeaderDirectory__blinker" />
  </div>
</template>

<style lang="scss">
@use "@/styles/colors" as *;
.HeaderDirectory {
  &__text {
    font-size: 1.125rem;
    font-weight: 900;
    display: inline-block;
  }

  &__blinker {
    display: inline-block;
    width: 2px;
    height: 1rem;
    margin-left: 0.5rem;
    background: $yellow-hue;
    animation: blinker 1.5s linear infinite;

    @keyframes blinker {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
