import * as express from "express";
import MobileDetect from "mobile-detect";
import { settingsActions, ViewType } from "@app/stores/settings";
import { pageActions } from "@app/stores";
import { belgianPageList } from "@app/api/pagebuilder/generate-belgian-dummy-data";
import { dutchPageList } from "@app/api/pagebuilder/generate-dutch-dummy-data";

import { breakPointMobile, breakPointTablet, breakPointDesktop } from "@app/util/detect-view";
import { BLACK_FRIDAY_DAY, BLACK_FRIDAY_MONTH } from "@app/constants/blackfriday-date";
import { getBlackFridayYear } from "@app/util";

export const moduleFetcher: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (req.url.indexOf("favicon") > 0) {
      return next();
    }
    const pageUrl = req.url;
    const currentPage = (req.get("host") as string).includes(".be")
      ? belgianPageList.find(pageItem => pageItem.route === pageUrl)
      : dutchPageList.find(pageItem => pageItem.route === pageUrl);

    const empty: any = {};

    res.locals.store.dispatch(pageActions.setCurrentPage({ page: currentPage || empty }));
  } catch (error) {
    // new FatalError(error.name, error.message, error.stack);
  }

  next();
};

export const setIsMobile: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  const md = new MobileDetect(req.headers["user-agent"] || "");

  let screenSize;
  if (md.phone()) {
    screenSize = {
      viewType: ViewType.Mobile,
      breakpointPixels: breakPointMobile
    };
  } else if (md.tablet()) {
    screenSize = {
      viewType: ViewType.Tablet,
      breakpointPixels: breakPointTablet
    };
  } else {
    screenSize = {
      viewType: ViewType.Desktop,
      breakpointPixels: breakPointDesktop
    };
  }

  res.locals.store.dispatch(
    settingsActions.setScreenSize({
      screenSize
    })
  );

  return next();
};

export const setBlackFridayDate: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  const year = getBlackFridayYear();
  res.locals.store.dispatch(
    settingsActions.setBlackFridayDate({ day: BLACK_FRIDAY_DAY, month: BLACK_FRIDAY_MONTH - 1, year })
  );
  next();
};

export const setBlackFridayRootUrl: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  res.locals.store.dispatch(settingsActions.setBlackFridayRootURL({ rootUrl: req.get("host") }));
  next();
};
