import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./stores-overview.types";
import { ShopCard } from "@app/api/core/shop-card";
import { FilterBar, generateEmptyDummyFilterBar } from "@app/api/core/filter-bar";

export interface IShopsOverviewState {
  filterBar: FilterBar;
  shopCards: ShopCard[];
}

const INITIAL_STATE: IShopsOverviewState = {
  shopCards: [],
  filterBar: generateEmptyDummyFilterBar()
};

export const shopsOverviewReducer = (
  state: IShopsOverviewState = INITIAL_STATE,
  action: Action
): IShopsOverviewState => {
  switch (action.type) {
    case REDUX.SHOPSOVERVIEW.SET_SHOPS_OVERVIEW: {
      const { shopCards, filterBar } = <ActionType.IShopsOverview>action;

      return { ...state, shopCards, filterBar };
    }
    case REDUX.SHOPSOVERVIEW.SET_SHOPS_CARDS: {
      const { shopCards } = <ActionType.IShopsCards>action;

      return { ...state, shopCards };
    }

    default: {
      return state;
    }
  }
};
