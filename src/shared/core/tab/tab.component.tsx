import * as React from "react";
import styles from "./tab-component.module.scss";
import { Link } from "react-router-dom";
export interface ITabsInterface {
  content: JSX.Element;
  index: number;
  title: string;
}
export interface ITabComponentProps {
  tabs: any[];
}
const TabComponent = (props: ITabComponentProps) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(1);
  const getComponentTabIndex = () => {
    let tabComponent;
    props.tabs.map(tab => {
      if (selectedTab === tab.index) {
        tabComponent = tab.content;
      }
    });

    return tabComponent;
  };

  return (
    <React.Fragment>
      <div className={`${styles["tab"]}`}>
        <ul className={styles["uk-tab__list"]}>
          {props.tabs.map(tab => (
            <li
              role="button"
              className={selectedTab === tab.index ? styles["tab__selected"] : ""}
              onClick={() => setSelectedTab(tab.index)}
            >
              {<Link to="#">{tab.title}</Link>}
            </li>
          ))}
        </ul>
      </div>
      {getComponentTabIndex()}
    </React.Fragment>
  );
};
export { TabComponent };
