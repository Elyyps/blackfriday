import * as React from "react";
import styles from "./deal-card-component.module.scss";
import { ImageComponent, IconComponent } from "@app/prep/modules-prep/core";
import LinkIcon from "@assets/icons/link.svg";
import IconHot from "@assets/icons/hot.svg";
import { ShadowCardComponent } from "../shadow-card";
import { ClickableComponent } from "@app/core/clickable";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { Deal } from "@app/api/core/deal/deal";

interface IDealCardComponentProps {
  deal: Deal;
  variant?: string;
}

const component = (props: IDealCardComponentProps & InjectedIntlProps) => {
  const { image, stores, name, sale, newPrice, oldPrice, moreInfoLink, label } = props.deal;

  return (
    <ShadowCardComponent fullWidth borderRadius={["2px"]} backgroundColor={"#fff"}>
      <div className={`${styles["deal-card"]} ${styles[`deal-card--${props.variant || "default"}`]}`}>
        {label && (
          <div className={styles["deal-card__label"]}>
            <IconComponent icon={IconHot} size={"10px"} />
            {label}
          </div>
        )}
        <div className={styles["deal-card__body"]}>
          <div className={styles["deal-card__image"]}>
            <ImageComponent src={image} />
          </div>
          <div className={styles["deal-card__content"]}>
            <div className={styles["deal-card__subtitle"]}>{stores.map(store => store)}</div>
            <div className={styles["deal-card__title"]}>{name}</div>
          </div>
        </div>
        <div className={styles["deal-card__action"]}>
          <div className={styles["deal-card__price"]}>
            <div
              className={`${styles["deal-card__sale"]} ${!oldPrice &&
                !newPrice &&
                styles["deal-card__sale-full-width"]}`}
            >
              {sale}
            </div>
            <div className={styles["deal-card__price-box"]}>
              <div className={styles["deal-card__price-old"]}>{oldPrice}</div>
              <div className={styles["deal-card__price-new"]}>{newPrice}</div>
            </div>
          </div>
          <ClickableComponent
            title={props.intl.formatMessage({ id: "shop-card-clickable-title" })}
            href={moreInfoLink}
            fullWidth
            iconStyle="filled"
            variant={"primary-default"}
            iconRight={LinkIcon}
          />
        </div>
      </div>
    </ShadowCardComponent>
  );
};

const DealCardComponent = injectIntl(component);
export { DealCardComponent };
