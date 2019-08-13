import * as React from "react";
import styles from "./shop-card-component.module.scss";
import { TimeLeftBarComponent } from "../time-left-bar";
import { ImageComponent } from "@app/prep/modules-prep/core";
import { LinkComponent } from "../link";
import ShopIcon from "@assets/icons/link.svg";
import { ShadowCardComponent } from "../shadow-card";
import { Store } from "@app/api/core/store/store";
import { getStoreStatusText } from "@app/util/store";
import { ClickableComponent } from "../clickable";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { IconComponent } from "../icon";
import IconHot from "@assets/icons/hot.svg";

export interface IShopCardComponentProps {
  store: Store;
  variant?: string;
}

const component = (props: IShopCardComponentProps & InjectedIntlProps) => {
  const { description, logo, moreInfoLink, name, status, timeLeftPercentage, label } = props.store;

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
    <ShadowCardComponent fullWidth>
      <div className={`${styles["shop-card"]} ${styles[`shop-card--${props.variant || "default"}`]}`}>
        {label && (
          <div className={styles["shop-card__label"]}>
            <IconComponent icon={IconHot} fillColor="white" size={"12px"} />
            <span>{label}</span>
          </div>
        )}
        <div className={styles["shop-card__body"]}>
          <div className={styles["shop-card__image"]}>
            <ImageComponent alt="Shop logo" src={logo} isBlocking />
          </div>
          <div className={`${styles["shop-card__status-title"]} ${styles[getStatusBarColor()]}`}>
            {getStoreStatusText(status)}
          </div>
          <div className={styles["shop-card__bar"]}>
            <TimeLeftBarComponent variant="responsive" color={getStatusBarColor()} range={timeLeftPercentage} />
          </div>

          <div className={styles["shop-card__content"]}>
            <div className={styles["shop-card__title"]}>{name}</div>
            {description}
            <LinkComponent to="/stores-single"> {props.intl.formatMessage({ id: "see-more" })}</LinkComponent>
          </div>
        </div>
        <div className={styles["shop-card__action"]}>
          <ClickableComponent
            iconStyle="filled"
            dynamicSize={true}
            title={props.intl.formatMessage({ id: "shop-card-clickable-title" })}
            icon={ShopIcon}
            iconPosition="right"
            href={moreInfoLink}
          />
        </div>
      </div>
    </ShadowCardComponent>
  );
};
const ShopCardComponent = injectIntl(component);
export { ShopCardComponent };
