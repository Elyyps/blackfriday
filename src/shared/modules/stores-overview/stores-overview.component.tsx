import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { getShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";
import { useEffect, useState } from "react";
import { Checkbox } from "@app/api/core/checkbox";
import { BannerComponent } from "@app/prep/modules-prep/banner";
import { Banner } from "@app/prep/pages-prep/winkleoverview/dummy-data";
import { Link } from "react-router-dom";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [selectedBrand, setSelectedBrand] = useState<Checkbox[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<Checkbox[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Checkbox[]>([]);
  const [orderedBy, setOrderedBy] = useState<string[]>([]);
  const [categoriesChecked, setCategoriesChecked] = useState<number>(0);
  const [brandsChecked, setBrandsChecked] = useState<number>(0);

  useEffect(() => {
    props.setShopCards(getShopsOverviewData());
    setSelectedBrand(getShopsOverviewData().filterBar.brands);
    setSelectedStatus(getShopsOverviewData().filterBar.status);
    setSelectedCategories(getShopsOverviewData().filterBar.categories);
    setOrderedBy(getShopsOverviewData().filterBar.sortBy);
  }, []);

  useEffect(() => {
    applyBrandFilter(selectedBrand);
  }, [selectedBrand]);

  useEffect(() => {
    applyStatusFilter(selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    applyCategoryFilter(selectedCategories);
  }, [selectedCategories]);

  const onBrandSelected = (id: string) => {
    const newSelectedBrands = selectedBrand.map(option => {
      if (option.text.toUpperCase() === id.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });

    setSelectedBrand(newSelectedBrands);
  };
  const onStatusSelected = (id: string) => {
    const newSelectedStatus = selectedStatus.map(option => {
      if (option.text.toUpperCase() === id.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });

    setSelectedStatus(newSelectedStatus);
  };

  const onCategorySelected = (id: string) => {
    const newSelectedCategories = selectedCategories.map(option => {
      if (option.text.toUpperCase() === id.toUpperCase()) {
        option.isChecked = !option.isChecked;
      }

      return option;
    });

    setSelectedCategories(newSelectedCategories);
  };
  const applyOrderByFilter = (id: string) => {
    props.getShopCards([], [], [], id);
  };
  const applyBrandFilter = (checkbox: Checkbox[]) => {
    const list: string[] = [];
    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
      }
    });
    setBrandsChecked(list.length);
    props.getShopCards([], [], list, "");
  };
  const applyStatusFilter = (checkbox: Checkbox[]) => {
    const list: string[] = [];

    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
      }
    });

    props.getShopCards(list, [], [], "");
  };
  const applyCategoryFilter = (checkbox: Checkbox[]) => {
    const list: string[] = [];

    checkbox.forEach(option => {
      if (option.isChecked === true) {
        list.push(option.text.toUpperCase());
      }
    });
    setCategoriesChecked(list.length);
    props.getShopCards([], list, [], "");
  };

  return (
    <div className={styles["stores-overview"]}>
      <div className="uk-container">
        <div className={styles["stores-overview__header"]}>
          <FilterBarComponent
            filterBar={getShopsOverviewData().filterBar}
            onBrandChanged={onBrandSelected}
            onCategoryChanged={onCategorySelected}
            onStatusChanged={onStatusSelected}
            onOrderByChanged={applyOrderByFilter}
            numberOfShops={props.shopCards.length}
            brandsChecked={brandsChecked}
            categoriesChecked={categoriesChecked}
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
                  <Link to="">
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
                  </Link>
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
