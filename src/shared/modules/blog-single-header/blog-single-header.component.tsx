import * as React from "react";
import styles from "./blog-single-header-component.module.scss";
import { BlogSingleHeaderModule } from "@app/api/modules/blog-single-header/blog-single-header";
import { ImageComponent } from "@app/core/image";
import { HeaderContentComponent } from "@app/core/header-content";

export interface IBlogSingleHeaderComponentProps {
  blogSingleHeader: BlogSingleHeaderModule;
}

const BlogSingleHeaderComponent = (props: IBlogSingleHeaderComponentProps) => {
  const { breadcrumbProps, title, image } = props.blogSingleHeader;

  return (
    <div className={styles["blog-single-header"]}>
      <div className={styles["header-content"]}>
        <div className="uk-container">
          <HeaderContentComponent
            breadcrumbProps={{
              links: breadcrumbProps.links,
              backButton: breadcrumbProps.backButton,
              variant: breadcrumbProps.variant
            }}
            title={title}
            headerMobilePosition="left"
          />
        </div>
      </div>
      <div className="uk-container">
        {image && (
          <div className={styles["image"]}>
            <ImageComponent src={image} />
          </div>
        )}
      </div>
    </div>
  );
};

export { BlogSingleHeaderComponent };
