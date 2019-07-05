import * as React from "react";
import styles from "./banner-component.module.scss";
import { Button, ImageComponent } from "@app/core/";
import { Link } from "react-router-dom";
import IconDefault from "@assets/icons/link.svg";

export type ImageType = {
  alt: string;
  src: string;
};
export interface IBannerComponentProps {
  buttonLink?: any;
  buttonTitle?: string;
  image?: ImageType;
  label?: string;
  logo?: ImageType;
  text?: any;
  title?: string;
}

const BannerComponent = (props: IBannerComponentProps) => (
  <div className={styles["banner"]}>
    <div className={styles["banner__holder"]}>
      <div className="banner__image">
        {props.image && (
          <Link to={props.buttonLink}>
            <ImageComponent src={props.image.src} alt={props.image.alt} />
          </Link>
        )}
      </div>
      <div className={styles["banner__body"]}>
        <div className={styles["banner__content"]}>
          <div className={styles["banner__label"]}>{props.label}</div>
          <h2 className={styles["banner__title"]}>{props.title}</h2>
          {props.text}
        </div>
        <div className={styles["banner__footer"]}>
          {props.buttonTitle && (
            <Button
              title={props.buttonTitle}
              onClick={props.buttonLink}
              variant={"primary-default"}
              iconStyle={"filled"}
              icon={IconDefault}
            />
          )}
          {props.logo && (
            <div className={styles["banner__logo"]}>
              <ImageComponent src={props.logo.src} alt={props.logo.alt} />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export { BannerComponent };
