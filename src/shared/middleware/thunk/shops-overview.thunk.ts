import { Dispatch } from "react-redux";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { filterShopsOverviewCards } from "@app/api/modules/stores-overview/endpoints";

const getShopsCards = (status: string[], categories: string[], brands: string[], sortBy: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const cards = filterShopsOverviewCards(status, categories, brands, sortBy);
    dispatch(
      shopsOverviewActions.setShopsCards({
        shopCards: cards
      })
    );
  } catch (error) {}
};
export const shopsOverviewThunks = {
  getShopsCards
};
