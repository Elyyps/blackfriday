import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { LabelComponent } from "./label.component";

storiesOf("Label Component", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <LabelComponent text={"Black Friday 2019: NOG 10 dagen!"} />)
  .add("Basic implementation", () => <LabelComponent isLeftPointy text={"Black Friday 2019: NOG 10 dagen!"} />)
  .add("Basic implementation", () => <LabelComponent isRightPointy text={"Black Friday 2019: NOG 10 dagen!"} />)
  .add("Basic implementation", () => (
    <LabelComponent isRightPointy isLeftPointy text={"Black Friday 2019: NOG 10 dagen!"} />
  ));
