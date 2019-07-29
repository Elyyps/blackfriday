import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BlogPostComponent } from "./blog-post.component";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
const posts = generateBlogPostData();

storiesOf("BlogPost", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BlogPostComponent posts={posts[1]} />);
