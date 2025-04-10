<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="SiteHeader">
    <div class="SiteHeader__terminalLogo">
      <RouterLink to="/"> <span>></span> nathan@home:~$ </RouterLink>
      <span class="SiteHeader__terminalLogo--blinker" />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/styles/colors" as *;

.SiteHeader {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  &__terminalLogo {
    padding: 0 0.5rem;
    font-size: 1.125rem;
    font-weight: 900;
    display: flex;

    a {
      color: $yellow-hue;

      &:hover {
        color: $background;
      }
    }

    &:hover {
      background: $yellow-hue;
    }

    &--blinker {
      display: inline-block;
      width: 2px;
      height: 1.125rem;
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
}
</style>
