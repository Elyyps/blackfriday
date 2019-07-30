import { REDUX } from "@app/constants";

import * as ActionType from "./store-overview.types";

const setSortBy = (payload: ActionType.ISortBy) => ({
  type: REDUX.STORE_OVERVIEW.SET_SORT_BY,
  ...payload
});

const setCategoryFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.STORE_OVERVIEW.SET_CATEGORY_FILTERS,
  ...payload
});

const setBrandFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.STORE_OVERVIEW.SET_BRAND_FILTERS,
  ...payload
});

const setStatusFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.STORE_OVERVIEW.SET_STATUS_FILTERS,
  ...payload
});

export const settingsActions = {
  setBrandFilters,
  setCategoryFilters,
  setSortBy,
  setStatusFilters
};
