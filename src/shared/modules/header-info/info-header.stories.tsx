import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import { HeaderInfoComponent } from "../header-info";

import { getHeaderInfoDummyData } from "@app/api/modules/header-info/endpoints";
import { withProvider } from "@app/util";

storiesOf("InfoHeader", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <HeaderInfoComponent headerInfo={getHeaderInfoDummyData()} />);
