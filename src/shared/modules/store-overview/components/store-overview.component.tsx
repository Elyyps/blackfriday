import React, { useEffect } from "react";
import { StoreOverviewModule } from "@app/api/modules/store-overview-new/store-overview.module";
import { FilterBarContainer } from "@app/core/filter-bar-new";
import { StoreOverviewContainerProps } from "../containers/store-overview.container";

import styles from "./store-overview-component.module.scss";
import { ShopCardComponent } from "@app/core/shop-card";

export interface IStoreOverviewComponentProps {
  storeOverviewModule: StoreOverviewModule;
}

const StoreOverview = (props: IStoreOverviewComponentProps & StoreOverviewContainerProps) => {
  useEffect(() => {
    setInitialValues();
  }, []);

  const setInitialValues = () => {
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

  useEffect(() => {
    props.getStores(0, 50, props.statusFilterItems, props.categoryFilterItems, props.brandFilterItems, props.sortBy);
  }, [props.brandFilterItems, props.categoryFilterItems, props.statusFilterItems, props.sortBy]);

  return (
    <div>
      <div>
        <FilterBarContainer />
        <div className={styles["store-overview"]}>
          {props.stores && (
            <div className={styles["stores-overview__body__list"]}>
              {props.stores.map(store => {
                return (
                  <div className={styles[`stores-overview__body__cards`]}>
                    <ShopCardComponent store={store} />
                    <br />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { StoreOverview };
