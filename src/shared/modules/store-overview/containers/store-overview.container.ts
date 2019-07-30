import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IStoreOverviewComponentProps, StoreOverview } from "@app/modules/store-overview";
import { IAppState } from "@app/stores";
import { FilterItem } from "@app/api/core/filter/filter-item";
import { storeOverviewActions } from "@app/stores/store-overview";
import { ShopCard } from "@app/api/core/shop-card/shop-card";

interface IStateProps {
  brandFilterItems: FilterItem[];
  categoryFilterItems: FilterItem[];
  sortBy: string;
  statusFilterItems: FilterItem[];
  shopCards: ShopCard[];
}
interface IDispatchProps {
  setBrandFilters: (filterItems: FilterItem[]) => void;
  setCategoryFilters: (filterItems: FilterItem[]) => void;
  setSortBy: (sortBy: string) => void;
  setStatusFilters: (filterItems: FilterItem[]) => void;
  setShopCards: (shopCards: ShopCard[]) => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IStoreOverviewComponentProps, IAppState> = state => {
  const { brandFilterItems, categoryFilterItems, sortBy, statusFilterItems, shopCards } = state.storeOverview;

  return {
    brandFilterItems,
    categoryFilterItems,
    sortBy,
    statusFilterItems,
    shopCards
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IStoreOverviewComponentProps> = dispatch => ({
  setBrandFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setBrandFilters({ filterItems })),
  setCategoryFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setCategoryFilters({ filterItems })),
  setSortBy: (sortBy: string) => dispatch(storeOverviewActions.setSortBy({ sortBy })),
  setStatusFilters: (filterItems: FilterItem[]) => dispatch(storeOverviewActions.setStatusFilters({ filterItems })),
  setShopCards: (shopCards: ShopCard[]) => dispatch(storeOverviewActions.setShopCards({ shopCards }))
});

export type StoreOverviewContainerProps = IStateProps & IDispatchProps;
export const StoreOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreOverview);
