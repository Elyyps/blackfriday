// import React from 'react';
import path from "path";
import * as express from "express";
import cors from "cors";
import chalk from "chalk";
import manifestHelpers from "express-manifest-helpers";
import bodyParser from "body-parser";
import paths from "../../config/paths";
import { configureStore, getInitialState } from "@app/stores";

import createHistory from "../shared/stores/history";
import errorHandler from "./middleware/error-handler";
import serverRenderer from "./middleware/server-renderer";
import moduleFetcher from "./middleware/fetch-modules";

require("dotenv").config();

const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === "development") {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const addStore = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction | undefined
): Promise<void> => {
  const history = createHistory({ initialEntries: [req.url] });

  res.locals.store = configureStore({ history, initialState: getInitialState() });

  if (typeof next !== "function") {
    throw new Error("Next handler is missing");
  }
  next();
};

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`
  })
);

// Get Pages from API and add them to the store.
// If you want to fetch more data, do it in this middleware.
app.use(moduleFetcher());

// Render the HTML and sent it to the server.
app.use(serverRenderer());

// Deal with errors
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`Application is running: http://localhost:${process.env.PORT || 3000}`)
  );
});

export default app;
