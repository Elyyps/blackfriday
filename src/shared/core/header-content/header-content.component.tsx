import * as React from "react";
import styles from "./header-content-component.module.scss";

export interface IHeaderContentComponentProps {
  subtitle?: string;
  text?: string;
  title?: string;
}

const HeaderContentComponent = (props: IHeaderContentComponentProps) => (
  <div className={styles["header-content"]}>
    {props.title && <h1>{props.title}</h1>}
    {props.subtitle && <h1 className={styles["subtitle"]}>{props.subtitle}</h1>}
    {props.text && <span className={styles["text"]}>{props.text}</span>}
  </div>
);

export { HeaderContentComponent };
