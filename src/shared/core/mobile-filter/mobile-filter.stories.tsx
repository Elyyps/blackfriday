import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";

storiesOf("MobileFilter", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <MobileFilterComponent totalStores={0} onClear={jest.fn} filterItems={mobileFilterDummyData} onFinish={jest.fn} />
  ));
