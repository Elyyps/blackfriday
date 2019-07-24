import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import { Badge } from "./badge.component";

import ShareSVG from "@assets/icons/share.svg";
import { ShareSocialComponent } from "../share-social";
import { generateShareSocialModule } from "@app/api/core/share-social/endpoints";
const notes = require("./badge.md");

storiesOf("Badge", module)
  .addDecorator(withA11y)
  .add(
    "Basic implementation",
    () => (
      <Badge position={"right"} icon={ShareSVG}>
        <ShareSocialComponent {...generateShareSocialModule()} />
      </Badge>
    ),
    {
      notes
    }
  );
