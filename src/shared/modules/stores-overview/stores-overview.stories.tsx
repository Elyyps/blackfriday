import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { StoresOverviewComponent } from "./stores-overview.component";
import {
  generateShopsOverviewData,
  generateEmptyShopsOverviewData,
  generateShopsOverviewDataForInfiniteScrolling
} from "@app/api/modules/stores-overview/endpoints";
const storesOverviewData = generateShopsOverviewData();
const storesOverviewEmptyData = generateEmptyShopsOverviewData();
const storesOverviewDataForInfiniteScrolling = generateShopsOverviewDataForInfiniteScrolling();
storiesOf("StoresOverview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add(" implementation without infinite scrolling", () => (
    <StoresOverviewComponent
      filterBar={storesOverviewData.filterBar}
      shopCards={storesOverviewData.shopCards}
      getShopCards={() => ""}
      setShopCards={() => ""}
      totalCards={1}
    />
  ))
  .add("Empty implementation", () => (
    <StoresOverviewComponent
      filterBar={storesOverviewEmptyData.filterBar}
      shopCards={storesOverviewEmptyData.shopCards}
      getShopCards={() => ""}
      setShopCards={() => ""}
      totalCards={1}
    />
  ))
  .add(" implementation with infinite scrolling", () => (
    <StoresOverviewComponent
      filterBar={storesOverviewDataForInfiniteScrolling.filterBar}
      shopCards={storesOverviewDataForInfiniteScrolling.shopCards}
      getShopCards={() => ""}
      setShopCards={() => ""}
      totalCards={1}
    />
  ));
