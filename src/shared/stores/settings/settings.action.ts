import { REDUX } from "@app/constants";

import * as ActionType from "./settings.types";

const setScreenSize = (payload: ActionType.IMobileSetting) => ({
  type: REDUX.SETTINGS.SET_SCREEN_SIZE,
  ...payload
});

export const settingsActions = {
  setScreenSize
};
