import * as React from "react";
import styles from "./page-progress-bar-component.module.scss";

export interface IPageProgressBarComponentProps {
  value: number;
}

const PageProgressBarComponent = ({ value }: IPageProgressBarComponentProps) => (
  <div className={styles["page-progress-bar"]}>
    <div style={{ width: `${value}%` }} className={styles["page-progress-bar__progress"]} />
  </div>
);

export { PageProgressBarComponent };
