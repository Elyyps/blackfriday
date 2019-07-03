import * as React from "react";
import styles from "./medium-hero-component.module.scss";

export interface IMediumHeroComponentProps {
  backButtonText?: string;
  backButtonURL?: string;
  children?: any;
  image?: string;
  title?: string;
}

const MediumHeroComponent = (props: IMediumHeroComponentProps) => (
  <div className={styles["medium-hero"]}>
    <div className="header-single">
      Breadcrumbs komen hier
      <h1>{props.children}</h1>
      <div className="uk-container">
        <div className="header-single__image">{/* <ImageComponent src={props.image} /> */}</div>
      </div>
    </div>
  </div>
);
export { MediumHeroComponent };
