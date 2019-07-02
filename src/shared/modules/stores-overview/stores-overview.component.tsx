import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";

import { ShopCard } from "@app/api/core/shop-card";
import { getShopsOverviewCards } from "@app/api/modules/stores-overview/endpoints";
import { generateDummyFilterBar } from "@app/api/core/filter-bar";
import { useEffect } from "react";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [cards, setCards] = React.useState<ShopCard[]>([]);
  const [selectedBrand, setSelectedBrand] = React.useState<string>("");
  const [selectedStatus, setSelectedStatus] = React.useState<string>("");
  const [selectedCategories, setSelectedCategories] = React.useState<string>("A");
  const [orderedBy, setOrderedBy] = React.useState<string>("");
  useEffect(() => {
    const cards = getShopsOverviewCards("", [], [], "");
    // setCards(cards);
  }, []);
  useEffect(() => {
    const cards = getShopsOverviewCards(selectedStatus, [selectedCategories], [selectedBrand], orderedBy);
    setCards(cards);
  }, [selectedBrand]);

  function onBrandSelected() {}

  return (
    <div className={styles["stores-overview"]}>
      <div className="uk-container">
        <div className={styles["stores-overview__header"]}>
          <FilterBarComponent
            filterBar={generateDummyFilterBar()}
            onBrandChange={setSelectedBrand}
            onCategoryChange={setSelectedCategories}
            onStatusChange={setSelectedStatus}
            onOrderByChange={setOrderedBy}
          />
        </div>
        <div className={styles["stores-overview__body"]}>
          {cards &&
            cards.map((item, key) => (
              <div key={key} className={styles["stores-overview__body__cards"]}>
                <h1>{item.category}</h1>
                <ShopCardComponent
                  title={item.title}
                  url={item.button.url}
                  seeMoreText={item.seeMore.title}
                  image={item.picture}
                  content={item.content}
                  button_text={item.button.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
