import React, { useEffect, useState } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";

import { StoreOverviewModule } from "@app/api/modules/store-overview/store-overview.module";
import { FilterBarContainer } from "@app/core/filter-bar-new";
import { ShopCardComponent } from "@app/core/shop-card";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

import { StoreOverviewContainerProps } from "../containers/store-overview.container";
import styles from "./store-overview-component.module.scss";
import { Store } from "@app/api/core/store/store";
import { BannerComponent } from "@app/core/banner";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";
import { Banner } from "@app/api/core/banner/banner";

export interface IStoreOverviewComponentProps {
  storeOverviewModule: StoreOverviewModule;
}

export interface IOverviewItem {
  advert: Banner | undefined;
  store: Store;
}

const TAKE = 25;
const SHOW_AD_EVERY = 10;

const StoreOverview = (props: IStoreOverviewComponentProps & StoreOverviewContainerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [overviewItems, setOverviewItems] = useState<IOverviewItem[]>([]);

  useEffect(() => {
    setInitialValues(props);
  }, []);

  useEffect(() => {
    props.getStores(0, TAKE, props.statusFilterItems, props.categoryFilterItems, props.brandFilterItems, props.sortBy);
  }, [props.brandFilterItems, props.categoryFilterItems, props.statusFilterItems, props.sortBy]);

  useEffect(() => {
    const overviewItemsResult: IOverviewItem[] = [];
    let storeIndex = 1;
    let showAlternativeBanner = false;
    props.stores.forEach(store => {
      if (storeIndex === SHOW_AD_EVERY) {
        overviewItemsResult.push({
          advert: { ...generateDummyBannerComponentData(), showAlternativeBanner },
          store
        });
        storeIndex = 1;
        showAlternativeBanner = !showAlternativeBanner;
      } else {
        overviewItemsResult.push({
          advert: undefined,
          store
        });
        storeIndex += 1;
      }
    });
    setOverviewItems(overviewItemsResult);
  }, [props.stores]);

  const bottomPageCallback = async () => {
    if (props.stores.length < props.totalResults && !isLoading) {
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

  console.log(overviewItems);

  return (
    <div>
      <FilterBarContainer />
      <div className={styles["store-overview"]}>
        {props.stores && (
          <div className={styles["stores-overview__body__list"]}>
            {overviewItems.map(overviewItem => {
              const { store, advert } = overviewItem;

              return (
                <React.Fragment key={store.id}>
                  <div className={`${styles[`stores-overview__body__cards`]} ${styles["ciao"]}`}>
                    <ShopCardComponent store={store} />
                  </div>
                  {/* {advert && (
                    <div className={styles["ciao"]}>
                      <BannerComponent {...advert} />
                      <br />
                    </div>
                  )} */}
                </React.Fragment>
              );
            })}
            <i aria-hidden={true} className={styles["ciao"]} />
            <i aria-hidden={true} className={styles["ciao"]} />
            <i aria-hidden={true} className={styles["ciao"]} />
            <i aria-hidden={true} className={styles["ciao"]} />
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

const spinnerOverride = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const ClipLoaderSize = 30;

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

export { StoreOverview };
