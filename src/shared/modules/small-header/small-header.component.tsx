import * as React from "react";
import styles from "./small-header-component.module.scss";
import { HeaderContentComponent } from "@app/core/header-content";

export interface ISmallHeaderComponentProps {
  backButtonProps?: {};
  breadcrumbItems?: {}[];
  subtitle?: string;
  text?: string;
  title?: string;
}

const SmallHeaderComponent = (props: ISmallHeaderComponentProps) => {
  const { backButtonProps, breadcrumbItems, title, subtitle, text } = props;

  return (
    <div className={styles["small-header"]}>
      <div className="uk-container">
        <HeaderContentComponent
          title={title}
          subtitle={subtitle}
          text={text}
          backButtonProps={backButtonProps}
          breadcrumbItems={breadcrumbItems}
        />
      </div>
    </div>
  );
};

export { SmallHeaderComponent };
