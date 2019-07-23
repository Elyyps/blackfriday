import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { ArrowPanel } from "./arrow-panel.component";
import CardIcon from "@assets/icons/store.svg";
import { withProvider } from "@app/util";

// storiesOf("Arrow-panel", module)
//   .addDecorator(withA11y)
//   .addDecorator(withProvider)
//   .add("Basic implementation", () => <ArrowPanel title="Productdeals" icon={CardIcon} link={"/"} />)
//   .add("Implementation with items", () => <ArrowPanel title="Productdeals" items={["Nike", "Adidas"]} link={"/"} />)
//   .add("Implementation with many items", () => (
//     <ArrowPanel title="Productdeals" items={["Nike", "Adidas", "New Balance", "Versace"]} link={"/"} />
//   ));
