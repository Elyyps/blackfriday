import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { getShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";
import { useEffect, useState } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { bannerProps } from "@app/api/core/banner";
import { BannerModuleComponent } from "../banner-module";
import { TabContainerComponent, TabComponent } from "@app/prep/modules-prep/core";
import { tabItems } from "@app/prep/pages-prep/winkleoverview/dummy-data";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const TAKE = 15;
  let currentNumberOfItems = 0;
  const paddingBottom = "30px";
  const paddingTop = paddingBottom;
  const connectClass = "uk-switcher-list";

  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };
  function bottomPageCallback() {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
    }
  }
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

  useEffect(() => {
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
  }, [currentPage]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

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
      />

      <div className="uk-container">
        <div className={styles["stores-overview__header"]}>
          <div className={styles["stores-overview__tab"]}>
            <TabContainerComponent classTabList={styles["uk-tab__list"]}>
              {tabItems
                ? tabItems.map((item, key) => (
                    <TabComponent attrAction={"link"} key={key}>
                      {item.title}
                    </TabComponent>
                  ))
                : ""}
            </TabContainerComponent>
          </div>
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
              // className="uk-grid-posts uk-grid uk-grid-small  uk-child-width-1-3@s uk-child-width-1-4@s uk-child-width-1-5@m"

              className={styles["stores-overview__body__list"]}
            >
              {props.shopCards.map((item, key) => {
                let showAd = false;
                if (currentNumberOfItems + 1 === TAKE) {
                  showAd = true;
                  currentNumberOfItems = 0;
                } else {
                  currentNumberOfItems += 1;
                }

                return (
                  <React.Fragment key={key}>
                    <div className={styles["stores-overview__body__cards"]}>
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

                    {showAd && (
                      <div style={{ width: "100%" }}>
                        <BannerModuleComponent
                          bgcolor="#eee"
                          paddingBottom={paddingBottom}
                          paddingTop={paddingTop}
                          bannerProps={bannerProps}
                        />
                        <br />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              <BottomScrollListener onBottom={bottomPageCallback} />
            </div>
          )}
          <div>{props.shopCards.length === 0 && <h1>No results for your search</h1>}</div>
          <div style={{ width: "50px", margin: "auto", paddingTop: "30px" }}>
            <ClipLoader css={override} sizeUnit={"px"} size={30} color={"red"} loading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
