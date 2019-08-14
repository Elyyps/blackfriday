import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BlogOverviewHeaderComponent } from "./blog-overview-header.component";
import { generateBlogOverviewHeaderData } from "@app/api/modules/blog-overview-header/endpoint";

storiesOf("BlogSingleHeader", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <BlogOverviewHeaderComponent blogOverviewHeader={generateBlogOverviewHeaderData()} />
  ));
