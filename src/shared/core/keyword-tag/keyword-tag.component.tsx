
import * as React from "react";
import styles from "./keyword-tag-component.module.scss";

export interface IKeywordTagComponentProps {
children: any
}

const KeywordTagComponent = (props: IKeywordTagComponentProps) => {
  return ( <div className={styles["keyword-tag"]}>
    {props.children}
  </div>)
};

export { KeywordTagComponent };
  