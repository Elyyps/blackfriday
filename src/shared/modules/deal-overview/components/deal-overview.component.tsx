import React, { useEffect, useState, useRef } from "react";
import BottomScrollListener from "react-bottom-scroll-listener";

import { DealOverviewModule } from "@app/api/modules/deal-overview/deal-overview.module";
import { FilterBarDealsContainer } from "@app/core/filter-bar-deals";
import { DealCardComponent } from "@app/core/deal-card";
import { SyncLoader } from "react-spinners";
import { css } from "@emotion/core";

import { DealOverviewContainerProps } from "../containers/deal-overview.container";
import styles from "./deal-overview-component.module.scss";
import { Deal } from "@app/api/core/deal/deal";
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

export interface IDealOverviewComponentProps {
  dealOverviewModule: DealOverviewModule;
}

export interface IOverviewItem {
  advert: Banner | undefined;
  deal: Deal;
}

const TAKE = 25;
const SHOW_AD_EVERY_LINES = 4;

const component = (props: IDealOverviewComponentProps & DealOverviewContainerProps & InjectedIntlProps) => {
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
        [props.storeFilterItems, props.categoryFilterItems, props.brandFilterItems],
        props.deals
      )
    ) {
      props.getDeals(0, TAKE, props.storeFilterItems, props.categoryFilterItems, props.brandFilterItems, props.sortBy);
    }
  }, [props.brandFilterItems, props.categoryFilterItems, props.storeFilterItems, props.sortBy]);

  useEffect(() => {
    const overviewItemsResult = getOverviewItems(viewType, props.deals);
    setOverviewItems(overviewItemsResult);
  }, [props.deals, props.screenSize]);

  const bottomPageCallback = async () => {
    if (props.deals.length < props.totalResults && !isLoading) {
      setIsLoading(true);
      setProgressPage(progressPage + 1);
      setTimeout(() => {
        props.getDeals(
          props.deals.length,
          TAKE,
          props.storeFilterItems,
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

  const prevStoreFilterItems = usePrevious(props.storeFilterItems);
  const prevCategoryFilterItems = usePrevious(props.categoryFilterItems);
  const prevBrandFilterItems = usePrevious(props.brandFilterItems);
  const filtersAreDifferent = (): boolean => {
    const storeFiltersAreDifferent = singleFiltersAreDifferent(prevStoreFilterItems || [], props.storeFilterItems);
    const categoryFiltersAreDifferent = singleFiltersAreDifferent(
      prevCategoryFilterItems || [],
      props.categoryFilterItems
    );
    const brandFiltersAreDifferent = singleFiltersAreDifferent(prevBrandFilterItems || [], props.brandFilterItems);

    return storeFiltersAreDifferent || categoryFiltersAreDifferent || brandFiltersAreDifferent;
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
                <FilterBarDealsContainer filtersChanged={filtersChanged} />
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

            {props.deals && props.deals.length > 0 ? (
              <div className={styles["stores-overview__body__list"]}>
                {overviewItems.map(overviewItem => {
                  const { deal, advert } = overviewItem;

                  return (
                    <React.Fragment key={deal.id}>
                      <div className={`${styles[`stores-overview__body__cards`]} `}>
                        <DealCardComponent deal={deal} />
                      </div>

                      {advert && (
                        <div>
                          <div className={`${styles[`stores-overview__body__banner`]} `}>
                            <BannerComponent {...advert} />
                          </div>
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
                <CtaSmallComponent
                  buttonTitle={props.intl.formatMessage({ id: "filter-bar-clear-filters" })}
                  onClick={() => props.clearAllFilters()}
                  text={props.intl.formatMessage({ id: "store-overview-no-results-with-filters" })}
                  icon={props.dealOverviewModule.emptyStateIcon}
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

const setInitialValues = (props: IDealOverviewComponentProps & DealOverviewContainerProps) => {
  if (props.brandFilterItems.length === 0) {
    props.setBrandFilters(props.dealOverviewModule.brandFilterItems);
  }
  if (props.categoryFilterItems.length === 0) {
    props.setCategoryFilters(props.dealOverviewModule.categoryFilterItems);
  }
  if (props.storeFilterItems.length === 0) {
    props.setStoreFilters(props.dealOverviewModule.storeFilterItems);
  }
  if (!props.sortBy) {
    props.setSortBy(props.dealOverviewModule.sortBy);
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
      return 168;
    default:
      return 288;
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

const getOverviewItems = (viewType: ViewType, deals: Deal[]): IOverviewItem[] => {
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

  let dealIndex = 1;
  let showAlternativeBanner = false;
  deals.forEach(deal => {
    if (dealIndex === showAdEvery) {
      overviewItemsResult.push({
        advert: { ...generateDummyBannerComponentData(), showAlternativeBanner },
        deal
      });
      dealIndex = 1;
      showAlternativeBanner = !showAlternativeBanner;
    } else {
      overviewItemsResult.push({
        advert:
          deals.length < showAdEvery && dealIndex === deals.length
            ? { ...generateDummyBannerComponentData(), showAlternativeBanner }
            : undefined,
        deal
      });
      dealIndex += 1;
    }
  });

  return overviewItemsResult;
};
const DealOverview = injectIntl(component);

const allFiltersAndStoresAreEmpty = (allFilterItems: FilterItem[][], deals: Deal[]) => {
  const totalSelecteditems = allFilterItems.reduce(
    (count, filterItems) => count + filterItems.filter(item => item.isSelected).length,
    0
  );

  if (totalSelecteditems > 0) {
    return false;
  }

  if (deals.length === 0) {
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

export { DealOverview };
