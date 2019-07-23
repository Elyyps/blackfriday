import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BannerComponent } from "./banner.component";

// Dummy data
import { generateDummyBannerModule } from "@app/api/modules/banner/generate-dummy-data";

storiesOf("Banner", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BannerComponent bannerModule={generateDummyBannerModule()} />)
  .add("Basic implementation without image", () => <BannerComponent bannerModule={generateDummyBannerModule()} />);
