import React, { useEffect } from "react";
import { StoreOverviewModule } from "@app/api/modules/store-overview-new/store-overview.module";
import { FilterBarContainer } from "@app/core/filter-bar-new";
import { StoreOverviewContainerProps } from "../containers/store-overview.container";

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

  return (
    <div>
      <div>Stores overview</div>
      <div>
        <FilterBarContainer />
      </div>
    </div>
  );
};

export { StoreOverview };
