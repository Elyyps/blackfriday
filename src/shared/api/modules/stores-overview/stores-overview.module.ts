import { ShopCard, generateData } from "@app/api/core/shop-card";

export class StoresOverview {
  public shopCards?: ShopCard[];
}

export const generateDummyStoresOverview = (): StoresOverview => ({
  shopCards: generateData()
});
export function getShopCards(
  status: string,
  categories: string[],
  brands: string[],
  sortBy: string
) {
  const shopCards: ShopCard[] = generateData();
  let filteredCardsByStatus: ShopCard[] = [];
  let filteredCardsByCategories: ShopCard[] = [];
  let filteredCardsByBrand: ShopCard[] = [];
  let SortedCards: ShopCard[] = [];

  if (status) {
    shopCards.map(
      card =>
        card.timeLeftBar.text.toUpperCase() === status.toUpperCase() &&
        filteredCardsByStatus.push(card)
    );
  } else {
    filteredCardsByStatus = shopCards;
  }
  if (categories) {
    filteredCardsByStatus.map(
      card =>
        categories.includes(card.timeLeftBar.text.toUpperCase()) &&
        filteredCardsByCategories.push(card)
    );
  } else {
    filteredCardsByCategories = filteredCardsByStatus;
  }
  if (brands) {
    filteredCardsByCategories.map(
      card =>
        brands.includes(card.timeLeftBar.text.toUpperCase()) &&
        filteredCardsByBrand.push(card)
    );
  } else {
    filteredCardsByBrand = filteredCardsByCategories;
  }
  if (sortBy) {
    filteredCardsByBrand.map(
      card =>
        card.timeLeftBar.text.toUpperCase() === sortBy.toUpperCase() &&
        SortedCards.push(card)
    );
  } else {
    SortedCards = filteredCardsByBrand;
  }

  return {
    shopCards: SortedCards
  };
}
