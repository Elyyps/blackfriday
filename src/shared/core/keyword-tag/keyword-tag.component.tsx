import * as React from "react";
import styles from "./keyword-tag-component.module.scss";

export interface IKeywordTagComponentProps {
  children: any;
  style?: object;
}

const KeywordTagComponent = (props: IKeywordTagComponentProps) => (
  <div style={props.style} className={styles["keyword-tag"]}>
    {props.children}
  </div>
);

export { KeywordTagComponent };
