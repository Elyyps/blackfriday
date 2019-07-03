import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { LinkComponent } from "./link.component";
import { getArrow } from "@app/constants/icons";
import { withProvider } from "@app/util";

storiesOf("Link", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation primary", () => <LinkComponent to="/">Primary</LinkComponent>)

  .add("Basic implementation primary", () => (
    <LinkComponent icon={getArrow(false)} to="/">
      Primary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation secondary", () => (
    <LinkComponent variant="secondary" icon={getArrow(false)} to="/">
      Secondary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation tertiary", () => (
    <LinkComponent animated variant="tertiary" icon={getArrow(false)} to="/">
      Tertiary w Icon animated
    </LinkComponent>
  ));
