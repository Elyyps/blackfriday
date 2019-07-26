import * as React from "react";
import styles from "./tab-component.module.scss";
import { Link } from "react-router-dom";

export interface ITabComponentProps {
  data: any[];
}
const TabComponent = (props: ITabComponentProps) => {
  const [selectedTab, setSelectedTab] = React.useState<string>("Winkels");
  const getComponentTabIndex = () => {
    let tabComponent;
    props.data.map(tab => {
      if (selectedTab === tab.title) {
        tabComponent = tab.content;
      }
    });

    return tabComponent;
  };

  return (
    <React.Fragment>
      <div className={`${styles["tab"]}`}>
        <ul className={styles["uk-tab__list"]}>
          {props.data.map(value => (
            <li
              role="button"
              className={selectedTab === value.title ? styles["tab__selected"] : ""}
              onClick={() => setSelectedTab(value.title)}
            >
              {<Link to="#">{value.title}</Link>}
            </li>
          ))}
        </ul>
      </div>
      {getComponentTabIndex()}
    </React.Fragment>
  );
};
export { TabComponent };
