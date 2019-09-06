import * as React from "react";
import styles from "./featured-sidebar-items.module.scss";
import { IArrowPanelProps } from "@app/core";
import { ArrowPanel } from "@app/core/arrow-panel";

export interface IFeaturedSidebarItemsProps {
  featuredItems?: IArrowPanelProps[];
  title?: string;
}

const FeaturedSidebarItems = (props: IFeaturedSidebarItemsProps) => (
  <div className={styles["featured-sidebar-items"]}>
    <div>
      <h3 className={styles["title"]}>{props.title}</h3>
      {props.featuredItems && (
        <div className={styles["list"]}>
          {props.featuredItems.map((item, key) => (
            <ArrowPanel
              key={key}
              icon={item.icon}
              image={item.image}
              link={{ url: item.link.url, title: item.link.title }}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export { FeaturedSidebarItems };
