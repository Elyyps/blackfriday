import * as React from "react";
import { CheckboxComponent } from "@app/core/checkbox/checkbox.component";
import { generateDummyCheckbox } from "@app/api/core/checkbox";

// import styles from "./playground-ahmed-component.module.scss";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div>
    <CheckboxComponent checkbox={generateDummyCheckbox()} onClick={() => ""} />
  </div>
);

export { PlaygroundAhmedComponent };
