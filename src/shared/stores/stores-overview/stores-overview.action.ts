import { REDUX } from "@app/constants";

import * as ActionType from "./stores-overview.types";

const setShopsOverview = (payload: ActionType.IShopsOverview) => ({
  type: REDUX.SHOPSOVERVIEW.SET_SHOPS_OVERVIEW,
  ...payload
});
const setShopsCards = (payload: ActionType.IShopsCards) => ({
  type: REDUX.SHOPSOVERVIEW.SET_SHOPS_CARDS,
  ...payload
});
export const shopsOverviewActions = {
  setShopsOverview,
  setShopsCards
};
