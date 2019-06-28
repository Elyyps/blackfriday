import * as React from "react";
import { Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { PlaygroundAhmedComponent } from "./modules/playground-ahmed/playground-ahmed.component";
import { PlaygroundPedroComponent } from "./modules/playground-pedro/playground-pedro.component";
import { PlaygroundDanieleComponent } from "./modules/playground-daniele/playground-daniele.component";
import { PlaygroundMartijnComponent } from "./modules/playground-martijn/playground-martijn.component";
import { WinkleoverviewComponent } from "./prep/pages-prep/winkleoverview/winkleoverview.component";
import { FeaturedShopComponent } from "./prep/modules-prep/featured-shop";
import { FeaturedShopsComponent } from "./modules/featured-shops";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/winkleoverview" component={WinkleoverviewComponent} />
    <Route
      exact
      path="/playground-ahmed"
      component={PlaygroundAhmedComponent}
    />
    <Route
      exact
      path="/playground-pedro"
      component={PlaygroundPedroComponent}
    />
    <Route
      exact
      path="/playground-daniele"
      component={PlaygroundDanieleComponent}
    />
    <Route
      exact
      path="/playground-martijn"
      component={PlaygroundMartijnComponent}
    />
  </React.Fragment>
);

export { Routes };
