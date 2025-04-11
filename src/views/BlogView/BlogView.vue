<script setup lang="ts">
import { computed } from "vue";
import articleList from "./components";
import { useRoute } from "vue-router";

const route = useRoute();

const selectedArticle = computed(() => {
  const article = articleList.find(
    (item: any) => item.metadata.id === route.params.id,
  );
  return article ? article : articleList[0];
});
</script>

<template>
  <div class="BlogView">
    <div v-if="!route.params.id" v-for="article in articleList">
      <div :key="article.metadata.id">
        <h2>{{ article.metadata.title }}</h2>
        <p>{{ article.metadata.description }}</p>
        <router-link :to="`/blog/${article.metadata.id}`">
          Read more
        </router-link>
      </div>
    </div>
    <Component
      v-if="route.params.id"
      :is="selectedArticle.component"
      :key="selectedArticle.metadata.id"
    />
  </div>
</template>

<style lang="scss"></style>
