import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import { DropdownComponent } from "./dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";

import { generateShareSocialModule } from "@app/api/modules/share-social/endpoints";

const notes = require("./dropdown.md");

storiesOf("dropdown", module)
  .addDecorator(withA11y)
  .add(
    "Basic implementation",
    () => (
      <DropdownComponent>
        <ShareSocialComponent {...generateShareSocialModule()} />
      </DropdownComponent>
    ),
    {
      notes
    }
  );
