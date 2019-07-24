import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { SearchInputFieldComponent } from "./search-input-field.component";
const notes = require("./search-input.md");
storiesOf("SearchInputField", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <SearchInputFieldComponent />, {
    notes
  });
