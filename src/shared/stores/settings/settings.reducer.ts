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
  screenSize: IScreenSize | undefined;
}

const INITIAL_STATE: ISettingsState = {
  screenSize: undefined
};

export const settingsReducer = (state: ISettingsState = INITIAL_STATE, action: Action): ISettingsState => {
  switch (action.type) {
    case REDUX.SETTINGS.SET_SCREEN_SIZE: {
      const { screenSize } = <ActionType.IMobileSetting>action;

      return { ...state, screenSize };
    }
    default: {
      return state;
    }
  }
};
