import * as React from "react";
import styles from "./shop-card-component.module.scss";
import { TimeLeftBarComponent } from "../time-left-bar";
import { ImageComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "../link";
import { Button } from "../button";
import ShopIcon from "@assets/icons/link.svg";
import { ShadowCardComponent } from "../shadow-card";
import { Store, StoreStatus } from "@app/api/core/store/store";
import { getStoreStatusText } from "@app/util/store";
import { ClickableComponent } from "../clickable";

export interface IShopCardComponentProps {
  store: Store;
  variant: string;
}

const ShopCardComponent = (props: IShopCardComponentProps) => {
  const {
    availableBrands,
    categories,
    description,
    logo,
    moreInfoLink,
    name,
    status,
    timeLeftPercentage
  } = props.store;

  const getStatusBarColor = () => {
    const rangeNumber = timeLeftPercentage;
    const limit = 50;
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
      <div className={`${styles["shop-card"]} ${styles[`shop-card--${props.variant || "default"}`]}`}>
        <div className={styles["shop-card__body"]}>
          <div className={styles["shop-card__image"]}>
            <ImageComponent src={logo} />
          </div>
          <div className={`${styles["shop-card__status-title"]} ${styles[getStatusBarColor()]}`}>
            {getStoreStatusText(status)}
          </div>
          <TimeLeftBarComponent variant="responsive" color={getStatusBarColor()} range={timeLeftPercentage} />
          <div className={styles["shop-card__content"]}>
            <div className={styles["shop-card__title"]}>{name}</div>
            {description} {moreInfoLink && moreInfoLink && <LinkComponent to={moreInfoLink}>Meer info</LinkComponent>}
          </div>
        </div>
        <div className={styles["shop-card__action"]}>
          <ClickableComponent title="Naar deals" icon={ShopIcon} iconPosition="right" href="./store-single" />
        </div>
      </div>
    </ShadowCardComponent>
  );
};

export { ShopCardComponent };
