import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./deal-overview.types";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { Deal } from "@app/api/core/deal/deal";

export interface IDealOverviewState {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  deals: Deal[];
  sortBy: string;
  storeFilterItems: FilterItem[];
  totalResults: number;
}

const INITIAL_STATE: IDealOverviewState = {
  brandFilterItems: [],
  categoryFilterItems: [],
  deals: [],
  sortBy: "",
  storeFilterItems: [],
  totalResults: 0
};

export const dealOverviewReducer = (state: IDealOverviewState = INITIAL_STATE, action: Action): IDealOverviewState => {
  switch (action.type) {
    case REDUX.DEAL_OVERVIEW.SET_STORE_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, storeFilterItems: [...filterItems] };
    }
    case REDUX.DEAL_OVERVIEW.SET_BRAND_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, brandFilterItems: [...filterItems] };
    }
    case REDUX.DEAL_OVERVIEW.SET_CATEGORY_FILTERS: {
      const { filterItems } = <ActionType.IFilterItems>action;

      return { ...state, categoryFilterItems: [...filterItems] };
    }
    case REDUX.DEAL_OVERVIEW.SET_SORT_BY: {
      const { sortBy } = <ActionType.ISortBy>action;

      return { ...state, sortBy };
    }
    case REDUX.DEAL_OVERVIEW.CLEAR_FILTERS: {
      return {
        ...state,
        brandFilterItems: clearFilters(state.brandFilterItems),
        categoryFilterItems: clearFilters(state.categoryFilterItems),
        storeFilterItems: clearFilters(state.storeFilterItems)
      };
    }
    case REDUX.DEAL_OVERVIEW.SET_DEALS: {
      const { dealsResult } = <ActionType.IDeals>action;

      return { ...state, deals: [...dealsResult.deals], totalResults: dealsResult.totalResults };
    }
    case REDUX.DEAL_OVERVIEW.UPDATE_DEALS: {
      const { dealsResult } = <ActionType.IDeals>action;

      return { ...state, deals: [...state.deals, ...dealsResult.deals], totalResults: dealsResult.totalResults };
    }
    default: {
      return state;
    }
  }
};

const clearFilters = (filterItems: FilterItem[]) => filterItems.map(item => ({ ...item, isSelected: false }));
