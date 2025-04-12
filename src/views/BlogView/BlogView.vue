<script setup lang="ts">
import { computed } from "vue";
import articleList from "./components";
import { useRoute } from "vue-router";
import ArticleCard from "./ArticleCard.vue";

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
    <div class="BlogView__articleList" v-if="!route.params.id">
      <ArticleCard
        v-for="article in articleList"
        :key="article.metadata.id"
        :title="article.metadata.title"
        :description="article.metadata.description"
        :link="`/blog/${article.metadata.id}`"
        :image="article.metadata.image"
      />
    </div>
    <Component
      v-if="route.params.id"
      :is="selectedArticle.component"
      :key="selectedArticle.metadata.id"
    />
  </div>
</template>

<style lang="scss">
.BlogView {
  &__articleList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
