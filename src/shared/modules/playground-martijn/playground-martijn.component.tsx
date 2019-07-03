import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { SmallHeaderComponent } from "@app/modules/small-header";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <SmallHeaderComponent
    title="Black Friday Winkels"
    subtitle="Deelnemende winkels van 2019"
    text="Bodytext voor extra informatie wanneer nodig"
  />
);

export { PlaygroundMartijnComponent };
