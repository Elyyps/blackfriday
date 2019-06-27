import * as React from "react";
import styles from "./blog-single-component.module.scss";
import { FooterComponent, NavBarComponent } from "@app/prep/modules-prep";
import { FeaturedDealsComponent } from "@app/prep/modules-prep/featured-deals";
import {
  HeaderData,
  HeaderOverviewData,
  FeaturedDeals,
  CTASimple,
  BlogFeaturedFields
} from "./dummy-data";
import { CtaSmallComponent } from "@app/prep/modules-prep/cta-small";
import { FeaturedBlogComponent } from "@app/prep/modules-prep/featured-blog";
import { HeaderSingleComponent } from "@app/prep/modules-prep/header-single";
import { HeaderOverviewComponent } from "@app/prep/modules-prep/header-overview";

export interface IBlogSingleComponentProps {}

const BlogSingleComponent = (props: IBlogSingleComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeaderSingleComponent {...HeaderData} />
    <HeaderOverviewComponent {...HeaderOverviewData} />
    <FeaturedDealsComponent {...FeaturedDeals} />
    <FeaturedBlogComponent {...BlogFeaturedFields} />
    <CtaSmallComponent {...CTASimple} />
    <FooterComponent />
  </div>
);

export { BlogSingleComponent };
