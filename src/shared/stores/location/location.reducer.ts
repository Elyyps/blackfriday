import { Action } from "redux";

import { REDUX, LOCATIONS } from "@app/constants";
import * as ActionType from "./location.types";
const nlTheme = require("@app/styles/belgium-variables.scss");
const blTheme = require("@app/styles/netherlands-variables.scss");
export interface ILocationState {
  location: string;
  messages: any;
}

const INITIAL_STATE: ILocationState = {
  location: LOCATIONS.NL,
  messages: nlTheme
};

export const locationReducer = (state: ILocationState = INITIAL_STATE, action: Action): ILocationState => {
  switch (action.type) {
    case REDUX.LOCALES.SET_LOCALE: {
      const { location } = <ActionType.ILocation>action;
      let messages;
      switch (location) {
        case LOCATIONS.NL:
          messages = nlTheme;
          break;
        case LOCATIONS.BL:
          messages = blTheme;
          break;
        default:
          messages = nlTheme;
      }

      return { ...state, location, messages };
    }
    default: {
      return state;
    }
  }
};
