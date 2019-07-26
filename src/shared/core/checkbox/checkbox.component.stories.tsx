import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { CheckboxComponent } from "./checkbox.component";

const notes = require("./checkbox.md");

storiesOf("checkbox", module)
  .addDecorator(withA11y)
  .add("Basic implementation", () => <CheckboxComponent onClick={() => ""}> Test </CheckboxComponent>, {
    notes
  });
