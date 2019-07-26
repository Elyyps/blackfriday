import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import CardIcon from "@assets/icons/store.svg";
import { withProvider } from "@app/util";
import { ArrowPanel } from "./arrow-panel.component";

storiesOf("Arrow-panel", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ArrowPanel link={{ title: "Productdeals", url: "/" }} icon={CardIcon} />)
  .add("Implementation with items", () => <ArrowPanel link={{ title: "Productdeals", url: "/" }} />);
