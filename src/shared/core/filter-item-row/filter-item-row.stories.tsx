import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { FilterItemRow } from "./filter-item-row.component";
import CardIcon from "@assets/icons/store.svg";
import { withProvider } from "@app/util";

storiesOf("Arrow-panel", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FilterItemRow title="Productdeals" icon={CardIcon} />)
  .add("Implementation with items", () => <FilterItemRow title="Productdeals" items={["Nike", "Adidas"]} />)
  .add("Implementation with many items", () => (
    <FilterItemRow title="Productdeals" items={["Nike", "Adidas", "New Balance", "Versace"]} />
  ));
