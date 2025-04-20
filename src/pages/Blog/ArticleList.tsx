import { Link } from "react-router-dom";
import articles from "./components";

export default function ArticleList() {
  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.metadata.id}>
            <Link to={`/blog/${article.metadata.id}`}>
              {article.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
