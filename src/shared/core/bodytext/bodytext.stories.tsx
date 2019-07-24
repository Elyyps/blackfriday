import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

storiesOf("Bodytext", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider);
// .add("Basic implementation", () => <BodytextComponent> {generateBodytextDummyData()}</BodytextComponent>);
