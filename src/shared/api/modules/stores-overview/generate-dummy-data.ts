import { StoresOverviewModule } from "./stores-overview.module";
import { generateData } from "@app/api/core/shop-card";
import { generateDummyFilterBar } from "@app/api/core/filter-bar";

export const generateDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateData(),
  filterBar: generateDummyFilterBar()
});
