import React, { useEffect, useState } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";

import { StoreOverviewModule } from "@app/api/modules/store-overview/store-overview.module";
import { FilterBarContainer } from "@app/core/filter-bar-new";
import { ShopCardComponent } from "@app/core/shop-card";
import { BannerComponent } from "@app/core/banner";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

import { StoreOverviewContainerProps } from "../containers/store-overview.container";
import styles from "./store-overview-component.module.scss";

export interface IStoreOverviewComponentProps {
  storeOverviewModule: StoreOverviewModule;
}

const TAKE = 25;
const SHOW_AD_EVERY = 20;

const StoreOverview = (props: IStoreOverviewComponentProps & StoreOverviewContainerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setInitialValues(props);
  }, []);

  useEffect(() => {
    props.getStores(0, TAKE, props.statusFilterItems, props.categoryFilterItems, props.brandFilterItems, props.sortBy);
  }, [props.brandFilterItems, props.categoryFilterItems, props.statusFilterItems, props.sortBy]);

  const bottomPageCallback = async () => {
    if (props.stores.length < props.storeOverviewModule.totalAmountOfStores && !isLoading) {
      setIsLoading(true);
      // Use timer for dummy purposes when loading data
      setTimeout(() => {
        props.getStores(
          props.stores.length,
          TAKE,
          props.statusFilterItems,
          props.categoryFilterItems,
          props.brandFilterItems,
          props.sortBy
        );
        setIsLoading(false);
      }, 2000);
    }
  };

  const spinnerOverride = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const ClipLoaderSize = 30;

  return (
    <div>
      <FilterBarContainer totalAmountOfStores={props.storeOverviewModule.totalAmountOfStores} />
      <div className={styles["store-overview"]}>
        {props.stores && (
          // <div className="uk-grid-posts uk-grid uk-grid-small uk-child-width-1-3@s uk-child-width-1-5@m" data-uk-margin>
          <div className={` ${styles["stores-overview__body__list"]}`}>
            {props.stores.map(store => (
              <React.Fragment key={store.id}>
                <div className={styles[`stores-overview__body__cards`]}>
                  <ShopCardComponent store={store} />
                  <br />
                </div>

                {/* {showAd() && (
                    <div style={{ width: "100%" }}>
                      <BannerComponent {...generateDummyBannerComponentData()} alternate={showAlternativeBanner} />
                      <br />
                    </div>
                  )} */}
              </React.Fragment>
            ))}
            <i aria-hidden={true} />
            <i aria-hidden={true} />
            <i aria-hidden={true} />
            <i aria-hidden={true} />

            <BottomScrollListener onBottom={bottomPageCallback} offset={150} />
          </div>
        )}

        <div style={{ width: "50px", margin: "auto", paddingTop: "30px" }}>
          <ClipLoader css={spinnerOverride} sizeUnit={"px"} size={ClipLoaderSize} color={"red"} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

const setInitialValues = (props: IStoreOverviewComponentProps & StoreOverviewContainerProps) => {
  if (props.brandFilterItems.length === 0) {
    props.setBrandFilters(props.storeOverviewModule.brandFilterItems);
  }
  if (props.categoryFilterItems.length === 0) {
    props.setCategoryFilters(props.storeOverviewModule.categoryFilterItems);
  }
  if (props.statusFilterItems.length === 0) {
    props.setStatusFilters(props.storeOverviewModule.statusFilterItems);
  }
  if (!props.sortBy) {
    props.setSortBy(props.storeOverviewModule.sortBy);
  }
};

let currentIndexBeforeAd = 0;
let showAlternativeBanner = false;
let counter = 0;
const showAd = () => {
  counter += 1;

  if (currentIndexBeforeAd === SHOW_AD_EVERY - 1) {
    currentIndexBeforeAd = 0;
    showAlternativeBanner = !showAlternativeBanner;

    return true;
  }
  currentIndexBeforeAd += 1;

  return false;
};

export { StoreOverview };
