import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { CtaSmallComponent } from "./cta-small.component";
import { withProvider } from "@app/util";
import { generateCtaSmallModule } from "@app/api/modules/cta-small/generate-dummy-data";

storiesOf("CtaSmall", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <CtaSmallComponent {...generateCtaSmallModule()} />);
