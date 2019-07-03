import * as React from "react";
import styles from "./medium-hero-component.module.scss";
import { HeaderContentComponent } from "@app/core/header-content";

export interface IMediumHeroComponentProps {
  backButtonProps?: {};
  breadcrumbItems?: {}[];
  image?: string;
  subtitle?: string;
  text?: string;
  title?: string;
}

const MediumHeroComponent = (props: IMediumHeroComponentProps) => {
  const { backButtonProps, breadcrumbItems, title, subtitle, text } = props;

  return (
    <div className={styles["medium-hero"]}>
      <div className="uk-container">
        <div className={styles["top"]}>USPS</div>
        <div className={styles["holder"]}>
          <div className={styles["image"]}>
            <img src={props.image} alt="temp alt" />
          </div>
          {title && (
            <div className={styles["content"]}>
              <HeaderContentComponent
                title={title}
                subtitle={subtitle}
                text={text}
                backButtonProps={backButtonProps}
                breadcrumbItems={breadcrumbItems}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { MediumHeroComponent };
