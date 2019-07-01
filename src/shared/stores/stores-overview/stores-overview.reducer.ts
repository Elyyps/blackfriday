import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./stores-overview.types";
import { ShopCard } from "@app/api/core/shop-card";

export interface IShopsOverviewState {
  shopCards: ShopCard[];
}

const INITIAL_STATE: IShopsOverviewState = {
  shopCards: []
};

export const shopsOverviewReducer = (
  state: IShopsOverviewState = INITIAL_STATE,
  action: Action
): IShopsOverviewState => {
  switch (action.type) {
    case REDUX.SHOPSOVERVIEW.SET_SHOPS_OVERVIEW: {
      const { shopCards } = <ActionType.IShopsOverview>action;

      return { ...state, shopCards };
    }

    default: {
      return state;
    }
  }
};
