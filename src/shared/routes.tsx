import * as React from "react";
import { Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { PlaygroundAhmedComponent } from "./modules/playground-ahmed/playground-ahmed.component";
import { PlaygroundPedroComponent } from "./modules/playground-pedro/playground-pedro.component";
import { PlaygroundDanieleComponent } from "./modules/playground-daniele/playground-daniele.component";
import { PlaygroundMartijnComponent } from "./modules/playground-martijn/playground-martijn.component";
import { WinkleoverviewComponent } from "@app/prep/pages-prep/winkleoverview/winkleoverview.component";
import { BlogSingleComponent } from "@app/prep/pages-prep/blog-single/blog-single.component";
import { StoresOverviewComponent } from "./modules/stores-overview";
import { StoresOverviewContainer } from "./modules/stores-overview/container/stores-overview.container";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/winkleoverview" component={WinkleoverviewComponent} />
    <Route exact path="/blog-single" component={BlogSingleComponent} />
    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-pedro" component={PlaygroundPedroComponent} />
    <Route exact path="/playground-daniele" component={PlaygroundDanieleComponent} />
    <Route exact path="/playground-martijn" component={PlaygroundMartijnComponent} />
    <Route exact path="/stores-overview" component={StoresOverviewContainer} />
  </React.Fragment>
);

export { Routes };
