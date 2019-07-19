import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";
import { generateShopCardData, generateShopCardData2, generateDemoData } from "@app/api/core/shop-card/endpoint";
import { WordPressPostModule } from "../wordpress-module/wordpress-module";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

export class StoresOverviewModule extends WordPressPostModule {
  public filterBar: FilterBar;
  public shopCards: ShopCard[];
  public totalCards: number;
}
export const shuffleArray = (a: any) => {
  const result = [...a];

  for (let i = 1; result.length > i; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

export function getShopCards(
  currentPage: number,
  status: string[],
  categories: string[],
  brands: string[],
  sortBy: string
) {
  const shopCards: ShopCard[] = generateDemoData();
  let filteredCardsByStatus: ShopCard[] = [];
  let filteredCardsByCategories: ShopCard[] = [];
  let filteredCardsByBrand: ShopCard[] = [];
  let SortedCards: ShopCard[] = [];
  const TAKE = 15;
  const skip: number = TAKE * currentPage;
  const numberOfCards = skip + TAKE;

  if (status.length >= 1) {
    shopCards.map(card => status.includes(card.timeLeftBar.text.toUpperCase()) && filteredCardsByStatus.push(card));
  } else {
    filteredCardsByStatus = shopCards;
  }
  if (categories.length >= 1) {
    filteredCardsByStatus.map(
      card => categories.includes(card.category.toUpperCase()) && filteredCardsByCategories.push(card)
    );
  } else {
    filteredCardsByCategories = filteredCardsByStatus;
  }
  if (brands.length >= 1) {
    filteredCardsByCategories.map(card => brands.includes(card.brand.toUpperCase()) && filteredCardsByBrand.push(card));
  } else {
    filteredCardsByBrand = filteredCardsByCategories;
  }
  if (sortBy.length >= 1) {
    sortBy === "Newest"
      ? (SortedCards = shuffleArray(filteredCardsByBrand))
      : sortBy === "Price"
      ? (SortedCards = shuffleArray(filteredCardsByBrand))
      : sortBy === "Relevant" && (SortedCards = shuffleArray(filteredCardsByBrand));
  } else {
    SortedCards = filteredCardsByBrand;
  }

  SortedCards = SortedCards.slice(skip, numberOfCards);

  return { shopCards: SortedCards, totalCards: shopCards.length };
}
