import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { TabComponentComponent } from "./tab-component.component";

storiesOf("tabComponent", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <TabComponentComponent />);
