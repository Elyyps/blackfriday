import * as React from "react";
import { ShadowCardComponent } from "@app/core/shadow-card";

import styles from "./playground-martijn-component.module.scss";

export interface IPlaygroundMartijnComponentProps {}

const topNumber = 24;
const sideNumber = 16;

const PlaygroundMartijnComponent = (
  props: IPlaygroundMartijnComponentProps
) => (
  <div className={styles["playground-martijn"]}>
    <ShadowCardComponent shadowSize="small">
      <div>Content</div>
    </ShadowCardComponent>
    <ShadowCardComponent shadowSize="small">
      <div>
        fdsfd
        <div>
          f sdf ds
          <div>Voeg hier je code toe Martijn!</div>
        </div>
      </div>
    </ShadowCardComponent>
    <ShadowCardComponent
      shadowSize="medium"
      borderRadius={[topNumber, sideNumber, topNumber, sideNumber]}
      padding={[topNumber, sideNumber, topNumber, sideNumber]}
    >
      <div>Content</div>
    </ShadowCardComponent>
  </div>
);

export { PlaygroundMartijnComponent };
