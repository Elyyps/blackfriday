import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
// import { FilterBarDeals } from "./filter-bar-deals.component";
// import { ViewType } from "@app/stores/settings";
/* tslint:disable */
storiesOf("Filter bar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div />
    // <FilterBarDeals
    //   filtersChanged={() => {}}
    //   brandFilterItems={[]}
    //   categoryFilterItems={[]}
    //   screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
    //   sortBy=""
    //   statusFilterItems={[]}
    //   totalResults={100}
    //   clearFilters={() => {}}
    //   setBrandFilters={() => {}}
    //   setCategoryFilters={() => {}}
    //   setSortBy={() => {}}
    //   setStoreFilters={() => {}}
    // />
  ));
