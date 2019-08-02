import * as React from "react";
import styles from "./blog-body-text-component.module.scss";
import { SidebarComponent } from "@app/core/sidebar";
import { BodyTextComponent } from "@app/core/bodytext";
import { BlogBodyTextModule } from "@app/api/core/blog-bodytext/blog-bodytext";
import { ShareSocialDropdownComponent } from "@app/core/share-social-dropdown";
import { IconComponent } from "@app/core";
import ClockIcon from "@assets/icons/clock.svg";
import { socialMediaButtons } from "@app/api/core/share-social/generate-dummy-data";

export interface IBlogBodyTextComponentProps {
  blogBodyTextModule: BlogBodyTextModule;
}

const BlogBodyTextComponent = (props: IBlogBodyTextComponentProps) => {
  const { bodyText, sidebarItems, dateTime } = props.blogBodyTextModule;

  return (
    <div className={`uk-container ${styles["blog-body-text"]}`}>
      <div className={`${styles["blog-body-text__container"]}`}>
        <div className={styles["blog-body-text__content"]}>
          <div className={styles["blog-body-text__content__header"]}>
            <IconComponent icon={ClockIcon} size="14" /> {dateTime}
          </div>
          <BodyTextComponent bodyTextModule={bodyText} />
          <div className={styles["blog-body-text__content__footer"]}>
            <ShareSocialDropdownComponent buttonTitle="Delen" shareSocial={socialMediaButtons} />
          </div>
        </div>
        <div className={styles["blog-body-text__sidebar"]}>
          <SidebarComponent banner={sidebarItems.banner} featuredItemsGroups={sidebarItems.featuredItemsGroups} />
        </div>
      </div>
    </div>
  );
};

export { BlogBodyTextComponent };
