import * as React from "react";

import styles from "./first-module-component.module.scss";

export interface IFirstModuleComponentProps {}

const FirstModuleComponent = (props: IFirstModuleComponentProps) => {
  return <div className={styles["first-module"]}>First module</div>;
};

export { FirstModuleComponent };
