import * as React from "react";
import styles from "./tab-component.module.scss";
export interface ITabsInterface {
  content: JSX.Element;
  index: number;
  title: string;
}

export interface ITabLink {
  href: string;
  isSelected?: boolean;
  title: string;
}
export interface ITabComponentProps {
  tabs: ITabLink[];
}
const TabComponent = (props: ITabComponentProps) => (
  <React.Fragment>
    <div className={`${styles["tab"]} uk-container`}>
      <div className={styles["uk-tab__list"]}>
        {props.tabs.map((tab, key) => (
          <a href={tab.href} key={key} className={tab.isSelected ? styles["tab__selected"] : ""}>
            {tab.title}
          </a>
        ))}
      </div>
    </div>
  </React.Fragment>
);
export { TabComponent };
