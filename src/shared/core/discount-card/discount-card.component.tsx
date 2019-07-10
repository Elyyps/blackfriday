import * as React from "react";
import styles from "./discount-card-component.module.scss";
import { ImageComponent, Button } from "@app/prep/modules-prep/core";
import classNames from "classnames";
import IconDefault from "@assets/icons/link.svg";
import { TimeLeftBar } from "@app/api/core/time-left-bar";
import { TimeLeftBarComponent } from "../time-left-bar";

import CoolBlue from "@assets/cool-blue.svg";

interface IDiscountCardComponentProps {
  button_link?: any;
  button_secondary?: any;
  button_text?: any;
  content?: any;
  image?: any;
  range: number;
  sub_title?: any;
  title?: any;
  variant?: string;
}

const DiscountCardComponent = (props: IDiscountCardComponentProps) => {
  const { title, sub_title, content, image, range, button_text, button_link, variant, button_secondary } = props;

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

  return (
    <div className={styles["discount-card"]}>
      <div className={styles["discount-card__body"]}>
        <div className={styles["discount-card__image"]}>
          <ImageComponent src={CoolBlue} />
        </div>
        <div style={{color: statusBar(range)}} className={styles['discount-card__label']}>
          NU GELDIG
        </div>
       <TimeLeftBarComponent color={statusBar(range)} range={0.8}/>
        <div className={styles["discount-card__content"]}>
          <div className={styles["discount-card__title"]}>15% korting op het hele assortiment</div>
          <div className={styles["discount-card__subtitle"]}>
          Een selectie van bizarre vele aanbiedingen.
            </div>
        </div>
      </div>
      <div className={styles["discount-card__action"]}>
       <Button title="BLACK15" href="#" variant="dashed" />
        <Button title="Naar deals" href={button_link} variant={"primary"} icon={IconDefault} />
      </div>
    </div>
  );
};
export { DiscountCardComponent };
