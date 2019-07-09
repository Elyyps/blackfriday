import * as React from "react";
import { HeroComponent } from "../hero";
import CardIcon from "@assets/icons/store.svg";
import { ArrowPanel } from "@app/core/arrow-panel";
// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div style={{ background: "black" }}>
    <div style={{ paddingBottom: "50px" }}>
      <ArrowPanel title="Productdeals" brands={["Nike"]} link={"/"} />
    </div>
  </div>
);

export { PlaygroundDanieleComponent };
