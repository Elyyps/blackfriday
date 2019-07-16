import * as React from "react";
import { Route } from "react-router-dom";
import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { PlaygroundAhmedComponent } from "./playgrounds/playground-ahmed/playground-ahmed.component";
import { PlaygroundPedroComponent } from "./playgrounds/playground-pedro/playground-pedro.component";
import { PlaygroundDanieleComponent } from "./playgrounds/playground-daniele/playground-daniele.component";
import { PlaygroundMartijnComponent } from "./playgrounds/playground-martijn/playground-martijn.component";
import { WinkleoverviewComponent } from "@app/prep/pages-prep/winkleoverview/winkleoverview.component";
import { BlogSingleComponent } from "@app/prep/pages-prep/blog-single/blog-single.component";
import { StoresOverviewComponent } from "./modules/stores-overview";
import { StoresOverviewContainer } from "./modules/stores-overview/container/stores-overview.container";
import { BlogOverviewPageComponent } from "@app/prep/pages-prep/blog-overview/blog-overview.component";
import { ProductOverviewComponent } from "@app/prep/pages-prep/product-overview/product-overview.component";
import { WinkelSingleComponent } from "@app/prep/pages-prep/winkel-single/winkel-single.component";
import { PagebuilderContainer } from "./core/pagebuilder";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={PagebuilderContainer} />
    <Route exact path="/store-overview" component={PagebuilderContainer} />
    <Route exact path="/store-single" component={PagebuilderContainer} />
    <Route exact path="/deals-overview" component={PagebuilderContainer} />
    <Route exact path="/productline-overview" component={PagebuilderContainer} />
    <Route exact path="/blog-overview" component={PagebuilderContainer} />
    <Route exact path="/blog-single" component={PagebuilderContainer} />

    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-pedro" component={PlaygroundPedroComponent} />
    <Route exact path="/playground-daniele" component={PlaygroundDanieleComponent} />
    <Route exact path="/playground-martijn" component={PlaygroundMartijnComponent} />
  </React.Fragment>
);

export { Routes };
