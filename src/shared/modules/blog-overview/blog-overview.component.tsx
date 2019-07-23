import * as React from "react";
import styles from "./blog-overview-component.module.scss";
import { SidebarComponent } from "@app/prep/modules-prep/core";
import { generateBlogPostData } from "@app/api/core/blog-post/endpoint";
import { BlogPost } from "@app/api/core/blog-post/blog-post";
import { ArrowPanel } from "@app/api/core/arrow-panel";
import { BlogPostComponent } from "@app/core/blog-post";

export interface IBlogOverviewComponentProps {
  banner?: any;
  items?: ArrowPanel[];
  posts: BlogPost[];
}

const BlogOverviewComponent = (props: IBlogOverviewComponentProps) => (
  <div className={styles["blog-overview"]}>
    <div className="uk-container">
      <div className={styles["blog-overview__holder"]}>
        <div className={styles["blog-overview__content"]}>
          <div className={styles["posts-list"]}>
            {props.posts &&
              props.posts.map((item, key) => (
                <div key={key}>
                  <BlogPostComponent posts={item} />
                </div>
              ))}
          </div>
        </div>

        <div className={styles["blog-overview__sidebar"]}>
          <SidebarComponent banner={props.banner} items={props.items} />
        </div>
      </div>
    </div>
  </div>
);

export { BlogOverviewComponent };
