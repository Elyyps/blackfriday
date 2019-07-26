import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BannerComponent } from "./banner.component";

// Dummy data
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";

storiesOf("Banner", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BannerComponent {...generateDummyBannerComponentData()} />)
  .add("Basic implementation without image", () => <BannerComponent {...generateDummyBannerComponentData()} />);
