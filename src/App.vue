<script setup lang="ts">
import ContentWrapper from "@/layouts/ContentWrapper.vue";
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
  <ContentWrapper>
    <SiteHeader />
    <RouterView />
  </ContentWrapper>
</template>

<style lang="scss">
@use "@/styles/colors" as *;

body {
  width: 100vw;
  background: $background;
  color: $text;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
