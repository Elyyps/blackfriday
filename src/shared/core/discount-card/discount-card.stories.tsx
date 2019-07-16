import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { DiscountCardComponent } from "./discount-card.component";
import CoolBlue from "@assets/cool-blue.svg";

storiesOf("DiscountCard", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <DiscountCardComponent
      content="Content"
      range={1}
      status="status"
      title="Title"
      image={CoolBlue}
      coupon="COUPON"
      buttonLink="/"
      buttonText=""
    />
  ));
