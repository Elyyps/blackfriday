import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IFilterBarProps, FilterBar } from "@app/core/filter-bar-new";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { storeOverviewActions } from "@app/stores/store-overview";

interface IStateProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  sortBy: string;
  statusFilterItems: FilterItem[];
}
interface IDispatchProps {
  clearFilters: () => void;
  setBrandFilters: (filterItems: FilterItem[]) => void;
  setCategoryFilters: (filterItems: FilterItem[]) => void;
  setSortBy: (sortBy: string) => void;
  setStatusFilters: (filterItems: FilterItem[]) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IFilterBarProps, IAppState> = state => {
  const { brandFilterItems, categoryFilterItems, sortBy, statusFilterItems } = state.storeOverview;

  return {
    brandFilterItems,
    categoryFilterItems,
    sortBy,
    statusFilterItems
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IFilterBarProps> = dispatch => ({
  clearFilters: () => dispatch(storeOverviewActions.clearAllFilters()),
  setBrandFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setBrandFilters({ filterItems })),
  setCategoryFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setCategoryFilters({ filterItems })),
  setSortBy: (sortBy: string) => dispatch(storeOverviewActions.setSortBy({ sortBy })),
  setStatusFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setStatusFilters({ filterItems }))
});

export type FilterBarContainerProps = IStateProps & IDispatchProps;
export const FilterBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
