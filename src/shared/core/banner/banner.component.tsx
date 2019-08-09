import * as React from "react";
import styles from "./banner-component.module.scss";
import { ImageComponent } from "@app/core/";
import IconDefault from "@assets/icons/link.svg";
import { ClickableComponent } from "../clickable";
import { injectIntl, InjectedIntlProps } from "react-intl";

export type BannerVariant = "default" | "small";

export type ImageType = {
  alt: string;
  src: string;
};

export interface IBannerComponentProps {
  buttonLink: string;
  buttonTitle: string;
  image?: ImageType;
  imageLink?: string;
  isButtonFullWidth?: boolean;
  label: string;
  logo: ImageType;
  moreInfoLink: string;
  showAlternativeBanner?: boolean;
  text: any;
  title: string;
  variant?: BannerVariant;
}

const component = (props: IBannerComponentProps & InjectedIntlProps) => {
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
    showAlternativeBanner
  } = props;

  const classModify = `banner--${variant || "default"}`;

  return (
    <div className={"uk-container"}>
      <div className={styles[classModify]}>
        <div className={`${styles["holder"]} ${showAlternativeBanner && styles["row-reverse"]}`}>
          <div className={styles["image"]}>
            <a rel="noopener" aria-label="Open link" href={imageLink} target="_blank" role="button">
              <ImageComponent
                alt={image && image.alt}
                src={image && image.src}
                errorImage={IconDefault}
                errorMessage="Custom error message"
                isBlocking
              />
            </a>
          </div>
          <div className={styles["body"]}>
            <div className={styles["content"]}>
              <div className={styles["label"]}>{label}</div>
              <h2 className={styles["title"]}>{title}</h2>
              <span>{text}</span>
              <span className={styles["more-info"]}>
                <a rel="noopener" href={moreInfoLink} target="_blank">
                  {props.intl.formatMessage({ id: "see-more" })}
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
                  <ImageComponent src={logo.src} alt={logo.alt} isBlocking />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const BannerComponent = injectIntl(component);
export { BannerComponent };
