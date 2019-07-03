import * as React from "react";
import styles from "./playground-pedro-component.module.scss";
import { NavBarComponent } from "../nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/navbar/generate-dummy-data";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles["playground-pk"]}>
    <NavBarComponent navBarModule={generateDummyNavbarData()} />
  </div>
);

export { PlaygroundPedroComponent };
