import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ShopSingleHeaderComponent } from "./shop-single-header.component";
import { generatedummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";
import { ViewType } from "@app/stores/settings";

storiesOf("Shop Single Header", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <ShopSingleHeaderComponent
      screenSize={{ breakpointPixels: 0, viewType: ViewType.Desktop }}
      shopSingleHeaderModule={generatedummyShopSingleHeaderData()}
    />
  ));
