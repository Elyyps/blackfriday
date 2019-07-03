import * as React from "react";
import styles from "./small-header-component.module.scss";

export interface ISmallHeaderComponentProps {
  backButtonProps?: {};
  breadcrumbItems?: {}[];
  title?: string;
}

const SmallHeaderComponent = (props: ISmallHeaderComponentProps) => (
  <div className={styles["small-header"]}>
    <div className="uk-container">
      Hier komt de breadcrumb
      {props.title && <h1>{props.title}</h1>}
    </div>
  </div>
);

export { SmallHeaderComponent };
