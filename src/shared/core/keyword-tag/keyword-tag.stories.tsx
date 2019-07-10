
import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { KeywordTagComponent } from "./keyword-tag.component";

storiesOf("KeywordTag", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <KeywordTagComponent />
  ));

  