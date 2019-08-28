import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { FooterComponent } from "../footer";
import { generateFooterDataBelgian } from "@app/api/modules/footer/endpoints";

import { withProvider } from "@app/util";

storiesOf("Footer", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FooterComponent footerModule={generateFooterDataBelgian()} />);
