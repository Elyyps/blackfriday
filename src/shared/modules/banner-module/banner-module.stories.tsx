import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BannerModuleComponent } from "./banner-module.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

const paddingBottom = "72px";
const paddingTop = paddingBottom;

storiesOf("BannerModule", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <BannerModuleComponent
      bgcolor="#eee"
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      bannerProps={bannerProps}
    />
  ));
