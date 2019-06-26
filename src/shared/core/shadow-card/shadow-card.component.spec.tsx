import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
// import { withProvider } from "@app/modules/core/storybook-provider";
import { ShadowCardComponent } from "./shadow-card.component";

const topNumber = 24;
const sideNumber = 16;

storiesOf("ShadowCard", module)
  .addDecorator(withA11y)
  // .addDecorator(withProvider)
  .add("Basic implementation with only shadow defined", () => (
    <ShadowCardComponent shadowSize="small">
      <div>Content</div>
    </ShadowCardComponent>
  ))
  .add("Basic implementation with more content", () => (
    <ShadowCardComponent shadowSize="small">
      <div>
        <span>Content 1</span>
        <div>
          <span>Content 2</span>
          <div>
            <span>Content 3</span>
          </div>
        </div>
      </div>
    </ShadowCardComponent>
  ))
  .add(
    "Basic implementation with shadow, borderRadius and padding defined",
    () => (
      <ShadowCardComponent
        shadowSize="medium"
        borderRadius={[topNumber, sideNumber, topNumber, sideNumber]}
        padding={[topNumber, sideNumber]}
      >
        <div>Content</div>
      </ShadowCardComponent>
    )
  );
