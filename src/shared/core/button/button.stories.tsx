import * as React from "react";

import IconDefault from "@assets/icons/link.svg";
import { Button, ButtonType } from "@app/core/button/";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/core/storybook-provider";

const buttonVariants: ButtonType[] = [
  "primary-default",
  "primary-brand",
  "primary-inverted",
  "secondary",
  "secondary-inverted",
  "tertiary",
  "tertiary-inverted"
];

const stories = storiesOf("Button", module).addDecorator(withA11y);
// .addDecorator(withProvider)
buttonVariants.forEach(element => {
  stories.add(`Icon right ${element}`, () => (
    <Button
      icon={IconDefault}
      iconPosition="right"
      title="Button"
      variant={element}
    />
  ));
  stories.add(`Icon left ${element}`, () => (
    <Button
      icon={IconDefault}
      iconPosition="left"
      title="Button"
      variant={element}
    />
  ));
  stories.add(`Icon only ${element}`, () => (
    <Button icon={IconDefault} variant={element} />
  ));
  stories.add(`Text only ${element}`, () => (
    <Button title="Button" variant={element} />
  ));
});
