import * as React from "react";

import { BlogOverviewComponent } from "@app/modules/blog-overview";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const posts = generateBlogPostData();

  return (
    <div className="uk-container">
      <BlogOverviewComponent posts={posts} />
    </div>
  );
};

export { PlaygroundAhmedComponent };
