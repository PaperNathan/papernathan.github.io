<template>
  <div class="ContentWrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.ContentWrapper {
  min-width: 300px;
  max-width: 720px;
  width: 100vw;
}
</style>
