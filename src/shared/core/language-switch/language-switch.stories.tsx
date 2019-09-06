import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { LanguageSwitchComponent } from "./language-switch.component";
import { IBlackFridayRootURL } from "@app/stores/settings";

storiesOf("LanguageSwitch", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <LanguageSwitchComponent
      blackFridayRootUrl={{ rootUrl: "be" } as IBlackFridayRootURL}
      currentLocale="nl"
      onLanguageSwitch={() => jest.fn()}
    />
  ));
