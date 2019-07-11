import * as React from "react";

// import styles from "./playground-martijn-component.module.scss";
import { SmallHeaderComponent } from "@app/modules/small-header";
import { MediumHeroComponent } from "@app/modules/medium-hero";
import { BannerModuleComponent } from "@app/modules/banner-module";

// Dummy data
import Oasis from "@assets/oasis.jpg";
import IconDefault from "@assets/icons/chevron-right.svg";
import { uniqueSellingPoints } from "@app/api/core/usp";
import { bannerProps } from "@app/api/core/banner";
import { headerContent } from "@app/api/core/header-content";
import { ClickableComponent } from "@app/core/clickable";

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
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline-fill"
      variant={"primary-brand"}
      onClick={() => alert(`clicked button 2: 1`)}
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline-fill"
      variant={"primary-brand"}
      href="https://www.youtube.com"
      fullWidth
      animated
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-primary"}
      href="https://www.youtube.com"
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-secondary"}
      href="https://www.youtube.com"
    />
    <ClickableComponent
      title="test"
      iconPosition="right"
      icon={IconDefault}
      iconStyle="outline"
      variant={"link-tertiary"}
      href="https://www.youtube.com"
      animated
    />
  </React.Fragment>
);

export { PlaygroundMartijnComponent };
