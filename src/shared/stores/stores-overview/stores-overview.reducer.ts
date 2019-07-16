import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./stores-overview.types";
import { ShopCard } from "@app/api/core/shop-card/shop-card";
import { FilterBar } from "@app/api/core/filter-bar/filter-bar";
import { generateEmptyFilterBarData } from "@app/api/core/filter-bar/endpoint";

export interface IShopsOverviewState {
  filterBar: FilterBar;
  shopCards: ShopCard[];
  totalCards: number;
}

const INITIAL_STATE: IShopsOverviewState = {
  shopCards: [],
  totalCards: 0,
  filterBar: generateEmptyFilterBarData()
};

export const shopsOverviewReducer = (
  state: IShopsOverviewState = INITIAL_STATE,
  action: Action
): IShopsOverviewState => {
  switch (action.type) {
    case REDUX.SHOPSOVERVIEW.SET_SHOPS_OVERVIEW: {
      const { shopCards, filterBar, totalCards } = <ActionType.IShopsOverview>action;

      return { ...state, shopCards, filterBar, totalCards };
    }
    case REDUX.SHOPSOVERVIEW.SET_SHOPS_CARDS: {
      const { shopCards, totalCards } = <ActionType.IShopsCards>action;

      return { ...state, shopCards, totalCards };
    }

    default: {
      return state;
    }
  }
};
