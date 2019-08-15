import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { PageProgressBarComponent } from "./page-progress-bar.component";

storiesOf("PageProgressBar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div>
      <PageProgressBarComponent totalHeight={0} mainDivRef={{}} />
    </div>
  ));
