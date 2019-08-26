import * as React from "react";
import styles from "./header-content-component.module.scss";
import { BreadcrumbComponent, IBreadcrumbComponentProps } from "../breadcrumb";

export interface IHeaderContentComponentProps {
  breadcrumbProps?: IBreadcrumbComponentProps;
  headerMobilePosition?: "left" | "center";
  subtitle?: string;
  text?: string;
  title?: string;
}

const HeaderContentComponent = (props: IHeaderContentComponentProps) => {
  const { breadcrumbProps, title, subtitle, text, headerMobilePosition } = props;
  const mobilePositionClass = headerMobilePosition ? headerMobilePosition : "center";

  return (
    <div className={`${styles["header-content"]} ${styles[mobilePositionClass]}`}>
      {breadcrumbProps && (
        <BreadcrumbComponent
          backButton={breadcrumbProps.backButton}
          links={breadcrumbProps.links}
          variant={breadcrumbProps.variant}
        />
      )}

      {title && <h1>{title}</h1>}
      {subtitle && <h1 className={styles["subtitle"]}>{subtitle}</h1>}
      {text && <span className={styles["text"]}>{text}</span>}
    </div>
  );
};

export { HeaderContentComponent };
