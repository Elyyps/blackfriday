import * as React from "react";
import styles from "./blog-overview-header-component.module.scss";
import { BlogOverviewHeaderModule } from "@app/api/modules/blog-overview-header/blog-overview-header";
import { FeaturedBlogItemsComponent } from "@app/core/featured-blog-items";
import { HeaderContentComponent } from "@app/core/header-content";

export interface IBlogOverviewHeaderComponentProps {
  blogOverviewHeader: BlogOverviewHeaderModule;
}

const BlogOverviewHeaderComponent = (props: IBlogOverviewHeaderComponentProps) => {
  const { breadcrumbProps, title, blogPosts } = props.blogOverviewHeader;

  return (
    <div className={styles["blog-single-header"]}>
      <div className={styles["breadcrumbs"]}>
        <div className="uk-container">
          <HeaderContentComponent
            breadcrumbProps={{
              links: breadcrumbProps.links,
              backButton: breadcrumbProps.backButton,
              variant: breadcrumbProps.variant
            }}
            title={title}
          />
        </div>
      </div>
      <div className="uk-container">
        {blogPosts && (
          <div className={styles["blog-items"]}>
            {blogPosts.map((item, key) => (
              <div key={key} className={styles["blog-item"]}>
                <FeaturedBlogItemsComponent item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { BlogOverviewHeaderComponent };
