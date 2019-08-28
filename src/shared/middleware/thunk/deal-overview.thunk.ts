import { Dispatch } from "react-redux";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { DealApi } from "@app/api/core/deal/endpoint";
import { dealOverviewActions } from "@app/stores/deal-overview";

const getStores = (
  skip: number,
  take: number,
  storeStatusFilter: FilterItem[],
  categoryFilters: FilterItem[],
  brandFilters: FilterItem[],
  sortBy?: string
) => async (dispatch: Dispatch<any>, getState: () => IAppState) => {
  try {
    const result = DealApi.getDeals(skip, take, storeStatusFilter, categoryFilters, brandFilters, sortBy);

    if (skip === 0) {
      dispatch(dealOverviewActions.setDeals({ dealsResult: result }));
    } else {
      dispatch(dealOverviewActions.updateDeals({ dealsResult: result }));
    }
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const dealOverviewThunks = {
  getStores
};
