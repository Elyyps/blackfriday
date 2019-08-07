import * as React from "react";
import styles from "./sidebar-component.module.scss";
import { BannerComponent, IBannerComponentProps } from "@app/core/banner";
import { FeaturedSidebarItems, IFeaturedSidebarItemsProps } from "./components/featured-sidebar-items";

export interface ISidebarComponentProps {
  banner?: IBannerComponentProps;
  featuredItemsGroups?: IFeaturedSidebarItemsProps[];
}

const SidebarComponent = (props: ISidebarComponentProps) => (
  <div className={styles["sidebar"]}>
    {props.banner && <BannerComponent isButtonFullWidth {...props.banner} variant="small" />}

    {props.featuredItemsGroups &&
      props.featuredItemsGroups.map((itemGroup, key) => (
        <FeaturedSidebarItems key={key} title={itemGroup.title} featuredItems={itemGroup.featuredItems} />
      ))}
  </div>
);

export { SidebarComponent };
