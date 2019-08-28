import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FeaturedBlogItemsComponent } from "./featured-blog-items.component";
import { generate2BlogPostsDataBelgian } from "@app/api/core/blog-post/endpoint";
const item = generate2BlogPostsDataBelgian();
storiesOf("FeaturedBlogItems", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FeaturedBlogItemsComponent item={item[0]} />);
