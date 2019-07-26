import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ShareSocialDropdownComponent } from "./share-social-dropdown.component";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";

storiesOf("ShareSocialDropdown", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <ShareSocialDropdownComponent buttonTitle="Share" shareSocial={socialMediaButtons} />
  ));
