import { REDUX } from "@app/constants";

import * as ActionType from "./navbar-search.types";

const setItems = (payload: ActionType.INavbarSearchCards) => ({
  type: REDUX.NAVBARSEARCH.SET_NAVBARSEARCHITEMS,
  ...payload
});

const setText = (payload: ActionType.INavbarSearchText) => ({
  type: REDUX.NAVBARSEARCH.SET_NAVBARSEARCHTEXT,
  ...payload
});

export const navBarSearchActions = {
  setItems,
  setText
};
