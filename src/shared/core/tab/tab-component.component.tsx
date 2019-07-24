/* tslint:disable */
import * as React from "react";
import styles from "./tab-component-component.module.scss";
import { Link } from "react-router-dom";
import { generateTabsDummyData } from "@app/api/core/tab/endpoint";
import { StoresOverviewContainer } from "@app/modules/stores-overview/container/stores-overview.container";

export interface ITabComponentProps {}
const TabComponent = (props: ITabComponentProps) => {
  const tabData = generateTabsDummyData;
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
          {tabData.title.map((title: string) => (
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
