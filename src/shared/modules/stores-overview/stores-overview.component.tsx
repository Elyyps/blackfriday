import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { getShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";
import { useEffect, useState } from "react";
import { BannerComponent } from "@app/prep/modules-prep/banner";
import { Banner } from "@app/prep/pages-prep/winkleoverview/dummy-data";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    props.setShopCards(getShopsOverviewData());
  }, []);

  useEffect(() => {
    props.getShopCards(selectedStatus, selectedCategories, selectedBrands, "");
  }, [selectedStatus]);

  const applyOrderByFilter = (id: string) => {
    props.getShopCards(selectedStatus, selectedCategories, selectedBrands, id);
  };

  const applyFilters = () => {
    props.getShopCards(selectedStatus, selectedCategories, selectedBrands, "");
  };

  return (
    <div className={styles["stores-overview"]}>
      <div className="uk-container">
        <div className={styles["stores-overview__header"]}>
          <FilterBarComponent
            filterBar={props.filterBar}
            onBrandChanged={setSelectedBrands}
            onCategoryChanged={setSelectedCategories}
            onStatusChanged={setSelectedStatus}
            onOrderByChanged={applyOrderByFilter}
            applyFilter={applyFilters}
          />
        </div>
        <div className={styles["stores-overview__body"]}>
          {props.shopCards && (
            <div
              className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m"
              data-uk-margin
            >
              {props.shopCards.slice(0, 20).map((item, key) => (
                <div key={key} className={styles["stores-overview__body__cards"]}>
                  <ShopCardComponent
                    title={item.title}
                    url={item.button.url}
                    seeMoreText={item.seeMore.title}
                    image={item.picture}
                    content={item.content}
                    button_text={item.button.title}
                    range={item.timeLeftBar.value}
                    sub_title={item.timeLeftBar.text}
                  />

                  <br />
                </div>
              ))}
              {props.shopCards.length > 20 && <BannerComponent {...Banner} />}

              {props.shopCards.slice(20, 50).map((item, key) => (
                <div key={key} className={styles["stores-overview__body__cards"]}>
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
          )}
          <div>{props.shopCards.length === 0 && <h1>Empty</h1>}</div>
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
