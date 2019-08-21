import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ViewType } from "@app/stores/settings";
import { FilterBarDeals } from "./filter-bar-deals.component";
/* tslint:disable */
storiesOf("Filter bar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <FilterBarDeals
      filtersChanged={() => {}}
      brandFilterItems={[]}
      categoryFilterItems={[]}
      screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
      sortBy=""
      totalResults={100}
      clearFilters={() => {}}
      setBrandFilters={() => {}}
      setCategoryFilters={() => {}}
      setSortBy={() => {}}
      setStoreFilters={() => {}}
      storeFilterItems={[]}
    />
  ));
