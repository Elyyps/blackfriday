import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { SelectComponent } from "./select.component";
const options = ["newest", "price", "relevance"];

storiesOf("Select", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <SelectComponent options={options} onSelect={() => ""} />);
