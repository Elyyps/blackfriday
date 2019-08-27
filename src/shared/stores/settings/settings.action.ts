import { REDUX } from "@app/constants";

import * as ActionType from "./settings.types";

const setScreenSize = (payload: ActionType.IMobileSetting) => ({
  type: REDUX.SETTINGS.SET_SCREEN_SIZE,
  ...payload
});

const setBlackFridayDate = (payload: ActionType.IBlackFridayDate) => ({
  type: REDUX.SETTINGS.SET_BLACK_FRIDAY_DATE,
  ...payload
});

const setBlackFridayRootURL = (payload: ActionType.IBlackFridayRootURL) => ({
  type: REDUX.SETTINGS.SET_BLACK_FRIDAY_ROOT_URL,
  ...payload
});

export const settingsActions = {
  setScreenSize,
  setBlackFridayDate,
  setBlackFridayRootURL
};
