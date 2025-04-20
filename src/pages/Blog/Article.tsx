import articles from "./components";
import { useParams } from "react-router-dom";
import type { ArticleMetadata } from "@/models/Blog";

export default function Article() {
  const params = useParams();
  const article: ArticleMetadata = articles.filter(
    (article: ArticleMetadata) => {
      return article.metadata.id === params.id;
    }
  )[0];

  return (
    <div>
      <article.component />
    </div>
  );
}
