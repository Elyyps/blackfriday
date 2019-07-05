import * as React from "react";
import styles from "./small-header-component.module.scss";
import { HeaderContentComponent, IHeaderContentComponentProps } from "@app/core/header-content";

export interface ISmallHeaderComponentProps {
  headerContent?: IHeaderContentComponentProps;
}

const SmallHeaderComponent = (props: ISmallHeaderComponentProps) => {
  const { headerContent } = props;

  return (
    <div className={styles["small-header"]}>
      <div className="uk-container">
        {headerContent && (
          <HeaderContentComponent
            title={headerContent.title}
            subtitle={headerContent.subtitle}
            text={headerContent.text}
            breadcrumbProps={headerContent.breadcrumbProps}
          />
        )}
      </div>
    </div>
  );
};

export { SmallHeaderComponent };
