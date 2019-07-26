import * as React from "react";

import styles from "./not-yet-implemented-component.module.scss";
import { NotYetImplemented } from "@app/api/modules/not-implemented/not-yet-implemented-module";

export interface INotYetImplementedComponentProps {
  notYetImplemented: NotYetImplemented;
}

const NotYetImplementedComponent = (props: INotYetImplementedComponentProps) => (
  <div className={styles["not-implemented"]}>
    <h1>Not Implemented yet: {props.notYetImplemented.moduleName}</h1>
    <div>This module will be implemented soon!</div>
  </div>
);

export { NotYetImplementedComponent };
