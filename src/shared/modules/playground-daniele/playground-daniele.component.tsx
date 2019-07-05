import * as React from "react";
import { HeaderInfoComponent } from "../header-info";

import { getHeaderInfoDummyData } from "@app/api/modules/header-info/endpoints";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <HeaderInfoComponent headerInfo={getHeaderInfoDummyData()} />
  </div>
);

export { PlaygroundDanieleComponent };
