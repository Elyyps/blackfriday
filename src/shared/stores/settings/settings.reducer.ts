import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./settings.types";

export enum ViewType {
  Mobile,
  MobileBig,
  Tablet,
  Desktop,
  DesktopLarge,
  DesktopFull
}

export interface IScreenSize {
  breakpointPixels: number;
  viewType: ViewType;
}

export interface ISettingsState {
  blackFridayDate: ActionType.IBlackFridayDate | undefined;
  blackFridayRootUrl: ActionType.IBlackFridayRootURL | undefined;
  distanceTop: ActionType.IDistanceTop | undefined;
  screenSize: IScreenSize | undefined;
}

const INITIAL_STATE: ISettingsState = {
  screenSize: undefined,
  blackFridayDate: undefined,
  blackFridayRootUrl: undefined,
  distanceTop: undefined
};

export const settingsReducer = (state: ISettingsState = INITIAL_STATE, action: Action): ISettingsState => {
  switch (action.type) {
    case REDUX.SETTINGS.SET_SCREEN_SIZE: {
      const { screenSize } = <ActionType.IMobileSetting>action;

      return { ...state, screenSize };
    }
    case REDUX.SETTINGS.SET_BLACK_FRIDAY_DATE: {
      const blackFridayDate = <ActionType.IBlackFridayDate>action;

      return { ...state, blackFridayDate };
    }

    case REDUX.SETTINGS.SET_BLACK_FRIDAY_ROOT_URL: {
      const blackFridayRootUrl = <ActionType.IBlackFridayRootURL>action;

      return { ...state, blackFridayRootUrl };
    }
    case REDUX.SETTINGS.SET_DISTANCE_TOP: {
      const distanceTop = <ActionType.IDistanceTop>action;

      return { ...state, distanceTop };
    }

    default: {
      return state;
    }
  }
};
