import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ViewType } from "@app/stores/settings";
import { DealOverview } from "./deal-overview.component";
import { generateDealOverviewModule } from "@app/api/modules/deal-overview/generate-dummy-data";
/* tslint:disable */
storiesOf("Deal overview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <DealOverview
      brandFilterItems={[]}
      categoryFilterItems={[]}
      screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
      sortBy=""
      deals={[]}
      totalResults={100}
      dealOverviewModule={generateDealOverviewModule()}
      setBrandFilters={jest.fn()}
      setCategoryFilters={jest.fn()}
      setStoreFilters={jest.fn()}
      storeFilterItems={[]}
      getDeals={jest.fn()}
      clearAllFilters={jest.fn()}
      setSortBy={jest.fn()}
    />
  ));
