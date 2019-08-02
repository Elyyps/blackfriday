import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./store-overview.types";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { Store } from "@app/api/core/store/store";

export interface IStoreOverviewState {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  sortBy: string;
  statusFilterItems: FilterItem[];
  stores: Store[];
  totalResults: number;
}

const INITIAL_STATE: IStoreOverviewState = {
  brandFilterItems: [],
  categoryFilterItems: [],
  sortBy: "",
  statusFilterItems: [],
  stores: [],
  totalResults: 0
};

export const storeOverviewReducer = (
  state: IStoreOverviewState = INITIAL_STATE,
  action: Action
): IStoreOverviewState => {
  switch (action.type) {
    case REDUX.STORE_OVERVIEW.SET_STATUS_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, statusFilterItems: [...filterItems] };
    }
    case REDUX.STORE_OVERVIEW.SET_BRAND_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, brandFilterItems: [...filterItems] };
    }
    case REDUX.STORE_OVERVIEW.SET_CATEGORY_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, categoryFilterItems: [...filterItems] };
    }
    case REDUX.STORE_OVERVIEW.SET_SORT_BY: {
      const { sortBy } = <ActionType.ISortBy>action;

      return { ...state, sortBy };
    }
    case REDUX.STORE_OVERVIEW.CLEAR_FILTERS: {
      return {
        ...state,
        brandFilterItems: clearFilters(state.brandFilterItems),
        categoryFilterItems: clearFilters(state.categoryFilterItems),
        statusFilterItems: clearFilters(state.statusFilterItems)
      };
    }
    case REDUX.STORE_OVERVIEW.SET_STORES: {
      const { storesResult } = <ActionType.IStores>action;

      return { ...state, stores: [...storesResult.stores], totalResults: storesResult.totalResults };
    }
    case REDUX.STORE_OVERVIEW.UPDATE_STORES: {
      const { storesResult } = <ActionType.IStores>action;

      return { ...state, stores: [...state.stores, ...storesResult.stores], totalResults: storesResult.totalResults };
    }
    default: {
      return state;
    }
  }
};

const clearFilters = (filterItems: FilterItem[]) => filterItems.map(item => ({ ...item, isSelected: false }));
