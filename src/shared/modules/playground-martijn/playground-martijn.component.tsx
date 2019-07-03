import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { SmallHeaderComponent } from "@app/modules/small-header";
import { MediumHeroComponent } from "../medium-hero";
import Oasis from "@assets/oasis.jpg";

export interface IPlaygroundMartijnComponentProps {}

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    <MediumHeroComponent
      title="Black Friday Winkels"
      subtitle="Deelnemende winkels van 2019"
      text="Bodytext voor extra informatie wanneer nodig"
      image={Oasis}
    />
    <SmallHeaderComponent
      title="Black Friday Winkels"
      subtitle="Deelnemende winkels van 2019"
      text="Bodytext voor extra informatie wanneer nodig"
    />
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
