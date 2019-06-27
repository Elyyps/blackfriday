import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { FilterBarComponent } from "./filter-bar.component";
const notes = require("./filter-bar.md");

storiesOf("FilterBar", module)
  .addDecorator(withA11y)
  .add("Basic implementation", () => <FilterBarComponent />, {
    notes
  });
