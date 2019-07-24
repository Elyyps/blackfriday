import React, { useState } from "react";
import styles from "./featured-categories-component.module.scss";
import { ArrowPanel, IArrowPanelProps } from "@app/core";
import { FeaturedCategoriesContainerProps } from "./container/featured-categories.container";
import { ClickableComponent } from "@app/core/clickable";
import ChevronDown from "@assets/icons/chevron-down.svg";

export interface IFeaturedCategoriesProps {
  categoryItems: IArrowPanelProps[];
}

const ITEMS_TO_SHOW_ON_MOBILE = 4;

const FeaturedCategories = (props: IFeaturedCategoriesProps & FeaturedCategoriesContainerProps) => {
  const [itemsToShow, setItemsToShow] = useState(ITEMS_TO_SHOW_ON_MOBILE);

  return (
    <div className={styles["featured-categories"]}>
      <div className="uk-container">
        <div className={styles["wrapper"]}>
          {props.categoryItems &&
            props.categoryItems.map((item: IArrowPanelProps, index: number) => {
              if (props.isMobile) {
                return (
                  index < itemsToShow && (
                    <div key={index}>
                      <ArrowPanel {...item} />
                    </div>
                  )
                );
              }

              return (
                <div key={index}>
                  <ArrowPanel {...item} />
                </div>
              );
            })}
        </div>
        {props.isMobile && (
          <div
            className={`${styles["show-button"]} ${
              itemsToShow > ITEMS_TO_SHOW_ON_MOBILE ? styles["less"] : styles["more"]
            }`}
          >
            <ClickableComponent
              onClick={() =>
                itemsToShow > ITEMS_TO_SHOW_ON_MOBILE
                  ? setItemsToShow(ITEMS_TO_SHOW_ON_MOBILE)
                  : setItemsToShow(props.categoryItems.length)
              }
              title={itemsToShow > ITEMS_TO_SHOW_ON_MOBILE ? "Toon minder" : "Toon meer"}
              variant="link-primary"
              iconPosition="right"
              icon={ChevronDown}
              iconStyle="outline"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// const useMobileStatus = (isMobile: boolean) => {
//   if (isMobile) {
//     return [...categoryItems].slice(0, itemsToShowOnMobile);
//   }
//   return [...categoryItems];
// };

export { FeaturedCategories };
