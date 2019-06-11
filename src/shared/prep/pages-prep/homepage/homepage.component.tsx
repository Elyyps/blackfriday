import * as React from "react";

import styles from "./homepage-component.module.scss";
import { FirstModuleComponent } from "@app/prep/modules-prep";

export interface IHomepageComponentProps {}

const HomepageComponent = (props: IHomepageComponentProps) => {
  return (
    <div>
      <div className={styles["start"]}>Hello, start here</div>
      <FirstModuleComponent />
    </div>
  );
};

export { HomepageComponent };
