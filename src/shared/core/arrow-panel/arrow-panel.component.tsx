import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface IArrowPanelProps {
  icon?: string;
  items?: string[];
  link: string;
  title?: string;
  variant?: string;
}
const MAX_ITEMS = 3;
const ArrowPanel = ({ title, items, icon, link, variant }: IArrowPanelProps) => {
  const [itemsList] = React.useState<string[]>(items || []);

  const getItems = (itemsToConcatenate: string[]): string => {
    let listWords = "";
    if (itemsToConcatenate) {
      itemsToConcatenate.slice(0, MAX_ITEMS).map((item, index) => {
        listWords = `${listWords}${item}`;
        if (index + 1 !== MAX_ITEMS && index + 1 !== itemsToConcatenate.length) {
          listWords += ", ";
        }
      });

      if (itemsToConcatenate.length > MAX_ITEMS) {
        listWords = `${listWords}...`;
      }
    }

    return listWords;
  };

  return (
    <Link
      to={link}
      className={`${styles["card-simple"]} ${variant ? styles[`card-simple--${variant}`] : ""}  ${
        itemsList.length > 0 ? styles[`card-simple--list-brands`] : ""
      }`}
    >
      {icon && (
        <div className={styles["card-simple__image"]}>
          <ImageComponent src={icon} />
        </div>
      )}
      <div className={styles["card-simple__title"]}>{title}</div>
      <div className={styles["card-simple__body"]}>
        {!icon && <div className={styles["card-simple__list-brands"]}>{getItems(itemsList)}</div>}
        <IconComponent icon={CHEVRON_RIGHT} size="5px" />
      </div>
    </Link>
  );
};
export { ArrowPanel };
