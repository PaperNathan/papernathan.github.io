<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style lang="scss">
@use "@/styles/colors" as *;

body {
  background: $background;
  color: $text;
  font-family: "Courier New", Courier, monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
