import * as React from "react";
import styles from "./medium-hero-component.module.scss";
import { HeaderContentComponent } from "@app/core/header-content";
import { MediumHeroModule } from "@app/api/modules/medium-hero/medium-hero";
import { USPContainer } from "@app/core/usp/container";
import { ImageComponent } from "@app/core";

export interface IMediumHeroComponentProps {
  mediumHeroModule: MediumHeroModule;
}

const MediumHeroComponent = (props: IMediumHeroComponentProps) => {
  const { image, usps, headerContent } = props.mediumHeroModule;

  return (
    <div className={styles["medium-hero"]}>
      <div className="uk-container">
        <div className={styles["top"]}>
          <USPContainer uspModule={usps} />
        </div>
        <div className={styles["holder"]}>
          <div className={styles["image"]}>
            <ImageComponent src={image} alt="temp alt" />
          </div>
          {headerContent && (
            <div className={styles["content"]}>
              <HeaderContentComponent
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                text={headerContent.text}
                breadcrumbProps={headerContent.breadcrumbProps}
                headerMobilePosition="center"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export { MediumHeroComponent };
