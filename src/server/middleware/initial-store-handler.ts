import * as express from "express";
import MobileDetect from "mobile-detect";
import { settingsActions, ViewType } from "@app/stores/settings";
import { pageActions } from "@app/stores";
import { pageList } from "@app/api/pagebuilder/generate-dummy-data";
import { breakPointMobile, breakPointTablet, breakPointDesktop } from "@app/util/detect-view";

export const moduleFetcher: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (req.url.indexOf("favicon") > 0) {
      return next();
    }

    // res.locals.store.dispatch(pageActions.setPages({ pages: pageList }));
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
const BLACK_FRIDAY_DAY = 8;
const BLACK_FRIDAY_MONTH = 8;
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

const getBlackFridayYear = (): number => {
  let nextBlackFridayYear;
  const dateBlackFridayCurrentYear = new Date(new Date().getFullYear(), BLACK_FRIDAY_MONTH - 1, BLACK_FRIDAY_DAY);
  dateBlackFridayCurrentYear.setHours(0, 0, 0, 0);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (currentDate <= dateBlackFridayCurrentYear) {
    nextBlackFridayYear = dateBlackFridayCurrentYear.getFullYear();
  } else {
    nextBlackFridayYear = dateBlackFridayCurrentYear.getFullYear() + 1;
  }

  return nextBlackFridayYear;
};
