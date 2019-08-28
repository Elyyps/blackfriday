import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { MediumHeroComponent } from "./medium-hero.component";

// Dummy Data
import { generateMediumHeroDummyDataBelgian } from "@app/api/modules/medium-hero/generate-dummy-data";

storiesOf("Medium Hero", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <MediumHeroComponent mediumHeroModule={generateMediumHeroDummyDataBelgian()} />);
