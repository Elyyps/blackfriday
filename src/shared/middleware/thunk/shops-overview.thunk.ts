import { Dispatch } from "react-redux";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { filterShopsOverviewCards } from "@app/api/modules/stores-overview/endpoints";
import { ShopCard } from "@app/api/core/shop-card";

const getShopsCards = (
  oldItems: ShopCard[],
  currentPage: number,
  status: string[],
  categories: string[],
  brands: string[],
  sortBy: string
) => async (dispatch: Dispatch<any>) => {
  try {
    const cards = filterShopsOverviewCards(currentPage, status, categories, brands, sortBy);
    // cards.shopCards = oldItems.concat(cards.shopCards);
    dispatch(
      shopsOverviewActions.setShopsCards({
        shopCards: oldItems.concat(cards.shopCards),
        totalCards: cards.totalCards
      })
    );
  } catch (error) {}
};
export const shopsOverviewThunks = {
  getShopsCards
};
