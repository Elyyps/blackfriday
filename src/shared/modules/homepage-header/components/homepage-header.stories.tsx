import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { HomePageHeaderComponent } from "..";

import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";

import { withProvider } from "@app/util";

storiesOf("Homepage Header", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <HomePageHeaderComponent homePageModule={getHeaderpageHeader()} />);
