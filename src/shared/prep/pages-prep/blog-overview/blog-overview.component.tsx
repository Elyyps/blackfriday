import * as React from "react";
import styles from "./blog-overview-component.module.scss";
import { FooterComponent, NavBarComponent } from "@app/prep/modules-prep";
import { FeaturedDealsComponent } from "@app/prep/modules-prep/featured-deals";
import {
  BlogOverview,
  HeaderOverviewData,
  FeaturedDeals,
  CTASimple
} from "./dummy-data";
import { CtaSmallComponent } from "@app/prep/modules-prep/cta-small";
import { HeaderOverviewComponent } from "@app/prep/modules-prep/header-overview";
import { BlogOverviewComponent } from "@app/prep/modules-prep/blog-overview";
export interface IBlogOverviewComponentProps {}

const BlogOverviewPageComponent = (props: IBlogOverviewComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeaderOverviewComponent {...HeaderOverviewData} />
    <BlogOverviewComponent {...BlogOverview} />
    <FeaturedDealsComponent {...FeaturedDeals} />
    <CtaSmallComponent {...CTASimple} />
    <FooterComponent />
  </div>
);

export { BlogOverviewPageComponent };
