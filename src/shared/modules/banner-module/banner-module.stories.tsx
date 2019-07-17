import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BannerModuleComponent } from "./banner-module.component";

// Dummy data
import { bannerProps } from "@app/api/core/banner";

storiesOf("Banner Module", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BannerModuleComponent bannerProps={bannerProps} />);
