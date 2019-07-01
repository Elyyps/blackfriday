import { ShopCard, generateData } from "@app/api/core/shop-card";

export class StoresOverview {
  public shopCards?: ShopCard[];
}

export const generateDummyStoresOverview = (): StoresOverview => ({
  shopCards: generateData()
});
