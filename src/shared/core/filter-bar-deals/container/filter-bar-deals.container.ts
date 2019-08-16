import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IFilterBarDealsProps, FilterBarDeals } from "@app/core/filter-bar-deals";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { dealOverviewActions } from "@app/stores/deal-overview";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  screenSize: IScreenSize | undefined;
  sortBy: string;
  storeFilterItems: FilterItem[];
  totalResults: number;
}
interface IDispatchProps {
  clearFilters: () => void;
  setBrandFilters: (filterItems: FilterItem[]) => void;
  setCategoryFilters: (filterItems: FilterItem[]) => void;
  setSortBy: (sortBy: string) => void;
  setStoreFilters: (filterItems: FilterItem[]) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IFilterBarDealsProps, IAppState> = state => {
  const { brandFilterItems, categoryFilterItems, sortBy, storeFilterItems, totalResults } = state.dealOverview;
  const { screenSize } = state.settings;

  return {
    brandFilterItems,
    categoryFilterItems,
    sortBy,
    storeFilterItems,
    totalResults,
    screenSize
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IFilterBarDealsProps> = dispatch => ({
  clearFilters: () => dispatch(dealOverviewActions.clearAllFilters()),
  setBrandFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setBrandFilters({ filterItems })),
  setCategoryFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setCategoryFilters({ filterItems })),
  setSortBy: (sortBy: string) => dispatch(dealOverviewActions.setSortBy({ sortBy })),
  setStoreFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setStoreFilters({ filterItems }))
});

export type FilterBarDealsContainerProps = IStateProps & IDispatchProps;
export const FilterBarDealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBarDeals);
