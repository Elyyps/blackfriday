import * as React from "react";
import styles from "./shop-card-component.module.scss";
import { TimeLeftBarComponent } from "../time-left-bar";
import { ImageComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "../link";
import { Button } from "../button";
import ShopIcon from "@assets/icons/link.svg";
import { ShadowCardComponent } from "../shadow-card";

export interface IShopCardComponentProps {
  buttonLink: string;
  buttonText?: string;
  content?: string;
  image?: string;
  range: number;
  seeMoreLink: string;
  seeMoreText: string;
  subtitle: string;
  title: string;
}

const ShopCardComponent = (props: IShopCardComponentProps) => {
  const { title, seeMoreLink, subtitle, seeMoreText, content, image, range, buttonText } = props;
  const statusBarColor = () => {
    const rangeNumber = range;
    const limit = 0.5;
    if (rangeNumber === 0 || typeof rangeNumber === "undefined") {
      return "none";
    }

    if (rangeNumber <= limit) {
      return "orange";
    }

    return "green";
  };

  return (
    <ShadowCardComponent>
      <div className={styles["shop-card"]}>
        <div className={styles["shop-card__body"]}>
          <div className={styles["shop-card__image"]}>
            <ImageComponent src={image} />
          </div>
          <div className={`${styles["shop-card__status-title"]} ${styles[statusBarColor()]}`}>{subtitle}</div>
          <TimeLeftBarComponent range={range} />
          <div className={styles["shop-card__content"]}>
            <div className={styles["shop-card__title"]}>{title}</div>
            {content} {seeMoreText && <LinkComponent to={seeMoreLink}>{seeMoreText}</LinkComponent>}
          </div>
        </div>
        <div className={styles["shop-card__action"]}>
          <Button title={buttonText} iconPosition="right" icon={ShopIcon} />
        </div>
      </div>
    </ShadowCardComponent>
  );
};

export { ShopCardComponent };
