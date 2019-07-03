import * as React from "react";
import styles from "./header-content-component.module.scss";

export interface IHeaderContentComponentProps {
  backButtonProps?: {};
  breadcrumbItems?: {}[];
  subtitle?: string;
  text?: string;
  title?: string;
}

const HeaderContentComponent = (props: IHeaderContentComponentProps) => {
  const { backButtonProps, breadcrumbItems, title, subtitle, text } = props;

  return (
    <div className={styles["header-content"]}>
      Hier komt de breadcrumb {backButtonProps} {breadcrumbItems}
      {title && <h1>{title}</h1>}
      {subtitle && <h1 className={styles["subtitle"]}>{subtitle}</h1>}
      {text && <span className={styles["text"]}>{text}</span>}
    </div>
  );
};

export { HeaderContentComponent };
