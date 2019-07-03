import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { WinkleoverviewComponent } from "@app/prep/pages-prep/winkleoverview/winkleoverview.component";
import { BlogSingleComponent } from "@app/prep/pages-prep/blog-single/blog-single.component";
import { BlogOverviewPageComponent } from "@app/prep/pages-prep/blog-overview/blog-overview.component";
import { WinkelSingleComponent } from "@app/prep/pages-prep/winkel-single/winkel-single.component";

const Routes: React.FunctionComponent<{}> = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/winkleoverview" component={WinkleoverviewComponent} />
    <Route exact path="/blog-single" component={BlogSingleComponent} />
    <Route exact path="/blog-overview" component={BlogOverviewPageComponent} />
    <Route exact path="/winkel-single" component={WinkelSingleComponent} />
  </React.Fragment>
);

export { Routes };
