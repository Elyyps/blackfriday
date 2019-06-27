import * as React from "react";
import { LinkComponent } from "@app/core/link";
import { getArrow } from "@app/constants/icons";

import styles from "./playground-pedro-component.module.scss";
import { SeeMoreCardComponent } from "@app/core/see-more-card";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={styles["playground-pk"]}>
    Adicione seu código aqui Pedro!
    <i>Wp tom</i>
    <br />
    <LinkComponent to="/">Primary</LinkComponent>
    <LinkComponent icon={getArrow(false)} to="/">
      Primary w Icon
    </LinkComponent>
    <LinkComponent variant="secondary" icon={getArrow(false)} to="/">
      Secondary w Icon
    </LinkComponent>
    <LinkComponent animated variant="tertiary" icon={getArrow(false)} to="/">
      Tertiary w Icon animated
    </LinkComponent>
    <SeeMoreCardComponent
      title="Wij hebben meer winkels in ons overzicht"
      link={{ title: "Alle winkels", url: "/" }}
    />
  </div>
);

export { PlaygroundPedroComponent };
