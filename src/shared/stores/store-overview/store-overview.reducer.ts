import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./store-overview.types";
import { FilterItem } from "@app/api/core/filter/filter-item";

export interface IStoreOverviewState {
  brandFilterItems: FilterItem[];
  sortBy: string;
  categoryFilterItems: FilterItem[];
  statusFilterItems: FilterItem[];
}

const INITIAL_STATE: IStoreOverviewState = {
  brandFilterItems: [],
  sortBy: "",
  categoryFilterItems: [],
  statusFilterItems: []
};

export const settingsReducer = (state: IStoreOverviewState = INITIAL_STATE, action: Action): IStoreOverviewState => {
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
    default: {
      return state;
    }
  }
};
