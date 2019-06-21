import * as React from "react";
import "./tab-component.module.scss";
import { Link } from "react-router-dom";

export interface ITabItemComponentProps {
  children?: any;
  title?: string;
}

const TabItemComponent = (props: ITabItemComponentProps) => (
  <React.Fragment>
    <li>
      <Link to="#">{props.children}</Link>
    </li>
  </React.Fragment>
);

export { TabItemComponent };
