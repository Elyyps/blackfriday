import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { CheckboxCount } from "./checkbox-count.component";
/* tslint:disable */
storiesOf("Checkbox Count", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <CheckboxCount
      item={{
        displayName: "",
        id: "1",
        isSelected: false,
        totalAmount: 22
      }}
      onChecked={() => {}}
    />
  ));
