import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { NewsletterComponent } from "./newsletter.component";
import { generateDummyNewsletterModule } from "@app/api/modules/newsletter/generate-dummy-data";

storiesOf("Newsletter", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <NewsletterComponent newsletterModule={generateDummyNewsletterModule()} />);
