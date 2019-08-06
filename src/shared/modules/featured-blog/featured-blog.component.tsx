import * as React from "react";
import styles from "./featured-blog-component.module.scss";
import { FeaturedBlogModule } from "@app/api/modules/featured-blog/featured-blog";
import { FeaturedBlogItemsComponent } from "@app/core/featured-blog-items";

export interface IFeaturedBlogComponentProps {
  featuredBlog: FeaturedBlogModule;
}

const FeaturedBlogComponent = (props: IFeaturedBlogComponentProps) => (
  <div className={styles["featured-blog"]}>
    <div className="uk-container">
      {props.featuredBlog.title && <h2 className={styles["featured-blog__title"]}>{props.featuredBlog.title}</h2>}
      <div className={styles["featured-blog__body"]}>
        {props.featuredBlog.items &&
          props.featuredBlog.items.map((item, key) => (
            <div key={key}>
              <FeaturedBlogItemsComponent item={item} />
            </div>
          ))}
      </div>
    </div>
  </div>
);

export { FeaturedBlogComponent };
