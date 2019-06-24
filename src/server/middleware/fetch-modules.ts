import * as express from "express";
import { pageActions } from "@app/stores";
import FatalError from "@app/errors/fatal-error";

const moduleFetcher: any = () => async (
  req: express.Request & { store: any },
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    if (req.url.indexOf("favicon") > 0) {
      return next();
    }

    // TODO generate modules from dummy data
    const response: any = {};

    res.locals.store.dispatch(pageActions.setCurrentPage({ page: response }));
  } catch (error) {
    // new FatalError(error.name, error.message, error.stack);
  }

  next();
};

export default moduleFetcher;
