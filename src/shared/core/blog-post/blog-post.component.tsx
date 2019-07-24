import * as React from "react";
import styles from "./blog-post-component.module.scss";
import { LinkComponent } from "../link";
import { ImageComponent } from "@app/prep/modules-prep/core";
import { BlogPost } from "@app/api/core/blog-post/blog-post";

export interface IBlogPostComponentProps {
  posts: BlogPost;
}

const BlogPostComponent = (props: IBlogPostComponentProps) => (
  <div className={styles["blog-post"]}>
    <LinkComponent to={props.posts.link}>
      {props.posts.image && (
        <div className={styles["blog-post__image"]}>
          <ImageComponent src={props.posts.image} />
        </div>
      )}
      <div className={styles["blog-post__body"]}>
        <div className={styles["blog-post__title"]}>{props.posts.title}</div>
        <div className="uk-visible@m">
          {props.posts.content}
          <span className={styles["blog-post__link"]}>{props.posts.linkTitle}</span>
        </div>
      </div>
    </LinkComponent>
  </div>
);

export { BlogPostComponent };
