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
    const pageUrl = req.url;
    const currentPage = pageList.find(pageItem => pageItem.route === pageUrl);

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
