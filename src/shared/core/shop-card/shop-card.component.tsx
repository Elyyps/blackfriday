import * as React from "react";
import styles from "./shop-card-component.module.scss";
import { TimeLeftBarComponent } from "../time-left-bar";
import { ImageComponent } from "@app/core";
import ShopIcon from "@assets/icons/link.svg";
import { ShadowCardComponent } from "../shadow-card";
import { Store } from "@app/api/core/store/store";
import { getStoreStatusText } from "@app/util/store";
import { ClickableComponent } from "../clickable";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { IconComponent } from "../icon";
import IconHot from "@assets/icons/hot.svg";
import { Link } from "react-router-dom";
import { getStatusBarColor } from "@app/util/get-status-bar-color";

export interface IShopCardComponentProps {
  store: Store;
  variant?: string;
}

const component = (props: IShopCardComponentProps & InjectedIntlProps) => {
  const { description, logo, moreInfoLink, name, status, timeLeftPercentage, label } = props.store;
  const shopCardVariant = props.variant || "default";

  return (
    <ShadowCardComponent fullWidth>
      <div className={`${styles["shop-card"]} ${styles[`shop-card--${shopCardVariant}`]}`}>
        {label && (
          <div className={styles["label"]}>
            <IconComponent icon={IconHot} fillColor="white" size={"12px"} />
            <span>{label}</span>
          </div>
        )}
        <div className={styles["body"]}>
          <div className={styles["image"]}>
            <Link to="/stores-single">
              <ImageComponent alt="Shop logo" src={logo} isBlocking />
            </Link>
          </div>
          <div className={`${styles["status-title"]} ${styles[getStatusBarColor(timeLeftPercentage)]}`}>
            {getStoreStatusText(status)}
          </div>
          <div className={styles["bar"]}>
            <TimeLeftBarComponent
              variant="responsive"
              color={getStatusBarColor(timeLeftPercentage)}
              range={timeLeftPercentage}
            />
          </div>

          <div className={styles["content"]}>
            <div className={styles["title"]}>{name}</div>
            <span className={styles["description"]}>{description}</span>
            <ClickableComponent
              href="/stores-single"
              title={props.intl.formatMessage({ id: "see-more" })}
              variant="link-primary"
            />
          </div>
        </div>
        <div className={styles["action"]}>
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
