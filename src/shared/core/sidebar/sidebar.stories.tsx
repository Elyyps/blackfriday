import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { SidebarComponent } from "./sidebar.component";
import { generateSidebarData } from "@app/api/core/sidebar/generate-dummy-data";

storiesOf("Sidebar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <SidebarComponent {...generateSidebarData()} />);
