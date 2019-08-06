import * as React from "react";
import styles from "./blog-overview-component.module.scss";
import { BlogPostComponent } from "@app/core/blog-post";
import { BlogOverviewModule } from "@app/api/modules/blog-overview/blog-overview";
import { SidebarComponent } from "@app/core/sidebar";

export interface IBlogOverviewComponentProps {
  blog: BlogOverviewModule;
}

const BlogOverviewComponent = (props: IBlogOverviewComponentProps) => (
  <div className={styles["blog-overview"]}>
    <div className="uk-container">
      <div className={styles["blog-overview__holder"]}>
        <div className={styles["blog-overview__content"]}>
          <div className={styles["posts-list"]}>
            {props.blog.posts &&
              props.blog.posts.map((item, key) => (
                <div key={key}>
                  <BlogPostComponent posts={item} />
                </div>
              ))}
          </div>
        </div>

        <div className={styles["blog-overview__sidebar"]}>
          <SidebarComponent featuredItemsGroups={props.blog.sidebar.featuredItemsGroups} />
        </div>
      </div>
    </div>
  </div>
);

export { BlogOverviewComponent };
