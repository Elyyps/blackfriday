import * as React from "react";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { generateDummyCheckbox } from "@app/api/core/checkbox";
import { FilterBarComponent } from "@app/core/filter-bar";
import { generateDummyFilterBar } from "@app/api/core/filter-bar";

// import styles from "./playground-ahmed-component.module.scss";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div className="uk-container">
    <FilterBarComponent
      filterBar={generateDummyFilterBar()}
      onBrandChanged={() => ""}
      onStatusChanged={() => ""}
      onOrderByChanged={() => ""}
      onCategoryChanged={() => ""}
    />
  </div>
);

export { PlaygroundAhmedComponent };
