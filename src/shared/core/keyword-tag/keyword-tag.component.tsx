import * as React from "react";
import styles from "./keyword-tag-component.module.scss";

export interface IKeywordTagComponentProps {
  children: any;
  style?: object;
}

const KeywordTagComponent = (props: IKeywordTagComponentProps) => (
  <a style={props.style} className={styles["keyword-tag"]} href={"/stores-overview"}>
    {props.children}
  </a>
);

export { KeywordTagComponent };
