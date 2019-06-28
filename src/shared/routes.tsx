import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { WinkleoverviewComponent } from "@app/prep/pages-prep/winkleoverview/winkleoverview.component";
import { BlogSingleComponent } from "@app/prep/pages-prep/blog-single/blog-single.component";

const Routes: React.FunctionComponent<{}> = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/winkleoverview" component={WinkleoverviewComponent} />
    <Route exact path="/blog-single" component={BlogSingleComponent} />
  </React.Fragment>
);

export { Routes };
