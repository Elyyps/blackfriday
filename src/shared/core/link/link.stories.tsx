import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { LinkComponent } from "./link.component";
import { getArrow } from "@app/constants/icons";

storiesOf("Link", module)
  .addDecorator(withA11y)
  .add("Basic implementation primary", () => (
    <LinkComponent to="/">Primary</LinkComponent>
  ))

  .add("Basic implementation primary", () => (
    <LinkComponent icon={getArrow(false)} to="/">
      Primary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation primary", () => (
    <LinkComponent variant="secondary" icon={getArrow(false)} to="/">
      Secondary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation primary", () => (
    <LinkComponent animated variant="tertiary" icon={getArrow(false)} to="/">
      Tertiary w Icon animated
    </LinkComponent>
  ));
