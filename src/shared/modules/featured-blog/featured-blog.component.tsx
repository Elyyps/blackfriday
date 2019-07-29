import * as React from "react";
import styles from "./featured-blog-component.module.scss";
import { ImageComponent } from "@app/core";
import { LinkComponent } from "@app/core/link";
import { FeaturedBlogModule } from "@app/api/modules/featured-blog/featured-blog";

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
            <div key={key} className={styles["featured-blog__card"]}>
              <LinkComponent to={item.link.url}>
                <div className={styles["featured-blog__card-image"]}>
                  <ImageComponent src={item.image} />
                </div>
                <h3 className={styles["featured-blog__card-title"]}>{item.title}</h3>
              </LinkComponent>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export { FeaturedBlogComponent };
