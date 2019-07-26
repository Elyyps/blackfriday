import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import CardIcon from "@assets/icons/store.svg";
import { withProvider } from "@app/util";
import { ArrowPanel } from "./arrow-panel.component";
const link = { title: "link 1", url: "" };
storiesOf("Arrow-panel", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ArrowPanel icon={CardIcon} link={link} />);
