import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BlogSingleHeaderComponent } from "./blog-single-header.component";
import { generateBlogSingleHeaderData } from "@app/api/core/blog-single-header/endpoint";
const data = generateBlogSingleHeaderData();

storiesOf("BlogSingleHeader", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BlogSingleHeaderComponent blogSingleHeader={data} />);
