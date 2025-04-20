import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

// App routes
import Article from "@/pages/Blog/Article";
import Blog from "@/pages/Blog/Blog";

export default function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <Error />,
      children: [],
    },
    {
      path: "/blog",
      element: <Blog />,
      children: [{ path: ":id", element: <Article /> }],
    },
  ]);
}
