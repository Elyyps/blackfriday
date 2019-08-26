import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

import { generateUSP } from "@app/api/core/usp/endpoints";
import { USPContainer } from "./container";

storiesOf("Unique Selling Points (USP)", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <USPContainer uspModule={generateUSP()} />);
