import * as express from "express";
import MobileDetect from "mobile-detect";
import { settingsActions } from "@app/stores/settings";
import { pageActions } from "@app/stores";
import { pageList } from "@app/api/pagebuilder/generate-dummy-data";

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

  if (md.phone()) {
    res.locals.store.dispatch(settingsActions.setIsMobile({ isMobile: true }));
  }

  return next();
};
