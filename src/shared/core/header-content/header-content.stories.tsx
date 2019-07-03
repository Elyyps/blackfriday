import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { HeaderContentComponent } from "./header-content.component";

storiesOf("HeaderContent", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <HeaderContentComponent
      title="Black Friday Winkels"
      subtitle="Deelnemende winkels van 2019"
      text="Bodytext voor extra informatie wanneer nodig"
    />
  ));
