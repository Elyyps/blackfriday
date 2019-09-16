import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IDealOverviewComponentProps, DealOverview } from "@app/modules/deal-overview";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { dealOverviewActions } from "@app/stores/deal-overview";
import { Deal } from "@app/api/core/deal/deal";
import { dealOverviewThunks } from "@app/middleware/thunk/deal-overview.thunk";
import { IScreenSize } from "@app/stores/settings";

interface IStateProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  deals: Deal[];
  screenSize: IScreenSize | undefined;
  sortBy: string;
  storeFilterItems: FilterItem[];
  totalResults: number;
}

interface IDispatchProps {
  clearAllFilters: () => void;
  getDeals: (
    skip: number,
    take: number,
    storeFilters: FilterItem[],
    categoryFilters: FilterItem[],
    brandFilters: FilterItem[],
    sortBy?: string
  ) => void;
  setBrandFilters: (filterItems: FilterItem[]) => void;
  setCategoryFilters: (filterItems: FilterItem[]) => void;
  setSortBy: (sortBy: string) => void;
  setStoreFilters: (filterItems: FilterItem[]) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IDealOverviewComponentProps, IAppState> = state => {
  const { brandFilterItems, categoryFilterItems, sortBy, storeFilterItems, deals, totalResults } = state.dealOverview;

  const { screenSize } = state.settings;

  return {
    brandFilterItems,
    categoryFilterItems,
    screenSize,
    sortBy,
    storeFilterItems,
    deals,
    totalResults
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IDealOverviewComponentProps> = dispatch => ({
  getDeals: (
    skip: number,
    take: number,
    storeFilters: FilterItem[],
    categoryFilters: FilterItem[],
    brandFilters: FilterItem[],
    sortBy?: string
  ) => dispatch(dealOverviewThunks.getStores(skip, take, storeFilters, categoryFilters, brandFilters, sortBy)),
  setBrandFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setBrandFilters({ filterItems })),
  setCategoryFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setCategoryFilters({ filterItems })),
  setSortBy: (sortBy: string) => dispatch(dealOverviewActions.setSortBy({ sortBy })),
  setStoreFilters: (filterItems: FilterItem[]) => dispatch(dealOverviewActions.setStoreFilters({ filterItems })),
  clearAllFilters: () => dispatch(dealOverviewActions.clearAllFilters())
});

export type DealOverviewContainerProps = IStateProps & IDispatchProps;
export const DealOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DealOverview);
