import React, { useEffect, useState, useRef } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";

import { StoreOverviewModule } from "@app/api/modules/store-overview/store-overview.module";
import { FilterBarContainer } from "@app/core/filter-bar";
import { ShopCardComponent } from "@app/core/shop-card";
import { SyncLoader } from "react-spinners";
import { css } from "@emotion/core";

import { StoreOverviewContainerProps } from "../containers/store-overview.container";
import styles from "./store-overview-component.module.scss";
import { Store } from "@app/api/core/store/store";
import { BannerComponent } from "@app/core/banner";
import { generateDummyBannerComponentData } from "@app/api/core/banner/generate-dummy-data";
import { Banner } from "@app/api/core/banner/banner";
import { ViewType } from "@app/stores/settings";
import { TabContainerComponent, TabComponent } from "@app/prep/modules-prep/core";
import { PageProgressBarComponent } from "@app/core/page-progress-bar";
import { StickyContainer, Sticky } from "react-sticky";
import { getOffset, usePrevious } from "@app/util";
import { injectIntl, InjectedIntlProps } from "react-intl";
import { CtaSmallComponent } from "@app/core/cta-small/cta-small.component";
import { FilterItem } from "@app/api/core/filter/filter-item";
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

const component = (props: IStoreOverviewComponentProps & StoreOverviewContainerProps & InjectedIntlProps) => {
  const topDivRef = useRef<any>(null);
  const mainDivRef = useRef<any>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progressPage, setProgressPage] = useState<number>(1);
  const [overviewItems, setOverviewItems] = useState<IOverviewItem[]>([]);
  const [totalHeight, setTotalHeight] = useState<number>(0);

  const viewType = props.screenSize ? props.screenSize.viewType : ViewType.Desktop;

  useEffect(() => {
    setInitialValues(props);
  }, []);

  useEffect(() => {
    const height = getTotalHeight(viewType, props.totalResults);
    if (height > 0) {
      setTotalHeight(height);
    }
  }, [props.screenSize, props.totalResults]);

  useEffect(() => {
    if (
      filtersAreDifferent() ||
      allFiltersAndStoresAreEmpty(
        [props.statusFilterItems, props.categoryFilterItems, props.brandFilterItems],
        props.stores
      )
    ) {
      props.getStores(
        0,
        TAKE,
        props.statusFilterItems,
        props.categoryFilterItems,
        props.brandFilterItems,
        props.sortBy
      );
    }
  }, [props.brandFilterItems, props.categoryFilterItems, props.statusFilterItems, props.sortBy]);

  useEffect(() => {
    const overviewItemsResult = getOverviewItems(viewType, props.stores);
    setOverviewItems(overviewItemsResult);
  }, [props.stores, props.screenSize]);

  const bottomPageCallback = async () => {
    if (props.stores.length < props.totalResults && !isLoading) {
      setIsLoading(true);
      setProgressPage(progressPage + 1);
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
      }, 500);
    }
  };
  const connectClass = "uk-switcher-list";
  const switcherAttr = { "data-uk-switcher": `connect: .${connectClass}` };

  const filtersChanged = () => {
    const actualScrollPosition = getActualScrollPosition();
    if (mainDivRef && mainDivRef.current && actualScrollPosition > 0) {
      const top = getOffset(mainDivRef.current);
      window.scroll(top, top);
    }
  };

  const getActualScrollPosition = () => {
    const position = getOffset(mainDivRef.current);
    const currentScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    const actualScrollPosition = currentScrollPosition - position;

    return actualScrollPosition;
  };

  const prevStatusFilterItems = usePrevious(props.statusFilterItems);
  const prevCategoryFilterItems = usePrevious(props.categoryFilterItems);
  const prevBrandFilterItems = usePrevious(props.brandFilterItems);
  const prevSortBy = usePrevious(props.sortBy);
  const filtersAreDifferent = (): boolean => {
    const statusFiltersAreDifferent = singleFiltersAreDifferent(prevStatusFilterItems || [], props.statusFilterItems);
    const categoryFiltersAreDifferent = singleFiltersAreDifferent(
      prevCategoryFilterItems || [],
      props.categoryFilterItems
    );
    const brandFiltersAreDifferent = singleFiltersAreDifferent(prevBrandFilterItems || [], props.brandFilterItems);
    const sortByIsDifferent = prevSortBy !== props.sortBy;

    return statusFiltersAreDifferent || categoryFiltersAreDifferent || brandFiltersAreDifferent || sortByIsDifferent;
  };

  return (
    <div>
      <div className="deals-overview__tab" ref={topDivRef}>
        <TabContainerComponent attribute={switcherAttr} classTabList={"uk-tab__list"}>
          <TabComponent attrAction={"link"}>{props.intl.formatMessage({ id: "tab-winkels" })}</TabComponent>
          <TabComponent attrAction={"link"}>{props.intl.formatMessage({ id: "tab-productdeals" })}</TabComponent>
        </TabContainerComponent>
      </div>

      <StickyContainer>
        <div ref={mainDivRef}>
          <Sticky>
            {({ style, isSticky }) => (
              <div style={{ ...style, transform: "none" }} className={styles["filter-mobile-bar"]}>
                <FilterBarContainer filtersChanged={filtersChanged} />
                {isSticky && <PageProgressBarComponent totalHeight={totalHeight} mainDivRef={mainDivRef} />}
              </div>
            )}
          </Sticky>
        </div>

        <div className={styles["store-overview"]}>
          <div className="uk-container">
            <div className={styles["no-black-friday"]}>
              <h2>{props.intl.formatMessage({ id: "store-overview-message" })}</h2>
            </div>

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
                <BottomScrollListener onBottom={bottomPageCallback} offset={700} />
              </div>
            ) : (
              <div>
                <CtaSmallComponent
                  buttonTitle={props.intl.formatMessage({ id: "filter-bar-clear-filters" })}
                  onClick={() => props.clearAllFilters()}
                  text={props.intl.formatMessage({ id: "store-overview-no-results-with-filters" })}
                  icon={props.storeOverviewModule.emptyStateIcon}
                />
              </div>
            )}

            <div className={styles["loading-spinner"]}>
              <SyncLoader
                css={spinnerOverride}
                sizeUnit={"px"}
                size={ClipLoaderSize}
                color={"#e10a14"}
                loading={isLoading}
              />
            </div>
          </div>
        </div>
      </StickyContainer>
    </div>
  );
};

