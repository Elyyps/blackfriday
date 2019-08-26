import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { SmallHeaderComponent } from "./small-header.component";
import { withProvider } from "@app/util";
import { headerContent } from "@app/api/core/header-content";

storiesOf("Small Header", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <SmallHeaderComponent headerContent={headerContent} />);
