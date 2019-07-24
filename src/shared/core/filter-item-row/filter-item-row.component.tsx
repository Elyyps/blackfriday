import * as React from "react";
import styles from "./filter-item-row.component.module.scss";
import { IconComponent, ImageComponent } from "@app/core";
import { CHEVRON_RIGHT } from "@app/constants/icons";

interface IFilterItemRowProps {
  icon?: string;
  items?: string[];
  onClick?: () => void;
  title?: string;
}
const MAX_ITEMS = 3;
const FilterItemRow = ({ title, items, icon, onClick }: IFilterItemRowProps) => {
  const [labelItems, setLabelItems] = React.useState<string>("");

  const setItems = (itemsToConcatenate?: string[]): void => {
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

    setLabelItems(listWords);
  };
  React.useEffect(() => {
    setItems(items);
  }, [items]);

  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      role="button"
      className={`${styles["filter-item"]} ${items && items.length > 0 ? styles[`filter-item--list-items`] : ""}`}
    >
      {icon && (
        <div className={styles["filter-item__image"]}>
          <ImageComponent src={icon} />
        </div>
      )}
      <div className={styles["filter-item__title"]}>{title}</div>
      <IconComponent icon={CHEVRON_RIGHT} size="12px" />
      <div className={styles["filter-item__body"]}>
        {!icon && <div className={styles["filter-item__list-items"]}>{labelItems}</div>}
      </div>
    </div>
  );
};
export { FilterItemRow };
