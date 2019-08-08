import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { CheckboxDropdown } from "./checkbox-dropdown.component";

storiesOf("Checkbox dropdown", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <CheckboxDropdown items={[]} onChange={jest.fn()} title="" />);
