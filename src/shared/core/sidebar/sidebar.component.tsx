import * as React from "react";
import styles from "./sidebar-component.module.scss";
import { BannerComponent, IBannerComponentProps } from "@app/core/banner";
import { SidebarBoxComponent } from "@app/prep/modules-prep/core";

export interface ISidebarComponentProps {
  banner?: IBannerComponentProps;
  items?: any[];
}

const SidebarComponent = (props: ISidebarComponentProps) => (
  <div className={styles["sidebar"]}>
    {props.banner && <BannerComponent {...props.banner} variant="small" />}

    {props.items &&
      props.items.map((item, key) => <SidebarBoxComponent key={key} title={item.title} items={item.links} />)}
  </div>
);

export { SidebarComponent };
