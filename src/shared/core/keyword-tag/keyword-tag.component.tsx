import * as React from "react";
import styles from "./keyword-tag-component.module.scss";
import { LinkComponent } from "../link";

export interface IKeywordTagComponentProps {
  children: any;
  style?: object;
}

const KeywordTagComponent = (props: IKeywordTagComponentProps) => (
  <div className={styles["keyword-tag"]}>
    <LinkComponent to={"/stores-overview"}>{props.children}</LinkComponent>
  </div>
);

export { KeywordTagComponent };
