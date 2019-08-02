import * as React from "react";
import { Route } from "react-router-dom";
import { PlaygroundAhmedComponent } from "./playgrounds/playground-ahmed/playground-ahmed.component";
import { PlaygroundDanieleComponent } from "./playgrounds/playground-daniele/playground-daniele.component";
import { PlaygroundMartijnComponent } from "./playgrounds/playground-martijn/playground-martijn.component";
import { PagebuilderContainer } from "./core/pagebuilder";
import { PlaygroundTomComponent } from "./playgrounds/playground-tom/playground-tom.component";
import { WinkleoverviewComponent } from "./prep/pages-prep/winkleoverview/winkleoverview.component";

const Routes: React.FunctionComponent = () => (
  <React.Fragment>
    <Route exact path="/" component={PagebuilderContainer} />
    <Route exact path="/stores-overview" component={PagebuilderContainer} />
    <Route exact path="/stores-single" component={PagebuilderContainer} />
    <Route exact path="/deals-overview" component={PagebuilderContainer} />
    <Route exact path="/productline-overview" component={PagebuilderContainer} />
    <Route exact path="/blog-overview" component={PagebuilderContainer} />
    <Route exact path="/blog-single" component={PagebuilderContainer} />
    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-daniele" component={PlaygroundDanieleComponent} />
    <Route exact path="/playground-martijn" component={PlaygroundMartijnComponent} />
    <Route exact path="/playground-tom" component={PlaygroundTomComponent} />
    <Route exact path="/ukraineoverview" component={WinkleoverviewComponent} />
  </React.Fragment>
);

export { Routes };
