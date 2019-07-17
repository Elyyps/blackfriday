import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface IArrowPanelComponentProps {
  icon?: string;
  items?: string[];
  onClick?: () => void;
  title?: string;
  variant?: string;
}
const MAX_ITEMS = 3;
const ArrowPanelComponent = ({ title, items, icon, onClick, variant }: IArrowPanelComponentProps) => {
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
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      role="button"
      className={`${styles["arrow-panel"]} ${variant ? styles[`arrow-panel--${variant}`] : ""}  ${
        itemsList.length > 0 ? styles[`arrow-panel--list-brands`] : ""
      }`}
    >
      {icon && (
        <div className={styles["arrow-panel__image"]}>
          <ImageComponent src={icon} />
        </div>
      )}
      <div className={styles["arrow-panel__title"]}>{title}</div>
      <IconComponent icon={CHEVRON_RIGHT} size="5px" />
      <div className={styles["arrow-panel__body"]}>
        {!icon && <div className={styles["arrow-panel__list-brands"]}>{getItems(itemsList)}</div>}
        <IconComponent icon={CHEVRON_RIGHT} size="5px" />
      </div>
    </div>
  );
};
export { ArrowPanelComponent };
