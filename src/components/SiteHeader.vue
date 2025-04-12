<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import HeaderBlinker from "@/components/HeaderBlinker.vue";

const route = useRoute();

const routePath = computed(() => {
  const path = route.path.split("/");
  return path[1] ? path[1] : "";
});
</script>

<template>
  <div class="SiteHeader">
    <div class="SiteHeader__terminalLogo">
      <RouterLink class="SiteHeader__terminalLogo--link" to="/">
        <span class="SiteHeader__terminalLogo--text"> nathan@home:~$</span>
        <HeaderBlinker :path="routePath" />
      </RouterLink>
    </div>
    <RouterLink to="/blog">Blog</RouterLink>
  </div>
</template>

<style lang="scss">
@use "@/styles/colors" as *;

.SiteHeader {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__terminalLogo {
    padding: 0 0.5rem;
    font-size: 1.125rem;
    font-weight: 900;
    display: flex;

    &--text {
      margin-right: 0.5rem;
    }

    &--link {
      display: flex;
      align-items: center;
    }

    &:hover {
      background: $yellow-hue;
      color: $background;

      & > a {
        color: $background;
      }
    }
  }
}
</style>
