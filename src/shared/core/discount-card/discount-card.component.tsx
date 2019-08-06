import * as React from "react";
import styles from "./discount-card-component.module.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import IconDefault from "@assets/icons/link.svg";
import { TimeLeftBarComponent } from "../time-left-bar";
import { Badge } from "../badge";
import HEART_FILLED from "@assets/icons/heart-filled.svg";
import HEART_EMPTY from "@assets/icons/heart-empty.svg";

interface IDiscountCardComponentProps {
  buttonLink: string;
  buttonText: string;
  content: string;
  coupon: string;
  image: string;
  range: number;
  status: string;
  title: string;
}

const DiscountCardComponent = (props: IDiscountCardComponentProps) => {
  const { title, status, content, image, range, buttonText, buttonLink, coupon } = props;
  const [messageDisplayed, setMessageDisplayed] = React.useState<boolean>(false);
  const [couponCopied, setCouponCopied] = React.useState<boolean>(false);

  const ClipLoaderTimer = 1500;

  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const statusBar = (rangeNumber: any) => {
    const limit = 0.5;
    if (rangeNumber > limit) {
      return "#00a82f";
    }

    if (rangeNumber === "0") {
      return "none";
    }

    if (rangeNumber <= limit) {
      return "orange";
    }
  };
  const displayMessage = () => {
    if (!couponCopied) {
      setMessageDisplayed(true);
      setCouponCopied(true);

      setTimeout(() => {
        setMessageDisplayed(false);
      }, ClipLoaderTimer);
    }
  };

  return (
    <div className={styles["discount-card"]}>
      <Badge
        icon={isLiked ? HEART_FILLED : HEART_EMPTY}
        position={"left"}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      />
      <div className={styles["discount-card__body"]}>
        <div className={styles["discount-card__image"]}>
          <ImageComponent src={image} />
        </div>
        <div style={{ color: statusBar(range) }} className={styles["discount-card__label"]}>
          {status}
        </div>
        <TimeLeftBarComponent color={statusBar(range)} range={range} />
        <div className={styles["discount-card__content"]}>
          <div className={styles["discount-card__title"]}>{title}</div>
          <div className={`${styles["discount-card__subtitle"]}  uk-visible@s`}>{content}</div>
        </div>
      </div>
      <div className={styles["discount-card__action"]}>
        <button
          onClick={displayMessage}
          className={styles["discount-card__coupon"]}
          style={couponCopied ? { backgroundColor: "#caf7d6" } : { backgroundColor: "white" }}
        >
          {coupon}
        </button>
        {messageDisplayed && (
          <div className={styles["discount-card__tooltip"]} aria-hidden="true">
            <div className={styles["discount-card__tooltip__message"]}>Yeah, Gekopieerd!</div>
            <div className={styles["discount-card__tooltip__arrow"]} />
          </div>
        )}
        <Button title={buttonText} href={buttonLink} variant={"primary"} icon={IconDefault} />
      </div>
    </div>
  );
};
export { DiscountCardComponent };
