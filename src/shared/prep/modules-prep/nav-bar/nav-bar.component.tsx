import * as React from "react";

import styles from "./nav-bar-component.module.scss";

export interface INavBarComponentProps {}

const NavBarComponent = (props: INavBarComponentProps) => (
  <div className={styles["nav-bar"]}>Navigation</div>
);

export { NavBarComponent };
