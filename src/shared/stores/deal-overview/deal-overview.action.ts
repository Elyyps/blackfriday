import { REDUX } from "@app/constants";

import * as ActionType from "./deal-overview.types";

const setSortBy = (payload: ActionType.ISortBy) => ({
  type: REDUX.DEAL_OVERVIEW.SET_SORT_BY,
  ...payload
});

const setCategoryFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.DEAL_OVERVIEW.SET_CATEGORY_FILTERS,
  ...payload
});

const setBrandFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.DEAL_OVERVIEW.SET_BRAND_FILTERS,
  ...payload
});

const setStoreFilters = (payload: ActionType.IFilterItems) => ({
  type: REDUX.DEAL_OVERVIEW.SET_STORE_FILTERS,
  ...payload
});

const clearAllFilters = () => ({
  type: REDUX.DEAL_OVERVIEW.CLEAR_FILTERS
});

const setDeals = (payload: ActionType.IDeals) => ({
  type: REDUX.DEAL_OVERVIEW.SET_DEALS,
  ...payload
});

const updateDeals = (payload: ActionType.IDeals) => ({
  type: REDUX.DEAL_OVERVIEW.UPDATE_DEALS,
  ...payload
});

export const dealOverviewActions = {
  setBrandFilters,
  setCategoryFilters,
  setSortBy,
  setStoreFilters,
  clearAllFilters,
  setDeals,
  updateDeals
};
