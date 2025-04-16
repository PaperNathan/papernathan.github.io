<script setup lang="ts">
defineProps<{
  description: string;
  image?: string;
  link: any;
  tags?: string[];
  title: string;
}>();
</script>

<template>
  <div class="ArticleCard">
    <img v-if="image" :src="`/src/assets/${image}`" alt="Article Image" />

    <div class="ArticleCard__content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="tags" v-if="tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <div class="ArticleCard__link" @click="() => link()">Read More</div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/styles/colors" as *;

.ArticleCard {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin: 16px;

  img {
    height: 30px;
    width: 100%;
  }

  &__content {
    padding: 16px;
  }

  &__link {
    color: $yellow-hue;

    &:hover {
      color: $background;
      background-color: $yellow-hue;
      cursor: pointer;
    }
  }
}
</style>
