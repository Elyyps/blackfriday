import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { generateArrowPanelData } from "@app/api/core/arrow-panel/generate-dummy-data";
import { FeaturedCategoriesContainer } from "@app/modules/featured-categories/container";

storiesOf("FeaturedCategories", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FeaturedCategoriesContainer categoryItems={generateArrowPanelData()} />);
