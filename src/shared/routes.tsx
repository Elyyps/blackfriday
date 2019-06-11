import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";

const Routes: React.FunctionComponent<{}> = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
  </React.Fragment>
);

export { Routes };
