import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./card-simple.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface ICardSimpleProps {
  content?: JSX.Element;
  icon?: string;
  link?: string;
  title?: string;
}

const CardSimple = (props: ICardSimpleProps) => (
  <Link
    to="#"
    draggable={false}
    href={props.link}
    className={styles["card-simple"]}
    target="_blank"
  >
    <div className={styles["card-simple__body"]}>
      <div className={styles["card-simple__head"]}>
        {props.title && (
          <div className={styles["card-simple__media"]}>
            <div className={styles["card-simple__image"]}>
              <IconComponent icon={props.icon} size="40px" />
            </div>
          </div>
        )}
        <div className={styles["card-simple__title"]}>{props.title}</div>
      </div>
      <IconComponent icon={CHEVRON_RIGHT} size="10px" />
    </div>
  </Link>
);
export { CardSimple };
