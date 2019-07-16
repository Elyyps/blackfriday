import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

import { USP } from "@app/core/usp";
import { generateUSP } from "@app/api/core/usp/endpoints";

storiesOf("Unique Selling Points (USP)", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <USP uspModule={generateUSP()} />);
