import * as React from "react";

import styles from "./footer-component.module.scss";

export interface IFooterComponentProps {}

const FooterComponent = (props: IFooterComponentProps) => (
  <div className={styles["footer"]}>Footer</div>
);

export { FooterComponent };
