import { Dispatch } from "react-redux";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { getStoresApi } from "@app/api/core/store/endpoint";
import { storeOverviewActions } from "@app/stores/store-overview";

const getStores = (
  skip: number,
  take: number,
  storeStatusFilter: FilterItem[],
  categoryFilters: FilterItem[],
  brandFilters: FilterItem[],
  sortBy?: string
) => async (dispatch: Dispatch<any>, getState: () => IAppState) => {
  try {
    const result = getStoresApi(skip, take, storeStatusFilter, categoryFilters, brandFilters, sortBy);

    dispatch(storeOverviewActions.setStores({ stores: result }));
  } catch (error) {
    // tslint:disable-next-line: no-unused-expression no-unsafe-any
    // new FatalError(error.name, error.message, error.stack);
  }
};

export const storeOverviewThunks = {
  getStores
};
