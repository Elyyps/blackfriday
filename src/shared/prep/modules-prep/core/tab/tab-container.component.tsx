import * as React from "react";
import "./tab-component.module.scss";

export interface ITabContainerProps {
  attribute?: any;
  children?: any;
  classTabList?: any;
}

const TabContainerComponent = (props: ITabContainerProps) => {
  const { attribute, classTabList, children } = props;

  return (
    <React.Fragment>
      <ul {...attribute} className={classTabList}>
        {children}
      </ul>
    </React.Fragment>
  );
};

export { TabContainerComponent };
