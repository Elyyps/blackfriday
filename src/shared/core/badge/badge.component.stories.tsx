import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import { Badge } from "./badge.component";

import ShareSVG from "@assets/icons/share.svg";
const notes = require("./badge.md");

storiesOf("Badge", module)
  .addDecorator(withA11y)
  .add("Basic implementation", () => <Badge position={"right"} icon={ShareSVG} />, {
    notes
  });
