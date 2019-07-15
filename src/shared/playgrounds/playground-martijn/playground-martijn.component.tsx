import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";

import { BodytextComponent } from "@app/core/bodytext";

import { generateBodytextDummyData } from "@app/api/core/bodytext.tsx";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    <BodytextComponent>{generateBodytextDummyData()}</BodytextComponent>
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
