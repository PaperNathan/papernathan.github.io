import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

import getRouter from "./router";

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContentWrapper>
    <RouterProvider router={router} />
  </ContentWrapper>
);
