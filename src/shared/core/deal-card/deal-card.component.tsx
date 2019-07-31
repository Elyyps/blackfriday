import * as React from "react";
import styles from "./deal-card-component.module.scss";
import { ImageComponent, IconComponent } from "@app/prep/modules-prep/core";
import IconDefault from "@assets/icons/link.svg";
import IconHot from "@assets/icons/hot.svg";
import { Button } from "../button";
import { ShadowCardComponent } from "../shadow-card";

interface IDealCardComponentProps {
  buttonLink?: string;
  buttonText: string;
  image?: string;
  label?: string;
  newPrice?: string;
  oldPrice?: string;
  sale?: string;
  subtitle?: string;
  title?: string;
  variant?: string;
}

const DealCardComponent = (props: IDealCardComponentProps) => {
  const { image, subtitle, title, sale, newPrice, oldPrice, buttonText, label, variant } = props;

  return (
    <ShadowCardComponent fullWidth borderRadius={["2px"]} backgroundColor={"#fff"}>
      <div className={`${styles["deal-card"]} ${styles[`deal-card--${variant || "default"}`]}`}>
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
            <div className={styles["deal-card__subtitle"]}>{subtitle}</div>
            <div className={styles["deal-card__title"]}>{title}</div>
          </div>
        </div>
        <div className={styles["deal-card__action"]}>
          <div className={styles["deal-card__price"]}>
            <div className={styles["deal-card__sale"]}>{sale}</div>
            <div className={styles["deal-card__price-box"]}>
              <div className={styles["deal-card__price-old"]}>{oldPrice}</div>
              <div className={styles["deal-card__price-new"]}>{newPrice}</div>
            </div>
          </div>
          <Button title={buttonText} fullWidth variant={"primary-default"} icon={IconDefault} />
        </div>
      </div>
    </ShadowCardComponent>
  );
};
export { DealCardComponent };
