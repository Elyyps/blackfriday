import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";
import { generateDummyFeaturedCategoriesData } from "@app/api/modules/featured-categories/generate-dummy-data";

storiesOf("FeaturedCategories", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <FeaturedCategoriesContainer featuredCategoriesModule={generateDummyFeaturedCategoriesData()} />
  ));
