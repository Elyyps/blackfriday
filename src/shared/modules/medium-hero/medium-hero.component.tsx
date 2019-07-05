import * as React from "react";
import styles from "./medium-hero-component.module.scss";
import { HeaderContentComponent, IHeaderContentComponentProps } from "@app/core/header-content";
import { USP } from "@app/core";
import { USP as USP_CLASS } from "@app/api/core/usp/usp";

export interface IMediumHeroComponentProps {
  headerContent?: IHeaderContentComponentProps;
  image?: string;
  usps: USP_CLASS;
}

const MediumHeroComponent = (props: IMediumHeroComponentProps) => {
  const { image, usps, headerContent } = props;

  return (
    <div className={styles["medium-hero"]}>
      <div className="uk-container">
        <div className={styles["top"]}>
          <USP uspModule={usps} />
        </div>
        <div className={styles["holder"]}>
          <div className={styles["image"]}>
            <img src={image} alt="temp alt" />
          </div>
          {headerContent && (
            <div className={styles["content"]}>
              <HeaderContentComponent
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                text={headerContent.text}
                breadcrumbProps={headerContent.breadcrumbProps}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { MediumHeroComponent };
