import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { NotFoundComponent } from "./not-found.component";
import { generateNotFoundModuleDummyData } from "@app/api/modules/not-found/endpoints";
const data = generateNotFoundModuleDummyData();
storiesOf("NotFound", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <NotFoundComponent notFoundModule={data} />);
