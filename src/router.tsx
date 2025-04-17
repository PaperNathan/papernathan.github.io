import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

// App routes
import Blog from "@/pages/Blog/Blog";

export default function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <Error />,
      children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
      ],
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
}
