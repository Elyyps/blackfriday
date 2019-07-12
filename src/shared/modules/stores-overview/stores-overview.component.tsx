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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const bottomPageCallback = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // if (!isLoading) {
      //   setIsLoading(true);
      //   setTimeout(() => {
      //     setIsLoading(false);
      //     console.log("loaded");
      //   }, 3000);
      // }
      console.log("you're at the bottom of the page");
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
    }
  };
  useEffect(() => {
    props.setShopCards(getShopsOverviewData());
    window.addEventListener("scroll", bottomPageCallback);
  }, []);

  useEffect(() => {
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
  }, [selectedStatus]);

  const applyOrderByFilter = (id: string) => {
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, id);
  };

  const applyFilters = () => {
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
  };
  // const loadMoreData = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  useEffect(() => {
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
    console.log(currentPage + " hellllloooo");
  }, [currentPage]);

  return (
    <div className={styles["stores-overview"]}>
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          color: "white",
          zIndex: 100,
          backgroundColor: "red",
          fontSize: 15
        }}
      >
        {isLoading ? "Loading" : "Not Loading"}
      </div>
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
          <div className="uk-container">
            {props.shopCards && (
              <div
                className="uk-grid-posts uk-grid uk-grid-small  uk-child-width-1-3@s uk-child-width-1-5@m"
                data-uk-margin
              >
                {props.shopCards.slice(0, 15).map((item, key) => (
                  <div key={key}>
                    <ShopCardComponent
                      title={item.title}
                      buttonLink={item.button.url}
                      seeMoreText={item.seeMore.title}
                      seeMoreLink={item.seeMore.url}
                      image={item.picture}
                      content={item.content}
                      buttonText={item.button.title}
                      range={item.timeLeftBar.value}
                      subtitle={item.timeLeftBar.text}
                    />

                    <br />
                  </div>
                ))}

                {props.shopCards.length > 20 && <BannerComponent {...Banner} />}

                {props.shopCards.slice(15, 100).map((item, key) => (
                  <div key={key} className={styles["stores-overview__body__cards"]}>
                    <ShopCardComponent
                      title={item.title}
                      buttonLink={item.button.url}
                      seeMoreText={item.seeMore.title}
                      seeMoreLink={item.seeMore.url}
                      image={item.picture}
                      content={item.content}
                      buttonText={item.button.title}
                      range={item.timeLeftBar.value}
                      subtitle={item.timeLeftBar.text}
                    />
                  </div>
                ))}
              </div>
            )}
            <div>{props.shopCards.length === 0 && <h1>Empty</h1>}</div>
            <div>{isLoading && <h1>Loading</h1>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
