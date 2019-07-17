import * as React from "react";
import styles from "./banner-component.module.scss";
import { Button, ImageComponent } from "@app/core/";
import { Link } from "react-router-dom";
import IconDefault from "@assets/icons/link.svg";

export type BannerVariant = "default" | "small";

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
  variant?: BannerVariant;
}

const BannerComponent = (props: IBannerComponentProps) => {
  const classModify = `banner--${props.variant || "default"}`;

  return (
    <div className={`uk-container ${styles["container"]}`}>
      <div className={styles[classModify]}>
        <div className={styles["holder"]}>
          <div className={styles["image"]}>
            <Link to={props.buttonLink}>
              <ImageComponent
                alt={props.image && props.image.alt}
                src={props.image && props.image.src}
                errorImage={IconDefault}
                errorMessage="Custom error message"
              />
            </Link>
          </div>
          <div className={styles["body"]}>
            <div className={styles["content"]}>
              <div className={styles["label"]}>{props.label}</div>
              <h2 className={styles["title"]}>{props.title}</h2>
              {props.text}
            </div>
            <div className={styles["footer"]}>
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
                <div className={styles["logo"]}>
                  <ImageComponent src={props.logo.src} alt={props.logo.alt} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BannerComponent };
