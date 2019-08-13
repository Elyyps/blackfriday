import * as React from "react";
import styles from "./featured-blog-items-component.module.scss";
import { LinkComponent } from "../link";
import { ImageComponent } from "../image";
import { BlogPost } from "@app/api/core/blog-post/blog-post";

export interface IFeaturedBlogItemsComponentProps {
  item: BlogPost;
}

const FeaturedBlogItemsComponent = (props: IFeaturedBlogItemsComponentProps) => (
  <div className={styles["featured-blog-items"]}>
    <div className={styles["featured-blog-items__card"]}>
      <LinkComponent to={props.item.link.url}>
        <div className={styles["featured-blog-items__card-image"]}>
          <ImageComponent alt={props.item.title} src={props.item.image} />
        </div>
        <h3 className={styles["featured-blog-items__card-title"]}>{props.item.title}</h3>
      </LinkComponent>
    </div>
  </div>
);

export { FeaturedBlogItemsComponent };
