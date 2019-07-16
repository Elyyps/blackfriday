import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
//import { withProvider } from "@app/modules/core/storybook-provider";
import { StoresOverviewComponent } from "./stores-overview.component";

storiesOf("StoresOverview", module).addDecorator(withA11y);
//.addDecorator(withProvider)
//.add("Basic implementation", () => (
//  <StoresOverviewComponent />
//));
