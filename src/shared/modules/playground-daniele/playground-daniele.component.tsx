import * as React from "react";
import { HomePageHeaderComponent } from "../homepage-header";

import { getHeaderpageHeader } from "@app/api/modules/homepage-header/endpoints";
// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div style={{ background: "black" }}>
    <div style={{ paddingBottom: "50px" }}>
      <HomePageHeaderComponent homePageModule={getHeaderpageHeader()} />
    </div>
  </div>
);

export { PlaygroundDanieleComponent };
