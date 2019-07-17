import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { ArrowPanelComponent } from "./arrow-panel.component";
import CardIcon from "@assets/icons/store.svg";
import { withProvider } from "@app/util";

storiesOf("Arrow-panel", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ArrowPanelComponent title="Productdeals" icon={CardIcon} link={"/"} />)
  .add("Emtpy implementation", () => (
    <ArrowPanelComponent title="Productdeals" brands={["Nike", "Adidas", "New Balance", "Versace"]} link={"/"} />
  ));
