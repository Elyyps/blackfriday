// import React from 'react';
import path from "path";
import * as express from "express";
import cors from "cors";
import chalk from "chalk";
import manifestHelpers from "express-manifest-helpers";
import bodyParser from "body-parser";

import paths from "../../config/paths";
import errorHandler from "./middleware/error-handler";
import serverRenderer from "./middleware/server-renderer";
import { moduleFetcher, setIsMobile, setBlackFridayDate } from "./middleware/initial-store-handler";
import { addStore } from "./middleware/store-handler";

require("dotenv").config();

const app = express.default();
// serve robots file
app.get("/robots.txt", (req, res) => {
  const options = {
    root: path.join(paths.clientBuild, "/static"),
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    }
  };
  res.status(200).sendFile("robots.txt", options);
});

app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

// Middleware requires to handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add Redux store
app.use(addStore);

// Add manifest to the requests
const manifestPath = path.join(paths.clientBuild, paths.publicPath);
app.use(
  manifestHelpers({
    manifestPath: `${manifestPath}/manifest.json`
  })
);

// Get Pages from API and add them to the store.
// If you want to fetch more data, do it in this middleware.
app.use(moduleFetcher());

// Set mobile state in redux state for initial margin purposes
app.use(setIsMobile());

// Set current year in redux state
app.use(setBlackFridayDate());

// Render the HTML and sent it to the server.
app.use(serverRenderer());

// Deal with errors
app.use(errorHandler);

// Let the world know we're up and running
app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`Application is running: http://localhost:${process.env.PORT || 3000}`)
  );
});

export default app;
