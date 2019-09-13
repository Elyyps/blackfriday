import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { StoreOverview } from "./store-overview.component";
import { ViewType } from "@app/stores/settings";
import { generateStoreOverviewModule } from "@app/api/modules/store-overview/generate-dummy-data";
/* tslint:disable */
storiesOf("Store overview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <StoreOverview
      brandFilterItems={[]}
      categoryFilterItems={[]}
      screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
      sortBy=""
      statusFilterItems={[]}
      stores={[]}
      totalResults={100}
      storeOverviewModule={generateStoreOverviewModule()}
      getStores={() => {}}
      setBrandFilters={() => {}}
      setCategoryFilters={() => {}}
      setSortBy={() => {}}
      setStatusFilters={() => {}}
      clearAllFilters={() => {}}
      distanceTop={{ distanceTop: 0 }}
    />
  ));
