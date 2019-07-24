/* tslint:disable */
import * as React from "react";
import styles from "./tab-component.module.scss";
import { Link } from "react-router-dom";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";

export interface ITabComponentProps {
  titles: string[];
}
const TabComponent = (props: ITabComponentProps) => {
  const [selectedTab, setSelectedTab] = React.useState<string>("Winkels");
  const getComponentTabIndex = (title: string) => {
    let tabComponent;

    switch (title) {
      case "Winkels":
        tabComponent = <StoresOverviewContainer />;
    }

    return tabComponent;
  };

  return (
    <React.Fragment>
      <div className={`${styles["tab"]}`}>
        <ul className={styles["uk-tab__list"]}>
          {props.titles.map((title: string) => (
            <li className={selectedTab === title ? styles["tab__selected"] : ""} onClick={() => setSelectedTab(title)}>
              {<Link to="#">{title}</Link>}
            </li>
          ))}
        </ul>
      </div>
      {getComponentTabIndex(selectedTab)}
    </React.Fragment>
  );
};
export { TabComponent };
