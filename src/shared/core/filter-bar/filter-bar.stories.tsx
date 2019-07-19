import React from "react";
import { FilterBarComponent } from "./filter-bar.component";
import { generateFilterBarData, generateEmptyFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

storiesOf("FilterBar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <FilterBarComponent
      applyFilter={() => ""}
      filterBar={generateFilterBarData()}
      onBrandChanged={() => ""}
      onStatusChanged={() => ""}
      onOrderByChanged={() => ""}
      onCategoryChanged={() => ""}
    />
  ))
  .add("Empty implementation", () => (
    <FilterBarComponent
      applyFilter={() => ""}
      filterBar={generateEmptyFilterBarData()}
      onBrandChanged={() => ""}
      onStatusChanged={() => ""}
      onOrderByChanged={() => ""}
      onCategoryChanged={() => ""}
    />
  ));
