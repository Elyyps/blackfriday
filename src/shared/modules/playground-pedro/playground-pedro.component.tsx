import * as React from "react";
import { LinkComponent } from "@app/core/link";
import { getArrow } from "@app/constants/icons";

import styles from "./playground-pedro-component.module.scss";
import { SeeMoreCardComponent } from "@app/core/see-more-card";
import { NavBarComponent } from "../nav-bar";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles["playground-pk"]}>
    <NavBarComponent />
  </div>
);

export { PlaygroundPedroComponent };
