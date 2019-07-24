import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { DropdownComponent } from "./dropdown.component";
import { ShareSocialComponent } from "@app/core/share-social";
import { generateShareSocialModule } from "@app/api/core/share-social/endpoints";
import { SearchFilterControlComponent } from "../search-filter-control/search-filter-control.component";
import { generateShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";

const notes = require("./dropdown.md");
const dropdownData = generateShopsOverviewData();
storiesOf("dropdown", module)
  .addDecorator(withA11y)
  .add(
    "Implementation with Social Media Sharing",
    () => (
      <DropdownComponent buttonColor="outline" buttonVariant="primary-brand">
        <ShareSocialComponent {...generateShareSocialModule()} />
      </DropdownComponent>
    ),
    {
      notes
    }
  );
