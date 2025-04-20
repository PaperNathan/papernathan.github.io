import { Outlet, useParams } from "react-router-dom";
import articles from "./components";
import ArticleList from "./ArticleList";
// import type { ArticleMetadata } from "@/models/Blog";

export default function Blog() {
  const params = useParams();
  return (
    <div>
      <h1>Blog</h1>
      {params.id ? <Outlet /> : <ArticleList />}
    </div>
  );
}