const spinnerOverride = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const ClipLoaderSize = 6;

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

export const getTotalHeight = (viewType: ViewType, totalStores: number) => {
  const lineHeight = getLineHeight(viewType);
  const storesPerLine = getAmountOfItemsPerLine(viewType);
  const totalNumberOfLines = getTotalNumberOfLines(storesPerLine, totalStores);

  return lineHeight * totalNumberOfLines;
};

const getLineHeight = (viewType: ViewType): number => {
  switch (viewType) {
    case ViewType.Tablet:
    case ViewType.Mobile:
    case ViewType.MobileBig:
      return 205;
    default:
      return 300;
  }
};

const getAmountOfItemsPerLine = (viewType: ViewType): number => {
  switch (viewType) {
    case ViewType.DesktopFull:
      return 5;
    case ViewType.DesktopLarge:
      return 4;
    case ViewType.Desktop:
      return 3;
    default:
      return 1;
  }
};

const getTotalNumberOfLines = (storesPerLine: number, totalStores: number) => {
  let result = totalStores / storesPerLine;
  result = Math.ceil(result);

  return result;
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
        advert:
          stores.length < showAdEvery && storeIndex === stores.length
            ? { ...generateDummyBannerComponentData(), showAlternativeBanner }
            : undefined,
        store
      });
      storeIndex += 1;
    }
  });

  return overviewItemsResult;
};
const StoreOverview = injectIntl(component);

const allFiltersAndStoresAreEmpty = (allFilterItems: FilterItem[][], stores: Store[]) => {
  const totalSelecteditems = allFilterItems.reduce(
    (count, filterItems) => count + filterItems.filter(item => item.isSelected).length,
    0
  );

  if (totalSelecteditems > 0) {
    return false;
  }

  if (stores.length === 0) {
    return true;
  }

  return false;
};

const singleFiltersAreDifferent = (oldFilters: FilterItem[], newFilters: FilterItem[]) => {
  for (let i = 0; i < newFilters.length; i += 1) {
    if (!oldFilters[i]) {
      return false;
    }
    if (oldFilters[i].isSelected !== newFilters[i].isSelected) {
      return true;
    }
  }

  return false;
};

export { StoreOverview };
