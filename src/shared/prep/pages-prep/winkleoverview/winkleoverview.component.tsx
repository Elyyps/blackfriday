import * as React from "react";
import styles from "./winkleoverview-component.module.scss";
import {
  FooterComponent,
  NavBarComponent,
  DealsOverviewComponent
} from "@app/prep/modules-prep";

export interface IHomepageComponentProps {}

const WinkleoverviewComponent = (props: IHomepageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <DealsOverviewComponent />
    <FooterComponent />
  </div>
);

export { WinkleoverviewComponent };
