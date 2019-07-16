import { Action } from "redux";

import { REDUX, LOCALES } from "@app/constants";
import * as ActionType from "./navbar-search.types";
import { ShopCardModule } from "@app/api/core/shop-card";
import { DealCardModule } from "@app/api/core/deal-card";

export interface INavbarSearchState {
  currentFilter: string;
  deals: DealCardModule[];
  shops: ShopCardModule[];
}

const INITIAL_STATE: INavbarSearchState = {
  currentFilter: "",
  deals: [],
  shops: []
};

export const navbarSearchReducer = (state: INavbarSearchState = INITIAL_STATE, action: Action): INavbarSearchState => {
  switch (action.type) {
    case REDUX.NAVBARSEARCH.SET_NAVBARSEARCHITEMS: {
      const { shops, deals } = <ActionType.INavbarSearchCards>action;

      return { ...state, shops, deals };
    }
    case REDUX.NAVBARSEARCH.SET_NAVBARSEARCHTEXT: {
      const { currentFilter } = <ActionType.INavbarSearchText>action;

      return { ...state, currentFilter };
    }
    default: {
      return state;
    }
  }
};
