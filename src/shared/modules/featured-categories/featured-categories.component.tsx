import React, { useState } from "react";
import styles from "./featured-categories-component.module.scss";
import { ArrowPanel, IArrowPanelProps } from "@app/core";
import { FeaturedCategoriesContainerProps } from "./container/featured-categories.container";
import { FeaturedCategoriesModule } from "@app/api/modules/featured-categories/featured-categories.module";
import { ClickableComponent } from "@app/core/clickable";
import ChevronDown from "@assets/icons/chevron-down.svg";
import { breakPointMobileBig } from "@app/util/detect-view";

export interface IFeaturedCategoriesProps {
  featuredCategoriesModule: FeaturedCategoriesModule;
}

const ITEMS_TO_SHOW_ON_MOBILE = 4;

const FeaturedCategories = (props: IFeaturedCategoriesProps & FeaturedCategoriesContainerProps) => {
  const [itemsToShow, setItemsToShow] = useState(ITEMS_TO_SHOW_ON_MOBILE);
  const { categoryItems } = props.featuredCategoriesModule;

  return (
    <div className={styles["featured-categories"]}>
      <div className="uk-container">
        <div
          // className={`uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l ${styles["wrapper"]}`}
          className={`${styles["wrapper"]}`}
        >
          {categoryItems &&
            categoryItems.map((item: IArrowPanelProps, index: number) => {
              if (props.screenSize && props.screenSize.breakpointPixels <= breakPointMobileBig) {
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
        {props.screenSize && props.screenSize.breakpointPixels <= breakPointMobileBig && (
          <div
            className={`${styles["show-button"]} ${
              itemsToShow > ITEMS_TO_SHOW_ON_MOBILE ? styles["less"] : styles["more"]
            }`}
          >
            <ClickableComponent
              onClick={() =>
                itemsToShow > ITEMS_TO_SHOW_ON_MOBILE
                  ? setItemsToShow(ITEMS_TO_SHOW_ON_MOBILE)
                  : setItemsToShow(categoryItems.length)
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

export { FeaturedCategories };
