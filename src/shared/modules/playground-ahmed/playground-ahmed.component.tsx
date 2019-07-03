import * as React from "react";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { generateDummyCheckbox, generateDummyCheckboxArray } from "@app/api/core/checkbox";
import { DropdownComponent } from "@app/core/dropdown/dropdown.component";
import { SearchFilterControlComponent } from "@app/core/search-filter-control/search-filter-control.component";

// import styles from "./playground-ahmed-component.module.scss";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div style={{ marginLeft: "45%" }}>
    <DropdownComponent title="" buttonVariant="secondary" orientation={"bottom-left"}>
      <SearchFilterControlComponent onChange={() => ""} checkbox={generateDummyCheckboxArray()} />
    </DropdownComponent>
  </div>
);

export { PlaygroundAhmedComponent };
