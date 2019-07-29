import * as React from "react";
import styles from "./blog-single-header-component.module.scss";
import { ImageComponent } from "../../core/image";
import { IconComponent } from "../../core/icon";
import { Link } from "react-router-dom";
import IconBack from "@assets/icons/chevron-left.svg";
import { BlogSingleHeaderModule } from "@app/api/modules/blog-single-header/blog-single-header";

export interface IBlogSingleHeaderComponentProps {
  blogSingleHeader: BlogSingleHeaderModule;
}

const BlogSingleHeaderComponent = (props: IBlogSingleHeaderComponentProps) => (
  <div className={styles["blog-single-header"]}>
    <div className={styles["blog-single-header-basic"]}>
      <div className="uk-container">
        <ul className={` "uk-visible@s" ${styles["blog-single-header-basic__breadcrumbs"]}`}>
          {props.blogSingleHeader.links &&
            props.blogSingleHeader.links.map((link, key) => (
              <li key={key}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
        </ul>

        {props.blogSingleHeader.button && (
          <Link
            className={`"uk-hidden@s" ${styles["blog-single-header-basic__back"]}`}
            to={props.blogSingleHeader.button.url}
          >
            <IconComponent icon={IconBack} size={"6px"} />
            {props.blogSingleHeader.button.title}
          </Link>
        )}

        {props.blogSingleHeader.title && <h1>{props.blogSingleHeader.title}</h1>}
      </div>
    </div>
    <div className="uk-container">
      <div className={styles["blog-single-header__image"]}>
        <ImageComponent src={props.blogSingleHeader.image} />
      </div>
    </div>
  </div>
);

export { BlogSingleHeaderComponent };
