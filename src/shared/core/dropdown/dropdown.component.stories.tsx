import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { DropdownComponent } from "./dropdown.component";
import { SearchFilterControlComponent } from "../search-filter-control/search-filter-control.component";

const notes = require("./dropdown.md");

storiesOf("dropdown", module)
  .addDecorator(withA11y)
  .add(
    "Basic implementation",
    () => (
      <DropdownComponent>
        <SearchFilterControlComponent checkbox={generateDummyCheckboxArray()} />
      </DropdownComponent>
    ),
    {
      notes
    }
  );
