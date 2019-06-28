import * as React from "react";
import styles from "./stores-overview-component.module.scss";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps) => (
  <div className={styles["stores-overview"]} />
);

export { StoresOverviewComponent };
