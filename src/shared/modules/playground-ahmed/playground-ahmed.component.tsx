import * as React from "react";
import { generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { FilterModalComponent } from "@app/core/filter-modal/filter-modal.component";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  const checkbox = generateDummyCheckboxArray();

  return (
    <div>
      <DropdownComponent>
        <FilterModalComponent checkbox={checkbox} />
      </DropdownComponent>
    </div>
  );
};

export { PlaygroundAhmedComponent };
