import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/modules/core/storybook-provider";
import { SeeMoreCardComponent } from "./see-more-card.component";

storiesOf("SeeMoreCard", module)
  .addDecorator(withA11y)
  // .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <SeeMoreCardComponent
      title="Wij hebben meer winkels in ons overzicht"
      link={{ title: "Alle winkels", url: "/" }}
    />
  ));
