import * as React from "react";
import styles from "./stores-overview-component.module.scss";
import { FilterBarComponent } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { StoresOverviewContainerProps } from "./container/stores-overview.container";
import { generateShopsOverviewData } from "@app/api/modules/stores-overview/endpoints";
import BottomScrollListener from "react-bottom-scroll-listener";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import { BannerComponent } from "@app/core/banner";
import { generateDummyBannerModule } from "@app/api/modules/banner/generate-dummy-data";

export interface IStoresOverviewComponentProps {}

const StoresOverviewComponent = (props: IStoresOverviewComponentProps & StoresOverviewContainerProps) => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const TAKE = 15;
  let currentNumberOfItems = 0;
  const ClipLoaderSize = 30;
  const ClipLoaderTimer = 2000;

  const bottomPageCallback = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, ClipLoaderTimer);
      const newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
    }
  };
  React.useEffect(() => {
    props.setShopCards(generateShopsOverviewData());
  }, []);

  React.useEffect(() => {
    setCurrentPage(0);

    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
  }, [selectedStatus]);

  const applyOrderByFilter = (id: string) => {
    setCurrentPage(0);
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, id);
  };

  const applyFilters = () => {
    setCurrentPage(0);
    props.getShopCards(props.shopCards, currentPage, selectedStatus, selectedCategories, selectedBrands, "");
  };

  React.useEffect(() => {
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
            <div className={styles["stores-overview__body__list"]}>
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
                        <BannerComponent bannerModule={generateDummyBannerModule()} />
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
            {props.shopCards.length >= TAKE && props.shopCards.length < props.totalCards && (
              <ClipLoader css={override} sizeUnit={"px"} size={ClipLoaderSize} color={"red"} loading={isLoading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { StoresOverviewComponent };
