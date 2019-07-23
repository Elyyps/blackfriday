import React, { useState, useEffect } from "react";
import styles from "./featured-categories-component.module.scss";
import { ArrowPanel, IArrowPanelProps } from "@app/core";

export interface IFeaturedCategoriesProps {
  categoryItems: IArrowPanelProps[];
}

const FeaturedCategories = (props: IFeaturedCategoriesProps) => {
  const [itemList, setItemList] = useState<IArrowPanelProps[]>([]);

  useEffect(() => {
    setItemList([...props.categoryItems]);
  }, []);

  return (
    <div className={styles["featured-categories"]}>
      <div className="uk-container">
        <div className={styles["wrapper"]}>
          {itemList &&
            itemList.map((item: IArrowPanelProps, index: number) => (
              <div key={index}>
                <ArrowPanel {...item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { FeaturedCategories };
