import TestArticle from "./TestArticle.vue";
import DemoComponent from "./DemoComponent.vue";

export default [
  {
    metadata: {
      title: "Test Article",
      description: "This is a test article for demonstration purposes.",
      id: "123",
    },
    component: TestArticle,
  },
  {
    metadata: {
      title: "Demo Component",
      description: "This is a demo component for testing.",
      id: "456",
    },
    component: DemoComponent,
  },
];
