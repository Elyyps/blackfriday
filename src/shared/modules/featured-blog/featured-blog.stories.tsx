import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FeaturedBlogComponent } from "./featured-blog.component";
import { generateFeaturedBlogData } from "@app/api/modules/featured-blog/endpoint";
const data = generateFeaturedBlogData();
storiesOf("FeaturedBlog", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FeaturedBlogComponent featuredBlog={data} />);
