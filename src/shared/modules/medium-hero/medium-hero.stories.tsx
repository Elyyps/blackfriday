import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { MediumHeroComponent } from "./medium-hero.component";

// Dummy Data
import { headerContent } from "@app/api/core/header-content";
import Oasis from "@assets/oasis.jpg";
import { uniqueSellingPoints } from "@app/api/core/usp";

storiesOf("Medium Hero", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <MediumHeroComponent headerContent={headerContent} image={Oasis} usps={uniqueSellingPoints} />
  ));
