import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { FilterBarComponent } from "./filter-bar.component";

const notes = require("./filter-bar.md");

storiesOf("FilterBar", module)
  .addDecorator(withA11y)
  .add(
    "Basic implementation",
    () => (
      <FilterBarComponent
        applyFilter={() => ""}
        filterBar={generateFilterBarData()}
        onBrandChanged={() => ""}
        onStatusChanged={() => ""}
        onOrderByChanged={() => ""}
        onCategoryChanged={() => ""}
      />
    ),
    {
      notes
    }
  );
