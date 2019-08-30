import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BlogOverviewComponent } from "./blog-overview.component";
import { generateBlogOverviewDataBelgian } from "@app/api/modules/blog-overview/endpoint";
const blog = generateBlogOverviewDataBelgian();

storiesOf("BlogOverview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BlogOverviewComponent blog={blog} />);
