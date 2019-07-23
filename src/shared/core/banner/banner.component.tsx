import * as React from "react";
import styles from "./banner-component.module.scss";
import { Button, ImageComponent } from "@app/core/";
import { Link } from "react-router-dom";
import IconDefault from "@assets/icons/link.svg";
import { BannerModule } from "@app/api/modules/banner/banner.module";

export type BannerVariant = "default" | "small";

export type ImageType = {
  alt: string;
  src: string;
};

export interface IBannerComponentProps {
  bannerModule: BannerModule;
}

const BannerComponent = (props: IBannerComponentProps) => {
  const { variant, buttonLink, image, label, title, text, buttonTitle, logo } = props.bannerModule;

  const classModify = `banner--${variant || "default"}`;

  return (
    <div className={`uk-container ${styles["container"]}`}>
      <div className={styles[classModify]}>
        <div className={styles["holder"]}>
          <div className={styles["image"]}>
            <Link to={buttonLink}>
              <ImageComponent
                alt={image && image.alt}
                src={image && image.src}
                errorImage={IconDefault}
                errorMessage="Custom error message"
              />
            </Link>
          </div>
          <div className={styles["body"]}>
            <div className={styles["content"]}>
              <div className={styles["label"]}>{label}</div>
              <h2 className={styles["title"]}>{title}</h2>
              {text}
            </div>
            <div className={styles["footer"]}>
              {buttonTitle && (
                <Button
                  title={buttonTitle}
                  onClick={buttonLink}
                  variant={"primary-default"}
                  iconStyle={"filled"}
                  icon={IconDefault}
                />
              )}
              {logo && (
                <div className={styles["logo"]}>
                  <ImageComponent src={logo.src} alt={logo.alt} />
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
