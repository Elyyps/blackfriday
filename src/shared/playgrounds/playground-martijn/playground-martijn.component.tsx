import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { MediumHeroComponent } from "@app/modules/medium-hero";

// Dummy data
import { generateMediumHeroDummyDataBelgian } from "@app/api/modules/medium-hero/generate-dummy-data";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <MediumHeroComponent mediumHeroModule={generateMediumHeroDummyDataBelgian()} />
);

export { PlaygroundMartijnComponent };
