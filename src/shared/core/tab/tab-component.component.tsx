import * as React from "react";
import styles from "./tab-component-component.module.scss";
import { Link } from "react-router-dom";
import { Tab } from "@app/api/core/tab/tab";
import { generateTabsDummyData } from "@app/api/core/tab/endpoint";

export interface ITabComponentComponentProps {}

const TabComponentComponent = (props: ITabComponentComponentProps) => {
  const tabData = generateTabsDummyData;

  return (
    <div className={`${styles["tab-component"]}`}>
      <ul className={styles["uk-tab__list"]}>
        {tabData.title.map((titles: string) => (
          <li>{<Link to="#">{titles}</Link>}</li>
        ))}
      </ul>
    </div>
  );
};
export { TabComponentComponent };
