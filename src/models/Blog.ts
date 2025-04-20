import React from "react";

export type ArticleMetadata = {
  component: React.FC;
  metadata: {
    date: string;
    description: string;
    id: string;
    image: string;
    tags: string[];
    title: string;
  };
};
