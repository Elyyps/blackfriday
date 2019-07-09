/// <reference path="./../../../types/index.d.ts" />

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware, RouterState, connectRouter } from "connected-react-router";
import { History } from "history";
import { localesReducer, ILocalesState } from "@app/stores/locales";

import { IPageState, pageReducer } from "./page";
import { ISettingsState, settingsReducer } from "./settings";

type StoreParams = {
  history: History;
  initialState: IAppState;
  middleware?: any[];
};

export interface IAppState {
  locales: ILocalesState;
  page: IPageState;
  router: RouterState;
  settings: ISettingsState;
}

export const getInitialState = () => {
  const initialState = <IAppState>{};

  return initialState;
};

declare let window: ExtendedWindow;

export const configureStore = ({ history, initialState, middleware = [] }: StoreParams) => {
  const devtools =
    process.env.NODE_ENV === "development" &&
    typeof window !== "undefined" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const composeEnhancers = devtools || compose;

  const store = createStore<IAppState>(
    combineReducers({
      locales: localesReducer,
      page: pageReducer,
      router: connectRouter(history),
      settings: settingsReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(...[thunk, routerMiddleware(history)].concat(...middleware)))
  );

  // if (process.env.NODE_ENV !== "production") {
  //   if (module.hot) {
  //     module.hot.accept("./rootReducer", () => store.replaceReducer(require("./rootReducer").default));
  //   }
  // }

  return store;
};

export default configureStore;
