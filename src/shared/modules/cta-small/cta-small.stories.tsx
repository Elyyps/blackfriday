import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/modules/core/storybook-provider";
import { CtaSmallComponent } from "./cta-small.component";
import IconDefault from "@assets/icons/sign.svg";

const buttonClick = () => (location.href = "#");
storiesOf("CtaSmall", module)
  .addDecorator(withA11y)
  // .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <CtaSmallComponent
      buttonClick={buttonClick}
      buttonTitle="Naar deals"
      text="Niet helemaal wat je zoekt? Geeft niks want we hebben meer!"
      icon={IconDefault}
    />
  ))
  .add("Emtpy implementation", () => <CtaSmallComponent />);
