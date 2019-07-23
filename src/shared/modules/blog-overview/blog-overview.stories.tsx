import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
import { BlogOverviewComponent } from "./blog-overview.component";
const posts = generateBlogPostData();

storiesOf("BlogOverview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BlogOverviewComponent posts={posts} />);
