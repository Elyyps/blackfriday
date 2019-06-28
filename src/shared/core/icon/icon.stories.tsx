import * as React from "react";

import IconDefault from "@assets/icons/link.svg";
import { IconComponent } from "@app/core/icon/";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/core/storybook-provider";

storiesOf("Button", module)
  .addDecorator(withA11y)
  // .addDecorator(withProvider)
  .add("Basic implementation of icon component", () => (
    <IconComponent icon={IconDefault} size="14px" />
  ));
