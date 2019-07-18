import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { NavBarComponent } from "./nav-bar.component";

// Dummy Data
import { generateDummyNavbarData } from "@app/api/modules/navbar/generate-dummy-data";

storiesOf("Navbar module", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <NavBarComponent navBarModule={generateDummyNavbarData()} />);
