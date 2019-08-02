import { Action } from "redux";

import { REDUX } from "@app/constants";
import * as ActionType from "./navbar-search.types";
import { DealCardModule } from "@app/api/core/deal-card";
import { Store } from "@app/api/core/store/store";

export interface INavbarSearchState {
  currentFilter: string;
  deals: DealCardModule[];
  stores: Store[];
}

const INITIAL_STATE: INavbarSearchState = {
  currentFilter: "",
  deals: [],
  stores: []
};

export const navbarSearchReducer = (state: INavbarSearchState = INITIAL_STATE, action: Action): INavbarSearchState => {
  switch (action.type) {
    case REDUX.NAVBARSEARCH.SET_NAVBARSEARCHITEMS: {
      const { stores, deals } = <ActionType.INavbarSearchCards>action;

      return { ...state, stores, deals };
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
