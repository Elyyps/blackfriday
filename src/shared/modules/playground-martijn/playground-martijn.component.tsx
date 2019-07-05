import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { SmallHeaderComponent } from "@app/modules/small-header";
import { MediumHeroComponent } from "@app/modules/medium-hero";
import { BannerModuleComponent } from "@app/modules/banner-module";

// Dummy data
import Oasis from "@assets/oasis.jpg";
import { uniqueSellingPoints } from "@app/api/core/usp";
import { bannerProps } from "@app/api/core/banner";
import { headerContent } from "@app/api/core/header-content";

export interface IPlaygroundMartijnComponentProps {}

const paddingBottom = "72px";
const paddingTop = paddingBottom;

const PlaygroundMartijnComponent = (props: IPlaygroundMartijnComponentProps) => (
  <React.Fragment>
    <MediumHeroComponent headerContent={headerContent} image={Oasis} usps={uniqueSellingPoints} />
    <SmallHeaderComponent headerContent={headerContent} />
    <BannerModuleComponent
      bgcolor="#eee"
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      bannerProps={bannerProps}
    />
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
