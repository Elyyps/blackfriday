import { StoresOverviewModule } from "./stores-overview.module";
import { generateFilterBarData, generateEmptyFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { generateShopCardData, generateEmptyShopCardData, generateShopCardData2 } from "@app/api/core/shop-card/endpoint";

export const generateDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateShopCardData(),
  filterBar: generateFilterBarData(),
  totalCards: 1,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "StoresOverviewModule"
});
export const generateEmptyDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateEmptyShopCardData(),
  filterBar: generateEmptyFilterBarData(),
  totalCards: 1,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "StoresOverviewModule"
});
export const generateDummyStoresOverviewForInfiniteScrolling = (): StoresOverviewModule => ({
  shopCards: generateShopCardData2(),
  filterBar: generateEmptyFilterBarData(),
  totalCards: 1,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "StoresOverviewModule"
});