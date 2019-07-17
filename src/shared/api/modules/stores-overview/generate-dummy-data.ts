import { StoresOverviewModule } from "./stores-overview.module";
import { generateFilterBarData } from "@app/api/core/filter-bar/endpoint";
import { generateShopCardData } from "@app/api/core/shop-card/endpoint";

export const generateDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateShopCardData(),
  filterBar: generateFilterBarData(),
  totalCards: 1,
  bottomMargin: "0px",
  topMargin: "0px",
  id: "1",
  name: "StoresOverviewModule"
});
