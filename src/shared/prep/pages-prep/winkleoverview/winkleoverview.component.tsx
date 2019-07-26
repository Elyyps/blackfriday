import * as React from "react";
import styles from "./winkleoverview-component.module.scss";
import { FooterComponent, NavBarComponent, DealsOverviewComponent, HeaderSmallComponent } from "@app/prep/modules-prep";
import { CtaSmallComponent } from "@app/prep/modules-prep/cta-small";
import { CTASimple, HeaderSmall } from "@app/prep/pages-prep/winkleoverview/dummy-data";
import { NewsletterComponent } from "@app/core/newsletter";

export interface IHomepageComponentProps {}

const WinkleoverviewComponent = (props: IHomepageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeaderSmallComponent {...HeaderSmall} />
    <DealsOverviewComponent />
    <NewsletterComponent />
    <CtaSmallComponent {...CTASimple} />
    <FooterComponent />
  </div>
);

export { WinkleoverviewComponent };
