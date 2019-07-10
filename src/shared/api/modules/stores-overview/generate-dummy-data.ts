import { StoresOverviewModule } from "./stores-overview.module";
import { generateData, generateDummyShopCards } from "@app/api/core/shop-card";
import { generateDummyFilterBar } from "@app/api/core/filter-bar";

export const generateDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateDummyShopCards(),
  filterBar: generateDummyFilterBar(),
  totalCards: 1
});
