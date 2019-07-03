import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { SmallHeaderComponent } from "@app/modules/small-header";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <SmallHeaderComponent title="Black Friday 2019 blog" />
);

export { PlaygroundMartijnComponent };
