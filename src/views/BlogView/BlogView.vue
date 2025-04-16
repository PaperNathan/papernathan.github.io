<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import articleList from "./components";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import ArticleCard from "./ArticleCard.vue";
import type { Article, ArticleList } from "@/models/Article";

const route = useRoute();
const router = useRouter();

const selectedArticle: Ref<Article> = ref(null);

const setSelectedArticleFromParams = (id: string) => {
  for (const article in articleList) {
    if ((articleList as ArticleList)[article].metadata.id === id) {
      selectedArticle.value = (articleList as ArticleList)[article];
    }
  }
};

const selectArticle = (id: string) => {
  setSelectedArticleFromParams(id);
  router.push(`/blog/${selectedArticle.value.metadata.id}`);
};

// onMounted(() => {
//   if (route.params.id) {
//     setSelectedArticleFromParams(route.params.id as string);
//   } else {
//     selectedArticle.value = null;
//   }
// });

onBeforeRouteLeave((to, from, next) => {
  if (to.params.id) {
    setSelectedArticleFromParams(to.params.id as string);
  } else {
    selectedArticle.value = null;
  }
  next();
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
        :link="() => selectArticle(article.metadata.id)"
        :image="article.metadata.image"
      />
    </div>
    <Component
      v-if="selectedArticle"
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
