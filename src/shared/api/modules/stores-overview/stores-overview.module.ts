import { ShopCard, generateData } from "@app/api/core/shop-card";
import { FilterBar, generateDummyFilterBar } from "@app/api/core/filter-bar";

export class StoresOverviewModule {
  public filterBar: FilterBar;
  public shopCards: ShopCard[];
}

export const generateDummyStoresOverview = (): StoresOverviewModule => ({
  shopCards: generateData(),
  filterBar: generateDummyFilterBar()
});
export function getShopCards(status: string, categories: string[], brands: string[], sortBy: string) {
  const shopCards: ShopCard[] = generateData();
  let filteredCardsByStatus: ShopCard[] = [];
  let filteredCardsByCategories: ShopCard[] = [];
  let filteredCardsByBrand: ShopCard[] = [];
  let SortedCards: ShopCard[] = [];

  if (status.length >= 1) {
    shopCards.map(card => card.timeLeftBar.text === status && filteredCardsByStatus.push(card));
  } else {
    filteredCardsByStatus = shopCards;
  }
  if (categories.length >= 1) {
    filteredCardsByStatus.map(card => categories.includes(card.category) && filteredCardsByCategories.push(card));
  } else {
    filteredCardsByCategories = filteredCardsByStatus;
  }
  if (brands.length >= 1) {
    filteredCardsByCategories.map(card => brands.includes(card.brand) && filteredCardsByBrand.push(card));
  } else {
    filteredCardsByBrand = filteredCardsByCategories;
  }
  if (sortBy.length >= 1) {
    filteredCardsByBrand.map(card => card.postedAt === sortBy && SortedCards.push(card));
  } else {
    SortedCards = filteredCardsByBrand;
  }

  return SortedCards;
}
