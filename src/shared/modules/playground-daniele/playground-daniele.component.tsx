import * as React from "react";
import { FooterComponent } from "../footer";
import { getFullfooter } from "@app/api/modules/footer/endpoints";

// import styles from "./playground-daniele-component.module.scss";

export interface IPlaygroundDanieleComponentProps {}

const PlaygroundDanieleComponent = (props: IPlaygroundDanieleComponentProps) => (
  <div>
    <FooterComponent footerModule={getFullfooter()} />
  </div>
);

export { PlaygroundDanieleComponent };
