import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { getShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";
import { useEffect, useState } from "react";
import { BannerComponent } from "@app/prep/modules-prep/banner";
import { Banner } from "@app/prep/pages-prep/winkleoverview/dummy-data";
import InfiniteScroll from "react-infinite-scroll-component";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    props.setShopCards(getShopsOverviewData());
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
  const loadMoreData = () => {
    setCurrentPage(currentPage + 1);
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
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
          <div className="uk-container">
            {props.shopCards && (
              // <InfiniteScroll
              //   dataLength={props.totalCards} // This is important field to render the next data
              //   next={loadMoreData}
              //   hasMore={true}
              //   loader={<h4>Loading...</h4>}
              //   endMessage={
              //     <p style={{ textAlign: "center" }}>
              //       <b>Yay! You have seen it all</b>
              //     </p>}
              // >
              <div
                className="uk-grid-posts uk-grid uk-grid-small  uk-child-width-1-3@s uk-child-width-1-5@m"
                data-uk-margin
              >
                {props.shopCards.map((item, key) => (
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

                {/* {props.shopCards.length > 20 && <BannerComponent {...Banner} />}

                  {props.shopCards.slice(15, 50).map((item, key) => (
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
                  ))} */}
              </div>
              // </InfiniteScroll>
            )}
            <div>{props.shopCards.length === 0 && <h1>Empty</h1>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
