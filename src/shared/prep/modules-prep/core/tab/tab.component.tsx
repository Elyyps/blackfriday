import * as React from "react";
import "./tab-component.module.scss";
import classNames from "classnames";

export interface ITabComponentProps {
  children?: any;
  classTabList?: any;
  switcherAttr?: any;
  title?: any;
}

const TabComponent = (props: ITabComponentProps) => {
  const { switcherAttr, classTabList, children } = props;

  return (
    <React.Fragment>
      <ul
        {...switcherAttr}
        className={classNames("uk-tab", { [`${classTabList}`]: true })}
      >
        {children}
      </ul>
    </React.Fragment>
  );
};

export { TabComponent };
