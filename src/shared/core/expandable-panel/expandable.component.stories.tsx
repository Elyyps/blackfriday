import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { ExpandablePanelComponent } from "./expandable-panel.component";

const notes = require("./expandable.md");

storiesOf("Expandable", module)
  .addDecorator(withA11y)
  .add("Basic implementation", () => <ExpandablePanelComponent mainContent={<span>Title</span>} />, {
    notes
  });
