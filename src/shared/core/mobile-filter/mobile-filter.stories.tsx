import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { MobileFilterComponent } from "./mobile-filter.component";
import { mobileFilterDummyData } from "./dummy-data";
import { breakPointDesktop } from "@app/util/detect-view";
import { ViewType } from "@app/stores/settings";

storiesOf("MobileFilter", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <MobileFilterComponent
      onFilterChange={jest.fn}
      screenSize={{ viewType: ViewType.Desktop, breakpointPixels: breakPointDesktop }}
      totalStores={0}
      onClear={jest.fn}
      onFinish={jest.fn}
      filterItems={mobileFilterDummyData}
    />
  ));
