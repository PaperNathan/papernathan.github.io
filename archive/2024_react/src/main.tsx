import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

import getRouter from "./router";

const router = getRouter();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={ router } />
)
