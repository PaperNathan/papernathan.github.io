import articles from "./components";
import type { ArticleMetadata } from "@/models/Blog";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      {articles.map((article: ArticleMetadata) => {
        return <article.component key={article.metadata.id} />;
      })}
    </div>
  );
}
