import * as React from "react";
import { HeaderInfoComponent } from "../header-info";

import { getHeaderInfoDummyData } from "@app/api/modules/header-info/endpoints";
import { FooterComponent } from "../footer";
import { getFullfooter } from "@app/api/modules/footer/endpoints";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <HeaderInfoComponent headerInfo={getHeaderInfoDummyData()} />
    <FooterComponent footerModule={getFullfooter()} />
  </div>
);

export { PlaygroundDanieleComponent };
