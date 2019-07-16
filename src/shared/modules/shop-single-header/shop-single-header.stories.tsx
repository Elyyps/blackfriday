import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ShopSingleHeaderComponent } from "./shop-single-header.component";
import { dummyShopSingleHeaderData } from "@app/api/modules/shop-single-header/generate-dummy-data";

storiesOf("Shop Single Header", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ShopSingleHeaderComponent {...dummyShopSingleHeaderData} />);
