import type { Component } from "vue";

export type ArticleMetadata = {
  title: string;
  description: string;
  id: string;
  date: string;
  image?: string;
  tags?: string[];
};

export type Article = {
  component: Component;
  metadata: ArticleMetadata;
};

export type ArticleList = {
  [key: string]: Article;
};
