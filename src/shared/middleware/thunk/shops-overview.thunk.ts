import { Dispatch } from "react-redux";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { getShopsOverviewCards } from "@app/api/modules/stores-overview/endpoints";

const getShopsCards = (status: string, categories: string[], brands: string[], sortBy: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    // api
    //   .productCardProductsGet(search, product)
    //   .then(response => response.json())
    //   .then((response: ProductLineSinsgleModule) => {
    //     dispatch(
    //       productLineActions.setProductCards({
    //         productCardList: response.productCardList,
    //         productNumber: response.productCardList.length
    //       })
    //     );
    //   });
    const cards = getShopsOverviewCards(status, categories, brands, sortBy).shopCards;
    dispatch(
      shopsOverviewActions.setShopsOverview({
        shopCards: cards
      })
    );
  } catch (error) {
    console.log("");
  }
};
export const shopsOverviewThunks = {
  getShopsCards
};
