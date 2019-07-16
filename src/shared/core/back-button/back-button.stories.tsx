import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BackLinkComponent } from "./back-button.component";

storiesOf("Back Button", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
      <BackLinkComponent />
    </div>
  ));
