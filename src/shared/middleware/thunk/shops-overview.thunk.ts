import { Dispatch } from "react-redux";
import { ShopCard, generateData } from "@app/api/core/shop-card";
import { shopsOverviewActions } from "@app/stores/stores-overview/stores-overview.action";
import { response } from "express";

const getShopsCards = (
  status: string,
  categories: string[],
  brands: string[],
  sortBy: string
) => async (dispatch: Dispatch<any>) => {
  try {
    // api
    //   .productCardProductsGet(search, product)
    //   .then(response => response.json())
    //   .then((response: ProductLineSingleModule) => {
    //     dispatch(
    //       productLineActions.setProductCards({
    //         productCardList: response.productCardList,
    //         productNumber: response.productCardList.length
    //       })
    //     );
    //   });
    dispatch(
      shopsOverviewActions.setShopsOverview({
        shopCards: SortedCards
      })
    );
  } catch (error) {
    console.log("");
  }
};
export const shopsOverviewThunks = {
  getShopsCards
};
