import { REDUX } from "@app/constants";

import * as ActionType from "./location.types";

const setLocation = (payload: ActionType.ILocation) => ({
  type: REDUX.LOCATION.SET_LOCATION,
  ...payload
});

export const locationActions = {
  setLocation
};
