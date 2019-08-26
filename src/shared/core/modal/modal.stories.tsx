import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ModalComponent } from "./modal.component";
import { Button } from "..";

storiesOf("Modal", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <ModalComponent trigger={<Button title={"test"} />} variant={"small"}>
      <p>test</p>
    </ModalComponent>
  ));
