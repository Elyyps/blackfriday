import * as React from "react";
import "./tab-component.module.scss";
import { Link } from "react-router-dom";

export interface ITabProps {
  attrAction?: any;
  children?: any;
}

const TabComponent = (props: ITabProps) => {
  const { attrAction, children } = props;

  return (
    <>
      <li>{attrAction ? <Link to="#">{children}</Link> : <>{children} </>}</li>
    </>
  );
};

export { TabComponent };
