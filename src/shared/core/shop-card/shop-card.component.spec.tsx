import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
//import { withProvider } from "@app/modules/core/storybook-provider";
import { ShopCardComponent } from "./shop-card.component";

storiesOf("ShopCard", module).addDecorator(withA11y);
//.addDecorator(withProvider)
//.add("Basic implementation", () => (
//  <ShopCardComponent />
//));
