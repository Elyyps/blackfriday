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
import { ViewType } from "@app/stores/settings";
import { TabContainerComponent, TabComponent } from "@app/prep/modules-prep/core";
/* tslint:disable:no-magic-numbers */

export interface IStoreOverviewComponentProps {
  storeOverviewModule: StoreOverviewModule;
}

export interface IOverviewItem {
  advert: Banner | undefined;
  store: Store;
}

const TAKE = 25;
const SHOW_AD_EVERY_LINES = 4;

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
    const viewType = props.screenSize ? props.screenSize.viewType : ViewType.Desktop;
    const overviewItemsResult = getOverviewItems(viewType, props.stores);
    setOverviewItems(overviewItemsResult);
  }, [props.stores, props.screenSize]);

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
      }, 1000);
    }
  };
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };

  return (
    <div>
      <div className="deals-overview__tab">
        <TabContainerComponent attribute={switcherAttr} classTabList={"uk-tab__list"}>
          <TabComponent attrAction={"link"}>Winkels</TabComponent>
          <TabComponent attrAction={"link"}>Productdeals</TabComponent>
        </TabContainerComponent>
      </div>
      <div className={styles["filter-mobile-bar"]}>
        <FilterBarContainer />
      </div>
      <div className={styles["store-overview"]}>
        <div className="uk-container">
          {props.stores && props.stores.length > 0 ? (
            <div className={styles["stores-overview__body__list"]}>
              {overviewItems.map(overviewItem => {
                const { store, advert } = overviewItem;

                return (
                  <React.Fragment key={store.id}>
                    <div className={`${styles[`stores-overview__body__cards`]} `}>
                      <ShopCardComponent store={store} />
                    </div>

                    {advert && (
                      <div className={`${styles[`stores-overview__body__banner`]} `}>
                        <BannerComponent {...advert} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              <i aria-hidden={true} className={styles["stores-overview__body__cards"]} />
              <i aria-hidden={true} className={styles["stores-overview__body__cards"]} />
              <i aria-hidden={true} className={styles["stores-overview__body__cards"]} />
              <i aria-hidden={true} className={styles["stores-overview__body__cards"]} />
              <BottomScrollListener onBottom={bottomPageCallback} offset={500} />
            </div>
          ) : (
            <div>
              <h1>Geen resultaten gevonden</h1>
            </div>
          )}

          <div style={{ width: "50px", margin: "auto", paddingTop: "30px" }}>
            <ClipLoader css={spinnerOverride} sizeUnit={"px"} size={ClipLoaderSize} color={"red"} loading={isLoading} />
          </div>
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

const getOverviewItems = (viewType: ViewType, stores: Store[]): IOverviewItem[] => {
  const overviewItemsResult: IOverviewItem[] = [];
  let showAdEvery = 0;

  switch (viewType) {
    case ViewType.DesktopFull:
      showAdEvery = SHOW_AD_EVERY_LINES * 5;
      break;
    case ViewType.DesktopLarge:
      showAdEvery = SHOW_AD_EVERY_LINES * 4;
      break;
    case ViewType.Desktop:
      showAdEvery = SHOW_AD_EVERY_LINES * 3;
      break;
    case ViewType.Mobile:
    case ViewType.MobileBig:
    case ViewType.Tablet:
      showAdEvery = SHOW_AD_EVERY_LINES * 2;
      break;
    default:
  }

  let storeIndex = 1;
  let showAlternativeBanner = false;
  stores.forEach(store => {
    if (storeIndex === showAdEvery) {
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

  return overviewItemsResult;
};

export { StoreOverview };
