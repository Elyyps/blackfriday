import * as React from "react";
import styles from "./banner-component.module.scss";
import { ImageComponent } from "@app/core/";
import IconDefault from "@assets/icons/link.svg";
import { ClickableComponent } from "../clickable";

export type BannerVariant = "default" | "small";

export type ImageType = {
  alt: string;
  src: string;
};

export interface IBannerComponentProps {
  buttonLink: string;
  buttonTitle: string;
  imageLink?: string;
  image?: ImageType;
  label: string;
  logo: ImageType;
  text: any;
  title: string;
  variant?: BannerVariant;
  alternate?: boolean;
  moreInfoLink: string;
}

const BannerComponent = (props: IBannerComponentProps) => {
  const {
    variant,
    buttonLink,
    imageLink,
    image,
    label,
    title,
    text,
    buttonTitle,
    logo,
    moreInfoLink,
    alternate
  } = props;

  const classModify = `banner--${variant || "default"}`;

  return (
    <div className={`${styles["container"]}`}>
      <div className={styles[classModify]}>
        <div className={styles["holder"]}>
          {alternate ? (
            <React.Fragment>
              {renderImage(imageLink, image)}
              {renderBody(label, logo, text, title, buttonLink, buttonTitle, moreInfoLink)}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {renderBody(label, logo, text, title, buttonLink, buttonTitle, moreInfoLink)}
              {renderImage(imageLink, image)}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const renderImage = (imageLink?: string, image?: ImageType) => {
  return (
    <div className={styles["image"]}>
      <a href={imageLink} target="_blank">
        <ImageComponent
          alt={image && image.alt}
          src={image && image.src}
          errorImage={IconDefault}
          errorMessage="Custom error message"
        />
      </a>
    </div>
  );
};

const renderBody = (
  label: string,
  logo: ImageType,
  text: any,
  title: string,
  buttonLink: string,
  buttonTitle: string,
  moreInfoLink: string
) => {
  return (
    <div className={styles["body"]}>
      <div className={styles["content"]}>
        <div className={styles["label"]}>{label}</div>
        <h2 className={styles["title"]}>{title}</h2>
        <span>{text}</span>
        <span className={styles["more-info"]}>
          <a href={moreInfoLink} target="_blank">
            Meer info
          </a>
        </span>
      </div>
      <div className={styles["footer"]}>
        {buttonTitle && (
          <ClickableComponent
            title={buttonTitle}
            variant={"primary-default"}
            iconStyle={"filled"}
            icon={IconDefault}
            href={buttonLink}
          />
        )}
        {logo && (
          <div className={styles["logo"]}>
            <ImageComponent src={logo.src} alt={logo.alt} />
          </div>
        )}
      </div>
    </div>
  );
};

export { BannerComponent };
