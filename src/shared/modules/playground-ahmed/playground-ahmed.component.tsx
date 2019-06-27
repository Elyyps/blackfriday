import * as React from 'react';
// import { generateDummyCheckboxArray } from "@app/api/core/checkbox";
// import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
// import { FilterModalComponent } from "@app/core/search-filter-control/search-filter-control.component";
import { FilterBarComponent } from '../filter-bar';

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => {
  //  const checkbox = generateDummyCheckboxArray();

  return (
    <div>
      <FilterBarComponent />
      {/* <DropdownComponent orientation={'right'}>
        <FilterModalComponent checkbox={checkbox} />
      </DropdownComponent> */}
    </div>
  );
};

export { PlaygroundAhmedComponent };
