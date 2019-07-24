import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { CtaNewsletterComponent } from "./cta-newsletter.component";
import { generateCtaNewsLetterModule } from "@app/api/modules/cta-newsletter/generate-dummy-data";

storiesOf("CtaSmall", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <CtaNewsletterComponent ctaNewsLetterModule={generateCtaNewsLetterModule()} />);
