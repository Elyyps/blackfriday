import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IStoreOverviewComponentProps, StoreOverview } from "@app/modules/store-overview";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { storeOverviewActions } from "@app/stores/store-overview";
import { Store } from "@app/api/core/store/store";
import { storeOverviewThunks } from "@app/middleware/thunk/store-overview.thunk";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  screenSize: IScreenSize | undefined;
  sortBy: string;
  statusFilterItems: FilterItem[];
  stores: Store[];
  totalResults: number;
}
interface IDispatchProps {
  clearAllFilters: () => void;
  getStores: (
    skip: number,
    take: number,
    storeStatusFilter: FilterItem[],
    categoryFilters: FilterItem[],
    brandFilters: FilterItem[],
    sortBy?: string
  ) => void;
  setBrandFilters: (filterItems: FilterItem[]) => void;
  setCategoryFilters: (filterItems: FilterItem[]) => void;
  setSortBy: (sortBy: string) => void;
  setStatusFilters: (filterItems: FilterItem[]) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IStoreOverviewComponentProps, IAppState> = state => {
  const {
    brandFilterItems,
    categoryFilterItems,
    sortBy,
    statusFilterItems,
    stores,
    totalResults
  } = state.storeOverview;

  const { screenSize } = state.settings;

  return {
    brandFilterItems,
    categoryFilterItems,
    screenSize,
    sortBy,
    statusFilterItems,
    stores,
    totalResults
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IStoreOverviewComponentProps> = dispatch => ({
  getStores: (
    skip: number,
    take: number,
    storeStatusFilter: FilterItem[],
    categoryFilters: FilterItem[],
    brandFilters: FilterItem[],
    sortBy?: string
  ) => dispatch(storeOverviewThunks.getStores(skip, take, storeStatusFilter, categoryFilters, brandFilters, sortBy)),
  setBrandFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setBrandFilters({ filterItems })),
  setCategoryFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setCategoryFilters({ filterItems })),
  setSortBy: (sortBy: string) => dispatch(storeOverviewActions.setSortBy({ sortBy })),
  setStatusFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setStatusFilters({ filterItems })),
  clearAllFilters: () => dispatch(storeOverviewActions.clearAllFilters())
});

export type StoreOverviewContainerProps = IStateProps & IDispatchProps;
export const StoreOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreOverview);
